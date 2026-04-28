import {
  openai,
  createAgent,
  createTool,
  createNetwork,
  type Tool,
  type Message,
  createState,
} from "@inngest/agent-kit";
import { inngest } from "./client";
import { Sandbox } from "@e2b/code-interpreter";
import { getSandbox, lastAssistantTextMessageContent } from "./utils";
import { z } from "zod";
import {
  FRAGMENT_TITLE_PROMPT,
  PLAN_PROMPT,
  PROMPT,
  RESPONSE_PROMPT,
  REVIEW_PROMPT,
} from "@/prompt";
import prisma from "@/lib/db";
import { Content } from "next/font/google";
import { SANDBOX_TIMEOUT } from "./types";

interface AgentState {
  summary : string;
  plan: string;
  review: string;
  needsChanges: boolean;
  reviewLoops: number;
  files : { [path : string ]: string;}
}

const DEFAULT_OPENAI_MODEL = "gpt-5.4-mini";
const ALLOWED_OPENAI_MODELS = new Set(["o4-mini", "gpt-5.4-mini"]);
const MAX_REVIEW_LOOPS = 2;

function extractTagContent(text: string, tag: string) {
  const pattern = new RegExp(`<${tag}>([\\s\\S]*?)</${tag}>`, "i");
  const match = text.match(pattern);
  return match?.[1]?.trim();
}

function isComplexRequest(input: string) {
  const text = input.toLowerCase();
  return (
    text.length > 140 ||
    /(dashboard|platform|saas|clone|workspace|admin|crm|erp|project|complex|full stack|full-stack|multi)/i.test(
      text
    )
  );
}

export const codeAgentFunction = inngest.createFunction(
  { id: "code-agent" },
  { event: "code-agent/run" },
  async ({ event, step }) => {
    const complexRequest = isComplexRequest(event.data.value);
    const postProgress = async (status: string) => {
      return await prisma.message.create({
        data: {
          projectId: event.data.projectId,
          content: `Status: ${status}`,
          role: "ASSISTANT",
          type: "RESULT",
        },
      });
    };

    const SandboxId = await step.run("get-sandbox-id", async () => {
      const sandbox = await Sandbox.create("polo");
      await sandbox.setTimeout(SANDBOX_TIMEOUT);
      return sandbox.sandboxId;
    });
    const apiKey = process.env.OPENAI_API_KEY;
    if (!apiKey) {
      throw new Error("OPENAI is not set in environment variables.");
    }

    //agent memory implementation to aware of previous projects
    const previousMessages = await step.run("get-previous-messages",async () =>{
      const formattedMessages: Message[] = [];

      const messages = await prisma.message.findMany({
        where:{
          projectId: event.data.projectId,
        },
        orderBy:{
          createAt : "desc",
        },
        take : 10,
      });
      for (const message of messages){
        if (message.content.startsWith("Status: ")) {
          continue;
        }
        formattedMessages.push({
          type: "text",
          role: message.role === "ASSISTANT" ? "assistant" : "user",
          content : message.content,
        })
      }
      return formattedMessages.reverse();
    })

    const configuredModel = process.env.OPENAI_MODEL?.trim();
    const modelName = configuredModel || DEFAULT_OPENAI_MODEL;
    if (!ALLOWED_OPENAI_MODELS.has(modelName)) {
      throw new Error(
        `Unsupported OPENAI_MODEL "${modelName}". Use one of: ${Array.from(ALLOWED_OPENAI_MODELS).join(", ")}.`
      );
    }

    const state = createState<AgentState>({
      summary : "",
      plan: "",
      review: "",
      needsChanges: false,
      reviewLoops: 0,
      files: {},
    },
  {
    messages: previousMessages,
  },
);


    const codeagent = createAgent<AgentState>({
      name: "code-agent",
      description: "An expert coding agent",
      system: PROMPT,
      model: openai({
        model: modelName,
        apiKey: process.env.OPENAI_API_KEY,
        // defaultParameters: {
        //   temperature: 0.0,
        // },
      }),
      tools: [
        createTool({
          name: "terminal",
          description: "use the terminal to run commands",
          parameters: z.object({
            command: z.string(),
          }),
          handler: async ({ command }, { step, network }) => {
            return await step?.run("terminal", async () => {
              const buffers = { stdout: "", stderr: "" };

              try {
                const { sandbox, isNew } = await getSandbox(SandboxId);
                // If new sandbox, restore files
                if (isNew && network?.state?.data?.files) {
                  for (const [path, content] of Object.entries(network.state.data.files)) {
                    await sandbox.files.write(path, String(content));
                  }
                }
                const result = await sandbox.commands.run(command, {
                  onStdout: (data: string) => {
                    buffers.stdout += data;
                  },
                  onStderr: (data: string) => {
                    buffers.stderr += data;
                  },
                });
                return result.stdout;
              } catch (e) {
                console.error(
                  `command failed: ${e} \nstdout: ${buffers.stdout}\nstderror: ${buffers.stderr}`
                );
                return `command failed: ${e} \nstdout: ${buffers.stdout}\nstderror: ${buffers.stderr}`;
              }
            });
          },
        }),
        createTool({
          name: "createOrUpdateFiles",
          description: "Create or update files in the sandbox",
          parameters: z.object({
            files: z.array(
              z.object({
                path: z.string(),
                content: z.string(),
              })
            ),
          }),
          handler: async (
            { files },
             { step, network } : Tool.Options<AgentState>
            ) => {
            const newFiles = await step?.run(
              "createOrUpdateFiles",
              async () => {
                try {
                  const updateFiles = network.state.data.files || {};
                  const { sandbox, isNew } = await getSandbox(SandboxId);
                  // If new sandbox, restore files
                  if (isNew && network?.state?.data?.files) {
                    for (const [path, content] of Object.entries(network.state.data.files)) {
                      await sandbox.files.write(path, String(content));
                    }
                  }
                  // Create files in the correct Next.js structure
                  for (const file of files) {
                    await sandbox.files.write(file.path, file.content);
                    updateFiles[file.path] = file.content;
                  }

                  // Install dependencies and start the dev server
                  // await sandbox.commands.run('npm install');
                  // await sandbox.commands.run('npm run dev');

                  return updateFiles;
                } catch (e) {
                  return "Error: " + e;
                }
              }
            );

            if (typeof newFiles === "object") {
              network.state.data.files = newFiles;
            }
          },
        }),

        createTool({
          name: "readFiles",
          description: "Read files from the sandbox",
          parameters: z.object({
            files: z.array(z.string()),
          }),
          handler: async ({ files }, { step, network }) => {
            return await step?.run("readFiles", async () => {
              try {
                const { sandbox, isNew } = await getSandbox(SandboxId);
                // If new sandbox, restore files
                if (isNew && network?.state?.data?.files) {
                  for (const [path, content] of Object.entries(network.state.data.files)) {
                    await sandbox.files.write(path, String(content));
                  }
                }
                const contents = [];
                for (const file of files) {
                  const content = await sandbox.files.read(file);
                  contents.push({
                    path: file,
                    content,
                  });
                }
                return JSON.stringify(contents);
              } catch (e) {
                return "Error: " + e;
              }
            });
          },
        }),
      ],
      lifecycle: {
        onResponse: async ({ result, network }) => {
          const lastAssistantMessageText =
            lastAssistantTextMessageContent(result);

          if (lastAssistantMessageText && network) {
            const taskSummary = extractTagContent(lastAssistantMessageText, "task_summary");
            if (taskSummary) {
              network.state.data.summary = taskSummary;
            }
          }
          return result;
        },
      },
    });

    const plannerAgent = createAgent<AgentState>({
      name: "planning-agent",
      description: "Creates an execution plan before implementation",
      system: PLAN_PROMPT,
      model: openai({
        model: modelName,
        apiKey: process.env.OPENAI_API_KEY,
      }),
      lifecycle: {
        onResponse: async ({ result, network }) => {
          const text = lastAssistantTextMessageContent(result);
          if (text && network) {
            const plan = extractTagContent(text, "execution_plan");
            if (plan) {
              network.state.data.plan = plan;
            }
          }
          return result;
        },
      },
    });

    const reviewerAgent = createAgent<AgentState>({
      name: "review-agent",
      description: "Reviews output and requests refinement if needed",
      system: REVIEW_PROMPT,
      model: openai({
        model: modelName,
        apiKey: process.env.OPENAI_API_KEY,
      }),
      lifecycle: {
        onResponse: async ({ result, network }) => {
          const text = lastAssistantTextMessageContent(result);
          if (text && network) {
            const review = extractTagContent(text, "review");
            if (review) {
              network.state.data.review = review;
              network.state.data.needsChanges =
                /<needs_changes>\s*true\s*<\/needs_changes>/i.test(text);
            }
          }
          return result;
        },
      },
    });

    let lastPhase = "";
    const network = createNetwork<AgentState>({
      name: "coding-agent-network",
      agents: [plannerAgent, codeagent, reviewerAgent],
      maxIter: 24,
      defaultState: state,
      router: async ({ network }) => {
        const data = network.state.data;

        if (!data.plan) {
          if (lastPhase !== "plan") {
            lastPhase = "plan";
            await postProgress("Planning architecture and file structure");
          }
          return plannerAgent;
        }

        if (!data.summary) {
          if (lastPhase !== "build") {
            lastPhase = "build";
            await postProgress("Building files and implementing features");
          }
          return codeagent;
        }

        if (!data.review) {
          if (lastPhase !== "review") {
            lastPhase = "review";
            await postProgress("Reviewing quality and validating completeness");
          }
          return reviewerAgent;
        }

        const fileCount = Object.keys(data.files || {}).length;
        if (complexRequest && fileCount < 5 && data.reviewLoops < MAX_REVIEW_LOOPS) {
          data.reviewLoops += 1;
          data.review = "";
          data.summary = "";
          data.needsChanges = false;
          await postProgress("Expanding architecture to a stronger multi-file codebase");
          return codeagent;
        }

        if (data.needsChanges && data.reviewLoops < MAX_REVIEW_LOOPS) {
          data.reviewLoops += 1;
          data.review = "";
          data.summary = "";
          data.needsChanges = false;
          return codeagent;
        }

        if (data.summary) {
          return;
        }
      },
    });

    await step.run("progress-start", async () =>
      postProgress("Starting autonomous multi-agent execution")
    );
    const result = await network.run(event.data.value, {state});

    const fragmentTitleGenerator = createAgent({
      name: "fragment-Title-Generator",
      description: "A fragment title generater",
      system: FRAGMENT_TITLE_PROMPT,
      model: openai({
        model: modelName,
        apiKey: process.env.OPENAI_API_KEY,
      }),
    })

    const responseGenerator = createAgent({
      name: "response-Generator",
      description: "A response generater",
      system: RESPONSE_PROMPT,
      model: openai({
        model: modelName,
        apiKey: process.env.OPENAI_API_KEY,
      }),
    });

    const {output:fragmentTitleOutput} = await fragmentTitleGenerator.run(result.state.data.summary);
    const {output: responseOutput} = await responseGenerator.run(result.state.data.summary);

    const generateFragmentTitle = () => {
      if(fragmentTitleOutput[0].type !== "text"){
        return "Fragment";
      }
      if(Array.isArray(fragmentTitleOutput[0].content)){
        return fragmentTitleOutput[0].content.map((txt)=> txt).join("")
      }else{
           return fragmentTitleOutput[0].content;
      }
    }

    const generateResponse = () => {
      if(responseOutput[0].type !== "text"){
        return "Here you go";
      }
      if(Array.isArray(responseOutput[0].content)){
        return responseOutput[0].content.map((txt)=> txt).join("")
      }else{
           return responseOutput[0].content;
      }
    }

    const isError = 
      !result.state.data.summary ||
      Object.keys(result.state.data.files || {}).length === 0;

    // const { output } = await codeagent.run(
    //   `write a typescript function that${event.data.value}`,
    // );

    const sandboxUrl = await step.run("get-sandbox-url", async () => {
      const { sandbox, isNew } = await getSandbox(SandboxId);
      if (isNew && result.state.data.files) {
        for (const [path, content] of Object.entries(result.state.data.files)) {
          await sandbox.files.write(path, String(content));
        }
      }
      const host = sandbox.getHost(3000);
      return `http://${host}`;
    });

    await step.run("save-result", async () => {
      await postProgress("Finalizing response and preparing preview");
      if(isError){
        return await prisma.message.create({
          data : {
            projectId : event.data.projectId,
            content: "Something went wrong, please try again",
            role : "ASSISTANT",
            type : "ERROR",
          }
        });
      }
      
    return await prisma.message.create({
        data: {
          projectId : event.data.projectId,
          content: generateResponse(),
          role : "ASSISTANT",
          type : "RESULT",
          fragment: {
           create : {
            sandboxUrl : sandboxUrl,
            title : generateFragmentTitle(),
            files : result.state.data.files,
           }
          },
        },
      });
    });
    // [{ role: 'assistant', content: 'function removeUnecessaryWhitespace(...' }]
    return {
      url: sandboxUrl,
      title: "Fragment",
      files: result.state.data.files,
      summary: result.state.data.summary,
    };
  }
);

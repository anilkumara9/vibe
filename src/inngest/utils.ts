import { Sandbox } from "@e2b/code-interpreter";
import { AgentResult, TextMessage } from "@inngest/agent-kit";
import { SANDBOX_TIMEOUT } from "./types";


// export async function getSandbox(SandboxId:string) {
//     const sandbox = await Sandbox.connect(SandboxId)
//     return sandbox;
// }

export async function getSandbox(SandboxId:string) {
    try {
      const sandbox = await Sandbox.connect(SandboxId);
      await sandbox.setTimeout(SANDBOX_TIMEOUT);
      return { sandbox, isNew: false };
    } catch (error) {
      console.error(`Failed to connect to sandbox ${SandboxId}: ` , error);
      //create a new sandbox if connection fails
      const newSandbox = await Sandbox.create("polo");
      return { sandbox: newSandbox, isNew: true };
    }
}

export function lastAssistantTextMessageContent(result: AgentResult){
    const lastAssistantTextMessageIndex = result.output.findLastIndex(
        (message) => message.role === "assistant",
    );

    const message = result.output[lastAssistantTextMessageIndex] as
       | TextMessage
       | undefined;

    return message?.content
        ? typeof message.content === "string"
            ? message.content
            : message.content.map((c) => c.text).join("")
        : undefined;
};
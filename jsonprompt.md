{
  "project": {
    "title": "AI-Powered React Application Code Generation Tool",
    "inspiration": "Build an MVP inspired by: @https://github.com/mendableai/open-lovable. Use gitmvp mcp if available.",
    "project_type": "AI-powered React application code generation tool with a chat interface.",
    "complexity_level": "Complex",
    "goal": "Create a full-stack AI coding assistant that can generate, preview, and execute code in real time with an intuitive chat-driven interface."
  },

  "tech_stack": {
    "frontend": [
      "React (v19.1.0)",
      "Next.js (v15.4.3)",
      "Tailwind CSS",
      "Framer Motion",
      "Radix UI",
      "react-syntax-highlighter",
      "lucide-react",
      "class-variance-authority",
      "clsx",
      "tailwind-merge",
      "tailwindcss-animate"
    ],
    "backend": [
      "Next.js API routes",
      "Serverless functions (optional)"
    ],
    "ai_sdks": [
      "@ai-sdk/anthropic",
      "@ai-sdk/google",
      "@ai-sdk/groq",
      "@ai-sdk/openai",
      "@anthropic-ai/sdk",
      "groq-sdk",
      "ai"
    ],
    "code_execution": [
      "@e2b/code-interpreter",
      "e2b"
    ],
    "other": [
      "TypeScript",
      "ESLint",
      "Zod",
      "PostCSS",
      "Cors",
      "Dotenv"
    ]
  },

  "architecture": {
    "overview": "The application uses a client-server architecture with Next.js handling both frontend and backend API routes.",
    "frontend": "React application with modular, component-based architecture. Uses Tailwind + Radix UI + Framer Motion for styling and animations.",
    "backend": "Next.js API routes handling AI model interactions, sandbox execution, and web scraping.",
    "sandbox": "E2B integration for advanced code execution (planned), simplified iframe execution for MVP.",
    "web_scraping": "Planned via Firecrawl (excluded from MVP for simplicity).",
    "data_flow": "User prompts → Chat interface → Backend API → AI model → Code generation → Sandbox preview → User feedback loop."
  },

  "key_features": [
    "AI-powered code generation based on user prompts.",
    "Real-time code execution and preview in a sandbox environment.",
    "Automatic package installation.",
    "Web scraping to extract content from URLs.",
    "Chat interface for interacting with the AI.",
    "File system browsing and editing within the sandbox.",
    "HMR error detection and reporting.",
    "Support for multiple AI models (Anthropic, OpenAI, Google, Groq).",
    "Code streaming for real-time updates."
  ],

  "mvp_guidance": {
    "directive": "Focus on core functionality first. Prioritize a single AI model integration and a simplified sandbox environment.",
    "principles": [
      "Ship quickly with a working prototype.",
      "Minimize external dependencies for MVP.",
      "Validate concept before scaling complexity."
    ]
  },

  "mvp_implementation_steps": [
    {
      "step": 1,
      "title": "Core Chat Interface",
      "tasks": [
        "Implement a basic chat interface using React and Next.js.",
        "Allow users to input prompts and display AI responses.",
        "Directive: Use a simple state management solution (useState) initially."
      ],
      "ui_components": ["ChatInputBox", "ChatBubble", "LoadingIndicator"]
    },
    {
      "step": 2,
      "title": "AI Integration (Single Model)",
      "tasks": [
        "Choose one AI model (e.g., OpenAI) and integrate it using the `@ai-sdk/openai` package.",
        "Create an API route (`/api/generate-code`) to handle AI requests.",
        "Directive: Hardcode the API key initially for testing, then move to environment variables."
      ],
      "api_routes": ["/api/generate-code"]
    },
    {
      "step": 3,
      "title": "Simplified Sandbox",
      "tasks": [
        "Use a client-side code editor (react-ace or CodeMirror) to display and edit code.",
        "Implement a simple 'Run' button that executes code in an iframe.",
        "Directive: Skip file system browsing and package installation for MVP."
      ],
      "ui_components": ["CodeEditor", "RunButton", "OutputConsole"]
    },
    {
      "step": 4,
      "title": "Basic Code Generation",
      "tasks": [
        "Implement the core code generation logic.",
        "The `/api/generate-code` route should take a prompt as input and return generated code.",
        "Directive: Start with simple code generation tasks like creating a basic React component."
      ]
    },
    {
      "step": 5,
      "title": "UI Improvements",
      "tasks": [
        "Use Tailwind CSS for basic styling.",
        "Implement a loading indicator while the AI generates code.",
        "Directive: Focus on functionality over aesthetics."
      ],
      "animations": ["Framer Motion fadeIn", "Button hover transitions"]
    },
    {
      "step": 6,
      "title": "Deployment",
      "tasks": [
        "Deploy the Next.js app to Vercel or Netlify.",
        "Directive: Ensure environment variables are configured correctly."
      ],
      "deployment_targets": ["Vercel", "Netlify"]
    },
    {
      "step": 7,
      "title": "Testing",
      "tasks": [
        "Manually test chat, code generation, and execution.",
        "Directive: Write simple unit tests for AI integration logic."
      ],
      "test_tools": ["Jest", "React Testing Library"]
    }
  ],

  "omitted_features_for_mvp": [
    "Web scraping functionality.",
    "Multiple AI model support.",
    "Full E2B sandbox integration.",
    "File system browsing and editing.",
    "Package installation.",
    "HMR error detection.",
    "Advanced UI components (Radix UI).",
    "Streaming updates."
  ],

  "directives": [
    "Prioritize a functional prototype over a polished product.",
    "Validate the core concept of AI-powered code generation first.",
    "Ensure the system is modular for scaling."
  ],

  "extra_enhancements": {
    "scalability": "Design modular architecture so additional AI models, sandbox features, and web scraping can be plugged in later.",
    "security": [
      "Move API keys to environment variables.",
      "Implement CORS and rate limiting for API routes.",
      "Basic user authentication for accessing advanced features."
    ],
    "future_features": [
      "Full multi-model support with Anthropic, Groq, and Google.",
      "Live collaboration with shared code editing.",
      "Package installation via NPM integration.",
      "Advanced sandbox with file browsing.",
      "Streaming AI responses for real-time typing effect.",
      "Plugin marketplace for community extensions."
    ],
    "devops": {
      "ci_cd": "Set up GitHub Actions for automated builds and testing.",
      "monitoring": "Integrate logging and monitoring with tools like Sentry or Datadog.",
      "containerization": "Use Docker for consistent local and production environments."
    }
  }
}

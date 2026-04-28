# Setting Up a Complete Next.js Sandbox for Agent Development

This guide will help you create a complete Next.js project structure that the agent can fully utilize - including dependency management, component creation, and full project scaffolding.

## Option 1: Create Sandbox in Current Workspace

### Step 1: Create Sandbox Directory

```bash
mkdir sandbox
cd sandbox
```

### Step 2: Initialize Next.js Project

```bash
npx create-next-app@latest vibecoding-sandbox --typescript --tailwind --eslint --app --src-dir --import-alias "@/*"
```

### Step 3: Navigate to Sandbox

```bash
cd vibecoding-sandbox
```

### Step 4: Install Additional UI Components (Optional)

```bash
npx shadcn@latest init
npx shadcn@latest add button card input label textarea dialog
```

### Step 5: Start Development Server

```bash
npm run dev
```

## Option 2: Create Sandbox in Separate Directory

### Step 1: Navigate to Parent Directory

```bash
cd ..
```

### Step 2: Create New Next.js Project

```bash
npx create-next-app@latest nextjs-sandbox --typescript --tailwind --eslint --app --src-dir --import-alias "@/*"
```

### Step 3: Navigate to New Project

```bash
cd nextjs-sandbox
```

### Step 4: Install shadcn/ui (Recommended for UI Components)

```bash
npx shadcn@latest init
```

When prompted, choose:

- Style: `New York`
- Base color: `Zinc`
- CSS variables: `Yes`

### Step 5: Add Common UI Components

```bash
npx shadcn@latest add button card input label textarea dialog sheet tabs accordion
```

### Step 6: Start Development Server

```bash
npm run dev
```

## Quick Component Examples

After setup, you can quickly test components:

### Basic Button Component

```tsx
// src/app/page.tsx
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="p-8">
      <Button>Click me!</Button>
    </div>
  );
}
```

### Card with Form

```tsx
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="p-8 max-w-md mx-auto">
      <Card>
        <CardHeader>
          <CardTitle>Vibe Check</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <Input placeholder="Enter your vibe..." />
          <Button className="w-full">Submit Vibe</Button>
        </CardContent>
      </Card>
    </div>
  );
}
```

## Recommended Folder Structure for Vibecoding

```
sandbox/
├── components/          # Custom components
├── experiments/         # Different UI experiments
├── prototypes/         # Feature prototypes
└── playground/         # Quick tests
```

## Tips for Vibecoding

1. **Hot Reload**: Changes appear instantly in browser
2. **Component Library**: Use shadcn/ui for quick UI building
3. **Tailwind**: Rapid styling with utility classes
4. **TypeScript**: Type safety for better development experience

## Useful Commands

```bash
# Add more shadcn components
npx shadcn@latest add [component-name]

# List available components
npx shadcn@latest add

# Update dependencies
npm update

# Build for production
npm run build
```

## How Agent Will Use the Sandbox

Once set up, the agent can:

### 1. Full Project Management

- **Install Dependencies**: `npm install package-name`
- **Update package.json**: Add/remove dependencies
- **Manage Scripts**: Add custom build/dev scripts
- **Configure Tools**: Update tsconfig.json, tailwind.config.js, etc.

### 2. Complete File Structure Access

```
sandbox/vibecoding-sandbox/
├── src/
│   ├── app/                 # App Router pages
│   ├── components/          # Custom components
│   │   └── ui/             # shadcn/ui components
│   ├── lib/                # Utilities and helpers
│   ├── hooks/              # Custom React hooks
│   └── types/              # TypeScript definitions
├── public/                 # Static assets
├── package.json            # Dependencies management
├── tailwind.config.js      # Styling configuration
├── tsconfig.json          # TypeScript configuration
└── next.config.js         # Next.js configuration
```

### 3. Agent Capabilities in Sandbox

#### Dependency Management

```bash
# Agent can run these commands
npm install @radix-ui/react-dialog
npm install framer-motion
npm install @tanstack/react-query
npm uninstall unused-package
```

#### Component Creation

The agent can create complete component files:

```tsx
// src/components/custom-button.tsx
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface CustomButtonProps {
  variant?: "primary" | "secondary";
  children: React.ReactNode;
}

export function CustomButton({
  variant = "primary",
  children,
}: CustomButtonProps) {
  return (
    <Button
      className={cn(
        "transition-all duration-200",
        variant === "primary" && "bg-blue-600 hover:bg-blue-700",
        variant === "secondary" && "bg-gray-600 hover:bg-gray-700"
      )}
    >
      {children}
    </Button>
  );
}
```

#### Configuration Updates

The agent can modify configuration files:

```js
// tailwind.config.js - Agent can add custom themes
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#eff6ff",
          500: "#3b82f6",
          900: "#1e3a8a",
        },
      },
    },
  },
};
```

### 4. How to Open Sandbox in Editor

#### Method 1: Open as Workspace

1. Create the sandbox following Option 1 or 2
2. In VS Code: `File > Open Folder`
3. Select the `vibecoding-sandbox` folder
4. Agent now has full access to entire project structure

#### Method 2: Multi-root Workspace

1. In VS Code: `File > Add Folder to Workspace`
2. Add both your main project and sandbox
3. Agent can work in both simultaneously

#### Method 3: Terminal Navigation

```bash
# Navigate to sandbox
cd sandbox/vibecoding-sandbox

# Open in new VS Code window
code .

# Or open in current window
code -r .
```

### 5. Agent Development Workflow

When you ask the agent to build something:

1. **Project Setup**: Agent checks package.json for required dependencies
2. **Install Dependencies**: Runs npm install commands if needed
3. **Create Components**: Builds complete component files with proper imports
4. **Update Configurations**: Modifies config files as needed
5. **Create Pages**: Builds complete app router pages
6. **Add Styling**: Updates CSS/Tailwind configurations
7. **Test Integration**: Creates example usage and tests

### 6. Example Agent Commands

```bash
# Agent can run full project commands
npm run dev                 # Start development server
npm run build              # Build for production
npm run lint               # Run ESLint
npm install new-package    # Add dependencies
npx shadcn@latest add toast # Add UI components
```

### 7. Sandbox Project Structure for Agent

```
vibecoding-sandbox/
├── README.md              # Project documentation
├── package.json           # Dependencies (agent can modify)
├── tsconfig.json         # TypeScript config (agent can modify)
├── tailwind.config.js    # Styling config (agent can modify)
├── next.config.js        # Next.js config (agent can modify)
├── src/
│   ├── app/
│   │   ├── layout.tsx    # Root layout (agent can modify)
│   │   ├── page.tsx      # Home page (agent can modify)
│   │   ├── globals.css   # Global styles (agent can modify)
│   │   └── experiments/  # Agent can create experiment pages
│   ├── components/
│   │   ├── ui/           # shadcn components (agent can add more)
│   │   └── custom/       # Agent can create custom components
│   ├── lib/
│   │   └── utils.ts      # Utilities (agent can extend)
│   ├── hooks/            # Agent can create custom hooks
│   └── types/            # Agent can define TypeScript types
└── public/               # Agent can add static assets
```

Choose Option 1 if you want the sandbox within your current workspace, or Option 2 for a completely separate project that the agent can fully manage.

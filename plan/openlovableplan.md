(Files content cropped to 300k characters, download full ingest to see more)
================================================
FILE: README.md
================================================
# Open Lovable

Chat with AI to build React apps instantly. An example app made by the [Firecrawl](https://firecrawl.dev/?ref=open-lovable-github) team. For a complete cloud solution, check out [Lovable.dev](https://lovable.dev/) ❤️.

<img src="https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExbmZtaHFleGRsMTNlaWNydGdianI4NGQ4dHhyZjB0d2VkcjRyeXBucCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/ZFVLWMa6dVskQX0qu1/giphy.gif" alt="Open Lovable Demo" width="100%"/>

## Setup

1. **Clone & Install**
```bash
git clone https://github.com/firecrawl/open-lovable.git
cd open-lovable
pnpm install  # or npm install / yarn install
```

2. **Add `.env.local`**

```env
# =================================================================
# REQUIRED
# =================================================================
FIRECRAWL_API_KEY=your_firecrawl_api_key    # https://firecrawl.dev

# =================================================================
# AI PROVIDER - Choose your LLM
# =================================================================
ANTHROPIC_API_KEY=your_anthropic_api_key  # https://console.anthropic.com
OPENAI_API_KEY=your_openai_api_key        # https://platform.openai.com
GEMINI_API_KEY=your_gemini_api_key        # https://aistudio.google.com/app/apikey
GROQ_API_KEY=your_groq_api_key            # https://console.groq.com

# =================================================================
# SANDBOX PROVIDER - Choose ONE: Vercel (default) or E2B
# =================================================================
SANDBOX_PROVIDER=vercel  # or 'e2b'

# Option 1: Vercel Sandbox (default)
# Choose one authentication method:

# Method A: OIDC Token (recommended for development)
# Run `vercel link` then `vercel env pull` to get VERCEL_OIDC_TOKEN automatically
VERCEL_OIDC_TOKEN=auto_generated_by_vercel_env_pull

# Method B: Personal Access Token (for production or when OIDC unavailable)
# VERCEL_TEAM_ID=team_xxxxxxxxx      # Your Vercel team ID 
# VERCEL_PROJECT_ID=prj_xxxxxxxxx    # Your Vercel project ID
# VERCEL_TOKEN=vercel_xxxxxxxxxxxx   # Personal access token from Vercel dashboard

# Option 2: E2B Sandbox
# E2B_API_KEY=your_e2b_api_key      # https://e2b.dev
```

3. **Run**
```bash
pnpm dev  # or npm run dev / yarn dev
```

Open [http://localhost:3000](http://localhost:3000)

## License

MIT


================================================
FILE: colors.json
================================================
{
  "heat-4": {
    "hex": "fa5d190a",
    "p3": "0.980392 0.364706 0.098039 / 0.039216"
  },
  "heat-8": {
    "hex": "fa5d1914",
    "p3": "0.980392 0.364706 0.098039 / 0.078431"
  },
  "heat-12": {
    "hex": "fa5d191f",
    "p3": "0.980392 0.364706 0.098039 / 0.121569"
  },
  "heat-16": {
    "hex": "fa5d1929",
    "p3": "0.980392 0.364706 0.098039 / 0.160784"
  },
  "heat-20": {
    "hex": "fa5d1933",
    "p3": "0.980392 0.364706 0.098039 / 0.200000"
  },
  "heat-40": {
    "hex": "fa5d1966",
    "p3": "0.980392 0.364706 0.098039 / 0.400000"
  },
  "heat-90": {
    "hex": "fa5d19e6",
    "p3": "0.980392 0.364706 0.098039 / 0.900000"
  },
  "heat-100": {
    "hex": "fa5d19ff",
    "p3": "0.980392 0.364706 0.098039 / 1.000000"
  },
  "accent-black": {
    "hex": "262626ff",
    "p3": "0.149020 0.149020 0.149020 / 1.000000"
  },
  "accent-white": {
    "hex": "ffffffff",
    "p3": "1.000000 1.000000 1.000000 / 1.000000"
  },
  "accent-amethyst": {
    "hex": "9061ffff",
    "p3": "0.564706 0.380392 1.000000 / 1.000000"
  },
  "accent-bluetron": {
    "hex": "2a6dfbff",
    "p3": "0.164706 0.427451 0.984314 / 1.000000"
  },
  "accent-crimson": {
    "hex": "eb3424ff",
    "p3": "0.921569 0.203922 0.141176 / 1.000000"
  },
  "accent-forest": {
    "hex": "42c366ff",
    "p3": "0.258824 0.764706 0.400000 / 1.000000"
  },
  "accent-honey": {
    "hex": "ecb730ff",
    "p3": "0.925490 0.717647 0.188235 / 1.000000"
  },
  "black-alpha-1": {
    "hex": "00000003",
    "p3": "0.000000 0.000000 0.000000 / 0.011765"
  },
  "black-alpha-2": {
    "hex": "00000005",
    "p3": "0.000000 0.000000 0.000000 / 0.019608"
  },
  "black-alpha-3": {
    "hex": "00000008",
    "p3": "0.000000 0.000000 0.000000 / 0.031373"
  },
  "black-alpha-4": {
    "hex": "0000000a",
    "p3": "0.000000 0.000000 0.000000 / 0.039216"
  },
  "black-alpha-5": {
    "hex": "0000000d",
    "p3": "0.000000 0.000000 0.000000 / 0.050980"
  },
  "black-alpha-6": {
    "hex": "0000000f",
    "p3": "0.000000 0.000000 0.000000 / 0.058824"
  },
  "black-alpha-7": {
    "hex": "00000012",
    "p3": "0.000000 0.000000 0.000000 / 0.070588"
  },
  "black-alpha-8": {
    "hex": "00000014",
    "p3": "0.000000 0.000000 0.000000 / 0.078431"
  },
  "black-alpha-10": {
    "hex": "0000001a",
    "p3": "0.000000 0.000000 0.000000 / 0.101961"
  },
  "black-alpha-12": {
    "hex": "0000001f",
    "p3": "0.000000 0.000000 0.000000 / 0.121569"
  },
  "black-alpha-16": {
    "hex": "00000029",
    "p3": "0.000000 0.000000 0.000000 / 0.160784"
  },
  "black-alpha-20": {
    "hex": "00000033",
    "p3": "0.000000 0.000000 0.000000 / 0.200000"
  },
  "black-alpha-24": {
    "hex": "0000003d",
    "p3": "0.000000 0.000000 0.000000 / 0.239216"
  },
  "black-alpha-32": {
    "hex": "26262652",
    "p3": "0.149020 0.149020 0.149020 / 0.321569"
  },
  "black-alpha-40": {
    "hex": "26262666",
    "p3": "0.149020 0.149020 0.149020 / 0.400000"
  },
  "black-alpha-48": {
    "hex": "2626267a",
    "p3": "0.149020 0.149020 0.149020 / 0.478431"
  },
  "black-alpha-56": {
    "hex": "2626268f",
    "p3": "0.149020 0.149020 0.149020 / 0.560784"
  },
  "black-alpha-64": {
    "hex": "262626a3",
    "p3": "0.149020 0.149020 0.149020 / 0.639216"
  },
  "black-alpha-72": {
    "hex": "262626b8",
    "p3": "0.149020 0.149020 0.149020 / 0.721569"
  },
  "black-alpha-88": {
    "hex": "262626e0",
    "p3": "0.149020 0.149020 0.149020 / 0.878431"
  },
  "white-alpha-56": {
    "hex": "ffffff8f",
    "p3": "1.000000 1.000000 1.000000 / 0.560784"
  },
  "white-alpha-72": {
    "hex": "ffffffb8",
    "p3": "1.000000 1.000000 1.000000 / 0.721569"
  },
  "border-faint": {
    "hex": "edededff",
    "p3": "0.929412 0.929412 0.929412 / 1.000000"
  },
  "border-muted": {
    "hex": "e8e8e8ff",
    "p3": "0.909804 0.909804 0.909804 / 1.000000"
  },
  "border-loud": {
    "hex": "e6e6e6ff",
    "p3": "0.901961 0.901961 0.901961 / 1.000000"
  },
  "illustrations-faint": {
    "hex": "edededff",
    "p3": "0.929412 0.929412 0.929412 / 1.000000"
  },
  "illustrations-muted": {
    "hex": "e6e6e6ff",
    "p3": "0.901961 0.901961 0.901961 / 1.000000"
  },
  "illustrations-default": {
    "hex": "dbdbdbff",
    "p3": "0.858824 0.858824 0.858824 / 1.000000"
  },
  "background-lighter": {
    "hex": "fbfbfbff",
    "p3": "0.984314 0.984314 0.984314 / 1.000000"
  },
  "background-base": {
    "hex": "f9f9f9ff",
    "p3": "0.976471 0.976471 0.976471 / 1.000000"
  }
}


================================================
FILE: eslint.config.mjs
================================================
import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    rules: {
      "@typescript-eslint/no-explicit-any": "off",
      "@typescript-eslint/no-unused-vars": "off",
      "react-hooks/exhaustive-deps": "warn",
      "react/no-unescaped-entities": "off",
      "prefer-const": "warn"
    }
  }
];

export default eslintConfig;



================================================
FILE: LICENSE
================================================
MIT License

Copyright (c) 2024

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.


================================================
FILE: next.config.ts
================================================
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
};

export default nextConfig;



================================================
FILE: package.json
================================================
{
  "name": "open-lovable",
  "version": "0.1.0",
  "private": true,
  "type": "module",
  "scripts": {
    "dev": "next dev --turbopack",
    "build": "next build",
    "start": "next start",
    "lint": "next lint",
    "test:api": "node tests/api-endpoints.test.js",
    "test:code": "node tests/code-execution.test.js",
    "test:all": "npm run test:integration && npm run test:api && npm run test:code"
  },
  "dependencies": {
    "@ai-sdk/anthropic": "^2.0.1",
    "@ai-sdk/google": "^2.0.4",
    "@ai-sdk/groq": "^2.0.0",
    "@ai-sdk/openai": "^2.0.4",
    "@anthropic-ai/sdk": "^0.57.0",
    "@e2b/code-interpreter": "^2.0.0",
    "@mendable/firecrawl-js": "^4.3.3",
    "@radix-ui/react-accordion": "^1.2.12",
    "@radix-ui/react-alert-dialog": "^1.1.15",
    "@radix-ui/react-aspect-ratio": "^1.1.7",
    "@radix-ui/react-avatar": "^1.1.10",
    "@radix-ui/react-checkbox": "^1.3.3",
    "@radix-ui/react-collapsible": "^1.1.12",
    "@radix-ui/react-context-menu": "^2.2.16",
    "@radix-ui/react-dialog": "^1.1.15",
    "@radix-ui/react-dropdown-menu": "^2.1.16",
    "@radix-ui/react-hover-card": "^1.1.15",
    "@radix-ui/react-label": "^2.1.7",
    "@radix-ui/react-menubar": "^1.1.16",
    "@radix-ui/react-navigation-menu": "^1.2.14",
    "@radix-ui/react-popover": "^1.1.15",
    "@radix-ui/react-progress": "^1.1.7",
    "@radix-ui/react-radio-group": "^1.3.8",
    "@radix-ui/react-scroll-area": "^1.2.10",
    "@radix-ui/react-select": "^2.2.6",
    "@radix-ui/react-separator": "^1.1.7",
    "@radix-ui/react-slider": "^1.3.6",
    "@radix-ui/react-slot": "^1.2.3",
    "@radix-ui/react-switch": "^1.2.5",
    "@radix-ui/react-tabs": "^1.1.13",
    "@radix-ui/react-toast": "^1.2.15",
    "@radix-ui/react-toggle": "^1.1.10",
    "@radix-ui/react-toggle-group": "^1.1.11",
    "@radix-ui/react-tooltip": "^1.2.8",
    "@tabler/icons-react": "^3.34.1",
    "@tailwindcss/typography": "^0.5.16",
    "@types/react-syntax-highlighter": "^15.5.13",
    "@vercel/sandbox": "^0.0.17",
    "ai": "^5.0.0",
    "autoprefixer": "^10.4.21",
    "class-variance-authority": "^0.7.1",
    "classnames": "^2.5.1",
    "clsx": "^2.1.1",
    "copy-to-clipboard": "^3.3.3",
    "cors": "^2.8.5",
    "dotenv": "^17.2.1",
    "framer-motion": "^12.23.12",
    "groq-sdk": "^0.29.0",
    "jotai": "^2.14.0",
    "lodash-es": "^4.17.21",
    "lucide-react": "^0.532.0",
    "motion": "^12.23.12",
    "nanoid": "^5.1.5",
    "next": "15.4.3",
    "next-themes": "^0.4.6",
    "pixi.js": "^8.13.1",
    "react": "19.1.0",
    "react-dom": "19.1.0",
    "react-hook-form": "^7.62.0",
    "react-icons": "^5.5.0",
    "react-syntax-highlighter": "^15.6.1",
    "sonner": "^2.0.7",
    "tailwind-gradient-mask-image": "^1.2.0",
    "tailwind-merge": "^3.3.1",
    "tailwindcss-animate": "^1.0.7",
    "usehooks-ts": "^3.1.1",
    "zod": "^3.25.76"
  },
  "devDependencies": {
    "@eslint/eslintrc": "^3",
    "@types/lodash-es": "^4.17.12",
    "@types/node": "^20",
    "@types/react": "^19",
    "@types/react-dom": "^19",
    "eslint": "^9",
    "eslint-config-next": "15.4.3",
    "postcss": "^8.5.6",
    "postcss-import": "^16.1.1",
    "postcss-nesting": "^13.0.2",
    "tailwindcss": "^3.4.17",
    "typescript": "^5"
  }
}



================================================
FILE: postcss.config.mjs
================================================
export default {
  plugins: {
    "postcss-import": {},
    "postcss-nesting": {},
    "tailwindcss": {},
    "autoprefixer": {},
  },
};



================================================
FILE: tailwind.config.ts
================================================
/* eslint-disable @typescript-eslint/no-require-imports */
import defaultTheme from "tailwindcss/defaultTheme";
import type { Config } from "tailwindcss";

import colorsJson from "./colors.json";

const colors = Object.keys(colorsJson).reduce(
  (acc, key) => {
    acc[key] = `var(--${key})`;

    return acc;
  },
  {} as Record<string, string>
);

const sizes = Array.from({ length: 1000 }, (_, i) => i).reduce(
  (acc, curr) => {
    acc[curr] = `${curr}px`;

    return acc;
  },
  {
    max: "max-content",
    unset: "unset",
    full: "100%",
    inherit: "inherit",
    "1/2": "50%",
    "1/3": "33.3%",
    "2/3": "66.6%",
    "1/4": "25%",
    "1/6": "16.6%",
    "2/6": "33.3%",
    "3/6": "50%",
    "4/6": "66.6%",
    "5/6": "83.3%"
  } as Record<string, string>
);

const opacities = Array.from({ length: 100 }, (_, i) => i).reduce(
  (acc, curr) => {
    acc[curr] = curr / 100 + "";

    return acc;
  },
  {} as Record<string, string>
);

const transitionDurations = Array.from({ length: 60 }, (_, i) => i).reduce(
  (acc, curr) => {
    acc[curr] = curr * 50 + "";

    return acc;
  },
  {} as Record<string, string>
);

const themeConfig: Config = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components-new/**/*.{js,ts,jsx,tsx,mdx}",
    "./styling-reference/ai-ready-website/app/**/*.{ts,tsx}",
    "./styling-reference/ai-ready-website/components/**/*.{ts,tsx}",
    "./styling-reference/ai-ready-website/components-new/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        sans: ["var(--font-geist-sans)", "var(--font-inter)", ...defaultTheme.fontFamily.sans],
        mono: ["var(--font-geist-mono)", ...defaultTheme.fontFamily.mono],
        ascii: ["var(--font-roboto-mono)", ...defaultTheme.fontFamily.mono]
      },
      fontSize: {
        "title-h1": [
          "60px",
          {
            "lineHeight": "64px",
            "letterSpacing": "-0.3px",
            "fontWeight": "500"
          }
        ],
        "title-h2": [
          "52px",
          {
            "lineHeight": "56px",
            "letterSpacing": "-0.52px",
            "fontWeight": "500"
          }
        ],
        "title-h3": [
          "40px",
          {
            "lineHeight": "44px",
            "letterSpacing": "-0.4px",
            "fontWeight": "500"
          }
        ],
        "title-h4": [
          "32px",
          {
            "lineHeight": "36px",
            "letterSpacing": "-0.32px",
            "fontWeight": "500"
          }
        ],
        "title-h5": [
          "24px",
          {
            "lineHeight": "32px",
            "letterSpacing": "-0.24px",
            "fontWeight": "500"
          }
        ],
        "body-x-large": [
          "20px",
          {
            "lineHeight": "28px",
            "letterSpacing": "-0.1px",
            "fontWeight": "400"
          }
        ],
        "body-large": [
          "16px",
          {
            "lineHeight": "24px",
            "letterSpacing": "0px",
            "fontWeight": "400"
          }
        ],
        "body-medium": [
          "14px",
          {
            "lineHeight": "20px",
            "letterSpacing": "0.14px",
            "fontWeight": "400"
          }
        ],
        "body-small": [
          "13px",
          {
            "lineHeight": "20px",
            "letterSpacing": "0px",
            "fontWeight": "400"
          }
        ],
        "body-input": [
          "15px",
          {
            "lineHeight": "24px",
            "letterSpacing": "0px",
            "fontWeight": "400"
          }
        ],
        "label-x-large": [
          "20px",
          {
            "lineHeight": "28px",
            "letterSpacing": "-0.1px",
            "fontWeight": "450"
          }
        ],
        "label-large": [
          "16px",
          {
            "lineHeight": "24px",
            "letterSpacing": "0px",
            "fontWeight": "450"
          }
        ],
        "label-medium": [
          "14px",
          {
            "lineHeight": "20px",
            "letterSpacing": "0px",
            "fontWeight": "450"
          }
        ],
        "label-small": [
          "13px",
          {
            "lineHeight": "20px",
            "letterSpacing": "0px",
            "fontWeight": "450"
          }
        ],
        "label-x-small": [
          "12px",
          {
            "lineHeight": "20px",
            "letterSpacing": "0px",
            "fontWeight": "450"
          }
        ],
        "mono-medium": [
          "14px",
          {
            "lineHeight": "22px",
            "letterSpacing": "0px",
            "fontWeight": "400"
          }
        ],
        "mono-small": [
          "13px",
          {
            "lineHeight": "20px",
            "letterSpacing": "0px",
            "fontWeight": "500"
          }
        ],
        "mono-x-small": [
          "12px",
          {
            "lineHeight": "16px",
            "letterSpacing": "0px",
            "fontWeight": "400"
          }
        ],
        "title-blog": [
          "28px",
          {
            "lineHeight": "36px",
            "letterSpacing": "-0.28px",
            "fontWeight": "500"
          }
        ]
      },
      colors: {
        transparent: "transparent",
        current: "currentColor",
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        ...colors
      },
      screens: {
        xs: { min: "390px" },
        "xs-max": { max: "389px" },
        sm: { min: "576px" },
        "sm-max": { max: "575px" },
        md: { min: "768px" },
        "md-max": { max: "767px" },
        lg: { min: "996px" },
        "lg-max": { max: "995px" },
        xl: { min: "1200px" },
        "xl-max": { max: "1199px" }
      },
      opacity: opacities,
      spacing: {
        ...sizes,
        'root': 'var(--root-padding)'
      },
      width: sizes,
      maxWidth: sizes,
      height: sizes,
      inset: sizes,
      borderWidth: sizes,
      backdropBlur: Array.from({ length: 20 }, (_, i) => i).reduce(
        (acc, curr) => {
          acc[curr] = curr + "px";

          return acc;
        },
        {} as Record<string, string>
      ),
      transitionTimingFunction: { DEFAULT: "cubic-bezier(0.25, 0.1, 0.25, 1)" },
      transitionDuration: {
        DEFAULT: "200ms",
        ...transitionDurations
      },
      transitionDelay: {
        ...transitionDurations
      },
      borderRadius: (() => {
        const radius: Record<string | number, string> = {
          full: "999px",
          inherit: "inherit",
          0: "0px",
          lg: "var(--radius)",
          md: "calc(var(--radius) - 2px)",
          sm: "calc(var(--radius) - 4px)",
        };

        for (let i = 1; i <= 32; i += 1) {
          radius[i] = `${i}px`;
        }

        return radius;
      })()
    }
  },
  plugins: [
    ({
      addUtilities, matchUtilities
    }: any) => {
      addUtilities({
        // Inside-border utilities are defined in inside-border-fix.css to avoid Tailwind variant conflicts
        '.mask-border': {
          "mask": "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
          "mask-composite": "exclude",
          "pointer-events": "none"
        },
        ".center-x": { "@apply absolute left-1/2 -translate-x-1/2": {} },
        ".center-y": { "@apply absolute top-1/2 -translate-y-1/2": {} },
        ".center": { "@apply absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2": {} },
        ".flex-center": { "@apply flex items-center justify-center": {} },
        ".overlay": { "@apply absolute top-0 left-0 w-full h-full rounded-inherit": {} },
        ".text-gradient": { "@apply !bg-clip-text !text-transparent": {} }
      });
      matchUtilities(
        {
          'cw': (value: string) => {
            const width = parseInt(value);

            return {
              width: value,
              left: `calc(50% - ${width / 2}px)`
            };
          },
          'ch': (value: string) => {
            const height = parseInt(value);

            return {
              height: value,
              top: `calc(50% - ${height / 2}px)`
            };
          },
          'cs': (value: string) => {
            const size = parseInt(value);

            return {
              width: size,
              height: size,
              left: `calc(50% - ${size / 2}px)`,
              top: `calc(50% - ${size / 2}px)`
            };
          },
          'cmw': (value: string) => {
            const [maxWidth, paddingX] = value.split(',').map((v) => parseInt(v));

            const width = paddingX ? `calc(100% - ${paddingX * 2}px)` : '100%';

            return {
              maxWidth: maxWidth,
              width,
              left: `calc(50% - (min(${maxWidth}px, ${width}) / 2))`
            };
          },
          'mw': (value: string) => {
            const [maxWidth, paddingX] = value.split(',').map((v) => parseInt(v));

            const width = paddingX ? `calc(100% - ${paddingX * 2}px)` : '100%';

            return {
              maxWidth: maxWidth,
              width
            };
          }
        },
        { values: sizes }
      );
    },
    require("tailwind-gradient-mask-image"),
    require("@tailwindcss/typography"),
  ]
};

export default themeConfig;


================================================
FILE: tsconfig.json
================================================
{
  "compilerOptions": {
    "target": "ES2017",
    "lib": ["dom", "dom.iterable", "esnext"],
    "allowJs": true,
    "skipLibCheck": true,
    "strict": true,
    "noEmit": true,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "bundler",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "preserve",
    "incremental": true,
    "plugins": [
      {
        "name": "next"
      }
    ],
    "paths": {
      "@/*": ["./*"]
    }
  },
  "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx", ".next/types/**/*.ts"],
  "exclude": ["node_modules", "examples", "tests", "lib/e2b-backends/archive", "styles"]
}



================================================
FILE: .env.example
================================================
# Required
FIRECRAWL_API_KEY=your_firecrawl_api_key  # Get from https://firecrawl.dev (Web scraping)

# =================================================================================
# SANDBOX PROVIDER - Choose Option 1 OR 2
# =================================================================================

# Option 1: Vercel Sandbox (recommended - default)
# Set SANDBOX_PROVIDER=vercel and choose authentication method below
SANDBOX_PROVIDER=vercel

# Vercel Authentication - Choose method a OR b
# Method a: OIDC Token (recommended for development)
# Run `vercel link` then `vercel env pull` to get VERCEL_OIDC_TOKEN automatically
VERCEL_OIDC_TOKEN=auto_generated_by_vercel_env_pull

# Method b: Personal Access Token (for production or when OIDC unavailable)
# VERCEL_TEAM_ID=team_xxxxxxxxx      # Your Vercel team ID 
# VERCEL_PROJECT_ID=prj_xxxxxxxxx    # Your Vercel project ID
# VERCEL_TOKEN=vercel_xxxxxxxxxxxx   # Personal access token from Vercel dashboard

# Option 2: E2B Sandbox
# Set SANDBOX_PROVIDER=e2b and configure E2B_API_KEY below
# SANDBOX_PROVIDER=e2b
# E2B_API_KEY=your_e2b_api_key  # Get from https://e2b.dev

# =================================================================================
# AI PROVIDERS - Need at least one
# =================================================================================

# Vercel AI Gateway (recommended - provides access to multiple models)
AI_GATEWAY_API_KEY=your_ai_gateway_api_key  # Get from https://vercel.com/dashboard/ai-gateway/api-keys

# Individual provider keys (used when AI_GATEWAY_API_KEY is not set)
ANTHROPIC_API_KEY=your_anthropic_api_key  # Get from https://console.anthropic.com
OPENAI_API_KEY=your_openai_api_key  # Get from https://platform.openai.com (GPT-5)
GEMINI_API_KEY=your_gemini_api_key  # Get from https://aistudio.google.com/app/apikey
GROQ_API_KEY=your_groq_api_key  # Get from https://console.groq.com (Fast inference - Kimi K2 recommended)



================================================
FILE: .test
================================================
[Empty file]


================================================
FILE: app/globals.css
================================================
@import "../styles/main.css";


================================================
FILE: app/landing.tsx
================================================
"use client";

// useState not currently used but kept for future interactivity
import Link from "next/link";

// Import shared components
import { HeaderProvider } from "@/components/shared/header/HeaderContext";
// import HeaderBrandKit from "@/components/shared/header/BrandKit/BrandKit"; // Not used in current implementation
import HeaderWrapper from "@/components/shared/header/Wrapper/Wrapper";
import HeaderDropdownWrapper from "@/components/shared/header/Dropdown/Wrapper/Wrapper";
import ButtonUI from "@/components/ui/shadcn/button";

// Import hero section components
import HomeHeroBackground from "@/components/app/(home)/sections/hero/Background/Background";
import { BackgroundOuterPiece } from "@/components/app/(home)/sections/hero/Background/BackgroundOuterPiece";
import HomeHeroBadge from "@/components/app/(home)/sections/hero/Badge/Badge";
import HomeHeroPixi from "@/components/app/(home)/sections/hero/Pixi/Pixi";
import HomeHeroTitle from "@/components/app/(home)/sections/hero/Title/Title";
import HeroInput from "@/components/app/(home)/sections/hero-input/HeroInput";
import { Connector } from "@/components/shared/layout/curvy-rect";
import HeroFlame from "@/components/shared/effects/flame/hero-flame";
import FirecrawlIcon from "@/components/FirecrawlIcon";
import FirecrawlLogo from "@/components/FirecrawlLogo";

export default function LandingPage() {
  return (
    <HeaderProvider>
      <div className="min-h-screen bg-background-base">
        {/* Header/Navigation Section */}
        <HeaderDropdownWrapper />

        <div className="sticky top-0 left-0 w-full z-[101] bg-background-base header">
          <div className="absolute top-0 cmw-container border-x border-border-faint h-full pointer-events-none" />
          <div className="h-1 bg-border-faint w-full left-0 -bottom-1 absolute" />
          
          <div className="cmw-container absolute h-full pointer-events-none top-0">
            <Connector className="absolute -left-[10.5px] -bottom-11" />
            <Connector className="absolute -right-[10.5px] -bottom-11" />
          </div>

          <HeaderWrapper>
            <div className="max-w-[900px] mx-auto w-full flex justify-between items-center">
              <div className="flex gap-24 items-center">
                <Link href="/" className="flex items-center gap-2">
                  <FirecrawlIcon className="w-7 h-7 text-accent-black" />
                  <FirecrawlLogo />
                </Link>
              </div>

              <div className="flex gap-8">
                <Link
                  href="https://github.com/mendableai/open-lovable"
                  target="_blank"
                  className="contents"
                >
                  <ButtonUI variant="tertiary">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                    Use this Template
                  </ButtonUI>
                </Link>
              </div>
            </div>
          </HeaderWrapper>
        </div>

        {/* Hero Section */}
        <section className="overflow-x-clip" id="home-hero">
          <div className="pt-28 lg:pt-254 lg:-mt-100 pb-115 relative" id="hero-content">
            <HomeHeroPixi />
            <HeroFlame />
            <BackgroundOuterPiece />
            <HomeHeroBackground />

            <div className="relative container px-16">
              <HomeHeroBadge />
              <HomeHeroTitle />
              
              {/* Hero Input */}
              <div className="mt-24">
                <HeroInput />
              </div>
            </div>
          </div>
        </section>
      </div>
    </HeaderProvider>
  );
}


================================================
FILE: app/layout.tsx
================================================
import type { Metadata } from "next";
import { Inter, Roboto_Mono } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter"
});

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

const robotoMono = Roboto_Mono({
  subsets: ["latin"],
  variable: "--font-roboto-mono",
});

export const metadata: Metadata = {
  title: "Open Lovable v2",
  description: "Re-imagine any website in seconds with AI-powered website builder.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${geistSans.variable} ${geistMono.variable} ${robotoMono.variable} font-sans`}>
        {children}
      </body>
    </html>
  );
}



================================================
FILE: app/page.tsx
================================================
"use client";

import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { appConfig } from '@/config/app.config';
import { toast } from "sonner";

// Import shared components
import { Connector } from "@/components/shared/layout/curvy-rect";
import HeroFlame from "@/components/shared/effects/flame/hero-flame";
import AsciiExplosion from "@/components/shared/effects/flame/ascii-explosion";
import { HeaderProvider } from "@/components/shared/header/HeaderContext";

// Import hero section components
import HomeHeroBackground from "@/components/app/(home)/sections/hero/Background/Background";
import { BackgroundOuterPiece } from "@/components/app/(home)/sections/hero/Background/BackgroundOuterPiece";
import HomeHeroBadge from "@/components/app/(home)/sections/hero/Badge/Badge";
import HomeHeroPixi from "@/components/app/(home)/sections/hero/Pixi/Pixi";
import HomeHeroTitle from "@/components/app/(home)/sections/hero/Title/Title";
import HeroInputSubmitButton from "@/components/app/(home)/sections/hero-input/Button/Button";
// import Globe from "@/components/app/(home)/sections/hero-input/_svg/Globe";

// Import header components
import HeaderBrandKit from "@/components/shared/header/BrandKit/BrandKit";
import HeaderWrapper from "@/components/shared/header/Wrapper/Wrapper";
import HeaderDropdownWrapper from "@/components/shared/header/Dropdown/Wrapper/Wrapper";
import GithubIcon from "@/components/shared/header/Github/_svg/GithubIcon";
import ButtonUI from "@/components/ui/shadcn/button"

interface SearchResult {
  url: string;
  title: string;
  description: string;
  screenshot: string | null;
  markdown: string;
}

export default function HomePage() {
  const [url, setUrl] = useState<string>("");
  const [selectedStyle, setSelectedStyle] = useState<string>("1");
  const [selectedModel, setSelectedModel] = useState<string>(appConfig.ai.defaultModel);
  const [isValidUrl, setIsValidUrl] = useState<boolean>(false);
  const [showSearchTiles, setShowSearchTiles] = useState<boolean>(false);
  const [searchResults, setSearchResults] = useState<SearchResult[]>([]);
  const [isSearching, setIsSearching] = useState<boolean>(false);
  const [hasSearched, setHasSearched] = useState<boolean>(false);
  const [isFadingOut, setIsFadingOut] = useState<boolean>(false);
  const [showSelectMessage, setShowSelectMessage] = useState<boolean>(false);
  const [showInstructionsForIndex, setShowInstructionsForIndex] = useState<number | null>(null);
  const [additionalInstructions, setAdditionalInstructions] = useState<string>('');
  const router = useRouter();
  
  // Simple URL validation
  const validateUrl = (urlString: string) => {
    if (!urlString) return false;
    // Basic URL pattern - accepts domains with or without protocol
    const urlPattern = /^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/;
    return urlPattern.test(urlString.toLowerCase());
  };

  // Check if input is a URL (contains a dot)
  const isURL = (str: string): boolean => {
    const urlPattern = /^(https?:\/\/)?([a-zA-Z0-9-]+\.)+[a-zA-Z]{2,}(\/.*)?$/;
    return urlPattern.test(str.trim());
  };

  const styles = [
    { id: "1", name: "Glassmorphism", description: "Frosted glass effect" },
    { id: "2", name: "Neumorphism", description: "Soft 3D shadows" },
    { id: "3", name: "Brutalism", description: "Bold and raw" },
    { id: "4", name: "Minimalist", description: "Clean and simple" },
    { id: "5", name: "Dark Mode", description: "Dark theme design" },
    { id: "6", name: "Gradient Rich", description: "Vibrant gradients" },
    { id: "7", name: "3D Depth", description: "Dimensional layers" },
    { id: "8", name: "Retro Wave", description: "80s inspired" },
  ];

  const models = appConfig.ai.availableModels.map(model => ({
    id: model,
    name: appConfig.ai.modelDisplayNames[model] || model,
  }));

  const handleSubmit = async (selectedResult?: SearchResult) => {
    const inputValue = url.trim();
    
    if (!inputValue) {
      toast.error("Please enter a URL or search term");
      return;
    }
    
    // If it's a search result being selected, fade out and redirect
    if (selectedResult) {
      setIsFadingOut(true);
      
      // Wait for fade animation
      setTimeout(() => {
        sessionStorage.setItem('targetUrl', selectedResult.url);
        sessionStorage.setItem('selectedStyle', selectedStyle);
        sessionStorage.setItem('selectedModel', selectedModel);
        sessionStorage.setItem('autoStart', 'true');
        if (selectedResult.markdown) {
          sessionStorage.setItem('siteMarkdown', selectedResult.markdown);
        }
        router.push('/generation');
      }, 500);
      return;
    }
    
    // If it's a URL, go straight to generation
    if (isURL(inputValue)) {
      sessionStorage.setItem('targetUrl', inputValue);
      sessionStorage.setItem('selectedStyle', selectedStyle);
      sessionStorage.setItem('selectedModel', selectedModel);
      sessionStorage.setItem('autoStart', 'true');
      router.push('/generation');
    } else {
      // It's a search term, fade out if results exist, then search
      if (hasSearched && searchResults.length > 0) {
        setIsFadingOut(true);
        
        setTimeout(async () => {
          setSearchResults([]);
          setIsFadingOut(false);
          setShowSelectMessage(true);
          
          // Perform new search
          await performSearch(inputValue);
          setHasSearched(true);
          setShowSearchTiles(true);
          setShowSelectMessage(false);
          
          // Smooth scroll to carousel
          setTimeout(() => {
            const carouselSection = document.querySelector('.carousel-section');
            if (carouselSection) {
              carouselSection.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }
          }, 300);
        }, 500);
      } else {
        // First search, no fade needed
        setShowSelectMessage(true);
        setIsSearching(true);
        setHasSearched(true);
        setShowSearchTiles(true);
        
        // Scroll to carousel area immediately
        setTimeout(() => {
          const carouselSection = document.querySelector('.carousel-section');
          if (carouselSection) {
            carouselSection.scrollIntoView({ behavior: 'smooth', block: 'center' });
          }
        }, 100);
        
        await performSearch(inputValue);
        setShowSelectMessage(false);
        setIsSearching(false);
        
        // Smooth scroll to carousel
        setTimeout(() => {
          const carouselSection = document.querySelector('.carousel-section');
          if (carouselSection) {
            carouselSection.scrollIntoView({ behavior: 'smooth', block: 'center' });
          }
        }, 300);
      }
    }
  };

  // Perform search when user types
  const performSearch = async (searchQuery: string) => {
    if (!searchQuery.trim() || isURL(searchQuery)) {
      setSearchResults([]);
      setShowSearchTiles(false);
      return;
    }

    setIsSearching(true);
    setShowSearchTiles(true);
    try {
      const response = await fetch('/api/search', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ query: searchQuery }),
      });

      if (response.ok) {
        const data = await response.json();
        setSearchResults(data.results || []);
        setShowSearchTiles(true);
      }
    } catch (error) {
      console.error('Search error:', error);
    } finally {
      setIsSearching(false);
    }
  };

  return (
    <HeaderProvider>
      <div className="min-h-screen bg-background-base">
        {/* Header/Navigation Section */}
        <HeaderDropdownWrapper />

        <div className="sticky top-0 left-0 w-full z-[101] bg-background-base header">
          <div className="absolute top-0 cmw-container border-x border-border-faint h-full pointer-events-none" />
          <div className="h-1 bg-border-faint w-full left-0 -bottom-1 absolute" />
          <div className="cmw-container absolute h-full pointer-events-none top-0">
            <Connector className="absolute -left-[10.5px] -bottom-11" />
            <Connector className="absolute -right-[10.5px] -bottom-11" />
          </div>

          <HeaderWrapper>
            <div className="max-w-[900px] mx-auto w-full flex justify-between items-center">
              <div className="flex gap-24 items-center">
                <HeaderBrandKit />
              </div>
              <div className="flex gap-8">
                <a
                  className="contents"
                  href="https://github.com/mendableai/open-lovable"
                  target="_blank"
                >
                  <ButtonUI variant="tertiary">
                    <GithubIcon />
                    Use this Template
                  </ButtonUI>
                </a>
              </div>
            </div>
          </HeaderWrapper>
        </div>

        {/* Hero Section */}
        <section className="overflow-x-clip" id="home-hero">
          <div className="pt-28 lg:pt-254 lg:-mt-100 pb-115 relative" id="hero-content">
            <HomeHeroPixi />
            <HeroFlame />
            <BackgroundOuterPiece />
            <HomeHeroBackground />

            <div className="relative container px-16">
              <HomeHeroBadge />
              <HomeHeroTitle />
              <p className="text-center text-body-large">
                Re-imagine any website, in seconds.
              </p>
              <Link
                className="bg-black-alpha-4 hover:bg-black-alpha-6 rounded-6 px-8 lg:px-6 text-label-large h-30 lg:h-24 block mt-8 mx-auto w-max gap-4 transition-all"
                href="#"
                onClick={(e) => e.preventDefault()}
              >
                Powered by Firecrawl.
              </Link>
            </div>
          </div>

          {/* Mini Playground Input */}
          <div className="container lg:contents !p-16 relative -mt-90">
            <div className="absolute top-0 left-[calc(50%-50vw)] w-screen h-1 bg-border-faint lg:hidden" />
            <div className="absolute bottom-0 left-[calc(50%-50vw)] w-screen h-1 bg-border-faint lg:hidden" />
            <Connector className="-top-10 -left-[10.5px] lg:hidden" />
            <Connector className="-top-10 -right-[10.5px] lg:hidden" />
            <Connector className="-bottom-10 -left-[10.5px] lg:hidden" />
            <Connector className="-bottom-10 -right-[10.5px] lg:hidden" />

            {/* Hero Input Component */}
            <div className="max-w-552 mx-auto z-[11] lg:z-[2]">
              <div className="rounded-20 -mt-30 lg:-mt-30">
                <div
                  className="bg-white rounded-20"
                  style={{
                    boxShadow:
                      "0px 0px 44px 0px rgba(0, 0, 0, 0.02), 0px 88px 56px -20px rgba(0, 0, 0, 0.03), 0px 56px 56px -20px rgba(0, 0, 0, 0.02), 0px 32px 32px -20px rgba(0, 0, 0, 0.03), 0px 16px 24px -12px rgba(0, 0, 0, 0.03), 0px 0px 0px 1px rgba(0, 0, 0, 0.05), 0px 0px 0px 10px #F9F9F9",
                  }}
                >

                <div className="p-16 flex gap-12 items-center w-full relative bg-white rounded-20">
                  {/* Show different UI when search results are displayed */}
                  {hasSearched && searchResults.length > 0 && !isFadingOut ? (
                    <>
                      {/* Selection mode icon */}
                      <svg 
                        width="20" 
                        height="20" 
                        viewBox="0 0 20 20" 
                        fill="none" 
                        xmlns="http://www.w3.org/2000/svg"
                        className="opacity-40 flex-shrink-0"
                      >
                        <rect x="2" y="4" width="7" height="5" rx="1" stroke="currentColor" strokeWidth="1.5"/>
                        <rect x="11" y="4" width="7" height="5" rx="1" stroke="currentColor" strokeWidth="1.5"/>
                        <rect x="2" y="11" width="7" height="5" rx="1" stroke="currentColor" strokeWidth="1.5"/>
                        <rect x="11" y="11" width="7" height="5" rx="1" stroke="currentColor" strokeWidth="1.5"/>
                      </svg>
                      
                      {/* Selection message */}
                      <div className="flex-1 text-body-input text-accent-black">
                        Select which site to clone from the results below
                      </div>
                      
                      {/* Search again button */}
                      <button
                        onClick={(e) => {
                          e.preventDefault();
                          setIsFadingOut(true);
                          setTimeout(() => {
                            setSearchResults([]);
                            setHasSearched(false);
                            setShowSearchTiles(false);
                            setIsFadingOut(false);
                            setUrl('');
                          }, 500);
                        }}
                        className="button relative rounded-10 px-12 py-8 text-label-medium font-medium flex items-center justify-center gap-6 bg-gray-100 hover:bg-gray-200 text-gray-700 active:scale-[0.995] transition-all"
                      >
                        <svg 
                          width="16" 
                          height="16" 
                          viewBox="0 0 16 16" 
                          fill="none" 
                          xmlns="http://www.w3.org/2000/svg"
                          className="opacity-60"
                        >
                          <path d="M14 14L10 10M11 6.5C11 9 9 11 6.5 11C4 11 2 9 2 6.5C2 4 4 2 6.5 2C9 2 11 4 11 6.5Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                        </svg>
                        <span>Search Again</span>
                      </button>
                    </>
                  ) : (
                    <>
                      {isURL(url) ? (
                        // Scrape icon for URLs
                        <svg 
                          width="20" 
                          height="20" 
                          viewBox="0 0 20 20" 
                          fill="none" 
                          xmlns="http://www.w3.org/2000/svg"
                          className="opacity-40 flex-shrink-0"
                        >
                          <rect x="3" y="3" width="14" height="14" rx="2" stroke="currentColor" strokeWidth="1.5"/>
                          <path d="M7 10L9 12L13 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      ) : (
                        // Search icon for search terms
                        <svg 
                          width="20" 
                          height="20" 
                          viewBox="0 0 20 20" 
                          fill="none" 
                          xmlns="http://www.w3.org/2000/svg"
                          className="opacity-40 flex-shrink-0"
                        >
                          <circle cx="8.5" cy="8.5" r="5.5" stroke="currentColor" strokeWidth="1.5"/>
                          <path d="M12.5 12.5L16.5 16.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                        </svg>
                      )}
                      <input
                        className="flex-1 bg-transparent text-body-input text-accent-black placeholder:text-black-alpha-48 focus:outline-none focus:ring-0 focus:border-transparent"
                        placeholder="Enter URL or search term..."
                        type="text"
                        value={url}
                        disabled={isSearching}
                        onChange={(e) => {
                          const value = e.target.value;
                          setUrl(value);
                          setIsValidUrl(validateUrl(value));
                          // Reset search state when input changes
                          if (value.trim() === "") {
                            setShowSearchTiles(false);
                            setHasSearched(false);
                            setSearchResults([]);
                          }
                        }}
                        onKeyDown={(e) => {
                          if (e.key === "Enter" && !isSearching) {
                            e.preventDefault();
                            handleSubmit();
                          }
                        }}
                        onFocus={() => {
                          if (url.trim() && !isURL(url) && searchResults.length > 0) {
                            setShowSearchTiles(true);
                          }
                        }}
                      />
                      <div
                        onClick={(e) => {
                          e.preventDefault();
                          if (!isSearching) {
                            handleSubmit();
                          }
                        }}
                        className={isSearching ? 'pointer-events-none' : ''}
                      >
                        <HeroInputSubmitButton 
                          dirty={url.length > 0} 
                          buttonText={isURL(url) ? 'Scrape Site' : 'Search'} 
                          disabled={isSearching}
                        />
                      </div>
                    </>
                  )}
                </div>


                {/* Options Section - Only show when valid URL */}
                <div className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  isValidUrl ? 'max-h-[200px] opacity-100' : 'max-h-0 opacity-0'
                }`}>
                  <div className="p-[28px]">
                    <div className="border-t border-gray-100 bg-white">
                      {/* Style Selector */}
                      <div className={`mb-2 pt-4 transition-all duration-300 transform ${
                        isValidUrl ? 'translate-y-0 opacity-100' : '-translate-y-2 opacity-0'
                      }`} style={{ transitionDelay: '100ms' }}>
                        <div className="grid grid-cols-4 gap-1">
                          {styles.map((style, index) => (
                            <button
                              key={style.id}
                              onClick={() => setSelectedStyle(style.id)}
                              className={`
                                py-2.5 px-2 rounded text-[10px] font-medium border transition-all text-center
                                ${selectedStyle === style.id 
                                  ? 'border-orange-500 bg-orange-50 text-orange-900' 
                                  : 'border-gray-200 hover:border-gray-300 bg-white text-gray-700'
                                }
                                ${isValidUrl ? 'opacity-100' : 'opacity-0'}
                              `}
                              style={{
                                transitionDelay: `${150 + index * 30}ms`,
                                transition: 'all 0.3s ease-in-out'
                              }}
                            >
                              {style.name}
                            </button>
                          ))}
                        </div>
                      </div>

                      {/* Model Selector Dropdown and Additional Instructions */}
                      <div className={`flex gap-3 mt-2 pb-4 transition-all duration-300 transform ${
                        isValidUrl ? 'translate-y-0 opacity-100' : '-translate-y-2 opacity-0'
                      }`} style={{ transitionDelay: '400ms' }}>
                        {/* Model Dropdown */}
                        <select
                          value={selectedModel}
                          onChange={(e) => setSelectedModel(e.target.value)}
                          className="px-3 py-2.5 text-[10px] font-medium text-gray-700 bg-white rounded border border-gray-200 focus:border-orange-500 focus:outline-none focus:ring-1 focus:ring-orange-500"
                        >
                          {models.map((model) => (
                            <option key={model.id} value={model.id}>
                              {model.name}
                            </option>
                          ))}
                        </select>
                        
                        {/* Additional Instructions */}
                        <input
                          type="text"
                          className="flex-1 px-3 py-2.5 text-[10px] text-gray-700 bg-gray-50 rounded border border-gray-200 focus:border-orange-500 focus:outline-none focus:ring-1 focus:ring-orange-500 placeholder:text-gray-400"
                          placeholder="Additional instructions (optional)"
                          onChange={(e) => sessionStorage.setItem('additionalInstructions', e.target.value)}
                        />
                      </div>
                    </div>
                  </div>
                </div>

                </div>

                <div className="h-248 top-84 cw-768 pointer-events-none absolute overflow-clip -z-10">
                  <AsciiExplosion className="-top-200" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Full-width oval carousel section */}
        {showSearchTiles && hasSearched && (
          <section className={`carousel-section relative w-full overflow-hidden mt-32 mb-32 transition-opacity duration-500 ${
            isFadingOut ? 'opacity-0' : 'opacity-100'
          }`}>
            <div className="absolute inset-0 bg-gradient-to-b from-gray-50/50 to-white rounded-[50%] transform scale-x-150 -translate-y-24" />
            
            {isSearching ? (
              // Loading state with animated scrolling skeletons
              <div className="relative h-[250px] overflow-hidden">
                {/* Edge fade overlays */}
                <div className="absolute left-0 top-0 bottom-0 w-[120px] z-20 pointer-events-none" style={{background: 'linear-gradient(to right, white 0%, white 20%, transparent 100%)'}} />
                <div className="absolute right-0 top-0 bottom-0 w-[120px] z-20 pointer-events-none" style={{background: 'linear-gradient(to left, white 0%, white 20%, transparent 100%)'}} />
                
                <div className="carousel-container absolute left-0 flex gap-12 py-4">
                  {/* Duplicate skeleton tiles for continuous scroll */}
                  {[...Array(10), ...Array(10)].map((_, index) => (
                    <div
                      key={`loading-${index}`}
                      className="flex-shrink-0 w-[400px] h-[240px] rounded-lg overflow-hidden border-2 border-gray-200/30 bg-white relative"
                    >
                      <div className="absolute inset-0 skeleton-shimmer">
                        <div className="absolute inset-0 bg-gradient-to-r from-gray-100 via-gray-50 to-gray-100 skeleton-gradient" />
                      </div>
                      
                      {/* Fake browser UI - 5x bigger */}
                      <div className="absolute top-0 left-0 right-0 h-40 bg-gray-100 border-b border-gray-200/50 flex items-center px-6 gap-4">
                        <div className="flex gap-3">
                          <div className="w-5 h-5 rounded-full bg-gray-300 animate-pulse" />
                          <div className="w-5 h-5 rounded-full bg-gray-300 animate-pulse" style={{ animationDelay: '0.1s' }} />
                          <div className="w-5 h-5 rounded-full bg-gray-300 animate-pulse" style={{ animationDelay: '0.2s' }} />
                        </div>
                        <div className="flex-1 h-8 bg-gray-200 rounded-md mx-6 animate-pulse" />
                      </div>
                      
                      {/* Content skeleton - positioned just below nav bar */}
                      <div className="absolute top-44 left-4 right-4">
                        <div className="h-3 bg-gray-200 rounded w-3/4 mb-2 animate-pulse" />
                        <div className="h-3 bg-gray-150 rounded w-1/2 mb-2 animate-pulse" style={{ animationDelay: '0.2s' }} />
                        <div className="h-3 bg-gray-150 rounded w-2/3 animate-pulse" style={{ animationDelay: '0.3s' }} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ) : searchResults.length > 0 ? (
              // Actual results
              <div className="relative h-[250px] overflow-hidden">
                {/* Edge fade overlays */}
                <div className="absolute left-0 top-0 bottom-0 w-[120px] z-20 pointer-events-none" style={{background: 'linear-gradient(to right, white 0%, white 20%, transparent 100%)'}} />
                <div className="absolute right-0 top-0 bottom-0 w-[120px] z-20 pointer-events-none" style={{background: 'linear-gradient(to left, white 0%, white 20%, transparent 100%)'}} />
                
                <div className="carousel-container absolute left-0 flex gap-12 py-4">
                  {/* Duplicate results for infinite scroll */}
                  {[...searchResults, ...searchResults].map((result, index) => (
                    <div
                      key={`${result.url}-${index}`}
                      className="group flex-shrink-0 w-[400px] h-[240px] rounded-lg overflow-hidden border-2 border-gray-200/50 transition-all duration-300 hover:shadow-2xl bg-white relative"
                      onMouseLeave={() => {
                        if (showInstructionsForIndex === index) {
                          setShowInstructionsForIndex(null);
                          setAdditionalInstructions('');
                        }
                      }}
                    >
                      {/* Hover overlay with clone buttons or instructions input */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 flex flex-col items-center justify-center p-6">
                        {showInstructionsForIndex === index ? (
                          /* Instructions input view - matching main input style exactly */
                          <div className="w-full max-w-[380px]">
                            <div className="bg-white rounded-20" style={{
                              boxShadow: "0px 0px 44px 0px rgba(0, 0, 0, 0.02), 0px 88px 56px -20px rgba(0, 0, 0, 0.03), 0px 56px 56px -20px rgba(0, 0, 0, 0.02), 0px 32px 32px -20px rgba(0, 0, 0, 0.03), 0px 16px 24px -12px rgba(0, 0, 0, 0.03), 0px 0px 0px 1px rgba(0, 0, 0, 0.05)"
                            }}>
                              {/* Input area matching main search */}
                              <div className="p-16 flex gap-12 items-start w-full relative">
                                {/* Instructions icon */}
                                <div className="mt-2 flex-shrink-0">
                                  <svg 
                                    width="20" 
                                    height="20" 
                                    viewBox="0 0 20 20" 
                                    fill="none" 
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="opacity-40"
                                  >
                                    <path d="M5 5H15M5 10H15M5 15H10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                                  </svg>
                                </div>
                                
                                <textarea
                                  value={additionalInstructions}
                                  onChange={(e) => setAdditionalInstructions(e.target.value)}
                                  placeholder="Describe your customizations..."
                                  className="flex-1 bg-transparent text-body-input text-accent-black placeholder:text-black-alpha-48 focus:outline-none focus:ring-0 focus:border-transparent resize-none min-h-[60px]"
                                  autoFocus
                                  onClick={(e) => e.stopPropagation()}
                                  onKeyDown={(e) => {
                                    if (e.key === 'Escape') {
                                      e.stopPropagation();
                                      setShowInstructionsForIndex(null);
                                      setAdditionalInstructions('');
                                    }
                                  }}
                                />
                              </div>
                              
                              {/* Divider */}
                              <div className="border-t border-black-alpha-5" />
                              
                              {/* Buttons area matching main style */}
                              <div className="p-10 flex justify-between items-center">
                                <button
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    setShowInstructionsForIndex(null);
                                    setAdditionalInstructions('');
                                  }}
                                  className="button relative rounded-10 px-8 py-8 text-label-medium font-medium flex items-center justify-center bg-black-alpha-4 hover:bg-black-alpha-6 text-black-alpha-48 active:scale-[0.995] transition-all"
                                >
                                  <svg 
                                    width="20" 
                                    height="20" 
                                    viewBox="0 0 20 20" 
                                    fill="none" 
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path d="M12 5L7 10L12 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                  </svg>
                                </button>
                                
                                <button
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    if (additionalInstructions.trim()) {
                                      sessionStorage.setItem('additionalInstructions', additionalInstructions);
                                      handleSubmit(result);
                                    }
                                  }}
                                  disabled={!additionalInstructions.trim()}
                                  className={`
                                    button relative rounded-10 px-8 py-8 text-label-medium font-medium
                                    flex items-center justify-center gap-6
                                    ${additionalInstructions.trim() 
                                      ? 'button-primary text-accent-white active:scale-[0.995]' 
                                      : 'bg-black-alpha-4 text-black-alpha-24 cursor-not-allowed'
                                    }
                                  `}
                                >
                                  {additionalInstructions.trim() && <div className="button-background absolute inset-0 rounded-10 pointer-events-none" />}
                                  <span className="px-6 relative">Apply & Clone</span>
                                  <svg 
                                    width="20" 
                                    height="20" 
                                    viewBox="0 0 20 20" 
                                    fill="none" 
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="relative"
                                  >
                                    <path d="M11.6667 4.79163L16.875 9.99994M16.875 9.99994L11.6667 15.2083M16.875 9.99994H3.125" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"/>
                                  </svg>
                                </button>
                              </div>
                            </div>
                          </div>
                        ) : (
                          /* Default buttons view */
                          <>
                            <div className="text-white text-center mb-3">
                              <p className="text-base font-semibold mb-0.5">{result.title}</p>
                              <p className="text-[11px] opacity-80">Choose how to clone this site</p>
                            </div>
                            
                            <div className="flex gap-3 justify-center">
                              {/* Instant Clone Button - Orange/Heat style */}
                              <button
                                onClick={(e) => {
                                  e.stopPropagation();
                                  handleSubmit(result);
                                }}
                                className="bg-orange-500 hover:bg-orange-600 flex items-center justify-center button relative text-label-medium button-primary group/button rounded-10 p-8 gap-2 text-white active:scale-[0.995]"
                              >
                                <div className="button-background absolute inset-0 rounded-10 pointer-events-none" />
                                <svg 
                                  width="20" 
                                  height="20" 
                                  viewBox="0 0 20 20" 
                                  fill="none" 
                                  xmlns="http://www.w3.org/2000/svg"
                                  className="relative"
                                >
                                  <path d="M11.6667 4.79163L16.875 9.99994M16.875 9.99994L11.6667 15.2083M16.875 9.99994H3.125" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"/>
                                </svg>
                                <span className="px-6 relative">Instant Clone</span>
                              </button>
                              
                              {/* Instructions Button - Gray style */}
                              <button
                                onClick={(e) => {
                                  e.stopPropagation();
                                  setShowInstructionsForIndex(index);
                                  setAdditionalInstructions('');
                                }}
                                className="bg-gray-100 hover:bg-gray-200 flex items-center justify-center button relative text-label-medium rounded-10 p-8 gap-2 text-gray-700 active:scale-[0.995]"
                              >
                                <svg 
                                  width="20" 
                                  height="20" 
                                  viewBox="0 0 20 20" 
                                  fill="none" 
                                  xmlns="http://www.w3.org/2000/svg"
                                  className="opacity-60"
                                >
                                  <path d="M5 5H15M5 10H15M5 15H10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                                  <path d="M14 14L16 16L14 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                                <span className="px-6">Add Instructions</span>
                              </button>
                            </div>
                          </>
                        )}
                      </div>
                      
                      {result.screenshot ? (
                        <img 
                          src={result.screenshot} 
                          alt={result.title}
                          className="w-full h-full object-cover object-top"
                          loading="lazy"
                        />
                      ) : (
                        <div className="w-full h-full bg-gradient-to-br from-gray-100 to-gray-50 flex items-center justify-center">
                          <div className="text-center">
                            <div className="w-16 h-16 rounded-full bg-gray-200 mx-auto mb-3 flex items-center justify-center">
                              <svg 
                                width="32" 
                                height="32" 
                                viewBox="0 0 24 24" 
                                fill="none" 
                                xmlns="http://www.w3.org/2000/svg"
                                className="text-gray-400"
                              >
                                <rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="1.5"/>
                                <path d="M3 9H21" stroke="currentColor" strokeWidth="1.5"/>
                                <circle cx="6" cy="6" r="1" fill="currentColor"/>
                                <circle cx="9" cy="6" r="1" fill="currentColor"/>
                                <circle cx="12" cy="6" r="1" fill="currentColor"/>
                              </svg>
                            </div>
                            <p className="text-gray-500 text-sm font-medium">{result.title}</p>
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              // No results state
              <div className="relative h-[250px] flex items-center justify-center">
                <div className="text-center">
                  <div className="mb-4">
                    <svg className="w-16 h-16 mx-auto text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                  </div>
                  <p className="text-gray-500 text-lg">No results found</p>
                  <p className="text-gray-400 text-sm mt-1">Try a different search term</p>
                </div>
              </div>
            )}
          </section>
        )}

      </div>

      <style jsx>{`
        @keyframes infiniteScroll {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }

        @keyframes shimmer {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .carousel-container {
          animation: infiniteScroll 30s linear infinite;
        }

        .carousel-container:hover {
          animation-play-state: paused;
        }

        .skeleton-shimmer {
          position: relative;
          overflow: hidden;
        }

        .skeleton-gradient {
          animation: shimmer 2s infinite;
        }
      `}</style>
    </HeaderProvider>
  );
}


================================================
FILE: app/api/analyze-edit-intent/route.ts
================================================
import { NextRequest, NextResponse } from 'next/server';
import { createGroq } from '@ai-sdk/groq';
import { createAnthropic } from '@ai-sdk/anthropic';
import { createOpenAI } from '@ai-sdk/openai';
import { createGoogleGenerativeAI } from '@ai-sdk/google';
import { generateObject } from 'ai';
import { z } from 'zod';
// import type { FileManifest } from '@/types/file-manifest'; // Type is used implicitly through manifest parameter

// Check if we're using Vercel AI Gateway
const isUsingAIGateway = !!process.env.AI_GATEWAY_API_KEY;
const aiGatewayBaseURL = 'https://ai-gateway.vercel.sh/v1';

const groq = createGroq({
  apiKey: process.env.AI_GATEWAY_API_KEY ?? process.env.GROQ_API_KEY,
  baseURL: isUsingAIGateway ? aiGatewayBaseURL : undefined,
});

const anthropic = createAnthropic({
  apiKey: process.env.AI_GATEWAY_API_KEY ?? process.env.ANTHROPIC_API_KEY,
  baseURL: isUsingAIGateway ? aiGatewayBaseURL : (process.env.ANTHROPIC_BASE_URL || 'https://api.anthropic.com/v1'),
});

const openai = createOpenAI({
  apiKey: process.env.AI_GATEWAY_API_KEY ?? process.env.OPENAI_API_KEY,
  baseURL: isUsingAIGateway ? aiGatewayBaseURL : process.env.OPENAI_BASE_URL,
});

const googleGenerativeAI = createGoogleGenerativeAI({
  apiKey: process.env.AI_GATEWAY_API_KEY ?? process.env.GEMINI_API_KEY,
  baseURL: isUsingAIGateway ? aiGatewayBaseURL : undefined,
});

// Schema for the AI's search plan - not file selection!
const searchPlanSchema = z.object({
  editType: z.enum([
    'UPDATE_COMPONENT',
    'ADD_FEATURE', 
    'FIX_ISSUE',
    'UPDATE_STYLE',
    'REFACTOR',
    'ADD_DEPENDENCY',
    'REMOVE_ELEMENT'
  ]).describe('The type of edit being requested'),
  
  reasoning: z.string().describe('Explanation of the search strategy'),
  
  searchTerms: z.array(z.string()).describe('Specific text to search for (case-insensitive). Be VERY specific - exact button text, class names, etc.'),
  
  regexPatterns: z.array(z.string()).optional().describe('Regex patterns for finding code structures (e.g., "className=[\\"\\\'].*header.*[\\"\\\']")'),
  
  fileTypesToSearch: z.array(z.string()).default(['.jsx', '.tsx', '.js', '.ts']).describe('File extensions to search'),
  
  expectedMatches: z.number().min(1).max(10).default(1).describe('Expected number of matches (helps validate search worked)'),
  
  fallbackSearch: z.object({
    terms: z.array(z.string()),
    patterns: z.array(z.string()).optional()
  }).optional().describe('Backup search if primary fails')
});

export async function POST(request: NextRequest) {
  try {
    const { prompt, manifest, model = 'openai/gpt-oss-20b' } = await request.json();
    
    console.log('[analyze-edit-intent] Request received');
    console.log('[analyze-edit-intent] Prompt:', prompt);
    console.log('[analyze-edit-intent] Model:', model);
    console.log('[analyze-edit-intent] Manifest files count:', manifest?.files ? Object.keys(manifest.files).length : 0);
    
    if (!prompt || !manifest) {
      return NextResponse.json({
        error: 'prompt and manifest are required'
      }, { status: 400 });
    }
    
    // Create a summary of available files for the AI
    const validFiles = Object.entries(manifest.files as Record<string, any>)
      .filter(([path]) => {
        // Filter out invalid paths
        return path.includes('.') && !path.match(/\/\d+$/);
      });
    
    const fileSummary = validFiles
      .map(([path, info]: [string, any]) => {
        const componentName = info.componentInfo?.name || path.split('/').pop();
        // const hasImports = info.imports?.length > 0; // Kept for future use
        const childComponents = info.componentInfo?.childComponents?.join(', ') || 'none';
        return `- ${path} (${componentName}, renders: ${childComponents})`;
      })
      .join('\n');
    
    console.log('[analyze-edit-intent] Valid files found:', validFiles.length);
    
    if (validFiles.length === 0) {
      console.error('[analyze-edit-intent] No valid files found in manifest');
      return NextResponse.json({
        success: false,
        error: 'No valid files found in manifest'
      }, { status: 400 });
    }
    
    console.log('[analyze-edit-intent] Analyzing prompt:', prompt);
    console.log('[analyze-edit-intent] File summary preview:', fileSummary.split('\n').slice(0, 5).join('\n'));
    
    // Select the appropriate AI model based on the request
    let aiModel;
    if (model.startsWith('anthropic/')) {
      aiModel = anthropic(model.replace('anthropic/', ''));
    } else if (model.startsWith('openai/')) {
      if (model.includes('gpt-oss')) {
        aiModel = groq(model);
      } else {
        aiModel = openai(model.replace('openai/', ''));
      }
    } else if (model.startsWith('google/')) {
      aiModel = googleGenerativeAI(model.replace('google/', ''));
    } else {
      // Default to groq if model format is unclear
      aiModel = groq(model);
    }
    
    console.log('[analyze-edit-intent] Using AI model:', model);
    
    // Use AI to create a search plan
    const result = await generateObject({
      model: aiModel,
      schema: searchPlanSchema,
      messages: [
        {
          role: 'system',
          content: `You are an expert at planning code searches. Your job is to create a search strategy to find the exact code that needs to be edited.

DO NOT GUESS which files to edit. Instead, provide specific search terms that will locate the code.

SEARCH STRATEGY RULES:
1. For text changes (e.g., "change 'Start Deploying' to 'Go Now'"):
   - Search for the EXACT text: "Start Deploying"
   
2. For style changes (e.g., "make header black"):
   - Search for component names: "Header", "<header"
   - Search for class names: "header", "navbar"
   - Search for className attributes containing relevant words
   
3. For removing elements (e.g., "remove the deploy button"):
   - Search for the button text or aria-label
   - Search for relevant IDs or data-testids
   
4. For navigation/header issues:
   - Search for: "navigation", "nav", "Header", "navbar"
   - Look for Link components or href attributes
   
5. Be SPECIFIC:
   - Use exact capitalization for user-visible text
   - Include multiple search terms for redundancy
   - Add regex patterns for structural searches

Current project structure for context:
${fileSummary}`
        },
        {
          role: 'user',
          content: `User request: "${prompt}"

Create a search plan to find the exact code that needs to be modified. Include specific search terms and patterns.`
        }
      ]
    });
    
    console.log('[analyze-edit-intent] Search plan created:', {
      editType: result.object.editType,
      searchTerms: result.object.searchTerms,
      patterns: result.object.regexPatterns?.length || 0,
      reasoning: result.object.reasoning
    });
    
    // Return the search plan, not file matches
    return NextResponse.json({
      success: true,
      searchPlan: result.object
    });
    
  } catch (error) {
    console.error('[analyze-edit-intent] Error:', error);
    return NextResponse.json({
      success: false,
      error: (error as Error).message
    }, { status: 500 });
  }
}


================================================
FILE: app/api/apply-ai-code/route.ts
================================================
import { NextRequest, NextResponse } from 'next/server';
import type { SandboxState } from '@/types/sandbox';
import type { ConversationState } from '@/types/conversation';

declare global {
  var conversationState: ConversationState | null;
}

interface ParsedResponse {
  explanation: string;
  template: string;
  files: Array<{ path: string; content: string }>;
  packages: string[];
  commands: string[];
  structure: string | null;
}

function parseAIResponse(response: string): ParsedResponse {
  const sections = {
    files: [] as Array<{ path: string; content: string }>,
    commands: [] as string[],
    packages: [] as string[],
    structure: null as string | null,
    explanation: '',
    template: ''
  };

  // Parse file sections - handle duplicates and prefer complete versions
  const fileMap = new Map<string, { content: string; isComplete: boolean }>();
  
  const fileRegex = /<file path="([^"]+)">([\s\S]*?)(?:<\/file>|$)/g;
  let match;
  while ((match = fileRegex.exec(response)) !== null) {
    const filePath = match[1];
    const content = match[2].trim();
    const hasClosingTag = response.substring(match.index, match.index + match[0].length).includes('</file>');
    
    // Check if this file already exists in our map
    const existing = fileMap.get(filePath);
    
    // Decide whether to keep this version
    let shouldReplace = false;
    if (!existing) {
      shouldReplace = true; // First occurrence
    } else if (!existing.isComplete && hasClosingTag) {
      shouldReplace = true; // Replace incomplete with complete
      console.log(`[parseAIResponse] Replacing incomplete ${filePath} with complete version`);
    } else if (existing.isComplete && hasClosingTag && content.length > existing.content.length) {
      shouldReplace = true; // Replace with longer complete version
      console.log(`[parseAIResponse] Replacing ${filePath} with longer complete version`);
    } else if (!existing.isComplete && !hasClosingTag && content.length > existing.content.length) {
      shouldReplace = true; // Both incomplete, keep longer one
    }
    
    if (shouldReplace) {
      // Additional validation: reject obviously broken content
      if (content.includes('...') && !content.includes('...props') && !content.includes('...rest')) {
        console.warn(`[parseAIResponse] Warning: ${filePath} contains ellipsis, may be truncated`);
        // Still use it if it's the only version we have
        if (!existing) {
          fileMap.set(filePath, { content, isComplete: hasClosingTag });
        }
      } else {
        fileMap.set(filePath, { content, isComplete: hasClosingTag });
      }
    }
  }
  
  // Convert map to array for sections.files
  for (const [path, { content, isComplete }] of fileMap.entries()) {
    if (!isComplete) {
      console.log(`[parseAIResponse] Warning: File ${path} appears to be truncated (no closing tag)`);
    }
    
    sections.files.push({
      path,
      content
    });
  }

  // Parse commands
  const cmdRegex = /<command>(.*?)<\/command>/g;
  while ((match = cmdRegex.exec(response)) !== null) {
    sections.commands.push(match[1].trim());
  }

  // Parse packages - support both <package> and <packages> tags
  const pkgRegex = /<package>(.*?)<\/package>/g;
  while ((match = pkgRegex.exec(response)) !== null) {
    sections.packages.push(match[1].trim());
  }
  
  // Also parse <packages> tag with multiple packages
  const packagesRegex = /<packages>([\s\S]*?)<\/packages>/;
  const packagesMatch = response.match(packagesRegex);
  if (packagesMatch) {
    const packagesContent = packagesMatch[1].trim();
    // Split by newlines or commas
    const packagesList = packagesContent.split(/[\n,]+/)
      .map(pkg => pkg.trim())
      .filter(pkg => pkg.length > 0);
    sections.packages.push(...packagesList);
  }

  // Parse structure
  const structureMatch = /<structure>([\s\S]*?)<\/structure>/;
  const structResult = response.match(structureMatch);
  if (structResult) {
    sections.structure = structResult[1].trim();
  }

  // Parse explanation
  const explanationMatch = /<explanation>([\s\S]*?)<\/explanation>/;
  const explResult = response.match(explanationMatch);
  if (explResult) {
    sections.explanation = explResult[1].trim();
  }

  // Parse template
  const templateMatch = /<template>(.*?)<\/template>/;
  const templResult = response.match(templateMatch);
  if (templResult) {
    sections.template = templResult[1].trim();
  }

  return sections;
}

declare global {
  var activeSandbox: any;
  var activeSandboxProvider: any;
  var existingFiles: Set<string>;
  var sandboxState: SandboxState;
}

export async function POST(request: NextRequest) {
  try {
    const { response, isEdit = false, packages = [] } = await request.json();
    
    if (!response) {
      return NextResponse.json({
        error: 'response is required'
      }, { status: 400 });
    }
    
    // Parse the AI response
    const parsed = parseAIResponse(response);
    
    // Initialize existingFiles if not already
    if (!global.existingFiles) {
      global.existingFiles = new Set<string>();
    }
    
    // Get the active sandbox or provider
    const sandbox = global.activeSandbox || global.activeSandboxProvider;
    
    // If no active sandbox, just return parsed results
    if (!sandbox) {
      return NextResponse.json({
        success: true,
        results: {
          filesCreated: parsed.files.map(f => f.path),
          packagesInstalled: parsed.packages,
          commandsExecuted: parsed.commands,
          errors: []
        },
        explanation: parsed.explanation,
        structure: parsed.structure,
        parsedFiles: parsed.files,
        message: `Parsed ${parsed.files.length} files successfully. Create a sandbox to apply them.`
      });
    }
    
    // Verify sandbox is ready before applying code
    console.log('[apply-ai-code] Verifying sandbox is ready...');
    
    // For Vercel sandboxes, check if Vite is running
    if (sandbox.constructor?.name === 'VercelProvider' || sandbox.getSandboxInfo?.()?.provider === 'vercel') {
      console.log('[apply-ai-code] Detected Vercel sandbox, checking Vite status...');
      try {
        // Check if Vite process is running
        const checkResult = await sandbox.runCommand('pgrep -f vite');
        if (!checkResult || !checkResult.stdout) {
          console.log('[apply-ai-code] Vite not running, starting it...');
          // Start Vite if not running
          await sandbox.runCommand('sh -c "cd /vercel/sandbox && nohup npm run dev > /tmp/vite.log 2>&1 &"');
          // Wait for Vite to start
          await new Promise(resolve => setTimeout(resolve, 5000));
          console.log('[apply-ai-code] Vite started, proceeding with code application');
        } else {
          console.log('[apply-ai-code] Vite is already running');
        }
      } catch (e) {
        console.log('[apply-ai-code] Could not check Vite status, proceeding anyway:', e);
      }
    }
    
    // Apply to active sandbox
    console.log('[apply-ai-code] Applying code to sandbox...');
    console.log('[apply-ai-code] Is edit mode:', isEdit);
    console.log('[apply-ai-code] Files to write:', parsed.files.map(f => f.path));
    console.log('[apply-ai-code] Existing files:', Array.from(global.existingFiles));
    
    const results = {
      filesCreated: [] as string[],
      filesUpdated: [] as string[],
      packagesInstalled: [] as string[],
      packagesAlreadyInstalled: [] as string[],
      packagesFailed: [] as string[],
      commandsExecuted: [] as string[],
      errors: [] as string[]
    };
    
    // Combine packages from tool calls and parsed XML tags
    const allPackages = [...packages.filter((pkg: any) => pkg && typeof pkg === 'string'), ...parsed.packages];
    const uniquePackages = [...new Set(allPackages)]; // Remove duplicates
    
    if (uniquePackages.length > 0) {
      console.log('[apply-ai-code] Installing packages from XML tags and tool calls:', uniquePackages);
      
      try {
        const installResponse = await fetch(`${process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000'}/api/install-packages`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ packages: uniquePackages })
        });
        
        if (installResponse.ok) {
          const installResult = await installResponse.json();
          console.log('[apply-ai-code] Package installation result:', installResult);
          
          if (installResult.installed && installResult.installed.length > 0) {
            results.packagesInstalled = installResult.installed;
          }
          if (installResult.failed && installResult.failed.length > 0) {
            results.packagesFailed = installResult.failed;
          }
        }
      } catch (error) {
        console.error('[apply-ai-code] Error installing packages:', error);
      }
    } else {
      // Fallback to detecting packages from code
      console.log('[apply-ai-code] No packages provided, detecting from generated code...');
      console.log('[apply-ai-code] Number of files to scan:', parsed.files.length);
      
      // Filter out config files first
      const configFiles = ['tailwind.config.js', 'vite.config.js', 'package.json', 'package-lock.json', 'tsconfig.json', 'postcss.config.js'];
      const filteredFilesForDetection = parsed.files.filter(file => {
        const fileName = file.path.split('/').pop() || '';
        return !configFiles.includes(fileName);
      });
      
      // Build files object for package detection
      const filesForPackageDetection: Record<string, string> = {};
      for (const file of filteredFilesForDetection) {
        filesForPackageDetection[file.path] = file.content;
        // Log if heroicons is found
        if (file.content.includes('heroicons')) {
          console.log(`[apply-ai-code] Found heroicons import in ${file.path}`);
        }
      }
      
      try {
        console.log('[apply-ai-code] Calling detect-and-install-packages...');
        const packageResponse = await fetch(`${process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000'}/api/detect-and-install-packages`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ files: filesForPackageDetection })
        });
        
        console.log('[apply-ai-code] Package detection response status:', packageResponse.status);
        
        if (packageResponse.ok) {
          const packageResult = await packageResponse.json();
          console.log('[apply-ai-code] Package installation result:', JSON.stringify(packageResult, null, 2));
        
        if (packageResult.packagesInstalled && packageResult.packagesInstalled.length > 0) {
          results.packagesInstalled = packageResult.packagesInstalled;
          console.log(`[apply-ai-code] Installed packages: ${packageResult.packagesInstalled.join(', ')}`);
        }
        
        if (packageResult.packagesAlreadyInstalled && packageResult.packagesAlreadyInstalled.length > 0) {
          results.packagesAlreadyInstalled = packageResult.packagesAlreadyInstalled;
          console.log(`[apply-ai-code] Already installed: ${packageResult.packagesAlreadyInstalled.join(', ')}`);
        }
        
        if (packageResult.packagesFailed && packageResult.packagesFailed.length > 0) {
          results.packagesFailed = packageResult.packagesFailed;
          console.error(`[apply-ai-code] Failed to install packages: ${packageResult.packagesFailed.join(', ')}`);
          results.errors.push(`Failed to install packages: ${packageResult.packagesFailed.join(', ')}`);
        }
        
        // Force Vite restart after package installation
        if (results.packagesInstalled.length > 0) {
          console.log('[apply-ai-code] Packages were installed, forcing Vite restart...');
          
          try {
            // Call the restart-vite endpoint
            const restartResponse = await fetch(`${process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000'}/api/restart-vite`, {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' }
            });
            
            if (restartResponse.ok) {
              const restartResult = await restartResponse.json();
              console.log('[apply-ai-code] Vite restart result:', restartResult.message);
            } else {
              console.error('[apply-ai-code] Failed to restart Vite:', await restartResponse.text());
            }
          } catch (e) {
            console.error('[apply-ai-code] Error calling restart-vite:', e);
          }
          
          // Additional delay to ensure files can be written after restart
          await new Promise(resolve => setTimeout(resolve, 1000));
        }
        } else {
          console.error('[apply-ai-code] Package detection/installation failed:', await packageResponse.text());
        }
      } catch (error) {
        console.error('[apply-ai-code] Error detecting/installing packages:', error);
        // Continue with file writing even if package installation fails
      }
    }
    
    // Filter out config files that shouldn't be created
    const configFiles = ['tailwind.config.js', 'vite.config.js', 'package.json', 'package-lock.json', 'tsconfig.json', 'postcss.config.js'];
    const filteredFiles = parsed.files.filter(file => {
      const fileName = file.path.split('/').pop() || '';
      if (configFiles.includes(fileName)) {
        console.warn(`[apply-ai-code] Skipping config file: ${file.path} - already exists in template`);
        return false;
      }
      return true;
    });
    
    // Create or update files AFTER package installation
    for (const file of filteredFiles) {
      try {
        // Normalize the file path
        let normalizedPath = file.path;
        // Remove leading slash if present
        if (normalizedPath.startsWith('/')) {
          normalizedPath = normalizedPath.substring(1);
        }
        // Ensure src/ prefix for component files
        if (!normalizedPath.startsWith('src/') && 
            !normalizedPath.startsWith('public/') && 
            normalizedPath !== 'index.html' && 
            normalizedPath !== 'package.json' &&
            normalizedPath !== 'vite.config.js' &&
            normalizedPath !== 'tailwind.config.js' &&
            normalizedPath !== 'postcss.config.js') {
          normalizedPath = 'src/' + normalizedPath;
        }
        
        const fullPath = `/home/user/app/${normalizedPath}`;
        const isUpdate = global.existingFiles.has(normalizedPath);
        
        // Remove any CSS imports from JSX/JS files (we're using Tailwind)
        let fileContent = file.content;
        if (file.path.endsWith('.jsx') || file.path.endsWith('.js') || file.path.endsWith('.tsx') || file.path.endsWith('.ts')) {
          fileContent = fileContent.replace(/import\s+['"]\.\/[^'"]+\.css['"];?\s*\n?/g, '');
        }
        
        // Fix common Tailwind CSS errors in CSS files
        if (file.path.endsWith('.css')) {
          // Replace shadow-3xl with shadow-2xl (shadow-3xl doesn't exist)
          fileContent = fileContent.replace(/shadow-3xl/g, 'shadow-2xl');
          // Replace any other non-existent shadow utilities
          fileContent = fileContent.replace(/shadow-4xl/g, 'shadow-2xl');
          fileContent = fileContent.replace(/shadow-5xl/g, 'shadow-2xl');
        }
        
        console.log(`[apply-ai-code] Writing file using E2B files API: ${fullPath}`);
        
        try {
          // Check if we're using provider pattern (v2) or direct sandbox (v1)
          if (sandbox.writeFile) {
            // V2: Provider pattern (Vercel/E2B provider)
            await sandbox.writeFile(file.path, fileContent);
          } else if (sandbox.files?.write) {
            // V1: Direct E2B sandbox
            await sandbox.files.write(fullPath, fileContent);
          } else {
            throw new Error('Unsupported sandbox type');
          }
          console.log(`[apply-ai-code] Successfully wrote file: ${fullPath}`);
          
          // Update file cache
          if (global.sandboxState?.fileCache) {
            global.sandboxState.fileCache.files[normalizedPath] = {
              content: fileContent,
              lastModified: Date.now()
            };
            console.log(`[apply-ai-code] Updated file cache for: ${normalizedPath}`);
          }
          
        } catch (writeError) {
          console.error(`[apply-ai-code] E2B file write error:`, writeError);
          throw writeError;
        }
        
        
        if (isUpdate) {
          results.filesUpdated.push(normalizedPath);
        } else {
          results.filesCreated.push(normalizedPath);
          global.existingFiles.add(normalizedPath);
        }
      } catch (error) {
        results.errors.push(`Failed to create ${file.path}: ${(error as Error).message}`);
      }
    }
    
    // Only create App.jsx if it's not an edit and doesn't exist
    const appFileInParsed = parsed.files.some(f => {
      const normalized = f.path.replace(/^\//, '').replace(/^src\//, '');
      return normalized === 'App.jsx' || normalized === 'App.tsx';
    });
    
    const appFileExists = global.existingFiles.has('src/App.jsx') || 
                         global.existingFiles.has('src/App.tsx') ||
                         global.existingFiles.has('App.jsx') ||
                         global.existingFiles.has('App.tsx');
    
    if (!isEdit && !appFileInParsed && !appFileExists && parsed.files.length > 0) {
      // Find all component files
      const componentFiles = parsed.files.filter(f => 
        (f.path.endsWith('.jsx') || f.path.endsWith('.tsx')) &&
        f.path.includes('component')
      );
      
      // Generate imports for components
      const imports = componentFiles
        .filter(f => !f.path.includes('App.') && !f.path.includes('main.') && !f.path.includes('index.'))
        .map(f => {
          const pathParts = f.path.split('/');
          const fileName = pathParts[pathParts.length - 1];
          const componentName = fileName.replace(/\.(jsx|tsx)$/, '');
          // Fix import path - components are in src/components/
          const importPath = f.path.startsWith('src/') 
            ? f.path.replace('src/', './').replace(/\.(jsx|tsx)$/, '')
            : './' + f.path.replace(/\.(jsx|tsx)$/, '');
          return `import ${componentName} from '${importPath}';`;
        })
        .join('\n');
      
      // Find the main component
      const mainComponent = componentFiles.find(f => {
        const name = f.path.toLowerCase();
        return name.includes('header') || 
               name.includes('hero') ||
               name.includes('layout') ||
               name.includes('main') ||
               name.includes('home');
      }) || componentFiles[0];
      
      const mainComponentName = mainComponent 
        ? mainComponent.path.split('/').pop()?.replace(/\.(jsx|tsx)$/, '') 
        : null;
      
      // Create App.jsx with better structure
      const appContent = `import React from 'react';
${imports}

function App() {
  return (
    <div className="min-h-screen bg-gray-900 text-white p-8">
      ${mainComponentName ? `<${mainComponentName} />` : '<div className="text-center">\n        <h1 className="text-4xl font-bold mb-4">Welcome to your React App</h1>\n        <p className="text-gray-400">Your components have been created but need to be added here.</p>\n      </div>'}
      {/* Generated components: ${componentFiles.map(f => f.path).join(', ')} */}
    </div>
  );
}

export default App;`;
      
      try {
        // Use provider pattern if available
        if (sandbox.writeFile) {
          await sandbox.writeFile('src/App.jsx', appContent);
        } else if (sandbox.writeFiles) {
          await sandbox.writeFiles([{
            path: 'src/App.jsx',
            content: Buffer.from(appContent)
          }]);
        }
        
        console.log('Auto-generated: src/App.jsx');
        results.filesCreated.push('src/App.jsx (auto-generated)');
      } catch (error) {
        results.errors.push(`Failed to create App.jsx: ${(error as Error).message}`);
      }
      
      // Don't auto-generate App.css - we're using Tailwind CSS
      
      // Only create index.css if it doesn't exist
      const indexCssInParsed = parsed.files.some(f => {
        const normalized = f.path.replace(/^\//, '').replace(/^src\//, '');
        return normalized === 'index.css' || f.path === 'src/index.css';
      });
      
      const indexCssExists = global.existingFiles.has('src/index.css') || 
                            global.existingFiles.has('index.css');
      
      if (!isEdit && !indexCssInParsed && !indexCssExists) {
        try {
          const indexCssContent = `@tailwind base;
@tailwind components;
@tailwind utilities;

:root {
  font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
  line-height: 1.5;
  font-weight: 400;
  color-scheme: dark;
  
  color: rgba(255, 255, 255, 0.87);
  background-color: #0a0a0a;
}

* {
  box-sizing: border-box;
}

body {
  margin: 0;
  min-width: 320px;
  min-height: 100vh;
}`;

          // Use provider pattern if available
          if (sandbox.writeFile) {
            await sandbox.writeFile('src/index.css', indexCssContent);
          } else if (sandbox.writeFiles) {
            await sandbox.writeFiles([{
              path: 'src/index.css',
              content: Buffer.from(indexCssContent)
            }]);
          }
          
          console.log('Auto-generated: src/index.css');
          results.filesCreated.push('src/index.css (with Tailwind)');
        } catch (error) {
          console.error('Failed to create index.css:', error);
          results.errors.push('Failed to create index.css with Tailwind');
        }
      }
    }
    
    // Execute commands
    for (const cmd of parsed.commands) {
      try {
        // Parse command and arguments
        const commandParts = cmd.trim().split(/\s+/);
        const cmdName = commandParts[0];
        const args = commandParts.slice(1);
        
        // Execute command using sandbox
        let result;
        if (sandbox.runCommand && typeof sandbox.runCommand === 'function') {
          // Check if this is a provider pattern sandbox
          const testResult = await sandbox.runCommand(cmd);
          if (testResult && typeof testResult === 'object' && 'stdout' in testResult) {
            // Provider returns CommandResult directly
            result = testResult;
          } else {
            // Direct sandbox - expects object with cmd and args
            result = await sandbox.runCommand({
              cmd: cmdName,
              args
            });
          }
        }
        
        console.log(`Executed: ${cmd}`);
        
        // Handle result based on type
        let stdout = '';
        let stderr = '';
        
        if (result) {
          if (typeof result.stdout === 'string') {
            stdout = result.stdout;
            stderr = result.stderr || '';
          } else if (typeof result.stdout === 'function') {
            stdout = await result.stdout();
            stderr = await result.stderr();
          }
        }
        
        if (stdout) console.log(stdout);
        if (stderr) console.log(`Errors: ${stderr}`);
        
        results.commandsExecuted.push(cmd);
      } catch (error) {
        results.errors.push(`Failed to execute ${cmd}: ${(error as Error).message}`);
      }
    }
    
    // Check for missing imports in App.jsx
    const missingImports: string[] = [];
    const appFile = parsed.files.find(f => 
      f.path === 'src/App.jsx' || f.path === 'App.jsx'
    );
    
    if (appFile) {
      // Extract imports from App.jsx
      const importRegex = /import\s+(?:\w+|\{[^}]+\})\s+from\s+['"]([^'"]+)['"]/g;
      let match;
      const imports: string[] = [];
      
      while ((match = importRegex.exec(appFile.content)) !== null) {
        const importPath = match[1];
        if (importPath.startsWith('./') || importPath.startsWith('../')) {
          imports.push(importPath);
        }
      }
      
      // Check if all imported files exist
      for (const imp of imports) {
        // Skip CSS imports for this check
        if (imp.endsWith('.css')) continue;
        
        // Convert import path to expected file paths
        const basePath = imp.replace('./', 'src/');
        const possiblePaths = [
          basePath + '.jsx',
          basePath + '.js',
          basePath + '/index.jsx',
          basePath + '/index.js'
        ];
        
        const fileExists = parsed.files.some(f => 
          possiblePaths.some(path => f.path === path)
        );
        
        if (!fileExists) {
          missingImports.push(imp);
        }
      }
    }
    
    // Prepare response
    const responseData: any = {
      success: true,
      results,
      explanation: parsed.explanation,
      structure: parsed.structure,
      message: `Applied ${results.filesCreated.length} files successfully`
    };
    
    // Handle missing imports automatically
    if (missingImports.length > 0) {
      console.warn('[apply-ai-code] Missing imports detected:', missingImports);
      
      // Automatically generate missing components
      try {
        console.log('[apply-ai-code] Auto-generating missing components...');
        
        const autoCompleteResponse = await fetch(
          `${request.nextUrl.origin}/api/auto-complete-components`,
          {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              missingImports,
              model: 'claude-sonnet-4-20250514'
            })
          }
        );
        
        const autoCompleteData = await autoCompleteResponse.json();
        
        if (autoCompleteData.success) {
          responseData.autoCompleted = true;
          responseData.autoCompletedComponents = autoCompleteData.components;
          responseData.message = `Applied ${results.filesCreated.length} files + auto-generated ${autoCompleteData.files} missing components`;
          
          // Add auto-completed files to results
          results.filesCreated.push(...autoCompleteData.components);
        } else {
          // If auto-complete fails, still warn the user
          responseData.warning = `Missing ${missingImports.length} imported components: ${missingImports.join(', ')}`;
          responseData.missingImports = missingImports;
        }
      } catch (error) {
        console.error('[apply-ai-code] Auto-complete failed:', error);
        responseData.warning = `Missing ${missingImports.length} imported components: ${missingImports.join(', ')}`;
        responseData.missingImports = missingImports;
      }
    }
    
    // Track applied files in conversation state
    if (global.conversationState && results.filesCreated.length > 0) {
      // Update the last message metadata with edited files
      const messages = global.conversationState.context.messages;
      if (messages.length > 0) {
        const lastMessage = messages[messages.length - 1];
        if (lastMessage.role === 'user') {
          lastMessage.metadata = {
            ...lastMessage.metadata,
            editedFiles: results.filesCreated
          };
        }
      }
      
      // Track applied code in project evolution
      if (global.conversationState.context.projectEvolution) {
        global.conversationState.context.projectEvolution.majorChanges.push({
          timestamp: Date.now(),
          description: parsed.explanation || 'Code applied',
          filesAffected: results.filesCreated
        });
      }
      
      // Update last updated timestamp
      global.conversationState.lastUpdated = Date.now();
      
      console.log('[apply-ai-code] Updated conversation state with applied files:', results.filesCreated);
    }
    
    return NextResponse.json(responseData);
    
  } catch (error) {
    console.error('Apply AI code error:', error);
    return NextResponse.json(
      { error: error instanceof Error ? error.message : 'Failed to parse AI code' },
      { status: 500 }
    );
  }
}


================================================
FILE: app/api/apply-ai-code-stream/route.ts
================================================
import { NextRequest, NextResponse } from 'next/server';
// Sandbox import not needed - using global sandbox from sandbox-manager
import type { SandboxState } from '@/types/sandbox';
import type { ConversationState } from '@/types/conversation';
import { sandboxManager } from '@/lib/sandbox/sandbox-manager';

declare global {
  var conversationState: ConversationState | null;
  var activeSandboxProvider: any;
  var existingFiles: Set<string>;
  var sandboxState: SandboxState;
}

interface ParsedResponse {
  explanation: string;
  template: string;
  files: Array<{ path: string; content: string }>;
  packages: string[];
  commands: string[];
  structure: string | null;
}

function parseAIResponse(response: string): ParsedResponse {
  const sections = {
    files: [] as Array<{ path: string; content: string }>,
    commands: [] as string[],
    packages: [] as string[],
    structure: null as string | null,
    explanation: '',
    template: ''
  };
  
  // Function to extract packages from import statements
  function extractPackagesFromCode(content: string): string[] {
    const packages: string[] = [];
    // Match ES6 imports
    const importRegex = /import\s+(?:(?:\{[^}]*\}|\*\s+as\s+\w+|\w+)(?:\s*,\s*(?:\{[^}]*\}|\*\s+as\s+\w+|\w+))*\s+from\s+)?['"]([^'"]+)['"]/g;
    let importMatch;
    
    while ((importMatch = importRegex.exec(content)) !== null) {
      const importPath = importMatch[1];
      // Skip relative imports and built-in React
      if (!importPath.startsWith('.') && !importPath.startsWith('/') && 
          importPath !== 'react' && importPath !== 'react-dom' &&
          !importPath.startsWith('@/')) {
        // Extract package name (handle scoped packages like @heroicons/react)
        const packageName = importPath.startsWith('@') 
          ? importPath.split('/').slice(0, 2).join('/')
          : importPath.split('/')[0];
        
        if (!packages.includes(packageName)) {
          packages.push(packageName);
          
          // Log important packages for debugging
          if (packageName === 'react-router-dom' || packageName.includes('router') || packageName.includes('icon')) {
            console.log(`[apply-ai-code-stream] Detected package from imports: ${packageName}`);
          }
        }
      }
    }
    
    return packages;
  }

  // Parse file sections - handle duplicates and prefer complete versions
  const fileMap = new Map<string, { content: string; isComplete: boolean }>();
  
  // First pass: Find all file declarations
  const fileRegex = /<file path="([^"]+)">([\s\S]*?)(?:<\/file>|$)/g;
  let match;
  while ((match = fileRegex.exec(response)) !== null) {
    const filePath = match[1];
    const content = match[2].trim();
    const hasClosingTag = response.substring(match.index, match.index + match[0].length).includes('</file>');
    
    // Check if this file already exists in our map
    const existing = fileMap.get(filePath);
    
    // Decide whether to keep this version
    let shouldReplace = false;
    if (!existing) {
      shouldReplace = true; // First occurrence
    } else if (!existing.isComplete && hasClosingTag) {
      shouldReplace = true; // Replace incomplete with complete
      console.log(`[apply-ai-code-stream] Replacing incomplete ${filePath} with complete version`);
    } else if (existing.isComplete && hasClosingTag && content.length > existing.content.length) {
      shouldReplace = true; // Replace with longer complete version
      console.log(`[apply-ai-code-stream] Replacing ${filePath} with longer complete version`);
    } else if (!existing.isComplete && !hasClosingTag && content.length > existing.content.length) {
      shouldReplace = true; // Both incomplete, keep longer one
    }
    
    if (shouldReplace) {
      // Additional validation: reject obviously broken content
      if (content.includes('...') && !content.includes('...props') && !content.includes('...rest')) {
        console.warn(`[apply-ai-code-stream] Warning: ${filePath} contains ellipsis, may be truncated`);
        // Still use it if it's the only version we have
        if (!existing) {
          fileMap.set(filePath, { content, isComplete: hasClosingTag });
        }
      } else {
        fileMap.set(filePath, { content, isComplete: hasClosingTag });
      }
    }
  }
  
  // Convert map to array for sections.files
  for (const [path, { content, isComplete }] of fileMap.entries()) {
    if (!isComplete) {
      console.log(`[apply-ai-code-stream] Warning: File ${path} appears to be truncated (no closing tag)`);
    }
    
    sections.files.push({
      path,
      content
    });
    
    // Extract packages from file content
    const filePackages = extractPackagesFromCode(content);
    for (const pkg of filePackages) {
      if (!sections.packages.includes(pkg)) {
        sections.packages.push(pkg);
        console.log(`[apply-ai-code-stream] 📦 Package detected from imports: ${pkg}`);
      }
    }
  }
  
  // Also parse markdown code blocks with file paths
  const markdownFileRegex = /```(?:file )?path="([^"]+)"\n([\s\S]*?)```/g;
  while ((match = markdownFileRegex.exec(response)) !== null) {
    const filePath = match[1];
    const content = match[2].trim();
    sections.files.push({
      path: filePath,
      content: content
    });
    
    // Extract packages from file content
    const filePackages = extractPackagesFromCode(content);
    for (const pkg of filePackages) {
      if (!sections.packages.includes(pkg)) {
        sections.packages.push(pkg);
        console.log(`[apply-ai-code-stream] 📦 Package detected from imports: ${pkg}`);
      }
    }
  }
  
  // Parse plain text format like "Generated Files: Header.jsx, index.css"
  const generatedFilesMatch = response.match(/Generated Files?:\s*([^\n]+)/i);
  if (generatedFilesMatch) {
    // Split by comma first, then trim whitespace, to preserve filenames with dots
    const filesList = generatedFilesMatch[1]
      .split(',')
      .map(f => f.trim())
      .filter(f => f.endsWith('.jsx') || f.endsWith('.js') || f.endsWith('.tsx') || f.endsWith('.ts') || f.endsWith('.css') || f.endsWith('.json') || f.endsWith('.html'));
    console.log(`[apply-ai-code-stream] Detected generated files from plain text: ${filesList.join(', ')}`);
    
    // Try to extract the actual file content if it follows
    for (const fileName of filesList) {
      // Look for the file content after the file name
      const fileContentRegex = new RegExp(`${fileName}[\\s\\S]*?(?:import[\\s\\S]+?)(?=Generated Files:|Applying code|$)`, 'i');
      const fileContentMatch = response.match(fileContentRegex);
      if (fileContentMatch) {
        // Extract just the code part (starting from import statements)
        const codeMatch = fileContentMatch[0].match(/^(import[\s\S]+)$/m);
        if (codeMatch) {
          const filePath = fileName.includes('/') ? fileName : `src/components/${fileName}`;
          sections.files.push({
            path: filePath,
            content: codeMatch[1].trim()
          });
          console.log(`[apply-ai-code-stream] Extracted content for ${filePath}`);
          
          // Extract packages from this file
          const filePackages = extractPackagesFromCode(codeMatch[1]);
          for (const pkg of filePackages) {
            if (!sections.packages.includes(pkg)) {
              sections.packages.push(pkg);
              console.log(`[apply-ai-code-stream] Package detected from imports: ${pkg}`);
            }
          }
        }
      }
    }
  }
  
  // Also try to parse if the response contains raw JSX/JS code blocks
  const codeBlockRegex = /```(?:jsx?|tsx?|javascript|typescript)?\n([\s\S]*?)```/g;
  while ((match = codeBlockRegex.exec(response)) !== null) {
    const content = match[1].trim();
    // Try to detect the file name from comments or context
    const fileNameMatch = content.match(/\/\/\s*(?:File:|Component:)\s*([^\n]+)/);
    if (fileNameMatch) {
      const fileName = fileNameMatch[1].trim();
      const filePath = fileName.includes('/') ? fileName : `src/components/${fileName}`;
      
      // Don't add duplicate files
      if (!sections.files.some(f => f.path === filePath)) {
        sections.files.push({
          path: filePath,
          content: content
        });
        
        // Extract packages
        const filePackages = extractPackagesFromCode(content);
        for (const pkg of filePackages) {
          if (!sections.packages.includes(pkg)) {
            sections.packages.push(pkg);
          }
        }
      }
    }
  }

  // Parse commands
  const cmdRegex = /<command>(.*?)<\/command>/g;
  while ((match = cmdRegex.exec(response)) !== null) {
    sections.commands.push(match[1].trim());
  }

  // Parse packages - support both <package> and <packages> tags
  const pkgRegex = /<package>(.*?)<\/package>/g;
  while ((match = pkgRegex.exec(response)) !== null) {
    sections.packages.push(match[1].trim());
  }
  
  // Also parse <packages> tag with multiple packages
  const packagesRegex = /<packages>([\s\S]*?)<\/packages>/;
  const packagesMatch = response.match(packagesRegex);
  if (packagesMatch) {
    const packagesContent = packagesMatch[1].trim();
    // Split by newlines or commas
    const packagesList = packagesContent.split(/[\n,]+/)
      .map(pkg => pkg.trim())
      .filter(pkg => pkg.length > 0);
    sections.packages.push(...packagesList);
  }

  // Parse structure
  const structureMatch = /<structure>([\s\S]*?)<\/structure>/;
  const structResult = response.match(structureMatch);
  if (structResult) {
    sections.structure = structResult[1].trim();
  }

  // Parse explanation
  const explanationMatch = /<explanation>([\s\S]*?)<\/explanation>/;
  const explResult = response.match(explanationMatch);
  if (explResult) {
    sections.explanation = explResult[1].trim();
  }

  // Parse template
  const templateMatch = /<template>(.*?)<\/template>/;
  const templResult = response.match(templateMatch);
  if (templResult) {
    sections.template = templResult[1].trim();
  }

  return sections;
}

export async function POST(request: NextRequest) {
  try {
    const { response, isEdit = false, packages = [], sandboxId } = await request.json();
    
    if (!response) {
      return NextResponse.json({
        error: 'response is required'
      }, { status: 400 });
    }
    
    // Debug log the response
    console.log('[apply-ai-code-stream] Received response to parse:');
    console.log('[apply-ai-code-stream] Response length:', response.length);
    console.log('[apply-ai-code-stream] Response preview:', response.substring(0, 500));
    console.log('[apply-ai-code-stream] isEdit:', isEdit);
    console.log('[apply-ai-code-stream] packages:', packages);
    
    // Parse the AI response
    const parsed = parseAIResponse(response);
    
    // Log what was parsed
    console.log('[apply-ai-code-stream] Parsed result:');
    console.log('[apply-ai-code-stream] Files found:', parsed.files.length);
    if (parsed.files.length > 0) {
      parsed.files.forEach(f => {
        console.log(`[apply-ai-code-stream] - ${f.path} (${f.content.length} chars)`);
      });
    }
    console.log('[apply-ai-code-stream] Packages found:', parsed.packages);
    
    // Initialize existingFiles if not already
    if (!global.existingFiles) {
      global.existingFiles = new Set<string>();
    }
    
    // Try to get provider from sandbox manager first
    let provider = sandboxId ? sandboxManager.getProvider(sandboxId) : sandboxManager.getActiveProvider();
    
    // Fall back to global state if not found in manager
    if (!provider) {
      provider = global.activeSandboxProvider;
    }

    // If we have a sandboxId but no provider, try to get or create one
    if (!provider && sandboxId) {
      console.log(`[apply-ai-code-stream] No provider found for sandbox ${sandboxId}, attempting to get or create...`);
      
      try {
        provider = await sandboxManager.getOrCreateProvider(sandboxId);
        
        // If we got a new provider (not reconnected), we need to create a new sandbox
        if (!provider.getSandboxInfo()) {
          console.log(`[apply-ai-code-stream] Creating new sandbox since reconnection failed for ${sandboxId}`);
          await provider.createSandbox();
          await provider.setupViteApp();
          sandboxManager.registerSandbox(sandboxId, provider);
        }
        
        // Update legacy global state
        global.activeSandboxProvider = provider;
        console.log(`[apply-ai-code-stream] Successfully got provider for sandbox ${sandboxId}`);
      } catch (providerError) {
        console.error(`[apply-ai-code-stream] Failed to get or create provider for sandbox ${sandboxId}:`, providerError);
        return NextResponse.json({
          success: false,
          error: `Failed to create sandbox provider for ${sandboxId}. The sandbox may have expired.`,
          results: {
            filesCreated: [],
            packagesInstalled: [],
            commandsExecuted: [],
            errors: [`Sandbox provider creation failed: ${(providerError as Error).message}`]
          },
          explanation: parsed.explanation,
          structure: parsed.structure,
          parsedFiles: parsed.files,
          message: `Parsed ${parsed.files.length} files but couldn't apply them - sandbox reconnection failed.`
        }, { status: 500 });
      }
    }
    
    // If we still don't have a provider, create a new one
    if (!provider) {
      console.log(`[apply-ai-code-stream] No active provider found, creating new sandbox...`);
      try {
        const { SandboxFactory } = await import('@/lib/sandbox/factory');
        provider = SandboxFactory.create();
        const sandboxInfo = await provider.createSandbox();
        await provider.setupViteApp();

        // Register with sandbox manager
        sandboxManager.registerSandbox(sandboxInfo.sandboxId, provider);
        
        // Store in legacy global state
        global.activeSandboxProvider = provider;
        global.sandboxData = {
          sandboxId: sandboxInfo.sandboxId,
          url: sandboxInfo.url
        };

        console.log(`[apply-ai-code-stream] Created new sandbox successfully`);
      } catch (createError) {
        console.error(`[apply-ai-code-stream] Failed to create new sandbox:`, createError);
        return NextResponse.json({
          success: false,
          error: `Failed to create new sandbox: ${createError instanceof Error ? createError.message : 'Unknown error'}`,
          results: {
            filesCreated: [],
            packagesInstalled: [],
            commandsExecuted: [],
            errors: [`Sandbox creation failed: ${createError instanceof Error ? createError.message : 'Unknown error'}`]
          },
          explanation: parsed.explanation,
          structure: parsed.structure,
          parsedFiles: parsed.files,
          message: `Parsed ${parsed.files.length} files but couldn't apply them - sandbox creation failed.`
        }, { status: 500 });
      }
    }
    
    // Create a response stream for real-time updates
    const encoder = new TextEncoder();
    const stream = new TransformStream();
    const writer = stream.writable.getWriter();
    
    // Function to send progress updates
    const sendProgress = async (data: any) => {
      const message = `data: ${JSON.stringify(data)}\n\n`;
      await writer.write(encoder.encode(message));
    };
    
    // Start processing in background (pass provider and request to the async function)
    (async (providerInstance, req) => {
      const results = {
        filesCreated: [] as string[],
        filesUpdated: [] as string[],
        packagesInstalled: [] as string[],
        packagesAlreadyInstalled: [] as string[],
        packagesFailed: [] as string[],
        commandsExecuted: [] as string[],
        errors: [] as string[]
      };
      
      try {
        await sendProgress({ 
          type: 'start', 
          message: 'Starting code application...',
          totalSteps: 3
        });
        
        // Step 1: Install packages
        const packagesArray = Array.isArray(packages) ? packages : [];
        const parsedPackages = Array.isArray(parsed.packages) ? parsed.packages : [];
        
        // Combine and deduplicate packages
        const allPackages = [...packagesArray.filter(pkg => pkg && typeof pkg === 'string'), ...parsedPackages];
        
        // Use Set to remove duplicates, then filter out pre-installed packages
        const uniquePackages = [...new Set(allPackages)]
          .filter(pkg => pkg && typeof pkg === 'string' && pkg.trim() !== '') // Remove empty strings
          .filter(pkg => pkg !== 'react' && pkg !== 'react-dom'); // Filter pre-installed
        
        // Log if we found duplicates
        if (allPackages.length !== uniquePackages.length) {
          console.log(`[apply-ai-code-stream] Removed ${allPackages.length - uniquePackages.length} duplicate packages`);
          console.log(`[apply-ai-code-stream] Original packages:`, allPackages);
          console.log(`[apply-ai-code-stream] Deduplicated packages:`, uniquePackages);
        }
        
        if (uniquePackages.length > 0) {
          await sendProgress({ 
            type: 'step', 
            step: 1,
            message: `Installing ${uniquePackages.length} packages...`,
            packages: uniquePackages
          });
          
          // Use streaming package installation
          try {
            // Construct the API URL properly for both dev and production
            const protocol = process.env.NODE_ENV === 'production' ? 'https' : 'http';
            const host = req.headers.get('host') || 'localhost:3000';
            const apiUrl = `${protocol}://${host}/api/install-packages`;
            
            const installResponse = await fetch(apiUrl, {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({ 
                packages: uniquePackages,
                sandboxId: sandboxId || providerInstance.getSandboxInfo()?.sandboxId
              })
            });
            
            if (installResponse.ok && installResponse.body) {
              const reader = installResponse.body.getReader();
              const decoder = new TextDecoder();
              
              while (true) {
                const { done, value } = await reader.read();
                if (done) break;
                
                const chunk = decoder.decode(value);
                if (!chunk) continue;
                const lines = chunk.split('\n');
                
                for (const line of lines) {
                  if (line.startsWith('data: ')) {
                    try {
                      const data = JSON.parse(line.slice(6));
                      
                      // Forward package installation progress
                      await sendProgress({
                        type: 'package-progress',
                        ...data
                      });
                      
                      // Track results
                      if (data.type === 'success' && data.installedPackages) {
                        results.packagesInstalled = data.installedPackages;
                      }
                    } catch (parseError) {
          console.debug('Error parsing terminal output:', parseError);
                      // Ignore parse errors
                    }
                  }
                }
              }
            }
          } catch (error) {
            console.error('[apply-ai-code-stream] Error installing packages:', error);
            await sendProgress({
              type: 'warning',
              message: `Package installation skipped (${(error as Error).message}). Continuing with file creation...`
            });
            results.errors.push(`Package installation failed: ${(error as Error).message}`);
          }
        } else {
          await sendProgress({ 
            type: 'step', 
            step: 1,
            message: 'No additional packages to install, skipping...'
          });
        }
        
        // Step 2: Create/update files
        const filesArray = Array.isArray(parsed.files) ? parsed.files : [];
        await sendProgress({ 
          type: 'step', 
          step: 2,
          message: `Creating ${filesArray.length} files...`
        });
        
        // Filter out config files that shouldn't be created
        const configFiles = ['tailwind.config.js', 'vite.config.js', 'package.json', 'package-lock.json', 'tsconfig.json', 'postcss.config.js'];
        const filteredFiles = filesArray.filter(file => {
          if (!file || typeof file !== 'object') return false;
          const fileName = (file.path || '').split('/').pop() || '';
          return !configFiles.includes(fileName);
        });
        
        for (const [index, file] of filteredFiles.entries()) {
          try {
            // Send progress for each file
            await sendProgress({
              type: 'file-progress',
              current: index + 1,
              total: filteredFiles.length,
              fileName: file.path,
              action: 'creating'
            });
            
            // Normalize the file path
            let normalizedPath = file.path;
            if (normalizedPath.startsWith('/')) {
              normalizedPath = normalizedPath.substring(1);
            }
            if (!normalizedPath.startsWith('src/') && 
                !normalizedPath.startsWith('public/') && 
                normalizedPath !== 'index.html' && 
                !configFiles.includes(normalizedPath.split('/').pop() || '')) {
              normalizedPath = 'src/' + normalizedPath;
            }
            
            const isUpdate = global.existingFiles.has(normalizedPath);
            
            // Remove any CSS imports from JSX/JS files (we're using Tailwind)
            let fileContent = file.content;
            if (file.path.endsWith('.jsx') || file.path.endsWith('.js') || file.path.endsWith('.tsx') || file.path.endsWith('.ts')) {
              fileContent = fileContent.replace(/import\s+['"]\.\/[^'"]+\.css['"];?\s*\n?/g, '');
            }
            
            // Fix common Tailwind CSS errors in CSS files
            if (file.path.endsWith('.css')) {
              // Replace shadow-3xl with shadow-2xl (shadow-3xl doesn't exist)
              fileContent = fileContent.replace(/shadow-3xl/g, 'shadow-2xl');
              // Replace any other non-existent shadow utilities
              fileContent = fileContent.replace(/shadow-4xl/g, 'shadow-2xl');
              fileContent = fileContent.replace(/shadow-5xl/g, 'shadow-2xl');
            }
            
            // Create directory if needed
            const dirPath = normalizedPath.includes('/') ? normalizedPath.substring(0, normalizedPath.lastIndexOf('/')) : '';
            if (dirPath) {
              await providerInstance.runCommand(`mkdir -p ${dirPath}`);
            }

            // Write the file using provider
            await providerInstance.writeFile(normalizedPath, fileContent);
            
            // Update file cache
            if (global.sandboxState?.fileCache) {
              global.sandboxState.fileCache.files[normalizedPath] = {
                content: fileContent,
                lastModified: Date.now()
              };
            }
            
            if (isUpdate) {
              if (results.filesUpdated) results.filesUpdated.push(normalizedPath);
            } else {
              if (results.filesCreated) results.filesCreated.push(normalizedPath);
              if (global.existingFiles) global.existingFiles.add(normalizedPath);
            }
            
            await sendProgress({
              type: 'file-complete',
              fileName: normalizedPath,
              action: isUpdate ? 'updated' : 'created'
            });
          } catch (error) {
            if (results.errors) {
              results.errors.push(`Failed to create ${file.path}: ${(error as Error).message}`);
            }
            await sendProgress({
              type: 'file-error',
              fileName: file.path,
              error: (error as Error).message
            });
          }
        }
        
        // Step 3: Execute commands
        const commandsArray = Array.isArray(parsed.commands) ? parsed.commands : [];
        if (commandsArray.length > 0) {
          await sendProgress({ 
            type: 'step', 
            step: 3,
            message: `Executing ${commandsArray.length} commands...`
          });
          
          for (const [index, cmd] of commandsArray.entries()) {
            try {
              await sendProgress({
                type: 'command-progress',
                current: index + 1,
                total: parsed.commands.length,
                command: cmd,
                action: 'executing'
              });
              
              // Use provider runCommand
              const result = await providerInstance.runCommand(cmd);

              // Get command output from provider result
              const stdout = result.stdout;
              const stderr = result.stderr;
              
              if (stdout) {
                await sendProgress({
                  type: 'command-output',
                  command: cmd,
                  output: stdout,
                  stream: 'stdout'
                });
              }
              
              if (stderr) {
                await sendProgress({
                  type: 'command-output',
                  command: cmd,
                  output: stderr,
                  stream: 'stderr'
                });
              }
              
              if (results.commandsExecuted) {
                results.commandsExecuted.push(cmd);
              }
              
              await sendProgress({
                type: 'command-complete',
                command: cmd,
                exitCode: result.exitCode,
                success: result.exitCode === 0
              });
            } catch (error) {
              if (results.errors) {
                results.errors.push(`Failed to execute ${cmd}: ${(error as Error).message}`);
              }
              await sendProgress({
                type: 'command-error',
                command: cmd,
                error: (error as Error).message
              });
            }
          }
        }
        
        // Send final results
        await sendProgress({
          type: 'complete',
          results,
          explanation: parsed.explanation,
          structure: parsed.structure,
          message: `Successfully applied ${results.filesCreated.length} files`
        });
        
        // Track applied files in conversation state
        if (global.conversationState && results.filesCreated.length > 0) {
          const messages = global.conversationState.context.messages;
          if (messages.length > 0) {
            const lastMessage = messages[messages.length - 1];
            if (lastMessage.role === 'user') {
              lastMessage.metadata = {
                ...lastMessage.metadata,
                editedFiles: results.filesCreated
              };
            }
          }
          
          // Track applied code in project evolution
          if (global.conversationState.context.projectEvolution) {
            global.conversationState.context.projectEvolution.majorChanges.push({
              timestamp: Date.now(),
              description: parsed.explanation || 'Code applied',
              filesAffected: results.filesCreated || []
            });
          }
          
          global.conversationState.lastUpdated = Date.now();
        }
        
      } catch (error) {
        await sendProgress({
          type: 'error',
          error: (error as Error).message
        });
      } finally {
        await writer.close();
      }
    })(provider, request);
    
    // Return the stream
    return new Response(stream.readable, {
      headers: {
        'Content-Type': 'text/event-stream',
        'Cache-Control': 'no-cache',
        'Connection': 'keep-alive',
      },
    });

  } catch (error) {
    console.error('Apply AI code stream error:', error);
    return NextResponse.json(
      { error: error instanceof Error ? error.message : 'Failed to parse AI code' },
      { status: 500 }
    );
  }
}


================================================
FILE: app/api/check-vite-errors/route.ts
================================================
import { NextResponse } from 'next/server';

// Stub endpoint to prevent 404 errors
// This endpoint is being called but the source is unknown
// Returns empty errors array to satisfy any calling code
export async function GET() {
  return NextResponse.json({
    success: true,
    errors: [],
    message: 'No Vite errors detected'
  });
}


================================================
FILE: app/api/clear-vite-errors-cache/route.ts
================================================
import { NextResponse } from 'next/server';

declare global {
  var viteErrorsCache: { errors: any[], timestamp: number } | null;
}

export async function POST() {
  try {
    // Clear the cache
    global.viteErrorsCache = null;
    
    console.log('[clear-vite-errors-cache] Cache cleared');
    
    return NextResponse.json({
      success: true,
      message: 'Vite errors cache cleared'
    });
    
  } catch (error) {
    console.error('[clear-vite-errors-cache] Error:', error);
    return NextResponse.json({ 
      success: false, 
      error: (error as Error).message 
    }, { status: 500 });
  }
}


================================================
FILE: app/api/conversation-state/route.ts
================================================
import { NextRequest, NextResponse } from 'next/server';
import type { ConversationState } from '@/types/conversation';

declare global {
  var conversationState: ConversationState | null;
}

// GET: Retrieve current conversation state
export async function GET() {
  try {
    if (!global.conversationState) {
      return NextResponse.json({
        success: true,
        state: null,
        message: 'No active conversation'
      });
    }
    
    return NextResponse.json({
      success: true,
      state: global.conversationState
    });
  } catch (error) {
    console.error('[conversation-state] Error getting state:', error);
    return NextResponse.json({
      success: false,
      error: (error as Error).message
    }, { status: 500 });
  }
}

// POST: Reset or update conversation state
export async function POST(request: NextRequest) {
  try {
    const { action, data } = await request.json();
    
    switch (action) {
      case 'reset':
        global.conversationState = {
          conversationId: `conv-${Date.now()}`,
          startedAt: Date.now(),
          lastUpdated: Date.now(),
          context: {
            messages: [],
            edits: [],
            projectEvolution: { majorChanges: [] },
            userPreferences: {}
          }
        };
        
        console.log('[conversation-state] Reset conversation state');
        
        return NextResponse.json({
          success: true,
          message: 'Conversation state reset',
          state: global.conversationState
        });
        
      case 'clear-old':
        // Clear old conversation data but keep recent context
        if (!global.conversationState) {
          // Initialize conversation state if it doesn't exist
          global.conversationState = {
            conversationId: `conv-${Date.now()}`,
            startedAt: Date.now(),
            lastUpdated: Date.now(),
            context: {
              messages: [],
              edits: [],
              projectEvolution: { majorChanges: [] },
              userPreferences: {}
            }
          };
          
          console.log('[conversation-state] Initialized new conversation state for clear-old');
          
          return NextResponse.json({
            success: true,
            message: 'New conversation state initialized',
            state: global.conversationState
          });
        }
        
        // Keep only recent data
        global.conversationState.context.messages = global.conversationState.context.messages.slice(-5);
        global.conversationState.context.edits = global.conversationState.context.edits.slice(-3);
        global.conversationState.context.projectEvolution.majorChanges = 
          global.conversationState.context.projectEvolution.majorChanges.slice(-2);
        
        console.log('[conversation-state] Cleared old conversation data');
        
        return NextResponse.json({
          success: true,
          message: 'Old conversation data cleared',
          state: global.conversationState
        });
        
      case 'update':
        if (!global.conversationState) {
          return NextResponse.json({
            success: false,
            error: 'No active conversation to update'
          }, { status: 400 });
        }
        
        // Update specific fields if provided
        if (data) {
          if (data.currentTopic) {
            global.conversationState.context.currentTopic = data.currentTopic;
          }
          if (data.userPreferences) {
            global.conversationState.context.userPreferences = {
              ...global.conversationState.context.userPreferences,
              ...data.userPreferences
            };
          }
          
          global.conversationState.lastUpdated = Date.now();
        }
        
        return NextResponse.json({
          success: true,
          message: 'Conversation state updated',
          state: global.conversationState
        });
        
      default:
        return NextResponse.json({
          success: false,
          error: 'Invalid action. Use "reset" or "update"'
        }, { status: 400 });
    }
  } catch (error) {
    console.error('[conversation-state] Error:', error);
    return NextResponse.json({
      success: false,
      error: (error as Error).message
    }, { status: 500 });
  }
}

// DELETE: Clear conversation state
export async function DELETE() {
  try {
    global.conversationState = null;
    
    console.log('[conversation-state] Cleared conversation state');
    
    return NextResponse.json({
      success: true,
      message: 'Conversation state cleared'
    });
  } catch (error) {
    console.error('[conversation-state] Error clearing state:', error);
    return NextResponse.json({
      success: false,
      error: (error as Error).message
    }, { status: 500 });
  }
}


================================================
FILE: app/api/create-ai-sandbox/route.ts
================================================
import { NextResponse } from 'next/server';
import { Sandbox } from '@vercel/sandbox';
import type { SandboxState } from '@/types/sandbox';
import { appConfig } from '@/config/app.config';

// Store active sandbox globally
declare global {
  var activeSandbox: any;
  var sandboxData: any;
  var existingFiles: Set<string>;
  var sandboxState: SandboxState;
  var sandboxCreationInProgress: boolean;
  var sandboxCreationPromise: Promise<any> | null;
}

export async function POST() {
  // Check if sandbox creation is already in progress
  if (global.sandboxCreationInProgress && global.sandboxCreationPromise) {
    console.log('[create-ai-sandbox] Sandbox creation already in progress, waiting for existing creation...');
    try {
      const existingResult = await global.sandboxCreationPromise;
      console.log('[create-ai-sandbox] Returning existing sandbox creation result');
      return NextResponse.json(existingResult);
    } catch (error) {
      console.error('[create-ai-sandbox] Existing sandbox creation failed:', error);
      // Continue with new creation if the existing one failed
    }
  }

  // Check if we already have an active sandbox
  if (global.activeSandbox && global.sandboxData) {
    console.log('[create-ai-sandbox] Returning existing active sandbox');
    return NextResponse.json({
      success: true,
      sandboxId: global.sandboxData.sandboxId,
      url: global.sandboxData.url
    });
  }

  // Set the creation flag
  global.sandboxCreationInProgress = true;
  
  // Create the promise that other requests can await
  global.sandboxCreationPromise = createSandboxInternal();
  
  try {
    const result = await global.sandboxCreationPromise;
    return NextResponse.json(result);
  } catch (error) {
    console.error('[create-ai-sandbox] Sandbox creation failed:', error);
    return NextResponse.json(
      { 
        error: error instanceof Error ? error.message : 'Failed to create sandbox',
        details: error instanceof Error ? error.stack : undefined
      },
      { status: 500 }
    );
  } finally {
    global.sandboxCreationInProgress = false;
    global.sandboxCreationPromise = null;
  }
}

async function createSandboxInternal() {
  let sandbox: any = null;

  try {
    console.log('[create-ai-sandbox] Creating Vercel sandbox...');
    
    // Kill existing sandbox if any
    if (global.activeSandbox) {
      console.log('[create-ai-sandbox] Stopping existing sandbox...');
      try {
        await global.activeSandbox.stop();
      } catch (e) {
        console.error('Failed to stop existing sandbox:', e);
      }
      global.activeSandbox = null;
      global.sandboxData = null;
    }
    
    // Clear existing files tracking
    if (global.existingFiles) {
      global.existingFiles.clear();
    } else {
      global.existingFiles = new Set<string>();
    }

    // Create Vercel sandbox with flexible authentication
    console.log(`[create-ai-sandbox] Creating Vercel sandbox with ${appConfig.vercelSandbox.timeoutMinutes} minute timeout...`);
    
    // Prepare sandbox configuration
    const sandboxConfig: any = {
      timeout: appConfig.vercelSandbox.timeoutMs,
      runtime: appConfig.vercelSandbox.runtime,
      ports: [appConfig.vercelSandbox.devPort]
    };
    
    // Add authentication parameters if using personal access token
    if (process.env.VERCEL_TOKEN && process.env.VERCEL_TEAM_ID && process.env.VERCEL_PROJECT_ID) {
      console.log('[create-ai-sandbox] Using personal access token authentication');
      sandboxConfig.teamId = process.env.VERCEL_TEAM_ID;
      sandboxConfig.projectId = process.env.VERCEL_PROJECT_ID;
      sandboxConfig.token = process.env.VERCEL_TOKEN;
    } else if (process.env.VERCEL_OIDC_TOKEN) {
      console.log('[create-ai-sandbox] Using OIDC token authentication');
    } else {
      console.log('[create-ai-sandbox] No authentication found - relying on default Vercel authentication');
    }
    
    sandbox = await Sandbox.create(sandboxConfig);
    
    const sandboxId = sandbox.sandboxId;
    console.log(`[create-ai-sandbox] Sandbox created: ${sandboxId}`);

    // Set up a basic Vite React app
    console.log('[create-ai-sandbox] Setting up Vite React app...');
    
    // First, change to the working directory
    await sandbox.runCommand('pwd');
    // workDir is defined in appConfig - not needed here
    
    // Get the sandbox URL using the correct Vercel Sandbox API
    const sandboxUrl = sandbox.domain(appConfig.vercelSandbox.devPort);
    
    // Extract the hostname from the sandbox URL for Vite config
    const sandboxHostname = new URL(sandboxUrl).hostname;
    console.log(`[create-ai-sandbox] Sandbox hostname: ${sandboxHostname}`);

    // Create the Vite config content with the proper hostname (using string concatenation)
    const viteConfigContent = `import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Vercel Sandbox compatible Vite configuration
export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0',
    port: ${appConfig.vercelSandbox.devPort},
    strictPort: true,
    hmr: true,
    allowedHosts: [
      'localhost',
      '127.0.0.1',
      '` + sandboxHostname + `', // Allow the Vercel Sandbox domain
      '.vercel.run', // Allow all Vercel sandbox domains
      '.vercel-sandbox.dev' // Fallback pattern
    ]
  }
})`;

    // Create the project files (now we have the sandbox hostname)
    const projectFiles = [
      {
        path: 'package.json',
        content: Buffer.from(JSON.stringify({
          "name": "sandbox-app",
          "version": "1.0.0",
          "type": "module",
          "scripts": {
            "dev": "vite --host --port 3000",
            "build": "vite build",
            "preview": "vite preview"
          },
          "dependencies": {
            "react": "^18.2.0",
            "react-dom": "^18.2.0"
          },
          "devDependencies": {
            "@vitejs/plugin-react": "^4.0.0",
            "vite": "^4.3.9",
            "tailwindcss": "^3.3.0",
            "postcss": "^8.4.31",
            "autoprefixer": "^10.4.16"
          }
        }, null, 2))
      },
      {
        path: 'vite.config.js',
        content: Buffer.from(viteConfigContent)
      },
      {
        path: 'tailwind.config.js',
        content: Buffer.from(`/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}`)
      },
      {
        path: 'postcss.config.js',
        content: Buffer.from(`export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}`)
      },
      {
        path: 'index.html',
        content: Buffer.from(`<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Sandbox App</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.jsx"></script>
  </body>
</html>`)
      },
      {
        path: 'src/main.jsx',
        content: Buffer.from(`import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)`)
      },
      {
        path: 'src/App.jsx',
        content: Buffer.from(`function App() {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center p-4">
      <div className="text-center max-w-2xl">
        <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
          Sandbox Ready
        </h1>
        <p className="text-lg text-gray-400">
          Start building your React app with Vite and Tailwind CSS!
        </p>
      </div>
    </div>
  )
}

export default App`)
      },
      {
        path: 'src/index.css',
        content: Buffer.from(`@tailwind base;
@tailwind components;
@tailwind utilities;

/* Force Tailwind to load */
@layer base {
  :root {
    font-synthesis: none;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-text-size-adjust: 100%;
  }
  
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
}

body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, sans-serif;
  background-color: rgb(17 24 39);
}`)
      }
    ];

    // Create directory structure first
    await sandbox.runCommand({
      cmd: 'mkdir',
      args: ['-p', 'src']
    });
    
    // Write all files
    await sandbox.writeFiles(projectFiles);
    console.log('[create-ai-sandbox] ✓ Project files created');
    
    // Install dependencies
    console.log('[create-ai-sandbox] Installing dependencies...');
    const installResult = await sandbox.runCommand({
      cmd: 'npm',
      args: ['install', '--loglevel', 'info']
    });
    if (installResult.exitCode === 0) {
      console.log('[create-ai-sandbox] ✓ Dependencies installed successfully');
    } else {
      console.log('[create-ai-sandbox] ⚠ Warning: npm install had issues but continuing...');
    }
    
    // Start Vite dev server in detached mode
    console.log('[create-ai-sandbox] Starting Vite dev server...');
    const viteProcess = await sandbox.runCommand({
      cmd: 'npm',
      args: ['run', 'dev'],
      detached: true
    });
    
    console.log('[create-ai-sandbox] ✓ Vite dev server started');
    
    // Wait for Vite to be fully ready
    await new Promise(resolve => setTimeout(resolve, appConfig.vercelSandbox.devServerStartupDelay));

    // Store sandbox globally
    global.activeSandbox = sandbox;
    global.sandboxData = {
      sandboxId,
      url: sandboxUrl,
      viteProcess
    };
    
    // Initialize sandbox state
    global.sandboxState = {
      fileCache: {
        files: {},
        lastSync: Date.now(),
        sandboxId
      },
      sandbox,
      sandboxData: {
        sandboxId,
        url: sandboxUrl
      }
    };
    
    // Track initial files
    global.existingFiles.add('src/App.jsx');
    global.existingFiles.add('src/main.jsx');
    global.existingFiles.add('src/index.css');
    global.existingFiles.add('index.html');
    global.existingFiles.add('package.json');
    global.existingFiles.add('vite.config.js');
    global.existingFiles.add('tailwind.config.js');
    global.existingFiles.add('postcss.config.js');
    
    console.log('[create-ai-sandbox] Sandbox ready at:', sandboxUrl);
    
    const result = {
      success: true,
      sandboxId,
      url: sandboxUrl,
      message: 'Vercel sandbox created and Vite React app initialized'
    };
    
    // Store the result for reuse
    global.sandboxData = {
      ...global.sandboxData,
      ...result
    };
    
    return result;

  } catch (error) {
    console.error('[create-ai-sandbox] Error:', error);
    
    // Clean up on error
    if (sandbox) {
      try {
        await sandbox.stop();
      } catch (e) {
        console.error('Failed to stop sandbox on error:', e);
      }
    }
    
    // Clear global state on error
    global.activeSandbox = null;
    global.sandboxData = null;
    
    throw error; // Throw to be caught by the outer handler
  }
}


================================================
FILE: app/api/create-ai-sandbox-v2/route.ts
================================================
import { NextResponse } from 'next/server';
import { SandboxFactory } from '@/lib/sandbox/factory';
// SandboxProvider type is used through SandboxFactory
import type { SandboxState } from '@/types/sandbox';
import { sandboxManager } from '@/lib/sandbox/sandbox-manager';

// Store active sandbox globally
declare global {
  var activeSandboxProvider: any;
  var sandboxData: any;
  var existingFiles: Set<string>;
  var sandboxState: SandboxState;
}

export async function POST() {
  try {
    console.log('[create-ai-sandbox-v2] Creating sandbox...');
    
    // Clean up all existing sandboxes
    console.log('[create-ai-sandbox-v2] Cleaning up existing sandboxes...');
    await sandboxManager.terminateAll();
    
    // Also clean up legacy global state
    if (global.activeSandboxProvider) {
      try {
        await global.activeSandboxProvider.terminate();
      } catch (e) {
        console.error('Failed to terminate legacy global sandbox:', e);
      }
      global.activeSandboxProvider = null;
    }
    
    // Clear existing files tracking
    if (global.existingFiles) {
      global.existingFiles.clear();
    } else {
      global.existingFiles = new Set<string>();
    }

    // Create new sandbox using factory
    const provider = SandboxFactory.create();
    const sandboxInfo = await provider.createSandbox();
    
    console.log('[create-ai-sandbox-v2] Setting up Vite React app...');
    await provider.setupViteApp();
    
    // Register with sandbox manager
    sandboxManager.registerSandbox(sandboxInfo.sandboxId, provider);
    
    // Also store in legacy global state for backward compatibility
    global.activeSandboxProvider = provider;
    global.sandboxData = {
      sandboxId: sandboxInfo.sandboxId,
      url: sandboxInfo.url
    };
    
    // Initialize sandbox state
    global.sandboxState = {
      fileCache: {
        files: {},
        lastSync: Date.now(),
        sandboxId: sandboxInfo.sandboxId
      },
      sandbox: provider, // Store the provider instead of raw sandbox
      sandboxData: {
        sandboxId: sandboxInfo.sandboxId,
        url: sandboxInfo.url
      }
    };
    
    console.log('[create-ai-sandbox-v2] Sandbox ready at:', sandboxInfo.url);
    
    return NextResponse.json({
      success: true,
      sandboxId: sandboxInfo.sandboxId,
      url: sandboxInfo.url,
      provider: sandboxInfo.provider,
      message: 'Sandbox created and Vite React app initialized'
    });

  } catch (error) {
    console.error('[create-ai-sandbox-v2] Error:', error);
    
    // Clean up on error
    await sandboxManager.terminateAll();
    if (global.activeSandboxProvider) {
      try {
        await global.activeSandboxProvider.terminate();
      } catch (e) {
        console.error('Failed to terminate sandbox on error:', e);
      }
      global.activeSandboxProvider = null;
    }
    
    return NextResponse.json(
      { 
        error: error instanceof Error ? error.message : 'Failed to create sandbox',
        details: error instanceof Error ? error.stack : undefined
      },
      { status: 500 }
    );
  }
}


================================================
FILE: app/api/create-zip/route.ts
================================================
import { NextResponse } from 'next/server';

declare global {
  var activeSandbox: any;
}

export async function POST() {
  try {
    if (!global.activeSandbox) {
      return NextResponse.json({ 
        success: false, 
        error: 'No active sandbox' 
      }, { status: 400 });
    }
    
    console.log('[create-zip] Creating project zip...');
    
    // Create zip file in sandbox using standard commands
    const zipResult = await global.activeSandbox.runCommand({
      cmd: 'bash',
      args: ['-c', `zip -r /tmp/project.zip . -x "node_modules/*" ".git/*" ".next/*" "dist/*" "build/*" "*.log"`]
    });
    
    if (zipResult.exitCode !== 0) {
      const error = await zipResult.stderr();
      throw new Error(`Failed to create zip: ${error}`);
    }
    
    const sizeResult = await global.activeSandbox.runCommand({
      cmd: 'bash',
      args: ['-c', `ls -la /tmp/project.zip | awk '{print $5}'`]
    });
    
    const fileSize = await sizeResult.stdout();
    console.log(`[create-zip] Created project.zip (${fileSize.trim()} bytes)`);
    
    // Read the zip file and convert to base64
    const readResult = await global.activeSandbox.runCommand({
      cmd: 'base64',
      args: ['/tmp/project.zip']
    });
    
    if (readResult.exitCode !== 0) {
      const error = await readResult.stderr();
      throw new Error(`Failed to read zip file: ${error}`);
    }
    
    const base64Content = (await readResult.stdout()).trim();
    
    // Create a data URL for download
    const dataUrl = `data:application/zip;base64,${base64Content}`;
    
    return NextResponse.json({
      success: true,
      dataUrl,
      fileName: 'vercel-sandbox-project.zip',
      message: 'Zip file created successfully'
    });
    
  } catch (error) {
    console.error('[create-zip] Error:', error);
    return NextResponse.json(
      { 
        success: false, 
        error: (error as Error).message 
      }, 
      { status: 500 }
    );
  }
}


================================================
FILE: app/api/detect-and-install-packages/route.ts
================================================
import { NextRequest, NextResponse } from 'next/server';

declare global {
  var activeSandbox: any;
}

export async function POST(request: NextRequest) {
  try {
    const { files } = await request.json();
    
    if (!files || typeof files !== 'object') {
      return NextResponse.json({ 
        success: false, 
        error: 'Files object is required' 
      }, { status: 400 });
    }

    if (!global.activeSandbox) {
      return NextResponse.json({
        success: false,
        error: 'No active sandbox'
      }, { status: 404 });
    }

    console.log('[detect-and-install-packages] Processing files:', Object.keys(files));

    // Extract all import statements from the files
    const imports = new Set<string>();
    const importRegex = /import\s+(?:(?:\{[^}]*\}|\*\s+as\s+\w+|\w+)\s*,?\s*)*(?:from\s+)?['"]([^'"]+)['"]/g;
    const requireRegex = /require\s*\(['"]([^'"]+)['"]\)/g;

    for (const [filePath, content] of Object.entries(files)) {
      if (typeof content !== 'string') continue;
      
      // Skip non-JS/JSX/TS/TSX files
      if (!filePath.match(/\.(jsx?|tsx?)$/)) continue;

      // Find ES6 imports
      let match;
      while ((match = importRegex.exec(content)) !== null) {
        imports.add(match[1]);
      }

      // Find CommonJS requires
      while ((match = requireRegex.exec(content)) !== null) {
        imports.add(match[1]);
      }
    }

    console.log('[detect-and-install-packages] Found imports:', Array.from(imports));
    
    // Log specific heroicons imports
    const heroiconImports = Array.from(imports).filter(imp => imp.includes('heroicons'));
    if (heroiconImports.length > 0) {
      console.log('[detect-and-install-packages] Heroicon imports:', heroiconImports);
    }

    // Filter out relative imports and built-in modules
    const packages = Array.from(imports).filter(imp => {
      // Skip relative imports
      if (imp.startsWith('.') || imp.startsWith('/')) return false;
      
      // Skip built-in Node modules
      const builtins = ['fs', 'path', 'http', 'https', 'crypto', 'stream', 'util', 'os', 'url', 'querystring', 'child_process'];
      if (builtins.includes(imp)) return false;
      
      return true;
    });

    // Extract just the package names (without subpaths)
    const packageNames = packages.map(pkg => {
      if (pkg.startsWith('@')) {
        // Scoped package: @scope/package or @scope/package/subpath
        const parts = pkg.split('/');
        return parts.slice(0, 2).join('/');
      } else {
        // Regular package: package or package/subpath
        return pkg.split('/')[0];
      }
    });

    // Remove duplicates
    const uniquePackages = [...new Set(packageNames)];

    console.log('[detect-and-install-packages] Packages to install:', uniquePackages);

    if (uniquePackages.length === 0) {
      return NextResponse.json({
        success: true,
        packagesInstalled: [],
        message: 'No new packages to install'
      });
    }

    // Check which packages are already installed
    const installed: string[] = [];
    const missing: string[] = [];
    
    for (const packageName of uniquePackages) {
      try {
        const checkResult = await global.activeSandbox.runCommand({
          cmd: 'test',
          args: ['-d', `node_modules/${packageName}`]
        });
        
        if (checkResult.exitCode === 0) {
          installed.push(packageName);
        } else {
          missing.push(packageName);
        }
      } catch (checkError) {
        // If test command fails, assume package is missing
        console.debug(`Package check failed for ${packageName}:`, checkError);
        missing.push(packageName);
      }
    }

    console.log('[detect-and-install-packages] Package status:', { installed, missing });

    if (missing.length === 0) {
      return NextResponse.json({
        success: true,
        packagesInstalled: [],
        packagesAlreadyInstalled: installed,
        message: 'All packages already installed'
      });
    }

    // Install missing packages
    console.log('[detect-and-install-packages] Installing packages:', missing);
    
    const installResult = await global.activeSandbox.runCommand({
      cmd: 'npm',
      args: ['install', '--save', ...missing]
    });

    const stdout = await installResult.stdout();
    const stderr = await installResult.stderr();
    
    console.log('[detect-and-install-packages] Install stdout:', stdout);
    if (stderr) {
      console.log('[detect-and-install-packages] Install stderr:', stderr);
    }

    // Verify installation
    const finalInstalled: string[] = [];
    const failed: string[] = [];

    for (const packageName of missing) {
      try {
        const verifyResult = await global.activeSandbox.runCommand({
          cmd: 'test',
          args: ['-d', `node_modules/${packageName}`]
        });
        
        if (verifyResult.exitCode === 0) {
          finalInstalled.push(packageName);
          console.log(`✓ Verified installation of ${packageName}`);
        } else {
          failed.push(packageName);
          console.log(`✗ Failed to verify installation of ${packageName}`);
        }
      } catch (error) {
        failed.push(packageName);
        console.log(`✗ Error verifying ${packageName}:`, error);
      }
    }

    if (failed.length > 0) {
      console.error('[detect-and-install-packages] Failed to install:', failed);
    }

    return NextResponse.json({
      success: true,
      packagesInstalled: finalInstalled,
      packagesFailed: failed,
      packagesAlreadyInstalled: installed,
      message: `Installed ${finalInstalled.length} packages`,
      logs: stdout
    });

  } catch (error) {
    console.error('[detect-and-install-packages] Error:', error);
    return NextResponse.json({
      success: false,
      error: (error as Error).message
    }, { status: 500 });
  }
}


================================================
FILE: app/api/get-sandbox-files/route.ts
================================================
import { NextResponse } from 'next/server';
import { parseJavaScriptFile, buildComponentTree } from '@/lib/file-parser';
import { FileManifest, FileInfo, RouteInfo } from '@/types/file-manifest';
// SandboxState type used implicitly through global.activeSandbox

declare global {
  var activeSandbox: any;
}

export async function GET() {
  try {
    if (!global.activeSandbox) {
      return NextResponse.json({
        success: false,
        error: 'No active sandbox'
      }, { status: 404 });
    }

    console.log('[get-sandbox-files] Fetching and analyzing file structure...');
    
    // Get list of all relevant files
    const findResult = await global.activeSandbox.runCommand({
      cmd: 'find',
      args: [
        '.',
        '-name', 'node_modules', '-prune', '-o',
        '-name', '.git', '-prune', '-o',
        '-name', 'dist', '-prune', '-o',
        '-name', 'build', '-prune', '-o',
        '-type', 'f',
        '(',
        '-name', '*.jsx',
        '-o', '-name', '*.js',
        '-o', '-name', '*.tsx',
        '-o', '-name', '*.ts',
        '-o', '-name', '*.css',
        '-o', '-name', '*.json',
        ')',
        '-print'
      ]
    });
    
    if (findResult.exitCode !== 0) {
      throw new Error('Failed to list files');
    }
    
    const fileList = (await findResult.stdout()).split('\n').filter((f: string) => f.trim());
    console.log('[get-sandbox-files] Found', fileList.length, 'files');
    
    // Read content of each file (limit to reasonable sizes)
    const filesContent: Record<string, string> = {};
    
    for (const filePath of fileList) {
      try {
        // Check file size first
        const statResult = await global.activeSandbox.runCommand({
          cmd: 'stat',
          args: ['-f', '%z', filePath]
        });
        
        if (statResult.exitCode === 0) {
          const fileSize = parseInt(await statResult.stdout());
          
          // Only read files smaller than 10KB
          if (fileSize < 10000) {
            const catResult = await global.activeSandbox.runCommand({
              cmd: 'cat',
              args: [filePath]
            });
            
            if (catResult.exitCode === 0) {
              const content = await catResult.stdout();
              // Remove leading './' from path
              const relativePath = filePath.replace(/^\.\//, '');
              filesContent[relativePath] = content;
            }
          }
        }
      } catch (parseError) {
        console.debug('Error parsing component info:', parseError);
        // Skip files that can't be read
        continue;
      }
    }
    
    // Get directory structure
    const treeResult = await global.activeSandbox.runCommand({
      cmd: 'find',
      args: ['.', '-type', 'd', '-not', '-path', '*/node_modules*', '-not', '-path', '*/.git*']
    });
    
    let structure = '';
    if (treeResult.exitCode === 0) {
      const dirs = (await treeResult.stdout()).split('\n').filter((d: string) => d.trim());
      structure = dirs.slice(0, 50).join('\n'); // Limit to 50 lines
    }
    
    // Build enhanced file manifest
    const fileManifest: FileManifest = {
      files: {},
      routes: [],
      componentTree: {},
      entryPoint: '',
      styleFiles: [],
      timestamp: Date.now(),
    };
    
    // Process each file
    for (const [relativePath, content] of Object.entries(filesContent)) {
      const fullPath = `/${relativePath}`;
      
      // Create base file info
      const fileInfo: FileInfo = {
        content: content,
        type: 'utility',
        path: fullPath,
        relativePath,
        lastModified: Date.now(),
      };
      
      // Parse JavaScript/JSX files
      if (relativePath.match(/\.(jsx?|tsx?)$/)) {
        const parseResult = parseJavaScriptFile(content, fullPath);
        Object.assign(fileInfo, parseResult);
        
        // Identify entry point
        if (relativePath === 'src/main.jsx' || relativePath === 'src/index.jsx') {
          fileManifest.entryPoint = fullPath;
        }
        
        // Identify App.jsx
        if (relativePath === 'src/App.jsx' || relativePath === 'App.jsx') {
          fileManifest.entryPoint = fileManifest.entryPoint || fullPath;
        }
      }
      
      // Track style files
      if (relativePath.endsWith('.css')) {
        fileManifest.styleFiles.push(fullPath);
        fileInfo.type = 'style';
      }
      
      fileManifest.files[fullPath] = fileInfo;
    }
    
    // Build component tree
    fileManifest.componentTree = buildComponentTree(fileManifest.files);
    
    // Extract routes (simplified - looks for Route components or page pattern)
    fileManifest.routes = extractRoutes(fileManifest.files);
    
    // Update global file cache with manifest
    if (global.sandboxState?.fileCache) {
      global.sandboxState.fileCache.manifest = fileManifest;
    }

    return NextResponse.json({
      success: true,
      files: filesContent,
      structure,
      fileCount: Object.keys(filesContent).length,
      manifest: fileManifest,
    });

  } catch (error) {
    console.error('[get-sandbox-files] Error:', error);
    return NextResponse.json({
      success: false,
      error: (error as Error).message
    }, { status: 500 });
  }
}

function extractRoutes(files: Record<string, FileInfo>): RouteInfo[] {
  const routes: RouteInfo[] = [];
  
  // Look for React Router usage
  for (const [path, fileInfo] of Object.entries(files)) {
    if (fileInfo.content.includes('<Route') || fileInfo.content.includes('createBrowserRouter')) {
      // Extract route definitions (simplified)
      const routeMatches = fileInfo.content.matchAll(/path=["']([^"']+)["'].*(?:element|component)={([^}]+)}/g);
      
      for (const match of routeMatches) {
        const [, routePath] = match;
        // componentRef available in match but not used currently
        routes.push({
          path: routePath,
          component: path,
        });
      }
    }
    
    // Check for Next.js style pages
    if (fileInfo.relativePath.startsWith('pages/') || fileInfo.relativePath.startsWith('src/pages/')) {
      const routePath = '/' + fileInfo.relativePath
        .replace(/^(src\/)?pages\//, '')
        .replace(/\.(jsx?|tsx?)$/, '')
        .replace(/index$/, '');
        
      routes.push({
        path: routePath,
        component: path,
      });
    }
  }
  
  return routes;
}


================================================
FILE: app/api/install-packages/route.ts
================================================
import { NextRequest, NextResponse } from 'next/server';

declare global {
  var activeSandbox: any;
  var activeSandboxProvider: any;
  var sandboxData: any;
}

export async function POST(request: NextRequest) {
  try {
    const { packages } = await request.json();
    // sandboxId not used - using global sandbox
    
    if (!packages || !Array.isArray(packages) || packages.length === 0) {
      return NextResponse.json({ 
        success: false, 
        error: 'Packages array is required' 
      }, { status: 400 });
    }
    
    // Validate and deduplicate package names
    const validPackages = [...new Set(packages)]
      .filter(pkg => pkg && typeof pkg === 'string' && pkg.trim() !== '')
      .map(pkg => pkg.trim());
    
    if (validPackages.length === 0) {
      return NextResponse.json({
        success: false,
        error: 'No valid package names provided'
      }, { status: 400 });
    }
    
    // Log if duplicates were found
    if (packages.length !== validPackages.length) {
      console.log(`[install-packages] Cleaned packages: removed ${packages.length - validPackages.length} invalid/duplicate entries`);
      console.log(`[install-packages] Original:`, packages);
      console.log(`[install-packages] Cleaned:`, validPackages);
    }
    
    // Get active sandbox provider
    const provider = global.activeSandboxProvider;
    
    if (!provider) {
      return NextResponse.json({ 
        success: false, 
        error: 'No active sandbox provider available' 
      }, { status: 400 });
    }
    
    console.log('[install-packages] Installing packages:', validPackages);
    
    // Create a response stream for real-time updates
    const encoder = new TextEncoder();
    const stream = new TransformStream();
    const writer = stream.writable.getWriter();
    
    // Function to send progress updates
    const sendProgress = async (data: any) => {
      const message = `data: ${JSON.stringify(data)}\n\n`;
      await writer.write(encoder.encode(message));
    };
    
    // Start installation in background
    (async (providerInstance) => {
      try {
        await sendProgress({ 
          type: 'start', 
          message: `Installing ${validPackages.length} package${validPackages.length > 1 ? 's' : ''}...`,
          packages: validPackages 
        });
        
        // Stop any existing development server first
        await sendProgress({ type: 'status', message: 'Stopping development server...' });
        
        try {
          // Try to kill any running dev server processes
          await providerInstance.runCommand('pkill -f vite');
          await new Promise(resolve => setTimeout(resolve, 1000)); // Wait a bit
        } catch (killError) {
          // It's OK if no process is found
          console.debug('[install-packages] No existing dev server found:', killError);
        }
        
        // Check which packages are already installed
        await sendProgress({ 
          type: 'status', 
          message: 'Checking installed packages...' 
        });
        
        let packagesToInstall = validPackages;
        
        try {
          // Read package.json to check existing dependencies
          let packageJsonContent = '';
          try {
            packageJsonContent = await providerInstance.readFile('package.json');
          } catch (error) {
            console.log('[install-packages] Error reading package.json:', error);
          }
          if (packageJsonContent) {
            const packageJson = JSON.parse(packageJsonContent);
            
            const dependencies = packageJson.dependencies || {};
            const devDependencies = packageJson.devDependencies || {};
            const allDeps = { ...dependencies, ...devDependencies };
            
            const alreadyInstalled = [];
            const needInstall = [];
            
            for (const pkg of validPackages) {
              // Handle scoped packages
              const pkgName = pkg.startsWith('@') ? pkg : pkg.split('@')[0];
              
              if (allDeps[pkgName]) {
                alreadyInstalled.push(pkgName);
              } else {
                needInstall.push(pkg);
              }
            }
            
            packagesToInstall = needInstall;
            
            if (alreadyInstalled.length > 0) {
              await sendProgress({ 
                type: 'info', 
                message: `Already installed: ${alreadyInstalled.join(', ')}` 
              });
            }
          }
        } catch (error) {
          console.error('[install-packages] Error checking existing packages:', error);
          // If we can't check, just try to install all packages
          packagesToInstall = validPackages;
        }
        
        if (packagesToInstall.length === 0) {
          await sendProgress({ 
            type: 'success', 
            message: 'All packages are already installed',
            installedPackages: [],
            alreadyInstalled: validPackages
          });
          
          // Restart dev server
          await sendProgress({ type: 'status', message: 'Restarting development server...' });
          
          await providerInstance.restartViteServer();
          
          await sendProgress({ 
            type: 'complete', 
            message: 'Dev server restarted!',
            installedPackages: []
          });
          
          return;
        }
        
        // Install only packages that aren't already installed
        await sendProgress({ 
          type: 'info', 
          message: `Installing ${packagesToInstall.length} new package(s): ${packagesToInstall.join(', ')}`
        });
        
        // Install packages using provider method
        const installResult = await providerInstance.installPackages(packagesToInstall);
        
        // Get install output - ensure stdout/stderr are strings
        const stdout = String(installResult.stdout || '');
        const stderr = String(installResult.stderr || '');
        
        if (stdout) {
          const lines = stdout.split('\n').filter(line => line.trim());
          for (const line of lines) {
            if (line.includes('npm WARN')) {
              await sendProgress({ type: 'warning', message: line });
            } else if (line.trim()) {
              await sendProgress({ type: 'output', message: line });
            }
          }
        }
        
        if (stderr) {
          const errorLines = stderr.split('\n').filter(line => line.trim());
          for (const line of errorLines) {
            if (line.includes('ERESOLVE')) {
              await sendProgress({ 
                type: 'warning', 
                message: `Dependency conflict resolved with --legacy-peer-deps: ${line}` 
              });
            } else if (line.trim()) {
              await sendProgress({ type: 'error', message: line });
            }
          }
        }
        
        if (installResult.exitCode === 0) {
          await sendProgress({ 
            type: 'success', 
            message: `Successfully installed: ${packagesToInstall.join(', ')}`,
            installedPackages: packagesToInstall
          });
        } else {
          await sendProgress({ 
            type: 'error', 
            message: 'Package installation failed' 
          });
        }
        
        // Restart development server
        await sendProgress({ type: 'status', message: 'Restarting development server...' });
        
        try {
          await providerInstance.restartViteServer();
          
          // Wait a bit for the server to start
          await new Promise(resolve => setTimeout(resolve, 3000));
          
          await sendProgress({ 
            type: 'complete', 
            message: 'Package installation complete and dev server restarted!',
            installedPackages: packagesToInstall
          });
        } catch (error) {
          await sendProgress({ 
            type: 'error', 
            message: `Failed to restart dev server: ${(error as Error).message}` 
          });
        }
        
      } catch (error) {
        const errorMessage = (error as Error).message;
        if (errorMessage && errorMessage !== 'undefined') {
          await sendProgress({ 
            type: 'error', 
            message: errorMessage
          });
        }
      } finally {
        await writer.close();
      }
    })(provider);
    
    // Return the stream
    return new Response(stream.readable, {
      headers: {
        'Content-Type': 'text/event-stream',
        'Cache-Control': 'no-cache',
        'Connection': 'keep-alive',
      },
    });
    
  } catch (error) {
    console.error('[install-packages] Error:', error);
    return NextResponse.json({ 
      success: false, 
      error: (error as Error).message 
    }, { status: 500 });
  }
}


================================================
FILE: app/api/install-packages-v2/route.ts
================================================
import { NextRequest, NextResponse } from 'next/server';
import { SandboxProvider } from '@/lib/sandbox/types';
import { sandboxManager } from '@/lib/sandbox/sandbox-manager';

declare global {
  var activeSandboxProvider: any;
}

export async function POST(request: NextRequest) {
  try {
    const { packages } = await request.json();
    
    if (!packages || !Array.isArray(packages) || packages.length === 0) {
      return NextResponse.json({ 
        success: false, 
        error: 'Packages array is required' 
      }, { status: 400 });
    }
    
    // Get provider from sandbox manager or global state
    const provider = sandboxManager.getActiveProvider() || global.activeSandboxProvider;
    
    if (!provider) {
      return NextResponse.json({ 
        success: false, 
        error: 'No active sandbox' 
      }, { status: 400 });
    }
    
    console.log(`[install-packages-v2] Installing: ${packages.join(', ')}`);
    
    const result = await provider.installPackages(packages);
    
    return NextResponse.json({
      success: result.success,
      output: result.stdout,
      error: result.stderr,
      message: result.success ? 'Packages installed successfully' : 'Package installation failed'
    });
    
  } catch (error) {
    console.error('[install-packages-v2] Error:', error);
    return NextResponse.json({ 
      success: false, 
      error: (error as Error).message 
    }, { status: 500 });
  }
}


================================================
FILE: app/api/kill-sandbox/route.ts
================================================
import { NextResponse } from 'next/server';

declare global {
  var activeSandboxProvider: any;
  var sandboxData: any;
  var existingFiles: Set<string>;
}

export async function POST() {
  try {
    console.log('[kill-sandbox] Stopping active sandbox...');

    let sandboxKilled = false;

    // Stop existing sandbox if any
    if (global.activeSandboxProvider) {
      try {
        await global.activeSandboxProvider.terminate();
        sandboxKilled = true;
        console.log('[kill-sandbox] Sandbox stopped successfully');
      } catch (e) {
        console.error('[kill-sandbox] Failed to stop sandbox:', e);
      }
      global.activeSandboxProvider = null;
      global.sandboxData = null;
    }
    
    // Clear existing files tracking
    if (global.existingFiles) {
      global.existingFiles.clear();
    }
    
    return NextResponse.json({
      success: true,
      sandboxKilled,
      message: 'Sandbox cleaned up successfully'
    });
    
  } catch (error) {
    console.error('[kill-sandbox] Error:', error);
    return NextResponse.json(
      { 
        success: false, 
        error: (error as Error).message 
      }, 
      { status: 500 }
    );
  }
}


================================================
FILE: app/api/monitor-vite-logs/route.ts
================================================
import { NextResponse } from 'next/server';

declare global {
  var activeSandbox: any;
}

export async function GET() {
  try {
    if (!global.activeSandbox) {
      return NextResponse.json({ 
        success: false, 
        error: 'No active sandbox' 
      }, { status: 400 });
    }
    
    console.log('[monitor-vite-logs] Checking Vite process logs...');
    
    const errors: any[] = [];
    
    // Check if there's an error file from previous runs
    try {
      const catResult = await global.activeSandbox.runCommand({
        cmd: 'cat',
        args: ['/tmp/vite-errors.json']
      });
      
      if (catResult.exitCode === 0) {
        const errorFileContent = await catResult.stdout();
        const data = JSON.parse(errorFileContent);
        errors.push(...(data.errors || []));
      }
    } catch {
      // No error file exists, that's OK
    }
    
    // Look for any Vite-related log files that might contain errors
    try {
      const findResult = await global.activeSandbox.runCommand({
        cmd: 'find',
        args: ['/tmp', '-name', '*vite*', '-type', 'f']
      });
      
      if (findResult.exitCode === 0) {
        const logFiles = (await findResult.stdout()).split('\n').filter((f: string) => f.trim());
        
        for (const logFile of logFiles.slice(0, 3)) {
          try {
            const grepResult = await global.activeSandbox.runCommand({
              cmd: 'grep',
              args: ['-i', 'failed to resolve import', logFile]
            });
            
            if (grepResult.exitCode === 0) {
              const errorLines = (await grepResult.stdout()).split('\n').filter((line: string) => line.trim());
              
              for (const line of errorLines) {
                // Extract package name from error line
                const importMatch = line.match(/"([^"]+)"/);
                if (importMatch) {
                  const importPath = importMatch[1];
                  
                  // Skip relative imports
                  if (!importPath.startsWith('.')) {
                    // Extract base package name
                    let packageName;
                    if (importPath.startsWith('@')) {
                      const parts = importPath.split('/');
                      packageName = parts.length >= 2 ? parts.slice(0, 2).join('/') : importPath;
                    } else {
                      packageName = importPath.split('/')[0];
                    }
                    
                    const errorObj = {
                      type: "npm-missing",
                      package: packageName,
                      message: `Failed to resolve import "${importPath}"`,
                      file: "Unknown"
                    };
                    
                    // Avoid duplicates
                    if (!errors.some(e => e.package === errorObj.package)) {
                      errors.push(errorObj);
                    }
                  }
                }
              }
            }
          } catch {
            // Skip if grep fails
          }
        }
      }
    } catch {
      // No log files found, that's OK
    }
    
    // Deduplicate errors by package name
    const uniqueErrors: any[] = [];
    const seenPackages = new Set<string>();
    
    for (const error of errors) {
      if (error.package && !seenPackages.has(error.package)) {
        seenPackages.add(error.package);
        uniqueErrors.push(error);
      }
    }
    
    return NextResponse.json({
      success: true,
      hasErrors: uniqueErrors.length > 0,
      errors: uniqueErrors
    });
    
  } catch (error) {
    console.error('[monitor-vite-logs] Error:', error);
    return NextResponse.json({ 
      success: false, 
      error: (error as Error).message 
    }, { status: 500 });
  }
}


================================================
FILE: app/api/report-vite-error/route.ts
================================================
import { NextRequest, NextResponse } from 'next/server';

declare global {
  var viteErrors: any[];
}

// Initialize global viteErrors array if it doesn't exist
if (!global.viteErrors) {
  global.viteErrors = [];
}

export async function POST(request: NextRequest) {
  try {
    const { error, file, type = 'runtime-error' } = await request.json();
    
    if (!error) {
      return NextResponse.json({ 
        success: false, 
        error: 'Error message is required' 
      }, { status: 400 });
    }
    
    // Parse the error to extract useful information
    const errorObj: any = {
      type,
      message: error,
      file: file || 'unknown',
      timestamp: new Date().toISOString()
    };
    
    // Extract import information if it's an import error
    const importMatch = error.match(/Failed to resolve import ['"]([^'"]+)['"] from ['"]([^'"]+)['"]/);
    if (importMatch) {
      errorObj.type = 'import-error';
      errorObj.import = importMatch[1];
      errorObj.file = importMatch[2];
    }
    
    // Add to global errors array
    global.viteErrors.push(errorObj);
    
    // Keep only last 50 errors
    if (global.viteErrors.length > 50) {
      global.viteErrors = global.viteErrors.slice(-50);
    }
    
    console.log('[report-vite-error] Error reported:', errorObj);
    
    return NextResponse.json({
      success: true,
      message: 'Error reported successfully',
      error: errorObj
    });
    
  } catch (error) {
    console.error('[report-vite-error] Error:', error);
    return NextResponse.json({ 
      success: false, 
      error: (error as Error).message 
    }, { status: 500 });
  }
}


================================================
FILE: app/api/restart-vite/route.ts
================================================
import { NextResponse } from 'next/server';

declare global {
  var activeSandbox: any;
  var activeSandboxProvider: any;
  var lastViteRestartTime: number;
  var viteRestartInProgress: boolean;
}

const RESTART_COOLDOWN_MS = 5000; // 5 second cooldown between restarts

export async function POST() {
  try {
    // Check both v1 and v2 global references
    const provider = global.activeSandbox || global.activeSandboxProvider;
    
    if (!provider) {
      return NextResponse.json({ 
        success: false, 
        error: 'No active sandbox' 
      }, { status: 400 });
    }
    
    // Check if restart is already in progress
    if (global.viteRestartInProgress) {
      console.log('[restart-vite] Vite restart already in progress, skipping...');
      return NextResponse.json({
        success: true,
        message: 'Vite restart already in progress'
      });
    }
    
    // Check cooldown
    const now = Date.now();
    if (global.lastViteRestartTime && (now - global.lastViteRestartTime) < RESTART_COOLDOWN_MS) {
      const remainingTime = Math.ceil((RESTART_COOLDOWN_MS - (now - global.lastViteRestartTime)) / 1000);
      console.log(`[restart-vite] Cooldown active, ${remainingTime}s remaining`);
      return NextResponse.json({
        success: true,
        message: `Vite was recently restarted, cooldown active (${remainingTime}s remaining)`
      });
    }
    
    // Set the restart flag
    global.viteRestartInProgress = true;
    
    console.log('[restart-vite] Using provider method to restart Vite...');
    
    // Use the provider's restartViteServer method if available
    if (typeof provider.restartViteServer === 'function') {
      await provider.restartViteServer();
      console.log('[restart-vite] Vite restarted via provider method');
    } else {
      // Fallback to manual restart using provider's runCommand
      console.log('[restart-vite] Fallback to manual Vite restart...');
      
      // Kill existing Vite processes
      try {
        await provider.runCommand('pkill -f vite');
        console.log('[restart-vite] Killed existing Vite processes');
        
        // Wait a moment for processes to terminate
        await new Promise(resolve => setTimeout(resolve, 2000));
      } catch {
        console.log('[restart-vite] No existing Vite processes found');
      }
      
      // Clear any error tracking files
      try {
        await provider.runCommand('bash -c "echo \'{\\"errors\\": [], \\"lastChecked\\": '+ Date.now() +'}\' > /tmp/vite-errors.json"');
      } catch {
        // Ignore if this fails
      }
      
      // Start Vite dev server in background
      await provider.runCommand('sh -c "nohup npm run dev > /tmp/vite.log 2>&1 &"');
      console.log('[restart-vite] Vite dev server restarted');
      
      // Wait for Vite to start up
      await new Promise(resolve => setTimeout(resolve, 3000));
    }
    
    // Update global state
    global.lastViteRestartTime = Date.now();
    global.viteRestartInProgress = false;
    
    return NextResponse.json({
      success: true,
      message: 'Vite restarted successfully'
    });
    
  } catch (error) {
    console.error('[restart-vite] Error:', error);
    
    // Clear the restart flag on error
    global.viteRestartInProgress = false;
    
    return NextResponse.json({ 
      success: false, 
      error: (error as Error).message 
    }, { status: 500 });
  }
}


================================================
FILE: app/api/run-command/route.ts
================================================
import { NextRequest, NextResponse } from 'next/server';

// Get active sandbox from global state (in production, use a proper state management solution)
declare global {
  var activeSandbox: any;
}

export async function POST(request: NextRequest) {
  try {
    const { command } = await request.json();
    
    if (!command) {
      return NextResponse.json({ 
        success: false, 
        error: 'Command is required' 
      }, { status: 400 });
    }
    
    if (!global.activeSandbox) {
      return NextResponse.json({ 
        success: false, 
        error: 'No active sandbox' 
      }, { status: 400 });
    }
    
    console.log(`[run-command] Executing: ${command}`);
    
    // Parse command and arguments
    const commandParts = command.trim().split(/\s+/);
    const cmd = commandParts[0];
    const args = commandParts.slice(1);
    
    // Execute command using Vercel Sandbox
    const result = await global.activeSandbox.runCommand({
      cmd,
      args
    });
    
    // Get output streams
    const stdout = await result.stdout();
    const stderr = await result.stderr();
    
    const output = [
      stdout ? `STDOUT:\n${stdout}` : '',
      stderr ? `\nSTDERR:\n${stderr}` : '',
      `\nExit code: ${result.exitCode}`
    ].filter(Boolean).join('');
    
    return NextResponse.json({
      success: true,
      output,
      exitCode: result.exitCode,
      message: result.exitCode === 0 ? 'Command executed successfully' : 'Command completed with non-zero exit code'
    });
    
  } catch (error) {
    console.error('[run-command] Error:', error);
    return NextResponse.json({ 
      success: false, 
      error: (error as Error).message 
    }, { status: 500 });
  }
}


================================================
FILE: app/api/run-command-v2/route.ts
================================================
import { NextRequest, NextResponse } from 'next/server';
import { SandboxProvider } from '@/lib/sandbox/types';
import { sandboxManager } from '@/lib/sandbox/sandbox-manager';

// Get active sandbox provider from global state
declare global {
  var activeSandboxProvider: any;
}

export async function POST(request: NextRequest) {
  try {
    const { command } = await request.json();
    
    if (!command) {
      return NextResponse.json({ 
        success: false, 
        error: 'Command is required' 
      }, { status: 400 });
    }
    
    // Get provider from sandbox manager or global state
    const provider = sandboxManager.getActiveProvider() || global.activeSandboxProvider;
    
    if (!provider) {
      return NextResponse.json({ 
        success: false, 
        error: 'No active sandbox' 
      }, { status: 400 });
    }
    
    console.log(`[run-command-v2] Executing: ${command}`);
    
    const result = await provider.runCommand(command);
    
    return NextResponse.json({
      success: result.success,
      output: result.stdout,
      error: result.stderr,
      exitCode: result.exitCode,
      message: result.success ? 'Command executed successfully' : 'Command failed'
    });
    
  } catch (error) {
    console.error('[run-command-v2] Error:', error);
    return NextResponse.json({ 
      success: false, 
      error: (error as Error).message 
    }, { status: 500 });
  }
}


================================================
FILE: app/api/sandbox-logs/route.ts
================================================
import { NextResponse } from 'next/server';

declare global {
  var activeSandbox: any;
}

export async function GET() {
  try {
    if (!global.activeSandbox) {
      return NextResponse.json({ 
        success: false, 
        error: 'No active sandbox' 
      }, { status: 400 });
    }
    
    console.log('[sandbox-logs] Fetching Vite dev server logs...');
    
    // Check if Vite processes are running
    const psResult = await global.activeSandbox.runCommand({
      cmd: 'ps',
      args: ['aux']
    });
    
    let viteRunning = false;
    const logContent: string[] = [];
    
    if (psResult.exitCode === 0) {
      const psOutput = await psResult.stdout();
      const viteProcesses = psOutput.split('\n').filter((line: string) => 
        line.toLowerCase().includes('vite') || 
        line.toLowerCase().includes('npm run dev')
      );
      
      viteRunning = viteProcesses.length > 0;
      
      if (viteRunning) {
        logContent.push("Vite is running");
        logContent.push(...viteProcesses.slice(0, 3)); // Show first 3 processes
      } else {
        logContent.push("Vite process not found");
      }
    }
    
    // Try to read any recent log files
    try {
      const findResult = await global.activeSandbox.runCommand({
        cmd: 'find',
        args: ['/tmp', '-name', '*vite*', '-name', '*.log', '-type', 'f']
      });
      
      if (findResult.exitCode === 0) {
        const logFiles = (await findResult.stdout()).split('\n').filter((f: string) => f.trim());
        
        for (const logFile of logFiles.slice(0, 2)) {
          try {
            const catResult = await global.activeSandbox.runCommand({
              cmd: 'tail',
              args: ['-n', '10', logFile]
            });
            
            if (catResult.exitCode === 0) {
              const logFileContent = await catResult.stdout();
              logContent.push(`--- ${logFile} ---`);
              logContent.push(logFileContent);
            }
          } catch {
            // Skip if can't read log file
          }
        }
      }
    } catch {
      // No log files found, that's OK
    }
    
    return NextResponse.json({
      success: true,
      hasErrors: false,
      logs: logContent,
      status: viteRunning ? 'running' : 'stopped'
    });
    
  } catch (error) {
    console.error('[sandbox-logs] Error:', error);
    return NextResponse.json({ 
      success: false, 
      error: (error as Error).message 
    }, { status: 500 });
  }
}


================================================
FILE: app/api/sandbox-status/route.ts
================================================
import { NextResponse } from 'next/server';
import { sandboxManager } from '@/lib/sandbox/sandbox-manager';

declare global {
  var activeSandboxProvider: any;
  var sandboxData: any;
  var existingFiles: Set<string>;
}

export async function GET() {
  try {
    // Check sandbox manager first, then fall back to global state
    const provider = sandboxManager.getActiveProvider() || global.activeSandboxProvider;
    const sandboxExists = !!provider;

    let sandboxHealthy = false;
    let sandboxInfo = null;

    if (sandboxExists && provider) {
      try {
        // Check if sandbox is healthy by getting its info
        const providerInfo = provider.getSandboxInfo();
        sandboxHealthy = !!providerInfo;
        
        sandboxInfo = {
          sandboxId: providerInfo?.sandboxId || global.sandboxData?.sandboxId,
          url: providerInfo?.url || global.sandboxData?.url,
          filesTracked: global.existingFiles ? Array.from(global.existingFiles) : [],
          lastHealthCheck: new Date().toISOString()
        };
      } catch (error) {
        console.error('[sandbox-status] Health check failed:', error);
        sandboxHealthy = false;
      }
    }
    
    return NextResponse.json({
      success: true,
      active: sandboxExists,
      healthy: sandboxHealthy,
      sandboxData: sandboxInfo,
      message: sandboxHealthy 
        ? 'Sandbox is active and healthy' 
        : sandboxExists 
          ? 'Sandbox exists but is not responding' 
          : 'No active sandbox'
    });
    
  } catch (error) {
    console.error('[sandbox-status] Error:', error);
    return NextResponse.json({ 
      success: false,
      active: false,
      error: (error as Error).message 
    }, { status: 500 });
  }
}


================================================
FILE: app/api/scrape-screenshot/route.ts
================================================
import { NextRequest, NextResponse } from 'next/server';
import FirecrawlApp from '@mendable/firecrawl-js';

export async function POST(req: NextRequest) {
  try {
    const { url } = await req.json();
    
    if (!url) {
      return NextResponse.json({ error: 'URL is required' }, { status: 400 });
    }

    // Initialize Firecrawl with API key from environment
    const apiKey = process.env.FIRECRAWL_API_KEY;
    
    if (!apiKey) {
      console.error("FIRECRAWL_API_KEY not configured");
      return NextResponse.json({ 
        error: 'Firecrawl API key not configured' 
      }, { status: 500 });
    }
    
    const app = new FirecrawlApp({ apiKey });

    console.log('[scrape-screenshot] Attempting to capture screenshot for:', url);
    console.log('[scrape-screenshot] Using Firecrawl API key:', apiKey ? 'Present' : 'Missing');

    // Use the new v4 scrape method (not scrapeUrl)
    const scrapeResult = await app.scrape(url, {
      formats: ['screenshot'], // Request screenshot format
      waitFor: 3000, // Wait for page to fully load
      timeout: 30000,
      onlyMainContent: false, // Get full page for screenshot
      actions: [
        {
          type: 'wait',
          milliseconds: 2000 // Additional wait for dynamic content
        }
      ]
    });

    console.log('[scrape-screenshot] Full scrape result:', JSON.stringify(scrapeResult, null, 2));
    console.log('[scrape-screenshot] Scrape result type:', typeof scrapeResult);
    console.log('[scrape-screenshot] Scrape result keys:', Object.keys(scrapeResult));
    
    // The Firecrawl v4 API might return data directly without a success flag
    // Check if we have data with screenshot
    if (scrapeResult && scrapeResult.screenshot) {
      // Direct screenshot response
      return NextResponse.json({
        success: true,
        screenshot: scrapeResult.screenshot,
        metadata: scrapeResult.metadata || {}
      });
    } else if ((scrapeResult as any)?.data?.screenshot) {
      // Nested data structure
      return NextResponse.json({
        success: true,
        screenshot: (scrapeResult as any).data.screenshot,
        metadata: (scrapeResult as any).data.metadata || {}
      });
    } else if ((scrapeResult as any)?.success === false) {
      // Explicit failure
      console.error('[scrape-screenshot] Firecrawl API error:', (scrapeResult as any).error);
      throw new Error((scrapeResult as any).error || 'Failed to capture screenshot');
    } else {
      // No screenshot in response
      console.error('[scrape-screenshot] No screenshot in response. Full response:', JSON.stringify(scrapeResult, null, 2));
      throw new Error('Screenshot not available in response - check console for full response structure');
    }

  } catch (error: any) {
    console.error('[scrape-screenshot] Screenshot capture error:', error);
    console.error('[scrape-screenshot] Error stack:', error.stack);
    
    // Provide fallback response for development - removed NODE_ENV check as it doesn't work in Next.js production builds
    
    return NextResponse.json({ 
      error: error.message || 'Failed to capture screenshot'
    }, { status: 500 });
  }
}


================================================
FILE: app/api/scrape-url-enhanced/route.ts
================================================
import { NextRequest, NextResponse } from 'next/server';

// Function to sanitize smart quotes and other problematic characters
function sanitizeQuotes(text: string): string {
  return text
    // Replace smart single quotes
    .replace(/[\u2018\u2019\u201A\u201B]/g, "'")
    // Replace smart double quotes
    .replace(/[\u201C\u201D\u201E\u201F]/g, '"')
    // Replace other quote-like characters
    .replace(/[\u00AB\u00BB]/g, '"') // Guillemets
    .replace(/[\u2039\u203A]/g, "'") // Single guillemets
    // Replace other problematic characters
    .replace(/[\u2013\u2014]/g, '-') // En dash and em dash
    .replace(/[\u2026]/g, '...') // Ellipsis
    .replace(/[\u00A0]/g, ' '); // Non-breaking space
}

export async function POST(request: NextRequest) {
  try {
    const { url } = await request.json();
    
    if (!url) {
      return NextResponse.json({
        success: false,
        error: 'URL is required'
      }, { status: 400 });
    }
    
    console.log('[scrape-url-enhanced] Scraping with Firecrawl:', url);
    
    const FIRECRAWL_API_KEY = process.env.FIRECRAWL_API_KEY;
    if (!FIRECRAWL_API_KEY) {
      throw new Error('FIRECRAWL_API_KEY environment variable is not set');
    }
    
    // Make request to Firecrawl API with maxAge for 500% faster scraping
    const firecrawlResponse = await fetch('https://api.firecrawl.dev/v1/scrape', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${FIRECRAWL_API_KEY}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        url,
        formats: ['markdown', 'html', 'screenshot'],
        waitFor: 3000,
        timeout: 30000,
        blockAds: true,
        maxAge: 3600000, // Use cached data if less than 1 hour old (500% faster!)
        actions: [
          {
            type: 'wait',
            milliseconds: 2000
          },
          {
            type: 'screenshot',
            fullPage: false // Just visible viewport for performance
          }
        ]
      })
    });
    
    if (!firecrawlResponse.ok) {
      const error = await firecrawlResponse.text();
      throw new Error(`Firecrawl API error: ${error}`);
    }
    
    const data = await firecrawlResponse.json();
    
    if (!data.success || !data.data) {
      throw new Error('Failed to scrape content');
    }
    
    const { markdown, metadata, screenshot, actions } = data.data;
    // html available but not used in current implementation
    
    // Get screenshot from either direct field or actions result
    const screenshotUrl = screenshot || actions?.screenshots?.[0] || null;
    
    // Sanitize the markdown content
    const sanitizedMarkdown = sanitizeQuotes(markdown || '');
    
    // Extract structured data from the response
    const title = metadata?.title || '';
    const description = metadata?.description || '';
    
    // Format content for AI
    const formattedContent = `
Title: ${sanitizeQuotes(title)}
Description: ${sanitizeQuotes(description)}
URL: ${url}

Main Content:
${sanitizedMarkdown}
    `.trim();
    
    return NextResponse.json({
      success: true,
      url,
      content: formattedContent,
      screenshot: screenshotUrl,
      structured: {
        title: sanitizeQuotes(title),
        description: sanitizeQuotes(description),
        content: sanitizedMarkdown,
        url,
        screenshot: screenshotUrl
      },
      metadata: {
        scraper: 'firecrawl-enhanced',
        timestamp: new Date().toISOString(),
        contentLength: formattedContent.length,
        cached: data.data.cached || false, // Indicates if data came from cache
        ...metadata
      },
      message: 'URL scraped successfully with Firecrawl (with caching for 500% faster performance)'
    });
    
  } catch (error) {
    console.error('[scrape-url-enhanced] Error:', error);
    return NextResponse.json({
      success: false,
      error: (error as Error).message
    }, { status: 500 });
  }
}


================================================
FILE: app/api/scrape-website/route.ts
================================================
import { NextRequest, NextResponse } from "next/server";
import FirecrawlApp from '@mendable/firecrawl-js';

export async function POST(request: NextRequest) {
  try {
    const { url, formats = ['markdown', 'html'], options = {} } = await request.json();
    
    if (!url) {
      return NextResponse.json(
        { error: "URL is required" },
        { status: 400 }
      );
    }
    
    // Initialize Firecrawl with API key from environment
    const apiKey = process.env.FIRECRAWL_API_KEY;
    
    if (!apiKey) {
      console.error("FIRECRAWL_API_KEY not configured");
      // For demo purposes, return mock data if API key is not set
      return NextResponse.json({
        success: true,
        data: {
          title: "Example Website",
          content: `This is a mock response for ${url}. Configure FIRECRAWL_API_KEY to enable real scraping.`,
          description: "A sample website",
          markdown: `# Example Website\n\nThis is mock content for demonstration purposes.`,
          html: `<h1>Example Website</h1><p>This is mock content for demonstration purposes.</p>`,
          metadata: {
            title: "Example Website",
            description: "A sample website",
            sourceURL: url,
            statusCode: 200
          }
        }
      });
    }
    
    const app = new FirecrawlApp({ apiKey });
    
    // Scrape the website using the latest SDK patterns
    // Include screenshot if requested in formats
    const scrapeResult = await app.scrape(url, {
      formats: formats,
      onlyMainContent: options.onlyMainContent !== false, // Default to true for cleaner content
      waitFor: options.waitFor || 2000, // Wait for dynamic content
      timeout: options.timeout || 30000,
      ...options // Pass through any additional options
    });
    
    // Handle the response according to the latest SDK structure
    const result = scrapeResult as any;
    if (result.success === false) {
      throw new Error(result.error || "Failed to scrape website");
    }
    
    // The SDK may return data directly or nested
    const data = result.data || result;
    
    return NextResponse.json({
      success: true,
      data: {
        title: data?.metadata?.title || "Untitled",
        content: data?.markdown || data?.html || "",
        description: data?.metadata?.description || "",
        markdown: data?.markdown || "",
        html: data?.html || "",
        metadata: data?.metadata || {},
        screenshot: data?.screenshot || null,
        links: data?.links || [],
        // Include raw data for flexibility
        raw: data
      }
    });
    
  } catch (error) {
    console.error("Error scraping website:", error);
    
    // Return a more detailed error response
    return NextResponse.json({
      success: false,
      error: error instanceof Error ? error.message : "Failed to scrape website",
      // Provide mock data as fallback for development
      data: {
        title: "Example Website",
        content: "This is fallback content due to an error. Please check your configuration.",
        description: "Error occurred while scraping",
        markdown: `# Error\n\n${error instanceof Error ? error.message : 'Unknown error occurred'}`,
        html: `<h1>Error</h1><p>${error instanceof Error ? error.message : 'Unknown error occurred'}</p>`,
        metadata: {
          title: "Error",
          description: "Failed to scrape website",
          statusCode: 500
        }
      }
    }, { status: 500 });
  }
}

// Optional: Add OPTIONS handler for CORS if needed
export async function OPTIONS() {
  return new NextResponse(null, {
    status: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  });
}


================================================
FILE: app/api/search/route.ts
================================================
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    const { query } = await req.json();
    
    if (!query) {
      return NextResponse.json({ error: 'Query is required' }, { status: 400 });
    }

    // Use Firecrawl search to get top 10 results with screenshots
    const searchResponse = await fetch('https://api.firecrawl.dev/v1/search', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.FIRECRAWL_API_KEY}`,
      },
      body: JSON.stringify({
        query,
        limit: 10,
        scrapeOptions: {
          formats: ['markdown', 'screenshot'],
          onlyMainContent: true,
        },
      }),
    });

    if (!searchResponse.ok) {
      throw new Error('Search failed');
    }

    const searchData = await searchResponse.json();
    
    // Format results with screenshots and markdown
    const results = searchData.data?.map((result: any) => ({
      url: result.url,
      title: result.title || result.url,
      description: result.description || '',
      screenshot: result.screenshot || null,
      markdown: result.markdown || '',
    })) || [];

    return NextResponse.json({ results });
  } catch (error) {
    console.error('Search error:', error);
    return NextResponse.json(
      { error: 'Failed to perform search' },
      { status: 500 }
    );
  }
}


================================================
FILE: app/builder/page.tsx
================================================
"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

export default function BuilderPage() {
  const [targetUrl, setTargetUrl] = useState<string>("");
  const [selectedStyle, setSelectedStyle] = useState<string>("modern");
  const [isLoading, setIsLoading] = useState(true);
  const [previewUrl, setPreviewUrl] = useState<string>("");
  const [progress, setProgress] = useState<string>("Initializing...");
  const [generatedCode, setGeneratedCode] = useState<string>("");
  const router = useRouter();

  useEffect(() => {
    // Get the URL and style from sessionStorage
    const url = sessionStorage.getItem('targetUrl');
    const style = sessionStorage.getItem('selectedStyle');
    
    if (!url) {
      router.push('/');
      return;
    }
    
    setTargetUrl(url);
    setSelectedStyle(style || "modern");
    
    // Start the website generation process
    generateWebsite(url, style || "modern");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [router]);

  const generateWebsite = async (url: string, style: string) => {
    try {
      setProgress("Analyzing website...");
      
      // For demo purposes, we'll generate a simple HTML template
      // In production, this would call the actual scraping and generation APIs
      const mockGeneratedCode = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${style} Website - Reimagined</title>
  <style>
    :root {
      --primary: ${style === 'modern' ? '#FA5D19' : style === 'playful' ? '#9061ff' : style === 'professional' ? '#2a6dfb' : '#eb3424'};
      --background: ${style === 'modern' ? '#ffffff' : style === 'playful' ? '#f9f9f9' : style === 'professional' ? '#f5f5f5' : '#fafafa'};
    }
    
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    
    body {
      font-family: system-ui, -apple-system, sans-serif;
      background: var(--background);
      color: #262626;
      line-height: 1.6;
    }
    
    header {
      background: white;
      border-bottom: 1px solid #ededed;
      padding: 2rem;
    }
    
    nav {
      max-width: 1200px;
      margin: 0 auto;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    
    .logo {
      font-size: 1.5rem;
      font-weight: bold;
      color: var(--primary);
    }
    
    main {
      max-width: 1200px;
      margin: 4rem auto;
      padding: 0 2rem;
    }
    
    .hero {
      text-align: center;
      margin-bottom: 4rem;
    }
    
    h1 {
      font-size: 3rem;
      margin-bottom: 1rem;
      background: linear-gradient(135deg, var(--primary), #262626);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
    
    .subtitle {
      font-size: 1.25rem;
      color: #666;
    }
    
    .cta-button {
      display: inline-block;
      margin-top: 2rem;
      padding: 1rem 2rem;
      background: var(--primary);
      color: white;
      text-decoration: none;
      border-radius: 0.5rem;
      transition: transform 0.2s;
    }
    
    .cta-button:hover {
      transform: scale(1.05);
    }
    
    .features {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 2rem;
      margin-top: 4rem;
    }
    
    .feature {
      padding: 2rem;
      background: white;
      border-radius: 1rem;
      border: 1px solid #ededed;
      transition: box-shadow 0.2s;
    }
    
    .feature:hover {
      box-shadow: 0 10px 30px rgba(0,0,0,0.1);
    }
    
    .feature h3 {
      margin-bottom: 1rem;
      color: var(--primary);
    }
  </style>
</head>
<body>
  <header>
    <nav>
      <div class="logo">Reimagined</div>
      <div>
        <a href="#features" style="margin-right: 2rem; color: #666; text-decoration: none;">Features</a>
        <a href="#about" style="margin-right: 2rem; color: #666; text-decoration: none;">About</a>
        <a href="#contact" style="color: #666; text-decoration: none;">Contact</a>
      </div>
    </nav>
  </header>
  
  <main>
    <div class="hero">
      <h1>Welcome to Your ${style === 'modern' ? 'Modern' : style === 'playful' ? 'Playful' : style === 'professional' ? 'Professional' : 'Artistic'} Website</h1>
      <p class="subtitle">Reimagined from ${url}</p>
      <a href="#" class="cta-button">Get Started</a>
    </div>
    
    <div class="features" id="features">
      <div class="feature">
        <h3>Fast</h3>
        <p>Lightning-fast performance optimized for modern web standards.</p>
      </div>
      <div class="feature">
        <h3>Responsive</h3>
        <p>Looks great on all devices, from mobile to desktop.</p>
      </div>
      <div class="feature">
        <h3>Beautiful</h3>
        <p>Stunning design that captures attention and drives engagement.</p>
      </div>
    </div>
  </main>
</body>
</html>`;
      
      setGeneratedCode(mockGeneratedCode);
      
      // Create a blob URL for the preview
      const blob = new Blob([mockGeneratedCode], { type: 'text/html' });
      const blobUrl = URL.createObjectURL(blob);
      setPreviewUrl(blobUrl);
      
      setProgress("Website ready!");
      setIsLoading(false);
      
      // Show success message
      toast.success("Website generated successfully!");
      
    } catch (error) {
      console.error("Error generating website:", error);
      toast.error("Failed to generate website. Please try again.");
      setProgress("Error occurred");
      setTimeout(() => router.push('/'), 2000);
    }
  };
  
  const downloadCode = () => {
    const blob = new Blob([generatedCode], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'website.html';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    toast.success("Code downloaded!");
  };

  return (
    <div className="min-h-screen bg-background-base">
      <div className="flex h-screen">
        {/* Sidebar */}
        <div className="w-80 bg-white border-r border-border-faint p-24 flex flex-col">
          <h2 className="text-title-small font-semibold mb-16">Building Your Website</h2>
          
          <div className="space-y-12 flex-1">
            <div>
              <div className="text-label-small text-black-alpha-56 mb-4">Target URL</div>
              <div className="text-body-medium text-accent-black truncate">{targetUrl}</div>
            </div>
            
            <div>
              <div className="text-label-small text-black-alpha-56 mb-4">Style</div>
              <div className="text-body-medium text-accent-black capitalize">{selectedStyle}</div>
            </div>
            
            <div>
              <div className="text-label-small text-black-alpha-56 mb-4">Status</div>
              <div className="text-body-medium text-heat-100">{progress}</div>
            </div>
          </div>
          
          <div className="space-y-8">
            {!isLoading && (
              <button
                onClick={downloadCode}
                className="w-full py-12 px-16 bg-heat-100 hover:bg-heat-200 text-white rounded-10 text-label-medium transition-all"
              >
                Download Code
              </button>
            )}
            
            <button
              onClick={() => router.push('/')}
              className="w-full py-12 px-16 bg-black-alpha-4 hover:bg-black-alpha-6 rounded-10 text-label-medium transition-all"
            >
              Start Over
            </button>
          </div>
        </div>
        
        {/* Preview */}
        <div className="flex-1 bg-gray-50">
          {isLoading ? (
            <div className="flex items-center justify-center h-full">
              <div className="text-center">
                <div className="w-48 h-48 border-4 border-heat-100 border-t-transparent rounded-full animate-spin mb-16 mx-auto"></div>
                <p className="text-body-large text-black-alpha-56">{progress}</p>
              </div>
            </div>
          ) : (
            previewUrl && (
              <iframe
                src={previewUrl}
                className="w-full h-full border-0"
                title="Website Preview"
              />
            )
          )}
        </div>
      </div>
    </div>
  );
}


================================================
FILE: atoms/sheets.ts
================================================
import { atom } from 'jotai';

export const isMobileSheetOpenAtom = atom(false);


================================================
FILE: components/CodeApplicationProgress.tsx
================================================
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export interface CodeApplicationState {
  stage: 'analyzing' | 'installing' | 'applying' | 'complete' | null;
  packages?: string[];
  installedPackages?: string[];
  filesGenerated?: string[];
  message?: string;
}

interface CodeApplicationProgressProps {
  state: CodeApplicationState;
}

export default function CodeApplicationProgress({ state }: CodeApplicationProgressProps) {
  if (!state.stage || state.stage === 'complete') return null;

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key="loading"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        transition={{ duration: 0.3 }}
        className="inline-block bg-gray-100 rounded-[10px] p-3 mt-2"
      >
        <div className="flex items-center gap-3">
          {/* Rotating loading indicator */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
            className="w-4 h-4"
          >
            <svg className="w-full h-full" viewBox="0 0 24 24" fill="none">
              <circle 
                cx="12" 
                cy="12" 
                r="10" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round"
                strokeDasharray="31.416"
                strokeDashoffset="10"
                className="text-gray-700"
              />
            </svg>
          </motion.div>

          {/* Simple loading text */}
          <div className="text-sm font-medium text-gray-700">
            Applying to sandbox...
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}


================================================
FILE: components/FirecrawlIcon.tsx
================================================
export default function FirecrawlIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg 
      className={className}
      fill="none" 
      viewBox="0 0 20 20" 
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M13.7605 6.61389C13.138 6.79867 12.6687 7.21667 12.3251 7.67073C12.2513 7.76819 12.0975 7.69495 12.1268 7.57552C12.7848 4.86978 11.9155 2.6209 9.20582 1.51393C9.06836 1.4576 8.92527 1.58097 8.96132 1.72519C10.1939 6.67417 5.00941 6.25673 5.66459 11.8671C5.67585 11.9634 5.56769 12.0293 5.48882 11.973C5.2432 11.7967 4.96885 11.4288 4.78069 11.1702C4.72548 11.0942 4.60605 11.1156 4.5807 11.2063C4.43085 11.7482 4.35986 12.2586 4.35986 12.7656C4.35986 14.7373 5.37333 16.473 6.90734 17.4791C6.99522 17.5366 7.10789 17.4543 7.07804 17.3535C6.99917 17.0887 6.95466 16.8093 6.95128 16.5203C6.95128 16.3429 6.96255 16.1615 6.99015 15.9925C7.05438 15.5677 7.20197 15.1632 7.44985 14.7948C8.29995 13.5188 10.0041 12.2862 9.73199 10.6125C9.71453 10.5066 9.83959 10.4368 9.91846 10.5094C11.119 11.6063 11.3567 13.0817 11.1595 14.405C11.1426 14.5199 11.2868 14.5813 11.3595 14.4912C11.5432 14.2613 11.7674 14.0596 12.0113 13.9081C12.0722 13.8703 12.1533 13.8991 12.1764 13.9667C12.3121 14.3616 12.5138 14.7323 12.7042 15.1029C12.9318 15.5485 13.0529 16.0573 13.0338 16.5958C13.0242 16.8578 12.9808 17.1113 12.9082 17.3524C12.8772 17.4543 12.9887 17.5394 13.0783 17.4808C14.6134 16.4747 15.6275 14.739 15.6275 12.7662C15.6275 12.0806 15.5075 11.4085 15.2804 10.7787C14.8044 9.45766 13.5966 8.46561 13.9019 6.74403C13.9166 6.66178 13.8405 6.59023 13.7605 6.61389Z"
        fill="currentColor"
      />
    </svg>
  );
}


================================================
FILE: components/FirecrawlLogo.tsx
================================================
export default function FirecrawlLogo() {
  return (
    <svg
      fill="none"
      height="15"
      viewBox="0 0 79 15"
      width="79"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0.599609 14.4311V0.576888H9.45474V2.59564H2.87778V6.61335H8.30575V8.57272H2.87778V14.4311H0.599609Z"
        fill="#262626"
      />
      <path
        d="M11.9737 2.87272C11.2407 2.87272 10.6663 2.33835 10.6663 1.58626C10.6663 0.83418 11.2407 0.299805 11.9737 0.299805C12.7067 0.299805 13.2812 0.83418 13.2812 1.58626C13.2812 2.33835 12.7067 2.87272 11.9737 2.87272ZM10.8842 14.4311V4.29772H13.0237V14.4311H10.8842Z"
        fill="#262626"
      />
      <path
        d="M20.1527 4.29772H20.6281V6.29668H19.6772C17.7755 6.29668 17.1613 7.78105 17.1613 9.3446V14.4311H15.0219V4.29772H16.9236L17.1613 5.82168C17.6764 4.97064 18.4886 4.29772 20.1527 4.29772Z"
        fill="#262626"
      />
      <path
        d="M26.1788 14.5498C22.9894 14.5498 20.9886 12.4915 20.9886 9.38418C20.9886 6.2571 22.9894 4.17897 25.9807 4.17897C28.9126 4.17897 30.8738 6.03939 30.9333 9.00814C30.9333 9.26543 30.9135 9.54251 30.8738 9.8196H23.2271V9.95814C23.2865 11.68 24.3761 12.8081 26.06 12.8081C27.3674 12.8081 28.3183 12.155 28.6155 11.0269H30.755C30.3984 13.0258 28.6947 14.5498 26.1788 14.5498ZM23.3064 8.25605H28.7145C28.5362 6.75189 27.4863 5.90085 26.0005 5.90085C24.6336 5.90085 23.4648 6.81126 23.3064 8.25605Z"
        fill="#262626"
      />
      <path
        d="M37.2193 14.5498C34.1487 14.5498 32.1875 12.5508 32.1875 9.38418C32.1875 6.2571 34.2081 4.17897 37.2787 4.17897C39.8936 4.17897 41.5181 5.62376 41.9341 7.9196H39.6955C39.4182 6.7321 38.5664 5.9998 37.2391 5.9998C35.5156 5.9998 34.3864 7.38522 34.3864 9.38418C34.3864 11.3633 35.5156 12.729 37.2391 12.729C38.5465 12.729 39.4182 11.9769 39.6757 10.8092H41.9341C41.5379 13.105 39.8144 14.5498 37.2193 14.5498Z"
        fill="#262626"
      />
      <path
        d="M48.6034 4.29772H49.0789V6.29668H48.128C46.2262 6.29668 45.6121 7.78105 45.6121 9.3446V14.4311H43.4726V4.29772H45.3744L45.6121 5.82168C46.1272 4.97064 46.9394 4.29772 48.6034 4.29772Z"
        fill="#262626"
      />
      <path
        d="M54.3679 4.17897C57.0621 4.17897 58.6073 5.46543 58.6073 7.86022V14.4311H56.7451L56.5668 12.9863C55.8735 13.8967 54.9028 14.5498 53.2981 14.5498C51.0794 14.5498 49.5936 13.4613 49.5936 11.5811C49.5936 9.50293 51.0992 8.33522 53.9519 8.33522H56.4876V7.72168C56.4876 6.59355 55.6754 5.90085 54.2688 5.90085C53.001 5.90085 52.1491 6.4946 51.9907 7.38522H49.8908C50.1087 5.40605 51.8124 4.17897 54.3679 4.17897ZM53.6547 12.8873C55.4376 12.8873 56.4678 11.8383 56.4876 10.2748V9.91855H53.833C52.5057 9.91855 51.7728 10.4133 51.7728 11.4425C51.7728 12.2936 52.4859 12.8873 53.6547 12.8873Z"
        fill="#262626"
      />
      <path
        d="M62.7912 14.4311L59.4829 4.29772H61.7413L64.0591 12.0561L66.3768 4.29772H68.3381L70.5568 12.0561L72.9538 4.29772H75.1329L71.7652 14.4311H69.4672L67.3277 7.54355L65.109 14.4311H62.7912Z"
        fill="#262626"
      />
      <path
        d="M76.1601 14.4311V0.576888H78.2996V14.4311H76.1601Z"
        fill="#262626"
      />
    </svg>
  );
}


================================================
FILE: components/HeroInput.tsx
================================================
"use client";

import { useState, KeyboardEvent, useEffect, useRef } from "react";

interface HeroInputProps {
  value: string;
  onChange: (value: string) => void;
  onSubmit: () => void;
  placeholder?: string;
  className?: string;
  showSearchFeatures?: boolean;
}

function isURL(str: string): boolean {
  // Check if string contains a dot and looks like a URL
  const urlPattern = /^(https?:\/\/)?([a-zA-Z0-9-]+\.)+[a-zA-Z]{2,}(\/.*)?$/;
  return urlPattern.test(str.trim());
}

export default function HeroInput({ 
  value, 
  onChange, 
  onSubmit, 
  placeholder = "Describe what you want to build...",
  className = "",
  showSearchFeatures = true
}: HeroInputProps) {
  const [isFocused, setIsFocused] = useState(false);
  const [showTiles, setShowTiles] = useState(false);
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const isURLInput = showSearchFeatures ? isURL(value) : false;

  // Reset textarea height when value changes (especially when cleared)
  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
      textareaRef.current.style.height = textareaRef.current.scrollHeight + 'px';
    }
    
    // Show tiles animation for search terms (only if search features are enabled)
    if (showSearchFeatures && value.trim() && !isURL(value) && isFocused) {
      setShowTiles(true);
    } else {
      setShowTiles(false);
    }
  }, [value, isFocused, showSearchFeatures]);

  const handleKeyDown = (e: KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      onSubmit();
    }
  };

  return (
    <div className={`max-w-552 mx-auto w-full relative z-[11] rounded-20 ${className}`}>
      <div
        className=""
      />

      <div className="relative">
        <label className="p-16 flex gap-8 items-start w-full relative border-b border-black-alpha-5">
          <div className="mt-2 flex-shrink-0">
            {showSearchFeatures ? (
              isURLInput ? (
                // Link icon for URLs
                <svg 
                  width="20" 
                  height="20" 
                  viewBox="0 0 20 20" 
                  fill="none" 
                  xmlns="http://www.w3.org/2000/svg"
                  className="opacity-40"
                >
                  <path d="M9 11L11 9M11 9L15 5M11 9L5 15M15 5L13 3M15 5L17 7" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M7 13L5 15L3 13" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M13 7L15 5L17 7" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              ) : (
                // Search icon for search terms
                <svg 
                  width="20" 
                  height="20" 
                  viewBox="0 0 20 20" 
                  fill="none" 
                  xmlns="http://www.w3.org/2000/svg"
                  className="opacity-40"
                >
                  <circle cx="8.5" cy="8.5" r="5.5" stroke="currentColor" strokeWidth="1.5"/>
                  <path d="M12.5 12.5L16.5 16.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
              )
            ) : (
              // Default globe icon for generation page
              <svg 
                width="20" 
                height="20" 
                viewBox="0 0 20 20" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
                className="opacity-40"
              >
                <circle cx="10" cy="10" r="9.5" stroke="currentColor"/>
                <path d="M10 2C10 5.5 10 14.5 10 18" stroke="currentColor" strokeLinecap="round"/>
                <path d="M2 10C5.5 10 14.5 10 18 10" stroke="currentColor" strokeLinecap="round"/>
                <ellipse cx="10" cy="10" rx="3.5" ry="9.5" stroke="currentColor"/>
                <ellipse cx="10" cy="10" rx="6" ry="9.5" stroke="currentColor"/>
              </svg>
            )}
          </div>

          <textarea
            ref={textareaRef}
            className="w-full bg-transparent text-body-input text-accent-black placeholder:text-black-alpha-48 resize-none outline-none min-h-[24px] leading-6"
            placeholder={placeholder}
            value={value}
            onChange={(e) => onChange(e.target.value)}
            onKeyDown={handleKeyDown}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            rows={1}
            style={{
              height: 'auto',
              overflow: 'hidden'
            }}
            onInput={(e) => {
              const target = e.target as HTMLTextAreaElement;
              target.style.height = 'auto';
              target.style.height = target.scrollHeight + 'px';
            }}
          />
        </label>

        <div className="p-10 flex justify-end items-center relative">
          <button
            onClick={onSubmit}
            disabled={!value.trim()}
            className={`
              button relative rounded-10 px-8 py-8 text-label-medium font-medium
              flex items-center justify-center gap-6
              ${value.trim() 
                ? 'button-primary text-accent-white active:scale-[0.995]' 
                : 'bg-black-alpha-4 text-black-alpha-24 cursor-not-allowed'
              }
            `}
          >
            {value.trim() && <div className="button-background absolute inset-0 rounded-10 pointer-events-none" />}
            {value.trim() ? (
              <>
                <span className="px-6 relative">Re-imagine Site</span>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3 8H13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M8.5 3.5L13 8L8.5 12.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </>
            ) : (
              <div className="w-60 flex items-center justify-center">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3 8H13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M8.5 3.5L13 8L8.5 12.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            )}
          </button>
        </div>
      </div>

      {/* Animated tiles for search results */}
      {showTiles && (
        <div className="mt-16 grid grid-cols-3 gap-12 px-16">
          {[0, 1, 2].map((index) => (
            <div
              key={index}
              className="tile-animation relative aspect-[4/3] bg-black-alpha-4 rounded-12 overflow-hidden"
              style={{
                animationDelay: `${index * 100}ms`
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-black-alpha-4 to-transparent" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-8 h-8 bg-black-alpha-8 rounded-full animate-pulse" />
              </div>
            </div>
          ))}
        </div>
      )}

      <style jsx>{`
        @keyframes tileSlideUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .tile-animation {
          animation: tileSlideUp 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards;
          opacity: 0;
        }
      `}</style>
    </div>
  );
}


================================================
FILE: components/HMRErrorDetector.tsx
================================================
import { useEffect, useRef } from 'react';

interface HMRErrorDetectorProps {
  iframeRef: React.RefObject<HTMLIFrameElement>;
  onErrorDetected: (errors: Array<{ type: string; message: string; package?: string }>) => void;
}

export default function HMRErrorDetector({ iframeRef, onErrorDetected }: HMRErrorDetectorProps) {
  const checkIntervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const checkForHMRErrors = () => {
      if (!iframeRef.current) return;

      try {
        const iframeDoc = iframeRef.current.contentDocument;
        if (!iframeDoc) return;

        // Check for Vite error overlay
        const errorOverlay = iframeDoc.querySelector('vite-error-overlay');
        if (errorOverlay) {
          // Try to extract error message
          const messageElement = errorOverlay.shadowRoot?.querySelector('.message-body');
          if (messageElement) {
            const errorText = messageElement.textContent || '';
            
            // Parse import errors
            const importMatch = errorText.match(/Failed to resolve import "([^"]+)"/);
            if (importMatch) {
              const packageName = importMatch[1];
              if (!packageName.startsWith('.')) {
                // Extract base package name
                let finalPackage = packageName;
                if (packageName.startsWith('@')) {
                  const parts = packageName.split('/');
                  finalPackage = parts.length >= 2 ? parts.slice(0, 2).join('/') : packageName;
                } else {
                  finalPackage = packageName.split('/')[0];
                }

                onErrorDetected([{
                  type: 'npm-missing',
                  message: `Failed to resolve import "${packageName}"`,
                  package: finalPackage
                }]);
              }
            }
          }
        }
      } catch {
        // Cross-origin errors are expected, ignore them
      }
    };

    // Check immediately and then every 2 seconds
    checkForHMRErrors();
    checkIntervalRef.current = setInterval(checkForHMRErrors, 2000);

    return () => {
      if (checkIntervalRef.current) {
        clearInterval(checkIntervalRef.current);
      }
    };
  }, [iframeRef, onErrorDetected]);

  return null;
}


================================================
FILE: components/SandboxPreview.tsx
================================================
import { useState } from 'react';
import { Loader2, ExternalLink, RefreshCw, Terminal } from 'lucide-react';

interface SandboxPreviewProps {
  type: 'vite' | 'nextjs' | 'console';
  output?: string;
  isLoading?: boolean;
  sandboxUrl?: string; // Real URL from Vercel Sandbox API
}

export default function SandboxPreview({ 
  type, 
  output,
  isLoading = false,
  sandboxUrl
}: SandboxPreviewProps) {
  const [showConsole, setShowConsole] = useState(false);
  const [iframeKey, setIframeKey] = useState(0);

  // Use the real sandbox URL passed from the API
  const previewUrl = sandboxUrl || '';

  const handleRefresh = () => {
    setIframeKey(prev => prev + 1);
  };

  if (type === 'console') {
    return (
      <div className="bg-gray-800 rounded-lg p-4 border border-gray-700">
        <div className="font-mono text-sm whitespace-pre-wrap text-gray-300">
          {output || 'No output yet...'}
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {/* Preview Controls */}
      <div className="flex items-center justify-between bg-gray-800 rounded-lg p-3 border border-gray-700">
        <div className="flex items-center gap-3">
          <span className="text-sm text-gray-400">
            {type === 'vite' ? '⚡ Vite' : '▲ Next.js'} Preview
          </span>
          {previewUrl ? (
            <code className="text-xs bg-gray-900 px-2 py-1 rounded text-blue-400">
              {previewUrl}
            </code>
          ) : (
            <span className="text-xs text-gray-500">Waiting for sandbox URL...</span>
          )}
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={() => setShowConsole(!showConsole)}
            className="p-2 hover:bg-gray-700 rounded transition-colors"
            title="Toggle console"
          >
            <Terminal className="w-4 h-4" />
          </button>
          <button
            onClick={handleRefresh}
            className="p-2 hover:bg-gray-700 rounded transition-colors"
            title="Refresh preview"
          >
            <RefreshCw className="w-4 h-4" />
          </button>
          {previewUrl && (
            <a
              href={previewUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 hover:bg-gray-700 rounded transition-colors"
              title="Open in new tab"
            >
              <ExternalLink className="w-4 h-4" />
            </a>
          )}
        </div>
      </div>

      {/* Main Preview */}
      <div className="relative bg-gray-900 rounded-lg overflow-hidden border border-gray-700">
        {(isLoading || !previewUrl) && (
          <div className="absolute inset-0 bg-gray-900/80 flex items-center justify-center z-10">
            <div className="text-center">
              <Loader2 className="w-8 h-8 animate-spin mx-auto mb-2" />
              <p className="text-sm text-gray-400">
                {!previewUrl 
                  ? 'Setting up sandbox environment...' 
                  : type === 'vite' 
                    ? 'Starting Vite dev server...' 
                    : 'Starting Next.js dev server...'
                }
              </p>
            </div>
          </div>
        )}
        
        {previewUrl && (
          <iframe
            key={iframeKey}
            src={previewUrl}
            className="w-full h-[600px] bg-white"
            title={`${type} preview`}
            sandbox="allow-scripts allow-same-origin allow-forms"
          />
        )}
      </div>

      {/* Console Output (Toggle) */}
      {showConsole && output && (
        <div className="bg-gray-800 rounded-lg p-4 border border-gray-700">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-semibold text-gray-400">Console Output</span>
          </div>
          <div className="font-mono text-xs whitespace-pre-wrap text-gray-300 max-h-48 overflow-y-auto">
            {output}
          </div>
        </div>
      )}
    </div>
  );
}


================================================
FILE: components/app/(home)/sections/ai-readiness/ControlPanel.tsx
================================================
"use client";

import { motion, AnimatePresence } from "framer-motion";
import { 
  Globe, 
  FileText, 
  Code, 
  Shield, 
  // Search, // Not used in current implementation 
  Zap, 
  Database,
  // Lock, // Not used in current implementation
  CheckCircle2,
  XCircle,
  Loader2,
  AlertCircle,
  Bot,
  Sparkles,
  FileCode,
  Network,
  Info,
  Eye
} from "lucide-react";
import { useEffect, useState } from "react";
import ScoreChart from "./ScoreChart";
import RadarChart from "./RadarChart";
import MetricBars from "./MetricBars";

interface ControlPanelProps {
  isAnalyzing: boolean;
  showResults: boolean;
  url: string;
  analysisData?: any;
  onReset: () => void;
}

interface CheckItem {
  id: string;
  label: string;
  description: string;
  icon: any;
  status: 'pending' | 'checking' | 'pass' | 'fail' | 'warning';
  score?: number;
  details?: string;
  recommendation?: string;
  actionItems?: string[];
  tooltip?: string;
}

export default function ControlPanel({
  isAnalyzing,
  showResults,
  url,
  analysisData,
  onReset,
}: ControlPanelProps) {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [showAIAnalysis, setShowAIAnalysis] = useState(false); // Reserved for AI analysis feature
  const [aiInsights, setAiInsights] = useState<CheckItem[]>([]);
  const [isAnalyzingAI, setIsAnalyzingAI] = useState(false);
  const [combinedChecks, setCombinedChecks] = useState<CheckItem[]>([]);
  const [checks, setChecks] = useState<CheckItem[]>([
    {
      id: 'heading-structure',
      label: 'Heading Hierarchy',
      description: 'H1-H6 structure',
      icon: FileText,
      status: 'pending',
    },
    {
      id: 'readability',
      label: 'Readability',
      description: 'Content clarity',
      icon: Globe,
      status: 'pending',
    },
    {
      id: 'meta-tags',
      label: 'Metadata Quality',
      description: 'Title, desc, author',
      icon: FileCode,
      status: 'pending',
    },
    {
      id: 'semantic-html',
      label: 'Semantic HTML',
      description: 'Proper HTML5 tags',
      icon: Code,
      status: 'pending',
    },
    {
      id: 'accessibility',
      label: 'Accessibility',
      description: 'Alt text & ARIA',
      icon: Eye,
      status: 'pending',
    },
    {
      id: 'llms-txt',
      label: 'LLMs.txt',
      description: 'AI permissions',
      icon: Bot,
      status: 'pending',
    },
    {
      id: 'robots-txt',
      label: 'Robots.txt',
      description: 'Crawler rules',
      icon: Shield,
      status: 'pending',
    },
    {
      id: 'sitemap',
      label: 'Sitemap',
      description: 'Site structure',
      icon: Network,
      status: 'pending',
    },
  ]);

  const [overallScore, setOverallScore] = useState(0);
  const [currentCheckIndex, setCurrentCheckIndex] = useState(-1);
  const [selectedCheck, setSelectedCheck] = useState<string | null>(null);
  const [hoveredCheck, setHoveredCheck] = useState<string | null>(null);
  const [enhancedScore, setEnhancedScore] = useState(0);
  const [viewMode, setViewMode] = useState<'grid' | 'chart' | 'bars'>('grid');

  useEffect(() => {
    if (analysisData && analysisData.checks && showResults) {
      // Use real data from API
      const mappedChecks = analysisData.checks.map((check: any) => ({
        ...check,
        icon: checks.find(c => c.id === check.id)?.icon || FileText,
        description: check.details || checks.find(c => c.id === check.id)?.description,
      }));
      setChecks(mappedChecks);
      setCombinedChecks(mappedChecks); // Initialize with basic checks
      setOverallScore(analysisData.overallScore || 0);
      setCurrentCheckIndex(-1);
      
      // If AI analysis should auto-start, handle the promise
      if (analysisData.autoStartAI && analysisData.aiAnalysisPromise) {
        console.log('Auto-starting AI analysis with promise');
        setIsAnalyzingAI(true);
        setShowAIAnalysis(true);
        
        // Add placeholder AI tiles immediately with actual titles
        const placeholderAIChecks = [
          {
            id: 'ai-loading-0',
            label: 'Content Quality for AI',
            description: 'Analyzing content signal ratio...',
            icon: Sparkles,
            status: 'checking' as const,
            score: 0,
            isAI: true,
            isLoading: true
          },
          {
            id: 'ai-loading-1',
            label: 'Information Architecture',
            description: 'Evaluating page structure...',
            icon: Bot,
            status: 'checking' as const,
            score: 0,
            isAI: true,
            isLoading: true
          },
          {
            id: 'ai-loading-2',
            label: 'Crawlability Patterns',
            description: 'Checking JavaScript usage...',
            icon: Database,
            status: 'checking' as const,
            score: 0,
            isAI: true,
            isLoading: true
          },
          {
            id: 'ai-loading-3',
            label: 'AI Training Value',
            description: 'Assessing training potential...',
            icon: Network,
            status: 'checking' as const,
            score: 0,
            isAI: true,
            isLoading: true
          },
          {
            id: 'ai-loading-4',
            label: 'Knowledge Extraction',
            description: 'Analyzing entity definitions...',
            icon: FileCode,
            status: 'checking' as const,
            score: 0,
            isAI: true,
            isLoading: true
          },
          {
            id: 'ai-loading-5',
            label: 'Template Quality',
            description: 'Reviewing semantic structure...',
            icon: Shield,
            status: 'checking' as const,
            score: 0,
            isAI: true,
            isLoading: true
          },
          {
            id: 'ai-loading-6',
            label: 'Content Depth',
            description: 'Measuring content richness...',
            icon: Zap,
            status: 'checking' as const,
            score: 0,
            isAI: true,
            isLoading: true
          },
          {
            id: 'ai-loading-7',
            label: 'Machine Readability',
            description: 'Testing extraction reliability...',
            icon: Globe,
            status: 'checking' as const,
            score: 0,
            isAI: true,
            isLoading: true
          }
        ];
        
        // Add loading AI tiles with staggered animation
        placeholderAIChecks.forEach((check, idx) => {
          setTimeout(() => {
            setCombinedChecks(prev => [...prev, check]);
          }, 100 * (idx + 1));
        });
        
        // Handle the AI analysis promise
        analysisData.aiAnalysisPromise
          .then(async (aiResponse: any) => {
            if (aiResponse) {
              const data = await aiResponse.json();
              if (data.success && data.insights) {
                // Convert AI insights to CheckItem format
                const aiChecks: CheckItem[] = data.insights.map((insight: any, idx: number) => ({
                  ...insight,
                  icon: [Sparkles, Bot, Database, Network, FileCode, Shield, Zap, Globe][idx % 8],
                  description: insight.details?.substring(0, 60) + '...' || 'AI Analysis',
                  isAI: true,
                }));
                
                setAiInsights(aiChecks);
                
                // Replace loading tiles with real AI tiles
                setCombinedChecks(prev => {
                  // Remove loading tiles
                  const withoutLoading = prev.filter(c => !(c as any).isLoading);
                  // Add real AI tiles
                  return [...withoutLoading, ...aiChecks];
                });
                
                // Calculate enhanced score
                if (data.insights.length > 0) {
                  const aiScores = data.insights.map((i: any) => i.score || 0);
                  const avgAiScore = aiScores.reduce((a: number, b: number) => a + b, 0) / aiScores.length;
                  const combinedScore = Math.round((overallScore * 0.6) + (avgAiScore * 0.4));
                  setEnhancedScore(combinedScore);
                }
              }
            }
          })
          .catch((error: any) => {
            console.error('AI analysis error:', error);
            // Remove loading tiles on error
            setCombinedChecks(prev => prev.filter(c => !(c as any).isLoading));
          })
          .finally(() => {
            setIsAnalyzingAI(false);
          });
      }
    } else if (isAnalyzing) {
      // Reset all checks when starting analysis
      const resetChecks = checks.map(check => ({ ...check, status: 'pending' as const }));
      setChecks(resetChecks);
      setCombinedChecks(resetChecks); // Reset combined checks too
      setCurrentCheckIndex(0);
      setOverallScore(0);
      
      // Visual animation while waiting for real results
      const checkInterval = setInterval(() => {
        setCurrentCheckIndex(prev => {
          if (prev >= checks.length - 1) {
            clearInterval(checkInterval);
            return prev;
          }
          return prev + 1;
        });
      }, 200);

      return () => clearInterval(checkInterval);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isAnalyzing, showResults, analysisData]);

  useEffect(() => {
    if (currentCheckIndex >= 0 && currentCheckIndex < checks.length && isAnalyzing) {
      // Mark current as checking during animation
      setChecks(prev => prev.map((check, index) => {
        if (index === currentCheckIndex) {
          return { ...check, status: 'checking' };
        }
        if (index < currentCheckIndex) {
          return { ...check, status: 'checking' };
        }
        return check;
      }));
      
      // Update combinedChecks to show the animation
      setCombinedChecks(prev => prev.map((check, index) => {
        if (index === currentCheckIndex) {
          return { ...check, status: 'checking' };
        }
        if (index < currentCheckIndex) {
          return { ...check, status: 'checking' };
        }
        return check;
      }));
    }
  }, [currentCheckIndex, checks.length, isAnalyzing]);

  const getStatusIcon = (status: CheckItem['status']) => {
    switch (status) {
      case 'checking':
        return <Loader2 className="w-16 h-16 text-heat-100 animate-spin" />;
      case 'pass':
        return <CheckCircle2 className="w-16 h-16 text-accent-black" />;
      case 'fail':
        return <XCircle className="w-16 h-16 text-heat-200" />;
      case 'warning':
        return <AlertCircle className="w-16 h-16 text-heat-100" />;
      default:
        return <div className="w-16 h-16 rounded-full border border-black-alpha-8" />;
    }
  };

  // Utility function available but not used in current render
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const getScoreColor = (score: number) => {
    if (score >= 80) return "text-accent-black";
    if (score >= 60) return "text-accent-black";
    return "text-accent-black";
  };


  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      className="w-full max-w-[1200px] mx-auto"
    >
      {/* Header */}
      <motion.div 
        className="text-center mb-48 pt-24 md:pt-0"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <h2 className="text-title-h2 text-accent-black mb-12">AI Readiness Analysis</h2>
        <p className="text-body-large text-black-alpha-64">Single-page snapshot of {url}</p>
        
        {showResults && (
          <>
            {/* View Mode Toggle - Moved above score */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="mt-24 mb-20 flex justify-center gap-4"
            >
              <button
                onClick={() => setViewMode('grid')}
                className={`px-16 py-8 rounded-8 text-label-medium font-medium transition-all ${
                  viewMode === 'grid' 
                    ? 'bg-accent-black text-white shadow-md' 
                    : 'bg-black-alpha-4 text-black-alpha-64 hover:bg-black-alpha-8'
                }`}
              >
                Grid View
              </button>
              <button
                onClick={() => setViewMode('chart')}
                className={`px-16 py-8 rounded-8 text-label-medium font-medium transition-all ${
                  viewMode === 'chart' 
                    ? 'bg-accent-black text-white shadow-md' 
                    : 'bg-black-alpha-4 text-black-alpha-64 hover:bg-black-alpha-8'
                }`}
              >
                Radar Chart
              </button>
              <button
                onClick={() => setViewMode('bars')}
                className={`px-16 py-8 rounded-8 text-label-medium font-medium transition-all ${
                  viewMode === 'bars' 
                    ? 'bg-accent-black text-white shadow-md' 
                    : 'bg-black-alpha-4 text-black-alpha-64 hover:bg-black-alpha-8'
                }`}
              >
                Bar Chart
              </button>
            </motion.div>
            
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", delay: 0.5 }}
              className="flex justify-center"
            >
              <ScoreChart 
                score={enhancedScore > 0 ? enhancedScore : overallScore}
                enhanced={enhancedScore > 0}
                size={180}
              />
            </motion.div>
          </>
        )}
      </motion.div>

      {/* Conditional rendering based on view mode */}
      {viewMode === 'grid' && (
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 mb-40 px-40 relative">
          {combinedChecks.map((check, index) => {
            const isActive = index === currentCheckIndex;
            
            return (
              <motion.div
                key={check.id}
                initial={(check as any).isAI ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                animate={{ 
                  opacity: 1, 
                  scale: isActive ? 1.05 : 1,
                }}
                transition={{ 
                  delay: (check as any).isAI ? 0 : index * 0.1,
                  scale: { type: "spring", stiffness: 300 }
                }}
                className={`
                  relative p-16 rounded-8 transition-all bg-accent-white border
                  ${(check as any).isAI ? 'border-heat-100 border-opacity-40 bg-gradient-to-br from-accent-white to-heat-4' : 'border-black-alpha-8'}
                  ${isActive ? 'border-heat-100 shadow-lg' : ''}
                  ${check.status !== 'pending' && check.status !== 'checking' ? 'cursor-pointer hover:shadow-md' : ''}
                  ${(check as any).isLoading ? 'animate-pulse' : ''}
                `}
                onClick={() => {
                  if (check.status !== 'pending' && check.status !== 'checking') {
                    setSelectedCheck(selectedCheck === check.id ? null : check.id);
                  }
                }}
                onMouseEnter={() => setHoveredCheck(check.id)}
                onMouseLeave={() => setHoveredCheck(null)}
              >
                <div className="relative">
                  <div className="flex items-start justify-end mb-12">
                    {getStatusIcon(check.status)}
                  </div>
                  
                  <h3 className="text-label-large mb-4 text-accent-black font-medium flex items-center gap-6">
                    {check.label}
                    {check.tooltip && !aiInsights.some(ai => ai.id === check.id) && (
                      <div className="relative inline-block">
                        <Info className="w-14 h-14 text-black-alpha-32 hover:text-black-alpha-64 transition-colors" />
                        <AnimatePresence>
                          {hoveredCheck === check.id && (
                            <motion.div
                              initial={{ opacity: 0, y: 5 }}
                              animate={{ opacity: 1, y: 0 }}
                              exit={{ opacity: 0, y: 5 }}
                              className="absolute bottom-full left-1/2 -translate-x-1/2 mb-8 w-200 p-8 bg-accent-black text-white text-body-x-small rounded-6 shadow-lg z-50 pointer-events-none"
                            >
                              {check.tooltip}
                              <div className="absolute top-full left-1/2 -translate-x-1/2 -mt-1 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-accent-black" />
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    )}
                  </h3>
                  
                  <p className="text-body-small text-black-alpha-64">
                    {check.description}
                  </p>
                  
                  {check.status !== 'pending' && check.status !== 'checking' && (
                    <>
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="mt-8"
                      >
                        <div className="h-2 bg-black-alpha-4 rounded-full overflow-hidden">
                          <motion.div
                            className={`
                              h-full rounded-full
                              ${check.status === 'pass' ? 'bg-accent-black' : ''}
                              ${check.status === 'warning' ? 'bg-heat-100' : ''}
                              ${check.status === 'fail' ? 'bg-heat-200' : ''}
                            `}
                            initial={{ width: 0 }}
                            animate={{ width: `${check.score}%` }}
                            transition={{ duration: 0.5 }}
                          />
                        </div>
                      </motion.div>
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5 }}
                        className="text-label-x-small text-black-alpha-32 mt-4 text-center"
                      >
                        Click for details
                      </motion.div>
                    </>
                  )}
                </div>
                
                {/* Expanded Details */}
                <AnimatePresence>
                  {selectedCheck === check.id && check.details && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.2 }}
                      className="mt-12 pt-12 border-t border-black-alpha-8"
                    >
                      <div className="space-y-6">
                        <div>
                          <div className="text-label-small text-black-alpha-48 mb-2">Status</div>
                          <div className="text-body-small text-accent-black">{check.details}</div>
                        </div>
                        <div>
                          <div className="text-label-small text-black-alpha-48 mb-2">Recommendation</div>
                          <div className="text-body-small text-black-alpha-64">{check.recommendation}</div>
                          {check.actionItems && check.actionItems.length > 0 && (
                            <ul className="mt-4 space-y-2">
                              {check.actionItems.map((item: string, i: number) => (
                                <li key={i} className="flex items-start gap-6 text-body-small text-black-alpha-64">
                                  <span className="text-heat-100 mt-1">•</span>
                                  <span>{item}</span>
                                </li>
                              ))}
                            </ul>
                          )}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      )}

      {/* Radar Chart View */}
      {viewMode === 'chart' && showResults && (
        <div>
          <motion.div 
            className="flex justify-center gap-40 mb-40"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
          >
            {/* Basic Analysis Chart */}
            <div className="flex flex-col items-center">
              <h3 className="text-label-large text-accent-black mb-16 font-medium">Basic Analysis</h3>
              <RadarChart 
                data={checks
                  .filter(check => check.status !== 'pending' && check.status !== 'checking')
                  .slice(0, 8)
                  .map(check => ({
                    label: check.label.length > 12 ? check.label.substring(0, 12) + '...' : check.label,
                    score: check.score || 0
                  }))}
                size={350}
              />
              <div className="mt-16 text-center">
                <div className="text-title-h3 text-accent-black">{overallScore}%</div>
                <div className="text-label-small text-black-alpha-48">Overall Score</div>
              </div>
            </div>
            
            {/* VS Indicator */}
            {aiInsights.length > 0 && (
              <motion.div 
                className="flex items-center"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2, type: "spring" }}
              >
                <div className="text-label-large text-black-alpha-32 font-medium">VS</div>
              </motion.div>
            )}
            
            {/* AI Analysis Chart - Only show if AI insights exist */}
            {aiInsights.length > 0 && (
              <motion.div 
                className="flex flex-col items-center"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
              >
                <h3 className="text-label-large text-heat-100 mb-16 font-medium">AI Enhanced Analysis</h3>
                <RadarChart 
                  data={aiInsights
                    .filter(check => check.status !== 'pending' && check.status !== 'checking')
                    .slice(0, 8)
                    .map(check => ({
                      label: check.label.length > 12 ? check.label.substring(0, 12) + '...' : check.label,
                      score: check.score || 0
                    }))}
                  size={350}
                />
                <div className="mt-16 text-center">
                  <div className="text-title-h3 text-heat-100">
                    {Math.round(aiInsights.reduce((sum, check) => sum + (check.score || 0), 0) / aiInsights.length)}%
                  </div>
                  <div className="text-label-small text-heat-100 opacity-60">AI Score</div>
                </div>
              </motion.div>
            )}
          </motion.div>
          
          {/* Comparison Summary */}
          {aiInsights.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-center mb-20"
            >
              <div className="inline-flex items-center gap-8 px-16 py-8 bg-heat-4 rounded-8">
                <span className="text-label-medium text-accent-black">
                  AI analysis found {aiInsights.filter(i => i.score && i.score < 50).length} additional areas for improvement
                </span>
              </div>
            </motion.div>
          )}
        </div>
      )}

      {/* Bar Chart View */}
      {viewMode === 'bars' && showResults && (
        <motion.div 
          className="px-40 mb-40"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <MetricBars 
            metrics={combinedChecks
              .filter(check => check.status !== 'pending' && check.status !== 'checking')
              .map(check => ({
                label: check.label,
                score: check.score || 0,
                status: check.status as 'pass' | 'warning' | 'fail',
                category: (check as any).isAI ? 'ai' : 
                  ['robots-txt', 'sitemap', 'llms-txt'].includes(check.id) ? 'domain' : 'page',
                details: check.details,
                recommendation: check.recommendation,
                actionItems: check.actionItems
              }))}
          />
        </motion.div>
      )}

      {/* Action Buttons */}
      {showResults && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="flex gap-12 justify-center"
        >
          <button
            onClick={onReset}
            className="px-20 py-10 bg-accent-white border border-black-alpha-8 hover:bg-black-alpha-4 rounded-8 text-label-medium transition-all"
          >
            Analyze Another Site
          </button>
          {true && ( 
            <button 
              onClick={async () => {
              setIsAnalyzingAI(true);
              setShowAIAnalysis(true);
              
              // Add placeholder AI tiles immediately with actual titles
              const placeholderAIChecks = [
                {
                  id: 'ai-loading-0',
                  label: 'Content Quality for AI',
                  description: 'Analyzing content signal ratio...',
                  icon: Sparkles,
                  status: 'checking' as const,
                  score: 0,
                  isAI: true,
                  isLoading: true
                },
                {
                  id: 'ai-loading-1',
                  label: 'Information Architecture',
                  description: 'Evaluating page structure...',
                  icon: Bot,
                  status: 'checking' as const,
                  score: 0,
                  isAI: true,
                  isLoading: true
                },
                {
                  id: 'ai-loading-2',
                  label: 'Crawlability Patterns',
                  description: 'Checking JavaScript usage...',
                  icon: Database,
                  status: 'checking' as const,
                  score: 0,
                  isAI: true,
                  isLoading: true
                },
                {
                  id: 'ai-loading-3',
                  label: 'AI Training Value',
                  description: 'Assessing training potential...',
                  icon: Network,
                  status: 'checking' as const,
                  score: 0,
                  isAI: true,
                  isLoading: true
                },
                {
                  id: 'ai-loading-4',
                  label: 'Knowledge Extraction',
                  description: 'Analyzing entity definitions...',
                  icon: FileCode,
                  status: 'checking' as const,
                  score: 0,
                  isAI: true,
                  isLoading: true
                },
                {
                  id: 'ai-loading-5',
                  label: 'Template Quality',
                  description: 'Reviewing semantic structure...',
                  icon: Shield,
                  status: 'checking' as const,
                  score: 0,
                  isAI: true,
                  isLoading: true
                },
                {
                  id: 'ai-loading-6',
                  label: 'Content Depth',
                  description: 'Measuring content richness...',
                  icon: Zap,
                  status: 'checking' as const,
                  score: 0,
                  isAI: true,
                  isLoading: true
                },
                {
                  id: 'ai-loading-7',
                  label: 'Machine Readability',
                  description: 'Testing extraction reliability...',
                  icon: Globe,
                  status: 'checking' as const,
                  score: 0,
                  isAI: true,
                  isLoading: true
                }
              ];
              
              // Add loading AI tiles with staggered animation immediately
              placeholderAIChecks.forEach((check, idx) => {
                setTimeout(() => {
                  setCombinedChecks(prev => [...prev, check]);
                }, 100 * (idx + 1));
              });
              
              try {
                const response = await fetch('/api/ai-analysis', {
                  method: 'POST',
                  headers: { 'Content-Type': 'application/json' },
                  body: JSON.stringify({
                    url,
                    htmlContent: analysisData?.htmlContent || '',
                    currentChecks: checks
                  })
                });
                
                const data = await response.json();
                if (data.success && data.insights) {
                  // Convert AI insights to CheckItem format with AI flag
                  const aiChecks: CheckItem[] = data.insights.map((insight: any, idx: number) => ({
                    ...insight,
                    icon: [Sparkles, Bot, Database, Network, FileCode, Shield, Zap, Globe][idx % 8],
                    description: insight.details?.substring(0, 60) + '...' || 'AI Analysis',
                    isAI: true, // Mark as AI-generated
                  }));
                  
                  setAiInsights(aiChecks);
                  
                  // Replace loading tiles with real AI tiles
                  setCombinedChecks(prev => {
                    // Remove loading tiles
                    const withoutLoading = prev.filter(c => !(c as any).isLoading);
                    // Add real AI tiles
                    return [...withoutLoading, ...aiChecks];
                  });
                  
                  // Calculate enhanced score
                  if (data.insights.length > 0) {
                    const aiScores = data.insights.map((i: any) => i.score || 0);
                    const avgAiScore = aiScores.reduce((a: number, b: number) => a + b, 0) / aiScores.length;
                    const combinedScore = Math.round((overallScore * 0.6) + (avgAiScore * 0.4));
                    setEnhancedScore(combinedScore);
                  }
                }
              } catch (error) {
                console.error('AI analysis error:', error);
                // Remove loading tiles on error
                setCombinedChecks(prev => prev.filter(c => !(c as any).isLoading));
              } finally {
                setIsAnalyzingAI(false);
              }
            }}
            disabled={isAnalyzingAI}
            className="px-20 py-10 bg-accent-black hover:bg-black-alpha-80 text-white rounded-8 text-label-medium transition-all disabled:opacity-50"
          >
              {isAnalyzingAI ? 'Analyzing...' : 'Analyze with AI'}
            </button>
          )}
        </motion.div>
      )}
    </motion.div>
  );
}


================================================
FILE: components/app/(home)/sections/ai-readiness/InlineResults.tsx
================================================
"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Check, X, FileText, Globe, Code, Sparkles, AlertCircle } from "lucide-react";
// import { Zap, Shield } from "lucide-react"; // Reserved for future features
import { useEffect, useState } from "react";

interface InlineResultsProps {
  isAnalyzing: boolean;
  showResults: boolean;
  analysisStep: number;
  url: string;
  onReset: () => void;
}

const analysisSteps = [
  "Fetching website content...",
  "Checking for LLMs.txt...",
  "Analyzing HTML structure...",
  "Calculating AI readiness...",
];

// Placeholder data for the results
const mockResults = {
  score: 78,
  grade: "B+",
  llmsTxt: true,
  robotsTxt: true,
  structuredData: true,
  semanticHTML: false,
  metaTags: true,
  accessibility: true,
};

export default function InlineResults({
  isAnalyzing,
  showResults,
  analysisStep,
  url: _url, // URL prop available but not used in current implementation
  onReset,
}: InlineResultsProps) {
  const [displayScore, setDisplayScore] = useState(0);
  
  useEffect(() => {
    if (showResults) {
      // Animate score counting up
      const target = mockResults.score;
      const duration = 1500;
      const increment = target / (duration / 16);
      let current = 0;
      
      const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
          setDisplayScore(target);
          clearInterval(timer);
        } else {
          setDisplayScore(Math.floor(current));
        }
      }, 16);
      
      return () => clearInterval(timer);
    }
  }, [showResults]);

  const getScoreColor = (score: number) => {
    if (score >= 80) return "#22c55e";
    if (score >= 60) return "#eab308";
    return "#ef4444";
  };

  return (
    <AnimatePresence mode="wait">
      {/* Analyzing State */}
      {isAnalyzing && (
        <motion.div
          key="analyzing"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="space-y-20"
        >
          {/* Progress Bar */}
          <div className="relative">
            <div className="h-2 bg-black-alpha-4 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-gradient-to-r from-heat-100 to-heat-200"
                initial={{ width: "0%" }}
                animate={{ width: `${((analysisStep + 1) / 4) * 100}%` }}
                transition={{ duration: 0.5, ease: "easeOut" }}
              />
            </div>
            
            {/* Glowing dot at the end of progress */}
            <motion.div
              className="absolute top-1/2 -translate-y-1/2 w-3 h-3 bg-heat-100 rounded-full"
              style={{ 
                left: `${((analysisStep + 1) / 4) * 100}%`,
                boxShadow: "0 0 20px rgba(255, 77, 0, 0.8)",
              }}
              animate={{ 
                scale: [1, 1.5, 1],
                opacity: [1, 0.8, 1],
              }}
              transition={{ 
                duration: 0.8,
                repeat: Infinity,
              }}
            />
          </div>
          
          {/* Status Text */}
          <motion.div 
            key={analysisStep}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-8 text-body-medium text-black-alpha-64"
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
            >
              <Sparkles className="w-16 h-16 text-heat-100" />
            </motion.div>
            {analysisSteps[analysisStep]}
          </motion.div>
          
          {/* ASCII Animation */}
          <motion.div
            className="font-mono text-xs text-black-alpha-16 overflow-hidden h-32 relative"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="absolute inset-0 flex items-center justify-center"
            >
              {'< analyzing />'}
            </motion.div>
          </motion.div>
        </motion.div>
      )}
      
      {/* Results State */}
      {showResults && (
        <motion.div
          key="results"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="space-y-24"
        >
          {/* Score Display */}
          <div className="text-center">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ 
                type: "spring",
                stiffness: 200,
                delay: 0.2 
              }}
              className="relative inline-block"
            >
              {/* Background glow */}
              <motion.div
                className="absolute inset-0 rounded-full blur-xl"
                style={{ background: getScoreColor(mockResults.score) }}
                animate={{ 
                  opacity: [0.3, 0.6, 0.3],
                  scale: [0.8, 1.2, 0.8],
                }}
                transition={{ 
                  duration: 2,
                  repeat: Infinity,
                }}
              />
              
              {/* Score circle */}
              <div 
                className="relative w-120 h-120 rounded-full flex flex-col items-center justify-center"
                style={{ 
                  background: `conic-gradient(from 0deg, ${getScoreColor(mockResults.score)} ${displayScore * 3.6}deg, #f0f0f0 ${displayScore * 3.6}deg)`,
                  padding: "4px",
                }}
              >
                <div className="w-full h-full bg-white rounded-full flex flex-col items-center justify-center">
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="text-4xl font-bold"
                    style={{ color: getScoreColor(mockResults.score) }}
                  >
                    {displayScore}
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7 }}
                    className="text-label-medium text-black-alpha-48"
                  >
                    AI Ready
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
          
          {/* Quick Checks Grid */}
          <motion.div 
            className="grid grid-cols-3 gap-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            {[
              { 
                label: "LLMs.txt", 
                value: mockResults.llmsTxt, 
                icon: FileText,
                description: "AI instructions",
                detail: mockResults.llmsTxt ? "Found" : "Missing"
              },
              { 
                label: "Structured Data", 
                value: mockResults.structuredData, 
                icon: Code,
                description: "Schema markup",
                detail: mockResults.structuredData ? "Detected" : "Not found"
              },
              { 
                label: "Semantic HTML", 
                value: mockResults.semanticHTML, 
                icon: Globe,
                description: "HTML5 tags",
                detail: mockResults.semanticHTML ? "Good" : "Needs work"
              },
            ].map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9 + index * 0.1 }}
                className={`
                  relative p-16 rounded-12 transition-all hover:shadow-md cursor-pointer
                  ${item.value 
                    ? 'bg-gradient-to-br from-green-50 to-green-100/50 border-green-200' 
                    : 'bg-gradient-to-br from-red-50 to-red-100/50 border-red-200'}
                  border
                `}
              >
                {/* Status indicator */}
                <div className="absolute top-12 right-12">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 1 + index * 0.1, type: "spring" }}
                    className={`
                      w-24 h-24 rounded-full flex items-center justify-center
                      ${item.value ? 'bg-green-500' : 'bg-red-500'}
                    `}
                  >
                    {item.value ? (
                      <Check className="w-14 h-14 text-white" strokeWidth={3} />
                    ) : (
                      <X className="w-14 h-14 text-white" strokeWidth={3} />
                    )}
                  </motion.div>
                </div>
                
                {/* Icon */}
                <div className="mb-12">
                  <item.icon className={`
                    w-24 h-24
                    ${item.value ? 'text-green-600' : 'text-red-600'}
                  `} />
                </div>
                
                {/* Content */}
                <div className="space-y-4">
                  <div className="text-label-medium text-accent-black">
                    {item.label}
                  </div>
                  <div className="text-body-small text-black-alpha-48">
                    {item.description}
                  </div>
                  <div className={`
                    text-label-small font-semibold
                    ${item.value ? 'text-green-600' : 'text-red-600'}
                  `}>
                    {item.detail}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
          
          {/* Quick Tip */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2 }}
            className="p-12 bg-heat-4 rounded-8 border border-heat-100 flex items-start gap-8"
          >
            <AlertCircle className="w-16 h-16 text-heat-100 mt-2" />
            <div className="flex-1">
              <div className="text-label-medium text-accent-black mb-4">Quick Tip</div>
              <div className="text-body-small text-black-alpha-64">
                {mockResults.semanticHTML 
                  ? "Your site has good semantic HTML structure for AI understanding."
                  : "Add semantic HTML5 elements to improve AI comprehension of your content."}
              </div>
            </div>
          </motion.div>
          
          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.4 }}
            className="flex gap-8"
          >
            <button
              onClick={onReset}
              className="flex-1 px-16 py-10 bg-black-alpha-4 hover:bg-black-alpha-6 rounded-8 text-label-medium transition-all"
            >
              Try Another
            </button>
            <button className="flex-1 px-16 py-10 bg-heat-100 hover:bg-heat-200 text-white rounded-8 text-label-medium transition-all shadow-lg hover:shadow-xl">
              View Details
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}


================================================
FILE: components/app/(home)/sections/ai-readiness/MetricBars.tsx
================================================
"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

interface MetricBarsProps {
  metrics: {
    label: string;
    score: number;
    status: 'pass' | 'warning' | 'fail';
    category?: 'page' | 'domain' | 'ai';
    details?: string;
    recommendation?: string;
    actionItems?: string[];
  }[];
}

export default function MetricBars({ metrics }: MetricBarsProps) {
  const [expandedItems, setExpandedItems] = useState<Set<string>>(new Set());
  
  const getBarColor = (score: number) => {
    // Use brand orange colors with opacity for gradient effect
    if (score >= 80) return 'bg-heat-100';
    if (score >= 60) return 'bg-heat-90';
    if (score >= 40) return 'bg-heat-40 opacity-80';
    return 'bg-heat-20';
  };
  
  const getBulletColor = (_score: number) => {
    // Always use heat-100 for all bullets for consistency
    return 'bg-heat-100';
  };
  
  const toggleExpanded = (label: string) => {
    const newExpanded = new Set(expandedItems);
    if (newExpanded.has(label)) {
      newExpanded.delete(label);
    } else {
      newExpanded.add(label);
    }
    setExpandedItems(newExpanded);
  };
  
  // Sort metrics by score descending
  const sortedMetrics = [...metrics].sort((a, b) => b.score - a.score);
  
  return (
    <div className="space-y-8 max-w-[800px] mx-auto">
      {sortedMetrics.map((metric, index) => {
        const isExpanded = expandedItems.has(metric.label);
        
        return (
          <motion.div
            key={metric.label}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.05, duration: 0.3 }}
            className="space-y-0"
          >
            <div 
              className={`grid grid-cols-12 gap-4 items-center p-8 -m-8 rounded-8 cursor-pointer transition-all hover:bg-black-alpha-2 ${
                isExpanded ? 'bg-black-alpha-4' : ''
              }`}
              onClick={() => toggleExpanded(metric.label)}
            >
              {/* Bullet and Label - fixed width */}
              <div className="col-span-4 flex items-center gap-8">
                <div className={`w-6 h-6 rounded-full ${getBulletColor(metric.score)}`} />
                <span className="text-label-medium text-accent-black truncate">{metric.label}</span>
                <motion.div
                  animate={{ rotate: isExpanded ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                  className="ml-auto"
                >
                  <ChevronDown className="w-16 h-16 text-black-alpha-32" />
                </motion.div>
              </div>
              
              {/* Bar container - flexible width */}
              <div className="col-span-7 relative">
                <div className="relative h-8 bg-black-alpha-8 rounded-full overflow-hidden">
                  {/* Animated bar */}
                  <motion.div
                    className={`absolute inset-y-0 left-0 ${getBarColor(metric.score)} rounded-full`}
                    initial={{ width: 0 }}
                    animate={{ width: `${Math.max(metric.score, 2)}%` }}
                    transition={{ 
                      delay: 0.2 + index * 0.05, 
                      duration: 0.8,
                      ease: "easeOut"
                    }}
                  >
                    {/* Subtle inner glow */}
                    <div className="absolute inset-0 bg-gradient-to-t from-transparent to-white opacity-10 rounded-full" />
                  </motion.div>
                  
                  {/* Score indicator lines at key thresholds */}
                  {[40, 60, 80].map(threshold => (
                    <div
                      key={threshold}
                      className="absolute top-0 bottom-0 w-px bg-black-alpha-8 opacity-30"
                      style={{ left: `${threshold}%` }}
                    />
                  ))}
                </div>
              </div>
              
              {/* Score value - fixed width */}
              <div className="col-span-1 text-right">
                <span className="text-label-medium font-medium text-heat-100">
                  {metric.score}%
                </span>
              </div>
            </div>
            
            {/* Expanded Details */}
            <AnimatePresence>
              {isExpanded && metric.details && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="pl-54 pr-12 py-12 space-y-8">
                    <div>
                      <div className="text-label-small text-black-alpha-48 mb-4">Status</div>
                      <div className="text-body-small text-accent-black">{metric.details}</div>
                    </div>
                    {metric.recommendation && (
                      <div>
                        <div className="text-label-small text-black-alpha-48 mb-4">Recommendation</div>
                        <div className="text-body-small text-black-alpha-64">{metric.recommendation}</div>
                      </div>
                    )}
                    {metric.actionItems && metric.actionItems.length > 0 && (
                      <div>
                        <div className="text-label-small text-black-alpha-48 mb-4">Action Items</div>
                        <ul className="space-y-4">
                          {metric.actionItems.map((item: string, i: number) => (
                            <li key={i} className="flex items-start gap-6 text-body-small text-black-alpha-64">
                              <span className="text-heat-100 mt-1">•</span>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        );
      })}
      
      {/* Summary stats */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="mt-20 pt-12 border-t border-black-alpha-8"
      >
        <div className="grid grid-cols-3 gap-16 text-center">
          <div>
            <div className="text-title-h3 text-heat-150">
              {metrics.filter(m => m.status === 'pass').length}
            </div>
            <div className="text-label-small text-black-alpha-48">Passing</div>
          </div>
          <div>
            <div className="text-title-h3 text-heat-100">
              {metrics.filter(m => m.status === 'warning').length}
            </div>
            <div className="text-label-small text-black-alpha-48">Warning</div>
          </div>
          <div>
            <div className="text-title-h3 text-heat-50">
              {metrics.filter(m => m.status === 'fail').length}
            </div>
            <div className="text-label-small text-black-alpha-48">Failing</div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}


================================================
FILE: components/app/(home)/sections/ai-readiness/RadarChart.tsx
================================================
"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface RadarChartProps {
  data: {
    label: string;
    score: number;
    maxScore?: number;
  }[];
  size?: number;
}

export default function RadarChart({ data, size = 300 }: RadarChartProps) {
  const [isAnimated, setIsAnimated] = useState(false);
  const center = size / 2;
  const radius = (size / 2) - 60; // Increased padding for labels
  const angleStep = (Math.PI * 2) / data.length;
  
  useEffect(() => {
    setIsAnimated(true);
  }, []);
  
  // Calculate points for the polygon
  const getPoint = (value: number, index: number) => {
    const angle = index * angleStep - Math.PI / 2;
    const r = (value / 100) * radius;
    return {
      x: center + r * Math.cos(angle),
      y: center + r * Math.sin(angle)
    };
  };
  
  // Create polygon points string
  const polygonPoints = data
    .map((item, i) => {
      const point = getPoint(isAnimated ? item.score : 0, i);
      return `${point.x},${point.y}`;
    })
    .join(' ');
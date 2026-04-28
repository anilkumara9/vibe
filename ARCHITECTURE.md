# Vibe - Project Architecture

## Overview
Vibe is a modern web application built with Next.js, featuring a full-stack architecture with a focus on developer experience and real-time interactions. The application appears to be a code collaboration or IDE-like platform with project management capabilities.

## System Architecture: How It Works

### 1. Initial Load & Authentication
1. **Client Initialization**
   - Browser loads the Next.js application
   - Clerk authentication provider initializes
   - Theme preferences are loaded from localStorage (dark/light mode)

2. **Authentication Flow**
   - Unauthenticated users are redirected to login/signup
   - Clerk handles authentication via email/password or OAuth providers
   - Session token is stored in HTTP-only cookies
   - User session is validated on each request

### 2. Application Structure
```
┌─────────────────┐     ┌─────────────────────┐     ┌─────────────────┐
│                 │     │                     │     │                 │
│   Next.js App   │────▶│     tRPC API       │────▶│    Database     │
│   (Client)      │     │     (Server)       │     │   (PostgreSQL)  │
└────────┬────────┘     └─────────┬─────────┘     └─────────────────┘
         │                        │
         │                        │
         ▼                        ▼
┌─────────────────┐     ┌─────────────────────┐
│  Clerk Auth     │     │  Inngest Workers    │
│  (SSO)          │     │  (Background Jobs)  │
└─────────────────┘     └─────────────────────┘
```

### 3. Core Workflows

#### A. Project Creation
1. User clicks "New Project"
2. Frontend sends request to tRPC endpoint
3. Server creates new project in database
4. Project metadata is returned to client
5. UI updates to show new project in sidebar

#### B. Code Execution Flow
1. User writes code in the editor
2. On execution:
   - Code is sent to tRPC endpoint
   - Server validates user permissions
   - Request is queued with Inngest
   - Worker picks up the job
   - Code is executed in E2B sandbox
   - Results are saved to database
   - Real-time updates pushed to client via WebSockets

#### C. File Operations
1. User creates/updates a file
2. Changes are saved to database via tRPC
3. Other collaborators receive updates in real-time
4. File system changes are persisted

### 4. Data Flow
```
┌───────────┐    ┌───────────┐    ┌───────────┐
│           │    │           │    │           │
│  Client   │───▶│   API     │───▶│  Database │
│  (React)  │◀───│  (tRPC)   │◀───│ (Prisma)  │
│           │    │           │    │           │
└───────────┘    └───────────┘    └───────────┘
     ▲                  ▲
     │                  │
     │                  │
     ▼                  ▼
┌───────────┐    ┌───────────┐
│           │    │           │
│  Clerk    │    │  Inngest  │
│  (Auth)   │    │  (Jobs)   │
│           │    │           │
└───────────┘    └───────────┘
```

### 5. Real-time Updates
1. WebSocket connection established on app load
2. Server broadcasts changes to relevant clients
3. Client updates local state using React Query
4. UI re-renders with latest data

### 6. Security Layers
1. **Authentication**: Clerk JWT validation
2. **Authorization**: Row-level security in database
3. **Input Validation**: Zod schema validation
4. **Rate Limiting**: API request throttling
5. **CORS**: Strict origin policies

### 7. Performance Optimization
1. Code splitting with dynamic imports
2. Server-side rendering for initial load
3. Client-side navigation with Next.js
4. React Query for data caching
5. Optimistic UI updates

## Tech Stack

### Core Technologies
- **Frontend Framework**: Next.js 15.3.5 (App Router)
- **UI Library**: React 19
- **Programming Language**: TypeScript
- **Styling**: Tailwind CSS with custom theming
- **State Management**: React Query (TanStack Query)
- **Form Handling**: React Hook Form
- **UI Components**: Radix UI Primitives with custom shadcn/ui components
- **Authentication**: Clerk
- **Database**: PostgreSQL with Prisma ORM
- **API Layer**: tRPC
- **Background Jobs**: Inngest
- **Code Execution**: E2B Code Interpreter

### Key Dependencies
- `@clerk/nextjs`: Authentication and user management
- `@tanstack/react-query`: Data fetching and state management
- `@radix-ui/*`: Accessible UI primitives
- `@e2b/code-interpreter`: Sandboxed code execution
- `inngest`: Background job processing
- `prisma`: Database ORM
- `zod`: Schema validation
- `date-fns`: Date manipulation
- `lucide-react`: Icons

## Project Structure

```
src/
├── app/                    # App router pages and layouts
│   ├── (home)/            # Home route group
│   ├── api/               # API routes
│   └── projects/          # Projects related routes
├── components/            # Reusable UI components
│   ├── ui/                # shadcn/ui components
│   └── ...
├── generated/             # Auto-generated code (Prisma)
├── hooks/                 # Custom React hooks
├── inngest/               # Background job handlers
├── lib/                   # Shared utilities and configurations
├── modules/               # Feature modules
└── trpc/                  # tRPC router and client setup
```

## Data Model

The application uses PostgreSQL with the following main entities:

### Project
- Represents a user's project
- Contains multiple messages
- Tracks creation and update timestamps

### Message
- Represents a message in a conversation
- Can be from USER or ASSISTANT
- Has a type (RESULT or ERROR)
- Belongs to a Project

### Fragment
- Represents a code fragment or snippet
- Linked to a specific message
- Stores sandbox URL and file contents

### Usage
- Tracks usage metrics/quotas
- Uses a key-value structure with expiration

## Authentication & Authorization

- **Provider**: Clerk
- **Features**:
  - Email/password authentication
  - Social logins (configurable)
  - User management
  - Session management

## API Architecture

The application uses a hybrid approach:

1. **tRPC API**
   - Type-safe API layer
   - Server-side procedures
   - Automatic type inference between client and server

2. **Next.js API Routes**
   - For specific API endpoints
   - Used alongside tRPC where needed

## State Management

- **Server State**: React Query for data fetching and caching
- **Local State**: React hooks and Context API
- **Form State**: React Hook Form with Zod validation

## Styling

- **CSS Framework**: Tailwind CSS
- **Component Library**: Custom components built on Radix UI
- **Theming**: Next Themes for dark/light mode
- **Animations**: Framer Motion and CSS transitions

## Real-time Features

- **Background Jobs**: Inngest for processing long-running tasks
- **Code Execution**: E2B Code Interpreter for sandboxed code execution

## Development Workflow

1. **Local Development**
   - `npm run dev`: Start development server
   - `npx prisma studio`: Database management UI
   - `npx prisma generate`: Generate Prisma client

2. **Code Quality**
   - TypeScript for type safety
   - ESLint for code linting
   - Prettier for code formatting

3. **Environment Variables**
   - `DATABASE_URL`: PostgreSQL connection string
   - `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY`: Clerk public key
   - `CLERK_SECRET_KEY`: Clerk secret key

## Deployment

The application is configured for deployment on Vercel with:
- Automatic static optimization
- API routes for serverless functions
- Environment variable management

## Security Considerations

- Authentication via Clerk
- Database access through Prisma ORM
- Input validation with Zod
- Rate limiting for API endpoints
- Environment variable management

## Performance Optimizations

- Code splitting with Next.js
- Image optimization
- Server-side rendering and static generation
- React Query for efficient data fetching and caching

## Future Improvements

1. **Testing**
   - Add unit tests with Jest/React Testing Library
   - Add integration tests
   - Add E2E tests with Cypress or Playwright

2. **Monitoring**
   - Add error tracking (Sentry, LogRocket)
   - Add performance monitoring
   - Add analytics

3. **Scalability**
   - Implement database sharding if needed
   - Add caching layer (Redis)
   - Optimize database queries

4. **Features**
   - Real-time collaboration
   - More authentication providers
   - Enhanced code editor features
   - Project templates
   - Team collaboration features

export type ProjectStatus = "Active build" | "Concept" | "Prototype" | "Shipped";

export interface Project {
  slug: string;
  title: string;
  oneLiner: string;
  summary: string;
  type: string;
  status: ProjectStatus;
  role: string;
  tags: string[];
  flagship?: boolean;
  problem: string;
  solution: string;
  myRole: string;
  stack: string[];
  hardParts: string[];
  learnings: string;
  links?: { label: string; href: string }[];
}

export const projects: Project[] = [
  {
    slug: "orbit",
    title: "Orbit",
    oneLiner: "A personal AI OS for technical founders and power users.",
    summary:
      "Orbit is a closed-loop operating system, not an autonomous 'do everything' agent. One persistent generalist agent that understands, plans, acts, verifies, logs, remembers, and briefs — built on a three-tier memory system, BYOK security, hard budgets, a real tool layer, and proactive scheduling under calm human control.",
    type: "AI OS / Productivity SaaS",
    status: "Active build",
    role: "Product strategy, system architecture, security model, memory design, AI workflow design",
    tags: ["AI agents", "memory", "BYOK", "scheduling", "dashboard UX"],
    flagship: true,
    problem:
      "Founders and power users work across too many tools and lose context, decisions, and follow-ups. The cost is invisible until a week disappears — and most 'autonomous' AI either does too little to matter or too much to trust.",
    solution:
      "A personal AI OS built as a closed loop: understand, plan, act, verify, log, remember, brief. Layer 1 ships one generalist agent with a complete three-tier memory system, LiteLLM-gated inference, hard budget caps, a real tool layer (MCP, Composio, browser, code execution), and Inngest-driven scheduling so Orbit can reach out before you ask — all with clear human control.",
    myRole:
      "Product concept, system architecture, security model, memory design, agent-workflow design, and strict package-boundary direction across web, API, worker, and the agent layer.",
    stack: [
      "Bun + TypeScript + Turborepo / pnpm",
      "Next.js 16 App Router",
      "Hono (API boundary)",
      "Inngest (durable execution)",
      "Mastra + Vercel AI SDK v6",
      "LiteLLM gateway (BYOK + routing)",
      "Drizzle + Supabase (Postgres, RLS)",
      "Turso / LibSQL + FTS5",
      "Redis / ioredis",
      "pgvector semantic memory",
      "Better Auth",
      "AES-256-GCM BYOK vault + HKDF tenant keys",
      "MCP + Composio + Firecrawl + Playwright / Stagehand + E2B",
      "Tailwind v4 + shadcn/ui + Zod",
      "Tauri desktop (after web)",
    ],
    hardParts: [
      "Memory quality — retrieving the right memory at the right time without noise or stale context",
      "Boringly strict boundaries between web, API, worker, and the agent layer",
      "BYOK as a security system: encrypt, release only to LiteLLM, never leak plaintext",
      "Durable agent execution that matches streaming chat on memory, cost, and audit",
      "Hard cost control — Redis budget caps, token counting, and a real cost ledger",
      "Tool safety for real-world side effects, conservative by design in Layer 1",
      "Scope control — proving the core loop before building IACT, voice, and specialists",
      "Making it feel calm — status, cost, next run, and outcomes the user can trust",
    ],
    learnings:
      "Orbit shouldn't be 'an autonomous AI that can do everything.' It should be a closed-loop operating system: understand, plan, act, verify, log, remember, brief. Get that loop right, with memory and trust, and the rest is scope discipline.",
  },
  {
    slug: "trimly",
    title: "Trimly",
    oneLiner: "A haircut-decision and barber-communication app.",
    summary:
      "Helps users choose realistic styles, understand recommendations, and generate a barber-ready instruction card.",
    type: "Mobile app",
    status: "Prototype",
    role: "Product strategy, UX flow, AI recommendation direction, feature planning",
    tags: ["Expo", "React Native", "AI vision", "consumer"],
    problem:
      "Haircut decisions are stressful because users don't know what fits them or how to explain it to a barber.",
    solution:
      "Guided intake, realistic recommendations, plain-language explanation of fit, and a barber-ready instruction card.",
    myRole:
      "Product strategy, UX flow, AI recommendation direction, and feature planning end-to-end.",
    stack: [
      "Expo / React Native",
      "TypeScript",
      "Clerk (auth)",
      "Convex (backend + data)",
      "Image upload + processing",
      "Recommendation logic",
      "Subscription flow",
    ],
    hardParts: [
      "Realistic recommendations users actually trust",
      "Building trust from a single photo",
      "Plain-language barber output that survives a noisy shop",
      "Keeping the flow short enough to finish",
    ],
    learnings:
      "Confidence and practical output matter more than 'AI magic' — users want a decision and something to show their barber.",
  },
  {
    slug: "hermes-agent-workflows",
    title: "Hermes Agent Workflows",
    oneLiner: "Reusable AI-agent workflows for real business processes.",
    summary:
      "Workflows for research, operations, admin tasks, marketplace automation, and multi-step business processes.",
    type: "AI agents / automation",
    status: "Active build",
    role: "Workflow design, operator prompts, skill-file structure, automation planning",
    tags: ["AI agents", "automation", "prompts", "ops"],
    problem:
      "Business tasks are repetitive but still require multi-step judgment, structure, and oversight.",
    solution:
      "Reusable AI-agent workflows with clear inputs, phases, checks, outputs, and approval points.",
    myRole:
      "Workflow design, operator prompts, skill-file structure, and automation planning.",
    stack: [
      "AI agents + tool use",
      "Structured outputs",
      "Prompt systems",
      "File-based workflows",
      "Verification sweeps",
    ],
    hardParts: [
      "Edge cases that break naive automations",
      "Reliability across long runs",
      "Reusability without losing specificity",
      "Verification and human oversight points",
    ],
    learnings:
      "Structured process often matters as much as raw model capability. Most failures are process failures.",
  },
  {
    slug: "paywall-lab",
    title: "Paywall Lab",
    oneLiner: "The AI strategy + execution layer above RevenueCat, Superwall, and Adapty.",
    summary:
      "Not another paywall SDK — an AI system that audits, generates, and runs paywall and pricing experiments, then attributes MRR. The loop: audit, generate, launch experiment, monitor, attribute MRR, recommend the next experiment. It outputs usable artifacts — Figma frames, RevenueCat configs, copy, experiment briefs — not generic advice.",
    type: "SaaS / growth tooling",
    status: "Concept",
    role: "Product strategy, agent architecture, audit engine design, connector security, experiment modeling",
    tags: ["AI agents", "growth", "monetization", "experimentation", "RevenueCat"],
    problem:
      "Teams guess at paywalls, pricing, and onboarding instead of running structured experiments tied to real revenue — and existing paywall SDKs handle delivery, not strategy or execution.",
    solution:
      "An AI strategy + execution layer above RevenueCat/Superwall/Adapty. It audits paywalls with scoring and evidence, generates real artifacts, launches and monitors experiments, attributes MRR, and recommends the next test — with human-in-the-loop approval for any write.",
    myRole:
      "Product planning, agent execution loop, audit engine, A2UI generative components, connector security, and experiment statistics.",
    stack: [
      "Next.js 15 + TypeScript",
      "Tailwind CSS v4",
      "Supabase (Postgres, pgvector, Auth, Realtime, Vault)",
      "Claude Sonnet 4.6",
      "Vercel AI SDK 6",
      "Anthropic Client SDK (background agent loops)",
      "CopilotKit + AG-UI + A2UI",
      "assistant-ui",
      "Inngest",
      "Composio",
      "MCP server on Vercel Edge",
      "Stripe (subscriptions + credit top-ups)",
      "Resend + React Email",
      "Langfuse",
      "Vercel deployment",
    ],
    hardParts: [
      "Building an agent execution loop that takes actions, not just chats",
      "Making A2UI generative UI feel native (AuditScoreCard, VariantCarousel, ExperimentResultCard, ConfirmationDialog)",
      "A real audit engine with scoring, benchmarks, and evidence — not generic AI advice",
      "Handling 10 connectors safely: RevenueCat, Stripe, PostHog, Mixpanel, Figma, GitHub, Slack, Linear, Amplitude, App Store Connect",
      "Enforcing human-in-the-loop writes for RevenueCat, Figma, GitHub, Slack, and Linear",
      "Experiment management: sample sizes, significance, winner detection, attribution",
      "Security: OAuth tokens, Supabase Vault, RLS, prompt injection, no plaintext secrets",
      "Keeping scope tight for a 10-week solo MVP",
    ],
    learnings:
      "The moat isn't another paywall SDK — it's the AI strategy + execution layer that outputs usable artifacts and gets better over sessions by remembering audits, experiments, metrics, and attribution. If it doesn't lift conversion or attributed MRR, it isn't P0.",
  },
];

export const homepageProjects = projects;

export const site = {
  name: "Huzaifa Shahid",
  handle: "ergatikós",
  tagline: "AI product builder",
  email: "huzaifa.shd@gmail.com",
  github: "https://github.com/Huzaifa-Shahid-6ll",
  githubHandle: "Huzaifa-Shahid-6ll",
  linkedin: "https://www.linkedin.com/in/huzaifa-shahid-596bb2361/",
  twitter: "https://x.com/Huzaifa_shd",
  twitterHandle: "Huzaifa_shd",
  resume: "/resume",
};

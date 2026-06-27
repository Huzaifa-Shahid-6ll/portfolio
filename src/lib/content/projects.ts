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
  proof: string;
  learnings: string;
  links?: { label: string; href: string }[];
}

export const projects: Project[] = [
  {
    slug: "orbit",
    title: "Orbit",
    oneLiner: "A personal AI OS for technical founders and power users.",
    summary:
      "Orbit combines memory, tools, tasks, decisions, schedules, and agent workflows into a trusted operating layer for daily work.",
    type: "AI OS / Productivity SaaS",
    status: "Active build",
    role: "Product strategy, system architecture, UX planning, AI workflow design",
    tags: ["AI agents", "memory", "workflows", "founder tools", "dashboard UX"],
    flagship: true,
    problem:
      "Founders and power users work across too many tools and lose context, decisions, and follow-ups. The cost is invisible until a week disappears.",
    solution:
      "A personal AI OS that remembers context, connects workflows, surfaces priorities, and supports action with clear human control.",
    myRole:
      "Product concept, system design, UX planning, agent workflow design, and architecture direction across the stack.",
    stack: [
      "SvelteKit / TypeScript",
      "Tailwind",
      "FastAPI",
      "Structured data + memory store",
      "AI APIs",
      "Workflow / agent layer",
      "Auth",
    ],
    hardParts: [
      "Memory quality across long timelines",
      "Approval flows and boundaries for agent actions",
      "A calm UI that doesn't add noise",
      "Trust and auditability for every action",
      "Finding the smallest useful loop to ship",
    ],
    proof:
      "Architecture notes, working screens, and agent workflow specs. Live demo in progress. Reach out for a walkthrough.",
    learnings:
      "AI products become genuinely useful when they're grounded in real workflows with clear human control — not when they try to do more.",
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
      "Image upload + processing",
      "Recommendation logic",
      "Auth",
      "Subscription flow",
    ],
    hardParts: [
      "Realistic recommendations users actually trust",
      "Building trust from a single photo",
      "Plain-language barber output that survives a noisy shop",
      "Keeping the flow short enough to finish",
    ],
    proof:
      "Flow maps, mockups, and prototype screens. Build screenshots available on request.",
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
    proof: "Workflow examples, prompt architecture, and output documentation available on request.",
    learnings:
      "Structured process often matters as much as raw model capability. Most failures are process failures.",
  },
  {
    slug: "paywall-lab",
    title: "Paywall Lab",
    oneLiner: "A product experimentation system for paywalls and pricing.",
    summary:
      "Test onboarding, paywalls, pricing, conversion paths, and monetization strategy with structured experiments.",
    type: "SaaS / growth tooling",
    status: "Concept",
    role: "Product planning, experiment architecture, data model, UX structure",
    tags: ["SaaS", "analytics", "growth", "experimentation"],
    problem:
      "Teams guess at paywalls, pricing, and onboarding instead of running structured experiments tied to real outcomes.",
    solution:
      "An experimentation system for offers, onboarding, pricing, and conversion analysis with a clear data model.",
    myRole:
      "Product planning, experiment architecture, data model thinking, and UX structure.",
    stack: [
      "SaaS architecture",
      "Event modeling + analytics",
      "Dashboards",
      "Experiment variants",
      "Connectors",
    ],
    hardParts: [
      "Modeling experiments clearly across variants",
      "Tying events to outcomes without noise",
      "Making growth work usable for non-analysts",
    ],
    proof:
      "Mock dashboards, PRD excerpts, and analytics architecture notes. Prototype in progress.",
    learnings: "Conversion is a workflow, not one screen.",
  },
  {
    slug: "typeflow",
    title: "TypeFlow",
    oneLiner: "A universal AI writing layer for Windows and macOS.",
    summary:
      "A concept for an AI writing layer that improves writing directly inside any app, with no context switching.",
    type: "Desktop product concept",
    status: "Concept",
    role: "Product concept, UX thinking, feature planning",
    tags: ["desktop", "AI writing", "concept"],
    problem:
      "AI writing tools interrupt flow by forcing users to switch apps for every assist.",
    solution:
      "A universal writing layer for Windows and macOS that works inside any text field.",
    myRole: "Product concept, UX thinking, and feature planning.",
    stack: [
      "Desktop product concept",
      "AI text processing",
      "Low-latency assistance",
      "Privacy-aware design",
    ],
    hardParts: [
      "Cross-app behavior without breaking other tools",
      "Preserving user intent",
      "Avoiding annoyance and over-suggestion",
      "Privacy by default",
    ],
    proof: "Concept screens, flow notes, and spec available on request.",
    learnings: "AI is strongest when it removes context switching.",
  },
];

export const homepageProjects = projects.filter((p) => p.slug !== "typeflow");

export const site = {
  name: "Huzaifa Shahid",
  handle: "ergatikós",
  tagline: "AI product builder",
  email: "hello@huzaifashahid.com",
  github: "https://github.com/huzaifashahid",
  linkedin: "https://www.linkedin.com/in/huzaifashahid",
  twitter: "https://x.com/huzaifashahid",
  resume: "/resume",
};

export type ProjectStatus = "Active build" | "Concept" | "Prototype";
export type ProjectCategory = "AI & tools" | "Mobile" | "Experiments";

export interface Project {
  slug: string;
  title: string;
  oneLiner: string;
  summary: string;
  type: string;
  category: ProjectCategory;
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

// Editorial evidence and exclusions: docs/project-inventory.md.
// Development status describes repository evidence, not production acceptance.
export const projects: Project[] = [
  {
    slug: "orbit",
    title: "Orbit",
    oneLiner: "A personal workspace for AI that remembers.",
    summary:
      "An agent workspace built around persistent context and visible control. I'm working on the memory and tool boundaries that make longer-running tasks easier to inspect.",
    type: "Personal AI workspace",
    category: "AI & tools",
    status: "Active build",
    role: "Architecture & development",
    tags: ["AI agents", "Memory", "Product design"],
    flagship: true,
    problem:
      "A chat can help with a task, but starting over loses the decisions that came before it. Giving an agent more tools also creates a harder question: what should it be allowed to do?",
    solution:
      "Orbit brings memory retrieval and tool permissions into a personal workspace. The current private-beta foundations include encrypted model-key handling and an agent execution layer. Scheduling and the desktop shell are still developing; hard budget enforcement and the audit-chain writer remain unfinished.",
    myRole:
      "Product direction and implementation across the workspace architecture, memory layer, and agent boundaries.",
    stack: [
      "TypeScript · pnpm · Turborepo",
      "Next.js · Hono",
      "Mastra · Inngest",
      "Supabase · Turso · Redis",
      "LiteLLM · Tauri",
    ],
    hardParts: [
      "Retrieving useful context without carrying stale decisions into a new task.",
      "Keeping model keys and tool permissions behind explicit boundaries.",
      "Bringing separately implemented services into a dependable end-to-end workflow.",
    ],
    learnings:
      "An agent's next action should be understandable before it happens. The control surface matters as much as the model behind it.",
  },
  {
    slug: "skilltube",
    title: "SkillTube",
    oneLiner: "From a tutorial to a skill your agent can use.",
    summary:
      "Turn a YouTube tutorial or transcript into editable agent instructions. Review the source and export a portable SKILL.md bundle.",
    type: "Developer tool",
    category: "AI & tools",
    status: "Active build",
    role: "Product & development",
    tags: ["Next.js", "AI workflows", "Developer tools"],
    problem:
      "A useful technique in a video stays in that video until someone extracts its steps. Agents need instructions they can read and files a developer can inspect.",
    solution:
      "SkillTube checks the source, generates a draft through a staged worker, and lets the user edit the skill and its references before ZIP export. Optional frame analysis adds visual context. Private-beta release checks are ongoing; exporting a file does not guarantee useful execution by an agent.",
    myRole: "Building the source-to-skill workflow, generation worker, and review interface.",
    stack: [
      "Next.js · React · TypeScript",
      "Clerk · Drizzle · Postgres",
      "pg-boss · OpenRouter",
      "yt-dlp · FFmpeg · Docker",
      "Lemon Squeezy",
    ],
    hardParts: [
      "Handling missing captions and source failures before generation begins.",
      "Recovering a staged generation job without losing the user's work.",
      "Making generated instructions easy to review and edit before export.",
    ],
    learnings:
      "The useful handoff is an inspectable file. Generation needs a review step, and runtime acceptance needs its own test.",
  },
  {
    slug: "errby",
    title: "Errby",
    oneLiner: "A learning partner you teach.",
    summary:
      "Explain an idea to a curious AI character. Work through its questions and return to the notes behind your practice.",
    type: "Learning prototype",
    category: "AI & tools",
    status: "Prototype",
    role: "Product & development",
    tags: ["Next.js", "Learning", "Conversational AI"],
    problem:
      "Reading an explanation can feel like understanding it. Trying to explain the idea yourself reveals the gaps, but studying alone gives you little feedback.",
    solution:
      "Errby asks the learner to teach a character through conversation. Notes and documents provide source material, while saved practice and source excerpts let the learner revisit an explanation. Interactive graphs support visual concepts. The project is a development prototype; classroom pilots and production acceptance remain open.",
    myRole:
      "Developing the learning conversation, private document workflow, and supporting interface.",
    stack: [
      "Next.js · React · TypeScript",
      "Clerk · Supabase",
      "OpenRouter · Zod",
      "PDF.js · Mammoth",
    ],
    hardParts: [
      "Keeping the character curious without giving the learner an answer too early.",
      "Connecting a practice conversation to exact excerpts from its source.",
      "Handling interrupted replies and document extraction failures.",
    ],
    learnings:
      "A good question can expose more than another paragraph of explanation. The learner needs room to try again.",
    links: [{ label: "View repository", href: "https://github.com/Huzaifa-Shahid-6ll/Errby" }],
  },
  {
    slug: "taypr",
    title: "TAYPR",
    oneLiner: "Choose a cut you can explain.",
    summary:
      "Compare haircut options with practical guidance, then take a clear Barber Card to your appointment.",
    type: "Mobile app",
    category: "Mobile",
    status: "Active build",
    role: "Product & development",
    tags: ["Expo", "React Native", "Consumer app"],
    problem:
      "A reference photo doesn't tell you whether a cut fits your hair or how to ask for it. The last step often happens in a rushed conversation at the barber's chair.",
    solution:
      "A guided photo flow collects context before recommendations. Users can compare options, read maintenance guidance, and save a Barber Card. Previews are illustrative. This is private Android-first development, with physical-device release testing and the full paid visual pipeline still pending.",
    myRole: "Building the mobile decision flow, comparison interface, and barber handoff.",
    stack: [
      "Expo · React Native · TypeScript",
      "Convex · Clerk",
      "RevenueCat",
      "Cloudflare R2 · PostHog",
    ],
    hardParts: [
      "Explaining uncertainty instead of promising a result from a photograph.",
      "Keeping a multi-photo intake understandable on a small screen.",
      "Turning a recommendation into instructions a barber can use.",
    ],
    learnings:
      "The final card has to work outside the app. Clear instructions matter more than an impressive preview.",
  },
  {
    slug: "listing-desk",
    title: "Listing Desk",
    oneLiner: "Product data in. Reviewed listings out.",
    summary:
      "A workspace for preparing Dutch marketplace listings, with separate Netherlands and Belgium review flows.",
    type: "Operations workspace",
    category: "AI & tools",
    status: "Active build",
    role: "Workflow & development",
    tags: ["Next.js", "Operations", "Workflow design"],
    problem:
      "Product-family data is scattered across source files and media folders. Marketplace requirements add another layer. Small identity mistakes can carry through to every variant in a listing.",
    solution:
      "Listing Desk keeps product-family review alongside draft editing and publication previews. Import mapping and conflict review help establish the right source data before generation. Live extraction, production storage, and marketplace publication remain behind release checks.",
    myRole: "Developing the product-family workspace, from import review to listing preparation.",
    stack: [
      "Next.js · React · TypeScript",
      "Node.js workers · PostgreSQL",
      "Shared domain packages",
      "FFmpeg · FFprobe",
    ],
    hardParts: [
      "Resolving conflicting source data before it reaches a generated draft.",
      "Keeping regional overrides independent without duplicating the entire workflow.",
      "Making publication previews and dry runs useful before allowing live writes.",
    ],
    learnings:
      "Automation needs a good place to stop. Review works best when the evidence is beside the decision.",
  },
  {
    slug: "boundary",
    title: "Boundary",
    oneLiner: "Testing the limits around an agent's tools.",
    summary:
      "A local experiment in reviewing agent actions when repository text contains forged instructions.",
    type: "Agent safety experiment",
    category: "Experiments",
    status: "Prototype",
    role: "Backend & experiment design",
    tags: ["TypeScript", "AI tools", "Permissions"],
    problem:
      "An agent can read instructions inside a repository that conflict with the actual task. A prompt alone is a weak boundary around a tool that changes files.",
    solution:
      "Boundary runs controlled tests against a synthetic repository. Tool calls pass through a fixed policy, and proposed patches are bound to an exact review decision. The backend stages exist; the workspace interface is planned. The experiment has no real host filesystem or shell access.",
    myRole: "Designing the controlled fixtures and implementing the guarded tool path.",
    stack: [
      "Next.js · TypeScript",
      "AI SDK · OpenRouter",
      "Zod · Node test runner",
      "Server-sent events",
    ],
    hardParts: [
      "Binding approval to the exact patch being reviewed.",
      "Handling cancellation and repeat requests without replaying a change.",
      "Distinguishing task policy from untrusted repository text.",
    ],
    learnings:
      "Permissions have to survive the next tool call. An approval should name exactly what it allows.",
  },
  {
    slug: "trimly",
    title: "Trimly",
    oneLiner: "Making a haircut decision less of a guess.",
    summary: "A mobile prototype exploring haircut comparisons and shareable barber instructions.",
    type: "Mobile exploration",
    category: "Experiments",
    status: "Prototype",
    role: "Product & prototyping",
    tags: ["Expo", "React Native", "Product exploration"],
    problem:
      "Choosing a haircut and describing it are different tasks. A recommendation is only useful if someone can act on it.",
    solution:
      "Trimly explores a photo-to-comparison flow with plain-language guidance and shareable barber cards. Reminders and post-cut feedback extend the idea beyond one appointment. Store purchase testing and device checks are still open, along with privacy release work.",
    myRole: "Prototyping the decision flow and the handoff from app to appointment.",
    stack: [
      "Expo · React Native · TypeScript",
      "NativeWind · Convex · Clerk",
      "RevenueCat · PostHog",
    ],
    hardParts: [
      "Keeping practical instructions distinct from visual inspiration.",
      "Designing a comparison that helps someone choose rather than adding more options.",
      "Checking the full subscription lifecycle on a real device.",
    ],
    learnings:
      "The value is in a decision someone can explain, not the number of options on the screen.",
  },
  {
    slug: "paywall-lab",
    title: "PaywallLab",
    oneLiner: "A workspace for subscription experiments.",
    summary:
      "An early scaffold for reviewing monetization evidence and planning the next pricing test.",
    type: "SaaS experiment",
    category: "Experiments",
    status: "Concept",
    role: "Architecture & prototyping",
    tags: ["Next.js", "Hono", "Experiment design"],
    problem:
      "A paywall can be easy to change and difficult to evaluate. Teams need the evidence behind a decision, not another confident recommendation.",
    solution:
      "The current scaffold covers a landing page and session foundations, with request logging and idempotency in the API. The intended experiment workflow is still under development. Live integrations and statistical evaluation are not complete.",
    myRole: "Exploring the product workflow and implementing the initial web/API boundaries.",
    stack: ["Next.js · Hono · TypeScript", "pnpm · Turborepo", "Supabase · Kysely", "Trigger.dev"],
    hardParts: [
      "Keeping planned workflows distinct from implemented foundations.",
      "Making repeated requests safe at the API boundary.",
      "Defining what evidence an experiment needs before recommending a change.",
    ],
    learnings:
      "A prototype can test the shape of a workflow. It cannot stand in for measured revenue results.",
  },
];

export const homepageProjects = projects.filter((project) =>
  ["skilltube", "errby", "taypr", "listing-desk"].includes(project.slug),
);

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

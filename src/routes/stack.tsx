import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteNav, SiteFooter } from "@/lib/components/SiteChrome";

export const Route = createFileRoute("/stack")({
  head: () => ({
    meta: [
      { title: "Stack — Huzaifa Shahid" },
      { name: "description", content: "The tools behind my web apps and AI workflows." },
      { property: "og:title", content: "Stack — Huzaifa Shahid" },
      { property: "og:description", content: "The tools behind the work." },
      { property: "og:url", content: "/stack" },
    ],
    links: [{ rel: "canonical", href: "/stack" }],
  }),
  component: StackPage,
});

const groups = [
  {
    title: "Web interfaces",
    context: "Product screens and the interactions between them.",
    items: ["TypeScript", "React", "Next.js", "Tailwind CSS"],
  },
  {
    title: "Mobile",
    context: "Camera flows and practical output in TAYPR.",
    items: ["Expo", "React Native", "Clerk", "Convex"],
  },
  {
    title: "Data & backend",
    context: "Private workspaces and jobs that take time to finish.",
    items: ["Node.js / Bun", "Hono", "Postgres / Supabase", "Drizzle"],
  },
  {
    title: "AI workflows",
    context: "Tool use and clear points for human review.",
    items: ["Vercel AI SDK", "OpenRouter", "MCP", "Structured outputs"],
  },
];

function StackPage() {
  return (
    <div className="min-h-screen flex flex-col bg-bg">
      <SiteNav />
      <main id="main" className="flex-1">
        <div className="page-shell py-20 md:py-28">
          <p className="eyebrow">Stack</p>
          <h1 className="page-heading mt-5">
            The tools
            <br />
            behind the work.
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-relaxed text-text-muted">
            The stack changes with the problem. These are tools you'll find across my current
            projects, including prototypes still taking shape.
          </p>
          <div className="mt-14 grid gap-6 sm:grid-cols-2">
            {groups.map((group) => (
              <section key={group.title} className="panel p-7 md:p-9">
                <h2 className="text-2xl font-semibold tracking-tight">{group.title}</h2>
                <p className="mt-3 text-text-muted">{group.context}</p>
                <ul className="mt-7 grid grid-cols-2 gap-x-5 gap-y-3 text-sm">
                  {group.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </section>
            ))}
          </div>
          <Link to="/projects" className="text-link mt-10 inline-flex">
            See them in context <span aria-hidden="true">↗</span>
          </Link>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}

import { createFileRoute } from "@tanstack/react-router";
import { SiteNav, SiteFooter } from "@/lib/components/SiteChrome";
import PixelCard from "@/lib/components/PixelCard";

export const Route = createFileRoute("/stack")({
  head: () => ({
    meta: [
      { title: "Stack — Huzaifa Shahid" },
      { name: "description", content: "Tools and technologies I reach for across frontend, mobile, backend, AI, and product." },
      { property: "og:title", content: "Stack — Huzaifa Shahid" },
      { property: "og:description", content: "Frontend, mobile, backend, AI, and product tooling." },
      { property: "og:url", content: "/stack" },
    ],
    links: [{ rel: "canonical", href: "/stack" }],
  }),
  component: StackPage,
});

const groups = [
  { title: "Frontend", items: ["Next.js", "React", "Shared CNUI", "TypeScript", "Tailwind CSS", "Vite"] },
  { title: "Mobile", items: ["Expo", "React Native", "Clerk", "Image / camera pipelines"] },
  { title: "Backend", items: ["TypeScript", "Node / Bun", "Hono", "BetterAuth", "Drizzle + Postgres", "Edge runtimes & RLS"] },
  { title: "AI & Agents", items: ["Mastra", "LangGraph", "Claude Agent SDK", "Vercel AI SDK", "MCP + Composio", "Memory + retrieval"] },
  { title: "Spec-Driven Development", items: ["BMAD Method", "GitHub Spec Kit"] },
];

function StackPage() {
  return (
    <div className="min-h-screen flex flex-col bg-bg">
      <SiteNav />
      <main id="main" className="flex-1">
        <section className="border-b border-border">
          <div className="mx-auto max-w-5xl px-4 md:px-6 py-16">
            <p className="pixel-font text-xs uppercase tracking-[0.18em] text-accent">Stack</p>
            <h1 className="mt-3 text-5xl md:text-6xl font-bold tracking-tight">Tools I reach for.</h1>
            <p className="mt-4 max-w-2xl text-text-muted text-lg">
              Pragmatic choices, picked because they make me faster or make the product better.
            </p>
            <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {groups.map((g) => (
                <PixelCard key={g.title} data-reveal className="pixel-panel p-5">
                  <h2 className="pixel-font text-sm uppercase tracking-wider text-accent">{g.title}</h2>
                  <ul className="mt-3 space-y-1.5 text-sm">
                    {g.items.map((i) => (
                      <li key={i}>{i}</li>
                    ))}
                  </ul>
                </PixelCard>
              ))}
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}

import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteNav, SiteFooter } from "@/lib/components/SiteChrome";
import { projects } from "@/lib/content/projects";

export const Route = createFileRoute("/resume")({
  head: () => ({
    meta: [
      { title: "Resume — Huzaifa Shahid" },
      { name: "description", content: "Summary, focus areas, selected projects, and skills." },
      { property: "og:title", content: "Resume — Huzaifa Shahid" },
      { property: "og:description", content: "AI product builder — resume." },
      { property: "og:url", content: "/resume" },
    ],
    links: [{ rel: "canonical", href: "/resume" }],
  }),
  component: ResumePage,
});

function ResumePage() {
  return (
    <div className="min-h-screen flex flex-col bg-bg">
      <SiteNav />
      <main id="main" className="flex-1">
        <section className="border-b border-border">
          <div className="mx-auto max-w-3xl px-4 md:px-6 py-16">
            <div className="flex items-center justify-between flex-wrap gap-3">
              <div>
                <p className="pixel-font text-xs uppercase tracking-[0.18em] text-accent">Resume</p>
                <h1 className="mt-3 text-5xl md:text-6xl font-bold tracking-tight">Huzaifa Shahid</h1>
                <p className="mt-2 text-text-muted">AI product builder · ergatikós</p>
              </div>
              <button onClick={() => window.print()} className="btn-secondary">Download / Print</button>
            </div>

            <div className="mt-10 space-y-10">
              <Block title="Summary">
                <p>
                  Product-focused developer building AI-native products: agents, SaaS systems,
                  mobile/web apps, and automation workflows. Strong on UX, system design, and
                  shipping the smallest useful version.
                </p>
              </Block>

              <Block title="Focus areas">
                <ul className="grid sm:grid-cols-2 gap-1.5 text-sm">
                  {[
                    "AI agents & workflows",
                    "SaaS products & dashboards",
                    "Mobile (Expo / React Native)",
                    "Frontend / product UX",
                    "Backend & systems thinking",
                    "Experimentation & growth",
                  ].map((i) => (
                    <li key={i}>{i}</li>
                  ))}
                </ul>
              </Block>

              <Block title="Selected projects">
                <ul className="space-y-4">
                  {projects.map((p) => (
                    <li key={p.slug} className="border-l-2 border-accent pl-4">
                      <div className="flex items-baseline justify-between gap-2 flex-wrap">
                        <Link to="/projects/$slug" params={{ slug: p.slug }} className="font-semibold hover:text-accent">
                          {p.title}
                        </Link>
                        <span className="mono-font text-xs text-text-soft">{p.status} · {p.type}</span>
                      </div>
                      <p className="text-sm text-text-muted mt-1">{p.oneLiner}</p>
                    </li>
                  ))}
                </ul>
              </Block>

              <Block title="Technical skills">
                <div className="grid sm:grid-cols-2 gap-4 text-sm">
                  <SkillRow label="Languages" value="TypeScript, JavaScript, Python" />
                  <SkillRow label="Frontend" value="Next.js, React, Tailwind, Shared CNUI" />
                  <SkillRow label="Mobile" value="Expo, React Native, Clerk" />
                  <SkillRow label="Backend" value="Node, Bun, Hono, BetterAuth, Postgres" />
                  <SkillRow label="AI" value="Mastra, LangGraph, Claude Agent SDK, Vercel AI SDK, MCP" />
                  <SkillRow label="Spec-Driven Development" value="BMAD Method, GitHub Spec Kit" />
                </div>
              </Block>

              <div className="flex flex-wrap gap-3 pt-4 border-t border-border">
                <Link to="/contact" className="btn-primary">Contact me</Link>
                <a href="https://github.com/Huzaifa-Shahid-6ll" target="_blank" rel="noreferrer" className="btn-secondary">GitHub</a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}

function Block({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section>
      <h2 className="pixel-font text-sm uppercase tracking-wider text-accent">{title}</h2>
      <div className="mt-3 text-base leading-relaxed">{children}</div>
    </section>
  );
}

function SkillRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="border-b border-border pb-2">
      <p className="pixel-font text-[0.7rem] uppercase tracking-wider text-text-soft">{label}</p>
      <p className="mt-0.5">{value}</p>
    </div>
  );
}

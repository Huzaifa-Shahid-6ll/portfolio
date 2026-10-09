import { createFileRoute, Link } from "@tanstack/react-router";
import type { ReactNode } from "react";
import { SiteNav, SiteFooter } from "@/lib/components/SiteChrome";
import { homepageProjects, site } from "@/lib/content/projects";

export const Route = createFileRoute("/resume")({
  head: () => ({
    meta: [
      { title: "Resume — Huzaifa Shahid" },
      { name: "description", content: "Huzaifa Shahid's project experience and technical focus." },
      { property: "og:title", content: "Resume — Huzaifa Shahid" },
      { property: "og:description", content: "Project experience and technical focus." },
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
        <div className="page-shell py-20 md:py-28 print:py-0">
          <div className="mx-auto max-w-3xl">
            <div className="flex flex-wrap items-start justify-between gap-6">
              <div>
                <p className="eyebrow">Resume</p>
                <h1 className="page-heading mt-5">{site.name}</h1>
                <p className="mt-4 text-lg text-text-muted">AI product builder</p>
                <a href={`mailto:${site.email}`} className="text-link mt-3 inline-flex text-sm">
                  {site.email}
                </a>
              </div>
              <button
                type="button"
                onClick={() => window.print()}
                className="btn-secondary print:hidden"
              >
                Print / save PDF <span aria-hidden="true">↗</span>
              </button>
            </div>
            <div className="mt-14 space-y-10">
              <Block title="Profile">
                <p>
                  I build AI products and the interfaces around them. My project work spans agent
                  workspaces and consumer apps, with particular attention to private data and the
                  points where a person needs to stay in control.
                </p>
              </Block>
              <Block title="Focus">
                <ul className="grid gap-3 text-sm sm:grid-cols-2">
                  {[
                    "AI agent workflows",
                    "Product interfaces",
                    "Web application development",
                    "Mobile prototypes",
                  ].map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </Block>
              <Block title="Selected project work">
                <ul className="space-y-6">
                  {homepageProjects.map((project) => (
                    <li key={project.slug} className="break-inside-avoid">
                      <div className="flex flex-wrap items-baseline justify-between gap-2">
                        <Link
                          to="/projects/$slug"
                          params={{ slug: project.slug }}
                          className="text-lg font-semibold hover:text-accent"
                        >
                          {project.title}
                        </Link>
                        <span className="text-xs text-text-muted">{project.status}</span>
                      </div>
                      <p className="mt-1 text-sm text-text-muted">{project.oneLiner}</p>
                      <p className="mt-2 text-xs text-text-muted">{project.role}</p>
                    </li>
                  ))}
                </ul>
              </Block>
              <Block title="Tools used across projects">
                <div className="grid gap-5 text-sm sm:grid-cols-2">
                  <SkillRow label="Web" value="TypeScript, React, Next.js, Tailwind CSS" />
                  <SkillRow label="Mobile" value="Expo, React Native" />
                  <SkillRow label="Data & backend" value="Node.js, Postgres, Supabase, Convex" />
                  <SkillRow label="AI workflows" value="Vercel AI SDK, OpenRouter, MCP" />
                </div>
              </Block>
              <div className="flex flex-wrap gap-4 border-t border-border pt-8 print:hidden">
                <Link to="/contact" className="btn-primary">
                  Get in touch <span aria-hidden="true">↗</span>
                </Link>
                <a href={site.github} target="_blank" rel="noreferrer" className="btn-secondary">
                  GitHub <span aria-hidden="true">↗</span>
                </a>
              </div>
              <a href={site.github} className="hidden text-sm print:block">
                {site.github}
              </a>
            </div>
          </div>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}

function Block({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section>
      <h2 className="eyebrow">{title}</h2>
      <div className="mt-4 leading-relaxed text-text-muted">{children}</div>
    </section>
  );
}

function SkillRow({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="font-medium text-text">{label}</p>
      <p className="mt-1">{value}</p>
    </div>
  );
}

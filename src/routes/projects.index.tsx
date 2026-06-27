import { createFileRoute } from "@tanstack/react-router";
import { SiteNav, SiteFooter } from "@/lib/components/SiteChrome";
import { ProjectCard } from "@/lib/components/ProjectCard";
import { projects } from "@/lib/content/projects";

export const Route = createFileRoute("/projects/")({
  head: () => ({
    meta: [
      { title: "Projects — Huzaifa Shahid" },
      {
        name: "description",
        content: "Selected projects: Orbit, Trimly, Hermes, and Paywall Lab.",
      },
      { property: "og:title", content: "Projects — Huzaifa Shahid" },
      { property: "og:description", content: "AI-native products and product-focused builds." },
      { property: "og:url", content: "/projects" },
    ],
    links: [{ rel: "canonical", href: "/projects" }],
  }),
  component: ProjectsPage,
});

function ProjectsPage() {
  return (
    <div className="min-h-screen flex flex-col bg-bg">
      <SiteNav />
      <main id="main" className="flex-1">
        <section className="border-b border-border">
          <div className="mx-auto max-w-6xl px-4 md:px-6 py-16">
            <div data-reveal="snap">
              <p className="pixel-font text-xs uppercase tracking-[0.18em] text-accent">Projects</p>
              <h1 className="mt-3 text-5xl md:text-6xl font-bold tracking-tight">
                A curated set of builds.
              </h1>
              <p className="mt-4 max-w-2xl text-text-muted text-lg">
                Four projects across AI agents, SaaS, mobile, and product experiments. Each one is
                real work — shipped, in build, or actively prototyped.
              </p>
            </div>
          </div>
        </section>
        <section className="mx-auto max-w-6xl px-4 md:px-6 py-12">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-2">
            {projects.map((p) => (
              <ProjectCard key={p.slug} project={p} />
            ))}
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}

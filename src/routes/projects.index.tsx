import { createFileRoute } from "@tanstack/react-router";
import { SiteNav, SiteFooter } from "@/lib/components/SiteChrome";
import { ProjectGrid } from "@/lib/components/ProjectGrid";
import { projects } from "@/lib/content/projects";

export const Route = createFileRoute("/projects/")({
  head: () => ({
    meta: [
      { title: "Work — Huzaifa Shahid" },
      {
        name: "description",
        content:
          "AI products, mobile applications, and experiments. Explore Orbit, SkillTube, Errby, TAYPR, Listing Desk, and work in progress.",
      },
      { property: "og:title", content: "Work — Huzaifa Shahid" },
      {
        property: "og:description",
        content: "The projects, the decisions, and the work still ahead.",
      },
      { property: "og:url", content: "/projects" },
    ],
    links: [{ rel: "canonical", href: "/projects" }],
  }),
  component: ProjectsPage,
});

function ProjectsPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteNav />
      <main id="main" className="flex-1">
        <header className="page-shell projects-header">
          <p className="eyebrow">Work & experiments</p>
          <h1 className="page-heading">
            A closer look
            <br />
            at what I’m building.
          </h1>
          <p>
            From an agent workspace to a barber brief. Each project includes the decisions behind it
            and a clear account of what’s still in progress.
          </p>
        </header>
        <section className="page-shell projects-main" aria-labelledby="catalogue-title">
          <h2 id="catalogue-title" className="sr-only">
            Project catalogue
          </h2>
          <ProjectGrid projects={projects} />
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}

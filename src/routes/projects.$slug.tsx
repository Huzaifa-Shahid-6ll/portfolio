import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { SiteNav, SiteFooter } from "@/lib/components/SiteChrome";
import { StatusBadge } from "@/lib/components/ProjectCard";
import { projects, type Project } from "@/lib/content/projects";

export const Route = createFileRoute("/projects/$slug")({
  loader: ({ params }) => {
    const project = projects.find((p) => p.slug === params.slug);
    if (!project) throw notFound();
    return { project };
  },
  head: ({ loaderData, params }) => {
    const p = loaderData?.project;
    const title = p ? `${p.title} — Huzaifa Shahid` : "Project — Huzaifa Shahid";
    const desc = p?.oneLiner ?? "Project case study.";
    return {
      meta: [
        { title },
        { name: "description", content: desc },
        { property: "og:title", content: title },
        { property: "og:description", content: desc },
        { property: "og:type", content: "article" },
        { property: "og:url", content: `/projects/${params.slug}` },
      ],
      links: [{ rel: "canonical", href: `/projects/${params.slug}` }],
    };
  },
  notFoundComponent: () => (
    <div className="min-h-screen flex flex-col bg-bg">
      <SiteNav />
      <main className="flex-1 flex items-center justify-center px-4">
        <div className="pixel-panel p-8 text-center max-w-md">
          <h1 className="text-2xl font-semibold">Project not found</h1>
          <p className="mt-2 text-text-muted text-sm">That case study doesn't exist.</p>
          <Link to="/projects" className="btn-primary mt-6">Back to projects</Link>
        </div>
      </main>
      <SiteFooter />
    </div>
  ),
  errorComponent: ({ error }) => (
    <div className="min-h-screen flex flex-col bg-bg">
      <SiteNav />
      <main className="flex-1 flex items-center justify-center px-4">
        <div className="pixel-panel p-8 text-center max-w-md">
          <h1 className="text-2xl font-semibold">Something went wrong</h1>
          <p className="mt-2 text-text-muted text-sm">{error.message}</p>
          <Link to="/projects" className="btn-primary mt-6">Back to projects</Link>
        </div>
      </main>
      <SiteFooter />
    </div>
  ),
  component: ProjectPage,
});

function ProjectPage() {
  const { project } = Route.useLoaderData();
  return (
    <div className="min-h-screen flex flex-col bg-bg">
      <SiteNav />
      <main id="main" className="flex-1">
        {/* Hero */}
        <section className="border-b border-border">
          <div className="mx-auto max-w-4xl px-4 md:px-6 py-16">
            <Link to="/projects" className="pixel-font text-xs uppercase tracking-wider text-text-soft hover:text-accent">
              All projects
            </Link>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <span className="pixel-chip"><span className="mono-font">{project.type}</span></span>
              <StatusBadge status={project.status} />
            </div>
            <h1 className="mt-5 text-5xl md:text-7xl font-bold tracking-tight">{project.title}</h1>
            <p className="mt-4 text-xl text-text-muted">{project.oneLiner}</p>
            <p className="mt-4 text-base leading-relaxed max-w-2xl">{project.summary}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/contact" className="btn-primary">Contact me about {project.title}</Link>
              <a href="https://github.com/Huzaifa-Shahid-6ll" target="_blank" rel="noreferrer" className="btn-secondary">GitHub</a>
            </div>
            <div className="mt-10 grid sm:grid-cols-2 gap-4 text-sm">
              <MetaCard label="Role" value={project.role} />
              <MetaCard label="Status" value={project.status} />
            </div>
          </div>
        </section>

        {/* Case study */}
        <article className="mx-auto max-w-4xl px-4 md:px-6 py-12 space-y-12">
          <CaseSection eyebrow="01" title="Problem" body={project.problem} />
          <CaseSection eyebrow="02" title="Solution" body={project.solution} />
          <CaseSection eyebrow="03" title="My Role" body={project.myRole} />
          <CaseList eyebrow="04" title="Stack" items={project.stack} />
          <CaseList eyebrow="05" title="Hard Parts" items={project.hardParts} />
          <CaseSection eyebrow="06" title="Learnings" body={project.learnings} />

          <div className="pixel-panel p-6 flex flex-wrap items-center justify-between gap-4">
            <div>
              <p className="pixel-font text-xs uppercase tracking-wider text-text-soft">Next step</p>
              <p className="mt-1 font-semibold">Want to talk about {project.title}?</p>
            </div>
            <Link to="/contact" className="btn-primary">Contact me</Link>
          </div>
        </article>
      </main>
      <SiteFooter />
    </div>
  );
}

function MetaCard({ label, value }: { label: string; value: string }) {
  return (
    <div className="pixel-panel p-4">
      <p className="pixel-font text-[0.7rem] uppercase tracking-wider text-text-soft">{label}</p>
      <p className="mt-1">{value}</p>
    </div>
  );
}

function CaseSection({ eyebrow, title, body }: { eyebrow: string; title: string; body: string }) {
  return (
    <section className="grid md:grid-cols-4 gap-6 border-t border-border pt-8">
      <div>
        <p className="pixel-font text-accent text-sm">{eyebrow}</p>
        <h2 className="text-3xl font-bold tracking-tight mt-1">{title}</h2>
      </div>
      <div className="md:col-span-3">
        <p className="text-base leading-relaxed">{body}</p>
      </div>
    </section>
  );
}

function CaseList({ eyebrow, title, items }: { eyebrow: string; title: string; items: string[] }) {
  return (
    <section className="grid md:grid-cols-4 gap-6 border-t border-border pt-8">
      <div>
        <p className="pixel-font text-accent text-sm">{eyebrow}</p>
        <h2 className="text-3xl font-bold tracking-tight mt-1">{title}</h2>
      </div>
      <ul className="md:col-span-3 space-y-2">
        {items.map((i) => (
          <li key={i} className="text-base">{i}</li>
        ))}
      </ul>
    </section>
  );
}

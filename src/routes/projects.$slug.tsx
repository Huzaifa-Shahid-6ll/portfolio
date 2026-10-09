import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import { SiteNav, SiteFooter } from "@/lib/components/SiteChrome";
import { StatusBadge } from "@/lib/components/ProjectCard";
import { ProjectVisual } from "@/lib/components/ProjectVisual";
import { projects } from "@/lib/content/projects";

export const Route = createFileRoute("/projects/$slug")({
  loader: ({ params }) => {
    const project = projects.find((project) => project.slug === params.slug);
    if (!project) throw notFound();
    return { project };
  },
  head: ({ loaderData, params }) => {
    const project = loaderData?.project;
    const title = project ? `${project.title} — Huzaifa Shahid` : "Project — Huzaifa Shahid";
    const description = project?.oneLiner ?? "A closer look at the work.";
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:type", content: "article" },
        { property: "og:url", content: `/projects/${params.slug}` },
      ],
      links: [{ rel: "canonical", href: `/projects/${params.slug}` }],
    };
  },
  notFoundComponent: () => (
    <ProjectFallback
      title="Project not found."
      body="That project page doesn't exist. The rest of the work is a step away."
    />
  ),
  errorComponent: () => (
    <ProjectFallback
      title="This page couldn't load."
      body="Please try again, or return to the project catalogue."
    />
  ),
  component: ProjectPage,
});

function ProjectFallback({ title, body }: { title: string; body: string }) {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteNav />
      <main id="main" className="page-shell flex-1 py-24">
        <h1 className="page-heading">{title}</h1>
        <p className="mt-6 text-text-muted">{body}</p>
        <Link to="/projects" className="btn-primary mt-8">
          <ArrowLeft size={16} aria-hidden />
          Back to work
        </Link>
      </main>
      <SiteFooter />
    </div>
  );
}

function ProjectPage() {
  const { project } = Route.useLoaderData();
  const next =
    projects[(projects.findIndex((item) => item.slug === project.slug) + 1) % projects.length];
  return (
    <div className="min-h-screen flex flex-col">
      <SiteNav />
      <main id="main" className="flex-1">
        <header className="page-shell case-header">
          <Link to="/projects" className="text-link">
            <ArrowLeft size={14} aria-hidden />
            All work
          </Link>
          <h1 className="page-heading">
            {project.title}
            <span className="accent-dot">.</span>
          </h1>
          <p className="case-description">{project.summary}</p>
          <dl className="case-meta">
            <div>
              <dt>Project</dt>
              <dd>{project.type}</dd>
            </div>
            <div>
              <dt>Focus</dt>
              <dd>{project.role}</dd>
            </div>
            <div>
              <dt>Stage</dt>
              <dd>
                <StatusBadge status={project.status} />
              </dd>
            </div>
          </dl>
          {project.links && (
            <div className="mt-6 flex flex-wrap gap-4">
              {project.links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  className="text-link"
                >
                  {link.label}
                  <ArrowUpRight size={14} aria-hidden />
                </a>
              ))}
            </div>
          )}
        </header>
        <div className="page-shell case-visual">
          <ProjectVisual slug={project.slug} />
        </div>
        <article className="case-content" aria-label={`Inside ${project.title}`}>
          <CaseSection title="The problem">
            <p>{project.problem}</p>
          </CaseSection>
          <CaseSection title="The approach">
            <p>{project.solution}</p>
          </CaseSection>
          <CaseSection title="My focus">
            <p>{project.myRole}</p>
          </CaseSection>
          <CaseSection title="Built with">
            <ul>
              {project.stack.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </CaseSection>
          <CaseSection title="The hard parts">
            <ul>
              {project.hardParts.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </CaseSection>
          <CaseSection title="What I’m learning">
            <p>{project.learnings}</p>
          </CaseSection>
          <div className="case-next">
            <div>
              <p className="eyebrow">Keep exploring</p>
              <h2>{next.title}</h2>
              <p className="mt-1 text-sm text-text-muted">{next.oneLiner}</p>
            </div>
            <Link to="/projects/$slug" params={{ slug: next.slug }} className="btn-secondary">
              Next project <ArrowRight size={16} aria-hidden />
            </Link>
          </div>
        </article>
      </main>
      <SiteFooter />
    </div>
  );
}

function CaseSection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="case-section">
      <h2>{title}</h2>
      <div>{children}</div>
    </section>
  );
}

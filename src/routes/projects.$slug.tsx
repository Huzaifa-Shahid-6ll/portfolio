import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, ArrowUpRight, ChevronDown } from "lucide-react";
import type { ReactNode } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionHeader,
  AccordionItem,
  AccordionTrigger,
} from "@/components/animate-ui/primitives/radix/accordion";
import { SiteNav, SiteFooter } from "@/lib/components/SiteChrome";
import { StatusBadge } from "@/lib/components/ProjectCard";
import { ProjectVisual } from "@/lib/components/ProjectVisual";
import { projects, type Project } from "@/lib/content/projects";
import "@/lib/components/case-study.css";

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
        <div className="page-shell case-study-layout">
          <aside className="case-study-sidebar">
            <nav className="case-page-nav" aria-label="On this project page">
              <p className="eyebrow">Inside the project</p>
              <a href="#overview">
                <span>01</span> Overview
              </a>
              <a href="#approach">
                <span>02</span> Approach
              </a>
              <a href="#build-notes">
                <span>03</span> Build notes
              </a>
            </nav>
            <CurrentStage project={project} />
          </aside>
          <article className="case-study-article" aria-label={`Inside ${project.title}`}>
            <CaseSection id="overview" number="01" title="The problem">
              <p>{project.problem}</p>
            </CaseSection>
            <CaseSection id="approach" number="02" title="The approach">
              <p>{project.solution}</p>
            </CaseSection>
            <CaseSection title="Built with">
              <ul className="case-stack-list">
                {project.stack.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </CaseSection>
            <BuildNotes key={project.slug} project={project} />
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
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}

function CaseSection({
  id,
  number,
  title,
  children,
}: {
  id?: string;
  number?: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className="case-section case-reader-section">
      <div>
        {number && (
          <span className="case-section-number" aria-hidden>
            {number}
          </span>
        )}
        <h2>{title}</h2>
      </div>
      <div>{children}</div>
    </section>
  );
}

const stageDescriptions: Record<Project["status"], string> = {
  "Active build":
    "Implementation is ongoing. The approach describes the working foundations and the release work still ahead.",
  Prototype:
    "A development prototype exploring the core workflow. Its scope and limits are described in the approach.",
  Concept:
    "Early product exploration with implementation foundations. The intended workflow is still developing.",
};

function CurrentStage({ project }: { project: Project }) {
  return (
    <section className="case-stage-card" aria-labelledby="current-stage-title">
      <h2 id="current-stage-title" className="eyebrow">
        Current stage
      </h2>
      <StatusBadge status={project.status} />
      <p>{stageDescriptions[project.status]}</p>
      <a href="#approach" className="case-stage-link">
        Read the approach <ArrowRight size={13} aria-hidden />
      </a>
    </section>
  );
}

function BuildNotes({ project }: { project: Project }) {
  return (
    <section id="build-notes" className="case-build-notes" aria-labelledby="build-notes-title">
      <div className="case-build-heading">
        <span className="case-section-number" aria-hidden>
          03
        </span>
        <h2 id="build-notes-title">Build notes</h2>
        <p>The decisions, the work, and what it’s teaching me.</p>
      </div>
      <Accordion type="multiple" defaultValue={["hard-parts"]} className="case-notes-accordion">
        <BuildNote value="hard-parts" title="The hard parts">
          <ul>
            {project.hardParts.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </BuildNote>
        <BuildNote value="my-role" title="My part in the work">
          <p>{project.myRole}</p>
        </BuildNote>
        <BuildNote value="learnings" title="What I’m learning">
          <p>{project.learnings}</p>
        </BuildNote>
      </Accordion>
    </section>
  );
}

function BuildNote({
  value,
  title,
  children,
}: {
  value: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <AccordionItem value={value} className="case-note-item">
      <AccordionHeader className="case-note-heading">
        <AccordionTrigger className="case-note-trigger">
          {title}
          <ChevronDown size={17} aria-hidden />
        </AccordionTrigger>
      </AccordionHeader>
      <AccordionContent transition={{ type: "spring", bounce: 0, duration: 0.28 }}>
        <div className="case-note-body">{children}</div>
      </AccordionContent>
    </AccordionItem>
  );
}

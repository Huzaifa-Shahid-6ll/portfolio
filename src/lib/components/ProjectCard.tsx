import { Link } from "@tanstack/react-router";
import type { Project } from "@/lib/content/projects";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="pixel-panel p-5 flex flex-col gap-4 h-full">
      <div className="flex items-center justify-between gap-3">
        <span className="pixel-chip">
          <span className="mono-font">{project.type}</span>
        </span>
        <StatusBadge status={project.status} />
      </div>
      <div>
        <h3 className="text-xl font-semibold tracking-tight">{project.title}</h3>
        <p className="mt-1 text-sm text-text-muted">{project.oneLiner}</p>
      </div>
      <p className="text-sm text-text leading-relaxed">{project.summary}</p>
      <div className="flex flex-wrap gap-1.5 mt-auto">
        {project.tags.slice(0, 4).map((t) => (
          <span key={t} className="pixel-chip !py-0.5 !text-[0.7rem]">{t}</span>
        ))}
      </div>
      <div className="pt-2 border-t border-border flex items-center justify-between">
        <Link
          to="/projects/$slug"
          params={{ slug: project.slug }}
          className="text-sm font-semibold text-accent hover:text-accent-hover inline-flex items-center gap-1"
        >
          View case study <span aria-hidden>→</span>
        </Link>
        <span className="pixel-font text-[0.7rem] text-text-soft uppercase">{project.role.split(",")[0]}</span>
      </div>
    </article>
  );
}

export function StatusBadge({ status }: { status: Project["status"] }) {
  const isLive = status === "Active build" || status === "Shipped";
  return (
    <span className="inline-flex items-center gap-2 text-xs mono-font text-text-muted">
      <span
        className="inline-block size-2"
        style={{
          background: isLive ? "var(--success)" : "var(--border-strong)",
          boxShadow: isLive ? "0 0 0 2px var(--accent-soft)" : "none",
        }}
        aria-hidden
      />
      {status}
    </span>
  );
}

import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import type { Project } from "@/lib/content/projects";
import { ProjectVisual } from "./ProjectVisual";

export function ProjectCard({ project }: { project: Project }) {
  const reduce = useReducedMotion();
  return (
    <motion.article
      className="project-card"
      layout="position"
      initial={false}
      whileHover={reduce ? undefined : { y: -3 }}
    >
      <Link to="/projects/$slug" params={{ slug: project.slug }} className="project-card-link">
        <div aria-hidden="true">
          <ProjectVisual slug={project.slug} />
        </div>
        <div className="project-card-info">
          <div className="project-card-top">
            <h3 className="project-card-title">
              {project.title}
              <StatusBadge status={project.status} />
            </h3>
            <span className="card-arrow">
              <ArrowUpRight size={15} aria-hidden />
            </span>
          </div>
          <p>{project.oneLiner}</p>
          <div className="project-card-tags">
            {project.tags.slice(0, 3).map((tag) => (
              <span key={tag}>{tag}</span>
            ))}
          </div>
        </div>
      </Link>
    </motion.article>
  );
}

export function StatusBadge({ status }: { status: Project["status"] }) {
  return (
    <span className="status-badge" data-active={status === "Active build"}>
      {status}
    </span>
  );
}

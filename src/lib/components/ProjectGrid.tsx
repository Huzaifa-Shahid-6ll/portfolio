import { useId, useState } from "react";
import { LayoutGroup, motion } from "motion/react";
import { ProjectCard } from "./ProjectCard";
import type { Project, ProjectCategory } from "../content/projects";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";

const filters = ["All work", "AI & tools", "Mobile", "Experiments"] as const;

export function ProjectGrid({
  projects,
  showFilters = true,
}: {
  projects: Project[];
  showFilters?: boolean;
}) {
  const [filter, setFilter] = useState<"All work" | ProjectCategory>("All work");
  const groupId = useId();
  const visible =
    filter === "All work" ? projects : projects.filter((project) => project.category === filter);
  return (
    <LayoutGroup id={groupId}>
      {showFilters && (
        <ToggleGroup
          type="single"
          value={filter}
          onValueChange={(value) => {
            if (filters.some((item) => item === value)) setFilter(value as typeof filter);
          }}
          className="project-filters"
          aria-label="Filter projects"
        >
          {filters
            .filter(
              (value) =>
                value === "All work" || projects.some((project) => project.category === value),
            )
            .map((value) => (
              <ToggleGroupItem asChild value={value} key={value} aria-controls={groupId}>
                <motion.button type="button" className="filter-button" whileTap={{ scale: 0.97 }}>
                  {filter === value && (
                    <motion.span
                      className="filter-selected"
                      layoutId="selected-filter"
                      transition={{ type: "spring", bounce: 0, duration: 0.35 }}
                    />
                  )}
                  <span className="filter-label">{value}</span>
                </motion.button>
              </ToggleGroupItem>
            ))}
        </ToggleGroup>
      )}
      <p className="sr-only" aria-live="polite" aria-atomic="true">
        {visible.length} {visible.length === 1 ? "project" : "projects"} shown
        {filter !== "All work" ? ` in ${filter}` : ""}.
      </p>
      <div id={groupId} className="work-grid">
        {visible.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </LayoutGroup>
  );
}

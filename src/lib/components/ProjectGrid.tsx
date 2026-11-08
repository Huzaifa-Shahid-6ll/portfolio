import { useId, useState } from "react";
import { LayoutGroup } from "motion/react";
import { Segmented, SegmentedButton } from "konsta/react";
import * as ToggleGroup from "@radix-ui/react-toggle-group";
import { ProjectCard } from "./ProjectCard";
import type { Project, ProjectCategory } from "../content/projects";

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
        <ToggleGroup.Root
          asChild
          type="single"
          value={filter}
          onValueChange={(value) => {
            if (filters.some((item) => item === value)) setFilter(value as typeof filter);
          }}
          aria-label="Filter projects"
        >
          <Segmented
            strong
            rounded
            className="project-filters"
            colors={{
              strongBgIos: "bg-surface-soft",
              strongHighlightBgIos: "bg-surface dark:bg-surface-strong",
            }}
          >
            {filters
              .filter(
                (value) =>
                  value === "All work" || projects.some((project) => project.category === value),
              )
              .map((value) => (
                <ToggleGroup.Item asChild value={value} key={value} aria-controls={groupId}>
                  <SegmentedButton
                    type="button"
                    active={filter === value}
                    className="filter-button"
                  >
                    {value}
                  </SegmentedButton>
                </ToggleGroup.Item>
              ))}
          </Segmented>
        </ToggleGroup.Root>
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

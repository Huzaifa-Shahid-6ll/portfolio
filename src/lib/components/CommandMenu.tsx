import { useEffect, useState } from "react";
import { useNavigate } from "@tanstack/react-router";
import { FileText, FolderOpen, Home, Layers, Mail, Search, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@/components/ui/command";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { projects } from "@/lib/content/projects";

const pages = [
  { to: "/", label: "Home", icon: Home },
  { to: "/projects", label: "All projects", icon: FolderOpen },
  { to: "/about", label: "About", icon: User },
  { to: "/stack", label: "Stack", icon: Layers },
  { to: "/resume", label: "Résumé", icon: FileText },
  { to: "/contact", label: "Contact", icon: Mail },
] as const;

export function CommandMenu({ onOpen }: { onOpen: () => void }) {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const shortcut = (event: KeyboardEvent) => {
      if (
        event.key.toLowerCase() === "k" &&
        (event.metaKey || event.ctrlKey) &&
        !event.altKey &&
        !event.shiftKey &&
        !event.repeat &&
        !event.isComposing
      ) {
        event.preventDefault();
        onOpen();
        setOpen((current) => !current);
      }
    };
    document.addEventListener("keydown", shortcut);
    return () => document.removeEventListener("keydown", shortcut);
  }, [onOpen]);

  return (
    <Dialog
      open={open}
      onOpenChange={(next) => {
        setOpen(next);
        if (next) onOpen();
      }}
    >
      <DialogTrigger asChild>
        <Button
          type="button"
          variant="ghost"
          size="icon"
          className="icon-button"
          aria-label="Search projects and pages"
          aria-keyshortcuts="Control+k Meta+k"
          title="Search projects and pages (⌘K / Ctrl+K)"
        >
          <Search data-icon="inline-start" aria-hidden="true" />
        </Button>
      </DialogTrigger>
      <DialogContent className="command-menu overflow-hidden p-0">
        <DialogTitle className="sr-only">Search the portfolio</DialogTitle>
        <DialogDescription className="sr-only">
          Search projects and pages. Use the arrow keys to move and Enter to open a result.
        </DialogDescription>
        <Command label="Portfolio search" loop>
          <CommandInput
            placeholder="Search projects and pages…"
            aria-label="Search projects and pages"
          />
          <CommandList>
            <CommandEmpty>No matches. Try a project name or page.</CommandEmpty>
            <CommandGroup heading="Pages">
              {pages.map((page) => (
                <CommandItem
                  key={page.to}
                  value={`page ${page.label}`}
                  keywords={[page.to, page.to === "/resume" ? "resume" : ""]}
                  onSelect={() => {
                    setOpen(false);
                    void navigate({ to: page.to });
                  }}
                >
                  <page.icon aria-hidden="true" />
                  {page.label}
                </CommandItem>
              ))}
            </CommandGroup>
            <CommandSeparator aria-hidden="true" />
            <CommandGroup heading="Projects">
              {projects.map((project) => (
                <CommandItem
                  key={project.slug}
                  value={`project ${project.title}`}
                  keywords={[project.oneLiner, project.category, ...project.tags]}
                  onSelect={() => {
                    setOpen(false);
                    void navigate({ to: "/projects/$slug", params: { slug: project.slug } });
                  }}
                >
                  <FolderOpen aria-hidden="true" />
                  <span className="min-w-0 truncate">{project.title}</span>
                  <span className="command-status ml-auto">{project.status}</span>
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </DialogContent>
    </Dialog>
  );
}

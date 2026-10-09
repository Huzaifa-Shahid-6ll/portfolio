import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowRight, Check, FileText, Scissors, ShieldCheck } from "lucide-react";
import { useReducedMotion } from "motion/react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { TransitionPanel } from "@/components/ui/transition-panel";
import "./product-walkthrough.css";

const workflows = [
  {
    slug: "orbit",
    name: "Orbit",
    icon: ShieldCheck,
    title: "Keep the person in control.",
    description:
      "Longer tasks need more than a chat history. Orbit brings context and tool boundaries into the same workspace.",
    steps: [
      ["Bring the context", "Keep useful information attached to the workspace."],
      ["Inspect the action", "Make the boundary between a suggestion and a tool call visible."],
      [
        "Keep the record",
        "Build towards inspectable runs. Budget and audit work is still underway.",
      ],
    ],
    artifact: "A visible boundary",
    artifactTitle: "A suggestion is not permission.",
    artifactBody:
      "The important question is what an agent can change, and how someone can inspect it.",
    notes: ["Persistent context", "Tool boundaries", "Audit work in progress"],
    footnote: "Active build · private-beta foundations",
  },
  {
    slug: "skilltube",
    name: "SkillTube",
    icon: FileText,
    title: "Give a tutorial a useful afterlife.",
    description:
      "A video can explain a task well and still be hard to use while doing it. SkillTube turns the transcript into an editable skill file.",
    steps: [
      ["Start with the source", "Bring in a tutorial and check transcript availability."],
      ["Review the draft", "Edit the generated instructions before taking them into another tool."],
      ["Take the file", "Export a SKILL.md bundle as a ZIP."],
    ],
    artifact: "The handoff",
    artifactTitle: "Instructions you can edit.",
    artifactBody:
      "The output is a file that can leave the application. The review step matters as much as generation.",
    notes: ["Tutorial transcript", "Editable SKILL.md", "ZIP export"],
    footnote: "Active build · transcript-to-skill workflow",
  },
  {
    slug: "taypr",
    name: "TAYPR",
    icon: Scissors,
    title: "Make a preference easier to explain.",
    description:
      "Choosing a haircut is one task. Explaining that choice in the chair is another. TAYPR connects the two with a barber card.",
    steps: [
      ["Describe the preference", "Begin with what someone wants from their haircut."],
      ["Review the direction", "Keep the advice understandable and private by default."],
      ["Bring the brief", "Carry the haircut guidance into a conversation with a barber."],
    ],
    artifact: "The barber card",
    artifactTitle: "A brief for the chair.",
    artifactBody:
      "A shared reference helps a person explain their choice. It gives the barber somewhere to start the conversation.",
    notes: ["Haircut preferences", "Private Android workflow", "Barber-ready brief"],
    footnote: "Active build · Android application",
  },
] as const;

export function ProductWalkthrough() {
  const [selected, setSelected] = useState<string>("orbit");
  const reducedMotion = useReducedMotion();
  const activeIndex = workflows.findIndex((workflow) => workflow.slug === selected);

  return (
    <section className="walkthrough-section" aria-labelledby="walkthrough-title">
      <div className="page-shell">
        <div className="section-top">
          <div>
            <p className="eyebrow">A look inside</p>
            <h2 id="walkthrough-title" className="section-heading">
              The path through
              <br />
              the product.
            </h2>
          </div>
          <p>A few decisions that shape the work, from the first input to the handoff.</p>
        </div>
        <Tabs value={selected} onValueChange={setSelected} className="walkthrough-tabs">
          <TabsList aria-label="Explore a product workflow" className="walkthrough-switcher">
            {workflows.map((workflow) => (
              <TabsTrigger value={workflow.slug} key={workflow.slug}>
                <workflow.icon size={16} aria-hidden />
                {workflow.name}
              </TabsTrigger>
            ))}
          </TabsList>
          <TabsContent value={selected} className="walkthrough-content">
            <TransitionPanel
              activeIndex={activeIndex}
              transition={{ duration: reducedMotion ? 0 : 0.2 }}
              variants={{
                enter: { opacity: 0 },
                center: { opacity: 1 },
                exit: { opacity: 0, transition: { duration: 0 } },
              }}
            >
              {workflows.map((workflow) => (
                <div className="walkthrough-grid" key={workflow.slug}>
                  <div className="walkthrough-story">
                    <h3>{workflow.title}</h3>
                    <p>{workflow.description}</p>
                    <ol className="walkthrough-steps">
                      {workflow.steps.map(([title, body], index) => (
                        <li key={title}>
                          <span aria-hidden>{String(index + 1).padStart(2, "0")}</span>
                          <div>
                            <h4>{title}</h4>
                            <p>{body}</p>
                          </div>
                        </li>
                      ))}
                    </ol>
                    <Link
                      to="/projects/$slug"
                      params={{ slug: workflow.slug }}
                      className="text-link"
                    >
                      Inside {workflow.name}
                      <ArrowRight size={15} aria-hidden />
                    </Link>
                  </div>
                  <div className={`walkthrough-artifact walkthrough-${workflow.slug}`}>
                    <div className="artifact-topline">
                      <workflow.icon size={20} aria-hidden />
                      <span>Workflow illustration</span>
                    </div>
                    <div className="artifact-document">
                      <p className="eyebrow">{workflow.artifact}</p>
                      <h4>{workflow.artifactTitle}</h4>
                      <p>{workflow.artifactBody}</p>
                      <ul>
                        {workflow.notes.map((note) => (
                          <li key={note}>
                            <Check size={14} aria-hidden />
                            {note}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <p className="artifact-footnote">{workflow.footnote}</p>
                  </div>
                </div>
              ))}
            </TransitionPanel>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}

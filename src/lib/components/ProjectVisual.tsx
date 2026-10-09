import {
  ArrowDown,
  ArrowRight,
  AudioLines,
  BookOpen,
  Check,
  CheckCheck,
  ChevronRight,
  Circle,
  FileCode2,
  FileText,
  Grid2X2,
  Layers,
  ListChecks,
  MessageCircle,
  Play,
  Plus,
  Scissors,
  Search,
  ShieldCheck,
  Sparkles,
  Timer,
  Workflow,
} from "lucide-react";
import "./project-visual.css";

const descriptions: Record<string, string> = {
  orbit: "Orbit interface illustration: an agent workspace with a plan, memory, and a review step.",
  trimly:
    "Trimly interface illustration: a mobile haircut consultation and a barber instruction card.",
  taypr:
    "Taypr interface illustration: a mobile haircut consultation and a barber instruction card.",
  skilltube:
    "SkillTube interface illustration: a video transcript becoming a reusable SKILL.md file.",
  errby:
    "Errby interface illustration: learning by explaining a concept and finding a gap in understanding.",
  "listing-desk":
    "Listing Desk interface illustration: listing details alongside a preparation checklist.",
  "paywall-lab":
    "Paywall Lab interface illustration: reviewing a paywall experiment concept before launch.",
};

export function ProjectVisual({ slug, className = "" }: { slug: string; className?: string }) {
  const kind = slug === "taypr" ? "trimly" : slug;

  return (
    <div
      className={`project-visual pv-${kind} ${className}`}
      role="img"
      aria-label={descriptions[slug] ?? `${slug} product workflow illustration.`}
    >
      <div className="pv-art" aria-hidden="true">
        {kind === "orbit" ? (
          <OrbitPreview />
        ) : kind === "trimly" ? (
          <HaircutPreview name={slug === "taypr" ? "Taypr" : "Trimly"} />
        ) : kind === "skilltube" ? (
          <SkillTubePreview />
        ) : kind === "errby" ? (
          <ErrbyPreview />
        ) : kind === "listing-desk" ? (
          <ListingPreview />
        ) : kind === "paywall-lab" ? (
          <PaywallPreview />
        ) : (
          <WorkflowPreview slug={slug} />
        )}
      </div>
      <span className="pv-caption">Interface illustration</span>
    </div>
  );
}

function OrbitPreview() {
  return (
    <>
      <div className="pv-orbit-halo" />
      <div className="pv-orbit-app">
        <aside className="pv-orbit-rail">
          <div className="pv-orbit-mark">
            <Circle />
          </div>
          <div className="pv-rail-active">
            <Grid2X2 />
          </div>
          <MessageCircle />
          <Layers />
          <Timer />
          <span className="pv-rail-bottom">HS</span>
        </aside>
        <div className="pv-orbit-dashboard">
          <div className="pv-window-bar">
            <span className="pv-traffic">
              <i />
              <i />
              <i />
            </span>
            <span>Orbit / Workspace</span>
            <Search size={13} />
          </div>
          <div className="pv-orbit-content">
            <div className="pv-orbit-heading">
              <div>
                <span className="pv-kicker">YOUR WORKSPACE</span>
                <strong>A little more headspace.</strong>
              </div>
              <span className="pv-avatar">H</span>
            </div>
            <div className="pv-orbit-columns">
              <div className="pv-orbit-main">
                <div className="pv-agent-heading">
                  <span className="pv-agent-icon">
                    <Sparkles size={14} />
                  </span>
                  <b>One agent. The whole workflow.</b>
                </div>
                <p className="pv-orbit-prompt">Help me turn this research into a plan.</p>
                <div className="pv-agent-plan">
                  <span className="pv-kicker">WORKING PLAN</span>
                  <div>
                    <CheckCheck />
                    <span>Read the source material</span>
                    <small>Understand</small>
                  </div>
                  <div>
                    <CheckCheck />
                    <span>Pull in relevant context</span>
                    <small>Remember</small>
                  </div>
                  <div className="pv-plan-current">
                    <span className="pv-plan-dot" />
                    <span>Prepare the next steps</span>
                    <small>Plan</small>
                  </div>
                </div>
                <div className="pv-orbit-composer">
                  <Plus size={13} />
                  <span>What would you like to work on?</span>
                  <span className="pv-send">
                    <ArrowRight size={12} />
                  </span>
                </div>
              </div>
              <div className="pv-orbit-context">
                <span className="pv-kicker">KEPT IN CONTEXT</span>
                <div>
                  <BookOpen />
                  <b>Memory</b>
                  <p>Decisions and useful context, ready when needed.</p>
                </div>
                <div>
                  <ShieldCheck />
                  <b>Your say, always.</b>
                  <p>Review actions before they leave the workspace.</p>
                </div>
                <span className="pv-context-foot">
                  <span /> Human in control
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="pv-orbit-note">
        <ShieldCheck size={16} />
        <div>
          <b>Ready for your review</b>
          <span>A plan before an action.</span>
        </div>
        <ChevronRight size={13} />
      </div>
    </>
  );
}

function HaircutPreview({ name }: { name: string }) {
  return (
    <>
      <div className="pv-mint-orbit" />
      <div className="pv-phone">
        <div className="pv-phone-island" />
        <div className="pv-phone-brand">
          <Scissors size={14} /> {name.toLowerCase()}
          <span>✦</span>
        </div>
        <span className="pv-kicker">FIND YOUR NEXT CUT</span>
        <strong>
          A fresh look.
          <br />A clear plan.
        </strong>
        <div className="pv-hair-portrait">
          <div className="pv-person-neck" />
          <div className="pv-person-face" />
          <div className="pv-person-hair" />
          <div className="pv-person-shirt" />
          <span>Style consultation</span>
        </div>
        <div className="pv-phone-bottom">
          <span>Texture & shape</span>
          <b>
            Make it yours <ArrowRight size={12} />
          </b>
        </div>
        <div className="pv-phone-home" />
      </div>
      <div className="pv-barber-card">
        <span className="pv-small-icon">
          <Scissors size={16} />
        </span>
        <span className="pv-kicker">TAKE IT TO YOUR BARBER</span>
        <strong>
          Less explaining.
          <br />
          More understanding.
        </strong>
        <div>
          <Check size={12} /> Length & shape
        </div>
        <div>
          <Check size={12} /> Finish & styling
        </div>
        <div>
          <Check size={12} /> What to keep
        </div>
        <span className="pv-card-footer">
          Your barber card <ArrowRight size={12} />
        </span>
      </div>
    </>
  );
}

function SkillTubePreview() {
  return (
    <div className="pv-skill-composition">
      <div className="pv-video-card">
        <div className="pv-video-thumb">
          <span className="pv-video-lines">
            <i />
            <i />
            <i />
          </span>
          <span className="pv-play">
            <Play size={20} fill="currentColor" />
          </span>
        </div>
        <b>From watching to doing.</b>
        <span>Check source → generate skill → export ZIP</span>
        <div className="pv-transcript">
          <i />
          <i />
          <i />
        </div>
      </div>
      <span className="pv-flow-arrow">
        <ArrowRight size={20} />
      </span>
      <div className="pv-code-card">
        <div className="pv-code-bar">
          <FileCode2 size={14} />
          <span>SKILL.md</span>
          <span className="pv-code-dot" />
        </div>
        <div className="pv-code-body">
          <span className="pv-code-muted">---</span>
          <p>
            <em>name:</em> reusable-workflow
          </p>
          <p>
            <em>description:</em> a practical guide
          </p>
          <span className="pv-code-muted">---</span>
          <b># Put the lesson to work</b>
          <p className="pv-code-muted">## When to use this skill</p>
          <div className="pv-code-rule" />
          <div className="pv-code-rule short" />
          <p className="pv-code-muted">## Steps</p>
          <span className="pv-code-step">1. Understand the task</span>
          <span className="pv-code-step">2. Follow the workflow</span>
          <span className="pv-code-step">3. Check the result</span>
        </div>
      </div>
    </div>
  );
}

function ErrbyPreview() {
  return (
    <div className="pv-learning-app">
      <div className="pv-learning-bar">
        <span>
          <AudioLines size={16} /> errby
        </span>
        <span>Learn it. Explain it. Keep it.</span>
      </div>
      <div className="pv-learning-body">
        <span className="pv-kicker">MAKE SENSE OF IT</span>
        <strong>
          If you can explain it,
          <br />
          you can understand it.
        </strong>
        <div className="pv-learning-topic">
          <span>Today’s concept</span>
          <b>How does memory work?</b>
          <BookOpen size={18} />
        </div>
        <div className="pv-explanation">
          <span className="pv-avatar">You</span>
          <p>
            Let me try explaining that
            <br />
            in my own words…
          </p>
          <div className="pv-audio-wave">
            {[9, 16, 24, 13, 30, 20, 12, 25, 34, 17, 11, 23, 15, 8].map((height, index) => (
              <i key={index} style={{ height }} />
            ))}
          </div>
        </div>
      </div>
      <div className="pv-insight">
        <span className="pv-small-icon">
          <Sparkles size={16} />
        </span>
        <span className="pv-kicker">A GAP WORTH EXPLORING</span>
        <b>
          What happens when
          <br />
          you need to recall it?
        </b>
        <span>
          Go a little deeper <ArrowRight size={12} />
        </span>
      </div>
    </div>
  );
}

function ListingPreview() {
  return (
    <div className="pv-listing-app">
      <div className="pv-listing-rail">
        <Layers size={18} />
        <span>
          Listing
          <br />
          Desk
        </span>
        <FileText size={15} />
        <ListChecks size={15} />
      </div>
      <div className="pv-listing-content">
        <span className="pv-kicker">FROM DETAILS TO A DRAFT</span>
        <strong>A place for every detail.</strong>
        <div className="pv-listing-grid">
          <div className="pv-listing-item">
            <div className="pv-object-illustration">
              <span />
            </div>
            <b>Product workspace</b>
            <span>Photos, identity, Dutch copy</span>
            <div className="pv-transcript">
              <i />
              <i />
            </div>
          </div>
          <div className="pv-listing-checklist">
            <b>Prepare a listing draft</b>
            <span>
              <Check /> Import product details
            </span>
            <span>
              <Check /> Review the identity
            </span>
            <span>
              <Check /> Review copy & media
            </span>
            <span className="pv-checklist-review">
              <Circle /> NL / BE preview
            </span>
            <div className="pv-listing-draft">
              Draft ready for review <ArrowRight size={12} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function PaywallPreview() {
  return (
    <div className="pv-paywall-app">
      <div className="pv-paywall-heading">
        <span className="pv-small-icon">
          <Workflow size={18} />
        </span>
        <div>
          <span className="pv-kicker">PAYWALL LAB</span>
          <strong>A better next experiment.</strong>
        </div>
        <span className="pv-concept-tag">Concept</span>
      </div>
      <div className="pv-experiment-columns">
        <div className="pv-paywall-variant">
          <span>THE VARIANT</span>
          <Sparkles size={26} />
          <b>
            Make room
            <br />
            for the good stuff.
          </b>
          <div className="pv-variant-rule" />
          <div className="pv-variant-rule short" />
          <div className="pv-variant-cta">
            Your next chapter <ArrowRight size={11} />
          </div>
        </div>
        <div className="pv-experiment-brief">
          <span className="pv-kicker">EXPERIMENT BRIEF</span>
          <b>
            A clear hypothesis.
            <br />A deliberate change.
          </b>
          <div>
            <span>01</span>
            <p>Review the current experience</p>
          </div>
          <div>
            <span>02</span>
            <p>Generate a focused variant</p>
          </div>
          <div>
            <span>03</span>
            <p>Define what to measure</p>
          </div>
          <span className="pv-human-review">
            <ShieldCheck size={13} /> Review before launch
          </span>
        </div>
      </div>
    </div>
  );
}

function WorkflowPreview({ slug }: { slug: string }) {
  const title =
    slug === "coachsync"
      ? "CoachSync"
      : slug === "courtos"
        ? "CourtOS"
        : slug === "boundary"
          ? "Boundary"
          : "Agent workflows";
  return (
    <div className="pv-workflow-app">
      <span className="pv-small-icon">
        <Workflow size={20} />
      </span>
      <span className="pv-kicker">A WORKFLOW WITH A PURPOSE</span>
      <strong>{title}</strong>
      <div className="pv-workflow-step">
        <FileText size={16} />
        <span>Bring the context together</span>
        <Check size={14} />
      </div>
      <ArrowDown size={15} />
      <div className="pv-workflow-step">
        <Layers size={16} />
        <span>Turn it into a working plan</span>
        <Check size={14} />
      </div>
      <ArrowDown size={15} />
      <div className="pv-workflow-step">
        <ShieldCheck size={16} />
        <span>Review the next step</span>
        <ChevronRight size={14} />
      </div>
    </div>
  );
}

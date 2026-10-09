import "./project-visual.css";

const descriptions: Record<string, string> = {
  orbit:
    "Orbit concept: a cobalt orbital ring surrounding frosted memory tiles and a silver sphere.",
  skilltube:
    "SkillTube concept: a coral play symbol connects a sequence of video frames to instruction cards.",
  errby:
    "Errby concept: a sage companion considers an open notebook beside an amber question mark.",
  taypr:
    "TAYPR concept: silver barber scissors and a dark-green comb beside haircut reference cards.",
  "listing-desk":
    "Listing Desk concept: ceramic products and frosted reference cards organized on stone plinths.",
  boundary:
    "Boundary concept: a cobalt glass cube within an aluminum frame and an amber threshold.",
  trimly: "Trimly concept: a silver hair clipper and sage comb beside a haircut reference booklet.",
  "paywall-lab":
    "PaywallLab concept: two glass panels compare geometric arrangements beside an amber sphere.",
};

export function ProjectVisual({
  slug,
  className = "",
  loading = "lazy",
}: {
  slug: string;
  className?: string;
  loading?: "eager" | "lazy";
}) {
  return (
    <figure className={`project-visual ${className}`}>
      <img
        src={`/images/projects/${slug}.webp`}
        alt={descriptions[slug] ?? `${slug} concept artwork.`}
        width={1672}
        height={slug === "taypr" ? 940 : 941}
        loading={loading}
        decoding="async"
      />
      <figcaption className="pv-caption">Concept artwork</figcaption>
    </figure>
  );
}

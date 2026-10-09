import React, { useState } from "react";
import { Github, Linkedin, Twitter, Mail } from "lucide-react";
import { cn } from "@/lib/utils";

export interface SocialItem {
  letter: string;
  icon: React.ReactNode;
  label: string;
  href?: string;
  onClick?: () => void;
}

interface SocialFlipButtonProps {
  items?: SocialItem[];
  className?: string;
  itemClassName?: string;
  frontClassName?: string;
  backClassName?: string;
}

// Spells "TALK" — echoes the contact page headline ("Let's talk.").
// Letters are decorative; each tile maps to a real profile.
const defaultItems: SocialItem[] = [
  {
    letter: "T",
    icon: <Github size={18} aria-hidden />,
    label: "GitHub",
    href: "https://github.com/Huzaifa-Shahid-6ll",
  },
  {
    letter: "A",
    icon: <Linkedin size={18} aria-hidden />,
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/huzaifa-shahid-596bb2361/",
  },
  {
    letter: "L",
    icon: <Twitter size={18} aria-hidden />,
    label: "X / Twitter",
    href: "https://x.com/Huzaifa_shd",
  },
  {
    letter: "K",
    icon: <Mail size={18} aria-hidden />,
    label: "Email",
    href: "mailto:huzaifa.shd@gmail.com",
  },
];

function SocialFlipNode({
  item,
  index,
  isHovered,
  setTooltipIndex,
  tooltipIndex,
  itemClassName,
  frontClassName,
  backClassName,
}: {
  item: SocialItem;
  index: number;
  isHovered: boolean;
  setTooltipIndex: (val: number | null) => void;
  tooltipIndex: number | null;
  itemClassName?: string;
  frontClassName?: string;
  backClassName?: string;
}) {
  const Wrapper = item.href ? "a" : "div";
  const wrapperProps = item.href
    ? { href: item.href, target: "_blank", rel: "noopener noreferrer" }
    : { onClick: item.onClick };

  // --i drives the staggered flip delay (steps-based, percussive).
  const wrapperStyle = { perspective: "1000px", "--i": index } as React.CSSProperties;

  return (
    <Wrapper
      {...wrapperProps}
      className={cn("group/tile relative h-11 w-11 cursor-pointer pixel-hover", itemClassName)}
      style={wrapperStyle}
      onMouseEnter={() => setTooltipIndex(index)}
      onMouseLeave={() => setTooltipIndex(null)}
      aria-label={item.label}
    >
      {tooltipIndex === index && (
        <div
          role="tooltip"
          className="pixel-snap-in pointer-events-none absolute -top-9 left-1/2 z-50 flex -translate-x-1/2 whitespace-nowrap bg-text px-2 py-1 mono-font text-[0.65rem] uppercase tracking-wider text-bg"
        >
          {item.label}
          <span
            aria-hidden
            className="absolute -bottom-1 left-1/2 h-2 w-2 -translate-x-1/2 rotate-45 bg-text"
          />
        </div>
      )}

      <div
        className="relative h-full w-full"
        style={{
          transformStyle: "preserve-3d",
          transform: isHovered ? "rotateY(180deg)" : "rotateY(0deg)",
          transition: "transform 360ms steps(8)",
          transitionDelay: "calc(var(--i) * 60ms)",
        }}
      >
        {/* Front — letter */}
        <div
          className={cn(
            "absolute inset-0 flex items-center justify-center border-2 border-border-strong bg-surface-strong pixel-font text-sm text-text",
            frontClassName,
          )}
          style={{ backfaceVisibility: "hidden", WebkitBackfaceVisibility: "hidden" }}
        >
          {item.letter}
        </div>

        {/* Back — icon */}
        <div
          className={cn(
            "absolute inset-0 flex items-center justify-center border-2 border-accent-strong bg-accent text-white",
            backClassName,
          )}
          style={{
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
          }}
        >
          {item.icon}
        </div>
      </div>
    </Wrapper>
  );
}

export default function SocialFlipButton({
  items = defaultItems,
  className,
  itemClassName,
  frontClassName,
  backClassName,
}: SocialFlipButtonProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [tooltipIndex, setTooltipIndex] = useState<number | null>(null);

  return (
    <div className={cn("flex items-center justify-center p-4", className)}>
      <div
        className="group relative flex items-center gap-2 pixel-panel p-3"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => {
          setIsHovered(false);
          setTooltipIndex(null);
        }}
      >
        {/* Live accent — replaces the original smooth sweeping border lines. */}
        <span aria-hidden className="status-dot pixel-blink absolute right-1.5 top-1.5" />

        {items.map((item, index) => (
          <SocialFlipNode
            key={index}
            item={item}
            index={index}
            isHovered={isHovered}
            setTooltipIndex={setTooltipIndex}
            tooltipIndex={tooltipIndex}
            itemClassName={itemClassName}
            frontClassName={frontClassName}
            backClassName={backClassName}
          />
        ))}
      </div>
    </div>
  );
}

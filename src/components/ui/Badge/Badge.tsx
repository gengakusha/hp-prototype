import type { ReactNode } from "react";
import "./Badge.css";

export type Tone = "campaign" | "blue" | "navy" | "outline";

export function Badge({ tone = "blue", className, children }: { tone?: Tone; className?: string; children: ReactNode }) {
  const classes = ["gr-badge", `gr-badge--${tone}`, className].filter(Boolean).join(" ");
  return (
    <span className={classes}>
      <span className="gr-badge__label">{children}</span>
    </span>
  );
}

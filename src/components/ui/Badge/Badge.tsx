import type { ReactNode } from "react";
import "./Badge.css";

type Tone = "campaign" | "blue" | "navy" | "outline";

export function Badge({ tone = "blue", children }: { tone?: Tone; children: ReactNode }) {
  return (
    <span className={`gr-badge gr-badge--${tone}`}>
      <span className="gr-badge__label">{children}</span>
    </span>
  );
}

import type { ReactNode } from "react";
import "./Card.css";

export function Card({
  children,
  accent = false,
  as = "div",
}: {
  children: ReactNode;
  accent?: boolean;
  as?: "div" | "li";
}) {
  const Tag = as;
  return <Tag className={`gr-card${accent ? " gr-card--accent" : ""}`}>{children}</Tag>;
}

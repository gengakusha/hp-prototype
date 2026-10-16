import type { ReactNode } from "react";
import "./LinkCard.css";

export function LinkCard({ href, className, children }: { href: string; className?: string; children: ReactNode }) {
  return (
    <a href={href} className={`gr-link-card${className ? ` ${className}` : ""}`}>
      {children}
    </a>
  );
}

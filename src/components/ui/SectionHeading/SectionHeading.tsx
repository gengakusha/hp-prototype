import type { ReactNode } from "react";
import "./SectionHeading.css";

export function SectionHeading({
  eyebrow,
  title,
  description,
  action,
}: {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  action?: ReactNode;
}) {
  return (
    <div className="gr-section-heading">
      <div>
        {eyebrow && <p className="gr-section-heading__eyebrow gr-en">{eyebrow}</p>}
        <h2 className="gr-section-heading__title">{title}</h2>
        <div className="gr-section-heading__bar" aria-hidden="true">
          <span className="gr-section-heading__bar-main" />
          <span className="gr-section-heading__bar-accent" />
        </div>
        {description && <p className="gr-section-heading__desc">{description}</p>}
      </div>
      {action && <div className="gr-section-heading__action">{action}</div>}
    </div>
  );
}

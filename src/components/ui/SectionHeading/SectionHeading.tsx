import type { ReactNode } from "react";
import "./SectionHeading.css";

export function SectionHeading({
  eyebrow,
  title,
  description,
  action,
  level = "h2",
}: {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  action?: ReactNode;
  // 見出しレベル（h1は使わない）。ページの中で、この見出しが他の見出しの下にぶら下がる場合は "h3" を指定する
  level?: "h2" | "h3";
}) {
  const Title = level;
  return (
    <div className="gr-section-heading">
      <div>
        {eyebrow && <p className="gr-section-heading__eyebrow gr-en">{eyebrow}</p>}
        <Title className="gr-section-heading__title">{title}</Title>
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

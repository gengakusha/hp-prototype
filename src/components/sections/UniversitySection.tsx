import { SectionHeading } from "../SectionHeading";
import { UniversityPathCard } from "../UniversityPathCard";
import { featuredUniversities, universityGroups } from "../../data/journalIndex";
import "./UniversitySection.css";

export function UniversitySection() {
  return (
    <section id="university" className="gr-section">
      <div className="gr-container">
        <SectionHeading
          eyebrow="UNIVERSITY"
          title="大学別で探す"
          description="サマリー→概要→戦略の考え方→科目別対策→共通テストの順に、志望校ごとの学習パスをたどれます。"
        />

        <div className="gr-uni-grid">
          {featuredUniversities.map((u) => (
            <UniversityPathCard key={u.name} university={u} />
          ))}
        </div>

        <div className="gr-group-row">
          {universityGroups.map((g) => (
            <a key={g.name} href={g.href} className="gr-group-chip">
              <span className="gr-group-chip__name">{g.name}</span>
              <span className="gr-group-chip__desc">{g.description}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

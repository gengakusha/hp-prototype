import { SectionHeading } from "../../ui/SectionHeading/SectionHeading";
import { Card } from "../../ui/Card/Card";
import { Badge } from "../../ui/Badge/Badge";
import { subjects } from "../../../data/journalIndex";
import "./SubjectSection.css";

export function SubjectSection() {
  return (
    <section id="subject" className="gr-section gr-section--alt">
      <div className="gr-container">
        <SectionHeading
          eyebrow="SUBJECT"
          title="科目別で探す"
          description="戦略の考え方（共通）から、学習段階に応じた勉強法・参考書まで一気通貫でたどれます。"
        />
        <div className="gr-subject-grid">
          {subjects.map((s) => (
            <Card key={s.name} as="div">
              <a href="#" className="gr-subject-card">
                <Badge tone={s.category === "理系" ? "navy" : s.category === "文系" ? "blue" : "outline"}>
                  {s.category}
                </Badge>
                <span className="gr-subject-card__name">{s.name}</span>
              </a>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

import { SectionHeading } from "../../ui/SectionHeading/SectionHeading";
import { Card } from "../../ui/Card/Card";
import { Button } from "../../ui/Button/Button";
import { referenceBookLevels } from "../../../data/journalIndex";
import "./ReferenceBookSection.css";

export function ReferenceBookSection() {
  return (
    <section id="books" className="gr-section">
      <div className="gr-container">
        <SectionHeading
          eyebrow="REFERENCE BOOK"
          title="参考書別で探す"
          description="学習段階ごとに、いま使うべき参考書と使い方の記事をまとめました。"
          action={
            <Button variant="text" href="#">
              参考書比較記事を見る →
            </Button>
          }
        />
        <div className="gr-level-grid">
          {referenceBookLevels.map((l) => (
            <Card key={l.level} accent>
              <div className="gr-level-card">
                <p className="gr-level-card__level gr-en">{l.level}</p>
                <p className="gr-level-card__desc">{l.description}</p>
                <ul className="gr-level-card__books">
                  {l.books.map((b) => (
                    <li key={b}>
                      <a href="#">{b}</a>
                    </li>
                  ))}
                </ul>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

import { SectionHeading } from "../../../../components/ui/SectionHeading/SectionHeading";
import { Card } from "../../../../components/ui/Card/Card";
import { seasonalPicks } from "../../../../data/journalIndex";
import "./SeasonalSection.css";

export function SeasonalSection() {
  return (
    <section id="seasonal" className="gr-section">
      <div className="gr-container">
        <SectionHeading
          eyebrow="SEASONAL"
          title="季節ごとで探す（書店用）"
          description="いまの時期に何を選べばいいか、店頭でそのまま案内できる形にまとめています。"
        />
        <div className="gr-season-grid">
          {seasonalPicks.map((s) => (
            <Card key={s.season}>
              <div className="gr-season-card">
                <p className="gr-season-card__season gr-en">{s.season}</p>
                <p className="gr-season-card__focus">{s.focus}</p>
                <ul className="gr-season-card__books">
                  {s.books.map((b) => (
                    <li key={b}>{b}</li>
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

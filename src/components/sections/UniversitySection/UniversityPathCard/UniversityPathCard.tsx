import { Card } from "../../../ui/Card/Card";
import { Button } from "../../../ui/Button/Button";
import type { UniversityPath } from "../../../../data/journalIndex";
import "./UniversityPathCard.css";

export function UniversityPathCard({ university }: { university: UniversityPath }) {
  return (
    <Card accent>
      <div className="gr-uni">
        <div className="gr-uni__head">
          <h3 className="gr-uni__name">{university.name}</h3>
          <p className="gr-uni__summary">{university.summary}</p>
        </div>

        <ol className="gr-uni__path">
          <li className="gr-uni__step">
            <span className="gr-uni__dot" aria-hidden="true" />
            <a className="gr-uni__link" href={university.overview.href}>
              {university.overview.label}
            </a>
          </li>
          <li className="gr-uni__step">
            <span className="gr-uni__dot" aria-hidden="true" />
            <a className="gr-uni__link" href={university.strategy.href}>
              {university.strategy.label}
            </a>
          </li>
          {university.subjects.map((s) => (
            <li className="gr-uni__step gr-uni__step--sub" key={s.label}>
              <span className="gr-uni__dot gr-uni__dot--sub" aria-hidden="true" />
              <a className="gr-uni__link gr-uni__link--sub" href={s.href}>
                {s.label}
              </a>
            </li>
          ))}
          <li className="gr-uni__step gr-uni__step--last">
            <span className="gr-uni__dot gr-uni__dot--end" aria-hidden="true" />
            <a className="gr-uni__link" href={university.commonTest.href}>
              {university.commonTest.label}
            </a>
          </li>
        </ol>

        <div className="gr-uni__foot">
          <Button variant="text" href="#">
            {university.name}の記事をすべて見る →
          </Button>
        </div>
      </div>
    </Card>
  );
}

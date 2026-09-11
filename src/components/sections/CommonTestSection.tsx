import { SectionHeading } from "../SectionHeading";
import { Card } from "../Card";
import { Badge } from "../Badge";
import { Button } from "../Button";
import { subjects } from "../../data/journalIndex";
import "./CommonTestSection.css";

export function CommonTestSection() {
  return (
    <section id="common-test" className="gr-section gr-section--alt">
      <div className="gr-container">
        <SectionHeading eyebrow="COMMON TEST" title="共通テスト対策で探す" />
        <Card accent>
          <div className="gr-common-test">
            <div className="gr-common-test__summary">
              <Badge tone="campaign">共テ概要サマリー</Badge>
              <p>
                配点は大学・学部ごとに大きく異なりますが、対策の型は共通です。まずは戦略の考え方記事で全体像をつかみ、科目別対策・参考書ルートへ進みましょう。
              </p>
              <Button variant="text" href="#">
                戦略の考え方記事（共通）を読む →
              </Button>
            </div>
            <ul className="gr-common-test__links">
              {subjects.slice(0, 6).map((s) => (
                <li key={s.name}>
                  <a href="#">{s.name}の共通テスト対策</a>
                </li>
              ))}
            </ul>
          </div>
        </Card>
      </div>
    </section>
  );
}

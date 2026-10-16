import type { CSSProperties } from "react";
import { SectionHeading } from "../../../../components/ui/SectionHeading/SectionHeading";
import { popArticles } from "../../../../data/popArticles";
import { gradeTheme, type Grade } from "../../../../data/popIntro";
import { subjectOrder, subjectTheme } from "../../../../data/subjectTheme";
import { ArticleCard } from "./ArticleCard/ArticleCard";
import "./Timeline.css";

export function Timeline({ grade }: { grade: Grade }) {
  const articles = popArticles.filter((a) => a.grade === grade);
  const backgroundColor = gradeTheme[grade].light;

  return (
    <section id="articles" className="gr-section gr-timeline" style={{ backgroundColor }}>
      <div className="gr-container">
        <SectionHeading eyebrow="ARTICLES" title="全POP参考書一覧" description="マストバイ以外にも以下の参考書もおすすめです。" />
      </div>

      <div className="gr-timeline__subjects">
        {subjectOrder.map((subject) => {
          const subjectArticles = articles.filter((a) => a.subject === subject);
          if (subjectArticles.length === 0) return null;
          const theme = subjectTheme[subject];
          const style = {
            "--gr-subject-color": theme.color,
            "--gr-subject-light": theme.light,
          } as CSSProperties;
          return (
            <div key={subject} className="gr-timeline__subject" style={style}>
              <div className="gr-container">
                <h3 className="gr-timeline__subject-label">{subject}</h3>
                <ul className="gr-timeline__list">
                  {subjectArticles.map((a) => (
                    <ArticleCard key={a.title} article={a} />
                  ))}
                </ul>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

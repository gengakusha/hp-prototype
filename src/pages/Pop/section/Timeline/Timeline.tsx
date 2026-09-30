import type { CSSProperties } from "react";
import { SectionHeading } from "../../../../components/ui/SectionHeading/SectionHeading";
import { popArticles } from "../../../../data/popArticles";
import { gradeTheme, type Grade } from "../../../../data/popIntro";
import { subjectOrder, subjectTheme } from "../../../../data/subjectTheme";
import { ArticleCard } from "./ArticleCard/ArticleCard";
import "./Timeline.css";

// ポップに掲載した参考書の記事を、教科（英数国理社情）ごとに分けてカードで一覧表示。
// grade は Pop.tsx の学年切り替えと同じ値を受け取り、その学年の記事だけに絞り込む。
export function Timeline({ grade }: { grade: Grade }) {
  const articles = popArticles.filter((a) => a.grade === grade);
  // Intro から続く背景色を、ここでも学年のテーマカラーに合わせる
  const backgroundColor = gradeTheme[grade].light;

  return (
    <section id="articles" className="gr-section gr-timeline" style={{ backgroundColor }}>
      <div className="gr-container">
        {/* 「マストバイは一部」という説明は、Introの description（gr-section-heading__desc）側で
            「特におすすめしたい」という言い方にして、軽く伝わるようにしている。
            ここでは説明的になりすぎないよう、短い文言にとどめている。
            「POP」は、読者（高校生）には伝わらない業界用語なので使わない。 */}
        <SectionHeading eyebrow="ARTICLES" title="全POP参考書一覧" description="マストバイ以外にも以下の参考書もおすすめです。" />
      </div>

      {/* 参考書の表紙デザインが教科ごとに色分けされているのに合わせて、教科ごとにまとまりを分けている。
          .gr-container の外に置くことで、色の帯そのものは画面幅いっぱいに広がる。
          帯と帯の間には隙間（gap）があり、そこにこのセクション自体の背景色（学年の色）が見えるので、
          「今どの学年を見ているか」は帯の隙間からも分かる。
          記事が1本もない教科は表示しない（例: 高1は今のところ理科・社会・情報の選書がない） */}
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
                {/* 教科ラベルは、Timelineの見出し（h2）の下にぶら下がる内容なので h3。
                    共通の SectionHeading（h2向けの部品）は流用せず、新しく作っている。
                    見た目は SectionHeading の title（太字の大きな文字）と、その下の色つきバーを踏襲しつつ、
                    バーの色を教科の色に変えている。 */}
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

import { SectionHeading } from "../../../../components/ui/SectionHeading/SectionHeading";
import { popArticles } from "../../../../data/popArticles";
import { gradeTheme, type Grade } from "../../../../data/popIntro";
import { ArticleCard } from "./ArticleCard/ArticleCard";
import "./Timeline.css";

// ポップに掲載した参考書の記事を、カードで一覧表示。
// grade は Pop.tsx の学年切り替えと同じ値を受け取り、その学年の記事だけに絞り込む。
export function Timeline({ grade }: { grade: Grade }) {
  const articles = popArticles.filter((a) => a.grade === grade);
  // Intro から続く背景色を、ここでも学年のテーマカラーに合わせる
  const backgroundColor = gradeTheme[grade].light;

  return (
    <section id="articles" className="gr-section gr-timeline" style={{ backgroundColor }}>
      <div className="gr-container">
        <SectionHeading eyebrow="ARTICLES" title="ポップの参考書記事" description="ポップに掲載した参考書の記事一覧です。" />
        <ul className="gr-timeline__list">
          {articles.map((a) => (
            <ArticleCard key={a.title} article={a} />
          ))}
        </ul>
      </div>
    </section>
  );
}

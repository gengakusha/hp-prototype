import { SectionHeading } from "../../../../components/ui/SectionHeading/SectionHeading";
import { popArticles } from "../../../../data/popArticles";
import { ArticleCard } from "./ArticleCard/ArticleCard";
import "./Timeline.css";

// ポップに掲載した参考書の記事を、カードで一覧表示
export function Timeline() {
  return (
    <section id="articles" className="gr-section gr-timeline">
      <div className="gr-container">
        <SectionHeading eyebrow="ARTICLES" title="ポップ掲載の参考書記事" description="ポップに掲載した参考書の記事一覧です。" />
        <ul className="gr-timeline__list">
          {popArticles.map((a) => (
            <ArticleCard key={a.title} article={a} />
          ))}
        </ul>
      </div>
    </section>
  );
}

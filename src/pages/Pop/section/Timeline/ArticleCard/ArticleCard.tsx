import type { PopArticle } from "../../../../../data/popArticles";
import "./ArticleCard.css";

// 実サイト（genronkai.com/press_category/media/）の .g-press-card を参考にした記事カード。
// カード全体がリンク: サムネイル → カテゴリ・日付 → タイトル の順に縦に並ぶ。
export function ArticleCard({ article }: { article: PopArticle }) {
  return (
    <li className="gr-article-card">
      <a href={article.href} className="gr-article-card__link">
        <div className="gr-article-card__img">
          <img src={article.image ?? "/no_picture.jpg"} alt="" width={960} height={540} loading="lazy" decoding="async" />
        </div>
        <div className="gr-article-card__meta">
          <ul className="gr-article-card__categories">
            {article.categories.map((c) => (
              <li key={c}>{c}</li>
            ))}
          </ul>
          <time className="gr-article-card__date" dateTime={article.date.replace(/\./g, "-")}>
            {article.date}
          </time>
        </div>
        <h3 className="gr-article-card__title">{article.title}</h3>
      </a>
    </li>
  );
}

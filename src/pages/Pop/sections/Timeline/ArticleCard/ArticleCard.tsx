import type { PopArticle } from "../../../../../data/popArticles";
import { gradeTheme } from "../../../../../data/popIntro";
import { Badge } from "../../../../../components/ui/Badge/Badge";
import "./ArticleCard.css";

export function ArticleCard({ article }: { article: PopArticle }) {
  const tone = gradeTheme[article.grade].tone;

  return (
    <li className="gr-article-card">
      <a href={article.href} className="gr-article-card__link">
        <div className="gr-article-card__img">
          <img src={article.image ?? "/no_picture.jpg"} alt="" width={960} height={540} loading="lazy" decoding="async" />
        </div>
        <div className="gr-article-card__meta">
          <ul className="gr-article-card__tags">
            <li>
              <Badge tone={tone} className="gr-tag">
                {article.grade}
              </Badge>
            </li>
            {article.categories.map((c) => (
              <li key={c}>
                <Badge tone={tone} className="gr-tag">
                  {c}
                </Badge>
              </li>
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

import type { PopArticle } from "../../../../../data/popArticles";
import { gradeTheme } from "../../../../../data/popIntro";
import { Badge } from "../../../../../components/ui/Badge/Badge";
import { LinkCard } from "../../../../../components/ui/LinkCard/LinkCard";
import { Thumbnail } from "../../../../../components/ui/Thumbnail/Thumbnail";
import "./ArticleCard.css";

export function ArticleCard({ article }: { article: PopArticle }) {
  const tone = gradeTheme[article.grade].tone;

  return (
    <li className="gr-article-card">
      <LinkCard href={article.href}>
        <Thumbnail src={article.image} className="gr-article-card__img" />
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
      </LinkCard>
    </li>
  );
}

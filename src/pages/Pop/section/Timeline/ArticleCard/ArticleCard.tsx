import type { PopArticle } from "../../../../../data/popArticles";
import { gradeTheme } from "../../../../../data/popIntro";
import { Badge } from "../../../../../components/ui/Badge/Badge";
import "./ArticleCard.css";

// 実サイト（genronkai.com/press_category/media/）の .g-press-card を参考にした記事カード。
// カード全体がリンク: サムネイル → 学年・カテゴリ・日付 → タイトル の順に縦に並ぶ。
export function ArticleCard({ article }: { article: PopArticle }) {
  // タグの色は、記事自身が持つ学年（article.grade）のテーマカラーに合わせる
  const tone = gradeTheme[article.grade].tone;

  return (
    <li className="gr-article-card">
      <a href={article.href} className="gr-article-card__link">
        <div className="gr-article-card__img">
          <img src={article.image ?? "/no_picture.jpg"} alt="" width={960} height={540} loading="lazy" decoding="async" />
        </div>
        <div className="gr-article-card__meta">
          <ul className="gr-article-card__tags">
            {/* 学年タグ。学年を切り替えたときに絞り込みが効いているとわかるよう、カテゴリタグの前に置く。
                学年タグもカテゴリタグも、同じ Badge（.gr-tag で小さくしたもの）で統一し、色は学年のテーマカラーに揃えている */}
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

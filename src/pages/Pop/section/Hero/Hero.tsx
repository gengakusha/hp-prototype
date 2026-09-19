import { Button } from "../../../../components/ui/Button/Button";
import { PageIdx } from "../../../../components/ui/PageIdx/PageIdx";
import "./Hero.css";

const quickLinks = [
  { label: "ジャーナルTOP", href: "/" },
  { label: "大学別", href: "#university" },
  { label: "科目別", href: "#subject" },
  { label: "参考書別", href: "#books" },
  { label: "共通テスト", href: "#common-test" },
  // { label: "書店ポップ", href: "/pop" },   // 自コンテンツは非表示
];

export function Hero() {
  return (
    <section className="gr-hero">
      <div className="gr-container gr-hero__inner">
        <p className="gr-hero__eyebrow gr-en">GENRONKAI JOURNAL</p>
        <h1 className="gr-hero__title">
          2026冬
          <br /> 
          現論会最強参考書シリーズ
        </h1>
        <p className="gr-hero__lead">
            popページの説明〜
        </p>

        <div className="gr-hero__quicklinks" aria-label="索引のカテゴリ">
          {quickLinks.map((q) => (
            <a key={q.label} href={q.href} className="gr-hero__chip">
              {q.label}
            </a>
          ))}
        </div>
      </div>
      <PageIdx />
    </section>
  );
}

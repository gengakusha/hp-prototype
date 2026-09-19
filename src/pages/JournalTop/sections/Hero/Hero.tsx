import { Button } from "../../../../components/ui/Button/Button";
import "./Hero.css";

const quickLinks = [
  // { label: "ジャーナルTOP", href: "/" }, // 自コンテンツは非表示
  { label: "大学別", href: "#university" },
  { label: "科目別", href: "#subject" },
  { label: "参考書別", href: "#books" },
  { label: "共通テスト", href: "#common-test" },
  { label: "書店ポップ", href: "/pop" },   
];

export function Hero() {
  return (
    <section className="gr-hero">
      <div className="gr-container gr-hero__inner">
        <p className="gr-hero__eyebrow gr-en">GENRONKAI JOURNAL</p>
        <h1 className="gr-hero__title">
          迷わず探せる、
          <br />
          現論会ジャーナルの索引。（仮）
        </h1>
        <p className="gr-hero__lead">
          大学別・科目別・参考書別・共通テスト・季節ごと。知りたいことから、最短ルートで記事にたどりつけます。
        </p>

        <div className="gr-hero__quicklinks" aria-label="索引のカテゴリ">
          {quickLinks.map((q) => (
            <a key={q.label} href={q.href} className="gr-hero__chip">
              {q.label}
            </a>
          ))}
        </div>

        <div className="gr-hero__actions">
          <Button
            variant="cta"
            href="https://genronkai.com/free-consultation/"
            target="_blank"
            rel="noreferrer"
          >
            無料受験相談を予約する
          </Button>
          <Button
            variant="secondary"
            href="https://genronkai.com/request-information/"
            target="_blank"
            rel="noreferrer"
          >
            資料を請求する
          </Button>
        </div>
      </div>
    </section>
  );
}

import { useState } from "react";
import type { CSSProperties } from "react";
import { Header } from "../../components/layout/Header/Header";
import { Hero } from "./section/Hero/Hero";
import { Intro } from "./section/Intro/Intro";
import { Timeline } from "./section/Timeline/Timeline";
import { Footer } from "../../components/layout/Footer/Footer";
import { FloatingCta } from "../../components/layout/FloatingCta/FloatingCta";
import { gradeTheme, type Grade } from "../../data/popIntro";
import "../../styles/global.css";
import "./Pop.css";

const grades: Grade[] = ["高1", "高2", "高3"];

export function Pop() {
  const [grade, setGrade] = useState<Grade>(grades[0]);
  return (
    <div className="gr-page">
      <Header />
      <main>
        <Hero />

        {/* 実サイトの .g-mission（ヘッダー直後の、写真もボタンもない文章だけのセクション）を参考にした説明。
            中央の大きな一文は .g-strengths-lead__copy を参考にしている。
            あちらは <p> タグで、見出し(h1〜h4)の大きさのルールにとらわれず、
            24px→56pxという独自の大きさ・青字・カギ括弧の飾りを付けている。ここでも同じ考え方で作っている。 */}
        <div className="gr-container gr-pop-mission">
          <p className="gr-pop-mission__eyebrow gr-en">BOOK GUIDE</p>
          <p className="gr-pop-mission__quote">学年に合った一冊で、最短の合格へ</p>
          <p className="gr-pop-mission__desc">学年ごとに、今いちばん伸びる参考書と解説記事だけを厳選しました。</p>
        </div>

        {/* 文章だけでなく、ボタンも中央揃えにして「ひとつの塊」に見えるようにしている */}
        <div className="gr-container gr-pop-grade-switch" role="group" aria-label="学年">
          {/* 見た目は、合格実績カードの「RECORD 02」ラベル（Badge）と同じ斜めピル型を、
              押しやすい大きさに広げて流用している。色は常にその学年自身のテーマカラーで、
              選ばれているものだけ塗りつぶす（他はその色の輪郭線のみ） */}
          {grades.map((g) => {
            const selected = g === grade;
            const style = { "--gr-pop-grade-color": gradeTheme[g].color } as CSSProperties;
            const toneClass = selected ? `gr-badge--${gradeTheme[g].tone}` : "gr-pop-grade-badge--muted";
            return (
              <button
                key={g}
                type="button"
                className={`gr-badge gr-pop-grade-badge ${toneClass}`}
                style={style}
                aria-pressed={selected}
                onClick={() => setGrade(g)}
              >
                <span className="gr-badge__label">{g}向け</span>
              </button>
            );
          })}
        </div>

        <Intro grade={grade} />
        <Timeline grade={grade} />
      </main>
      <Footer />
      <FloatingCta />
    </div>
  );
}

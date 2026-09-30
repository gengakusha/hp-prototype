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
          {/* <p className="gr-pop-mission__eyebrow gr-en">BOOK GUIDE</p> */}
          <p className="gr-pop-mission__quote">学年に合った一冊で、最短の合格へ</p>
          <p className="gr-pop-mission__desc">
            {/* 書店で参考書をお選びいただき、ありがとうございます。<br /> */}
            この時期に今いちばん伸びる参考書と解説記事だけを厳選しました。
            < br/>
            
          </p>
        </div>

        {/* 文章だけでなく、ボタンも中央揃えにして「ひとつの塊」に見えるようにしている */}
        <div className="gr-container gr-pop-grade-switch" role="group" aria-label="学年">
          {/* タグ（Badge、斜めの平行四辺形）と同じ形だと紛らわしいので、Badgeへの依存はやめ、
              実サイトのボタン（.g-header-school など）と同じ「完全な丸みを帯びたピル型」にしている。
              色は常にその学年自身のテーマカラーで、選ばれているものだけ塗りつぶす（他はその色の輪郭線のみ） */}
          {grades.map((g) => {
            const selected = g === grade;
            const style = { "--gr-pop-grade-color": gradeTheme[g].color } as CSSProperties;
            return (
              <button
                key={g}
                type="button"
                className={`gr-pop-grade-badge${selected ? " gr-pop-grade-badge--selected" : ""}`}
                style={style}
                aria-pressed={selected}
                onClick={() => setGrade(g)}
              >
                {/* 実サイトの .g-button-bule（塗りつぶしボタン＋右端の丸い矢印）を参考にした「押せる内部リンク」の見た目。
                    実サイトのアイコン（button_arrow.svg）は色が固定（白い丸＋青い矢印）だが、
                    このボタンは学年ごとに色が変わるため、同じ見た目をCSSで再現し、色をその都度切り替えている */}
                <span className="gr-pop-grade-badge__label">
                  <span>{g}向け</span>
                  <span className="gr-pop-grade-badge__arrow" aria-hidden="true" />
                </span>
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

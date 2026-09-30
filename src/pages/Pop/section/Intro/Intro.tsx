import { SectionHeading } from "../../../../components/ui/SectionHeading/SectionHeading";
import { popIntroByGrade, gradeTheme, type Grade, type PopIntroData } from "../../../../data/popIntro";
import { BookScroller } from "./BookScroller/BookScroller";
import "./Intro.css";
import "../../../../styles/global.css";

// Intro は「設計図」、grade は「この設計図から、どの学年のインスタンスを作るか」を決める引数。
//   <Intro grade="高2" />  … 高2用のインスタンス（popIntroByGrade["高2"] の内容で表示される）
//   <Intro grade="高1" />  … 高1用のインスタンス
// title / lead / image / books を個別に渡すと、その学年の初期値だけ上書きできる
// （= コンストラクタのデフォルト引数を、呼び出し側で上書きするのと同じイメージ）。
type IntroProps = Partial<PopIntroData> & { grade: Grade };

export function Intro({ grade, eyebrow, title, lead, image, books }: IntroProps) {
  const base = popIntroByGrade[grade];
  const popImage = image ?? base.image;
  const popBooks = books ?? base.books;
  // 背景は、学年のテーマカラーをごく薄くした色（例: 高1なら薄い水色）
  const backgroundColor = gradeTheme[grade].light;

  return (
    <section className="gr-Intro" style={{ backgroundColor }}>
      <div className="gr-container">
        {/* 見出し部分は、Timeline など他のセクションと同じ gr-section-heading（SectionHeading）を使っている */}
        <SectionHeading eyebrow={eyebrow ?? base.eyebrow} title={title ?? base.title} description={lead ?? base.lead} />
      </div>

      <div className="gr-container gr-Intro__pop-image">
        {/* 店頭POPの実物画像。クリック/タップで元画像を拡大できる。
            ⚠️ 高1・高3はまだ専用のPOP画像がなく、popIntro.ts の設定により高2の画像を仮置きしている */}
        <a
          className="gr-Intro__pop-image-link"
          href={popImage.original}
          target="_blank"
          rel="noreferrer"
          aria-label="店頭の掲示の実物画像を拡大して見る（新しいタブで開きます）"
        >
          <img
            src={popImage.small}
            srcSet={`${popImage.small} 1200w, ${popImage.large} 2400w`}
            sizes="(min-width: 1120px) 1072px, calc(100vw - 40px)"
            width={popImage.width}
            height={popImage.height}
            alt={popImage.alt}
            loading="lazy"
            decoding="async"
          />
        </a>
      </div>

      <div className="gr-container gr-Intro__scroller-area">
        <BookScroller grade={grade} books={popBooks} />
      </div>
    </section>
  );
}

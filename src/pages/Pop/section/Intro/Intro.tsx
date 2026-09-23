import { popIntroByGrade, type Grade, type PopIntroData } from "../../../../data/popIntro";
import { BookScroller } from "./BookScroller/BookScroller";
import "./Intro.css";
import "../../../../styles/global.css";

// Intro は「設計図」、grade は「この設計図から、どの学年のインスタンスを作るか」を決める引数。
//   <Intro grade="高2" />  … 高2用のインスタンス（popIntroByGrade["高2"] の内容で表示される）
//   <Intro grade="高1" />  … 高1用のインスタンス
// title / lead / image / books を個別に渡すと、その学年の初期値だけ上書きできる
// （= コンストラクタのデフォルト引数を、呼び出し側で上書きするのと同じイメージ）。
type IntroProps = Partial<PopIntroData> & { grade: Grade };

export function Intro({ grade, title, lead, image, books }: IntroProps) {
  const base = popIntroByGrade[grade];
  const popImage = image ?? base.image;
  const popBooks = books ?? base.books;

  return (
    <section className="gr-Intro">
      <div className="gr-container gr-Intro__inner">
        <h2 className="gr-Intro__title">{title ?? base.title}</h2>
        <p className="gr-Intro__lead">{lead ?? base.lead}</p>
        {/* POPの実物（一覧画像）は、控えめなテキストリンクとして残している */}
        <a className="gr-Intro__original-link" href={popImage.original} target="_blank" rel="noreferrer">
          店頭POPの実物画像を見る ↗
        </a>
      </div>

      <div className="gr-container gr-Intro__scroller-area">
        <BookScroller books={popBooks} />
      </div>
    </section>
  );
}

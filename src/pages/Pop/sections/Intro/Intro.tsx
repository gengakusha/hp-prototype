import { SectionHeading } from "../../../../components/ui/SectionHeading/SectionHeading";
import { popIntroByGrade, gradeTheme, type Grade, type PopIntroData } from "../../../../data/popIntro";
import { BookScroller } from "./BookScroller/BookScroller";
import "./Intro.css";
import "../../../../styles/global.css";

type IntroProps = Partial<PopIntroData> & { grade: Grade };

export function Intro({ grade, eyebrow, title, lead, image, books }: IntroProps) {
  const base = popIntroByGrade[grade];
  const popImage = image ?? base.image;
  const popBooks = books ?? base.books;
  const backgroundColor = gradeTheme[grade].light;

  return (
    <section className="gr-Intro" style={{ backgroundColor }}>
      <div className="gr-container">
        <SectionHeading eyebrow={eyebrow ?? base.eyebrow} title={title ?? base.title} description={lead ?? base.lead} />
      </div>

      <div className="gr-container gr-Intro__pop-image">
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

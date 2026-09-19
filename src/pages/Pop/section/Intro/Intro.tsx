import { Button } from "../../../../components/ui/Button/Button";
import { PageIdx } from "../../../../components/ui/PageIdx/PageIdx";
import "./Intro.css";
import "../../../../styles/global.css";

const popList = {
  original: "/一覧用書店POP.jpg",
  small: "/pop-list-1200.jpg",
  large: "/pop-list-2400.jpg",
  width: 4721, // 元画像の縦横
  height: 3367,
  alt: "現論会「高校2年生向け マストバイ参考書10選」の一覧",
};

export function Intro() {
  return (
    <section className="gr-Intro">
      <div className="gr-container gr-Intro__inner">
        <h2 className="gr-Intro__title">
          高校2年生向け マストバイ参考書10選
        </h2>
      </div>

      <figure className="gr-container gr-Intro__figure">
        <a
          className="gr-Intro__figure-link"
          href={popList.original}
          target="_blank"
          rel="noreferrer"
          aria-label="一覧画像を拡大して見る（新しいタブで開きます）"
        >
          <img
            className="gr-Intro__img"
            src={popList.small}
            srcSet={`${popList.small} 1200w, ${popList.large} 2400w`}
            sizes="(min-width: 1120px) 1072px, calc(100vw - 40px)"
            width={popList.width}
            height={popList.height}
            alt={popList.alt}
            loading="lazy"
            decoding="async"
          />
        </a>
        <figcaption className="gr-Intro__caption">
          {/* <span className="gr-Intro__hint">スマホでは、画像をタップすると大きな画像で読めます。</span> */}
          <Button variant="primary" href={popList.original} target="_blank" rel="noreferrer">
            拡大して見る
          </Button>
        </figcaption>
      </figure>
    </section>
  );
}

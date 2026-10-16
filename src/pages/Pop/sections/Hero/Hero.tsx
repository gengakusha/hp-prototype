import "./Hero.css";

const wordmark = "BOOK GUIDE";
const mainImage = "/image.png";

export function Hero() {
  return (
    <section className="gr-pop-hero">
      <div className="gr-pop-hero__stage">
        <svg className="gr-pop-hero__stripes" viewBox="0 0 1440 948" preserveAspectRatio="none" aria-hidden="true">
          <defs>
            <linearGradient id="gr-pop-hero-stripe" gradientUnits="userSpaceOnUse" x1="0" y1="480" x2="0" y2="920">
              <stop offset="0" stopColor="#c4dfea" />
              <stop offset="1" stopColor="#ffffff" />
            </linearGradient>
          </defs>
          <polygon points="0,477 471,948 405,948 0,543" fill="url(#gr-pop-hero-stripe)" />
          <polygon points="0,575 373,948 345,948 0,603" fill="url(#gr-pop-hero-stripe)" />
        </svg>

        <img className="gr-pop-hero__main" src={mainImage} alt="" width={5692} height={3200} />
        <p className="gr-pop-hero__wordmark gr-en" aria-hidden="true">
          {wordmark}
        </p>

        <p className="gr-pop-hero__eyebrow">2026冬</p>
        <h1 className="gr-pop-hero__title">
          現論会最強
          <br />
          POP参考書シリーズ
        </h1>
        <p className="gr-pop-hero__submessage">その一冊を使いこなそう</p>
        <p className="gr-pop-hero__arrow" aria-hidden="true">
          <img src="/pop-mv-arrow-pc.svg" alt="" width={24} height={188} />
        </p>
      </div>
    </section>
  );
}

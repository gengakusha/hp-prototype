import "./Hero.css";
// 背景の飾り文字。ブランド名ではなく、このページ自体を端的に表す語にしている
// （下の gr-pop-mission セクションの eyebrow「BOOK GUIDE」と同じ語で揃えている）。
const wordmark = "BOOK GUIDE";
const mainImage = { pc: "/image.png", sp: "/pop-mv-main-sp.jpg" };
// const subImage = "/pop-mv-sub.jpg";

export function Hero() {
  return (
    <section className="gr-pop-hero">
      <div className="gr-pop-hero__stage">
        {/* 斜めの帯（PCのみ）。下に向かって白くなる */}
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

        <picture>
          <source media="(min-width: 1200px)" srcSet={mainImage.pc} />
          <img className="gr-pop-hero__main" src={mainImage.sp} alt="" width={580} height={720} />
        </picture>
        {/* <img className="gr-pop-hero__sub" src={subImage} alt="" width={380} height={330} /> */}
        <p className="gr-pop-hero__wordmark gr-en" aria-hidden="true">
          {wordmark}
        </p>

        <p className="gr-pop-hero__eyebrow">2026冬</p>
        <h1 className="gr-pop-hero__title">
          現論会最強
          <br />
          POP参考書シリーズ
        </h1>
        {/* タイトルのサブメッセージ。実サイトの .g-mission（大見出しの下に、ひとまわり小さい文章を添える構成）を参考にしている */}
        <p className="gr-pop-hero__submessage">その一冊を使いこなそう</p>
        <p className="gr-pop-hero__arrow" aria-hidden="true">
          <picture>
            <source media="(max-width: 767px)" srcSet="/pop-mv-arrow-sp.svg" width={19} height={138} />
            <source media="(min-width: 768px)" srcSet="/pop-mv-arrow-pc.svg" width={24} height={188} />
            <img src="/pop-mv-arrow-pc.svg" alt="" width={24} height={188} />
          </picture>
        </p>
      </div>
    </section>
  );
}

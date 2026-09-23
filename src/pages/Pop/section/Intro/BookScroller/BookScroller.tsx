import { useEffect, useRef, useState } from "react";
import type { PopBook } from "../../../../../data/popIntro";
import "./BookScroller.css";

// 実サイト（genronkai.com）トップの .g-record（合格実績のスライダー）を参考にした、
// 参考書の横スクロールTL。仕組みは同じ「横スクロール + 前後ボタン + 進捗バー」だが、
// Swiper 等のライブラリは使わず、ブラウザ標準のスクロール機能だけで作っている。
//
// ここで初めて React の useRef / useState を使っている。
//   trackRef … スクロールする要素そのものを直接つかむための参照（ボタンで scrollBy するのに必要）
//   bar      … 進捗バー（下の水色のバー）の表示に使う「今どこまでスクロールしたか」の状態
export function BookScroller({ books }: { books: PopBook[] }) {
  const trackRef = useRef<HTMLUListElement>(null);
  const [bar, setBar] = useState({ widthPct: 100, leftPct: 0, atStart: true, atEnd: true });

  const updateBar = () => {
    const el = trackRef.current;
    if (!el) return;
    const { scrollWidth, clientWidth, scrollLeft } = el;
    const scrollable = scrollWidth - clientWidth;
    const widthPct = Math.min(100, (clientWidth / scrollWidth) * 100);
    const leftPct = scrollable <= 0 ? 0 : (scrollLeft / scrollable) * (100 - widthPct);
    setBar({ widthPct, leftPct, atStart: scrollLeft <= 1, atEnd: scrollLeft >= scrollable - 1 });
  };

  // 表示直後は横幅がまだ分からないので、マウント時と画面幅が変わったときに計算し直す
  useEffect(() => {
    updateBar();
    window.addEventListener("resize", updateBar);
    return () => window.removeEventListener("resize", updateBar);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [books]);

  const scrollByCard = (direction: 1 | -1) => {
    const el = trackRef.current;
    if (!el) return;
    const card = el.querySelector<HTMLElement>(".gr-book-card");
    const gap = 16;
    const step = (card?.offsetWidth ?? 200) + gap;
    el.scrollBy({ left: step * direction, behavior: "smooth" });
  };

  return (
    <div className="gr-book-scroller">
      <button
        type="button"
        className="gr-book-scroller__arrow gr-book-scroller__arrow--prev"
        onClick={() => scrollByCard(-1)}
        disabled={bar.atStart}
        aria-label="前の参考書へ"
      >
        ‹
      </button>

      <ul className="gr-book-scroller__track" ref={trackRef} onScroll={updateBar}>
        {books.map((book) => (
          <li className="gr-book-card" key={book.title}>
            <a className="gr-book-card__link" href={book.href}>
              <div className="gr-book-card__thumb">
                <img src={book.image ?? "/no_picture.jpg"} alt="" width={960} height={540} loading="lazy" decoding="async" />
              </div>
              <span className="gr-book-card__tag">{book.category}</span>
              <p className="gr-book-card__title">{book.title}</p>
            </a>
          </li>
        ))}
      </ul>

      <button
        type="button"
        className="gr-book-scroller__arrow gr-book-scroller__arrow--next"
        onClick={() => scrollByCard(1)}
        disabled={bar.atEnd}
        aria-label="次の参考書へ"
      >
        ›
      </button>

      <div className="gr-book-scroller__bar" aria-hidden="true">
        <span className="gr-book-scroller__bar-drag" style={{ width: `${bar.widthPct}%`, transform: `translateX(${bar.leftPct}%)` }} />
      </div>
    </div>
  );
}

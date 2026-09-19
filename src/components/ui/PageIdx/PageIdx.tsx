import "./PageIdx.css";

type PageIdxItem = {
  label: string;
  href?: string; // href がない項目は「現在のページ」としてリンクにしない
};

const defaultItems: PageIdxItem[] = [
  { label: "Home", href: "https://genronkai.com/" },
  { label: "現論会ジャーナル", href: "/" },
  { label: "現論会最強参考書シリーズ2026冬" },
];

// パンくずリスト 
export function PageIdx({ items = defaultItems }: { items?: PageIdxItem[] }) {
  return (
    <nav className="gr-pageidx" aria-label="パンくずリスト">
      <ol className="gr-container gr-pageidx__list">
        {items.map((item) => (
          <li key={item.label} className="gr-pageidx__item">
            {item.href ? (
              <a href={item.href} className="gr-pageidx__link">
                {item.label}
              </a>
            ) : (
              <span aria-current="page">{item.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}

// ポップ（一覧用書店POP）に掲載した参考書の記事一覧。Pop ページの Timeline に表示される。
// ⚠️ 今はダミーデータ（タイトル・日付・リンク先は仮）。実際の記事に差し替えること。

export type PopArticle = {
  title: string;
  href: string; // 記事のURL
  date: string; // 表示用の日付（例: "2026.09.19"）
  categories: string[]; // カテゴリ（複数可）。カードの左上にラベルで表示
  image?: string; // サムネイル画像。省略すると現論会の代替画像になる
};

export const popArticles: PopArticle[] = [
  { title: "関正生の英文法 POLARIS 1 の使い方（仮）", href: "#", date: "2026.09.19", categories: ["文法"] },
  { title: "関正生の The Essentials 英文法 必修英文100 の使い方（仮）", href: "#", date: "2026.09.18", categories: ["文法"] },
  { title: "関正生の The Essentials 英語長文 必修英文100 の使い方（仮）", href: "#", date: "2026.09.17", categories: ["解釈"] },
  { title: "重要古文単語315 の使い方（仮）", href: "#", date: "2026.09.16", categories: ["単語"] },
  { title: "BIBLIA2000 の使い方（仮）", href: "#", date: "2026.09.15", categories: ["漢字・語彙"] },
  { title: "八澤のたった6時間で古典文法 の使い方（仮）", href: "#", date: "2026.09.14", categories: ["文法"] },
  { title: "数学I・A 基礎問題精講 の使い方（仮）", href: "#", date: "2026.09.13", categories: ["解法暗記"] },
  { title: "1対1対応の演習 の使い方（仮）", href: "#", date: "2026.09.12", categories: ["解法暗記"] },
  { title: "柳生好之の現代文クロスレクチャー の使い方（仮）", href: "#", date: "2026.09.11", categories: ["長文読解・解法"] },
  { title: "ゼロから覚醒 はじめよう現代文 の使い方（仮）", href: "#", date: "2026.09.10", categories: ["現代文"] },
];

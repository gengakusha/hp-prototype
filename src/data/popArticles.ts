// ポップに掲載した参考書の記事一覧。
// ⚠️ マストバイ（popIntro.ts の books、学年ごとの一番のおすすめ）だけでなく、
//    POPで紹介している参考書は他にもある。この一覧は、マストバイを含む「全参考書」の解説記事が対象。
//    そのため、件数は popIntro.ts の books（マストバイ）より多くしてある。
// ⚠️ 教科（subject）は、Timeline で英数国理社情の6つに分けて表示するために使う。
//    高1・高3は、まだ理科・社会・情報の選書が薄いのでダミーを少なめに足している。実際の選書に差し替えること。

import type { Grade } from "./popIntro";
import type { Subject } from "./subjectTheme";

export type PopArticle = {
  title: string;
  href: string; // 記事のURL
  date: string; // 表示用の日付（例: "2026.09.19"）
  grade: Grade; // どの学年向けの記事か（カード左上のタグと、学年切り替えの絞り込みに使う）
  subject: Subject; // 教科（英語・数学・国語・理科・社会・情報）。Timeline で教科ごとに分けるのに使う
  categories: string[]; // カテゴリ（複数可）。カードの左上にラベルで表示
  image?: string; // サムネイル画像。省略すると現論会の代替画像になる
};

export const popArticles: PopArticle[] = [
  // 高2向け（一覧用書店POP.jpg の10冊に対応）
  { title: "関正生の英文法 POLARIS 1 の使い方（仮）", href: "#", date: "2026.09.19", grade: "高2", subject: "英語", categories: ["文法"] },
  { title: "関正生の The Essentials 英文法 必修英文100 の使い方（仮）", href: "#", date: "2026.09.18", grade: "高2", subject: "英語", categories: ["文法"] },
  { title: "関正生の The Essentials 英語長文 必修英文100 の使い方（仮）", href: "#", date: "2026.09.17", grade: "高2", subject: "英語", categories: ["解釈"] },
  { title: "重要古文単語315 の使い方（仮）", href: "#", date: "2026.09.16", grade: "高2", subject: "国語", categories: ["単語"] },
  { title: "BIBLIA2000 の使い方（仮）", href: "#", date: "2026.09.15", grade: "高2", subject: "国語", categories: ["漢字・語彙"] },
  { title: "八澤のたった6時間で古典文法 の使い方（仮）", href: "#", date: "2026.09.14", grade: "高2", subject: "国語", categories: ["文法"] },
  { title: "数学I・A 基礎問題精講 の使い方（仮）", href: "#", date: "2026.09.13", grade: "高2", subject: "数学", categories: ["解法暗記"] },
  { title: "1対1対応の演習 の使い方（仮）", href: "#", date: "2026.09.12", grade: "高2", subject: "数学", categories: ["解法暗記"] },
  { title: "柳生好之の現代文クロスレクチャー の使い方（仮）", href: "#", date: "2026.09.11", grade: "高2", subject: "国語", categories: ["長文読解・解法"] },
  { title: "ゼロから覚醒 はじめよう現代文 の使い方（仮）", href: "#", date: "2026.09.10", grade: "高2", subject: "国語", categories: ["現代文"] },
  // ここから先は、マストバイ10冊には入っていない、POP掲載の他の参考書（仮）
  { title: "英文法シンプルルール100 の使い方（仮）", href: "#", date: "2026.09.09", grade: "高2", subject: "英語", categories: ["文法"] },
  { title: "Rise & Realize 音読英文法 の使い方（仮）", href: "#", date: "2026.09.08", grade: "高2", subject: "英語", categories: ["音読"] },
  { title: "評論文キーワード読解 の使い方（仮）", href: "#", date: "2026.09.07", grade: "高2", subject: "国語", categories: ["現代文"] },
  { title: "数学I・A 標準問題精講 の使い方（仮）", href: "#", date: "2026.09.06", grade: "高2", subject: "数学", categories: ["解法暗記"] },
  // ⚠️ 理科・社会・情報はダミー（実際の選書が決まったら差し替えること）
  { title: "宇宙一わかりやすい高校物理 の使い方（仮）", href: "#", date: "2026.09.05", grade: "高2", subject: "理科", categories: ["物理"] },
  { title: "詳説日本史ノート の使い方（仮）", href: "#", date: "2026.09.04", grade: "高2", subject: "社会", categories: ["日本史"] },
  { title: "やさしくわかる情報I の使い方（仮）", href: "#", date: "2026.09.03", grade: "高2", subject: "情報", categories: ["情報I"] },

  // 高1向け（popIntro.ts の 高1.books＝マストバイと同じ選書＋他の参考書。実際の記事に差し替えること）
  { title: "英単語ターゲット1200 の使い方（仮）", href: "#", date: "2026.09.09", grade: "高1", subject: "英語", categories: ["単語"] },
  { title: "大岩のいちばんはじめの英文法 の使い方（仮）", href: "#", date: "2026.09.08", grade: "高1", subject: "英語", categories: ["文法"] },
  { title: "中学数学から高校数学への橋渡し の使い方（仮）", href: "#", date: "2026.09.07", grade: "高1", subject: "数学", categories: ["解法暗記"] },
  { title: "システム英単語 の使い方（仮）", href: "#", date: "2026.09.06", grade: "高1", subject: "英語", categories: ["単語"] },
  { title: "現代文キーワード読解 の使い方（仮）", href: "#", date: "2026.09.05", grade: "高1", subject: "国語", categories: ["現代文"] },
  // ここから先は、マストバイには入っていない、POP掲載の他の参考書（仮）
  { title: "ターゲット中学英単語1800 の使い方（仮）", href: "#", date: "2026.09.04", grade: "高1", subject: "英語", categories: ["単語"] },
  { title: "くもんの中学基礎がため100% 数学 の使い方（仮）", href: "#", date: "2026.09.03", grade: "高1", subject: "数学", categories: ["解法暗記"] },
  { title: "田村のやさしく語る現代文 の使い方（仮）", href: "#", date: "2026.09.02", grade: "高1", subject: "国語", categories: ["現代文"] },

  // 高3向け（popIntro.ts の 高3.books＝マストバイと同じ選書＋他の参考書。実際の記事に差し替えること）
  { title: "共通テスト実戦問題集 の使い方（仮）", href: "#", date: "2026.09.04", grade: "高3", subject: "英語", categories: ["共通テスト"] },
  { title: "赤本 志望校の過去問 の使い方（仮）", href: "#", date: "2026.09.03", grade: "高3", subject: "数学", categories: ["過去問"] },
  { title: "世界一わかりやすい 英作文 の使い方（仮）", href: "#", date: "2026.09.02", grade: "高3", subject: "英語", categories: ["英作文"] },
  { title: "直前まで使える 一問一答 の使い方（仮）", href: "#", date: "2026.09.01", grade: "高3", subject: "社会", categories: ["直前対策"] },
  { title: "過去問ノート総復習 の使い方（仮）", href: "#", date: "2026.08.31", grade: "高3", subject: "国語", categories: ["過去問"] },
  // ここから先は、マストバイには入っていない、POP掲載の他の参考書（仮）
  { title: "英作文ハイパートレーニング の使い方（仮）", href: "#", date: "2026.08.30", grade: "高3", subject: "英語", categories: ["英作文"] },
  { title: "世界史Bターゲット4000 の使い方（仮）", href: "#", date: "2026.08.29", grade: "高3", subject: "社会", categories: ["一問一答"] },
  { title: "過去問演習講座 の使い方（仮）", href: "#", date: "2026.08.28", grade: "高3", subject: "理科", categories: ["過去問"] },
  // ⚠️ 情報はダミー（実際の選書が決まったら差し替えること）
  { title: "共通テスト情報Iの基礎徹底演習 の使い方（仮）", href: "#", date: "2026.08.27", grade: "高3", subject: "情報", categories: ["情報I"] },
];

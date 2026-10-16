import type { Grade } from "./popIntro";
import type { Subject } from "./subjectTheme";

export type PopArticle = {
  book: string;
  title: string;
  href: string;
  date: string;
  grade: Grade;
  subject: Subject;
  categories: string[];
  image?: string;
  mustBuy?: boolean;
};

export const popArticles: PopArticle[] = [
  { book: "関正生の英文法 POLARIS 1", title: "関正生の英文法 POLARIS 1 の使い方（仮）", href: "#articles", date: "2026.09.19", grade: "高2", subject: "英語", categories: ["文法"], mustBuy: true },
  { book: "関正生の The Essentials 英文法 必修英文100", title: "関正生の The Essentials 英文法 必修英文100 の使い方（仮）", href: "#articles", date: "2026.09.18", grade: "高2", subject: "英語", categories: ["文法"], mustBuy: true },
  { book: "関正生の The Essentials 英語長文 必修英文100", title: "関正生の The Essentials 英語長文 必修英文100 の使い方（仮）", href: "#articles", date: "2026.09.17", grade: "高2", subject: "英語", categories: ["解釈"], mustBuy: true },
  { book: "重要古文単語315", title: "重要古文単語315 の使い方（仮）", href: "#articles", date: "2026.09.16", grade: "高2", subject: "国語", categories: ["単語"], mustBuy: true },
  { book: "BIBLIA2000", title: "BIBLIA2000 の使い方（仮）", href: "#articles", date: "2026.09.15", grade: "高2", subject: "国語", categories: ["漢字・語彙"], mustBuy: true },
  { book: "八澤のたった6時間で古典文法", title: "八澤のたった6時間で古典文法 の使い方（仮）", href: "#articles", date: "2026.09.14", grade: "高2", subject: "国語", categories: ["文法"], mustBuy: true },
  { book: "数学I・A 基礎問題精講", title: "数学I・A 基礎問題精講 の使い方（仮）", href: "#articles", date: "2026.09.13", grade: "高2", subject: "数学", categories: ["解法暗記"], mustBuy: true },
  { book: "1対1対応の演習", title: "1対1対応の演習 の使い方（仮）", href: "#articles", date: "2026.09.12", grade: "高2", subject: "数学", categories: ["解法暗記"], mustBuy: true },
  { book: "柳生好之の現代文クロスレクチャー", title: "柳生好之の現代文クロスレクチャー の使い方（仮）", href: "#articles", date: "2026.09.11", grade: "高2", subject: "国語", categories: ["長文読解・解法"], mustBuy: true },
  { book: "ゼロから覚醒 はじめよう現代文", title: "ゼロから覚醒 はじめよう現代文 の使い方（仮）", href: "#articles", date: "2026.09.10", grade: "高2", subject: "国語", categories: ["現代文"], mustBuy: true },
  { book: "英文法シンプルルール100", title: "英文法シンプルルール100 の使い方（仮）", href: "#articles", date: "2026.09.09", grade: "高2", subject: "英語", categories: ["文法"] },
  { book: "Rise & Realize 音読英文法", title: "Rise & Realize 音読英文法 の使い方（仮）", href: "#articles", date: "2026.09.08", grade: "高2", subject: "英語", categories: ["音読"] },
  { book: "評論文キーワード読解", title: "評論文キーワード読解 の使い方（仮）", href: "#articles", date: "2026.09.07", grade: "高2", subject: "国語", categories: ["現代文"] },
  { book: "数学I・A 標準問題精講", title: "数学I・A 標準問題精講 の使い方（仮）", href: "#articles", date: "2026.09.06", grade: "高2", subject: "数学", categories: ["解法暗記"] },
  { book: "宇宙一わかりやすい高校物理", title: "宇宙一わかりやすい高校物理 の使い方（仮）", href: "#articles", date: "2026.09.05", grade: "高2", subject: "理科", categories: ["物理"] },
  { book: "詳説日本史ノート", title: "詳説日本史ノート の使い方（仮）", href: "#articles", date: "2026.09.04", grade: "高2", subject: "社会", categories: ["日本史"] },
  { book: "やさしくわかる情報I", title: "やさしくわかる情報I の使い方（仮）", href: "#articles", date: "2026.09.03", grade: "高2", subject: "情報", categories: ["情報I"] },

  { book: "英単語ターゲット1200", title: "英単語ターゲット1200 の使い方（仮）", href: "#articles", date: "2026.09.09", grade: "高1", subject: "英語", categories: ["単語"], mustBuy: true },
  { book: "大岩のいちばんはじめの英文法", title: "大岩のいちばんはじめの英文法 の使い方（仮）", href: "#articles", date: "2026.09.08", grade: "高1", subject: "英語", categories: ["文法"], mustBuy: true },
  { book: "中学数学から高校数学への橋渡し", title: "中学数学から高校数学への橋渡し の使い方（仮）", href: "#articles", date: "2026.09.07", grade: "高1", subject: "数学", categories: ["解法暗記"], mustBuy: true },
  { book: "システム英単語", title: "システム英単語 の使い方（仮）", href: "#articles", date: "2026.09.06", grade: "高1", subject: "英語", categories: ["単語"], mustBuy: true },
  { book: "現代文キーワード読解", title: "現代文キーワード読解 の使い方（仮）", href: "#articles", date: "2026.09.05", grade: "高1", subject: "国語", categories: ["現代文"], mustBuy: true },
  { book: "ターゲット中学英単語1800", title: "ターゲット中学英単語1800 の使い方（仮）", href: "#articles", date: "2026.09.04", grade: "高1", subject: "英語", categories: ["単語"] },
  { book: "くもんの中学基礎がため100% 数学", title: "くもんの中学基礎がため100% 数学 の使い方（仮）", href: "#articles", date: "2026.09.03", grade: "高1", subject: "数学", categories: ["解法暗記"] },
  { book: "田村のやさしく語る現代文", title: "田村のやさしく語る現代文 の使い方（仮）", href: "#articles", date: "2026.09.02", grade: "高1", subject: "国語", categories: ["現代文"] },

  { book: "共通テスト実戦問題集", title: "共通テスト実戦問題集 の使い方（仮）", href: "#articles", date: "2026.09.04", grade: "高3", subject: "英語", categories: ["共通テスト"], mustBuy: true },
  { book: "赤本 志望校の過去問", title: "赤本 志望校の過去問 の使い方（仮）", href: "#articles", date: "2026.09.03", grade: "高3", subject: "数学", categories: ["過去問"], mustBuy: true },
  { book: "世界一わかりやすい 英作文", title: "世界一わかりやすい 英作文 の使い方（仮）", href: "#articles", date: "2026.09.02", grade: "高3", subject: "英語", categories: ["英作文"], mustBuy: true },
  { book: "直前まで使える 一問一答", title: "直前まで使える 一問一答 の使い方（仮）", href: "#articles", date: "2026.09.01", grade: "高3", subject: "社会", categories: ["直前対策"], mustBuy: true },
  { book: "過去問ノート総復習", title: "過去問ノート総復習 の使い方（仮）", href: "#articles", date: "2026.08.31", grade: "高3", subject: "国語", categories: ["過去問"], mustBuy: true },
  { book: "英作文ハイパートレーニング", title: "英作文ハイパートレーニング の使い方（仮）", href: "#articles", date: "2026.08.30", grade: "高3", subject: "英語", categories: ["英作文"] },
  { book: "世界史Bターゲット4000", title: "世界史Bターゲット4000 の使い方（仮）", href: "#articles", date: "2026.08.29", grade: "高3", subject: "社会", categories: ["一問一答"] },
  { book: "過去問演習講座", title: "過去問演習講座 の使い方（仮）", href: "#articles", date: "2026.08.28", grade: "高3", subject: "理科", categories: ["過去問"] },
  { book: "共通テスト情報Iの基礎徹底演習", title: "共通テスト情報Iの基礎徹底演習 の使い方（仮）", href: "#articles", date: "2026.08.27", grade: "高3", subject: "情報", categories: ["情報I"] },
];

export const mustBuyArticles = (grade: Grade) => popArticles.filter((a) => a.grade === grade && a.mustBuy);

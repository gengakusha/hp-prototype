import type { Tone as BadgeTone } from "../components/ui/Badge/Badge";

export type PopImage = {
  original: string; // クリック/タップで開く元画像
  small: string; // 通常表示用
  large: string; // 高解像度用
  width: number; // 元画像の横幅
  height: number; // 元画像の縦幅
  alt: string;
};

// 横スクロールTLに並ぶ、参考書データ
export type PopBook = {
  title: string;
  category: string; // POP画像のハッシュタグ
  href: string; // 解説記事のURL
  image?: string; // サムネ
};

export type PopIntroData = {
  eyebrow: string; 
  title: string;
  lead: string;
  image: PopImage;
  books: PopBook[];
};

export type Grade = "高1" | "高2" | "高3";

export type GradeTheme = { color: string; light: string; tone: Extract<BadgeTone, "blue" | "navy" | "campaign"> };

export const gradeTheme: Record<Grade, GradeTheme> = {
  高1: { color: "var(--gr-blue-500)", light: "var(--gr-blue-50)", tone: "blue" },
  高2: { color: "var(--gr-blue-800)", light: "var(--gr-blue-100)", tone: "navy" },
  高3: { color: "var(--gr-orange-500)", light: "var(--gr-orange-100)", tone: "campaign" },
};

export const popIntroByGrade: Record<Grade, PopIntroData> = {
  高2: {
    eyebrow: "RECOMMEND",
    title: "高2向けマストバイ参考書",
    lead: "POP参考書の中でも特に高校2年生におすすめしたい参考書です。\n気になった参考書の使い方は、下の解説記事一覧でくわしく読めます。",
    image: {
      original: "/一覧用書店POP.jpg",
      small: "/pop-list-1200.jpg",
      large: "/pop-list-2400.jpg",
      width: 4721,
      height: 3367,
      alt: "現論会「高校2年生向け マストバイ参考書10選」の一覧",
    },
    books: [
      { title: "関正生の英文法 POLARIS 1", category: "文法", href: "#articles" },
      { title: "関正生の The Essentials 英文法 必修英文100", category: "文法", href: "#articles" },
      { title: "関正生の The Essentials 英語長文 必修英文100", category: "解釈", href: "#articles" },
      { title: "重要古文単語315", category: "単語", href: "#articles" },
      { title: "BIBLIA2000", category: "漢字・語彙", href: "#articles" },
      { title: "八澤のたった6時間で古典文法", category: "文法", href: "#articles" },
      { title: "数学I・A 基礎問題精講", category: "解法暗記", href: "#articles" },
      { title: "1対1対応の演習", category: "解法暗記", href: "#articles" },
      { title: "柳生好之の現代文クロスレクチャー", category: "長文読解・解法", href: "#articles" },
      { title: "ゼロから覚醒 はじめよう現代文", category: "現代文", href: "#articles" },
    ],
  },
  高1: {
    eyebrow: "RECOMMEND",
    title: "高1向けマストバイ参考書",
    lead: "POP参考書の中でも特に高校1年生におすすめしたい参考書です。\n気になった参考書の使い方は、下の解説記事一覧でくわしく読めます。",
    image: {
      original: "/一覧用書店POP.jpg",
      small: "/pop-list-1200.jpg",
      large: "/pop-list-2400.jpg",
      width: 4721,
      height: 3367,
      alt: "（仮画像・要差し替え）高校1年生向け参考書一覧",
    },
    books: [
      { title: "英単語ターゲット1200（仮）", category: "単語", href: "#articles" },
      { title: "大岩のいちばんはじめの英文法（仮）", category: "文法", href: "#articles" },
      { title: "中学数学から高校数学への橋渡し（仮）", category: "解法暗記", href: "#articles" },
      { title: "システム英単語（仮）", category: "単語", href: "#articles" },
      { title: "現代文キーワード読解（仮）", category: "現代文", href: "#articles" },
    ],
  },
  高3: {
    eyebrow: "RECOMMEND",
    title: "高3向けマストバイ参考書",
    lead: "POP参考書の中でも特に高校3年生におすすめしたい参考書です。\n気になった参考書の使い方は、下の解説記事一覧でくわしく読めます。",
    image: {
      original: "/一覧用書店POP.jpg",
      small: "/pop-list-1200.jpg",
      large: "/pop-list-2400.jpg",
      width: 4721,
      height: 3367,
      alt: "（仮画像・要差し替え）高校3年生向け参考書一覧",
    },
    books: [
      { title: "共通テスト実戦問題集（仮）", category: "共通テスト", href: "#articles" },
      { title: "赤本 志望校の過去問（仮）", category: "過去問", href: "#articles" },
      { title: "世界一わかりやすい 英作文（仮）", category: "英作文", href: "#articles" },
      { title: "直前まで使える 一問一答（仮）", category: "直前対策", href: "#articles" },
      { title: "過去問ノート総復習（仮）", category: "過去問", href: "#articles" },
    ],
  },
};

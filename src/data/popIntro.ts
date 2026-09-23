export type PopImage = {
  original: string; // クリック/タップで開く元画像
  small: string; // 通常表示用
  large: string; // 高解像度用
  width: number; // 元画像の横幅
  height: number; // 元画像の縦幅
  alt: string;
};

// 横スクロールTLに並ぶ、参考書1冊ぶんのデータ。
export type PopBook = {
  title: string;
  category: string; // POP画像のハッシュタグに対応（例: "文法"）
  href: string; // 解説記事のURL。まだ無ければ "#articles"（下の記事一覧へジャンプ）でよい
  image?: string; // 表紙画像。省略すると現論会の代替画像になる
};

export type PopIntroData = {
  title: string;
  lead: string;
  image: PopImage;
  books: PopBook[];
};

export type Grade = "高2" | "高1";

export const popIntroByGrade: Record<Grade, PopIntroData> = {
  高2: {
    title: "高2向けPOP横スク",
    lead: "書店用 POP に掲載した、高校2年生向けの参考書一覧です。解説記事は、下の一覧から読めます。",
    image: {
      original: "/一覧用書店POP.jpg",
      small: "/pop-list-1200.jpg",
      large: "/pop-list-2400.jpg",
      width: 4721,
      height: 3367,
      alt: "現論会「高校2年生向け マストバイ参考書10選」の一覧",
    },
    // ⚠️ 今はダミーデータ（POP画像の10冊に合わせた仮の並び）。実際の記事URLに差し替えること。
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
    title: "高1向けPOP横スク",
    lead: "書店用 POP に掲載した、高校1年生向けの参考書一覧です。解説記事は、下の一覧から読めます。",
    image: {
      // ⚠️ 高1用の一覧画像はまだ用意されていない。差し替えが必要な仮置き（高2用の画像を流用）。
      original: "/一覧用書店POP.jpg",
      small: "/pop-list-1200.jpg",
      large: "/pop-list-2400.jpg",
      width: 4721,
      height: 3367,
      alt: "（仮画像・要差し替え）高校1年生向け参考書一覧",
    },
    // ⚠️ 高1用の冊数・書名は未確定のダミーデータ。実際の選書に差し替えること。
    books: [
      { title: "英単語ターゲット1200（仮）", category: "単語", href: "#articles" },
      { title: "大岩のいちばんはじめの英文法（仮）", category: "文法", href: "#articles" },
      { title: "中学数学から高校数学への橋渡し（仮）", category: "解法暗記", href: "#articles" },
      { title: "システム英単語（仮）", category: "単語", href: "#articles" },
      { title: "現代文キーワード読解（仮）", category: "現代文", href: "#articles" },
    ],
  },
};

/**
 * 索引ページ用のモックデータ
 * 構造は hp/concept/現論会ジャーナル索引の引き方.pdf に準拠。
 * リンク先URLは未確定のためプレースホルダー（#）。実装時は
 * WordPress側の記事URLとの対応表（カテゴリB案）に差し替える。
 */

export type ArticleLink = {
  label: string;
  href: string;
};

export type UniversityPath = {
  name: string;
  reading: string;
  summary: string;
  overview: ArticleLink;
  strategy: ArticleLink;
  subjects: ArticleLink[];
  commonTest: ArticleLink;
};

export type UniversityGroup = {
  name: string;
  description: string;
  href: string;
};

export const featuredUniversities: UniversityPath[] = [
  {
    name: "東京大学",
    reading: "とうきょうだいがく",
    summary:
      "文理を問わず記述力が問われる最難関大学。二次試験の配点比率が高く、科目間のバランス設計が合否を分けます。",
    overview: { label: "東京大学の概要記事", href: "#" },
    strategy: { label: "戦略の考え方記事（共通）", href: "#" },
    subjects: [
      { label: "東京大学の英語対策", href: "#" },
      { label: "東京大学の数学対策", href: "#" },
      { label: "東京大学の国語対策", href: "#" },
    ],
    commonTest: { label: "共通テスト対策記事", href: "#" },
  },
  {
    name: "早稲田大学（理工）",
    reading: "わせだだいがく",
    summary:
      "基幹・創造・先進理工の3学部共通問題。理科・数学・英語がほぼ均等配点で、得意科目を作らない戦略が必要です。",
    overview: { label: "早稲田理工3学部の違い", href: "#" },
    strategy: { label: "学系・学科別の得点戦略", href: "#" },
    subjects: [
      { label: "一般選抜の配点まとめ", href: "#" },
      { label: "一般選抜の試験日程・科目", href: "#" },
    ],
    commonTest: { label: "早稲田理工の難易度・合格最低点", href: "#" },
  },
  {
    name: "慶應義塾大学（理工）",
    reading: "けいおうぎじゅくだいがく",
    summary:
      "学門A〜Eの5つの入口から入学する独自の「学門制」。理科は物理・化学固定で、共通テストを利用しない一発勝負です。",
    overview: { label: "学門制と学科の違い", href: "#" },
    strategy: { label: "科目別の得点戦略", href: "#" },
    subjects: [
      { label: "過去問演習の進め方", href: "#" },
      { label: "時期別ロードマップ", href: "#" },
    ],
    commonTest: { label: "慶應理工志望者がやりがちな失敗", href: "#" },
  },
  {
    name: "九州大学",
    reading: "きゅうしゅうだいがく",
    summary:
      "文系・理系12学部を擁する総合国立大学。学部によって前期・後期日程の有無や配点比率が大きく異なります。",
    overview: { label: "九州大学12学部の違い", href: "#" },
    strategy: { label: "学部別の得点戦略", href: "#" },
    subjects: [
      { label: "共通テストと二次試験の配点", href: "#" },
      { label: "総合型選抜・学校推薦型選抜", href: "#" },
    ],
    commonTest: { label: "九州大学の難易度（倍率・合格最低点）", href: "#" },
  },
];

export const universityGroups: UniversityGroup[] = [
  { name: "京都大学", description: "旧帝大・最難関国立", href: "#" },
  { name: "東京科学大学", description: "旧東工大・理系最難関", href: "#" },
  { name: "一橋大学", description: "文系難関・社会科学系", href: "#" },
  { name: "MARCH", description: "明治・青学・立教・中央・法政", href: "#" },
  { name: "関関同立", description: "関西・関学・同志社・立命館", href: "#" },
  { name: "難関国公立大（60〜65）", description: "地方旧帝大クラス", href: "#" },
  { name: "地方国公立大（50〜60）", description: "中堅国公立大", href: "#" },
];

export type SubjectEntry = {
  name: string;
  category: "文系" | "理系" | "共通";
};

export const subjects: SubjectEntry[] = [
  { name: "英語", category: "共通" },
  { name: "数学", category: "共通" },
  { name: "現代文", category: "文系" },
  { name: "古文", category: "文系" },
  { name: "漢文", category: "文系" },
  { name: "小論文", category: "文系" },
  { name: "日本史", category: "文系" },
  { name: "世界史", category: "文系" },
  { name: "地理", category: "文系" },
  { name: "公共", category: "文系" },
  { name: "倫理・政経", category: "文系" },
  { name: "物理", category: "理系" },
  { name: "化学", category: "理系" },
  { name: "生物", category: "理系" },
  { name: "地学", category: "理系" },
];

export type ReferenceBookLevel = {
  level: string;
  description: string;
  books: string[];
};

export const referenceBookLevels: ReferenceBookLevel[] = [
  { level: "基礎", description: "初めの1冊。土台となる知識と型を作る", books: ["英文法基礎10題ドリル", "基礎問題精講"] },
  { level: "標準", description: "入試の典型パターンを一通り押さえる", books: ["standard英語長文", "1対1対応の演習"] },
  { level: "応用", description: "難関大の記述・思考力問題に対応する", books: ["やっておきたい英語長文700", "新数学演習"] },
  { level: "共通テスト", description: "形式に特化した仕上げ演習", books: ["共通テスト実戦問題集", "きめる！共通テスト"] },
];

export const seasonalPicks = [
  { season: "春（3〜5月）", focus: "基礎固め", books: ["英文法基礎10題ドリル", "基礎問題精講"] },
  { season: "夏（6〜8月）", focus: "標準〜応用への橋渡し", books: ["1対1対応の演習", "重要問題集"] },
  { season: "秋（9〜11月）", focus: "過去問・志望校対策", books: ["大学別過去問（赤本）", "新数学演習"] },
  { season: "冬（12〜2月）", focus: "共通テスト・直前仕上げ", books: ["共通テスト実戦問題集", "過去問ノート総復習"] },
];

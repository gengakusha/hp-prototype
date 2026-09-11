/**
 * ヘッダー・フッター共通ナビゲーションのデータ
 * 出典: https://genronkai.com/genronkai-journal/ を実機計測して再現（2026.09時点）
 * URL・文言はPlaywrightで実ページのDOM/computed styleを直接取得して確認済み。
 */

export type NavItem = {
  label: string;
  href: string;
};

export type NavGroup = {
  label: string;
  href: string;
  children?: NavItem[];
};

export const headerNav: NavGroup[] = [
  {
    label: "現論会とは？",
    href: "https://genronkai.com/about/",
    children: [
      { label: "現論会の強み", href: "https://genronkai.com/about/#strength" },
      { label: "メディア情報", href: "https://genronkai.com/media/" },
      { label: "出版書籍", href: "https://genronkai.com/books/" },
      { label: "現論会生の声", href: "https://genronkai.com/voice/" },
      { label: "お知らせ", href: "https://genronkai.com/news/" },
    ],
  },
  {
    label: "コース案内",
    href: "https://genronkai.com/course/",
    children: [
      { label: "東大コース", href: "https://genronkai.com/course/todai/" },
      { label: "京大コース", href: "https://genronkai.com/course/kyodai/" },
      { label: "医学部コース", href: "https://genronkai.com/course/med/" },
      { label: "難関国公立コース", href: "https://genronkai.com/course/kokuritsu/" },
      { label: "早慶コース", href: "https://genronkai.com/course/waseikei/" },
      { label: "難関私大コース", href: "https://genronkai.com/course/shidai/" },
      { label: "高1・高2コース", href: "https://genronkai.com/course/koukou/" },
    ],
  },
  { label: "合格実績", href: "https://genronkai.com/result/" },
  { label: "保護者の方へ", href: "https://genronkai.com/parents/" },
  { label: "よくある質問", href: "https://genronkai.com/faq/" },
  { label: "採用情報", href: "https://genronkai.com/news/coach-recruitment/" },
];

export const headerActions = {
  schoolSearch: { label: "校舎を探す", href: "https://genronkai.com/school-list/" },
  consultation: { label: "無料受験相談", href: "https://genronkai.com/free-consultation/" },
};

export const campusRegions: { region: string; campuses: string[] }[] = [
  { region: "北海道・東北", campuses: ["仙台駅前校"] },
  {
    region: "関東",
    campuses: [
      "新宿校", "渋谷校", "市ヶ谷校", "立川校", "自由が丘校", "北千住校", "西葛西校",
      "西日暮里校", "池袋校", "荻窪校", "田無校", "国分寺校", "経堂校", "赤羽校",
      "門前仲町校", "蒲田校", "春日校", "御茶ノ水校", "八王子校", "町田校", "大宮校",
      "南浦和校", "川越校", "春日部校", "新越谷校", "熊谷校", "上尾校", "柏校",
      "千葉駅前校", "津田沼校", "北松戸校", "横浜校", "新横浜校", "センター南校",
      "藤沢校", "青葉台校", "厚木校", "武蔵小杉校", "溝の口校", "向ヶ丘遊園校",
      "川崎校", "逗子校", "土浦校", "取手校", "宇都宮校",
    ],
  },
  {
    region: "北陸・中部",
    campuses: [
      "名古屋千種校", "名古屋駅前校", "一宮駅前校", "刈谷校", "大垣校", "四日市校",
      "新潟駅前校", "長岡校", "長野駅前校", "浜松校",
    ],
  },
  {
    region: "近畿・中国",
    campuses: [
      "四条烏丸校", "天王寺校", "上本町校", "大阪梅田校", "豊中校", "茨木校",
      "神戸三宮校", "神戸板宿校", "西宮苦楽園校", "川西能勢口校", "広島駅前校",
    ],
  },
  { region: "九州・沖縄", campuses: ["西新唐人町校", "香椎校", "福岡天神校"] },
  { region: "その他", campuses: ["オンライン校"] },
];

export const schoolListHref = "https://genronkai.com/school-list/";

export const recruitmentLinks = {
  coach: { label: "採用情報", href: "https://genronkai.com/news/coach-recruitment/" },
  fc: { label: "FCオーナー様募集", href: "https://genronkai.com/fc-owner-recruitment/" },
};

export const footerLegal: NavItem[] = [
  { label: "プライバシーポリシー", href: "https://genronkai.com/privacy-policy/" },
  { label: "運営会社", href: "https://genronkai.com/company-profile/" },
];

export const socialLinks = [
  { label: "X", href: "https://x.com/genronkai", icon: "/icon_x.svg" },
  { label: "YouTube", href: "https://www.youtube.com/@genronkai", icon: "/icon_youtube.svg" },
  { label: "LINE", href: "https://line.me/R/ti/p/genronkai", icon: "/icon_line.svg" },
];

export const floatingCta = {
  consultation: { label: "無料受験相談", href: "https://genronkai.com/free-consultation/" },
  requestInfo: { label: "資料請求", href: "https://genronkai.com/request-information/" },
};

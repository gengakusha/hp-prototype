// 参考書の「教科」ごとの色。
// ⚠️ ブランドの正式カラー（tokens.css。現論会ブランドスタイルガイドが出典）とは別物。
//    参考書の表紙デザインが教科ごとに色分けされているのに合わせた、このページ（POP参考書一覧）専用の色。
//    ブランドガイドの改定とは連動しないので、ここだけで管理する。
export type Subject = "英語" | "数学" | "国語" | "理科" | "社会" | "情報";

// 表示する順番（英数国理社情）
export const subjectOrder: Subject[] = ["英語", "数学", "国語", "理科", "社会", "情報"];

export type SubjectTheme = {
  color: string; // 教科ラベルなど、はっきり見せたい場所の色
  light: string; // その教科のまとまりの背景など、薄く敷きたい場所の色
};

export const subjectTheme: Record<Subject, SubjectTheme> = {
  // 指定どおりの配色。数学・社会は、たまたまブランドのメインブルー／アクセントオレンジと同じ色になっている
  国語: { color: "#E8635A", light: "#FDEDEC" }, // 赤
  数学: { color: "#00A0E9", light: "#EAF7FD" }, // 青
  社会: { color: "#F2974F", light: "#FCE8D8" }, // オレンジ
  理科: { color: "#4CAF7D", light: "#E8F5EE" }, // 緑
  英語: { color: "#8B6FC9", light: "#F1EDFB" }, // 紫
  // ⚠️ 情報は指定がなかったので、他の5教科（赤・青・オレンジ・緑・紫）と被らない色として黄色を選んでいる。
  //    実際にブランドとして決まった色があれば、ここだけ差し替えれば全体に反映される。
  情報: { color: "#E0B23C", light: "#FBF3DE" }, // 黄色（仮）
};

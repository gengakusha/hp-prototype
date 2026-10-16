export type Subject = "英語" | "数学" | "国語" | "理科" | "社会" | "情報";

// 表示する順番（英数国理社情）
export const subjectOrder: Subject[] = ["英語", "数学", "国語", "理科", "社会", "情報"];

export type SubjectTheme = {
  color: string; 
  light: string; 
};

export const subjectTheme: Record<Subject, SubjectTheme> = {
  国語: { color: "#E8635A", light: "#FDEDEC" }, 
  数学: { color: "#00A0E9", light: "#EAF7FD" }, 
  社会: { color: "#F2974F", light: "#FCE8D8" }, 
  理科: { color: "#4CAF7D", light: "#E8F5EE" }, 
  英語: { color: "#8B6FC9", light: "#F1EDFB" }, 
  情報: { color: "#E0B23C", light: "#FBF3DE" }, 
};

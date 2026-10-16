import type { Tone as BadgeTone } from "../components/ui/Badge/Badge";

export type PopImage = {
  original: string;
  small: string;
  large: string;
  width: number;
  height: number;
  alt: string;
};

export type PopIntroData = {
  eyebrow: string;
  title: string;
  lead: string;
  image: PopImage;
};

export const grades = ["高1", "高2", "高3"] as const;

export type Grade = (typeof grades)[number];

export type GradeTheme = { color: string; light: string; tone: Extract<BadgeTone, "blue" | "navy" | "campaign"> };

export const gradeTheme: Record<Grade, GradeTheme> = {
  高1: { color: "var(--gr-blue-500)", light: "var(--gr-blue-50)", tone: "blue" },
  高2: { color: "var(--gr-blue-800)", light: "var(--gr-blue-100)", tone: "navy" },
  高3: { color: "var(--gr-orange-500)", light: "var(--gr-orange-100)", tone: "campaign" },
};

const gradeLabel: Record<Grade, string> = {
  高1: "高校1年生",
  高2: "高校2年生",
  高3: "高校3年生",
};

const popListImage: Omit<PopImage, "alt"> = {
  original: "/一覧用書店POP.jpg",
  small: "/pop-list-1200.jpg",
  large: "/pop-list-2400.jpg",
  width: 4721,
  height: 3367,
};

const imageAlt: Record<Grade, string> = {
  高1: "（仮画像・要差し替え）高校1年生向け参考書一覧",
  高2: "現論会「高校2年生向け マストバイ参考書10選」の一覧",
  高3: "（仮画像・要差し替え）高校3年生向け参考書一覧",
};

const createIntro = (grade: Grade): PopIntroData => ({
  eyebrow: "RECOMMEND",
  title: `${grade}向けマストバイ参考書`,
  lead: `POP参考書の中でも特に${gradeLabel[grade]}におすすめしたい参考書です。\n気になった参考書の使い方は、下の解説記事一覧でくわしく読めます。`,
  image: { ...popListImage, alt: imageAlt[grade] },
});

export const popIntroByGrade: Record<Grade, PopIntroData> = {
  高1: createIntro("高1"),
  高2: createIntro("高2"),
  高3: createIntro("高3"),
};

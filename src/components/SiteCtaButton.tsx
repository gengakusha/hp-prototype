import type { AnchorHTMLAttributes, ReactNode } from "react";
import "./SiteCtaButton.css";

type Tone = "blue" | "dark";
type Size = "header" | "large";

type Props = AnchorHTMLAttributes<HTMLAnchorElement> & {
  tone?: Tone;
  size?: Size;
  arrow?: boolean;
  children: ReactNode;
};

/**
 * 実サイト（genronkai.com）のピル型CTAボタンを再現するコンポーネント。
 * ヘッダー・SCHOOL BUILDING・RECRUITMENT・フローティングCTAで共通利用。
 * - size="header": 幅160px/高さ56px、アイコンなし（グローバルヘッダー用）
 * - size="large": 高さ64px、右端に button_arrow.svg のアイコン付き
 */
export function SiteCtaButton({ tone = "blue", size = "header", arrow = false, children, className, ...props }: Props) {
  const classes = ["gr-site-cta", `gr-site-cta--${tone}`, `gr-site-cta--${size}`, arrow ? "gr-site-cta--arrow" : "", className]
    .filter(Boolean)
    .join(" ");
  return (
    <a className={classes} {...props}>
      {children}
    </a>
  );
}

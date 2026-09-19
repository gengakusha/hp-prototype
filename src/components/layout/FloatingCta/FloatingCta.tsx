import { SiteCtaButton } from "../../ui/SiteCtaButton/SiteCtaButton";
import { floatingCta } from "../../../data/siteNav";
import "./FloatingCta.css";

/**
 * 実サイトの .r-fixed-buttons / .g-follow-button を再現。
 * 画面右下に常時固定表示される無料受験相談・資料請求ボタン。
 */
export function FloatingCta() {
  return (
    <div className="gr-floating-cta">
      <SiteCtaButton tone="blue" size="large" arrow href={floatingCta.consultation.href} target="_blank" rel="noreferrer">
        {floatingCta.consultation.label}
      </SiteCtaButton>
      <SiteCtaButton tone="blue" size="large" arrow href={floatingCta.requestInfo.href} target="_blank" rel="noreferrer">
        {floatingCta.requestInfo.label}
      </SiteCtaButton>
    </div>
  );
}

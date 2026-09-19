import { SiteCtaButton } from "../../ui/SiteCtaButton/SiteCtaButton";
import { headerNav, headerActions } from "../../../data/siteNav";
import "./Header.css";

export function Header() {
  return (
    <header className="gr-header">
      <div className="gr-container gr-header__inner">
        <a href="https://genronkai.com/" className="gr-header__logo">
          <img src="/genronkai-logo.svg" alt="難関大受験専門塾 現論会" width={140} height={83.6} />
        </a>

        <nav className="gr-header__nav" aria-label="グローバルナビゲーション">
          <ul>
            {headerNav.map((item) => (
              <li key={item.label} className={item.children ? "gr-header__nav-item--has-children" : undefined}>
                <a href={item.href}>{item.label}</a>
                {item.children && (
                  <ul className="gr-header__dropdown">
                    {item.children.map((child) => (
                      <li key={child.label}>
                        <a href={child.href}>{child.label}</a>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </nav>

        <div className="gr-header__actions">
          <SiteCtaButton tone="dark" size="header" href={headerActions.schoolSearch.href}>
            {headerActions.schoolSearch.label}
          </SiteCtaButton>
          <SiteCtaButton tone="blue" size="header" href={headerActions.consultation.href} target="_blank" rel="noreferrer">
            {headerActions.consultation.label}
          </SiteCtaButton>
        </div>
      </div>
    </header>
  );
}

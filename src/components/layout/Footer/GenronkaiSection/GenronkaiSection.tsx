import { socialLinks, footerLegal } from "../../../../data/siteNav";
import "./GenronkaiSection.css";

export function GenronkaiSection() {
  return (
    <div className="gr-genronkai">
      <div className="gr-container gr-genronkai__inner">
        <p className="gr-genronkai__wordmark gr-en">GENRONKAI</p>

        <div className="gr-genronkai__social">
          {socialLinks.map((s) => (
            <a key={s.label} href={s.href} aria-label={s.label} className="gr-genronkai__social-link">
              <img src={s.icon} alt="" width={40} height={40} />
            </a>
          ))}
        </div>

        <nav className="gr-genronkai__legal" aria-label="法務情報">
          {footerLegal.map((l) => (
            <a key={l.label} href={l.href}>
              {l.label}
            </a>
          ))}
        </nav>

        <p className="gr-genronkai__copyright">&copy; 2024 Genronkai.</p>
      </div>
    </div>
  );
}

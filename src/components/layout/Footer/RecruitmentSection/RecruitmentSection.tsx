import { SiteCtaButton } from "../../../ui/SiteCtaButton/SiteCtaButton";
import { recruitmentLinks } from "../../../../data/siteNav";
import "./RecruitmentSection.css";

export function RecruitmentSection() {
  return (
    <section className="gr-recruit">
      <p className="gr-recruit__bg-text gr-en" aria-hidden="true">
        RECRUITMENT &amp; BUSINESS PARTNERS
      </p>
      <div className="gr-container gr-recruit__inner">
        <p className="gr-recruit__lead">現論会では、一緒に働く仲間を募集中です</p>
        <div className="gr-recruit__actions">
          <SiteCtaButton tone="blue" size="large" arrow href={recruitmentLinks.coach.href}>
            {recruitmentLinks.coach.label}
          </SiteCtaButton>
          <SiteCtaButton tone="dark" size="large" arrow href={recruitmentLinks.fc.href}>
            {recruitmentLinks.fc.label}
          </SiteCtaButton>
        </div>
      </div>
    </section>
  );
}

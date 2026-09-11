import { SchoolBuildingSection } from "./footer/SchoolBuildingSection";
import { RecruitmentSection } from "./footer/RecruitmentSection";
import { GenronkaiSection } from "./footer/GenronkaiSection";

export function Footer() {
  return (
    <footer className="gr-footer">
      <SchoolBuildingSection />
      <RecruitmentSection />
      <GenronkaiSection />
    </footer>
  );
}

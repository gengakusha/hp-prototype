import { SchoolBuildingSection } from "./SchoolBuildingSection/SchoolBuildingSection";
import { RecruitmentSection } from "./RecruitmentSection/RecruitmentSection";
import { GenronkaiSection } from "./GenronkaiSection/GenronkaiSection";

export function Footer() {
  return (
    <footer className="gr-footer">
      <SchoolBuildingSection />
      <RecruitmentSection />
      <GenronkaiSection />
    </footer>
  );
}

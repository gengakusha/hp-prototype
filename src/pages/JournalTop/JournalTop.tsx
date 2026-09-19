import { Header } from "../../components/layout/Header/Header";
import { Hero } from "./sections/Hero/Hero";
import { UniversitySection } from "./sections/UniversitySection/UniversitySection";
import { SubjectSection } from "./sections/SubjectSection/SubjectSection";
import { ReferenceBookSection } from "./sections/ReferenceBookSection/ReferenceBookSection";
import { CommonTestSection } from "./sections/CommonTestSection/CommonTestSection";
import { SeasonalSection } from "./sections/SeasonalSection/SeasonalSection";
import { Footer } from "../../components/layout/Footer/Footer";
import { FloatingCta } from "../../components/layout/FloatingCta/FloatingCta";

export function JournalTop() {
  return (
    <div className="gr-page">
      <Header />
      <main>
        <Hero />
        <UniversitySection />
        <SubjectSection />
        <ReferenceBookSection />
        <CommonTestSection />
        <SeasonalSection />
      </main>
      <Footer />
      <FloatingCta />
    </div>
  );
}

import { Header } from "../components/layout/Header/Header";
import { Hero } from "../components/sections/Hero/Hero";
import { UniversitySection } from "../components/sections/UniversitySection/UniversitySection";
import { SubjectSection } from "../components/sections/SubjectSection/SubjectSection";
import { ReferenceBookSection } from "../components/sections/ReferenceBookSection/ReferenceBookSection";
import { CommonTestSection } from "../components/sections/CommonTestSection/CommonTestSection";
import { SeasonalSection } from "../components/sections/SeasonalSection/SeasonalSection";
import { Footer } from "../components/layout/Footer/Footer";
import { FloatingCta } from "../components/layout/FloatingCta/FloatingCta";

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

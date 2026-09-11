import { Header } from "../components/Header";
import { Hero } from "../components/Hero";
import { UniversitySection } from "../components/sections/UniversitySection";
import { SubjectSection } from "../components/sections/SubjectSection";
import { ReferenceBookSection } from "../components/sections/ReferenceBookSection";
import { CommonTestSection } from "../components/sections/CommonTestSection";
import { SeasonalSection } from "../components/sections/SeasonalSection";
import { Footer } from "../components/Footer";
import { FloatingCta } from "../components/FloatingCta";

export function JournalIndexPage() {
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

import { useState } from "react";
import { Header } from "../../components/layout/Header/Header";
import { Footer } from "../../components/layout/Footer/Footer";
import { FloatingCta } from "../../components/layout/FloatingCta/FloatingCta";
import { grades, type Grade } from "../../data/popIntro";
import { Hero } from "./sections/Hero/Hero";
import { Mission } from "./sections/Mission/Mission";
import { GradeSwitch } from "./sections/GradeSwitch/GradeSwitch";
import { Intro } from "./sections/Intro/Intro";
import { Timeline } from "./sections/Timeline/Timeline";

export function Pop() {
  const [grade, setGrade] = useState<Grade>(grades[0]);
  return (
    <div className="gr-page">
      <Header />
      <main>
        <Hero />
        <Mission />
        <GradeSwitch grade={grade} onChange={setGrade} />
        <Intro grade={grade} />
        <Timeline grade={grade} />
      </main>
      <Footer />
      <FloatingCta />
    </div>
  );
}

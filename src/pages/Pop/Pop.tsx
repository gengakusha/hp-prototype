import { Header } from "../../components/layout/Header/Header";
import { PageIdx } from "../../components/ui/PageIdx/PageIdx";
import { Hero } from "./section/Hero/Hero";
import {Intro} from "./section/Intro/Intro";
import {Timeline} from "./section/Timeline/Timeline";
import { Footer } from "../../components/layout/Footer/Footer";
import { FloatingCta } from "../../components/layout/FloatingCta/FloatingCta";
import "../../styles/global.css"; 

export function Pop() {
  return (
    <div className="gr-page">
      <Header />
      <main>
        <Hero />
        <Intro />
        <Timeline />
      </main>
      <Footer />
      <FloatingCta />
    </div>
  );
}

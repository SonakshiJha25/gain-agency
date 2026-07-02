import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import AboutHero from "./AboutHero";
import AboutWhyUs from "./AboutWhyUs";
import AboutMission from "./AboutMission";
import AboutStory from "./AboutStory";
import AboutCTA from "./AboutCTA";

export default function AboutPage() {
  return (
    <main className="overflow-hidden bg-white">
      <Navbar />
      {/* 1 — Hero */}
      <AboutHero />
      {/* 2 — GAIN Promise flowchart (G·A·I·N) */}
      <AboutWhyUs />
      {/* 3 — Our Approach: 3 performance cards */}
      <AboutMission />
      {/* 4 — Why We Started */}
      <AboutStory />
      {/* 5 — CTA */}
      <AboutCTA />
      <Footer />
    </main>
  );
}
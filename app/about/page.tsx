import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import AboutHero from "./AboutHero";
import AboutMission from "./AboutMission";
import AboutStats from "./AboutStats";
import AboutStory from "./AboutStory";
import AboutValues from "./AboutValues";
import AboutCTA from "./AboutCTA";

export default function AboutPage() {
  return (

    <main className="overflow-hidden bg-white">

      {/* Navbar */}
      <Navbar />

      {/* Hero */}
      <AboutHero />

      {/* Mission */}
      <AboutMission />

      {/* Stats */}
      <AboutStats />

      {/* Story */}
      <AboutStory />

      {/* Values */}
      <AboutValues />

      {/* CTA */}
      <AboutCTA />

      {/* Footer */}
      <Footer />

    </main>

  );
}
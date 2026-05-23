import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import CaseStudiesHero from "./CaseStudiesHero";
import FeaturedCaseStudy from "./FeaturedCaseStudy";
import CaseStudiesGrid from "./CaseStudiesGrid";
import CaseStudiesProcess from "./CaseStudiesProcess";
import CaseStudiesCTA from "./CaseStudiesCTA";

export default function CaseStudiesPage() {
  return (

    <main className="overflow-hidden">

      {/* Navbar */}
      <Navbar />

      {/* Hero */}
      <CaseStudiesHero />
      
      {/* Featured Case Study */}
      <FeaturedCaseStudy />

      {/* Case Studies */}
      <CaseStudiesGrid />

      {/* Process */}
      <CaseStudiesProcess />

      {/* CTA */}
      <CaseStudiesCTA />

      {/* Footer */}
      <Footer />

    </main>

  );
}
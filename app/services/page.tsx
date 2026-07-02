import Navbar from "../components/Navbar";

import ServicesHero from "./ServicesHero";
import ServicesGrid from "./ServicesGrid";
import ServiceDetails from "./ServiceDetails";
import ServicesProcess from "./ServicesProcess";
import ServicesCTA from "./ServicesCTA";

import Footer from "../components/Footer";

export default function ServicesPage() {
  return (

    <main className="overflow-hidden">

      {/* Navbar */}
      <Navbar />

      {/* Hero */}
      <ServicesHero />

      {/* Services Overview */}
      <ServicesGrid />

      {/* Detailed Services */}
      <ServiceDetails />

      {/* Process */}
      <ServicesProcess />

      {/* CTA */}
      <ServicesCTA />

      {/* Footer */}
      <Footer />

    </main>

  );
}
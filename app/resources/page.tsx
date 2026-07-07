import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import ResourcesHero from "./ResourcesHero";
import FeaturedResource from "./FeaturedResource";

export default function ResourcesPage() {
  return (
    <main className="overflow-hidden bg-white">
      {/* Navbar */}
      <Navbar />

      {/* Hero */}
      <ResourcesHero />

      {/* Featured Resource (PDF section) */}
      <FeaturedResource />

      {/* Footer */}
      <Footer />
    </main>
  );
}

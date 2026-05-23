import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import ResourcesHero from "./ResourcesHero";
import FeaturedResource from "./FeaturedResource";
import ResourceCategories from "./ResourceCategories";
import LatestInsights from "./LatestInsights";

export default function ResourcesPage() {
  return (
    <main className="overflow-hidden bg-white">
      {/* Navbar */}
      <Navbar />

      {/* Hero */}
      <ResourcesHero />

      {/* Featured Resource */}
      <FeaturedResource />

      {/* Resource Categories */}
      <ResourceCategories />

      {/* Latest Insights */}
      <LatestInsights />

      {/* Footer */}
      <Footer />
    </main>
  );
}

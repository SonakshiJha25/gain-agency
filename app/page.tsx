import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Services from "./components/Services";
import HomeAbout from "./components/HomeAbout";
import WhyUs from "./components/WhyUs";
import FAQ from "./components/FAQ";
import LeadForm from "./components/LeadForm";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Services />
      <HomeAbout />
      <WhyUs />
      <FAQ />
      <LeadForm />
      <Footer />
    </main>
  );
}
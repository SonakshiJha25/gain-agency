import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Services from "./components/Services"
import FAQ from "./components/FAQ"
import WhyUs from "./components/WhyUs";
import LeadForm from "./components/LeadForm";
import ClientsCarousel from "./components/ClientsCarousel";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Services />
      <FAQ />
      <WhyUs />
      <LeadForm />
      <ClientsCarousel />
      <Footer />
    </main>
  );
}
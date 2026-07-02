import Navbar from "../components/Navbar";

import ConsultationHero from "./ConsultationHero";
import ConsultationProcess from "./ConsultationProcess";
import ConsultationForm from "./ConsultationForm";

import Footer from "../components/Footer";

export default function BookConsultationPage() {
  return (

    <main className="overflow-hidden">

      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <ConsultationHero />

      {/* Process Section */}
      <ConsultationProcess />

      {/* Consultation Form */}
      <ConsultationForm />

      {/* Footer */}
      <Footer />

    </main>

  );
}
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import ContactHero from "./ContactHero";
import ContactInfo from "./ContactInfo";
import ContactForm from "./ContactForm";

export default function Contact() {
  return (
    <main className="overflow-hidden bg-white">
      {/* Navbar */}
      <Navbar />

      {/* Hero */}
      <ContactHero />

      {/* Main Contact Section */}
      <section className="py-10 md:py-20 px-6 md:px-12 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Info - occupies 5 cols on lg screens */}
          <div className="lg:col-span-5">
            <ContactInfo />
          </div>

          {/* Form - occupies 7 cols on lg screens */}
          <div className="lg:col-span-7">
            <ContactForm />
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </main>
  );
}
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { CheckCircle, ArrowLeft } from "lucide-react";
import Link from "next/link";
import GainWatermark from "../components/GainWatermark";

export default function ThankYouPage() {
  return (
    <main className="overflow-hidden bg-[#f4f3ff] min-h-screen flex flex-col">
      <Navbar />

      <section className="relative flex-grow flex items-center justify-center px-6 py-24 md:py-32">
        {/* Ambient Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-[#13B3B7]/20 to-[#8B5CF6]/20 blur-[100px] rounded-full pointer-events-none opacity-60" />

        <div className="relative z-10 w-full max-w-2xl bg-white border border-gray-100 rounded-[32px] p-10 md:p-16 text-center shadow-2xl shadow-slate-200/50 flex flex-col items-center">
          
          <GainWatermark className="opacity-10 absolute top-8 left-8" />
          
          <div className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center mb-8 relative">
            <div className="absolute inset-0 bg-green-100/50 rounded-full animate-ping" style={{ animationDuration: '3s' }} />
            <CheckCircle className="w-10 h-10 text-green-500 relative z-10" strokeWidth={2.5} />
          </div>

          <h1 className="text-3xl md:text-5xl font-black tracking-tight text-[#152268] mb-6 leading-tight">
            Thank you for filling <br className="hidden md:block" /> the form!
          </h1>
          
          <p className="text-lg text-slate-600 mb-2 font-medium">
            We are pleased to have you.
          </p>
          <p className="text-base text-slate-500 mb-10">
            We will contact you soon with the next steps.
          </p>

          <Link href="/" className="inline-flex items-center gap-2 text-[#13B3B7] font-bold text-sm tracking-[0.1em] uppercase hover:-translate-x-1 transition-transform duration-300">
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
          
        </div>
      </section>

      <Footer />
    </main>
  );
}

import Link from "next/link";
import { CalendarDays, ArrowRight } from "lucide-react";
import GainWatermark from "../components/GainWatermark";

export default function AboutCTA() {
  return (
    <section className="relative py-28 px-6 bg-white overflow-hidden">

      {/* Background Glow */}
      <div className="absolute top-[-120px] right-[-120px] w-[320px] h-[320px] rounded-full bg-purple-200/40 blur-3xl" />

      <div className="relative z-10 max-w-6xl mx-auto">

        {/* CTA Card — unique split layout */}
        <div className="relative overflow-hidden rounded-[32px] gain-gradient shadow-2xl shadow-[#7e22ce]/20">

          {/* Background GAIN outline */}
          <GainWatermark light />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-10 px-8 md:px-16 py-16 md:py-10 md:py-20 items-center">

            {/* Left — Text */}
            <div>
              <p className="text-[11px] font-bold uppercase tracking-[0.08em] text-white mb-6">
                Partner With Us
              </p>

              <h2 className="text-3xl md:text-4xl font-black tracking-tight leading-[1.05] text-white">
                Your Brand Deserves<br />
                a Growth Partner,<br />
                Not Just an Agency.
              </h2>

              <p className="mt-5 text-[14px] leading-[1.8] text-purple-100 max-w-md">
                We don't just manage accounts — we become an extension
                of your team, invested in your long-term Amazon success.
              </p>
            </div>

            {/* Right — Actions */}
            <div className="flex flex-col items-start lg:items-end gap-4">
              <Link
                href="/book-consultation"
                className="inline-flex items-center gap-2 bg-white hover:bg-gray-50 text-[#152268] px-8 py-3.5 rounded-full text-sm font-semibold transition-all duration-300 hover:-translate-y-0.5 shadow-2xl shadow-[#152268]/20"
              >
                <CalendarDays className="w-4 h-4" />
                Book Free Consultation
              </Link>

              <Link
                href="/services"
                className="inline-flex items-center gap-2 border border-white/20 bg-white/5 hover:bg-white/10 text-white px-8 py-3.5 rounded-full text-sm font-semibold transition-all duration-300 hover:-translate-y-0.5"
              >
                Explore Services
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
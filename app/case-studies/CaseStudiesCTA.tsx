import Link from "next/link";
import { CalendarDays, ArrowRight } from "lucide-react";

export default function CaseStudiesCTA() {
  return (
    <section className="relative py-28 px-6 bg-white overflow-hidden">

      {/* Glow */}
      <div className="absolute top-[-120px] right-[-120px] w-[320px] h-[320px] rounded-full bg-purple-200/40 blur-3xl" />

      <div className="relative z-10 max-w-6xl mx-auto">

        {/* CTA Card */}
        <div className="relative overflow-hidden rounded-[32px] gain-gradient px-8 md:px-16 py-16 md:py-10 md:py-20 shadow-2xl shadow-[#7e22ce]/20">

          {/* Background GAIN outline */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0 overflow-hidden">
            <img src="/gain-watermark-light.svg" alt="" className="w-[90%] md:w-[70%] h-auto opacity-[0.08] select-none" aria-hidden="true" />
          </div>

          <div className="absolute bottom-[-120px] left-[-120px] w-[320px] h-[320px] rounded-full bg-white/10 blur-3xl" />

          <div className="relative z-10 max-w-3xl mx-auto text-center">

            <p className="text-[11px] font-bold uppercase tracking-[0.08em] text-white mb-6">
              See What's Possible
            </p>

            <h2 className="text-3xl md:text-4xl font-black tracking-tight leading-[1.05] text-white">
              Let's Build<br />
              Your Growth Strategy
            </h2>

            <p className="mt-5 text-[14px] leading-[1.8] text-purple-100 max-w-xl mx-auto">
              Get a personalized Amazon growth plan focused on profitability,
              scalability, and long-term performance systems.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
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
import Link from "next/link";
import { CalendarDays, ArrowRight } from "lucide-react";

export default function ServicesCTA() {
  return (
    <section className="relative py-28 px-6 bg-white overflow-hidden">

      {/* Background Glow */}
      <div className="absolute top-[-120px] right-[-120px] w-[320px] h-[320px] bg-purple-100 rounded-full blur-3xl opacity-60" />

      <div className="relative z-10 max-w-6xl mx-auto">

        {/* CTA Card — centered with unique services messaging */}
        <div className="relative overflow-hidden gain-gradient rounded-[32px] px-8 md:px-16 py-16 md:py-10 md:py-20 shadow-2xl shadow-[#7e22ce]/20">

          <div className="absolute bottom-[-120px] left-[-120px] w-[320px] h-[320px] bg-white/10 rounded-full blur-3xl" />

          <div className="relative z-10 text-center max-w-3xl mx-auto">

            <p className="text-[11px] font-bold text-white uppercase tracking-[0.08em] mb-6">
              Start your growth journey
            </p>

            <h2 className="text-3xl md:text-4xl font-black tracking-tight leading-[1.05] text-white">
              Let's Build Your<br />
              Amazon Growth System
            </h2>

            <p className="mt-5 text-sm leading-relaxed text-purple-100 max-w-xl mx-auto">
              Get a personalized consultation focused on scaling strategy,
              account performance, and long-term Amazon growth.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
              <Link
                href="/book-consultation"
                className="inline-flex items-center gap-2 bg-white hover:bg-gray-50 text-[#152268] px-8 py-3.5 rounded-full text-sm font-semibold transition-all duration-300 hover:-translate-y-0.5 shadow-2xl shadow-[#152268]/20"
              >
                Get started now
              </Link>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
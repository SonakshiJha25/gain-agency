import Link from "next/link";
import {
  ArrowRight,
  Clock3,
  TrendingUp
} from "lucide-react";

export default function ConsultationHero() {
  return (

    // Main Hero Section
    <section className="relative overflow-hidden bg-[#f7f4ff] pt-52 pb-24 px-6">

      {/* Background Glow */}
      <div className="absolute top-[-120px] right-[-100px] w-[380px] h-[380px] bg-purple-300/20 rounded-full blur-3xl" />

      {/* Huge Background Text */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">

        <h1
          className="
            text-[26vw]
            md:text-[22vw]
            font-black
            tracking-[0.12em]
            leading-none
            text-transparent
            [-webkit-text-stroke:1px_rgba(109,40,217,0.15)]
          "
        >
          GAIN
        </h1>

      </div>

      {/* Main Container */}
      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

        {/* Left Content */}
        <div>

          {/* Small Badge */}
          <p className="text-[#6d28d9] text-[11px] font-bold tracking-[0.28em] uppercase mb-4">
            Free Strategy Consultation
          </p>

          {/* Main Heading */}
          <h1 className="text-[30px] md:text-[50px] leading-[0.96] font-black tracking-[-0.06em] text-[#020617]">
            Let’s Build Your
            <br />
            <span className="bg-gradient-to-r from-[#8b5cf6] via-[#7c3aed] to-[#6d28d9] bg-clip-text text-transparent">
              Amazon Growth Plan
            </span>
          </h1>

          {/* Description */}
          <p className="mt-5 text-[15px] md:text-[14px] leading-[1.9] text-[#6b7280] max-w-xl">
            Get a tailored strategy session focused on improving your Amazon advertising, listings, conversions, and long-term profitability.
          </p>

          {/* Mini Features */}
          <div className="flex flex-col sm:flex-row gap-5 mt-8">

            {/* Feature */}
            <div className="flex items-center gap-3">

              <div className="w-10 h-10 rounded-xl bg-[#efe7ff] flex items-center justify-center">
                <TrendingUp className="w-5 h-5 text-[#6d28d9]" />
              </div>

              <div>

                <p className="text-[14px] font-semibold text-[#111827]">
                  Growth Analysis
                </p>

                <p className="text-[12px] text-[#6b7280]">
                  Brand Performance Review
                </p>

              </div>

            </div>

            {/* Feature */}
            <div className="flex items-center gap-3">

              <div className="w-10 h-10 rounded-xl bg-[#efe7ff] flex items-center justify-center">
                <Clock3 className="w-5 h-5 text-[#6d28d9]" />
              </div>

              <div>

                <p className="text-[14px] font-semibold text-[#111827]">
                  Quick Response
                </p>

                <p className="text-[12px] text-[#6b7280]">
                  Within 24–48 Hours
                </p>

              </div>

            </div>

          </div>

        </div>

        {/* Right Side Card */}
        <div className="relative">

          <div className="bg-white border border-[#ece4ff] rounded-[32px] p-8 md:p-10 shadow-xl shadow-purple-100/35">

            {/* Top Badge */}
            <div className="inline-flex items-center gap-2 bg-[#f5efff] border border-[#e9ddff] px-4 py-1.5 rounded-full mb-6">

              <span className="w-2 h-2 rounded-full bg-[#6d28d9]" />

              <span className="text-[11px] font-bold text-[#6d28d9] uppercase tracking-[0.08em]">
                Consultation Includes
              </span>

            </div>

            {/* List */}
            <div className="space-y-4">

              {/* Item */}
              <div className="flex items-start gap-4">

                <div className="w-8 h-8 rounded-lg bg-[#efe7ff] flex items-center justify-center shrink-0">

                  <span className="text-[#6d28d9] font-bold text-[12px]">
                    01
                  </span>

                </div>

                <div>

                  <h3 className="text-[16px] font-bold text-[#111827]">
                    Account Audit
                  </h3>

                  <p className="mt-0.5 text-[13px] leading-[1.6] text-[#6b7280]">
                    Identify growth blockers, wasted spend, and optimization opportunities.
                  </p>

                </div>

              </div>

              {/* Item */}
              <div className="flex items-start gap-4">

                <div className="w-8 h-8 rounded-lg bg-[#efe7ff] flex items-center justify-center shrink-0">

                  <span className="text-[#6d28d9] font-bold text-[12px]">
                    02
                  </span>

                </div>

                <div>

                  <h3 className="text-[16px] font-bold text-[#111827]">
                    Strategy Roadmap
                  </h3>

                  <p className="mt-0.5 text-[13px] leading-[1.6] text-[#6b7280]">
                    Receive a tailored growth direction designed around your brand goals.
                  </p>

                </div>

              </div>

              {/* Item */}
              <div className="flex items-start gap-4">

                <div className="w-8 h-8 rounded-lg bg-[#efe7ff] flex items-center justify-center shrink-0">

                  <span className="text-[#6d28d9] font-bold text-[12px]">
                    03
                  </span>

                </div>

                <div>

                  <h3 className="text-[16px] font-bold text-[#111827]">
                    Performance Insights
                  </h3>

                  <p className="mt-0.5 text-[13px] leading-[1.6] text-[#6b7280]">
                    Learn what’s working, what’s hurting growth, and where scaling potential exists.
                  </p>

                </div>

              </div>

            </div>

            {/* CTA */}
            <Link
              href="#form"
              className="w-full mt-6 py-3 rounded-xl bg-[#6d28d9] hover:bg-[#5b21b6] text-white text-[14px] font-semibold transition-all duration-300 inline-flex items-center justify-center gap-2"
            >

              Continue To Form

              <ArrowRight className="w-4 h-4" />

            </Link>

          </div>

        </div>

      </div>

    </section>
  );
}
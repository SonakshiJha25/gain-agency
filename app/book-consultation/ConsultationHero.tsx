import {
  Clock3,
  TrendingUp
} from "lucide-react";

export default function ConsultationHero() {
  return (
    <section className="relative overflow-hidden bg-[#f4f3ff] pt-64 md:pt-72 pb-32 md:pb-40 flex items-center justify-center px-6">

      {/* Background Glow */}
      <div className="absolute top-[-120px] right-[-100px] w-[380px] h-[380px] bg-purple-300/20 rounded-full blur-3xl" />

      {/* Huge Background Text */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
        <h1 className="text-[22vw] md:text-[20vw] font-black tracking-[0.12em] leading-none text-transparent [-webkit-text-stroke:1px_rgba(74,61,213,0.15)]">
          GAIN
        </h1>
      </div>

      {/* Main Container */}
      <div className="relative z-10 max-w-4xl text-center">

        {/* Small Badge */}
        <p className="text-xs font-bold tracking-[0.2em] uppercase text-[#13B3B7] mb-6">
          Free Strategy Consultation
        </p>

        {/* Main Heading */}
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-black tracking-tight leading-[1.05] text-[#152268]">
          Let’s Build Your
          <br />
          <span className="gain-gradient-text">
            Amazon Growth Plan
          </span>
        </h1>

        {/* Description */}
        <p className="mt-6 text-lg text-slate-700 leading-relaxed max-w-2xl mx-auto">
          Get a tailored strategy session focused on improving your Amazon advertising, listings, conversions, and long-term profitability.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-6 mt-8">

          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-gray-50 flex items-center justify-center shadow-sm">
              <TrendingUp className="w-5 h-5 text-[#4A3DD5]" />
            </div>
            <div className="text-left">
              <p className="text-sm font-semibold text-[#152268]">
                Growth Analysis
              </p>
              <p className="text-xs text-slate-700">
                Brand Performance Review
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-gray-50 flex items-center justify-center shadow-sm">
              <Clock3 className="w-5 h-5 text-[#4A3DD5]" />
            </div>
            <div className="text-left">
              <p className="text-sm font-semibold text-[#152268]">
                Quick Response
              </p>
              <p className="text-xs text-slate-700">
                Within 24–48 Hours
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
export default function CaseStudiesHero() {
  return (
    <section className="relative overflow-hidden bg-[#f4f3ff] min-h-screen flex items-center px-6">

      {/* Glow */}
      <div className="absolute top-[-150px] right-[-150px] w-[420px] h-[420px] rounded-full bg-purple-200/50 blur-3xl" />

      {/* Background Text */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
        <h1 className="text-[22vw] md:text-[20vw] font-black tracking-[0.12em] leading-none text-transparent [-webkit-text-stroke:1px_rgba(74,61,213,0.12)]">
          GAIN
        </h1>
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-6xl mx-auto">

        <div className="text-center flex flex-col items-center">

          {/* Badge */}
          <p className="text-[#4A3DD5] text-[11px] font-bold tracking-[0.35em] uppercase mb-6">
            Case Studies
          </p>

          {/* Heading */}
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-black tracking-tight leading-[1.05] text-[#152268]">
            Real Strategies
            <br />
            <span className="gain-gradient-text">
              Real Performance
            </span>
          </h1>

          {/* Description */}
          <p className="mt-6 max-w-2xl text-[15px] md:text-[16px] leading-[1.8] text-slate-800">
            We help brands scale on Amazon using performance-driven advertising,
            listing optimization, and conversion-focused systems that actually work in the market.
          </p>

          {/* CTA Buttons */}
          <div className="mt-10 flex flex-col sm:flex-row gap-4">

            <button className="px-6 py-3 rounded-full gain-gradient text-white font-semibold hover:from-[#3630a8] hover:to-[#0d9a9e] transition">
              View Case Studies
            </button>

            <button className="px-6 py-3 rounded-full border border-gray-300 text-[#152268] font-semibold hover:border-gray-400 transition">
              Talk to Us
            </button>

          </div>

        </div>

      </div>
    </section>
  );
}
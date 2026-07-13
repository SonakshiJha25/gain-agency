import GainWatermark from "../../app/components/GainWatermark";

export default function CaseStudiesHero() {
  return (
    <section className="relative overflow-hidden bg-[#f4f3ff] min-h-screen flex items-center justify-center px-6">

      {/* Background Glow */}
      <div className="absolute top-[-120px] right-[-100px] w-[380px] h-[380px] bg-purple-300/20 rounded-full blur-3xl" />
      <div className="absolute bottom-[-120px] left-[-100px] w-[300px] h-[300px] rounded-full bg-teal-200/20 blur-3xl" />

      {/* GAIN Watermark */}
      <GainWatermark />

      {/* Main Content */}
      <div className="relative z-10 max-w-4xl text-center">

        {/* Badge */}
        <p className="text-xs font-bold tracking-[0.2em] uppercase text-[#13B3B7] mb-6">
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
        <p className="max-w-2xl mx-auto mt-6 text-sm leading-relaxed text-slate-700">
          We help brands scale on Amazon using performance-driven advertising,
          listing optimization, and conversion-focused systems that actually work in the market.
        </p>

      </div>
    </section>
  );
}
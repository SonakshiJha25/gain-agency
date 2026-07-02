export default function ResourcesHero() {
  return (
    // Resources Hero
    <section className="relative pt-64 md:pt-72 pb-32 md:pb-40 overflow-hidden bg-[#f4f3ff] flex items-center justify-center">

      {/* Glow */}
      <div className="absolute top-[-140px] right-[-120px] w-[360px] h-[360px] rounded-full bg-purple-300/30 blur-3xl" />

      {/* Huge Background Text */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
        <h1
          className="
            text-[22vw]
            md:text-[20vw]
            font-black
            tracking-[0.12em]
            leading-none
            text-transparent
            [-webkit-text-stroke:1px_rgba(74,61,213,0.15)]
          "
        >
          GAIN
        </h1>
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-4xl text-center px-6 pt-16">

        {/* Label */}
        <p className="text-[#4A3DD5] text-[11px] font-bold tracking-[0.28em] uppercase mb-4">
          Resources & Insights
        </p>

        {/* Heading */}
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-black tracking-tight leading-[1.05] text-[#152268]">
          Smarter Amazon
          <br />
          Growth Starts
          <br />
          <span className="gain-gradient-text">
            With Better Knowledge
          </span>
        </h1>

        {/* Description */}
        <p className="max-w-2xl mx-auto mt-5 text-[15px] md:text-[14px] leading-[1.9] text-slate-700">
          Explore Amazon advertising insights, scaling frameworks,
          optimization strategies, and growth resources built for modern brands.
        </p>

      </div>

    </section>
  );
}

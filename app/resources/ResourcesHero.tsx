export default function ResourcesHero() {
  return (
    // Resources Hero
    <section className="relative pt-64 md:pt-72 pb-32 md:pb-40 overflow-hidden bg-[#f7f4ff] flex items-center justify-center">

      {/* Glow */}
      <div className="absolute top-[-140px] right-[-120px] w-[360px] h-[360px] rounded-full bg-purple-300/30 blur-3xl" />

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
          LEARN
        </h1>
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-4xl text-center px-6 pt-16">

        {/* Label */}
        <p className="text-[#6d28d9] text-[11px] font-bold tracking-[0.28em] uppercase mb-4">
          Resources & Insights
        </p>

        {/* Heading */}
        <h1 className="text-[30px] md:text-[50px] leading-[0.96] font-black tracking-[-0.06em] text-[#020617]">
          Smarter Amazon
          <br />
          Growth Starts
          <br />
          <span className="bg-gradient-to-r from-[#8b5cf6] via-[#7c3aed] to-[#30a5b0] bg-clip-text text-transparent">
            With Better Knowledge
          </span>
        </h1>

        {/* Description */}
        <p className="max-w-2xl mx-auto mt-5 text-[15px] md:text-[14px] leading-[1.9] text-[#6b7280]">
          Explore Amazon advertising insights, scaling frameworks,
          optimization strategies, and growth resources built for modern brands.
        </p>

      </div>

    </section>
  );
}

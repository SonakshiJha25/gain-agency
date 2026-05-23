export default function AboutStory() {
  return (

    // Story Section
    <section className="relative bg-white py-32 px-6 overflow-hidden">

      {/* Background Glow */}
      <div className="absolute bottom-[-140px] right-[-120px] w-[340px] h-[340px] rounded-full bg-purple-200/40 blur-3xl" />

      {/* Main Container */}
      <div className="relative z-10 max-w-7xl mx-auto">

        {/* Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

          {/* Left Side */}
          <div>

            {/* Label */}
            <p className="text-[#6d28d9] text-[11px] font-bold tracking-[0.28em] uppercase mb-5">
              Why We Started
            </p>

            {/* Heading */}
            <h2 className="text-[28px] md:text-[42px] leading-[1.05] font-black tracking-[-0.05em] text-[#020617]">

              Most Brands
              <br />

              Don’t Need
              <br />

              More Noise

            </h2>

          </div>

          {/* Right Side */}
          <div>

            {/* Paragraph 1 */}
            <p className="text-[15px] md:text-[14px] leading-[1.9] text-[#6b7280]">

              Too many Amazon brands waste time
              jumping between random tactics,
              inconsistent freelancers,
              and short-term advertising decisions
              that never create stable growth.

            </p>

            {/* Paragraph 2 */}
            <p className="mt-6 text-[15px] md:text-[14px] leading-[1.9] text-[#6b7280]">

              GAIN was created to build structured
              systems focused on clarity,
              execution, profitability,
              and sustainable long-term scaling.

            </p>

            {/* Paragraph 3 */}
            <p className="mt-6 text-[15px] md:text-[14px] leading-[1.9] text-[#6b7280]">

              Instead of chasing vanity metrics,
              we focus on building Amazon growth
              ecosystems that actually improve
              business performance over time.

            </p>

          </div>

        </div>

        {/* Bottom Quote Card */}
        <div className="mt-24 bg-[#6d28d9] rounded-[32px] p-12 md:p-16 relative overflow-hidden">

          {/* Outline Text */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">

            <h1
              className="
                text-[18vw]
                md:text-[12vw]
                font-black
                tracking-[0.14em]
                leading-none
                text-transparent
                [-webkit-text-stroke:1px_rgba(255,255,255,0.08)]
              "
            >
              GROW
            </h1>

          </div>

          {/* Content */}
          <div className="relative z-10 max-w-4xl">

            {/* Quote */}
            <h3 className="text-[28px] md:text-[44px] leading-[0.98] font-black tracking-[-0.06em] text-white">

              Real Amazon Growth
              <br />

              Happens Through
              <br />

              Better Systems

            </h3>

            {/* Description */}
            <p className="mt-6 text-[15px] md:text-[14px] leading-[1.9] text-purple-100 max-w-2xl">

              Stronger strategy,
              better execution,
              smarter optimization,
              and long-term performance thinking.

            </p>

          </div>

        </div>

      </div>

    </section>
  );
}
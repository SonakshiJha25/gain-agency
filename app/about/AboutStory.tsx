import Link from "next/link";
import { CalendarDays } from "lucide-react";

export default function AboutStory() {
  return (

    // Story Section
    <section className="relative bg-white py-32 px-6 overflow-hidden">

      {/* Background Glow */}
      <div className="absolute bottom-[-140px] right-[-120px] w-[340px] h-[340px] rounded-full bg-purple-200/40 blur-3xl" />

      {/* Main Container */}
      <div className="relative z-10 max-w-5xl mx-auto">

        {/* Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-center">

          {/* Left Side */}
          <div>

            {/* Label */}
            <p className="text-xs font-bold tracking-[0.2em] uppercase text-[#13B3B7] mb-5">
              Why We Started
            </p>

            {/* Heading */}
            <h2 className="text-3xl md:text-4xl font-black tracking-tight leading-[1.05] text-[#152268]">
              Most Brands<br />
              Don't Need<br />
              More Noise
            </h2>

          </div>

          {/* Right Side */}
          <div>

            {/* Paragraph 1 */}
            <p className="text-base leading-relaxed text-slate-700">

              Too many Amazon brands waste time
              jumping between random tactics,
              inconsistent freelancers,
              and short-term advertising decisions
              that never create stable growth.

            </p>

            {/* Paragraph 2 */}
            <p className="mt-6 text-base leading-relaxed text-slate-700">

              <span className="font-extrabold text-[#4A3DD5]">GAIN</span> was created to build structured
              systems focused on clarity,
              execution, profitability,
              and sustainable long-term scaling.

            </p>

            {/* Paragraph 3 */}
            <p className="mt-6 text-base leading-relaxed text-slate-700">

              Instead of chasing vanity metrics,
              we focus on building Amazon growth
              ecosystems that actually improve
              business performance over time.

            </p>

          </div>

        </div>

      </div>

    </section>
  );
}
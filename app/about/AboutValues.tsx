import {
  Eye,
  Layers3,
  Sparkles,
  Gauge
} from "lucide-react";

export default function AboutValues() {
  return (

    // Values Section
    <section className="relative py-32 px-6 bg-[#f7f4ff] overflow-hidden">

      {/* Glow */}
      <div className="absolute top-[-120px] left-[-120px] w-[320px] h-[320px] rounded-full bg-purple-200/40 blur-3xl" />

      {/* Main Container */}
      <div className="relative z-10 max-w-7xl mx-auto">

        {/* Header */}
        <div className="max-w-3xl mx-auto text-center">

          {/* Label */}
          <p className="text-[#6d28d9] text-[11px] font-bold tracking-[0.28em] uppercase mb-5">
            Core Values
          </p>

          {/* Heading */}
          <h2 className="text-[28px] md:text-[42px] leading-[1.05] font-black tracking-[-0.05em] text-[#020617]">

            Principles Behind
            <br />

            Every Growth Decision

          </h2>

          {/* Description */}
          <p className="mt-6 text-[15px] md:text-[14px] leading-[1.9] text-[#6b7280]">

            Every strategy, optimization,
            and execution system is built around
            clarity, performance, and scalability.

          </p>

        </div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-7 mt-20">

          {/* VALUE 1 */}
          <div className="bg-white border border-[#ece4ff] rounded-[32px] p-9">

            {/* Icon */}
            <div className="w-14 h-14 rounded-2xl bg-[#f3edff] flex items-center justify-center">

              <Eye className="w-6 h-6 text-[#6d28d9]" />

            </div>

            {/* Title */}
            <h3 className="mt-6 text-[22px] font-bold tracking-[-0.03em] text-[#020617]">

              Clarity Over Complexity

            </h3>

            {/* Description */}
            <p className="mt-4 text-[14px] leading-[1.9] text-[#6b7280]">

              We focus on structured systems,
              transparent execution,
              and decisions backed by logic —
              not unnecessary complexity.

            </p>

          </div>

          {/* VALUE 2 */}
          <div className="bg-[#6d28d9] rounded-[32px] p-9 text-white">

            {/* Icon */}
            <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center">

              <Gauge className="w-6 h-6" />

            </div>

            {/* Title */}
            <h3 className="mt-6 text-[22px] font-bold tracking-[-0.03em]">

              Performance Matters

            </h3>

            {/* Description */}
            <p className="mt-4 text-[14px] leading-[1.9] text-purple-100">

              Every action is tied to measurable
              business outcomes like profitability,
              conversion growth,
              and scaling efficiency.

            </p>

          </div>

          {/* VALUE 3 */}
          <div className="bg-[#6d28d9] rounded-[32px] p-9 text-white">

            {/* Icon */}
            <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center">

              <Layers3 className="w-6 h-6" />

            </div>

            {/* Title */}
            <h3 className="mt-6 text-[22px] font-bold tracking-[-0.03em]">

              Systems Create Stability

            </h3>

            {/* Description */}
            <p className="mt-4 text-[14px] leading-[1.9] text-purple-100">

              Sustainable growth happens through
              repeatable systems —
              not random bursts of performance.

            </p>

          </div>

          {/* VALUE 4 */}
          <div className="bg-white border border-[#ece4ff] rounded-[32px] p-9">

            {/* Icon */}
            <div className="w-14 h-14 rounded-2xl bg-[#f3edff] flex items-center justify-center">

              <Sparkles className="w-6 h-6 text-[#6d28d9]" />

            </div>

            {/* Title */}
            <h3 className="mt-6 text-[22px] font-bold tracking-[-0.03em] text-[#020617]">

              Better Brands Win Long-Term

            </h3>

            {/* Description */}
            <p className="mt-4 text-[14px] leading-[1.9] text-[#6b7280]">

              Strong branding, trust,
              customer experience,
              and positioning drive sustainable scale.

            </p>

          </div>

        </div>

      </div>

    </section>
  );
}
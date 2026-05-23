import {
  Target,
  TrendingUp,
  ShieldCheck
} from "lucide-react";

export default function AboutMission() {
  return (

    // Mission Section
    <section className="relative bg-white py-32 px-6 overflow-hidden">

      {/* Soft Glow */}
      <div className="absolute bottom-[-120px] left-[-120px] w-[320px] h-[320px] rounded-full bg-purple-200/40 blur-3xl" />

      {/* Main Container */}
      <div className="relative z-10 max-w-7xl mx-auto">

        {/* Top Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">

          {/* Left Side */}
          <div>

            {/* Small Label */}
            <p className="text-[#6d28d9] text-[11px] font-bold tracking-[0.28em] uppercase mb-5">
              Our Mission
            </p>

            {/* Heading */}
            <h2 className="text-[28px] md:text-[42px] leading-[1.05] font-black tracking-[-0.05em] text-[#020617]">

              Real Growth
              <br />

              Requires Systems

            </h2>

          </div>

          {/* Right Side */}
          <div>

            {/* Paragraph 1 */}
            <p className="text-[15px] md:text-[14px] leading-[1.9] text-[#6b7280]">

              Most Amazon brands struggle because
              they rely on disconnected tactics,
              inconsistent advertising decisions,
              and short-term scaling approaches.

            </p>

            {/* Paragraph 2 */}
            <p className="mt-6 text-[15px] md:text-[14px] leading-[1.9] text-[#6b7280]">

              GAIN was built to create structured
              growth systems that combine Amazon PPC,
              conversion-focused content,
              and long-term optimization strategies
              into one scalable ecosystem.

            </p>

          </div>

        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-7 mt-24">

          {/* Card 1 */}
          <div className="bg-[#f7f4ff] border border-[#ece4ff] rounded-[32px] p-9">

            {/* Icon */}
            <div className="w-14 h-14 rounded-2xl bg-white flex items-center justify-center">

              <Target className="w-6 h-6 text-[#6d28d9]" />

            </div>

            {/* Title */}
            <h3 className="mt-8 text-[22px] font-bold tracking-[-0.03em] text-[#020617]">

              Strategy First

            </h3>

            {/* Description */}
            <p className="mt-4 text-[14px] leading-[1.9] text-[#6b7280]">

              Every decision is based on performance,
              scalability, and long-term growth —
              not random experimentation.

            </p>

          </div>

          {/* Card 2 */}
          <div className="bg-[#6d28d9] rounded-[32px] p-9 text-white">

            {/* Icon */}
            <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center">

              <TrendingUp className="w-6 h-6" />

            </div>

            {/* Title */}
            <h3 className="mt-8 text-[22px] font-bold tracking-[-0.03em]">

              Performance Focused

            </h3>

            {/* Description */}
            <p className="mt-4 text-[14px] leading-[1.9] text-purple-100">

              We prioritize measurable business impact
              through ROAS, conversions,
              profitability, and sustainable scaling.

            </p>

          </div>

          {/* Card 3 */}
          <div className="bg-[#f7f4ff] border border-[#ece4ff] rounded-[32px] p-9">

            {/* Icon */}
            <div className="w-14 h-14 rounded-2xl bg-white flex items-center justify-center">

              <ShieldCheck className="w-6 h-6 text-[#6d28d9]" />

            </div>

            {/* Title */}
            <h3 className="mt-8 text-[22px] font-bold tracking-[-0.03em] text-[#020617]">

              Long-Term Scaling

            </h3>

            {/* Description */}
            <p className="mt-4 text-[14px] leading-[1.9] text-[#6b7280]">

              Growth systems are designed to stay
              stable while supporting stronger
              long-term brand expansion.

            </p>

          </div>

        </div>

      </div>

    </section>
  );
}
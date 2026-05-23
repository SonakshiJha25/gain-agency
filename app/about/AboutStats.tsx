import {
  TrendingUp,
  Users,
  BadgeCheck,
  BarChart3
} from "lucide-react";

export default function AboutStats() {
  return (

    // Stats Section
    <section className="relative py-32 px-6 bg-[#f7f4ff] overflow-hidden">

      {/* Glow */}
      <div className="absolute top-[-120px] left-[-120px] w-[320px] h-[320px] rounded-full bg-purple-200/40 blur-3xl" />

      {/* Main Container */}
      <div className="relative z-10 max-w-7xl mx-auto">

        {/* Header */}
        <div className="max-w-3xl mx-auto text-center">

          {/* Small Label */}
          <p className="text-[#6d28d9] text-[11px] font-bold tracking-[0.28em] uppercase mb-5">
            Growth By Numbers
          </p>

          {/* Heading */}
          <h2 className="text-[28px] md:text-[42px] leading-[1.05] font-black tracking-[-0.05em] text-[#020617]">

            Performance Backed
            <br />

            By Real Execution

          </h2>

          {/* Description */}
          <p className="mt-6 text-[15px] md:text-[14px] leading-[1.9] text-[#6b7280]">

            Every number represents optimization,
            testing, scaling systems,
            and long-term Amazon growth execution.

          </p>

        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-7 mt-20">

          {/* Stat 1 */}
          <div className="bg-white border border-[#ece4ff] rounded-[32px] p-9">

            {/* Icon */}
            <div className="w-14 h-14 rounded-2xl bg-[#f3edff] flex items-center justify-center">

              <TrendingUp className="w-6 h-6 text-[#6d28d9]" />

            </div>

            {/* Number */}
            <h3 className="mt-8 text-[42px] leading-none font-black tracking-[-0.04em] text-[#020617]">
              $120M+
            </h3>

            {/* Label */}
            <p className="mt-4 text-[14px] leading-[1.9] text-[#6b7280]">
              Revenue influenced through Amazon growth systems and scaling strategies.
            </p>

          </div>

          {/* Stat 2 */}
          <div className="bg-[#6d28d9] rounded-[32px] p-9 text-white">

            {/* Icon */}
            <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center">

              <Users className="w-6 h-6" />

            </div>

            {/* Number */}
            <h3 className="mt-8 text-[42px] leading-none font-black tracking-[-0.04em]">
              200+
            </h3>

            {/* Label */}
            <p className="mt-4 text-[14px] leading-[1.9] text-purple-100">
              Amazon brands supported through advertising and account optimization.
            </p>

          </div>

          {/* Stat 3 */}
          <div className="bg-white border border-[#ece4ff] rounded-[32px] p-9">

            {/* Icon */}
            <div className="w-14 h-14 rounded-2xl bg-[#f3edff] flex items-center justify-center">

              <BadgeCheck className="w-6 h-6 text-[#6d28d9]" />

            </div>

            {/* Number */}
            <h3 className="mt-8 text-[42px] leading-none font-black tracking-[-0.04em] text-[#020617]">
              5+
            </h3>

            {/* Label */}
            <p className="mt-4 text-[14px] leading-[1.9] text-[#6b7280]">
              Years of experience building scalable Amazon growth systems.
            </p>

          </div>

          {/* Stat 4 */}
          <div className="bg-[#6d28d9] rounded-[32px] p-9 text-white">

            {/* Icon */}
            <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center">

              <BarChart3 className="w-6 h-6" />

            </div>

            {/* Number */}
            <h3 className="mt-8 text-[42px] leading-none font-black tracking-[-0.04em]">
              4.9/5
            </h3>

            {/* Label */}
            <p className="mt-4 text-[14px] leading-[1.9] text-purple-100">
              Average client satisfaction across growth and optimization projects.
            </p>

          </div>

        </div>

      </div>

    </section>
  );
}
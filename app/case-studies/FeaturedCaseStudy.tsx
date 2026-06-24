import {
  ArrowUpRight,
  TrendingUp,
  DollarSign,
  BarChart3
} from "lucide-react";

export default function FeaturedCaseStudy() {
  return (

    // Featured Case Study
    <section className="relative bg-white py-32 px-6 overflow-hidden">

      {/* Background Glow */}
      <div className="absolute top-[-120px] right-[-120px] w-[320px] h-[320px] rounded-full bg-purple-200/40 blur-3xl" />

      {/* Main Container */}
      <div className="relative z-10 max-w-7xl mx-auto">

        {/* Section Header */}
        <div className="max-w-3xl">

          {/* Badge */}
          <p className="text-[#6d28d9] text-[11px] font-bold tracking-[0.28em] uppercase mb-4">
            Featured Case Study
          </p>

          {/* Heading */}
          <h2 className="text-[28px] md:text-[42px] leading-[1.05] font-black tracking-[-0.05em] text-[#020617]">

            Scaling An Amazon
            <br />

            Beauty Brand Profitably

          </h2>

          {/* Description */}
          <p className="mt-6 text-[15px] md:text-[14px] leading-[1.9] text-[#6b7280] max-w-2xl">

            We rebuilt campaign structure,
            improved listing conversion systems,
            and optimized A+ content to create
            more scalable growth performance.

          </p>

        </div>

        {/* Main Card */}
        <div className="mt-20 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

          {/* Left Content */}
          <div className="bg-[#f7f4ff] border border-[#ece4ff] rounded-[32px] p-10 md:p-14">

            {/* Small Label */}
            <div className="inline-flex items-center gap-2 bg-white rounded-full px-4 py-2 border border-[#ece4ff]">

              <span className="w-2 h-2 rounded-full bg-[#6d28d9]" />

              <span className="text-[12px] font-semibold text-[#6d28d9] uppercase tracking-[0.08em]">
                Beauty & Skincare Brand
              </span>

            </div>

            {/* Problem */}
            <div className="mt-10">

              <p className="text-[12px] font-bold tracking-[0.16em] uppercase text-[#6d28d9]">
                Challenge
              </p>

              <p className="mt-4 text-[15px] leading-[1.9] text-[#6b7280]">

                The brand struggled with unstable
                advertising performance, rising ACOS,
                weak listing conversion rates,
                and inefficient campaign scaling.

              </p>

            </div>

            {/* Strategy */}
            <div className="mt-10">

              <p className="text-[12px] font-bold tracking-[0.16em] uppercase text-[#6d28d9]">
                Strategy
              </p>

              <p className="mt-4 text-[15px] leading-[1.9] text-[#6b7280]">

                We rebuilt campaign structures,
                improved keyword targeting,
                optimized listing assets,
                and redesigned A+ content
                for stronger conversion flow.

              </p>

            </div>

            {/* Timeline */}
            <div className="mt-10 flex items-center gap-8">

              <div>

                <h4 className="text-[30px] font-black tracking-[-0.05em] text-[#6d28d9]">
                  90 Days
                </h4>

                <p className="text-[13px] text-[#6b7280] mt-1">
                  Growth Timeline
                </p>

              </div>

              <div>

                <h4 className="text-[30px] font-black tracking-[-0.05em] text-[#6d28d9]">
                  3X
                </h4>

                <p className="text-[13px] text-[#6b7280] mt-1">
                  Scaling Capacity
                </p>

              </div>

            </div>

          </div>

          {/* Right Metrics */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">

            {/* Metric 1 */}
            <div className="bg-gradient-to-br from-[#6d28d9] via-[#6d28d9] to-[#30a5b0] rounded-[32px] p-8 text-white">

              <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center">

                <TrendingUp className="w-6 h-6" />

              </div>

              <h3 className="mt-10 text-[48px] leading-none font-black tracking-[-0.06em]">
                +42%
              </h3>

              <p className="mt-3 text-[14px] text-purple-100 leading-[1.8]">
                Increase in overall ROAS after campaign restructuring.
              </p>

            </div>

            {/* Metric 2 */}
            <div className="bg-[#f7f4ff] border border-[#ece4ff] rounded-[32px] p-8">

              <div className="w-14 h-14 rounded-2xl bg-white flex items-center justify-center">

                <DollarSign className="w-6 h-6 text-[#6d28d9]" />

              </div>

              <h3 className="mt-10 text-[48px] leading-none font-black tracking-[-0.06em] text-[#020617]">
                -28%
              </h3>

              <p className="mt-3 text-[14px] text-[#6b7280] leading-[1.8]">
                Reduction in wasted advertising spend and inefficient targeting.
              </p>

            </div>

            {/* Metric 3 */}
            <div className="bg-[#f7f4ff] border border-[#ece4ff] rounded-[32px] p-8">

              <div className="w-14 h-14 rounded-2xl bg-white flex items-center justify-center">

                <BarChart3 className="w-6 h-6 text-[#6d28d9]" />

              </div>

              <h3 className="mt-10 text-[48px] leading-none font-black tracking-[-0.06em] text-[#020617]">
                +31%
              </h3>

              <p className="mt-3 text-[14px] text-[#6b7280] leading-[1.8]">
                Improvement in listing conversion performance.
              </p>

            </div>

            {/* Metric 4 */}
            <div className="bg-gradient-to-br from-[#6d28d9] via-[#6d28d9] to-[#30a5b0] rounded-[32px] p-8 text-white">

              <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center">

                <ArrowUpRight className="w-6 h-6" />

              </div>

              <h3 className="mt-10 text-[48px] leading-none font-black tracking-[-0.06em]">
                2.4X
              </h3>

              <p className="mt-3 text-[14px] text-purple-100 leading-[1.8]">
                Increase in profitable scaling opportunities.
              </p>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}
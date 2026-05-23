import Link from "next/link";

import {
  ArrowRight
} from "lucide-react";

export default function LatestInsights() {
  return (

    // Latest Insights Section
    <section className="relative py-24 px-6 bg-white overflow-hidden">

      {/* Glow */}
      <div className="absolute bottom-[-140px] left-[-120px] w-[340px] h-[340px] rounded-full bg-purple-200/40 blur-3xl" />

      {/* Main Container */}
      <div className="relative z-10 max-w-7xl mx-auto">

        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">

          {/* Left */}
          <div className="max-w-3xl">

            {/* Label */}
            <p className="text-[#6d28d9] text-[11px] font-bold tracking-[0.28em] uppercase mb-4">
              Latest Insights
            </p>

            {/* Heading */}
            <h2 className="text-[28px] md:text-[42px] leading-[1.05] font-black tracking-[-0.05em] text-[#020617]">
              Amazon Growth
              <br />
              Knowledge Hub
            </h2>

          </div>

          {/* Button */}
          <Link
            href="/resources"
            className="
              inline-flex
              items-center
              gap-2
              text-[#6d28d9]
              text-[14px]
              font-semibold
              hover:gap-3
              transition-all
              duration-300
            "
          >

            View All Articles

            <ArrowRight className="w-4 h-4" />

          </Link>

        </div>

        {/* Insights Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">

          {/* ARTICLE 1 */}
          <div className="group bg-[#f7f4ff] border border-[#ece4ff] rounded-[32px] p-8 hover:-translate-y-1.5 transition-all duration-300 shadow-sm hover:shadow-md">

            {/* Category */}
            <div className="inline-flex items-center rounded-full bg-[#ede5ff] px-3 py-1">

              <span className="text-[10px] font-bold uppercase tracking-[0.08em] text-[#6d28d9]">
                Amazon PPC
              </span>

            </div>

            {/* Title */}
            <h3 className="mt-6 text-[22px] font-bold text-[#020617] leading-[1.3]">
              5 PPC Mistakes That Kill ROAS
            </h3>

            {/* Description */}
            <p className="mt-3 text-[14px] leading-[1.7] text-[#6b7280]">
              Learn the most common Amazon PPC mistakes that reduce profitability and waste advertising spend.
            </p>

            {/* Bottom */}
            <div className="mt-8 flex items-center justify-between">

              <span className="text-[12px] text-[#6b7280]">
                6 min read
              </span>

              <ArrowRight className="w-4 h-4 text-[#6d28d9] group-hover:translate-x-1 transition-all duration-300" />

            </div>

          </div>

          {/* ARTICLE 2 */}
          <div className="group bg-[#6d28d9] rounded-[32px] p-8 text-white hover:-translate-y-1.5 transition-all duration-300 shadow-lg shadow-purple-900/10 hover:shadow-xl">

            {/* Category */}
            <div className="inline-flex items-center rounded-full bg-white/10 px-3 py-1">

              <span className="text-[10px] font-bold uppercase tracking-[0.08em] text-white">
                Account Growth
              </span>

            </div>

            {/* Title */}
            <h3 className="mt-6 text-[22px] font-bold leading-[1.3]">
              Building Amazon Growth Systems
            </h3>

            {/* Description */}
            <p className="mt-3 text-[14px] leading-[1.7] text-purple-100">
              Discover how structured optimization systems improve long-term Amazon performance.
            </p>

            {/* Bottom */}
            <div className="mt-8 flex items-center justify-between">

              <span className="text-[12px] text-purple-100">
                8 min read
              </span>

              <ArrowRight className="w-4 h-4 text-white group-hover:translate-x-1 transition-all duration-300" />

            </div>

          </div>

          {/* ARTICLE 3 */}
          <div className="group bg-[#f7f4ff] border border-[#ece4ff] rounded-[32px] p-8 hover:-translate-y-1.5 transition-all duration-300 shadow-sm hover:shadow-md">

            {/* Category */}
            <div className="inline-flex items-center rounded-full bg-[#ede5ff] px-3 py-1">

              <span className="text-[10px] font-bold uppercase tracking-[0.08em] text-[#6d28d9]">
                Conversion
              </span>

            </div>

            {/* Title */}
            <h3 className="mt-6 text-[22px] font-bold text-[#020617] leading-[1.3]">
              Why Better A+ Content Wins
            </h3>

            {/* Description */}
            <p className="mt-3 text-[14px] leading-[1.7] text-[#6b7280]">
              Understand how stronger visuals, branding, and listing structure improve conversions.
            </p>

            {/* Bottom */}
            <div className="mt-8 flex items-center justify-between">

              <span className="text-[12px] text-[#6b7280]">
                5 min read
              </span>

              <ArrowRight className="w-4 h-4 text-[#6d28d9] group-hover:translate-x-1 transition-all duration-300" />

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}
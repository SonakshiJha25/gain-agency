import {
  BarChart3,
  Layers3,
  Sparkles,
  TrendingUp
} from "lucide-react";

export default function ResourceCategories() {
  return (

    // Categories Section
    <section className="relative py-24 px-6 bg-[#f7f4ff] overflow-hidden">

      {/* Glow */}
      <div className="absolute top-[-120px] right-[-120px] w-[320px] h-[320px] rounded-full bg-purple-200/40 blur-3xl" />

      {/* Main Container */}
      <div className="relative z-10 max-w-7xl mx-auto">

        {/* Header */}
        <div className="max-w-3xl mx-auto text-center">

          {/* Label */}
          <p className="text-[#6d28d9] text-[11px] font-bold tracking-[0.28em] uppercase mb-4">
            Resource Categories
          </p>

          {/* Heading */}
          <h2 className="text-[28px] md:text-[42px] leading-[1.05] font-black tracking-[-0.05em] text-[#020617]">
            Learn The Systems
            <br />
            Behind Amazon Growth
          </h2>

          {/* Description */}
          <p className="mt-5 text-[15px] md:text-[14px] leading-[1.9] text-[#6b7280]">
            Explore frameworks, strategies, and optimization systems built for scalable Amazon brands.
          </p>

        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-16">

          {/* CATEGORY 1 */}
          <div className="bg-white border border-[#ece4ff] rounded-[32px] p-8 md:p-10 shadow-sm transition-all duration-300 hover:shadow-md">

            {/* Icon */}
            <div className="w-12 h-12 rounded-xl bg-[#f3edff] flex items-center justify-center">

              <BarChart3 className="w-5 h-5 text-[#6d28d9]" />

            </div>

            {/* Title */}
            <h3 className="mt-6 text-[22px] font-bold text-[#020617]">
              Amazon PPC Strategy
            </h3>

            {/* Description */}
            <p className="mt-3 text-[14px] leading-[1.7] text-[#6b7280]">
              Learn campaign structure, ROAS optimization, keyword systems, and scaling frameworks.
            </p>

          </div>

          {/* CATEGORY 2 */}
          <div className="bg-gradient-to-br from-[#6d28d9] via-[#6d28d9] to-[#30a5b0] rounded-[32px] p-8 md:p-10 text-white shadow-lg shadow-purple-900/10 transition-all duration-300 hover:shadow-xl">

            {/* Icon */}
            <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center">

              <Layers3 className="w-5 h-5" />

            </div>

            {/* Title */}
            <h3 className="mt-6 text-[22px] font-bold">
              Account Optimization
            </h3>

            {/* Description */}
            <p className="mt-3 text-[14px] leading-[1.7] text-purple-100">
              Discover listing optimization, account structure, analytics tracking, and growth systems.
            </p>

          </div>

          {/* CATEGORY 3 */}
          <div className="bg-gradient-to-br from-[#6d28d9] via-[#6d28d9] to-[#30a5b0] rounded-[32px] p-8 md:p-10 text-white shadow-lg shadow-purple-900/10 transition-all duration-300 hover:shadow-xl">

            {/* Icon */}
            <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center">

              <Sparkles className="w-5 h-5" />

            </div>

            {/* Title */}
            <h3 className="mt-6 text-[22px] font-bold">
              A+ Content Systems
            </h3>

            {/* Description */}
            <p className="mt-3 text-[14px] leading-[1.7] text-purple-100">
              Understand conversion-focused branding, premium visuals, and customer experience systems.
            </p>

          </div>

          {/* CATEGORY 4 */}
          <div className="bg-white border border-[#ece4ff] rounded-[32px] p-8 md:p-10 shadow-sm transition-all duration-300 hover:shadow-md">

            {/* Icon */}
            <div className="w-12 h-12 rounded-xl bg-[#f3edff] flex items-center justify-center">

              <TrendingUp className="w-5 h-5 text-[#6d28d9]" />

            </div>

            {/* Title */}
            <h3 className="mt-6 text-[22px] font-bold text-[#020617]">
              Brand Scaling Frameworks
            </h3>

            {/* Description */}
            <p className="mt-3 text-[14px] leading-[1.7] text-[#6b7280]">
              Explore sustainable scaling, growth planning, and long-term Amazon expansion systems.
            </p>

          </div>

        </div>

      </div>

    </section>
  );
}

import {
  Target,
  BarChart3,
  Sparkles
} from "lucide-react";

export default function Services() {
  return (

    // Services Section
    <section className="relative py-32 px-6 bg-white overflow-hidden">

      {/* Soft Background Glow */}
      <div className="absolute top-[-120px] left-[-120px] w-[320px] h-[320px] bg-purple-100 rounded-full blur-3xl opacity-60" />

      {/* Main Container */}
      <div className="relative z-10 max-w-7xl mx-auto">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">

          {/* Small Badge */}
          <p className="text-[#6d28d9] text-[11px] font-bold tracking-[0.28em] uppercase mb-4">
            Our Services
          </p>

          {/* Main Heading */}
          <h2 className="text-[30px] md:text-[50px] leading-[0.96] font-black tracking-[-0.06em] text-[#020617]">

            Services Built For
            <br />

            <span className="bg-gradient-to-r from-[#8b5cf6] via-[#7c3aed] to-[#6d28d9] bg-clip-text text-transparent">
              Amazon Brand Growth
            </span>

          </h2>

          {/* Description */}
          <p className="mt-5 text-[15px] md:text-[16px] leading-[1.9] text-[#6b7280]">
            We help Amazon brands scale through smarter advertising,
            optimized account management, and premium A+ content
            designed to improve visibility, conversions, and long-term growth.
          </p>

        </div>

        {/* Services Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-7 mt-16">

          {/* Card 1 */}
          <div className="bg-[#faf7ff] border border-[#eee7ff] rounded-[32px] p-9 transition-all duration-300 hover:-translate-y-2">

            {/* Icon */}
            <div className="w-14 h-14 rounded-2xl bg-[#efe7ff] flex items-center justify-center mb-7">
              <Target className="w-6 h-6 text-[#6d28d9]" />
            </div>

            {/* Card Title */}
            <h3 className="text-[22px] font-bold tracking-[-0.03em] text-[#111827]">
              Ad Optimization
            </h3>

            {/* Card Description */}
            <p className="mt-4 text-[15px] leading-[1.9] text-[#6b7280]">
              Data-driven Amazon PPC strategies focused on increasing
              profitability, reducing wasted spend, and scaling your
              products with smarter advertising decisions.
            </p>

            {/* Bottom Keywords */}
            <div className="mt-7 text-[#6d28d9] text-[14px] font-semibold leading-[1.8]">
              Campaign Strategy • ROAS Scaling • Keyword Research
            </div>

          </div>

          {/* Card 2 */}
          <div className="bg-[#faf7ff] border border-[#eee7ff] rounded-[32px] p-9 transition-all duration-300 hover:-translate-y-2">

            {/* Icon */}
            <div className="w-14 h-14 rounded-2xl bg-[#efe7ff] flex items-center justify-center mb-7">
              <BarChart3 className="w-6 h-6 text-[#6d28d9]" />
            </div>

            {/* Card Title */}
            <h3 className="text-[22px] font-bold tracking-[-0.03em] text-[#111827]">
              Account Management
            </h3>

            {/* Card Description */}
            <p className="mt-4 text-[15px] leading-[1.9] text-[#6b7280]">
              Complete Amazon account management including listing
              monitoring, growth planning, analytics tracking,
              and continuous optimization for sustainable scaling.
            </p>

            {/* Bottom Keywords */}
            <div className="mt-7 text-[#6d28d9] text-[14px] font-semibold leading-[1.8]">
              Analytics • Scaling Systems • Performance Tracking
            </div>

          </div>

          {/* Card 3 */}
          <div className="bg-[#faf7ff] border border-[#eee7ff] rounded-[32px] p-9 transition-all duration-300 hover:-translate-y-2">

            {/* Icon */}
            <div className="w-14 h-14 rounded-2xl bg-[#efe7ff] flex items-center justify-center mb-7">
              <Sparkles className="w-6 h-6 text-[#6d28d9]" />
            </div>

            {/* Card Title */}
            <h3 className="text-[22px] font-bold tracking-[-0.03em] text-[#111827]">
              A+ Content Creation
            </h3>

            {/* Card Description */}
            <p className="mt-4 text-[15px] leading-[1.9] text-[#6b7280]">
              Premium branded visuals and conversion-focused
              content designed to increase trust, improve engagement,
              and create a stronger customer experience.
            </p>

            {/* Bottom Keywords */}
            <div className="mt-7 text-[#6d28d9] text-[14px] font-semibold leading-[1.8]">
              Brand Visuals • Enhanced Content • Conversion Design
            </div>

          </div>

        </div>

      </div>

    </section>
  );
}
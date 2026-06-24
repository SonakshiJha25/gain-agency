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

            <span className="bg-gradient-to-r from-[#8b5cf6] via-[#7c3aed] to-[#30a5b0] bg-clip-text text-transparent">
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
              Sponsored Ads (PPC)
            </h3>

            {/* Card Description */}
            <p className="mt-4 text-[15px] leading-[1.9] text-[#6b7280]">
              Campaigns that convert clicks into customers. End-to-end management of Sponsored Products, Sponsored Brands, and Sponsored Display campaigns.
            </p>

            {/* Bottom Keywords */}
            <div className="mt-7 text-[#30a5b0] text-[14px] font-semibold leading-[1.8]">
              Sponsored Products • Sponsored Brands • Sponsored Display
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
              Listing Optimization
            </h3>

            {/* Card Description */}
            <p className="mt-4 text-[15px] leading-[1.9] text-[#6b7280]">
              Be found. Be chosen. Improve conversions with keyword-rich, high-performing product listings.
            </p>

            {/* Bottom Keywords */}
            <div className="mt-7 text-[#30a5b0] text-[14px] font-semibold leading-[1.8]">
              Keyword Rich • Search Ranking • High-Performing Copy
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
              Visual Branding
            </h3>

            {/* Card Description */}
            <p className="mt-4 text-[15px] leading-[1.9] text-[#6b7280]">
              Stand out with a Brand Story. Design compelling visuals for A+ Content, Store page, Product images and Product videos that drive conversions.
            </p>

            {/* Bottom Keywords */}
            <div className="mt-7 text-[#30a5b0] text-[14px] font-semibold leading-[1.8]">
              A+ Content • Brand Store Page • Product Imagery & Video
            </div>

          </div>

        </div>

      </div>

    </section>
  );
}
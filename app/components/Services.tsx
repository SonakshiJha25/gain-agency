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
          <p className="text-xs font-bold tracking-[0.2em] uppercase text-[#13B3B7] mb-4">
            Our Services
          </p>

          {/* Main Heading */}
          <h2 className="text-3xl md:text-4xl font-black tracking-tight leading-[1.1] text-[#152268] text-center">
            Services Designed to
            <br />
            <span className="gain-gradient-text">
              Grow Your Brand
            </span>
          </h2>

          {/* Description */}
          <p className="mt-6 text-base text-slate-700 leading-relaxed max-w-2xl mx-auto">
            We help Amazon brands scale through smarter advertising,
            optimized account management, and premium A+ content
            designed to improve visibility, conversions, and long-term growth.
          </p>

        </div>

        {/* Services Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-7 mt-16">

          {/* Card 1 */}
          <div className="bg-white border border-gray-100 rounded-2xl p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl shadow-slate-200/60">

            {/* Icon */}
            <div className="w-14 h-14 rounded-2xl bg-[#eceaff] flex items-center justify-center mb-7">
              <Target className="w-6 h-6 text-[#4A3DD5]" />
            </div>

            {/* Card Title */}
            <h3 className="text-xl font-bold tracking-tight text-[#152268]">
              Sponsored Ads (PPC)
            </h3>

            {/* Card Description */}
            <p className="mt-4 text-base leading-relaxed text-slate-700">
              <span className="block font-bold text-[#152268] mb-2">
                Campaigns that convert clicks into customers.
              </span>
              End-to-end management of Sponsored Products, Sponsored Brands, and Sponsored Display campaigns.
            </p>

            {/* Bottom Keywords */}
            <div className="mt-8 text-sm font-semibold leading-relaxed text-[#13B3B7]">
              Sponsored Products • Sponsored Brands • Sponsored Display
            </div>

          </div>

          {/* Card 2 */}
          <div className="bg-white border border-gray-100 rounded-2xl p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl shadow-slate-200/60">

            {/* Icon */}
            <div className="w-14 h-14 rounded-2xl bg-[#eceaff] flex items-center justify-center mb-7">
              <BarChart3 className="w-6 h-6 text-[#4A3DD5]" />
            </div>

            {/* Card Title */}
            <h3 className="text-xl font-bold tracking-tight text-[#152268]">
              Listing Optimization
            </h3>

            {/* Card Description */}
            <p className="mt-4 text-base leading-relaxed text-slate-700">
              <span className="block font-bold text-[#152268] mb-2">
                Be found. Be chosen.
              </span>
              Improve conversions with keyword-rich, high-performing product listings. Increase visibility and conversions with product listings optimized for search rankings and shopper engagement.
            </p>

            {/* Bottom Keywords */}
            <div className="mt-8 text-sm font-semibold leading-relaxed text-[#13B3B7]">
              Keyword Rich • Search Ranking • High-Performing Copy
            </div>

          </div>

          {/* Card 3 */}
          <div className="bg-white border border-gray-100 rounded-2xl p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl shadow-slate-200/60">

            {/* Icon */}
            <div className="w-14 h-14 rounded-2xl bg-[#eceaff] flex items-center justify-center mb-7">
              <Sparkles className="w-6 h-6 text-[#4A3DD5]" />
            </div>

            {/* Card Title */}
            <h3 className="text-xl font-bold tracking-tight text-[#152268]">
              Visual Branding
            </h3>

            {/* Card Description */}
            <p className="mt-4 text-base leading-relaxed text-slate-700">
              <span className="block font-bold text-[#152268] mb-2">
                Stand out with a Brand Story.
              </span>
              Design compelling visuals for A+ Content, Store page, Product images and Product videos that drive conversions.
            </p>

            {/* Bottom Keywords */}
            <div className="mt-8 text-sm font-semibold leading-relaxed text-[#13B3B7]">
              A+ Content • Brand Store Page • Product Imagery & Video
            </div>

          </div>

        </div>

      </div>

    </section>
  );
}
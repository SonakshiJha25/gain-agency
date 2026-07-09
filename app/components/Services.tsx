import Link from "next/link";
import {
  Target,
  BarChart3,
  Sparkles,
  ArrowRight
} from "lucide-react";

export default function Services() {
  return (

    // Services Section
    <section className="relative py-16 md:py-32 px-6 bg-white overflow-hidden">

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
          <a
            href="/services#ppc"
            className="group bg-[#f8f7ff] border border-[#e2dfff] rounded-2xl p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-purple-100 flex flex-col justify-between"
          >
            <div>
              {/* Icon & Arrow Wrapper */}
              <div className="flex justify-between items-start mb-7">
                <div className="w-14 h-14 rounded-2xl bg-[#eceaff] flex items-center justify-center group-hover:bg-[#4A3DD5]/10 transition-colors">
                  <Target className="w-6 h-6 text-[#4A3DD5]" />
                </div>
                <ArrowRight className="w-5 h-5 text-slate-400 group-hover:text-[#4A3DD5] group-hover:translate-x-1 transition-all" />
              </div>

              {/* Card Title */}
              <h3 className="text-xl font-bold tracking-tight text-[#152268] group-hover:text-[#4A3DD5] transition-colors">
                Sponsored Ads (PPC)
              </h3>

              {/* Card Description */}
              <p className="mt-4 text-base leading-relaxed text-slate-700">
                <span className="block font-bold text-[#152268] mb-2">
                  Campaigns that convert clicks into customers.
                </span>
                End-to-end management of Sponsored Products, Sponsored Brands, and Sponsored Display campaigns.
              </p>
            </div>

            {/* Bottom Keywords */}
            <div className="mt-8 text-sm font-semibold leading-relaxed text-[#13B3B7]">
              Sponsored Products • Sponsored Brands • Sponsored Display
            </div>
          </a>

          {/* Card 2 */}
          <a
            href="/services#listing-optimization"
            className="group bg-[#f8f7ff] border border-[#e2dfff] rounded-2xl p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-purple-100 flex flex-col justify-between"
          >
            <div>
              {/* Icon & Arrow Wrapper */}
              <div className="flex justify-between items-start mb-7">
                <div className="w-14 h-14 rounded-2xl bg-[#eceaff] flex items-center justify-center group-hover:bg-[#4A3DD5]/10 transition-colors">
                  <BarChart3 className="w-6 h-6 text-[#4A3DD5]" />
                </div>
                <ArrowRight className="w-5 h-5 text-slate-400 group-hover:text-[#4A3DD5] group-hover:translate-x-1 transition-all" />
              </div>

              {/* Card Title */}
              <h3 className="text-xl font-bold tracking-tight text-[#152268] group-hover:text-[#4A3DD5] transition-colors">
                Listing Optimization
              </h3>

              {/* Card Description */}
              <p className="mt-4 text-base leading-relaxed text-slate-700">
                <span className="block font-bold text-[#152268] mb-2">
                  Be found. Be chosen.
                </span>
                Improve conversions with keyword-rich, high-performing product listings. Increase visibility and conversions with product listings optimized for search rankings and shopper engagement.
              </p>
            </div>

            {/* Bottom Keywords */}
            <div className="mt-8 text-sm font-semibold leading-relaxed text-[#13B3B7]">
              Keyword Rich • Search Ranking • High-Performing Copy
            </div>
          </a>

          {/* Card 3 */}
          <a
            href="/services#visual-branding"
            className="group bg-[#f8f7ff] border border-[#e2dfff] rounded-2xl p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-purple-100 flex flex-col justify-between"
          >
            <div>
              {/* Icon & Arrow Wrapper */}
              <div className="flex justify-between items-start mb-7">
                <div className="w-14 h-14 rounded-2xl bg-[#eceaff] flex items-center justify-center group-hover:bg-[#4A3DD5]/10 transition-colors">
                  <Sparkles className="w-6 h-6 text-[#4A3DD5]" />
                </div>
                <ArrowRight className="w-5 h-5 text-slate-400 group-hover:text-[#4A3DD5] group-hover:translate-x-1 transition-all" />
              </div>

              {/* Card Title */}
              <h3 className="text-xl font-bold tracking-tight text-[#152268] group-hover:text-[#4A3DD5] transition-colors">
                Visual Branding
              </h3>

              {/* Card Description */}
              <p className="mt-4 text-base leading-relaxed text-slate-700">
                <span className="block font-bold text-[#152268] mb-2">
                  Stand out with a Brand Story.
                </span>
                Design compelling visuals for A+ Content, Store page, Product images and Product videos that drive conversions.
              </p>
            </div>

            {/* Bottom Keywords */}
            <div className="mt-8 text-sm font-semibold leading-relaxed text-[#13B3B7]">
              A+ Content • Brand Store Page • Product Imagery & Video
            </div>
          </a>

        </div>

      </div>

    </section>
  );
}
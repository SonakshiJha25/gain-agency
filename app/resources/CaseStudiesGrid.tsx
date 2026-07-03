import {
  TrendingUp,
  BarChart3,
  MousePointerClick
} from "lucide-react";

export default function CaseStudiesGrid() {
  return (

    // Case Studies Section (Merged inside Resources)
    <section className="relative bg-[#f5f4ff] py-28 px-6 overflow-hidden border-t border-[#e2dfff]">

      {/* Main Container */}
      <div className="max-w-7xl mx-auto">

        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center">

          {/* Badge */}
          <p className="text-[#4A3DD5] text-xs font-bold tracking-[0.2em] uppercase mb-4">
            Proven Frameworks
          </p>

          {/* Heading */}
          <h2 className="text-3xl md:text-4xl font-black tracking-tight leading-[1.1] text-[#152268]">
            Structured Case Studies
          </h2>
          
          <p className="mt-4 text-sm leading-relaxed text-slate-700">
            Review how we deploy advertising, optimization, and content frameworks to support Amazon brands.
          </p>

        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-16">

          {/* CARD 1 */}
          <div className="group bg-[#f8f7ff] border border-[#e2dfff] rounded-[32px] p-8 hover:-translate-y-2 transition-all duration-500 shadow-sm">

            {/* Icon */}
            <div className="w-14 h-14 rounded-2xl bg-[#eceaff] flex items-center justify-center">
              <TrendingUp className="w-6 h-6 text-[#4A3DD5]" />
            </div>

            {/* Category */}
            <p className="mt-8 text-[12px] font-bold tracking-[0.16em] uppercase text-[#4A3DD5]">
              Amazon PPC
            </p>

            {/* Title */}
            <h3 className="mt-4 text-xl font-black tracking-tight text-[#152268]">
              Campaign Efficiency Restructure
            </h3>

            {/* Description */}
            <p className="mt-5 text-sm leading-relaxed text-slate-700">
              Rebuilt account ad structures to improve efficiency, eliminate wasted spend on non-converting keywords, and build scalable campaign categories.
            </p>

            {/* Focus Highlights */}
            <div className="mt-8 pt-6 border-t border-[#f0ebff]">
              <p className="text-[12px] font-bold text-[#13B3B7] uppercase tracking-[0.08em]">
                Key Deliverables
              </p>
              <p className="mt-2 text-[13px] text-slate-700 font-medium">
                Keyword Re-harvesting • Precision Bidding • Negative Match Auditing
              </p>
            </div>

          </div>

          {/* CARD 2 */}
          <div className="group bg-[#f8f7ff] border border-[#e2dfff] rounded-[32px] p-8 hover:-translate-y-2 transition-all duration-500 shadow-sm">

            {/* Icon */}
            <div className="w-14 h-14 rounded-2xl bg-[#eceaff] flex items-center justify-center">
              <BarChart3 className="w-6 h-6 text-[#4A3DD5]" />
            </div>

            {/* Category */}
            <p className="mt-8 text-[12px] font-bold tracking-[0.16em] uppercase text-[#4A3DD5]">
              Listing Optimization
            </p>

            {/* Title */}
            <h3 className="mt-4 text-xl font-black tracking-tight text-[#152268]">
              Algorithm & Conversion Alignment
            </h3>

            {/* Description */}
            <p className="mt-5 text-sm leading-relaxed text-slate-700">
              Refined product title keywords, descriptions, and backend search terms to align with Amazon's indexing guidelines and buyer conversion flow.
            </p>

            {/* Focus Highlights */}
            <div className="mt-8 pt-6 border-t border-[#f0ebff]">
              <p className="text-[12px] font-bold text-[#13B3B7] uppercase tracking-[0.08em]">
                Key Deliverables
              </p>
              <p className="mt-2 text-[13px] text-slate-700 font-medium">
                SEO Indexing Analysis • Bullet Point Copywriting • Shopper Intent Mapping
              </p>
            </div>

          </div>

          {/* CARD 3 */}
          <div className="group bg-[#f8f7ff] border border-[#e2dfff] rounded-[32px] p-8 hover:-translate-y-2 transition-all duration-500 shadow-sm">

            {/* Icon */}
            <div className="w-14 h-14 rounded-2xl bg-[#eceaff] flex items-center justify-center">
              <MousePointerClick className="w-6 h-6 text-[#4A3DD5]" />
            </div>

            {/* Category */}
            <p className="mt-8 text-[12px] font-bold tracking-[0.16em] uppercase text-[#4A3DD5]">
              Visual Branding
            </p>

            {/* Title */}
            <h3 className="mt-4 text-xl font-black tracking-tight text-[#152268]">
              A+ Content & Storefront Design
            </h3>

            {/* Description */}
            <p className="mt-5 text-sm leading-relaxed text-slate-700">
              Created custom visual assets and comparison tables for product detail pages, establishing a highly polished, trustworthy brand storefront.
            </p>

            {/* Focus Highlights */}
            <div className="mt-8 pt-6 border-t border-[#f0ebff]">
              <p className="text-[12px] font-bold text-[#13B3B7] uppercase tracking-[0.08em]">
                Key Deliverables
              </p>
              <p className="mt-2 text-[13px] text-slate-700 font-medium">
                Storefront Architecture • Lifestyle Graphic Infographics • Mobile-Optimized Layouts
              </p>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

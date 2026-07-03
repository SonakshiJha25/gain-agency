import {
  ArrowUpRight,
  BarChart3,
  Layers3,
  PenTool
} from "lucide-react";

export default function ServicesGrid() {
  return (

    // Services Grid Section
    <section className="relative py-32 px-6 bg-white overflow-hidden">

      {/* Soft Glow */}
      <div className="absolute bottom-[-120px] left-[-120px] w-[320px] h-[320px] bg-purple-100 rounded-full blur-3xl opacity-60" />

      {/* Main Container */}
      <div className="relative z-10 max-w-7xl mx-auto">

        {/* Header */}
        <div className="max-w-3xl mx-auto text-center">

          {/* Badge */}
          <p className="text-xs font-bold tracking-[0.2em] uppercase text-[#13B3B7] mb-6">
            Core Services
          </p>

          {/* Heading */}
          <h2 className="text-3xl md:text-4xl font-black tracking-tight leading-[1.1] text-[#152268]">
            Services Designed to
            <br />
            <span className="gain-gradient-text">
              Grow Your Brand
            </span>
          </h2>

          {/* Description */}
          <p className="mt-6 text-sm leading-relaxed text-slate-700">
            Every service is designed to improve visibility,
            conversion rates, profitability, and long-term
            brand growth on Amazon.
          </p>

        </div>

        {/* Services Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-7 mt-20">

          {/* CARD 1 */}
          <div className="group bg-[#f8f7ff] border border-[#e2dfff] rounded-3xl p-10 hover:-translate-y-2 hover:shadow-2xl shadow-slate-200/60 transition-all duration-500">

            {/* Icon */}
            <div className="w-14 h-14 rounded-2xl bg-gray-50 flex items-center justify-center border border-gray-100">

              <BarChart3 className="w-6 h-6 text-[#4A3DD5]" />

            </div>

            {/* Heading */}
            <div className="flex items-center justify-between mt-8">

              <h3 className="text-xl font-black tracking-tight text-[#152268]">
                Sponsored Ads (PPC)
              </h3>

              <ArrowUpRight className="w-5 h-5 text-[#13B3B7] transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />

            </div>

            {/* Description */}
            <p className="mt-6 text-sm leading-relaxed text-slate-700">
              <span className="block font-bold text-[#152268] mb-2">
                Campaigns that convert clicks into customers.
              </span>
              End-to-end management of Sponsored Products, Sponsored Brands, and Sponsored Display campaigns.
            </p>

          </div>

          {/* CARD 2 */}
          <div className="group bg-[#f8f7ff] border border-[#e2dfff] rounded-3xl p-10 hover:-translate-y-2 hover:shadow-2xl shadow-slate-200/60 transition-all duration-500">

            {/* Icon */}
            <div className="w-14 h-14 rounded-2xl bg-gray-50 flex items-center justify-center border border-gray-100">

              <Layers3 className="w-6 h-6 text-[#4A3DD5]" />

            </div>

            {/* Heading */}
            <div className="flex items-center justify-between mt-8">

              <h3 className="text-xl font-black tracking-tight text-[#152268]">
                Listing Optimization
              </h3>

              <ArrowUpRight className="w-5 h-5 text-[#13B3B7] transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />

            </div>

            {/* Description */}
            <p className="mt-6 text-sm leading-relaxed text-slate-700">
              <span className="block font-bold text-[#152268] mb-2">
                Be found. Be chosen.
              </span>
              Improve conversions with keyword-rich, high-performing product listings. Increase visibility and conversions with product listings optimized for search rankings and shopper engagement.
            </p>

          </div>

          {/* CARD 3 */}
          <div className="group bg-[#f8f7ff] border border-[#e2dfff] rounded-3xl p-10 hover:-translate-y-2 hover:shadow-2xl shadow-slate-200/60 transition-all duration-500">

            {/* Icon */}
            <div className="w-14 h-14 rounded-2xl bg-gray-50 flex items-center justify-center border border-gray-100">

              <PenTool className="w-6 h-6 text-[#4A3DD5]" />

            </div>

            {/* Heading */}
            <div className="flex items-center justify-between mt-8">

              <h3 className="text-xl font-black tracking-tight text-[#152268]">
                Visual Branding
              </h3>

              <ArrowUpRight className="w-5 h-5 text-[#13B3B7] transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />

            </div>

            {/* Description */}
            <p className="mt-6 text-sm leading-relaxed text-slate-700">
              <span className="block font-bold text-[#152268] mb-2">
                Stand out with a Brand Story.
              </span>
              Design compelling visuals for A+ Content, Store page, Product images and Product videos that drive conversions.
            </p>

          </div>

        </div>

      </div>

    </section>
  );
}
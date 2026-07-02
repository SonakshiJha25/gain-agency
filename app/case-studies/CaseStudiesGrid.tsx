import {
  TrendingUp,
  BarChart3,
  MousePointerClick
} from "lucide-react";

export default function CaseStudiesGrid() {
  return (

    // Case Studies Grid
    <section className="relative bg-[#f4f3ff] py-28 px-6 overflow-hidden">

      {/* Main Container */}
      <div className="max-w-7xl mx-auto">

        {/* Section Header */}
        <div className="max-w-3xl">

          {/* Badge */}
          <p className="text-[#4A3DD5] text-[11px] font-bold tracking-[0.28em] uppercase mb-4">
            Featured Performance
          </p>

          {/* Heading */}
          <h2 className="text-[28px] md:text-[42px] leading-[1.05] font-black tracking-[-0.05em] text-[#152268]">

            Structured Growth
            <br />

            Across Amazon Brands

          </h2>

        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-20">

          {/* CARD 1 */}
          <div className="group bg-white border border-[#e2dfff] rounded-[32px] p-8 hover:-translate-y-2 transition-all duration-500">

            {/* Icon */}
            <div className="w-14 h-14 rounded-2xl bg-white flex items-center justify-center">

              <TrendingUp className="w-6 h-6 text-[#4A3DD5]" />

            </div>

            {/* Category */}
            <p className="mt-8 text-[12px] font-bold tracking-[0.16em] uppercase text-[#4A3DD5]">
              Amazon PPC
            </p>

            {/* Title */}
            <h3 className="mt-4 text-[28px] leading-[1.05] font-black tracking-[-0.05em] text-[#152268]">

              Improving
              <br />

              Campaign Efficiency

            </h3>

            {/* Description */}
            <p className="mt-5 text-[14px] leading-[1.9] text-slate-700">

              Rebuilt campaign structures to improve
              ROAS, reduce wasted spend, and create
              scalable advertising systems.

            </p>

            {/* Metrics */}
            <div className="mt-8 flex items-center gap-8">

              <div>

                <h4 className="text-[30px] font-black tracking-[-0.05em] text-[#4A3DD5]">
                  +32%
                </h4>

                <p className="text-[13px] text-slate-700 mt-1">
                  ROAS Growth
                </p>

              </div>

              <div>

                <h4 className="text-[30px] font-black tracking-[-0.05em] text-[#4A3DD5]">
                  -18%
                </h4>

                <p className="text-[13px] text-slate-700 mt-1">
                  Lower ACOS
                </p>

              </div>

            </div>

          </div>

          {/* CARD 2 */}
          <div className="group bg-white border border-[#e2dfff] rounded-[32px] p-8 hover:-translate-y-2 transition-all duration-500">

            {/* Icon */}
            <div className="w-14 h-14 rounded-2xl bg-white flex items-center justify-center">

              <BarChart3 className="w-6 h-6 text-[#4A3DD5]" />

            </div>

            {/* Category */}
            <p className="mt-8 text-[12px] font-bold tracking-[0.16em] uppercase text-[#4A3DD5]">
              Account Management
            </p>

            {/* Title */}
            <h3 className="mt-4 text-[28px] leading-[1.05] font-black tracking-[-0.05em] text-[#152268]">

              Better Listing
              <br />

              Performance

            </h3>

            {/* Description */}
            <p className="mt-5 text-[14px] leading-[1.9] text-slate-700">

              Optimized listings, monitored analytics,
              and improved conversion-focused store
              performance systems.

            </p>

            {/* Metrics */}
            <div className="mt-8 flex items-center gap-8">

              <div>

                <h4 className="text-[30px] font-black tracking-[-0.05em] text-[#4A3DD5]">
                  +21%
                </h4>

                <p className="text-[13px] text-slate-700 mt-1">
                  Conversion Lift
                </p>

              </div>

              <div>

                <h4 className="text-[30px] font-black tracking-[-0.05em] text-[#4A3DD5]">
                  +48%
                </h4>

                <p className="text-[13px] text-slate-700 mt-1">
                  Organic Reach
                </p>

              </div>

            </div>

          </div>

          {/* CARD 3 */}
          <div className="group bg-white border border-[#e2dfff] rounded-[32px] p-8 hover:-translate-y-2 transition-all duration-500">

            {/* Icon */}
            <div className="w-14 h-14 rounded-2xl bg-white flex items-center justify-center">

              <MousePointerClick className="w-6 h-6 text-[#4A3DD5]" />

            </div>

            {/* Category */}
            <p className="mt-8 text-[12px] font-bold tracking-[0.16em] uppercase text-[#4A3DD5]">
              A+ Content
            </p>

            {/* Title */}
            <h3 className="mt-4 text-[28px] leading-[1.05] font-black tracking-[-0.05em] text-[#152268]">

              Stronger Brand
              <br />

              Engagement

            </h3>

            {/* Description */}
            <p className="mt-5 text-[14px] leading-[1.9] text-slate-700">

              Created premium visual systems and
              conversion-focused A+ content for
              stronger customer trust.

            </p>

            {/* Metrics */}
            <div className="mt-8 flex items-center gap-8">

              <div>

                <h4 className="text-[30px] font-black tracking-[-0.05em] text-[#4A3DD5]">
                  +27%
                </h4>

                <p className="text-[13px] text-slate-700 mt-1">
                  CTR Increase
                </p>

              </div>

              <div>

                <h4 className="text-[30px] font-black tracking-[-0.05em] text-[#4A3DD5]">
                  +19%
                </h4>

                <p className="text-[13px] text-slate-700 mt-1">
                  Conversion Lift
                </p>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}
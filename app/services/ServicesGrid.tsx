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
        <div className="max-w-3xl">

          {/* Badge */}
          <p className="text-[#6d28d9] text-[11px] font-bold tracking-[0.28em] uppercase mb-4">
            Core Services
          </p>

          {/* Heading */}
          <h2 className="text-[30px] md:text-[50px] leading-[0.96] font-black tracking-[-0.06em] text-[#020617]">

            Built Around
            <br />

            <span className="bg-gradient-to-r from-[#8b5cf6] via-[#7c3aed] to-[#6d28d9] bg-clip-text text-transparent">
              Amazon Performance
            </span>

          </h2>

          {/* Description */}
          <p className="mt-5 text-[15px] md:text-[14px] leading-[1.9] text-[#6b7280]">
            Every service is designed to improve visibility,
            conversion rates, profitability, and long-term
            brand growth on Amazon.
          </p>

        </div>

        {/* Services Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-7 mt-20">

          {/* CARD 1 */}
          <div className="group bg-[#faf7ff] border border-[#eee7ff] rounded-[32px] p-9 hover:-translate-y-2 transition-all duration-500">

            {/* Icon */}
            <div className="w-14 h-14 rounded-2xl bg-[#efe7ff] flex items-center justify-center">

              <BarChart3 className="w-6 h-6 text-[#6d28d9]" />

            </div>

            {/* Heading */}
            <div className="flex items-center justify-between mt-8">

              <h3 className="text-[26px] font-black tracking-[-0.04em] text-[#111827]">
                Ad Optimization
              </h3>

              <ArrowUpRight className="w-5 h-5 text-[#6d28d9] transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />

            </div>

            {/* Description */}
            <p className="mt-5 text-[15px] leading-[1.9] text-[#6b7280]">
              Performance-focused Amazon PPC management
              designed to reduce wasted spend, improve ROAS,
              and scale profitable campaigns.
            </p>

            {/* Features */}
            <div className="space-y-3 mt-8">

              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-[#6d28d9]" />
                <p className="text-[14px] text-[#111827]">
                  Campaign Structure Optimization
                </p>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-[#6d28d9]" />
                <p className="text-[14px] text-[#111827]">
                  Keyword Research & Scaling
                </p>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-[#6d28d9]" />
                <p className="text-[14px] text-[#111827]">
                  ROAS & ACOS Monitoring
                </p>
              </div>

            </div>

          </div>

          {/* CARD 2 */}
          <div className="group bg-[#faf7ff] border border-[#eee7ff] rounded-[32px] p-9 hover:-translate-y-2 transition-all duration-500">

            {/* Icon */}
            <div className="w-14 h-14 rounded-2xl bg-[#efe7ff] flex items-center justify-center">

              <Layers3 className="w-6 h-6 text-[#6d28d9]" />

            </div>

            {/* Heading */}
            <div className="flex items-center justify-between mt-8">

              <h3 className="text-[26px] font-black tracking-[-0.04em] text-[#111827]">
                Account Management
              </h3>

              <ArrowUpRight className="w-5 h-5 text-[#6d28d9] transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />

            </div>

            {/* Description */}
            <p className="mt-5 text-[15px] leading-[1.9] text-[#6b7280]">
              End-to-end Amazon account management focused
              on operational efficiency, listing health,
              scaling systems, and growth consistency.
            </p>

            {/* Features */}
            <div className="space-y-3 mt-8">

              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-[#6d28d9]" />
                <p className="text-[14px] text-[#111827]">
                  Listing Monitoring & Optimization
                </p>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-[#6d28d9]" />
                <p className="text-[14px] text-[#111827]">
                  Analytics & Performance Tracking
                </p>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-[#6d28d9]" />
                <p className="text-[14px] text-[#111827]">
                  Scaling & Growth Planning
                </p>
              </div>

            </div>

          </div>

          {/* CARD 3 */}
          <div className="group bg-[#faf7ff] border border-[#eee7ff] rounded-[32px] p-9 hover:-translate-y-2 transition-all duration-500">

            {/* Icon */}
            <div className="w-14 h-14 rounded-2xl bg-[#efe7ff] flex items-center justify-center">

              <PenTool className="w-6 h-6 text-[#6d28d9]" />

            </div>

            {/* Heading */}
            <div className="flex items-center justify-between mt-8">

              <h3 className="text-[26px] font-black tracking-[-0.04em] text-[#111827]">
                A+ Content Creation
              </h3>

              <ArrowUpRight className="w-5 h-5 text-[#6d28d9] transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />

            </div>

            {/* Description */}
            <p className="mt-5 text-[15px] leading-[1.9] text-[#6b7280]">
              Premium branded visuals and conversion-focused
              content systems designed to improve trust,
              engagement, and purchase intent.
            </p>

            {/* Features */}
            <div className="space-y-3 mt-8">

              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-[#6d28d9]" />
                <p className="text-[14px] text-[#111827]">
                  Premium Brand Visual Systems
                </p>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-[#6d28d9]" />
                <p className="text-[14px] text-[#111827]">
                  Enhanced Product Storytelling
                </p>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-[#6d28d9]" />
                <p className="text-[14px] text-[#111827]">
                  Conversion-Focused Design
                </p>
              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}
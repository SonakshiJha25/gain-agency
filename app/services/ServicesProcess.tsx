import {
  Search,
  ClipboardCheck,
  Rocket,
  BarChart4
} from "lucide-react";

export default function ServicesProcess() {
  return (

    // Process Section
    <section id="process" className="relative py-24 px-6 bg-white overflow-hidden">

      {/* Background Glow */}
      <div className="absolute right-[-120px] top-[20%] w-[320px] h-[320px] bg-purple-100 rounded-full blur-3xl opacity-60" />

      {/* Main Container */}
      <div className="relative z-10 max-w-7xl mx-auto">

        {/* Header */}
        <div className="max-w-3xl mx-auto text-center">

          {/* Badge */}
          <p className="text-[#6d28d9] text-[11px] font-bold tracking-[0.28em] uppercase mb-4">
            Our Process
          </p>

          {/* Heading */}
          <h2 className="text-[30px] md:text-[50px] leading-[0.96] font-black tracking-[-0.06em] text-[#020617]">
            A Structured Process
            <br />
            <span className="bg-gradient-to-r from-[#8b5cf6] via-[#7c3aed] to-[#6d28d9] bg-clip-text text-transparent">
              Built For Scaling
            </span>
          </h2>

          {/* Description */}
          <p className="mt-5 text-[15px] md:text-[14px] leading-[1.9] text-[#6b7280]">
            Every growth strategy follows a performance-focused
            framework designed to improve visibility,
            profitability, and long-term Amazon scaling.
          </p>

        </div>

        {/* Process Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7 mt-20">

          {/* STEP 1 */}
          <div className="group bg-[#faf7ff] border border-[#eee7ff] rounded-[32px] p-8 hover:-translate-y-2 transition-all duration-500">

            {/* Number */}
            <div className="flex items-center justify-between">

              <span className="text-[44px] font-black tracking-[-0.06em] text-[#d8c6ff]">
                01
              </span>

              <div className="w-12 h-12 rounded-2xl bg-[#efe7ff] flex items-center justify-center">

                <Search className="w-5 h-5 text-[#6d28d9]" />

              </div>

            </div>

            {/* Heading */}
            <h3 className="mt-8 text-[24px] font-black tracking-[-0.04em] text-[#111827]">
              Audit
            </h3>

            {/* Description */}
            <p className="mt-4 text-[14px] leading-[1.9] text-[#6b7280]">
              We analyze your Amazon account,
              campaigns, listings, and brand positioning
              to identify growth opportunities.
            </p>

          </div>

          {/* STEP 2 */}
          <div className="group bg-[#faf7ff] border border-[#eee7ff] rounded-[32px] p-8 hover:-translate-y-2 transition-all duration-500">

            {/* Number */}
            <div className="flex items-center justify-between">

              <span className="text-[44px] font-black tracking-[-0.06em] text-[#d8c6ff]">
                02
              </span>

              <div className="w-12 h-12 rounded-2xl bg-[#efe7ff] flex items-center justify-center">

                <ClipboardCheck className="w-5 h-5 text-[#6d28d9]" />

              </div>

            </div>

            {/* Heading */}
            <h3 className="mt-8 text-[24px] font-black tracking-[-0.04em] text-[#111827]">
              Strategy
            </h3>

            {/* Description */}
            <p className="mt-4 text-[14px] leading-[1.9] text-[#6b7280]">
              Based on performance insights,
              we build a scaling strategy focused
              on profitability and growth.
            </p>

          </div>

          {/* STEP 3 */}
          <div className="group bg-[#faf7ff] border border-[#eee7ff] rounded-[32px] p-8 hover:-translate-y-2 transition-all duration-500">

            {/* Number */}
            <div className="flex items-center justify-between">

              <span className="text-[44px] font-black tracking-[-0.06em] text-[#d8c6ff]">
                03
              </span>

              <div className="w-12 h-12 rounded-2xl bg-[#efe7ff] flex items-center justify-center">

                <Rocket className="w-5 h-5 text-[#6d28d9]" />

              </div>

            </div>

            {/* Heading */}
            <h3 className="mt-8 text-[24px] font-black tracking-[-0.04em] text-[#111827]">
              Execution
            </h3>

            {/* Description */}
            <p className="mt-4 text-[14px] leading-[1.9] text-[#6b7280]">
              Campaigns, account systems,
              and content assets are executed
              with precision and consistency.
            </p>

          </div>

          {/* STEP 4 */}
          <div className="group bg-[#faf7ff] border border-[#eee7ff] rounded-[32px] p-8 hover:-translate-y-2 transition-all duration-500">

            {/* Number */}
            <div className="flex items-center justify-between">

              <span className="text-[44px] font-black tracking-[-0.06em] text-[#d8c6ff]">
                04
              </span>

              <div className="w-12 h-12 rounded-2xl bg-[#efe7ff] flex items-center justify-center">

                <BarChart4 className="w-5 h-5 text-[#6d28d9]" />

              </div>

            </div>

            {/* Heading */}
            <h3 className="mt-8 text-[24px] font-black tracking-[-0.04em] text-[#111827]">
              Optimization
            </h3>

            {/* Description */}
            <p className="mt-4 text-[14px] leading-[1.9] text-[#6b7280]">
              Continuous performance tracking
              helps improve efficiency,
              conversions, and scaling results.
            </p>

          </div>

        </div>

      </div>

    </section>
  );
}
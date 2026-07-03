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
          <p className="text-xs font-bold tracking-[0.2em] uppercase text-[#13B3B7] mb-6">
            Our Process
          </p>

          {/* Heading */}
          <h2 className="text-3xl md:text-4xl font-black tracking-tight leading-[1.1] text-[#152268]">
            A Structured Process
            <br />
            <span className="gain-gradient-text">
              Built For Scaling
            </span>
          </h2>

          {/* Description */}
          <p className="mt-6 text-sm leading-relaxed text-slate-700">
            Every growth strategy follows a performance-focused
            framework designed to improve visibility,
            profitability, and long-term Amazon scaling.
          </p>

        </div>

        {/* Process Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7 mt-20">

          {/* STEP 1 */}
          <div className="group bg-white border border-gray-100 rounded-3xl p-10 hover:-translate-y-2 hover:shadow-2xl shadow-slate-200/60 transition-all duration-500">

            {/* Number */}
            <div className="flex items-center justify-between">

              <span className="text-4xl font-black tracking-tight text-slate-600">
                01
              </span>

              <div className="w-14 h-14 rounded-2xl bg-gray-50 flex items-center justify-center border border-gray-100">

                <Search className="w-5 h-5 text-[#13B3B7]" />

              </div>

            </div>

            {/* Heading */}
            <h3 className="mt-8 text-xl font-black tracking-tight text-[#152268]">
              Audit
            </h3>

            {/* Description */}
            <p className="mt-4 text-sm leading-relaxed text-slate-700">
              We analyze your Amazon account,
              campaigns, listings, and brand positioning
              to identify growth opportunities.
            </p>

          </div>

          {/* STEP 2 */}
          <div className="group bg-white border border-gray-100 rounded-3xl p-10 hover:-translate-y-2 hover:shadow-2xl shadow-slate-200/60 transition-all duration-500">

            {/* Number */}
            <div className="flex items-center justify-between">

              <span className="text-4xl font-black tracking-tight text-slate-600">
                02
              </span>

              <div className="w-14 h-14 rounded-2xl bg-gray-50 flex items-center justify-center border border-gray-100">

                <ClipboardCheck className="w-5 h-5 text-[#13B3B7]" />

              </div>

            </div>

            {/* Heading */}
            <h3 className="mt-8 text-xl font-black tracking-tight text-[#152268]">
              Strategy
            </h3>

            {/* Description */}
            <p className="mt-4 text-sm leading-relaxed text-slate-700">
              Based on performance insights,
              we build a scaling strategy focused
              on profitability and growth.
            </p>

          </div>

          {/* STEP 3 */}
          <div className="group bg-white border border-gray-100 rounded-3xl p-10 hover:-translate-y-2 hover:shadow-2xl shadow-slate-200/60 transition-all duration-500">

            {/* Number */}
            <div className="flex items-center justify-between">

              <span className="text-4xl font-black tracking-tight text-slate-600">
                03
              </span>

              <div className="w-14 h-14 rounded-2xl bg-gray-50 flex items-center justify-center border border-gray-100">

                <Rocket className="w-5 h-5 text-[#13B3B7]" />

              </div>

            </div>

            {/* Heading */}
            <h3 className="mt-8 text-xl font-black tracking-tight text-[#152268]">
              Execution
            </h3>

            {/* Description */}
            <p className="mt-4 text-sm leading-relaxed text-slate-700">
              Campaigns, account systems,
              and content assets are executed
              with precision and consistency.
            </p>

          </div>

          {/* STEP 4 */}
          <div className="group bg-white border border-gray-100 rounded-3xl p-10 hover:-translate-y-2 hover:shadow-2xl shadow-slate-200/60 transition-all duration-500">

            {/* Number */}
            <div className="flex items-center justify-between">

              <span className="text-4xl font-black tracking-tight text-slate-600">
                04
              </span>

              <div className="w-14 h-14 rounded-2xl bg-gray-50 flex items-center justify-center border border-gray-100">

                <BarChart4 className="w-5 h-5 text-[#13B3B7]" />

              </div>

            </div>

            {/* Heading */}
            <h3 className="mt-8 text-xl font-black tracking-tight text-[#152268]">
              Optimization
            </h3>

            {/* Description */}
            <p className="mt-4 text-sm leading-relaxed text-slate-700">
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
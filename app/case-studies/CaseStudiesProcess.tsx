import {
  Search,
  LineChart,
  Rocket,
  ShieldCheck
} from "lucide-react";

export default function CaseStudiesProcess() {
  return (

    // Process Section
    <section className="relative py-32 px-6 bg-white overflow-hidden">

      {/* Background Glow */}
      <div className="absolute bottom-[-140px] left-[-120px] w-[320px] h-[320px] rounded-full bg-purple-200/40 blur-3xl" />

      {/* Main Container */}
      <div className="relative z-10 max-w-7xl mx-auto">

        {/* Header */}
        <div className="max-w-3xl mx-auto text-center">

          {/* Badge */}
          <p className="text-[#4A3DD5] text-[11px] font-bold tracking-[0.28em] uppercase mb-4">
            Growth Process
          </p>

          {/* Heading */}
          <h2 className="text-[28px] md:text-[42px] leading-[1.05] font-black tracking-[-0.05em] text-[#152268]">

            Built Around
            <br />

            Structured Execution

          </h2>

          {/* Description */}
          <p className="mt-6 text-[15px] md:text-[14px] leading-[1.9] text-slate-700">

            Every Amazon growth system is built
            through research, optimization,
            testing, and long-term scaling strategy.

          </p>

        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7 mt-20">

          {/* STEP 1 */}
          <div className="bg-[#f5f4ff] border border-[#e2dfff] rounded-[32px] p-8">

            {/* Icon */}
            <div className="w-14 h-14 rounded-2xl bg-[#f3edff] flex items-center justify-center">

              <Search className="w-6 h-6 text-[#4A3DD5]" />

            </div>

            {/* Step */}
            <p className="mt-8 text-[12px] font-bold tracking-[0.16em] uppercase text-[#4A3DD5]">
              Step 01
            </p>

            {/* Title */}
            <h3 className="mt-4 text-[26px] leading-[1.05] font-black tracking-[-0.05em] text-[#152268]">

              Research &
              <br />

              Analysis

            </h3>

            {/* Description */}
            <p className="mt-5 text-[14px] leading-[1.9] text-slate-700">

              Deep analysis of campaigns,
              competitors, listings, and customer
              behavior before execution begins.

            </p>

          </div>

          {/* STEP 2 */}
          <div className="bg-[#f5f4ff] border border-[#e2dfff] rounded-[32px] p-8">

            {/* Icon */}
            <div className="w-14 h-14 rounded-2xl bg-[#f3edff] flex items-center justify-center">

              <LineChart className="w-6 h-6 text-[#4A3DD5]" />

            </div>

            {/* Step */}
            <p className="mt-8 text-[12px] font-bold tracking-[0.16em] uppercase text-[#4A3DD5]">
              Step 02
            </p>

            {/* Title */}
            <h3 className="mt-4 text-[26px] leading-[1.05] font-black tracking-[-0.05em] text-[#152268]">

              Optimization
              <br />

              Systems

            </h3>

            {/* Description */}
            <p className="mt-5 text-[14px] leading-[1.9] text-slate-700">

              Campaign restructuring, listing
              improvements, and data-driven
              optimization workflows.

            </p>

          </div>

          {/* STEP 3 */}
          <div className="bg-[#f5f4ff] border border-[#e2dfff] rounded-[32px] p-8">

            {/* Icon */}
            <div className="w-14 h-14 rounded-2xl bg-[#f3edff] flex items-center justify-center">

              <Rocket className="w-6 h-6 text-[#4A3DD5]" />

            </div>

            {/* Step */}
            <p className="mt-8 text-[12px] font-bold tracking-[0.16em] uppercase text-[#4A3DD5]">
              Step 03
            </p>

            {/* Title */}
            <h3 className="mt-4 text-[26px] leading-[1.05] font-black tracking-[-0.05em] text-[#152268]">

              Scaling
              <br />

              Execution

            </h3>

            {/* Description */}
            <p className="mt-5 text-[14px] leading-[1.9] text-slate-700">

              Controlled scaling strategies focused
              on maintaining profitability while
              increasing growth velocity.

            </p>

          </div>

          {/* STEP 4 */}
          <div className="bg-[#f5f4ff] border border-[#e2dfff] rounded-[32px] p-8">

            {/* Icon */}
            <div className="w-14 h-14 rounded-2xl bg-[#f3edff] flex items-center justify-center">

              <ShieldCheck className="w-6 h-6 text-[#4A3DD5]" />

            </div>

            {/* Step */}
            <p className="mt-8 text-[12px] font-bold tracking-[0.16em] uppercase text-[#4A3DD5]">
              Step 04
            </p>

            {/* Title */}
            <h3 className="mt-4 text-[26px] leading-[1.05] font-black tracking-[-0.05em] text-[#152268]">

              Long-Term
              <br />

              Growth

            </h3>

            {/* Description */}
            <p className="mt-5 text-[14px] leading-[1.9] text-slate-700">

              Sustainable systems designed for
              retention, stronger brand positioning,
              and scalable revenue growth.

            </p>

          </div>

        </div>

      </div>

    </section>
  );
}
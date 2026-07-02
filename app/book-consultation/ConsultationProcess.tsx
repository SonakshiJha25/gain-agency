import {
  ClipboardCheck,
  PhoneCall,
  Rocket
} from "lucide-react";

export default function ConsultationProcess() {
  return (

    // Process Section
    <section className="relative py-32 px-6 bg-white overflow-hidden">

      {/* Soft Glow */}
      <div className="absolute bottom-[-120px] left-[-120px] w-[320px] h-[320px] bg-purple-100 rounded-full blur-3xl opacity-60" />

      {/* Main Container */}
      <div className="relative z-10 max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto">

          {/* Small Badge */}
          <p className="text-[#4A3DD5] text-[11px] font-bold tracking-[0.28em] uppercase mb-4">
            Our Process
          </p>

          {/* Heading */}
          <h2 className="text-[28px] md:text-[42px] leading-[1.05] font-black tracking-[-0.05em] text-[#152268]">

            Simple Process.
            <br />

            <span className="gain-gradient-text">
              Clear Direction.
            </span>

          </h2>

          {/* Description */}
          <p className="mt-5 text-[15px] md:text-[14px] leading-[1.9] text-slate-700">
            We keep the process straightforward so you can
            focus on scaling while we handle the strategy.
          </p>

        </div>

        {/* Process Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-7 mt-20">

          {/* Step 1 */}
          <div className="relative bg-[#f5f4ff] border border-[#e5e3ff] rounded-[32px] p-9">

            {/* Step Number */}
            <div className="absolute top-6 right-7 text-[70px] font-black text-[#efe7ff] leading-none">
              01
            </div>

            {/* Icon */}
            <div className="w-14 h-14 rounded-2xl bg-[#eceaff] flex items-center justify-center mb-7 relative z-10">

              <ClipboardCheck className="w-6 h-6 text-[#4A3DD5]" />

            </div>

            {/* Title */}
            <h3 className="text-[22px] font-bold tracking-[-0.03em] text-[#152268] relative z-10">
              Submit Details
            </h3>

            {/* Description */}
            <p className="mt-4 text-[15px] leading-[1.9] text-slate-700 relative z-10">
              Share information about your Amazon brand,
              current challenges, and growth goals.
            </p>

          </div>

          {/* Step 2 */}
          <div className="relative bg-[#f5f4ff] border border-[#e5e3ff] rounded-[32px] p-9">

            {/* Step Number */}
            <div className="absolute top-6 right-7 text-[70px] font-black text-[#efe7ff] leading-none">
              02
            </div>

            {/* Icon */}
            <div className="w-14 h-14 rounded-2xl bg-[#eceaff] flex items-center justify-center mb-7 relative z-10">

              <PhoneCall className="w-6 h-6 text-[#4A3DD5]" />

            </div>

            {/* Title */}
            <h3 className="text-[22px] font-bold tracking-[-0.03em] text-[#152268] relative z-10">
              Strategy Call
            </h3>

            {/* Description */}
            <p className="mt-4 text-[15px] leading-[1.9] text-slate-700 relative z-10">
              We analyze your current position and discuss
              opportunities for better growth and scaling.
            </p>

          </div>

          {/* Step 3 */}
          <div className="relative bg-[#f5f4ff] border border-[#e5e3ff] rounded-[32px] p-9">

            {/* Step Number */}
            <div className="absolute top-6 right-7 text-[70px] font-black text-[#efe7ff] leading-none">
              03
            </div>

            {/* Icon */}
            <div className="w-14 h-14 rounded-2xl bg-[#eceaff] flex items-center justify-center mb-7 relative z-10">

              <Rocket className="w-6 h-6 text-[#4A3DD5]" />

            </div>

            {/* Title */}
            <h3 className="text-[22px] font-bold tracking-[-0.03em] text-[#152268] relative z-10">
              Growth Roadmap
            </h3>

            {/* Description */}
            <p className="mt-4 text-[15px] leading-[1.9] text-slate-700 relative z-10">
              Receive a practical action plan focused on
              improving performance and long-term profitability.
            </p>

          </div>

        </div>

      </div>

    </section>
  );
}
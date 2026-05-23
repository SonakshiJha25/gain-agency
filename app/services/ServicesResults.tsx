import {
  TrendingUp,
  DollarSign,
  BadgeCheck,
  LineChart
} from "lucide-react";

export default function ServicesResults() {
  return (

    // Results Section
    <section className="relative py-32 px-6 bg-[#f7f4ff] overflow-hidden">

      {/* Background Glow */}
      <div className="absolute left-[-120px] bottom-[-120px] w-[320px] h-[320px] bg-purple-200 rounded-full blur-3xl opacity-50" />

      {/* Main Container */}
      <div className="relative z-10 max-w-7xl mx-auto">

        {/* Header */}
        <div className="max-w-3xl mx-auto text-center">

          {/* Badge */}
          <p className="text-[#6d28d9] text-[11px] font-bold tracking-[0.28em] uppercase mb-4">
            Performance Metrics
          </p>

          {/* Heading */}
          <h2 className="text-[30px] md:text-[50px] leading-[0.96] font-black tracking-[-0.06em] text-[#020617]">

            Focused On
            <br />

            <span className="bg-gradient-to-r from-[#8b5cf6] via-[#7c3aed] to-[#6d28d9] bg-clip-text text-transparent">
              Measurable Growth
            </span>

          </h2>

          {/* Description */}
          <p className="mt-5 text-[15px] md:text-[16px] leading-[1.9] text-[#6b7280]">
            We focus on metrics that directly impact
            Amazon growth, profitability, and
            long-term scaling performance.
          </p>

        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7 mt-20">

          {/* CARD 1 */}
          <div className="bg-white border border-[#ece4ff] rounded-[32px] p-8 text-center hover:-translate-y-2 transition-all duration-500">

            {/* Icon */}
            <div className="w-14 h-14 rounded-2xl bg-[#efe7ff] flex items-center justify-center mx-auto">

              <TrendingUp className="w-6 h-6 text-[#6d28d9]" />

            </div>

            {/* Metric */}
            <h3 className="mt-8 text-[42px] font-black tracking-[-0.06em] text-[#6d28d9]">
              32%
            </h3>

            {/* Title */}
            <p className="mt-2 text-[16px] font-semibold text-[#111827]">
              Average ROAS Improvement
            </p>

            {/* Description */}
            <p className="mt-3 text-[14px] leading-[1.8] text-[#6b7280]">
              Optimized campaigns focused on
              scaling profitable ad performance.
            </p>

          </div>

          {/* CARD 2 */}
          <div className="bg-white border border-[#ece4ff] rounded-[32px] p-8 text-center hover:-translate-y-2 transition-all duration-500">

            {/* Icon */}
            <div className="w-14 h-14 rounded-2xl bg-[#efe7ff] flex items-center justify-center mx-auto">

              <DollarSign className="w-6 h-6 text-[#6d28d9]" />

            </div>

            {/* Metric */}
            <h3 className="mt-8 text-[42px] font-black tracking-[-0.06em] text-[#6d28d9]">
              $120M+
            </h3>

            {/* Title */}
            <p className="mt-2 text-[16px] font-semibold text-[#111827]">
              Revenue Influenced
            </p>

            {/* Description */}
            <p className="mt-3 text-[14px] leading-[1.8] text-[#6b7280]">
              Growth-focused systems helping
              brands scale across categories.
            </p>

          </div>

          {/* CARD 3 */}
          <div className="bg-white border border-[#ece4ff] rounded-[32px] p-8 text-center hover:-translate-y-2 transition-all duration-500">

            {/* Icon */}
            <div className="w-14 h-14 rounded-2xl bg-[#efe7ff] flex items-center justify-center mx-auto">

              <LineChart className="w-6 h-6 text-[#6d28d9]" />

            </div>

            {/* Metric */}
            <h3 className="mt-8 text-[42px] font-black tracking-[-0.06em] text-[#6d28d9]">
              200+
            </h3>

            {/* Title */}
            <p className="mt-2 text-[16px] font-semibold text-[#111827]">
              Brands Supported
            </p>

            {/* Description */}
            <p className="mt-3 text-[14px] leading-[1.8] text-[#6b7280]">
              Amazon businesses supported
              through performance execution.
            </p>

          </div>

          {/* CARD 4 */}
          <div className="bg-white border border-[#ece4ff] rounded-[32px] p-8 text-center hover:-translate-y-2 transition-all duration-500">

            {/* Icon */}
            <div className="w-14 h-14 rounded-2xl bg-[#efe7ff] flex items-center justify-center mx-auto">

              <BadgeCheck className="w-6 h-6 text-[#6d28d9]" />

            </div>

            {/* Metric */}
            <h3 className="mt-8 text-[42px] font-black tracking-[-0.06em] text-[#6d28d9]">
              4.9★
            </h3>

            {/* Title */}
            <p className="mt-2 text-[16px] font-semibold text-[#111827]">
              Client Satisfaction
            </p>

            {/* Description */}
            <p className="mt-3 text-[14px] leading-[1.8] text-[#6b7280]">
              Long-term partnerships built
              through transparency and results.
            </p>

          </div>

        </div>

      </div>

    </section>
  );
}
import {
  TrendingUp,
  DollarSign,
  LineChart,
  Target
} from "lucide-react";

export default function ServicesResults() {
  const metrics = [
    {
      icon: <TrendingUp className="w-6 h-6 text-[#4A3DD5]" />,
      label: "ROAS",
      title: "Return on Ad Spend",
      desc: "We optimize campaigns to deliver higher returns for every dollar spent on advertising.",
    },
    {
      icon: <Target className="w-6 h-6 text-[#4A3DD5]" />,
      label: "ACOS",
      title: "Advertising Cost of Sales",
      desc: "Our strategies are built to reduce wasted spend and keep your ACOS within profitable thresholds.",
    },
    {
      icon: <LineChart className="w-6 h-6 text-[#4A3DD5]" />,
      label: "CTR",
      title: "Click-Through Rate",
      desc: "Compelling creative and targeting improvements drive higher click-through rates on your listings.",
    },
    {
      icon: <DollarSign className="w-6 h-6 text-[#4A3DD5]" />,
      label: "CVR",
      title: "Conversion Rate",
      desc: "From listing copy to A+ Content, every element is optimized to convert more browsers into buyers.",
    },
  ];

  return (
    <section className="relative py-28 px-6 bg-[#f4f3ff] overflow-hidden">

      {/* Background Glow */}
      <div className="absolute left-[-120px] bottom-[-120px] w-[320px] h-[320px] bg-purple-200 rounded-full blur-3xl opacity-50" />

      <div className="relative z-10 max-w-7xl mx-auto">

        {/* Header */}
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-[#4A3DD5] text-xs font-bold tracking-[0.2em] uppercase mb-4">
            Performance Metrics
          </p>
          <h2 className="text-3xl md:text-4xl font-black tracking-tight leading-[1.1] text-[#152268]">
            Focused On
            <br />
            <span className="gain-gradient-text">
              Measurable Growth
            </span>
          </h2>
          <p className="mt-5 text-sm leading-relaxed text-slate-700">
            We focus on the metrics that directly impact your business — not vanity numbers.
            Every decision is anchored to performance.
          </p>
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7 mt-20">
          {metrics.map((m) => (
            <div
              key={m.label}
              className="bg-white border border-[#e2dfff] rounded-[28px] p-8 text-center hover:-translate-y-2 transition-all duration-500"
            >
              <div className="w-14 h-14 rounded-2xl bg-[#eceaff] flex items-center justify-center mx-auto">
                {m.icon}
              </div>
              <h3 className="mt-6 text-[32px] font-black tracking-[-0.06em] gain-gradient-text">
                {m.label}
              </h3>
              <p className="mt-1 text-sm font-semibold text-[#152268]">
                {m.title}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-slate-700">
                {m.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
import { BarChart2, Layers, TrendingUp } from "lucide-react";

const cards = [
  {
    icon: <BarChart2 className="w-6 h-6 text-[#4A3DD5]" />,
    title: "Performance Driven Approach",
    desc: "We focus on the metrics that truly impact your business, including ROAS, ACOS, CTR, and conversion rate, ensuring every decision drives measurable growth.",
    dark: false,
  },
  {
    icon: <Layers className="w-6 h-6 text-white" />,
    title: "Data + Strategy Balance",
    desc: "We combine data driven decisions with long term strategy to build sustainable and profitable growth.",
    dark: true,
  },
  {
    icon: <TrendingUp className="w-6 h-6 text-[#4A3DD5]" />,
    title: "Growth Focused Execution",
    desc: "We align every decision with your business goals, focusing on revenue growth rather than just activity.",
    dark: false,
  },
];

export default function AboutMission() {
  return (
    <section className="relative bg-white py-24 px-6 overflow-hidden">

      <div className="absolute bottom-[-120px] left-[-120px] w-[320px] h-[320px] rounded-full bg-purple-200/40 blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto">

        {/* Section label */}
        <div className="text-center mb-14">
          <p className="text-xs font-bold tracking-[0.2em] uppercase text-[#13B3B7] mb-4">
            Our Approach
          </p>
          <h2 className="text-3xl md:text-4xl font-black tracking-tight leading-[1.1] text-[#152268]">
            How We Drive{" "}
            <span className="gain-gradient-text">
              Consistent Growth
            </span>
          </h2>
          <p className="mt-6 max-w-2xl mx-auto text-base leading-relaxed text-slate-700">
            From Ads to Account Management to A+ Content, we manage every aspect
            of your Amazon presence to drive consistent growth.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cards.map((card, i) => (
            <div
              key={i}
              className={`rounded-2xl p-8 transition-all duration-300 hover:-translate-y-1 ${
                card.dark
                  ? "bg-[linear-gradient(150deg,_#7c3aed_0%,_#7c3aed_65%,_#4f6fd4_85%,_#14b8a6_100%)] text-white shadow-lg"
                  : "bg-[#f8f7ff] border border-[#e2dfff] hover:shadow-2xl shadow-slate-200/60"
              }`}
            >
              <div
                className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 shadow-sm ${
                  card.dark ? "bg-white/10" : "bg-gray-50"
                }`}
              >
                {card.icon}
              </div>
              <h3
                className={`text-lg font-bold tracking-tight mb-2 ${
                  card.dark ? "text-white" : "text-[#152268]"
                }`}
              >
                {card.title}
              </h3>
              <p
                className={`text-sm leading-relaxed ${
                  card.dark ? "text-white/80" : "text-slate-700"
                }`}
              >
                {card.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
import {
  TrendingUp,
  Volume2,
  Lightbulb,
  Compass
} from "lucide-react";

const values = [
  {
    letter: "G",
    icon: <TrendingUp className="w-6 h-6 text-[#13B3B7]" />,
    title: "Grow your revenue with scalable strategies",
    desc: "We build advertising frameworks around your business goals — not ours. Every strategy is designed to scale with you, turning today's wins into tomorrow's momentum through data-backed decisions that compound over time.",
    dark: false,
  },
  {
    letter: "A",
    icon: <Volume2 className="w-6 h-6" />,
    title: "Amplify your visibility. Multiply your conversions.",
    desc: "Your products deserve to be seen. We put them in front of the right customers at the right moment, optimizing every touchpoint to turn browsers into buyers and impressions into measurable revenue.",
    dark: true,
  },
  {
    letter: "I",
    icon: <Lightbulb className="w-6 h-6" />,
    title: "Innovate before the platform moves on without you.",
    desc: "The Amazon landscape moves fast — we move faster. Our team stays ahead of platform changes and emerging ad formats so your brand is always leveraging what's working now, not what worked last year.",
    dark: true,
  },
  {
    letter: "N",
    icon: <Compass className="w-6 h-6 text-[#13B3B7]" />,
    title: "Navigate the complexity of Amazon advertising",
    desc: "Amazon advertising is intricate, fast-moving, and unforgiving. We've spent years mastering the nuances so you don't have to. You focus on your business; we handle the complexity, the data, and the results.",
    dark: false,
  },
];

export default function AboutValues() {
  return (
    <section className="relative py-28 px-6 bg-[#f4f3ff] overflow-hidden">

      {/* Glow */}
      <div className="absolute top-[-120px] left-[-120px] w-[320px] h-[320px] rounded-full bg-purple-200/40 blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto">

        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-[#4A3DD5] text-[11px] font-bold tracking-[0.28em] uppercase mb-5">
            The <span className="gain-gradient-text">GAIN</span> Promise
          </p>
          <h2 className="text-[28px] md:text-[44px] leading-[1.05] font-black tracking-[-0.05em] text-[#152268]">
            Our Name Is Our Promise.
          </h2>
          <p className="mt-4 text-[15px] leading-[1.9] text-slate-700">
            At GAIN, the name says it all. Our name defines our philosophy.
          </p>
        </div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {values.map((v) => (
            <div
              key={v.letter}
              className={`rounded-[28px] p-9 ${
                v.dark
                  ? "bg-[linear-gradient(150deg,_#7c3aed_0%,_#7c3aed_65%,_#4f6fd4_85%,_#14b8a6_100%)] text-white"
                  : "bg-white border border-[#e2dfff]"
              }`}
            >
              {/* Letter + Icon row */}
              <div className="flex items-center gap-3 mb-5">
                <span
                  className={`text-[52px] font-black leading-none tracking-tight ${
                    v.dark
                      ? "text-white/20"
                      : "bg-[linear-gradient(150deg,_#7c3aed_0%,_#7c3aed_65%,_#4f6fd4_85%,_#14b8a6_100%)] bg-clip-text text-transparent bg-[linear-gradient(150deg,_#7c3aed_0%,_#7c3aed_65%,_#4f6fd4_85%,_#14b8a6_100%)]"
                  }`}
                >
                  {v.letter}
                </span>
                <div
                  className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                    v.dark ? "bg-white/10" : "bg-[#f3edff]"
                  }`}
                >
                  {v.icon}
                </div>
              </div>

              {/* Title */}
              <h3
                className={`text-[18px] font-bold leading-snug mb-3 ${
                  v.dark ? "text-white" : "text-[#152268]"
                }`}
              >
                {v.title}
              </h3>

              {/* Description */}
              <p
                className={`text-[14px] leading-[1.85] ${
                  v.dark ? "text-purple-100" : "text-slate-700"
                }`}
              >
                {v.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
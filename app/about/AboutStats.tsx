export default function AboutStats() {
  const pillars = [
    {
      letter: "G",
      word: "Grow",
      title: "Grow your revenue with scalable strategies",
      desc: "We build advertising frameworks around your business goals — not ours. Every strategy is designed to scale with you, turning today's wins into tomorrow's momentum through data-backed decisions that compound over time.",
      gradient: false,
    },
    {
      letter: "A",
      word: "Amplify",
      title: "Amplify your visibility. Multiply your conversions.",
      desc: "Your products deserve to be seen. We put them in front of the right customers at the right moment, optimizing every touchpoint to turn browsers into buyers and impressions into measurable revenue.",
      gradient: true,
    },
    {
      letter: "I",
      word: "Innovate",
      title: "Innovate before the platform moves on without you.",
      desc: "The Amazon landscape moves fast — we move faster. Our team stays ahead of platform changes and emerging ad formats so your brand is always leveraging what's working now, not what worked last year.",
      gradient: false,
    },
    {
      letter: "N",
      word: "Navigate",
      title: "Navigate the complexity of Amazon advertising",
      desc: "Amazon advertising is intricate, fast-moving, and unforgiving. We've spent years mastering the nuances so you don't have to. You focus on your business; we handle the complexity, the data, and the results.",
      gradient: true,
    },
  ];

  return (
    <section className="relative py-28 px-6 bg-[#f4f3ff] overflow-hidden">

      {/* Glow */}
      <div className="absolute top-[-120px] left-[-120px] w-[320px] h-[320px] rounded-full bg-purple-200/40 blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto">

        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-[#4A3DD5] text-[11px] font-bold tracking-[0.28em] uppercase mb-5">
            Our Name Is Our Promise
          </p>
          <h2 className="text-[28px] md:text-[42px] leading-[1.05] font-black tracking-[-0.05em] text-[#152268]">
            At GAIN,{" "}
            <span className="gain-gradient-text">
              the name says it all
            </span>
          </h2>
          <p className="mt-5 text-[15px] leading-[1.9] text-slate-700">
            Our name defines our philosophy. Every letter is a commitment we make to the brands we work with.
          </p>
        </div>

        {/* GAIN Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {pillars.map((pillar) => (
            <div
              key={pillar.letter}
              className={`rounded-[28px] p-9 ${
                pillar.gradient
                  ? "bg-[linear-gradient(150deg,_#7c3aed_0%,_#7c3aed_65%,_#4f6fd4_85%,_#14b8a6_100%)] text-white"
                  : "bg-white border border-[#e2dfff] text-[#152268]"
              }`}
            >
              {/* Large Letter */}
              <div
                className={`text-[56px] font-black leading-none tracking-[-0.04em] mb-4 ${
                  pillar.gradient ? "text-white/20" : "bg-[linear-gradient(150deg,_#7c3aed_0%,_#7c3aed_65%,_#4f6fd4_85%,_#14b8a6_100%)] bg-clip-text text-transparent"
                }`}
              >
                {pillar.letter}
              </div>

              {/* Title */}
              <h3
                className={`text-[17px] font-bold leading-snug mb-3 ${
                  pillar.gradient ? "text-white" : "text-[#152268]"
                }`}
              >
                {pillar.title}
              </h3>

              {/* Description */}
              <p
                className={`text-[14px] leading-[1.85] ${
                  pillar.gradient ? "text-purple-100" : "text-slate-700"
                }`}
              >
                {pillar.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
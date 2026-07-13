import GainWatermark from "../components/GainWatermark";

export default function ResourcesHero() {
  return (
    <section className="relative overflow-hidden bg-[#f4f3ff] min-h-screen flex items-center justify-center px-6">

      {/* Background Glow */}
      <div className="absolute top-[-120px] right-[-100px] w-[380px] h-[380px] bg-purple-300/20 rounded-full blur-3xl" />
      <div className="absolute bottom-[-120px] left-[-100px] w-[300px] h-[300px] rounded-full bg-teal-200/20 blur-3xl" />

      {/* GAIN Watermark */}
      <GainWatermark />

      {/* Main Content */}
      <div className="relative z-10 max-w-4xl text-center">

        {/* Badge */}
        <p className="text-xs font-bold tracking-[0.2em] uppercase text-[#13B3B7] mb-6">
          Resources & Insights
        </p>

        {/* Heading */}
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-black tracking-tight leading-[1.05] gain-gradient-text">
          Smarter Amazon
          <br />
          Growth Starts
          <br />
          With Better Knowledge
        </h1>

        {/* Description */}
        <p className="max-w-2xl mx-auto mt-6 text-sm leading-relaxed text-slate-700">
          Explore Amazon advertising insights, scaling frameworks,
          optimization strategies, and growth resources built for modern brands.
        </p>

      </div>
    </section>
  );
}

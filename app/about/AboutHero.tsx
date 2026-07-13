import GainWatermark from "../components/GainWatermark";

export default function AboutHero() {
  return (
    <section className="relative overflow-hidden bg-[#f4f3ff] min-h-screen flex items-center justify-center px-6">

      {/* Background Glow */}
      <div className="absolute top-[-120px] right-[-100px] w-[380px] h-[380px] bg-purple-300/20 rounded-full blur-3xl" />
      <div className="absolute bottom-[-120px] left-[-100px] w-[300px] h-[300px] rounded-full bg-teal-200/20 blur-3xl" />

      {/* Huge GAIN shadow background */}
      <GainWatermark />

      {/* Main Content */}
      <div className="relative z-10 max-w-4xl text-center">

        {/* Small Badge */}
        <p className="text-xs font-bold tracking-[0.2em] uppercase text-[#13B3B7] mb-6">
          About <span className="font-extrabold">GAIN</span>
        </p>

        {/* Main Heading */}
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-black tracking-tight leading-[1.05] text-[#152268]">
          We Help Brands
          <br />
          <span className="gain-gradient-text">
            Unlock Their Amazon Potential
          </span>
        </h1>

        {/* Description */}
        <p className="max-w-2xl mx-auto mt-6 text-sm leading-relaxed text-slate-700">
          Our name defines our philosophy — every letter is a commitment we make to the brands we work with.
        </p>

      </div>
    </section>
  );
}
export default function AboutHero() {
  return (
    <section className="relative overflow-hidden bg-[#f4f3ff] min-h-screen flex items-center justify-center px-6">

      {/* Background Glow */}
      <div className="absolute bottom-[-180px] right-[-100px] h-[380px] w-[380px] rounded-full bg-purple-300/25 blur-3xl" />
      <div className="absolute top-[-100px] left-[-80px] h-[300px] w-[300px] rounded-full bg-teal-200/20 blur-3xl" />

      {/* Huge GAIN shadow background */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0 overflow-hidden">
        <img src="/gain-watermark-dark.svg" alt="" className="w-[90%] md:w-[70%] h-auto opacity-[0.08] select-none" aria-hidden="true" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-5xl text-center pt-28">

        {/* Small Badge */}
        <p className="text-xs font-bold tracking-[0.2em] uppercase text-[#13B3B7] mb-6">
          About <span className="font-extrabold">GAIN</span>
        </p>

        {/* Main Heading */}
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-black tracking-tight leading-[1.05] text-[#152268]">
          At GAIN, we specialize in helping brands
          <br />
          <span className="gain-gradient-text">
            unlock their full potential on Amazon
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
export default function ContactHero() {
  return (
    <section className="relative pt-64 md:pt-72 pb-32 md:pb-40 overflow-hidden bg-[#f4f3ff] flex items-center justify-center">

      {/* Glow */}
      <div className="absolute top-[-140px] right-[-120px] w-[360px] h-[360px] rounded-full bg-purple-300/30 blur-3xl" />
      <div className="absolute bottom-[-120px] left-[-100px] w-[300px] h-[300px] rounded-full bg-teal-200/20 blur-3xl" />

      {/* Huge GAIN shadow background */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none z-0 overflow-hidden">
        <h1
          className="text-[38vw] md:text-[35vw] font-black tracking-tighter leading-none text-transparent select-none"
          style={{
            WebkitTextStroke: "1px rgba(167, 139, 250, 0.4)",
          }}
          aria-hidden="true"
        >
          GAIN
        </h1>
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-4xl text-center px-6 pt-16">

        {/* Label */}
        <p className="text-[#13B3B7] text-[11px] font-bold tracking-[0.28em] uppercase mb-4 text-center mx-auto">
          Contact Our Team
        </p>

        {/* Heading */}
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-black tracking-tight leading-[1.05] text-[#152268]">
          Connect With Our
          <br />
          <span className="gain-gradient-text">
            Growth Strategists
          </span>
        </h1>

        {/* Description */}
        <p className="max-w-2xl mx-auto mt-5 text-[15px] md:text-[14px] leading-[1.9] text-slate-700">
          Ready to scale your Amazon store? Contact us today to learn more about our
          advertising, account management, and content creation services.
        </p>

      </div>

    </section>
  );
}

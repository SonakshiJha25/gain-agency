export default function ContactHero() {
  return (
    <section className="relative overflow-hidden bg-[#f7f4ff] pt-64 md:pt-72 pb-24 md:pb-32 px-6 text-center">

      {/* Background Glow */}
      <div className="absolute bottom-[-180px] right-[-100px] h-[380px] w-[380px] rounded-full bg-purple-300/25 blur-3xl" />

      {/* Huge Background Outline Text */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
        <h1
          className="
            text-[26vw]
            md:text-[22vw]
            font-black
            tracking-[0.12em]
            leading-none
            text-transparent
            [-webkit-text-stroke:1px_rgba(109,40,217,0.15)]
          "
        >
          TALK
        </h1>
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-4xl mx-auto pt-16">

        {/* Small Badge */}
        <p className="text-[#6d28d9] text-[11px] font-bold tracking-[0.28em] uppercase mb-4">
          Contact Our Team
        </p>

        {/* Main Heading */}
        <h1 className="text-[30px] md:text-[50px] leading-[0.96] font-black tracking-[-0.06em] text-[#020617]">
          Connect With Our
          <br />
          <span className="bg-gradient-to-r from-[#8b5cf6] via-[#7c3aed] to-[#6d28d9] bg-clip-text text-transparent">
            Growth Strategists
          </span>
        </h1>

        {/* Description */}
        <p className="max-w-2xl mx-auto mt-5 text-[15px] md:text-[14px] leading-[1.9] text-[#6b7280]">
          Ready to scale your Amazon store? Contact us today to learn more about our advertising,
          account management, and content creation services.
        </p>

      </div>

    </section>
  );
}

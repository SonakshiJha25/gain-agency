import {
  BarChart3,
  Layers3
} from "lucide-react";

export default function ServicesHero() {
  return (
    <section className="relative overflow-hidden bg-[#f7f4ff] min-h-screen pt-28 md:pt-32 pb-24 md:pb-32 px-6">

      {/* Background Glow */}
      <div className="absolute top-[-120px] right-[-100px] w-[380px] h-[380px] bg-purple-300/20 rounded-full blur-3xl" />

      {/* Huge Background Text */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
        <h1 className="text-[26vw] md:text-[22vw] font-black tracking-[0.12em] leading-none text-transparent [-webkit-text-stroke:1px_rgba(109,40,217,0.15)]">
          GAIN
        </h1>
      </div>

      {/* Main Container */}
      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center min-h-screen">

        {/* LEFT SIDE */}
        <div className="flex flex-col justify-center h-full">

          <p className="text-[#6d28d9] text-[11px] font-bold tracking-[0.28em] uppercase mb-4">
            Amazon Growth Services
          </p>

          <h1 className="text-[30px] md:text-[50px] leading-[0.96] font-black tracking-[-0.06em] text-[#020617]">
            Services Built
            <br />
            <span className="bg-gradient-to-r from-[#8b5cf6] via-[#7c3aed] to-[#6d28d9] bg-clip-text text-transparent">
              For Brand Growth
            </span>
          </h1>

          <p className="mt-5 text-[15px] md:text-[14px] leading-[1.9] text-[#6b7280] max-w-xl">
            We help Amazon brands grow through performance-focused advertising,
            optimized account management, and premium A+ content systems.
          </p>

          <div className="flex flex-col sm:flex-row gap-5 mt-8">

            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#efe7ff] flex items-center justify-center">
                <BarChart3 className="w-5 h-5 text-[#6d28d9]" />
              </div>
              <div>
                <p className="text-[14px] font-semibold text-[#111827]">
                  Performance Driven
                </p>
                <p className="text-[12px] text-[#6b7280]">
                  Focused On ROAS & Growth
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#efe7ff] flex items-center justify-center">
                <Layers3 className="w-5 h-5 text-[#6d28d9]" />
              </div>
              <div>
                <p className="text-[14px] font-semibold text-[#111827]">
                  Full Funnel Execution
                </p>
                <p className="text-[12px] text-[#6b7280]">
                  Ads • Content • Scaling
                </p>
              </div>
            </div>

          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="flex items-center justify-center h-full">

          <div className="bg-white border border-[#ece4ff] rounded-[32px] p-8 md:p-10 shadow-xl shadow-purple-100/35 w-full">

            <div className="inline-flex items-center gap-2 bg-[#f5efff] border border-[#e9ddff] px-4 py-1.5 rounded-full mb-6">
              <span className="w-2 h-2 rounded-full bg-[#6d28d9]" />
              <span className="text-[11px] font-bold text-[#6d28d9] uppercase tracking-[0.08em]">
                What We Deliver
              </span>
            </div>

            <div className="grid grid-cols-2 gap-4">

              <div className="bg-[#faf7ff] border border-[#eee7ff] rounded-2xl p-5">
                <h3 className="text-[30px] font-black text-[#6d28d9]">200+</h3>
                <p className="mt-1 text-[13px] leading-[1.6] text-[#6b7280]">
                  Amazon brands supported across multiple categories.
                </p>
              </div>

              <div className="bg-[#faf7ff] border border-[#eee7ff] rounded-2xl p-5">
                <h3 className="text-[30px] font-black text-[#6d28d9]">$120M+</h3>
                <p className="mt-1 text-[13px] leading-[1.6] text-[#6b7280]">
                  Revenue influenced through growth-focused execution.
                </p>
              </div>

              <div className="bg-[#faf7ff] border border-[#eee7ff] rounded-2xl p-5">
                <h3 className="text-[30px] font-black text-[#6d28d9]">4.9★</h3>
                <p className="mt-1 text-[13px] leading-[1.6] text-[#6b7280]">
                  Average client satisfaction across long-term projects.
                </p>
              </div>

              <div className="bg-[#faf7ff] border border-[#eee7ff] rounded-2xl p-5">
                <h3 className="text-[30px] font-black text-[#6d28d9]">5+</h3>
                <p className="mt-1 text-[13px] leading-[1.6] text-[#6b7280]">
                  Years of Amazon-focused scaling experience.
                </p>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
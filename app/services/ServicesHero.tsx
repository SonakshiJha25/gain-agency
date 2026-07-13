import {
  BarChart3,
  Layers3
} from "lucide-react";
import GainWatermark from "../components/GainWatermark";

export default function ServicesHero() {
  return (
    <section className="relative overflow-hidden bg-[#f4f3ff] min-h-screen flex items-center justify-center px-6">

      {/* Background Glow */}
      <div className="absolute top-[-120px] right-[-100px] w-[380px] h-[380px] bg-purple-300/20 rounded-full blur-3xl" />
      <div className="absolute bottom-[-120px] left-[-100px] w-[300px] h-[300px] rounded-full bg-teal-200/20 blur-3xl" />

      {/* Huge GAIN shadow background */}
      <GainWatermark />

      {/* Main Container */}
      <div className="relative z-10 max-w-4xl text-center">

        <p className="text-xs font-bold tracking-[0.2em] uppercase text-[#13B3B7] mb-6">
          Amazon Growth Services
        </p>

        <h1 className="text-3xl md:text-4xl lg:text-5xl font-black tracking-tight leading-[1.05] text-[#152268]">
          Services Built
          <br />
          <span className="gain-gradient-text">
            For Brand Growth
          </span>
        </h1>

        <p className="mt-6 text-sm leading-relaxed text-slate-700 max-w-2xl mx-auto">
          We help Amazon brands grow through performance-focused advertising,
          optimized account management, and premium A+ content systems.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-6 mt-8">

          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-gray-50 flex items-center justify-center shadow-sm">
              <BarChart3 className="w-5 h-5 text-[#4A3DD5]" />
            </div>
            <div className="text-left">
              <p className="text-sm font-semibold text-[#152268]">
                Performance Driven
              </p>
              <p className="text-xs text-slate-700">
                Focused On ROAS & Growth
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-gray-50 flex items-center justify-center shadow-sm">
              <Layers3 className="w-5 h-5 text-[#4A3DD5]" />
            </div>
            <div className="text-left">
              <p className="text-sm font-semibold text-[#152268]">
                Full Funnel Execution
              </p>
              <p className="text-xs text-slate-700">
                Ads • Content • Scaling
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
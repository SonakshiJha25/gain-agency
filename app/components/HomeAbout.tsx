import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function HomeAbout() {
  return (
    <section className="relative bg-white py-28 px-6 overflow-hidden">

      {/* Background Glow */}
      <div className="absolute bottom-[-140px] right-[-120px] w-[340px] h-[340px] rounded-full bg-purple-200/40 blur-3xl" />

      <div className="relative z-10 max-w-5xl mx-auto">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-center">

          {/* Left Side */}
          <div>
            <p className="text-xs font-bold tracking-[0.2em] uppercase text-[#13B3B7] mb-5">
              About GAIN
            </p>

            <h2 className="text-3xl md:text-4xl font-black tracking-tight leading-[1.05] text-[#152268]">
              Built for Brands<br />
              That Want Real<br />
              <span className="gain-gradient-text">Amazon Growth</span>
            </h2>

            <p className="mt-6 text-[14px] leading-[1.8] text-slate-700 max-w-md">
              GAIN is a performance-first Amazon growth agency.
              We combine advertising expertise, data analytics,
              and structured systems to help brands scale
              profitably on Amazon — no guesswork, no shortcuts.
            </p>

            <Link
              href="/about"
              className="inline-flex items-center gap-2 mt-8 text-[#4A3DD5] text-sm font-bold hover:gap-3 transition-all duration-300"
            >
              Learn More About Us
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Right Side — Key stats */}
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-[#f4f3ff] rounded-2xl p-6 border border-[#e2dfff]">
              <span className="text-3xl font-black text-[#152268]">G</span>
              <p className="text-sm font-bold text-[#152268] mt-1">Grow</p>
              <p className="text-[12px] text-slate-600 mt-1 leading-[1.6]">
                Scalable revenue strategies built around your goals.
              </p>
            </div>
            <div className="bg-[#f4f3ff] rounded-2xl p-6 border border-[#e2dfff]">
              <span className="text-3xl font-black text-[#152268]">A</span>
              <p className="text-sm font-bold text-[#152268] mt-1">Amplify</p>
              <p className="text-[12px] text-slate-600 mt-1 leading-[1.6]">
                Maximize visibility and convert more shoppers.
              </p>
            </div>
            <div className="bg-[#f4f3ff] rounded-2xl p-6 border border-[#e2dfff]">
              <span className="text-3xl font-black text-[#152268]">I</span>
              <p className="text-sm font-bold text-[#152268] mt-1">Innovate</p>
              <p className="text-[12px] text-slate-600 mt-1 leading-[1.6]">
                Stay ahead with cutting-edge Amazon strategies.
              </p>
            </div>
            <div className="bg-[#f4f3ff] rounded-2xl p-6 border border-[#e2dfff]">
              <span className="text-3xl font-black text-[#152268]">N</span>
              <p className="text-sm font-bold text-[#152268] mt-1">Navigate</p>
              <p className="text-[12px] text-slate-600 mt-1 leading-[1.6]">
                We handle the complexity so you can focus on growth.
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

import Link from "next/link";
import { Flame, Target, TrendingUp } from "lucide-react";
import GainWatermark from "../components/GainWatermark";

const pillars = [
  {
    icon: Flame,
    label: "The Problem",
    text: "Too many brands waste resources jumping between random tactics, inconsistent agencies, and short-term decisions that never compound into real growth.",
    color: "#4A3DD5",
    bg: "#f0eeff",
    border: "#e2dfff",
  },
  {
    icon: Target,
    label: "Our Answer",
    text: "GAIN was built to create structured systems — built around clarity, execution, and profitability — not vanity metrics or one-size-fits-all playbooks.",
    color: "#4A3DD5",
    bg: "#f0eeff",
    border: "#e2dfff",
  },
  {
    icon: TrendingUp,
    label: "The Outcome",
    text: "Instead of chasing numbers, we build Amazon growth ecosystems that improve business performance sustainably, month after month.",
    color: "#4A3DD5",
    bg: "#f0eeff",
    border: "#e2dfff",
  },
];

export default function AboutStory() {
  return (
    <section className="relative bg-white py-16 md:py-32 px-6 overflow-hidden">

      {/* Background glows */}
      <div className="absolute top-[-80px] left-[-100px] w-[500px] h-[500px] rounded-full bg-purple-100/60 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-120px] right-[-80px] w-[400px] h-[400px] rounded-full bg-teal-100/50 blur-[100px] pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto">

        {/* ── TOP: Label + Bold Split Heading ── */}
        <div className="text-center mb-20">
          <p className="text-xs font-bold tracking-[0.22em] uppercase text-[#13B3B7] mb-5">
            Why We Started
          </p>

          {/* Big dramatic heading */}
          <h2 className="text-3xl md:text-4xl font-black tracking-tight leading-[1.0] text-[#152268] max-w-3xl mx-auto">
            Most Brands Don't Need{" "}
            <span className="relative inline-block">
              <span className="gain-gradient-text">More Noise.</span>
            </span>
            <br />
            <span className="text-2xl md:text-3xl font-extrabold text-slate-400 tracking-tight">
              They Need a System.
            </span>
          </h2>
        </div>

        {/* ── MIDDLE: Full-bleed pull quote ── */}
        <div className="relative rounded-[32px] gain-gradient px-10 py-8 md:py-14 md:px-20 md:py-16 mb-20 overflow-hidden shadow-2xl shadow-[#7e22ce]/20">

          {/* Decorative watermark */}
          <GainWatermark light />

          {/* Decorative circles */}
          <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-white/5 border border-white/10" />
          <div className="absolute -bottom-16 -left-16 w-48 h-48 rounded-full bg-white/5 border border-white/10" />

          <div className="relative z-10 max-w-3xl mx-auto text-center">
            <p className="text-[11px] uppercase tracking-[0.2em] font-bold text-purple-200 mb-6">Our Founding Belief</p>
            <blockquote className="text-2xl md:text-3xl font-black text-white leading-[1.25] tracking-tight">
              "Amazon success doesn't come from trying everything —
              it comes from doing the right things, relentlessly well."
            </blockquote>
            <p className="mt-8 text-purple-100 text-sm leading-relaxed max-w-xl mx-auto">
              We launched GAIN because we saw smart, product-driven brands being let down by
              fragmented strategies. We believed there was a better way — structured, accountable,
              and built for compounding results.
            </p>
          </div>
        </div>

        {/* ── BOTTOM: 3 Pillar Cards ── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {pillars.map((p, i) => (
            <div
              key={i}
              className="group relative rounded-3xl border p-8 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 cursor-default"
              style={{ background: p.bg, borderColor: p.border }}
            >
              {/* Step number */}
              <span className="absolute top-6 right-7 text-[11px] font-black text-slate-300 tracking-widest">
                0{i + 1}
              </span>

              {/* Icon */}
              <div
                className="w-12 h-12 rounded-2xl flex items-center justify-center mb-6 shadow-sm"
                style={{ background: `${p.color}15`, border: `1px solid ${p.color}30` }}
              >
                <p.icon className="w-5 h-5" style={{ color: p.color }} />
              </div>

              {/* Label */}
              <p className="text-[10px] font-black uppercase tracking-[0.15em] mb-2" style={{ color: p.color }}>
                {p.label}
              </p>

              {/* Text */}
              <p className="text-slate-600 text-sm leading-relaxed">{p.text}</p>
            </div>
          ))}
        </div>

        {/* ── CTA ── */}
        <div className="mt-16 text-center">
          <Link
            href="/book-consultation"
            className="inline-flex items-center gap-2 gain-gradient hover:from-[#3630a8] hover:to-[#0d9a9e] text-white text-sm font-bold tracking-wide px-10 py-4 rounded-full transition-all duration-300 shadow-2xl shadow-[#7e22ce]/20 hover:shadow-purple-300/60 hover:-translate-y-0.5"
          >
            Start Building Your System
          </Link>
        </div>

      </div>
    </section>
  );
}
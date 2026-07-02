"use client";

import { ArrowUp } from "lucide-react";

const points = [
  {
    title: "In-House Specialists",
    desc: "Everything is handled directly by senior Amazon advertising specialists. No outsourced contractors, junior account handlers, or communication gaps.",
  },
  {
    title: "Direct Specialist Access",
    desc: "You talk directly to the professionals managing your ad spend and listing optimization, ensuring speed, clarity, and zero translation errors.",
  },
  {
    title: "Flexible Engagement",
    desc: "We believe in our performance. We work on flexible monthly terms that align with your business milestones, keeping us fully accountable.",
  },
  {
    title: "Amazon-First Expertise",
    desc: "Every strategy is built specifically for Amazon's algorithm, ranking system, and ad ecosystem — not generic marketing.",
  },
  {
    title: "Full-Funnel Execution",
    desc: "From Ads to Account Management to A+ Content, we manage every aspect of your Amazon presence to drive consistent growth.",
  },
  {
    title: "Transparent Process",
    desc: "No black-box systems. You always know what's being done, why it's being done, and what results to expect.",
  },
];

export default function WhyUs() {
  return (
    <section className="relative py-28 px-6 bg-white overflow-hidden">

      {/* Subtle background glow */}
      <div className="absolute -top-40 -right-40 w-[400px] h-[400px] bg-purple-200 blur-[140px] opacity-30 rounded-full" />

      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-xs font-bold tracking-[0.2em] uppercase text-[#13B3B7] mb-4">
            Why Us
          </p>
          <h2 className="text-3xl md:text-4xl font-black tracking-tight leading-[1.1] text-[#152268]">
            Why{" "}
            <span className="gain-gradient-text">
              Brands Choose Us
            </span>
          </h2>
          <p className="mt-6 text-base text-slate-700 leading-relaxed max-w-2xl mx-auto">
            We focus on real Amazon growth — not theories, not vanity metrics, just measurable performance.
          </p>
        </div>

        {/* Cards Grid — arrow on top, text in box */}
        <div className="grid md:grid-cols-3 gap-5">
          {points.map((item) => (
            <div
              key={item.title}
              className="group relative bg-[#f8f7ff] border border-[#e2dfff] rounded-2xl p-8 hover:border-[#b8b4f5]/50 hover:shadow-2xl shadow-slate-200/60 hover:-translate-y-1 transition-all duration-300"
            >
              {/* Arrow icon at top */}
              <div className="w-10 h-10 rounded-xl gain-gradient flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-md">
                <ArrowUp className="w-5 h-5 text-white" />
              </div>

              <h3 className="text-[#152268] font-bold text-lg tracking-tight mb-2">
                {item.title}
              </h3>
              <p className="text-slate-700 text-sm leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
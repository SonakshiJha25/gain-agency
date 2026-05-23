"use client";

import { CheckCircle } from "lucide-react";

const points = [
  {
    title: "Amazon-First Expertise",
    desc: "We don’t do generic marketing. Every strategy is built specifically for Amazon’s algorithm, ranking system, and ad ecosystem.",
  },
  {
    title: "Performance-Driven Approach",
    desc: "We focus on measurable metrics like ROAS, ACOS, CTR, and conversion rate — not vanity numbers.",
  },
  {
    title: "Full-Funnel Execution",
    desc: "From Ads to Account Management to A+ Content, we handle everything end-to-end so your growth is consistent.",
  },
  {
    title: "Data + Strategy Balance",
    desc: "We combine real-time data analysis with long-term strategy so you don’t just grow fast — you grow sustainably.",
  },
  {
    title: "Transparent Process",
    desc: "No black-box systems. You always know what’s being done, why it’s being done, and what results to expect.",
  },
  {
    title: "Growth-Focused Execution",
    desc: "Every action we take is aligned with one goal — increasing your revenue, not just activity.",
  },
];

export default function WhyUs() {
  return (
    <section className="relative py-28 px-6 bg-white overflow-hidden">

      {/* subtle purple background glow */}
      <div className="absolute -top-40 -right-40 w-[400px] h-[400px] bg-purple-200 blur-[140px] opacity-30 rounded-full" />

      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-[#6d28d9] text-[11px] font-bold tracking-[0.28em] uppercase mb-4">
            Why Us
          </p>

          <h2 className="text-[28px] md:text-[42px] leading-[1.05] font-black tracking-[-0.05em] text-[#020617]">
            Why Brands Choose Us
          </h2>

          <p className="mt-5 text-[15px] md:text-[14px] leading-[1.9] text-[#6b7280] max-w-2xl mx-auto">
            We focus on real Amazon growth — not theories, not vanity metrics, just measurable performance.
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-6">

          {points.map((item) => (
            <div
              key={item.title}
              className="p-6 rounded-xl border border-[#ece4ff] bg-[#faf7ff] shadow-sm hover:-translate-y-1 transition-all duration-300"
            >
              <div className="flex items-start gap-3">

                <CheckCircle className="w-5 h-5 text-[#6d28d9] mt-1 shrink-0" />

                <div>
                  <h3 className="text-[#111827] font-semibold text-[16px]">
                    {item.title}
                  </h3>

                  <p className="text-[#6b7280] text-[13px] mt-2 leading-[1.7]">
                    {item.desc}
                  </p>
                </div>

              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}
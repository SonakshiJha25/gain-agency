"use client";

import Link from "next/link";
import { TrendingUp, Volume2, Lightbulb, Compass } from "lucide-react";

export default function AboutWhyUs() {
  const items = [
    {
      letter: "G",
      Icon: TrendingUp,
      color: "#4A3DD5",
      color2: "#6355e0",
      title: "Grow your revenue",
      subtitle: "with scalable strategies",
      desc: "We build ad frameworks around your goals — not ours. Every strategy is designed to scale with you, turning today's wins into tomorrow's momentum.",
      side: "left" as const,
      row: 0,
    },
    {
      letter: "A",
      Icon: Volume2,
      color: "#5A46E0",
      color2: "#4A3DD5",
      title: "Amplify visibility.",
      subtitle: "Multiply conversions.",
      desc: "Your products deserve to be seen. We put them in front of the right customers at the right moment, turning browsers into buyers.",
      side: "left" as const,
      row: 1,
    },
    {
      letter: "I",
      Icon: Lightbulb,
      color: "#4A3DD5",
      color2: "#13B3B7",
      title: "Innovate before the",
      subtitle: "platform moves on.",
      desc: "The Amazon landscape moves fast — we move faster. Our team stays ahead of platform changes so your brand always leverages what's working now.",
      side: "right" as const,
      row: 0,
    },
    {
      letter: "N",
      Icon: Compass,
      color: "#13B3B7",
      color2: "#18C7C9",
      title: "Navigate Amazon's",
      subtitle: "complexity with ease.",
      desc: "We've mastered the nuances so you don't have to. You focus on your business; we handle the complexity, the data, and the results.",
      side: "right" as const,
      row: 1,
    },
  ];

  return (
    <section className="relative py-24 px-6 overflow-hidden bg-[#f4f3ff]">

      {/* Background glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-purple-200/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-teal-200/20 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto">

        {/* ── DESKTOP: 3-column card layout with SVG lines ── */}
        <div className="hidden lg:block">
          <div className="grid grid-cols-[1fr_240px_1fr] gap-0 items-center relative min-h-[560px]">

            {/* SVG lines — absolutely fills the grid container */}
            <svg
              className="absolute inset-0 w-full h-full pointer-events-none"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <defs>
                <linearGradient id="lgl" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#b8b4f5" stopOpacity="0.15" />
                  <stop offset="100%" stopColor="#7c3aed" stopOpacity="0.55" />
                </linearGradient>
                <linearGradient id="lgr" x1="100%" y1="0%" x2="0%" y2="0%">
                  <stop offset="0%" stopColor="#b8b4f5" stopOpacity="0.15" />
                  <stop offset="100%" stopColor="#13B3B7" stopOpacity="0.55" />
                </linearGradient>
              </defs>
              {/* Left top (G) → center */}
              <line x1="33%" y1="22%" x2="50%" y2="50%" stroke="url(#lgl)" strokeWidth="1.5" strokeDasharray="5 5" />
              {/* Left bottom (A) → center */}
              <line x1="33%" y1="78%" x2="50%" y2="50%" stroke="url(#lgl)" strokeWidth="1.5" strokeDasharray="5 5" />
              {/* Right top (I) → center */}
              <line x1="67%" y1="22%" x2="50%" y2="50%" stroke="url(#lgr)" strokeWidth="1.5" strokeDasharray="5 5" />
              {/* Right bottom (N) → center */}
              <line x1="67%" y1="78%" x2="50%" y2="50%" stroke="url(#lgr)" strokeWidth="1.5" strokeDasharray="5 5" />
            </svg>

            {/* LEFT COLUMN */}
            <div className="flex flex-col gap-8 pr-6 relative z-10">
              {items.filter(i => i.side === "left").map((item) => (
                <div key={item.letter} className="flex items-center gap-4 justify-end">
                  {/* Card */}
                  <div className="flex-1 max-w-[300px] bg-white border border-[#e2dfff] rounded-2xl p-5 text-right shadow-sm hover:shadow-md hover:border-[#7c3aed]/40 transition-all duration-300 group cursor-default">
                    <span className="inline-block text-[10px] font-black px-2 py-0.5 rounded-md bg-[#f0eeff] text-[#7c3aed] border border-[#e2dfff] mb-2">
                      {item.letter}
                    </span>
                    <h3 className="text-[#152268] font-black text-sm leading-snug">
                      <span className="gain-gradient-text">{item.letter}</span>
                      {item.title.slice(1)}<br />
                      <span className="font-semibold text-slate-500">{item.subtitle}</span>
                    </h3>
                    <p className="text-slate-500 text-xs leading-relaxed mt-2">{item.desc}</p>
                  </div>
                  {/* Icon node */}
                  <div
                    className="w-12 h-12 shrink-0 rounded-full flex items-center justify-center shadow-lg z-10"
                    style={{ background: `linear-gradient(135deg, ${item.color}, ${item.color2})` }}
                  >
                    <item.Icon className="w-5 h-5 text-white" />
                  </div>
                </div>
              ))}
            </div>

            {/* CENTER */}
            <div className="relative flex items-center justify-center z-10 h-full">
              <div className="relative flex items-center justify-center">
                {/* Outer dashed ring */}
                <div className="absolute w-[224px] h-[224px] rounded-full border border-dashed border-[#c4bfff]/70" />
                {/* Inner solid ring */}
                <div className="absolute w-[192px] h-[192px] rounded-full border border-[#e2dfff] bg-white/90 backdrop-blur-sm shadow-[0_0_40px_rgba(124,58,237,0.08)]" />
                {/* Center content — this IS the heading */}
                <div className="relative z-10 flex flex-col items-center justify-center text-center w-[165px]">
                  <img
                    src="/logos/logo.png"
                    alt="GAIN"
                    className="h-10 w-auto object-contain mb-3"
                  />
                  <p className="text-[13px] font-black text-[#152268] leading-snug tracking-tight">
                    Our Name Is<br />
                    <span className="gain-gradient-text">Our Promise.</span>
                  </p>
                  <p className="text-[9px] text-slate-400 mt-1.5 font-medium leading-tight max-w-[130px]">
                    Every letter stands for<br />a commitment we keep.
                  </p>
                </div>
              </div>
            </div>

            {/* RIGHT COLUMN */}
            <div className="flex flex-col gap-8 pl-6 relative z-10">
              {items.filter(i => i.side === "right").map((item) => (
                <div key={item.letter} className="flex items-center gap-4 justify-start">
                  {/* Icon node */}
                  <div
                    className="w-12 h-12 shrink-0 rounded-full flex items-center justify-center shadow-lg z-10"
                    style={{ background: `linear-gradient(135deg, ${item.color}, ${item.color2})` }}
                  >
                    <item.Icon className="w-5 h-5 text-white" />
                  </div>
                  {/* Card */}
                  <div className="flex-1 max-w-[300px] bg-white border border-[#e2dfff] rounded-2xl p-5 text-left shadow-sm hover:shadow-md hover:border-[#7c3aed]/40 transition-all duration-300 group cursor-default">
                    <span className="inline-block text-[10px] font-black px-2 py-0.5 rounded-md bg-[#f0eeff] text-[#7c3aed] border border-[#e2dfff] mb-2">
                      {item.letter}
                    </span>
                    <h3 className="text-[#152268] font-black text-sm leading-snug">
                      <span className="gain-gradient-text">{item.letter}</span>
                      {item.title.slice(1)}<br />
                      <span className="font-semibold text-slate-500">{item.subtitle}</span>
                    </h3>
                    <p className="text-slate-500 text-xs leading-relaxed mt-2">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>

        {/* ── MOBILE ── */}
        <div className="lg:hidden grid grid-cols-1 sm:grid-cols-2 gap-4">
          {items.map((item) => (
            <div key={item.letter} className="bg-white border border-[#e2dfff] rounded-2xl p-5 flex items-start gap-4 hover:shadow-md transition-all duration-300">
              <div
                className="w-11 h-11 shrink-0 rounded-full flex items-center justify-center shadow-md"
                style={{ background: `linear-gradient(135deg, ${item.color}, ${item.color2})` }}
              >
                <item.Icon className="w-5 h-5 text-white" />
              </div>
              <div>
                <span className="text-[10px] font-black tracking-wider text-[#4A3DD5] uppercase mb-1 block">{item.letter}</span>
                <h3 className="text-[#152268] font-bold text-sm leading-snug mb-1">
                  <span className="gain-gradient-text">{item.letter}</span>{item.title.slice(1)} {item.subtitle}
                </h3>
                <p className="text-slate-500 text-xs leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-8 flex justify-center">
          <Link
            href="/book-consultation"
            className="gain-gradient hover:from-[#3630a8] hover:to-[#0d9a9e] text-white text-sm font-bold tracking-wide px-10 py-4 rounded-full transition-all duration-300 shadow-2xl shadow-[#7e22ce]/20 hover:shadow-purple-300/60"
          >
            Book a Strategy Call
          </Link>
        </div>

      </div>
    </section>
  );
}

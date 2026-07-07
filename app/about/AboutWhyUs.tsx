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
    },
  ];

  return (
    <section className="relative py-20 px-4 overflow-hidden bg-[#f4f3ff]">

      {/* Background glows — bigger and more vibrant */}
      <div className="absolute top-0 left-1/4 w-[800px] h-[600px] bg-purple-200/40 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[600px] h-[500px] bg-teal-200/30 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-indigo-100/50 rounded-full blur-[80px] pointer-events-none" />

      {/* Full-bleed container — no max-w cap so it uses the screen */}
      <div className="relative z-10 max-w-[1400px] mx-auto">

        {/* ── DESKTOP LAYOUT ── */}
        <div className="hidden lg:grid lg:grid-cols-[1fr_300px_1fr] items-center gap-0 relative min-h-[550px]">

          {/* SVG connector lines */}
          <svg
            className="absolute inset-0 w-full h-full pointer-events-none"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <defs>
              <linearGradient id="lgl" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#b8b4f5" stopOpacity="0.1" />
                <stop offset="100%" stopColor="#7c3aed" stopOpacity="0.6" />
              </linearGradient>
              <linearGradient id="lgr" x1="100%" y1="0%" x2="0%" y2="0%">
                <stop offset="0%" stopColor="#b8b4f5" stopOpacity="0.1" />
                <stop offset="100%" stopColor="#13B3B7" stopOpacity="0.6" />
              </linearGradient>
            </defs>
            {/* Left top (G) → center */}
            <line x1="33%" y1="22%" x2="50%" y2="50%" stroke="url(#lgl)" strokeWidth="1.5" strokeDasharray="6 5" />
            {/* Left bottom (A) → center */}
            <line x1="33%" y1="78%" x2="50%" y2="50%" stroke="url(#lgl)" strokeWidth="1.5" strokeDasharray="6 5" />
            {/* Right top (I) → center */}
            <line x1="67%" y1="22%" x2="50%" y2="50%" stroke="url(#lgr)" strokeWidth="1.5" strokeDasharray="6 5" />
            {/* Right bottom (N) → center */}
            <line x1="67%" y1="78%" x2="50%" y2="50%" stroke="url(#lgr)" strokeWidth="1.5" strokeDasharray="6 5" />
          </svg>

          {/* ── LEFT COLUMN ── */}
          <div className="flex flex-col gap-10 pr-8 relative z-10">
            {items.filter(i => i.side === "left").map((item) => (
              <div key={item.letter} className="flex items-center gap-5 justify-end">

                {/* Card */}
                <div className="flex-1 bg-[#f8f7ff] border border-[#e2dfff] rounded-3xl p-7 text-right shadow-md hover:shadow-xl hover:shadow-purple-100 hover:border-[#7c3aed]/40 hover:-translate-y-1 transition-all duration-300 cursor-default">
                  <h3 className="text-[#152268] font-black text-sm leading-snug">
                    <span className="text-2xl">{item.letter}</span>
                    {item.title.slice(1)}<br />
                    <span>{item.subtitle}</span>
                  </h3>
                  <p className="text-slate-500 text-xs leading-relaxed mt-3">{item.desc}</p>
                </div>

                {/* Icon node — bigger */}
                <div
                  className="w-14 h-14 shrink-0 rounded-full flex items-center justify-center shadow-xl z-10"
                  style={{ background: `linear-gradient(135deg, ${item.color}, ${item.color2})`, boxShadow: `0 8px 32px ${item.color}40` }}
                >
                  <item.Icon className="w-6 h-6 text-white" />
                </div>
              </div>
            ))}
          </div>

          {/* ── CENTER ORB ── */}
          <div className="relative flex items-center justify-center z-10 h-full">
            <div className="relative flex items-center justify-center">

              {/* Outermost pulse ring */}
              <div className="absolute w-[290px] h-[290px] rounded-full border border-dashed border-[#c4bfff]/40 animate-[spin_60s_linear_infinite]" />
              {/* Mid ring */}
              <div className="absolute w-[256px] h-[256px] rounded-full border border-[#e2dfff]/80 bg-white/30 backdrop-blur-sm" />
              {/* Inner solid orb */}
              <div className="absolute w-[220px] h-[220px] rounded-full bg-white border border-[#e2dfff] shadow-[0_0_80px_rgba(124,58,237,0.12)]" />

              {/* Content */}
              <div className="relative z-10 flex flex-col items-center justify-center text-center w-[185px]">
                <img
                  src="/logos/GAIN_final_logo.png"
                  alt="GAIN"
                  className="h-12 w-auto object-contain mb-3"
                />
                <p className="text-[13px] font-black text-[#152268] leading-snug tracking-tight">
                  Our Name Is<br />
                  <span className="gain-gradient-text">Our Promise.</span>
                </p>
              </div>
            </div>
          </div>

          {/* ── RIGHT COLUMN ── */}
          <div className="flex flex-col gap-10 pl-8 relative z-10">
            {items.filter(i => i.side === "right").map((item) => (
              <div key={item.letter} className="flex items-center gap-5 justify-start">

                {/* Icon node — bigger */}
                <div
                  className="w-14 h-14 shrink-0 rounded-full flex items-center justify-center shadow-xl z-10"
                  style={{ background: `linear-gradient(135deg, ${item.color}, ${item.color2})`, boxShadow: `0 8px 32px ${item.color}40` }}
                >
                  <item.Icon className="w-6 h-6 text-white" />
                </div>

                {/* Card */}
                <div className="flex-1 bg-[#f8f7ff] border border-[#e2dfff] rounded-3xl p-7 text-left shadow-md hover:shadow-xl hover:shadow-teal-100 hover:border-[#13B3B7]/40 hover:-translate-y-1 transition-all duration-300 cursor-default">
                  <h3 className="text-[#152268] font-black text-sm leading-snug">
                    <span className="text-2xl">{item.letter}</span>
                    {item.title.slice(1)}<br />
                    <span>{item.subtitle}</span>
                  </h3>
                  <p className="text-slate-500 text-xs leading-relaxed mt-3">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

        </div>

        {/* ── MOBILE ── */}
        <div className="lg:hidden grid grid-cols-1 sm:grid-cols-2 gap-5">
          {items.map((item) => (
            <div key={item.letter} className="bg-[#f8f7ff] border border-[#e2dfff] rounded-3xl p-6 flex items-start gap-4 hover:shadow-md transition-all duration-300">
              <div
                className="w-12 h-12 shrink-0 rounded-full flex items-center justify-center shadow-md"
                style={{ background: `linear-gradient(135deg, ${item.color}, ${item.color2})` }}
              >
                <item.Icon className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="text-[#152268] font-bold text-sm leading-snug mb-1.5">
                  <span className="text-2xl">{item.letter}</span>{item.title.slice(1)} {item.subtitle}
                </h3>
                <p className="text-slate-500 text-xs leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-2 flex justify-center">
          <Link
            href="/book-consultation"
            className="gain-gradient hover:from-[#3630a8] hover:to-[#0d9a9e] text-white text-sm font-bold tracking-wide px-12 py-5 rounded-full transition-all duration-300 shadow-2xl shadow-[#7e22ce]/20 hover:shadow-purple-300/60 hover:-translate-y-0.5"
          >
            Book a Strategy Call
          </Link>
        </div>

      </div>
    </section>
  );
}

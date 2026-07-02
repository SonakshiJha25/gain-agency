"use client";

import { ArrowRight } from "lucide-react";

export default function LeadForm() {
  return (
    <section className="relative py-24 px-6 overflow-hidden">

      {/* background base gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-purple-50 to-white" />

      {/* soft glowing blobs */}
      <div className="absolute -top-40 -right-40 w-[420px] h-[420px] bg-purple-300 blur-[140px] opacity-30 rounded-full" />
      <div className="absolute -bottom-40 -left-40 w-[380px] h-[380px] bg-violet-300 blur-[140px] opacity-20 rounded-full" />

      <div className="max-w-5xl mx-auto relative">

        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-black tracking-tight leading-[1.1] text-[#152268]">
            Ready to <span className="gain-gradient-text">GAIN</span> your competitive edge on Amazon?
          </h2>

          <p className="mt-6 text-base text-slate-700 leading-relaxed max-w-xl mx-auto">
            Share your details and we’ll build a quick growth plan for your store.
          </p>
        </div>

        {/* Form card */}
        <div className="bg-white border border-gray-100 rounded-3xl p-8 md:p-12 shadow-2xl shadow-slate-200/60">

          <div className="grid md:grid-cols-2 gap-5">

            <input
              placeholder="Full Name"
              className="w-full h-12 px-5 rounded-xl border border-gray-200 bg-white text-sm outline-none focus:border-[#13B3B7] focus:ring-1 focus:ring-[#13B3B7] transition-all placeholder:text-slate-600"
            />

            <input
              placeholder="Email Address"
              className="w-full h-12 px-5 rounded-xl border border-gray-200 bg-white text-sm outline-none focus:border-[#13B3B7] focus:ring-1 focus:ring-[#13B3B7] transition-all placeholder:text-slate-600"
            />

            <input
              placeholder="Phone Number"
              className="w-full h-12 px-5 rounded-xl border border-gray-200 bg-white text-sm outline-none focus:border-[#13B3B7] focus:ring-1 focus:ring-[#13B3B7] transition-all placeholder:text-slate-600"
            />

            <input
              placeholder="Amazon Store Link (Optional)"
              className="w-full h-12 px-5 rounded-xl border border-gray-200 bg-white text-sm outline-none focus:border-[#13B3B7] focus:ring-1 focus:ring-[#13B3B7] transition-all placeholder:text-slate-600"
            />

          </div>

          {/* centered button */}
          <div className="flex justify-center mt-10">
            <button className="gain-gradient hover:from-[#3630a8] hover:to-[#0d9a9e] text-white px-8 py-3.5 rounded-full text-sm font-semibold transition-all duration-300 shadow-2xl shadow-[#152268]/20 hover:shadow-[0_8px_30px_rgba(0,0,0,0.16)] hover:-translate-y-0.5 flex items-center justify-center gap-2">
              Book a Strategy Call
            </button>
          </div>

          <p className="text-xs text-slate-700 mt-4 text-center">
            We usually respond within 24–48 hours.
          </p>

        </div>
      </div>
    </section>
  );
}
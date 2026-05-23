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
        <div className="text-center mb-10">
          <h2 className="text-[28px] md:text-[42px] leading-[1.05] font-black tracking-[-0.05em] text-[#020617]">
            Let’s Grow Your Amazon Business
          </h2>

          <p className="mt-5 text-[15px] md:text-[14px] leading-[1.9] text-[#6b7280]">
            Share your details and we’ll build a quick growth plan for your store.
          </p>
        </div>

        {/* Form card */}
        <div className="bg-[#faf7ff] border border-[#ece4ff] rounded-[32px] p-6 md:p-9 shadow-sm">

          <div className="grid md:grid-cols-2 gap-5">

            <input
              placeholder="Full Name"
              className="w-full h-11 px-4 rounded-xl border border-[#e5d9ff] bg-white text-[14px] outline-none focus:border-[#6d28d9] placeholder:text-[#6b7280]"
            />

            <input
              placeholder="Email Address"
              className="w-full h-11 px-4 rounded-xl border border-[#e5d9ff] bg-white text-[14px] outline-none focus:border-[#6d28d9] placeholder:text-[#6b7280]"
            />

            <input
              placeholder="Phone Number"
              className="w-full h-11 px-4 rounded-xl border border-[#e5d9ff] bg-white text-[14px] outline-none focus:border-[#6d28d9] placeholder:text-[#6b7280]"
            />

            <input
              placeholder="Amazon Store Link"
              className="w-full h-11 px-4 rounded-xl border border-[#e5d9ff] bg-white text-[14px] outline-none focus:border-[#6d28d9] placeholder:text-[#6b7280]"
            />

          </div>

          {/* centered button */}
          <div className="flex justify-center mt-7">
            <button className="bg-[#6d28d9] hover:bg-[#5b21b6] text-white px-12 py-4.5 rounded-full text-[16px] font-semibold transition-all duration-300 hover:-translate-y-0.5 shadow-lg shadow-purple-300/30 flex items-center gap-2">
              Get My Free Growth Plan
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>

          <p className="text-xs text-[#6b7280] mt-4 text-center">
            We usually respond within 24–48 hours.
          </p>

        </div>
      </div>
    </section>
  );
}
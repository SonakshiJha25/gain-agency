import Link from "next/link";

import {
  ArrowRight,
  Download
} from "lucide-react";

export default function FeaturedResource() {
  return (

    // Featured Resource Section
    <section className="relative py-24 px-6 bg-white overflow-hidden">

      {/* Glow */}
      <div className="absolute bottom-[-140px] left-[-120px] w-[340px] h-[340px] rounded-full bg-purple-200/40 blur-3xl" />

      {/* Main Container */}
      <div className="relative z-10 max-w-7xl mx-auto">

        {/* Header */}
        <div className="max-w-3xl">

          {/* Label */}
          <p className="text-[#6d28d9] text-[11px] font-bold tracking-[0.28em] uppercase mb-4">
            Featured Resource
          </p>

          {/* Heading */}
          <h2 className="text-[28px] md:text-[42px] leading-[1.05] font-black tracking-[-0.05em] text-[#020617]">
            Amazon Growth
            <br />
            Scaling Framework
          </h2>

        </div>

        {/* Featured Card */}
        <div className="mt-12 relative overflow-hidden rounded-[32px] bg-gradient-to-br from-[#6d28d9] via-[#6d28d9] to-[#30a5b0] p-8 md:p-12 shadow-xl shadow-purple-900/10">

          {/* Outline Text */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">

            <h1
              className="
                text-[20vw]
                md:text-[14vw]
                font-black
                tracking-[0.14em]
                leading-none
                text-transparent
                [-webkit-text-stroke:1px_rgba(255,255,255,0.06)]
              "
            >
              SCALE
            </h1>

          </div>

          {/* Content */}
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

            {/* Left */}
            <div>

              {/* Mini Badge */}
              <div className="inline-flex items-center gap-2 bg-white/10 border border-white/10 rounded-full px-4 py-1.5">

                <span className="w-2 h-2 rounded-full bg-white" />

                <span className="text-[11px] uppercase tracking-[0.08em] font-bold text-white">
                  Free PDF Guide
                </span>

              </div>

              {/* Title */}
              <h3 className="mt-6 text-[26px] md:text-[38px] leading-[1.05] font-black tracking-[-0.05em] text-white">
                The Complete
                <br />
                Amazon Scaling
                <br />
                Playbook
              </h3>

              {/* Description */}
              <p className="mt-6 text-[14px] md:text-[15px] leading-[1.8] text-purple-100 max-w-xl">
                Learn the exact systems used to improve
                advertising performance,
                increase conversion rates,
                and scale Amazon brands sustainably.
              </p>

            </div>

            {/* Right */}
            <div className="bg-white/10 border border-white/15 rounded-2xl p-6 md:p-8 backdrop-blur-md">

              {/* Resource Points */}
              <div className="space-y-4">

                {/* Point */}
                <div className="flex items-start gap-3">

                  <div className="w-2.5 h-2.5 rounded-full bg-white mt-1.5" />

                  <p className="text-[14px] leading-[1.6] text-purple-100">
                    Amazon PPC scaling systems
                  </p>

                </div>

                {/* Point */}
                <div className="flex items-start gap-3">

                  <div className="w-2.5 h-2.5 rounded-full bg-white mt-1.5" />

                  <p className="text-[14px] leading-[1.6] text-purple-100">
                    Conversion-focused listing optimization
                  </p>

                </div>

                {/* Point */}
                <div className="flex items-start gap-3">

                  <div className="w-2.5 h-2.5 rounded-full bg-white mt-1.5" />

                  <p className="text-[14px] leading-[1.6] text-purple-100">
                    ROAS improvement frameworks
                  </p>

                </div>

                {/* Point */}
                <div className="flex items-start gap-3">

                  <div className="w-2.5 h-2.5 rounded-full bg-white mt-1.5" />

                  <p className="text-[14px] leading-[1.6] text-purple-100">
                    Sustainable long-term scaling strategies
                  </p>

                </div>

              </div>

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 mt-8">

                {/* Download */}
                <button
                  className="
                    inline-flex
                    items-center
                    justify-center
                    gap-2
                    bg-white
                    hover:bg-[#f4f1ff]
                    text-[#6d28d9]
                    px-5
                    py-3
                    rounded-xl
                    text-[14px]
                    font-medium
                    transition-all
                    duration-300
                    hover:-translate-y-0.5
                  "
                >

                  <Download className="w-4 h-4" />

                  Download Guide

                </button>

                {/* Learn More */}
                <Link
                  href="/services"
                  className="
                    inline-flex
                    items-center
                    justify-center
                    gap-2
                    border
                    border-white/20
                    bg-white/5
                    hover:bg-white/10
                    text-white
                    px-5
                    py-3
                    rounded-xl
                    text-[14px]
                    font-medium
                    transition-all
                    duration-300
                    hover:-translate-y-0.5
                  "
                >

                  Explore Services

                  <ArrowRight className="w-4 h-4" />

                </Link>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

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
          <p className="text-[#4A3DD5] text-xs font-bold tracking-[0.2em] uppercase mb-4">
            Featured Resource
          </p>

          {/* Heading */}
          <h2 className="text-3xl md:text-4xl font-black tracking-tight leading-[1.1] text-[#152268]">
            Amazon Growth
            <br />
            <span className="gain-gradient-text">
              Scaling Framework
            </span>
          </h2>

        </div>

        {/* Featured Card */}
        <div className="mt-12 relative overflow-hidden rounded-[32px] gain-gradient p-8 md:p-12 shadow-2xl shadow-[#7e22ce]/20 shadow-purple-900/10">

          {/* Outline Text */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">

            <h1
              className="
                text-[22vw]
                md:text-[18vw]
                font-black
                tracking-[0.14em]
                leading-none
                text-transparent
                [-webkit-text-stroke:1px_rgba(255,255,255,0.06)]
              "
            >
              GAIN
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
              <h3 className="mt-6 text-xl font-black tracking-tight leading-[1.1] text-white">
                The Complete
                <br />
                Amazon Scaling
                <br />
                Playbook
              </h3>

              {/* Description */}
              <p className="mt-6 text-sm leading-relaxed text-purple-100 max-w-xl">
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

                  <p className="text-sm leading-relaxed text-purple-100">
                    Amazon PPC scaling systems
                  </p>

                </div>

                {/* Point */}
                <div className="flex items-start gap-3">

                  <div className="w-2.5 h-2.5 rounded-full bg-white mt-1.5" />

                  <p className="text-sm leading-relaxed text-purple-100">
                    Conversion-focused listing optimization
                  </p>

                </div>

                {/* Point */}
                <div className="flex items-start gap-3">

                  <div className="w-2.5 h-2.5 rounded-full bg-white mt-1.5" />

                  <p className="text-sm leading-relaxed text-purple-100">
                    ROAS improvement frameworks
                  </p>

                </div>

                {/* Point */}
                <div className="flex items-start gap-3">

                  <div className="w-2.5 h-2.5 rounded-full bg-white mt-1.5" />

                  <p className="text-sm leading-relaxed text-purple-100">
                    Sustainable long-term scaling strategies
                  </p>

                </div>

              </div>

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 mt-8">

                {/* Download */}
                <Link
                  href="/resources/coming-soon"
                  className="
                    inline-flex
                    items-center
                    justify-center
                    gap-2
                    bg-white
                    hover:bg-[#f2f1ff]
                    text-[#4A3DD5]
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

                </Link>

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

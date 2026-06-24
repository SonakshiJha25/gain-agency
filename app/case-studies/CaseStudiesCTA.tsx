import Link from "next/link";

import {
  ArrowRight,
  CalendarDays
} from "lucide-react";

export default function CaseStudiesCTA() {
  return (

    // CTA Section
    <section className="relative py-24 px-6 bg-white overflow-hidden">

      {/* Glow */}
      <div className="absolute top-[-120px] right-[-120px] w-[320px] h-[320px] rounded-full bg-purple-200/40 blur-3xl" />

      {/* Main Container */}
      <div className="relative z-10 max-w-6xl mx-auto">

        {/* CTA Card */}
        <div className="relative overflow-hidden rounded-[32px] bg-gradient-to-br from-[#6d28d9] via-[#6d28d9] to-[#30a5b0] px-8 md:px-16 py-16 md:py-20 shadow-xl shadow-purple-900/10">

          {/* Background Text */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">

            <h1
              className="
                text-[24vw]
                md:text-[16vw]
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

          {/* Inner Glow */}
          <div className="absolute bottom-[-120px] left-[-120px] w-[320px] h-[320px] rounded-full bg-white/10 blur-3xl" />

          {/* Content */}
          <div className="relative z-10 max-w-3xl mx-auto text-center">

            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/10 px-4 py-1.5 rounded-full mb-6">

              <span className="w-2 h-2 rounded-full bg-white" />

              <span className="text-[11px] font-bold uppercase tracking-[0.08em] text-white">
                Ready To Grow?
              </span>

            </div>

            {/* Heading */}
            <h2 className="text-[28px] md:text-[42px] leading-[1.05] font-black tracking-[-0.05em] text-white">
              Let’s Build
              <br />
              Your Growth Strategy
            </h2>

            {/* Description */}
            <p className="mt-5 text-[14px] md:text-[15px] leading-[1.8] text-purple-100">
              Get a personalized Amazon growth plan focused on profitability, scalability, and long-term performance systems.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">

              {/* Primary Button */}
              <Link
                href="/book-consultation"
                className="
                  inline-flex
                  items-center
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

                <CalendarDays className="w-4 h-4" />

                Book Free Consultation

              </Link>

              {/* Secondary Button */}
              <Link
                href="/services"
                className="
                  inline-flex
                  items-center
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

    </section>
  );
}
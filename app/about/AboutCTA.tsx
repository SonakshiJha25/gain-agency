import Link from "next/link";

import {
  ArrowRight,
  CalendarDays
} from "lucide-react";

export default function AboutCTA() {
  return (

    // CTA Section
    <section className="relative py-32 px-6 bg-white overflow-hidden">

      {/* Background Glow */}
      <div className="absolute top-[-120px] right-[-120px] w-[320px] h-[320px] rounded-full bg-purple-200/40 blur-3xl" />

      {/* Main Container */}
      <div className="relative z-10 max-w-6xl mx-auto">

        {/* CTA Card */}
        <div className="relative overflow-hidden rounded-[32px] bg-[#6d28d9] px-8 md:px-16 py-16 md:py-20">

          {/* Huge Outline Text */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">

            <h1
              className="
                text-[22vw]
                md:text-[15vw]
                font-black
                tracking-[0.14em]
                leading-none
                text-transparent
                [-webkit-text-stroke:1px_rgba(255,255,255,0.08)]
              "
            >
              BUILD
            </h1>

          </div>

          {/* Glow */}
          <div className="absolute bottom-[-120px] left-[-120px] w-[320px] h-[320px] rounded-full bg-white/10 blur-3xl" />

          {/* Content */}
          <div className="relative z-10 max-w-3xl mx-auto text-center">

            {/* Small Badge */}
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/10 rounded-full px-4 py-2 mb-6">

              <span className="w-2 h-2 rounded-full bg-white" />

              <span className="text-[12px] font-semibold uppercase tracking-[0.08em] text-white">
                Let’s Work Together
              </span>

            </div>

            {/* Heading */}
            <h2 className="text-[30px] md:text-[50px] leading-[0.96] font-black tracking-[-0.06em] text-white">

              Ready To Scale
              <br />

              Your Amazon Brand?

            </h2>

            {/* Description */}
            <p className="mt-5 text-[15px] md:text-[14px] leading-[1.9] text-purple-100">

              Build stronger campaigns,
              better conversion systems,
              and scalable Amazon growth strategies
              with GAIN.

            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">

              {/* Primary */}
              <Link
                href="/book-consultation"
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
                  shadow-lg
                  shadow-purple-900/20
                "
              >

                <CalendarDays className="w-4 h-4" />

                Book Free Consultation

              </Link>

              {/* Secondary */}
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

    </section>
  );
}
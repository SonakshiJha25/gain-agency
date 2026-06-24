import {
  TrendingUp,
  Volume2,
  Lightbulb,
  Compass
} from "lucide-react";

export default function AboutValues() {
  return (

    // Values Section
    <section className="relative py-32 px-6 bg-[#f7f4ff] overflow-hidden">

      {/* Glow */}
      <div className="absolute top-[-120px] left-[-120px] w-[320px] h-[320px] rounded-full bg-purple-200/40 blur-3xl" />

      {/* Main Container */}
      <div className="relative z-10 max-w-7xl mx-auto">

        {/* Header */}
        <div className="max-w-3xl mx-auto text-center">

          {/* Label */}
          <p className="text-[#6d28d9] text-[11px] font-bold tracking-[0.28em] uppercase mb-5">
            The GAIN Promise
          </p>

          {/* Heading */}
          <h2 className="text-[28px] md:text-[42px] leading-[1.05] font-black tracking-[-0.05em] text-[#020617]">

            Our Name Defines
            <br />

            Our Philosophy

          </h2>

          {/* Description */}
          <p className="mt-6 text-[15px] md:text-[14px] leading-[1.9] text-[#6b7280]">

            At GAIN, we specialize in helping brands unlock their full potential on Amazon.
            Our name defines our philosophy and commitment to your success:

          </p>

        </div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-7 mt-20">

          {/* VALUE 1 (G) */}
          <div className="bg-white border border-[#ece4ff] rounded-[32px] p-9">

            {/* Icon */}
            <div className="w-14 h-14 rounded-2xl bg-[#f3edff] flex items-center justify-center">

              <TrendingUp className="w-6 h-6 text-[#30a5b0]" />

            </div>

            {/* Title */}
            <h3 className="mt-6 text-[22px] font-bold tracking-[-0.03em] text-[#020617]">

              Grow

            </h3>

            {/* Description */}
            <p className="mt-4 text-[14px] leading-[1.9] text-[#6b7280]">

              Grow your revenue with scalable strategies.

            </p>

          </div>

          {/* VALUE 2 (A) */}
          <div className="bg-gradient-to-br from-[#6d28d9] via-[#6d28d9] to-[#30a5b0] rounded-[32px] p-9 text-white">

            {/* Icon */}
            <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center">

              <Volume2 className="w-6 h-6" />

            </div>

            {/* Title */}
            <h3 className="mt-6 text-[22px] font-bold tracking-[-0.03em]">

              Amplify

            </h3>

            {/* Description */}
            <p className="mt-4 text-[14px] leading-[1.9] text-purple-100">

              Amplify your visibility and conversions.

            </p>

          </div>

          {/* VALUE 3 (I) */}
          <div className="bg-gradient-to-br from-[#6d28d9] via-[#6d28d9] to-[#30a5b0] rounded-[32px] p-9 text-white">

            {/* Icon */}
            <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center">

              <Lightbulb className="w-6 h-6" />

            </div>

            {/* Title */}
            <h3 className="mt-6 text-[22px] font-bold tracking-[-0.03em]">

              Innovate

            </h3>

            {/* Description */}
            <p className="mt-4 text-[14px] leading-[1.9] text-purple-100">

              Innovate with cutting-edge ad tactics now, not what worked last year.

            </p>

          </div>

          {/* VALUE 4 (N) */}
          <div className="bg-white border border-[#ece4ff] rounded-[32px] p-9">

            {/* Icon */}
            <div className="w-14 h-14 rounded-2xl bg-[#f3edff] flex items-center justify-center">

              <Compass className="w-6 h-6 text-[#30a5b0]" />

            </div>

            {/* Title */}
            <h3 className="mt-6 text-[22px] font-bold tracking-[-0.03em] text-[#020617]">

              Navigate

            </h3>

            {/* Description */}
            <p className="mt-4 text-[14px] leading-[1.9] text-[#6b7280]">

              Navigate the complexity of Amazon advertising.

            </p>

          </div>

        </div>

      </div>

    </section>
  );
}
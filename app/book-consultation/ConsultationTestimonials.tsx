import Link from "next/link";
import {
  Star
} from "lucide-react";

export default function ConsultationTestimonials() {
  return (

    // Testimonials Section
    <section className="relative py-16 md:py-32 px-6 bg-white overflow-hidden">

      {/* Soft Glow */}
      <div className="absolute bottom-[-120px] right-[-120px] w-[320px] h-[320px] bg-purple-100 rounded-full blur-3xl opacity-60" />

      {/* Main Container */}
      <div className="relative z-10 max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto">

          {/* Badge */}
          <p className="text-[#4A3DD5] text-[11px] font-bold tracking-[0.28em] uppercase mb-4">
            Client Feedback
          </p>

          {/* Heading */}
          <h2 className="text-[28px] md:text-[42px] leading-[1.05] font-black tracking-[-0.05em] text-[#152268]">

            Trusted By
            <br />

            <span className="gain-gradient-text">
              Growing Amazon Brands
            </span>

          </h2>

          {/* Description */}
          <p className="mt-5 text-[15px] md:text-[14px] leading-[1.9] text-slate-700">
            Brands choose <span className="gain-gradient-text">GAIN</span> for clear communication,
            strategic execution, and performance-focused growth.
          </p>

        </div>

        {/* Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-7 mt-20">

          {/* Card 1 */}
          <div className="bg-[#f5f4ff] border border-[#e5e3ff] rounded-[32px] p-9">

            {/* Stars */}
            <div className="flex items-center gap-1 mb-6">

              <Star className="w-4 h-4 fill-[#4A3DD5] text-[#4A3DD5]" />
              <Star className="w-4 h-4 fill-[#4A3DD5] text-[#4A3DD5]" />
              <Star className="w-4 h-4 fill-[#4A3DD5] text-[#4A3DD5]" />
              <Star className="w-4 h-4 fill-[#4A3DD5] text-[#4A3DD5]" />
              <Star className="w-4 h-4 fill-[#4A3DD5] text-[#4A3DD5]" />

            </div>

            {/* Review */}
            <p className="text-[15px] leading-[1.9] text-slate-700">
              Their strategy-first approach helped us
              understand where our ad spend was leaking
              and how to scale more efficiently.
            </p>

            {/* Client */}
            <div className="mt-8">

              <h3 className="text-[16px] font-bold text-[#152268]">
                Aman Verma
              </h3>

              <p className="text-[14px] text-slate-700 mt-1">
                Amazon Seller
              </p>

            </div>

          </div>

          {/* Card 2 */}
          <div className="bg-[#f5f4ff] border border-[#e5e3ff] rounded-[32px] p-9">

            {/* Stars */}
            <div className="flex items-center gap-1 mb-6">

              <Star className="w-4 h-4 fill-[#4A3DD5] text-[#4A3DD5]" />
              <Star className="w-4 h-4 fill-[#4A3DD5] text-[#4A3DD5]" />
              <Star className="w-4 h-4 fill-[#4A3DD5] text-[#4A3DD5]" />
              <Star className="w-4 h-4 fill-[#4A3DD5] text-[#4A3DD5]" />
              <Star className="w-4 h-4 fill-[#4A3DD5] text-[#4A3DD5]" />

            </div>

            {/* Review */}
            <p className="text-[15px] leading-[1.9] text-slate-700">
              The improvements in our listings and A+
              content made the brand feel far more
              premium and conversion-focused.
            </p>

            {/* Client */}
            <div className="mt-8">

              <h3 className="text-[16px] font-bold text-[#152268]">
                Ananya Sharma
              </h3>

              <p className="text-[14px] text-slate-700 mt-1">
                D2C Brand Founder
              </p>

            </div>

          </div>

          {/* Card 3 */}
          <div className="bg-[#f5f4ff] border border-[#e5e3ff] rounded-[32px] p-9">

            {/* Stars */}
            <div className="flex items-center gap-1 mb-6">

              <Star className="w-4 h-4 fill-[#4A3DD5] text-[#4A3DD5]" />
              <Star className="w-4 h-4 fill-[#4A3DD5] text-[#4A3DD5]" />
              <Star className="w-4 h-4 fill-[#4A3DD5] text-[#4A3DD5]" />
              <Star className="w-4 h-4 fill-[#4A3DD5] text-[#4A3DD5]" />
              <Star className="w-4 h-4 fill-[#4A3DD5] text-[#4A3DD5]" />

            </div>

            {/* Review */}
            <p className="text-[15px] leading-[1.9] text-slate-700">
              Campaign restructuring significantly reduced
              wasted spend and made overall performance
              much more stable over time.
            </p>

            {/* Client */}
            <div className="mt-8">

              <h3 className="text-[16px] font-bold text-[#152268]">
                Vikram Singh
              </h3>

              <p className="text-[14px] text-slate-700 mt-1">
                E-commerce Entrepreneur
              </p>

            </div>

          </div>

        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-20">

          <h3 className="text-[28px] md:text-[42px] leading-[1.05] font-black tracking-[-0.05em] text-[#152268]">

            Ready To Grow
            <br />

            <span className="gain-gradient-text">
              Your Amazon Brand?
            </span>

          </h3>

          <p className="mt-5 text-[15px] md:text-[14px] leading-[1.9] text-slate-700 max-w-xl mx-auto">
            Let’s build a smarter strategy focused on
            long-term growth, stronger performance,
            and better profitability.
          </p>

          {/* CTA Button */}
          <Link
            href="#form"
            className="mt-8 gain-gradient hover:from-[#3630a8] hover:to-[#0d9a9e] text-white px-5 py-3 rounded-xl text-[14px] font-medium transition-all duration-300 hover:-translate-y-0.5 inline-block"
          >
            Book Your Free Consultation
          </Link>

        </div>

      </div>

    </section>
  );
}
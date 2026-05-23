import {
  ArrowRight,
  BarChart3,
  Layers3,
  PenTool
} from "lucide-react";

export default function ServiceDetails() {
  return (

    // Detailed Services Section
    <section className="relative py-32 px-6 bg-[#f7f4ff] overflow-hidden">

      {/* Background Glow */}
      <div className="absolute top-[-120px] left-[-120px] w-[320px] h-[320px] bg-purple-200 rounded-full blur-3xl opacity-50" />

      {/* Main Container */}
      <div className="relative z-10 max-w-7xl mx-auto">

        {/* SECTION 1 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center py-14 border-b border-[#ebe3ff]">

          {/* Left */}
          <div>

            <div className="w-14 h-14 rounded-2xl bg-[#efe7ff] flex items-center justify-center">

              <BarChart3 className="w-6 h-6 text-[#6d28d9]" />

            </div>

            <h2 className="mt-7 text-[28px] md:text-[42px] leading-[1.05] font-black tracking-[-0.05em] text-[#020617]">

              Amazon Ads
              <br />

              <span className="bg-gradient-to-r from-[#8b5cf6] via-[#7c3aed] to-[#6d28d9] bg-clip-text text-transparent">
                Optimization
              </span>

            </h2>

            <p className="mt-6 text-[15px] md:text-[14px] leading-[1.9] text-[#6b7280] max-w-xl">
              We create scalable Amazon PPC systems focused
              on profitability, keyword expansion, and
              long-term account growth.
            </p>

          </div>

          {/* Right */}
          <div className="bg-white border border-[#ece4ff] rounded-[32px] p-8">

            <div className="space-y-5">

              <div className="flex items-start gap-4">

                <ArrowRight className="w-5 h-5 text-[#6d28d9] mt-1 shrink-0" />

                <div>

                  <h3 className="text-[18px] font-bold text-[#111827]">
                    Campaign Restructuring
                  </h3>

                  <p className="mt-1 text-[14px] leading-[1.8] text-[#6b7280]">
                    Improve efficiency through smarter
                    campaign segmentation and bidding systems.
                  </p>

                </div>

              </div>

              <div className="flex items-start gap-4">

                <ArrowRight className="w-5 h-5 text-[#6d28d9] mt-1 shrink-0" />

                <div>

                  <h3 className="text-[18px] font-bold text-[#111827]">
                    Keyword Expansion
                  </h3>

                  <p className="mt-1 text-[14px] leading-[1.8] text-[#6b7280]">
                    Discover profitable keyword opportunities
                    using search term and competitor analysis.
                  </p>

                </div>

              </div>

              <div className="flex items-start gap-4">

                <ArrowRight className="w-5 h-5 text-[#6d28d9] mt-1 shrink-0" />

                <div>

                  <h3 className="text-[18px] font-bold text-[#111827]">
                    Performance Tracking
                  </h3>

                  <p className="mt-1 text-[14px] leading-[1.8] text-[#6b7280]">
                    Continuous optimization focused on ACOS,
                    TACOS, ROAS, and conversion growth.
                  </p>

                </div>

              </div>

            </div>

          </div>

        </div>

        {/* SECTION 2 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center py-14 border-b border-[#ebe3ff]">

          {/* Left */}
          <div className="order-2 lg:order-1 bg-white border border-[#ece4ff] rounded-[32px] p-8">

            <div className="space-y-5">

              <div className="flex items-start gap-4">

                <ArrowRight className="w-5 h-5 text-[#6d28d9] mt-1 shrink-0" />

                <div>

                  <h3 className="text-[18px] font-bold text-[#111827]">
                    Listing Health Monitoring
                  </h3>

                  <p className="mt-1 text-[14px] leading-[1.8] text-[#6b7280]">
                    Maintain optimized listings and monitor
                    issues that impact visibility and sales.
                  </p>

                </div>

              </div>

              <div className="flex items-start gap-4">

                <ArrowRight className="w-5 h-5 text-[#6d28d9] mt-1 shrink-0" />

                <div>

                  <h3 className="text-[18px] font-bold text-[#111827]">
                    Growth Planning
                  </h3>

                  <p className="mt-1 text-[14px] leading-[1.8] text-[#6b7280]">
                    Strategic planning designed around
                    scaling goals and profitability targets.
                  </p>

                </div>

              </div>

              <div className="flex items-start gap-4">

                <ArrowRight className="w-5 h-5 text-[#6d28d9] mt-1 shrink-0" />

                <div>

                  <h3 className="text-[18px] font-bold text-[#111827]">
                    Operational Optimization
                  </h3>

                  <p className="mt-1 text-[14px] leading-[1.8] text-[#6b7280]">
                    Improve workflow efficiency and account
                    consistency across your Amazon operations.
                  </p>

                </div>

              </div>

            </div>

          </div>

          {/* Right */}
          <div className="order-1 lg:order-2">

            <div className="w-14 h-14 rounded-2xl bg-[#efe7ff] flex items-center justify-center">

              <Layers3 className="w-6 h-6 text-[#6d28d9]" />

            </div>

            <h2 className="mt-7 text-[28px] md:text-[42px] leading-[1.05] font-black tracking-[-0.05em] text-[#020617]">

              Account
              <br />

              <span className="bg-gradient-to-r from-[#8b5cf6] via-[#7c3aed] to-[#6d28d9] bg-clip-text text-transparent">
                Management
              </span>

            </h2>

            <p className="mt-6 text-[15px] md:text-[14px] leading-[1.9] text-[#6b7280] max-w-xl">
              Complete Amazon account management systems
              focused on long-term operational stability,
              growth consistency, and scaling.
            </p>

          </div>

        </div>

        {/* SECTION 3 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center py-14">

          {/* Left */}
          <div>

            <div className="w-14 h-14 rounded-2xl bg-[#efe7ff] flex items-center justify-center">

              <PenTool className="w-6 h-6 text-[#6d28d9]" />

            </div>

            <h2 className="mt-7 text-[28px] md:text-[42px] leading-[1.05] font-black tracking-[-0.05em] text-[#020617]">

              A+ Content
              <br />

              <span className="bg-gradient-to-r from-[#8b5cf6] via-[#7c3aed] to-[#6d28d9] bg-clip-text text-transparent">
                Creation
              </span>

            </h2>

            <p className="mt-6 text-[15px] md:text-[14px] leading-[1.9] text-[#6b7280] max-w-xl">
              Premium visual systems designed to improve
              conversion rates, brand trust, and customer
              engagement across Amazon listings.
            </p>

          </div>

          {/* Right */}
          <div className="bg-white border border-[#ece4ff] rounded-[32px] p-8">

            <div className="space-y-5">

              <div className="flex items-start gap-4">

                <ArrowRight className="w-5 h-5 text-[#6d28d9] mt-1 shrink-0" />

                <div>

                  <h3 className="text-[18px] font-bold text-[#111827]">
                    Premium Visual Design
                  </h3>

                  <p className="mt-1 text-[14px] leading-[1.8] text-[#6b7280]">
                    Create modern visual systems aligned
                    with your product positioning.
                  </p>

                </div>

              </div>

              <div className="flex items-start gap-4">

                <ArrowRight className="w-5 h-5 text-[#6d28d9] mt-1 shrink-0" />

                <div>

                  <h3 className="text-[18px] font-bold text-[#111827]">
                    Conversion-Focused Layouts
                  </h3>

                  <p className="mt-1 text-[14px] leading-[1.8] text-[#6b7280]">
                    Structure A+ content to improve trust,
                    readability, and buying intent.
                  </p>

                </div>

              </div>

              <div className="flex items-start gap-4">

                <ArrowRight className="w-5 h-5 text-[#6d28d9] mt-1 shrink-0" />

                <div>

                  <h3 className="text-[18px] font-bold text-[#111827]">
                    Product Storytelling
                  </h3>

                  <p className="mt-1 text-[14px] leading-[1.8] text-[#6b7280]">
                    Build stronger emotional connection
                    through strategic brand messaging.
                  </p>

                </div>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}
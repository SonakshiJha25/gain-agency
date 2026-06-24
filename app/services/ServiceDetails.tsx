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

              Sponsored Ads
              <br />

              <span className="bg-gradient-to-r from-[#8b5cf6] via-[#7c3aed] to-[#30a5b0] bg-clip-text text-transparent">
                (PPC)
              </span>

            </h2>

            <p className="mt-6 text-[15px] md:text-[14px] leading-[1.9] text-[#6b7280] max-w-xl">
              Campaigns that convert clicks into customers. End-to-end management of Sponsored Products, Sponsored Brands, and Sponsored Display campaigns.
            </p>

          </div>

          {/* Right */}
          <div className="bg-white border border-[#ece4ff] rounded-[32px] p-8">

            <div className="space-y-5">

              <div className="flex items-start gap-4">

                <ArrowRight className="w-5 h-5 text-[#30a5b0] mt-1 shrink-0" />

                <div>

                  <h3 className="text-[18px] font-bold text-[#111827]">
                    Sponsored Products
                  </h3>

                  <p className="mt-1 text-[14px] leading-[1.8] text-[#6b7280]">
                    Strategic bid management and keyword targeting designed to scale your core product sales profitably.
                  </p>

                </div>

              </div>

              <div className="flex items-start gap-4">

                <ArrowRight className="w-5 h-5 text-[#30a5b0] mt-1 shrink-0" />

                <div>

                  <h3 className="text-[18px] font-bold text-[#111827]">
                    Sponsored Brands
                  </h3>

                  <p className="mt-1 text-[14px] leading-[1.8] text-[#6b7280]">
                    Banner and video campaigns that build top-of-mind awareness and capture high-intent search traffic.
                  </p>

                </div>

              </div>

              <div className="flex items-start gap-4">

                <ArrowRight className="w-5 h-5 text-[#30a5b0] mt-1 shrink-0" />

                <div>

                  <h3 className="text-[18px] font-bold text-[#111827]">
                    Sponsored Display
                  </h3>

                  <p className="mt-1 text-[14px] leading-[1.8] text-[#6b7280]">
                    Target customers both on and off Amazon based on their shopping behaviors and interests.
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

                <ArrowRight className="w-5 h-5 text-[#30a5b0] mt-1 shrink-0" />

                <div>

                  <h3 className="text-[18px] font-bold text-[#111827]">
                    Keyword-Rich Copy
                  </h3>

                  <p className="mt-1 text-[14px] leading-[1.8] text-[#6b7280]">
                    Integrate high-performing search terms naturally into titles, bullet points, and descriptions.
                  </p>

                </div>

              </div>

              <div className="flex items-start gap-4">

                <ArrowRight className="w-5 h-5 text-[#30a5b0] mt-1 shrink-0" />

                <div>

                  <h3 className="text-[18px] font-bold text-[#111827]">
                    Search Rank Improvement
                  </h3>

                  <p className="mt-1 text-[14px] leading-[1.8] text-[#6b7280]">
                    Structure listings to align with Amazon's indexing algorithm for maximum organic reach.
                  </p>

                </div>

              </div>

              <div className="flex items-start gap-4">

                <ArrowRight className="w-5 h-5 text-[#30a5b0] mt-1 shrink-0" />

                <div>

                  <h3 className="text-[18px] font-bold text-[#111827]">
                    Conversion Optimization
                  </h3>

                  <p className="mt-1 text-[14px] leading-[1.8] text-[#6b7280]">
                    Optimize listing copy to eliminate friction, answer buyer questions, and improve purchase intent.
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

              Listing
              <br />

              <span className="bg-gradient-to-r from-[#8b5cf6] via-[#7c3aed] to-[#30a5b0] bg-clip-text text-transparent">
                Optimization
              </span>

            </h2>

            <p className="mt-6 text-[15px] md:text-[14px] leading-[1.9] text-[#6b7280] max-w-xl">
              Be found. Be chosen. Improve conversions with keyword-rich, high-performing product listings.
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

              Visual
              <br />

              <span className="bg-gradient-to-r from-[#8b5cf6] via-[#7c3aed] to-[#30a5b0] bg-clip-text text-transparent">
                Branding
              </span>

            </h2>

            <p className="mt-6 text-[15px] md:text-[14px] leading-[1.9] text-[#6b7280] max-w-xl">
              Stand out with a Brand Story. Design compelling visuals for A+ Content, Store page, Product images and Product videos that drive conversions.
            </p>

          </div>

          {/* Right */}
          <div className="bg-white border border-[#ece4ff] rounded-[32px] p-8">

            <div className="space-y-5">

              <div className="flex items-start gap-4">

                <ArrowRight className="w-5 h-5 text-[#30a5b0] mt-1 shrink-0" />

                <div>

                  <h3 className="text-[18px] font-bold text-[#111827]">
                    A+ Content Design
                  </h3>

                  <p className="mt-1 text-[14px] leading-[1.8] text-[#6b7280]">
                    Design premium branded layout systems and visual storytelling modules that boost conversion rates.
                  </p>

                </div>

              </div>

              <div className="flex items-start gap-4">

                <ArrowRight className="w-5 h-5 text-[#30a5b0] mt-1 shrink-0" />

                <div>

                  <h3 className="text-[18px] font-bold text-[#111827]">
                    Brand Store Pages
                  </h3>

                  <p className="mt-1 text-[14px] leading-[1.8] text-[#6b7280]">
                    Build an immersive multi-page brand store that showcases your entire product catalog.
                  </p>

                </div>

              </div>

              <div className="flex items-start gap-4">

                <ArrowRight className="w-5 h-5 text-[#30a5b0] mt-1 shrink-0" />

                <div>

                  <h3 className="text-[18px] font-bold text-[#111827]">
                    Product Images & Videos
                  </h3>

                  <p className="mt-1 text-[14px] leading-[1.8] text-[#6b7280]">
                    Create high-converting gallery images, infographics, and promotional video content.
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
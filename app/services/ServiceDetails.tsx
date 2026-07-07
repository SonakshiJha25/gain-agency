import Link from "next/link";
import {
  ArrowRight,
  BarChart3,
  Layers3,
  PenTool,
  Target,
  TrendingUp,
  Sparkles,
  Search,
  CheckCircle
} from "lucide-react";

export default function ServiceDetails() {
  return (

    // Detailed Services Section
    <section className="relative py-32 px-6 bg-gray-50 border-t border-gray-100 overflow-hidden">

      {/* Background Glow */}
      <div className="absolute top-[-120px] left-[-120px] w-[320px] h-[320px] bg-purple-200 rounded-full blur-3xl opacity-50" />

      {/* Main Container */}
      <div className="relative z-10 max-w-7xl mx-auto">

        {/* SECTION 1 */}
        <div id="ppc" className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center py-14 border-b border-[#ebe3ff] scroll-mt-24">

          {/* Left */}
          <div>

            <div className="w-16 h-16 rounded-2xl bg-white border border-gray-100 shadow-sm flex items-center justify-center">

              <BarChart3 className="w-6 h-6 text-[#4A3DD5]" />

            </div>

            <h2 className="mt-8 text-3xl md:text-4xl font-black tracking-tight leading-[1.1] text-[#152268]">

              Sponsored Ads
              <br />

              <span className="gain-gradient-text">
                (PPC)
              </span>

            </h2>

            <p className="mt-6 text-sm leading-relaxed text-slate-700 max-w-xl">
              Campaigns that convert clicks into customers. End-to-end management of Sponsored Products, Sponsored Brands, and Sponsored Display campaigns.
            </p>

            <Link
              href="/book-consultation"
              className="inline-flex items-center gap-2 mt-8 gain-gradient hover:from-[#3630a8] hover:to-[#0d9a9e] text-white px-8 py-3.5 rounded-full text-sm font-semibold transition-all duration-300 shadow-2xl shadow-[#7e22ce]/40 hover:-translate-y-0.5"
            >
              Get Started with PPC <ArrowRight className="w-4 h-4" />
            </Link>

          </div>

          {/* Right */}
          <div className="bg-white border border-gray-100 rounded-3xl p-8 md:p-10 shadow-2xl shadow-slate-200/60">

            <div className="space-y-5">

              <div className="group bg-gray-50/50 border border-gray-100 rounded-2xl p-6 hover:border-[#13B3B7]/30 hover:bg-white hover:-translate-y-1 hover:shadow-md transition-all duration-300 flex items-start gap-5">
                <div className="w-12 h-12 rounded-xl bg-white border border-gray-100 group-hover:bg-[#13B3B7] group-hover:text-white group-hover:border-[#13B3B7] flex items-center justify-center text-[#13B3B7] transition-all duration-300 shrink-0 shadow-sm">
                  <Target className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold tracking-tight text-[#152268] group-hover:text-[#0d9a9e] transition-colors duration-300">
                    Sponsored Products
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-700">
                    Maximize core catalog visibility with strategic keyword targeting, search volume analysis, and precision bid adjustments engineered to scale sales while maintaining healthy margin targets.
                  </p>
                </div>
              </div>

              <div className="group bg-gray-50/50 border border-gray-100 rounded-2xl p-6 hover:border-[#13B3B7]/30 hover:bg-white hover:-translate-y-1 hover:shadow-md transition-all duration-300 flex items-start gap-5">
                <div className="w-12 h-12 rounded-xl bg-white border border-gray-100 group-hover:bg-[#13B3B7] group-hover:text-white group-hover:border-[#13B3B7] flex items-center justify-center text-[#13B3B7] transition-all duration-300 shrink-0 shadow-sm">
                  <TrendingUp className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold tracking-tight text-[#152268] group-hover:text-[#0d9a9e] transition-colors duration-300">
                    Sponsored Brands
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-700">
                    Build immediate top-of-mind brand recognition using high-impact search banners and video placements. Capture competitive real estate and drive shopper traffic directly to your brand store.
                  </p>
                </div>
              </div>

              <div className="group bg-gray-50/50 border border-gray-100 rounded-2xl p-6 hover:border-[#13B3B7]/30 hover:bg-white hover:-translate-y-1 hover:shadow-md transition-all duration-300 flex items-start gap-5">
                <div className="w-12 h-12 rounded-xl bg-white border border-gray-100 group-hover:bg-[#13B3B7] group-hover:text-white group-hover:border-[#13B3B7] flex items-center justify-center text-[#13B3B7] transition-all duration-300 shrink-0 shadow-sm">
                  <Sparkles className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold tracking-tight text-[#152268] group-hover:text-[#0d9a9e] transition-colors duration-300">
                    Sponsored Display
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-700">
                    Re-engage warm shoppers and cross-sell related products on and off Amazon. Use category behavior mapping to target high-value buyers throughout their entire shopping journey.
                  </p>
                </div>
              </div>

            </div>

          </div>

        </div>

        {/* SECTION 2 */}
        <div id="listing-optimization" className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center py-14 border-b border-[#ebe3ff] scroll-mt-24">

          {/* Left */}
          <div className="order-2 lg:order-1 bg-white border border-gray-100 rounded-3xl p-8 md:p-10 shadow-2xl shadow-slate-200/60">

            <div className="space-y-5">

              <div className="group bg-gray-50/50 border border-gray-100 rounded-2xl p-6 hover:border-[#13B3B7]/30 hover:bg-white hover:-translate-y-1 hover:shadow-md transition-all duration-300 flex items-start gap-5">
                <div className="w-12 h-12 rounded-xl bg-white border border-gray-100 group-hover:bg-[#13B3B7] group-hover:text-white group-hover:border-[#13B3B7] flex items-center justify-center text-[#13B3B7] transition-all duration-300 shrink-0 shadow-sm">
                  <Search className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold tracking-tight text-[#152268] group-hover:text-[#0d9a9e] transition-colors duration-300">
                    Keyword-Rich Copy
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-700">
                    Deploy comprehensive search indexing strategies. We integrate high-performing search terms seamlessly into titles, bullet points, and descriptions for maximum organic discovery.
                  </p>
                </div>
              </div>

              <div className="group bg-gray-50/50 border border-gray-100 rounded-2xl p-6 hover:border-[#13B3B7]/30 hover:bg-white hover:-translate-y-1 hover:shadow-md transition-all duration-300 flex items-start gap-5">
                <div className="w-12 h-12 rounded-xl bg-white border border-gray-100 group-hover:bg-[#13B3B7] group-hover:text-white group-hover:border-[#13B3B7] flex items-center justify-center text-[#13B3B7] transition-all duration-300 shrink-0 shadow-sm">
                  <TrendingUp className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold tracking-tight text-[#152268] group-hover:text-[#0d9a9e] transition-colors duration-300">
                    Search Rank Improvement
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-700">
                    Align your listing architecture with Amazon's A9 search algorithm. Improve relevance scores, organic conversion history, and listing health to steadily climb search results.
                  </p>
                </div>
              </div>

              <div className="group bg-gray-50/50 border border-gray-100 rounded-2xl p-6 hover:border-[#13B3B7]/30 hover:bg-white hover:-translate-y-1 hover:shadow-md transition-all duration-300 flex items-start gap-5">
                <div className="w-12 h-12 rounded-xl bg-white border border-gray-100 group-hover:bg-[#13B3B7] group-hover:text-white group-hover:border-[#13B3B7] flex items-center justify-center text-[#13B3B7] transition-all duration-300 shrink-0 shadow-sm">
                  <CheckCircle className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold tracking-tight text-[#152268] group-hover:text-[#0d9a9e] transition-colors duration-300">
                    Conversion Optimization
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-700">
                    Eliminate purchasing friction. We structure listing copy to address customer pain points, convey product utility clearly, and present unique selling points that drive conversions.
                  </p>
                </div>
              </div>

            </div>

          </div>

          {/* Right */}
          <div className="order-1 lg:order-2">

            <div className="w-16 h-16 rounded-2xl bg-white border border-gray-100 shadow-sm flex items-center justify-center">

              <Layers3 className="w-6 h-6 text-[#4A3DD5]" />

            </div>

            <h2 className="mt-8 text-3xl md:text-4xl font-black tracking-tight leading-[1.1] text-[#152268]">

              Listing
              <br />

              <span className="gain-gradient-text">
                Optimization
              </span>

            </h2>

            <p className="mt-6 text-sm leading-relaxed text-slate-700 max-w-xl">
              Increase visibility and conversions with product listings optimized for search rankings and shopper engagement.
            </p>

            <Link
              href="/book-consultation"
              className="inline-flex items-center gap-2 mt-8 gain-gradient hover:from-[#3630a8] hover:to-[#0d9a9e] text-white px-8 py-3.5 rounded-full text-sm font-semibold transition-all duration-300 shadow-2xl shadow-[#7e22ce]/40 hover:-translate-y-0.5"
            >
              Optimize My Listings <ArrowRight className="w-4 h-4" />
            </Link>

          </div>

        </div>

        {/* SECTION 3 */}
        <div id="visual-branding" className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center py-14 scroll-mt-24">

          {/* Left */}
          <div>

            <div className="w-16 h-16 rounded-2xl bg-white border border-gray-100 shadow-sm flex items-center justify-center">

              <PenTool className="w-6 h-6 text-[#4A3DD5]" />

            </div>

            <h2 className="mt-8 text-3xl md:text-4xl font-black tracking-tight leading-[1.1] text-[#152268]">

              Visual
              <br />

              <span className="gain-gradient-text">
                Branding
              </span>

            </h2>

            <p className="mt-6 text-sm leading-relaxed text-slate-700 max-w-xl">
              Stand out with a Brand Story. Design compelling visuals for A+ Content, Store page, Product images and Product videos that drive conversions.
            </p>

            <Link
              href="/book-consultation"
              className="inline-flex items-center gap-2 mt-8 gain-gradient hover:from-[#3630a8] hover:to-[#0d9a9e] text-white px-8 py-3.5 rounded-full text-sm font-semibold transition-all duration-300 shadow-2xl shadow-[#7e22ce]/40 hover:-translate-y-0.5"
            >
              Elevate My Brand <ArrowRight className="w-4 h-4" />
            </Link>

          </div>

          {/* Right */}
          <div className="bg-white border border-gray-100 rounded-3xl p-8 md:p-10 shadow-2xl shadow-slate-200/60">

            <div className="space-y-5">

              <div className="group bg-gray-50/50 border border-gray-100 rounded-2xl p-6 hover:border-[#13B3B7]/30 hover:bg-white hover:-translate-y-1 hover:shadow-md transition-all duration-300 flex items-start gap-5">
                <div className="w-12 h-12 rounded-xl bg-white border border-gray-100 group-hover:bg-[#13B3B7] group-hover:text-white group-hover:border-[#13B3B7] flex items-center justify-center text-[#13B3B7] transition-all duration-300 shrink-0 shadow-sm">
                  <PenTool className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold tracking-tight text-[#152268] group-hover:text-[#0d9a9e] transition-colors duration-300">
                    A+ Content Design
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-700">
                    Design premium branded layout modules, custom visual graphics, and comparison charts that address customer questions and boost detail page conversions.
                  </p>
                </div>
              </div>

              <div className="group bg-gray-50/50 border border-gray-100 rounded-2xl p-6 hover:border-[#13B3B7]/30 hover:bg-white hover:-translate-y-1 hover:shadow-md transition-all duration-300 flex items-start gap-5">
                <div className="w-12 h-12 rounded-xl bg-white border border-gray-100 group-hover:bg-[#13B3B7] group-hover:text-white group-hover:border-[#13B3B7] flex items-center justify-center text-[#13B3B7] transition-all duration-300 shrink-0 shadow-sm">
                  <Layers3 className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold tracking-tight text-[#152268] group-hover:text-[#0d9a9e] transition-colors duration-300">
                    Brand Store Pages
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-700">
                    Build a custom storefront to display your complete product line. Structure catalog navigation to promote cross-selling and establish a unique brand presence on Amazon.
                  </p>
                </div>
              </div>

              <div className="group bg-gray-50/50 border border-gray-100 rounded-2xl p-6 hover:border-[#13B3B7]/30 hover:bg-white hover:-translate-y-1 hover:shadow-md transition-all duration-300 flex items-start gap-5">
                <div className="w-12 h-12 rounded-xl bg-white border border-gray-100 group-hover:bg-[#13B3B7] group-hover:text-white group-hover:border-[#13B3B7] flex items-center justify-center text-[#13B3B7] transition-all duration-300 shrink-0 shadow-sm">
                  <Sparkles className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold tracking-tight text-[#152268] group-hover:text-[#0d9a9e] transition-colors duration-300">
                    Product Images & Videos
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-700">
                    Create infographical product galleries and video creatives that capture shopper interest. Convey core product value propositions clearly in both mobile and desktop formats.
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

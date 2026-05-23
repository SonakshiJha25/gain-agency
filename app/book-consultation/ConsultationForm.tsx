"use client";

export default function ConsultationForm() {
  return (

    // Form Section
    <section id="form" className="relative py-24 px-6 bg-[#f7f4ff] overflow-hidden">

      {/* Background Glow */}
      <div className="absolute top-[-120px] right-[-120px] w-[320px] h-[320px] bg-purple-200 rounded-full blur-3xl opacity-50" />

      {/* Main Container */}
      <div className="relative z-10 max-w-7xl mx-auto">

        {/* Form Wrapper */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start bg-white border border-[#ece4ff] rounded-[32px] p-6 md:p-10 shadow-xl shadow-purple-100/30">

          {/* Left Content */}
          <div>

            {/* Badge */}
            <p className="text-[#6d28d9] text-[11px] font-bold tracking-[0.28em] uppercase mb-4">
              Start Your Growth Journey
            </p>

            {/* Heading */}
            <h2 className="text-[30px] md:text-[50px] leading-[0.96] font-black tracking-[-0.06em] text-[#020617]">
              Ready To Scale
              <br />
              <span className="bg-gradient-to-r from-[#8b5cf6] via-[#7c3aed] to-[#6d28d9] bg-clip-text text-transparent">
                Smarter?
              </span>
            </h2>

            {/* Description */}
            <p className="mt-5 text-[15px] md:text-[14px] leading-[1.9] text-[#6b7280] max-w-md">
              Fill out the form and our team will reach out with the next steps, recommendations, and a personalized growth direction for your brand.
            </p>

            {/* Mini Points */}
            <div className="space-y-5 mt-8">

              {/* Point */}
              <div className="flex items-start gap-4">

                <div className="w-3 h-3 rounded-full bg-[#6d28d9] mt-2" />

                <div>

                  <h3 className="text-[16px] font-bold text-[#111827]">
                    Personalized Strategy
                  </h3>

                  <p className="mt-1 text-[13px] leading-[1.7] text-[#6b7280]">
                    Tailored recommendations based on your brand goals and performance.
                  </p>

                </div>

              </div>

              {/* Point */}
              <div className="flex items-start gap-4">

                <div className="w-3 h-3 rounded-full bg-[#6d28d9] mt-2" />

                <div>

                  <h3 className="text-[16px] font-bold text-[#111827]">
                    Transparent Communication
                  </h3>

                  <p className="mt-1 text-[13px] leading-[1.7] text-[#6b7280]">
                    Clear process, honest insights, and actionable recommendations.
                  </p>

                </div>

              </div>

              {/* Point */}
              <div className="flex items-start gap-4">

                <div className="w-3 h-3 rounded-full bg-[#6d28d9] mt-2" />

                <div>

                  <h3 className="text-[16px] font-bold text-[#111827]">
                    Fast Response Time
                  </h3>

                  <p className="mt-1 text-[13px] leading-[1.7] text-[#6b7280]">
                    Most consultation requests receive a response within 24–48 hours.
                  </p>

                </div>

              </div>

            </div>

          </div>

          {/* Right Form */}
          <form className="grid grid-cols-1 gap-4" onSubmit={(e) => e.preventDefault()}>

            {/* Full Name */}
            <div>

              <label className="block text-[13px] font-semibold text-[#111827] mb-1.5">
                Full Name
              </label>

              <input
                type="text"
                placeholder="Enter your full name"
                className="w-full h-11 px-4 rounded-xl border border-[#e5d9ff] bg-[#faf7ff] text-[14px] outline-none focus:border-[#6d28d9] transition-all duration-300"
              />

            </div>

            {/* Email */}
            <div>

              <label className="block text-[13px] font-semibold text-[#111827] mb-1.5">
                Email Address
              </label>

              <input
                type="email"
                placeholder="Enter your email address"
                className="w-full h-11 px-4 rounded-xl border border-[#e5d9ff] bg-[#faf7ff] text-[14px] outline-none focus:border-[#6d28d9] transition-all duration-300"
              />

            </div>

            {/* Phone */}
            <div>

              <label className="block text-[13px] font-semibold text-[#111827] mb-1.5">
                Phone Number
              </label>

              <input
                type="text"
                placeholder="Enter your phone number"
                className="w-full h-11 px-4 rounded-xl border border-[#e5d9ff] bg-[#faf7ff] text-[14px] outline-none focus:border-[#6d28d9] transition-all duration-300"
              />

            </div>

            {/* Store */}
            <div>

              <label className="block text-[13px] font-semibold text-[#111827] mb-1.5">
                Amazon Store / Brand
              </label>

              <input
                type="text"
                placeholder="Enter your brand or store name"
                className="w-full h-11 px-4 rounded-xl border border-[#e5d9ff] bg-[#faf7ff] text-[14px] outline-none focus:border-[#6d28d9] transition-all duration-300"
              />

            </div>

            {/* Goals */}
            <div>

              <label className="block text-[13px] font-semibold text-[#111827] mb-1.5">
                Goals & Challenges
              </label>

              <textarea
                placeholder="Tell us about your current challenges and growth goals..."
                className="w-full h-28 p-4 rounded-xl border border-[#e5d9ff] bg-[#faf7ff] text-[14px] outline-none resize-none focus:border-[#6d28d9] transition-all duration-300"
              />

            </div>

            {/* Button */}
            <div className="flex justify-center mt-4">
              <button
                type="submit"
                className="bg-[#6d28d9] hover:bg-[#5b21b6] text-white px-12 py-4.5 rounded-full text-[16px] font-semibold shadow-lg shadow-purple-300/30 transition-all duration-300 hover:-translate-y-0.5 flex items-center gap-2"
              >
                Submit Consultation Request
              </button>
            </div>

            {/* Bottom Note */}
            <p className="text-[12px] text-[#6b7280] text-center leading-[1.8]">
              We usually respond within 24–48 hours.
            </p>

          </form>

        </div>

      </div>

    </section>
  );
}
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

const APPS_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbwrK6f8NSm5EwTBpjFXCXCZZbLRZ8jZe2iOHhQjzrNrF4ZAkQiIzwOUbKjjLr_SgIQS/exec";

export default function ConsultationForm() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    store: "",
    goals: ""
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });

  };

  const handleSubmit = async (
    e: React.FormEvent
  ) => {

    e.preventDefault();

    setLoading(true);

    try {

      await fetch(APPS_SCRIPT_URL, {
        method: "POST",
        body: JSON.stringify({
          ...formData,
          formSource: "Consultation Form"
        }),
      });

      setFormData({
        name: "",
        email: "",
        phone: "",
        store: "",
        goals: ""
      });

      router.push('/thank-you');

    } catch (error) {

      console.log(error);

    }

    setLoading(false);

  };

  return (

    <section
      id="form"
      className="relative py-12 md:py-24 px-6 bg-gray-50 overflow-hidden"
    >

      {/* Main Container */}
      <div className="relative z-10 max-w-7xl mx-auto">

        {/* Form Wrapper */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start bg-white border border-gray-100 rounded-3xl p-8 md:p-12 shadow-2xl shadow-slate-200/60">

          {/* Left Content */}
          <div>

            <p className="text-xs font-bold tracking-[0.2em] uppercase text-[#13B3B7] mb-6">
              Start Your Growth Journey
            </p>

            <h2 className="text-3xl md:text-4xl font-black tracking-tight leading-[1.1] text-[#152268]">
              Ready To Scale
              <br />

              <span className="gain-gradient-text">
                Smarter?
              </span>

            </h2>

            <p className="mt-6 text-base text-slate-700 leading-relaxed max-w-md">
              Fill out the form and our team will reach out with the next steps,
              recommendations, and a personalized growth direction for your brand.
            </p>

            {/* Mini Points */}
            <div className="space-y-5 mt-8">

              <div className="flex items-start gap-4">

                <div className="w-3 h-3 rounded-full bg-[#13B3B7] mt-1.5" />

                <div>

                  <h3 className="text-base font-bold text-[#152268]">
                    Personalized Strategy
                  </h3>

                  <p className="mt-1 text-sm leading-relaxed text-slate-700">
                    Tailored recommendations based on your brand goals and performance.
                  </p>

                </div>

              </div>

              <div className="flex items-start gap-4">

                <div className="w-3 h-3 rounded-full bg-[#13B3B7] mt-1.5" />

                <div>

                  <h3 className="text-base font-bold text-[#152268]">
                    Transparent Communication
                  </h3>

                  <p className="mt-1 text-sm leading-relaxed text-slate-700">
                    Clear process, honest insights, and actionable recommendations.
                  </p>

                </div>

              </div>

              <div className="flex items-start gap-4">

                <div className="w-3 h-3 rounded-full bg-[#13B3B7] mt-1.5" />

                <div>

                  <h3 className="text-base font-bold text-[#152268]">
                    Fast Response Time
                  </h3>

                  <p className="mt-1 text-sm leading-relaxed text-slate-700">
                    Most consultation requests receive a response within 24–48 hours.
                  </p>

                </div>

              </div>

            </div>

          </div>

          {/* Right Form */}
          <form
            className="grid grid-cols-1 gap-4"
            onSubmit={handleSubmit}
          >

            {/* Full Name */}
            <div>

              <label className="block text-sm font-semibold text-[#152268] mb-2">
                Full Name
              </label>

              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Enter your full name"
                className="w-full h-12 px-4 rounded-xl border border-gray-200 bg-gray-50 text-[#152268] placeholder:text-slate-600 text-sm outline-none focus:border-[#13B3B7] focus:ring-1 focus:ring-[#13B3B7] transition-all duration-300"
              />

            </div>

            {/* Email */}
            <div>

              <label className="block text-sm font-semibold text-[#152268] mb-2">
                Email Address
              </label>

              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="Enter your email address"
                className="w-full h-12 px-4 rounded-xl border border-gray-200 bg-gray-50 text-[#152268] placeholder:text-slate-600 text-sm outline-none focus:border-[#13B3B7] focus:ring-1 focus:ring-[#13B3B7] transition-all duration-300"
              />

            </div>

            {/* Phone */}
            <div>

              <label className="block text-sm font-semibold text-[#152268] mb-2">
                Phone Number
              </label>

              <input
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                placeholder="Enter your phone number"
                className="w-full h-12 px-4 rounded-xl border border-gray-200 bg-gray-50 text-[#152268] placeholder:text-slate-600 text-sm outline-none focus:border-[#13B3B7] focus:ring-1 focus:ring-[#13B3B7] transition-all duration-300"
              />

            </div>

            {/* Store */}
            <div>

              <label className="block text-sm font-semibold text-[#152268] mb-2">
                Amazon Store / Brand (Optional)
              </label>

              <input
                type="text"
                name="store"
                value={formData.store}
                onChange={handleChange}
                placeholder="Enter your brand or store name"
                className="w-full h-12 px-4 rounded-xl border border-gray-200 bg-gray-50 text-[#152268] placeholder:text-slate-600 text-sm outline-none focus:border-[#13B3B7] focus:ring-1 focus:ring-[#13B3B7] transition-all duration-300"
              />

            </div>

            {/* Goals */}
            <div>

              <label className="block text-sm font-semibold text-[#152268] mb-2">
                Goals & Challenges
              </label>

              <textarea
                name="goals"
                value={formData.goals}
                onChange={handleChange}
                required
                placeholder="Tell us about your current challenges and growth goals..."
                className="w-full h-32 p-4 rounded-xl border border-gray-200 bg-gray-50 text-[#152268] placeholder:text-slate-600 text-sm outline-none resize-none focus:border-[#13B3B7] focus:ring-1 focus:ring-[#13B3B7] transition-all duration-300"
              />

            </div>

            {/* Button */}
            <div className="flex justify-center mt-4">

              <button
                type="submit"
                disabled={loading}
                className="w-full gain-gradient hover:from-[#3630a8] hover:to-[#0d9a9e] text-white px-8 py-4 rounded-full text-sm font-bold uppercase tracking-[0.1em] shadow-[0_4px_14px_rgba(0,0,0,0.08)] transition-all duration-300 hover:-translate-y-0.5 flex items-center justify-center gap-2 disabled:opacity-70"
              >

                {
                  loading
                    ? "Sending..."
                    : "Submit Consultation Request"
                }

              </button>

            </div>

            {/* Bottom Note */}
            <p className="text-xs text-slate-700 text-center leading-relaxed">
              We usually respond within 24–48 hours.
            </p>

          </form>

        </div>

      </div>



    </section>
  );
}
"use client";

import { useState } from "react";
import { ArrowRight, CheckCircle } from "lucide-react";
import { useRouter } from "next/navigation";

const APPS_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbwrK6f8NSm5EwTBpjFXCXCZZbLRZ8jZe2iOHhQjzrNrF4ZAkQiIzwOUbKjjLr_SgIQS/exec";

export default function ContactForm() {
  const router = useRouter();
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    store: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const validate = () => {
    if (!form.name || !form.email || !form.phone) {
      setError("Please fill all required fields");
      return false;
    }

    if (!form.email.includes("@")) {
      setError("Enter a valid email");
      return false;
    }

    setError("");
    return true;
  };

  const handleSubmit = async () => {
    if (!validate()) return;

    setLoading(true);

    try {
      await fetch(APPS_SCRIPT_URL, {
        method: "POST",
        body: JSON.stringify({
          ...form,
          formSource: "Contact Form"
        }),
      });

      setForm({
        name: "",
        email: "",
        phone: "",
        store: "",
        message: "",
      });

      router.push('/thank-you');
    } catch (err) {
      setError("Something went wrong. Try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white border border-gray-100 rounded-3xl p-8 md:p-10 shadow-2xl shadow-slate-200/60">

      <h2 className="text-xl font-black tracking-tight text-[#152268] mb-8">
        Get Your Free Growth Plan
      </h2>

      <div className="space-y-4">

        <input
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="Full Name *"
          className="w-full h-12 px-4 rounded-xl border border-gray-200 bg-gray-50 text-[#152268] text-sm outline-none focus:border-[#13B3B7] focus:ring-1 focus:ring-[#13B3B7] placeholder:text-slate-600 transition-all duration-300"
        />

        <input
          name="email"
          value={form.email}
          onChange={handleChange}
          placeholder="Email Address *"
          className="w-full h-12 px-4 rounded-xl border border-gray-200 bg-gray-50 text-[#152268] text-sm outline-none focus:border-[#13B3B7] focus:ring-1 focus:ring-[#13B3B7] placeholder:text-slate-600 transition-all duration-300"
        />

        <input
          name="phone"
          value={form.phone}
          onChange={handleChange}
          placeholder="Phone Number *"
          className="w-full h-12 px-4 rounded-xl border border-gray-200 bg-gray-50 text-[#152268] text-sm outline-none focus:border-[#13B3B7] focus:ring-1 focus:ring-[#13B3B7] placeholder:text-slate-600 transition-all duration-300"
        />

        <input
          name="store"
          value={form.store}
          onChange={handleChange}
          placeholder="Amazon Store Link (Optional)"
          className="w-full h-12 px-4 rounded-xl border border-gray-200 bg-gray-50 text-[#152268] text-sm outline-none focus:border-[#13B3B7] focus:ring-1 focus:ring-[#13B3B7] placeholder:text-slate-600 transition-all duration-300"
        />

        <textarea
          name="message"
          value={form.message}
          onChange={handleChange}
          placeholder="Tell us about your goals..."
          className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 text-[#152268] text-sm outline-none resize-none focus:border-[#13B3B7] focus:ring-1 focus:ring-[#13B3B7] placeholder:text-slate-600 transition-all duration-300 min-h-[120px]"
        />

      </div>

      {/* error */}
      {error && (
        <p className="mt-4 text-sm text-red-500">
          {error}
        </p>
      )}

      {/* button */}
      <div className="flex justify-center mt-6">
        <button
          onClick={handleSubmit}
          disabled={loading}
          className="gain-gradient hover:from-[#3630a8] hover:to-[#0d9a9e] text-white px-10 py-4 rounded-full text-sm font-bold uppercase tracking-[0.1em] shadow-[0_4px_14px_rgba(0,0,0,0.08)] transition-all duration-300 hover:-translate-y-0.5 flex items-center justify-center gap-2 disabled:opacity-70 disabled:pointer-events-none"
        >
          {loading ? "Submitting..." : "Submit Request"}
          {!loading && <ArrowRight className="w-4 h-4" />}
        </button>
      </div>

      <p className="text-xs text-slate-700 mt-6 text-center leading-relaxed">
        We respond within 24–48 hours with a tailored strategy.
      </p>

    </div>
  );
}
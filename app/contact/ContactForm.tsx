"use client";

import { useState } from "react";
import { ArrowRight, CheckCircle } from "lucide-react";

export default function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    store: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
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
      // simulate API call
      await new Promise((res) => setTimeout(res, 1200));

      setSuccess(true);
      setForm({
        name: "",
        email: "",
        phone: "",
        store: "",
        message: "",
      });
    } catch (err) {
      setError("Something went wrong. Try again.");
    } finally {
      setLoading(false);
    }
  };

  if (success) {
    return (
      <div className="bg-[#f0fdf4] border border-[#bbf7d0] rounded-[32px] p-8 text-center shadow-sm">

        <CheckCircle className="w-10 h-10 text-[#16a34a] mx-auto" />

        <h2 className="mt-4 text-lg font-bold text-[#15803d]">
          Request Submitted Successfully
        </h2>

        <p className="mt-2 text-[14px] text-[#166534]">
          We’ll review your store and get back within 24–48 hours.
        </p>

      </div>
    );
  }

  return (
    <div className="bg-[#faf7ff] border border-[#ece4ff] rounded-[32px] p-6 md:p-8 shadow-sm">

      <h2 className="text-[20px] font-bold text-[#020617] mb-6">
        Get Your Free Growth Plan
      </h2>

      <div className="space-y-4">

        <input
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="Full Name *"
          className="w-full h-11 px-4 rounded-xl border border-[#e5d9ff] bg-white text-[14px] outline-none focus:border-[#6d28d9] placeholder:text-[#6b7280]"
        />

        <input
          name="email"
          value={form.email}
          onChange={handleChange}
          placeholder="Email Address *"
          className="w-full h-11 px-4 rounded-xl border border-[#e5d9ff] bg-white text-[14px] outline-none focus:border-[#6d28d9] placeholder:text-[#6b7280]"
        />

        <input
          name="phone"
          value={form.phone}
          onChange={handleChange}
          placeholder="Phone Number *"
          className="w-full h-11 px-4 rounded-xl border border-[#e5d9ff] bg-white text-[14px] outline-none focus:border-[#6d28d9] placeholder:text-[#6b7280]"
        />

        <input
          name="store"
          value={form.store}
          onChange={handleChange}
          placeholder="Amazon Store Link"
          className="w-full h-11 px-4 rounded-xl border border-[#e5d9ff] bg-white text-[14px] outline-none focus:border-[#6d28d9] placeholder:text-[#6b7280]"
        />

        <textarea
          name="message"
          value={form.message}
          onChange={handleChange}
          placeholder="Tell us about your goals..."
          className="w-full px-4 py-3 rounded-xl border border-[#e5d9ff] bg-white text-[14px] outline-none focus:border-[#6d28d9] placeholder:text-[#6b7280] min-h-[120px]"
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
          className="bg-[#6d28d9] hover:bg-[#5b21b6] text-white px-12 py-4.5 rounded-full text-[16px] font-semibold shadow-lg shadow-purple-300/30 transition-all duration-300 hover:-translate-y-0.5 flex items-center gap-2 disabled:opacity-60 disabled:pointer-events-none"
        >
          {loading ? "Submitting..." : "Submit Request"}
          {!loading && <ArrowRight className="w-5 h-5" />}
        </button>
      </div>

      <p className="text-xs text-[#6b7280] mt-4 text-center">
        We respond within 24–48 hours with a tailored strategy.
      </p>

    </div>
  );
}
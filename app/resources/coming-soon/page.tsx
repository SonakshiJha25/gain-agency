"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, BookOpen, Bell, CheckCircle2 } from "lucide-react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export default function ComingSoonPage() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubmitted(true);
      setEmail("");
    }
  };

  return (
    <main className="overflow-hidden bg-[#f4f3ff] min-h-screen flex flex-col justify-between">
      {/* Navbar */}
      <Navbar />

      {/* Main content area */}
      <div className="relative flex-grow flex items-center justify-center py-28 md:py-36 px-6">
        {/* Soft decorative background glows */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-purple-200/35 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute bottom-10 right-1/4 w-[350px] h-[350px] bg-teal-200/25 rounded-full blur-[100px] pointer-events-none" />

        <div className="relative z-10 max-w-xl w-full text-center">
          
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-[#eceaff] border border-[#e2dfff] rounded-full px-4 py-1.5 mb-10 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-[#4A3DD5] animate-pulse" />
            <span className="text-[10px] uppercase tracking-[0.12em] font-black text-[#4A3DD5]">
              Resource Dropping Soon
            </span>
          </div>

          {/* Book Icon Illustration */}
          <div className="relative w-28 h-28 mx-auto mb-10 flex items-center justify-center">
            {/* Outer circles */}
            <div className="absolute inset-0 rounded-full border border-dashed border-[#c4bfff]/60 animate-[spin_40s_linear_infinite]" />
            <div className="absolute inset-2 rounded-full bg-white border border-[#e2dfff] shadow-md flex items-center justify-center" />
            {/* Icon */}
            <div className="relative z-10 w-12 h-12 rounded-xl bg-gradient-to-br from-[#4A3DD5] to-[#7c3aed] flex items-center justify-center shadow-lg shadow-purple-200">
              <BookOpen className="w-6 h-6 text-white" />
            </div>
          </div>

          {/* Heading */}
          <h1 className="text-3xl md:text-4xl font-black tracking-tight leading-[1.1] text-[#152268]">
            The Amazon PPC &<br />
            <span className="gain-gradient-text">Scaling Playbook</span>
          </h1>

          {/* Subheading */}
          <p className="mt-8 text-slate-700 text-sm md:text-base leading-relaxed max-w-md mx-auto">
            We are putting the finishing touches on our exclusive systems playbook. Join the waitlist to receive it directly in your inbox the second it goes live.
          </p>

          {/* Notify Form */}
          <div className="mt-10 bg-white border border-[#e2dfff] rounded-3xl p-6 md:p-10 shadow-xl shadow-purple-900/5">
            {!submitted ? (
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  required
                  placeholder="Enter your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-grow h-12 px-4 rounded-xl border border-gray-200 bg-gray-50 text-[#152268] placeholder:text-slate-600 text-sm outline-none focus:border-[#4A3DD5] focus:ring-1 focus:ring-[#4A3DD5] transition-all duration-300"
                />
                <button
                  type="submit"
                  className="h-12 px-6 rounded-xl gain-gradient hover:from-[#3630a8] hover:to-[#0d9a9e] text-white text-sm font-semibold tracking-wide shadow-md hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2 hover:-translate-y-0.5"
                >
                  <Bell className="w-4 h-4" />
                  Notify Me
                </button>
              </form>
            ) : (
              <div className="flex flex-col items-center py-4 text-center">
                <div className="w-12 h-12 rounded-full bg-teal-50 border border-teal-200 flex items-center justify-center mb-3">
                  <CheckCircle2 className="w-6 h-6 text-teal-500" />
                </div>
                <h4 className="text-base font-bold text-[#152268]">You're on the list!</h4>
                <p className="text-xs text-slate-600 mt-1">We'll email you the playbook PDF as soon as it's released.</p>
              </div>
            )}
          </div>

          {/* Back button */}
          <div className="mt-12">
            <Link
              href="/resources"
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#4A3DD5] hover:text-[#3630a8] transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Resources
            </Link>
          </div>

        </div>
      </div>

      {/* Footer */}
      <Footer />
    </main>
  );
}

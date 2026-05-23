"use client";

import Link from "next/link";

import { CalendarDays, ChevronDown } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 px-6 md:px-12 py-6">
      <div className="max-w-7xl mx-auto flex items-center justify-between bg-white/70 backdrop-blur-md border border-[#ece4ff] rounded-2xl px-6 py-4 shadow-lg shadow-purple-100/20">
        {/* Logo */}
        <Link href="/">
          <h1 className="text-[36px] font-black tracking-[-0.08em] text-[#6d28d9]">
            GAIN
          </h1>
        </Link>

        {/* Nav Links */}
        <div className="hidden md:flex items-center gap-12">
          {/* Home */}
          <Link
            href="/"
            className="text-[15px] font-medium text-[#111827] hover:text-[#6d28d9] transition-colors duration-300"
          >
            Home
          </Link>
          {/* Services Dropdown */}
          <div className="relative group">
            {/* Trigger */}
            <Link
              href="/services"
              className="flex items-center gap-1 text-[15px] font-medium text-[#111827] hover:text-[#6d28d9] transition-colors duration-300"
            >
              Services
              <ChevronDown className="w-4 h-4 mt-[1px] transition-transform duration-300 group-hover:rotate-180" />
            </Link>

            {/* Dropdown */}
            <div
              className="
                absolute
                top-[140%]
                left-0
                w-[320px]
                opacity-0
                invisible
                translate-y-3
                group-hover:opacity-100
                group-hover:visible
                group-hover:translate-y-0
                transition-all
                duration-300
                bg-white
                border
                border-[#ece4ff]
                rounded-3xl
                shadow-2xl
                shadow-purple-100/40
                p-4
              "
            >
              {/* Service Item */}
              <Link
                href="/services"
                className="block p-4 rounded-2xl hover:bg-[#f7f4ff] transition-all duration-300"
              >
                <h3 className="text-[15px] font-semibold text-[#111827]">
                  Ad Optimization
                </h3>

                <p className="text-[13px] text-[#6b7280] mt-1 leading-[1.7]">
                  Performance-focused Amazon PPC campaigns designed to scale
                  profitably.
                </p>
              </Link>

              {/* Service Item */}
              <Link
                href="/services"
                className="block p-4 rounded-2xl hover:bg-[#f7f4ff] transition-all duration-300"
              >
                <h3 className="text-[15px] font-semibold text-[#111827]">
                  Account Management
                </h3>

                <p className="text-[13px] text-[#6b7280] mt-1 leading-[1.7]">
                  Complete Amazon account growth, monitoring, and optimization.
                </p>
              </Link>

              {/* Service Item */}
              <Link
                href="/services"
                className="block p-4 rounded-2xl hover:bg-[#f7f4ff] transition-all duration-300"
              >
                <h3 className="text-[15px] font-semibold text-[#111827]">
                  A+ Content Creation
                </h3>

                <p className="text-[13px] text-[#6b7280] mt-1 leading-[1.7]">
                  Premium branded visuals and conversion-focused content design.
                </p>
              </Link>
            </div>
          </div>

          {/* Case Studies */}
          <Link
            href="/case-studies"
            className="text-[15px] font-medium text-[#111827] hover:text-[#6d28d9] transition-colors duration-300"
          >
            Case Studies
          </Link>

          {/* About */}
          <Link
            href="/about"
            className="text-[15px] font-medium text-[#111827] hover:text-[#6d28d9] transition-colors duration-300"
          >
            About Us
          </Link>

          {/* Resources Dropdown */}
          {/* Resources */}
          <Link
            href="/resources"
            className="flex items-center gap-1 text-[15px] font-medium text-[#111827] hover:text-[#6d28d9] transition-colors duration-300"
          >
            Resources
          </Link>
          {/* Contact */}
          <Link
            href="/contact"
            className="text-[15px] font-medium text-[#111827] hover:text-[#6d28d9] transition-colors duration-300"
          >
            Contact
          </Link>
        </div>

        {/* CTA Button */}
        <Link
          href="/book-consultation"
          className="
            flex
            items-center
            gap-2
            bg-[#6d28d9]
            hover:bg-[#5b21b6]
            text-white
            px-5
            py-3
            rounded-xl
            text-[14px]
            font-medium
            shadow-lg
            shadow-purple-300/30
            transition-all
            duration-300
            hover:-translate-y-0.5
          "
        >
          <CalendarDays className="w-4 h-4" />

          <span>Book Free Consultation</span>
        </Link>
      </div>
    </nav>
  );
}

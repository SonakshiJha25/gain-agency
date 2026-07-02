"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { CalendarDays, ChevronDown, Menu, X } from "lucide-react";

export default function Navbar() {
  const pathname = usePathname();
  const [mobileMenu, setMobileMenu] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/95 backdrop-blur-md border-b border-[#e2dfff] shadow-sm">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 md:px-12 py-4">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 md:gap-2.5 group">
          <img
            src="/logos/logo.png"
            alt="GAIN Logo"
            className="h-9 md:h-10 w-auto object-contain"
          />
          <span className="text-xl md:text-2xl font-black tracking-tight text-[#152268] select-none">
            GAIN
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-10">

          <Link
            href="/"
            className={`text-[15px] font-semibold transition-colors duration-300 relative py-1 ${
              pathname === "/"
                ? "text-[#13B3B7] after:bg-[#13B3B7]"
                : "text-[#152268] hover:text-[#4A3DD5]"
            }`}
          >
            Home
          </Link>

          {/* Services Dropdown */}
          <div className="relative group">
            <Link
              href="/services"
              className={`flex items-center gap-1 text-[15px] font-semibold transition-colors duration-300 relative py-1 ${
                pathname.startsWith("/services")
                  ? "text-[#13B3B7] after:bg-[#13B3B7]"
                  : "text-[#152268] hover:text-[#4A3DD5]"
              }`}
            >
              Services
              <ChevronDown className="w-4 h-4 mt-[1px] transition-transform duration-300 group-hover:rotate-180" />
            </Link>

            <div className="absolute top-[140%] left-0 w-[220px] opacity-0 invisible translate-y-3 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-300 bg-white border border-[#e2dfff] rounded-2xl shadow-2xl shadow-purple-100/40 p-2">
              <Link href="/services#ppc" className="block px-4 py-3 rounded-xl hover:bg-[#f4f3ff] hover:text-[#4A3DD5] text-[#152268] text-[14px] font-bold transition-all duration-300">
                Sponsored Ads (PPC)
              </Link>
              <Link href="/services#listing" className="block px-4 py-3 rounded-xl hover:bg-[#f4f3ff] hover:text-[#4A3DD5] text-[#152268] text-[14px] font-bold transition-all duration-300">
                Listing Optimization
              </Link>
              <Link href="/services#branding" className="block px-4 py-3 rounded-xl hover:bg-[#f4f3ff] hover:text-[#4A3DD5] text-[#152268] text-[14px] font-bold transition-all duration-300">
                Visual Branding
              </Link>
            </div>
          </div>

          <Link
            href="/about"
            className={`text-[15px] font-semibold transition-colors duration-300 relative py-1 ${
              pathname.startsWith("/about")
                ? "text-[#13B3B7] after:bg-[#13B3B7]"
                : "text-[#152268] hover:text-[#4A3DD5]"
            }`}
          >
            About Us
          </Link>

          <Link
            href="/resources"
            className={`text-[15px] font-semibold transition-colors duration-300 relative py-1 ${
              pathname.startsWith("/resources")
                ? "text-[#13B3B7] after:bg-[#13B3B7]"
                : "text-[#152268] hover:text-[#4A3DD5]"
            }`}
          >
            Resources
          </Link>

          <Link
            href="/contact"
            className={`text-[15px] font-semibold transition-colors duration-300 relative py-1 ${
              pathname.startsWith("/contact")
                ? "text-[#13B3B7] after:bg-[#13B3B7]"
                : "text-[#152268] hover:text-[#4A3DD5]"
            }`}
          >
            Contact
          </Link>

        </div>

        {/* Right Side */}
        <div className="flex items-center gap-3">
          {/* Desktop CTA */}
          <Link
            href="/book-consultation"
            className="hidden md:flex items-center gap-2 gain-gradient hover:from-[#3630a8] hover:to-[#0d9a9e] text-white px-6 py-2.5 rounded-full text-sm font-semibold shadow-[0_4px_14px_rgba(0,0,0,0.08)] hover:shadow-[0_6px_20px_rgba(0,0,0,0.12)] transition-all duration-300 hover:-translate-y-0.5"
          >
            <CalendarDays className="w-4 h-4" />
            <span>Book a Strategy Call</span>
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenu(!mobileMenu)}
            className="md:hidden text-[#152268]"
          >
            {mobileMenu ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
          </button>
        </div>

      </div>

      {/* Mobile Menu */}
      {mobileMenu && (
        <div className="md:hidden mt-4 bg-white border border-[#e2dfff] rounded-3xl p-6 shadow-2xl shadow-[#7e22ce]/20 shadow-purple-100/30">
          <div className="flex flex-col gap-5">
            <Link href="/" onClick={() => setMobileMenu(false)} className={`text-[15px] font-semibold ${pathname === "/" ? "text-[#13B3B7]" : "text-[#152268]"}`}>
              Home
            </Link>
            <Link href="/services" onClick={() => setMobileMenu(false)} className={`text-[15px] font-semibold ${pathname.startsWith("/services") ? "text-[#13B3B7]" : "text-[#152268]"}`}>
              Services
            </Link>
            <Link href="/about" onClick={() => setMobileMenu(false)} className={`text-[15px] font-semibold ${pathname.startsWith("/about") ? "text-[#13B3B7]" : "text-[#152268]"}`}>
              About Us
            </Link>
            <Link href="/resources" onClick={() => setMobileMenu(false)} className={`text-[15px] font-semibold ${pathname.startsWith("/resources") ? "text-[#13B3B7]" : "text-[#152268]"}`}>
              Resources
            </Link>
            <Link href="/contact" onClick={() => setMobileMenu(false)} className={`text-[15px] font-semibold ${pathname.startsWith("/contact") ? "text-[#13B3B7]" : "text-[#152268]"}`}>
              Contact
            </Link>
            <Link
              href="/book-consultation"
              onClick={() => setMobileMenu(false)}
              className="flex items-center justify-center gap-2 gain-gradient hover:from-[#3630a8] hover:to-[#0d9a9e] text-white px-5 py-3.5 rounded-full text-sm font-semibold transition-all duration-300 shadow-[0_4px_14px_rgba(0,0,0,0.08)]"
            >
              <CalendarDays className="w-4 h-4" />
              <span>Book a Strategy Call</span>
            </Link>
          </div>
        </div>
      )}

    </nav>
  );
}
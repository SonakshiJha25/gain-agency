"use client";

import Link from "next/link";
import { Mail, ArrowUpRight } from "lucide-react";

const InstagramIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
  </svg>
);

const LinkedinIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
    <rect width="4" height="12" x="2" y="9"/>
    <circle cx="4" cy="4" r="2"/>
  </svg>
);

const NAV_LINKS = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "About Us", href: "/about" },
  { name: "Case Studies", href: "/case-studies" },
  { name: "Resources", href: "/resources" },
  { name: "Contact", href: "/contact" },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#f4f3ff] border-t border-purple-100">

      {/* Subtle background glows — matching site style */}
      <div className="absolute bottom-[-180px] right-[-100px] h-[400px] w-[400px] rounded-full bg-purple-300/20 blur-3xl pointer-events-none" />
      <div className="absolute top-[-100px] left-[-80px] h-[300px] w-[300px] rounded-full bg-teal-200/15 blur-3xl pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-6 pt-16 pb-10">

        {/* Top CTA strip */}
        <div className="mb-14 flex flex-col md:flex-row items-center justify-between gap-6 pb-12 border-b border-purple-100">
          <div>
            <p className="text-xs font-bold tracking-[0.2em] uppercase text-[#13B3B7] mb-2">
              Ready to grow?
            </p>
            <h2 className="text-2xl md:text-3xl font-black tracking-tight text-[#152268] leading-tight">
              Let&apos;s build your Amazon brand{" "}
              <span className="gain-gradient-text">together.</span>
            </h2>
          </div>
          <Link
            href="/book-consultation"
            className="flex-shrink-0 inline-flex items-center gap-2 gain-gradient text-white text-[14px] font-semibold px-8 py-4 rounded-full hover:from-[#3630a8] hover:to-[#0d9a9e] hover:-translate-y-0.5 transition-all duration-300 shadow-lg shadow-purple-300/30"
          >
            Book a Strategic Call
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Main grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-14">

          {/* Brand */}
          <div className="md:col-span-2">
            <Link href="/" className="inline-block mb-5">
              <img
                src="/logos/GAIN_final_logo.png"
                alt="GAIN Logo"
                className="h-9 w-auto object-contain"
                style={{ clipPath: "inset(0 0 8% 0)" }}
              />
            </Link>
            <p className="text-sm text-slate-600 leading-relaxed max-w-xs">
              GAIN is a performance-first Amazon advertising agency helping brands grow through data-driven strategies, optimized listings, and scalable ad systems.
            </p>

            {/* Social icon buttons */}
            <div className="flex items-center gap-3 mt-6">
              <a
                href="https://www.instagram.com/gain.ads/"
                target="_blank"
                rel="noopener noreferrer"
                title="Instagram"
                className="w-9 h-9 rounded-full border border-purple-200 flex items-center justify-center text-slate-500 hover:text-[#4A3DD5] hover:border-[#4A3DD5] hover:bg-purple-50 transition-all duration-200"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>
              <a
                href="https://www.linkedin.com/company/gain-ads/"
                target="_blank"
                rel="noopener noreferrer"
                title="LinkedIn"
                className="w-9 h-9 rounded-full border border-purple-200 flex items-center justify-center text-slate-500 hover:text-[#4A3DD5] hover:border-[#4A3DD5] hover:bg-purple-50 transition-all duration-200"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
              <a
                href="mailto:gain.org.in@gmail.com"
                title="Email"
                className="w-9 h-9 rounded-full border border-purple-200 flex items-center justify-center text-slate-500 hover:text-[#4A3DD5] hover:border-[#4A3DD5] hover:bg-purple-50 transition-all duration-200"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-xs font-bold tracking-[0.18em] uppercase text-[#152268] mb-5">
              Navigation
            </h4>
            <ul className="space-y-3">
              {NAV_LINKS.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-slate-600 hover:text-[#4A3DD5] transition-colors duration-150 inline-flex items-center gap-1 group"
                  >
                    {item.name}
                    <ArrowUpRight className="w-3 h-3 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-150" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xs font-bold tracking-[0.18em] uppercase text-[#152268] mb-5">
              Get in Touch
            </h4>
            <div className="space-y-4">
              <a
                href="mailto:gain.org.in@gmail.com"
                className="flex items-start gap-3 group"
              >
                <Mail className="w-4 h-4 text-[#13B3B7] mt-0.5 shrink-0" />
                <span className="text-sm text-slate-600 group-hover:text-[#4A3DD5] transition-colors duration-150 break-all">
                  gain.org.in@gmail.com
                </span>
              </a>
              <a
                href="https://www.instagram.com/gain.ads/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 group"
              >
                <InstagramIcon className="w-4 h-4 text-[#13B3B7] shrink-0" />
                <span className="text-sm text-slate-600 group-hover:text-[#4A3DD5] transition-colors duration-150">
                  @gain.ads
                </span>
              </a>
              <a
                href="https://www.linkedin.com/company/gain-ads/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 group"
              >
                <LinkedinIcon className="w-4 h-4 text-[#13B3B7] shrink-0" />
                <span className="text-sm text-slate-600 group-hover:text-[#4A3DD5] transition-colors duration-150">
                  GAIN Ads
                </span>
              </a>
            </div>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="pt-6 border-t border-purple-100 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-xs text-slate-500 text-center">
            © {new Date().getFullYear()}{" "}
            <span className="font-bold gain-gradient-text">GAIN</span>
            . All rights reserved.
          </p>
          <p className="text-xs text-slate-400 text-center">
            Amazon Advertising · Account Management · A+ Content
          </p>
        </div>

      </div>
    </footer>
  );
}
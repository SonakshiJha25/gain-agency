"use client";

import Link from "next/link";
import { Mail } from "lucide-react";

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

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-white border-t border-gray-200">

      {/* background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-50 via-white to-purple-100" />

      {/* soft glowing blobs */}
      <div className="absolute -top-40 -left-40 w-[400px] h-[400px] bg-purple-300 blur-[120px] opacity-30 rounded-full" />
      <div className="absolute -bottom-40 -right-40 w-[400px] h-[400px] bg-violet-400 blur-[140px] opacity-20 rounded-full" />

      <div className="relative max-w-6xl mx-auto px-6 py-14">

        {/* Top Grid */}
        <div className="grid md:grid-cols-3 gap-10">

          {/* Brand */}
          <div>
            <Link href="/" className="inline-flex items-center mb-3 group">
              <img
                src="/logos/GAIN_final_logo.png"
                alt="GAIN Logo"
                className="h-8 w-auto object-contain"
              />
            </Link>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold text-[#152268] mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-slate-800">
              {[
                { name: "Home", href: "/" },
                { name: "Services", href: "/services" },
                { name: "About Us", href: "/about" },
                { name: "Resources", href: "/resources" },
                { name: "Contact", href: "/contact" },
              ].map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="hover:text-[#4A3DD5] transition">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold text-[#152268] mb-4">Get in Touch</h4>

            <div className="space-y-3 text-sm text-slate-800">

              <a
                href="mailto:gain.org.in@gmail.com"
                className="flex items-center gap-2 hover:text-[#4A3DD5] transition"
              >
                <Mail className="w-4 h-4 text-[#4A3DD5] shrink-0" />
                gain.org.in@gmail.com
              </a>

              <a
                href="https://www.instagram.com/gain.ads/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-[#4A3DD5] transition"
              >
                <InstagramIcon className="w-4 h-4 text-[#4A3DD5] shrink-0" />
                @gain.ads
              </a>

              <a
                href="https://www.linkedin.com/company/gain-ads/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-[#4A3DD5] transition"
              >
                <LinkedinIcon className="w-4 h-4 text-[#4A3DD5] shrink-0" />
                GAIN Ads
              </a>

            </div>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 border-t border-purple-100 flex flex-col md:flex-row items-center justify-center gap-4">
          <p className="text-sm text-slate-700 text-center">
            © {new Date().getFullYear()}{" "}
            <span className="font-bold tracking-tight gain-gradient-text">
              GAIN
            </span>
            . All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  );
}
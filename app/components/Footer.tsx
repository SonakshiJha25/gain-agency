"use client";

import Link from "next/link";
import { Mail, ExternalLink } from "lucide-react";

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
                src="/logos/logo.png"
                alt="GAIN Logo"
                className="h-10 w-auto object-contain"
              />
            </Link>

            <p className="mt-1 text-slate-800 text-sm leading-relaxed">
              We help brands scale profitably on Amazon through expert ad strategy,
              creative optimization, and performance marketing.
            </p>
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
                <ExternalLink className="w-4 h-4 text-[#4A3DD5] shrink-0" />
                @gain.ads
              </a>

              <a
                href="https://www.linkedin.com/company/gain-ads/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-[#4A3DD5] transition"
              >
                <ExternalLink className="w-4 h-4 text-[#4A3DD5] shrink-0" />
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
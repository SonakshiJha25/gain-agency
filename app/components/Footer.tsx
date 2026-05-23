"use client";

import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-white border-t border-gray-200">

      {/* 🔥 background gradient layers */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-50 via-white to-purple-100" />

      {/* soft glowing blobs */}
      <div className="absolute -top-40 -left-40 w-[400px] h-[400px] bg-purple-300 blur-[120px] opacity-30 rounded-full" />
      <div className="absolute -bottom-40 -right-40 w-[400px] h-[400px] bg-violet-400 blur-[140px] opacity-20 rounded-full" />

      <div className="relative max-w-6xl mx-auto px-6 py-14">

        {/* Top Grid */}
        <div className="grid md:grid-cols-3 gap-10">

          {/* Brand */}
          <div>
            <h3 className="text-xl font-black text-gray-900">
              Amazon Growth Agency
            </h3>

            <p className="mt-3 text-gray-600 text-sm leading-relaxed">
              We help Amazon brands scale through performance-driven Ads,
              Account Management, and A+ Content optimization.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-sm font-semibold text-gray-900 mb-4">
              Quick Links
            </h4>

            <ul className="space-y-2 text-sm text-gray-600">
              {[
                { name: "Home", href: "/" },
                { name: "Services", href: "/services" },
                { name: "Case Studies", href: "/case-studies" },
                { name: "About Us", href: "/about" },
                { name: "Resources", href: "/resources" },
                { name: "Contact", href: "/contact" },
              ].map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="hover:text-purple-600 transition"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold text-gray-900 mb-4">
              Contact
            </h4>

            <div className="space-y-3 text-sm text-gray-600">

              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-purple-600" />
                support@youragency.com
              </div>

              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-purple-600" />
                +91 98765 43210
              </div>

              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-purple-600" />
                India
              </div>

            </div>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 border-t border-purple-100 flex flex-col md:flex-row items-center justify-between gap-4">

          <p className="text-sm text-gray-600">
            © {new Date().getFullYear()} Amazon Growth Agency. All rights reserved.
          </p>

          <div className="flex gap-6 text-sm text-gray-600">
            <span className="hover:text-purple-600 transition cursor-pointer">
              Privacy Policy
            </span>
            <span className="hover:text-purple-600 transition cursor-pointer">
              Terms
            </span>
          </div>

        </div>

      </div>
    </footer>
  );
}
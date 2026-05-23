"use client";

import { useState } from "react";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";

const baseClients = [
  {
    name: "Rahul Mehta",
    role: "Amazon Private Label Seller",
    rating: 5,
    image: "https://i.pravatar.cc/150?img=12",
    feedback:
      "Before working with them, our ads were unstructured and ACOS was unstable. After restructuring campaigns, ROAS became consistent and predictable.",
  },
  {
    name: "Neha Kapoor",
    role: "Health Brand Owner",
    rating: 5,
    image: "https://i.pravatar.cc/150?img=25",
    feedback:
      "A+ content redesign improved conversions significantly. Product pages now communicate trust and clarity better.",
  },
  {
    name: "Aman Verma",
    role: "Amazon Seller",
    rating: 5,
    image: "https://i.pravatar.cc/150?img=8",
    feedback:
      "Strategy-first approach made a big difference. Every change had clear reasoning behind it.",
  },
  {
    name: "Ananya Sharma",
    role: "D2C Beauty Brand Founder",
    rating: 4.5,
    image: "https://i.pravatar.cc/150?img=32",
    feedback:
      "They improved our listing structure and A+ content. Conversion rate improved and brand looked more premium.",
  },
  {
    name: "Vikram Singh",
    role: "E-commerce Entrepreneur",
    rating: 4,
    image: "https://i.pravatar.cc/150?img=45",
    feedback:
      "Campaign restructuring reduced wasted spend. Performance became stable over time.",
  },
];

function Stars({ rating }: { rating: number }) {
  return (
    <div className="flex gap-1">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={`w-4 h-4 ${
            i < Math.floor(rating)
              ? "text-[#6d28d9] fill-[#6d28d9]"
              : i < rating
              ? "text-[#8b5cf6] fill-[#8b5cf6]"
              : "text-gray-200"
          }`}
        />
      ))}
    </div>
  );
}

export default function ClientsCarousel() {
  const visible = 3;
  const [start, setStart] = useState(0);

  const next = () => {
    setStart((prev) => (prev + 1) % baseClients.length);
  };

  const prev = () => {
    setStart((prev) =>
      prev === 0 ? baseClients.length - 1 : prev - 1
    );
  };

  const getVisible = () => {
    const result = [];
    for (let i = 0; i < visible; i++) {
      result.push(baseClients[(start + i) % baseClients.length]);
    }
    return result;
  };

  const visibleClients = getVisible();

  return (
    <section className="py-28 px-6 bg-white relative overflow-hidden">

      {/* background glow */}
      <div className="absolute -top-40 -right-40 w-[450px] h-[450px] bg-purple-200/20 blur-[140px] opacity-30 rounded-full" />

      <div className="max-w-6xl mx-auto">

        {/* header */}
        <div className="text-center mb-16">
          <p className="text-[#6d28d9] text-[11px] font-bold tracking-[0.28em] uppercase mb-4">
            OUR CLIENTS
          </p>

          <h2 className="text-[28px] md:text-[42px] leading-[1.05] font-black tracking-[-0.05em] text-[#020617]">
            Real Results, Real Feedback
          </h2>
        </div>

        {/* carousel */}
        <div className="relative px-4">

          {/* LEFT */}
          <button
            onClick={prev}
            className="absolute -left-2 md:-left-6 top-1/2 -translate-y-1/2 p-2.5 rounded-full border border-[#ece4ff] bg-white hover:bg-[#f7f4ff] hover:border-[#6d28d9] transition-all duration-300 z-10 shadow-sm"
          >
            <ChevronLeft className="w-5 h-5 text-gray-700" />
          </button>

          {/* RIGHT */}
          <button
            onClick={next}
            className="absolute -right-2 md:-right-6 top-1/2 -translate-y-1/2 p-2.5 rounded-full border border-[#ece4ff] bg-white hover:bg-[#f7f4ff] hover:border-[#6d28d9] transition-all duration-300 z-10 shadow-sm"
          >
            <ChevronRight className="w-5 h-5 text-gray-700" />
          </button>

          {/* cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

            {visibleClients.map((c, i) => (
              <div
                key={i}
                className="bg-[#faf7ff] border border-[#ece4ff] rounded-[32px] p-8 transition-all duration-300 hover:-translate-y-1 shadow-sm flex flex-col justify-between"
              >
                <div className="flex items-start gap-4">

                  <img
                    src={c.image}
                    className="w-12 h-12 rounded-full object-cover border border-[#ece4ff] shrink-0"
                    alt={c.name}
                  />

                  <div>
                    <Stars rating={c.rating} />

                    <p className="mt-4 text-[#6b7280] text-[14px] leading-[1.8]">
                      "{c.feedback}"
                    </p>

                    <div className="mt-5">
                      <p className="font-bold text-[#111827] text-[15px]">
                        {c.name}
                      </p>
                      <p className="text-[12px] text-[#6b7280] mt-0.5">
                        {c.role}
                      </p>
                    </div>

                  </div>

                </div>
              </div>
            ))}

          </div>

        </div>
      </div>
    </section>
  );
}
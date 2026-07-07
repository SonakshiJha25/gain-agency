"use client";

import { ChevronDown } from "lucide-react";
import { useState } from "react";

type FAQItem = {
  id: string;
  question: string;
  answer: string;
};

const faqs: FAQItem[] = [
  {
    id: "1",
    question: "What can I expect in Amazon Ads Management Services?",
    answer:
      "We handle complete ad setup and optimization including keyword research, campaign structuring, bid management, and A/B testing. The goal is not just traffic but profitable scaling by improving ROAS and reducing wasted ad spend over time.",
  },
  {
    id: "2",
    question: "What can I expect in Amazon Account Management Services?",
    answer:
      "You get end-to-end account handling including listing optimization, catalog management, inventory planning, compliance checks, and performance monitoring. The focus is to keep your account healthy while supporting steady growth.",
  },
  {
    id: "3",
    question: "How does A+ Content help clients?",
    answer:
      "A+ Content improves how customers perceive your product by using structured visuals, comparison modules, and storytelling. This increases trust, reduces hesitation, and directly improves conversion rates.",
  },
  {
    id: "4",
    question: "How do you measure performance success?",
    answer:
      "We track key metrics like ROAS, ACOS, CTR, conversion rate, and total revenue growth. Decisions are data-driven, and campaigns are continuously optimized based on real performance outcomes.",
  },
  {
    id: "5",
    question: "Do you provide strategy before execution?",
    answer:
      "Yes, every client gets a custom strategy before execution. We analyze product category, competition, pricing, and current performance to build a clear roadmap before running any campaigns.",
  },
  {
    id: "6",
    question: "How fast can I start after onboarding?",
    answer:
      "Once account access and basic details are provided, setup usually begins within 3–5 business days. This includes audit, strategy creation, and campaign structuring before launch.",
  },
];

function AccordionItem({
  item,
  isOpen,
  onToggle,
}: {
  item: FAQItem;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div className={`rounded-2xl border transition-all duration-300 ${
      isOpen ? "border-[#4A3DD5]/40 bg-[#f4f3ff]/30 ring-1 ring-[#4A3DD5]/10" : "border-gray-100 bg-white"
    }`}>
      <button
        onClick={onToggle}
        className="w-full flex justify-between items-center px-5 py-4 text-left"
      >
        <span className={`text-[15px] font-semibold pr-4 transition-colors duration-300 ${
          isOpen ? "text-[#4A3DD5]" : "text-[#152268]"
        }`}>
          {item.question}
        </span>

        <ChevronDown
          className={`w-5 h-5 transition-transform duration-300 ${
            isOpen ? "text-[#13B3B7] rotate-180" : "text-[#4A3DD5]"
          }`}
        />
      </button>

      <div
        className={`grid transition-[grid-template-rows] duration-300 ease-in-out px-5 ${
          isOpen ? "grid-rows-[1fr] pb-4" : "grid-rows-[0fr]"
        }`}
      >
        <div className="overflow-hidden">
          <p className="text-slate-700 text-[14px] leading-relaxed">
            {item.answer}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function FAQ() {
  const [openId, setOpenId] = useState<string | null>(null);

  const left = faqs.filter((_, i) => i % 2 === 0);
  const right = faqs.filter((_, i) => i % 2 === 1);

  return (
    <section className="relative py-28 px-6 bg-[#faf9ff] overflow-hidden">
      
      {/* Brand background glow */}
      <div className="absolute top-[-100px] right-[-100px] w-[350px] h-[350px] bg-purple-200/35 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-[-100px] left-[-100px] w-[350px] h-[350px] bg-teal-100/25 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">

        {/* HEADER */}
        <div className="text-center mb-14">

          <h2 className="text-3xl md:text-4xl font-black tracking-tight leading-[1.1] text-[#152268]">
            Frequently Asked <span className="gain-gradient-text">Questions</span>
          </h2>

          <p className="mt-6 text-base text-slate-700 leading-relaxed max-w-2xl mx-auto">
            Clear answers about Amazon Ads, Account Management, and A+ Content services.
          </p>
        </div>

        {/* GRID */}
        <div className="grid md:grid-cols-2 gap-6">

          <div className="space-y-4">
            {left.map((item) => (
              <AccordionItem
                key={item.id}
                item={item}
                isOpen={openId === item.id}
                onToggle={() =>
                  setOpenId(openId === item.id ? null : item.id)
                }
              />
            ))}
          </div>

          <div className="space-y-4">
            {right.map((item) => (
              <AccordionItem
                key={item.id}
                item={item}
                isOpen={openId === item.id}
                onToggle={() =>
                  setOpenId(openId === item.id ? null : item.id)
                }
              />
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
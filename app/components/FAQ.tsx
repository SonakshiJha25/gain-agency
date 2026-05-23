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
    <div className="rounded-2xl border border-gray-200 bg-white shadow-sm hover:shadow-md transition">
      <button
        onClick={onToggle}
        className="w-full flex justify-between items-center px-5 py-4 text-left"
      >
        <span className="text-[15px] font-semibold text-gray-900 pr-4">
          {item.question}
        </span>

        <ChevronDown
          className={`w-5 h-5 text-purple-600 transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      <div
        className={`grid transition-[grid-template-rows] duration-300 ease-in-out px-5 ${
          isOpen ? "grid-rows-[1fr] pb-4" : "grid-rows-[0fr]"
        }`}
      >
        <div className="overflow-hidden">
          <p className="text-gray-500 text-[14px] leading-relaxed">
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
    <section className="relative py-28 px-6 bg-[#fafafa]">
      <div className="max-w-6xl mx-auto">

        {/* HEADER */}
        <div className="text-center mb-14">
          <p className="text-purple-600 text-xs font-semibold tracking-[0.35em] uppercase">
            FAQ
          </p>

          <h2 className="mt-3 text-5xl font-black text-gray-900">
            Frequently Asked Questions
          </h2>

          {/* ONLY purple text as you wanted */}
          <p className="mt-4 text-purple-600 max-w-2xl mx-auto leading-relaxed">
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
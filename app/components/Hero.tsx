"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  TrendingUp,
  BarChart3,
  Star,
  BadgeCheck
} from "lucide-react";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
} as const;

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.85,
      ease: [0.16, 1, 0.3, 1] as const, // easeOutExpo
    },
  },
} as const;

const statsContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.65,
    },
  },
} as const;

const statItemVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring" as const,
      stiffness: 100,
      damping: 15,
    },
  },
} as const;

export default function Hero() {
  return (
    // Main Hero Section
    <section className="relative h-screen overflow-hidden bg-[#f7f4ff] flex items-center justify-center">

      {/* Soft Purple Background Glow */}
      <div className="absolute bottom-[-180px] right-[-100px] h-[380px] w-[380px] rounded-full bg-purple-300/25 blur-3xl" />

      {/* Huge Background Outline Text */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
        <h1
          className="
            text-[26vw]
            md:text-[22vw]
            font-black
            tracking-[0.12em]
            leading-none
            text-transparent
            [-webkit-text-stroke:1px_rgba(109,40,217,0.15)]
          "
        >
          GAIN
        </h1>
      </div>

      {/* Main Content */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 max-w-4xl text-center px-6 pt-16"
      >
        {/* Small Badge */}
        <motion.p
          variants={itemVariants}
          className="text-[#6d28d9] text-[11px] font-bold tracking-[0.28em] uppercase mb-4"
        >
          Experts in Amazon. Invested in your Success.
        </motion.p>

        {/* Main Heading */}
        <motion.h1
          variants={itemVariants}
          className="text-[34px] md:text-[54px] leading-[1.05] font-black tracking-[-0.06em] text-[#020617]"
        >
          Grow. Amplify.
          <br />
          <span className="bg-gradient-to-r from-[#8b5cf6] via-[#7c3aed] to-[#30a5b0] bg-clip-text text-transparent">
            Innovate. Navigate.
          </span>
        </motion.h1>

        {/* Short Description */}
        <motion.p
          variants={itemVariants}
          className="max-w-2xl mx-auto mt-5 text-[15px] md:text-[14px] leading-[1.9] text-[#6b7280]"
        >
          We help brands scale profitably on Amazon through expert ad strategy, creative optimization, and performance marketing.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-9"
        >
          <Link
            href="/book-consultation"
            className="bg-gradient-to-r from-[#6d28d9] via-[#6d28d9] to-[#30a5b0] hover:from-[#5b21b6] hover:to-[#28929c] text-white text-[14px] font-medium px-8 py-4 rounded-2xl transition-all duration-300 shadow-lg shadow-purple-300/30 inline-flex items-center justify-center hover:-translate-y-0.5"
          >
            Book a Strategy Call →
          </Link>

          {/* Secondary Button */}
          <Link
            href="/book-consultation"
            className="border border-[#dacbfd] bg-[#f5efff] hover:bg-[#efe7ff] text-[#6d28d9] text-[14px] font-medium px-8 py-4 rounded-2xl transition-all duration-300 hover:-translate-y-0.5 inline-flex items-center justify-center"
          >
            Get Free Account Audit →
          </Link>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          variants={statsContainerVariants}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16"
        >
          {/* Revenue Stat */}
          <motion.div variants={statItemVariants} className="text-center">
            <div className="w-11 h-11 rounded-xl bg-[#efe7ff] flex items-center justify-center mx-auto mb-3">
              <TrendingUp className="w-5 h-5 text-[#6d28d9]" />
            </div>

            <h3 className="text-[28px] font-bold text-[#6d28d9]">
              $120M+
            </h3>

            <p className="text-[#6b7280] text-[14px] mt-1">
              Revenue Driven
            </p>
          </motion.div>

          {/* Brands Scaled Stat */}
          <motion.div variants={statItemVariants} className="text-center">
            <div className="w-11 h-11 rounded-xl bg-[#efe7ff] flex items-center justify-center mx-auto mb-3">
              <BarChart3 className="w-5 h-5 text-[#6d28d9]" />
            </div>

            <h3 className="text-[28px] font-bold text-[#6d28d9]">
              200+
            </h3>

            <p className="text-[#6b7280] text-[14px] mt-1">
              Brands Scaled
            </p>
          </motion.div>

          {/* Client Rating Stat */}
          <motion.div variants={statItemVariants} className="text-center">
            <div className="w-11 h-11 rounded-xl bg-[#efe7ff] flex items-center justify-center mx-auto mb-3">
              <Star className="w-5 h-5 text-[#6d28d9]" />
            </div>

            <h3 className="text-[28px] font-bold text-[#6d28d9]">
              4.9/5
            </h3>

            <p className="text-[#6b7280] text-[14px] mt-1">
              Client Rating
            </p>
          </motion.div>

          {/* Experience Stat */}
          <motion.div variants={statItemVariants} className="text-center">
            <div className="w-11 h-11 rounded-xl bg-[#efe7ff] flex items-center justify-center mx-auto mb-3">
              <BadgeCheck className="w-5 h-5 text-[#6d28d9]" />
            </div>

            <h3 className="text-[28px] font-bold text-[#6d28d9]">
              5+
            </h3>

            <p className="text-[#6b7280] text-[14px] mt-1">
              Years of Impact
            </p>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
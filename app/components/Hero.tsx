"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { motion, useMotionValue, useTransform, useSpring, useMotionTemplate } from "framer-motion";
import GainWatermark from "./GainWatermark";

const TAGLINE_TEXT = "Grow. Amplify. Innovate. Navigate.";
const TAGLINE_WORDS = ["Grow.", "Amplify.", "Innovate.", "Navigate."];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.1 } },
} as const;

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.85, ease: [0.16, 1, 0.3, 1] as const } },
} as const;

// Animated cursor blink
function Cursor() {
  const [visible, setVisible] = useState(true);
  useEffect(() => {
    const id = setInterval(() => setVisible(v => !v), 530);
    return () => clearInterval(id);
  }, []);
  return (
    <span
      className="inline-block w-[2px] h-[1em] bg-[#13B3B7] ml-0.5 translate-y-[0.1em]"
      style={{ opacity: visible ? 1 : 0, transition: "opacity 0.1s" }}
    />
  );
}

/* Highly 3D tilt image with dynamic drop shadow */
function TiltImage() {
  const ref = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [18, -18]), { stiffness: 120, damping: 15 });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-18, 18]), { stiffness: 120, damping: 15 });

  // Soft offset drop shadow that shifts dynamically with mouse movements (no rectangle/box-shadow container)
  const shadowX = useSpring(useTransform(mouseX, [-0.5, 0.5], [-12, 12]), { stiffness: 120, damping: 15 });
  const shadowY = useSpring(useTransform(mouseY, [-0.5, 0.5], [-8, 8]), { stiffness: 120, damping: 15 });
  const shadowBlur = useSpring(useTransform(mouseX, [-0.5, 0.5], [10, 16]), { stiffness: 120, damping: 15 });

  const dropShadow = useMotionTemplate`drop-shadow(${shadowX}px ${shadowY}px ${shadowBlur}px rgba(21, 34, 104, 0.16))`;

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    mouseX.set((e.clientX - rect.left) / rect.width - 0.5);
    mouseY.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative w-full flex items-center justify-center cursor-pointer"
      style={{ perspective: "800px" }}
    >
      <motion.div
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        className="relative w-full max-w-[1045px]"
      >
        {/* Image with slide-in and dynamic transparent-safe drop-shadow filter */}
        <motion.img
          src="/hero1.png"
          alt="Growth chart"
          className="w-full h-auto"
          style={{
            transformStyle: "preserve-3d",
            filter: dropShadow,
          }}
          draggable={false}
          initial={{ opacity: 0, y: 60, scale: 0.88, rotateX: -12 }}
          animate={{ opacity: 1, y: 0, scale: 1, rotateX: 0 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.25 }}
        />
      </motion.div>
    </div>
  );
}

export default function Hero() {
  const [typedChars, setTypedChars] = useState(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    let index = 0;
    const startTyping = () => {
      timerRef.current = setInterval(() => {
        index++;
        setTypedChars(index);
        if (index >= TAGLINE_TEXT.length) {
          clearInterval(timerRef.current!);
          setTimeout(() => {
            index = 0;
            setTypedChars(0);
            startTyping();
          }, 3000);
        }
      }, 50);
    };
    startTyping();
    return () => { if (timerRef.current) clearInterval(timerRef.current); };
  }, []);

  const renderTypewriter = () => {
    let charCount = 0;
    return (
      <span className="inline-flex gap-2 md:gap-3 flex-nowrap whitespace-nowrap items-center">
        {TAGLINE_WORDS.map((word, wIdx) => {
          const wordStart = charCount;
          const wordEnd = charCount + word.length;
          charCount += word.length + 1;
          if (typedChars <= wordStart) return null;
          const slice = TAGLINE_TEXT.slice(wordStart, Math.min(typedChars, wordEnd));
          if (!slice) return null;
          const firstLetter = slice[0];
          const rest = slice.slice(1);
          return (
            <span key={wIdx} className="inline-block text-[13px] md:text-[15px] font-bold text-slate-600 tracking-[0.2em] uppercase">
              <span className="text-[#13B3B7] font-black">{firstLetter}</span>
              <span>{rest}</span>
            </span>
          );
        })}
        {typedChars < TAGLINE_TEXT.length && typedChars > 0 && <Cursor />}
      </span>
    );
  };

  return (
    <section className="relative min-h-screen py-24 md:py-0 overflow-hidden bg-[#f4f3ff] flex items-center">
      <GainWatermark />

      {/* Background glows */}
      <div className="absolute bottom-[-180px] right-[-100px] h-[500px] w-[500px] rounded-full bg-purple-300/25 blur-3xl pointer-events-none" />
      <div className="absolute top-[-120px] left-[-80px] h-[350px] w-[350px] rounded-full bg-teal-200/20 blur-3xl pointer-events-none" />

      {/* Two-column layout */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center gap-4 md:gap-6 pt-16">

        {/* LEFT — Text */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex-[0.6] text-left md:-ml-4 md:pt-8"
        >
          <motion.div variants={itemVariants} className="mb-5 h-8 flex items-center">
            {renderTypewriter()}
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            variants={itemVariants}
            className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-[1.05] text-[#152268] flex flex-col"
          >
            <span className="whitespace-nowrap">Ads That</span>
            <span className="gain-gradient-text whitespace-nowrap">Actually Work.</span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="mt-5 text-sm md:text-[15px] leading-relaxed text-slate-600 max-w-[450px]"
          >
            Data-driven advertising strategies that deliver measurable
            <br className="hidden md:inline" /> results and unstoppable growth for your brand.
          </motion.p>

          <motion.div variants={itemVariants} className="mt-8">
            <Link
              href="/book-consultation"
              className="gain-gradient hover:from-[#3630a8] hover:to-[#0d9a9e] text-white text-[15px] font-medium px-10 py-4 rounded-full transition-all duration-300 shadow-lg shadow-purple-300/30 inline-flex items-center justify-center hover:-translate-y-0.5 hover:shadow-xl hover:shadow-purple-300/40"
            >
              Get started now →
            </Link>
          </motion.div>
        </motion.div>

        {/* RIGHT — 3D Image */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
          className="flex-[1.4] flex items-center justify-end md:-mr-12"
        >
          <TiltImage />
        </motion.div>

      </div>
    </section>
  );
}

"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { motion, useAnimationFrame } from "framer-motion";
import LogoArrow from "./LogoArrow";
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
      className="inline-block w-[2px] h-[1em] bg-[#22c55e] ml-0.5 translate-y-[0.1em]"
      style={{ opacity: visible ? 1 : 0, transition: "opacity 0.1s" }}
    />
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
      <span className="inline-flex gap-2 md:gap-3 flex-wrap justify-center items-center">
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
            <span key={wIdx} className="inline-block text-[14px] md:text-[16px] font-bold text-slate-700 tracking-[0.2em] uppercase">
              <span className="text-[#13B3B7] font-black">{firstLetter}</span>
              <span>{rest}</span>
            </span>
          );
        })}
        {/* Blinking cursor only while actively typing */}
        {typedChars < TAGLINE_TEXT.length && typedChars > 0 && <Cursor />}
      </span>
    );
  };

  return (
    <section className="relative h-screen overflow-hidden bg-[#f4f3ff] flex items-center justify-center">
      {/* GAIN Watermark */}
      <GainWatermark />

      {/* Soft purple glow */}
      <div className="absolute bottom-[-180px] right-[-100px] h-[380px] w-[380px] rounded-full bg-purple-300/25 blur-3xl pointer-events-none" />

      {/* Main Content */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 max-w-4xl text-center px-6 pt-16"
      >
        {/* Typewriter Tagline */}
        <motion.div variants={itemVariants} className="mb-6 h-9 flex items-center justify-center">
          {renderTypewriter()}
        </motion.div>

        {/* Main Heading */}
        <motion.h1
          variants={itemVariants}
          className="text-3xl md:text-4xl lg:text-5xl font-black tracking-tight leading-[1.05] text-[#152268]"
        >
          <span className="gain-gradient-text">
            Ads That Actually Work.
          </span>
        </motion.h1>



        {/* CTA */}
        <motion.div variants={itemVariants} className="flex items-center justify-center mt-10">
          <Link
            href="/book-consultation"
            className="gain-gradient hover:from-[#3630a8] hover:to-[#0d9a9e] text-white text-[15px] font-medium px-10 py-4 rounded-full transition-all duration-300 shadow-lg shadow-purple-300/30 inline-flex items-center justify-center hover:-translate-y-0.5"
          >
            Get started now →
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
}

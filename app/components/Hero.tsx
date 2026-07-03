"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { motion, useAnimationFrame } from "framer-motion";
import LogoArrow from "./LogoArrow";

const TAGLINE_TEXT = "Grow. Amplify. Innovate. Navigate.";
const TAGLINE_WORDS = ["Grow.", "Amplify.", "Innovate.", "Navigate."];

// Floating metric badges data
const FLOATING_BADGES = [
  { text: "ROAS Optimized", sub: "Ad Performance", color: "from-[#4A3DD5] to-[#4A3DD5]", x: "8%", y: "22%", delay: 0, flipped: true },
  { text: "PPC Campaigns", sub: "Sponsored Ads", color: "from-[#13B3B7] to-[#18C7C9]", x: "82%", y: "18%", delay: 0.6, flipped: false },
  { text: "A+ Content", sub: "Visual Branding", color: "from-[#5A46E0] to-[#4A3DD5]", x: "88%", y: "68%", delay: 1.2, flipped: false },
  { text: "Listing Growth", sub: "SEO Optimized", color: "from-[#13B3B7] to-[#13B3B7]", x: "5%", y: "70%", delay: 0.9, flipped: true },
];

const CLOUD_FLOATERS = [
  { size: 28, x: "8%", y: "15%", delay: 0.2, duration: 8, color: "text-[#4A3DD5]/25" },
  { size: 20, x: "18%", y: "45%", delay: 1.5, duration: 6, color: "text-[#13B3B7]/30" },
  { size: 24, x: "28%", y: "78%", delay: 0.8, duration: 9, color: "text-[#7c3aed]/25" },
  { size: 16, x: "38%", y: "25%", delay: 2.1, duration: 7, color: "text-[#4A3DD5]/20" },
  { size: 30, x: "50%", y: "10%", delay: 0.5, duration: 11, color: "text-[#13B3B7]/25" },
  { size: 18, x: "62%", y: "65%", delay: 1.3, duration: 8, color: "text-[#7c3aed]/30" },
  { size: 26, x: "72%", y: "20%", delay: 0.9, duration: 10, color: "text-[#4A3DD5]/25" },
  { size: 22, x: "85%", y: "42%", delay: 2.7, duration: 7.5, color: "text-[#13B3B7]/30" },
  { size: 16, x: "92%", y: "75%", delay: 1.1, duration: 6.5, color: "text-[#7c3aed]/25" },
  { size: 25, x: "15%", y: "85%", delay: 0.4, duration: 9.5, color: "text-[#13B3B7]/25" },
  { size: 20, x: "80%", y: "88%", delay: 1.9, duration: 8.5, color: "text-[#4A3DD5]/30" },
  { size: 18, x: "33%", y: "52%", delay: 0.7, duration: 7.2, color: "text-[#7c3aed]/25" },
];

function CloudFloater({ size, x, y, delay, duration, color }: { size: number; x: string; y: string; delay: number; duration: number; color: string }) {
  return (
    <motion.div
      className={`absolute pointer-events-none select-none z-10 ${color}`}
      style={{ left: x, top: y, width: size, height: size }}
      initial={{ opacity: 0, y: 10 }}
      animate={{
        opacity: [0, 0.75, 0.75, 0],
        y: [0, -35, 0],
        x: [0, 15, 0],
      }}
      transition={{
        duration,
        delay,
        repeat: Infinity,
        repeatType: "loop",
        ease: "easeInOut",
      }}
    >
      <svg viewBox="0 0 100 100" className="w-full h-full" fill="none" stroke="currentColor" strokeWidth="5.5">
        {/* Main Cloud Bubble */}
        <path d="M 42 70 C 27 70, 22 55, 32 45 C 22 35, 37 20, 52 25 C 67 15, 82 30, 77 45 C 87 55, 82 70, 67 70 Z" fill="rgba(255,255,255,0.4)" />
        {/* Circle 1 */}
        <circle cx="34" cy="79" r="6.5" fill="rgba(255,255,255,0.3)" />
        {/* Circle 2 */}
        <circle cx="25" cy="88" r="4.5" fill="rgba(255,255,255,0.2)" />
      </svg>
    </motion.div>
  );
}


function FloatingBadge({
  text, sub, color, x, y, delay
}: { text: string; sub: string; color: string; x: string; y: string; delay: number }) {
  return (
    <motion.div
      className="absolute hidden lg:block pointer-events-none select-none z-20 w-[150px] h-[110px]"
      style={{ left: x, top: y }}
      initial={{ opacity: 0, y: 18, scale: 0.88 }}
      animate={{ opacity: 1, y: [0, -12, 0], scale: 1 }}
      transition={{
        opacity: { delay, duration: 0.7 },
        scale: { delay, duration: 0.7 },
        y: {
          delay: delay + 0.7,
          duration: 4,
          repeat: Infinity,
          repeatType: "loop",
          ease: "easeInOut",
        },
      }}
    >
      {/* Background Cloud Thought Bubble SVG */}
      <svg viewBox="0 0 150 110" fill="none" className="absolute inset-0 w-full h-full drop-shadow-[0_8px_20px_rgba(74,61,213,0.12)]">
        {/* Main cloud body */}
        <path
          d="M 35 75 C 20 75, 12 60, 22 48 C 12 36, 25 18, 45 22 C 60 10, 85 12, 95 25 C 115 15, 132 30, 128 50 C 138 62, 130 75, 115 75 C 105 88, 75 88, 60 75 Z"
          fill="rgba(255, 255, 255, 0.94)"
          stroke="#e2dfff"
          strokeWidth="1.5"
        />
        {/* Circle 1 */}
        <circle cx="28" cy="88" r="6" fill="rgba(255, 255, 255, 0.9)" stroke="#e2dfff" strokeWidth="1.5" />
        {/* Circle 2 */}
        <circle cx="18" cy="98" r="3.5" fill="rgba(255, 255, 255, 0.8)" stroke="#e2dfff" strokeWidth="1.5" />
      </svg>

      {/* Absolutely centered text container */}
      <div className="absolute top-[28px] left-[20px] w-[110px] h-[45px] flex flex-col items-center justify-center gap-0.5 z-30">
        <span
          className={`text-[9.5px] font-black bg-gradient-to-r ${color} bg-clip-text text-transparent bg-[linear-gradient(150deg,_#7c3aed_0%,_#7c3aed_65%,_#4f6fd4_85%,_#14b8a6_100%)] tracking-wide uppercase text-center leading-tight`}
        >
          {text}
        </span>
        <span className="text-[8px] text-[#9ca3af] font-bold text-center leading-tight">
          {sub}
        </span>
      </div>
    </motion.div>
  );
}

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

      {/* Huge GAIN shadow background */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
        <h1
          className="text-[22vw] md:text-[20vw] font-black tracking-[0.12em] leading-none text-transparent"
          style={{ WebkitTextStroke: "1px rgba(74,61,213,0.12)" }}
          aria-hidden="true"
        >
          GAIN
        </h1>
      </div>

      {/* Soft purple glow */}
      <div className="absolute bottom-[-180px] right-[-100px] h-[380px] w-[380px] rounded-full bg-purple-300/25 blur-3xl pointer-events-none" />

      {/* Floating badges */}
      {FLOATING_BADGES.map((b) => (
        <FloatingBadge key={b.text} {...b} />
      ))}

      {/* Cloud Floaters in Background */}
      {CLOUD_FLOATERS.map((cf, idx) => (
        <CloudFloater key={idx} {...cf} />
      ))}

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

        {/* Description */}
        <motion.p
          variants={itemVariants}
          className="max-w-2xl mx-auto mt-5 text-[15px] md:text-[14px] leading-[1.9] text-slate-700"
        >
          We help brands scale profitably on Amazon through expert ad strategy,
          creative optimization, and performance marketing.
        </motion.p>

        {/* CTA */}
        <motion.div variants={itemVariants} className="flex items-center justify-center mt-10">
          <Link
            href="/book-consultation"
            className="gain-gradient hover:from-[#3630a8] hover:to-[#0d9a9e] text-white text-[15px] font-medium px-10 py-4 rounded-full transition-all duration-300 shadow-lg shadow-purple-300/30 inline-flex items-center justify-center hover:-translate-y-0.5"
          >
            Book a Strategy Call →
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
}

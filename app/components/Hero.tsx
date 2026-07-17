"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
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

/*
  SVG arrow overlay — traced from the actual hero1.png arrow.
  Image natural size: 1316 × 988 px.
  Arrow tail (thin): ~(285, 775)
  Arrow head tip:    ~(1190, 108)
  Cubic bezier follows the actual arc of the arrow in the PNG.

  Uses Framer Motion's native pathLength (0 → 1) for the draw animation.
  No inline <style> hacks, no dashoffset math.
*/
function AnimatedArrow() {
  // Centerline path extended to cover the full arrowhead for the mask.
  const maskPath = "M 280 797 C 590 450, 890 620, 1200 288 L 1261.42 222.22";


  // Solid, variable-width filled shape containing the entire arrow body and perfectly attached head.
  // Calculated to be thin at the start (2px) and gracefully thicken towards the arrowhead (26px).
  const solidArrowPath = "M 279.25 796.33 L 288.55 786.06 L 297.84 776.08 L 307.11 766.40 L 316.38 757.00 L 325.64 747.88 L 334.89 739.04 L 344.14 730.47 L 353.38 722.17 L 362.61 714.12 L 371.84 706.33 L 381.07 698.78 L 390.29 691.47 L 399.50 684.39 L 408.71 677.54 L 417.92 670.92 L 427.12 664.51 L 436.32 658.31 L 445.52 652.31 L 454.72 646.51 L 463.91 640.90 L 473.10 635.48 L 482.28 630.24 L 491.46 625.17 L 500.65 620.27 L 509.82 615.53 L 519.00 610.94 L 528.18 606.51 L 537.35 602.22 L 546.52 598.06 L 555.69 594.04 L 564.86 590.14 L 574.02 586.36 L 583.18 582.69 L 592.34 579.14 L 601.50 575.68 L 610.66 572.32 L 619.81 569.04 L 628.97 565.85 L 638.12 562.74 L 647.26 559.70 L 656.41 556.72 L 665.55 553.80 L 674.69 550.93 L 683.83 548.11 L 692.97 545.33 L 702.10 542.58 L 711.23 539.87 L 720.35 537.17 L 729.48 534.49 L 738.60 531.82 L 747.71 529.16 L 756.83 526.49 L 765.94 523.82 L 775.04 521.13 L 784.14 518.42 L 793.24 515.69 L 802.34 512.92 L 811.43 510.11 L 820.51 507.27 L 829.59 504.37 L 838.67 501.41 L 847.75 498.40 L 856.81 495.31 L 865.88 492.15 L 874.94 488.91 L 884.00 485.59 L 893.05 482.18 L 902.09 478.66 L 911.14 475.05 L 920.17 471.32 L 929.21 467.48 L 938.24 463.52 L 947.26 459.43 L 956.29 455.21 L 965.31 450.85 L 974.32 446.34 L 983.33 441.68 L 992.34 436.87 L 1001.35 431.89 L 1010.35 426.75 L 1019.35 421.43 L 1028.36 415.93 L 1037.35 410.25 L 1046.35 404.37 L 1055.35 398.29 L 1064.35 392.01 L 1073.34 385.51 L 1082.34 378.81 L 1091.34 371.87 L 1100.34 364.71 L 1109.34 357.31 L 1118.34 349.68 L 1127.35 341.79 L 1136.36 333.65 L 1145.37 325.25 L 1154.39 316.58 L 1163.41 307.64 L 1172.43 298.43 L 1181.46 288.92 L 1190.50 279.13 L 1167.11 257.29 L 1261.42 222.22 L 1232.89 318.71 L 1209.50 296.87 L 1199.94 306.70 L 1190.39 316.23 L 1180.84 325.46 L 1171.31 334.41 L 1161.77 343.08 L 1152.25 351.47 L 1142.73 359.59 L 1133.22 367.45 L 1123.72 375.05 L 1114.22 382.41 L 1104.73 389.51 L 1095.25 396.38 L 1085.78 403.02 L 1076.32 409.43 L 1066.87 415.62 L 1057.42 421.59 L 1047.98 427.36 L 1038.56 432.93 L 1029.14 438.29 L 1019.73 443.47 L 1010.33 448.47 L 1000.94 453.29 L 991.55 457.94 L 982.18 462.42 L 972.82 466.75 L 963.47 470.92 L 954.12 474.95 L 944.79 478.84 L 935.46 482.60 L 926.15 486.23 L 916.84 489.73 L 907.54 493.13 L 898.25 496.42 L 888.97 499.60 L 879.70 502.69 L 870.43 505.70 L 861.17 508.62 L 851.92 511.46 L 842.68 514.23 L 833.45 516.94 L 824.22 519.60 L 814.99 522.20 L 805.78 524.76 L 796.57 527.28 L 787.36 529.76 L 778.16 532.22 L 768.97 534.66 L 759.77 537.09 L 750.59 539.51 L 741.40 541.93 L 732.22 544.35 L 723.05 546.78 L 713.87 549.23 L 704.70 551.71 L 695.53 554.21 L 686.36 556.75 L 677.19 559.33 L 668.03 561.96 L 658.86 564.65 L 649.70 567.39 L 640.53 570.20 L 631.36 573.09 L 622.20 576.05 L 613.03 579.10 L 603.86 582.24 L 594.69 585.47 L 585.52 588.81 L 576.35 592.26 L 567.17 595.83 L 557.99 599.52 L 548.81 603.33 L 539.62 607.28 L 530.44 611.37 L 521.25 615.61 L 512.05 620.00 L 502.85 624.55 L 493.65 629.27 L 484.44 634.16 L 475.23 639.22 L 466.01 644.47 L 456.79 649.91 L 447.57 655.55 L 438.34 661.39 L 429.10 667.44 L 419.86 673.70 L 410.62 680.18 L 401.37 686.90 L 392.12 693.84 L 382.86 701.03 L 373.60 708.46 L 364.33 716.14 L 355.06 724.08 L 345.78 732.29 L 336.50 740.76 L 327.21 749.52 L 317.93 758.55 L 308.63 767.88 L 299.34 777.50 L 290.04 787.43 L 280.75 797.67 Z";

  return (
    <svg
      viewBox="0 -30 1316 1120"
      className="absolute inset-0 w-full h-full"
      fill="none"
      aria-hidden="true"
      style={{ pointerEvents: "none", zIndex: 3 }}
    >
      <defs>
        {/* Gradient matching the PNG: purple → indigo → cyan */}
        <linearGradient id="heroArrowGrad" x1="0%" y1="100%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#8B5CF6" />
          <stop offset="48%" stopColor="#5B7BE8" />
          <stop offset="100%" stopColor="#06B6D4" />
        </linearGradient>

        <mask id="drawingMask">
          {/* 
            The mask is a pure white, ultra-thick stroke following the centerline. 
            By animating its pathLength from 0 to 1, we smoothly reveal the complex filled arrow shape underneath.
            strokeLinecap="butt" creates a sharp, drawing-like advancing edge.
          */}
          <motion.path
            d={maskPath}
            stroke="white"
            strokeWidth="200"
            fill="none"
            strokeLinecap="butt"
            strokeLinejoin="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{
              duration: 4.5,
              ease: [0.4, 0, 0.2, 1], // Slower start, smooth middle, gentle finish
              repeat: Infinity,
              repeatType: "loop",
              repeatDelay: 0.8, // Brief pause at the end
            }}
          />
        </mask>
      </defs>

      {/* The solid filled arrow, perfectly styled and naturally integrated, revealed by the mask */}
      <path
        d={solidArrowPath}
        fill="url(#heroArrowGrad)"
        mask="url(#drawingMask)"
      />
    </svg>
  );
}

/* Static PNG + SVG overlay — no 3D, no tilt */
function HeroImage() {
  return (
    <div className="relative w-full max-w-[1350px]" style={{ isolation: "isolate" }}>
      {/* The static PNG — bars + background never move */}
      <motion.img
        src="/hero1.png"
        alt="Growth chart"
        className="w-full h-auto block"
        draggable={false}
        initial={{ opacity: 0, y: 50, scale: 0.93 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
      />

      {/* Animated SVG arrow overlaid perfectly on the PNG arrow */}
      <AnimatedArrow />
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

        {/* RIGHT — Image with animated arrow overlay */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
          className="flex-[1.8] flex items-center justify-end md:-mr-16"
        >
          <HeroImage />
        </motion.div>

      </div>
    </section>
  );
}

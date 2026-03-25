"use client";

import { useRef } from "react";
import { motion, useInView, type Variants } from "framer-motion";

// ═══════════════════════════════════════════════════════════════════════
//  THINKING HERO — Editorial-style hero matching new design patterns
// ═══════════════════════════════════════════════════════════════════════

const fadeSlideUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 100, damping: 20, duration: 0.6 },
  },
};

const wordReveal: Variants = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 120, damping: 20 },
  },
};

const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08, delayChildren: 0.1 },
  },
};

const HEADLINE_LINES: { words: { text: string; decorated?: boolean; secondary?: boolean }[] }[] = [
  {
    words: [{ text: "Thinking at the" }],
  },
  {
    words: [{ text: "Frontier.", decorated: true, secondary: true }],
  },
];

export default function ThinkingHero() {
  const contentRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(contentRef, { once: true, margin: "-60px" });

  return (
    <section
      id="thinking-hero"
      className="relative overflow-hidden bg-evren-warm-white pt-40 pb-20 md:pt-48 md:pb-24 lg:pb-32"
    >
      {/* ── Animated gradient mesh blobs (matching ApproachHero) ── */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        <div
          className="absolute -top-[10%] -left-[8%] w-[700px] h-[700px] rounded-full mesh-blob"
          style={{
            background: "radial-gradient(circle, rgba(244, 168, 154, 0.22) 0%, rgba(244, 168, 154, 0.07) 40%, transparent 70%)",
            filter: "blur(40px)",
          }}
        />
        <div
          className="absolute top-[20%] right-[10%] w-[500px] h-[500px] rounded-full mesh-blob-2"
          style={{
            background: "radial-gradient(circle, rgba(212, 165, 116, 0.16) 0%, rgba(212, 165, 116, 0.04) 40%, transparent 70%)",
            filter: "blur(30px)",
          }}
        />
        <div
          className="absolute -bottom-[8%] left-[15%] w-[650px] h-[650px] rounded-full mesh-blob"
          style={{
            background: "radial-gradient(circle, rgba(27, 42, 74, 0.05) 0%, rgba(27, 42, 74, 0.01) 50%, transparent 70%)",
            filter: "blur(45px)",
            animationDelay: "-6s",
          }}
        />
      </div>

      {/* ── Content ── */}
      <motion.div
        ref={contentRef}
        className="relative z-10 max-w-4xl mx-auto px-5 sm:px-6 lg:px-12 flex flex-col items-center text-center group"
        variants={staggerContainer}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        {/* ── Circular Blueprint grid surrounding content ── */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[45%] w-[120vw] h-[120vw] max-w-[1400px] max-h-[1400px] pointer-events-none z-[-1] transition-opacity duration-700 opacity-60 group-hover:opacity-90">
          <div
            className="absolute inset-0 transition-transform duration-1000 group-hover:scale-[1.03]"
            style={{
              backgroundSize: "40px 40px",
              backgroundImage:
                "linear-gradient(to right, rgba(27, 42, 74, 0.18) 1px, transparent 1px), linear-gradient(to bottom, rgba(27, 42, 74, 0.18) 1px, transparent 1px)",
              maskImage:
                "radial-gradient(circle at center, transparent 15%, rgba(0,0,0,0.4) 25%, black 35%, black 50%, transparent 65%)",
              WebkitMaskImage:
                "radial-gradient(circle at center, transparent 15%, rgba(0,0,0,0.4) 25%, black 35%, black 50%, transparent 65%)",
            }}
          />
        </div>

        {/* BADGE */}
        <motion.div
          variants={fadeSlideUp}
          className="mb-8 inline-flex items-center gap-2.5 rounded-full bg-evren-peach-light/60 border border-evren-peach/20 px-5 py-2"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-evren-rose opacity-50" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-evren-rose" />
          </span>
          <span className="text-[11px] font-heading font-semibold text-evren-navy tracking-wide uppercase">
            The Editorial Index
          </span>
        </motion.div>

        {/* HEADLINE */}
        <motion.h1
          className="font-heading font-extrabold text-evren-navy text-4xl sm:text-5xl md:text-6xl lg:text-[4.5rem] leading-[1.1] -tracking-tight max-w-4xl mb-8"
        >
          {HEADLINE_LINES.map((line, lineIdx) => (
            <span key={lineIdx} className="block">
              {line.words.map((word) =>
                word.decorated ? (
                  <motion.span key={word.text} className={`relative inline-block ${word.secondary ? 'text-evren-medium-gray' : ''}`} variants={wordReveal}>
                    <span className="relative z-10">{word.text}</span>
                    <svg className="absolute -bottom-1 md:-bottom-2 left-0 w-full h-[10px] md:h-[14px]" viewBox="0 0 200 12" fill="none" preserveAspectRatio="none" aria-hidden="true">
                      <g>
                        <animateTransform attributeName="transform" type="translate" from="-64 0" to="0 0" dur="3s" repeatCount="indefinite" />
                        <path d="M -64 6 Q -48 0, -32 6 T 0 6 T 32 6 T 64 6 T 96 6 T 128 6 T 160 6 T 192 6 T 224 6 T 256 6 T 288 6" stroke="#F4A89A" strokeWidth="2.5" strokeLinecap="round" fill="none" opacity="0.7" />
                      </g>
                    </svg>
                  </motion.span>
                ) : (
                  <motion.span key={word.text} className={`inline-block whitespace-pre ${word.secondary ? 'text-evren-medium-gray' : ''}`} variants={wordReveal}>
                    {word.text}
                  </motion.span>
                )
              )}
            </span>
          ))}
        </motion.h1>

        {/* BODY COPY */}
        <motion.div variants={fadeSlideUp} className="max-w-2xl mx-auto">
          <p className="font-body text-evren-charcoal text-base md:text-lg lg:text-xl leading-relaxed" style={{ lineHeight: 1.7 }}>
            We open-source our methodologies, engineering insights, and hard-won lessons from building AI systems in production. Written for the leaders who ship — not the algorithms that crawl.
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
}

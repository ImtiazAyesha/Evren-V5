"use client";

import { motion } from "framer-motion";

// ═══════════════════════════════════════════════════════════════════════
//  THINKING HERO — Editorial-style hero with commanding typography
//  64px H1, Plus Jakarta Sans, deep charcoal. Warm White background.
// ═══════════════════════════════════════════════════════════════════════

const letterVariants = {
  hidden: { opacity: 0, y: 40, filter: "blur(8px)" },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      delay: 0.05 * i,
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
    },
  }),
};

const HEADLINE = "Thinking at the Frontier.";

export default function ThinkingHero() {
  return (
    <section
      id="thinking-hero"
      className="relative overflow-hidden bg-evren-warm-white pt-40 pb-24 md:pt-48 md:pb-32"
    >
      {/* ── Subtle Abstract Geometry Background ── */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        {/* Large circle — top right */}
        <div
          className="absolute -top-[20%] -right-[10%] w-[600px] h-[600px] rounded-full"
          style={{
            border: "1px solid rgba(27, 42, 74, 0.04)",
          }}
        />
        {/* Medium circle — bottom left */}
        <div
          className="absolute -bottom-[15%] -left-[8%] w-[450px] h-[450px] rounded-full"
          style={{
            border: "1px solid rgba(244, 168, 154, 0.12)",
          }}
        />
        {/* Small accent circle */}
        <div
          className="absolute top-[30%] right-[25%] w-[180px] h-[180px] rounded-full"
          style={{
            border: "1px solid rgba(27, 42, 74, 0.03)",
          }}
        />
        {/* Diagonal line accent */}
        <svg
          className="absolute bottom-[10%] right-[5%] opacity-[0.04]"
          width="300"
          height="300"
          viewBox="0 0 300 300"
          fill="none"
        >
          <line
            x1="0"
            y1="300"
            x2="300"
            y2="0"
            stroke="#1B2A4A"
            strokeWidth="1"
          />
          <line
            x1="40"
            y1="300"
            x2="300"
            y2="40"
            stroke="#1B2A4A"
            strokeWidth="1"
          />
        </svg>
      </div>

      {/* ── Content ── */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8 text-center">
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-8"
        >
          <span className="inline-flex items-center gap-2 text-xs font-medium tracking-[0.2em] uppercase text-evren-navy/60 font-body">
            <span className="w-8 h-[1px] bg-evren-peach" />
            Insights from Evren AI
            <span className="w-8 h-[1px] bg-evren-peach" />
          </span>
        </motion.div>

        {/* Headline — 64px, letter-by-letter animation */}
        <h1 className="font-heading font-bold text-evren-charcoal leading-[1.05] tracking-[0.02em] mb-8">
          <span className="sr-only">{HEADLINE}</span>
          <span aria-hidden="true" className="inline-block">
            {HEADLINE.split("").map((char, i) => (
              <motion.span
                key={i}
                custom={i}
                variants={letterVariants}
                initial="hidden"
                animate="visible"
                className="inline-block"
                style={{
                  fontSize: "clamp(40px, 6vw, 64px)",
                }}
              >
                {char === " " ? "\u00A0" : char}
              </motion.span>
            ))}
          </span>
        </h1>

        {/* Sub-headline */}
        <motion.p
          initial={{ opacity: 0, y: 20, filter: "blur(6px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.7, delay: 1.0, ease: [0.22, 1, 0.36, 1] }}
          className="font-body text-lg md:text-xl text-evren-medium-gray leading-relaxed max-w-2xl mx-auto"
        >
          We open-source our methodologies, engineering insights, and hard-won
          lessons from building AI systems in production. Written for the 
          leaders who ship — not the algorithms that crawl.
        </motion.p>

        {/* Decorative divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 1.3, ease: [0.22, 1, 0.36, 1] }}
          className="mt-12 mx-auto w-16 h-[2px] bg-evren-peach origin-center"
        />
      </div>
    </section>
  );
}

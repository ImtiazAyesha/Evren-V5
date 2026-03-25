"use client";

import { useRef } from "react";
import {
  motion,
  useInView,
  useScroll,
  useTransform,
  type Variants,
} from "framer-motion";
import { ArrowUpRight } from "lucide-react";

// ═══════════════════════════════════════════════════════════════════════
//  MOTION VARIANTS
// ═══════════════════════════════════════════════════════════════════════

const SPRING = { type: "spring" as const, stiffness: 100, damping: 20 };

const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12, delayChildren: 0.06 },
  },
};

const fadeSlideUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { ...SPRING, duration: 0.6 },
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

// ═══════════════════════════════════════════════════════════════════════
//  HEADLINE — Word-by-word reveal (inspired by Hero.tsx)
// ═══════════════════════════════════════════════════════════════════════

const HEADLINE_LINES: { words: { text: string; decorated?: boolean; hero?: boolean; secondary?: boolean }[] }[] = [
  {
    words: [
      { text: "Evren", hero: true, decorated: true },
      { text: " means Universe." },
    ],
  },
  {
    words: [{ text: "The Universe Is Always", secondary: true }],
  },
  {
    words: [
      { text: "Expanding", secondary: true },
      { text: ". So Are We.", secondary: true },
    ],
  },
];


// ═══════════════════════════════════════════════════════════════════════
//  ABOUT HERO — 'The Evren Story'
// ═══════════════════════════════════════════════════════════════════════

export default function AboutHero() {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  const isInView = useInView(contentRef, { once: true, margin: "-60px" });

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const contentY = useTransform(scrollYProgress, [0, 0.5], [0, 30]);

  return (
    <section
      ref={sectionRef}
      id="about-hero"
      className="relative w-full overflow-hidden bg-evren-warm-white"
      style={{ minHeight: "600px" }}
    >
      {/* ── Animated gradient mesh blobs ──────────────────────────── */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        {/* Peach blob — top-left */}
        <div
          className="absolute -top-[10%] -left-[8%] w-[700px] h-[700px] rounded-full mesh-blob"
          style={{
            background:
              "radial-gradient(circle, rgba(244, 168, 154, 0.22) 0%, rgba(244, 168, 154, 0.07) 40%, transparent 70%)",
            filter: "blur(40px)",
          }}
        />
        {/* Rose blob — center-right */}
        <div
          className="absolute top-[0%] -right-[5%] w-[600px] h-[600px] rounded-full mesh-blob-2"
          style={{
            background:
              "radial-gradient(circle, rgba(232, 150, 126, 0.18) 0%, rgba(232, 150, 126, 0.05) 45%, transparent 70%)",
            filter: "blur(35px)",
          }}
        />
        {/* Gold blob — bottom-center */}
        <div
          className="absolute -bottom-[8%] left-[15%] w-[650px] h-[650px] rounded-full mesh-blob"
          style={{
            background:
              "radial-gradient(circle, rgba(212, 165, 116, 0.16) 0%, rgba(212, 165, 116, 0.04) 40%, transparent 70%)",
            filter: "blur(45px)",
            animationDelay: "-6s",
          }}
        />
        {/* Navy tint blob — top-right */}
        <div
          className="absolute top-[25%] right-[10%] w-[500px] h-[500px] rounded-full mesh-blob-2"
          style={{
            background:
              "radial-gradient(circle, rgba(27, 42, 74, 0.05) 0%, rgba(27, 42, 74, 0.01) 50%, transparent 70%)",
            filter: "blur(30px)",
            animationDelay: "-10s",
          }}
        />
      </div>

      {/* ────────────────────────────────────────────────────────────
          CONTENT — Centered layout (same structure as Hero.tsx)
      ──────────────────────────────────────────────────────────── */}
      <motion.div
        ref={contentRef}
        className="relative z-10 max-w-5xl mx-auto px-5 sm:px-6 lg:px-12 py-16 sm:py-24 lg:py-32 flex flex-col items-center text-center group"
        style={{ y: contentY }}
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

        {/* 1. BADGE — with live pulse (inspired by Hero) */}
        <motion.div
          variants={fadeSlideUp}
          className="mb-2 inline-flex items-center gap-2.5
                     rounded-full bg-evren-peach-light/60 border border-evren-peach/20
                     px-5 py-2"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-evren-rose opacity-50" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-evren-rose" />
          </span>
          <span className="text-[11px] font-heading font-semibold text-evren-navy tracking-wide uppercase">
            Our Story
          </span>
        </motion.div>

        {/* 2. HEADLINE — Two-tier typographic hierarchy */}
        <motion.h1
          className="font-heading text-evren-navy -tracking-tight max-w-4xl"
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: 0.08, delayChildren: 0.1 },
            },
          }}
        >
          {/* ── Tier 1: Primary statement — large, commanding ── */}
          <span className="block font-extrabold text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.08]">
            {HEADLINE_LINES[0].words.map((word) =>
              word.decorated ? (
                <motion.span
                  key={word.text}
                  className={`relative inline-block ${word.hero ? "font-black" : ""}`}
                  variants={wordReveal}
                >
                  <span className="relative z-10">{word.text}</span>
                  {/* Animated wavy underline — peach */}
                  <svg
                    className="absolute -bottom-1 md:-bottom-2 left-0 w-full h-[10px] md:h-[14px]"
                    viewBox="0 0 200 12"
                    fill="none"
                    preserveAspectRatio="none"
                    aria-hidden="true"
                  >
                    <g>
                      <animateTransform attributeName="transform" type="translate" from="-64 0" to="0 0" dur="3s" repeatCount="indefinite" />
                      <path
                        d="M -64 6 Q -48 0, -32 6 T 0 6 T 32 6 T 64 6 T 96 6 T 128 6 T 160 6 T 192 6 T 224 6 T 256 6 T 288 6"
                        stroke="#F4A89A"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        fill="none"
                        opacity="0.7"
                      />
                    </g>
                  </svg>
                </motion.span>
              ) : word.hero ? (
                <motion.span
                  key={word.text}
                  className="inline-block whitespace-pre font-black"
                  variants={wordReveal}
                >
                  {word.text}
                </motion.span>
              ) : (
                <motion.span
                  key={word.text}
                  className="inline-block whitespace-pre"
                  variants={wordReveal}
                >
                  {word.text}
                </motion.span>
              )
            )}
          </span>

          {/* ── Tier 2: Supporting tagline — stepped down, still substantial ── */}
          <span className="block font-semibold text-evren-medium-gray text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-[1.2] mt-3">
            {HEADLINE_LINES.slice(1).map((line, lineIdx) => (
              <span key={lineIdx} className="block">
                {line.words.map((word) => (
                  <motion.span
                    key={word.text}
                    className="inline-block whitespace-pre"
                    variants={wordReveal}
                  >
                    {word.text}
                  </motion.span>
                ))}
              </span>
            ))}
          </span>

          <span className="sr-only">
            Evren means Universe. The Universe Is Always Expanding. So Are We.
          </span>
        </motion.h1>

        {/* 3. BODY COPY — origin narrative */}
        <motion.div variants={fadeSlideUp} className="mt-8 max-w-2xl mx-auto">
          <p
            className="font-body text-evren-charcoal text-base md:text-lg lg:text-xl leading-relaxed"
            style={{ lineHeight: 1.7 }}
          >
            Evren AI was born from a single conviction: that the most powerful
            technology should feel effortlessly human. We bridge the gap between
            deep technical AI and human-centered design — building intelligent
            products that don&rsquo;t just work, but genuinely connect.
          </p>
        </motion.div>

        {/* 4. CTA BUTTON */}
        <motion.div variants={fadeSlideUp} className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
          <motion.a
            href="/connect"
            id="about-hero-cta"
            aria-label="Get in touch with Evren AI"
            className="inline-flex items-center justify-center gap-2
                       rounded-full bg-evren-peach text-evren-navy font-heading font-semibold
                       px-8 py-4 text-sm w-full sm:w-auto will-change-transform
                       transition-all duration-200"
            whileHover={{
              scale: 1.04,
              boxShadow: "0 16px 40px -8px rgba(244, 168, 154, 0.4)",
            }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: "spring", stiffness: 300, damping: 22 }}
          >
            Let&rsquo;s Build Together
            <ArrowUpRight
              size={16}
              className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200"
            />
          </motion.a>

          <motion.a
            href="/approach"
            id="about-hero-cta-secondary"
            aria-label="See our approach"
            className="inline-flex items-center justify-center gap-2
                       rounded-full border-2 border-evren-navy-light text-evren-navy
                       font-heading font-semibold px-8 py-4 text-sm w-full sm:w-auto
                       will-change-transform transition-all duration-200
                       hover:bg-evren-navy-light hover:text-white"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: "spring", stiffness: 300, damping: 22 }}
          >
            See Our Approach
          </motion.a>
        </motion.div>
      </motion.div>

      {/* ── Bottom fade gradient ──────────────────────────────────── */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-evren-warm-white to-transparent z-[5] pointer-events-none" />
    </section>
  );
}

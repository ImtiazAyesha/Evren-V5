"use client";

import { useRef } from "react";
import Image from "next/image";
import {
  motion,
  useInView,
  useScroll,
  useTransform,
  type Variants,
} from "framer-motion";
import { ArrowRight, Activity } from "lucide-react";

// ═══════════════════════════════════════════════════════════════════════
//  MOTION VARIANTS
// ═══════════════════════════════════════════════════════════════════════

const SPRING = { type: "spring" as const, stiffness: 100, damping: 20 };
const SPRING_SNAPPY = { type: "spring" as const, stiffness: 140, damping: 22 };

/** Headline word — staggered mask reveal */
const headlineContainerVariants: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.06, delayChildren: 0.05 },
  },
};

const headlineWordVariants: Variants = {
  hidden: { y: "110%", opacity: 0 },
  visible: {
    y: "0%",
    opacity: 1,
    transition: { ...SPRING, duration: 0.55 },
  },
};

/** Subheadline — fade in + slide up */
const subheadlineVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { ...SPRING, delay: 0.3, duration: 0.6 },
  },
};

/** CTA container & items */
const ctaContainerVariants: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1, delayChildren: 0.5 },
  },
};

const ctaItemVariants: Variants = {
  hidden: { opacity: 0, y: 16, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: SPRING_SNAPPY,
  },
};

/** Product visual — premium entrance */
const visualVariants: Variants = {
  hidden: { opacity: 0, y: 40, scale: 0.96 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.9,
      delay: 0.35,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

// ═══════════════════════════════════════════════════════════════════════
//  HEADLINE TEXT
// ═══════════════════════════════════════════════════════════════════════

const HEADLINE_LINE_1 = "We Build Intelligence".split(" ");
const HEADLINE_LINE_2 = "Into Your Business Operations".split(" ");

// ═══════════════════════════════════════════════════════════════════════
//  PRODUCT SCREEN — Live iframe of the AI Studio dashboard
// ═══════════════════════════════════════════════════════════════════════

function ProductScreen() {
  return (
    <motion.div
      variants={visualVariants}
      className="relative w-full lg:pl-10 lg:pt-10"
    >
      {/* Decorative background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-tr from-[#0ABAB5]/10 to-indigo-500/10 blur-[120px] -z-10 rounded-full pointer-events-none" />

      <div
        className="relative overflow-hidden rounded-l-2xl border border-slate-200/60 bg-white"
        style={{
          boxShadow:
            "0 32px 80px rgba(0,0,0,0.08), 0 8px 32px rgba(0,0,0,0.04)",
          marginTop: "3rem",
        }}
      >
        {/* macOS style traffic lights */}
        <div className="flex items-center gap-2 px-4 py-3 border-b border-slate-100 bg-slate-50/80 backdrop-blur-sm">
          <div className="flex gap-1.5 shrink-0">
            <div className="w-2.5 h-2.5 rounded-full bg-[#FF5F56] border border-[#E0443E]" />
            <div className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E] border border-[#DEA123]" />
            <div className="w-2.5 h-2.5 rounded-full bg-[#27C93F] border border-[#1AAB29]" />
          </div>
          <div className="flex-1 flex justify-center mr-10">
            <div className="flex items-center justify-center rounded-md bg-white/80 px-12 sm:px-24 py-1.5 shadow-sm ring-1 ring-slate-200/50">
              <span className="text-[10px] sm:text-xs font-medium text-slate-400 font-inter tracking-wide flex items-center gap-1.5">
                <Activity size={12} className="text-[#0ABAB5]" />
                evren.ai/studio/workspace
              </span>
            </div>
          </div>
        </div>

        <Image
          src="/Product 1.png"
          alt="Evren AI Product Dashboard — Healthcare Analytics & AI Platform"
          width={1920}
          height={1200}
          className="w-full h-auto block"
          priority
          sizes="(max-width: 1024px) 100vw, 60vw"
        />
      </div>
    </motion.div>
  );
}

// ═══════════════════════════════════════════════════════════════════════
//  HERO SECTION — PREMIUM CONVERSION-OPTIMIZED SPLIT LAYOUT
// ═══════════════════════════════════════════════════════════════════════

export default function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const textContainerRef = useRef<HTMLDivElement>(null);

  const isInView = useInView(textContainerRef, {
    once: true,
    margin: "-100px",
  });

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const contentY = useTransform(scrollYProgress, [0, 0.5], [0, 40]);
  const visualY = useTransform(scrollYProgress, [0, 0.5], [0, -30]);

  // Scroll-linked parallax for background orbs (inspired by ConversionSection)
  const orbY1 = useTransform(scrollYProgress, [0, 1], [60, -60]);
  const orbY2 = useTransform(scrollYProgress, [0, 1], [-30, 50]);
  const orbScale = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [0.9, 1.1, 0.95]
  );

  return (
    <section
      ref={sectionRef}
      id="hero"
      className="relative w-full overflow-hidden bg-white"
      style={{ minHeight: "600px", willChange: "transform" }}
    >
      {/* ── Scroll-linked parallax background orbs ──────────────── */}
      <motion.div
        className="absolute top-[-10%] left-[-5%] w-[600px] h-[600px] rounded-full pointer-events-none z-0"
        style={{
          y: orbY1,
          scale: orbScale,
          background:
            "radial-gradient(circle, rgba(10,186,181,0.06) 0%, transparent 70%)",
          filter: "blur(80px)",
        }}
      />
      <motion.div
        className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] rounded-full pointer-events-none z-0"
        style={{
          y: orbY2,
          background:
            "radial-gradient(circle, rgba(8,145,178,0.04) 0%, transparent 70%)",
          filter: "blur(100px)",
        }}
      />

      {/* ── Subtle grid background ───────────────────────────────── */}
      <div
        className="absolute inset-0 pointer-events-none z-0"
        style={{
          backgroundSize: "48px 48px",
          backgroundImage:
            "linear-gradient(to right, rgba(15,23,42,0.03) 1px, transparent 1px), linear-gradient(to bottom, rgba(15,23,42,0.03) 1px, transparent 1px)",
          maskImage:
            "radial-gradient(ellipse 80% 70% at 50% 40%, black 30%, transparent 100%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 80% 70% at 50% 40%, black 30%, transparent 100%)",
        }}
      />

      {/* ── Main Split Layout ─ Left contained, Right bleeds to edge ─ */}
      <div className="relative z-10 w-full lg:min-h-[90vh] flex items-center">
        <div className="w-full flex flex-col lg:flex-row items-center gap-8 lg:gap-0">
          {/* ═══════════════════════════════════════════════
              LEFT COLUMN — Content (contained)
          ═══════════════════════════════════════════════ */}
          <motion.div
            ref={textContainerRef}
            className="w-full lg:w-[55%] shrink-0 flex flex-col px-6 lg:pl-[max(2rem,calc((100vw-1280px)/2+2rem))] lg:pr-12 py-20 lg:py-0"
            style={{ y: contentY }}
          >
            {/* Eyebrow Status Badge */}
            <motion.div
              variants={subheadlineVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className="mb-8 inline-flex self-start items-center gap-2.5 rounded-full border border-teal-200/50 bg-teal-50/50 px-3.5 py-1.5 backdrop-blur-md shadow-sm"
            >
              <div className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-teal-400 opacity-75"></span>
                <span className="relative inline-flex h-2 w-2 rounded-full bg-teal-500"></span>
              </div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-teal-800">
                The Global Standard For Enterprise AI
              </span>
            </motion.div>

            {/* Headline — mask reveal per word */}
            <motion.h1
              variants={headlineContainerVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className="font-jakarta font-extrabold leading-[1.08] tracking-[-0.02em] mb-6"
              style={{ color: "#0F172A" }}
            >
              {/* Line 1 — dark */}
              <span className="block -ml-[2px]">
                {HEADLINE_LINE_1.map((word, i) => (
                  <span
                    key={`l1-${i}`}
                    className="inline-block overflow-hidden align-bottom pb-[6px]"
                  >
                    <motion.span
                      variants={headlineWordVariants}
                      className="inline-block will-change-transform text-[2.75rem] md:text-[3.25rem] lg:text-[4rem]"
                      style={{ paddingRight: "0.22em" }}
                    >
                      {word}
                    </motion.span>
                  </span>
                ))}
              </span>

              {/* Line 2 — teal gradient */}
              <span className="block -ml-[2px]">
                {HEADLINE_LINE_2.map((word, i) => (
                  <span
                    key={`l2-${i}`}
                    className="inline-block overflow-hidden align-bottom pb-[6px]"
                  >
                    <motion.span
                      variants={headlineWordVariants}
                      className="inline-block will-change-transform text-[2.75rem] md:text-[3.25rem] lg:text-[4rem] text-transparent bg-clip-text bg-gradient-to-r from-[#0ABAB5] to-teal-400"
                      style={{ paddingRight: "0.22em" }}
                    >
                      {word}
                    </motion.span>
                  </span>
                ))}
              </span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              variants={subheadlineVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className="font-inter text-lg lg:text-xl leading-[1.65] mb-10"
              style={{
                color: "#475569",
                maxWidth: "580px",
                fontWeight: 400,
              }}
            >
              Stop experimenting with disjointed tools. Start driving measurable ROI with our end-to-end enterprise intelligence platform, engineered for security and scale.
            </motion.p>

            {/* CTAs */}
            <motion.div
              variants={ctaContainerVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4"
            >
              {/* Primary CTA */}
              <motion.a
                variants={ctaItemVariants}
                href="#contact"
                id="hero-cta-primary"
                aria-label="Start your project with Evren AI"
                className="group inline-flex h-14 items-center justify-center gap-2 rounded-xl font-inter text-sm font-bold text-white will-change-transform transition-colors"
                style={{
                  backgroundColor: "#0F172A",
                  padding: "0 2rem",
                }}
                whileHover={{
                  y: -3,
                  boxShadow: "0 12px 28px rgba(15, 23, 42, 0.25)",
                }}
                whileTap={{ scale: 0.98, y: 0 }}
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 20,
                }}
              >
                Book a Strategy Call
                <ArrowRight
                  size={16}
                  className="text-[#0ABAB5] group-hover:translate-x-1 transition-transform duration-200"
                />
              </motion.a>

              {/* Secondary CTA */}
              <motion.a
                variants={ctaItemVariants}
                href="#transformation-proof"
                id="hero-cta-secondary"
                aria-label="View our case studies"
                className="group inline-flex h-14 items-center justify-center gap-2 rounded-xl font-inter text-sm font-semibold will-change-transform transition-all duration-200"
                style={{
                  backgroundColor: "transparent",
                  border: "1.5px solid #E2E8F0",
                  color: "#334155",
                  padding: "0 2rem",
                }}
                whileHover={{
                  borderColor: "#0ABAB5",
                  color: "#0ABAB5",
                  y: -2,
                  backgroundColor: "rgba(10, 186, 181, 0.04)",
                }}
                whileTap={{ scale: 0.97 }}
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 20,
                }}
              >
                View Case Studies
                <Activity
                  size={14}
                  className="transition-transform group-hover:scale-110"
                />
              </motion.a>
            </motion.div>
          </motion.div>

          {/* ═══════════════════════════════════════════════
              RIGHT COLUMN — Product Visual (bleeds to right edge)
          ═══════════════════════════════════════════════ */}
          <motion.div
            className="w-full lg:w-[45%] shrink-0 flex items-center overflow-hidden"
            style={{ y: visualY }}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <div className="w-full py-8 lg:py-12 lg:pr-0 lg:pl-8">
              <ProductScreen />
            </div>
          </motion.div>
        </div>
      </div>

      {/* ── Bottom fade gradient ──────────────────────────────────── */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent z-[5] pointer-events-none" />
    </section>
  );
}

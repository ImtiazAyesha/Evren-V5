"use client";

import { useRef } from "react";
import { motion, useInView, type Variants } from "framer-motion";

// ═══════════════════════════════════════════════════════════════════════
//  MOTION CONFIG
// ═══════════════════════════════════════════════════════════════════════

const SPRING = { type: "spring" as const, stiffness: 100, damping: 20 };

const headerStagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.05 } },
};

const headerItem: Variants = {
  hidden: { opacity: 0, y: 24, filter: "blur(4px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { ...SPRING },
  },
};

const cardReveal: Variants = {
  hidden: { opacity: 0, y: 24, filter: "blur(4px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { ...SPRING },
  },
};

// ═══════════════════════════════════════════════════════════════════════
//  PHASE DATA
// ═══════════════════════════════════════════════════════════════════════

interface Phase {
  number: string;
  title: string;
  description: string;
}

const PHASES: Phase[] = [
  {
    number: "01",
    title: "Strategy & ROI Mapping",
    description:
      "Before writing a single line of code, we align the AI architecture directly with your P&L goals. If it doesn't drive measurable efficiency or revenue, we don't build it.",
  },
  {
    number: "02",
    title: "UX/UI & Technical Architecture",
    description:
      "We design the human-computer interaction layer while simultaneously mapping the backend data pipelines, ensuring your complex data feels intuitive to the end-user.",
  },
  {
    number: "03",
    title: "AI-Native Engineering",
    description:
      "Our elite engineers execute with surgical precision, building robust, scalable applications embedded with proprietary autonomous agents and machine learning models.",
  },
  {
    number: "04",
    title: "Enterprise Deployment & Scale",
    description:
      "Frictionless rollout into your existing infrastructure. We provide continuous monitoring, security compliance (HIPAA, SOC2), and capability scaling as your user base grows.",
  },
];

// ═══════════════════════════════════════════════════════════════════════
//  PHASE CARD
// ═══════════════════════════════════════════════════════════════════════

function PhaseCard({
  phase,
  isLast,
}: {
  phase: Phase;
  isLast: boolean;
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(cardRef, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={cardRef}
      variants={cardReveal}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className="relative pl-10 sm:pl-14"
    >
      {/* ── Timeline Elements ─── */}

      {/* Vertical line */}
      {!isLast && (
        <div className="absolute left-[11px] sm:left-[15px] top-10 bottom-0 w-px bg-gradient-to-b from-slate-200 to-slate-100" />
      )}

      {/* Dot on the timeline */}
      <div className="absolute left-[7px] sm:left-[9px] top-3.5">
        <motion.div
          className="w-3 h-3 rounded-full"
          initial={{ backgroundColor: "rgb(203, 213, 225)" }}
          animate={
            isInView
              ? { backgroundColor: "rgb(129, 216, 208)" }
              : { backgroundColor: "rgb(203, 213, 225)" }
          }
          transition={{ duration: 0.5, ease: "easeOut" }}
        />
      </div>

      {/* ── Card Content ─── */}
      <div className={`pb-20 sm:pb-28 ${isLast ? "pb-0 sm:pb-0" : ""}`}>
        {/* Phase Number — large, faded watermark */}
        <span className="block text-6xl sm:text-7xl font-bold text-slate-100 font-jakarta leading-none select-none -mb-4 sm:-mb-5">
          {phase.number}
        </span>

        {/* Phase Title */}
        <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-3 sm:mb-4 font-jakarta tracking-tight">
          {phase.title}
        </h3>

        {/* Phase Description */}
        <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-inter max-w-lg">
          {phase.description}
        </p>
      </div>
    </motion.div>
  );
}

// ═══════════════════════════════════════════════════════════════════════
//  METHODOLOGY SECTION
// ═══════════════════════════════════════════════════════════════════════

export default function MethodologySection() {
  const headerRef = useRef<HTMLDivElement>(null);
  const headerInView = useInView(headerRef, { once: true, margin: "-60px" });

  return (
    <section
      id="methodology"
      className="relative w-full py-24 md:py-32 bg-slate-50"
    >
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-16">
          {/* ═══════════════════════════════════════════════════════
               LEFT COLUMN — Sticky Header
               ═══════════════════════════════════════════════════════ */}
          <motion.div
            ref={headerRef}
            variants={headerStagger}
            initial="hidden"
            animate={headerInView ? "visible" : "hidden"}
            className="md:col-span-5 md:sticky md:top-32 md:self-start"
          >
            {/* Subheading */}
            <motion.span
              variants={headerItem}
              className="inline-block text-[11px] sm:text-sm font-semibold uppercase tracking-[0.2em] text-tiffany font-inter mb-5"
            >
              Engineering Methodology
            </motion.span>

            {/* Headline */}
            <motion.h2
              variants={headerItem}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.05] tracking-tight text-slate-900 font-jakarta"
            >
              We Don&apos;t Guess. We Engineer for{" "}
              <span className="text-tiffany">Outcomes.</span>
            </motion.h2>

            {/* Supporting paragraph */}
            <motion.p
              variants={headerItem}
              className="text-lg text-slate-600 mt-6 leading-relaxed font-inter max-w-md"
            >
              Our 4-phase deployment framework is designed to eliminate
              technical debt, ensure ethical AI compliance, and guarantee
              frictionless integration into your existing enterprise stack.
            </motion.p>
          </motion.div>

          {/* ═══════════════════════════════════════════════════════
               RIGHT COLUMN — Scrolling Phase Cards
               ═══════════════════════════════════════════════════════ */}
          <div className="md:col-span-7">
            {PHASES.map((phase, i) => (
              <PhaseCard
                key={phase.number}
                phase={phase}
                isLast={i === PHASES.length - 1}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

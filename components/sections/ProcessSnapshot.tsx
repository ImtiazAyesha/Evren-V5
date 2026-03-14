"use client";

import { useRef } from "react";
import { motion, useInView, type Variants } from "framer-motion";
import { Search, Code, Rocket } from "lucide-react";

// ═══════════════════════════════════════════════════════════════════════
//  MOTION VARIANTS
// ═══════════════════════════════════════════════════════════════════════

const headerFade: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

const lineGrow: Variants = {
  hidden: { scaleX: 0 },
  visible: {
    scaleX: 1,
    transition: { duration: 1.4, ease: [0.22, 1, 0.36, 1], delay: 0.2 },
  },
};

const lineGrowVertical: Variants = {
  hidden: { scaleY: 0 },
  visible: {
    scaleY: 1,
    transition: { duration: 1.4, ease: [0.22, 1, 0.36, 1], delay: 0.2 },
  },
};

const nodePop = (delay: number): Variants => ({
  hidden: { opacity: 0, scale: 0.3 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 200,
      damping: 18,
      delay,
    },
  },
});

const cardSlideUp = (delay: number): Variants => ({
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 80,
      damping: 16,
      delay,
    },
  },
});

// ═══════════════════════════════════════════════════════════════════════
//  PHASE DATA
// ═══════════════════════════════════════════════════════════════════════

const PHASES = [
  {
    number: "01",
    title: "Discover",
    body: "We immerse ourselves in your world. Through technical discovery and data modeling, we blueprint how AI will fundamentally improve your product.",
    icon: Search,
    nodeBg: "bg-evren-navy",
    nodeText: "text-white",
    delay: 0.3,
  },
  {
    number: "02",
    title: "Build",
    body: "Agile, two-week sprints. You see working code immediately. Intelligence and ML models are woven into the architecture from sprint one.",
    icon: Code,
    nodeBg: "bg-evren-peach",
    nodeText: "text-evren-navy",
    delay: 0.7,
  },
  {
    number: "03",
    title: "Scale",
    body: "Our success is measured by your independence. We deploy the product, optimize performance, and transfer all knowledge to your internal team.",
    icon: Rocket,
    nodeBg: "bg-evren-navy",
    nodeText: "text-white",
    delay: 1.1,
  },
];

// ═══════════════════════════════════════════════════════════════════════
//  PROCESS SNAPSHOT SECTION
// ═══════════════════════════════════════════════════════════════════════

export default function ProcessSnapshot() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section
      ref={sectionRef}
      id="process"
      className="relative w-full bg-evren-warm-white py-24 lg:py-32 overflow-hidden"
    >
      {/* ── Decorative Orb — bottom-left ──────────────────────────── */}
      <div
        className="absolute bottom-[-10%] left-[-5%] w-[450px] h-[450px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(244, 168, 154, 0.06) 0%, transparent 70%)",
          filter: "blur(90px)",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        {/* ── Section Header ─────────────────────────────────────── */}
        <motion.div
          className="text-center mb-16 lg:mb-20"
          variants={headerFade}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <p className="text-sm uppercase tracking-widest text-evren-peach font-bold mb-4">
            Our Methodology
          </p>
          <h2 className="text-3xl md:text-5xl text-evren-navy font-heading font-bold mb-6 leading-tight max-w-3xl mx-auto">
            How Ideas Become Intelligent Products.
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-evren-charcoal font-body">
            A deterministic, transparent process. AI is integrated from the
            first sprint, not retrofitted at the end.
          </p>
        </motion.div>

        {/* ── Timeline + Cards ────────────────────────────────────── */}
        <div className="relative">
          {/* ── Connecting Line (Desktop — horizontal) ──────────── */}
          <div className="hidden md:block absolute top-6 left-[8.33%] right-[8.33%] z-0">
            {/* Background line */}
            <div className="h-0.5 w-full bg-evren-navy-light/20 rounded-full" />
            {/* Animated peach overlay */}
            <motion.div
              className="h-0.5 bg-evren-peach rounded-full absolute top-0 left-0 w-full origin-left"
              variants={lineGrow}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
            />
          </div>

          {/* ── Connecting Line (Mobile — vertical) ─────────────── */}
          <div className="md:hidden absolute top-6 bottom-6 left-6 z-0 w-0.5">
            {/* Background line */}
            <div className="h-full w-full bg-evren-navy-light/20 rounded-full" />
            {/* Animated peach overlay */}
            <motion.div
              className="w-full bg-evren-peach rounded-full absolute top-0 left-0 h-full origin-top"
              variants={lineGrowVertical}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
            />
          </div>

          {/* ── Phase Cards Grid ────────────────────────────────── */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {PHASES.map((phase) => {
              const Icon = phase.icon;
              return (
                <div key={phase.number} className="relative z-10">
                  {/* ── Node Badge ──────────────────────────────── */}
                  <motion.div
                    className="flex items-center md:justify-center mb-0 md:mb-0"
                    variants={nodePop(phase.delay)}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                  >
                    {/* Mobile: position node on the vertical line */}
                    <div
                      className={`w-12 h-12 rounded-full ${phase.nodeBg} ${phase.nodeText} flex items-center justify-center font-bold font-heading text-xl shadow-warm z-10 relative`}
                    >
                      {phase.number}
                    </div>
                  </motion.div>

                  {/* ── Card ─────────────────────────────────────── */}
                  <motion.div
                    className="mt-6 bg-white p-8 rounded-studio shadow-warm relative
                               border-b-4 border-transparent
                               transition-all duration-300 ease-out
                               hover:-translate-y-2 hover:shadow-warm-hover hover:border-evren-peach
                               ml-16 md:ml-0"
                    variants={cardSlideUp(phase.delay + 0.15)}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                  >
                    {/* Icon accent */}
                    <div className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-evren-peach-light mb-4">
                      <Icon
                        size={20}
                        strokeWidth={1.5}
                        className="text-evren-navy"
                      />
                    </div>

                    <h3 className="text-2xl font-bold font-heading text-evren-navy mb-3">
                      {phase.title}
                    </h3>

                    <p className="text-evren-medium-gray font-body leading-relaxed text-[15px]">
                      {phase.body}
                    </p>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>

        {/* ── Global CTA ────────────────────────────────────────── */}
        <motion.div
          className="mt-16 text-center"
          variants={cardSlideUp(1.6)}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <a
            href="/approach"
            className="inline-block border-2 border-evren-navy text-evren-navy rounded-full px-8 py-3 font-semibold
                       hover:bg-evren-navy hover:text-white transition-colors duration-300"
          >
            Explore Our Full Approach
          </a>
        </motion.div>
      </div>
    </section>
  );
}

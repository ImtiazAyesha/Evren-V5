"use client";

import { useRef } from "react";
import {
  motion,
  useInView,
  useScroll,
  useTransform,
  type Variants,
} from "framer-motion";

// ═══════════════════════════════════════════════════════════════════════
//  MOTION
// ═══════════════════════════════════════════════════════════════════════

const stagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 90, damping: 18, duration: 0.7 },
  },
};

// ═══════════════════════════════════════════════════════════════════════
//  APPROACH HERO
// ═══════════════════════════════════════════════════════════════════════

export default function ApproachHero() {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(contentRef, { once: true, margin: "-80px" });

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const contentY = useTransform(scrollYProgress, [0, 0.5], [0, 30]);
  const orbY1 = useTransform(scrollYProgress, [0, 1], [40, -40]);
  const orbY2 = useTransform(scrollYProgress, [0, 1], [-20, 35]);

  return (
    <section
      ref={sectionRef}
      id="approach-hero"
      aria-label="Approach Hero"
      className="relative w-full overflow-hidden bg-evren-warm-white"
      style={{ minHeight: "600px" }}
    >
      {/* ── Decorative orbs ──────────────────────────────────────── */}
      <motion.div
        className="absolute top-[-10%] right-[-8%] w-[550px] h-[550px] rounded-full pointer-events-none z-0"
        style={{
          y: orbY1,
          background:
            "radial-gradient(circle, rgba(244, 168, 154, 0.12) 0%, transparent 70%)",
          filter: "blur(100px)",
        }}
      />
      <motion.div
        className="absolute bottom-[-12%] left-[-6%] w-[500px] h-[500px] rounded-full pointer-events-none z-0"
        style={{
          y: orbY2,
          background:
            "radial-gradient(circle, rgba(27, 42, 74, 0.06) 0%, transparent 70%)",
          filter: "blur(100px)",
        }}
      />

      {/* ── Subtle blueprint grid ────────────────────────────────── */}
      <div
        className="absolute inset-0 pointer-events-none z-0"
        style={{
          backgroundSize: "48px 48px",
          backgroundImage:
            "linear-gradient(to right, rgba(27, 42, 74, 0.025) 1px, transparent 1px), linear-gradient(to bottom, rgba(27, 42, 74, 0.025) 1px, transparent 1px)",
          maskImage:
            "radial-gradient(ellipse 80% 70% at 50% 40%, black 30%, transparent 100%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 80% 70% at 50% 40%, black 30%, transparent 100%)",
        }}
      />

      {/* ── Content ──────────────────────────────────────────────── */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-28 lg:py-40">
        <div className="flex items-center justify-center">
          <motion.div
            ref={contentRef}
            className="w-full max-w-4xl flex flex-col items-center text-center"
            style={{ y: contentY }}
            variants={stagger}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            {/* Eyebrow */}
            <motion.p
              variants={fadeUp}
              className="text-sm uppercase tracking-[0.25em] text-evren-peach font-bold font-heading mb-6"
            >
              Our Approach
            </motion.p>

            {/* H1 */}
            <motion.h1
              variants={fadeUp}
              className="font-heading font-extrabold text-evren-navy
                         text-5xl md:text-6xl lg:text-[72px] leading-[1.08] -tracking-tight mb-8"
            >
              Built to Scale.{" "}
              <span className="relative inline-block">
                <span className="relative z-10">Designed to Think.</span>
                {/* Wavy line decoration */}
                <svg
                  className="absolute -bottom-1 md:-bottom-2 left-0 w-full h-[10px] md:h-[14px]"
                  viewBox="0 0 200 12"
                  fill="none"
                  preserveAspectRatio="none"
                  aria-hidden="true"
                >
                  <path
                    d="M0 6 Q 16 0, 32 6 T 64 6 T 96 6 T 128 6 T 160 6 T 192 6 T 200 6"
                    stroke="#F4A89A"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    fill="none"
                    opacity="0.7"
                  />
                </svg>
              </span>
            </motion.h1>

            {/* Sub-headline — 2 lines */}
            <motion.p
              variants={fadeUp}
              className="font-body text-evren-charcoal text-lg md:text-xl
                         leading-relaxed max-w-2xl mx-auto mb-12"
              style={{ lineHeight: 1.65 }}
            >
              We bridge the gap between high-level innovation and hardened,
              scalable production code. Every system we architect is built to
              evolve—infusing enterprise-grade AI into the core of your product,
              not bolted on as an afterthought.
            </motion.p>

            {/* Decorative divider */}
            <motion.div
              variants={fadeUp}
              className="flex items-center gap-4"
            >
              <span className="block w-12 h-px bg-evren-peach/50" />
              <span className="block w-2 h-2 rounded-full bg-evren-peach" />
              <span className="block w-12 h-px bg-evren-peach/50" />
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* ── Bottom fade gradient ─────────────────────────────────── */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-evren-warm-white to-transparent z-[5] pointer-events-none" />
    </section>
  );
}

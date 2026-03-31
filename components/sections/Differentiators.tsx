"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useInView, type Variants } from "framer-motion";
import { Cpu, Users, Shield } from "lucide-react";

// ═══════════════════════════════════════════════════════════════════════
//  MOTION VARIANTS
// ═══════════════════════════════════════════════════════════════════════

const SPRING = { type: "spring" as const, stiffness: 90, damping: 18 };

const headerFade: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

const bentoContainer: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15, delayChildren: 0.1 },
  },
};

const bentoCell: Variants = {
  hidden: { opacity: 0, y: 40, scale: 0.96 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: SPRING,
  },
};

// ═══════════════════════════════════════════════════════════════════════
//  SECTION LABEL BADGE
// ═══════════════════════════════════════════════════════════════════════

function SectionLabel({ text }: { text: string }) {
  return (
    <span className="block text-[11px] font-heading font-semibold uppercase tracking-[0.2em] text-evren-peach/90 mb-3">
      {text}
    </span>
  );
}

// ═══════════════════════════════════════════════════════════════════════
//  COUNTER ANIMATION HOOK
// ═══════════════════════════════════════════════════════════════════════

function useCountUp(target: number, isInView: boolean, duration = 2000) {
  const [value, setValue] = useState(0);
  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const startTime = performance.now();
    const step = (now: number) => {
      const progress = Math.min((now - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      start = Math.round(eased * target);
      setValue(start);
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [isInView, target, duration]);
  return value;
}

// ═══════════════════════════════════════════════════════════════════════
//  DIFFERENTIATORS SECTION — BENTO GRID
// ═══════════════════════════════════════════════════════════════════════

export default function Differentiators() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-80px" });

  const projectCount = useCountUp(50, isInView);
  const satisfactionRate = useCountUp(98, isInView);

  return (
    <section
      ref={sectionRef}
      id="why-evren"
      className="relative w-full bg-evren-warm-white py-12 sm:py-16 lg:py-20 overflow-hidden"
    >
      {/* Decorative gradient orbs */}
      <div
        className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(244, 168, 154, 0.06) 0%, transparent 70%)",
          filter: "blur(100px)",
        }}
      />
      <div
        className="absolute bottom-[-15%] left-[-8%] w-[400px] h-[400px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(212, 165, 116, 0.05) 0%, transparent 70%)",
          filter: "blur(80px)",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ── Section Header ───────────────────────────────────── */}
        <motion.div
          className="mb-14 lg:mb-18 max-w-3xl"
          variants={headerFade}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <p className="text-sm uppercase tracking-widest text-evren-peach font-heading font-bold mb-4">
            Why Evren AI
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-[2.75rem] text-evren-navy font-heading font-bold leading-tight">
            Built to Scale.{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-evren-peach to-evren-rose">
              Designed to Think.
            </span>
          </h2>
          <p className="mt-4 text-evren-medium-gray font-body text-[15px] leading-relaxed max-w-xl">
            Three principles that set us apart each one woven into every project, every decision, every line of code.
          </p>
        </motion.div>

        {/* ── Asymmetric Bento Grid ────────────────────────────── */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-12 gap-5"
          variants={bentoContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* ═══ ROW 1 ═══════════════════════════════════════════ */}

          {/* ── CARD 1: AI-Native (Hero — 7 cols) ─────────────── */}
          <motion.div
            variants={bentoCell}
            whileHover={{ y: -4 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            className="md:col-span-7 md:row-span-1 group relative rounded-[24px] overflow-hidden
                       bg-evren-navy p-8 lg:p-10 flex flex-col justify-between
                       border border-evren-navy-light/30 cursor-pointer
                       transition-shadow duration-300
                       hover:shadow-[0_20px_60px_rgba(27,42,74,0.25)]"
          >
            {/* Background Icon */}
            <div className="absolute -top-16 -right-12 transform rotate-12 opacity-[0.08] group-hover:opacity-10 group-hover:scale-105 transition-all duration-700 ease-out pointer-events-none">
              <Cpu size={280} strokeWidth={0.7} className="text-white" />
            </div>

            <div className="relative z-10">
              <SectionLabel text="CORE ARCHITECTURE" />
              <h3 className="text-2xl lg:text-3xl font-heading font-bold text-white mt-2 mb-3 leading-tight">
                AI-Native by Design
              </h3>
              <p className="text-white/70 font-body text-[15px] leading-relaxed max-w-md">
                AI isn&apos;t a feature we bolt on at the end. It is woven into our
                architecture from day one, making your product fundamentally smarter.
              </p>
            </div>

          </motion.div>

          {/* ── CARD 2: Partnership (5 cols — matches hero height) */}
          <motion.div
            variants={bentoCell}
            whileHover={{ y: -4 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            className="md:col-span-5 md:row-span-1 group relative rounded-[24px] overflow-hidden
                       bg-white p-8 lg:p-10 flex flex-col justify-between
                       border border-evren-light-gray/40 cursor-pointer
                       shadow-warm transition-all duration-300
                       hover:shadow-warm-hover hover:border-evren-peach/30"
          >
            {/* Background Icon */}
            <div className="absolute -top-12 -right-12 transform -rotate-12 opacity-[0.03] group-hover:opacity-[0.06] group-hover:scale-105 transition-all duration-700 ease-out pointer-events-none">
              <Users size={240} strokeWidth={0.8} className="text-evren-navy" />
            </div>

            <div className="relative z-10">
              <SectionLabel text="PARTNERSHIP" />
              <h3 className="text-2xl lg:text-3xl font-heading font-bold text-evren-navy mt-2 mb-3 leading-tight">
                True Partnership
              </h3>
              <p className="text-evren-charcoal/80 font-body text-[15px] leading-relaxed max-w-sm">
                We don&apos;t just take orders. We embed in your vision, challenge
                assumptions, and build alongside your team as true collaborators not vendors.
              </p>
            </div>

          </motion.div>

          {/* ═══ ROW 2 ═══════════════════════════════════════════ */}

          {/* ── CARD 3: Built to Last (Full-width horizontal strip) */}
          <motion.div
            variants={bentoCell}
            whileHover={{ y: -4 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            className="md:col-span-12 group relative rounded-[24px] overflow-hidden
                       bg-gradient-to-br from-evren-peach-light/40 via-white to-white
                       p-8 lg:p-10 cursor-pointer
                       border border-evren-peach/20
                       transition-all duration-300
                       hover:shadow-[0_15px_40px_rgba(244,168,154,0.18)] hover:border-evren-peach/40"
          >
            {/* Background Icon */}
            <div className="absolute top-1/2 -translate-y-1/2 -right-12 md:right-16 transform -rotate-[5deg] opacity-[0.15] group-hover:opacity-[0.25] group-hover:scale-105 transition-all duration-700 ease-out pointer-events-none">
              <Shield size={260} strokeWidth={0.7} className="text-evren-peach" />
            </div>

            <div className="relative z-10">
              <SectionLabel text="SUSTAINABILITY" />
              <h3 className="text-2xl lg:text-3xl font-heading font-bold text-evren-navy mt-2 mb-3 leading-tight">
                Built to Last
              </h3>
              <p className="text-evren-charcoal/80 font-body text-[15px] leading-relaxed md:max-w-xl">
                Our goal is your independence. We ensure complete knowledge transfer
                so your team can own, scale, and evolve what we create long after the engagement ends.
              </p>
            </div>

          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

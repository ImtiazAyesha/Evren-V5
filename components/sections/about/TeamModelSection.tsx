"use client";

import { useRef } from "react";
import { motion, useInView, type Variants } from "framer-motion";
import { Users, Zap, Globe } from "lucide-react";

// ═══════════════════════════════════════════════════════════════════════
//  MOTION VARIANTS
// ═══════════════════════════════════════════════════════════════════════

const SPRING = { type: "spring" as const, stiffness: 100, damping: 20 };

const staggerContainer: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.06 } },
};

const fadeSlideUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { ...SPRING, duration: 0.6 },
  },
};

const fadeSlideRight: Variants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { ...SPRING, duration: 0.6 },
  },
};

const cardPop: Variants = {
  hidden: { opacity: 0, y: 20, scale: 0.97 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { ...SPRING, duration: 0.65 },
  },
};



// ═══════════════════════════════════════════════════════════════════════
//  TEAM MODEL — Split layout: narrative left, proof right
// ═══════════════════════════════════════════════════════════════════════

export default function TeamModelSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.15 });

  return (
    <section
      ref={sectionRef}
      id="team-model"
      className="relative w-full overflow-hidden bg-evren-warm-white py-12 lg:py-20"
    >
      {/* ── Background orbs ───────────────────────────────────────── */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        <div
          className="absolute -top-[12%] right-[5%] w-[500px] h-[500px] rounded-full mesh-blob"
          style={{
            background:
              "radial-gradient(circle, rgba(244, 168, 154, 0.14) 0%, rgba(244, 168, 154, 0.03) 50%, transparent 70%)",
            filter: "blur(45px)",
          }}
        />
        <div
          className="absolute -bottom-[10%] -left-[5%] w-[550px] h-[550px] rounded-full mesh-blob-2"
          style={{
            background:
              "radial-gradient(circle, rgba(212, 165, 116, 0.10) 0%, rgba(212, 165, 116, 0.02) 50%, transparent 70%)",
            filter: "blur(40px)",
          }}
        />
      </div>

      {/* ── Subtle grid ───────────────────────────────────────────── */}
      <div
        className="absolute inset-0 pointer-events-none z-0"
        style={{
          backgroundSize: "48px 48px",
          backgroundImage:
            "linear-gradient(to right, rgba(27, 42, 74, 0.02) 1px, transparent 1px), linear-gradient(to bottom, rgba(27, 42, 74, 0.02) 1px, transparent 1px)",
          maskImage:
            "radial-gradient(ellipse 60% 50% at 50% 50%, black 15%, transparent 75%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 60% 50% at 50% 50%, black 15%, transparent 75%)",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        {/* ═══════════════════════════════════════════════════════════
            SPLIT LAYOUT: Narrative (left)  ·  Stat cards (right)
        ═══════════════════════════════════════════════════════════ */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">

          {/* ── LEFT: Narrative column ─────────────────────────────── */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="lg:sticky lg:top-32"
          >
            {/* Section Tag */}
            <motion.p
              variants={fadeSlideRight}
              className="text-sm uppercase tracking-widest text-evren-peach font-heading font-bold mb-6"
            >
              Our Team
            </motion.p>

            {/* Headline */}
            <motion.h2
              variants={fadeSlideRight}
              className="font-heading font-extrabold text-evren-navy
                         text-3xl sm:text-4xl lg:text-[2.75rem] xl:text-5xl
                         leading-[1.1] -tracking-tight mb-7"
            >
              The agility of a studio.
              <br />
              The capacity of an{" "}
              <span className="relative inline-block">
                agency
                <svg
                  className="absolute -bottom-1 md:-bottom-2 left-0 w-full h-[8px] md:h-[12px] text-evren-peach pointer-events-none z-0"
                  viewBox="0 0 200 12"
                  preserveAspectRatio="none"
                  aria-hidden="true"
                >
                  <motion.g
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : {}}
                    transition={{ delay: 0.8, duration: 0.8 }}
                  >
                    <animateTransform 
                      attributeName="transform" 
                      type="translate" 
                      from="-64 0" 
                      to="0 0" 
                      dur="3s" 
                      repeatCount="indefinite" 
                    />
                    <path
                      d="M -64 6 Q -48 0, -32 6 T 0 6 T 32 6 T 64 6 T 96 6 T 128 6 T 160 6 T 192 6 T 224 6 T 256 6 T 288 6"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      fill="none"
                      opacity="0.6"
                    />
                  </motion.g>
                </svg>
              </span>
              .
            </motion.h2>

            {/* Body copy */}
            <motion.p
              variants={fadeSlideRight}
              className="font-body text-evren-charcoal/70 text-base md:text-lg leading-relaxed mb-5"
              style={{ lineHeight: 1.75 }}
            >
              Our team of engineers, designers, and strategists turn complex
              challenges into elegant, scalable solutions that grow alongside
              the businesses we serve.
            </motion.p>

            <motion.p
              variants={fadeSlideRight}
              className="font-body text-evren-charcoal/55 text-base md:text-[17px] leading-relaxed"
              style={{ lineHeight: 1.75 }}
            >
              Every person at Evren is a full-time specialist who has worked
              with the team long enough to think as one no freelancers, no
              outsourcing, no compromises.
            </motion.p>

          </motion.div>

          {/* ── RIGHT: Stat cards column (BENTO GRID) ──────────────── */}
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 gap-5"
            variants={staggerContainer}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            {/* ── Card 1: Core Team (Wide Navy Bento) ── */}
            <motion.div
              variants={cardPop}
              className="sm:col-span-2 group relative overflow-hidden
                         bg-evren-navy border border-evren-navy-light/30
                         rounded-[24px] p-7 lg:p-8 cursor-pointer
                         transition-all duration-300 ease-out
                         shadow-[0_20px_60px_rgba(27,42,74,0.1)] hover:-translate-y-1 hover:shadow-[0_20px_60px_rgba(27,42,74,0.2)]"
            >

              {/* Subtle background icon */}
              <div className="absolute -top-12 -right-8 transform -rotate-12 opacity-[0.03] group-hover:opacity-[0.05] group-hover:scale-105 transition-all duration-700 pointer-events-none">
                <Users size={260} className="text-white" />
              </div>

              <div className="relative z-10 flex flex-col md:flex-row md:items-start gap-6">
                <div className="shrink-0 w-14 h-14 rounded-full bg-white/10 flex items-center justify-center transition-colors duration-300 group-hover:bg-white/20">
                  <Users size={24} className="text-evren-peach" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex flex-col md:flex-row md:items-baseline gap-2 md:gap-4 mb-2">
                    <span className="font-heading font-extrabold text-white text-[2.75rem] lg:text-[3.25rem] -tracking-tight leading-none relative">
                      50+
                    </span>
                    <span className="font-heading font-semibold text-white/70 text-sm uppercase tracking-[0.08em]">
                      Core Team Members
                    </span>
                  </div>
                  <p className="font-body text-white/50 text-[15px] leading-relaxed max-w-sm">
                    Full-time specialists across engineering, design & strategy
                  </p>
                </div>
              </div>
            </motion.div>

            {/* ── Card 2: Projects (Square White Bento) ── */}
            <motion.div
              variants={cardPop}
              className="group relative overflow-hidden
                         bg-white border border-evren-light-gray/40
                         rounded-[24px] p-7 lg:p-8 cursor-pointer
                         transition-all duration-300 ease-out
                         shadow-none hover:shadow-warm-hover hover:-translate-y-1 hover:border-evren-peach/30"
            >
              {/* Subtle background icon */}
              <div className="absolute -top-8 -right-8 transform rotate-6 opacity-[0.02] group-hover:opacity-[0.04] group-hover:scale-105 transition-all duration-700 pointer-events-none">
                <Zap size={220} className="text-evren-navy" />
              </div>

              <div className="relative z-10 flex flex-col gap-6">
                <div className="shrink-0 w-12 h-12 rounded-full bg-evren-peach-light/50 flex items-center justify-center transition-colors duration-300 group-hover:bg-evren-peach-light">
                  <Zap size={22} className="text-evren-navy" />
                </div>
                <div className="flex flex-col">
                  <span className="font-heading font-extrabold text-evren-navy text-[2.5rem] lg:text-[2.75rem] -tracking-tight leading-none mb-2">
                    100+
                  </span>
                  <span className="font-heading font-semibold text-evren-navy/70 text-[11px] xl:text-xs uppercase tracking-[0.08em] mb-2 leading-tight">
                    Projects Delivered
                  </span>
                  <p className="font-body text-evren-charcoal/60 text-[13px] lg:text-sm leading-relaxed max-w-[90%]">
                    Enterprise-grade products shipped across 3 continents
                  </p>
                </div>
              </div>
            </motion.div>

            {/* ── Card 3: Global Offices (Peach Gradient Bento) ── */}
            <motion.div
              variants={cardPop}
              className="group relative overflow-hidden
                         bg-gradient-to-br from-[#FFF5F2] to-white border border-evren-peach/20
                         rounded-[24px] p-7 lg:p-8 cursor-pointer
                         transition-all duration-300 ease-out
                         shadow-none hover:shadow-[0_20px_40px_rgba(244,168,154,0.15)] hover:border-evren-peach/30 hover:-translate-y-1"
            >
              {/* Subtle background icon */}
              <div className="absolute -top-8 -right-8 transform -rotate-12 opacity-[0.03] group-hover:opacity-[0.06] group-hover:scale-105 transition-all duration-700 pointer-events-none">
                <Globe size={220} className="text-evren-peach" />
              </div>

              <div className="relative z-10 flex flex-col gap-6">
                <div className="shrink-0 w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-sm border border-evren-peach/10 transition-transform duration-300 group-hover:scale-105">
                  <Globe size={22} className="text-evren-peach font-bold" />
                </div>
                <div className="flex flex-col">
                  <span className="font-heading font-extrabold text-evren-navy text-[2.5rem] lg:text-[2.75rem] -tracking-tight leading-none mb-2">
                    2
                  </span>
                  <span className="font-heading font-semibold text-evren-navy/70 text-[11px] xl:text-xs uppercase tracking-[0.08em] mb-2 leading-tight">
                    Global Offices
                  </span>
                  <p className="font-body text-evren-charcoal/60 text-[13px] lg:text-sm leading-relaxed max-w-[90%]">
                    Houston & Dubai built for follow-the-sun delivery
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* ── Edge fades ────────────────────────────────────────────── */}
      <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-evren-warm-white to-transparent z-[5] pointer-events-none" />
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-evren-warm-white to-transparent z-[5] pointer-events-none" />
    </section>
  );
}

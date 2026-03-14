"use client";

import { useRef } from "react";
import { motion, useInView, type Variants } from "framer-motion";

// ═══════════════════════════════════════════════════════════════════════
//  MOTION
// ═══════════════════════════════════════════════════════════════════════

const fadeUp = (delay = 0): Variants => ({
  hidden: { opacity: 0, y: 36 },
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

const cardReveal = (delay = 0): Variants => ({
  hidden: { opacity: 0, y: 44, scale: 0.96 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 80,
      damping: 18,
      delay,
    },
  },
});

// ═══════════════════════════════════════════════════════════════════════
//  CUSTOM LINE-ART ICONS — Navy stroke on peach blob
// ═══════════════════════════════════════════════════════════════════════

function IconLLM() {
  return (
    <svg
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {/* LLM: Brain/network nodes */}
      <circle cx="20" cy="12" r="4" stroke="#1B2A4A" strokeWidth="1.5" />
      <circle cx="10" cy="26" r="4" stroke="#1B2A4A" strokeWidth="1.5" />
      <circle cx="30" cy="26" r="4" stroke="#1B2A4A" strokeWidth="1.5" />
      <circle cx="20" cy="34" r="3" stroke="#1B2A4A" strokeWidth="1.5" />
      <line x1="20" y1="16" x2="12" y2="23" stroke="#1B2A4A" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="20" y1="16" x2="28" y2="23" stroke="#1B2A4A" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="13" y1="28.5" x2="17.5" y2="32" stroke="#1B2A4A" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="27" y1="28.5" x2="22.5" y2="32" stroke="#1B2A4A" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function IconVision() {
  return (
    <svg
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {/* Computer Vision: Eye with scan lines */}
      <path
        d="M4 20C4 20 10 10 20 10C30 10 36 20 36 20C36 20 30 30 20 30C10 30 4 20 4 20Z"
        stroke="#1B2A4A"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="20" cy="20" r="5" stroke="#1B2A4A" strokeWidth="1.5" />
      <circle cx="20" cy="20" r="2" fill="#1B2A4A" />
      {/* Scan corners */}
      <path d="M10 14V11H13" stroke="#1B2A4A" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M30 14V11H27" stroke="#1B2A4A" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M10 26V29H13" stroke="#1B2A4A" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M30 26V29H27" stroke="#1B2A4A" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function IconPredictive() {
  return (
    <svg
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {/* Predictive Analytics: Trending chart with forecast line */}
      <polyline
        points="4,32 12,24 18,28 26,16 34,8"
        stroke="#1B2A4A"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Dashed future prediction */}
      <line
        x1="26"
        y1="16"
        x2="36"
        y2="6"
        stroke="#1B2A4A"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeDasharray="3 3"
      />
      {/* Data points */}
      <circle cx="12" cy="24" r="2" fill="#1B2A4A" />
      <circle cx="18" cy="28" r="2" fill="#1B2A4A" />
      <circle cx="26" cy="16" r="2" fill="#1B2A4A" />
      {/* Axis */}
      <line x1="2" y1="36" x2="38" y2="36" stroke="#1B2A4A" strokeWidth="1" />
      <line x1="2" y1="36" x2="2" y2="4" stroke="#1B2A4A" strokeWidth="1" />
    </svg>
  );
}

function IconWorkflow() {
  return (
    <svg
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {/* Workflow Automation: Gear + flow arrows */}
      <circle cx="14" cy="14" r="6" stroke="#1B2A4A" strokeWidth="1.5" />
      <circle cx="14" cy="14" r="2.5" stroke="#1B2A4A" strokeWidth="1.2" />
      {/* Gear teeth */}
      <line x1="14" y1="6" x2="14" y2="8" stroke="#1B2A4A" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="14" y1="20" x2="14" y2="22" stroke="#1B2A4A" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="6" y1="14" x2="8" y2="14" stroke="#1B2A4A" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="20" y1="14" x2="22" y2="14" stroke="#1B2A4A" strokeWidth="1.5" strokeLinecap="round" />
      {/* Flow arrows */}
      <path d="M24 14H32" stroke="#1B2A4A" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M14 24V30" stroke="#1B2A4A" strokeWidth="1.5" strokeLinecap="round" />
      <polyline points="29,11 32,14 29,17" stroke="#1B2A4A" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      <polyline points="11,27 14,30 17,27" stroke="#1B2A4A" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      {/* Target nodes */}
      <rect x="32" y="10" width="6" height="8" rx="2" stroke="#1B2A4A" strokeWidth="1.2" />
      <rect x="10" y="30" width="8" height="6" rx="2" stroke="#1B2A4A" strokeWidth="1.2" />
    </svg>
  );
}

// ═══════════════════════════════════════════════════════════════════════
//  PILLAR DATA
// ═══════════════════════════════════════════════════════════════════════

const PILLARS = [
  {
    title: "LLM Integration",
    body: "We architect production-grade LLM pipelines — from prompt engineering and RAG architectures to fine-tuning domain-specific models that deliver reliable, context-aware outputs at scale.",
    Icon: IconLLM,
    delay: 0,
  },
  {
    title: "Computer Vision",
    body: "Real-time image and video analysis pipelines built for edge and cloud. Object detection, OCR, document intelligence, and multi-modal reasoning tailored to your industry.",
    Icon: IconVision,
    delay: 0.1,
  },
  {
    title: "Predictive Analytics",
    body: "Transform historical data into forward-looking decisions. Time-series forecasting, anomaly detection, and recommendation engines built on your proprietary data moats.",
    Icon: IconPredictive,
    delay: 0.2,
  },
  {
    title: "Workflow Automation",
    body: "End-to-end intelligent automation — from document processing and data extraction to decision routing and compliance enforcement. Your ops team, amplified by AI agents.",
    Icon: IconWorkflow,
    delay: 0.3,
  },
];

// ═══════════════════════════════════════════════════════════════════════
//  AI-NATIVE DIFFERENCE SECTION
// ═══════════════════════════════════════════════════════════════════════

export default function AINativeDifference() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section
      ref={sectionRef}
      id="ai-native-difference"
      aria-label="The AI-Native Difference"
      className="relative w-full bg-evren-warm-white py-24 lg:py-32 overflow-hidden"
    >
      {/* ── Decorative Orbs ─────────────────────────────────────── */}
      <div
        className="absolute bottom-[-8%] left-[-5%] w-[400px] h-[400px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(244, 168, 154, 0.08) 0%, transparent 70%)",
          filter: "blur(100px)",
        }}
      />
      <div
        className="absolute top-[-5%] right-[-3%] w-[350px] h-[350px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(27, 42, 74, 0.04) 0%, transparent 70%)",
          filter: "blur(80px)",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        {/* ── Section header ────────────────────────────────────── */}
        <motion.div
          className="max-w-3xl mb-16 lg:mb-20"
          variants={fadeUp(0)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <p className="text-sm uppercase tracking-[0.25em] text-evren-peach font-bold font-heading mb-4">
            The Differentiation
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl text-evren-navy font-heading font-bold mb-6 leading-tight">
            The AI-Native Difference
          </h2>
          <p className="text-evren-charcoal font-body text-lg md:text-xl leading-relaxed">
            Most studios build a product and then ask:{" "}
            <em className="text-evren-medium-gray">
              &ldquo;Can we add AI to this?&rdquo;
            </em>{" "}
            At Evren, we start with AI. Intelligence isn&apos;t a feature we
            retrofit — it&apos;s the foundation we build on.
          </p>
        </motion.div>

        {/* ── 2×2 Card Grid ────────────────────────────────────── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {PILLARS.map((pillar) => {
            const PillarIcon = pillar.Icon;
            return (
              <motion.article
                key={pillar.title}
                className="group relative bg-white rounded-studio p-8 md:p-10 border border-evren-light-gray/60
                           transition-all duration-300 ease-out
                           hover:-translate-y-1.5 hover:shadow-warm-hover hover:border-evren-peach/40"
                variants={cardReveal(pillar.delay)}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {/* Icon with peach blob background */}
                <div className="relative w-16 h-16 mb-6">
                  {/* Peach background blob */}
                  <div className="absolute inset-0 bg-evren-peach-light rounded-2xl rotate-3 group-hover:rotate-6 transition-transform duration-300" />
                  <div className="relative z-10 w-full h-full flex items-center justify-center">
                    <PillarIcon />
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xl md:text-2xl font-heading font-bold text-evren-navy mb-3">
                  {pillar.title}
                </h3>

                {/* Body */}
                <p className="text-evren-charcoal font-body leading-relaxed text-[15px]">
                  {pillar.body}
                </p>

                {/* Hover accent bar */}
                <div className="absolute bottom-0 left-6 right-6 h-1 rounded-t-full bg-evren-peach scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

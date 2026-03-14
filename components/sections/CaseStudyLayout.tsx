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
import FinalCTA from "@/components/sections/FinalCTA";

// ═══════════════════════════════════════════════════════════════════════
//  MOTION CONFIG
// ═══════════════════════════════════════════════════════════════════════

const SPRING = { type: "spring" as const, stiffness: 100, damping: 20 };

const stagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 32, filter: "blur(4px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { ...SPRING },
  },
};

const lineReveal: Variants = {
  hidden: { opacity: 0, y: "110%" },
  visible: {
    opacity: 1,
    y: "0%",
    transition: { ...SPRING, duration: 0.6 },
  },
};

const scaleReveal: Variants = {
  hidden: { opacity: 0, scale: 0.88, y: 40 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { ...SPRING, stiffness: 80, damping: 18 },
  },
};

const gridStagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08, delayChildren: 0.2 } },
};

const gridItem: Variants = {
  hidden: { opacity: 0, x: -24, filter: "blur(4px)" },
  visible: {
    opacity: 1,
    x: 0,
    filter: "blur(0px)",
    transition: { ...SPRING },
  },
};



// ═══════════════════════════════════════════════════════════════════════
//  CASE STUDY DATA (Apex Construction — default)
// ═══════════════════════════════════════════════════════════════════════

const CASE_DATA = {
  client: "Apex Construction",
  product: "AI-Native Safety Portal",
  headline: "A 40% Incident Reduction Transformation.",
  coreMetric: "40%",
  coreMetricLabel: "Safety Incident Reduction",
  heroMockup: "/case-study-hero-mockup.png",
  macroDashboard: "/case-study-macro-dashboard.png",

  challenge: {
    title: "The Challenge",
    paragraphs: [
      "Apex Construction managed 24 active job sites across three states with zero centralized safety oversight. Incident reports lived inside paper binders, Excel sheets, and scattered email threads — creating a data chaos problem that turned every compliance audit into a 6-week scramble.",
      "Field supervisors logged incidents hours or days after occurrence, losing critical contextual detail. The disconnect between real-time site conditions and the corporate safety office meant that emerging risk patterns were invisible until after an incident escalated.",
      "The operational friction wasn't just an inconvenience — it was a liability. Apex needed a single pane of glass that could ingest multi-source field data, normalize it in real-time, and surface predictive risk signals before incidents materialized.",
    ],
  },

  cleanedData: [
    { field: "site_id", value: '"AX-024"', type: "string" },
    { field: "timestamp", value: '"2025-03-11T08:42:31Z"', type: "datetime" },
    { field: "risk_score", value: "0.87", type: "float" },
    { field: "zone", value: '"PERIMETER_EAST"', type: "string" },
    { field: "alert_type", value: '"FALL_HAZARD"', type: "enum" },
    { field: "confidence", value: "0.94", type: "float" },
    { field: "action", value: '"AUTO_ESCALATE"', type: "action" },
  ],

  specs: {
    stack: ["React", "Next.js", "Python", "FastAPI"],
    intelligence: ["Proprietary LLM", "Autonomous Agents"],
    compliance: ["HIPAA", "SOC2 Type II", "GDPR"],
    security: ["AES-256 Encryption", "Zero-Trust Architecture"],
  },
};

// ═══════════════════════════════════════════════════════════════════════
//  SECTION 1: HERO (Light Mode — The Hook)
// ═══════════════════════════════════════════════════════════════════════

function HeroSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section
      id="case-study-hero"
      className="relative w-full bg-white overflow-hidden"
    >
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-20 md:py-28 lg:py-32">
        <div
          ref={ref}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center"
        >
          {/* ── Left Column: Text ── */}
          <motion.div
            variants={stagger}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="space-y-0"
          >
            {/* Client x Evren subheading */}
            <motion.span
              variants={fadeUp}
              className="inline-block text-[11px] sm:text-[12px] font-bold uppercase tracking-[0.2em] text-cyan-500 font-inter mb-5"
            >
              {CASE_DATA.client} x Evren AI
            </motion.span>

            {/* Headline — staggered line reveals */}
            <div className="overflow-hidden mb-8">
              <motion.h1
                variants={stagger}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight text-slate-900 font-jakarta leading-[1.05]"
              >
                {CASE_DATA.product.split(" ").map((word, i) => (
                  <span
                    key={`p-${i}`}
                    className="inline-block overflow-hidden align-bottom pb-[4px]"
                  >
                    <motion.span
                      variants={lineReveal}
                      className="inline-block will-change-transform"
                      style={{ paddingRight: "0.3em" }}
                    >
                      {word}
                    </motion.span>
                  </span>
                ))}
                <br className="hidden sm:block" />
                {CASE_DATA.headline.split(" ").map((word, i) => (
                  <span
                    key={`h-${i}`}
                    className="inline-block overflow-hidden align-bottom pb-[4px]"
                  >
                    <motion.span
                      variants={lineReveal}
                      className="inline-block will-change-transform text-slate-400"
                      style={{ paddingRight: "0.3em" }}
                    >
                      {word}
                    </motion.span>
                  </span>
                ))}
              </motion.h1>
            </div>

            {/* Metric Card */}
            <motion.div
              variants={fadeUp}
              className="inline-flex items-center gap-5 bg-slate-50 border border-slate-200/60 rounded-xl px-6 py-4 shadow-[0_2px_12px_rgb(0,0,0,0.03)]"
            >
              <div className="text-4xl sm:text-5xl font-bold text-slate-900 font-serif tracking-tight leading-none" style={{ fontFamily: "'Playfair Display', serif" }}>
                {CASE_DATA.coreMetric}
              </div>
              <div className="h-10 w-px bg-slate-200" />
              <div className="text-sm sm:text-base font-medium text-slate-600 font-inter leading-tight max-w-[180px]">
                {CASE_DATA.coreMetricLabel}
              </div>
            </motion.div>
          </motion.div>

          {/* ── Right Column: Product Mockup ── */}
          <motion.div
            variants={scaleReveal}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="relative"
          >
            <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-[0_24px_60px_rgb(0,0,0,0.08)] border border-slate-200/40">
              <Image
                src={CASE_DATA.heroMockup}
                alt={`${CASE_DATA.product} - Product mockup`}
                width={950}
                height={950}
                className="w-full h-auto object-contain"
                priority
                unoptimized
              />
            </div>
            {/* Floating glow behind mockup */}
            <div className="absolute -inset-6 bg-gradient-to-tr from-cyan-100/30 via-transparent to-teal-100/20 rounded-3xl blur-2xl -z-10" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// ═══════════════════════════════════════════════════════════════════════
//  SECTION 2: CONTEXT & CHALLENGE (Light Mode — The Logic)
// ═══════════════════════════════════════════════════════════════════════

function ChallengeSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="case-study-challenge"
      className="relative w-full bg-white overflow-hidden border-t border-slate-100"
    >
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-24 md:py-32">
        <motion.div
          ref={ref}
          variants={stagger}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24"
        >
          {/* ── Left: Title ── */}
          <motion.div variants={fadeUp}>
            <h2
              className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 tracking-tight leading-[1.1]"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              {CASE_DATA.challenge.title}
            </h2>
            {/* Decorative accent line */}
            <div className="w-16 h-1 bg-cyan-500 mt-6 rounded-full" />
          </motion.div>

          {/* ── Right: Body Copy ── */}
          <div className="space-y-6">
            {CASE_DATA.challenge.paragraphs.map((para, i) => (
              <motion.p
                key={i}
                variants={fadeUp}
                className="text-lg sm:text-xl text-slate-600 leading-relaxed font-inter"
              >
                {para}
              </motion.p>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// ═══════════════════════════════════════════════════════════════════════
//  SECTION 3: PRODUCT SOLUTION GALLERY (Dark Mode — The Reveal)
// ═══════════════════════════════════════════════════════════════════════

function ProductSolutionGallery() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const macroRef = useRef<HTMLDivElement>(null);
  const engineRef = useRef<HTMLDivElement>(null);

  const macroInView = useInView(macroRef, { once: true, margin: "-100px" });
  const engineInView = useInView(engineRef, { once: true, margin: "-80px" });

  // Scale-up effect on scroll
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const macroScale = useTransform(scrollYProgress, [0, 0.3], [0.92, 1]);
  const macroOpacity = useTransform(scrollYProgress, [0, 0.25], [0, 1]);

  return (
    <section
      ref={sectionRef}
      id="case-study-solution"
      className="relative w-full bg-slate-950 overflow-hidden"
    >
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-28 md:py-36">
        {/* Section intro */}
        <motion.div
          variants={stagger}
          initial="hidden"
          animate={macroInView ? "visible" : "hidden"}
          className="text-center mb-16 md:mb-24"
        >
          <motion.span
            variants={fadeUp}
            className="inline-block text-[11px] sm:text-[12px] font-bold uppercase tracking-[0.2em] text-cyan-500 font-inter mb-5"
          >
            The Product
          </motion.span>
          <motion.h2
            variants={fadeUp}
            className="text-3xl sm:text-4xl md:text-6xl font-bold tracking-tight text-white font-jakarta leading-[1.05]"
          >
            Built to Replace Legacy.
            <br />
            <span className="text-slate-500">Designed to Scale.</span>
          </motion.h2>
        </motion.div>

        {/* ── Section A: Full-width Macro View ── */}
        <motion.div
          ref={macroRef}
          style={{ scale: macroScale, opacity: macroOpacity }}
          className="mb-20 md:mb-32 max-w-5xl mx-auto"
        >
          <div className="relative rounded-xl sm:rounded-2xl overflow-hidden border border-white/10 shadow-[0_24px_80px_rgb(0,0,0,0.5)]">
            {/* macOS Window Chrome */}
            <div className="h-9 sm:h-10 bg-slate-900 border-b border-white/5 flex items-center px-4 gap-2">
              <div className="h-3 w-3 rounded-full bg-[#FF5F57] shadow-[0_0_6px_rgba(255,95,87,0.6)]" />
              <div className="h-3 w-3 rounded-full bg-[#FFBD2E] shadow-[0_0_6px_rgba(255,189,46,0.6)]" />
              <div className="h-3 w-3 rounded-full bg-[#27C93F] shadow-[0_0_6px_rgba(39,201,63,0.6)]" />
              <span className="ml-3 text-[10px] sm:text-[11px] font-mono text-white/30 tracking-wider">
                APEX_SAFETY_PORTAL // LIVE
              </span>
            </div>
            <Image
              src={CASE_DATA.macroDashboard}
              alt="Apex Safety Portal — Primary Dashboard View"
              width={1024}
              height={1024}
              className="w-full h-auto object-contain"
              unoptimized
            />
          </div>
        </motion.div>

        {/* ── Section B: The Engine — Data → UI ── */}
        <motion.div
          ref={engineRef}
          variants={stagger}
          initial="hidden"
          animate={engineInView ? "visible" : "hidden"}
          className="space-y-8"
        >
          {/* Subheading */}
          <motion.div variants={fadeUp} className="text-center mb-10">
            <span className="inline-block text-[11px] sm:text-[12px] font-bold uppercase tracking-[0.2em] text-cyan-500 font-inter">
              Powered by the Evren Engine
            </span>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
            {/* Left: Cleaned Data */}
            <motion.div
              variants={scaleReveal}
              className="rounded-xl sm:rounded-2xl overflow-hidden border border-white/10 bg-slate-900"
            >
              <div className="h-9 sm:h-10 bg-slate-900/80 border-b border-white/5 flex items-center px-4 gap-2">
                <div className="h-2.5 w-2.5 rounded-full bg-cyan-500/70" />
                <span className="text-[10px] font-mono text-white/30 tracking-wider">
                  CLEANED_PAYLOAD.json
                </span>
              </div>
              <div className="p-4 sm:p-6 font-mono text-[11px] sm:text-[13px] leading-relaxed space-y-0.5 overflow-x-auto">
                <span className="text-white/30">{"{"}</span>
                {CASE_DATA.cleanedData.map((row, i) => (
                  <div key={i} className="pl-4">
                    <span className="text-cyan-400">&quot;{row.field}&quot;</span>
                    <span className="text-white/30">: </span>
                    <span
                      className={
                        row.type === "string" || row.type === "datetime" || row.type === "enum" || row.type === "action"
                          ? "text-emerald-400"
                          : "text-amber-400"
                      }
                    >
                      {row.value}
                    </span>
                    {i < CASE_DATA.cleanedData.length - 1 && (
                      <span className="text-white/30">,</span>
                    )}
                    <span className="text-white/15 ml-4 text-[10px]">
                      // {row.type}
                    </span>
                  </div>
                ))}
                <span className="text-white/30">{"}"}</span>
              </div>
            </motion.div>

            {/* Right: UI Output — Predictive Notification */}
            <motion.div
              variants={scaleReveal}
              className="rounded-xl sm:rounded-2xl overflow-hidden border border-white/10 bg-slate-900"
            >
              <div className="h-9 sm:h-10 bg-slate-900/80 border-b border-white/5 flex items-center px-4 gap-2">
                <div className="h-2.5 w-2.5 rounded-full bg-emerald-500/70 animate-pulse" />
                <span className="text-[10px] font-mono text-white/30 tracking-wider">
                  UI_RENDER // PREDICTIVE_ALERT
                </span>
              </div>
              <div className="p-4 sm:p-6 space-y-5">
                {/* Predictive alert card */}
                <div className="rounded-xl bg-gradient-to-br from-amber-500/10 to-red-500/5 border border-amber-500/20 p-4 sm:p-5">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-amber-500/20 flex items-center justify-center shrink-0">
                      <svg className="w-4 h-4 sm:w-5 sm:h-5 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z" />
                      </svg>
                    </div>
                    <div className="min-w-0">
                      <div className="text-[9px] sm:text-[10px] font-mono font-bold uppercase tracking-wider text-amber-400/80 mb-1">
                        PREDICTIVE ALERT — HIGH CONFIDENCE
                      </div>
                      <div className="text-sm sm:text-base font-semibold text-white font-jakarta mb-1.5">
                        Fall Hazard Detected — Zone: Perimeter East
                      </div>
                      <p className="text-xs sm:text-sm text-white/50 font-inter leading-relaxed">
                        Site AX-024 — Risk score 0.87 exceeds threshold. Auto-escalation triggered. Supervisor notified.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Mini chart representation */}
                <div className="rounded-xl bg-white/[0.03] border border-white/5 p-4">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[9px] sm:text-[10px] font-mono text-white/30 uppercase tracking-wider">
                      Risk Trend — AX-024
                    </span>
                    <span className="text-[9px] sm:text-[10px] font-mono text-cyan-400 font-semibold">
                      LIVE
                    </span>
                  </div>
                  <div className="flex items-end gap-[3px] h-16 sm:h-20">
                    {[20, 25, 30, 28, 40, 38, 50, 55, 60, 58, 72, 68, 78, 85, 87].map(
                      (h, i) => (
                        <div
                          key={i}
                          className="flex-1 rounded-t-sm transition-all duration-500"
                          style={{
                            height: `${h}%`,
                            backgroundColor:
                              h >= 80
                                ? "rgba(251, 191, 36, 0.8)"
                                : h >= 60
                                  ? "rgba(251, 191, 36, 0.4)"
                                  : "rgba(129, 216, 208, 0.3)",
                          }}
                        />
                      )
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// ═══════════════════════════════════════════════════════════════════════
//  SECTION 4: TECHNICAL FOUNDATION (Light Mode — The Trust)
// ═══════════════════════════════════════════════════════════════════════

const SPEC_CATEGORIES = [
  {
    title: "Stack",
    icon: (
      <svg className="w-5 h-5 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M6.429 9.75 2.25 12l4.179 2.25m0-4.5 5.571 3 5.571-3m-11.142 0L2.25 7.5 12 2.25l9.75 5.25-4.179 2.25m0 0L12 12.75l-5.571-3m11.142 0 4.179 2.25L12 17.25l-9.75-5.25 4.179-2.25m11.142 0 4.179 2.25L12 21.75l-9.75-5.25 4.179-2.25" />
      </svg>
    ),
    items: CASE_DATA.specs.stack,
  },
  {
    title: "Intelligence",
    icon: (
      <svg className="w-5 h-5 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 0 0-2.455 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z" />
      </svg>
    ),
    items: CASE_DATA.specs.intelligence,
  },
  {
    title: "Compliance",
    icon: (
      <svg className="w-5 h-5 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
      </svg>
    ),
    items: CASE_DATA.specs.compliance,
  },
  {
    title: "Security",
    icon: (
      <svg className="w-5 h-5 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z" />
      </svg>
    ),
    items: CASE_DATA.specs.security,
  },
];

function TechnicalFoundation() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="case-study-specs"
      className="relative w-full bg-white overflow-hidden"
    >
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-24 md:py-32">
        {/* Header */}
        <motion.div
          ref={ref}
          variants={stagger}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="mb-16 md:mb-20 max-w-xl"
        >
          <motion.span
            variants={fadeUp}
            className="inline-block text-[11px] sm:text-[12px] font-semibold uppercase tracking-[0.2em] text-slate-400 font-inter mb-5"
          >
            Technical Foundation
          </motion.span>
          <motion.h2
            variants={fadeUp}
            className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-slate-900 font-jakarta leading-[1.05]"
          >
            Specifications
          </motion.h2>
        </motion.div>

        {/* Spec Grid — 4 columns, stagger left-to-right */}
        <motion.div
          variants={gridStagger}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0 border border-slate-200 rounded-xl sm:rounded-2xl overflow-hidden"
        >
          {SPEC_CATEGORIES.map((cat, ci) => (
            <motion.div
              key={cat.title}
              variants={gridItem}
              className={`p-6 sm:p-8 ${
                ci < SPEC_CATEGORIES.length - 1
                  ? "border-b sm:border-b lg:border-b-0 lg:border-r border-slate-200"
                  : ""
              } ${ci === 1 ? "sm:border-r-0 lg:border-r border-slate-200" : ""}`}
            >
              {/* Icon + Title */}
              <div className="flex items-center gap-3 mb-5">
                {cat.icon}
                <h3 className="text-xs sm:text-[13px] font-bold uppercase tracking-[0.15em] text-slate-400 font-inter">
                  {cat.title}
                </h3>
              </div>

              {/* Items */}
              <ul className="space-y-3">
                {cat.items.map((item) => (
                  <li
                    key={item}
                    className="text-sm sm:text-[15px] font-semibold text-slate-800 font-jakarta tracking-tight"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}



// ═══════════════════════════════════════════════════════════════════════
//  MAIN EXPORT: CaseStudyLayout
// ═══════════════════════════════════════════════════════════════════════

export default function CaseStudyLayout() {
  return (
    <article>
      <HeroSection />
      <ChallengeSection />
      <ProductSolutionGallery />
      <TechnicalFoundation />
      <FinalCTA />
    </article>
  );
}

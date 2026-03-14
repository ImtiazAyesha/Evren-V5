"use client";

import { useRef } from "react";
import { motion, useInView, type Variants } from "framer-motion";
import { Search, Code, Rocket, CheckCircle2 } from "lucide-react";

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

const fadeIn = (delay = 0): Variants => ({
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1], delay },
  },
});

const scaleIn = (delay = 0): Variants => ({
  hidden: { opacity: 0, scale: 0.85 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 18,
      delay,
    },
  },
});

// ═══════════════════════════════════════════════════════════════════════
//  DISCOVER DIAGRAM — Data Model Blueprint SVG
// ═══════════════════════════════════════════════════════════════════════

function DiscoverDiagram() {
  return (
    <div className="relative w-full aspect-[4/3] bg-white rounded-studio shadow-warm overflow-hidden border border-evren-light-gray/60">
      {/* Decorative grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundSize: "24px 24px",
          backgroundImage:
            "linear-gradient(to right, rgba(27, 42, 74, 0.03) 1px, transparent 1px), linear-gradient(to bottom, rgba(27, 42, 74, 0.03) 1px, transparent 1px)",
        }}
      />

      <div className="relative z-10 p-6 md:p-8 flex flex-col h-full">
        {/* Title bar */}
        <div className="flex items-center gap-2 mb-6">
          <div className="w-3 h-3 rounded-full bg-evren-peach" />
          <div className="w-3 h-3 rounded-full bg-evren-gold/60" />
          <div className="w-3 h-3 rounded-full bg-evren-navy/20" />
          <span className="ml-3 text-xs font-mono text-evren-medium-gray tracking-wider uppercase">
            product_architecture.yml
          </span>
        </div>

        {/* Data model boxes */}
        <div className="flex-1 grid grid-cols-3 gap-3 md:gap-4">
          {/* User Flow */}
          <div className="col-span-2 bg-evren-peach-light/50 rounded-studio-sm p-4 flex flex-col justify-between border border-evren-peach/20">
            <div>
              <p className="text-[10px] font-mono text-evren-navy/50 uppercase tracking-wider mb-1">
                User Flow
              </p>
              <p className="text-sm font-heading font-semibold text-evren-navy">
                Journey Mapping
              </p>
            </div>
            <div className="flex gap-2 mt-3">
              {["Onboarding", "Core Loop", "Conversion"].map((t) => (
                <span
                  key={t}
                  className="px-2 py-1 rounded-full bg-white text-[10px] font-medium text-evren-navy border border-evren-peach/30"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* AI Feasibility */}
          <div className="bg-evren-navy/5 rounded-studio-sm p-4 flex flex-col justify-between border border-evren-navy/10">
            <p className="text-[10px] font-mono text-evren-navy/50 uppercase tracking-wider mb-1">
              AI Study
            </p>
            <p className="text-sm font-heading font-semibold text-evren-navy">
              Feasibility
            </p>
            <div className="mt-3 h-2 rounded-full bg-evren-navy/10 overflow-hidden">
              <div className="h-full w-3/4 rounded-full bg-evren-peach" />
            </div>
          </div>

          {/* Data Model */}
          <div className="col-span-3 bg-white rounded-studio-sm p-4 border border-evren-light-gray flex items-center gap-4">
            <div className="w-10 h-10 rounded-xl bg-evren-navy flex items-center justify-center shrink-0">
              <Search size={18} strokeWidth={1.5} className="text-white" />
            </div>
            <div className="flex-1">
              <p className="text-[10px] font-mono text-evren-navy/50 uppercase tracking-wider">
                Data Models
              </p>
              <p className="text-sm font-heading font-semibold text-evren-navy">
                Schema Design & Entity Mapping
              </p>
            </div>
            <div className="flex gap-1">
              {[1, 2, 3].map((n) => (
                <div
                  key={n}
                  className="w-6 h-6 rounded-md bg-evren-peach-light flex items-center justify-center text-[10px] font-mono font-bold text-evren-navy"
                >
                  {n}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ═══════════════════════════════════════════════════════════════════════
//  BUILD DIAGRAM — Sprint Timeline
// ═══════════════════════════════════════════════════════════════════════

function BuildDiagram() {
  return (
    <div className="relative w-full aspect-[4/3] bg-white rounded-studio shadow-warm overflow-hidden border border-evren-light-gray/60">
      {/* Grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundSize: "24px 24px",
          backgroundImage:
            "linear-gradient(to right, rgba(27, 42, 74, 0.03) 1px, transparent 1px), linear-gradient(to bottom, rgba(27, 42, 74, 0.03) 1px, transparent 1px)",
        }}
      />

      <div className="relative z-10 p-6 md:p-8 flex flex-col h-full">
        {/* Title bar */}
        <div className="flex items-center gap-2 mb-6">
          <div className="w-3 h-3 rounded-full bg-evren-peach" />
          <div className="w-3 h-3 rounded-full bg-evren-gold/60" />
          <div className="w-3 h-3 rounded-full bg-evren-navy/20" />
          <span className="ml-3 text-xs font-mono text-evren-medium-gray tracking-wider uppercase">
            sprint_cadence.log
          </span>
        </div>

        {/* Sprint blocks */}
        <div className="flex-1 flex flex-col gap-3">
          {[
            {
              sprint: "Sprint 1–2",
              label: "Foundation & Core AI",
              status: "AI-First Integration",
              highlight: true,
            },
            {
              sprint: "Sprint 3–4",
              label: "Feature Build & ML Pipelines",
              status: "Model Training",
              highlight: false,
            },
            {
              sprint: "Sprint 5–6",
              label: "Scale, Harden & Handover",
              status: "Deployment",
              highlight: false,
            },
          ].map((block) => (
            <div
              key={block.sprint}
              className={`flex items-center gap-4 rounded-studio-sm p-4 border transition-colors ${block.highlight
                  ? "bg-evren-peach-light/50 border-evren-peach/30"
                  : "bg-white border-evren-light-gray"
                }`}
            >
              <div
                className={`w-2 h-full min-h-[40px] rounded-full shrink-0 ${block.highlight ? "bg-evren-peach" : "bg-evren-navy/15"
                  }`}
              />
              <div className="flex-1">
                <p className="text-[10px] font-mono text-evren-navy/50 uppercase tracking-wider">
                  {block.sprint}
                </p>
                <p className="text-sm font-heading font-semibold text-evren-navy">
                  {block.label}
                </p>
              </div>
              <span
                className={`px-3 py-1 rounded-full text-[10px] font-semibold whitespace-nowrap ${block.highlight
                    ? "bg-evren-peach text-evren-navy"
                    : "bg-evren-navy/5 text-evren-navy/60"
                  }`}
              >
                {block.status}
              </span>
            </div>
          ))}

          {/* Progress bar */}
          <div className="mt-auto pt-4">
            <div className="flex items-center justify-between text-[10px] font-mono text-evren-medium-gray mb-2">
              <span>Week 1</span>
              <span>Week 12</span>
            </div>
            <div className="h-2 rounded-full bg-evren-navy/10 overflow-hidden">
              <div className="h-full w-2/3 rounded-full bg-gradient-to-r from-evren-peach to-evren-rose" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ═══════════════════════════════════════════════════════════════════════
//  SCALE DIAGRAM — Transfer & Ownership
// ═══════════════════════════════════════════════════════════════════════

function ScaleDiagram() {
  return (
    <div className="relative w-full aspect-[4/3] bg-white rounded-studio shadow-warm overflow-hidden border border-evren-light-gray/60">
      {/* Grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundSize: "24px 24px",
          backgroundImage:
            "linear-gradient(to right, rgba(27, 42, 74, 0.03) 1px, transparent 1px), linear-gradient(to bottom, rgba(27, 42, 74, 0.03) 1px, transparent 1px)",
        }}
      />

      <div className="relative z-10 p-6 md:p-8 flex flex-col h-full">
        {/* Title bar */}
        <div className="flex items-center gap-2 mb-6">
          <div className="w-3 h-3 rounded-full bg-evren-peach" />
          <div className="w-3 h-3 rounded-full bg-evren-gold/60" />
          <div className="w-3 h-3 rounded-full bg-evren-navy/20" />
          <span className="ml-3 text-xs font-mono text-evren-medium-gray tracking-wider uppercase">
            ownership_transfer.md
          </span>
        </div>

        {/* Transfer steps */}
        <div className="flex-1 flex flex-col gap-3">
          {[
            { label: "Full Codebase & Documentation", done: true },
            { label: "CI/CD Pipeline Handover", done: true },
            { label: "Architecture Decision Records", done: true },
            { label: "Team Enablement Workshops", done: false },
          ].map((step, i) => (
            <div
              key={i}
              className="flex items-center gap-3 p-3 rounded-studio-sm bg-white border border-evren-light-gray"
            >
              <CheckCircle2
                size={18}
                className={
                  step.done
                    ? "text-evren-peach shrink-0"
                    : "text-evren-navy/20 shrink-0"
                }
                fill={step.done ? "rgba(244, 168, 154, 0.2)" : "none"}
              />
              <span
                className={`text-sm font-body ${step.done
                    ? "text-evren-charcoal"
                    : "text-evren-medium-gray"
                  }`}
              >
                {step.label}
              </span>
            </div>
          ))}
        </div>

        {/* Completion gauge */}
        <div className="mt-4 flex items-center gap-3">
          <div className="flex-1 h-2 rounded-full bg-evren-navy/10 overflow-hidden">
            <div className="h-full w-[85%] rounded-full bg-evren-navy" />
          </div>
          <span className="text-sm font-heading font-bold text-evren-navy">
            85%
          </span>
        </div>
      </div>
    </div>
  );
}

// ═══════════════════════════════════════════════════════════════════════
//  PHASE DATA
// ═══════════════════════════════════════════════════════════════════════

interface Phase {
  number: string;
  title: string;
  eyebrow: string;
  body: string;
  deliverables: string[];
  icon: typeof Search;
  Diagram: () => React.JSX.Element;
  callout?: {
    text: string;
  };
}

const PHASES: Phase[] = [
  {
    number: "01",
    title: "Discover",
    eyebrow: "Product / Data Architecture",
    body: "Before a single line of code is written, we map your product's universe. Through deep technical discovery, we create a deterministic blueprint that defines how AI will fundamentally improve your product — not just decorate it.",
    deliverables: [
      "Data models & entity relationships",
      "User flows & journey maps",
      "AI feasibility studies & model selection",
    ],
    icon: Search,
    Diagram: DiscoverDiagram,
  },
  {
    number: "02",
    title: "Build",
    eyebrow: "2-Week Sprint Cadence",
    body: "Agile, two-week sprints with working deployments at the end of each cycle. You see progress immediately. Intelligence isn't an add-on — it's the core logic from Sprint 1. ML models, LLM pipelines, and data flows are woven into the architecture from the foundation.",
    deliverables: [
      "AI-First Integration from Sprint 1",
      "Working deployments every 2 weeks",
      "Continuous model training & optimization",
    ],
    icon: Code,
    Diagram: BuildDiagram,
  },
  {
    number: "03",
    title: "Scale",
    eyebrow: "Ownership & Transfer",
    body: "Our success is measured by your independence. We deploy the product, optimize for production performance, and systematically transfer all knowledge — code, documentation, and operational expertise — to your internal team.",
    deliverables: [
      "Infrastructure hardening & monitoring",
      "Complete documentation & ADRs",
      "Team enablement & knowledge transfer",
    ],
    icon: Rocket,
    Diagram: ScaleDiagram,
    callout: {
      text: "We build to enable your team, not to create dependency.",
    },
  },
];

// ═══════════════════════════════════════════════════════════════════════
//  METHODOLOGY SECTION
// ═══════════════════════════════════════════════════════════════════════

export default function MethodologySection() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section
      ref={sectionRef}
      id="methodology"
      aria-label="Our methodology"
      className="relative w-full bg-evren-warm-white py-24 lg:py-32 overflow-hidden"
    >
      {/* ── Decorative Orb ──────────────────────────────────────── */}
      <div
        className="absolute top-[-5%] right-[-8%] w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(212, 165, 116, 0.06) 0%, transparent 70%)",
          filter: "blur(100px)",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        {/* ── Section Header ───────────────────────────────────── */}
        <motion.div
          className="text-center mb-20 lg:mb-28"
          variants={fadeUp(0)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <p className="text-sm uppercase tracking-[0.25em] text-evren-peach font-bold font-heading mb-4">
            The Methodology
          </p>
          <h2 className="text-3xl md:text-5xl text-evren-navy font-heading font-bold mb-6 leading-tight max-w-3xl mx-auto">
            Three Pillars of Trust.
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-evren-charcoal font-body leading-relaxed">
            A transparent, phased process that gives you architectural
            visibility at every stage. No black boxes. No surprises.
          </p>
        </motion.div>

        {/* ── Alternating Phase Blocks ──────────────────────────── */}
        <div className="flex flex-col gap-24 lg:gap-32">
          {PHASES.map((phase, idx) => {
            const Icon = phase.icon;
            const PhDiagram = phase.Diagram;
            const isReversed = idx % 2 !== 0;

            return (
              <div
                key={phase.number}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center ${isReversed ? "lg:direction-rtl" : ""
                  }`}
              >
                {/* ── Diagram Side ──────────────────────────────── */}
                <motion.div
                  className={`${isReversed ? "lg:order-2" : "lg:order-1"}`}
                  variants={scaleIn(0.1)}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  <PhDiagram />
                </motion.div>

                {/* ── Text Side ─────────────────────────────────── */}
                <motion.div
                  className={`${isReversed ? "lg:order-1" : "lg:order-2"}`}
                  variants={fadeUp(0.2)}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  {/* Phase badge */}
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-11 h-11 rounded-xl bg-evren-peach-light flex items-center justify-center">
                      <Icon
                        size={20}
                        strokeWidth={1.5}
                        className="text-evren-navy"
                      />
                    </div>
                    <div>
                      <p className="text-[10px] font-mono text-evren-medium-gray uppercase tracking-[0.2em]">
                        Phase {phase.number}
                      </p>
                      <p className="text-xs font-heading font-semibold text-evren-navy">
                        {phase.eyebrow}
                      </p>
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-3xl md:text-4xl font-heading font-bold text-evren-navy mb-5 leading-tight">
                    {phase.title}
                  </h3>

                  {/* Body */}
                  <p className="text-evren-charcoal font-body leading-relaxed text-base md:text-[17px] mb-6">
                    {phase.body}
                  </p>

                  {/* Deliverables */}
                  <div className="flex flex-col gap-2.5 mb-6">
                    {phase.deliverables.map((d) => (
                      <div key={d} className="flex items-start gap-2.5">
                        <CheckCircle2
                          size={16}
                          className="text-evren-peach mt-0.5 shrink-0"
                        />
                        <span className="text-sm text-evren-charcoal font-body">
                          {d}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Callout box (Scale phase only) */}
                  {phase.callout && (
                    <motion.div
                      className="bg-evren-peach-light rounded-[16px] p-6 border-l-4 border-evren-peach"
                      variants={fadeIn(0.4)}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                    >
                      <p className="text-evren-navy font-heading font-bold text-base md:text-lg leading-snug">
                        &ldquo;{phase.callout.text}&rdquo;
                      </p>
                    </motion.div>
                  )}
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

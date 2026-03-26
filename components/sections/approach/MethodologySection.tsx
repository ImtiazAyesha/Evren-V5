"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useInView, AnimatePresence, type Variants } from "framer-motion";
import { Search, Code, Rocket, CheckCircle2 } from "lucide-react";

// ═══════════════════════════════════════════════════════════════════════
//  MOTION
// ═══════════════════════════════════════════════════════════════════════

const SPRING = { type: "spring" as const, stiffness: 100, damping: 20 };

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

const fadeSlideUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { ...SPRING, duration: 0.6 },
  },
};

// Tab content transition
const tabContentVariants: Variants = {
  initial: { opacity: 0, y: 16, filter: "blur(4px)" },
  animate: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { type: "spring", stiffness: 100, damping: 20, duration: 0.5 },
  },
  exit: {
    opacity: 0,
    y: -12,
    filter: "blur(4px)",
    transition: { duration: 0.25, ease: "easeIn" },
  },
};

// ═══════════════════════════════════════════════════════════════════════
//  PHASE VIDEO — autoplays from start on each tab activation
// ═══════════════════════════════════════════════════════════════════════

function PhaseVideo({ src }: { src: string }) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    video.currentTime = 0;
    video.play().catch(() => { });
  }, [src]);

  return (
    <div className="relative w-full aspect-[4/3] rounded-studio shadow-warm overflow-hidden border border-evren-light-gray/60 bg-white">
      <video
        ref={videoRef}
        src={src}
        autoPlay
        loop
        muted
        playsInline
        className="w-full h-full object-cover"
        style={{ display: "block" }}
      />
    </div>
  );
}

// ═══════════════════════════════════════════════════════════════════════
//  PHASE DATA
// ═══════════════════════════════════════════════════════════════════════

interface Phase {
  number: string;
  title: string;
  body: string;
  deliverables: string[];
  icon: typeof Search;
  video: string;
  callout?: {
    text: string;
  };
}

const PHASES: Phase[] = [
  {
    number: "01",
    title: "Discover & Align",
    body: "Before a single line of code is written, we map your product's universe. Through deep technical discovery, we create a deterministic blueprint that defines how AI will fundamentally improve your product — not just decorate it.",
    deliverables: [
      "Data models & entity relationships",
      "User flows & journey maps",
      "AI feasibility studies & model selection",
    ],
    icon: Search,
    video: "/Illustrations/Intelligence.mp4",
  },
  {
    number: "02",
    title: "Build",
    body: "Agile, two-week sprints with working deployments at the end of each cycle. You see progress immediately. Intelligence isn't an add-on — it's the core logic from Sprint 1. ML models, LLM pipelines, and data flows are woven into the architecture from the foundation.",
    deliverables: [
      "AI-First Integration from Sprint 1",
      "Working deployments every 2 weeks",
      "Continuous model training & optimization",
    ],
    icon: Code,
    video: "/Illustrations/Partnership.mp4",
  },
  {
    number: "03",
    title: "Scale",
    body: "Our success is measured by your independence. We deploy the product, optimize for production performance, and systematically transfer all knowledge — code, documentation, and operational expertise — to your internal team.",
    deliverables: [
      "Infrastructure hardening & monitoring",
      "Complete documentation & ADRs",
      "Team enablement & knowledge transfer",
    ],
    icon: Rocket,
    video: "/Illustrations/Knowledge.mp4",
    callout: {
      text: "We build to enable your team, not to create dependency.",
    },
  },
];

// ═══════════════════════════════════════════════════════════════════════
//  PHASE CONTENT COMPONENT
// ═══════════════════════════════════════════════════════════════════════

function PhaseContent({ active }: { active: Phase }) {
  const ActiveIcon = active.icon;
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-14 md:items-center">
      {/* ── Left Side (Text & Mobile Video) ── */}
      <div>
        {/* Title with fully rounded Icon directly */}
        <div className="flex items-center gap-4 mb-6 md:mb-8">
          <div className="w-12 h-12 rounded-full bg-evren-peach-light flex items-center justify-center shrink-0">
            <ActiveIcon
              size={22}
              strokeWidth={1.5}
              className="text-evren-navy"
            />
          </div>
          <div className="flex flex-col gap-1 md:gap-0">
            {/* Mobile Only: Phase Number aligned above title */}
            <p className="md:hidden text-[10px] font-mono text-evren-charcoal/70 uppercase tracking-[0.2em]">
              Phase {active.number}
            </p>
            <h3 className="text-3xl md:text-4xl font-heading font-bold text-evren-navy leading-tight">
              {active.title}
            </h3>
          </div>
        </div>

        {/* ── Video Side (MOBILE ONLY) ── */}
        <div className="md:hidden w-full mb-8">
          <PhaseVideo src={active.video} />
        </div>

        {/* Body */}
        <p className="text-evren-charcoal font-body leading-relaxed text-base md:text-[17px] mb-6">
          {active.body}
        </p>

        {/* Deliverables */}
        <div className="flex flex-col gap-2.5 mb-6">
          {active.deliverables.map((d) => (
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
        {active.callout && (
          <div className="bg-evren-peach-light rounded-[16px] p-6 border-l-4 border-evren-peach">
            <p className="text-evren-navy font-heading font-bold text-base md:text-lg leading-snug">
              &ldquo;{active.callout.text}&rdquo;
            </p>
          </div>
        )}
      </div>

      {/* ── Video Side (DESKTOP ONLY) ── */}
      <div className="hidden md:block">
        <PhaseVideo src={active.video} />
      </div>
    </div>
  );
}


// ═══════════════════════════════════════════════════════════════════════
//  METHODOLOGY SECTION
// ═══════════════════════════════════════════════════════════════════════

export default function MethodologySection() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const [activePhase, setActivePhase] = useState(0);

  // Auto-play loop for tabs & mobile slider
  useEffect(() => {
    const timer = setInterval(() => {
      setActivePhase((current) => (current + 1) % PHASES.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [activePhase]);

  const active = PHASES[activePhase];

  return (
    <section
      ref={sectionRef}
      id="methodology"
      aria-label="Our methodology"
      className="relative w-full bg-evren-warm-white py-12 lg:py-16 overflow-hidden"
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
          className="text-center mb-14 lg:mb-16"
          variants={fadeUp(0)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <p className="text-sm uppercase tracking-[0.25em] text-evren-peach font-bold font-heading mb-4">
            The Methodology
          </p>
          <h2 className="text-3xl md:text-5xl text-evren-navy font-heading font-bold mb-6 leading-tight max-w-3xl mx-auto">
            Three Pillars of{" "}
            <span className="relative inline-block">
              <span className="relative z-10">Trust.</span>
              <svg
                className="absolute -bottom-1 lg:-bottom-2 left-0 w-full h-[10px] md:h-[14px]"
                viewBox="0 0 200 12"
                fill="none"
                preserveAspectRatio="none"
                aria-hidden="true"
              >
                <g>
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
                    stroke="#F4A89A"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    fill="none"
                    opacity="0.7"
                  />
                </g>
              </svg>
            </span>
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-evren-charcoal font-body leading-relaxed">
            A transparent, phased process that gives you architectural visibility
            at every stage. No black boxes. No surprises.
          </p>
        </motion.div>

        {/* ── Tab Selector (Desktop/Tablet Only) ─────────────────── */}
        <motion.div
          className="mb-10 hidden md:block"
          variants={fadeSlideUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 max-w-3xl mx-auto">
            {PHASES.map((phase, idx) => {
              const PhaseIcon = phase.icon;
              const isActive = activePhase === idx;

              return (
                <button
                  key={phase.number}
                  onClick={() => setActivePhase(idx)}
                  className={`group relative flex-1 flex items-center gap-4 rounded-2xl p-4 sm:p-5
                             border-2 transition-all duration-300 ease-out text-left cursor-pointer
                             ${isActive
                      ? "bg-evren-peach-light/60 border-evren-peach/40 shadow-warm"
                      : "bg-white border-evren-light-gray hover:border-evren-peach/20 hover:shadow-sm hover:-translate-y-0.5"
                    }`}
                >
                  {/* Active indicator bar */}
                  <div
                    className={`absolute left-0 top-3 bottom-3 w-[3px] rounded-full transition-all duration-300
                               ${isActive ? "bg-evren-peach" : "bg-transparent"}`}
                  />

                  {/* Icon */}
                  <div
                    className={`w-11 h-11 rounded-full flex items-center justify-center shrink-0 transition-colors duration-300
                               ${isActive
                        ? "bg-evren-peach"
                        : "bg-evren-peach-light/50 group-hover:bg-evren-peach-light"
                      }`}
                  >
                    <PhaseIcon
                      size={20}
                      strokeWidth={1.5}
                      className={isActive ? "text-white" : "text-evren-navy"}
                    />
                  </div>

                  {/* Text */}
                  <div>
                    <p className="text-[10px] font-mono text-evren-medium-gray uppercase tracking-[0.2em] mb-0.5">
                      Phase {phase.number}
                    </p>
                    <p className="text-base font-heading font-bold text-evren-navy leading-tight">
                      {phase.title}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>
        </motion.div>

        {/* ── Active Phase Content Panel (All Screens) ──────────────── */}
        <motion.div
          variants={fadeSlideUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="w-full"
        >
          <div className="bg-white/60 backdrop-blur-sm rounded-3xl border border-evren-light-gray/60 p-6 sm:p-8 lg:p-10 shadow-warm overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={activePhase}
                variants={tabContentVariants}
                initial="initial"
                animate="animate"
                exit="exit"
              >
                <PhaseContent active={active} />
              </motion.div>
            </AnimatePresence>

            {/* ── Carousel Slider Navigation (Mobile Only) ── */}
            <div className="md:hidden flex items-center justify-center gap-2 mt-8 pt-4 border-t border-evren-light-gray/40">
              {PHASES.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActivePhase(idx)}
                  className={`h-2.5 rounded-full transition-all duration-300 ${
                    activePhase === idx ? "w-8 bg-evren-peach" : "w-2.5 bg-evren-peach-light"
                  }`}
                  aria-label={`Go to phase ${idx + 1}`}
                />
              ))}
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}

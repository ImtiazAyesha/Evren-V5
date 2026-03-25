"use client";

import { motion, AnimatePresence, useInView } from "framer-motion";
import { Search, Code, Rocket, ChevronRight } from "lucide-react";
import { useRef, useState, useEffect } from "react";
import ArrowButton from "@/components/ui/ArrowButton";

// ═══════════════════════════════════════════════════════════════════════
//  PHASE DATA
// ═══════════════════════════════════════════════════════════════════════

const PHASES = [
  {
    id: "01",
    title: "Discover",
    shortDesc: "Technical discovery & blueprinting",
    description:
      "We immerse ourselves in your world. Through technical discovery and data modeling, we blueprint how AI will fundamentally improve your product.",
    icon: Search,
    tag: "Phase 1",
    video: "/Illustrations/Intelligence.mp4",
  },
  {
    id: "02",
    title: "Build",
    shortDesc: "Agile sprints & working code",
    description:
      "Agile, two-week sprints. You see working code immediately. Intelligence and ML models are woven into the architecture from sprint one.",
    icon: Code,
    tag: "Phase 2",
    video: "/Illustrations/Partnership.mp4",
  },
  {
    id: "03",
    title: "Scale",
    shortDesc: "Deploy & transfer knowledge",
    description:
      "Our success is measured by your independence. We deploy the product, optimize performance, and transfer all knowledge to your internal team.",
    icon: Rocket,
    tag: "Phase 3",
    video: "/Illustrations/Knowledge.mp4",
  },
];

// ═══════════════════════════════════════════════════════════════════════
//  ANIMATED HEADLINE
// ═══════════════════════════════════════════════════════════════════════

function AnimatedHeadline() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const words = ["How", "Ideas", "Become"];

  return (
    <div className="text-center flex flex-col items-center">
      <p className="text-sm uppercase tracking-widest text-evren-peach font-bold mb-4">
        Our Methodology
      </p>
      <h2
        ref={ref}
        className="font-heading text-3xl md:text-5xl lg:text-[2.75rem] font-bold tracking-tight
                   text-evren-navy leading-tight flex flex-wrap justify-center gap-x-3 mb-6"
      >
        {words.map((word, i) => (
          <motion.span
            key={word + i}
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
          >
            {word}
          </motion.span>
        ))}
        <motion.span
          className="text-evren-peach"
          initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
          animate={inView ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}}
          transition={{ duration: 0.65, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          Intelligent Products.
        </motion.span>
      </h2>
    </div>
  );
}

// ═══════════════════════════════════════════════════════════════════════
//  LEFT STEP LIST ITEM
// ═══════════════════════════════════════════════════════════════════════

function StepListItem({
  step,
  index,
  isActive,
  onClick,
  progress,
}: {
  step: (typeof PHASES)[0];
  index: number;
  isActive: boolean;
  onClick: () => void;
  progress: number;
}) {
  const Icon = step.icon;

  return (
    <motion.button
      onClick={onClick}
      className={`w-full h-full text-left group relative flex items-center gap-4 lg:gap-6 px-4 py-3 sm:px-5 sm:py-4 lg:px-6 lg:py-8
                  rounded-xl lg:rounded-2xl overflow-hidden transition-all duration-300 cursor-pointer border
                  ${isActive
          ? "bg-white border-evren-peach/30 shadow-[0_4px_16px_rgba(244,168,154,0.12)]"
          : "bg-transparent border-transparent hover:bg-white/60 hover:border-evren-navy/10"
        }`}
      whileTap={{ scale: 0.985 }}
    >
      {/* Auto-progress bar on active item */}
      {isActive && (
        <motion.div
          className="absolute bottom-0 left-0 h-[3px] bg-gradient-to-r from-evren-peach to-evren-peach-light"
          initial={{ width: "0%" }}
          animate={{ width: `${progress * 100}%` }}
          transition={{ duration: 0.05, ease: "linear" }}
        />
      )}

      {/* Icon */}
      <motion.div
        className={`relative flex-shrink-0 w-10 h-10 lg:w-14 lg:h-14 rounded-lg lg:rounded-2xl flex items-center justify-center
                    transition-all duration-300
                    ${isActive ? "bg-evren-peach shadow-[0_4px_12px_rgba(244,168,154,0.3)]" : "bg-white border border-evren-navy/5"}`}
        animate={isActive ? { scale: 1.05 } : { scale: 1 }}
      >
        <Icon className={`w-4 h-4 lg:w-6 lg:h-6 ${isActive ? "text-evren-navy" : "text-evren-medium-gray"}`} />
      </motion.div>

      {/* Text */}
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2 mb-0.5 lg:mb-1">
          <span
            className={`font-mono text-[10px] lg:text-[11px] font-bold tracking-widest
                        ${isActive ? "text-evren-peach" : "text-evren-medium-gray"}`}
          >
            {step.id}
          </span>
        </div>
        <p
          className={`font-heading font-bold text-sm lg:text-base transition-colors duration-200
                      ${isActive ? "text-evren-navy" : "text-evren-charcoal"}`}
        >
          {step.title}
        </p>
        <p className="font-body text-[11px] lg:text-[13px] text-evren-medium-gray mt-0.5 lg:mt-1 truncate hidden sm:block">
          {step.shortDesc}
        </p>
      </div>

      {/* Arrow */}
      <ChevronRight
        size={16}
        className={`flex-shrink-0 transition-all duration-300
                    ${isActive ? "text-evren-peach translate-x-0.5" : "text-evren-medium-gray/30 group-hover:text-evren-medium-gray"}`}
      />
    </motion.button>
  );
}

// ═══════════════════════════════════════════════════════════════════════
//  RIGHT DETAIL PANEL
// ═══════════════════════════════════════════════════════════════════════

function DetailPanel({ 
  step, 
  index,
  onDotClick
}: { 
  step: (typeof PHASES)[0]; 
  index: number;
  onDotClick: (index: number) => void;
}) {
  const Icon = step.icon;
  const videoRef = useRef<HTMLVideoElement>(null);

  // Play from the start on every step activation.
  // Using [step.video] so this re-fires each time the active phase changes.
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    video.currentTime = 0;
    video.play().catch(() => { });
  }, [step.video]);

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={step.id}
        initial={{ opacity: 0, x: 28, filter: "blur(6px)" }}
        animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
        exit={{ opacity: 0, x: -20, filter: "blur(4px)" }}
        transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
        className="h-full flex flex-col"
      >
        {/* Video showcase area */}
        <motion.div
          className="relative w-full rounded-2xl bg-white overflow-hidden mb-6"
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: "spring", stiffness: 200, damping: 20, delay: 0.08 }}
        >
          <video
            ref={videoRef}
            src={step.video}
            autoPlay
            loop
            muted
            playsInline
            className="w-full object-cover"
            style={{ display: "block", aspectRatio: "16/9" }}
          />

        </motion.div>

        {/* Title */}
        <motion.h3
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.12, duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          className="font-heading text-2xl md:text-3xl font-bold text-white mb-2 leading-tight"
        >
          {step.title}
        </motion.h3>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.18, duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          className="font-body text-white/60 text-sm leading-relaxed mb-5 max-w-md"
        >
          {step.description}
        </motion.p>


        {/* Step progress dots */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="flex items-center gap-2.5 pt-4 border-t border-white/10"
        >
          {PHASES.map((s, idx) => (
            <button
              key={s.id}
              onClick={() => onDotClick(idx)}
              aria-label={`Go to phase ${idx + 1}`}
              className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer
                          ${s.id === step.id ? "w-8 bg-evren-peach hover:bg-evren-peach-light" : "w-4 bg-white/20 hover:bg-white/40"}`}
            />
          ))}
          <span className="ml-auto font-mono text-[11px] text-white/40 tracking-wider">
            {step.id} of 03
          </span>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

// ═══════════════════════════════════════════════════════════════════════
//  PROCESS SNAPSHOT SECTION
// ═══════════════════════════════════════════════════════════════════════

export default function ProcessSnapshot() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const AUTO_ADVANCE_MS = 2500;
  const TICK_MS = 50;

  const sectionRef = useRef(null);
  const inView = useInView(sectionRef, { once: true, margin: "-80px" });

  // Auto-advance steps with progress bar
  useEffect(() => {
    if (!inView) return;
    let elapsed = 0;

    const timer = setInterval(() => {
      elapsed += TICK_MS;
      setProgress(elapsed / AUTO_ADVANCE_MS);

      if (elapsed >= AUTO_ADVANCE_MS) {
        elapsed = 0;
        setProgress(0);
        setActiveIndex((prev) => (prev + 1) % PHASES.length);
      }
    }, TICK_MS);

    return () => clearInterval(timer);
  }, [activeIndex, inView]);

  const handleStepClick = (index: number) => {
    setActiveIndex(index);
    setProgress(0);
  };

  return (
    <section
      ref={sectionRef}
      id="process"
      aria-label="How we work"
      className="relative w-full py-8 sm:py-10 lg:py-16 overflow-hidden bg-evren-warm-white"
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

      <div className="mx-auto max-w-6xl relative z-10 px-4 sm:px-6 lg:px-8">
        {/* ── Section Header ─────────────────────────────────────── */}
        <div className="mb-10 text-center">
          <AnimatedHeadline />
          <motion.p
            className="max-w-2xl mx-auto text-sm sm:text-base text-evren-charcoal font-body"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.45, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          >
            A deterministic, transparent process. AI is integrated from the
            first sprint, not retrofitted at the end.
          </motion.p>
        </div>

        {/* ── Main interactive panel ── */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-0
                     bg-white/50 backdrop-blur-md rounded-3xl border border-evren-navy/10
                     shadow-warm overflow-hidden"
        >
          {/* LEFT: Step list */}
          <div className="p-4 sm:p-5 lg:p-10 flex flex-col justify-center gap-2 sm:gap-3 lg:gap-5 lg:border-r border-evren-navy/10 h-full">
            {PHASES.map((step, index) => (
              <motion.div
                key={step.id}
                className="flex w-full"
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.4 + index * 0.1, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              >
                <StepListItem
                  step={step}
                  index={index}
                  isActive={activeIndex === index}
                  onClick={() => handleStepClick(index)}
                  progress={activeIndex === index ? progress : 0}
                />
              </motion.div>
            ))}
          </div>

          {/* RIGHT: Detail panel — dark card */}
          <div className="p-4 sm:p-5 lg:p-7 bg-evren-navy rounded-2xl lg:rounded-none lg:rounded-r-3xl min-h-[320px] sm:min-h-[360px] lg:min-h-0">
            <DetailPanel 
              key={activeIndex} 
              step={PHASES[activeIndex]} 
              index={activeIndex} 
              onDotClick={handleStepClick}
            />
          </div>
        </motion.div>

        {/* ── Global CTA ────────────────────────────────────────── */}
        <motion.div
          className="mt-8 sm:mt-12 flex justify-center w-full"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 1.2, ease: [0.22, 1, 0.36, 1] }}
        >
          <ArrowButton
            href="/approach"
            variant="outline"
            size="lg"
            className="w-full sm:w-auto justify-between sm:justify-center text-[14px] sm:text-base whitespace-nowrap sm:whitespace-normal"
          >
            Explore Our Full Approach
          </ArrowButton>
        </motion.div>
      </div>
    </section>
  );
}

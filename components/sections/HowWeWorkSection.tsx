"use client";

import { motion, AnimatePresence, useInView } from "framer-motion";
import MotionWrapper from "@/components/MotionWrapper";
import {
  Search,
  Hammer,
  Rocket,
  ChevronRight,
} from "lucide-react";
import { useRef, useState, useEffect } from "react";

// ═══════════════════════════════════════════════════════════════════════
//  STEP DATA (carried over from original HowWeWorkSection phases)
// ═══════════════════════════════════════════════════════════════════════

const STEPS = [
  {
    id: "01",
    title: "Discover",
    shortDesc: "Define & Design",
    description:
      "Deep dive into your operations & pain points. We map data sources, design intelligent features, and deliver a clickable prototype with a fixed-price quote and clear timeline.",
    icon: Search,
    tag: "Week 1–2",
  },
  {
    id: "02",
    title: "Build",
    shortDesc: "Ship & Iterate",
    description:
      "2-week sprints with working demos. You see progress every two weeks via a direct Slack channel with our team — full source code access from day 1, complete transparency.",
    icon: Hammer,
    tag: "Week 3–11",
  },
  {
    id: "03",
    title: "Scale",
    shortDesc: "Optimize & Grow",
    description:
      "Deploy to production, optimize performance, and train your team. Full source code ownership, infrastructure setup, documentation, and optional ongoing support.",
    icon: Rocket,
    tag: "Week 12+",
  },
];

// ═══════════════════════════════════════════════════════════════════════
//  ANIMATED HEADLINE (keeping original heading text)
// ═══════════════════════════════════════════════════════════════════════

function AnimatedHeadline() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const words = ["From", "First", "Call", "to", "Deployed", "Product"];

  return (
    <h2
      ref={ref}
      className="font-jakarta text-3xl sm:text-4xl md:text-5xl lg:text-[2.75rem] font-bold tracking-tight
                 text-gray-900 leading-[1.15] flex flex-wrap justify-center gap-x-3 mb-6"
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
        className="text-transparent bg-clip-text bg-gradient-to-r from-[#0ABAB5] to-teal-400"
        initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
        animate={inView ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}}
        transition={{ duration: 0.65, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
      >
        in 12 Weeks.
      </motion.span>
    </h2>
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
  step: (typeof STEPS)[0];
  index: number;
  isActive: boolean;
  onClick: () => void;
  progress: number;
}) {
  const Icon = step.icon;

  return (
    <motion.button
      onClick={onClick}
      className={`w-full text-left group relative flex items-center gap-4 px-5 py-4
                  rounded-xl transition-all duration-300 cursor-pointer border
                  ${isActive
                    ? "bg-white border-[#0ABAB5]/30 shadow-[0_4px_24px_rgba(10,186,181,0.12)]"
                    : "bg-transparent border-transparent hover:bg-white/60 hover:border-slate-200"
                  }`}
      whileTap={{ scale: 0.985 }}
    >
      {/* Auto-progress bar on active item */}
      {isActive && (
        <motion.div
          className="absolute bottom-0 left-0 h-[2px] rounded-b-xl bg-gradient-to-r from-[#0ABAB5] to-teal-300"
          initial={{ width: "0%" }}
          animate={{ width: `${progress * 100}%` }}
          transition={{ duration: 0.05, ease: "linear" }}
        />
      )}

      {/* Icon */}
      <motion.div
        className={`relative flex-shrink-0 w-11 h-11 rounded-xl flex items-center justify-center
                    transition-all duration-300
                    ${isActive ? "bg-[#0ABAB5] shadow-[0_4px_16px_rgba(10,186,181,0.3)]" : "bg-slate-100"}`}
        animate={isActive ? { scale: 1.05 } : { scale: 1 }}
      >
        <Icon size={18} className={isActive ? "text-white" : "text-slate-400"} />
      </motion.div>

      {/* Text */}
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2 mb-0.5">
          <span
            className={`font-mono text-[10px] font-bold tracking-widest
                        ${isActive ? "text-[#0ABAB5]" : "text-slate-400"}`}
          >
            {step.id}
          </span>
          {isActive && (
            <motion.span
              initial={{ opacity: 0, scale: 0.7 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-[9px] font-bold tracking-widest uppercase px-1.5 py-0.5
                         bg-[#0ABAB5]/10 text-[#0ABAB5] rounded-full"
            >
              {step.tag}
            </motion.span>
          )}
        </div>
        <p
          className={`font-jakarta font-bold text-sm transition-colors duration-200
                      ${isActive ? "text-gray-900" : "text-slate-500"}`}
        >
          {step.title}
        </p>
        <p className="font-inter text-xs text-slate-400 mt-0.5 truncate">
          {step.shortDesc}
        </p>
      </div>

      {/* Arrow */}
      <ChevronRight
        size={16}
        className={`flex-shrink-0 transition-all duration-300
                    ${isActive ? "text-[#0ABAB5] translate-x-0.5" : "text-slate-300 group-hover:text-slate-400"}`}
      />
    </motion.button>
  );
}

// ═══════════════════════════════════════════════════════════════════════
//  RIGHT DETAIL PANEL
// ═══════════════════════════════════════════════════════════════════════

function DetailPanel({ step, index }: { step: (typeof STEPS)[0]; index: number }) {
  const Icon = step.icon;

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={step.id}
        initial={{ opacity: 0, x: 28, filter: "blur(6px)" }}
        animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
        exit={{ opacity: 0, x: -20, filter: "blur(4px)" }}
        transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
        className="h-full flex flex-col justify-between"
      >
        {/* Top: Large icon + step badge */}
        <div>
          <div className="flex items-start justify-between mb-8">
            <motion.div
              className="relative w-16 h-16 rounded-2xl bg-gradient-to-br from-[#0ABAB5] to-teal-400
                         flex items-center justify-center shadow-[0_8px_32px_rgba(10,186,181,0.3)]"
              initial={{ scale: 0.7, rotate: -8 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ type: "spring", stiffness: 280, damping: 18, delay: 0.1 }}
            >
              <Icon size={28} className="text-white" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 }}
              className="flex flex-col items-end gap-1"
            >
              <span className="font-mono text-[11px] font-black tracking-widest text-slate-300">
                PHASE {step.id} / 03
              </span>
              <span className="text-xs font-semibold text-[#0ABAB5] bg-[#0ABAB5]/08 
                               border border-[#0ABAB5]/20 px-3 py-1 rounded-full">
                {step.tag}
              </span>
            </motion.div>
          </div>

          {/* Title */}
          <motion.h3
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.12, duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            className="font-jakarta text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight"
          >
            {step.title}
          </motion.h3>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.18, duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            className="font-inter text-slate-500 text-lg leading-relaxed mb-8 max-w-md"
          >
            {step.description}
          </motion.p>
        </div>

        {/* Step progress dots */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="flex items-center gap-2 mt-10 pt-6 border-t border-slate-100"
        >
          {STEPS.map((s) => (
            <div
              key={s.id}
              className={`h-1.5 rounded-full transition-all duration-500
                          ${s.id === step.id ? "w-8 bg-[#0ABAB5]" : "w-3 bg-slate-200"}`}
            />
          ))}
          <span className="ml-auto font-mono text-[11px] text-slate-400 tracking-wider">
            {step.id} of 03
          </span>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

// ═══════════════════════════════════════════════════════════════════════
//  HOW WE WORK SECTION
// ═══════════════════════════════════════════════════════════════════════

export default function HowWeWorkSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const AUTO_ADVANCE_MS = 4000;
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
        setActiveIndex((prev) => (prev + 1) % STEPS.length);
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
      id="how-we-work"
      aria-label="Our 12-week process from first call to deployed product"
      className="relative w-full overflow-hidden"
      style={{
        backgroundColor: "#FAFBFC",
        paddingTop: "6rem",
        paddingBottom: "6rem",
      }}
    >
      {/* Blueprint grid */}
      <div
        className="absolute inset-0 z-0 opacity-[0.025]"
        style={{
          backgroundImage:
            "linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      {/* Ambient glow */}
      <motion.div
        className="pointer-events-none absolute top-0 right-0 w-[600px] h-[600px] rounded-full z-0"
        style={{
          background:
            "radial-gradient(ellipse at top right, rgba(10,186,181,0.07) 0%, transparent 65%)",
        }}
        animate={{ scale: [1, 1.08, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />

      <div ref={sectionRef} className="mx-auto max-w-6xl relative z-10 px-6 lg:px-8">

        {/* ── Header (original heading & subheading preserved) ── */}
        <MotionWrapper className="mb-12 text-center flex flex-col items-center">
          <AnimatedHeadline />
          <motion.p
            className="font-inter text-lg sm:text-xl text-slate-500 max-w-2xl mx-auto font-medium leading-relaxed"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.45, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          >
            A transparent, milestone-driven process that respects your time and
            eliminates uncertainty at every stage.
          </motion.p>
        </MotionWrapper>

        {/* ── Main interactive panel (RoadmapSection layout) ── */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="grid grid-cols-1 lg:grid-cols-[1fr_1.4fr] gap-4 lg:gap-6
                     bg-[#F8FAFB] rounded-3xl border border-slate-200/80
                     shadow-[0_8px_40px_rgba(0,0,0,0.06)] overflow-hidden"
        >
          {/* LEFT: Step list */}
          <div className="p-4 lg:p-6 flex flex-col gap-2 lg:border-r border-slate-200/60">
            {STEPS.map((step, index) => (
              <motion.div
                key={step.id}
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

          {/* RIGHT: Detail panel */}
          <div className="p-6 lg:p-10 bg-white min-h-[420px] lg:min-h-0">
            <DetailPanel step={STEPS[activeIndex]} index={activeIndex} />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

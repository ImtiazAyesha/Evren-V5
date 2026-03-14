"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useInView, type Variants } from "framer-motion";

// ═══════════════════════════════════════════════════════════════════════
//  MOTION CONFIG
// ═══════════════════════════════════════════════════════════════════════

const SPRING = { type: "spring" as const, stiffness: 100, damping: 20 };

const leftReveal: Variants = {
  hidden: { opacity: 0, y: 20, filter: "blur(4px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { ...SPRING },
  },
};

const rightReveal: Variants = {
  hidden: { opacity: 0, scale: 0.98, filter: "blur(4px)" },
  visible: {
    opacity: 1,
    scale: 1,
    filter: "blur(0px)",
    transition: { ...SPRING, delay: 0.2 },
  },
};

// ═══════════════════════════════════════════════════════════════════════
//  ANIMATED COUNTER HOOK
// ═══════════════════════════════════════════════════════════════════════

function useCountUp(target: number, isInView: boolean, duration = 1600) {
  const [count, setCount] = useState(0);
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (!isInView || hasAnimated.current) return;
    hasAnimated.current = true;

    const startTime = performance.now();

    function tick(now: number) {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(eased * target));
      if (progress < 1) requestAnimationFrame(tick);
    }

    requestAnimationFrame(tick);
  }, [isInView, target, duration]);

  return count;
}

// ═══════════════════════════════════════════════════════════════════════
//  STAT DATA
// ═══════════════════════════════════════════════════════════════════════

const STATS = [
  { value: 50, suffix: "+", label: "Engineers" },
  { value: 98, suffix: "%", label: "Success Rate" },
  { value: 50, suffix: "+", label: "Projects" },
];

// ═══════════════════════════════════════════════════════════════════════
//  GLOBAL AUTHORITY SECTION — Command Center Layout
// ═══════════════════════════════════════════════════════════════════════

export default function GlobalAuthoritySection() {
  const leftRef = useRef<HTMLDivElement>(null);
  const rightRef = useRef<HTMLDivElement>(null);
  const leftInView = useInView(leftRef, { once: true, margin: "-80px" });
  const rightInView = useInView(rightRef, { once: true, margin: "-80px" });

  const stat1 = useCountUp(STATS[0].value, leftInView);
  const stat2 = useCountUp(STATS[1].value, leftInView);
  const stat3 = useCountUp(STATS[2].value, leftInView);
  const animatedValues = [stat1, stat2, stat3];

  return (
    <section
      id="global-authority"
      className="relative w-full py-20 md:py-24 bg-slate-950"
    >
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* ═══════════════════════════════════════════════════════
               LEFT COLUMN — Narrative & Stats
               ═══════════════════════════════════════════════════════ */}
          <motion.div
            ref={leftRef}
            variants={leftReveal}
            initial="hidden"
            animate={leftInView ? "visible" : "hidden"}
            className="lg:col-span-6"
          >
            {/* Subheading */}
            <span className="inline-block text-[11px] sm:text-xs font-bold uppercase tracking-[0.2em] text-tiffany font-inter mb-4">
              Global Presence
            </span>

            {/* Headline */}
            <h2 className="text-4xl sm:text-5xl font-bold leading-[1.05] tracking-tight text-white font-jakarta mb-6">
              A Global Engineering Force.
            </h2>

            {/* Paragraph */}
            <p className="text-base sm:text-lg text-slate-400 leading-relaxed font-inter max-w-md">
              Operating across international hubs, our elite engineers
              provide 24/7 delivery and enterprise-grade support.
            </p>

            {/* Stats Micro-Grid */}
            <div className="mt-10 pt-10 border-t border-slate-800">
              <div className="grid grid-cols-3 gap-6">
                {STATS.map((stat, i) => (
                  <div key={stat.label}>
                    <div className="text-3xl sm:text-4xl font-bold text-white font-jakarta tracking-tighter">
                      {animatedValues[i]}
                      {stat.suffix}
                    </div>
                    <div className="text-[10px] font-semibold uppercase tracking-[0.15em] text-slate-500 font-inter mt-1">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* ═══════════════════════════════════════════════════════
               RIGHT COLUMN — Deep Space Glass Hub Card
               ═══════════════════════════════════════════════════════ */}
          <motion.div
            ref={rightRef}
            variants={rightReveal}
            initial="hidden"
            animate={rightInView ? "visible" : "hidden"}
            className="lg:col-span-6"
          >
            <div className="bg-white/[0.02] backdrop-blur-xl border border-white/[0.08] shadow-[inset_0_1px_0_0_rgba(255,255,255,0.05)] rounded-3xl p-7 sm:p-8 md:p-10">
              {/* Texas */}
              <div>
                <div className="flex items-center">
                  <h3 className="text-lg sm:text-xl font-semibold text-white font-jakarta">
                    Texas, USA
                  </h3>
                  <span className="ml-3 px-2 py-0.5 bg-tiffany/10 text-tiffany text-[10px] font-semibold rounded uppercase tracking-wide font-inter">
                    HQ
                  </span>
                </div>
                <p className="text-sm text-slate-400 mt-2 leading-relaxed font-inter">
                  Strategic AI alignment, enterprise sales, and executive
                  consulting.
                </p>
              </div>

              {/* Divider */}
              <div className="w-full h-px bg-white/[0.05] my-7 sm:my-8" />

              {/* Dubai */}
              <div>
                <h3 className="text-lg sm:text-xl font-semibold text-white font-jakarta">
                  Dubai, UAE
                </h3>
                <p className="text-sm text-slate-400 mt-2 leading-relaxed font-inter">
                  Serving Middle Eastern and European enterprise markets.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

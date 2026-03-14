"use client";

import { motion, type Variants } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";
import { ArrowRight } from "lucide-react";

// ═══════════════════════════════════════════════════════════════════════
//  MOTION CONFIG
// ═══════════════════════════════════════════════════════════════════════

const SPRING = { type: "spring" as const, stiffness: 100, damping: 20 };

const stagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24, filter: "blur(4px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { ...SPRING },
  },
};

// ═══════════════════════════════════════════════════════════════════════
//  FINAL CTA SECTION — "Have an idea? Let us talk."
//  Full-width banner, Navy background, Peach CTA button
// ═══════════════════════════════════════════════════════════════════════

export default function FinalCTA() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-80px" });

  return (
    <section
      id="final-cta"
      className="relative w-full py-32 md:py-40 bg-evren-navy"
    >
      {/* Decorative cosmic circles */}
      <div
        className="absolute -top-[50%] -left-[10%] w-[500px] h-[500px] rounded-full border-[40px] border-white/5 pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute -bottom-[40%] -right-[5%] w-[600px] h-[600px] rounded-full border-[40px] border-evren-peach/10 pointer-events-none"
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          ref={sectionRef}
          variants={stagger}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="flex flex-col items-center text-center"
        >
          {/* Micro-headline */}
          <motion.span
            variants={fadeUp}
            className="inline-block text-[11px] sm:text-sm font-bold uppercase tracking-[0.2em] text-evren-peach font-body mb-6"
          >
            Ready to Build?
          </motion.span>

          {/* Headline */}
          <motion.h2
            variants={fadeUp}
            className="text-4xl sm:text-5xl md:text-6xl font-bold leading-[1.05] tracking-tight text-white font-heading max-w-3xl mx-auto mb-6"
          >
            Have an idea?
            <br />
            Let&apos;s talk.
          </motion.h2>

          {/* Subtext */}
          <motion.p
            variants={fadeUp}
            className="text-base sm:text-lg text-white/60 mb-10 font-body max-w-xl"
          >
            Partner with the engineering force behind high-trust,
            P&L-driven digital products.
          </motion.p>

          {/* CTA Button — Peach */}
          <motion.div variants={fadeUp}>
            <motion.a
              href="/connect"
              whileHover={{
                scale: 1.04,
                boxShadow: "0 16px 40px -8px rgba(244, 168, 154, 0.4)",
              }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: "spring", stiffness: 400, damping: 20 }}
              className="inline-flex items-center justify-center gap-2.5 text-evren-navy text-[15px] font-heading font-semibold py-4 px-10 rounded-full bg-evren-peach shadow-warm transition-all duration-300 cursor-pointer"
            >
              Let&apos;s Talk
              <ArrowRight size={16} className="transition-transform duration-200" />
            </motion.a>
          </motion.div>

          {/* Trust Anchor */}
          <motion.p
            variants={fadeUp}
            className="text-xs text-white/40 mt-5 font-medium font-body tracking-wide"
          >
            No black boxes. No empty hype. Just performance.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}

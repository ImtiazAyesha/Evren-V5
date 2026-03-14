"use client";

import { useRef } from "react";
import { motion, useInView, type Variants } from "framer-motion";

// ═══════════════════════════════════════════════════════════════════════
//  MOTION CONFIG
// ═══════════════════════════════════════════════════════════════════════

const SPRING = { type: "spring" as const, stiffness: 100, damping: 20 };

const stagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15, delayChildren: 0.1 } },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { ...SPRING },
  },
};

// ═══════════════════════════════════════════════════════════════════════
//  CEO MANIFESTO — Editorial Quote Section
// ═══════════════════════════════════════════════════════════════════════

export default function CEOManifesto() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="ceo-manifesto"
      className="relative w-full py-32 md:py-40 bg-white"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          ref={ref}
          variants={stagger}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="flex flex-col items-center text-center"
        >
          {/* The Quote */}
          <motion.blockquote
            variants={fadeUp}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-slate-900 italic leading-tight max-w-5xl mx-auto"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            &ldquo;We are not just vendors. We are strategic transformation
            partners. We guarantee outcomes, not just code.&rdquo;
          </motion.blockquote>

          {/* Attribution */}
          <motion.div variants={fadeUp} className="mt-12">
            <span className="block text-lg font-bold text-slate-900 font-jakarta">
              Moazzam Ali
            </span>
            <span className="block text-sm font-semibold uppercase tracking-[0.2em] text-tiffany font-inter mt-1">
              CEO, Evren AI
            </span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

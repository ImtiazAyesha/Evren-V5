"use client";

import { useRef } from "react";
import { motion, useInView, type Variants } from "framer-motion";
import { Brain, Handshake, TrendingUp } from "lucide-react";

// ═══════════════════════════════════════════════════════════════════════
//  MOTION VARIANTS
// ═══════════════════════════════════════════════════════════════════════

const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2, delayChildren: 0.1 },
  },
};

const fadeSlideUp: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring" as const,
      stiffness: 90,
      damping: 18,
      duration: 0.6,
    },
  },
};

const headerFade: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

// ═══════════════════════════════════════════════════════════════════════
//  CARD DATA
// ═══════════════════════════════════════════════════════════════════════

const DIFFERENTIATORS = [
  {
    icon: Brain,
    title: "AI-Native by Design",
    text: "AI isn't a feature we bolt on at the end. It is woven into our architecture from day one, making your product fundamentally smarter.",
    // Asymmetric blob radius for visual interest
    blobRadius: "rounded-tr-3xl rounded-bl-3xl rounded-tl-xl rounded-br-xl",
  },
  {
    icon: Handshake,
    title: "True Partnership",
    text: "We don't just take orders and write code. We embed in your vision, challenge assumptions, and build alongside your team.",
    blobRadius: "rounded-tl-3xl rounded-br-3xl rounded-tr-xl rounded-bl-xl",
  },
  {
    icon: TrendingUp,
    title: "Built to Last",
    text: "Our goal is your independence. We ensure complete knowledge transfer so your team can own, scale, and evolve what we create.",
    blobRadius: "rounded-tr-3xl rounded-bl-3xl rounded-tl-xl rounded-br-xl",
  },
];

// ═══════════════════════════════════════════════════════════════════════
//  DIFFERENTIATORS SECTION
// ═══════════════════════════════════════════════════════════════════════

export default function Differentiators() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section
      ref={sectionRef}
      id="why-evren"
      className="relative w-full bg-evren-warm-white py-24 lg:py-32 overflow-hidden"
    >
      {/* Subtle decorative orb — top-right */}
      <div
        className="absolute top-[-10%] right-[-5%] w-[400px] h-[400px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(244, 168, 154, 0.07) 0%, transparent 70%)",
          filter: "blur(80px)",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        {/* ── Section Header ───────────────────────────────────────── */}
        <motion.div
          className="text-center mb-16 lg:mb-20"
          variants={headerFade}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <p className="text-sm uppercase tracking-widest text-evren-peach font-heading font-bold mb-4">
            Why Evren AI
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-[2.75rem] text-evren-navy font-heading font-bold leading-tight max-w-2xl mx-auto">
            Built to Scale. Designed to Think.
          </h2>
        </motion.div>

        {/* ── Cards Grid ───────────────────────────────────────────── */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {DIFFERENTIATORS.map((card) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={card.title}
                variants={fadeSlideUp}
                className="group bg-white rounded-studio p-8 shadow-warm 
                           transition-all duration-300 ease-out
                           hover:shadow-warm-hover hover:-translate-y-2 
                           border border-evren-light-gray/30"
              >
                {/* Icon container with soft abstract blob background */}
                <div
                  className={`inline-flex items-center justify-center w-14 h-14 
                              bg-evren-peach-light ${card.blobRadius}`}
                >
                  <Icon
                    size={26}
                    strokeWidth={1.5}
                    className="text-evren-navy"
                  />
                </div>

                {/* Title */}
                <h3 className="text-xl font-heading font-bold text-evren-navy mt-6 mb-3">
                  {card.title}
                </h3>

                {/* Description */}
                <p className="text-evren-medium-gray font-body leading-relaxed text-[15px]">
                  {card.text}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

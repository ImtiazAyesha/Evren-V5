"use client";

import { useRef } from "react";
import {
  motion,
  useInView,
  useScroll,
  useTransform,
  type Variants,
} from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";

// ═══════════════════════════════════════════════════════════════════════
//  MOTION  — Spring configs & stagger orchestration
// ═══════════════════════════════════════════════════════════════════════

const SPRING = { type: "spring" as const, stiffness: 100, damping: 20 };

/** Parent orchestrator — staggers children 0.1s apart */
const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1, delayChildren: 0.08 },
  },
};

/** Fade + slide up — the workhorse for every text block */
const fadeSlideUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { ...SPRING, duration: 0.6 },
  },
};

// ═══════════════════════════════════════════════════════════════════════
//  HERO SECTION — Centered, warm, premium studio aesthetic
// ═══════════════════════════════════════════════════════════════════════

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  const isInView = useInView(contentRef, { once: true, margin: "-80px" });

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const contentY = useTransform(scrollYProgress, [0, 0.5], [0, 30]);

  // Background orb parallax
  const orbY1 = useTransform(scrollYProgress, [0, 1], [40, -40]);
  const orbY2 = useTransform(scrollYProgress, [0, 1], [-20, 35]);

  return (
    <section
      ref={sectionRef}
      id="hero"
      className="relative w-full overflow-hidden bg-evren-warm-white"
      style={{ minHeight: "600px" }}
    >
      {/* ── Warm background orbs ─────────────────────────────────── */}
      <motion.div
        className="absolute top-[-8%] left-[-5%] w-[500px] h-[500px] rounded-full pointer-events-none z-0"
        style={{
          y: orbY1,
          background:
            "radial-gradient(circle, rgba(244, 168, 154, 0.10) 0%, transparent 70%)",
          filter: "blur(90px)",
        }}
      />
      <motion.div
        className="absolute bottom-[-12%] right-[-8%] w-[550px] h-[550px] rounded-full pointer-events-none z-0"
        style={{
          y: orbY2,
          background:
            "radial-gradient(circle, rgba(212, 165, 116, 0.08) 0%, transparent 70%)",
          filter: "blur(100px)",
        }}
      />

      {/* ── Subtle blueprint grid ────────────────────────────────── */}
      <div
        className="absolute inset-0 pointer-events-none z-0"
        style={{
          backgroundSize: "48px 48px",
          backgroundImage:
            "linear-gradient(to right, rgba(27, 42, 74, 0.025) 1px, transparent 1px), linear-gradient(to bottom, rgba(27, 42, 74, 0.025) 1px, transparent 1px)",
          maskImage:
            "radial-gradient(ellipse 80% 70% at 50% 40%, black 30%, transparent 100%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 80% 70% at 50% 40%, black 30%, transparent 100%)",
        }}
      />

      {/* ── Centered content layout ──────────────────────────────── */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-24 lg:py-36">
        <div className="flex items-center justify-center">
          <motion.div
            ref={contentRef}
            className="w-full max-w-3xl flex flex-col items-center text-center"
            style={{ y: contentY }}
            variants={staggerContainer}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            {/* Badge / Pill */}
            <motion.div
              variants={fadeSlideUp}
              className="mb-7 inline-flex items-center gap-2.5 
                         rounded-full bg-evren-peach-light px-4 py-2"
            >
              <Sparkles size={14} className="text-evren-rose" />
              <span className="text-[12px] font-heading font-semibold text-evren-navy tracking-wide">
                The universe is always expanding. So are we.
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              variants={fadeSlideUp}
              className="font-heading font-extrabold text-evren-navy 
                         text-5xl md:text-6xl lg:text-7xl leading-[1.08] -tracking-tight mb-6"
            >
              Where Ideas Become{" "}
              <span className="relative inline-block">
                <span className="relative z-10">Intelligent</span>
                {/* Wavy line decoration */}
                <svg
                  className="absolute -bottom-1 md:-bottom-2 left-0 w-full h-[10px] md:h-[14px]"
                  viewBox="0 0 120 12"
                  fill="none"
                  preserveAspectRatio="none"
                  aria-hidden="true"
                >
                  <path
                    d="M0 6 Q 10 0, 20 6 T 40 6 T 60 6 T 80 6 T 100 6 T 120 6"
                    stroke="#F4A89A"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    fill="none"
                    opacity="0.7"
                  />
                </svg>
              </span>{" "}
              Products.
            </motion.h1>

            {/* Sub-headline */}
            <motion.p
              variants={fadeSlideUp}
              className="font-body text-evren-charcoal text-lg md:text-xl 
                         leading-relaxed max-w-xl mx-auto mb-10"
              style={{ lineHeight: 1.6 }}
            >
              We build AI-powered digital products that grow with your vision.
              From first spark to global scale, we are your partner in turning
              ideas into products the world actually needs.
            </motion.p>

            {/* CTA Group */}
            <motion.div
              variants={fadeSlideUp}
              className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-4"
            >
              {/* Primary CTA */}
              <motion.a
                href="/connect"
                id="hero-cta-primary"
                aria-label="Book a free consultation with Evren AI"
                className="group inline-flex items-center justify-center gap-2 
                           rounded-full bg-evren-peach text-evren-navy font-heading font-semibold 
                           px-8 py-4 text-sm md:text-base will-change-transform 
                           transition-all duration-200"
                whileHover={{
                  scale: 1.04,
                  boxShadow: "0 16px 40px -8px rgba(244, 168, 154, 0.4)",
                }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 300, damping: 22 }}
              >
                Book a Free Consultation
                <ArrowRight
                  size={16}
                  className="group-hover:translate-x-1 transition-transform duration-200"
                />
              </motion.a>

              {/* Secondary CTA */}
              <motion.a
                href="/approach"
                id="hero-cta-secondary"
                aria-label="See our approach"
                className="group inline-flex items-center justify-center gap-2 
                           rounded-full border-2 border-evren-navy-light text-evren-navy 
                           font-heading font-semibold px-8 py-4 text-sm md:text-base 
                           will-change-transform transition-all duration-200
                           hover:bg-evren-navy-light hover:text-white"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 300, damping: 22 }}
              >
                See Our Approach
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* ── Bottom fade gradient ──────────────────────────────────── */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-evren-warm-white to-transparent z-[5] pointer-events-none" />
    </section>
  );
}

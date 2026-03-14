"use client";

import { useRef } from "react";
import {
  motion,
  useInView,
  useScroll,
  useTransform,
  type Variants,
} from "framer-motion";

// ─── MOTION ─────────────────────────────────────────────────────────
const SPRING = { type: "spring" as const, stiffness: 100, damping: 20 };

const stagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { ...SPRING, duration: 0.7 } },
};

// ═══════════════════════════════════════════════════════════════════════
//  ABOUT HERO — 'The Evren Story'
// ═══════════════════════════════════════════════════════════════════════

export default function AboutHero() {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(contentRef, { once: true, margin: "-60px" });

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  // Subtle parallax on hero text
  const textY = useTransform(scrollYProgress, [0, 0.6], [0, 50]);

  // Background orb parallax
  const orbY1 = useTransform(scrollYProgress, [0, 1], [30, -50]);
  const orbY2 = useTransform(scrollYProgress, [0, 1], [-20, 40]);

  return (
    <section
      ref={sectionRef}
      id="about-hero"
      className="relative w-full overflow-hidden bg-evren-warm-white"
      style={{ minHeight: "520px" }}
    >
      {/* ── Warm background orbs ─────────────────────────────────── */}
      <motion.div
        className="absolute top-[-10%] right-[-8%] w-[600px] h-[600px] rounded-full pointer-events-none z-0"
        style={{
          y: orbY1,
          background:
            "radial-gradient(circle, rgba(244, 168, 154, 0.10) 0%, transparent 70%)",
          filter: "blur(100px)",
        }}
      />
      <motion.div
        className="absolute bottom-[-15%] left-[-10%] w-[500px] h-[500px] rounded-full pointer-events-none z-0"
        style={{
          y: orbY2,
          background:
            "radial-gradient(circle, rgba(212, 165, 116, 0.08) 0%, transparent 70%)",
          filter: "blur(90px)",
        }}
      />

      {/* ── Subtle grid ──────────────────────────────────────────── */}
      <div
        className="absolute inset-0 pointer-events-none z-0"
        style={{
          backgroundSize: "48px 48px",
          backgroundImage:
            "linear-gradient(to right, rgba(27, 42, 74, 0.02) 1px, transparent 1px), linear-gradient(to bottom, rgba(27, 42, 74, 0.02) 1px, transparent 1px)",
          maskImage:
            "radial-gradient(ellipse 80% 70% at 50% 45%, black 30%, transparent 100%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 80% 70% at 50% 45%, black 30%, transparent 100%)",
        }}
      />

      {/* ── Content ──────────────────────────────────────────────── */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-8 py-28 lg:py-40">
        <motion.div
          ref={contentRef}
          className="flex flex-col items-center text-center"
          style={{ y: textY }}
          variants={stagger}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Eyebrow */}
          <motion.div
            variants={fadeUp}
            className="mb-6 inline-flex items-center gap-2 rounded-full bg-evren-peach-light px-4 py-2"
          >
            <span className="text-[12px] font-heading font-semibold text-evren-navy tracking-widest uppercase">
              Our Story
            </span>
          </motion.div>

          {/* H1 */}
          <motion.h1
            variants={fadeUp}
            className="font-heading font-extrabold text-evren-navy
                       text-4xl sm:text-5xl md:text-6xl lg:text-[4.25rem] leading-[1.1] -tracking-tight mb-8"
          >
            <span className="relative inline-block">
              <span className="italic font-bold" style={{ fontFamily: "'Playfair Display', serif" }}>
                Evren
              </span>
            </span>{" "}
            means Universe.
            <br className="hidden sm:block" />{" "}
            The universe is always expanding.
            <br className="hidden sm:block" />{" "}
            <span className="relative inline-block">
              So are we
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
            </span>
            .
          </motion.h1>

          {/* Body copy — origin narrative */}
          <motion.p
            variants={fadeUp}
            className="font-body text-evren-charcoal text-lg md:text-xl
                       leading-relaxed max-w-2xl mx-auto"
            style={{ lineHeight: 1.7 }}
          >
            Evren AI was born from a single conviction: that the most powerful technology should feel
            effortlessly human. We bridge the gap between deep technical AI and human-centered design—
            building intelligent products that don&rsquo;t just work, but genuinely connect. Our team of
            engineers, designers, and strategists turn complex challenges into elegant, scalable
            solutions that grow alongside the businesses we serve.
          </motion.p>
        </motion.div>
      </div>

      {/* ── Bottom fade ──────────────────────────────────────────── */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-evren-warm-white to-transparent z-[5] pointer-events-none" />
    </section>
  );
}

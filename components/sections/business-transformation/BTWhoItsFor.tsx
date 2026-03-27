"use client";

import { useRef } from "react";
import { motion, useInView, type Variants } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

// ═══════════════════════════════════════════════════════════════════════
//  MOTION VARIANTS
// ═══════════════════════════════════════════════════════════════════════

const SPRING = { type: "spring" as const, stiffness: 100, damping: 20 };

const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12, delayChildren: 0.06 },
  },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { ...SPRING, duration: 0.5 },
  },
};

// ═══════════════════════════════════════════════════════════════════════
//  CHECKLIST DATA
// ═══════════════════════════════════════════════════════════════════════

const startHereItems = [
  "You know change is needed but not what to build",
  "Existing tools or processes are creating bottlenecks",
  "You need executive alignment before a development commitment",
  "A previous product failed to get adoption",
];

const skipAheadItems = [
  "You have a clear product vision defined",
  "You know your target users and core use case",
  "You're ready to commit to a development engagement",
  "You've been through discovery before",
];

// ═══════════════════════════════════════════════════════════════════════
//  COMPONENT
// ═══════════════════════════════════════════════════════════════════════

export default function BTWhoItsFor() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section
      ref={sectionRef}
      id="bt-who-its-for"
      aria-label="Who This Is For"
      style={{ background: "#F5F0ED", padding: "100px 0" }}
    >
      <div className="max-w-[1100px] mx-auto px-5 sm:px-6 lg:px-8">

        {/* ── Section Header ─────────────────────────────────────────── */}
        <motion.div
          className="text-center mb-14"
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.span
            variants={fadeUp}
            className="block text-[11px] font-heading font-bold uppercase tracking-[0.12em] mb-3"
            style={{ color: "#E8967E" }}
          >
            Is This Where You Start?
          </motion.span>

          <motion.h2
            variants={fadeUp}
            className="font-heading font-semibold leading-[1.3] tracking-tight mb-4"
            style={{ fontSize: "clamp(26px, 3vw, 32px)", color: "#2C3E6B" }}
          >
            Two Types of Client. Two Starting Points.
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="font-body mx-auto"
            style={{ fontSize: 16, color: "#6B6B6B", maxWidth: 520, lineHeight: 1.7 }}
          >
            Not every client needs transformation strategy. Here&apos;s an
            honest guide to where you should start.
          </motion.p>
        </motion.div>

        {/* ── Two Cards ──────────────────────────────────────────────── */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* LEFT — Start Here */}
          <motion.div
            variants={fadeUp}
            className="flex flex-col rounded-[16px]"
            style={{
              background: "#FFF9F7",
              border: "2px solid #F4A89A",
              borderRadius: 16,
              padding: "40px 36px",
            }}
          >
            <span
              className="block text-[11px] font-heading font-semibold uppercase tracking-[0.08em]"
              style={{ color: "#E8967E" }}
            >
              Start here if —
            </span>

            <h3
              className="font-heading font-semibold mt-2 mb-4"
              style={{ fontSize: 20, color: "#1B2A4A" }}
            >
              You&apos;re at an Inflection Point
            </h3>

            <p
              className="font-body mb-6 leading-relaxed"
              style={{ fontSize: 16, color: "#2D2D2D", lineHeight: 1.7 }}
            >
              You know your business needs to evolve digitally, but you&apos;re
              not yet certain what that evolution looks like. You may have tried
              building before and it didn&apos;t land. Or you&apos;re entering a
              new market and need alignment before investment.
            </p>

            {/* Checklist */}
            <ul className="flex flex-col gap-3 mb-8">
              {startHereItems.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span
                    className="mt-0.5 shrink-0 font-bold"
                    style={{ color: "#F4A89A", fontSize: 15 }}
                    aria-hidden="true"
                  >
                    ✓
                  </span>
                  <span
                    className="font-body"
                    style={{ fontSize: 15, color: "#2D2D2D", lineHeight: 1.7 }}
                  >
                    {item}
                  </span>
                </li>
              ))}
            </ul>

            {/* CTA */}
            <motion.a
              href="/connect"
              id="bt-who-cta-start"
              aria-label="Book a free strategy call"
              className="inline-flex items-center justify-center font-heading font-semibold rounded-[8px] self-start transition-all duration-250"
              style={{
                background: "#F4A89A",
                color: "#1B2A4A",
                fontSize: 15,
                padding: "12px 24px",
              }}
              whileHover={{
                background: "#E8967E",
                boxShadow: "0 8px 24px -6px rgba(244,168,154,0.40)",
              }}
              whileTap={{ scale: 0.97 }}
              transition={{ duration: 0.2 }}
            >
              Book a Free Strategy Call
            </motion.a>
          </motion.div>

          {/* RIGHT — Skip Ahead */}
          <motion.div
            variants={fadeUp}
            className="flex flex-col rounded-[16px]"
            style={{
              background: "#F5F0ED",
              border: "1px solid #E8E4E1",
              borderRadius: 16,
              padding: "40px 36px",
            }}
          >
            <span
              className="block text-[11px] font-heading font-semibold uppercase tracking-[0.08em]"
              style={{ color: "#6B6B6B" }}
            >
              Skip ahead if —
            </span>

            <h3
              className="font-heading font-semibold mt-2 mb-4"
              style={{ fontSize: 20, color: "#2C3E6B" }}
            >
              You Already Know What to Build
            </h3>

            <p
              className="font-body mb-6 leading-relaxed"
              style={{ fontSize: 16, color: "#6B6B6B", lineHeight: 1.7 }}
            >
              If you have a defined product vision, a clear problem to solve,
              and you&apos;re ready to start development — our core digital
              product practice is where you begin. No strategy preamble required.
            </p>

            {/* Checklist */}
            <ul className="flex flex-col gap-3 mb-8">
              {skipAheadItems.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span
                    className="mt-0.5 shrink-0 font-bold"
                    style={{ color: "#6B6B6B", fontSize: 15 }}
                    aria-hidden="true"
                  >
                    —
                  </span>
                  <span
                    className="font-body"
                    style={{ fontSize: 15, color: "#6B6B6B", lineHeight: 1.7 }}
                  >
                    {item}
                  </span>
                </li>
              ))}
            </ul>

            {/* Text link */}
            <a
              href="/approach"
              id="bt-who-cta-skip"
              className="group inline-flex items-center gap-1.5 font-heading font-medium transition-colors duration-200 mt-auto"
              style={{ fontSize: 15, color: "#1B2A4A" }}
            >
              <span>→ See our digital product development practice</span>
              <ArrowUpRight
                size={14}
                className="opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200"
              />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

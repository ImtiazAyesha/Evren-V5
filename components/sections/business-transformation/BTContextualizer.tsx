"use client";

import { useRef } from "react";
import { motion, useInView, type Variants } from "framer-motion";

// ═══════════════════════════════════════════════════════════════════════
//  MOTION VARIANTS
// ═══════════════════════════════════════════════════════════════════════

const SPRING = { type: "spring" as const, stiffness: 100, damping: 20 };

const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.14, delayChildren: 0.06 },
  },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { ...SPRING, duration: 0.7 },
  },
};

// ═══════════════════════════════════════════════════════════════════════
//  COMPONENT
// ═══════════════════════════════════════════════════════════════════════

export default function BTContextualizer() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section
      ref={sectionRef}
      id="bt-identity"
      aria-label="Our Identity"
      className="relative w-full overflow-hidden"
      style={{ background: "#FFF9F7", padding: "100px 0" }}
    >
      {/* Subtle background orb */}
      <div
        className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full pointer-events-none z-0"
        style={{
          background:
            "radial-gradient(circle, rgba(244, 168, 154, 0.07) 0%, transparent 70%)",
          filter: "blur(80px)",
          transform: "translate(20%, -20%)",
        }}
      />

      <motion.div
        className="relative z-10 max-w-[1100px] mx-auto px-5 sm:px-6 lg:px-8"
        variants={staggerContainer}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <div className="grid grid-cols-1 lg:grid-cols-[60%_40%] gap-12 lg:gap-12 items-center">

          {/* ── LEFT COLUMN ──────────────────────────────────────────── */}
          <div className="flex flex-col">
            {/* Eyebrow */}
            <motion.span
              variants={fadeUp}
              className="block text-[11px] font-heading font-bold uppercase tracking-[0.12em] mb-4"
              style={{ color: "#E8967E" }}
            >
              Our Identity
            </motion.span>

            {/* H2 */}
            <motion.h2
              variants={fadeUp}
              className="font-heading font-semibold leading-[1.3] tracking-tight mb-6"
              style={{ fontSize: "clamp(26px, 3vw, 32px)", color: "#2C3E6B" }}
            >
              We Are, First and Always, a Digital Product Studio.
            </motion.h2>

            {/* Body paragraphs */}
            <motion.p
              variants={fadeUp}
              className="font-body text-base md:text-lg leading-relaxed mb-6"
              style={{ color: "#2D2D2D", lineHeight: 1.7 }}
            >
              But great products don&apos;t get built in a vacuum. Sometimes the
              challenge isn&apos;t just what to build — it&apos;s how the business
              needs to evolve to support it. That&apos;s where transformation
              strategy comes in.
            </motion.p>

            <motion.p
              variants={fadeUp}
              className="font-body text-base md:text-lg leading-relaxed"
              style={{ color: "#2D2D2D", lineHeight: 1.7 }}
            >
              Before automating, digitizing, or scaling — some organizations
              need to get clear on direction, remove structural blockers, and
              align around what actually needs to change. Evren AI&apos;s Business
              Transformation offering exists for those moments.
            </motion.p>
          </div>

          {/* ── RIGHT COLUMN — Stat Card ─────────────────────────────── */}
          <motion.div
            variants={fadeUp}
            className="w-full flex justify-center lg:justify-end"
          >
            <div
              className="w-full max-w-[320px] flex flex-col items-center text-center rounded-[16px] border"
              style={{
                background: "#FDE8E4",
                borderColor: "#F4A89A",
                borderWidth: "1.5px",
                padding: "40px 32px",
              }}
            >
              {/* Large number */}
              <span
                className="font-heading font-bold leading-none"
                style={{ fontSize: 56, color: "#1B2A4A" }}
              >
                5%
              </span>

              {/* Sub-label */}
              <span
                className="block mt-2 font-body font-medium"
                style={{ fontSize: 14, color: "#E8967E" }}
              >
                of our engagements
              </span>

              {/* Divider */}
              <div
                className="my-4"
                style={{
                  width: 40,
                  height: 1,
                  background: "#F4A89A",
                  margin: "16px auto",
                }}
              />

              {/* Descriptor */}
              <p
                className="font-body leading-relaxed"
                style={{ fontSize: 14, color: "#6B6B6B", lineHeight: 1.6 }}
              >
                Reserved for clients who need strategic clarity before they
                build.
              </p>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}

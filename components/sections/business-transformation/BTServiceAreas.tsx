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
    transition: { staggerChildren: 0.10, delayChildren: 0.06 },
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
//  SERVICE AREA DATA
// ═══════════════════════════════════════════════════════════════════════

const SERVICE_AREAS = [
  {
    num: "01",
    title: "Digital Strategy Consulting",
    body: "We help you define where technology can create the most leverage in your business — identifying the right opportunities before committing to building.",
  },
  {
    num: "02",
    title: "Technology Roadmap Development",
    body: "We map out a clear, prioritized path from where you are today to where your technology needs to take you. No ambiguity. No wasted investment.",
  },
  {
    num: "03",
    title: "Process Optimization",
    body: "Before automating or digitizing a broken process, we help you fix it. Then we build around it. The difference in outcome is significant.",
  },
  {
    num: "04",
    title: "Organizational Change Management",
    body: "We help your teams adopt new digital tools and ways of working — so the products we build together actually get used. Deployment is only half the work.",
  },
];

// ═══════════════════════════════════════════════════════════════════════
//  SERVICE CARD
// ═══════════════════════════════════════════════════════════════════════

function ServiceCard({ num, title, body }: { num: string; title: string; body: string }) {
  return (
    <motion.article
      variants={fadeUp}
      className="group flex flex-col rounded-[16px] transition-all duration-250 ease-out cursor-default"
      whileHover={{
        y: -4,
        boxShadow: "0 16px 48px -12px rgba(27,42,74,0.08)",
      }}
      transition={{ type: "spring", stiffness: 300, damping: 22 }}
      style={{
        background: "#FDE8E4",
        border: "1px solid rgba(244,168,154,0.4)",
        borderRadius: 16,
        padding: "36px 32px",
      }}
    >
      {/* Number pill */}
      <span
        className="inline-flex items-center justify-center self-start mb-5 font-heading font-semibold rounded-full"
        style={{
          fontSize: 10,
          color: "#FFF9F7",
          background: "#1B2A4A",
          padding: "3px 10px",
          borderRadius: 20,
        }}
      >
        {num}
      </span>

      {/* Title */}
      <h3
        className="font-heading font-semibold mb-3"
        style={{ fontSize: 20, color: "#1B2A4A" }}
      >
        {title}
      </h3>

      {/* Body */}
      <p
        className="font-body leading-relaxed"
        style={{ fontSize: 15, color: "#2D2D2D", lineHeight: 1.7 }}
      >
        {body}
      </p>
    </motion.article>
  );
}

// ═══════════════════════════════════════════════════════════════════════
//  COMPONENT
// ═══════════════════════════════════════════════════════════════════════

export default function BTServiceAreas() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section
      ref={sectionRef}
      id="bt-service-areas"
      aria-label="Four Ways We Help Before We Build"
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
            What We Do
          </motion.span>

          <motion.h2
            variants={fadeUp}
            className="font-heading font-semibold leading-[1.3] tracking-tight mb-4"
            style={{ fontSize: "clamp(26px, 3vw, 32px)", color: "#2C3E6B" }}
          >
            Four Ways We Help Before We Build.
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="font-body mx-auto"
            style={{ fontSize: 16, color: "#6B6B6B", maxWidth: 560, lineHeight: 1.7 }}
          >
            Strategy without execution is just advice. Every engagement here
            feeds directly into the product we build together.
          </motion.p>
        </motion.div>

        {/* ── Card Grid ─────────────────────────────────────────────── */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {SERVICE_AREAS.map((sa) => (
            <ServiceCard key={sa.num} {...sa} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

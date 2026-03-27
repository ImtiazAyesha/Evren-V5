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
    transition: { ...SPRING, duration: 0.6 },
  },
};

// ═══════════════════════════════════════════════════════════════════════
//  PROCESS DIAGRAM NODES
// ═══════════════════════════════════════════════════════════════════════

const NODES = [
  {
    label: "Business Transformation",
    sub: "Strategic clarity first",
    active: true,
    style: {
      background: "#F4A89A",
      color: "#1B2A4A",
      subColor: "#E8967E",
    },
  },
  {
    label: "01  Discover",
    sub: "Extended by transformation work",
    active: true,
    navy: true,
    style: {
      background: "#1B2A4A",
      color: "#FFFFFF",
      subColor: "rgba(255,255,255,0.60)",
    },
  },
  {
    label: "02  Build",
    muted: true,
    style: {
      background: "#F5F0ED",
      color: "#6B6B6B",
      border: "1px solid #E8E4E1",
    },
  },
  {
    label: "03  Scale",
    muted: true,
    style: {
      background: "#F5F0ED",
      color: "#6B6B6B",
      border: "1px solid #E8E4E1",
    },
  },
];

// ─── Arrow SVG ──────────────────────────────────────────────────────
function Arrow({ color = "#F4A89A" }: { color?: string }) {
  return (
    <div className="flex justify-center my-1">
      <svg width="20" height="24" viewBox="0 0 20 32" fill="none" aria-hidden="true">
        <line x1="10" y1="0" x2="10" y2="22" stroke={color} strokeWidth="2" strokeLinecap="round" />
        <polyline points="4,16 10,24 16,16" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      </svg>
    </div>
  );
}

// ─── Process Node ────────────────────────────────────────────────────
function ProcessNode({
  node,
  delay,
}: {
  node: typeof NODES[0];
  delay: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.4, delay }}
      className="w-full rounded-[10px] flex flex-col items-start px-5 py-3"
      style={{
        ...node.style,
        borderRadius: 10,
        border: node.style.border ?? "none",
      }}
    >
      <span
        className="font-heading font-semibold"
        style={{ fontSize: 14, color: node.style.color }}
      >
        {node.label}
      </span>
      {node.sub && (
        <span
          className="font-body mt-0.5"
          style={{
            fontSize: 12,
            color: node.style.subColor ?? node.style.color,
            lineHeight: 1.4,
          }}
        >
          {node.sub}
        </span>
      )}
    </motion.div>
  );
}

// ═══════════════════════════════════════════════════════════════════════
//  COMPONENT
// ═══════════════════════════════════════════════════════════════════════

export default function BTBridge() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section
      ref={sectionRef}
      id="bt-bridge"
      aria-label="How Transformation Connects to Product Development"
      style={{ background: "#FFF9F7", padding: "100px 0" }}
    >
      <div className="max-w-[1100px] mx-auto px-5 sm:px-6 lg:px-8">

        <div className="grid grid-cols-1 lg:grid-cols-[55%_45%] gap-12 lg:gap-16 items-center">

          {/* ── LEFT COLUMN ───────────────────────────────────────────── */}
          <motion.div
            className="flex flex-col"
            variants={staggerContainer}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            {/* Eyebrow */}
            <motion.span
              variants={fadeUp}
              className="block text-[11px] font-heading font-bold uppercase tracking-[0.12em] mb-4"
              style={{ color: "#E8967E" }}
            >
              How It Connects
            </motion.span>

            {/* H2 */}
            <motion.h2
              variants={fadeUp}
              className="font-heading font-semibold leading-[1.3] tracking-tight mb-6"
              style={{ fontSize: "clamp(26px, 3vw, 32px)", color: "#2C3E6B" }}
            >
              Transformation Is the On-Ramp. Building Is Always the Road.
            </motion.h2>

            {/* Body */}
            <motion.p
              variants={fadeUp}
              className="font-body leading-relaxed mb-5"
              style={{ fontSize: "clamp(16px, 1.1vw, 18px)", color: "#2D2D2D", lineHeight: 1.7 }}
            >
              Business Transformation at Evren AI isn&apos;t consulting for its
              own sake. Every strategy session, every roadmap, every process
              review feeds directly into the product we build together.
            </motion.p>

            <motion.p
              variants={fadeUp}
              className="font-body leading-relaxed mb-8"
              style={{ fontSize: "clamp(16px, 1.1vw, 18px)", color: "#2D2D2D", lineHeight: 1.7 }}
            >
              Our Discover phase becomes richer. Your product becomes smarter.
              And the investment you make in getting clear pays dividends across
              every sprint that follows.
            </motion.p>

            {/* Callout quote */}
            <motion.div
              variants={fadeUp}
              className="relative rounded-[12px] flex flex-col"
              style={{
                background: "#1B2A4A",
                borderLeft: "4px solid #F4A89A",
                padding: "24px 28px",
                borderRadius: 12,
              }}
            >
              <p
                className="font-body italic leading-relaxed"
                style={{ fontSize: 16, color: "#FFFFFF", lineHeight: 1.7 }}
              >
                &ldquo;Most studios ask: what should we build? We ask: what does
                your business need to become — and then we build toward that.&rdquo;
              </p>
            </motion.div>
          </motion.div>

          {/* ── RIGHT COLUMN — Process Diagram ────────────────────────── */}
          <div>
            <div
              className="w-full rounded-[16px] flex flex-col px-7 py-9"
              style={{
                background: "#F5F0ED",
                border: "1px solid #E8E4E1",
                borderRadius: 16,
              }}
            >
              <a
                href="/approach"
                className="group flex flex-col gap-0 cursor-pointer"
                aria-label="Learn about our approach"
              >
                {/* Nodes with arrows */}
                <ProcessNode node={NODES[0]} delay={0.1} />
                <Arrow color="#F4A89A" />
                <ProcessNode node={NODES[1]} delay={0.25} />
                <Arrow color="#6B6B6B" />
                <ProcessNode node={NODES[2]} delay={0.4} />
                <Arrow color="#6B6B6B" />
                <ProcessNode node={NODES[3]} delay={0.55} />
              </a>

              {/* Footnote */}
              <p
                className="font-body mt-5 text-center"
                style={{ fontSize: 12, color: "#6B6B6B", lineHeight: 1.5 }}
              >
                Transformation feeds Discover — the richest Discover phase
                produces the best products.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";

import { useRef } from "react";
import { motion, useInView, type Variants } from "framer-motion";
import { Monitor, Server, Cloud, Brain } from "lucide-react";

// ═══════════════════════════════════════════════════════════════════════
//  MOTION
// ═══════════════════════════════════════════════════════════════════════

const SPRING = { type: "spring" as const, stiffness: 100, damping: 20 };

const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.14, delayChildren: 0.06 },
  },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { ...SPRING, duration: 0.6 },
  },
};

const cardPop = (delay = 0): Variants => ({
  hidden: { opacity: 0, y: 24, scale: 0.96 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 80,
      damping: 18,
      delay,
    },
  },
});

const drawLine: Variants = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: {
    pathLength: 1,
    opacity: 1,
    transition: { duration: 1.2, ease: "easeInOut", delay: 0.5 },
  },
};

// ═══════════════════════════════════════════════════════════════════════
//  STACK LAYER DATA
// ═══════════════════════════════════════════════════════════════════════

interface Layer {
  id: string;
  category: string;
  label: string;
  sublabel: string;
  technologies: string[];
  borderColor: string;
  bgColor: string;
  iconBg: string;
  iconColor: string;
  dotColor: string;
  icon: typeof Monitor;
  animDelay: number;
  dark?: boolean;
}

const LAYERS: Layer[] = [
  {
    id: "frontend",
    category: "LAYER 01",
    label: "Interfaces that Move",
    sublabel: "Web, mobile, and cross-platform experiences built for speed, accessibility, and the kind of responsiveness users now expect as standard.",
    technologies: ["Web", "Mobile", "Cross-Platform"],
    borderColor: "border-evren-navy/10",
    bgColor: "bg-white",
    iconBg: "bg-evren-navy/5",
    iconColor: "text-evren-navy",
    dotColor: "bg-evren-peach",
    icon: Monitor,
    animDelay: 0,
  },
  {
    id: "backend",
    category: "LAYER 02",
    label: "Logic That Scales",
    sublabel: "API architecture designed for the load you have today and the load you'll have in two years. Flexible enough to extend, solid enough to trust.",
    technologies: ["APIs", "Microservices", "Real-Time"],
    borderColor: "border-evren-navy/10",
    bgColor: "bg-white",
    iconBg: "bg-evren-navy/5",
    iconColor: "text-evren-navy",
    dotColor: "bg-evren-peach",
    icon: Server,
    animDelay: 0.12,
  },
  {
    id: "cloud",
    category: "LAYER 03",
    label: "Infrastructure That Doesn't Flinch",
    sublabel: "Multi-cloud deployment pipelines with automated scaling, monitoring, and rollback — so your product stays live while your team sleeps.",
    technologies: ["Multi-Cloud", "Auto-Scaling", "Zero-Downtime"],
    borderColor: "border-evren-navy/10",
    bgColor: "bg-white",
    iconBg: "bg-evren-navy/5",
    iconColor: "text-evren-navy",
    dotColor: "bg-evren-peach",
    icon: Cloud,
    animDelay: 0.24,
  },
  {
    id: "ai",
    category: "LAYER 04",
    label: "Intelligence at the Core",
    sublabel: "Model-agnostic AI integration built around your data, your domain, and your users — not around whichever model happens to be trending.",
    technologies: ["Model-Agnostic", "Context-Aware", "Domain-Trained"],
    borderColor: "border-evren-navy/10",
    bgColor: "bg-white",
    iconBg: "bg-evren-navy/5",
    iconColor: "text-evren-navy",
    dotColor: "bg-evren-peach",
    icon: Brain,
    animDelay: 0.36,
  },
];

// ═══════════════════════════════════════════════════════════════════════
//  ENTERPRISE STACK — Centered Header + Zigzag Flow Diagram
// ═══════════════════════════════════════════════════════════════════════

export default function EnterpriseStack() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section
      ref={sectionRef}
      id="production-stack"
      aria-label="The production stack"
      className="relative w-full bg-evren-warm-white pt-12 pb-24 lg:pt-16 lg:pb-48 overflow-hidden"
    >
      {/* ── Decorative Orb ──────────────────────────────────────── */}
      <div
        className="absolute top-[-8%] left-[-5%] w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(27, 42, 74, 0.05) 0%, transparent 70%)",
          filter: "blur(100px)",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        {/* ═══════════════════════════════════════════════════════════
            CENTERED HEADER
        ═══════════════════════════════════════════════════════════ */}
        <motion.div
          className="text-center max-w-2xl mx-auto mb-16 lg:mb-20"
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Eyebrow */}
          <motion.p
            variants={fadeUp}
            className="text-sm uppercase tracking-[0.25em] text-evren-peach font-bold font-heading mb-4"
          >
            Technical Proof
          </motion.p>

          {/* H2 */}
          <motion.h2
            variants={fadeUp}
            className="text-3xl md:text-4xl lg:text-[2.5rem] xl:text-5xl text-evren-navy font-heading font-bold mb-6 leading-tight"
          >
            The <span className="relative inline-block">
              <span className="relative z-10">Production</span>
              <svg className="absolute -bottom-1 lg:-bottom-2 left-0 w-full h-[10px] md:h-[14px]" viewBox="0 0 200 12" fill="none" preserveAspectRatio="none" aria-hidden="true">
                <g>
                  <animateTransform attributeName="transform" type="translate" from="-64 0" to="0 0" dur="3s" repeatCount="indefinite" />
                  <path d="M -64 6 Q -48 0, -32 6 T 0 6 T 32 6 T 64 6 T 96 6 T 128 6 T 160 6 T 192 6 T 224 6 T 256 6 T 288 6" stroke="#F4A89A" strokeWidth="2.5" strokeLinecap="round" fill="none" opacity="0.7" />
                </g>
              </svg>
            </span> Stack
          </motion.h2>

          {/* Body */}
          <motion.p
            variants={fadeUp}
            className="text-base lg:text-lg text-evren-charcoal font-body leading-relaxed mb-8"
          >
            Built to the standard your product needs — from MVP to regulated enterprise. Every layer is chosen for reliability, security, and long-term scalability.
          </motion.p>

          {/* Decorative divider */}
          {/* <motion.div
            variants={fadeUp}
            className="w-16 h-[3px] rounded-full mx-auto mb-8"
            style={{
              background:
                "linear-gradient(90deg, rgba(244, 168, 154, 0.7), rgba(232, 150, 126, 0.3))",
            }}
          /> */}

          {/* Compliance badges */}
          <motion.div
            variants={fadeUp}
            className="flex flex-wrap justify-center gap-x-5 gap-y-3"
          >
            {[
              "Security-First Architecture",
              "Privacy by Design",
              "Compliance-Adaptable Infrastructure",
              "Audit-Ready by Default",
            ].map((badge) => (
              <div key={badge} className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-evren-peach" />
                <span
                  className="text-xs font-semibold text-evren-navy/60 uppercase tracking-wider"
                  style={{ fontFamily: "'JetBrains Mono', 'Fira Code', monospace" }}
                >
                  {badge}
                </span>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* ═══════════════════════════════════════════════════════════
            ZIGZAG FLOW DIAGRAM — Full Width
        ═══════════════════════════════════════════════════════════ */}
        <motion.div
          className="relative"
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* ── Mobile: Stacked Cards ──────────────────────────── */}
          <div className="relative md:hidden flex flex-col gap-5">
            {LAYERS.map((layer) => {
              const LayerIcon = layer.icon;
              return (
                <motion.div key={layer.id} variants={cardPop(layer.animDelay)}>
                  <FlowCard layer={layer} LayerIcon={LayerIcon} />
                </motion.div>
              );
            })}
          </div>

          {/* ── Desktop: Zigzag Absolute Layout ───────────────── */}
          <div className="hidden md:block relative" style={{ paddingBottom: "35%" }}>

            {/* ── SVG Dashed Connector Lines ──────────────────── */}
            <svg
              className="absolute inset-0 w-full h-full pointer-events-none z-0"
              viewBox="0 0 1000 400"
              fill="none"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              {/* Connector 1: Card 0 (top-left) ──→ Card 1 (bottom-center-left) */}
              <motion.path
                d="M 220 120 C 240 120, 240 220, 260 220"
                stroke="rgba(27, 42, 74, 0.15)"
                strokeWidth="2"
                strokeDasharray="10 8"
                fill="none"
                variants={drawLine}
              />

              {/* Connector 2: Card 1 (bottom-center-left) ──→ Card 2 (top-center-right) */}
              <motion.path
                d="M 480 220 C 500 220, 500 120, 520 120"
                stroke="rgba(27, 42, 74, 0.15)"
                strokeWidth="2"
                strokeDasharray="10 8"
                fill="none"
                variants={drawLine}
              />

              {/* Connector 3: Card 2 (top-center-right) ──→ Card 3 (bottom-right) */}
              <motion.path
                d="M 740 120 C 760 120, 760 220, 780 220"
                stroke="rgba(27, 42, 74, 0.15)"
                strokeWidth="2"
                strokeDasharray="10 8"
                fill="none"
                variants={drawLine}
              />
            </svg>

            {/* ── Card 0 — Top Left ──────────────────────────── */}
            <motion.div
              variants={cardPop(LAYERS[0].animDelay)}
              className="absolute z-10"
              style={{ top: "0%", left: "0%", width: "22%" }}
            >
              <FlowCard layer={LAYERS[0]} LayerIcon={LAYERS[0].icon} />
            </motion.div>

            {/* ── Card 1 — Center Left (dropped down) ───────── */}
            <motion.div
              variants={cardPop(LAYERS[1].animDelay)}
              className="absolute z-10"
              style={{ top: "25%", left: "26%", width: "22%" }}
            >
              <FlowCard layer={LAYERS[1]} LayerIcon={LAYERS[1].icon} />
            </motion.div>

            {/* ── Card 2 — Center Right ──────────────────────── */}
            <motion.div
              variants={cardPop(LAYERS[2].animDelay)}
              className="absolute z-10"
              style={{ top: "0%", left: "52%", width: "22%" }}
            >
              <FlowCard layer={LAYERS[2]} LayerIcon={LAYERS[2].icon} />
            </motion.div>

            {/* ── Card 3 — Bottom Right (dropped down) ──────── */}
            <motion.div
              variants={cardPop(LAYERS[3].animDelay)}
              className="absolute z-10"
              style={{ top: "25%", left: "78%", width: "22%" }}
            >
              <FlowCard layer={LAYERS[3]} LayerIcon={LAYERS[3].icon} />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// ═══════════════════════════════════════════════════════════════════════
//  FLOW CARD COMPONENT
// ═══════════════════════════════════════════════════════════════════════

function FlowCard({
  layer,
  LayerIcon,
}: {
  layer: Layer;
  LayerIcon: typeof Monitor;
}) {
  return (
    <div
      className={`group relative rounded-2xl p-6 border border-solid ${layer.borderColor} ${layer.bgColor}
                  transition-all duration-500 ease-out hover:-translate-y-2
                  hover:border-evren-peach hover:shadow-[0_20px_40px_-12px_rgba(27,42,74,0.15)] overflow-hidden cursor-default`}
    >
      {/* Decorative Glow on Hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-evren-peach/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-out pointer-events-none" />

      {/* Top Banner: Icon + Category */}
      <div className="flex items-center justify-between gap-3 mb-6 relative z-10 transition-transform duration-500 ease-out">
        <div className="flex items-center gap-4">
          <div
            className="w-12 h-12 rounded-xl border border-evren-peach/20 bg-evren-peach flex items-center justify-center shadow-sm"
          >
            <LayerIcon
              size={20}
              strokeWidth={1.5}
              className="text-white"
            />
          </div>
          <span
            className={`text-xs font-semibold uppercase tracking-[0.15em] ${layer.dark ? "text-evren-peach/80" : "text-evren-navy/60"
              }`}
            style={{ fontFamily: "'JetBrains Mono', 'Fira Code', monospace" }}
          >
            {layer.category}
          </span>
        </div>

        {/* Animated Dropdown Tab Indicator */}
        <div className={`w-6 h-6 rounded-full flex items-center justify-center transition-transform duration-500 group-hover:rotate-180 ${layer.dark ? 'bg-white/10' : 'bg-evren-navy/5'}`}>
          <svg width="10" height="6" viewBox="0 0 10 6" fill="none" className={layer.dark ? 'text-evren-peach' : 'text-evren-navy'}>
            <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </div>

      {/* Content wrapper for height transition */}
      <div className="relative z-10">
        <h3
          className={`text-xl font-heading font-bold mb-2 transition-colors duration-300 ${layer.dark ? "text-white" : "text-evren-navy"
            } group-hover:text-evren-peach`}
        >
          {layer.label}
        </h3>

        {/* Technologies - Always visible */}
        <div className="flex flex-wrap gap-2 mb-4 mt-3">
          {layer.technologies.map((tech) => (
            <span
              key={tech}
              className={`px-2.5 py-1 rounded-md text-[11px] font-semibold border ${layer.dark
                  ? "bg-evren-peach/10 border-evren-peach/20 text-white"
                  : "bg-evren-navy/5 border-evren-navy/10 text-evren-navy/80"
                }`}
              style={{ fontFamily: "'JetBrains Mono', 'Fira Code', monospace" }}
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Expandable description block */}
        <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-[grid-template-rows] duration-500 ease-[cubic-bezier(0.4,0,0.2,1)]">
          <div className="overflow-hidden">
            <p
              className={`text-sm leading-relaxed pb-2 pt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100 ${layer.dark ? "text-white/70" : "text-evren-navy/70"
                }`}
            >
              {layer.sublabel}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

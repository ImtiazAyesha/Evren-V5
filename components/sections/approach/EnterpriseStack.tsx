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
    label: "Client Frontend",
    sublabel: "Next.js / React Native / Flutter",
    technologies: ["TypeScript", "Tailwind", "WebSocket"],
    borderColor: "border-evren-peach/40",
    bgColor: "bg-white",
    iconBg: "bg-evren-peach-light",
    iconColor: "text-evren-peach",
    dotColor: "bg-evren-peach",
    icon: Monitor,
    animDelay: 0,
  },
  {
    id: "backend",
    category: "LAYER 02",
    label: "Backend APIs",
    sublabel: "Node.js / Python / Go Microservices",
    technologies: ["REST", "GraphQL", "gRPC"],
    borderColor: "border-blue-200",
    bgColor: "bg-white",
    iconBg: "bg-blue-50",
    iconColor: "text-blue-500",
    dotColor: "bg-blue-400",
    icon: Server,
    animDelay: 0.12,
  },
  {
    id: "cloud",
    category: "LAYER 03",
    label: "Cloud Infrastructure",
    sublabel: "AWS / GCP / Azure",
    technologies: ["K8s", "Terraform", "CI/CD"],
    borderColor: "border-amber-200",
    bgColor: "bg-white",
    iconBg: "bg-amber-50",
    iconColor: "text-amber-500",
    dotColor: "bg-amber-400",
    icon: Cloud,
    animDelay: 0.24,
  },
  {
    id: "ai",
    category: "LAYER 04",
    label: "LLM / Vector DB",
    sublabel: "OpenAI / Anthropic / Pinecone / Weaviate",
    technologies: ["RAG", "Embeddings", "Fine-Tuning"],
    borderColor: "border-evren-navy/30",
    bgColor: "bg-evren-navy",
    iconBg: "bg-white/10",
    iconColor: "text-evren-peach",
    dotColor: "bg-evren-peach",
    icon: Brain,
    animDelay: 0.36,
    dark: true,
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
      id="enterprise-stack"
      aria-label="The enterprise stack"
      className="relative w-full bg-evren-warm-white py-24 lg:py-32 overflow-hidden"
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
              <span className="relative z-10">Enterprise</span>
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
            Clean, architectural, and secure. A transparent view into the
            production-grade infrastructure powering every Evren-built product.
          </motion.p>

          {/* Decorative divider */}
          <motion.div
            variants={fadeUp}
            className="w-16 h-[3px] rounded-full mx-auto mb-8"
            style={{
              background:
                "linear-gradient(90deg, rgba(244, 168, 154, 0.7), rgba(232, 150, 126, 0.3))",
            }}
          />

          {/* Compliance badges */}
          <motion.div
            variants={fadeUp}
            className="flex flex-wrap justify-center gap-x-5 gap-y-3"
          >
            {[
              "SOC 2 Type II",
              "HIPAA Compliant",
              "GDPR Ready",
              "ISO 27001",
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
          <div className="hidden md:block relative" style={{ paddingBottom: "40%" }}>

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
                d="M 220 120 C 240 120, 240 260, 260 260"
                stroke="rgba(27, 42, 74, 0.15)"
                strokeWidth="2"
                strokeDasharray="10 8"
                fill="none"
                variants={drawLine}
              />

              {/* Connector 2: Card 1 (bottom-center-left) ──→ Card 2 (top-center-right) */}
              <motion.path
                d="M 480 260 C 500 260, 500 120, 520 120"
                stroke="rgba(27, 42, 74, 0.15)"
                strokeWidth="2"
                strokeDasharray="10 8"
                fill="none"
                variants={drawLine}
              />

              {/* Connector 3: Card 2 (top-center-right) ──→ Card 3 (bottom-right) */}
              <motion.path
                d="M 740 120 C 760 120, 760 260, 780 260"
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
              style={{ top: "35%", left: "26%", width: "22%" }}
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
              style={{ top: "35%", left: "78%", width: "22%" }}
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
      className={`group relative rounded-2xl p-5 lg:p-6 border-2 border-dashed ${layer.borderColor} ${layer.bgColor}
                  transition-all duration-300 hover:-translate-y-1
                  hover:shadow-[0_12px_36px_-8px_rgba(0,0,0,0.08)] hover:border-solid`}
    >
      {/* Icon + Category */}
      <div className="flex items-center gap-3 mb-4">
        <div
          className={`w-10 h-10 rounded-xl ${layer.iconBg} flex items-center justify-center`}
        >
          <LayerIcon
            size={18}
            strokeWidth={1.5}
            className={layer.iconColor}
          />
        </div>
        <span
          className={`text-[10px] font-mono uppercase tracking-[0.2em] ${
            layer.dark ? "text-white/50" : "text-evren-medium-gray"
          }`}
          style={{ fontFamily: "'JetBrains Mono', 'Fira Code', monospace" }}
        >
          {layer.category}
        </span>
      </div>

      {/* Label */}
      <h3
        className={`text-lg font-heading font-bold mb-1 ${
          layer.dark ? "text-white" : "text-evren-navy"
        }`}
        style={{ fontFamily: "'JetBrains Mono', 'Fira Code', monospace" }}
      >
        {layer.label}
      </h3>
      <p
        className={`text-xs mb-4 ${
          layer.dark ? "text-white/60" : "text-evren-medium-gray"
        }`}
        style={{ fontFamily: "'JetBrains Mono', 'Fira Code', monospace" }}
      >
        {layer.sublabel}
      </p>

      {/* Connection status */}
      {/* <div className="flex items-center gap-1.5 mb-3">
        <span
          className={`text-xs font-semibold ${
            layer.dark ? "text-evren-peach" : "text-evren-navy/50"
          }`}
        >
          →
        </span>
        <span
          className={`text-[10px] font-semibold uppercase tracking-wider ${
            layer.dark ? "text-evren-peach" : "text-evren-navy/40"
          }`}
          style={{ fontFamily: "'JetBrains Mono', 'Fira Code', monospace" }}
        >
          CONNECTED
        </span>
      </div> */}

      {/* Tech tags */}
      <div className="flex flex-wrap gap-1.5">
        {layer.technologies.map((tech) => (
          <span
            key={tech}
            className={`px-2 py-0.5 rounded-md text-[10px] font-semibold ${
              layer.dark
                ? "bg-white/10 text-white/80"
                : "bg-evren-navy/5 text-evren-navy/70"
            }`}
            style={{ fontFamily: "'JetBrains Mono', 'Fira Code', monospace" }}
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
}

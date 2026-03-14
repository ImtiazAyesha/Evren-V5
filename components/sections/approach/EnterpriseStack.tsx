"use client";

import { useRef } from "react";
import { motion, useInView, type Variants } from "framer-motion";

// ═══════════════════════════════════════════════════════════════════════
//  MOTION
// ═══════════════════════════════════════════════════════════════════════

const fadeUp = (delay = 0): Variants => ({
  hidden: { opacity: 0, y: 36 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 80,
      damping: 16,
      delay,
    },
  },
});

const slideIn = (
  direction: "left" | "right" | "up",
  delay = 0
): Variants => ({
  hidden: {
    opacity: 0,
    x: direction === "left" ? -40 : direction === "right" ? 40 : 0,
    y: direction === "up" ? 30 : 0,
  },
  visible: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 70,
      damping: 16,
      delay,
    },
  },
});

const lineGrow = (delay = 0): Variants => ({
  hidden: { scaleX: 0 },
  visible: {
    scaleX: 1,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
      delay,
    },
  },
});

const lineGrowY = (delay = 0): Variants => ({
  hidden: { scaleY: 0 },
  visible: {
    scaleY: 1,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
      delay,
    },
  },
});

// ═══════════════════════════════════════════════════════════════════════
//  STACK LAYER DATA
// ═══════════════════════════════════════════════════════════════════════

const LAYERS = [
  {
    id: "frontend",
    label: "Client Frontend",
    sublabel: "Next.js / React Native / Flutter",
    technologies: ["TypeScript", "Tailwind", "WebSocket"],
    color: "bg-evren-peach-light",
    borderColor: "border-evren-peach/30",
    accentColor: "bg-evren-peach",
    dotColor: "bg-evren-peach",
    animDelay: 0,
  },
  {
    id: "backend",
    label: "Backend APIs",
    sublabel: "Node.js / Python / Go Microservices",
    technologies: ["REST", "GraphQL", "gRPC"],
    color: "bg-white",
    borderColor: "border-evren-light-gray",
    accentColor: "bg-evren-navy/10",
    dotColor: "bg-evren-navy/40",
    animDelay: 0.15,
  },
  {
    id: "cloud",
    label: "Cloud Infrastructure",
    sublabel: "AWS / GCP / Azure",
    technologies: ["K8s", "Terraform", "CI/CD"],
    color: "bg-evren-navy/[0.03]",
    borderColor: "border-evren-navy/10",
    accentColor: "bg-evren-navy/10",
    dotColor: "bg-evren-navy/30",
    animDelay: 0.3,
  },
  {
    id: "ai",
    label: "LLM / Vector DB",
    sublabel: "OpenAI / Anthropic / Pinecone / Weaviate",
    technologies: ["RAG", "Embeddings", "Fine-Tuning"],
    color: "bg-evren-navy",
    borderColor: "border-evren-navy",
    accentColor: "bg-evren-peach",
    dotColor: "bg-evren-peach",
    animDelay: 0.45,
    dark: true,
  },
];

// ═══════════════════════════════════════════════════════════════════════
//  ENTERPRISE STACK SECTION
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
        {/* ── Section Header ───────────────────────────────────── */}
        <motion.div
          className="text-center mb-16 lg:mb-20"
          variants={fadeUp(0)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <p className="text-sm uppercase tracking-[0.25em] text-evren-peach font-bold font-heading mb-4">
            Technical Proof
          </p>
          <h2 className="text-3xl md:text-5xl text-evren-navy font-heading font-bold mb-6 leading-tight max-w-3xl mx-auto">
            The Enterprise Stack
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-evren-charcoal font-body leading-relaxed">
            Clean, architectural, and secure. A transparent view into the
            production-grade infrastructure powering every Evren-built product.
          </p>
        </motion.div>

        {/* ═══════════════════════════════════════════════════════════
            STACK DIAGRAM — Desktop: Horizontal Flow
            Mobile: Vertical Stack
           ═══════════════════════════════════════════════════════════ */}

        {/* ── Desktop Diagram ──────────────────────────────────── */}
        <div className="hidden lg:block">
          <div className="relative">
            {/* Horizontal connector line behind cards */}
            <div className="absolute top-1/2 left-0 right-0 -translate-y-1/2 z-0 px-12">
              <motion.div
                className="h-px bg-gradient-to-r from-evren-peach via-evren-navy/20 to-evren-navy origin-left"
                variants={lineGrow(0.3)}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
              />
            </div>

            {/* Layer cards in a row */}
            <div className="relative z-10 grid grid-cols-4 gap-6">
              {LAYERS.map((layer, idx) => (
                <motion.div
                  key={layer.id}
                  className="flex flex-col"
                  variants={slideIn("up", layer.animDelay + 0.2)}
                  initial="hidden"
                  animate={isInView ? "visible" : "hidden"}
                >
                  {/* Card */}
                  <div
                    className={`relative rounded-studio p-6 border ${layer.borderColor} ${layer.color}
                                transition-all duration-300 hover:-translate-y-1 hover:shadow-warm group`}
                  >
                    {/* Status dot */}
                    <div className="flex items-center gap-2 mb-4">
                      <div
                        className={`w-2 h-2 rounded-full ${layer.dotColor}`}
                      />
                      <span
                        className={`text-[10px] font-mono uppercase tracking-[0.2em] ${layer.dark
                            ? "text-white/50"
                            : "text-evren-medium-gray"
                          }`}
                        style={{ fontFamily: "'JetBrains Mono', 'Fira Code', monospace" }}
                      >
                        Layer {String(idx + 1).padStart(2, "0")}
                      </span>
                    </div>

                    {/* Label */}
                    <h3
                      className={`text-lg font-heading font-bold mb-1 ${layer.dark ? "text-white" : "text-evren-navy"
                        }`}
                      style={{ fontFamily: "'JetBrains Mono', 'Fira Code', monospace" }}
                    >
                      {layer.label}
                    </h3>
                    <p
                      className={`text-xs mb-4 ${layer.dark
                          ? "text-white/60"
                          : "text-evren-medium-gray"
                        }`}
                      style={{ fontFamily: "'JetBrains Mono', 'Fira Code', monospace" }}
                    >
                      {layer.sublabel}
                    </p>

                    {/* Tech tags */}
                    <div className="flex flex-wrap gap-1.5">
                      {layer.technologies.map((tech) => (
                        <span
                          key={tech}
                          className={`px-2 py-0.5 rounded-md text-[10px] font-semibold ${layer.dark
                              ? "bg-white/10 text-white/80"
                              : "bg-evren-navy/5 text-evren-navy/70"
                            }`}
                          style={{ fontFamily: "'JetBrains Mono', 'Fira Code', monospace" }}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Hover accent */}
                    <div
                      className={`absolute bottom-0 left-4 right-4 h-0.5 rounded-t-full ${layer.accentColor}
                                  scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left`}
                    />
                  </div>

                  {/* Arrow connector between cards */}
                  {idx < LAYERS.length - 1 && (
                    <div className="hidden lg:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 z-20">
                      {/* This is handled by the horizontal line + visual flow */}
                    </div>
                  )}
                </motion.div>
              ))}
            </div>

            {/* Flow direction arrows overlaid on the line */}
            <div className="absolute top-1/2 left-0 right-0 -translate-y-1/2 z-[5] px-12 flex justify-between">
              {[0, 1, 2].map((i) => (
                <motion.div
                  key={i}
                  className="relative"
                  style={{
                    left: `${(i + 1) * 25 - 2}%`,
                    position: "absolute",
                  }}
                  variants={slideIn("left", 0.6 + i * 0.15)}
                  initial="hidden"
                  animate={isInView ? "visible" : "hidden"}
                >
                  <div className="w-6 h-6 rounded-full bg-evren-warm-white border border-evren-navy/15 flex items-center justify-center -translate-x-1/2 -translate-y-1/2 shadow-sm">
                    <svg
                      width="10"
                      height="10"
                      viewBox="0 0 10 10"
                      fill="none"
                      aria-hidden="true"
                    >
                      <path
                        d="M2 5H8M8 5L5.5 2.5M8 5L5.5 7.5"
                        stroke="#1B2A4A"
                        strokeWidth="1.2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* ── Mobile Diagram (Vertical Stack) ──────────────────── */}
        <div className="lg:hidden">
          <div className="relative">
            {/* Vertical connector line */}
            <div className="absolute top-0 bottom-0 left-8 z-0 w-px">
              <motion.div
                className="w-full h-full bg-gradient-to-b from-evren-peach via-evren-navy/20 to-evren-navy origin-top"
                variants={lineGrowY(0.3)}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
              />
            </div>

            {/* Layer cards stacked */}
            <div className="relative z-10 flex flex-col gap-6">
              {LAYERS.map((layer, idx) => (
                <motion.div
                  key={layer.id}
                  className="flex items-start gap-4"
                  variants={slideIn("right", layer.animDelay + 0.2)}
                  initial="hidden"
                  animate={isInView ? "visible" : "hidden"}
                >
                  {/* Node on the line */}
                  <div className="flex flex-col items-center shrink-0 mt-5">
                    <div
                      className={`w-4 h-4 rounded-full border-2 ${layer.dark
                          ? "bg-evren-navy border-evren-peach"
                          : "bg-white border-evren-peach"
                        } z-10`}
                    />
                    {idx < LAYERS.length - 1 && (
                      <div className="w-px h-6 bg-transparent" />
                    )}
                  </div>

                  {/* Card */}
                  <div
                    className={`flex-1 rounded-studio p-5 border ${layer.borderColor} ${layer.color}`}
                  >
                    <div className="flex items-center gap-2 mb-3">
                      <div
                        className={`w-2 h-2 rounded-full ${layer.dotColor}`}
                      />
                      <span
                        className={`text-[10px] uppercase tracking-[0.2em] ${layer.dark
                            ? "text-white/50"
                            : "text-evren-medium-gray"
                          }`}
                        style={{ fontFamily: "'JetBrains Mono', 'Fira Code', monospace" }}
                      >
                        Layer {String(idx + 1).padStart(2, "0")}
                      </span>
                    </div>

                    <h3
                      className={`text-base font-bold mb-1 ${layer.dark ? "text-white" : "text-evren-navy"
                        }`}
                      style={{ fontFamily: "'JetBrains Mono', 'Fira Code', monospace" }}
                    >
                      {layer.label}
                    </h3>
                    <p
                      className={`text-xs mb-3 ${layer.dark
                          ? "text-white/60"
                          : "text-evren-medium-gray"
                        }`}
                      style={{ fontFamily: "'JetBrains Mono', 'Fira Code', monospace" }}
                    >
                      {layer.sublabel}
                    </p>

                    <div className="flex flex-wrap gap-1.5">
                      {layer.technologies.map((tech) => (
                        <span
                          key={tech}
                          className={`px-2 py-0.5 rounded-md text-[10px] font-semibold ${layer.dark
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
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* ── Security & Compliance footer ─────────────────────── */}
        <motion.div
          className="mt-16 flex flex-wrap items-center justify-center gap-6 md:gap-10"
          variants={fadeUp(0.6)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
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
      </div>
    </section>
  );
}

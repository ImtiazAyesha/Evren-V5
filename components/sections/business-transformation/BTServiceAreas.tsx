"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Compass, Map, Settings, Users } from "lucide-react";

// ═══════════════════════════════════════════════════════════════════════
//  SERVICE AREA DATA
// ═══════════════════════════════════════════════════════════════════════

const SERVICE_AREAS = [
  {
    label: "STRATEGY",
    title: "Digital Strategy Consulting",
    body: "We help you define where technology can create the most leverage in your business identifying the right opportunities before committing to building.",
    icon: Compass,
    colSpan: "lg:col-span-2",
    theme: "dark",
  },
  {
    label: "PLANNING",
    title: "Technology Roadmap",
    body: "We map out a clear, prioritized path from where you are today to where your technology needs to take you. No ambiguity. No wasted investment.",
    icon: Map,
    colSpan: "lg:col-span-1",
    theme: "light",
  },
  {
    label: "EFFICIENCY",
    title: "Process Optimization",
    body: "Before automating or digitizing a broken process, we help you fix it. Then we build around it. The difference in outcome is significant.",
    icon: Settings,
    colSpan: "lg:col-span-1",
    theme: "light",
  },
  {
    label: "ADOPTION",
    title: "Organizational Change",
    body: "We help your teams adopt new digital tools and ways of working so the products we build together actually get used. Deployment is only half the work.",
    icon: Users,
    colSpan: "lg:col-span-2",
    theme: "peach",
  },
];

// ═══════════════════════════════════════════════════════════════════════
//  SERVICE CARD — Bento Style
// ═══════════════════════════════════════════════════════════════════════

function ServiceCard({
  label,
  title,
  body,
  icon: Icon,
  colSpan,
  theme,
  index,
}: {
  label: string;
  title: string;
  body: string;
  icon: any;
  colSpan: string;
  theme: string;
  index: number;
}) {
  const cardRef = useRef<HTMLElement>(null);
  const isInView = useInView(cardRef, { once: true, margin: "-50px" });

  // Theme styling logic
  const isDark = theme === "dark";
  const isPeach = theme === "peach";

  const baseClasses = `group relative overflow-hidden rounded-[24px] p-[32px] md:p-[40px] flex flex-col justify-center transition-all duration-300 ease-out hover:-translate-y-1 cursor-default ${colSpan}`;
  
  const themeClasses = isDark
    ? "bg-evren-navy border border-evren-navy-light/30 shadow-[0_20px_60px_rgba(27,42,74,0.1)] hover:shadow-[0_20px_60px_rgba(27,42,74,0.2)]"
    : isPeach
    ? "bg-gradient-to-br from-[#FFF5F2] to-white border border-evren-peach/20 hover:border-evren-peach/40 hover:shadow-[0_20px_40px_rgba(244,168,154,0.15)]"
    : "bg-white border border-evren-light-gray/60 hover:border-evren-peach/30 hover:shadow-[0_20px_40px_rgba(27,42,74,0.06)]";

  return (
    <motion.article
      ref={cardRef}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: 0.1 * index }}
      className={`${baseClasses} ${themeClasses} min-h-[280px]`}
    >
      {/* Background massive translucent icon */}
      <div 
        className={`absolute -top-10 -right-10 transform origin-center rotate-[15deg] opacity-[0.04] group-hover:opacity-[0.08] group-hover:scale-110 transition-all duration-700 pointer-events-none ${isDark ? "text-white" : isPeach ? "text-evren-peach" : "text-evren-navy"}`}
      >
        <Icon size={320} strokeWidth={1.5} />
      </div>

      <div className="relative z-10 flex flex-col h-full max-w-[85%]">
        {/* Label block */}
        <span className="font-heading font-extrabold text-[10px] md:text-[11px] text-evren-peach uppercase tracking-[0.2em] mb-4">
          {label}
        </span>

        {/* Content */}
        <h3
          className={`font-heading font-extrabold text-[24px] md:text-[28px] lg:text-[32px] leading-[1.2] mb-4 tracking-tight ${
            isDark ? "text-white" : "text-evren-navy"
          }`}
        >
          {title}
        </h3>
        <p
          className={`font-body text-[15px] md:text-[16px] leading-[1.65] ${
            isDark ? "text-white/70" : "text-evren-charcoal/80"
          }`}
        >
          {body}
        </p>
      </div>
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
      className="bg-white py-16 lg:py-32 px-5 sm:px-6 relative overflow-hidden"
    >
      {/* ── Background subtle grid ─────────────────────────────────── */}
      <div
        className="absolute inset-0 pointer-events-none z-0"
        style={{
          backgroundSize: "48px 48px",
          backgroundImage:
            "linear-gradient(to right, rgba(27, 42, 74, 0.02) 1px, transparent 1px), linear-gradient(to bottom, rgba(27, 42, 74, 0.02) 1px, transparent 1px)",
          maskImage:
            "radial-gradient(ellipse 70% 50% at 50% 0%, black 15%, transparent 75%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 70% 50% at 50% 0%, black 15%, transparent 75%)",
        }}
      />

      <div className="max-w-[1280px] mx-auto relative z-10">
        {/* ── Section Header ─────────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 lg:mb-24"
        >
          <span className="block text-[12px] font-heading font-bold text-evren-peach uppercase tracking-[0.15em] mb-[16px]">
            What We Do
          </span>

          <h2 className="font-heading text-[36px] md:text-[48px] lg:text-[56px] font-extrabold text-evren-navy leading-[1.1] tracking-tight max-w-[800px] mx-auto mb-6">
            Four ways we help before we{" "}
            <span className="relative inline-block">
              <span className="relative z-10">build.</span>
              {/* Curly underline effect */}
              <svg
                className="absolute -bottom-1 md:-bottom-2 left-0 w-full h-[10px] md:h-[14px] text-evren-peach pointer-events-none z-0"
                viewBox="0 0 200 12"
                preserveAspectRatio="none"
                aria-hidden="true"
              >
                <motion.g
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : {}}
                  transition={{ delay: 0.8, duration: 0.8 }}
                >
                  <animateTransform 
                    attributeName="transform" 
                    type="translate" 
                    from="-64 0" 
                    to="0 0" 
                    dur="3s" 
                    repeatCount="indefinite" 
                  />
                  <path
                    d="M -64 6 Q -48 0, -32 6 T 0 6 T 32 6 T 64 6 T 96 6 T 128 6 T 160 6 T 192 6 T 224 6 T 256 6 T 288 6"
                    stroke="currentColor"
                    strokeWidth="3.5"
                    strokeLinecap="round"
                    fill="none"
                  />
                </motion.g>
              </svg>
            </span>
          </h2>

          <p className="font-body text-[16px] md:text-[18px] text-evren-charcoal/60 leading-[1.7] max-w-[600px] mx-auto">
            Strategy without execution is just advice. Every engagement here
            feeds directly into the product we build together.
          </p>
        </motion.div>

        {/* ── Bento Grid ─────────────────────────────────────────────── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICE_AREAS.map((sa, idx) => (
            <ServiceCard key={sa.label} {...sa} index={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}

"use client";

import { useRef } from "react";
import { motion, useInView, type Variants } from "framer-motion";

// ─── MOTION ─────────────────────────────────────────────────────────
const SPRING = { type: "spring" as const, stiffness: 100, damping: 20 };

const stagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { ...SPRING } },
};

// ─── CUSTOM LINE-ART ICONS (Navy stroke, Peach blob background) ─────

interface ValueIconProps {
  className?: string;
}

function PartnershipIcon({ className }: ValueIconProps) {
  return (
    <svg viewBox="0 0 48 48" fill="none" className={className} aria-hidden="true">
      {/* Peach blob */}
      <ellipse cx="24" cy="24" rx="20" ry="19" fill="#FDE8E4" />
      {/* Handshake line art */}
      <path
        d="M14 26l4-4 3 1.5 4-3.5 5 2 4-4"
        stroke="#1B2A4A"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 22h4l3 2 4-3 5 2 4-3h4"
        stroke="#1B2A4A"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="18" cy="18" r="2.5" stroke="#1B2A4A" strokeWidth="1.4" fill="none" />
      <circle cx="30" cy="18" r="2.5" stroke="#1B2A4A" strokeWidth="1.4" fill="none" />
    </svg>
  );
}

function IntelligentIcon({ className }: ValueIconProps) {
  return (
    <svg viewBox="0 0 48 48" fill="none" className={className} aria-hidden="true">
      <ellipse cx="24" cy="24" rx="20" ry="19" fill="#FDE8E4" />
      {/* Brain / neural nodes */}
      <circle cx="24" cy="16" r="2" stroke="#1B2A4A" strokeWidth="1.4" fill="none" />
      <circle cx="17" cy="24" r="2" stroke="#1B2A4A" strokeWidth="1.4" fill="none" />
      <circle cx="31" cy="24" r="2" stroke="#1B2A4A" strokeWidth="1.4" fill="none" />
      <circle cx="20" cy="32" r="2" stroke="#1B2A4A" strokeWidth="1.4" fill="none" />
      <circle cx="28" cy="32" r="2" stroke="#1B2A4A" strokeWidth="1.4" fill="none" />
      <path
        d="M24 18v0 M22.5 17l-3.7 5.3 M25.5 17l3.7 5.3 M18.8 25.5l1.8 4.8 M29.2 25.5l-1.8 4.8 M22 32h4"
        stroke="#1B2A4A"
        strokeWidth="1.3"
        strokeLinecap="round"
      />
    </svg>
  );
}

function KnowledgeIcon({ className }: ValueIconProps) {
  return (
    <svg viewBox="0 0 48 48" fill="none" className={className} aria-hidden="true">
      <ellipse cx="24" cy="24" rx="20" ry="19" fill="#FDE8E4" />
      {/* Book / transfer */}
      <rect x="14" y="16" width="20" height="16" rx="2" stroke="#1B2A4A" strokeWidth="1.5" fill="none" />
      <path d="M24 16v16" stroke="#1B2A4A" strokeWidth="1.3" />
      <path d="M14 20h10M24 20h10" stroke="#1B2A4A" strokeWidth="1.3" strokeLinecap="round" />
      <path
        d="M19 25l2 2 2-2M27 27l2-2 2 2"
        stroke="#1B2A4A"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ExpandingIcon({ className }: ValueIconProps) {
  return (
    <svg viewBox="0 0 48 48" fill="none" className={className} aria-hidden="true">
      <ellipse cx="24" cy="24" rx="20" ry="19" fill="#FDE8E4" />
      {/* Expanding arrows */}
      <path
        d="M24 14v20M14 24h20"
        stroke="#1B2A4A"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M20 18l4-4 4 4M28 20l4 4-4 4M20 28l-4-4 4-4M28 30l-4 4-4-4"
        stroke="#1B2A4A"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function HumanCenteredIcon({ className }: ValueIconProps) {
  return (
    <svg viewBox="0 0 48 48" fill="none" className={className} aria-hidden="true">
      <ellipse cx="24" cy="24" rx="20" ry="19" fill="#FDE8E4" />
      {/* Person + heart craft */}
      <circle cx="24" cy="17" r="3.5" stroke="#1B2A4A" strokeWidth="1.5" fill="none" />
      <path
        d="M17 33c0-3.866 3.134-7 7-7s7 3.134 7 7"
        stroke="#1B2A4A"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M24 28l-1.2-1.1C21.1 25.4 20 24.4 20 23.2c0-1 .8-1.8 1.8-1.8.6 0 1.1.3 1.4.7.3-.4.9-.7 1.4-.7 1 0 1.8.8 1.8 1.8 0 1.2-1.1 2.2-2.8 3.7L24 28Z"
        stroke="#1B2A4A"
        strokeWidth="1"
        fill="none"
      />
    </svg>
  );
}

// ─── VALUES DATA ────────────────────────────────────────────────────
const values = [
  {
    title: "Partnership First",
    description:
      "We don't build for clients. We build with them. Every engagement begins and ends with shared ownership.",
    icon: PartnershipIcon,
  },
  {
    title: "Intelligent by Design",
    description:
      "AI isn't bolted on—it's woven into the architecture from day one. Every system we ship thinks before it acts.",
    icon: IntelligentIcon,
  },
  {
    title: "Knowledge Transfer",
    description:
      "We leave your team smarter than we found it. Documentation, training, and empowerment are non-negotiable deliverables.",
    icon: KnowledgeIcon,
  },
  {
    title: "Always Expanding",
    description:
      "Complacency is the enemy. We invest relentlessly in new tools, frameworks, and methodologies so our partners never fall behind.",
    icon: ExpandingIcon,
  },
  {
    title: "Human-Centered Craft",
    description:
      "Great technology disappears into the experience. We obsess over the details that make complex systems feel effortless.",
    icon: HumanCenteredIcon,
  },
];

// ═══════════════════════════════════════════════════════════════════════
//  CORE VALUES — 5 values with line-art icons, clean scroll reveal
// ═══════════════════════════════════════════════════════════════════════

export default function CoreValuesSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.15 });

  return (
    <section
      id="core-values"
      className="relative w-full bg-evren-warm-white py-24 lg:py-32 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          ref={sectionRef}
          variants={stagger}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* ── Header ────────────────────────────────────────────── */}
          <div className="text-center mb-14 lg:mb-18">
            <motion.div
              variants={fadeUp}
              className="inline-flex items-center gap-2 rounded-full bg-evren-peach-light px-4 py-2 mb-5"
            >
              <span className="text-[12px] font-heading font-semibold text-evren-navy tracking-widest uppercase">
                What We Stand For
              </span>
            </motion.div>

            <motion.h2
              variants={fadeUp}
              className="font-heading font-extrabold text-evren-navy text-3xl sm:text-4xl lg:text-5xl leading-[1.1] -tracking-tight mb-5"
            >
              Five principles.<br className="hidden md:block" /> Zero compromise.
            </motion.h2>

            <motion.p
              variants={fadeUp}
              className="font-body text-evren-medium-gray text-lg max-w-xl mx-auto leading-relaxed"
            >
              These aren&rsquo;t aspirational posters—they&rsquo;re the operating
              system behind every decision we make.
            </motion.p>
          </div>

          {/* ── 5-column grid (3/2 on smaller) ────────────────────── */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 lg:gap-5">
            {values.map((value, i) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={value.title}
                  variants={fadeUp}
                  className="flex flex-col items-center text-center bg-evren-warm-gray rounded-studio p-6 lg:p-7
                             transition-all duration-300 hover:shadow-warm"
                >
                  {/* Icon with peach blob bg */}
                  <div className="w-16 h-16 mb-5">
                    <Icon className="w-full h-full" />
                  </div>

                  <h3 className="font-heading font-bold text-evren-navy text-base lg:text-lg mb-2 -tracking-tight">
                    {value.title}
                  </h3>

                  <p className="font-body text-evren-medium-gray text-sm leading-relaxed">
                    {value.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

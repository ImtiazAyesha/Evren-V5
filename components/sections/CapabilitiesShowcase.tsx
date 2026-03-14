"use client";

import { useRef, useState } from "react";
import { motion, useInView, type Variants } from "framer-motion";

// ═══════════════════════════════════════════════════════════════════════
//  MOTION VARIANTS — Extracted for clean JSX
// ═══════════════════════════════════════════════════════════════════════

const gridContainerVariants: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1, delayChildren: 0.15 },
  },
};

const cardFadeUpVariants: Variants = {
  hidden: { opacity: 0, y: 32, filter: "blur(4px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

const headerContainerVariants: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12, delayChildren: 0.05 },
  },
};

const headerItemVariants: Variants = {
  hidden: { opacity: 0, y: 24, filter: "blur(4px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] },
  },
};

// ═══════════════════════════════════════════════════════════════════════
//  CARD DATA
// ═══════════════════════════════════════════════════════════════════════

interface CardData {
  title: string;
  description: string;
  span: string;
  visual?: "table" | "phone" | "browser" | "ai-gradient";
}

const CARDS: CardData[] = [
  {
    title: "Internal Enterprise Portals",
    description:
      "Custom software that modernizes legacy operations. We turn spreadsheets and disjointed SaaS tools into unified, AI-powered central nervous systems.",
    span: "md:col-span-2",
    visual: "table",
  },
  {
    title: "Mobile Applications",
    description:
      "Native and cross-platform apps designed for flawless human-computer interaction in the field.",
    span: "",
    visual: "phone",
  },
  {
    title: "Web Platforms",
    description:
      "Scalable, high-performance web applications built for massive user concurrency and complex data rendering.",
    span: "",
    visual: "browser",
  },
  {
    title: "AI-Native Engineering & Agents",
    description:
      "Our unfair advantage. We don't just bolt on APIs; we embed proprietary, autonomous agents directly into your products to automate complex, multi-step workflows.",
    span: "md:col-span-2",
    visual: "ai-gradient",
  },
];

// ═══════════════════════════════════════════════════════════════════════
//  VISUAL FLOURISHES — Pure HTML/CSS, no icons
// ═══════════════════════════════════════════════════════════════════════

/** Abstract data table skeleton — thin gray rows */
function TableSkeleton() {
  return (
    <div className="absolute bottom-8 right-8 w-[220px] opacity-[0.25]">
      {/* Header row */}
      <div className="flex gap-4 mb-3 pb-2 border-b border-white/20">
        <div className="h-[6px] w-16 bg-white/40 rounded-full" />
        <div className="h-[6px] w-20 bg-white/40 rounded-full" />
        <div className="h-[6px] w-12 bg-white/40 rounded-full" />
      </div>
      {/* Data rows */}
      {[1, 2, 3, 4].map((row) => (
        <div
          key={row}
          className="flex gap-4 mb-2.5"
          style={{ opacity: 1 - row * 0.15 }}
        >
          <div className="h-[5px] w-14 bg-white/30 rounded-full" />
          <div className="h-[5px] w-24 bg-white/30 rounded-full" />
          <div className="h-[5px] w-10 bg-white/30 rounded-full" />
        </div>
      ))}
    </div>
  );
}

/** Abstract phone silhouette — minimal 1px border div */
function PhoneSilhouette() {
  return (
    <div className="absolute bottom-6 right-8 opacity-[0.22]">
      <div className="w-[72px] h-[130px] rounded-[16px] border border-white/40 relative">
        {/* Notch */}
        <div className="absolute top-2.5 left-1/2 -translate-x-1/2 w-8 h-[3px] bg-white/30 rounded-full" />
        {/* Screen content skeleton */}
        <div className="absolute top-8 left-2.5 right-2.5 space-y-2">
          <div className="h-[4px] w-full bg-white/25 rounded-full" />
          <div className="h-[4px] w-3/4 bg-white/20 rounded-full" />
          <div className="h-[4px] w-1/2 bg-white/15 rounded-full" />
          <div className="mt-3 h-[18px] w-full bg-white/10 rounded-md" />
        </div>
        {/* Home indicator */}
        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-8 h-[3px] bg-white/25 rounded-full" />
      </div>
    </div>
  );
}

/** Abstract browser window silhouette — tab bar, address bar, layout blocks */
function BrowserSilhouette() {
  return (
    <div className="absolute bottom-6 right-8 opacity-[0.22]">
      <div className="w-[140px] h-[100px] rounded-lg border border-white/40 relative overflow-hidden">
        {/* Tab bar */}
        <div className="flex items-center gap-1.5 px-2 py-1.5 border-b border-white/20">
          <div className="flex gap-1">
            <div className="w-[5px] h-[5px] rounded-full bg-white/30" />
            <div className="w-[5px] h-[5px] rounded-full bg-white/25" />
            <div className="w-[5px] h-[5px] rounded-full bg-white/20" />
          </div>
          <div className="h-[4px] w-10 bg-white/20 rounded-full ml-1" />
        </div>
        {/* Address bar */}
        <div className="mx-2 mt-1.5 h-[5px] bg-white/15 rounded-full" />
        {/* Content skeleton */}
        <div className="px-2 mt-2.5 flex gap-1.5">
          {/* Sidebar */}
          <div className="w-[30px] space-y-1.5">
            <div className="h-[4px] w-full bg-white/15 rounded-full" />
            <div className="h-[4px] w-3/4 bg-white/12 rounded-full" />
            <div className="h-[4px] w-full bg-white/10 rounded-full" />
            <div className="h-[4px] w-2/3 bg-white/8 rounded-full" />
          </div>
          {/* Main content area */}
          <div className="flex-1 space-y-1.5">
            <div className="h-[16px] w-full bg-white/10 rounded-sm" />
            <div className="flex gap-1">
              <div className="h-[10px] flex-1 bg-white/8 rounded-sm" />
              <div className="h-[10px] flex-1 bg-white/8 rounded-sm" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/** Premium agent workflow pipeline — orchestration canvas silhouette */
function AgentNodeSilhouette() {
  return (
    <div className="absolute bottom-4 right-6 opacity-[0.18]">
      <svg width="220" height="130" viewBox="0 0 220 130" fill="none">
        {/* ─── Bezier connection paths ─── */}
        {/* Trigger → Agent 1 */}
        <path d="M 38 50 C 55 50, 55 32, 72 32" stroke="white" strokeWidth="0.8" opacity="0.5" />
        {/* Trigger → Agent 2 */}
        <path d="M 38 50 C 55 50, 55 68, 72 68" stroke="white" strokeWidth="0.8" opacity="0.5" />
        {/* Agent 1 → Decision */}
        <path d="M 112 32 C 125 32, 125 50, 138 50" stroke="white" strokeWidth="0.8" opacity="0.45" />
        {/* Agent 2 → Decision */}
        <path d="M 112 68 C 125 68, 125 50, 138 50" stroke="white" strokeWidth="0.8" opacity="0.45" />
        {/* Decision → Output 1 */}
        <path d="M 158 50 C 170 50, 170 35, 180 35" stroke="white" strokeWidth="0.8" opacity="0.4" />
        {/* Decision → Output 2 */}
        <path d="M 158 50 C 170 50, 170 65, 180 65" stroke="white" strokeWidth="0.8" opacity="0.4" />

        {/* ─── Trigger node (circle with play icon) ─── */}
        <circle cx="28" cy="50" r="10" stroke="white" strokeWidth="1" opacity="0.5" fill="none" />
        <polygon points="25,45 25,55 33,50" fill="white" opacity="0.35" />

        {/* ─── Agent block 1 (rounded rect with inner skeleton) ─── */}
        <rect x="72" y="18" width="40" height="28" rx="5" stroke="white" strokeWidth="0.9" opacity="0.45" fill="white" fillOpacity="0.03" />
        {/* Icon placeholder */}
        <rect x="77" y="23" width="8" height="8" rx="2" fill="white" opacity="0.2" />
        {/* Text lines */}
        <rect x="88" y="24" width="18" height="2.5" rx="1.25" fill="white" opacity="0.25" />
        <rect x="88" y="29" width="12" height="2" rx="1" fill="white" opacity="0.15" />
        {/* Status dot */}
        <circle cx="79" cy="39" r="1.5" fill="white" opacity="0.35" />
        <rect x="83" y="37.5" width="14" height="2" rx="1" fill="white" opacity="0.12" />

        {/* ─── Agent block 2 (rounded rect with inner skeleton) ─── */}
        <rect x="72" y="54" width="40" height="28" rx="5" stroke="white" strokeWidth="0.9" opacity="0.45" fill="white" fillOpacity="0.03" />
        {/* Icon placeholder */}
        <rect x="77" y="59" width="8" height="8" rx="2" fill="white" opacity="0.2" />
        {/* Text lines */}
        <rect x="88" y="60" width="14" height="2.5" rx="1.25" fill="white" opacity="0.25" />
        <rect x="88" y="65" width="18" height="2" rx="1" fill="white" opacity="0.15" />
        {/* Status dot */}
        <circle cx="79" cy="75" r="1.5" fill="white" opacity="0.35" />
        <rect x="83" y="73.5" width="10" height="2" rx="1" fill="white" opacity="0.12" />

        {/* ─── Decision diamond ─── */}
        <g transform="translate(148, 50)">
          <rect x="-10" y="-10" width="20" height="20" rx="3" transform="rotate(45)" stroke="white" strokeWidth="0.9" opacity="0.5" fill="white" fillOpacity="0.04" />
          <text x="0" y="1" textAnchor="middle" fontSize="6" fontFamily="monospace" fill="white" opacity="0.3">?</text>
        </g>

        {/* ─── Output nodes ─── */}
        {/* Success output */}
        <rect x="180" y="24" width="30" height="22" rx="4" stroke="white" strokeWidth="0.8" opacity="0.4" fill="white" fillOpacity="0.03" />
        <rect x="185" y="30" width="10" height="2" rx="1" fill="white" opacity="0.2" />
        <rect x="185" y="35" width="16" height="2" rx="1" fill="white" opacity="0.12" />
        <circle cx="200" cy="30" r="2" fill="white" opacity="0.25" />

        {/* Fallback output */}
        <rect x="180" y="54" width="30" height="22" rx="4" stroke="white" strokeWidth="0.8" opacity="0.35" fill="white" fillOpacity="0.02" />
        <rect x="185" y="60" width="14" height="2" rx="1" fill="white" opacity="0.15" />
        <rect x="185" y="65" width="8" height="2" rx="1" fill="white" opacity="0.1" />

        {/* ─── Stage labels at bottom ─── */}
        <rect x="18" y="108" width="20" height="2.5" rx="1.25" fill="white" opacity="0.12" />
        <rect x="78" y="108" width="28" height="2.5" rx="1.25" fill="white" opacity="0.12" />
        <rect x="138" y="108" width="18" height="2.5" rx="1.25" fill="white" opacity="0.12" />
        <rect x="185" y="108" width="22" height="2.5" rx="1.25" fill="white" opacity="0.12" />

        {/* ─── Decorative dashed grid lines (canvas feel) ─── */}
        <line x1="0" y1="100" x2="220" y2="100" stroke="white" strokeWidth="0.3" strokeDasharray="4 6" opacity="0.08" />
        <line x1="65" y1="0" x2="65" y2="100" stroke="white" strokeWidth="0.3" strokeDasharray="4 6" opacity="0.06" />
        <line x1="135" y1="0" x2="135" y2="100" stroke="white" strokeWidth="0.3" strokeDasharray="4 6" opacity="0.06" />
      </svg>
    </div>
  );
}

// ═══════════════════════════════════════════════════════════════════════
//  CAPABILITY CARD
// ═══════════════════════════════════════════════════════════════════════

function CapabilityCard({ card }: { card: CardData }) {
  const [isHovered, setIsHovered] = useState(false);

  const isAI = card.visual === "ai-gradient";

  return (
    <motion.div
      variants={cardFadeUpVariants}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      animate={{
        borderColor: isHovered
          ? "rgba(255,255,255,0.15)"
          : "rgba(255,255,255,0.05)",
      }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className={`relative rounded-2xl p-8 sm:p-10 overflow-hidden cursor-default flex flex-col justify-start items-start hover:bg-white/[0.04] transition-colors duration-500 ${card.span} ${
        isAI
          ? "bg-[radial-gradient(ellipse_at_top_right,rgba(129,216,208,0.10),rgba(255,255,255,0.02))] backdrop-blur-2xl border border-white/[0.08] shadow-[inset_0_1px_0_0_rgba(255,255,255,0.05)]"
          : "bg-white/[0.02] backdrop-blur-2xl border border-white/[0.08] shadow-[inset_0_1px_0_0_rgba(255,255,255,0.05)]"
      }`}
    >
      {/* Title + arrow */}
      <div className="flex items-start gap-3">
        <h3
          className={`font-jakarta font-bold leading-tight text-white ${
            card.span ? "text-2xl sm:text-3xl" : "text-xl sm:text-2xl"
          }`}
        >
          {card.title}
        </h3>
        <span
          className="text-white/0 text-lg font-inter mt-1 shrink-0 transition-all duration-300"
          style={{
            opacity: isHovered ? 1 : 0,
            transform: isHovered ? "translateX(0)" : "translateX(-6px)",
            color: isHovered ? "rgba(255,255,255,0.5)" : "rgba(255,255,255,0)",
          }}
        >
          →
        </span>
      </div>

      {/* Description */}
      <p
        className={`font-inter text-sm sm:text-base text-gray-400 leading-relaxed mt-4 ${
          card.span ? "max-w-md" : "max-w-sm"
        }`}
      >
        {card.description}
      </p>

      {/* Visual flourishes */}
      {card.visual === "table" && <TableSkeleton />}
      {card.visual === "phone" && <PhoneSilhouette />}
      {card.visual === "browser" && <BrowserSilhouette />}
      {card.visual === "ai-gradient" && <AgentNodeSilhouette />}
    </motion.div>
  );
}

// ═══════════════════════════════════════════════════════════════════════
//  CAPABILITIES SHOWCASE SECTION
// ═══════════════════════════════════════════════════════════════════════

export default function CapabilitiesShowcase() {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  const headerInView = useInView(headerRef, { once: true, margin: "-60px" });
  const gridInView = useInView(gridRef, { once: true, margin: "-80px" });

  return (
    <section
      ref={sectionRef}
      id="capabilities"
      className="relative w-full py-24 md:py-32 bg-slate-950 overflow-hidden"
    >
      {/* Content container */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        {/* ── Header ───────────────────────────────────────────────── */}
        <motion.div
          ref={headerRef}
          variants={headerContainerVariants}
          initial="hidden"
          animate={headerInView ? "visible" : "hidden"}
          className="mb-16 md:mb-20"
        >
          <motion.span
            variants={headerItemVariants}
            className="inline-block text-[11px] sm:text-[12px] font-semibold uppercase tracking-[0.2em] text-tiffany font-inter mb-5"
          >
            Core Capabilities
          </motion.span>

          <motion.h2
            variants={headerItemVariants}
            className="text-4xl sm:text-5xl md:text-6xl font-semibold leading-[1.08] tracking-tight text-white font-jakarta max-w-2xl"
          >
            We Build Digital Products.{" "}
            <span className="text-slate-500">Not Just Code.</span>
          </motion.h2>
        </motion.div>

        {/* ── Bento Grid ───────────────────────────────────────────── */}
        <motion.div
          ref={gridRef}
          variants={gridContainerVariants}
          initial="hidden"
          animate={gridInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-3 gap-4"
        >
          {CARDS.map((card) => (
            <CapabilityCard key={card.title} card={card} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

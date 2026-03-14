"use client";

import { useRef, useState, useEffect } from "react";
import {
  motion,
  useInView,
  useScroll,
  useTransform,
  type Variants,
} from "framer-motion";
import {
  ArrowRight,
  Sheet,
  FileWarning,
  Database,
  CircleSlash,
} from "lucide-react";

// ═══════════════════════════════════════════════════════════════════════
//  MOTION VARIANTS — Extracted for clean JSX
// ═══════════════════════════════════════════════════════════════════════

const SPRING = { type: "spring" as const, bounce: 0.2, duration: 0.8 };

/** Stagger container for left-column text */
const textContainerVariants: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

/** Individual text element — fade up with spring physics */
const textItemVariants: Variants = {
  hidden: { opacity: 0, y: 28, filter: "blur(4px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { ...SPRING },
  },
};

// ═══════════════════════════════════════════════════════════════════════
//  CHAOS CARD DATA
// ═══════════════════════════════════════════════════════════════════════

const CARD_ICONS = {
  csv: Sheet,
  log: FileWarning,
  hex: Database,
  null: CircleSlash,
} as const;

const CHAOS_CARDS = [
  { label: "CSV", detail: "sales_q3_FINAL(2).csv", icon: "csv" as const },
  { label: "raw_logs.txt", detail: "Ln 4,819 — parse error", icon: "log" as const },
  { label: "0x3F…A7", detail: "unlinked record", icon: "hex" as const },
  { label: "NULL", detail: "field_42 — missing ref", icon: "null" as const },
];

// ═══════════════════════════════════════════════════════════════════════
//  SUB-COMPONENTS
// ═══════════════════════════════════════════════════════════════════════

/** Single data-source card — circular icon with label, like the reference */
function SourceCard({
  label,
  detail,
  icon,
  index,
}: {
  label: string;
  detail: string;
  icon: "csv" | "log" | "hex" | "null";
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ ...SPRING, delay: index * 0.1 }}
      className="flex items-center gap-3"
    >
      {/* Circular icon container — matching reference style */}
      <div className="w-11 h-11 rounded-full border border-slate-200 bg-white shadow-[0_2px_8px_rgba(0,0,0,0.04)] flex items-center justify-center shrink-0">
        {(() => {
          const Icon = CARD_ICONS[icon];
          return <Icon size={18} className="text-slate-500" strokeWidth={1.5} />;
        })()}
      </div>
      {/* Label */}
      <div className="min-w-0">
        <div className="text-[11px] font-semibold font-mono text-slate-600 tracking-tight truncate">
          {label}
        </div>
        <div className="text-[10px] font-mono text-slate-400 truncate">
          {detail}
        </div>
      </div>
    </motion.div>
  );
}

// ═══════════════════════════════════════════════════════════════════════
//  CONNECTED NODE GRAPH — SVG paths + animated packets
// ═══════════════════════════════════════════════════════════════════════

/**
 * SVG overlay that draws bezier curves from each left card to the
 * central convergence node, with animated data packets traveling
 * along the paths to create a real-time processing feel.
 */
function ConnectedNodeGraph() {
  const [activePath, setActivePath] = useState(0);

  // Cycle through paths sequentially
  useEffect(() => {
    const interval = setInterval(() => {
      setActivePath((prev) => (prev + 1) % 4);
    }, 1200);
    return () => clearInterval(interval);
  }, []);

  // Card Y positions (matching the flex layout gap)
  // Each card is ~44px tall with ~20px gap
  const cardCenterYs = [32, 96, 160, 224];
  const convergenceX = 260;
  const convergenceY = 128;
  const startX = 56;

  // Generate bezier paths from each card's right edge to the convergence point
  const paths = cardCenterYs.map((cardY) => {
    const cpX1 = startX + 80;
    const cpX2 = convergenceX - 60;
    return `M ${startX} ${cardY} C ${cpX1} ${cardY}, ${cpX2} ${convergenceY}, ${convergenceX} ${convergenceY}`;
  });

  return (
    <svg
      className="absolute inset-0 w-full h-full pointer-events-none"
      viewBox="0 0 320 256"
      preserveAspectRatio="xMidYMid meet"
      fill="none"
    >
      <defs>
        {/* Glow filter for active elements */}
        <filter id="packetGlow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="3" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>

        {/* Gradient for active path */}
        <linearGradient id="activePathGrad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#81D8D0" stopOpacity="0.2" />
          <stop offset="50%" stopColor="#81D8D0" stopOpacity="0.7" />
          <stop offset="100%" stopColor="#81D8D0" stopOpacity="0.3" />
        </linearGradient>

        {/* Radial gradient for convergence node */}
        <radialGradient id="nodeGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#81D8D0" stopOpacity="0.25" />
          <stop offset="100%" stopColor="#81D8D0" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* ─── Static connection lines ─── */}
      {paths.map((d, i) => (
        <path
          key={`static-${i}`}
          d={d}
          stroke="#e2e8f0"
          strokeWidth="1.2"
          fill="none"
        />
      ))}

      {/* ─── Active path highlight ─── */}
      <motion.path
        key={`active-${activePath}`}
        d={paths[activePath]}
        stroke="url(#activePathGrad)"
        strokeWidth="2"
        fill="none"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ duration: 0.9, ease: "easeInOut" }}
      />

      {/* ─── Traveling data packet ─── */}
      <motion.circle
        key={`packet-${activePath}`}
        r="4"
        fill="#81D8D0"
        filter="url(#packetGlow)"
        initial={{ offsetDistance: "0%" }}
        animate={{ offsetDistance: "100%" }}
        transition={{ duration: 1.0, ease: "easeInOut" }}
        style={{
          offsetPath: `path('${paths[activePath]}')`,
          offsetRotate: "0deg",
        }}
      />

      {/* ─── Small origin dots on each card ─── */}
      {cardCenterYs.map((y, i) => (
        <motion.circle
          key={`origin-${i}`}
          cx={startX}
          cy={y}
          r="3"
          fill={activePath === i ? "#81D8D0" : "#cbd5e1"}
          animate={{
            r: activePath === i ? [3, 5, 3] : 3,
            opacity: activePath === i ? [0.7, 1, 0.7] : 0.5,
          }}
          transition={{
            duration: 1.2,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* ─── Convergence node ─── */}
      {/* Outer glow */}
      <circle cx={convergenceX} cy={convergenceY} r="24" fill="url(#nodeGlow)" />

      {/* Main ring */}
      <circle
        cx={convergenceX}
        cy={convergenceY}
        r="16"
        stroke="#81D8D0"
        strokeWidth="1.5"
        fill="white"
        opacity="0.9"
      />

      {/* Inner processing animation — rotating arcs */}
      <motion.g
        animate={{ rotate: [0, 360] }}
        transition={{ duration: 6, ease: "linear", repeat: Infinity }}
        style={{ transformOrigin: `${convergenceX}px ${convergenceY}px` }}
      >
        <path
          d={`M ${convergenceX} ${convergenceY - 10} A 10 10 0 0 1 ${convergenceX + 10} ${convergenceY}`}
          stroke="#81D8D0"
          strokeWidth="1.5"
          strokeLinecap="round"
          fill="none"
          opacity="0.7"
        />
        <path
          d={`M ${convergenceX} ${convergenceY + 10} A 10 10 0 0 1 ${convergenceX - 10} ${convergenceY}`}
          stroke="#81D8D0"
          strokeWidth="1.5"
          strokeLinecap="round"
          fill="none"
          opacity="0.4"
        />
      </motion.g>

      {/* Center dot — pulse */}
      <motion.circle
        cx={convergenceX}
        cy={convergenceY}
        r="3"
        fill="#81D8D0"
        animate={{
          r: [3, 4.5, 3],
          opacity: [0.6, 1, 0.6],
        }}
        transition={{
          duration: 2,
          ease: "easeInOut",
          repeat: Infinity,
        }}
      />

      {/* ─── Output line to dashboard ─── */}
      <line
        x1={convergenceX + 16}
        y1={convergenceY}
        x2={320}
        y2={convergenceY}
        stroke="#e2e8f0"
        strokeWidth="1.2"
      />

      {/* Output packet traveling to dashboard */}
      <motion.circle
        r="3"
        fill="#81D8D0"
        opacity="0.6"
        animate={{
          cx: [convergenceX + 16, 320],
          opacity: [0.8, 0.2],
        }}
        transition={{
          duration: 1.5,
          ease: "easeOut",
          repeat: Infinity,
          repeatDelay: 2,
        }}
        cy={convergenceY}
      />
    </svg>
  );
}

// ═══════════════════════════════════════════════════════════════════════
//  ABSTRACT DASHBOARD SKELETON — Award-winning product output visual
// ═══════════════════════════════════════════════════════════════════════

const dashboardSpring = {
  type: "spring" as const,
  stiffness: 120,
  damping: 15,
  mass: 0.8,
};

const dashboardContainer: Variants = {
  hidden: { opacity: 0, scale: 0.92 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      ...dashboardSpring,
      staggerChildren: 0.08,
      delayChildren: 0.05,
    },
  },
};

const dashboardChild: Variants = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: dashboardSpring,
  },
};

const kpiCardVariant: Variants = {
  hidden: { opacity: 0, scale: 0.85 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { ...dashboardSpring, stiffness: 140 },
  },
};

const tealBarVariant: Variants = {
  hidden: { scaleX: 0 },
  visible: {
    scaleX: 1,
    transition: { ...dashboardSpring, delay: 0.35 },
  },
};

const BAR_DATA = [
  { width: "60%", color: "bg-slate-200" },
  { width: "82%", color: "bg-tiffany", isAccent: true },
  { width: "45%", color: "bg-slate-200" },
  { width: "70%", color: "bg-slate-100" },
];

function AbstractDashboardSkeleton() {
  return (
    <motion.div
      variants={dashboardContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
      className="w-[340px] aspect-[4/3] bg-white shadow-[0_20px_40px_rgb(0,0,0,0.06)] border border-slate-200 rounded-md overflow-hidden flex"
    >
      {/* ─── Sidebar ─── */}
      <motion.div
        variants={dashboardChild}
        className="w-12 bg-slate-50 border-r border-slate-100 flex flex-col items-center py-3 gap-3 shrink-0"
      >
        {/* Logo placeholder */}
        <div className="w-6 h-6 rounded-sm bg-slate-800 mb-1.5" />
        {/* Nav icons */}
        {[0, 1, 2, 3].map((i) => (
          <div
            key={i}
            className={`w-5 h-5 rounded-sm ${i === 1
                ? "bg-tiffany/15 border border-tiffany/25"
                : "bg-slate-200/70"
              }`}
          />
        ))}
      </motion.div>

      {/* ─── Main Area ─── */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* ─── Top Nav ─── */}
        <motion.div
          variants={dashboardChild}
          className="flex items-center justify-between px-3 py-2 border-b border-slate-100"
        >
          <div className="flex items-center gap-1.5">
            <div className="w-16 h-2 bg-slate-200/70 rounded-sm" />
            <div className="w-[3px] h-[3px] rounded-full bg-slate-300" />
            <div className="w-10 h-2 bg-slate-100 rounded-sm" />
          </div>
          <div className="w-5 h-5 rounded-sm bg-slate-200/70" />
        </motion.div>

        {/* ─── KPI Row ─── */}
        <motion.div
          variants={dashboardChild}
          className="grid grid-cols-3 gap-2 px-3 py-2.5"
        >
          {[
            { labelW: "w-8", valueW: "w-12" },
            { labelW: "w-6", valueW: "w-14" },
            { labelW: "w-10", valueW: "w-10" },
          ].map((kpi, i) => (
            <motion.div
              key={i}
              variants={kpiCardVariant}
              className="rounded-sm border border-slate-100 bg-slate-50/60 p-2 flex flex-col gap-1"
            >
              <div className={`h-1.5 ${kpi.labelW} bg-slate-200/70 rounded-sm`} />
              <div className={`h-3.5 ${kpi.valueW} bg-slate-800 rounded-sm`} />
            </motion.div>
          ))}
        </motion.div>

        {/* ─── Chart / Data Area ─── */}
        <motion.div
          variants={dashboardChild}
          className="flex-1 mx-3 mb-2.5 rounded-sm border border-slate-100 bg-slate-50/30 p-2.5 flex flex-col justify-between"
        >
          {/* Chart header */}
          <div className="flex items-center justify-between mb-2">
            <div className="w-16 h-1.5 bg-slate-200/70 rounded-sm" />
            <div className="flex gap-1">
              <div className="w-6 h-1.5 bg-slate-100 rounded-sm" />
              <div className="w-6 h-1.5 bg-slate-100 rounded-sm" />
            </div>
          </div>

          {/* Horizontal Bar Chart */}
          <div className="flex-1 flex flex-col justify-center gap-1.5">
            {BAR_DATA.map((bar, i) => (
              <div key={i} className="flex items-center gap-1.5">
                <div className="w-7 h-1.5 bg-slate-100 rounded-sm shrink-0" />
                <div className="flex-1 h-2.5 bg-slate-50 rounded-sm overflow-hidden">
                  <motion.div
                    variants={bar.isAccent ? tealBarVariant : undefined}
                    style={
                      bar.isAccent ? { originX: 0 } : undefined
                    }
                    className={`h-full rounded-sm ${bar.color}`}
                    {...(!bar.isAccent && {
                      initial: { width: 0 },
                      whileInView: { width: bar.width },
                      viewport: { once: true },
                      transition: { ...dashboardSpring, delay: 0.2 + i * 0.06 },
                    })}
                    {...(bar.isAccent && {
                      style: { width: bar.width, originX: 0 },
                    })}
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Bottom axis labels */}
          <div className="flex justify-between mt-1.5">
            {["w-3", "w-4", "w-3", "w-5", "w-3"].map((w, i) => (
              <div key={i} className={`h-1 ${w} bg-slate-100 rounded-sm`} />
            ))}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}

// ═══════════════════════════════════════════════════════════════════════
//  DATA TO PRODUCT SECTION
// ═══════════════════════════════════════════════════════════════════════

export default function DataToProductSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  // Staggered text reveal
  const isInView = useInView(textRef, { once: true, margin: "-80px" });

  // Scroll-driven animation for the visual area
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // Dashboard slides in from right
  const orderX = useTransform(scrollYProgress, [0.15, 0.5], [-60, 0]);
  const orderOpacity = useTransform(scrollYProgress, [0.15, 0.35], [0, 1]);

  return (
    <section
      ref={sectionRef}
      id="data-to-product"
      className="relative w-full py-24 md:py-32 bg-white overflow-hidden"
    >
      {/* Content container */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* ── Column 1: The Narrative ────────────────────────────── */}
          <motion.div
            ref={textRef}
            variants={textContainerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="order-2 lg:order-1"
          >
            {/* Subheading label */}
            <motion.span
              variants={textItemVariants}
              className="inline-block text-[11px] sm:text-[12px] font-semibold uppercase tracking-[0.2em] text-slate-400 font-inter mb-5"
            >
              The Evren Engine
            </motion.span>

            {/* Headline — solid, authoritative, no faded text */}
            <motion.h2
              variants={textItemVariants}
              className="text-4xl sm:text-5xl md:text-6xl font-semibold leading-tight text-slate-900 font-jakarta mb-6"
            >
              Intelligent Internal Software. Built from Your Messy Data.
            </motion.h2>

            {/* Paragraph */}
            <motion.p
              variants={textItemVariants}
              className="text-base sm:text-lg text-slate-500 leading-relaxed font-inter max-w-xl mb-8"
            >
              We deploy proprietary AI agents that ingest your fragmented,
              chaotic business data and automatically engineer it into clean,
              QDA-ready internal platforms. Stop paying for dashboards that
              don&apos;t talk to your real-world data.
            </motion.p>

            {/* CTA link */}
            <motion.a
              variants={textItemVariants}
              href="#methodology"
              className="group inline-flex items-center gap-2 text-[14px] font-semibold text-slate-600 font-inter hover:text-tiffany transition-colors duration-300"
            >
              Explore our AI methodology
              <ArrowRight
                size={15}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </motion.a>
          </motion.div>

          {/* ── Column 2: Connected Data → Product Visual ───────────── */}
          <div className="order-1 lg:order-2 flex items-center justify-center">
            <div className="relative w-full max-w-[680px]">
              {/* Flex layout: Cards | SVG Graph area | Dashboard */}
              <div className="flex items-center gap-0">

                {/* ─── Left: Source Cards ─── */}
                <div className="flex flex-col gap-5 shrink-0 w-[140px] sm:w-[160px] z-10">
                  {CHAOS_CARDS.map((card, i) => (
                    <SourceCard key={card.label} {...card} index={i} />
                  ))}
                </div>

                {/* ─── Middle: SVG Connection Graph ─── */}
                <div className="relative flex-1 min-w-[180px] h-[256px]">
                  <ConnectedNodeGraph />
                </div>

                {/* ─── Right: Dashboard Output ─── */}
                <motion.div
                  className="shrink-0 z-10"
                  style={{ x: orderX, opacity: orderOpacity }}
                >
                  <AbstractDashboardSkeleton />
                </motion.div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

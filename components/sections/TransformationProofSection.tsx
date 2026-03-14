"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  motion,
  useInView,
  useScroll,
  useTransform,
  type Variants,
  type MotionValue,
} from "framer-motion";
import {
  ArrowRight,
  Clock,
  BarChart3,
  Zap,
  Shuffle,
  Target,
  Layers,
  FileSearch,
  BrainCircuit,
  Stethoscope,
  Timer,
} from "lucide-react";

// ═══════════════════════════════════════════════════════════════════════
//  MOTION CONFIG
// ═══════════════════════════════════════════════════════════════════════

const SPRING = { type: "spring" as const, stiffness: 100, damping: 20 };

const staggerContainer: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 32, filter: "blur(4px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { ...SPRING },
  },
};

const headerStagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.05 } },
};

const headerItem: Variants = {
  hidden: { opacity: 0, y: 24, filter: "blur(4px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { ...SPRING },
  },
};

const screenshotReveal: Variants = {
  hidden: { opacity: 0, scale: 0.96, filter: "blur(4px)" },
  visible: {
    opacity: 1,
    scale: 1,
    filter: "blur(0px)",
    transition: { ...SPRING, delay: 0.2, duration: 0.8 },
  },
};

// ═══════════════════════════════════════════════════════════════════════
//  TRANSFORMATION DATA
// ═══════════════════════════════════════════════════════════════════════

interface TransformationCard {
  id: string;
  transformationType: string;
  beforeLabel: string;
  afterLabel: string;
  beforePainPoints: string[];
  afterBenefits: string[];
  beforeIcon: typeof Clock;
  afterIcon: typeof Zap;
  screenshotSrc: string;
  screenshotAlt: string;
  clientName: string;
  intelligenceDescription: string;
  metricValue: string;
  metricLabel: string;
  metricIcon: typeof BarChart3;
  reversed: boolean;
}

const TRANSFORMATIONS: TransformationCard[] = [
  {
    id: "manual-to-automated",
    transformationType: "Manual → Automated",
    beforeLabel: "Before: Manual Chaos",
    afterLabel: "After: Automated Intelligence",
    beforePainPoints: [
      "47 hours/week on manual data entry",
      "3-day order processing delays",
      "12% error rate in fulfillment",
    ],
    afterBenefits: [
      "Real-time automated processing",
      "Instant order-to-fulfillment pipeline",
      "99.2% fulfillment accuracy",
    ],
    beforeIcon: Clock,
    afterIcon: Zap,
    screenshotSrc: "/transformation-supply-chain.png",
    screenshotAlt:
      "AI-powered supply chain management dashboard showing automated inventory tracking, real-time fulfillment metrics, and distribution route optimization",
    clientName: "Meridian Logistics",
    intelligenceDescription:
      "AI-powered supply chain automation that eliminated manual data entry and reduced processing time by 94%",
    metricValue: "94%",
    metricLabel: "Processing Time Reduced",
    metricIcon: Timer,
    reversed: false,
  },
  {
    id: "data-to-decisions",
    transformationType: "Data → Decisions",
    beforeLabel: "Before: Data Overload",
    afterLabel: "After: Actionable Intelligence",
    beforePainPoints: [
      "1,200+ documents reviewed manually per month",
      "Missed clauses costing $40K+ annually",
      "3 paralegals dedicated to document review",
    ],
    afterBenefits: [
      "NLP-powered clause extraction in seconds",
      "98.7% accuracy on risk identification",
      "340 hours/month recovered for high-value work",
    ],
    beforeIcon: Shuffle,
    afterIcon: Target,
    screenshotSrc: "/transformation-legal.png",
    screenshotAlt:
      "Legal document analytics platform displaying NLP-extracted insights, risk assessments, and automated document classification with 98.7% accuracy",
    clientName: "Goldstein & Associates",
    intelligenceDescription:
      "Machine learning document analytics that transformed raw legal data into instant, actionable risk assessments",
    metricValue: "340h",
    metricLabel: "Hours Saved Monthly",
    metricIcon: FileSearch,
    reversed: true,
  },
  {
    id: "complexity-to-clarity",
    transformationType: "Complexity → Clarity",
    beforeLabel: "Before: Operational Fog",
    afterLabel: "After: Crystal Clear Operations",
    beforePainPoints: [
      "45-minute average patient wait times",
      "Staff scheduling done via spreadsheets",
      "No visibility into real-time bed availability",
    ],
    afterBenefits: [
      "17-minute average wait time (62% reduction)",
      "AI-optimized staff allocation",
      "Live operational command center",
    ],
    beforeIcon: Layers,
    afterIcon: BrainCircuit,
    screenshotSrc: "/transformation-healthcare.png",
    screenshotAlt:
      "Healthcare operations dashboard showing patient flow analytics, AI-optimized staff scheduling, and real-time triage classification system",
    clientName: "NovaCare Health Systems",
    intelligenceDescription:
      "Predictive operations platform that unified fragmented hospital systems into a single intelligent command center",
    metricValue: "62%",
    metricLabel: "Wait Time Reduction",
    metricIcon: Stethoscope,
    reversed: false,
  },
];

// ═══════════════════════════════════════════════════════════════════════
//  TRANSFORMATION ROW  (FeaturedWorkSection layout pattern)
// ═══════════════════════════════════════════════════════════════════════

function TransformationRow({
  card,
}: {
  card: TransformationCard;
}) {
  const rowRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const isTextInView = useInView(textRef, { once: true, margin: "-80px" });

  // Parallax for the visual container
  const { scrollYProgress } = useScroll({
    target: rowRef,
    offset: ["start end", "end start"],
  });
  const imageParallaxY = useTransform(scrollYProgress, [0, 1], [-20, 20]);

  const MetricIcon = card.metricIcon;

  return (
    <div
      ref={rowRef}
      className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center mb-20 md:mb-32 last:mb-0"
    >
      {/* ── Text Column (5 col) ─── */}
      <motion.div
        ref={textRef}
        variants={staggerContainer}
        initial="hidden"
        animate={isTextInView ? "visible" : "hidden"}
        className={`lg:col-span-5 ${
          card.reversed
            ? "order-1 lg:order-2"
            : "order-2 lg:order-1"
        }`}
      >
        {/* Transformation Type Badge */}
        <motion.div variants={fadeUp} className="mb-5">
          <span
            className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.2em] font-inter"
            style={{ color: "#4FD1C5" }}
          >
            <span
              className="w-1.5 h-1.5 rounded-full"
              style={{ backgroundColor: "#4FD1C5" }}
            />
            {card.transformationType}
          </span>
        </motion.div>

        {/* The Metric — dominant element  */}
        <motion.div
          variants={fadeUp}
          className="text-7xl lg:text-8xl font-bold tracking-tight font-jakarta leading-none"
          style={{ color: "#4FD1C5" }}
        >
          {card.metricValue}
        </motion.div>

        {/* Metric subtext */}
        <motion.p
          variants={fadeUp}
          className="text-lg sm:text-xl font-medium text-slate-900 mt-4 font-jakarta"
        >
          {card.metricLabel}
        </motion.p>

        {/* Client & Product */}
        <motion.p
          variants={fadeUp}
          className="text-[11px] sm:text-[12px] font-semibold uppercase tracking-[0.15em] text-gray-400 mt-8 font-inter"
        >
          {card.clientName}
        </motion.p>

        {/* Description */}
        <motion.p
          variants={fadeUp}
          className="text-lg sm:text-xl text-slate-700 leading-relaxed mt-4 font-inter max-w-md"
        >
          {card.intelligenceDescription}
        </motion.p>

        {/* ── Explore Button ── */}
        <motion.div variants={fadeUp} className="mt-8">
          <Link
            href={`/case-studies/${card.id}`}
            className="text-[15px] font-semibold font-inter transition-all duration-300 hover:underline inline-flex items-center gap-2 group"
            style={{ color: "#4FD1C5", textUnderlineOffset: "4px" }}
          >
            Explore Case Study
            <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </motion.div>
      </motion.div>

      {/* ── Visual Column (7 col) ─── */}
      <div
        className={`lg:col-span-7 ${
          card.reversed
            ? "order-2 lg:order-1"
            : "order-1 lg:order-2"
        }`}
      >
        <motion.div
          style={{ y: imageParallaxY }}
          variants={screenshotReveal}
          initial="hidden"
          animate={isTextInView ? "visible" : "hidden"}
        >
          {/* Client Info Bar */}
          <div className="mb-4">
            <p
              className="text-[11px] font-semibold uppercase tracking-[0.15em] font-inter"
              style={{ color: "#A0AEC0" }}
            >
              {card.clientName}
            </p>
          </div>

          {/* Screenshot Container */}
          <motion.div
            className="relative overflow-hidden"
            style={{
              borderRadius: "16px",
              boxShadow: "0 8px 30px rgba(0,0,0,0.06)",
              border: "1px solid rgba(226,232,240,0.6)",
            }}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
          >
            {/* Window Chrome — macOS style */}
            <div
              className="flex items-center gap-2 px-4 py-2.5"
              style={{ backgroundColor: "#2D3748" }}
            >
              <div className="flex gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-[#FF5F56]" />
                <div className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]" />
                <div className="w-2.5 h-2.5 rounded-full bg-[#27CA40]" />
              </div>
              <div className="flex-1 flex justify-center">
                <div className="w-40 h-5 bg-white/10 rounded-md flex items-center justify-center">
                  <span className="text-[10px] text-white/40 font-medium font-inter">
                    app.evrenai.com
                  </span>
                </div>
              </div>
            </div>

            {/* Screenshot Image */}
            <div
              className="relative w-full"
              style={{ aspectRatio: "16 / 10" }}
            >
              <Image
                src={card.screenshotSrc}
                alt={card.screenshotAlt}
                fill
                className="object-cover object-top"
                sizes="(max-width: 1024px) 100vw, 60vw"
                quality={90}
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-[#4FD1C5]/[0.02] to-transparent pointer-events-none" />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}

// ═══════════════════════════════════════════════════════════════════════
//  TRANSFORMATION PROOF SECTION
// ═══════════════════════════════════════════════════════════════════════

export default function TransformationProofSection() {
  const headerRef = useRef<HTMLDivElement>(null);
  const headerInView = useInView(headerRef, { once: true, margin: "-60px" });

  return (
    <section
      id="transformation-proof"
      aria-label="Transformation proof showing real client results"
      className="relative w-full py-24 md:py-32 bg-white overflow-hidden"
    >
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        {/* ── Section Header ─── */}
        <motion.div
          ref={headerRef}
          variants={headerStagger}
          initial="hidden"
          animate={headerInView ? "visible" : "hidden"}
          className="mb-20 md:mb-28 max-w-2xl"
        >
          <motion.span
            variants={headerItem}
            className="inline-block text-[11px] sm:text-[12px] font-semibold uppercase tracking-[0.2em] text-gray-400 font-inter mb-5"
          >
            Transformation Proof
          </motion.span>

          <motion.h2
            variants={headerItem}
            className="text-4xl sm:text-5xl md:text-7xl font-bold leading-[1.05] tracking-tight text-slate-900 font-jakarta"
          >
            What Intelligence{" "}
            <span className="text-tiffany">Actually</span> Looks Like
          </motion.h2>

          <motion.p
            variants={headerItem}
            className="text-lg sm:text-xl font-inter leading-relaxed mt-6"
            style={{ color: "#718096", maxWidth: "540px" }}
          >
            Three real transformations. Before the mess, after the intelligence.
            No fluff — just proof.
          </motion.p>
        </motion.div>

        {/* ── Transformation Rows ─── */}
        {TRANSFORMATIONS.map((card) => (
          <TransformationRow key={card.id} card={card} />
        ))}
      </div>
    </section>
  );
}

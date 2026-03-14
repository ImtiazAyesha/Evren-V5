"use client";

import { useRef } from "react";
import { motion, useInView, type Variants } from "framer-motion";
import {
  Workflow,
  BarChart3,
  Building2,
  CheckCircle2,
  TrendingUp,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";

// ═══════════════════════════════════════════════════════════════════════
//  MOTION CONFIG
// ═══════════════════════════════════════════════════════════════════════

const SPRING = { type: "spring" as const, stiffness: 100, damping: 20 };

const headlineContainer: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08, delayChildren: 0.05 },
  },
};

const headlineWord: Variants = {
  hidden: { y: "110%", opacity: 0 },
  visible: {
    y: "0%",
    opacity: 1,
    transition: { ...SPRING, duration: 0.5 },
  },
};

const bodyReveal: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { ...SPRING, delay: 0.3 } },
};

const gridContainer: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12, delayChildren: 0.15 },
  },
};

const cardItem: Variants = {
  hidden: { opacity: 0, y: 32, scale: 0.97 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: SPRING,
  },
};

const listContainer: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.06, delayChildren: 0.1 },
  },
};

const listItem: Variants = {
  hidden: { opacity: 0, x: -10 },
  visible: { opacity: 1, x: 0, transition: SPRING },
};

// ═══════════════════════════════════════════════════════════════════════
//  BENTO CARD DATA
// ═══════════════════════════════════════════════════════════════════════

interface BentoCard {
  id: string;
  icon: typeof Workflow;
  title: string;
  tagline: string;
  items: string[];
  metric: string;
  metricLabel: string;
  span: string;
  layout: "vertical" | "horizontal";
}

const BENTO_CARDS: BentoCard[] = [
  {
    id: "intelligent-automation",
    icon: Workflow,
    title: "Intelligent Automation",
    tagline: "Turn manual work into smart systems.",
    items: [
      "AI-powered workflow automation",
      "Smart data capture & categorization",
      "Predictive task management",
    ],
    metric: "15%",
    metricLabel: "Billable hours increase",
    span: "md:col-span-1",
    layout: "vertical",
  },
  {
    id: "data-intelligence",
    icon: BarChart3,
    title: "Data Intelligence",
    tagline: "Scattered data → unified insights.",
    items: [
      "Real-time operational dashboards",
      "Unified data platforms",
      "Predictive analytics & alerts",
    ],
    metric: "40%",
    metricLabel: "Faster decisions",
    span: "md:col-span-1",
    layout: "vertical",
  },
  {
    id: "enterprise-systems",
    icon: Building2,
    title: "Enterprise Systems",
    tagline: "Turn complexity into clarity at scale.",
    items: [
      "HIPAA / SOC2 compliant platforms",
      "Multi-tenant portals with AI",
      "Internal tools & legacy replacement",
    ],
    metric: "50K",
    metricLabel: "Daily active users",
    span: "md:col-span-2",
    layout: "horizontal",
  },
];

// ═══════════════════════════════════════════════════════════════════════
//  BENTO CARD COMPONENT
// ═══════════════════════════════════════════════════════════════════════

function BentoCardComponent({ card }: { card: BentoCard }) {
  const Icon = card.icon;
  const isHorizontal = card.layout === "horizontal";

  return (
    <motion.div
      variants={cardItem}
      whileHover={{ y: -5 }}
      transition={{ type: "spring", stiffness: 300, damping: 25 }}
      className={`${card.span} group relative flex ${
        isHorizontal ? "flex-col md:flex-row" : "flex-col"
      } bg-white rounded-[20px] border border-slate-200 p-8 sm:p-10 overflow-hidden will-change-transform`}
      style={{
        boxShadow: "0 4px 20px rgba(0,0,0,0.03)",
        transition: "box-shadow 0.3s ease, border-color 0.3s ease",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.boxShadow =
          "0 15px 40px rgba(79,209,197,0.1)";
        e.currentTarget.style.borderColor = "rgba(79,209,197,0.2)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.boxShadow = "0 4px 20px rgba(0,0,0,0.03)";
        e.currentTarget.style.borderColor = "#e2e8f0";
      }}
    >
      {/* Background watermark icon */}
      <div
        className={`absolute ${
          isHorizontal
            ? "top-1/2 -translate-y-1/2 right-4 md:right-10"
            : "top-0 right-0"
        } p-6 opacity-[0.04] group-hover:opacity-[0.08] transition-opacity duration-500 pointer-events-none`}
      >
        <Icon
          size={isHorizontal ? 200 : 150}
          style={{ color: "#4FD1C5" }}
        />
      </div>

      {/* Main content */}
      <div
        className={`${
          isHorizontal ? "flex-1 relative z-10 md:pr-10" : "relative z-10 flex-1"
        }`}
      >
        {/* Icon badge */}
        <div
          className="h-12 w-12 rounded-2xl flex items-center justify-center border mb-6 transition-transform duration-500 group-hover:scale-110"
          style={{
            background:
              "linear-gradient(135deg, #F0FDFA 0%, #FFFFFF 100%)",
            borderColor: "rgba(79,209,197,0.15)",
            boxShadow: "0 2px 8px rgba(79,209,197,0.06)",
          }}
        >
          <Icon size={22} style={{ color: "#4FD1C5" }} />
        </div>

        {/* Title */}
        <h3
          className="font-jakarta text-xl md:text-2xl font-bold tracking-tight mb-1.5"
          style={{ color: "#1A202C" }}
        >
          {card.title}
        </h3>

        {/* Tagline */}
        <p
          className="font-inter text-sm md:text-base font-medium mb-5"
          style={{ color: "#718096" }}
        >
          {card.tagline}
        </p>

        {/* Bullet list */}
        <motion.ul
          className={`${
            isHorizontal
              ? "grid grid-cols-1 sm:grid-cols-2 gap-y-2.5 gap-x-6"
              : "space-y-2.5"
          }`}
          variants={listContainer}
        >
          {card.items.map((item, i) => (
            <motion.li
              key={i}
              variants={listItem}
              className="flex items-start gap-2.5 font-inter text-sm"
              style={{ color: "#4A5568" }}
            >
              <CheckCircle2
                size={15}
                className="shrink-0 mt-0.5"
                style={{ color: "#4FD1C5", opacity: 0.7 }}
              />
              {item}
            </motion.li>
          ))}
        </motion.ul>

        {/* Explore Service CTA */}
        <div className="mt-8 relative z-20">
          <Link
            href={`/services/${card.id}`}
            className="inline-flex items-center gap-2 font-inter text-sm font-semibold text-[#4FD1C5] group-hover:text-teal-600 transition-colors"
          >
            Explore Service
            <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>
      </div>

      {/* Metric callout */}
      {isHorizontal ? (
        <div className="md:w-[280px] md:border-l md:border-t-0 border-t border-slate-100 pt-6 md:pt-0 md:pl-10 mt-6 md:mt-0 flex flex-col justify-center relative z-10">
          <div
            className="rounded-xl p-6 border"
            style={{
              backgroundColor: "#F8FFFE",
              borderColor: "rgba(79,209,197,0.12)",
            }}
          >
            <span
              className="text-[10px] font-bold uppercase tracking-widest flex items-center gap-2 mb-2"
              style={{ color: "#A0AEC0" }}
            >
              <TrendingUp size={12} style={{ color: "#4FD1C5" }} />
              Real Result
            </span>
            <span
              className="block font-jakarta text-3xl font-extrabold tracking-tight"
              style={{ color: "#4FD1C5" }}
            >
              {card.metric}
            </span>
            <span
              className="block font-inter text-sm font-medium mt-0.5"
              style={{ color: "#718096" }}
            >
              {card.metricLabel}
            </span>
          </div>
        </div>
      ) : (
        <div
          className="mt-auto relative z-10 pt-5 mt-6 border-t"
          style={{ borderColor: "#F1F5F9" }}
        >
          <span
            className="text-[10px] font-bold uppercase tracking-widest flex items-center gap-2 mb-1"
            style={{ color: "#A0AEC0" }}
          >
            <TrendingUp size={11} style={{ color: "#4FD1C5" }} />
            Real Result
          </span>
          <div className="flex items-baseline gap-2">
            <span
              className="font-jakarta text-2xl font-extrabold tracking-tight"
              style={{ color: "#4FD1C5" }}
            >
              {card.metric}
            </span>
            <span
              className="font-inter text-sm font-medium"
              style={{ color: "#718096" }}
            >
              {card.metricLabel}
            </span>
          </div>
        </div>
      )}
    </motion.div>
  );
}

// ═══════════════════════════════════════════════════════════════════════
//  HOW WE TRANSFORM SECTION
// ═══════════════════════════════════════════════════════════════════════

export default function HowWeTransformSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { amount: 0.25, once: true });

  const headlineLine1 = "How We Transform".split(" ");
  const headlineLine2 = "Your Operations.".split(" ");

  return (
    <section
      ref={sectionRef}
      id="what-we-build"
      aria-label="What we build: transformational intelligence layers"
      className="relative w-full overflow-hidden"
      style={{
        backgroundColor: "#FAFBFC",
        paddingTop: "7rem",
        paddingBottom: "7rem",
      }}
    >
      {/* ── Background grid texture ── */}
      <div
        className="absolute inset-0 pointer-events-none z-0"
        style={{
          backgroundSize: "48px 48px",
          backgroundImage:
            "linear-gradient(to right, rgba(15,23,42,0.02) 1px, transparent 1px), linear-gradient(to bottom, rgba(15,23,42,0.02) 1px, transparent 1px)",
          maskImage:
            "radial-gradient(ellipse 70% 60% at 50% 50%, black 20%, transparent 100%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 70% 60% at 50% 50%, black 20%, transparent 100%)",
        }}
      />

      {/* ── Ambient teal glow ── */}
      <div
        className="absolute -bottom-[200px] -right-[300px] w-[700px] h-[700px] rounded-full z-0 pointer-events-none"
        style={{
          opacity: 0.03,
          background:
            "radial-gradient(circle, #4FD1C5 0%, transparent 70%)",
        }}
      />

      {/* ── Main Container ── */}
      <div
        className="relative z-10 mx-auto px-6 lg:px-8"
        style={{ maxWidth: "1200px" }}
      >
        {/* ── Section Header: Mask-Reveal ── */}
        <motion.div
          className="mb-16 md:mb-20 text-left flex flex-col items-start"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.h2
            variants={headlineContainer}
            className="font-jakarta text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-5 leading-[1.1]"
            style={{ color: "#1A202C" }}
          >
            <span className="block">
              {headlineLine1.map((word, i) => (
                <span
                  key={`l1-${i}`}
                  className="inline-block overflow-hidden align-bottom pb-[5px]"
                >
                  <motion.span
                    variants={headlineWord}
                    className="inline-block will-change-transform"
                    style={{ paddingRight: "0.3em" }}
                  >
                    {word}
                  </motion.span>
                </span>
              ))}
            </span>
            <span className="block">
              {headlineLine2.map((word, i) => (
                <span
                  key={`l2-${i}`}
                  className="inline-block overflow-hidden align-bottom pb-[5px]"
                >
                  <motion.span
                    variants={headlineWord}
                    className="inline-block will-change-transform"
                    style={{
                      paddingRight: "0.3em",
                      color: "#4FD1C5",
                    }}
                  >
                    {word}
                  </motion.span>
                </span>
              ))}
            </span>
          </motion.h2>

          <motion.p
            variants={bodyReveal}
            className="font-inter text-lg text-slate-500 max-w-xl font-medium"
          >
            Intelligence layers that eliminate friction and compound value
            over time — not features.
          </motion.p>
        </motion.div>

        {/* ── Bento Grid ── */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
          variants={gridContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {BENTO_CARDS.map((card) => (
            <BentoCardComponent key={card.id} card={card} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

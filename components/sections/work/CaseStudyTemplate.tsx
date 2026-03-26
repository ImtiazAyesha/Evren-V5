"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import {
  motion,
  useInView,
  useScroll,
  useTransform,
  type Variants,
} from "framer-motion";
import { ArrowRight, CheckCircle2, Globe, Link as LinkIcon, Database, Cloud, Code, Zap, Server, Cpu, Box, Search, Shield, Lock,
} from "lucide-react";
import type { CaseStudy } from "@/lib/case-studies-data";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// ═══════════════════════════════════════════════════════════════════════
//  ICON MAP — resolves string icon names from data to Lucide components
// ═══════════════════════════════════════════════════════════════════════

const ICON_MAP: Record<string, React.ElementType> = {
  Globe,
  Link: LinkIcon,
  Database,
  Cloud,
  Code,
  Zap,
  Server,
  Cpu,
  Box,
  Search,
  Shield,
  Lock,
};

// ═══════════════════════════════════════════════════════════════════════
//  MOTION CONFIG
// ═══════════════════════════════════════════════════════════════════════

const SPRING = { type: "spring" as const, stiffness: 100, damping: 20 };

const stagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
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

const lineReveal: Variants = {
  hidden: { opacity: 0, y: "110%" },
  visible: {
    opacity: 1,
    y: "0%",
    transition: { ...SPRING, duration: 0.6 },
  },
};

const scaleReveal: Variants = {
  hidden: { opacity: 0, scale: 0.88, y: 40 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { ...SPRING, stiffness: 80, damping: 18 },
  },
};

const gridStagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08, delayChildren: 0.2 } },
};

const gridItem: Variants = {
  hidden: { opacity: 0, y: 20, filter: "blur(4px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { ...SPRING },
  },
};

// ═══════════════════════════════════════════════════════════════════════
//  SECTION 1: HERO
// ═══════════════════════════════════════════════════════════════════════

function HeroSection({ data }: { data: CaseStudy }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section
      id="case-study-hero"
      className="relative w-full bg-evren-warm-white overflow-hidden"
    >
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 pt-32 pb-20 md:pt-40 md:pb-28">
        <div
          ref={ref}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center"
        >
          {/* ── Left Column: Text ── */}
          <motion.div
            variants={stagger}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="space-y-0"
          >
            {/* Client x Evren */}
            <motion.div variants={fadeUp} className="flex items-center gap-3 mb-6">
              <span className="inline-block text-[11px] sm:text-[12px] font-bold uppercase tracking-[0.2em] text-evren-peach font-body">
                {data.client} × Evren AI
              </span>
              <span className="bg-evren-peach-light text-evren-navy text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                {data.industry}
              </span>
            </motion.div>

            {/* Headline — staggered word reveals */}
            <div className="overflow-hidden mb-8">
              <motion.h1
                variants={stagger}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-evren-navy font-heading leading-[1.05]"
              >
                {data.headline.split(" ").map((word, i) => (
                  <span
                    key={`h-${i}`}
                    className="inline-block overflow-hidden align-bottom pb-[4px]"
                  >
                    <motion.span
                      variants={lineReveal}
                      className="inline-block will-change-transform"
                      style={{ paddingRight: "0.3em" }}
                    >
                      {word}
                    </motion.span>
                  </span>
                ))}
              </motion.h1>
            </div>

            {/* Subheadline */}
            <motion.p
              variants={fadeUp}
              className="text-lg text-evren-medium-gray font-body leading-relaxed max-w-lg mb-8"
            >
              {data.subheadline}
            </motion.p>

            {/* Meta Pills */}
            <motion.div
              variants={fadeUp}
              className="flex flex-wrap gap-4 pt-6 border-t border-evren-light-gray"
            >
              <div className="flex flex-col">
                <span className="text-[10px] font-bold uppercase tracking-widest text-evren-peach mb-1">
                  Timeline
                </span>
                <span className="text-sm font-semibold text-evren-navy">
                  {data.timeline}
                </span>
              </div>
              <div className="w-px h-10 bg-evren-light-gray" />
              <div className="flex flex-col">
                <span className="text-[10px] font-bold uppercase tracking-widest text-evren-peach mb-1">
                  Team
                </span>
                <span className="text-sm font-semibold text-evren-navy">
                  {data.teamSize}
                </span>
              </div>
              <div className="w-px h-10 bg-evren-light-gray" />
              <div className="flex flex-col">
                <span className="text-[10px] font-bold uppercase tracking-widest text-evren-peach mb-1">
                  Core Result
                </span>
                <span className="text-sm font-semibold text-evren-navy">
                  {data.hardMetric}
                </span>
              </div>
            </motion.div>
          </motion.div>

          {/* ── Right Column: Product Mockup ── */}
          <motion.div
            variants={scaleReveal}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="relative"
          >
            <div className="relative rounded-studio overflow-hidden shadow-warm border border-evren-light-gray/40">
              {/* macOS Window Chrome */}
              <div className="h-9 sm:h-10 bg-evren-navy flex items-center px-4 gap-2">
                <div className="h-3 w-3 rounded-full bg-[#FF5F57] shadow-[0_0_6px_rgba(255,95,87,0.6)]" />
                <div className="h-3 w-3 rounded-full bg-[#FFBD2E] shadow-[0_0_6px_rgba(255,189,46,0.6)]" />
                <div className="h-3 w-3 rounded-full bg-[#27C93F] shadow-[0_0_6px_rgba(39,201,63,0.6)]" />
                <span className="ml-3 text-[10px] sm:text-[11px] font-mono text-white/40 tracking-wider uppercase">
                  {data.client.replace(/\s+/g, "_")} // Live
                </span>
              </div>
              <Image
                src={data.heroImage}
                alt={`${data.headline} - Product mockup`}
                width={950}
                height={700}
                className="w-full h-auto object-contain"
                priority
              />
            </div>
            {/* Floating glow */}
            <div className="absolute -inset-6 bg-gradient-to-tr from-evren-peach/10 via-transparent to-evren-navy/5 rounded-3xl blur-2xl -z-10" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// ═══════════════════════════════════════════════════════════════════════
//  SECTION 2: THE CHALLENGE
// ═══════════════════════════════════════════════════════════════════════

function ChallengeSection({ data }: { data: CaseStudy }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="case-study-challenge"
      className="relative w-full bg-white overflow-hidden border-t border-evren-light-gray/40"
    >
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-24 md:py-32">
        <motion.div
          ref={ref}
          variants={stagger}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24"
        >
          {/* Left: Title */}
          <motion.div variants={fadeUp}>
            <span className="text-sm uppercase tracking-widest text-evren-peach font-bold mb-4 block">
              Identifying the Pain Point
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-evren-navy tracking-tight leading-[1.1] font-heading">
              {data.challenge.title}
            </h2>
            <div className="w-16 h-1 bg-evren-peach mt-6 rounded-full" />
            <p className="text-lg text-evren-medium-gray leading-relaxed font-body mt-8">
              {data.challenge.description}
            </p>
          </motion.div>

          {/* Right: Pain Points */}
          <motion.div
            variants={fadeUp}
            className="bg-evren-warm-white rounded-studio p-8 shadow-warm border border-evren-light-gray/40"
          >
            <h3 className="text-xl font-bold text-evren-navy mb-6 font-heading">
              Key Pain Points
            </h3>
            <ul className="space-y-4">
              {data.challenge.painPoints.map((point, idx) => (
                <motion.li
                  key={idx}
                  variants={fadeUp}
                  className="flex items-start gap-3"
                >
                  <CheckCircle2 className="w-5 h-5 text-evren-peach shrink-0 mt-0.5" />
                  <span className="text-evren-charcoal leading-relaxed font-body">
                    {point}
                  </span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

// ═══════════════════════════════════════════════════════════════════════
//  SECTION 3: OUR APPROACH
// ═══════════════════════════════════════════════════════════════════════

function ApproachSection({ data }: { data: CaseStudy }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="case-study-approach"
      className="relative w-full bg-evren-warm-white overflow-hidden"
    >
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-24 md:py-32">
        <motion.div
          ref={ref}
          variants={stagger}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Header */}
          <motion.div variants={fadeUp} className="mb-16 max-w-2xl">
            <span className="text-sm uppercase tracking-widest text-evren-peach font-bold mb-4 block">
              The Mapping Process
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-evren-navy tracking-tight leading-[1.1] font-heading mb-6">
              {data.approach.title}
            </h2>
            <p className="text-lg text-evren-medium-gray leading-relaxed font-body">
              {data.approach.description}
            </p>
          </motion.div>

          {/* Steps Grid */}
          <motion.div
            variants={gridStagger}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {data.approach.steps.map((step, i) => (
              <motion.div
                key={i}
                variants={gridItem}
                className="bg-white rounded-studio p-8 shadow-warm border border-evren-light-gray/40 hover:shadow-warm-hover transition-shadow duration-[600ms] ease-in-out"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-evren-peach-light flex items-center justify-center text-evren-navy font-heading font-bold text-sm">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <h3 className="text-lg font-bold text-evren-navy font-heading">
                    {step.step}
                  </h3>
                </div>
                <p className="text-evren-medium-gray font-body leading-relaxed text-sm">
                  {step.detail}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

// ═══════════════════════════════════════════════════════════════════════
//  SECTION 4: THE SOLUTION
// ═══════════════════════════════════════════════════════════════════════

function SolutionSection({ data }: { data: CaseStudy }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const sectionRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const mockupScale = useTransform(scrollYProgress, [0, 0.3], [0.92, 1]);
  const mockupOpacity = useTransform(scrollYProgress, [0, 0.25], [0, 1]);

  return (
    <section
      ref={sectionRef}
      id="case-study-solution"
      className="relative w-full bg-evren-navy overflow-hidden"
    >
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-28 md:py-36">
        {/* Header */}
        <motion.div
          ref={ref}
          variants={stagger}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mb-16 md:mb-24"
        >
          <motion.span
            variants={fadeUp}
            className="inline-block text-[11px] sm:text-[12px] font-bold uppercase tracking-[0.2em] text-evren-peach font-body mb-5"
          >
            The Product
          </motion.span>
          <motion.h2
            variants={fadeUp}
            className="text-3xl sm:text-4xl md:text-6xl font-bold tracking-tight text-white font-heading leading-[1.05]"
          >
            High-Fidelity Solution.
            <br />
            <span className="text-white/40">Built to Perform.</span>
          </motion.h2>
        </motion.div>

        {/* Full-width Mockup */}
        <motion.div
          style={{ scale: mockupScale, opacity: mockupOpacity }}
          className="mb-20 md:mb-28 max-w-5xl mx-auto"
        >
          <div className="relative rounded-studio overflow-hidden border border-white/10 shadow-[0_24px_80px_rgb(0,0,0,0.5)]">
            {/* macOS Chrome */}
            <div className="h-9 sm:h-10 bg-evren-navy-light border-b border-white/5 flex items-center px-4 gap-2">
              <div className="h-3 w-3 rounded-full bg-[#FF5F57] shadow-[0_0_6px_rgba(255,95,87,0.6)]" />
              <div className="h-3 w-3 rounded-full bg-[#FFBD2E] shadow-[0_0_6px_rgba(255,189,46,0.6)]" />
              <div className="h-3 w-3 rounded-full bg-[#27C93F] shadow-[0_0_6px_rgba(39,201,63,0.6)]" />
              <span className="ml-3 text-[10px] sm:text-[11px] font-mono text-white/30 tracking-wider uppercase">
                {data.client.replace(/\s+/g, "_")}_PORTAL // LIVE
              </span>
            </div>
            <Image
              src={data.solution.solutionImage}
              alt={`${data.headline} — Solution Dashboard`}
              width={1200}
              height={800}
              className="w-full h-auto object-contain"
            />
          </div>
        </motion.div>

        {/* Feature Cards */}
        <motion.div
          variants={gridStagger}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {data.solution.features.map((feat, i) => (
            <motion.div
              key={i}
              variants={gridItem}
              className="bg-white/5 border border-white/10 rounded-studio p-8 backdrop-blur-sm hover:bg-white/[0.08] transition-colors duration-[600ms] ease-in-out"
            >
              <h3 className="text-lg font-bold text-white font-heading mb-3">
                {feat.title}
              </h3>
              <p className="text-white/60 font-body leading-relaxed text-sm">
                {feat.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

// ═══════════════════════════════════════════════════════════════════════
//  SECTION 5: THE RESULTS
// ═══════════════════════════════════════════════════════════════════════

function ResultsSection({ data }: { data: CaseStudy }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="case-study-results"
      className="relative w-full bg-white overflow-hidden"
    >
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-24 md:py-32">
        <motion.div
          ref={ref}
          variants={stagger}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          <motion.span
            variants={fadeUp}
            className="text-sm uppercase tracking-widest text-evren-peach font-bold mb-4 block"
          >
            The Results
          </motion.span>
          <motion.h2
            variants={fadeUp}
            className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-evren-navy font-heading leading-[1.05]"
          >
            Measurable Enterprise Impact
          </motion.h2>
        </motion.div>

        {/* Metrics Grid */}
        <motion.div
          variants={gridStagger}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {data.results.map((metric, i) => (
            <motion.div
              key={i}
              variants={gridItem}
              className="bg-evren-warm-white rounded-studio p-8 shadow-warm border border-evren-light-gray/40 text-center hover:shadow-warm-hover transition-shadow duration-[600ms] ease-in-out"
            >
              <div className="text-4xl sm:text-5xl font-heading font-extrabold text-evren-navy mb-2 tracking-tighter">
                {metric.value}
              </div>
              <div className="text-base font-bold text-evren-charcoal mb-1 font-heading">
                {metric.label}
              </div>
              <div className="text-sm text-evren-medium-gray font-body">
                {metric.context}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

// ═══════════════════════════════════════════════════════════════════════
//  SECTION 6: TECH STACK
// ═══════════════════════════════════════════════════════════════════════

function TechStackSection({ data }: { data: CaseStudy }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="case-study-tech-stack"
      className="relative w-full bg-evren-warm-white overflow-hidden"
    >
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-24 md:py-32">
        <motion.div
          ref={ref}
          variants={stagger}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.div variants={fadeUp} className="mb-12">
            <span className="text-sm uppercase tracking-widest text-evren-peach font-bold mb-4 block">
              Engineering
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-evren-navy tracking-tight leading-[1.1] font-heading">
              Tech Stack
            </h2>
          </motion.div>

          <motion.div
            variants={gridStagger}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4"
          >
            {data.techStack.map((tech, i) => {
              const IconComp = ICON_MAP[tech.icon] || Globe;
              return (
                <motion.div
                  key={i}
                  variants={gridItem}
                  className="bg-white rounded-studio-sm p-5 shadow-warm border border-evren-light-gray/40 flex flex-col items-center gap-3 hover:shadow-warm-hover transition-shadow duration-[600ms] ease-in-out"
                >
                  <IconComp className="w-6 h-6 text-evren-navy" />
                  <span className="text-xs font-semibold text-evren-charcoal font-body text-center">
                    {tech.name}
                  </span>
                </motion.div>
              );
            })}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

// ═══════════════════════════════════════════════════════════════════════
//  SECTION 7: AI HIGHLIGHT BOX + BEFORE/AFTER
// ═══════════════════════════════════════════════════════════════════════

function AIHighlightSection({ data }: { data: CaseStudy }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [sliderPosition, setSliderPosition] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(percentage);
  };

  const handleMouseDown = () => {
    isDragging.current = true;
  };
  const handleMouseUp = () => {
    isDragging.current = false;
  };
  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging.current) handleMove(e.clientX);
  };
  const handleTouchMove = (e: React.TouchEvent) => {
    handleMove(e.touches[0].clientX);
  };

  return (
    <section
      id="case-study-ai-highlight"
      className="relative w-full bg-evren-peach-light overflow-hidden"
    >
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-24 md:py-32">
        <motion.div
          ref={ref}
          variants={stagger}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Header */}
          <motion.div variants={fadeUp} className="mb-12 max-w-3xl">
            <span className="text-sm uppercase tracking-widest text-evren-navy font-bold mb-4 block">
              AI-Native Advantage
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-evren-navy tracking-tight leading-[1.1] font-heading mb-6">
              {data.aiHighlight.title}
            </h2>
            <p className="text-lg text-evren-charcoal/70 leading-relaxed font-body">
              {data.aiHighlight.description}
            </p>
          </motion.div>

          {/* Before / After Comparison Slider */}
          <motion.div variants={scaleReveal} className="max-w-5xl mx-auto">
            <div
              ref={containerRef}
              className="relative rounded-studio overflow-hidden shadow-warm border border-evren-light-gray/40 aspect-[16/9] cursor-col-resize select-none"
              onMouseDown={handleMouseDown}
              onMouseUp={handleMouseUp}
              onMouseLeave={handleMouseUp}
              onMouseMove={handleMouseMove}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleMouseUp}
              role="slider"
              aria-label="Before and after comparison slider"
              aria-valuemin={0}
              aria-valuemax={100}
              aria-valuenow={Math.round(sliderPosition)}
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "ArrowLeft")
                  setSliderPosition((p) => Math.max(0, p - 5));
                if (e.key === "ArrowRight")
                  setSliderPosition((p) => Math.min(100, p + 5));
              }}
            >
              {/* After Image (full width, underneath) */}
              <div className="absolute inset-0">
                <Image
                  src={data.aiHighlight.afterImage}
                  alt={data.aiHighlight.afterLabel}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 960px"
                />
              </div>

              {/* Before Image (clipped) */}
              <div
                className="absolute inset-0 overflow-hidden"
                style={{ width: `${sliderPosition}%` }}
              >
                <Image
                  src={data.aiHighlight.beforeImage}
                  alt={data.aiHighlight.beforeLabel}
                  fill
                  className="object-cover grayscale"
                  sizes="(max-width: 1024px) 100vw, 960px"
                />
                {/* Gray overlay for "messy" effect */}
                <div className="absolute inset-0 bg-slate-900/20" />
              </div>

              {/* Slider Handle */}
              <div
                className="absolute top-0 bottom-0 w-1 bg-white shadow-[0_0_20px_rgba(255,255,255,0.5)]"
                style={{ left: `${sliderPosition}%`, transform: "translateX(-50%)" }}
              >
                {/* Handle knob */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white shadow-[0_4px_20px_rgba(0,0,0,0.2)] flex items-center justify-center">
                  <div className="flex gap-[3px]">
                    <div className="w-[3px] h-4 bg-evren-navy/40 rounded-full" />
                    <div className="w-[3px] h-4 bg-evren-navy/40 rounded-full" />
                  </div>
                </div>
              </div>

              {/* Labels */}
              <div className="absolute bottom-4 left-4 bg-evren-navy/80 backdrop-blur-sm text-white text-xs font-bold px-3 py-1.5 rounded-full">
                {data.aiHighlight.beforeLabel}
              </div>
              <div className="absolute bottom-4 right-4 bg-evren-peach/90 backdrop-blur-sm text-evren-navy text-xs font-bold px-3 py-1.5 rounded-full">
                {data.aiHighlight.afterLabel}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

// ═══════════════════════════════════════════════════════════════════════
//  SECTION 8: TESTIMONIAL
// ═══════════════════════════════════════════════════════════════════════

function TestimonialSection({ data }: { data: CaseStudy }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  if (!data.testimonial) return null;

  return (
    <section
      id="case-study-testimonial"
      className="relative w-full bg-white overflow-hidden"
    >
      <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8 py-24 md:py-32 text-center">
        <motion.div
          ref={ref}
          variants={stagger}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Quote icon */}
          <motion.div variants={fadeUp} className="text-evren-peach mb-8">
            <svg
              width="48"
              height="48"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="mx-auto block"
            >
              <path d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z" />
            </svg>
          </motion.div>

          <motion.p
            variants={fadeUp}
            className="text-2xl md:text-3xl font-heading font-medium leading-relaxed text-evren-navy mb-10"
          >
            &ldquo;{data.testimonial.quote}&rdquo;
          </motion.p>

          <motion.div variants={fadeUp} className="flex flex-col items-center">
            <h5 className="font-bold text-evren-navy text-lg font-heading">
              {data.testimonial.name}
            </h5>
            <p className="text-evren-medium-gray font-body">
              {data.testimonial.title}, {data.testimonial.company}
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

// ═══════════════════════════════════════════════════════════════════════
//  SECTION 9: CASE STUDY CTA — "Want results like these? Book a call."
// ═══════════════════════════════════════════════════════════════════════

function CaseStudyCTA() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="case-study-cta"
      className="relative w-full bg-evren-warm-white overflow-hidden"
    >
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-24 md:py-32">
        <motion.div
          ref={ref}
          variants={stagger}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="bg-evren-navy rounded-[32px] p-12 md:p-20 text-center relative overflow-hidden shadow-warm-hover"
        >
          {/* Decorative circles */}
          <div
            className="absolute -top-[50%] -left-[10%] w-[500px] h-[500px] rounded-full border-[40px] border-white/5 pointer-events-none"
            aria-hidden="true"
          />
          <div
            className="absolute -bottom-[40%] -right-[5%] w-[600px] h-[600px] rounded-full border-[40px] border-evren-peach/10 pointer-events-none"
            aria-hidden="true"
          />

          <div className="relative z-10">
            <motion.span
              variants={fadeUp}
              className="inline-block text-[11px] sm:text-sm font-bold uppercase tracking-[0.2em] text-evren-peach font-body mb-6"
            >
              Your Turn
            </motion.span>

            <motion.h2
              variants={fadeUp}
              className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white font-heading leading-[1.05] mb-6 max-w-2xl mx-auto"
            >
              Want results like these?
            </motion.h2>

            <motion.p
              variants={fadeUp}
              className="text-base sm:text-lg text-white/60 mb-10 font-body max-w-xl mx-auto"
            >
              Let&apos;s discuss how we can drive measurable ROI for your business.
            </motion.p>

            <motion.div variants={fadeUp}>
              <motion.a
                href="/connect"
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 16px 40px -8px rgba(244, 168, 154, 0.4)",
                }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: "spring", stiffness: 400, damping: 20 }}
                className="inline-flex items-center justify-center gap-2.5 text-evren-navy text-[15px] font-heading font-semibold py-4 px-10 rounded-full bg-evren-peach shadow-warm transition-all duration-300 cursor-pointer"
              >
                Book a Call
                <ArrowRight size={16} className="transition-transform duration-200" />
              </motion.a>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// ═══════════════════════════════════════════════════════════════════════
//  MAIN EXPORT: CaseStudyTemplate
// ═══════════════════════════════════════════════════════════════════════

export default function CaseStudyTemplate({ data }: { data: CaseStudy }) {
  return (
    <article>
      <Navbar/>
      <HeroSection data={data} />
      <ChallengeSection data={data} />
      <ApproachSection data={data} />
      <SolutionSection data={data} />
      <ResultsSection data={data} />
      <TechStackSection data={data} />
      <AIHighlightSection data={data} />
      <TestimonialSection data={data} />
      <Footer/>
    </article>
  );
}

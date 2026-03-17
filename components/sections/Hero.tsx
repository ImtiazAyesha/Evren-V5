"use client";

import { useRef, useEffect, useState } from "react";
import {
  motion,
  useInView,
  useScroll,
  useTransform,
  type Variants,
} from "framer-motion";
import { ArrowUpRight } from "lucide-react";

// ═══════════════════════════════════════════════════════════════════════
//  ANIMATED COUNTER — ease-out cubic from 0 → target
// ═══════════════════════════════════════════════════════════════════════

function AnimatedCounter({
  target,
  suffix = "",
  duration = 2000,
  trigger,
}: {
  target: number;
  suffix?: string;
  duration?: number;
  trigger: boolean;
}) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!trigger) return;

    let prev = 0;
    const t0 = performance.now();

    function tick(now: number) {
      const p = Math.min((now - t0) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      const val = Math.round(eased * target);
      if (val !== prev) {
        setCount(val);
        prev = val;
      }
      if (p < 1) requestAnimationFrame(tick);
    }

    requestAnimationFrame(tick);
  }, [trigger, target, duration]);

  return (
    <span>
      {count}
      {suffix}
    </span>
  );
}

// ═══════════════════════════════════════════════════════════════════════
//  MOTION VARIANTS
// ═══════════════════════════════════════════════════════════════════════

const SPRING = { type: "spring" as const, stiffness: 100, damping: 20 };

const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12, delayChildren: 0.06 },
  },
};

const fadeSlideUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { ...SPRING, duration: 0.6 },
  },
};

const wordReveal: Variants = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 120, damping: 20 },
  },
};

// ═══════════════════════════════════════════════════════════════════════
//  HEADLINE — Manual word-by-word so we can style "Intelligent"
// ═══════════════════════════════════════════════════════════════════════

const HEADLINE_LINES: { words: { text: string; decorated?: boolean }[] }[] = [
  { words: [{ text: "Where " }, { text: "Ideas " }, { text: "Become" }] },
  { words: [{ text: "Intelligent", decorated: true }, { text: " Products." }] },
];

// ═══════════════════════════════════════════════════════════════════════
//  TRUST METRICS
// ═══════════════════════════════════════════════════════════════════════

const TRUST_METRICS = [
  { value: 50, suffix: "+", label: "Products Shipped" },
  { value: 98, suffix: "%", label: "Client Satisfaction" },
  { value: 3, suffix: "", label: "Global Offices" },
];

// ═══════════════════════════════════════════════════════════════════════
//  HERO SECTION
// ═══════════════════════════════════════════════════════════════════════

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const metricsRef = useRef<HTMLDivElement>(null);

  const isInView = useInView(contentRef, { once: true, margin: "-60px" });
  const metricsInView = useInView(metricsRef, { once: true, margin: "-40px" });

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const contentY = useTransform(scrollYProgress, [0, 0.5], [0, 30]);

  return (
    <section
      ref={sectionRef}
      id="hero"
      className="relative w-full overflow-hidden bg-evren-warm-white"
      style={{ minHeight: "600px" }}
    >
      {/* ── Animated gradient mesh blobs ──────────────────────────── */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        {/* Peach blob — top-left */}
        <div
          className="absolute -top-[10%] -left-[8%] w-[700px] h-[700px] rounded-full mesh-blob"
          style={{
            background:
              "radial-gradient(circle, rgba(244, 168, 154, 0.22) 0%, rgba(244, 168, 154, 0.07) 40%, transparent 70%)",
            filter: "blur(40px)",
          }}
        />
        {/* Rose blob — center-right */}
        <div
          className="absolute top-[0%] -right-[5%] w-[600px] h-[600px] rounded-full mesh-blob-2"
          style={{
            background:
              "radial-gradient(circle, rgba(232, 150, 126, 0.18) 0%, rgba(232, 150, 126, 0.05) 45%, transparent 70%)",
            filter: "blur(35px)",
          }}
        />
        {/* Gold blob — bottom-center */}
        <div
          className="absolute -bottom-[8%] left-[15%] w-[650px] h-[650px] rounded-full mesh-blob"
          style={{
            background:
              "radial-gradient(circle, rgba(212, 165, 116, 0.16) 0%, rgba(212, 165, 116, 0.04) 40%, transparent 70%)",
            filter: "blur(45px)",
            animationDelay: "-6s",
          }}
        />
        {/* Navy tint blob — top-right */}
        <div
          className="absolute top-[25%] right-[10%] w-[500px] h-[500px] rounded-full mesh-blob-2"
          style={{
            background:
              "radial-gradient(circle, rgba(27, 42, 74, 0.05) 0%, rgba(27, 42, 74, 0.01) 50%, transparent 70%)",
            filter: "blur(30px)",
            animationDelay: "-10s",
          }}
        />
      </div>

      {/* ────────────────────────────────────────────────────────────
          CONTENT — Centered layout
      ──────────────────────────────────────────────────────────── */}
      <motion.div
        ref={contentRef}
        className="relative z-10 max-w-5xl mx-auto px-5 sm:px-6 lg:px-12 py-16 sm:py-24 lg:py-32 flex flex-col items-center text-center group"
        style={{ y: contentY }}
        variants={staggerContainer}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        {/* ── Circular Blueprint grid surrounding content ── */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[45%] w-[120vw] h-[120vw] max-w-[1400px] max-h-[1400px] pointer-events-none z-[-1] transition-opacity duration-700 opacity-40 group-hover:opacity-100">
          <div
            className="absolute inset-0 transition-transform duration-1000 group-hover:scale-[1.05]"
            style={{
              backgroundSize: "64px 64px",
              backgroundImage:
                "linear-gradient(to right, rgba(27, 42, 74, 0.08) 1px, transparent 1px), linear-gradient(to bottom, rgba(27, 42, 74, 0.08) 1px, transparent 1px)",
              maskImage:
                "radial-gradient(circle at center, black 10%, transparent 65%)",
              WebkitMaskImage:
                "radial-gradient(circle at center, black 10%, transparent 65%)",
            }}
          />
        </div>

        {/* 1. BADGE */}
        <motion.div
          variants={fadeSlideUp}
          className="mb-8 inline-flex items-center gap-2.5 
                     rounded-full bg-evren-peach-light/60 border border-evren-peach/20 
                     px-5 py-2"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-evren-rose opacity-50" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-evren-rose" />
          </span>
          <span className="text-[11px] font-heading font-semibold text-evren-navy tracking-wide uppercase">
            The universe is always expanding. So are we.
          </span>
        </motion.div>

        {/* 2. HEADLINE */}
        <motion.h1
          className="font-heading font-extrabold text-evren-navy 
                     text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.1] -tracking-tight max-w-4xl"
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: 0.08, delayChildren: 0.1 },
            },
          }}
        >
          {HEADLINE_LINES.map((line, lineIdx) => (
            <span key={lineIdx} className="block">
              {line.words.map((word) =>
                word.decorated ? (
                  <motion.span
                    key={word.text}
                    className="relative inline-block"
                    variants={wordReveal}
                  >
                    <span className="relative z-10">{word.text}</span>
                    {/* Wavy underline — peach */}
                    <svg
                      className="absolute -bottom-1 md:-bottom-2 left-0 w-full h-[10px] md:h-[14px]"
                      viewBox="0 0 120 12"
                      fill="none"
                      preserveAspectRatio="none"
                      aria-hidden="true"
                    >
                      <path
                        d="M0 6 Q 10 0, 20 6 T 40 6 T 60 6 T 80 6 T 100 6 T 120 6"
                        stroke="#F4A89A"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        fill="none"
                        opacity="0.7"
                      />
                    </svg>
                  </motion.span>
                ) : (
                  <motion.span
                    key={word.text}
                    className="inline-block whitespace-pre"
                    variants={wordReveal}
                  >
                    {word.text}
                  </motion.span>
                )
              )}
            </span>
          ))}
          <span className="sr-only">
            Where Ideas Become Intelligent Products.
          </span>
        </motion.h1>

        {/* 3. SUBTEXT */}
        <motion.div variants={fadeSlideUp} className="mt-8 space-y-4 max-w-2xl mx-auto">
          <p
            className="font-body text-evren-charcoal text-base md:text-lg lg:text-xl leading-relaxed"
            style={{ lineHeight: 1.6 }}
          >
            We build AI-powered digital products that grow with your vision.
            From first spark to global scale, we are your partner in turning
            ideas into products the world actually needs.
          </p>
        </motion.div>

        {/* 4. CTA BUTTONS */}
        <motion.div variants={fadeSlideUp} className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
          <motion.a
            href="/connect"
            id="hero-cta-primary"
            aria-label="Book a free consultation with Evren AI"
            className="inline-flex items-center justify-center gap-2 
                       rounded-full bg-evren-peach text-evren-navy font-heading font-semibold 
                       px-8 py-4 text-sm w-full sm:w-auto will-change-transform 
                       transition-all duration-200"
            whileHover={{
              scale: 1.04,
              boxShadow: "0 16px 40px -8px rgba(244, 168, 154, 0.4)",
            }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: "spring", stiffness: 300, damping: 22 }}
          >
            Book a Free Consultation
            <ArrowUpRight
              size={16}
              className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200"
            />
          </motion.a>

          <motion.a
            href="/approach"
            id="hero-cta-secondary"
            aria-label="See our approach"
            className="inline-flex items-center justify-center gap-2 
                       rounded-full border-2 border-evren-navy-light text-evren-navy 
                       font-heading font-semibold px-8 py-4 text-sm w-full sm:w-auto
                       will-change-transform transition-all duration-200
                       hover:bg-evren-navy-light hover:text-white"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: "spring", stiffness: 300, damping: 22 }}
          >
            See Our Approach
          </motion.a>
        </motion.div>

        {/* 5. TRUST METRICS */}
        <motion.div
          ref={metricsRef}
          variants={fadeSlideUp}
          className="mt-16 pt-10 border-t border-evren-navy/10 flex flex-wrap justify-center items-center gap-8 sm:gap-16 w-full max-w-3xl"
        >
          {TRUST_METRICS.map((metric, i) => (
            <div key={metric.label} className="flex items-center">
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-heading font-extrabold text-evren-navy leading-none mb-2">
                  <AnimatedCounter
                    target={metric.value}
                    suffix={metric.suffix}
                    trigger={metricsInView}
                    duration={1800}
                  />
                </div>
                <p
                  className="text-[11px] md:text-xs font-body text-evren-medium-gray uppercase"
                  style={{ letterSpacing: "0.12em" }}
                >
                  {metric.label}
                </p>
              </div>
              {i < TRUST_METRICS.length - 1 && (
                <div className="hidden sm:flex flex-col items-center gap-1.5 ml-16">
                  <span className="block w-1 h-1 rounded-full bg-evren-peach/50" />
                  <span className="block w-1 h-1 rounded-full bg-evren-peach/30" />
                  <span className="block w-1 h-1 rounded-full bg-evren-peach/50" />
                </div>
              )}
            </div>
          ))}
        </motion.div>
      </motion.div>

      {/* ── Bottom fade gradient ──────────────────────────────────── */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-evren-warm-white to-transparent z-[5] pointer-events-none" />
    </section>
  );
}

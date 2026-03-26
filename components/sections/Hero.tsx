"use client";

import { useRef, useEffect, useState } from "react";
import {
  motion,
  useInView,
  useScroll,
  useTransform,
  type Variants,
} from "framer-motion";
import { ArrowUpRight, Layers, Star, Globe } from "lucide-react";
import ArrowButton from "@/components/ui/ArrowButton";

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

const HEADLINE_LINES: { words: { text: string; decorated?: boolean; secondary?: boolean; light?: boolean }[] }[] = [
  { words: [{ text: "Where ", secondary: true, light: true }, { text: "Ideas ", secondary: true, light: true }, { text: "Become", secondary: true, light: true }] },
  { words: [{ text: "Intelligent", decorated: true }, { text: " Products." }] },
];

// ═══════════════════════════════════════════════════════════════════════
//  TRUST METRICS
// ═══════════════════════════════════════════════════════════════════════

const TRUST_METRICS = [
  { value: 50, suffix: "+", label: "Products Shipped", icon: Layers },
  { value: 98, suffix: "%", label: "Client Satisfaction", icon: Star },
  { value: 3, suffix: "", label: "Global Offices", icon: Globe },
];

// ═══════════════════════════════════════════════════════════════════════
//  HERO SECTION
// ═══════════════════════════════════════════════════════════════════════

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const metricsRef = useRef<HTMLDivElement>(null);

  const [mousePos, setMousePos] = useState({ gridX: 0, gridY: 0, opacity: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    if (!sectionRef.current || !gridRef.current) return;

    // Glowing mask position relative to the grid itself
    const gridRect = gridRef.current.getBoundingClientRect();
    const gridX = e.clientX - gridRect.left;
    const gridY = e.clientY - gridRect.top;

    setMousePos({ gridX, gridY, opacity: 1 });
  };

  const handleMouseLeave = () => {
    setMousePos((prev) => ({ ...prev, opacity: 0 }));
  };

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
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative w-full overflow-hidden bg-evren-warm-white min-h-[100svh] md:min-h-[600px] flex flex-col justify-center"
    >
      {/* ── Animated gradient mesh blobs ──────────────────────────── */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        {/* Peach blob — top-left */}
        <div
          className="absolute -top-[5%] -left-[10%] w-[400px] h-[400px] md:w-[700px] md:h-[700px] rounded-full mesh-blob opacity-80 md:opacity-100"
          style={{
            background:
              "radial-gradient(circle, rgba(244, 168, 154, 0.22) 0%, rgba(244, 168, 154, 0.07) 40%, transparent 70%)",
            filter: "blur(40px)",
          }}
        />
        {/* Rose blob — center-right */}
        <div
          className="absolute top-[10%] -right-[15%] w-[350px] h-[350px] md:w-[600px] md:h-[600px] rounded-full mesh-blob-2 opacity-80 md:opacity-100"
          style={{
            background:
              "radial-gradient(circle, rgba(232, 150, 126, 0.18) 0%, rgba(232, 150, 126, 0.05) 45%, transparent 70%)",
            filter: "blur(35px)",
          }}
        />
        {/* Gold blob — bottom-center */}
        <div
          className="absolute -bottom-[5%] left-[5%] w-[400px] h-[400px] md:w-[650px] md:h-[650px] rounded-full mesh-blob opacity-80 md:opacity-100"
          style={{
            background:
              "radial-gradient(circle, rgba(212, 165, 116, 0.16) 0%, rgba(212, 165, 116, 0.04) 40%, transparent 70%)",
            filter: "blur(45px)",
            animationDelay: "-6s",
          }}
        />
        {/* Navy tint blob — top-right */}
        <div
          className="absolute top-[25%] right-[5%] w-[300px] h-[300px] md:w-[500px] md:h-[500px] rounded-full mesh-blob-2 opacity-80 md:opacity-100"
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
        className="relative z-10 max-w-5xl mx-auto px-5 sm:px-6 lg:px-12 pt-[100px] sm:pt-[110px] lg:pt-[120px] pb-10 sm:pb-16 lg:pb-20 flex flex-col items-center text-center group/hero"
        style={{ y: contentY }}
        variants={staggerContainer}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        {/* ── Circular Blueprint Interactive Grid ── */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100vw] h-[100vh] min-h-[800px] pointer-events-none z-[-1]"
        >
          <div ref={gridRef} className="absolute inset-0">
            {/* 1. Base Navy Grid */}
            <div
              className="absolute inset-0 transition-opacity duration-700 opacity-30 group-hover/hero:opacity-50"
              style={{
                backgroundSize: "40px 40px",
                backgroundImage:
                  "linear-gradient(to right, rgba(27, 42, 74, 0.18) 1px, transparent 1px), linear-gradient(to bottom, rgba(27, 42, 74, 0.18) 1px, transparent 1px)",
                maskImage:
                  "radial-gradient(circle at center, transparent 150px, rgba(0,0,0,0.4) 250px, black 350px, black 75%, transparent 100%)",
                WebkitMaskImage:
                  "radial-gradient(circle at center, transparent 150px, rgba(0,0,0,0.4) 250px, black 350px, black 75%, transparent 100%)",
              }}
            />

            {/* 2. Peach Glowing Hover Grid */}
            <div
              className="absolute inset-0 transition-opacity duration-300"
              style={{
                opacity: mousePos.opacity,
                backgroundSize: "40px 40px",
                backgroundImage:
                  "linear-gradient(to right, rgba(244, 168, 154, 0.9) 1px, transparent 1px), linear-gradient(to bottom, rgba(244, 168, 154, 0.9) 1px, transparent 1px)",
                maskImage: `radial-gradient(circle 200px at ${mousePos.gridX}px ${mousePos.gridY}px, black, transparent)`,
                WebkitMaskImage: `radial-gradient(circle 200px at ${mousePos.gridX}px ${mousePos.gridY}px, black, transparent)`,
              }}
            />
          </div>
        </div>

        {/* 1. BADGE (Text Only) */}
        <motion.div
          variants={fadeSlideUp}
          className="mb-4 px-4 sm:px-0"
        >
          <span className="block text-[10px] sm:text-[11px] font-heading font-bold text-evren-navy/50 tracking-[0.1em] sm:tracking-[0.25em] uppercase text-center">
            The universe is always expanding. So are we.
          </span>
        </motion.div>

        {/* 2. HEADLINE */}
        <motion.h1
          className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.1] max-w-4xl px-2 sm:px-0"
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: 0.08, delayChildren: 0.1 },
            },
          }}
        >
          {HEADLINE_LINES.map((line, lineIdx) => (
            <span key={lineIdx} className="block">
              {line.words.map((word) => {
                const textStyle = word.light
                  ? "font-light text-evren-medium-gray/90 tracking-normal"
                  : "font-extrabold text-evren-navy tracking-tight";
                return word.decorated ? (
                  <motion.span
                    key={word.text}
                    className={`relative inline-block ${textStyle}`}
                    variants={wordReveal}
                  >
                    <span className="relative z-10">{word.text}</span>
                    {/* Animated wavy underline — peach */}
                    <svg
                      className="absolute -bottom-1 md:-bottom-2 left-0 w-full h-[10px] md:h-[14px]"
                      viewBox="0 0 200 12"
                      fill="none"
                      preserveAspectRatio="none"
                      aria-hidden="true"
                    >
                      <g>
                        <animateTransform attributeName="transform" type="translate" from="-64 0" to="0 0" dur="3s" repeatCount="indefinite" />
                        <path
                          d="M -64 6 Q -48 0, -32 6 T 0 6 T 32 6 T 64 6 T 96 6 T 128 6 T 160 6 T 192 6 T 224 6 T 256 6 T 288 6"
                          stroke="#F4A89A"
                          strokeWidth="2.5"
                          strokeLinecap="round"
                          fill="none"
                          opacity="0.7"
                        />
                      </g>
                    </svg>
                  </motion.span>
                ) : (
                  <motion.span
                    key={word.text}
                    className={`inline-block whitespace-pre ${textStyle}`}
                    variants={wordReveal}
                  >
                    {word.text}
                  </motion.span>
                );
              })}
            </span>
          ))}
          <span className="sr-only">
            Where Ideas Become Intelligent Products.
          </span>
        </motion.h1>

        {/* 3. SUBTEXT */}
        <motion.div variants={fadeSlideUp} className="mt-6 sm:mt-8 space-y-4 max-w-[90%] sm:max-w-xl mx-auto px-2 sm:px-0">
          <p
            className="font-body text-evren-charcoal text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed text-balance"
            style={{ lineHeight: 1.6 }}
          >
            We build AI-powered digital products that grow with your vision.
            From first spark to global scale, we are your partner in turning
            ideas into products the world actually needs.
          </p>
        </motion.div>

        {/* 4. CTA BUTTONS */}
        <motion.div variants={fadeSlideUp} className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto px-4 sm:px-0">
          <ArrowButton
            href="/connect"
            id="hero-cta-primary"
            ariaLabel="Book a free consultation with Evren AI"
            variant="primary"
            size="lg"
            className="w-full sm:w-auto justify-between sm:justify-center text-[14px] sm:text-base whitespace-nowrap"
          >
            Book a Free Consultation
          </ArrowButton>

          <ArrowButton
            href="/approach"
            id="hero-cta-secondary"
            ariaLabel="See our approach"
            variant="outline"
            size="lg"
            className="w-full sm:w-auto justify-between sm:justify-center text-[14px] sm:text-base whitespace-nowrap"
          >
            See Our Approach
          </ArrowButton>
        </motion.div>

        {/* 5. TRUST METRICS */}
        <motion.div
          ref={metricsRef}
          variants={fadeSlideUp}
          className="mt-16 pt-4 flex flex-wrap justify-center items-center gap-8 sm:gap-16 w-full max-w-3xl"
        >
          {TRUST_METRICS.map((metric, i) => (
            <div key={metric.label} className="flex items-center">
              <div className="text-center flex flex-col items-center">
                <div className="text-3xl md:text-4xl font-heading font-extrabold text-evren-navy leading-none mb-3">
                  <AnimatedCounter
                    target={metric.value}
                    suffix={metric.suffix}
                    trigger={metricsInView}
                    duration={1800}
                  />
                </div>
                <div
                  className="flex items-center justify-center gap-1.5 text-[11px] md:text-xs font-body text-evren-medium-gray uppercase"
                  style={{ letterSpacing: "0.12em" }}
                >
                  <metric.icon size={14} className="text-evren-peach/90" strokeWidth={2.5} />
                  <span>{metric.label}</span>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </motion.div>

      {/* ── Bottom fade gradient ──────────────────────────────────── */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-evren-warm-white to-transparent z-[5] pointer-events-none" />
    </section>
  );
}

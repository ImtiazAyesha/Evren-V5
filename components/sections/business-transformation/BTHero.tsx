"use client";

import { useRef } from "react";
import {
  motion,
  useInView,
  useScroll,
  useTransform,
  type Variants,
} from "framer-motion";
import { Briefcase, Building2, Lightbulb, Compass } from "lucide-react";
import ArrowButton from "@/components/ui/ArrowButton";

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
//  HEADLINE — Word-by-word reveal (matching ApproachHero)
// ═══════════════════════════════════════════════════════════════════════

const HEADLINE_LINES: {
  words: { text: string; decorated?: boolean; secondary?: boolean; light?: boolean }[];
}[] = [
  {
    words: [{ text: "Sometimes Building " }],
  },
  {
    words: [{ text: "the Right Product " }],
  },
  {
    words: [
      { text: "Starts With ", light: true },
      { text: "Rethinking ", decorated: true, light: true },
    ],
  },
  {
    words: [{ text: "the Business Around It.", light: true }]
  }
];

const FLOATING_ICONS = [
  { icon: Briefcase, top: "18%", left: "2%", delay: 0, scale: 1.05, initRotate: -8, moveX: 0, moveY: -20 },
  { icon: Building2, top: "25%", right: "0%", delay: 1.5, scale: 1.25, initRotate: 10, moveX: -15, moveY: -15 },
  { icon: Lightbulb, bottom: "28%", left: "4%", delay: 0.8, scale: 0.95, initRotate: 6, moveX: 20, moveY: 0 },
  { icon: Compass, bottom: "20%", right: "5%", delay: 2.2, scale: 1.15, initRotate: -10, moveX: -15, moveY: 15 },
];

export default function BTHero() {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  const isInView = useInView(contentRef, { once: true, margin: "-60px" });

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const contentY = useTransform(scrollYProgress, [0, 0.5], [0, 30]);

  return (
    <section
      ref={sectionRef}
      id="bt-hero"
      aria-label="Business Transformation"
      className="relative w-full overflow-hidden bg-evren-warm-white min-h-[100svh] md:min-h-[600px] flex flex-col justify-center"
    >
      {/* ── Animated gradient mesh blobs ──────────────────────────── */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        {/* Peach blob — top-left */}
        <div
          className="absolute -top-[10%] -left-[8%] w-[700px] h-[700px] rounded-full mesh-blob"
          style={{
            background:
              "radial-gradient(circle, rgba(244, 168, 154, 0.35) 0%, rgba(244, 168, 154, 0.12) 40%, transparent 70%)",
            filter: "blur(40px)",
          }}
        />
        {/* Rose blob — center-right */}
        <div
          className="absolute top-[0%] -right-[5%] w-[600px] h-[600px] rounded-full mesh-blob-2"
          style={{
            background:
              "radial-gradient(circle, rgba(232, 150, 126, 0.25) 0%, rgba(232, 150, 126, 0.08) 45%, transparent 70%)",
            filter: "blur(35px)",
          }}
        />
        {/* Gold blob — bottom-center */}
        <div
          className="absolute -bottom-[8%] left-[15%] w-[650px] h-[650px] rounded-full mesh-blob"
          style={{
            background:
              "radial-gradient(circle, rgba(212, 165, 116, 0.2) 0%, rgba(212, 165, 116, 0.06) 40%, transparent 70%)",
            filter: "blur(45px)",
            animationDelay: "-6s",
          }}
        />
        {/* Navy tint blob — top-right */}
        <div
          className="absolute top-[25%] right-[10%] w-[500px] h-[500px] rounded-full mesh-blob-2"
          style={{
            background:
              "radial-gradient(circle, rgba(27, 42, 74, 0.06) 0%, rgba(27, 42, 74, 0.02) 50%, transparent 70%)",
            filter: "blur(30px)",
            animationDelay: "-10s",
          }}
        />

        {/* ── Contextual Glassmorphic Floating Icons ── */}
        <div className="absolute inset-y-0 left-1/2 -translate-x-1/2 w-full max-w-[1060px] z-[1] pointer-events-none hidden lg:block">
          {FLOATING_ICONS.map((item, idx) => (
            <motion.div
              key={idx}
              className="absolute bg-white/60 backdrop-blur-md border border-white shadow-[0_8px_32px_rgba(244,168,154,0.35)] rounded-2xl flex items-center justify-center text-evren-navy/80"
              style={{
                top: item.top,
                bottom: item.bottom,
                left: item.left,
                right: item.right,
                width: 60 * item.scale,
                height: 60 * item.scale,
                rotate: item.initRotate,
              }}
              animate={{
                x: [0, item.moveX, 0],
                y: [0, item.moveY, 0],
                rotate: [item.initRotate, item.initRotate + 6, item.initRotate - 6, item.initRotate],
              }}
              transition={{
                duration: 8 + (idx % 2) * 2,
                repeat: Infinity,
                ease: "easeInOut",
                delay: item.delay,
              }}
            >
              <item.icon size={26 * item.scale} strokeWidth={1.5} />
            </motion.div>
          ))}
        </div>
      </div>

      {/* ────────────────────────────────────────────────────────────
          CONTENT — Centered layout 
      ──────────────────────────────────────────────────────────── */}
      <motion.div
        ref={contentRef}
        className="relative z-10 max-w-5xl mx-auto px-5 sm:px-6 lg:px-12 pt-[100px] sm:pt-[110px] lg:pt-[120px] pb-10 sm:pb-16 lg:pb-20 flex flex-col items-center text-center group"
        style={{ y: contentY }}
        variants={staggerContainer}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >

        {/* 1. EYEBROW LABEL */}
        <motion.div
          variants={fadeSlideUp}
          className="mb-4 px-4 sm:px-0"
        >
          <span className="block text-[10px] sm:text-[11px] font-heading font-bold text-evren-navy/50 tracking-[0.1em] sm:tracking-[0.25em] uppercase text-center">
            Business Transformation
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
            Sometimes Building the Right Product Starts With Rethinking the Business Around It.
          </span>
        </motion.h1>

        {/* 3. BODY COPY */}
        <motion.div variants={fadeSlideUp} className="mt-8 max-w-2xl mx-auto">
          <p
            className="font-body text-evren-charcoal text-base md:text-lg lg:text-xl leading-relaxed"
            style={{ lineHeight: 1.7 }}
          >
            Before we write a single line of code, some of the most valuable work
            we do is helping you see your business differently. This practice
            exists for clients who need strategic clarity before or alongside
            product development.
          </p>
        </motion.div>

        {/* 4. CTA BUTTONS */}
        <motion.div variants={fadeSlideUp} className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto px-4 sm:px-0">
          <ArrowButton
            href="/connect"
            id="bt-hero-cta-primary"
            ariaLabel="Book a free strategy call"
            variant="primary"
            size="lg"
            className="w-full sm:w-auto justify-between sm:justify-center text-[14px] sm:text-base whitespace-nowrap"
          >
            Book a Free Strategy Call
          </ArrowButton>

          <ArrowButton
            href="/approach"
            id="bt-hero-cta-secondary"
            ariaLabel="See our approach"
            variant="outline"
            size="lg"
            className="w-full sm:w-auto justify-between sm:justify-center text-[14px] sm:text-base whitespace-nowrap"
          >
            See Our Approach
          </ArrowButton>
        </motion.div>
      </motion.div>

      {/* ── Bottom fade gradient ─────────────────────────────────── */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-evren-warm-white to-transparent z-[5] pointer-events-none" />
    </section>
  );
}

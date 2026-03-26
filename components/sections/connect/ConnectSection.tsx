"use client";

import { useState, useRef } from "react";
import {
  motion,
  useInView,
  useScroll,
  useTransform,
  type Variants,
} from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  Loader2,
  Send,
} from "lucide-react";

// ═══════════════════════════════════════════════════════════════════════
//  MOTION VARIANTS (matching ApproachHero / AboutHero)
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

// ── HEADLINE LINES (word-by-word reveal) ─────────────────────────────

const HEADLINE_LINES: {
  words: { text: string; decorated?: boolean; secondary?: boolean; light?: boolean }[];
}[] = [
    {
      words: [{ text: "Let's " }, { text: "build " }, { text: "something " }],
    },
    {
      words: [{ text: "intelligent.", decorated: true }],
    },
  ];

// ── CONSTANTS ────────────────────────────────────────────────────────

const TRUST_POINTS = [
  "50+ enterprise AI systems delivered",
  "Cross-industry expertise",
  "Full-stack AI deployment",
];

// ── FLOATING LABEL INPUT & TEXTAREA ──────────────────────────────────

function FloatingInput({
  id,
  label,
  type = "text",
  value,
  onChange,
  required = false,
}: {
  id: string;
  label: string;
  type?: string;
  value: string;
  onChange: (val: string) => void;
  required?: boolean;
}) {
  const [focused, setFocused] = useState(false);
  const isActive = focused || value.length > 0;

  return (
    <div className="relative">
      <input
        id={id}
        type={type}
        value={value}
        required={required}
        onChange={(e) => onChange(e.target.value)}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        className={`
          peer w-full px-4 pt-6 pb-2 rounded-xl bg-white
          border transition-all duration-300 outline-none font-body text-sm text-evren-charcoal
          ${focused
            ? "border-evren-navy/40 shadow-[0_0_0_3px_rgba(27,42,74,0.06)]"
            : "border-evren-light-gray hover:border-evren-medium-gray/40"
          }
        `}
      />
      <label
        htmlFor={id}
        className={`
          absolute left-4 transition-all duration-300 pointer-events-none font-body
          ${isActive
            ? "top-2 text-[11px] font-medium text-evren-navy"
            : "top-1/2 -translate-y-1/2 text-sm text-evren-medium-gray"
          }
        `}
      >
        {label}
      </label>
    </div>
  );
}

function FloatingTextarea({
  id,
  label,
  value,
  onChange,
}: {
  id: string;
  label: string;
  value: string;
  onChange: (val: string) => void;
}) {
  const [focused, setFocused] = useState(false);
  const isActive = focused || value.length > 0;

  return (
    <div className="relative">
      <textarea
        id={id}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        rows={4}
        className={`
          peer w-full px-4 pt-7 pb-3 rounded-xl bg-white resize-none
          border transition-all duration-300 outline-none font-body text-sm text-evren-charcoal
          ${focused
            ? "border-evren-navy/40 shadow-[0_0_0_3px_rgba(27,42,74,0.06)]"
            : "border-evren-light-gray hover:border-evren-medium-gray/40"
          }
        `}
      />
      <label
        htmlFor={id}
        className={`
          absolute left-4 transition-all duration-300 pointer-events-none font-body
          ${isActive
            ? "top-2 text-[11px] font-medium text-evren-navy"
            : "top-5 text-sm text-evren-medium-gray"
          }
        `}
      >
        {label}
      </label>
    </div>
  );
}

// ── DIRECT CONTACT FORM ──────────────────────────────────────────────

function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [idea, setIdea] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
    }, 1500);
  };

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col items-center justify-center py-16 text-center"
      >
        <div className="w-16 h-16 rounded-full bg-evren-peach-light flex items-center justify-center mb-6">
          <CheckCircle2 size={28} className="text-evren-navy" />
        </div>
        <h3 className="font-heading font-bold text-evren-charcoal text-xl mb-2">
          Message Received
        </h3>
        <p className="font-body text-evren-medium-gray text-sm leading-relaxed max-w-xs">
          We&apos;ll review your inquiry and reach out within 24 hours. Looking
          forward to learning about your vision.
        </p>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {/* Name + Email side-by-side on desktop */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <FloatingInput
          id="contact-name"
          label="Full Name"
          value={name}
          onChange={setName}
          required
        />
        <FloatingInput
          id="contact-email"
          label="Work Email"
          type="email"
          value={email}
          onChange={setEmail}
          required
        />
      </div>
      <FloatingInput
        id="contact-company"
        label="Company"
        value={company}
        onChange={setCompany}
      />
      <FloatingTextarea
        id="contact-idea"
        label="Tell us about your product idea"
        value={idea}
        onChange={setIdea}
      />
      <motion.button
        id="contact-form-submit"
        type="submit"
        disabled={submitting}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="w-full flex items-center justify-center gap-2.5 px-6 py-4 rounded-xl
                   bg-evren-navy text-white font-heading font-semibold text-sm
                   shadow-warm hover:shadow-warm-hover transition-all duration-300
                   disabled:opacity-70 disabled:cursor-not-allowed cursor-pointer"
      >
        {submitting ? (
          <>
            <Loader2 size={16} className="animate-spin" />
            Sending...
          </>
        ) : (
          <>
            Send Inquiry
            <ArrowRight size={15} />
          </>
        )}
      </motion.button>
    </form>
  );
}

// ═══════════════════════════════════════════════════════════════════════
//  MAIN CONNECT SECTION
// ═══════════════════════════════════════════════════════════════════════

export default function ConnectSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const headRef = useRef<HTMLDivElement>(null);

  const isInView = useInView(headRef, { once: true, margin: "-10%" });

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const contentY = useTransform(scrollYProgress, [0, 0.5], [0, 30]);

  return (
    <section
      ref={sectionRef}
      id="connect-section"
      className="relative w-full overflow-hidden bg-evren-warm-white min-h-[100svh] flex flex-col justify-center"
    >
      {/* ── Animated gradient mesh blobs (matching hero sections) ──────────────────────────── */}
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
      </div>

      {/* ────────────────────────────────────────────────────────────
          SPLIT-SCREEN LAYOUT
      ──────────────────────────────────────────────────────────── */}
      <div className="relative z-10 pt-32 md:pt-40 pb-24 md:pb-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div
            ref={headRef}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start"
          >
            {/* ─── LEFT COLUMN — Content ─── */}
            <motion.div
              style={{ y: contentY }}
              variants={staggerContainer}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className="lg:sticky lg:top-32 flex flex-col items-start text-left"
            >
              {/* 1. BADGE */}
              <motion.div variants={fadeSlideUp} className="mb-6">
                <span className="block text-[10px] sm:text-[11px] font-heading font-bold text-evren-navy/50 tracking-[0.1em] sm:tracking-[0.25em] uppercase">
                  Start a Conversation
                </span>
              </motion.div>

              {/* 2. HEADLINE */}
              <motion.h1
                className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.1] max-w-2xl px-0"
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
                <span className="sr-only">Let's build something intelligent.</span>
              </motion.h1>

              {/* 3. BODY COPY */}
              <motion.div variants={fadeSlideUp} className="mt-8 max-w-md">
                <p
                  className="font-body text-evren-charcoal text-base md:text-lg leading-relaxed"
                  style={{ lineHeight: 1.7 }}
                >
                  Tell us about your vision, and we&apos;ll tell you how we&apos;d
                  build it. No pitch decks, no sales scripts — just a technical
                  conversation between builders.
                </p>
              </motion.div>

              {/* 4. TRUST POINTS */}
              <motion.div variants={fadeSlideUp} className="mt-8 flex flex-col gap-4">
                {TRUST_POINTS.map((point, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <div className="mt-[2px] w-5 h-5 rounded-full bg-evren-peach-light flex items-center justify-center shrink-0">
                      <CheckCircle2 size={12} className="text-evren-navy" strokeWidth={2.5} />
                    </div>
                    <span className="font-body text-sm text-evren-charcoal/80 leading-relaxed max-w-sm">
                      {point}
                    </span>
                  </div>
                ))}
              </motion.div>
            </motion.div>

            {/* ─── RIGHT COLUMN — Form Card ─── */}
            <motion.div
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              variants={{
                hidden: { opacity: 0, y: 40 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { ...SPRING, duration: 0.8, delay: 0.3 },
                },
              }}
              className="lg:sticky lg:top-36 w-full"
            >
              <div className="bg-white rounded-2xl border border-evren-light-gray/60 overflow-hidden shadow-warm relative">
                {/* Form header */}
                <div className="px-6 md:px-8 pt-7 pb-0">
                  <div className="flex items-center gap-3 mb-1">
                    <div className="w-8 h-8 rounded-lg bg-evren-navy/5 flex items-center justify-center">
                      <Send size={14} className="text-evren-navy" />
                    </div>
                    <h2 className="font-heading font-bold text-evren-charcoal text-lg">
                      Send us a message
                    </h2>
                  </div>
                  <p className="font-body text-sm text-evren-medium-gray leading-relaxed pl-11 pb-5 border-b border-evren-light-gray/40">
                    Tell us about your product idea and we&apos;ll respond
                    within 24 hours with our initial assessment.
                  </p>
                </div>

                {/* Form body */}
                <div className="px-6 md:px-8 py-6">
                  <ContactForm />
                </div>
              </div>

              <p className="text-center text-xs text-evren-medium-gray/60 font-body mt-5">
                No commitment required · Confidential &amp; NDA-ready
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* ── Bottom fade gradient ─────────────────────────────────── */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-evren-warm-white to-transparent z-[5] pointer-events-none" />
    </section>
  );
}

"use client";

import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  Loader2,
  Send,
} from "lucide-react";

// ═══════════════════════════════════════════════════════════════════════
//  CONNECT SECTION — Split-Screen Layout (Editorial Design)
//  Left: Trust Anchor (headline, trust points)
//  Right: Conversion Engine (Direct Contact Form)
// ═══════════════════════════════════════════════════════════════════════

// ── CONSTANTS ────────────────────────────────────────────────────────

const TRUST_POINTS = [
  "50+ enterprise AI systems delivered",
  "Cross-industry expertise: Healthcare, Fintech, Logistics, Construction",
  "Full-stack AI — from strategy to production deployment",
];

// ── FLOATING LABEL INPUT ─────────────────────────────────────────────

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
//  MAIN CONNECT SECTION — Split-Screen (Content Left, Form Right)
// ═══════════════════════════════════════════════════════════════════════

export default function ConnectSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const headRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(headRef, { once: true, amount: 0.15 });

  return (
    <section
      ref={sectionRef}
      id="connect-section"
      className="relative w-full overflow-hidden bg-evren-warm-white min-h-screen"
    >
      {/* ══════════════════════════════════════════════════════════════
          BACKGROUND — Single Grid + Gradient Mesh
      ══════════════════════════════════════════════════════════════ */}

      {/* Single grid background — fades at edges */}
      <div
        className="absolute inset-0 pointer-events-none z-0"
        style={{
          backgroundSize: "48px 48px",
          backgroundImage:
            "linear-gradient(to right, rgba(27, 42, 74, 0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(27, 42, 74, 0.06) 1px, transparent 1px)",
          maskImage:
            "linear-gradient(to bottom, transparent 0%, black 8%, black 85%, transparent 100%)",
          WebkitMaskImage:
            "linear-gradient(to bottom, transparent 0%, black 8%, black 85%, transparent 100%)",
        }}
      />

      {/* Animated gradient mesh blobs */}
      <div className="absolute inset-0 pointer-events-none z-[1] overflow-hidden">
        <div
          className="absolute -top-[10%] -left-[8%] w-[700px] h-[700px] rounded-full mesh-blob"
          style={{
            background: "radial-gradient(circle, rgba(244, 168, 154, 0.22) 0%, rgba(244, 168, 154, 0.07) 40%, transparent 70%)",
            filter: "blur(40px)",
          }}
        />
        <div
          className="absolute top-[20%] right-[10%] w-[500px] h-[500px] rounded-full mesh-blob-2"
          style={{
            background: "radial-gradient(circle, rgba(212, 165, 116, 0.16) 0%, rgba(212, 165, 116, 0.04) 40%, transparent 70%)",
            filter: "blur(30px)",
          }}
        />
        <div
          className="absolute -bottom-[8%] left-[15%] w-[650px] h-[650px] rounded-full mesh-blob"
          style={{
            background: "radial-gradient(circle, rgba(27, 42, 74, 0.05) 0%, rgba(27, 42, 74, 0.01) 50%, transparent 70%)",
            filter: "blur(45px)",
            animationDelay: "-6s",
          }}
        />
      </div>

      {/* ══════════════════════════════════════════════════════════════
          SPLIT-SCREEN LAYOUT — Content Left | Form Right
      ══════════════════════════════════════════════════════════════ */}
      <div className="relative z-10 pt-32 md:pt-40 pb-24 md:pb-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div
            ref={headRef}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start"
          >

            {/* ─── LEFT COLUMN — Trust Anchor ─── */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="lg:sticky lg:top-32 order-2 lg:order-1"
            >
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="mb-8 inline-flex items-center gap-2.5 rounded-full bg-evren-peach-light/60 border border-evren-peach/20 px-5 py-2"
              >
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-evren-rose opacity-50" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-evren-rose" />
                </span>
                <span className="text-[11px] font-heading font-semibold text-evren-navy tracking-wide uppercase">
                  Start a Conversation
                </span>
              </motion.div>

              {/* Headline */}
              <h1
                className="font-heading font-extrabold text-evren-charcoal tracking-tight leading-[1.08] mb-5"
                style={{ fontSize: "clamp(36px, 4.5vw, 58px)" }}
              >
                Let&apos;s build something{" "}
                <span className="relative inline-block text-evren-navy">
                  <span className="relative z-10">intelligent.</span>
                  <svg className="absolute -bottom-1 md:-bottom-2 left-0 w-full h-[10px] md:h-[14px]" viewBox="0 0 200 12" fill="none" preserveAspectRatio="none" aria-hidden="true">
                    <g>
                      <animateTransform attributeName="transform" type="translate" from="-64 0" to="0 0" dur="3s" repeatCount="indefinite" />
                      <path d="M -64 6 Q -48 0, -32 6 T 0 6 T 32 6 T 64 6 T 96 6 T 128 6 T 160 6 T 192 6 T 224 6 T 256 6 T 288 6" stroke="#F4A89A" strokeWidth="2.5" strokeLinecap="round" fill="none" opacity="0.7" />
                    </g>
                  </svg>
                </span>
              </h1>

              {/* Sub-headline */}
              <p className="font-body text-evren-medium-gray text-lg leading-relaxed mb-10 max-w-md">
                Tell us about your vision, and we&apos;ll tell you how we&apos;d
                build it. No pitch decks, no sales scripts — just a technical
                conversation between builders.
              </p>

              {/* Trust Points */}
              <div className="space-y-3 mb-0">
                {TRUST_POINTS.map((point, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -12 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.5 + idx * 0.1, duration: 0.4 }}
                    className="flex items-start gap-3"
                  >
                    <div className="mt-1 w-5 h-5 rounded-full bg-evren-peach-light flex items-center justify-center shrink-0">
                      <CheckCircle2
                        size={12}
                        className="text-evren-navy"
                        strokeWidth={2.5}
                      />
                    </div>
                    <span className="font-body text-sm text-evren-charcoal/80 leading-relaxed">
                      {point}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* ─── RIGHT COLUMN — Form Card ─── */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="order-1 lg:order-2 lg:sticky lg:top-36"
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

              {/* Reassurance text */}
              <p className="text-center text-xs text-evren-medium-gray/60 font-body mt-5">
                No commitment required · Confidential &amp; NDA-ready
              </p>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
}

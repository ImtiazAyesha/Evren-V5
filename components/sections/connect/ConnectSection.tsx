"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  MapPin,
  Mail,
  ArrowRight,
  Calendar,
  PenLine,
  Globe,
  CheckCircle2,
  Loader2,
} from "lucide-react";

// ═══════════════════════════════════════════════════════════════════════
//  CONNECT SECTION — Split-Screen Layout
//  Left: Trust Anchor (headline, contact details, offices)
//  Right: Conversion Engine (Calendly embed + fallback form)
// ═══════════════════════════════════════════════════════════════════════

// ── CONSTANTS ────────────────────────────────────────────────────────

const OFFICES = [
  {
    city: "Houston, Texas",
    label: "United States (HQ)",
    icon: MapPin,
  },
  {
    city: "Dubai, UAE",
    label: "Middle East Office",
    icon: MapPin,
  },
];

const CONTACT_DETAILS = [
  {
    icon: Mail,
    label: "hello@evren.ai",
    href: "mailto:hello@evren.ai",
  },
  {
    icon: Globe,
    label: "evren.ai",
    href: "https://evren.ai",
  },
];

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
          ${
            focused
              ? "border-evren-navy/40 shadow-[0_0_0_3px_rgba(27,42,74,0.06)]"
              : "border-evren-light-gray hover:border-evren-medium-gray/40"
          }
        `}
      />
      <label
        htmlFor={id}
        className={`
          absolute left-4 transition-all duration-300 pointer-events-none font-body
          ${
            isActive
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
          ${
            focused
              ? "border-evren-navy/40 shadow-[0_0_0_3px_rgba(27,42,74,0.06)]"
              : "border-evren-light-gray hover:border-evren-medium-gray/40"
          }
        `}
      />
      <label
        htmlFor={id}
        className={`
          absolute left-4 transition-all duration-300 pointer-events-none font-body
          ${
            isActive
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

// ── CALENDLY WIDGET ──────────────────────────────────────────────────

function CalendlyEmbed() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    // Load Calendly script
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    script.onload = () => {
      // Small delay for the widget to initialize
      setTimeout(() => setLoaded(true), 600);
    };
    // Fallback: if script is already loaded, mark as loaded after a short delay
    const fallback = setTimeout(() => setLoaded(true), 3000);
    document.head.appendChild(script);

    return () => {
      clearTimeout(fallback);
    };
  }, []);

  return (
    <div className="relative rounded-2xl overflow-hidden border border-evren-navy-light/20 bg-white">
      {/* Skeleton loader */}
      {!loaded && (
        <div className="absolute inset-0 z-10 flex flex-col items-center justify-center bg-white/90 backdrop-blur-sm">
          <div className="animate-pulse flex flex-col items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-evren-peach-light flex items-center justify-center">
              <Calendar size={20} className="text-evren-navy/40" />
            </div>
            <div className="h-3 w-40 rounded-full bg-evren-light-gray" />
            <div className="h-2 w-28 rounded-full bg-evren-light-gray/60" />
          </div>
        </div>
      )}
      {/* Calendly inline widget */}
      <div
        ref={containerRef}
        className="calendly-inline-widget"
        data-url="https://calendly.com/evren-ai/strategy-call?hide_gdpr_banner=1&background_color=fff9f7&text_color=2d2d2d&primary_color=1b2a4a"
        style={{ minWidth: "280px", height: "660px" }}
      />
    </div>
  );
}

// ── FALLBACK FORM ────────────────────────────────────────────────────

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
    // Simulate submission
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

type ActiveTab = "book" | "form";

export default function ConnectSection() {
  const [activeTab, setActiveTab] = useState<ActiveTab>("book");

  return (
    <motion.section
      id="connect-section"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.0, ease: "easeOut" }}
      className="min-h-screen bg-evren-warm-white pt-32 md:pt-40 pb-20 md:pb-28"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* ═══════════════════════════════════════════════════════════
              LEFT COLUMN — Trust Anchor
              ═══════════════════════════════════════════════════════════ */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="lg:sticky lg:top-32 order-2 lg:order-1"
          >
            {/* Eyebrow */}
            <div className="mb-6">
              <span className="inline-flex items-center gap-2 text-xs font-medium tracking-[0.2em] uppercase text-evren-navy/50 font-body">
                <span className="w-6 h-[1px] bg-evren-peach" />
                Start a Conversation
              </span>
            </div>

            {/* Headline */}
            <h1
              className="font-heading font-bold text-evren-charcoal tracking-tight leading-[1.08] mb-5"
              style={{ fontSize: "clamp(32px, 5vw, 52px)" }}
            >
              Let&apos;s build something{" "}
              <span className="text-evren-navy">intelligent.</span>
            </h1>

            {/* Sub-headline */}
            <p className="font-body text-evren-medium-gray text-lg leading-relaxed mb-10 max-w-md">
              Tell us about your vision, and we&apos;ll tell you how we&apos;d
              build it. No pitch decks, no sales scripts — just a technical
              conversation between builders.
            </p>

            {/* Trust Points */}
            <div className="space-y-3 mb-12">
              {TRUST_POINTS.map((point, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
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

            {/* Divider */}
            <div className="w-full h-[1px] bg-evren-light-gray/60 mb-8" />

            {/* Contact Details */}
            <div className="space-y-4 mb-10">
              {CONTACT_DETAILS.map((detail) => (
                <a
                  key={detail.label}
                  href={detail.href}
                  className="flex items-center gap-3 group"
                >
                  <div className="w-9 h-9 rounded-xl bg-evren-warm-white border border-evren-light-gray/60 flex items-center justify-center group-hover:border-evren-navy/20 transition-colors duration-300">
                    <detail.icon
                      size={15}
                      className="text-evren-navy"
                      strokeWidth={1.5}
                    />
                  </div>
                  <span className="font-body text-sm text-evren-charcoal group-hover:text-evren-navy transition-colors duration-300">
                    {detail.label}
                  </span>
                </a>
              ))}
            </div>

            {/* Office Locations — The Proof Footer */}
            <div className="p-5 rounded-2xl bg-white border border-evren-light-gray/40">
              <p className="text-[11px] font-medium tracking-[0.15em] uppercase text-evren-navy/40 font-body mb-4">
                Our Offices
              </p>
              <div className="space-y-4">
                {OFFICES.map((office) => (
                  <div key={office.city} className="flex items-start gap-3">
                    <div className="mt-0.5 w-8 h-8 rounded-lg bg-evren-peach-light/50 flex items-center justify-center shrink-0">
                      <office.icon
                        size={14}
                        className="text-evren-navy"
                        strokeWidth={1.5}
                      />
                    </div>
                    <div>
                      <p className="font-heading font-semibold text-sm text-evren-charcoal">
                        {office.label}
                      </p>
                      <p className="font-body text-xs text-evren-medium-gray">
                        {office.city}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* ═══════════════════════════════════════════════════════════
              RIGHT COLUMN — Conversion Engine
              ═══════════════════════════════════════════════════════════ */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="order-1 lg:order-2"
          >
            {/* Tab Toggle — Book / Send a Message */}
            <div className="flex items-center gap-1 p-1 bg-white rounded-xl border border-evren-light-gray/60 mb-6">
              <button
                id="tab-book-call"
                onClick={() => setActiveTab("book")}
                className={`flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-lg text-sm font-medium font-heading transition-all duration-300 cursor-pointer ${
                  activeTab === "book"
                    ? "bg-evren-navy text-white shadow-warm"
                    : "text-evren-medium-gray hover:text-evren-charcoal"
                }`}
              >
                <Calendar size={15} />
                Book a Call
              </button>
              <button
                id="tab-send-message"
                onClick={() => setActiveTab("form")}
                className={`flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-lg text-sm font-medium font-heading transition-all duration-300 cursor-pointer ${
                  activeTab === "form"
                    ? "bg-evren-navy text-white shadow-warm"
                    : "text-evren-medium-gray hover:text-evren-charcoal"
                }`}
              >
                <PenLine size={15} />
                Send a Message
              </button>
            </div>

            {/* Panel container — tech-forward card */}
            <div className="bg-white rounded-2xl border border-evren-light-gray/60 overflow-hidden shadow-warm">
              <AnimatePresence mode="wait">
                {activeTab === "book" ? (
                  <motion.div
                    key="calendly"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                  >
                    <CalendlyEmbed />
                  </motion.div>
                ) : (
                  <motion.div
                    key="form"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                    className="p-6 md:p-8"
                  >
                    {/* Form Header */}
                    <div className="mb-6">
                      <h2 className="font-heading font-bold text-evren-charcoal text-lg mb-1">
                        Not ready to book? No problem.
                      </h2>
                      <p className="font-body text-sm text-evren-medium-gray leading-relaxed">
                        Tell us about your product idea and we&apos;ll respond
                        within 24 hours with our initial assessment.
                      </p>
                    </div>
                    <ContactForm />
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Subtle reassurance text */}
            <p className="text-center text-xs text-evren-medium-gray/60 font-body mt-4">
              No commitment required · Confidential & NDA-ready
            </p>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}

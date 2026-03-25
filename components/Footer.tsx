"use client";

import { motion, useInView } from "framer-motion";
import { ArrowUpRight, Linkedin, Twitter, MapPin, Mail, Sparkles } from "lucide-react";
import ArrowButton from "@/components/ui/ArrowButton";
import { useRef } from "react";

// ═══════════════════════════════════════════════════════════════════════
//  FOOTER — Unique CTA Banner + Editorial Footer
// ═══════════════════════════════════════════════════════════════════════

const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Approach", href: "#approach" },
  { label: "Work", href: "#work" },
  { label: "Thinking", href: "#thinking" },
  { label: "Business Transformation", href: "#transformation" },
];

const OFFICES = [
  { city: "United States (HQ)", icon: MapPin },
  { city: "Dubai, UAE", icon: MapPin },
];

const SOCIALS = [
  {
    label: "LinkedIn",
    href: "https://linkedin.com/company/evren-ai",
    icon: Linkedin,
  },
  {
    label: "X (Twitter)",
    href: "https://x.com/evren_ai",
    icon: Twitter,
  },
];




// ═══════════════════════════════════════════════════════════════════════
//  COMPONENT
// ═══════════════════════════════════════════════════════════════════════

export default function Footer() {
  const ctaRef = useRef<HTMLDivElement>(null);
  const ctaInView = useInView(ctaRef, { once: true, margin: "-80px" });

  return (
    <footer>
      {/* ─── Part A: Immersive Asymmetric CTA ─── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 mb-20 sm:mb-28">
        <motion.div
          ref={ctaRef}
          initial={{ scale: 0.94, opacity: 0, y: 40 }}
          animate={ctaInView ? { scale: 1, opacity: 1, y: 0 } : {}}
          transition={{ type: "spring", stiffness: 70, damping: 20, duration: 0.9 }}
          className="bg-evren-navy rounded-[32px] relative overflow-hidden shadow-warm-hover"
        >
          {/* ── Decorative Background Elements ── */}
          <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
            {/* Organic gradient mesh */}
            <div
              className="absolute -top-[30%] -right-[15%] w-[600px] h-[600px] rounded-full mesh-blob opacity-60"
              style={{
                background:
                  "radial-gradient(circle, rgba(244, 168, 154, 0.25) 0%, rgba(244, 168, 154, 0.06) 50%, transparent 75%)",
                filter: "blur(60px)",
              }}
            />
            <div
              className="absolute -bottom-[40%] -left-[10%] w-[500px] h-[500px] rounded-full mesh-blob-2 opacity-50"
              style={{
                background:
                  "radial-gradient(circle, rgba(212, 165, 116, 0.2) 0%, transparent 65%)",
                filter: "blur(50px)",
              }}
            />
            {/* Subtle grid overlay */}
            <div
              className="absolute inset-0 opacity-[0.04]"
              style={{
                backgroundSize: "40px 40px",
                backgroundImage:
                  "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
              }}
            />
            {/* Abstract rings */}
            <div className="absolute top-8 right-12 w-[240px] h-[240px] rounded-full border border-white/[0.06]" />
            <div className="absolute top-14 right-18 w-[180px] h-[180px] rounded-full border border-white/[0.04]" />
            <div className="absolute -bottom-12 left-[20%] w-[320px] h-[320px] rounded-full border border-evren-peach/[0.08]" />
          </div>

          {/* ── CTA Content — Asymmetric Split ── */}
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-0">
            {/* Left column — Editorial headline */}
            <div className="lg:col-span-7 p-6 sm:p-10 md:p-14 lg:p-16 flex flex-col justify-center">
              {/* Pre-headline badge */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={ctaInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="inline-flex items-center gap-2 mb-8 self-start"
              >
                <span className="flex items-center gap-2 sm:gap-3 rounded-full bg-white/[0.08] border border-white/[0.1] px-3.5 py-1.5 sm:px-4">
                  <Sparkles size={13} className="text-evren-peach shrink-0" />
                  <span className="text-[9.5px] sm:text-[11px] font-heading font-semibold text-white/70 uppercase tracking-wider text-left leading-tight">
                    Ready to build something extraordinary?
                  </span>
                </span>
              </motion.div>

              {/* Main headline — editorial staggered */}
              <motion.h2
                initial={{ opacity: 0 }}
                animate={ctaInView ? { opacity: 1 } : {}}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="font-heading font-bold text-white tracking-tight"
              >
                <span className="block text-4xl md:text-5xl lg:text-[3.5rem] leading-[1.08]">
                  Have an idea?
                </span>
                <span className="block text-4xl md:text-5xl lg:text-[3.5rem] leading-[1.08] mt-1">
                  Let&apos;s{" "}
                  <span className="relative inline-block">
                    <span className="relative z-10">talk.</span>
                    {/* Curly underline effect */}
                    <svg
                      className="absolute -bottom-1 md:-bottom-2 left-0 w-full h-[10px] md:h-[14px] text-evren-peach pointer-events-none z-0"
                      viewBox="0 0 200 12"
                      preserveAspectRatio="none"
                      aria-hidden="true"
                    >
                      <motion.g
                        initial={{ opacity: 0 }}
                        animate={ctaInView ? { opacity: 1 } : {}}
                        transition={{ delay: 0.8, duration: 0.8 }}
                      >
                        <animateTransform 
                          attributeName="transform" 
                          type="translate" 
                          from="-64 0" 
                          to="0 0" 
                          dur="3s" 
                          repeatCount="indefinite" 
                        />
                        <path
                          d="M -64 6 Q -48 0, -32 6 T 0 6 T 32 6 T 64 6 T 96 6 T 128 6 T 160 6 T 192 6 T 224 6 T 256 6 T 288 6"
                          stroke="currentColor"
                          strokeWidth="3.5"
                          strokeLinecap="round"
                          fill="none"
                        />
                      </motion.g>
                    </svg>
                  </span>
                </span>
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={ctaInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.4, duration: 0.5 }}
                className="text-base md:text-lg text-white/50 font-body max-w-lg mt-6 leading-relaxed"
              >
                Partner with the studio that embeds intelligence from day one.
                Stop experimenting start scaling.
              </motion.p>
            </div>

            {/* Right column — Action zone */}
            <div className="lg:col-span-5 flex flex-col justify-center items-start lg:items-center p-6 sm:p-10 md:p-14 lg:p-16 lg:border-l border-white/[0.06]">
              {/* Primary CTA — large, unmissable */}
              <div className="w-full max-w-sm space-y-4 sm:space-y-5">
                <ArrowButton
                  href="/connect"
                  variant="primary"
                  size="lg"
                  className="w-full justify-between text-[14px] sm:text-base whitespace-nowrap"
                >
                  Book a Free Consultation
                </ArrowButton>

                {/* Secondary CTA */}
                <motion.a
                  href="mailto:hello@evrenai.com"
                  initial={{ opacity: 0, y: 20 }}
                  animate={ctaInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.6, duration: 0.5 }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="group flex items-center justify-between gap-3 sm:gap-4 w-full border border-white/[0.12] text-white/80 hover:text-white hover:border-white/25 font-heading font-semibold text-[13px] sm:text-base px-5 sm:px-8 py-3.5 sm:py-4 rounded-full cursor-pointer transition-all duration-300"
                >
                  <span className="flex items-center gap-2 sm:gap-3 whitespace-nowrap">
                    <Mail size={16} className="text-evren-peach/70 shrink-0" />
                    hello@evrenai.com
                  </span>
                  <ArrowUpRight
                    size={16}
                    className="text-white/40 group-hover:text-white/70 transition-colors shrink-0"
                  />
                </motion.a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* ─── Part B: Main Footer ─── */}
      <div className="bg-evren-warm-white border-t border-evren-navy/10 pt-16 sm:pt-24 pb-6 sm:pb-8 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-10 md:gap-8 mb-10 sm:mb-12">
            {/* Col 1 — Brand */}
            <div className="md:col-span-2">
              <h3 className="text-3xl md:text-4xl font-bold font-heading text-evren-navy mb-3">
                Evren AI
              </h3>
              <p className="text-evren-medium-gray font-body text-sm max-w-xs leading-relaxed">
                Where Ideas Become Intelligent Products.
              </p>
            </div>

            {/* Col 2 — Navigation */}
            <div>
              <h4 className="font-heading font-bold text-evren-navy mb-5 text-sm uppercase tracking-wider">
                Studio
              </h4>
              <nav className="flex flex-col gap-3">
                {NAV_LINKS.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    className="text-evren-charcoal/70 hover:text-evren-peach transition-colors text-sm font-body group flex items-center gap-1.5"
                  >
                    {link.label}
                    <ArrowUpRight
                      size={12}
                      className="opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200"
                    />
                  </a>
                ))}
              </nav>
            </div>

            {/* Col 3 — Offices */}
            <div>
              <h4 className="font-heading font-bold text-evren-navy mb-5 text-sm uppercase tracking-wider">
                Offices
              </h4>
              <div className="flex flex-col gap-4">
                {OFFICES.map((office) => (
                  <div key={office.city} className="flex items-start gap-2.5">
                    <div className="w-7 h-7 rounded-lg bg-evren-peach-light/50 flex items-center justify-center shrink-0 mt-0.5">
                      <office.icon
                        size={13}
                        className="text-evren-peach"
                      />
                    </div>
                    <span className="text-sm text-evren-charcoal font-body leading-snug">
                      {office.city}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Col 4 — Stay in the loop + Socials */}
            <div>
              <h4 className="font-heading font-bold text-evren-navy mb-5 text-sm uppercase tracking-wider">
                Stay in the loop
              </h4>
              <p className="text-sm text-evren-medium-gray font-body mb-4 leading-relaxed">
                Get insights on AI strategy and product innovation.
              </p>
              <a
                href="mailto:hello@evrenai.com"
                className="inline-flex items-center gap-2 text-sm font-heading font-semibold text-evren-navy hover:text-evren-peach transition-colors"
              >
                <Mail size={14} />
                hello@evrenai.com
              </a>

              {/* Social links */}
              <div className="flex items-center gap-3 mt-6">
                {SOCIALS.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="group w-9 h-9 rounded-lg bg-evren-light-gray/60 hover:bg-evren-peach-light/50 flex items-center justify-center transition-colors duration-200 text-evren-charcoal/70 hover:text-evren-peach"
                  >
                    <social.icon size={16} />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* ─── Bottom Bar: Copyright + Legal ─── */}
          <div className="h-px bg-evren-medium-gray/15 mb-4 sm:mb-6" />
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-xs text-evren-medium-gray/70 font-body">
              &copy; 2026 Evren AI. All rights reserved.
            </p>
            <div className="flex items-center gap-4 text-xs text-evren-medium-gray/70 font-body">
              <a
                href="#"
                className="hover:text-evren-charcoal transition-colors duration-200"
              >
                Privacy Policy
              </a>
              <span className="w-1 h-1 rounded-full bg-evren-medium-gray/30" />
              <a
                href="#"
                className="hover:text-evren-charcoal transition-colors duration-200"
              >
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

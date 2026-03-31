"use client";

import { motion, useInView } from "framer-motion";
import { ArrowUpRight, Linkedin, Twitter, MapPin, Mail, Sparkles, Zap } from "lucide-react";
import ArrowButton from "@/components/ui/ArrowButton";
import { useRef } from "react";
import { usePathname } from "next/navigation";

// ═══════════════════════════════════════════════════════════════════════
//  FOOTER — Unique CTA Banner + Editorial Footer
// ═══════════════════════════════════════════════════════════════════════

const NAV_LINKS = [
  { label: "About", href: "/about" },
  { label: "Approach", href: "/approach" },
  { label: "Work", href: "/work" },
  { label: "Thinking", href: "/thinking" },
  { label: "Business Transformation", href: "/business-transformation" },
  { label: "Careers", href: "/careers" },
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

export default function Footer({ hideCTA = false }: { hideCTA?: boolean }) {
  const ctaRef = useRef<HTMLDivElement>(null);
  const ctaInView = useInView(ctaRef, { once: true, margin: "-80px" });
  
  const pathname = usePathname();
  const isArticlePage = pathname?.startsWith('/thinking/') && pathname !== '/thinking';

  return (
    <footer>
      {/* ─── Part A: Immersive Asymmetric CTA ─── */}
      {!hideCTA && (
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


            {/* ── Massive Background Typography (Hygraph Style) ── */}
            <div className="absolute left-1/2 -translate-x-1/2 bottom-0 translate-y-[18%] md:translate-y-[15%] w-full text-center flex justify-center pointer-events-none z-0">
              <span className="font-heading font-extrabold text-[18vw] sm:text-[16vw] md:text-[15vw] lg:text-[16rem] xl:text-[19rem] leading-none tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white/[0.1] to-transparent select-none whitespace-nowrap">
                Evren AI
              </span>
            </div>
          </div>

          {/* ── CTA Content — Asymmetric Split ── */}
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-0 pb-24 sm:pb-28 md:pb-36 lg:pb-[14rem]">
            {/* Left column — Editorial headline */}
            <div className="lg:col-span-7 p-6 sm:p-10 md:p-14 lg:p-16 flex flex-col justify-center">
              {/* Pre-headline badge */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={ctaInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="inline-flex items-center gap-3.5 mb-8 self-start"
              >
                <div className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center shrink-0 transition-transform duration-300">
                  <Zap size={16} className="text-evren-peach" strokeWidth={2.5} />
                </div>
                <span className="text-[10px] sm:text-[11px] font-heading font-semibold text-evren-peach/90 uppercase tracking-[0.2em] leading-tight mt-0.5">
                  {isArticlePage ? "FROM PROTOTYPE TO PRODUCTION" : "Ready to build something extraordinary?"}
                </span>
              </motion.div>

              {/* Main headline — editorial staggered */}
              <motion.h2
                initial={{ opacity: 0 }}
                animate={ctaInView ? { opacity: 1 } : {}}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="font-heading font-bold text-white tracking-tight"
              >
                {!isArticlePage && (
                  <span className="block text-4xl md:text-5xl lg:text-[3.5rem] leading-[1.08]">
                    Have an idea?
                  </span>
                )}
                <span className="block text-4xl md:text-5xl lg:text-[3.5rem] leading-[1.08] mt-1">
                  {isArticlePage ? "Building" : "Let's"}{" "}
                  <span className="relative inline-block">
                    <span className="relative z-10">{isArticlePage ? "something?" : "talk."}</span>
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
                {isArticlePage 
                  ? "We would love to hear about it. Let's discuss how Evren AI can accelerate your journey from prototype to production."
                  : "Partner with the studio that embeds intelligence from day one. Stop experimenting start scaling."}
              </motion.p>
            </div>

            {/* Right column — Action zone */}
            <div className="lg:col-span-5 flex flex-col justify-center items-start lg:items-center p-5 sm:p-10 md:p-14 lg:p-16 lg:border-l border-white/[0.06] w-full max-w-full overflow-hidden">
              {/* Primary CTA — large, unmissable */}
              <div className="w-full max-w-[340px] sm:max-w-sm space-y-4 sm:space-y-5 mx-auto lg:mx-0">
                <ArrowButton
                  href="/connect"
                  variant="primary"
                  size="lg"
                  className="w-full justify-between text-[13px] sm:text-[15px] md:text-base pr-1"
                >
                  <span className="hidden sm:inline">Book a Free Consultation</span>
                  <span className="inline sm:hidden">Book Consultation</span>
                </ArrowButton>

                {/* Secondary CTA */}
                <motion.a
                  href="mailto:hello@evrenai.com"
                  initial={{ opacity: 0, y: 20 }}
                  animate={ctaInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.6, duration: 0.5 }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="group flex items-center justify-between gap-2 sm:gap-4 w-full border border-white/[0.12] text-white/80 hover:text-white hover:border-white/25 font-heading font-semibold text-[13px] sm:text-base px-5 sm:px-8 py-3.5 sm:py-4 rounded-full cursor-pointer transition-all duration-300"
                >
                  <span className="flex items-center gap-2 sm:gap-3 truncate pr-2">
                    <Mail size={16} className="text-evren-peach/70 shrink-0" />
                    <span className="truncate">hello@evrenai.com</span>
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
      )}

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

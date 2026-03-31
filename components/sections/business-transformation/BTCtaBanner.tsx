"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowUpRight, Mail, Zap } from "lucide-react";
import ArrowButton from "@/components/ui/ArrowButton";

// ═══════════════════════════════════════════════════════════════════════
//  COMPONENT
// ═══════════════════════════════════════════════════════════════════════

export default function BTCtaBanner() {
  const ctaRef = useRef<HTMLDivElement>(null);
  const ctaInView = useInView(ctaRef, { once: true, margin: "-80px" });

  return (
    <section
      id="bt-cta-banner"
      aria-label="Business Transformation CTA"
      className="py-16 lg:py-24"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
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

            {/* ── Massive Background Typography ── */}
            <div className="absolute left-1/2 -translate-x-1/2 bottom-0 translate-y-[18%] md:translate-y-[15%] w-full text-center flex justify-center pointer-events-none z-0">
              <span className="font-heading font-extrabold text-[12vw] sm:text-[10vw] md:text-[9vw] lg:text-[7.5rem] xl:text-[9.5rem] leading-none tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white/[0.1] to-transparent select-none whitespace-nowrap">
                Transformation
              </span>
            </div>
          </div>

          {/* ── CTA Content — Asymmetric Split ── */}
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-0 pb-16 sm:pb-20 md:pb-24 lg:pb-[10rem]">
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
                  BUSINESS TRANSFORMATION
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
                  Not Sure What to
                </span>
                <span className="block text-4xl md:text-5xl lg:text-[3.5rem] leading-[1.08] mt-1">
                  Build{" "}
                  <span className="relative inline-block">
                    <span className="relative z-10">Yet?</span>
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
                That&apos;s exactly where we can help. A single strategy conversion can save months of misdirected development. It costs you nothing to find out.
              </motion.p>
            </div>

            {/* Right column — Action zone */}
            <div className="lg:col-span-5 flex flex-col justify-center items-start lg:items-center p-5 sm:p-10 md:p-14 lg:p-16 lg:border-l border-white/[0.06] w-full max-w-full overflow-hidden">
              {/* Primary CTA — large, unmissable */}
              <div className="w-full max-w-[340px] sm:max-w-sm space-y-4 sm:space-y-5 mx-auto lg:mx-0">
                <ArrowButton
                  href="/connect"
                  id="bt-cta-banner-btn"
                  ariaLabel="Book a free strategy call"
                  variant="primary"
                  size="lg"
                  className="w-full justify-between text-[13px] sm:text-[15px] md:text-base pr-1"
                >
                  <span className="hidden sm:inline">Book a Free Strategy Call</span>
                  <span className="inline sm:hidden">Book Strategy Call</span>
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
    </section>
  );
}

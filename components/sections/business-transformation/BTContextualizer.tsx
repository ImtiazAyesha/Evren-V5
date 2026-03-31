"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

// ═══════════════════════════════════════════════════════════════════════
//  COMPONENT
// ═══════════════════════════════════════════════════════════════════════

export default function BTContextualizer() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section
      ref={sectionRef}
      id="bt-identity"
      aria-label="Our Identity"
      className="relative w-full overflow-hidden bg-evren-warm-white py-20 lg:py-32 px-5 sm:px-6"
    >
      {/* ── Background orbs ───────────────────────────────────────── */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        <div
          className="absolute -top-[10%] -left-[5%] w-[600px] h-[600px] rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(244, 168, 154, 0.12) 0%, transparent 60%)",
            filter: "blur(60px)",
          }}
        />
        <div
          className="absolute bottom-[0%] right-[0%] w-[500px] h-[500px] rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(27, 42, 74, 0.04) 0%, transparent 60%)",
            filter: "blur(60px)",
          }}
        />
      </div>

      <div className="relative z-10 max-w-[1280px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_400px] gap-12 lg:gap-24 items-center">
          
          {/* ── LEFT COLUMN: Narrative ───────────────────────────────── */}
          <div className="flex flex-col">
            {/* Eyebrow */}
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="block text-[12px] font-heading font-bold text-evren-peach uppercase tracking-[0.15em] mb-[20px]"
            >
              Our Identity
            </motion.span>

            {/* H2 */}
            <motion.h2
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-heading text-[36px] sm:text-[44px] lg:text-[56px] font-extrabold text-evren-navy leading-[1.1] tracking-tight mb-8"
            >
              We Are, First and Always, a{" "}
              <span className="relative inline-block">
                <span className="relative z-10">Digital Product</span>
                {/* Curly underline effect */}
                <svg
                  className="absolute -bottom-1 md:-bottom-2 left-0 w-full h-[10px] md:h-[14px] text-evren-peach pointer-events-none z-0"
                  viewBox="0 0 200 12"
                  preserveAspectRatio="none"
                  aria-hidden="true"
                >
                  <motion.g
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : {}}
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
              </span>{" "}
              Studio.
            </motion.h2>

            {/* Body paragraphs */}
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="font-body text-[17px] md:text-[19px] text-evren-charcoal/70 leading-[1.7] mb-6 max-w-[600px]"
            >
              But great products don&apos;t get built in a vacuum. Sometimes the
              challenge isn&apos;t just what to build it&apos;s how the
              business needs to evolve to support it. That&apos;s where
              transformation strategy comes in.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="font-body text-[17px] md:text-[19px] text-evren-charcoal/70 leading-[1.7] max-w-[600px]"
            >
              Before automating, digitizing, or scaling some organizations
              need to get clear on direction, remove structural blockers, and
              align around what actually needs to change. Evren AI&apos;s
              Business Transformation offering exists for those moments.
            </motion.p>
          </div>

          {/* ── RIGHT COLUMN: Video Contextualizer Card ───────────────── */}
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
            transition={{ type: "spring", stiffness: 80, damping: 20, delay: 0.3 }}
            className="w-full flex justify-center lg:justify-end"
          >
            <div className="relative w-full max-w-[440px] aspect-square overflow-hidden rounded-[32px] border border-white/20 shadow-[0_30px_60px_-15px_rgba(27,42,74,0.4)] transition-transform duration-500 hover:-translate-y-2 group">
              
              {/* Video Background */}
              <div className="absolute inset-0 w-full h-full pointer-events-none">
                <video
                  src="/Illustrations/Knowledge.mp4"
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
                />
                {/* Protective Overlays for clear text contrast */}
                <div className="absolute inset-0 bg-evren-navy/50 mix-blend-multiply" />
                <div className="absolute inset-0 bg-gradient-to-t from-evren-navy/95 via-evren-navy/50 to-transparent" />
              </div>

              {/* Foreground Content */}
              <div className="relative z-10 flex flex-col items-start justify-end text-left h-full p-[40px] sm:p-[48px]">
                {/* Decorative Icon */}
                <div className="w-14 h-14 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center mb-auto shadow-[0_8px_32px_rgba(0,0,0,0.2)]">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-white">
                    <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>

                {/* Number */}
                <div className="flex items-baseline gap-2 mb-2 mt-6">
                  <span className="font-heading font-extrabold text-[72px] text-white leading-none tracking-tight">
                    5%
                  </span>
                </div>

                {/* Sub-label */}
                <span className="block font-heading font-semibold text-[13px] text-evren-peach uppercase tracking-[0.1em] mb-[16px]">
                  Of our engagements
                </span>

                {/* Descriptor */}
                <p className="font-body text-[16px] text-white/80 leading-[1.7] max-w-[280px]">
                  Reserved for clients who need strategic clarity before they build.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

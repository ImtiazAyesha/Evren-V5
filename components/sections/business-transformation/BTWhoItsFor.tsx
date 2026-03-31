"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import ArrowButton from "@/components/ui/ArrowButton";

// ═══════════════════════════════════════════════════════════════════════
//  CHECKLIST DATA
// ═══════════════════════════════════════════════════════════════════════

const startHereItems = [
  "You know change is needed but not what to build",
  "Existing tools or processes are creating bottlenecks",
  "You need executive alignment before a development commitment",
  "A previous product failed to get adoption",
];

const skipAheadItems = [
  "You have a clear product vision defined",
  "You know your target users and core use case",
  "You're ready to commit to a development engagement",
  "You've been through discovery before",
];

// ═══════════════════════════════════════════════════════════════════════
//  COMPONENT
// ═══════════════════════════════════════════════════════════════════════

export default function BTWhoItsFor() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section
      ref={sectionRef}
      id="bt-who-its-for"
      aria-label="Who This Is For"
      className="bg-white py-20 lg:py-32 px-5 sm:px-6 relative"
    >
      <div className="max-w-[1024px] mx-auto">
        {/* ── Section Header ─────────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="block text-[12px] font-heading font-bold text-evren-peach uppercase tracking-[0.15em] mb-[16px]">
            Is This Where You Start?
          </span>

          <h2 className="font-heading text-[36px] md:text-[48px] lg:text-[52px] font-extrabold text-evren-navy leading-[1.1] tracking-tight max-w-[800px] mx-auto mb-6">
            Two Types of Client. <br className="hidden md:block" /> Two{" "}
            <span className="relative inline-block">
              <span className="relative z-10">Starting Points.</span>
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
            </span>
          </h2>

          <p className="font-body text-[16px] md:text-[18px] text-evren-charcoal/60 leading-[1.7] max-w-[600px] mx-auto">
            Not every client needs transformation strategy. Here&apos;s an
            honest guide to where you should start.
          </p>
        </motion.div>

        {/* ── Editorial Comparison Grid ───────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 rounded-[24px] border border-evren-light-gray overflow-hidden shadow-[0_20px_40px_rgba(27,42,74,0.04)] mb-14"
        >
          {/* LEFT: Start Here */}
          <div className="p-8 md:p-12 bg-white flex flex-col h-full border-b md:border-b-0 md:border-r border-evren-light-gray">
            <span className="text-[11px] font-heading font-bold uppercase text-evren-peach tracking-[0.2em] mb-6 block">
              Path 01 / Strategy First
            </span>
            <h3 className="text-[26px] lg:text-[32px] font-heading font-extrabold text-evren-navy leading-[1.2] mb-4 tracking-tight">
              You&apos;re at an Inflection Point
            </h3>
            <p className="font-body text-[15px] lg:text-[16px] text-evren-charcoal/70 leading-[1.7] mb-8 border-b border-evren-light-gray pb-8">
              You know your business needs to evolve digitally, but you&apos;re
              not yet certain what that evolution looks like. Priority is clarity and alignment before investment.
            </p>
            
            <ul className="flex flex-col gap-4 mt-auto mb-10">
              {startHereItems.map((item) => (
                <li key={item} className="flex items-start gap-4">
                  <div className="shrink-0 mt-2 w-1.5 h-1.5 rounded-full bg-evren-peach" />
                  <span className="font-body text-[15px] text-evren-charcoal/80 leading-[1.6]">
                    {item}
                  </span>
                </li>
              ))}
            </ul>

            <ArrowButton
              href="/connect"
              id="bt-who-cta-primary"
              ariaLabel="Book a free strategy call"
              variant="primary"
              size="lg"
              className="w-full sm:w-auto justify-between sm:justify-center text-[14px] sm:text-base whitespace-nowrap self-start"
            >
              Book a Free Strategy Call
            </ArrowButton>
          </div>

          {/* RIGHT: Skip Ahead */}
          <div className="p-8 md:p-12 bg-evren-warm-white flex flex-col h-full">
            <span className="text-[11px] font-heading font-bold uppercase text-evren-medium-gray tracking-[0.2em] mb-6 block">
              Path 02 / Direct to Build
            </span>
            <h3 className="text-[26px] lg:text-[32px] font-heading font-extrabold text-evren-navy leading-[1.2] mb-4 tracking-tight">
              You Already Know What to Build
            </h3>
            <p className="font-body text-[15px] lg:text-[16px] text-evren-charcoal/70 leading-[1.7] mb-8 border-b border-evren-light-gray pb-8">
              If you have a defined product vision, a clear problem to solve,
              and you&apos;re ready to start development. Our core digital
              product practice is where you begin.
            </p>

            <ul className="flex flex-col gap-4 mt-auto mb-10">
              {skipAheadItems.map((item) => (
                <li key={item} className="flex items-start gap-4">
                  <div className="shrink-0 mt-2 w-1.5 h-1.5 rounded-full bg-evren-medium-gray/40" />
                  <span className="font-body text-[15px] text-evren-charcoal/80 leading-[1.6]">
                    {item}
                  </span>
                </li>
              ))}
            </ul>

            <ArrowButton
              href="/approach"
              id="bt-who-cta-secondary"
              ariaLabel="See our approach"
              variant="outline"
              size="lg"
              className="w-full sm:w-auto justify-between sm:justify-center text-[14px] sm:text-base whitespace-nowrap self-start"
            >
              See Our Approach
            </ArrowButton>
          </div>
        </motion.div>

      </div>
    </section>
  );
}

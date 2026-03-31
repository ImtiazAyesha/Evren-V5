"use client";

import { useRef } from "react";
import { motion, useInView, type Variants } from "framer-motion";
import { Globe } from "lucide-react";

const SPRING = { type: "spring" as const, stiffness: 100, damping: 20 };

const staggerContainer: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.06 } },
};

const fadeSlideUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { ...SPRING, duration: 0.6 },
  },
};

// ─── OFFICE DATA ────────────────────────────────────────────────────
const offices = [
  {
    id: "us",
    label: "USA",
    pinLabel: "US",
    address: "4407 Enchanted Spring Court, Sugar Land, TX 77479, United States",
    icon: "/USA.svg",
    lat: 29.7604,
    lng: -95.3698,
  },
  {
    id: "uae",
    label: "UAE",
    pinLabel: "UAE",
    address: "The Meydan Hotel - Meydan Racecourse Al Meydan Road, Nad Al Sheba - Dubai - United Arab Emirates",
    icon: "/UAE.svg",
    lat: 25.2048,
    lng: 55.2708,
  },
];

// ═══════════════════════════════════════════════════════════════════════
//  GLOBAL PRESENCE — Containerized side-by-side layout
// ═══════════════════════════════════════════════════════════════════════

export default function GlobalPresenceSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 });

  return (
    <section
      ref={sectionRef}
      id="global-presence"
      className="relative w-full overflow-hidden py-10 lg:py-16 bg-evren-warm-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="bg-evren-navy rounded-[32px] relative overflow-hidden shadow-warm-hover p-8 sm:p-12 lg:p-16"
        >
          {/* ── Soft Background Glow (no grid) ── */}
          <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
            <div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] rounded-full"
              style={{
                background: "radial-gradient(ellipse, rgba(244, 168, 154, 0.08) 0%, transparent 70%)",
                filter: "blur(50px)",
              }}
            />
          </div>

          {/* Globe Icon in top right corner */}
          <div className="absolute -top-16 -right-16 md:-top-24 md:-right-24 text-evren-peach/[0.07] pointer-events-none z-0">
            <Globe className="w-64 h-64 md:w-96 md:h-96" strokeWidth={0.5} />
          </div>

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-[1fr_1.4fr] gap-10 lg:gap-16 items-stretch">
            {/* Left — Narrative */}
            <div>
              <motion.p
                variants={fadeSlideUp}
                className="text-sm uppercase tracking-widest text-evren-peach font-heading font-bold mb-8"
              >
                Global Presence
              </motion.p>

              <motion.h2
                variants={fadeSlideUp}
                className="font-heading font-extrabold text-white
                           text-3xl sm:text-4xl lg:text-[2.75rem]
                           leading-[1.1] -tracking-tight mb-6"
              >
                Built for global{" "}
                <span className="relative inline-block">
                  <span className="relative z-10">scale</span>
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
                .
                <br />
                Rooted in local trust.
              </motion.h2>

              <motion.p
                variants={fadeSlideUp}
                className="font-body text-white/45 text-sm md:text-base italic max-w-sm leading-relaxed"
                style={{ lineHeight: 1.7 }}
              >
                Two offices. Two continents. One team operating on a
                follow-the-sun model for seamless delivery.
              </motion.p>
            </div>

            {/* Right — Map Background & Exact Reference Layout */}
            <div className="flex flex-col w-full relative -mt-4 lg:mt-0 lg:min-h-full justify-center">

              {/* Offices / Locations List */}
              <div className="flex flex-col gap-10 sm:gap-14 w-full z-10 relative pt-10 lg:pt-0">
                {offices.map((office, idx) => (
                  <motion.div
                    variants={fadeSlideUp}
                    key={`office-${idx}`}
                    className="flex flex-row items-start gap-5 sm:gap-8"
                  >
                    {/* SVG Landmark Icon */}
                    <div className="w-12 h-20 sm:w-16 sm:h-24 shrink-0 relative flex items-center justify-center">
                      <img src={office.icon} alt={`${office.label} Icon`} className="w-full h-full object-contain" />
                    </div>

                    <div className="flex flex-col flex-1 min-w-0 pt-2">
                       <h3 className="text-xl sm:text-2xl font-bold font-heading text-white tracking-wide mb-3">
                         {office.label}
                       </h3>
                       <div className="flex flex-col gap-2 text-[13px] sm:text-[15px] font-body text-white">
                         <p className="leading-relaxed">
                           <span className="font-bold">Address</span> {office.address}
                         </p>
                       </div>
                    </div>
                  </motion.div>
                ))}
              </div>

            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

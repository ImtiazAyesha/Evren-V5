"use client";

import { useRef } from "react";
import { motion, useInView, type Variants } from "framer-motion";
import { MapPin } from "lucide-react";

// ═══════════════════════════════════════════════════════════════════════
//  MOTION VARIANTS
// ═══════════════════════════════════════════════════════════════════════

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
    id: "us-hq",
    label: "United States",
    sublabel: "Headquarters",
    address: "Houston, Texas",
    timezone: "CST (UTC-6)",
    flag: "🇺🇸",
  },
  {
    id: "dubai",
    label: "Dubai",
    sublabel: "MENA Office",
    address: "Business Bay, Dubai, UAE",
    timezone: "GST (UTC+4)",
    flag: "🇦🇪",
  },
];

// ═══════════════════════════════════════════════════════════════════════
//  GLOBAL PRESENCE — Compact side-by-side layout
// ═══════════════════════════════════════════════════════════════════════

export default function GlobalPresenceSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 });

  return (
    <section
      ref={sectionRef}
      id="global-presence"
      className="relative w-full overflow-hidden py-16 lg:py-24"
      style={{ background: "linear-gradient(180deg, #1B2A4A 0%, #142240 100%)" }}
    >
      {/* ── Soft glow ─────────────────────────────────────────────── */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] rounded-full"
          style={{
            background:
              "radial-gradient(ellipse, rgba(244, 168, 154, 0.06) 0%, transparent 70%)",
            filter: "blur(50px)",
          }}
        />
      </div>

      {/* ── Grid pattern ──────────────────────────────────────────── */}
      <div
        className="absolute inset-0 pointer-events-none z-0"
        style={{
          backgroundSize: "48px 48px",
          backgroundImage:
            "linear-gradient(to right, rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.04) 1px, transparent 1px)",
          maskImage:
            "radial-gradient(ellipse 80% 80% at 50% 50%, black 25%, transparent 80%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 80% 80% at 50% 50%, black 25%, transparent 80%)",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* ── Single row: Header left + Cards right ─────────────── */}
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.4fr] gap-10 lg:gap-16 items-center">
            {/* Left — Narrative */}
            <div>
              <motion.div
                variants={fadeSlideUp}
                className="inline-flex items-center gap-2.5 rounded-full
                           bg-white/[0.08] backdrop-blur-md border border-white/[0.12]
                           px-5 py-2 mb-5"
              >
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-evren-peach opacity-50" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-evren-peach" />
                </span>
                <span className="text-[11px] font-heading font-semibold text-white/80 tracking-wide uppercase">
                  Global Presence
                </span>
              </motion.div>

              <motion.h2
                variants={fadeSlideUp}
                className="font-heading font-extrabold text-white
                           text-3xl sm:text-4xl lg:text-[2.75rem]
                           leading-[1.1] -tracking-tight mb-4"
              >
                Built for global{" "}
                <span className="relative inline-block">
                  scale
                  <svg
                    className="absolute -bottom-1 left-0 w-full h-[8px]"
                    viewBox="0 0 120 12"
                    fill="none"
                    preserveAspectRatio="none"
                    aria-hidden="true"
                  >
                    <path
                      d="M0 6 Q 10 0, 20 6 T 40 6 T 60 6 T 80 6 T 100 6 T 120 6"
                      stroke="#F4A89A"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      fill="none"
                      opacity="0.6"
                    />
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
                Two offices. Two continents. One team — operating on a
                follow-the-sun model for seamless delivery.
              </motion.p>
            </div>

            {/* Right — Two compact office cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {offices.map((office) => (
                <motion.div
                  key={office.id}
                  variants={fadeSlideUp}
                  className="group relative rounded-2xl overflow-hidden
                             bg-white/[0.07] backdrop-blur-xl
                             border border-white/[0.12]
                             p-6
                             transition-all duration-500 ease-out
                             hover:bg-white/[0.10] hover:border-white/[0.20]
                             hover:-translate-y-0.5
                             hover:shadow-[0_20px_50px_-12px_rgba(244,168,154,0.12)]"
                >
                  {/* Gradient accent */}
                  <div
                    className="absolute top-0 left-0 right-0 h-[2px]
                               opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{
                      background:
                        "linear-gradient(90deg, transparent, rgba(244, 168, 154, 0.5), rgba(232, 150, 126, 0.3), transparent)",
                    }}
                  />

                  {/* Flag + badge */}
                  <div className="flex items-center justify-between mb-5">
                    <span
                      className="font-heading font-extrabold text-evren-peach text-2xl leading-none"
                    >
                      {office.flag}
                    </span>
                    <span
                      className="font-heading font-semibold text-evren-peach/90 text-[9px] uppercase tracking-widest
                                 bg-evren-peach/[0.10] backdrop-blur-sm border border-evren-peach/[0.15]
                                 rounded-full px-3 py-1"
                    >
                      {office.sublabel}
                    </span>
                  </div>

                  <h3 className="font-heading font-bold text-white text-lg mb-2 tracking-tight">
                    {office.label}
                  </h3>

                  <div className="flex items-center gap-1.5">
                    <MapPin size={13} className="text-white/35 shrink-0" />
                    <p className="font-body text-white/45 text-xs">
                      {office.address}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

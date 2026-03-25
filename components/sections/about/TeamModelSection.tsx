"use client";

import { useRef } from "react";
import { motion, useInView, type Variants } from "framer-motion";
import { Users, Zap, Globe } from "lucide-react";

// ═══════════════════════════════════════════════════════════════════════
//  MOTION VARIANTS
// ═══════════════════════════════════════════════════════════════════════

const SPRING = { type: "spring" as const, stiffness: 100, damping: 20 };

const staggerContainer: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.06 } },
};

const fadeSlideUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { ...SPRING, duration: 0.6 },
  },
};

const fadeSlideRight: Variants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { ...SPRING, duration: 0.6 },
  },
};

const cardPop: Variants = {
  hidden: { opacity: 0, y: 20, scale: 0.97 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { ...SPRING, duration: 0.65 },
  },
};

// ─── STATS ──────────────────────────────────────────────────────────
const stats = [
  {
    icon: Users,
    value: "50+",
    label: "Core Team Members",
    description: "Full-time specialists across engineering, design & strategy",
  },
  {
    icon: Zap,
    value: "100+",
    label: "Projects Delivered",
    description: "Enterprise-grade products shipped across 3 continents",
  },
  {
    icon: Globe,
    value: "2",
    label: "Global Offices",
    description: "Houston & Dubai — built for follow-the-sun delivery",
  },
];

// ═══════════════════════════════════════════════════════════════════════
//  TEAM MODEL — Split layout: narrative left, proof right
// ═══════════════════════════════════════════════════════════════════════

export default function TeamModelSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.15 });

  return (
    <section
      ref={sectionRef}
      id="team-model"
      className="relative w-full overflow-hidden bg-evren-warm-white py-24 lg:py-36"
    >
      {/* ── Background orbs ───────────────────────────────────────── */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        <div
          className="absolute -top-[12%] right-[5%] w-[500px] h-[500px] rounded-full mesh-blob"
          style={{
            background:
              "radial-gradient(circle, rgba(244, 168, 154, 0.14) 0%, rgba(244, 168, 154, 0.03) 50%, transparent 70%)",
            filter: "blur(45px)",
          }}
        />
        <div
          className="absolute -bottom-[10%] -left-[5%] w-[550px] h-[550px] rounded-full mesh-blob-2"
          style={{
            background:
              "radial-gradient(circle, rgba(212, 165, 116, 0.10) 0%, rgba(212, 165, 116, 0.02) 50%, transparent 70%)",
            filter: "blur(40px)",
          }}
        />
      </div>

      {/* ── Subtle grid ───────────────────────────────────────────── */}
      <div
        className="absolute inset-0 pointer-events-none z-0"
        style={{
          backgroundSize: "48px 48px",
          backgroundImage:
            "linear-gradient(to right, rgba(27, 42, 74, 0.02) 1px, transparent 1px), linear-gradient(to bottom, rgba(27, 42, 74, 0.02) 1px, transparent 1px)",
          maskImage:
            "radial-gradient(ellipse 60% 50% at 50% 50%, black 15%, transparent 75%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 60% 50% at 50% 50%, black 15%, transparent 75%)",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        {/* ═══════════════════════════════════════════════════════════
            SPLIT LAYOUT: Narrative (left)  ·  Stat cards (right)
        ═══════════════════════════════════════════════════════════ */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">

          {/* ── LEFT: Narrative column ─────────────────────────────── */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="lg:sticky lg:top-32"
          >
            {/* Badge */}
            <motion.div
              variants={fadeSlideRight}
              className="inline-flex items-center gap-2.5 rounded-full
                         bg-evren-peach-light/60 border border-evren-peach/20
                         px-5 py-2 mb-6"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-evren-rose opacity-50" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-evren-rose" />
              </span>
              <span className="text-[11px] font-heading font-semibold text-evren-navy tracking-wide uppercase">
                Our Team
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h2
              variants={fadeSlideRight}
              className="font-heading font-extrabold text-evren-navy
                         text-3xl sm:text-4xl lg:text-[2.75rem] xl:text-5xl
                         leading-[1.1] -tracking-tight mb-7"
            >
              The agility of a studio.
              <br />
              The capacity of an{" "}
              <span className="relative inline-block">
                agency
                <svg
                  className="absolute -bottom-1 md:-bottom-2 left-0 w-full h-[8px] md:h-[12px]"
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
            </motion.h2>

            {/* Body copy */}
            <motion.p
              variants={fadeSlideRight}
              className="font-body text-evren-charcoal/70 text-base md:text-lg leading-relaxed mb-5"
              style={{ lineHeight: 1.75 }}
            >
              Our team of engineers, designers, and strategists turn complex
              challenges into elegant, scalable solutions that grow alongside
              the businesses we serve.
            </motion.p>

            <motion.p
              variants={fadeSlideRight}
              className="font-body text-evren-charcoal/55 text-base md:text-[17px] leading-relaxed"
              style={{ lineHeight: 1.75 }}
            >
              Every person at Evren is a full-time specialist who has worked
              with the team long enough to think as one — no freelancers, no
              outsourcing, no compromises.
            </motion.p>

            {/* Decorative divider line */}
            <motion.div
              variants={fadeSlideRight}
              className="mt-8 w-16 h-[3px] rounded-full"
              style={{
                background:
                  "linear-gradient(90deg, rgba(244, 168, 154, 0.7), rgba(232, 150, 126, 0.3))",
              }}
            />
          </motion.div>

          {/* ── RIGHT: Stat cards column ───────────────────────────── */}
          <motion.div
            className="flex flex-col gap-5"
            variants={staggerContainer}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            {stats.map((stat) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={stat.label}
                  variants={cardPop}
                  className="group relative
                             bg-white/70 backdrop-blur-sm
                             border border-evren-peach/10
                             rounded-2xl p-7 lg:p-8
                             transition-all duration-500 ease-out
                             hover:shadow-[0_16px_48px_-12px_rgba(244,168,154,0.18)]
                             hover:border-evren-peach/25 hover:-translate-y-0.5"
                >
                  {/* Gradient accent line */}
                  <div
                    className="absolute top-0 left-0 right-0 h-[2px]
                               opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-t-2xl"
                    style={{
                      background:
                        "linear-gradient(90deg, transparent, rgba(244, 168, 154, 0.6), rgba(232, 150, 126, 0.4), transparent)",
                    }}
                  />

                  <div className="flex items-start gap-5">
                    {/* Icon */}
                    <div
                      className="shrink-0 w-14 h-14 rounded-2xl bg-evren-peach-light/50 
                                 flex items-center justify-center
                                 transition-colors duration-300 group-hover:bg-evren-peach-light"
                    >
                      <Icon size={24} className="text-evren-navy" />
                    </div>

                    {/* Text */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-baseline gap-3 mb-1.5">
                        <span className="font-heading font-extrabold text-evren-navy text-4xl lg:text-[2.75rem] -tracking-tight leading-none">
                          {stat.value}
                        </span>
                        <span
                          className="font-heading font-semibold text-evren-navy/70 text-sm uppercase"
                          style={{ letterSpacing: "0.08em" }}
                        >
                          {stat.label}
                        </span>
                      </div>
                      <p className="font-body text-evren-charcoal/50 text-sm leading-relaxed">
                        {stat.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>

      {/* ── Edge fades ────────────────────────────────────────────── */}
      <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-evren-warm-white to-transparent z-[5] pointer-events-none" />
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-evren-warm-white to-transparent z-[5] pointer-events-none" />
    </section>
  );
}

"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useInView, type Variants } from "framer-motion";
import { Users, Zap, Globe } from "lucide-react";

// ─── MOTION ─────────────────────────────────────────────────────────
const SPRING = { type: "spring" as const, stiffness: 100, damping: 20 };

const stagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.05 } },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { ...SPRING } },
};

// ─── STATS ──────────────────────────────────────────────────────────
const stats = [
  { icon: Users, value: "50+", label: "Core Team Members" },
  { icon: Zap, value: "100+", label: "Projects Delivered" },
  { icon: Globe, value: "3", label: "Global Offices" },
];

// ═══════════════════════════════════════════════════════════════════════
//  TEAM MODEL — 'The Proof of Scale'
// ═══════════════════════════════════════════════════════════════════════

export default function TeamModelSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  return (
    <section
      id="team-model"
      className="relative w-full bg-evren-warm-white py-24 lg:py-32 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          ref={sectionRef}
          variants={stagger}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* ── Header ────────────────────────────────────────────── */}
          <div className="text-center mb-14 lg:mb-18">
            <motion.div
              variants={fadeUp}
              className="inline-flex items-center gap-2 rounded-full bg-evren-peach-light px-4 py-2 mb-5"
            >
              <span className="text-[12px] font-heading font-semibold text-evren-navy tracking-widest uppercase">
                Our Team
              </span>
            </motion.div>

            <motion.h2
              variants={fadeUp}
              className="font-heading font-extrabold text-evren-navy text-3xl sm:text-4xl lg:text-5xl leading-[1.1] -tracking-tight mb-5"
            >
              A core team of 50+ experts.
              <br className="hidden md:block" />{" "}
              The agility of a studio.{" "}
              <br className="hidden md:block" />
              The capacity of an agency.
            </motion.h2>

            <motion.p
              variants={fadeUp}
              className="font-body text-evren-medium-gray text-lg max-w-xl mx-auto leading-relaxed"
            >
              Every person at Evren is a full-time specialist—engineers, designers,
              strategists, and project managers who have worked together long enough
              to think as one.
            </motion.p>
          </div>

          {/* ── Team photo ────────────────────────────────────────── */}
          <motion.div
            variants={fadeUp}
            className="relative rounded-studio overflow-hidden mb-14 lg:mb-18"
          >
            <div className="relative w-full aspect-[16/7] md:aspect-[16/6]">
              <Image
                src="/images/about/team-group.png"
                alt="The Evren AI core team of 50+ specialists working together"
                fill
                sizes="(max-width: 768px) 100vw, 1280px"
                className="object-cover"
                placeholder="blur"
                blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8/5+hHgAHggJ/PchI7wAAAABJRU5ErkJggg=="
                quality={90}
              />

              {/* Warm color-grade overlay */}
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background:
                    "linear-gradient(180deg, rgba(27, 42, 74, 0.03) 0%, rgba(244, 168, 154, 0.06) 100%)",
                }}
              />
            </div>
          </motion.div>

          {/* ── Stat pills ────────────────────────────────────────── */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 lg:gap-8">
            {stats.map((stat, i) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={stat.label}
                  variants={fadeUp}
                  className="flex items-center gap-5 bg-evren-warm-gray rounded-studio-sm p-6
                             transition-all duration-300 hover:shadow-warm"
                >
                  <div className="shrink-0 w-12 h-12 rounded-xl bg-evren-peach-light flex items-center justify-center">
                    <Icon size={22} className="text-evren-navy" />
                  </div>
                  <div>
                    <p className="font-heading font-extrabold text-evren-navy text-3xl -tracking-tight">
                      {stat.value}
                    </p>
                    <p className="font-body text-evren-medium-gray text-sm">
                      {stat.label}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useInView, type Variants } from "framer-motion";

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

// ─── MAP PIN SVG — Custom navy line-art ─────────────────────────────
function MapPin({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 32 40"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M16 2C9.373 2 4 7.373 4 14c0 8 12 24 12 24s12-16 12-24c0-6.627-5.373-12-12-12Z"
        stroke="#1B2A4A"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      <circle
        cx="16"
        cy="14"
        r="4.5"
        stroke="#1B2A4A"
        strokeWidth="1.5"
        fill="none"
      />
    </svg>
  );
}

// ─── OFFICE DATA ────────────────────────────────────────────────────
const offices = [
  {
    id: "us-hq",
    label: "United States",
    sublabel: "Headquarters",
    address: "Houston, Texas",
    imageSrc: "/images/about/office-us.png",
  },
  {
    id: "dubai",
    label: "Dubai",
    sublabel: "MENA Office",
    address: "Business Bay, Dubai, UAE",
    imageSrc: "/images/about/office-dubai.png",
  },
];

// ═══════════════════════════════════════════════════════════════════════
//  GLOBAL PRESENCE — Side-by-side office cards with map pin overlays
// ═══════════════════════════════════════════════════════════════════════

export default function GlobalPresenceSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  return (
    <section
      id="global-presence"
      className="relative w-full bg-evren-warm-gray py-24 lg:py-32 overflow-hidden"
    >
      {/* Warm radial accent */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[400px] pointer-events-none z-0"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(244, 168, 154, 0.06) 0%, transparent 70%)",
          filter: "blur(60px)",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
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
              className="inline-flex items-center gap-2 rounded-full bg-white/70 backdrop-blur-sm px-4 py-2 mb-5"
            >
              <span className="text-[12px] font-heading font-semibold text-evren-navy tracking-widest uppercase">
                Global Presence
              </span>
            </motion.div>

            <motion.h2
              variants={fadeUp}
              className="font-heading font-extrabold text-evren-navy text-3xl sm:text-4xl lg:text-5xl leading-[1.1] -tracking-tight mb-5"
            >
              Built for global scale.
              <br className="hidden md:block" /> Rooted in local trust.
            </motion.h2>

            <motion.p
              variants={fadeUp}
              className="font-body text-evren-medium-gray text-base italic max-w-md mx-auto"
            >
              Two offices. Two continents. One team.
            </motion.p>
          </div>

          {/* ── Office cards grid ─────────────────────────────────── */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
            {offices.map((office, i) => (
              <motion.div
                key={office.id}
                variants={fadeUp}
                className="group relative bg-white rounded-studio overflow-hidden
                           shadow-warm transition-all duration-300 hover:shadow-warm-hover hover:scale-[1.01]"
              >
                {/* Image */}
                <div className="relative w-full aspect-[16/10] overflow-hidden">
                  <Image
                    src={office.imageSrc}
                    alt={`Evren AI ${office.label} office — ${office.address}`}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                    placeholder="blur"
                    blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8/5+hHgAHggJ/PchI7wAAAABJRU5ErkJggg=="
                    quality={85}
                  />

                  {/* Warm color-grade overlay */}
                  <div
                    className="absolute inset-0 pointer-events-none"
                    style={{
                      background:
                        "linear-gradient(180deg, rgba(27, 42, 74, 0.02) 0%, rgba(244, 168, 154, 0.08) 80%, rgba(27, 42, 74, 0.15) 100%)",
                    }}
                  />

                  {/* Map pin overlay */}
                  <div className="absolute top-5 right-5 z-10 flex items-center gap-2 bg-white/85 backdrop-blur-sm rounded-full px-3.5 py-2">
                    <MapPin className="w-5 h-6" />
                    <span className="font-heading font-semibold text-evren-navy text-xs tracking-wide">
                      {office.sublabel}
                    </span>
                  </div>
                </div>

                {/* Info */}
                <div className="p-6 lg:p-7">
                  <h3 className="font-heading font-bold text-evren-navy text-xl lg:text-2xl mb-1">
                    {office.label}
                  </h3>
                  <p className="font-body text-evren-medium-gray text-sm">
                    {office.address}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

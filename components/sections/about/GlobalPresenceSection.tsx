"use client";

import { useRef, useMemo } from "react";
import { motion, useInView, type Variants } from "framer-motion";
import { MapPin } from "lucide-react";
import { createMap } from "svg-dotted-map";

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
    lat: 29.7604,
    lng: -95.3698,
  },
  {
    id: "dubai",
    label: "Dubai",
    sublabel: "MENA Office",
    address: "Business Bay, Dubai, UAE",
    timezone: "GST (UTC+4)",
    flag: "🇦🇪",
    lat: 25.2048,
    lng: 55.2708,
  },
];

// ─── MAP INITIALIZATION (Outside component to avoid re-running) ─────
const MAP_WIDTH = 1000;
const MAP_HEIGHT = 500;

const mapData = createMap({
  width: MAP_WIDTH,
  height: MAP_HEIGHT,
  radius: 1.2,
  mapSamples: 12000,
});

const officeMarkers = mapData.addMarkers(offices);

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

            {/* Right — Map */}
            <div className="flex flex-col w-full relative -mt-4 lg:mt-0 lg:min-h-full">
              <motion.div
                variants={fadeSlideUp}
                className="relative w-full lg:absolute lg:w-auto left-0 lg:-top-16 lg:-bottom-16 lg:-right-16 lg:-left-8 h-[250px] lg:h-auto flex lg:items-center lg:justify-end pointer-events-none"
              >
                <svg
                  viewBox={`0 0 ${MAP_WIDTH} ${MAP_HEIGHT}`}
                  preserveAspectRatio="xMidYMid slice"
                  className="absolute left-1/2 top-1/2 -translate-y-[55%] sm:-translate-y-1/2 -translate-x-[38%] md:-translate-x-1/2 lg:relative lg:translate-x-0 lg:translate-y-0 lg:left-0 lg:top-0 w-[160%] sm:w-[130%] lg:w-full h-auto lg:h-full max-w-none z-10 opacity-90 transition-all duration-500 ease-in-out"
                >
                  {/* Base map points */}
                  {mapData.points.map((pt, i) => (
                    <circle
                      key={`pt-${i}`}
                      cx={pt.x}
                      cy={pt.y}
                      r={1.2}
                      fill="#ffffff"
                      opacity={0.15}
                    />
                  ))}

                  {/* Office Markers */}
                  {officeMarkers.map((marker, i) => {
                    const labelText = offices[i].label;
                    const pillWidth = labelText.length * 8.5 + 24; // Dynamic width based on text
                    const pillX = -(pillWidth / 2);

                    return (
                      <g key={`marker-${i}`}>
                        {/* Ground dot */}
                        <circle
                          cx={marker.x}
                          cy={marker.y}
                          r={3}
                          fill="#F4A89A"
                          opacity={0.8}
                        />

                        {/* Prominent Map Pin */}
                        <g
                          transform={`translate(${marker.x - 18}, ${marker.y - 36})`}
                          style={{ filter: "drop-shadow(0px 8px 12px rgba(0,0,0,0.4))" }}
                        >
                          <svg
                            width="36"
                            height="36"
                            viewBox="0 0 24 24"
                            fill="#F4A89A"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                          </svg>
                        </g>

                        {/* Floating pill label */}
                        <g transform={`translate(${marker.x}, ${marker.y - 54})`}>
                          <rect
                            x={pillX}
                            y="-13"
                            width={pillWidth}
                            height="26"
                            rx="13"
                            fill="#142240"
                            stroke="rgba(244,168,154,0.4)"
                            strokeWidth="1.5"
                            style={{ filter: "drop-shadow(0 4px 6px rgba(0,0,0,0.5))" }}
                          />
                          <text
                            fill="#ffffff"
                            fontSize="11"
                            fontWeight="bold"
                            textAnchor="middle"
                            alignmentBaseline="middle"
                            className="font-heading tracking-widest uppercase"
                          >
                            {labelText}
                          </text>
                        </g>
                      </g>
                    );
                  })}
                </svg>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

"use client";

import { useRef, useMemo } from "react";
import { motion, useInView, type Variants } from "framer-motion";
import { MapPin } from "lucide-react";
import { createMap } from "svg-dotted-map";

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
    label: "US",
    address: "4407 Enchanted Spring Court, Sugar Land, TX 77479, United States",
    timezone: "CST (UTC-6)",
    flag: "🇺🇸",
    lat: 29.7604,
    lng: -95.3698,
  },
  {
    id: "dubai",
    label: "UAE",
    address: "The Meydan Hotel - Meydan Racecourse Al Meydan Road, Nad Al Sheba - Dubai - United Arab Emirates",
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

              {/* MOBILE ONLY FALLBACK - Replacing Map with List */}
              <div className="flex lg:hidden flex-col gap-6 mt-8 w-full z-20 relative px-2">
                {offices.map((office, idx) => (
                  <motion.div
                    variants={fadeSlideUp}
                    key={`mobile-office-${idx}`}
                    className="flex flex-row items-center gap-4 sm:gap-6 bg-evren-navy-light/10 border border-evren-navy-light/20 p-4 sm:p-5 rounded-3xl"
                  >
                    {/* Compact Icon */}
                    <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-evren-peach/5 border border-evren-peach/20 flex items-center justify-center shrink-0">
                      <MapPin size={24} className="text-evren-peach" strokeWidth={1.5} />
                    </div>

                    <div className="flex flex-col gap-1 flex-1 min-w-0">
                      <h3 className="text-base sm:text-lg font-bold font-heading text-white tracking-wider uppercase leading-tight break-words">
                        {office.label}
                      </h3>
                      <div className="flex flex-col gap-1 text-[13px] font-body text-white/80 mt-0.5">
                        <p className="leading-[1.55] break-words">{office.address}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* DESKTOP SVG MAP (hidden on mobile) */}
              <motion.div
                variants={fadeSlideUp}
                className="hidden lg:flex relative w-full lg:absolute lg:w-auto left-0 lg:-top-16 lg:-bottom-16 lg:-right-16 lg:-left-8 h-[250px] lg:h-auto items-center lg:justify-end pointer-events-none"
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
                      <g key={`marker-${i}`} className="group cursor-pointer transform-gpu pointer-events-auto">
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
                          className="transition-transform duration-300 ease-out group-hover:-translate-y-2"
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
                        <g
                          transform={`translate(${marker.x}, ${marker.y - 54})`}
                          className="transition-transform duration-300 ease-out group-hover:-translate-y-2 group-hover:scale-[1.05]"
                        >
                          <rect
                            x={pillX}
                            y="-13"
                            width={pillWidth}
                            height="26"
                            rx="13"
                            fill="#142240"
                            stroke="rgba(244,168,154,0.4)"
                            strokeWidth="1.5"
                            className="transition-colors duration-300 group-hover:fill-evren-peach"
                            style={{ filter: "drop-shadow(0 4px 6px rgba(0,0,0,0.5))" }}
                          />
                          <text
                            fill="#ffffff"
                            fontSize="11"
                            fontWeight="bold"
                            textAnchor="middle"
                            alignmentBaseline="middle"
                            className="font-heading tracking-widest uppercase transition-colors duration-300 group-hover:fill-evren-navy"
                          >
                            {labelText}
                          </text>
                        </g>

                        {/* Rich Hover Info Box */}
                        <foreignObject
                          x={marker.x - 125}
                          y={marker.y + 16}
                          width="250"
                          height="180"
                          className="opacity-0 group-hover:opacity-100 transition-all duration-300 ease-out pointer-events-none translate-y-4 group-hover:translate-y-0"
                          style={{ overflow: "visible" }}
                        >
                          <div className="flex flex-col bg-white rounded-2xl shadow-[0_24px_60px_rgba(20,34,64,0.3)] p-5 border border-evren-peach/40 w-full relative">
                            {/* Triangle pointer */}
                            <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-0 h-0 border-l-[12px] border-r-[12px] border-b-[14px] border-transparent border-b-evren-peach/40">
                              <div className="absolute top-[2px] -left-[10px] w-0 h-0 border-l-[10px] border-r-[10px] border-b-[12px] border-transparent border-b-white" />
                            </div>

                            <div className="flex items-center justify-between mb-3 border-b border-evren-light-gray pb-3">
                              <h4 className="font-heading font-extrabold text-evren-navy text-[15px] leading-tight pr-2">
                                {offices[i].label}
                              </h4>
                            </div>

                            <div className="space-y-3 font-body text-[13px] text-evren-charcoal/80">
                              <p className="flex items-start gap-2.5 leading-[1.6]">
                                <MapPin size={16} className="mt-0.5 text-evren-peach flex-shrink-0" />
                                <span>{offices[i].address}</span>
                              </p>
                              <p className="flex items-center justify-between gap-2 text-evren-medium-gray pt-2.5 border-t border-evren-light-gray/50">
                                <span className="font-bold text-[11px] uppercase tracking-wider text-evren-navy/50">Timezone</span>
                                <span className="text-evren-peach font-mono font-bold text-xs">{offices[i].timezone}</span>
                              </p>
                            </div>
                          </div>
                        </foreignObject>
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

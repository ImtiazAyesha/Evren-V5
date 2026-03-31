"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

// ═══════════════════════════════════════════════════════════════════════
//  PROCESS DIAGRAM NODES
// ═══════════════════════════════════════════════════════════════════════

const NODES = [
  {
    num: "01",
    label: "Discover",
    sub: "Extended by transformation work",
    classes: "bg-evren-navy text-white z-30 shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-transparent",
    subClasses: "text-white/60",
    r: -15,
    iconSvg: (
      <svg className="w-5 h-5 lg:w-6 lg:h-6 opacity-50" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35M19 11a8 8 0 11-16 0 8 8 0 0116 0z" />
      </svg>
    )
  },
  {
    num: "02",
    label: "Build",
    sub: "Iterative engineering & deployment",
    classes: "bg-evren-peach text-evren-navy z-20 shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-transparent",
    subClasses: "text-evren-navy/70",
    r: 0,
    iconSvg: (
      <svg className="w-5 h-5 lg:w-6 lg:h-6 opacity-50" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    )
  },
  {
    num: "03",
    label: "Scale",
    sub: "Sustainable growth & optimization",
    classes: "bg-white text-evren-navy z-10 shadow-[0_8px_30px_rgb(0,0,0,0.08)] border border-evren-light-gray",
    subClasses: "text-evren-medium-gray",
    r: 15,
    iconSvg: (
      <svg className="w-5 h-5 lg:w-6 lg:h-6 opacity-50" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    )
  },
];

// ═══════════════════════════════════════════════════════════════════════
//  COMPONENT
// ═══════════════════════════════════════════════════════════════════════

export default function BTBridge() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section
      ref={sectionRef}
      id="bt-bridge"
      aria-label="How Transformation Connects to Product Development"
      className="bg-evren-warm-white py-16 lg:py-24 px-5 sm:px-6 relative"
    >
      <div className="max-w-[1280px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-[55%_45%] gap-12 lg:gap-16 items-center">
          {/* ── LEFT COLUMN ───────────────────────────────────────────── */}
          <div className="flex flex-col">
            {/* Eyebrow */}
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="block text-[12px] font-heading font-semibold text-evren-rose uppercase tracking-[0.1em] mb-[16px]"
            >
              How It Connects
            </motion.span>

            {/* H2 */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="font-heading text-[32px] md:text-[40px] lg:text-[48px] font-semibold text-evren-navy leading-[1.2] tracking-tight mb-6 max-w-[600px]"
            >
              Transformation Is the On-Ramp. Building Is Always the{" "}
              <span className="relative inline-block">
                <span className="relative z-10">Road.</span>
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
            </motion.h2>

            {/* Body */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="font-body text-[16px] md:text-[18px] text-evren-medium-gray leading-[1.7] max-w-[540px]"
            >
              Business Transformation at Evren AI isn&apos;t consulting for its
              own sake. Every strategy session, roadmap, and process
              review feeds directly into the product we build together making your eventual product smarter and more aligned from day one.
            </motion.p>
          </div>

          {/* ── RIGHT COLUMN — Card Spectrum Diagram ────────────────────────── */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-full flex flex-col items-center justify-center mt-12 lg:-mt-4 relative z-20"
          >
            <a
              href="/approach"
              className="relative flex justify-center items-center group w-full h-[260px] sm:h-[300px] lg:h-[350px] cursor-pointer perspective-[1000px]"
              aria-label="Learn about our approach"
            >
              {NODES.map((node, i) => (
                <div
                  key={i}
                  className={`absolute flex-shrink-0 w-[140px] h-[180px] sm:w-[150px] sm:h-[190px] lg:w-[170px] lg:h-[230px] rounded-[16px] lg:rounded-[20px] p-5 lg:p-6 flex flex-col justify-start transition-all duration-500 ease-out origin-bottom
                  rotate-[calc(var(--r)*1deg)]
                  group-hover:rotate-0
                  ${
                    i === 0 ? "group-hover:-translate-x-[105%] sm:group-hover:-translate-x-[110%] lg:group-hover:-translate-x-[115%]" :
                    i === 1 ? "group-hover:translate-x-0" :
                    "group-hover:translate-x-[105%] sm:group-hover:translate-x-[110%] lg:group-hover:translate-x-[115%]"
                  }
                  group-hover:-translate-y-4
                  hover:!translate-y-[-24px] hover:!z-50 hover:shadow-2xl
                  ${node.classes}`}
                  style={{ "--r": `${node.r}` } as React.CSSProperties}
                >
                  <span className="block font-heading font-bold text-[16px] sm:text-[18px] lg:text-[20px] tracking-tight leading-[1.2]">
                    <span className="opacity-50 mr-1.5 lg:mr-2 font-medium text-[13px] sm:text-[14px] lg:text-[15px]">{node.num}</span>
                    {node.label}
                  </span>
                  {node.sub && (
                    <span className={`block font-body text-[12px] sm:text-[13px] lg:text-[14px] mt-2 lg:mt-3 leading-relaxed ${node.subClasses}`}>
                      {node.sub}
                    </span>
                  )}
                  {/* Dynamic Icon decoration to keep it looking interactive */}
                  <div className="absolute bottom-5 right-5 transition-transform duration-300 group-hover:scale-110">
                    {node.iconSvg}
                  </div>
                </div>
              ))}
            </a>
            {/* Footnote */}
            <p className="font-body mt-8 lg:mt-6 text-center text-[13px] text-evren-medium-gray leading-[1.6]">
              Transformation feeds Discover, the richest Discover phase <br className="hidden lg:block" /> produces the best products.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

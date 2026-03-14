"use client";

import { motion } from "framer-motion";

// ═══════════════════════════════════════════════════════════════════════
//  LOGO DATA — Placeholder enterprise logos rendered as text marks
// ═══════════════════════════════════════════════════════════════════════

const LOGOS = [
  { name: "Salesforce", abbr: "SF" },
  { name: "Apex Construction", abbr: "AC" },
  { name: "VerifiedX", abbr: "VX" },
  { name: "Meridian Health", abbr: "MH" },
  { name: "NovaTech", abbr: "NT" },
  { name: "Strata Legal", abbr: "SL" },
];

// Duration for one full scroll cycle
const MARQUEE_DURATION = 30;

// ═══════════════════════════════════════════════════════════════════════
//  LOGO MARK — A minimal, typographic placeholder logo
// ═══════════════════════════════════════════════════════════════════════

function LogoMark({ name }: { name: string; abbr: string }) {
  return (
    <div className="min-w-max px-8 group cursor-default select-none">
      <span className="text-[17px] sm:text-[19px] font-bold text-slate-500 tracking-tight opacity-60 group-hover:opacity-100 transition-all duration-500" style={{ fontFamily: "'Georgia', 'Times New Roman', serif" }}>
        {name}
      </span>
    </div>
  );
}

// ═══════════════════════════════════════════════════════════════════════
//  ENTERPRISE TRUST BAR
// ═══════════════════════════════════════════════════════════════════════

export default function EnterpriseTrustBar() {
  return (
    <section
      id="trust-bar"
      className="relative w-full py-8 border-y border-gray-100 bg-white overflow-hidden"
    >
      {/* Label */}
      <div className="text-center mb-6">
        <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-400 font-inter">
          Trusted by Industry Leaders
        </span>
      </div>

      {/* Marquee container with edge masks */}
      <div
        className="relative w-full"
        style={{
          maskImage:
            "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
          WebkitMaskImage:
            "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
        }}
      >
        {/* Scrolling track — two identical sets for seamless loop */}
        <motion.div
          className="flex w-max"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            x: {
              duration: MARQUEE_DURATION,
              ease: "linear",
              repeat: Infinity,
              repeatType: "loop",
            },
          }}
        >
          {/* Set 1 */}
          <div className="flex items-center">
            {LOGOS.map((logo, i) => (
              <LogoMark key={`s1-${i}`} {...logo} />
            ))}
          </div>
          {/* Set 2 (clone for seamless loop) */}
          <div className="flex items-center" aria-hidden="true">
            {LOGOS.map((logo, i) => (
              <LogoMark key={`s2-${i}`} {...logo} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

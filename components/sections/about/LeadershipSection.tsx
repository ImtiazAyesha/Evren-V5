"use client";

import { useRef } from "react";
import { motion, useInView, type Variants } from "framer-motion";
import FounderCard from "./FounderCard";

// ─── MOTION ─────────────────────────────────────────────────────────
const SPRING = { type: "spring" as const, stiffness: 100, damping: 20 };

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { ...SPRING } },
};

// ─── FOUNDER DATA ───────────────────────────────────────────────────
const founders = [
  {
    name: "Moazzam Arif",
    role: "Chief Executive Officer",
    bio: "A visionary operator who architects growth at the intersection of AI innovation and enterprise scale. Moazzam leads Evren's global strategy, ensuring every engagement delivers measurable transformation.",
    imageSrc: "/images/about/founder-moazzam.png",
    linkedInUrl: "https://www.linkedin.com/in/moazzam-arif",
  },
  {
    name: "Hassan Ali",
    role: "Chief Technology Officer",
    bio: "The engineering mind behind Evren's technical backbone. Hassan oversees product architecture, AI pipelines, and the systems that power our clients' most complex transformations.",
    imageSrc: "/images/about/founder-hassan.png",
    linkedInUrl: "https://www.linkedin.com/in/hassan-ali",
  },
  {
    name: "Sakib Ahmed",
    role: "Chief Design Officer",
    bio: "Sakib ensures that every pixel we ship serves a purpose. From design systems to user flows, he champions the belief that great design is the ultimate competitive advantage.",
    imageSrc: "/images/about/founder-sakib.png",
    linkedInUrl: "https://www.linkedin.com/in/sakib-ahmed",
  },
];

// ═══════════════════════════════════════════════════════════════════════
//  LEADERSHIP — 3-column founder card grid
// ═══════════════════════════════════════════════════════════════════════

export default function LeadershipSection() {
  const headRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(headRef, { once: true, amount: 0.4 });

  return (
    <section
      id="leadership"
      className="relative w-full bg-evren-warm-white py-24 lg:py-32"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* ── Section header ──────────────────────────────────────── */}
        <motion.div
          ref={headRef}
          className="text-center mb-16 lg:mb-20"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.1 } },
          }}
        >
          <motion.div
            variants={fadeUp}
            className="inline-flex items-center gap-2 rounded-full bg-evren-peach-light px-4 py-2 mb-5"
          >
            <span className="text-[12px] font-heading font-semibold text-evren-navy tracking-widest uppercase">
              Leadership
            </span>
          </motion.div>

          <motion.h2
            variants={fadeUp}
            className="font-heading font-extrabold text-evren-navy text-3xl sm:text-4xl lg:text-5xl leading-[1.1] -tracking-tight mb-5"
          >
            The minds behind the mission.
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="font-body text-evren-medium-gray text-lg max-w-xl mx-auto leading-relaxed"
          >
            Three founders. One shared obsession: building technology that
            genuinely serves the humans who use it.
          </motion.p>
        </motion.div>

        {/* ── 3-column founder grid ───────────────────────────────── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
          {founders.map((founder, i) => (
            <FounderCard
              key={founder.name}
              {...founder}
              delay={i * 0.12}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

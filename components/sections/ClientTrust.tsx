"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Star, Quote } from "lucide-react";

// ─── LOGO DATA ──────────────────────────────────────────────────────
const LOGOS = [
  "Apex Construction",
  "NovaCare Health",
  "Meridian Logistics",
  "Summit Financial",
  "Ironclad Security",
  "Pinnacle Retail",
  "Vanguard Energy",
  "Atlas Manufacturing",
];

// ─── TESTIMONIAL DATA ───────────────────────────────────────────────
const TESTIMONIALS = [
  {
    quote:
      "Evren AI didn't just rebuild our software; they re-engineered how our hospital operates. Their predictive capabilities changed how we allocate nursing staff. It's not just a dashboard, it's a lifeline.",
    name: "Dr. Sarah Jenkins",
    title: "Chief Medical Information Officer, Global Health Systems",
    initials: "SJ",
  },
  {
    quote:
      "Most agencies bolted AI onto our systems as an afterthought. Evren built it into the foundation from day one. They reduced our data reconciliation time from 5 days to 2 hours.",
    name: "David Chen",
    title: "VP of Engineering, Meridian Logistics",
    initials: "DC",
  },
];

// ─── ANIMATION VARIANTS ─────────────────────────────────────────────
const sectionFade = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.15, ease: [0.25, 0.46, 0.45, 0.94] as const },
  }),
};

// ─── COMPONENT ──────────────────────────────────────────────────────
export default function ClientTrust() {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { amount: 0.15, once: true });
  const cardsInView = useInView(cardsRef, { amount: 0.2, once: true });

  // Duplicate logos for seamless loop
  const duplicatedLogos = [...LOGOS, ...LOGOS];

  return (
    <section
      ref={sectionRef}
      id="client-trust"
      className="relative bg-evren-warm-white py-28 md:py-36 overflow-hidden"
    >
      {/* ═══════════════════════════════════════════════════════════════
          PART A: INFINITE LOGO MARQUEE
      ═══════════════════════════════════════════════════════════════ */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        {/* Tagline */}
        <p className="text-center text-sm uppercase tracking-widest text-evren-medium-gray font-bold mb-8">
          Trusted by visionary teams scaling intelligent operations
        </p>

        {/* Marquee Wrapper */}
        <div className="relative overflow-hidden flex w-full">
          {/* Left fade gradient */}
          <div className="w-32 absolute inset-y-0 left-0 z-10 bg-gradient-to-r from-evren-warm-white to-transparent pointer-events-none" />
          {/* Right fade gradient */}
          <div className="w-32 absolute inset-y-0 right-0 z-10 bg-gradient-to-l from-evren-warm-white to-transparent pointer-events-none" />

          {/* Animated logo row */}
          <motion.div
            className="flex items-center"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              x: {
                duration: 20,
                ease: "linear",
                repeat: Infinity,
              },
            }}
          >
            {duplicatedLogos.map((logo, i) => (
              <span
                key={`${logo}-${i}`}
                className="text-2xl font-bold font-heading text-evren-navy/30 hover:text-evren-navy transition-colors duration-300 mx-12 whitespace-nowrap select-none cursor-default"
              >
                {logo}
              </span>
            ))}
          </motion.div>
        </div>
      </motion.div>

      {/* ═══════════════════════════════════════════════════════════════
          PART B: EDITORIAL TESTIMONIALS
      ═══════════════════════════════════════════════════════════════ */}
      <div ref={cardsRef} className="mt-24 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {TESTIMONIALS.map((testimonial, i) => (
            <motion.div
              key={testimonial.name}
              custom={i}
              variants={sectionFade}
              initial="hidden"
              animate={cardsInView ? "visible" : "hidden"}
              className="bg-white p-10 md:p-12 rounded-studio shadow-warm relative overflow-hidden group hover:shadow-warm-hover transition-shadow duration-300"
            >
              {/* Background accent — giant abstract quote icon */}
              <Quote
                className="absolute -top-4 -right-4 text-evren-peach-light opacity-50 rotate-12 pointer-events-none"
                size={180}
                strokeWidth={1}
              />

              {/* Star rating */}
              <div className="flex gap-1 mb-6 relative z-10">
                {Array.from({ length: 5 }).map((_, starIdx) => (
                  <Star
                    key={starIdx}
                    className="text-evren-peach fill-evren-peach"
                    size={20}
                  />
                ))}
              </div>

              {/* Quote text */}
              <blockquote className="text-xl md:text-2xl font-body italic text-evren-navy leading-relaxed mb-8 relative z-10">
                &ldquo;{testimonial.quote}&rdquo;
              </blockquote>

              {/* Author */}
              <div className="flex items-center gap-4 relative z-10">
                {/* Headshot placeholder with initials */}
                <div className="w-14 h-14 rounded-full bg-evren-light-gray flex items-center justify-center shrink-0">
                  <span className="font-heading font-bold text-evren-navy/60 text-sm">
                    {testimonial.initials}
                  </span>
                </div>
                <div>
                  <span className="font-heading font-bold text-evren-navy block">
                    {testimonial.name}
                  </span>
                  <span className="text-sm font-body text-evren-medium-gray">
                    {testimonial.title}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

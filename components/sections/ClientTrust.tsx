"use client";

import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState, useEffect, useCallback } from "react";
import { Star } from "lucide-react";

// ─── LOGO DATA ──────────────────────────────────────────────────────
const LOGOS = [
  "Apex Construction",
  "NovaCare Health",
  "Meridian Logistics",
  "Summit Financial",
  "Ironclad Security",
];

// ─── ALL TESTIMONIAL DATA ───────────────────────────────────────────
const TESTIMONIALS = [
  {
    quote:
      "The IntelliBots platform transformed our approach to internal AI. We're now empowering our own teams to deploy solutions in hours, not months. It is a game-changer for organizational agility.",
    name: "Maria Flores",
    title: "Chief Digital Officer at Global Freight Logistics",
  },
  {
    quote:
      "Navigating healthcare compliance is our biggest challenge. Evren AI delivered a sophisticated, HIPAA-compliant telehealth solution that balanced innovation with the rigorous security our patients deserve.",
    name: "Dr. Marcus Thorne",
    title: "Chief Medical Officer at iSeedoc.com",
  },
  {
    quote:
      "The AI safety monitoring system has been invaluable. We have seen a 40% reduction in on-site incidents. Evren AI understands the realities of our operational environment better than anyone.",
    name: "Bill Schmidt",
    title: "Head of Operations at Apex Construction Group",
  },
  {
    quote:
      "In our business, speed is alpha. The real-time intelligence platform Evren AI built for us delivers insights from earnings calls in seconds. It is a fundamental part of our competitive edge.",
    name: "Olivia Reed",
    title: "Chief Investment Officer at Stone Ridge Capital",
  },
  {
    quote:
      "We were leaking revenue through billing inefficiencies. Evren AI's platform recovered 15% of previously unbillable time in the first quarter alone. The system paid for itself almost immediately.",
    name: "Mark Goldstein",
    title: "Managing Partner at Goldstein & Associates Law",
  },
  {
    quote:
      "We had an aggressive roadmap and a critical talent gap. Evren AI's embedded engineers were world-class and integrated seamlessly. We launched our product six months ahead of schedule.",
    name: "Sarah Kim",
    title: "VP of Engineering at InnovateX",
  },
  {
    quote:
      "We needed more than a vendor, we needed a research partner to solve a problem that had no existing solution. Evren AI's deep expertise in fundamental AI research made them the only choice.",
    name: "Elena Petrova",
    title: "Head of Innovation at QuantumLeap Technologies",
  },
  {
    quote:
      "I have worked with dozens of tech vendors. Evren AI is different. They think like business partners, focusing on our strategic outcomes first and foremost. Their expertise in AI implementation is simply unmatched.",
    name: "Michael Rodriguez",
    title: "CEO at FutureTech Solutions",
  },
  {
    quote:
      "Evren AI didn't just build a platform, they built a revenue engine. The candidates sourced through TrackRec have a 25% higher quota attainment. The ROI is undeniable.",
    name: "Catherine Jensen",
    title: "Chief Revenue Officer at SalesForce Dynamics",
  },
];

const AUTOPLAY_INTERVAL = 5000;

// ─── ANIMATION VARIANTS ─────────────────────────────────────────────
const slideVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 60 : -60,
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => ({
    x: direction > 0 ? -60 : 60,
    opacity: 0,
  }),
};

// ─── COMPONENT ──────────────────────────────────────────────────────
export default function ClientTrust() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { amount: 0.15, once: true });

  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const goTo = useCallback(
    (index: number, dir?: number) => {
      setDirection(dir ?? (index > currentIndex ? 1 : -1));
      setCurrentIndex(index);
    },
    [currentIndex]
  );

  const next = useCallback(() => {
    const nextIdx = (currentIndex + 1) % TESTIMONIALS.length;
    goTo(nextIdx, 1);
  }, [currentIndex, goTo]);

  // Autoplay
  useEffect(() => {
    if (isPaused || !isInView) return;
    const timer = setInterval(next, AUTOPLAY_INTERVAL);
    return () => clearInterval(timer);
  }, [isPaused, isInView, next]);

  const testimonial = TESTIMONIALS[currentIndex];

  return (
    <section
      ref={sectionRef}
      id="client-trust"
      className="relative bg-evren-warm-white py-16 sm:py-24 md:py-36 overflow-hidden"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* ── Section Header ─────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <span className="text-sm uppercase tracking-widest text-evren-peach font-bold mb-4 block">
            Client Trust
          </span>
          <h2 className="text-3xl md:text-5xl lg:text-[2.75rem] text-evren-navy font-heading font-bold tracking-tight">
            Loved by Visionary Leaders.
          </h2>
        </motion.div>

        {/* ═══════════════════════════════════════════════════════════════
            CONTAINERIZED TESTIMONIAL CARD
        ═══════════════════════════════════════════════════════════════ */}
        <div className="bg-white rounded-2xl sm:rounded-3xl shadow-warm px-5 py-10 sm:px-8 sm:py-14 md:px-16 md:py-20">
          <div
            className="max-w-3xl mx-auto text-center"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            {/* Animated quote area */}
            <div className="relative min-h-[220px] sm:min-h-[280px] md:min-h-[320px] flex items-center justify-center">
              <AnimatePresence initial={false} custom={direction} mode="wait">
                <motion.div
                  key={currentIndex}
                  custom={direction}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{
                    x: { type: "spring", stiffness: 300, damping: 30 },
                    opacity: { duration: 0.2 },
                  }}
                  className="w-full"
                >
                  {/* Large quote */}
                  <blockquote className="font-heading font-extrabold text-evren-navy text-xl sm:text-3xl md:text-4xl lg:text-[2.75rem] leading-[1.2] sm:leading-[1.15] tracking-[-0.02em] mb-6 sm:mb-10">
                    &ldquo;{testimonial.quote}&rdquo;
                  </blockquote>

                  {/* Star rating */}
                  <div className="flex items-center justify-center gap-1.5 mb-5">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        className="text-yellow-400 fill-yellow-400"
                        size={22}
                      />
                    ))}
                  </div>

                  {/* Author name */}
                  <p className="font-heading font-bold text-evren-navy text-lg">
                    {testimonial.name}
                  </p>

                  {/* Author title */}
                  <p className="font-body text-evren-medium-gray text-sm mt-1">
                    {testimonial.title}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* ── Pagination dots ── */}
            <div className="flex items-center justify-center gap-2 mt-10">
              {TESTIMONIALS.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => goTo(idx)}
                  aria-label={`Go to testimonial ${idx + 1}`}
                  className={`h-2.5 rounded-full transition-all duration-400 cursor-pointer ${idx === currentIndex
                      ? "w-8 bg-evren-navy"
                      : "w-2.5 bg-evren-light-gray hover:bg-evren-navy/30"
                    }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* ═══════════════════════════════════════════════════════════════
            CLIENT LOGOS — OUTSIDE THE CARD
        ═══════════════════════════════════════════════════════════════ */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 pt-10"
        >
          {/* Tagline */}
          <p className="text-center text-sm font-body text-evren-medium-gray/70 mb-8">
            Feature client logos to build trust and credibility for your brand:
          </p>

          {/* Logo row — single row, minimal */}
          <div className="flex items-center justify-center gap-4 sm:gap-8 md:gap-10 overflow-x-auto scrollbar-hide pb-2">
            {LOGOS.map((logo, i) => (
              <span
                key={logo}
                className="text-sm md:text-base font-semibold font-heading text-evren-navy/20 hover:text-evren-navy/50 transition-colors duration-300 whitespace-nowrap select-none cursor-default tracking-[0.15em] uppercase shrink-0"
              >
                {logo}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

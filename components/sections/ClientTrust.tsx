"use client";

import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import ArrowButton from "@/components/ui/ArrowButton";

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
    quote: (
      <>
        The <span className="text-evren-peach">IntelliBots platform</span> transformed our approach to internal AI. We&apos;re now empowering our own teams to deploy solutions in <span className="text-evren-peach">hours, not months</span>. It is a game-changer for <span className="text-evren-peach">organizational agility</span>.
      </>
    ),
    name: "Maria Flores",
    title: "Chief Digital Officer at Global Freight Logistics",
  },
  {
    quote: (
      <>
        Navigating healthcare compliance is our biggest challenge. Evren AI delivered a <span className="text-evren-peach">sophisticated, HIPAA-compliant telehealth solution</span> that balanced innovation with the rigorous security our patients deserve.
      </>
    ),
    name: "Dr. Marcus Thorne",
    title: "Chief Medical Officer at iSeedoc.com",
  },
  {
    quote: (
      <>
        The AI safety monitoring system has been invaluable. We have seen a <span className="text-evren-peach">40% reduction in on-site incidents</span>. Evren AI understands the realities of our operational environment better than anyone.
      </>
    ),
    name: "Bill Schmidt",
    title: "Head of Operations at Apex Construction Group",
  },
  {
    quote: (
      <>
        In our business, speed is alpha. The <span className="text-evren-peach">real-time intelligence platform</span> Evren AI built for us delivers insights from earnings calls in seconds. It is a fundamental part of our <span className="text-evren-peach">competitive edge</span>.
      </>
    ),
    name: "Olivia Reed",
    title: "Chief Investment Officer at Stone Ridge Capital",
  },
  {
    quote: (
      <>
        We were leaking revenue through billing inefficiencies. Evren AI&apos;s platform <span className="text-evren-peach">recovered 15% of previously unbillable time</span> in the first quarter alone. The system <span className="text-evren-peach">paid for itself almost immediately</span>.
      </>
    ),
    name: "Mark Goldstein",
    title: "Managing Partner at Goldstein & Associates Law",
  },
  {
    quote: (
      <>
        We had an aggressive roadmap and a critical talent gap. Evren AI&apos;s embedded engineers were <span className="text-evren-peach">world-class</span> and integrated seamlessly. We launched our product <span className="text-evren-peach">six months ahead of schedule</span>.
      </>
    ),
    name: "Sarah Kim",
    title: "VP of Engineering at InnovateX",
  },
  {
    quote: (
      <>
        We needed more than a vendor, we needed a research partner to solve a problem that had no existing solution. Evren AI&apos;s deep expertise in <span className="text-evren-peach">fundamental AI research</span> made them the <span className="text-evren-peach">only choice</span>.
      </>
    ),
    name: "Elena Petrova",
    title: "Head of Innovation at QuantumLeap Technologies",
  },
  {
    quote: (
      <>
        I have worked with dozens of tech vendors. Evren AI is different. They think like <span className="text-evren-peach">business partners</span>, focusing on our strategic outcomes first and foremost. Their expertise in AI implementation is simply <span className="text-evren-peach">unmatched</span>.
      </>
    ),
    name: "Michael Rodriguez",
    title: "CEO at FutureTech Solutions",
  },
  {
    quote: (
      <>
        Evren AI didn&apos;t just build a platform, they built a <span className="text-evren-peach">revenue engine</span>. The candidates sourced through TrackRec have a <span className="text-evren-peach">25% higher quota attainment</span>. The ROI is <span className="text-evren-peach">undeniable</span>.
      </>
    ),
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

  const prev = useCallback(() => {
    const prevIdx = (currentIndex - 1 + TESTIMONIALS.length) % TESTIMONIALS.length;
    goTo(prevIdx, -1);
  }, [currentIndex, goTo]);

  // Autoplay
  useEffect(() => {
    if (!isInView) return;
    const timer = setInterval(next, AUTOPLAY_INTERVAL);
    return () => clearInterval(timer);
  }, [isInView, next]);

  const testimonial = TESTIMONIALS[currentIndex];

  return (
    <section
      ref={sectionRef}
      id="client-trust"
      className="relative bg-evren-peach/5 py-10 sm:py-16 lg:py-20 overflow-hidden"
    >
      <div className="mx-auto max-w-6xl relative z-10 px-4 sm:px-6 lg:px-8">
        {/* ── Section Header ─────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="text-center flex flex-col items-center mb-8 lg:mb-12 px-4"
        >
          <span className="text-sm uppercase tracking-widest text-evren-peach font-bold mb-4 block">
            Client Trust
          </span>
          <h2 className="font-heading font-bold text-evren-navy text-[2.25rem] sm:text-4xl md:text-5xl lg:text-[2.75rem] leading-[1.15] tracking-tight max-w-4xl">
            Trusted by <span className="text-evren-peach">Visionary Leaders.</span>
          </h2>
        </motion.div>

        {/* ═══════════════════════════════════════════════════════════════
            CONTAINERIZED TESTIMONIAL LAYOUT
        ═══════════════════════════════════════════════════════════════ */}
        <div className="w-full max-w-5xl mx-auto relative px-4 sm:px-6 md:px-8">
          <div className="w-full mx-auto bg-white rounded-3xl sm:rounded-[2.5rem] shadow-sm border border-black/5 px-5 py-10 sm:px-12 md:px-16 sm:py-16 text-left sm:text-center">
            {/* ── Navigation Chevron Arrows (TOP RIGHT) ── */}
            <div className="flex items-center justify-end gap-2 sm:gap-3 mb-6 sm:mb-10 w-full">
              <button
                onClick={prev}
                aria-label="Previous testimonial"
                className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-evren-navy/15 flex items-center justify-center text-evren-navy hover:bg-evren-navy hover:text-white transition-colors duration-300"
              >
                <ChevronLeft size={20} strokeWidth={1.5} />
              </button>
              <button
                onClick={next}
                aria-label="Next testimonial"
                className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-evren-navy/15 flex items-center justify-center text-evren-navy hover:bg-evren-navy hover:text-white transition-colors duration-300"
              >
                <ChevronRight size={20} strokeWidth={1.5} />
              </button>
            </div>

            {/* Animated quote area */}
            <div className="relative min-h-[220px] sm:min-h-[240px] md:min-h-[280px] flex items-start justify-center">
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
                  {/* Small / Medium quote with inline icons */}
                  <blockquote className="font-heading text-evren-navy font-medium text-lg sm:text-xl lg:text-2xl leading-[1.6] -tracking-[0.01em] text-left sm:text-center w-full max-w-4xl mx-auto mb-8 sm:mb-12">
                    <Quote className="inline-block w-5 h-5 sm:w-7 sm:h-7 text-evren-peach/50 rotate-180 -mt-2 mr-2" strokeWidth={2.5} />
                    {testimonial.quote}
                    <Quote className="inline-block w-5 h-5 sm:w-7 sm:h-7 text-evren-peach/50 ml-2" strokeWidth={2.5} />
                  </blockquote>

                  {/* Metadata & CTA Row */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 pt-6 border-t border-evren-navy/10 text-left">
                    <div>
                      <p className="font-heading font-extrabold text-evren-navy text-xl sm:text-2xl tracking-tight mb-1">
                        {testimonial.name}
                      </p>
                      <p className="font-heading font-semibold text-evren-peach text-xs sm:text-sm uppercase tracking-widest max-w-sm">
                        {testimonial.title}
                      </p>
                    </div>

                    {/* Case Study CTA */}
                    <div className="shrink-0">
                      <ArrowButton
                        href="/work"
                        variant="outline"
                        size="lg"
                        className="w-full sm:w-auto justify-between sm:justify-center text-[14px] sm:text-base whitespace-nowrap"
                      >
                        Read Case Study
                      </ArrowButton>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
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

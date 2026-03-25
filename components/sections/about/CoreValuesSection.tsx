"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useInView, AnimatePresence, type Variants } from "framer-motion";
import { Handshake, Brain, BookOpen, Rocket, Heart, ArrowRight } from "lucide-react";

// ═══════════════════════════════════════════════════════════════════════
//  MOTION VARIANTS
// ═══════════════════════════════════════════════════════════════════════

const SPRING = { type: "spring" as const, stiffness: 100, damping: 20 };

const staggerContainer: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
};

const fadeSlideUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { ...SPRING, duration: 0.6 } },
};

// ─── GLOBAL COLOR TOKENS ─────────────────────────────────────────────
// Active card:   dark navy bg, cream media, peach title, white desc, peach arrow
// Inactive card: peach bg, cream media, dark title, dark desc, white arrow + dark icon
const ACTIVE = {
  bg: "#1B2A4A",
  titleColor: "#F4A89A",
  descColor: "rgba(255,255,255,0.72)",
  arrowBg: "#F4A89A",
  arrowIcon: "#1B2A4A",
};
const INACTIVE = {
  bg: "#F4A89A",
  titleColor: "#1B2A4A",
  descColor: "rgba(27,42,74,0.72)",
  arrowBg: "rgba(255,255,255,0.9)",
  arrowIcon: "#1B2A4A",
};

// ─── VALUES DATA ─────────────────────────────────────────────────────
const values = [
  {
    title: "Partnership First",
    description:
      "We don't build for clients. We build with them. Every engagement begins and ends with shared ownership.",
    icon: Handshake,
    video: "/Illustrations/Partnership.mp4",
  },
  {
    title: "Intelligent by Design",
    description:
      "AI isn't bolted on—it's woven into the architecture from day one. Every system we ship thinks before it acts.",
    icon: Brain,
    video: "/Illustrations/Intelligence.mp4",
  },
  {
    title: "Knowledge Transfer",
    description:
      "We leave your team smarter than we found it. Documentation, training, and empowerment are non-negotiable deliverables.",
    icon: BookOpen,
    video: "/Illustrations/Knowledge.mp4",
  },
  {
    title: "Always Expanding",
    description:
      "Complacency is the enemy. We invest relentlessly in new tools, frameworks, and methodologies so our partners never fall behind.",
    icon: Rocket,
    video: "/Illustrations/Expanding.mp4",
  },
  {
    title: "Human-Centered Craft",
    description:
      "Great technology disappears into the experience. We obsess over the details that make complex systems feel effortless.",
    icon: Heart,
    video: "/Illustrations/Human Crafted.mp4",
  },
];

// ═══════════════════════════════════════════════════════════════════════
//  CORE VALUES — Split left-panel + coverflow carousel
// ═══════════════════════════════════════════════════════════════════════

export default function CoreValuesSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.15 });

  const [current, setCurrent] = useState(0);
  // One ref slot per card (null for non-video cards)
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([null, null, null, null, null]);

  const goTo = (idx: number) => setCurrent((idx + values.length) % values.length);

  // Play active card's video; pause all others
  useEffect(() => {
    videoRefs.current.forEach((video, idx) => {
      if (!video) return;
      if (idx === current) {
        video.currentTime = 0;
        video.play().catch(() => { });
      } else {
        video.pause();
        video.currentTime = 0;
      }
    });
  }, [current]);

  const active = values[current];
  const ActiveIcon = active.icon;

  return (
    <section
      ref={sectionRef}
      id="core-values"
      className="relative w-full overflow-hidden bg-evren-warm-white py-16 lg:py-24"
    >
      {/* ── Background orb ──────────────────────────────────────── */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(244,168,154,0.07) 0%, transparent 60%)",
            filter: "blur(60px)",
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="flex flex-col items-center gap-0"
        >
          {/* ══ HEADER — centered ═══════════════════════════════ */}
          <div className="text-center mb-10 flex flex-col items-center gap-5">
            {/* Badge */}
            <motion.div
              variants={fadeSlideUp}
              className="inline-flex items-center gap-2.5 rounded-full
                         bg-evren-peach-light/60 border border-evren-peach/20 px-5 py-2"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-evren-rose opacity-50" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-evren-rose" />
              </span>
              <span className="text-[11px] font-heading font-semibold text-evren-navy tracking-wide uppercase">
                What We Stand For
              </span>
            </motion.div>

            {/* Dynamic headline */}
            <motion.div variants={fadeSlideUp} className="pb-3">
              <AnimatePresence mode="wait">
                <motion.h2
                  key={current}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  className="font-heading font-extrabold text-evren-navy
                             text-4xl sm:text-5xl lg:text-6xl
                             leading-[1.05] -tracking-tight"
                >
                  {active.title.split(" ").map((word, wi, arr) =>
                    wi === arr.length - 1 ? (
                      <span key={wi} className="relative inline-block">
                        {word}
                        <svg
                          className="absolute -bottom-1 md:-bottom-2 left-0 w-full h-[8px] md:h-[12px]"
                          viewBox="0 0 120 12"
                          fill="none"
                          preserveAspectRatio="none"
                          aria-hidden="true"
                        >
                          <path
                            d="M0 6 Q 10 0, 20 6 T 40 6 T 60 6 T 80 6 T 100 6 T 120 6"
                            stroke="#F4A89A"
                            strokeWidth="2.5"
                            strokeLinecap="round"
                            fill="none"
                            opacity="0.6"
                          />
                        </svg>
                      </span>
                    ) : (
                      <span key={wi}>{word} </span>
                    )
                  )}
                </motion.h2>
              </AnimatePresence>
            </motion.div>

            {/* Dynamic description */}
            <motion.div variants={fadeSlideUp} className="overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.p
                  key={current}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.25, delay: 0.05 }}
                  className="font-body text-evren-charcoal/60 text-base md:text-lg leading-relaxed max-w-xl mx-auto"
                  style={{ lineHeight: 1.7 }}
                >
                  {active.description}
                </motion.p>
              </AnimatePresence>
            </motion.div>


          </div>

          {/* ══════════════════════════════════════════════════════
              RIGHT — Coverflow carousel
          ══════════════════════════════════════════════════════ */}
          <motion.div variants={fadeSlideUp}>
            <div
              className="relative flex items-center justify-center"
              style={{ height: "420px" }}
            >
              {values.map((value, i) => {
                const Icon = value.icon;
                const offset = i - current;
                // Wrap offset to range [-2, 2]
                const wrapped =
                  offset > values.length / 2
                    ? offset - values.length
                    : offset < -values.length / 2
                      ? offset + values.length
                      : offset;

                const isActive = wrapped === 0;
                const isVisible = Math.abs(wrapped) <= 2;

                if (!isVisible) return null;

                // Position & style based on distance from center
                const xOffset = wrapped * 155;
                const scale = isActive ? 1 : 1 - Math.abs(wrapped) * 0.1;
                const opacity = isActive ? 1 : 1 - Math.abs(wrapped) * 0.3;
                const zIndex = 10 - Math.abs(wrapped);
                // Outermost cards (±2) mirror the active navy scheme; ±1 use peach
                const colors = isActive || Math.abs(wrapped) === 2 ? ACTIVE : INACTIVE;

                return (
                  <motion.div
                    key={value.title}
                    className="absolute cursor-pointer"
                    style={{ zIndex }}
                    animate={{
                      x: xOffset,
                      scale,
                      opacity,
                    }}
                    transition={{ type: "spring", stiffness: 260, damping: 28 }}
                    onClick={() => goTo(i)}
                  >
                    {isActive ? (
                      /* ── Active: full expanded card ── */
                      <div
                        className="rounded-3xl overflow-hidden"
                        style={{
                          width: "240px",
                          background: ACTIVE.bg,
                          boxShadow: "0 32px 80px -12px rgba(0,0,0,0.3)",
                        }}
                      >
                        {/* Media */}
                        {value.video ? (
                          <div className="mx-4 mt-4 rounded-2xl overflow-hidden">
                            <video
                              ref={(el) => { videoRefs.current[i] = el; }}
                              src={value.video}
                              loop
                              muted
                              playsInline
                              className="w-full object-cover"
                              style={{ display: "block", aspectRatio: "4/3" }}
                            />
                          </div>
                        ) : (
                          <div
                            className="mx-4 mt-4 rounded-2xl flex items-center justify-center"
                            style={{ background: "#F5F0EB", aspectRatio: "4/3" }}
                          >
                            <Icon size={64} strokeWidth={1.1} color="#1B2A4A" />
                          </div>
                        )}

                        {/* Text + arrow */}
                        <div className="px-5 pt-4 pb-5">
                          <h3
                            className="font-heading font-bold text-lg leading-tight mb-2"
                            style={{ color: ACTIVE.titleColor }}
                          >
                            {value.title}
                          </h3>
                          <p
                            className="font-body text-[12px] mb-4"
                            style={{ color: ACTIVE.descColor, lineHeight: 1.6 }}
                          >
                            {value.description}
                          </p>
                          {/* Arrow button */}
                          <div className="flex justify-end">
                            <button
                              onClick={(e) => { e.stopPropagation(); goTo(current + 1); }}
                              className="w-9 h-9 rounded-full flex items-center justify-center transition-opacity duration-200 hover:opacity-80"
                              style={{ background: ACTIVE.arrowBg }}
                              aria-label="Next principle"
                            >
                              <ArrowRight size={15} color={ACTIVE.arrowIcon} />
                            </button>
                          </div>
                        </div>
                      </div>
                    ) : (
                      /* ── Inactive: real card, scaled+faded by parent ── */
                      <div
                        className="rounded-3xl overflow-hidden"
                        style={{
                          width: "200px",
                          background: colors.bg,
                          boxShadow: "0 10px 30px -8px rgba(0,0,0,0.18)",
                        }}
                      >
                        {/* Media — video cards show actual video first-frame; icon cards show icon */}
                        {value.video ? (
                          <div className="mx-3 mt-3 rounded-2xl overflow-hidden">
                            <video
                              ref={(el) => { videoRefs.current[i] = el; }}
                              src={value.video}
                              muted
                              playsInline
                              preload="metadata"
                              className="w-full object-cover"
                              style={{ display: "block", aspectRatio: "4/3" }}
                            />
                          </div>
                        ) : (
                          <div
                            className="mx-3 mt-3 rounded-2xl flex items-center justify-center"
                            style={{ background: "#F5F0EB", aspectRatio: "4/3" }}
                          >
                            <Icon size={48} strokeWidth={1.2} color="#1B2A4A" />
                          </div>
                        )}

                        {/* Text */}
                        <div className="px-4 pt-3 pb-5">
                          <h3
                            className="font-heading font-bold text-base leading-tight mb-1.5"
                            style={{ color: colors.titleColor }}
                          >
                            {value.title}
                          </h3>
                          <p
                            className="font-body text-[11px]"
                            style={{ color: colors.descColor, lineHeight: 1.55 }}
                          >
                            {value.description}
                          </p>
                        </div>
                      </div>
                    )}
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Dot pagination — below carousel */}
          <motion.div variants={fadeSlideUp} className="flex items-center justify-center gap-2.5 mt-8">
            {values.map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                aria-label={`Go to principle ${i + 1}`}
              >
                <span
                  className="block rounded-full transition-all duration-300"
                  style={{
                    width: i === current ? "32px" : "8px",
                    height: "8px",
                    background: i === current ? "#F4A89A" : "rgba(27,42,74,0.18)",
                  }}
                />
              </button>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

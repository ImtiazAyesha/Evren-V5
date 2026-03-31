"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useInView, type Variants } from "framer-motion";
import { Quote } from "lucide-react";

// ═══════════════════════════════════════════════════════════════════════
//  MOTION VARIANTS
// ═══════════════════════════════════════════════════════════════════════

const SPRING = { type: "spring" as const, stiffness: 100, damping: 20 };

const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12, delayChildren: 0.08 },
  },
};

const fadeSlideUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { ...SPRING, duration: 0.8 },
  },
};

const imageReveal: Variants = {
  hidden: { opacity: 0, scale: 0.95, filter: "blur(10px)" },
  visible: {
    opacity: 1,
    scale: 1,
    filter: "blur(0px)",
    transition: { duration: 1, ease: [0.16, 1, 0.3, 1] },
  },
};

// ═══════════════════════════════════════════════════════════════════════
//  LEADERSHIP — Single CEO Statement Layout
// ═══════════════════════════════════════════════════════════════════════

export default function LeadershipSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const headRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(headRef, { once: true, amount: 0.2 });

  return (
    <section
      ref={sectionRef}
      id="leadership"
      className="relative w-full overflow-hidden bg-evren-warm-white py-8 lg:py-12"
    >
      {/* ── Background Elements ──────────────────────────────────────── */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        {/* Soft radial gradients for depth */}
        <div
          className="absolute top-0 right-0 w-[800px] h-[800px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(244, 168, 154, 0.08) 0%, transparent 70%)",
            filter: "blur(60px)",
            transform: "translate(30%, -30%)",
          }}
        />
        <div
          className="absolute bottom-0 left-0 w-[600px] h-[600px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(212, 165, 116, 0.06) 0%, transparent 70%)",
            filter: "blur(60px)",
            transform: "translate(-30%, 30%)",
          }}
        />
        
        {/* Architectural grid lines */}
        <div className="absolute inset-0 opacity-[0.03]"
             style={{
               backgroundImage: 'linear-gradient(to right, #000 1px, transparent 1px), linear-gradient(to bottom, #000 1px, transparent 1px)',
               backgroundSize: '120px 120px'
             }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        
        <motion.div
          ref={headRef}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={staggerContainer}
          className="flex flex-col"
        >
          {/* Main Section Title (Mobile) */}
          <motion.div variants={fadeSlideUp} className="mb-8 text-left block lg:hidden">
            <h2 className="relative inline-block text-3xl md:text-4xl lg:text-5xl font-heading font-medium text-evren-navy">
              A{" "}
              <span className="relative inline-block">
                <span className="relative z-10">Message</span>
                {/* Animated wavy underline — peach */}
                <svg
                  className="absolute -bottom-2 md:-bottom-3 left-0 w-full h-[8px] md:h-[12px]"
                  viewBox="0 0 200 12"
                  fill="none"
                  preserveAspectRatio="none"
                  aria-hidden="true"
                >
                  <g>
                    <animateTransform attributeName="transform" type="translate" from="-64 0" to="0 0" dur="3s" repeatCount="indefinite" />
                    <path
                      d="M -64 6 Q -48 0, -32 6 T 0 6 T 32 6 T 64 6 T 96 6 T 128 6 T 160 6 T 192 6 T 224 6 T 256 6 T 288 6"
                      stroke="#F4A89A"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      fill="none"
                      opacity="0.8"
                    />
                  </g>
                </svg>
              </span>{" "}
              Addressed To You
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
            {/* ── Left side / Text (Now on the right) ───────────────────── */}
            <div className="relative flex flex-col justify-start order-2 mt-4">
              
              {/* Main Section Title (Desktop) */}
              <motion.div variants={fadeSlideUp} className="mb-6 lg:mb-8 text-left hidden lg:block">
                <h2 className="relative inline-block text-3xl md:text-4xl lg:text-5xl font-heading font-medium text-evren-navy">
                  A{" "}
                  <span className="relative inline-block">
                    <span className="relative z-10">Message</span>
                    {/* Animated wavy underline — peach */}
                    <svg
                      className="absolute -bottom-2 md:-bottom-3 left-0 w-full h-[8px] md:h-[12px]"
                      viewBox="0 0 200 12"
                      fill="none"
                      preserveAspectRatio="none"
                      aria-hidden="true"
                    >
                      <g>
                        <animateTransform attributeName="transform" type="translate" from="-64 0" to="0 0" dur="3s" repeatCount="indefinite" />
                        <path
                          d="M -64 6 Q -48 0, -32 6 T 0 6 T 32 6 T 64 6 T 96 6 T 128 6 T 160 6 T 192 6 T 224 6 T 256 6 T 288 6"
                          stroke="#F4A89A"
                          strokeWidth="2.5"
                          strokeLinecap="round"
                          fill="none"
                          opacity="0.8"
                        />
                      </g>
                    </svg>
                  </span>{" "}
                  Addressed To You
                </h2>
              </motion.div>

              {/* Editorial Statement */}
              <motion.p
                variants={fadeSlideUp}
                className="font-heading text-evren-charcoal text-lg sm:text-lg md:text-xl lg:text-2xl leading-[1.8] -tracking-[0.01em]"
              >
                “The promise of AI is immense, but the path to ROI is fraught with risk. I founded Evren AI to be the partner I wish I had as an executive: <span className="text-transparent bg-clip-text bg-gradient-to-r from-evren-peach to-evren-rose font-semibold">one that speaks the language of the balance sheet</span>, prioritizes risk mitigation as much as innovation, and measures success not in algorithms deployed, but in tangible enterprise value created.”
              </motion.p>
              
              {/* Signature Area (md+ screens) */}
              <motion.div variants={fadeSlideUp} className="hidden md:block mt-8">
                <h3 className="font-heading text-evren-charcoal font-bold text-xl tracking-tight mb-1">
                  Tariq Mehmood
                </h3>
                <p className="font-sans text-evren-charcoal/70 text-sm">
                  Founder & CEO of Evren AI
                </p>
              </motion.div>
            </div>

            {/* ── Right side / Image (Now on the left) ───────────────── */}
            <motion.div variants={imageReveal} className="relative group w-full max-w-[400px] lg:max-w-[480px] mx-auto order-1">
              {/* Image Card */}
              <div className="relative w-full rounded-2xl overflow-hidden shadow-2xl shadow-evren-navy/10 border-4 border-evren-peach/10 bg-evren-peach">
                <Image
                  src="/CEO_files/CEO.png"
                  alt="Tariq Mehmood, CEO & Founder of Evren AI"
                  width={600}
                  height={800}
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="w-full h-auto object-cover object-top transition-transform duration-1000 ease-out group-hover:scale-105"
                  quality={100}
                  priority
                />
              </div>

              {/* Text below image (mobile only) */}
              <div className="mt-6 text-center md:hidden">
                <h3 className="font-heading text-evren-charcoal font-bold text-xl tracking-tight mb-1">
                  Tariq Mehmood
                </h3>
                <p className="font-sans text-evren-charcoal/70 text-sm">
                  Founder & CEO of Evren AI
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}


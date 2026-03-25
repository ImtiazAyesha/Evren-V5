"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useInView, type Variants } from "framer-motion";
import { Linkedin, Quote } from "lucide-react";

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
      className="relative w-full overflow-hidden bg-evren-warm-white py-24 lg:py-32"
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
          className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-12 lg:gap-20 items-center"
        >
          {/* ── Left side: CEO Portrait ─────────────────────────────── */}
          <motion.div variants={imageReveal} className="relative group perspective-1000">
            {/* Decorative backing plate */}
            <div className="absolute inset-0 bg-evren-peach/10 transform translate-x-4 translate-y-4 rounded-2xl md:translate-x-6 md:translate-y-6 transition-transform duration-700 ease-out group-hover:translate-x-8 group-hover:translate-y-8" />
            
            <div className="relative aspect-[3/4] md:aspect-[4/5] w-full rounded-2xl overflow-hidden shadow-2xl shadow-evren-navy/10 border border-white/40 bg-white">
              <Image
                src="/CEO_files/CEO.png"
                alt="Tariq Mehmood, CEO & Founder of Evren AI"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover object-top transition-transform duration-1000 ease-out group-hover:scale-105"
                quality={100}
                priority
              />
              {/* Refined gradient overlay for portrait depth */}
              <div className="absolute inset-0 bg-gradient-to-t from-evren-navy/80 via-evren-navy/20 to-transparent opacity-60 mix-blend-multiply" />
              
              {/* In-image label (optional detail) */}
              <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between pointer-events-none hidden md:flex">
                 <div className="h-px bg-white/30 flex-grow mr-4"></div>
                 <span className="text-white/80 font-heading text-xs tracking-[0.2em] uppercase">Evren AI Leadership</span>
              </div>
            </div>
            
            {/* Floating accent badge */}
            <div className="absolute -bottom-6 -left-6 md:-bottom-8 md:-left-8 bg-evren-navy text-white p-6 rounded-2xl shadow-xl w-48 shadow-evren-navy/20 border border-white/10 hidden md:block z-20">
              <p className="font-heading font-bold text-lg leading-tight">Partner in Transformation</p>
            </div>
          </motion.div>

          {/* ── Right side: Statement & Signature ───────────────────── */}
          <div className="relative flex flex-col justify-center">
            
            {/* Section Tag (Matches Differentiators.tsx) */}
            <motion.p
              variants={fadeSlideUp}
              className="text-sm uppercase tracking-widest text-evren-peach font-heading font-bold mb-8"
            >
              A Message Addressed To You
            </motion.p>

            {/* Editorial Statement */}
            <motion.div variants={staggerContainer} className="space-y-8">
              <motion.p
                variants={fadeSlideUp}
                className="font-heading text-evren-navy text-2xl sm:text-3xl lg:text-[2rem] leading-[1.4] -tracking-[0.01em] font-medium"
              >
                <Quote className="inline-block w-8 h-8 md:w-10 md:h-10 text-evren-peach/60 rotate-180 -mt-6 mr-3 align-text-top" />
                The promise of AI is immense, but the path to ROI is fraught with risk. I founded Evren AI to be the partner I wish I had as an executive: <span className="text-transparent bg-clip-text bg-gradient-to-r from-evren-peach to-evren-rose font-semibold">one that speaks the language of the balance sheet</span>, prioritizes risk mitigation as much as innovation, and measures success not in algorithms deployed, but in tangible enterprise value created.
                <Quote className="inline-block w-8 h-8 md:w-10 md:h-10 text-evren-peach/60 ml-2" />
              </motion.p>
            </motion.div>

            {/* Signature Area */}
            <motion.div variants={fadeSlideUp} className="mt-12 pt-8 border-t border-evren-charcoal/10 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
              <div>
                <h3 className="font-heading font-extrabold text-evren-navy text-2xl tracking-tight mb-1">
                  TARIQ MEHMOOD
                </h3>
                <p className="font-heading font-semibold text-evren-peach text-sm uppercase tracking-widest">
                  CEO & Founder
                </p>
              </div>
              
              <a
                href="https://www.linkedin.com/in/tariq-mehmood-a5b78b5"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Connect with Tariq Mehmood on LinkedIn"
                className="inline-flex items-center gap-2.5 
                           rounded-full bg-white border border-evren-peach/20 px-6 py-3
                           text-evren-navy text-xs font-heading font-semibold tracking-wide
                           transition-all duration-300 ease-out
                           hover:bg-evren-warm-white hover:border-evren-peach/50 hover:shadow-lg hover:shadow-evren-peach/10
                           hover:-translate-y-0.5 w-fit"
              >
                <Linkedin size={16} className="text-evren-navy" />
                <span>Connect on LinkedIn</span>
              </a>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}


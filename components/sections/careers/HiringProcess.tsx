"use client";

import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { Clock, ArrowLeft, ArrowRight } from "lucide-react";

const STEPS = [
  {
    num: "01",
    title: "Application Review",
    timing: "3–5 days",
    description: "We read every application ourselves. No automated filtering. If your background is relevant, someone from the team will reach out personally.",
  },
  {
    num: "02",
    title: "Intro Phase",
    timing: "30 mins",
    description: "A conversation with one of our leads — not HR. We want to understand how you think about building products with AI, and answer your questions.",
  },
  {
    num: "03",
    title: "Technical Call",
    timing: "60 mins",
    description: "We talk through a real problem — close to the work we actually do. We're not looking for a perfect answer. We're looking for how you approach ambiguity.",
  },
  {
    num: "04",
    title: "Team Conversation",
    timing: "45 mins",
    description: "You meet the people you'd work with. Ask anything. We'll do the same. This is about fit in both directions — you should walk away knowing exactly what joining Evren would mean.",
  },
];

export default function HiringProcess() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const [activeStep, setActiveStep] = useState(0);
  const [direction, setDirection] = useState(0);

  const changeStep = (newStep: number) => {
    if (newStep === activeStep) return;
    setDirection(newStep > activeStep ? 1 : -1);
    setActiveStep(newStep);
  };

  const handlePrev = () => {
    if (activeStep > 0) changeStep(activeStep - 1);
  };

  const handleNext = () => {
    if (activeStep < STEPS.length - 1) changeStep(activeStep + 1);
  };

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 40 : -40,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 40 : -40,
      opacity: 0,
    }),
  };

  return (
    <section
      ref={sectionRef}
      className="bg-evren-warm-white py-16 lg:py-24 px-4 sm:px-6 relative overflow-hidden"
    >
      <div className="max-w-[1024px] mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-[48px] lg:mb-[64px]"
        >
          <span className="block text-[12px] font-heading font-semibold text-evren-rose uppercase tracking-[0.1em] mb-[16px]">
            The Process
          </span>
          <h2 className="font-heading text-[32px] md:text-[40px] lg:text-[48px] font-semibold text-evren-navy leading-[1.2] tracking-tight max-w-[800px] mx-auto">
            We Respect Your Time. Here&apos;s Exactly What to{" "}
            <span className="relative inline-block">
              <span className="relative z-10">Expect.</span>
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
          </h2>
          <p className="font-body text-[16px] md:text-[18px] text-evren-medium-gray leading-[1.6] max-w-[600px] mx-auto mt-[20px]">
            No automated filtering. No trick questions. No process theatre.
            Four conversations — each with a real purpose.
          </p>
        </motion.div>

        {/* ── Interactive Form-Factor Stepper ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="w-full flex flex-col bg-white rounded-[32px] shadow-[0_8px_40px_rgba(27,42,74,0.04)] border border-evren-light-gray overflow-hidden [-webkit-tap-highlight-color:transparent] relative"
        >
          {/* ── Desktop Navigation Bar: Horizontal Tab Flow ── */}
          <div className="hidden md:flex flex-row border-b border-evren-light-gray relative w-full">
            {STEPS.map((step, idx) => {
              const isActive = activeStep === idx;
              return (
                <button
                  key={step.num}
                  onClick={() => changeStep(idx)}
                  className={`relative flex-1 p-[24px] flex flex-col items-center text-center transition-colors duration-300 focus:outline-none focus:ring-0 focus-visible:outline-none focus-visible:ring-0 [-webkit-tap-highlight-color:transparent] ${
                    isActive ? "bg-evren-navy/5" : "hover:bg-evren-warm-white"
                  }`}
                >
                  <div className="flex items-center gap-2 mb-1 justify-center w-full">
                    <span className={`text-[12px] font-heading font-bold uppercase tracking-[0.08em] transition-colors ${isActive ? "text-evren-rose" : "text-evren-medium-gray"}`}>
                      Step {step.num}
                    </span>
                  </div>
                  <h4 className={`text-[16px] font-heading font-semibold leading-tight transition-colors text-center ${isActive ? "text-evren-navy" : "text-evren-navy/50"}`}>
                    {step.title}
                  </h4>
                  
                  {/* Active Indicator Line */}
                  {isActive && (
                    <motion.div
                      layoutId="activeStepLine"
                      className="absolute bottom-0 left-0 right-0 h-[3px] bg-evren-peach"
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                </button>
              );
            })}
          </div>

          {/* ── Mobile Navigation Bar: App-like Pager ── */}
          <div className="md:hidden flex items-center justify-between px-[24px] py-[20px] border-b border-evren-light-gray bg-evren-warm-white/30">
            <span className="text-[12px] font-heading font-bold uppercase tracking-[0.1em] text-evren-rose border border-evren-rose/20 bg-evren-rose/5 px-[12px] py-[4px] rounded-full">
              Step {STEPS[activeStep].num} of 04
            </span>
            
            {/* Animated Progress Dots */}
            <div className="flex items-center gap-[6px]">
              {STEPS.map((step, idx) => (
                <button
                  key={step.num}
                  onClick={() => changeStep(idx)}
                  className={`h-[6px] rounded-full transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] focus:outline-none [-webkit-tap-highlight-color:transparent] ${
                    activeStep === idx 
                      ? "w-[24px] bg-evren-peach" 
                      : "w-[6px] bg-evren-navy/10 hover:bg-evren-navy/30"
                  }`}
                  aria-label={`Go to step ${step.num}`}
                />
              ))}
            </div>
          </div>

          {/* ── Shared Bottom Content Area: Horizontal Crossfade ── */}
          <div className="relative w-full min-h-[380px] sm:min-h-[300px] md:min-h-[280px] px-[32px] pt-[32px] pb-[96px] md:p-[48px] lg:p-[64px] flex items-center bg-[radial-gradient(circle_at_top_right,rgba(244,168,154,0.05)_0%,transparent_50%)]">
            <AnimatePresence custom={direction} mode="wait">
              <motion.div
                key={activeStep}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ type: "spring", stiffness: 200, damping: 25, duration: 0.5 }}
                className="w-full relative z-10 grid grid-cols-1 md:grid-cols-12 gap-[24px] md:gap-[48px] items-center"
              >
                {/* Large Number & Graphic Area */}
                <div className="md:col-span-4 lg:col-span-5 flex flex-col items-start border-l-4 border-evren-peach pl-[20px] md:pl-[32px]">
                  <h3 className="text-[56px] md:text-[80px] lg:text-[96px] font-heading font-bold text-evren-navy leading-[0.9] tracking-tighter mb-[12px]">
                    {STEPS[activeStep].num}
                  </h3>
                  <div className="flex items-center gap-2 bg-white border border-evren-light-gray shadow-sm rounded-full px-[14px] md:px-[16px] py-[6px] text-[12px] md:text-[13px] font-heading font-medium text-evren-navy mt-[8px]">
                    <Clock size={14} className="text-evren-peach" />
                    {STEPS[activeStep].timing}
                  </div>
                </div>

                {/* Text Content Area */}
                <div className="md:col-span-8 lg:col-span-7">
                  <h3 className="text-[22px] md:text-[28px] font-heading font-bold text-evren-navy mb-[12px] md:mb-[16px] leading-tight">
                    {STEPS[activeStep].title}
                  </h3>
                  <p className="text-[15px] md:text-[18px] font-body text-evren-charcoal leading-[1.65]">
                    {STEPS[activeStep].description}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Massive background watermark behind the content */}
            <div className="absolute -bottom-4 right-4 md:-bottom-8 md:right-8 text-[120px] md:text-[200px] font-heading font-extrabold text-evren-navy/[0.02] pointer-events-none select-none overflow-hidden leading-none z-0">
              {STEPS[activeStep].num}
            </div>

            {/* ── Bottom Navigation Arrows ── */}
            <div className="absolute bottom-[24px] right-[24px] md:bottom-[40px] md:right-[48px] flex items-center gap-[12px] z-30">
              <button
                onClick={handlePrev}
                disabled={activeStep === 0}
                className={`w-[44px] h-[44px] md:w-[48px] md:h-[48px] rounded-full flex items-center justify-center transition-all duration-300 border focus:outline-none focus:ring-0 [-webkit-tap-highlight-color:transparent] ${
                  activeStep === 0
                    ? "bg-evren-warm-white border-evren-light-gray text-evren-navy/30 cursor-not-allowed opacity-60"
                    : "bg-white border-evren-light-gray text-evren-navy hover:border-evren-peach hover:text-evren-peach hover:shadow-[0_4px_16px_rgba(244,168,154,0.15)] hover:-translate-y-0.5 active:translate-y-0"
                }`}
                aria-label="Previous step"
              >
                <ArrowLeft size={20} strokeWidth={2.5} />
              </button>
              <button
                onClick={handleNext}
                disabled={activeStep === STEPS.length - 1}
                className={`w-[44px] h-[44px] md:w-[48px] md:h-[48px] rounded-full flex items-center justify-center transition-all duration-300 border focus:outline-none focus:ring-0 [-webkit-tap-highlight-color:transparent] ${
                  activeStep === STEPS.length - 1
                    ? "bg-evren-warm-white border-evren-light-gray text-evren-navy/30 cursor-not-allowed opacity-60"
                    : "bg-white border-evren-light-gray text-evren-navy hover:border-evren-peach hover:text-evren-peach hover:shadow-[0_4px_16px_rgba(244,168,154,0.15)] hover:-translate-y-0.5 active:translate-y-0"
                }`}
                aria-label="Next step"
              >
                <ArrowRight size={20} strokeWidth={2.5} />
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

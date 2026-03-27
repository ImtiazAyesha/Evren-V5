"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const STEPS = [
  {
    label: "Step 01",
    title: "Application Review",
    timing: "3–5 days",
    description: "We read every application ourselves. No automated filtering. If your background is relevant, someone from the team will reach out personally.",
  },
  {
    label: "Step 02",
    title: "Intro Call",
    timing: "30 minutes",
    description: "A conversation with one of our leads — not HR. We want to understand how you think about building products with AI, and we want you to ask us anything.",
  },
  {
    label: "Step 03",
    title: "Technical Conversation",
    timing: "60 minutes",
    description: "We talk through a real problem — close to the work we actually do. We're not looking for a perfect answer. We're looking for how you approach ambiguity.",
  },
  {
    label: "Step 04",
    title: "Team Conversation",
    timing: "45 minutes",
    description: "You meet the people you'd work with. Ask anything. We'll do the same. This is about fit in both directions — you should walk away knowing exactly what joining Evren would mean.",
  },
];

export default function HiringProcess() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section
      ref={sectionRef}
      className="bg-evren-warm-white py-[48px] md:py-[64px] lg:py-[100px] px-5 sm:px-6 relative overflow-hidden"
    >
      <div className="max-w-[1100px] mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <span className="block text-[12px] font-heading font-semibold text-evren-rose uppercase tracking-[0.1em] mb-[12px]">
            The Process
          </span>
          <h2 className="font-heading text-[28px] md:text-[32px] font-semibold text-evren-navy-light leading-[1.3] tracking-tight">
            We Respect Your Time. Here&apos;s Exactly What to Expect.
          </h2>
          <p className="font-body text-[16px] text-evren-medium-gray leading-[1.6] max-w-[540px] mx-auto mt-[16px]">
            No automated filtering. No trick questions. No process theatre.
            Four conversations — each with a real purpose.
          </p>
        </motion.div>

        {/* Timeline Container */}
        <div className="mt-[64px] relative">
          {/* Connector Line (Desktop Only) */}
          <div className="hidden lg:block absolute top-[24px] left-[12.5%] right-[12.5%] h-[1px] bg-evren-light-gray z-0">
            <motion.div
              className="h-full bg-evren-peach"
              initial={{ width: "0%" }}
              animate={isInView ? { width: "33%" } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            />
          </div>

          <div className="flex flex-col lg:flex-row gap-0 items-start">
            {STEPS.map((step, idx) => (
              <div
                key={step.label}
                className="relative z-10 flex-1 flex flex-row lg:flex-col items-start lg:items-center text-left lg:text-center gap-[20px] lg:gap-0 w-full mb-[32px] lg:mb-0"
              >
                {/* Step Circle */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1.0 } : {}}
                  transition={{ duration: 0.4, delay: 0.15 * idx }}
                  className="w-[48px] h-[48px] rounded-[50%] bg-evren-navy text-white text-[16px] font-heading font-bold flex items-center justify-center shrink-0"
                >
                  {idx + 1}
                </motion.div>

                {/* Step Content */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.15 * idx + 0.1 }}
                  className="lg:mt-[20px] max-w-[280px] lg:max-w-none"
                >
                  <div className="text-[12px] font-heading font-semibold text-evren-rose uppercase tracking-[0.08em] mb-[6px]">
                    {step.label}
                  </div>
                  <h3 className="text-[18px] font-heading font-semibold text-evren-navy mb-[10px] leading-tight">
                    {step.title}
                  </h3>
                  <div className="inline-block bg-evren-peach-light text-evren-rose text-[12px] font-heading font-medium px-[10px] py-[3px] rounded-[20px] mb-[12px]">
                    {step.timing}
                  </div>
                  <p className="text-[15px] font-body text-evren-medium-gray leading-[1.6] lg:max-w-[220px] mx-auto text-balance">
                    {step.description}
                  </p>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

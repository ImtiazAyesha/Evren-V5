"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const CARDS = [
  {
    tag: "CORE ARCHITECTURE",
    title: "AI-Native by Design",
    body: "You won't be bolting AI onto products that were designed without it. At Evren, intelligence is an architectural decision made at day one. You'll work on systems where the AI layer is as fundamental as the data model.",
  },
  {
    tag: "THE WORK",
    title: "Frontier Work. Real Clients.",
    body: "No internal tools, no maintenance sprints, no feature factories. Every engagement is a new product, a new problem, and a new opportunity to push what's technically possible. Our clients ship products that go live in the world.",
  },
  {
    tag: "THE CULTURE",
    title: "A Team That Transfers Knowledge",
    body: "We take knowledge transfer seriously — which means you'll learn as much as you contribute. Senior engineers share context. Junior engineers get real responsibility. No one hoards information here.",
  },
];

export default function WhyEvren() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-60px" });

  return (
    <section
      ref={sectionRef}
      className="bg-evren-warm-white py-[48px] md:py-[64px] lg:py-[100px] px-5 sm:px-6 relative"
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
            Why Engineers Choose Evren
          </span>
          <h2 className="font-heading text-[28px] md:text-[32px] font-semibold text-evren-navy-light leading-[1.3] tracking-tight">
            You&apos;ll Build Things That Actually Matter.
          </h2>
          <p className="font-body text-[16px] text-evren-medium-gray leading-[1.6] max-w-[560px] mx-auto mt-[16px]">
            Three reasons engineers at the top of their field choose a studio
            over a corporation.
          </p>
        </motion.div>

        {/* Card Grid */}
        <div className="mt-[56px] grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-[24px]">
          {CARDS.map((card, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * idx }}
              className={`bg-evren-warm-white border border-evren-light-gray rounded-[16px] p-[32px] lg:p-[36px] transition-all duration-250 ease-out hover:-translate-y-1 ${
                idx === 2 ? "md:col-span-2 xl:col-span-1" : ""
              }`}
              style={{
                boxShadow: "0 0 0 rgba(0,0,0,0)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = "0 8px 32px rgba(27,42,74,0.08)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = "0 0 0 rgba(0,0,0,0)";
              }}
            >
              {/* Tag */}
              <div className="text-[12px] font-heading font-semibold text-evren-rose uppercase tracking-[0.08em]">
                {card.tag}
              </div>
              
              {/* Title */}
              <h3 className="text-[20px] font-heading font-semibold text-evren-navy leading-[1.4] mt-[12px] tracking-tight">
                {card.title}
              </h3>

              {/* Body */}
              <p className="font-body text-[15px] text-evren-charcoal leading-[1.65] mt-[12px]">
                {card.body}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

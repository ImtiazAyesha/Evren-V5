"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Layers, Cpu, Users, ArrowUpRight } from "lucide-react";

const CARDS = [
  {
    tag: "CORE ARCHITECTURE",
    title: "AI-Native by Design",
    body: "You won't be bolting AI onto products that were designed without it. At Evren, intelligence is an architectural decision made at day one. You'll work on systems where the AI layer is as fundamental as the data model.",
    icon: Cpu,
  },
  {
    tag: "THE WORK",
    title: "Frontier Work. Real Clients.",
    body: "No internal tools, no maintenance sprints, no feature factories. Every engagement is a new product, a new problem, and a new opportunity to push what's technically possible. Our clients ship products that go live in the world.",
    icon: Layers,
  },
  {
    tag: "THE CULTURE",
    title: "A Team That Transfers Knowledge",
    body: "We take knowledge transfer seriously — which means you'll learn as much as you contribute. Senior engineers share context. Junior engineers get real responsibility. No one hoards information here.",
    icon: Users,
  },
];

export default function WhyEvren() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-60px" });

  return (
    <section
      ref={sectionRef}
      className="bg-evren-warm-white py-16 lg:py-24 px-5 sm:px-6 relative"
    >
      <div className="max-w-[1280px] mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <span className="block text-[12px] font-heading font-semibold text-evren-rose uppercase tracking-[0.1em] mb-[16px]">
            Why Engineers Choose Evren
          </span>
          <h2 className="font-heading text-[32px] md:text-[40px] lg:text-[48px] font-semibold text-evren-navy leading-[1.2] tracking-tight max-w-[800px] mx-auto">
            You&apos;ll Build Things That Actually{" "}
            <span className="relative inline-block">
              <span className="relative z-10">Matter.</span>
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
            Three reasons engineers at the top of their field choose a studio over a corporation.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="mt-[48px] lg:mt-[64px] grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-[24px]">
          {CARDS.map((card, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * idx }}
              className={`group bg-white border border-evren-light-gray rounded-[24px] p-[16px] flex flex-col transition-all duration-300 hover:shadow-[0_12px_32px_rgba(27,42,74,0.06)] hover:-translate-y-1 ${
                idx === 2 ? "md:col-span-2 xl:col-span-1" : ""
              }`}
            >
              {/* Feature Hero Container (Minimal 16/9 Sleek Block) */}
              <div className="w-full aspect-[16/9] rounded-[16px] bg-evren-peach flex items-center justify-center mb-[24px] overflow-hidden relative transition-transform duration-500 hover:scale-[1.02]">
                {/* Subtle sheen */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.4)_0%,transparent_60%)] pointer-events-none" />
                
                {/* Embedded Centered Icon (White & Minimal) */}
                <card.icon 
                  size={48} 
                  className="text-white drop-shadow-sm relative z-10 transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-3" 
                  strokeWidth={1.5} 
                />
              </div>

              {/* Text Area */}
              <div className="px-[8px] pb-[12px] flex-1 flex flex-col">
                {/* Super-heading / Tag */}
                <div className="flex items-center gap-2 mb-[10px]">
                  <span className="w-1.5 h-1.5 rounded-full bg-evren-peach shrink-0" />
                  <span className="text-[11px] font-heading font-bold text-evren-navy/60 uppercase tracking-[0.15em]">
                    {card.tag}
                  </span>
                </div>

                {/* Main Heading */}
                <h3 className="text-[20px] md:text-[22px] font-heading font-bold text-evren-navy leading-[1.25] tracking-[-0.01em] mb-[12px]">
                  {card.title}
                </h3>
                
                {/* Body Paragraph */}
                <p className="font-body text-[14px] md:text-[15px] text-evren-charcoal/90 leading-[1.65]">
                  {card.body}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

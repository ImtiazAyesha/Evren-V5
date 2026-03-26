"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence, useInView } from "framer-motion";
import ArrowButton from "@/components/ui/ArrowButton";

// SVG Icons
const ChevronLeftIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 18l-6-6 6-6" />
  </svg>
);

const ChevronRightIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 18l6-6-6-6" />
  </svg>
);

const ArrowUpRightIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M7 17L17 7M17 7H7M17 7V17" />
  </svg>
);

// ═══════════════════════════════════════════════════════════════════════
//  CASE STUDY DATA
// ═══════════════════════════════════════════════════════════════════════

interface CaseStudy {
  title: string;
  metric: string;
  metricLabel: string;
  client: string;
  description: string;
  tags: string[];
  image: string;
  href: string;
}

const CASE_STUDIES: CaseStudy[] = [
  {
    title: "iSeedoc Telehealth",
    metric: "90%",
    metricLabel: "Reduction in Report Analysis Time",
    client:
      "Revolutionizing Healthcare Access: An AI-Powered Virtual Consultation Platform",
    description:
      "Global telehealth innovator iSeedoc partnered with Evren AI to architect an end-to-end, HIPAA-compliant telehealth platform that automates workflows, streamlines consultations, and leverages AI to deliver intelligent healthcare.",
    tags: ["Healthcare", "Next.js", "AI Pipelines"],
    image: "/case studies/case 1.webp",
    href: "/case-studies/iseedoc-telehealth",
  },
  {
    title: "Cyber Threat Engine",
    metric: "$M+",
    metricLabel: "Cyber Risk Mitigated",
    client:
      "Mitigating Multi-Million Dollar Cyber Risk with Proactive AI Threat Detection",
    description:
      "For a high-growth fintech, we deployed a real-time LLM-based detection engine that analyzes and neutralizes sophisticated phishing attacks before they breach enterprise security.",
    tags: ["Cybersecurity", "Python", "LLMs"],
    image: "/case studies/case 2.webp",
    href: "/case-studies/verifiedx-cybersecurity",
  },
];

// ═══════════════════════════════════════════════════════════════════════
//  FEATURED WORK SECTION
// ═══════════════════════════════════════════════════════════════════════

export default function FeaturedWorkSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { amount: 0.15, once: true });

  const LOOP_COUNT = 30;
  const EXTENDED_STUDIES = Array(LOOP_COUNT).fill(CASE_STUDIES).flat();
  const INITIAL_INDEX = Math.floor(LOOP_COUNT / 2) * CASE_STUDIES.length;

  const [activeIndex, setActiveIndex] = useState(INITIAL_INDEX);

  const nextSlide = useCallback(() => setActiveIndex((prev) => prev + 1), []);
  const prevSlide = useCallback(() => setActiveIndex((prev) => prev - 1), []);
  const goToSlide = useCallback((index: number) => {
    setActiveIndex((prev) => {
      const currentMod = prev % CASE_STUDIES.length;
      const diff = index - currentMod;
      return prev + diff;
    });
  }, []);

  // Autoplay functionality
  useEffect(() => {
    if (!isInView) return;
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, [isInView, nextSlide]);

  return (
    <section
      ref={sectionRef}
      id="featured-work"
      className="relative w-full py-10 sm:py-16 md:py-20 bg-evren-warm-white overflow-hidden"
    >
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true, margin: "-60px" }}
           transition={{ duration: 0.6 }}
           className="mb-10 sm:mb-12 flex flex-col sm:flex-row items-start sm:items-end justify-between gap-6"
        >
            <div>
              <span className="text-sm uppercase tracking-widest text-evren-peach font-bold mb-3 sm:mb-4 block">
                Featured Work
              </span>
              <h2 className="text-[2rem] sm:text-4xl md:text-5xl leading-[1.15] text-evren-navy font-heading font-bold">
                Real Products.<br />
                <span className="text-evren-peach">Measurable Impact.</span>
              </h2>
            </div>

            <ArrowButton
              href="/work"
              variant="outline"
              size="sm"
            >
              <span className="hidden sm:inline">View All Work</span>
              <span className="sm:hidden">View All</span>
            </ArrowButton>
        </motion.div>

        {/* Carousel Container */}
        <div className="
          [--slide-w:100%] [--slide-gap:1rem]
          sm:[--slide-w:88%] sm:[--slide-gap:1.5rem]
          md:[--slide-w:85%] 
          lg:[--slide-w:80%] lg:[--slide-gap:2rem]
          relative w-full overflow-hidden pb-4
        ">
            <div 
              className="flex transition-transform duration-700 ease-[cubic-bezier(0.25,1,0.5,1)]"
              style={{ transform: `translateX(calc(${activeIndex} * -1 * (var(--slide-w) + var(--slide-gap))))` }}
            >
              {EXTENDED_STUDIES.map((study: CaseStudy, i: number) => (
                  <div
                    key={i}
                    className={`w-[var(--slide-w)] mr-[var(--slide-gap)] shrink-0 flex flex-col md:flex-row bg-evren-navy rounded-[2rem] overflow-hidden transition-all duration-700 min-h-[400px] ${
                      i !== activeIndex ? "opacity-50 scale-[0.97] pointer-events-none" : "opacity-100 scale-100"
                    }`}
                  >
                    {/* Left: Content */}
                    <div className="w-full md:w-[55%] px-6 py-8 md:px-10 md:py-10 lg:px-12 flex flex-col justify-center h-full relative z-10">
                      <h3 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-white mb-4 sm:mb-6">
                        {study.title}
                      </h3>
                      <p className="text-evren-light-gray font-body text-sm sm:text-base lg:text-lg leading-relaxed mb-6 sm:mb-8 max-w-lg">
                        {study.description}
                      </p>

                      <ArrowButton
                        href={study.href}
                        variant="outline"
                        size="lg"
                        inverted={true}
                        className="w-fit text-[14px] sm:text-base whitespace-nowrap !border-white/30 !text-white hover:!bg-white/10 hover:!border-white transition-all"
                      >
                        View Case Study
                      </ArrowButton>
                    </div>

                    {/* Right: Media Mockup style */}
                    <div className="w-full md:w-[45%] h-full relative bg-evren-navy flex flex-col items-center justify-center p-6 md:p-10 overflow-hidden">
                        {/* Decorative Background blob */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-radial from-evren-peach/20 to-transparent opacity-60 pointer-events-none blur-3xl" />
                        
                        <div 
                          className={`relative w-full aspect-[4/3] md:aspect-auto md:h-full max-h-[400px] rounded-2xl overflow-hidden transition-all duration-700 delay-100 ${
                            i === activeIndex ? "scale-100 opacity-100" : "scale-95 opacity-0"
                          }`}
                        >
                           <Image 
                             src={study.image}
                             alt={study.title}
                             fill
                             className="object-cover object-center"
                           />
                        </div>
                    </div>
                  </div>
              ))}
            </div>
        </div>

        {/* Pagination & Controls */}
        <div className="flex flex-col sm:flex-row items-center justify-between mt-8 md:mt-10 px-2 lg:px-4 gap-4">
           {/* Dots */}
           <div className="flex gap-2 sm:gap-3 items-center">
              {CASE_STUDIES.map((_, i) => (
                <button 
                  key={i} 
                  onClick={() => goToSlide(i)}
                  aria-label={`Go to slide ${i + 1}`}
                  className={`transition-all duration-300 rounded-full border border-evren-navy/20 ${
                    i === (activeIndex % CASE_STUDIES.length) 
                      ? "w-8 sm:w-12 h-2.5 sm:h-3 bg-evren-navy border-evren-navy" 
                      : "w-2.5 sm:w-3 h-2.5 sm:h-3 bg-transparent hover:bg-evren-navy/10 cursor-pointer"
                  }`} 
                />
              ))}
           </div>

           {/* Arrows */}
           <div className="flex gap-3 sm:gap-4">
              <button 
                onClick={prevSlide}
                aria-label="Previous slide"
                className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-evren-navy/15 flex items-center justify-center text-evren-navy hover:bg-evren-navy hover:text-white transition-colors duration-300 group"
              >
                <div className="transform group-hover:-translate-x-1 transition-transform">
                  <ChevronLeftIcon />
                </div>
              </button>
              <button 
                onClick={nextSlide}
                aria-label="Next slide"
                className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-evren-navy/15 flex items-center justify-center text-evren-navy hover:bg-evren-navy hover:text-white transition-colors duration-300 group"
              >
                <div className="transform group-hover:translate-x-1 transition-transform">
                  <ChevronRightIcon />
                </div>
              </button>
           </div>
        </div>

      </div>
    </section>
  );
}


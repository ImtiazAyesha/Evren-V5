"use client";

import { motion, useInView, useScroll, useTransform, type Variants } from "framer-motion";
import { useRef } from "react";
import { TestimonialCarousel } from "@/components/profile-card-testimonial-carousel";

// ─── SPRING CONFIG ──────────────────────────────────────────────────
const SPRING = { type: "spring" as const, stiffness: 100, damping: 20 };

// ─── VARIANTS ───────────────────────────────────────────────────────

const headlineContainer: Variants = {
    hidden: {},
    visible: {
        transition: { staggerChildren: 0.08, delayChildren: 0.05 },
    },
};

const headlineWord: Variants = {
    hidden: { y: "110%", opacity: 0 },
    visible: { y: "0%", opacity: 1, transition: { ...SPRING, duration: 0.5 } },
};

const bodyReveal: Variants = {
    hidden: { opacity: 0, y: 16 },
    visible: { opacity: 1, y: 0, transition: { ...SPRING, delay: 0.25 } },
};

const carouselReveal: Variants = {
    hidden: { opacity: 0, y: 32 },
    visible: { opacity: 1, y: 0, transition: { ...SPRING, delay: 0.35 } },
};

// ─── COMPONENT ──────────────────────────────────────────────────────
export default function PeerReviewSection() {
    const sectionRef = useRef<HTMLElement>(null);
    const isInView = useInView(sectionRef, { amount: 0.3, once: true });

    // Scroll-linked parallax for background
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"],
    });
    const glowY = useTransform(scrollYProgress, [0, 1], [50, -50]);

    const line1Words = "Tested by".split(" ");
    const line2Words = "Industry Leaders.".split(" ");

    return (
        <section ref={sectionRef} id="testimonials" className="relative bg-gray-50/30 py-32 px-6 overflow-hidden" style={{ willChange: "transform" }}>
            {/* Scroll-linked ambient glow */}
            <motion.div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-5xl h-[400px] bg-[#0ABAB5]/5 rounded-full blur-[100px] pointer-events-none z-0"
                style={{ y: glowY }}
            />

            <div className="mx-auto max-w-7xl relative z-10">

                {/* ── HEADLINE: Mask Reveal ─────────────────────── */}
                <motion.div
                    className="flex flex-col items-center text-center mb-16"
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                >
                    <motion.h2
                        variants={headlineContainer}
                        className="font-jakarta text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl mb-6 leading-[1.15] flex flex-wrap justify-center gap-x-3"
                    >
                        {/* Line 1 */}
                        {line1Words.map((word, i) => (
                            <span key={`l1-${i}`} className="inline-block overflow-hidden align-bottom pb-[5px]">
                                <motion.span variants={headlineWord} className="inline-block will-change-transform">
                                    {word}
                                </motion.span>
                            </span>
                        ))}
                        {/* Line 2 — Gradient */}
                        {line2Words.map((word, i) => (
                            <span key={`l2-${i}`} className="inline-block overflow-hidden align-bottom pb-[5px]">
                                <motion.span
                                    variants={headlineWord}
                                    className="inline-block will-change-transform text-transparent bg-clip-text bg-gradient-to-br from-[#0ABAB5] to-teal-400"
                                >
                                    {word}
                                </motion.span>
                            </span>
                        ))}
                    </motion.h2>

                    <motion.p
                        variants={bodyReveal}
                        className="max-w-2xl font-inter text-lg text-gray-600 font-medium tracking-tight"
                    >
                        Real impact from our automated systems out in the wild.
                    </motion.p>
                </motion.div>

                {/* ── CAROUSEL: Slide-up reveal ─────────────────── */}
                <motion.div
                    className="w-full"
                    variants={carouselReveal}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                >
                    <TestimonialCarousel />
                </motion.div>
            </div>
        </section>
    );
}

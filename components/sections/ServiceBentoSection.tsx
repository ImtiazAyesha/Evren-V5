"use client";

import { motion, useInView, type Variants } from "framer-motion";
import { useRef } from "react";
import { Brain, Settings, Layers, ArrowRight, CheckCircle2 } from "lucide-react";

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
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { ...SPRING, delay: 0.3 } },
};

const cardContainer: Variants = {
    hidden: {},
    visible: {
        transition: { staggerChildren: 0.1, delayChildren: 0.15 },
    },
};

const cardItem: Variants = {
    hidden: { opacity: 0, y: 32, scale: 0.97 },
    visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: SPRING,
    },
};

const listContainer: Variants = {
    hidden: {},
    visible: {
        transition: { staggerChildren: 0.08, delayChildren: 0.1 },
    },
};

const listItem: Variants = {
    hidden: { opacity: 0, x: -12 },
    visible: { opacity: 1, x: 0, transition: SPRING },
};

const ctaReveal: Variants = {
    hidden: { opacity: 0, y: 16 },
    visible: { opacity: 1, y: 0, transition: { ...SPRING, delay: 0.4 } },
};

// ─── CARD DATA ──────────────────────────────────────────────────────
const CARDS = [
    {
        icon: Brain,
        title: "Intelligence & Logic",
        label: "THE BRAIN",
        items: ["Machine Learning", "Generative AI", "AI Research & Development"],
        roiFocus: "Turning raw data into predictive foresight.",
        span: "md:col-span-1",
        layout: "vertical" as const,
    },
    {
        icon: Settings,
        title: "Automation & Orchestration",
        label: "THE MUSCLE",
        items: ["Process Automation", "Autonomous Agents", "Chatbots & Conversational AI"],
        roiFocus: "Eliminating manual bottlenecks at 24/7 scale.",
        span: "md:col-span-1",
        layout: "vertical" as const,
        iconHoverRotate: true,
    },
    {
        icon: Layers,
        title: "Infrastructure & Scale",
        label: "THE FOUNDATION",
        items: ["AI-Ready Software Dev", "Computer Vision", "AI Staff Augmentation"],
        roiFocus: "Building the robust core of your AI future.",
        span: "md:col-span-2",
        layout: "horizontal" as const,
    },
];

// ─── COMPONENT ──────────────────────────────────────────────────────
export default function ServiceBentoSection() {
    const sectionRef = useRef<HTMLElement>(null);
    const isInView = useInView(sectionRef, { amount: 0.3, once: true });

    const headlineLine1 = "Architecting Your".split(" ");
    const headlineLine2 = "Competitive Advantage.".split(" ");

    return (
        <section ref={sectionRef} id="services" className="bg-gray-50/30 py-32 px-6" style={{ willChange: "transform" }}>
            <div className="mx-auto max-w-6xl">

                {/* ── HEADLINE: Mask Reveal ─────────────────────── */}
                <motion.div
                    className="mb-20 text-left flex flex-col items-start"
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                >
                    <motion.h2
                        variants={headlineContainer}
                        className="font-jakarta text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 mb-6 leading-[1.15]"
                    >
                        <span className="block">
                            {headlineLine1.map((word, i) => (
                                <span key={`l1-${i}`} className="inline-block overflow-hidden align-bottom pb-[5px]">
                                    <motion.span variants={headlineWord} className="inline-block will-change-transform" style={{ paddingRight: "0.3em" }}>
                                        {word}
                                    </motion.span>
                                </span>
                            ))}
                        </span>
                        <span className="block">
                            {headlineLine2.map((word, i) => (
                                <span key={`l2-${i}`} className="inline-block overflow-hidden align-bottom pb-[5px]">
                                    <motion.span
                                        variants={headlineWord}
                                        className="inline-block will-change-transform text-transparent bg-clip-text bg-gradient-to-br from-[#0ABAB5] to-teal-400"
                                        style={{ paddingRight: "0.3em" }}
                                    >
                                        {word}
                                    </motion.span>
                                </span>
                            ))}
                        </span>
                    </motion.h2>

                    <motion.p variants={bodyReveal} className="font-inter text-lg text-slate-500 max-w-2xl font-medium">
                        A curated suite of enterprise-grade AI capabilities, engineered for scalability and measurable impact.
                    </motion.p>
                </motion.div>

                {/* ── BENTO GRID: Staggered Cards ───────────────── */}
                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12"
                    variants={cardContainer}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                >
                    {CARDS.map((card, cardIndex) => (
                        <motion.div
                            key={cardIndex}
                            variants={cardItem}
                            whileHover={{ y: -5 }}
                            transition={{ type: "spring", stiffness: 300, damping: 25 }}
                            className={`${card.span} group relative flex ${card.layout === "horizontal" ? "flex-col md:flex-row" : "flex-col"} bg-white rounded-[20px] border border-slate-200 p-8 sm:p-10 transition-shadow duration-300 hover:shadow-[0_15px_40px_rgba(10,186,181,0.1)] hover:border-[#0ABAB5]/20 overflow-hidden will-change-transform`}
                        >
                            {/* Background watermark */}
                            <div className={`absolute ${card.layout === "horizontal" ? "top-1/2 -translate-y-1/2 left-1/2 -ml-20 md:left-auto md:ml-0 md:right-0" : "top-0 right-0"} p-8 opacity-5 group-hover:opacity-10 transition-opacity duration-500 pointer-events-none`}>
                                <card.icon size={card.layout === "horizontal" ? 200 : 160} className="text-[#0ABAB5]" />
                            </div>

                            <div className={`${card.layout === "horizontal" ? "flex-1 relative z-10 md:pr-10" : "relative z-10 flex-1"}`}>
                                <motion.div
                                    className={`h-14 w-14 rounded-2xl bg-gradient-to-br from-teal-50 to-white flex items-center justify-center border border-teal-100/50 shadow-sm mb-8 relative z-10 transition-transform duration-500 ${card.iconHoverRotate ? "group-hover:scale-110 group-hover:rotate-45" : "group-hover:scale-110"}`}
                                >
                                    <card.icon size={28} className="text-[#0ABAB5]" />
                                </motion.div>

                                <h3 className="font-jakarta text-2xl font-bold text-gray-900 tracking-tight mb-3">{card.title}</h3>
                                <p className="text-sm text-[#0ABAB5] font-semibold tracking-wide mb-6">{card.label}</p>

                                {/* Staggered list items */}
                                <motion.ul
                                    className={`${card.layout === "horizontal" ? "grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-6 mb-8 md:mb-0" : "space-y-3 mb-8"}`}
                                    variants={listContainer}
                                >
                                    {card.items.map((item, i) => (
                                        <motion.li
                                            key={i}
                                            variants={listItem}
                                            className="flex items-start gap-3 text-slate-600 font-medium"
                                        >
                                            <CheckCircle2 size={18} className="text-[#0ABAB5]/70 shrink-0 mt-0.5" />
                                            <span>{item}</span>
                                        </motion.li>
                                    ))}
                                </motion.ul>
                            </div>

                            {/* Footer / ROI callout */}
                            {card.layout === "horizontal" ? (
                                <div className="md:w-[350px] md:border-l md:border-t-0 border-t border-slate-100 pt-6 md:pt-0 md:pl-10 mt-6 md:mt-0 flex flex-col justify-center relative z-10">
                                    <div className="bg-slate-50 rounded-xl p-6 border border-slate-100">
                                        <div className="flex flex-col gap-2">
                                            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest flex items-center gap-2">
                                                <div className="w-1.5 h-1.5 rounded-full bg-[#0ABAB5] animate-pulse" />
                                                ROI Focus
                                            </span>
                                            <span className="text-base font-semibold text-gray-800 leading-snug">{card.roiFocus}</span>
                                        </div>
                                    </div>
                                </div>
                            ) : (
                                <div className="mt-auto relative z-10 pt-6 border-t border-slate-100">
                                    <div className="flex flex-col gap-1">
                                        <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">ROI Focus</span>
                                        <span className="text-sm font-semibold text-gray-800">{card.roiFocus}</span>
                                    </div>
                                </div>
                            )}
                        </motion.div>
                    ))}
                </motion.div>

                {/* ── CTA ───────────────────────────────────────── */}
                <motion.div
                    variants={ctaReveal}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    className="flex justify-center mt-12"
                >
                    <motion.a
                        href="/services"
                        whileHover={{ y: -2, boxShadow: "0 8px 24px rgba(10,186,181,0.15)" }}
                        whileTap={{ scale: 0.98 }}
                        transition={{ type: "spring", stiffness: 300, damping: 20 }}
                        className="group inline-flex flex-row items-center justify-center gap-2 h-12 px-8 rounded-full bg-white border border-slate-200 text-sm font-semibold text-gray-900 shadow-[0_4px_20px_rgba(0,0,0,0.03)] transition-colors hover:border-[#0ABAB5]/20 will-change-transform"
                    >
                        Explore Methodology
                        <ArrowRight size={16} className="text-[#0ABAB5] group-hover:translate-x-1 transition-transform duration-200" />
                    </motion.a>
                </motion.div>
            </div>
        </section>
    );
}

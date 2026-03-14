"use client";

import { motion, AnimatePresence, useInView, type Variants } from "framer-motion";
import { useState, useRef } from "react";
import { Plus, Minus, Shield, Lock, Database } from "lucide-react";

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

const orbReveal: Variants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { ...SPRING, delay: 0.15 } },
};

const faqContainer: Variants = {
    hidden: {},
    visible: {
        transition: { staggerChildren: 0.1, delayChildren: 0.1 },
    },
};

const faqItem: Variants = {
    hidden: { opacity: 0, y: 20, scale: 0.98 },
    visible: { opacity: 1, y: 0, scale: 1, transition: SPRING },
};

// ─── FAQ DATA ───────────────────────────────────────────────────────

const faqs = [
    {
        question: "Who owns the custom AI models?",
        answer: "Full IP ownership remains with the client.",
    },
    {
        question: "How do you handle data residency and security?",
        answer: "We deploy on your secure infrastructure, HIPAA/GDPR compliant.",
    },
    {
        question: "What is the typical timeline for ROI?",
        answer: "Initial impact within 90 days of deployment.",
    },
    {
        question: "How does the global team of 50+ specialists support us?",
        answer: "24/7 monitoring across TX, Dubai, and Pakistan.",
    },
];

// ─── COMPONENT ──────────────────────────────────────────────────────

export default function ImplementationSpecsSection() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);
    const sectionRef = useRef<HTMLElement>(null);
    const isInView = useInView(sectionRef, { amount: 0.2, once: true });

    const toggleFaq = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    const headlineLine1 = "Frequently".split(" ");
    const headlineLine2 = "Asked Questions.".split(" ");

    return (
        <section ref={sectionRef} className="relative bg-white py-32 px-6 overflow-hidden" style={{ willChange: "transform" }}>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-5xl h-[400px] bg-[#0ABAB5]/5 rounded-full blur-[100px] pointer-events-none z-0"></div>

            <div className="mx-auto max-w-7xl relative z-10 w-full grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">

                {/* ── Left Column: Security Orb ──────────────── */}
                <div className="lg:col-span-5 sticky top-32">
                    <motion.div
                        variants={orbReveal}
                        initial="hidden"
                        animate={isInView ? "visible" : "hidden"}
                    >
                        <div className="relative flex flex-col items-center justify-center p-12 bg-white rounded-[2rem] border border-gray-100 shadow-sm overflow-hidden group">
                            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
                            <div className="absolute inset-0 bg-gradient-to-b from-white/10 to-white/90"></div>

                            {/* The Knowledge Orb */}
                            <div className="relative w-64 h-64 flex items-center justify-center mb-10">
                                <motion.div
                                    animate={{ rotate: 360 }}
                                    transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                                    className="absolute inset-0 rounded-full border border-[#0ABAB5]/20 border-dashed"
                                />
                                <motion.div
                                    animate={{ rotate: -360 }}
                                    transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
                                    className="absolute inset-[15%] rounded-full border border-teal-400/20"
                                />
                                <motion.div
                                    animate={{ rotate: 360 }}
                                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                                    className="absolute inset-[30%] rounded-full border border-[#0ABAB5]/30 border-dotted"
                                />

                                <div className="absolute inset-[25%] rounded-full bg-[#0ABAB5] blur-[40px] opacity-30 animate-pulse"></div>

                                <div className="absolute inset-[25%] rounded-full bg-gradient-to-tr from-[#0ABAB5] to-teal-400 shadow-xl shadow-[#0ABAB5]/20 flex items-center justify-center overflow-hidden z-10 text-white">
                                    <div className="absolute inset-x-0 top-0 h-1/2 bg-white/20 rounded-full blur-[2px]"></div>
                                    <Shield className="w-14 h-14 relative z-10 stroke-[1.5]" />
                                </div>

                                <motion.div
                                    animate={{ rotate: 360 }}
                                    transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                                    className="absolute inset-0"
                                >
                                    <div className="absolute top-0 left-1/2 -ml-2 w-4 h-4 bg-white border-2 border-[#0ABAB5] rounded-full flex items-center justify-center shadow-lg">
                                        <Lock size={8} className="text-[#0ABAB5]" />
                                    </div>
                                    <div className="absolute bottom-0 left-1/2 -ml-2 w-4 h-4 bg-white border-2 border-teal-400 rounded-full flex items-center justify-center shadow-lg">
                                        <Database size={8} className="text-teal-400" />
                                    </div>
                                </motion.div>
                            </div>

                            <div className="flex flex-col items-center text-center relative z-10 mt-4">
                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                                    transition={SPRING}
                                    className="font-inter text-xs font-bold uppercase tracking-[0.25em] text-[#0ABAB5] mb-5 bg-[#0ABAB5]/10 px-4 py-1.5 rounded-full"
                                >
                                    SYSTEM GOVERNANCE & PRIVACY
                                </motion.div>
                                <h3 className="font-jakarta text-2xl lg:text-3xl font-bold text-gray-900 mb-3 tracking-tight">
                                    Enterprise-Grade Security
                                </h3>
                                <p className="font-inter text-gray-500 max-w-sm leading-relaxed text-sm lg:text-base">
                                    Military-grade encryption and strictest compliance protocols integrated directly into the core AI architecture.
                                </p>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* ── Right Column: FAQ Accordion ────────────── */}
                <div className="lg:col-span-7 flex flex-col pt-8 lg:pt-0">

                    {/* Headline */}
                    <motion.div
                        className="flex flex-col mb-12"
                        initial="hidden"
                        animate={isInView ? "visible" : "hidden"}
                    >
                        <motion.h2
                            variants={headlineContainer}
                            className="font-jakarta text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl max-w-2xl leading-[1.15]"
                        >
                            <span className="inline">
                                {headlineLine1.map((word, i) => (
                                    <span key={`l1-${i}`} className="inline-block overflow-hidden align-bottom pb-[5px]">
                                        <motion.span variants={headlineWord} className="inline-block will-change-transform" style={{ paddingRight: "0.3em" }}>
                                            {word}
                                        </motion.span>
                                    </span>
                                ))}
                            </span>
                            {" "}
                            <span className="inline">
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
                    </motion.div>

                    {/* FAQ Items — Staggered */}
                    <motion.div
                        className="flex flex-col space-y-4"
                        variants={faqContainer}
                        initial="hidden"
                        animate={isInView ? "visible" : "hidden"}
                    >
                        {faqs.map((faq, index) => {
                            const isOpen = openIndex === index;
                            return (
                                <motion.div
                                    key={index}
                                    variants={faqItem}
                                    whileHover={!isOpen ? { y: -2 } : undefined}
                                    transition={{ type: "spring", stiffness: 300, damping: 25 }}
                                    className={`overflow-hidden rounded-2xl transition-all duration-300 will-change-transform ${
                                        isOpen
                                            ? "bg-[#0ABAB5]/5 border border-[#0ABAB5]/20 shadow-sm"
                                            : "bg-white border border-gray-100 hover:border-gray-200"
                                    }`}
                                >
                                    <button
                                        onClick={() => toggleFaq(index)}
                                        className="w-full flex items-center justify-between p-6 sm:p-8 text-left focus:outline-none group"
                                    >
                                        <span className={`font-jakarta text-xl tracking-tight transition-colors pr-6 ${
                                            isOpen ? "font-bold text-gray-900" : "font-semibold text-gray-800 group-hover:text-gray-900"
                                        }`}>
                                            {faq.question}
                                        </span>
                                        <motion.div
                                            animate={{ rotate: isOpen ? 180 : 0 }}
                                            transition={{ type: "spring", stiffness: 200, damping: 15 }}
                                            className={`flex-shrink-0 relative flex items-center justify-center w-10 h-10 rounded-full transition-all duration-300 ${
                                                isOpen
                                                    ? "bg-white shadow-sm border border-[#0ABAB5]/20"
                                                    : "bg-gray-50 border border-transparent group-hover:bg-white group-hover:shadow-sm"
                                            }`}
                                        >
                                            {isOpen ? (
                                                <Minus size={20} className="text-[#0ABAB5]" />
                                            ) : (
                                                <Plus size={20} className="text-gray-400 group-hover:text-gray-900 transition-colors" />
                                            )}
                                        </motion.div>
                                    </button>
                                    <AnimatePresence initial={false}>
                                        {isOpen && (
                                            <motion.div
                                                initial={{ height: 0, opacity: 0 }}
                                                animate={{ height: "auto", opacity: 1 }}
                                                exit={{ height: 0, opacity: 0 }}
                                                transition={{ type: "spring", stiffness: 120, damping: 20 }}
                                            >
                                                <div className="px-6 pb-6 sm:px-8 sm:pb-8 pt-0 font-inter text-lg text-gray-600 font-medium leading-relaxed">
                                                    {faq.answer}
                                                </div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </motion.div>
                            );
                        })}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

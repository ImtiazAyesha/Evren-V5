"use client";

import {
    motion,
    useInView,
    useScroll,
    useTransform,
    type Variants,
} from "framer-motion";
import { useRef } from "react";
import {
    ArrowRight,
    ShieldCheck,
    Cpu,
    Globe2,
} from "lucide-react";

// ─── SPRING CONFIG: Expensive, Precise, Snappy ─────────────────────────────
const SPRING = { type: "spring" as const, stiffness: 100, damping: 20 };
const SPRING_SNAPPY = { type: "spring" as const, stiffness: 140, damping: 22 };

// ─── VARIANT OBJECTS ────────────────────────────────────────────────────────

/** Mask-Reveal parent: orchestrates staggered children */
const maskRevealContainer: Variants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.08,
            delayChildren: 0.1,
        },
    },
};

/** Individual word slides up from a clipped overflow line */
const maskRevealWord: Variants = {
    hidden: { y: "110%", opacity: 0 },
    visible: {
        y: "0%",
        opacity: 1,
        transition: { ...SPRING, duration: 0.55 },
    },
};

/** Left-column body copy fade-slide */
const bodyReveal: Variants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { ...SPRING, delay: 0.35 },
    },
};

/** Staggered trust badges container */
const trustBadgeContainer: Variants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.5,
        },
    },
};

/** Individual trust badge */
const trustBadgeItem: Variants = {
    hidden: { opacity: 0, x: -20, scale: 0.95 },
    visible: {
        opacity: 1,
        x: 0,
        scale: 1,
        transition: SPRING,
    },
};

/** CTA button reveal */
const ctaReveal: Variants = {
    hidden: { opacity: 0, y: 20, scale: 0.96 },
    visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: { ...SPRING, delay: 0.5 },
    },
};

// ─── TRUST BADGES DATA ──────────────────────────────────────────────────────
const trustBadges = [
    {
        icon: ShieldCheck,
        text: "Zero Risk. No obligation scoping.",
    },
    {
        icon: Cpu,
        text: "Direct access to Senior Engineers.",
    },
    {
        icon: Globe2,
        text: "50+ Enterprise Projects Delivered.",
    },
];

// ─── COMPONENT ──────────────────────────────────────────────────────────────
export default function ConversionSection() {
    const sectionRef = useRef<HTMLElement>(null);
    const headlineRef = useRef<HTMLHeadingElement>(null);

    // Viewport detection: amount 0.3, once true
    const isInView = useInView(sectionRef, { amount: 0.3, once: true });

    // Scroll-linked parallax for background orbs
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"],
    });

    const orbY1 = useTransform(scrollYProgress, [0, 1], [80, -80]);
    const orbY2 = useTransform(scrollYProgress, [0, 1], [-40, 60]);
    const orbScale = useTransform(scrollYProgress, [0, 0.5, 1], [0.9, 1.1, 0.95]);

    // Split headline into words for mask reveal
    const headlineLine1 = "Ready to Build Intelligence".split(" ");
    const headlineLine2 = "Into Your Operations?".split(" ");

    return (
        <section
            ref={sectionRef}
            id="contact"
            className="relative w-full border-b border-[#E2E8F0] py-24 md:py-32 overflow-hidden bg-gray-50/50 flex flex-col items-center justify-center"
            style={{ willChange: "transform" }}
        >
            {/* ── Scroll-Linked Parallax Background Orbs ─────────────────── */}
            <motion.div
                className="absolute top-1/4 left-1/5 w-[500px] h-[500px] bg-[#0ABAB5]/[0.06] rounded-full blur-[100px] pointer-events-none z-0"
                style={{ y: orbY1, scale: orbScale }}
            />
            <motion.div
                className="absolute bottom-1/4 right-1/5 w-[400px] h-[400px] bg-[#0891B2]/[0.04] rounded-full blur-[120px] pointer-events-none z-0"
                style={{ y: orbY2 }}
            />

            {/* ── Subtle Grid Overlay ────────────────────────────────────── */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(15,23,42,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(15,23,42,0.02)_1px,transparent_1px)] bg-[size:48px_48px] [mask-image:radial-gradient(ellipse_at_center,white_30%,transparent_70%)] pointer-events-none z-0" />

            <div className="relative z-10 w-full max-w-4xl px-6 mx-auto flex flex-col items-center text-center">

                <motion.div
                    className="flex flex-col items-center"
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                >
                    {/* ── Mask-Reveal Headline ──────────────────────────── */}
                    <motion.h2
                        ref={headlineRef}
                        variants={maskRevealContainer}
                        className="font-jakarta text-4xl md:text-5xl lg:text-6xl text-[#0F172A] font-extrabold tracking-tight mb-6 leading-[1.15]"
                    >
                        {/* Line 1 */}
                        <span className="block">
                            {headlineLine1.map((word, i) => (
                                <span
                                    key={`l1-${i}`}
                                    className="inline-block overflow-hidden align-bottom pb-[5px]"
                                >
                                    <motion.span
                                        variants={maskRevealWord}
                                        className="inline-block will-change-transform"
                                        style={{ paddingRight: "0.3em" }}
                                    >
                                        {word}
                                    </motion.span>
                                </span>
                            ))}
                        </span>

                        {/* Line 2 — Gradient accent */}
                        <span className="block">
                            {headlineLine2.map((word, i) => (
                                <span
                                    key={`l2-${i}`}
                                    className="inline-block overflow-hidden align-bottom pb-[5px]"
                                >
                                    <motion.span
                                        variants={maskRevealWord}
                                        className="inline-block will-change-transform text-transparent bg-clip-text bg-gradient-to-r from-[#0ABAB5] to-teal-400"
                                        style={{ paddingRight: "0.3em" }}
                                    >
                                        {word}
                                    </motion.span>
                                </span>
                            ))}
                        </span>
                    </motion.h2>

                    {/* ── Subheadline ──────────────────────────────────────── */}
                    <motion.p
                        variants={bodyReveal}
                        className="font-inter text-slate-600 text-lg md:text-xl font-medium mb-12 leading-relaxed max-w-2xl"
                    >
                        Let&apos;s turn your complexity into clarity. From first
                        call to deployed product in 12 weeks.
                    </motion.p>

                    {/* ── CTA Button ───────────────────────────────────────── */}
                    <motion.div variants={ctaReveal} className="mb-14">
                        <motion.a
                            href="#schedule"
                            className="group inline-flex h-14 items-center justify-center gap-3 rounded-xl bg-gray-900 px-10 font-inter text-sm font-bold text-white transition-colors will-change-transform hover:bg-gray-800"
                            whileHover={{
                                y: -3,
                                boxShadow:
                                    "0 12px 28px rgba(15, 23, 42, 0.25)",
                            }}
                            whileTap={{ scale: 0.98, y: 0 }}
                            transition={{
                                type: "spring",
                                stiffness: 300,
                                damping: 20,
                            }}
                        >
                            Book a Strategy Call
                            <ArrowRight
                                size={16}
                                className="text-[#0ABAB5] group-hover:translate-x-1 transition-transform duration-200"
                            />
                        </motion.a>
                    </motion.div>

                    {/* ── Trust Badges — Horizontal on desktop ─────────────── */}
                    <motion.div
                        variants={trustBadgeContainer}
                        className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-6 sm:gap-10 text-slate-600 font-inter text-sm font-semibold tracking-wide"
                    >
                        {trustBadges.map((badge, index) => (
                            <motion.div
                                key={index}
                                variants={trustBadgeItem}
                                className="flex items-center gap-3 group"
                                whileHover={{ y: -2 }}
                                transition={{ type: "spring", stiffness: 300, damping: 25 }}
                            >
                                <div className="w-9 h-9 rounded-full bg-white shadow-sm border border-slate-100 flex items-center justify-center transition-shadow duration-300 group-hover:shadow-md group-hover:shadow-[#0ABAB5]/10 group-hover:border-[#0ABAB5]/30">
                                    <badge.icon className="w-4 h-4 text-[#0ABAB5]" />
                                </div>
                                <span className="transition-colors duration-200 group-hover:text-slate-800">
                                    {badge.text}
                                </span>
                            </motion.div>
                        ))}
                    </motion.div>
                </motion.div>
            </div>

            {/* ── Decorative SVG Line — Scroll-Linked Path Drawing ──────── */}
            <SVGAccentLine scrollYProgress={scrollYProgress} />
        </section>
    );
}

// ─── SCROLL-LINKED SVG LINE COMPONENT ───────────────────────────────────────
function SVGAccentLine({
    scrollYProgress,
}: {
    scrollYProgress: ReturnType<typeof useScroll>["scrollYProgress"];
}) {
    const pathLength = useTransform(scrollYProgress, [0.1, 0.7], [0, 1]);
    const pathOpacity = useTransform(scrollYProgress, [0.05, 0.15, 0.8, 0.95], [0, 0.6, 0.6, 0]);

    return (
        <svg
            className="absolute bottom-0 left-0 w-full h-full pointer-events-none z-0"
            viewBox="0 0 1440 800"
            preserveAspectRatio="none"
            fill="none"
        >
            <defs>
                <linearGradient
                    id="conversion-line-gradient"
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="100%"
                >
                    <stop offset="0%" stopColor="#0ABAB5" stopOpacity="0" />
                    <stop offset="30%" stopColor="#0ABAB5" stopOpacity="0.4" />
                    <stop offset="70%" stopColor="#0891B2" stopOpacity="0.3" />
                    <stop offset="100%" stopColor="#0891B2" stopOpacity="0" />
                </linearGradient>
            </defs>
            <motion.path
                d="M -50 100 Q 200 300 400 250 T 800 400 T 1200 300 T 1500 500"
                stroke="url(#conversion-line-gradient)"
                strokeWidth="2"
                strokeLinecap="round"
                fill="none"
                style={{
                    pathLength,
                    opacity: pathOpacity,
                }}
            />
        </svg>
    );
}

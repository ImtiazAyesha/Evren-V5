"use client";

import {
    motion,
    useMotionValue,
    useTransform,
    animate,
    useInView,
    useScroll,
    type Variants,
} from "framer-motion";
import { Activity, ShieldCheck, MapPin, Globe, ArrowUpRight, CheckCircle2, Bot } from "lucide-react";
import { useEffect, useRef } from "react";

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
    visible: { opacity: 1, y: 0, transition: { ...SPRING, delay: 0.2 } },
};

const dashboardReveal: Variants = {
    hidden: { opacity: 0, y: 40, scale: 0.97 },
    visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: { ...SPRING, delay: 0.15 },
    },
};

const moduleContainer: Variants = {
    hidden: {},
    visible: {
        transition: { staggerChildren: 0.1, delayChildren: 0.3 },
    },
};

const moduleItem: Variants = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0, transition: SPRING },
};

const logContainer: Variants = {
    hidden: {},
    visible: {
        transition: { staggerChildren: 0.15, delayChildren: 0.5 },
    },
};

const logItem: Variants = {
    hidden: { opacity: 0, x: -16 },
    visible: { opacity: 1, x: 0, transition: SPRING },
};

const proofStripContainer: Variants = {
    hidden: {},
    visible: {
        transition: { staggerChildren: 0.1, delayChildren: 0.1 },
    },
};

const proofCard: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: SPRING },
};

// ─── COUNTER COMPONENT ─────────────────────────────────────────────

function Counter({ from, to, duration = 2, prefix = "", suffix = "" }: { from: number, to: number, duration?: number, prefix?: string, suffix?: string }) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.3 });
    const count = useMotionValue(from);
    const rounded = useTransform(count, (latest) => `${prefix}${Math.round(latest).toLocaleString()}${suffix}`);

    useEffect(() => {
        if (isInView) {
            const controls = animate(count, to, { duration, ease: "easeOut" });
            return controls.stop;
        }
    }, [count, to, duration, isInView]);

    return <motion.span ref={ref}>{rounded}</motion.span>;
}

// ─── COMPONENT ──────────────────────────────────────────────────────

export default function AuthorityMockupSection() {
    const sectionRef = useRef<HTMLElement>(null);
    const isInView = useInView(sectionRef, { amount: 0.2, once: true });

    // Scroll-linked parallax
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"],
    });
    const glowY = useTransform(scrollYProgress, [0, 1], [40, -40]);

    const headerLine1 = "Real results.".split(" ");
    const headerLine2 = "Live in your stack.".split(" ");

    return (
        <section ref={sectionRef} id="results" className="bg-[#F1F5F9] py-32 px-6 overflow-hidden relative" style={{ willChange: "transform" }}>
            {/* Scroll-linked ambient glow */}
            <motion.div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-5xl h-[400px] bg-[#0ABAB5]/5 rounded-full blur-[100px] pointer-events-none z-0"
                style={{ y: glowY }}
            />

            <div className="mx-auto max-w-6xl relative z-10">

                {/* ── HEADER: Mask Reveal + Staggered ────────── */}
                <motion.div
                    className="mb-20 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center"
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                >
                    <div>
                        <motion.h2
                            variants={headlineContainer}
                            className="font-jakarta text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl leading-[1.15]"
                        >
                            <span className="block">
                                {headerLine1.map((word, i) => (
                                    <span key={`l1-${i}`} className="inline-block overflow-hidden align-bottom pb-[5px]">
                                        <motion.span variants={headlineWord} className="inline-block will-change-transform" style={{ paddingRight: "0.3em" }}>
                                            {word}
                                        </motion.span>
                                    </span>
                                ))}
                            </span>
                            <span className="block">
                                {headerLine2.map((word, i) => (
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
                    </div>
                    <motion.div variants={bodyReveal}>
                        <p className="font-inter text-lg text-slate-600 font-medium leading-relaxed max-w-lg">
                            This is unmatched visibility. Watch your operational efficiency scale in real-time as our deployed agents compound value.
                        </p>
                    </motion.div>
                </motion.div>

                {/* ── DASHBOARD UI ────────────────────────────── */}
                <motion.div
                    variants={dashboardReveal}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                >
                    <div className="overflow-hidden rounded-[24px] border border-slate-200 bg-white shadow-xl shadow-[#0ABAB5]/5 flex flex-col mb-12 relative">
                        {/* Chrome / Top Bar */}
                        <div className="flex items-center justify-between border-b border-slate-100 bg-slate-50/80 backdrop-blur-sm px-6 py-4">
                            <div className="flex items-center gap-3">
                                <div className="flex gap-2">
                                    <div className="h-3 w-3 rounded-full bg-red-400" />
                                    <div className="h-3 w-3 rounded-full bg-amber-400" />
                                    <div className="h-3 w-3 rounded-full bg-emerald-400" />
                                </div>
                                <div className="hidden sm:flex ml-4 h-6 px-3 rounded bg-white border border-slate-200 items-center">
                                    <span className="font-mono text-[10px] text-slate-500 tracking-widest uppercase">system://terminal/live</span>
                                </div>
                            </div>
                            <div className="flex items-center gap-2 rounded bg-emerald-50 border border-emerald-100 px-3 py-1 shadow-sm">
                                <span className="h-2 w-2 rounded-full bg-[#0ABAB5] animate-ping opacity-75 absolute" />
                                <span className="h-2 w-2 rounded-full bg-[#0ABAB5] relative" />
                                <span className="font-mono text-[10px] uppercase font-bold text-[#0ABAB5] tracking-widest">Connected</span>
                            </div>
                        </div>

                        {/* Dashboard Modules — Staggered */}
                        <motion.div
                            className="p-6 md:p-10 grid grid-cols-1 lg:grid-cols-12 gap-6 relative z-10 w-full"
                            variants={moduleContainer}
                            initial="hidden"
                            animate={isInView ? "visible" : "hidden"}
                        >
                            {/* Module 1: ROI Tracker */}
                            <motion.div
                                variants={moduleItem}
                                whileHover={{ y: -3 }}
                                transition={{ type: "spring", stiffness: 300, damping: 25 }}
                                className="lg:col-span-5 bg-slate-50/50 border border-slate-200/60 rounded-2xl p-6 lg:p-8 flex flex-col justify-center relative overflow-hidden will-change-transform"
                            >
                                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-[#0ABAB5] opacity-5 blur-[60px] rounded-full pointer-events-none"></div>

                                <p className="font-mono text-xs text-slate-500 uppercase tracking-widest mb-2 flex items-center gap-2">
                                    <Activity size={14} className="text-[#0ABAB5]" />
                                    Revenue Influenced
                                </p>
                                <div className="font-jakarta text-5xl sm:text-6xl font-black text-slate-900 tracking-tight mb-6 relative z-10">
                                    <Counter from={1500000} to={2400000} duration={3} prefix="$" suffix="+" />
                                </div>

                                <div className="w-full flex flex-col border-t border-slate-200 pt-6 mt-auto">
                                    <div className="flex items-center justify-between mb-3">
                                        <span className="font-mono text-[10px] text-slate-500 uppercase">Growth Trajectory</span>
                                        <div className="flex items-center gap-1 text-[#0ABAB5]">
                                            <ArrowUpRight size={14} />
                                            <span className="font-mono text-xs font-bold">+41%</span>
                                        </div>
                                    </div>
                                    <div className="h-10 w-full relative flex items-end mt-1">
                                        <svg className="w-full h-full overflow-visible" preserveAspectRatio="none" viewBox="0 0 100 100">
                                            <defs>
                                                <linearGradient id="sparklineGrad" x1="0" y1="0" x2="0" y2="1">
                                                    <stop offset="0%" stopColor="#0ABAB5" stopOpacity="0.15" />
                                                    <stop offset="100%" stopColor="#0ABAB5" stopOpacity="0" />
                                                </linearGradient>
                                            </defs>
                                            <path d="M 0 100 L 0 80 C 25 80, 40 50, 60 60 C 80 70, 90 20, 100 10 L 100 100 Z" fill="url(#sparklineGrad)" />
                                            <path d="M 0 80 C 25 80, 40 50, 60 60 C 80 70, 90 20, 100 10" fill="none" stroke="#0ABAB5" strokeWidth="2" vectorEffect="non-scaling-stroke" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                        <div className="absolute w-2.5 h-2.5 rounded-full bg-white border-[2px] border-[#0ABAB5] shadow-[0_0_8px_rgba(10,186,181,0.6)] animate-pulse" style={{ top: '10%', right: '0', transform: 'translate(50%, -50%)' }} />
                                    </div>
                                </div>
                            </motion.div>

                            {/* Center Stack */}
                            <div className="lg:col-span-7 flex flex-col gap-6">

                                {/* Module 2: Agent Log — Staggered entries */}
                                <motion.div
                                    variants={moduleItem}
                                    className="bg-slate-50/50 border border-slate-200/60 rounded-2xl p-6 flex flex-col flex-1 relative overflow-hidden"
                                >
                                    <p className="font-mono text-xs text-slate-500 uppercase tracking-widest mb-6 border-b border-slate-200 pb-4 flex items-center gap-2">
                                        <Bot size={14} className="text-[#0ABAB5]" />
                                        Live Agent Audit Log
                                    </p>
                                    <motion.div
                                        className="flex flex-col gap-4 font-mono text-sm"
                                        variants={logContainer}
                                        initial="hidden"
                                        animate={isInView ? "visible" : "hidden"}
                                    >
                                        <motion.div variants={logItem} className="flex items-start gap-3">
                                            <span className="text-slate-400 shrink-0">[09:14:02]</span>
                                            <span className="text-blue-600 shrink-0 font-bold">Agent_Legal:</span>
                                            <span className="text-slate-600">14.2 hours recovered from document intake.</span>
                                        </motion.div>
                                        <motion.div variants={logItem} className="flex items-start gap-3">
                                            <span className="text-slate-400 shrink-0">[09:15:30]</span>
                                            <span className="text-[#0ABAB5] shrink-0 font-bold">Agent_Sales:</span>
                                            <span className="text-slate-600">Lead scoring complete. <span className="text-teal-800 bg-teal-50 px-1 rounded border border-teal-100">+12 High-intent signals</span> found.</span>
                                        </motion.div>
                                        <motion.div variants={logItem} className="flex items-start gap-3">
                                            <span className="text-slate-400 shrink-0">[09:16:11]</span>
                                            <span className="text-emerald-600 shrink-0 font-bold">Security:</span>
                                            <span className="text-slate-600 flex items-center gap-1"><ShieldCheck size={14} className="text-emerald-500 inline" /> HIPAA Compliance Shield Verified.</span>
                                        </motion.div>
                                    </motion.div>
                                    <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-slate-50/90 to-transparent pointer-events-none"></div>
                                </motion.div>

                                {/* Module 3: Global Hubs */}
                                <motion.div
                                    variants={moduleItem}
                                    whileHover={{ y: -2 }}
                                    transition={{ type: "spring", stiffness: 300, damping: 25 }}
                                    className="bg-slate-50/50 border border-slate-200/60 rounded-2xl p-5 flex items-center justify-between shrink-0 overflow-hidden relative will-change-transform"
                                >
                                    <div className="absolute -right-10 -bottom-10 opacity-[0.03] text-slate-900 pointer-events-none">
                                        <Globe size={180} />
                                    </div>
                                    <div className="flex items-center gap-3 relative z-10">
                                        <div className="h-8 w-8 rounded bg-white border border-slate-200 flex items-center justify-center shadow-sm">
                                            <MapPin size={14} className="text-slate-400" />
                                        </div>
                                        <div>
                                            <p className="font-mono text-[10px] text-slate-500 uppercase tracking-widest mb-1">Infrastructure</p>
                                            <p className="font-jakarta font-bold text-slate-900 text-sm">24/7 Human-in-the-loop Monitoring.</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-6 relative z-10 px-4">
                                        {["TX", "DXB", "LHE"].map((hub) => (
                                            <div key={hub} className="flex flex-col items-center gap-1">
                                                <div className="h-2 w-2 rounded-full bg-[#0ABAB5] shadow-[0_0_8px_rgba(10,186,181,0.4)]" />
                                                <span className="font-mono text-[9px] text-slate-500 uppercase font-bold">{hub}</span>
                                            </div>
                                        ))}
                                    </div>
                                </motion.div>
                            </div>
                        </motion.div>
                    </div>
                </motion.div>

                {/* ── PROOF STRIP: Staggered Cards ────────────── */}
                <motion.div
                    variants={proofStripContainer}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                >
                    <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-slate-200 bg-white border border-slate-200 rounded-2xl shadow-sm overflow-hidden">
                        {[
                            { sector: "Legal Sector", stat: "15%", text: "recovery of unbillable time for Goldstein & Associates." },
                            { sector: "Construction", stat: "40%", text: "reduction in on-site incidents via AI safety monitoring." },
                            { sector: "Agency & Marketing", stat: "+41%", text: "Lead Generation Volume for Elite Marketing Partners." },
                        ].map((proof, i) => (
                            <motion.div
                                key={i}
                                variants={proofCard}
                                whileHover={{ backgroundColor: "rgba(10,186,181,0.02)" }}
                                className="p-8 transition-colors will-change-transform"
                            >
                                <p className="font-mono text-[10px] uppercase font-bold text-slate-400 tracking-widest mb-3 flex items-center gap-1.5">
                                    <CheckCircle2 size={12} className="text-[#0ABAB5]" />
                                    {proof.sector}
                                </p>
                                <p className="font-inter text-slate-700 font-semibold leading-relaxed text-sm">
                                    <span className="text-[#0ABAB5] font-bold text-lg inline-block mr-1">{proof.stat}</span>
                                    {proof.text}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

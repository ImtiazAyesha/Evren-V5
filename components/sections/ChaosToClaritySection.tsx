"use client";

import { useState, useRef } from "react";
import { motion, useInView, useScroll, useTransform, type Variants } from "framer-motion";
import { Database, FileJson, FileText, Activity } from "lucide-react";

// ─── SPRING CONFIG ──────────────────────────────────────────────────
const SPRING = { type: "spring" as const, stiffness: 100, damping: 20 };

// ─── VARIANT OBJECTS ────────────────────────────────────────────────

/** Mask-reveal headline container */
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

/** Body copy reveal */
const bodyReveal: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { ...SPRING, delay: 0.3 } },
};

/** Staggered nodes container */
const nodesContainer: Variants = {
    hidden: {},
    visible: {
        transition: { staggerChildren: 0.1, delayChildren: 0.15 },
    },
};

const nodeItem: Variants = {
    hidden: { opacity: 0, x: -24, scale: 0.96 },
    visible: { opacity: 1, x: 0, scale: 1, transition: SPRING },
};

/** Center stack plates */
const plateContainer: Variants = {
    hidden: {},
    visible: {
        transition: { staggerChildren: 0.12, delayChildren: 0.2 },
    },
};

const plateItem: Variants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: { opacity: 1, y: 0, scale: 1, transition: SPRING },
};

/** Console reveal */
const consoleReveal: Variants = {
    hidden: { opacity: 0, x: 40, scale: 0.97 },
    visible: {
        opacity: 1,
        x: 0,
        scale: 1,
        transition: { ...SPRING, delay: 0.3 },
    },
};

// ─── COMPONENT ──────────────────────────────────────────────────────

export default function ChaosToClaritySection() {
    const [hoveredNode, setHoveredNode] = useState<number | null>(null);
    const sectionRef = useRef<HTMLElement>(null);
    const headlineRef = useRef<HTMLDivElement>(null);

    // Viewport detection
    const isInView = useInView(sectionRef, { amount: 0.3, once: true });

    // Scroll-linked parallax for background blobs
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"],
    });
    const blobY = useTransform(scrollYProgress, [0, 1], [60, -60]);

    // Words for mask reveal
    const line1Words = "Systemic Order.".split(" ");
    const line2Words = "Engineering Precision.".split(" ");

    return (
        <section
            ref={sectionRef}
            id="chaos-to-clarity"
            className="bg-[#FFFFFF] py-32 px-6 overflow-hidden relative border-y border-gray-100"
            style={{ willChange: "transform" }}
        >
            <div className="mx-auto max-w-7xl relative z-10 flex flex-col">

                {/* ── HEADLINE: Mask Reveal ─────────────────────────── */}
                <motion.div
                    ref={headlineRef}
                    className="mb-16 max-w-3xl"
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                >
                    <motion.h2
                        variants={headlineContainer}
                        className="font-jakarta text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-[54px] mb-6 leading-[1.15]"
                    >
                        {/* Line 1 */}
                        <span className="block">
                            {line1Words.map((word, i) => (
                                <span key={`l1-${i}`} className="inline-block overflow-hidden align-bottom pb-[5px]">
                                    <motion.span
                                        variants={headlineWord}
                                        className="inline-block will-change-transform"
                                        style={{ paddingRight: "0.3em" }}
                                    >
                                        {word}
                                    </motion.span>
                                </span>
                            ))}
                        </span>
                        {/* Line 2 — Gradient */}
                        <span className="block">
                            {line2Words.map((word, i) => (
                                <span key={`l2-${i}`} className="inline-block overflow-hidden align-bottom pb-[5px]">
                                    <motion.span
                                        variants={headlineWord}
                                        className="inline-block will-change-transform text-transparent bg-clip-text bg-gradient-to-r from-[#0ABAB5] to-teal-400 drop-shadow-sm"
                                        style={{ paddingRight: "0.3em" }}
                                    >
                                        {word}
                                    </motion.span>
                                </span>
                            ))}
                        </span>
                    </motion.h2>

                    <motion.p
                        variants={bodyReveal}
                        className="font-inter text-lg text-gray-600 font-medium leading-relaxed"
                    >
                        <strong className="text-gray-900 font-bold">Stop the &quot;Alpha&quot; fluff. Let&apos;s go harder.</strong> We don&apos;t just organize data; we execute logic. Evren AI transforms unstructured noise into actionable triggers for enterprise ROI.
                    </motion.p>
                </motion.div>

                {/* ── Technical Schematic Layout ─────────────────────── */}
                <div className="relative w-full min-h-[500px] rounded-3xl p-4 sm:p-8 select-none">
                    <div className="flex flex-col lg:flex-row items-stretch justify-between gap-8 h-full relative z-10 w-full lg:min-h-[460px]">

                        {/* ── COLUMN 1: Ingest Nodes (Staggered) ──── */}
                        <motion.div
                            className="w-full lg:w-[28%] flex flex-col justify-center gap-6 relative z-20"
                            variants={nodesContainer}
                            initial="hidden"
                            animate={isInView ? "visible" : "hidden"}
                        >
                            <div className="flex items-center gap-2 relative z-10 pl-2 -translate-y-6">
                                <div className="bg-gray-100/80 px-2 py-0.5 rounded-md border border-gray-200 backdrop-blur-sm shadow-sm">
                                    <h3 className="font-mono text-[11px] text-gray-500 font-semibold tracking-widest uppercase">Unstructured Ingest</h3>
                                </div>
                            </div>
                            {[
                                { id: 1, title: 'raw_data.json', icon: FileJson, type: "logistics" },
                                { id: 2, title: 'api_stream.ws', icon: Activity, type: "fraud" },
                                { id: 3, title: 'legacy_db.sql', icon: Database, type: "pricing" },
                                { id: 4, title: 'sys_log.pdf', icon: FileText, type: "pricing" }
                            ].map((node) => {
                                const isActive = hoveredNode === node.id;
                                return (
                                    <motion.div
                                        key={node.id}
                                        variants={nodeItem}
                                        onMouseEnter={() => setHoveredNode(node.id)}
                                        onMouseLeave={() => setHoveredNode(null)}
                                        whileHover={{ y: -4, scale: 1.02 }}
                                        transition={{ type: "spring", stiffness: 300, damping: 25 }}
                                        className={`relative flex items-center gap-4 p-4 rounded-xl border transition-all duration-300 cursor-pointer backdrop-blur-xl will-change-transform ${isActive ? 'bg-white/95 border-[#0ABAB5] shadow-[0_0_20px_rgba(10,186,181,0.2)] z-10' : 'bg-white/60 border-white/60 shadow-[inset_0_1px_1px_rgba(255,255,255,0.9),0_4px_12px_rgba(0,0,0,0.03)] hover:bg-white/80 hover:border-teal-200'}`}
                                    >
                                        <div className={`p-2 rounded-lg transition-colors bg-gradient-to-br border shadow-inner ${isActive ? 'from-teal-50 to-teal-100 text-[#0ABAB5] border-teal-200' : 'from-gray-50/80 to-gray-100/80 border-white/80 text-gray-400'}`}>
                                            <node.icon size={20} />
                                        </div>
                                        <span className={`font-mono text-[13px] font-bold tracking-wider ${isActive ? 'text-[#0ABAB5]' : 'text-gray-600'}`}>
                                            {node.title}
                                        </span>
                                        {isActive && (
                                            <motion.div
                                                className="absolute -inset-[1px] border border-[#0ABAB5]/40 rounded-xl pointer-events-none"
                                                animate={{ opacity: [0, 1, 0], scale: [0.98, 1.02, 1.05] }}
                                                transition={{ duration: 1.5, repeat: Infinity }}
                                            />
                                        )}
                                    </motion.div>
                                )
                            })}
                        </motion.div>

                        {/* ── SVG LINES: Col 1 → Col 2 ───────────── */}
                        <div className="hidden lg:block absolute left-[28%] right-[66%] top-0 bottom-0 pointer-events-none z-0">
                            <svg className="w-full h-full" viewBox="0 0 100 460" preserveAspectRatio="none">
                                {[
                                    { id: 1, y1: 106, y2: 69 },
                                    { id: 2, y1: 189, y2: 230 },
                                    { id: 3, y1: 271, y2: 230 },
                                    { id: 4, y1: 354, y2: 391 }
                                ].map((line) => {
                                    const isActive = hoveredNode === line.id;
                                    return (
                                        <g key={line.id}>
                                            <path
                                                d={`M 0 ${line.y1} C 40 ${line.y1}, 60 ${line.y2}, 100 ${line.y2}`}
                                                fill="none"
                                                stroke={isActive ? '#0ABAB5' : '#cbd5e1'}
                                                strokeWidth={isActive ? "2" : "1.5"}
                                                vectorEffect="non-scaling-stroke"
                                                strokeDasharray="4 4"
                                                className="line-flow-animation"
                                                style={{ animationDuration: isActive ? '1s' : '3s' }}
                                                opacity={isActive ? 1 : 0.7}
                                            />
                                            {isActive && (
                                                <circle cx="0" cy="0" r="3" fill="#0ABAB5">
                                                    <animateMotion
                                                        dur="1.2s"
                                                        repeatCount="indefinite"
                                                        path={`M 0 ${line.y1} C 40 ${line.y1}, 60 ${line.y2}, 100 ${line.y2}`}
                                                    />
                                                </circle>
                                            )}
                                        </g>
                                    );
                                })}
                            </svg>
                        </div>

                        {/* ── COLUMN 2: Evren Stack (Staggered Plates) ── */}
                        <motion.div
                            className="w-full lg:w-[34%] flex flex-col justify-between items-center relative z-20 py-4 lg:py-0"
                            variants={plateContainer}
                            initial="hidden"
                            animate={isInView ? "visible" : "hidden"}
                        >
                            {/* Background Blobs */}
                            <motion.div
                                className="absolute inset-0 pointer-events-none overflow-hidden z-0 flex items-center justify-center opacity-30"
                                style={{ y: blobY }}
                            >
                                <div className="absolute w-[200px] h-[200px] bg-[#0ABAB5]/40 rounded-full blur-[80px] mesh-blob"></div>
                                <div className="absolute w-[150px] h-[150px] bg-teal-400/30 rounded-full blur-[60px] mesh-blob-2 translate-x-[40px] translate-y-[-40px]"></div>
                            </motion.div>

                            {/* Plate 3: Logic Execution */}
                            <motion.div
                                variants={plateItem}
                                whileHover={{ y: -4 }}
                                transition={{ type: "spring", stiffness: 300, damping: 25 }}
                                className="w-full relative h-[130px] bg-white/40 backdrop-blur-2xl border border-white/60 shadow-[inset_0_1px_1px_rgba(255,255,255,0.9),0_8px_32px_rgba(0,0,0,0.06)] rounded-2xl flex flex-col items-center justify-center p-4 overflow-hidden group hover:bg-white/50 transition-colors will-change-transform float-element" style={{ animationDelay: '0s' }}
                            >
                                <span className="font-mono text-[11px] text-gray-500 font-semibold uppercase tracking-widest absolute top-3 left-4">Layer 03</span>
                                <span className="font-mono text-[15px] font-bold text-gray-800 tracking-widest">LOGIC EXECUTION</span>
                                <div className="absolute top-[45%] right-4 w-16 h-[2px] overflow-hidden flex justify-end">
                                    <motion.div
                                        className="h-full bg-gradient-to-r from-transparent to-[#0ABAB5] rounded-full w-full"
                                        initial={{ x: "-100%", opacity: 0 }}
                                        animate={{ x: "100%", opacity: [0, 1, 0] }}
                                        transition={{ duration: 1.2, repeat: Infinity, ease: "linear", delay: 0.2 }}
                                    />
                                </div>
                                <div className="absolute top-[65%] right-6 w-12 h-[2px] overflow-hidden flex justify-end">
                                    <motion.div
                                        className="h-full bg-gradient-to-r from-transparent to-[#0ABAB5] rounded-full w-full"
                                        initial={{ x: "-100%", opacity: 0 }}
                                        animate={{ x: "100%", opacity: [0, 1, 0] }}
                                        transition={{ duration: 0.9, repeat: Infinity, ease: "linear", delay: 0.5 }}
                                    />
                                </div>
                            </motion.div>

                            {/* Plate 2: Vectorization */}
                            <motion.div
                                variants={plateItem}
                                whileHover={{ y: -4 }}
                                transition={{ type: "spring", stiffness: 300, damping: 25 }}
                                className="w-full relative h-[140px] bg-white/40 backdrop-blur-2xl border border-white/60 shadow-[inset_0_1px_1px_rgba(255,255,255,0.9),0_8px_32px_rgba(0,0,0,0.06)] rounded-2xl flex flex-col items-center justify-center p-4 group hover:bg-white/50 transition-colors will-change-transform float-element" style={{ animationDelay: '0.4s' }}
                            >
                                <span className="font-mono text-[11px] text-[#0ABAB5] bg-teal-50/90 backdrop-blur-md px-3 py-1 rounded-full font-bold uppercase tracking-widest absolute -top-3.5 left-1/2 -translate-x-1/2 z-30 shadow-sm border border-teal-100 whitespace-nowrap">Evren Cognitive Layer</span>
                                <div className="absolute inset-0 overflow-hidden rounded-2xl pointer-events-none">
                                    <motion.div
                                        className="absolute top-0 bottom-0 w-[2px] bg-[#0ABAB5] shadow-[0_0_20px_4px_rgba(10,186,181,0.5)]"
                                        animate={{ left: ["0%", "100%", "0%"] }}
                                        transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-teal-100/10 to-transparent"></div>
                                </div>
                                <span className="font-mono text-[11px] text-gray-500 font-semibold uppercase tracking-widest absolute top-3 left-4">Layer 02</span>
                                <span className="font-mono text-[15px] font-bold text-gray-800 tracking-widest relative z-10">VECTORIZATION</span>
                            </motion.div>

                            {/* Plate 1: Normalization */}
                            <motion.div
                                variants={plateItem}
                                whileHover={{ y: -4 }}
                                transition={{ type: "spring", stiffness: 300, damping: 25 }}
                                className="w-full relative h-[130px] bg-white/40 backdrop-blur-2xl border border-white/60 shadow-[inset_0_1px_1px_rgba(255,255,255,0.9),0_8px_32px_rgba(0,0,0,0.06)] rounded-2xl flex flex-col items-center justify-center p-4 overflow-hidden group hover:bg-white/50 transition-colors will-change-transform float-element" style={{ animationDelay: '0.8s' }}
                            >
                                <span className="font-mono text-[11px] text-gray-500 font-semibold uppercase tracking-widest absolute top-3 left-4">Layer 01</span>
                                <span className="font-mono text-[15px] font-bold text-gray-800 tracking-widest relative z-10">NORMALIZATION</span>
                                <div className="mt-5 flex gap-2 relative z-10">
                                    {[0, 1, 2, 3, 4, 5].map((i) => (
                                        <motion.div
                                            key={i}
                                            className="w-1.5 h-1.5 rounded-full bg-[#0ABAB5]/90 shadow-[0_0_5px_rgba(10,186,181,0.4)]"
                                            animate={{ y: [6, -6, 6] }}
                                            transition={{ duration: 1.5, delay: i * 0.15, repeat: Infinity, ease: "easeInOut" }}
                                        />
                                    ))}
                                </div>
                            </motion.div>
                        </motion.div>

                        {/* ── SVG LINES: Col 2 → Col 3 ───────────── */}
                        <div className="hidden lg:block absolute left-[62%] right-[32%] top-0 bottom-0 pointer-events-none z-0">
                            <svg className="w-full h-full" viewBox="0 0 100 460" preserveAspectRatio="none">
                                <path d="M 0 69 C 40 69, 60 230, 100 230" fill="none" stroke="#0ABAB5" strokeWidth="1.5" vectorEffect="non-scaling-stroke" strokeDasharray="4 4" className="line-flow-animation" opacity="0.3" />
                                <path d="M 0 230 C 40 230, 60 230, 100 230" fill="none" stroke="#0ABAB5" strokeWidth="1.5" vectorEffect="non-scaling-stroke" strokeDasharray="4 4" className="line-flow-animation" opacity="0.4" />
                                <path d="M 0 391 C 40 391, 60 230, 100 230" fill="none" stroke="#0ABAB5" strokeWidth="1.5" vectorEffect="non-scaling-stroke" strokeDasharray="4 4" className="line-flow-animation" opacity="0.3" />
                                <circle cx="0" cy="0" r="2.5" fill="#0ABAB5">
                                    <animateMotion dur="2.5s" repeatCount="indefinite" path="M 0 230 C 40 230, 60 230, 100 230" />
                                </circle>
                                <circle cx="0" cy="0" r="2.5" fill="#0ABAB5">
                                    <animateMotion dur="2s" repeatCount="indefinite" path="M 0 69 C 40 69, 60 230, 100 230" />
                                </circle>
                                <circle cx="0" cy="0" r="2.5" fill="#0ABAB5">
                                    <animateMotion dur="2.2s" repeatCount="indefinite" path="M 0 391 C 40 391, 60 230, 100 230" />
                                </circle>
                            </svg>
                        </div>

                        {/* ── COLUMN 3: Console (Slide-in from right) ── */}
                        <motion.div
                            className="w-full lg:w-[32%] flex flex-col justify-center relative z-20 py-8 lg:py-0 pl-2"
                            variants={consoleReveal}
                            initial="hidden"
                            animate={isInView ? "visible" : "hidden"}
                        >
                            <div className="flex items-center gap-2 mb-4 relative z-10 pl-2 -translate-y-6">
                                <div className="bg-gray-100/80 px-2 py-0.5 rounded-md border border-gray-200 backdrop-blur-sm shadow-sm">
                                    <h3 className="font-mono text-[11px] text-gray-500 font-semibold tracking-widest uppercase">Actionable Triggers</h3>
                                </div>
                            </div>
                            <div className="w-full min-h-[380px] lg:h-[400px] bg-[#050505] rounded-2xl border border-gray-800/80 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.6),inset_0_1px_1px_rgba(255,255,255,0.05)] p-5 flex flex-col overflow-hidden relative font-mono mt-[-20px] backdrop-blur-sm">

                                {/* Console Header */}
                                <div className="flex items-center justify-between border-b border-gray-800/80 pb-3 mb-4">
                                    <div className="flex items-center gap-2">
                                        <Activity size={14} className="text-[#0ABAB5]" />
                                        <span className="text-[11px] text-gray-400 font-bold tracking-widest">LIVE EVENT FEED</span>
                                    </div>
                                    <div className="flex gap-1.5">
                                        <div className="w-2.5 h-2.5 rounded-full bg-gray-800"></div>
                                        <div className="w-2.5 h-2.5 rounded-full bg-gray-800"></div>
                                        <div className="w-2.5 h-2.5 rounded-full bg-[#0ABAB5] shadow-[0_0_10px_rgba(10,186,181,0.5)] animate-pulse"></div>
                                    </div>
                                </div>

                                {/* Scrolling Output */}
                                <div className="flex-1 overflow-hidden relative">
                                    <div className="absolute top-0 left-0 right-0 h-8 bg-gradient-to-b from-[#050505] to-transparent z-10 pointer-events-none"></div>
                                    <motion.div
                                        className="flex flex-col absolute top-0 w-full"
                                        animate={{ y: ["0%", "-50%"] }}
                                        transition={{ duration: 20, ease: "linear", repeat: Infinity }}
                                    >
                                        {[
                                            { id: 1, type: "logistics", time: "11:24:02", action: "REAL-TIME_LOGISTICS", result: "Route Optimized. +12% Efficiency" },
                                            { id: 2, type: "fraud", time: "11:24:05", action: "RISK_MITIGATION", result: "Fraud Pattern Isolated & Blocked" },
                                            { id: 3, type: "pricing", time: "11:24:09", action: "AUTO_P&L_ADJUSTMENT", result: "Pricing Updated. $14.2k Recovered" },
                                            { id: 1, type: "logistics", time: "11:24:12", action: "REAL-TIME_LOGISTICS", result: "Route Optimized. +12% Efficiency" },
                                            { id: 2, type: "fraud", time: "11:24:14", action: "RISK_MITIGATION", result: "Fraud Pattern Isolated & Blocked" },
                                            { id: 3, type: "pricing", time: "11:24:17", action: "AUTO_P&L_ADJUSTMENT", result: "Pricing Updated. $14.2k Recovered" },
                                            { id: 1, type: "logistics", time: "11:24:19", action: "REAL-TIME_LOGISTICS", result: "Route Optimized. +12% Efficiency" },
                                            { id: 2, type: "fraud", time: "11:24:22", action: "RISK_MITIGATION", result: "Fraud Pattern Isolated & Blocked" }
                                        ].map((log, i) => {
                                            const isHighlight = hoveredNode === log.id || (hoveredNode === 4 && log.id === 3);
                                            const isDimmed = hoveredNode !== null && !isHighlight;
                                            return (
                                                <div key={i} className={`text-[11px] sm:text-xs flex flex-col gap-1.5 border-b border-gray-800/60 py-3 transition-opacity duration-300 ${isDimmed ? 'opacity-30' : 'opacity-100'}`}>
                                                    <div className="flex text-gray-500">
                                                        <span>[{log.time}]</span>
                                                        <span className={`ml-2 font-bold ${isHighlight ? 'text-teal-300 drop-shadow-[0_0_8px_rgba(94,234,212,0.6)]' : 'text-[#0ABAB5]'}`}>{log.action}:</span>
                                                    </div>
                                                    <div className={`font-medium pl-3 border-l ml-4 transition-colors duration-300 ${isHighlight ? 'text-white border-teal-400/50 bg-[#0ABAB5]/5' : 'text-gray-300 border-gray-800'}`}>
                                                        {log.result}
                                                    </div>
                                                </div>
                                            )
                                        })}
                                    </motion.div>
                                </div>

                                <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#050505] to-transparent pointer-events-none"></div>
                            </div>
                        </motion.div>

                    </div>
                </div>

                <style dangerouslySetInnerHTML={{
                    __html: `
                    .line-flow-animation {
                        stroke-dashoffset: 20;
                        animation: flow 1s linear infinite;
                    }
                    @keyframes flow {
                        to {
                            stroke-dashoffset: 0;
                        }
                    }
                `}} />
            </div>
        </section>
    );
}

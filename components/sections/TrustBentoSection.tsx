"use client";

import { motion } from "framer-motion";
import MotionWrapper from "@/components/MotionWrapper";
import { Heart, Activity, Globe2, Briefcase } from "lucide-react";

export default function TrustBentoSection() {
    return (
        <section id="trust" className="relative bg-white py-32 px-6 overflow-hidden">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-[400px] bg-[#0ABAB5]/5 rounded-full blur-[120px] pointer-events-none z-0"></div>

            <div className="mx-auto max-w-6xl relative z-10">
                {/* ── Headline ── */}
                <MotionWrapper className="mb-20 text-center flex flex-col items-center">
                    <h2 className="font-jakarta text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-[54px] leading-[1.1]">
                        The Proven ROI of <br />
                        Engineering-Grade AI.
                    </h2>
                </MotionWrapper>

                {/* ── Grid Layout ── */}
                <div className="grid grid-cols-1 md:grid-cols-5 gap-6 bg-white relative">

                    {/* Top Left: Trust & Logos (Span 3) */}
                    <MotionWrapper delay={0.1} className="md:col-span-3 relative flex flex-col justify-start p-8 sm:p-10 bg-white rounded-3xl border border-gray-200 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group overflow-hidden">
                        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-gray-200 to-transparent"></div>
                        <div className="flex flex-col">
                            <div className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-gray-50 px-4 py-1.5 w-fit shadow-sm group-hover:border-[#0ABAB5]/30 transition-colors">
                                <Heart size={14} className="text-[#0ABAB5] fill-[#0ABAB5]/20" />
                                <span className="font-mono text-xs font-bold text-gray-700 tracking-widest uppercase">
                                    98% Client Satisfaction
                                </span>
                            </div>
                        </div>

                        <div className="flex flex-col gap-5 mt-10">
                            <h3 className="font-inter text-sm font-semibold text-gray-500 tracking-wide">
                                Trusted by industry leaders globally
                            </h3>
                            <div className="flex flex-wrap items-center gap-x-8 gap-y-6 opacity-60 grayscale group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500">
                                {["Acme Corp", "Y-Combinator", "Vercel", "Scale AI", "Stripe"].map((logo) => (
                                    <div key={logo} className="flex items-center cursor-pointer">
                                        <span className="font-mono font-bold text-sm sm:text-base text-gray-900 tracking-widest uppercase">
                                            {logo}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </MotionWrapper>

                    {/* Top Right: Result Highlight (Span 2) */}
                    <MotionWrapper delay={0.2} className="md:col-span-2 relative flex flex-col justify-start p-8 sm:p-10 bg-gradient-to-br from-teal-50/50 to-white rounded-3xl border border-teal-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-lg hover:-translate-y-1 hover:border-teal-200 transition-all duration-300 overflow-hidden">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-[#0ABAB5]/5 rounded-full blur-2xl"></div>

                        <div className="flex flex-col">
                            <div className="flex items-center gap-2">
                                <Activity size={14} className="text-[#0ABAB5]" />
                                <span className="font-mono text-xs font-bold text-gray-500 uppercase tracking-widest">
                                    Result Highlight
                                </span>
                            </div>
                        </div>

                        <div className="flex flex-col mt-10 z-10">
                            <div className="font-inter text-6xl sm:text-[72px] font-black text-transparent bg-clip-text bg-gradient-to-br from-[#0ABAB5] to-teal-400 tracking-tighter leading-none mb-4 drop-shadow-sm">
                                +41%
                            </div>
                            <p className="font-jakarta text-2xl font-bold text-gray-900 leading-tight mb-2">
                                Lead Generation Volume
                            </p>
                            <p className="font-inter text-sm font-medium text-[#0ABAB5]">
                                for our Elite Marketing Partners
                            </p>
                        </div>
                    </MotionWrapper>

                    {/* Bottom Left: Global Support (Span 2) */}
                    <MotionWrapper delay={0.3} className="md:col-span-2 relative flex flex-col justify-start p-8 sm:p-10 bg-white rounded-3xl border border-gray-200 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                        <div className="absolute top-8 right-8 text-gray-200">
                            <Globe2 size={32} strokeWidth={1.5} />
                        </div>

                        <div className="flex flex-col mt-4">
                            <h3 className="font-jakarta text-3xl font-bold text-gray-900 mb-3 tracking-tight">
                                24/7 Global Support
                            </h3>
                            <p className="font-inter text-base text-gray-600 leading-relaxed font-medium max-w-xl">
                                Uninterrupted engineering oversight. Your AI agents are actively monitored across all time zones to ensure maximum uptime and immediate operational intervention.
                            </p>
                        </div>
                    </MotionWrapper>

                    {/* Bottom Right: Projects Delivered (Span 3) */}
                    <MotionWrapper delay={0.4} className="md:col-span-3 relative flex flex-col justify-start p-8 sm:p-10 bg-white rounded-3xl border border-gray-200 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                        <div className="absolute top-8 right-8 text-gray-200">
                            <Briefcase size={32} strokeWidth={1.5} />
                        </div>

                        <div className="flex flex-col mt-4">
                            <h3 className="font-jakarta text-3xl font-bold text-gray-900 mb-3 tracking-tight">
                                41+ Projects Delivered
                            </h3>
                            <p className="font-inter text-base text-gray-600 leading-relaxed font-medium">
                                From minimal viable automation to vast enterprise rollouts. Battle-tested deployments only.
                            </p>
                        </div>
                    </MotionWrapper>

                </div>
            </div>
        </section>
    );
}

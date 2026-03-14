"use client";

import {
    HeartPulse,
    Building2,
    Scale,
    HardHat,
    Package,
    Check
} from "lucide-react";

export default function TrustBarSection() {
    const domains = [
        {
            icon: HeartPulse,
            name: "Healthcare",
            subtext: "HIPAA-Compliant Architecture"
        },
        {
            icon: Building2,
            name: "Global Finance",
            subtext: "GDPR & SOC2 Standards"
        },
        {
            icon: Scale,
            name: "Legal Tech",
            subtext: "Confidentiality-Locked Models"
        },
        {
            icon: HardHat,
            name: "Industrial & OSHA",
            subtext: "AI Safety Governance"
        },
        {
            icon: Package,
            name: "Global Logistics",
            subtext: "ISO-Standard Integrations"
        }
    ];

    return (
        <section className="bg-[#F1F5F9] py-5 w-full overflow-hidden border-b border-slate-200">
            <style dangerouslySetInnerHTML={{
                __html: `
              @keyframes compliance-scroll {
                0% { transform: translateX(0); }
                100% { transform: translateX(-50%); }
              }
              .animate-compliance-scroll {
                animation: compliance-scroll 35s linear infinite;
              }
              .animate-compliance-scroll:hover {
                animation-play-state: paused;
              }
              .compliance-mask {
                -webkit-mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
                mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
              }
            `}} />

            <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-4 2xl:px-12 flex flex-col items-center justify-center gap-5 xl:gap-4 2xl:gap-6">

                {/* Domains Ticker */}
                <div className="w-full relative compliance-mask overflow-hidden">
                    <div className="flex w-max animate-compliance-scroll items-center">

                        {/* Group 1 */}
                        <div className="flex items-center gap-8 pr-8 xl:pr-8 xl:gap-8 2xl:gap-10">
                            {domains.map((domain, index) => (
                                <div key={`g1-${index}`} className="flex items-center gap-3 xl:gap-2 2xl:gap-3 min-w-max">
                                    <domain.icon className="w-[22px] h-[22px] xl:w-[18px] xl:h-[18px] 2xl:w-[22px] 2xl:h-[22px] text-slate-600" strokeWidth={1.5} />
                                    <div className="flex flex-col text-left">
                                        <span className="font-inter font-semibold text-[13px] xl:text-[11px] 2xl:text-[13px] text-slate-800 leading-tight">
                                            {domain.name}
                                        </span>
                                        <span className="font-inter text-[11px] xl:text-[9px] 2xl:text-[11px] text-slate-500 font-medium leading-tight">
                                            {domain.subtext}
                                        </span>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Group 2 (Clone for infinite scroll on mobile) */}
                        <div className="flex items-center gap-8 pr-8 xl:pr-8 xl:gap-8 2xl:gap-10" aria-hidden="true">
                            {domains.map((domain, index) => (
                                <div key={`g2-${index}`} className="flex items-center gap-3 min-w-max">
                                    <domain.icon className="w-[22px] h-[22px] text-slate-600" strokeWidth={1.5} />
                                    <div className="flex flex-col text-left">
                                        <span className="font-inter font-semibold text-[13px] text-slate-800 leading-tight">
                                            {domain.name}
                                        </span>
                                        <span className="font-inter text-[11px] text-slate-500 font-medium leading-tight">
                                            {domain.subtext}
                                        </span>
                                    </div>
                                </div>
                            ))}
                        </div>

                    </div>
                </div>

                {/* Bottom Center Badge: Security Seal */}
                {/* <div className="flex-shrink-0 flex items-center gap-3 xl:gap-2 2xl:gap-3 bg-white border border-slate-200/80 shadow-sm rounded-full px-5 py-2.5 xl:px-3 xl:py-1.5 2xl:px-5 2xl:py-2.5 z-10 hover:border-slate-300 transition-colors cursor-pointer">
                    <div className="relative flex items-center justify-center w-[26px] h-[26px] xl:w-[20px] xl:h-[20px] 2xl:w-[26px] 2xl:h-[26px] rounded-full border border-green-500/30">
                        <div className="flex items-center justify-center w-[18px] h-[18px] xl:w-[14px] xl:h-[14px] 2xl:w-[18px] 2xl:h-[18px] rounded-full border border-green-500/70 bg-green-500/10">
                            <Check className="w-[11px] h-[11px] xl:w-[8px] xl:h-[8px] 2xl:w-[11px] 2xl:h-[11px] text-green-600" strokeWidth={3.5} />
                        </div>
                    </div>
                    <span className="font-inter text-[11px] sm:text-[12px] xl:text-[10px] 2xl:text-[12px] font-bold text-slate-800 uppercase tracking-widest leading-none mt-0.5">
                        ISO & HIPAA COMPLIANT ARCHITECTURE
                    </span>
                </div> */}

            </div>
        </section>
    );
}

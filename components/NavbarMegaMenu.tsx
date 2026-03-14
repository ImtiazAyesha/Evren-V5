import React, { useState } from "react";
import { motion, AnimatePresence, type Variants } from "framer-motion";

// Dropdown motion config
const dropdownVariants: Variants = {
  hidden: { opacity: 0, y: 10 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { type: "spring", stiffness: 300, damping: 30 }
  },
  exit: { 
    opacity: 0, 
    y: 10, 
    transition: { duration: 0.15, ease: "easeOut" }
  }
};

const menuContainerClass = "absolute left-1/2 -translate-x-1/2 top-full pt-5";
const menuBoxClass = "relative overflow-hidden rounded-2xl bg-white border border-slate-200/60 shadow-[0_20px_50px_rgba(0,0,0,0.08)] p-6 text-left";

// 1. Work Dropdown
export function WorkDropdown() {
  return (
    <div className={menuContainerClass}>
      <motion.div variants={dropdownVariants} initial="hidden" animate="visible" exit="exit" className={`${menuBoxClass} w-[420px]`}>
        <div className="grid grid-cols-[140px_1fr] gap-6">
          <div>
            <span className="text-xs text-slate-500 uppercase tracking-widest block font-medium">Industries we transform</span>
          </div>
          <ul className="flex flex-col gap-4">
            {["Healthcare & Telehealth", "Construction & Safety", "Legal & Professional Services", "Financial Services & Security"].map((item) => (
              <li key={item} className="group relative flex items-center">
                <span className="absolute -left-4 w-1.5 h-1.5 rounded-full bg-[#0ABAB5] opacity-0 transition-opacity group-hover:opacity-100" />
                <a href={`#${item.toLowerCase().replace(/ & /g, "-").replace(/ /g, "-")}`} className="text-sm font-medium text-slate-600 transition-colors group-hover:text-slate-900">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </motion.div>
    </div>
  );
}

// 2. Capabilities Dropdown
export function CapabilitiesDropdown() {
  return (
    <div className={menuContainerClass}>
      <motion.div variants={dropdownVariants} initial="hidden" animate="visible" exit="exit" className={`${menuBoxClass} w-[600px] p-8`}>
        <div className="flex gap-8">
          {/* Column 1 (Dominant) */}
          <div className="flex-1 flex flex-col gap-5">
            <h3 className="text-sm font-bold text-[#0ABAB5] uppercase tracking-wider text-left">Product Engineering</h3>
            <div className="flex flex-col gap-6">
              {[
                { title: "Web Applications", desc: "Scalable enterprise architectures" },
                { title: "Mobile Applications", desc: "Native & Cross-platform" },
                { title: "Internal Enterprise Portals", desc: "Automate complex workflows" }
              ].map((item) => (
                <a key={item.title} href={`#${item.title.toLowerCase().replace(/ /g, "-")}`} className="group relative block text-left">
                  <span className="absolute -left-4 top-1.5 w-1.5 h-1.5 rounded-full bg-[#0ABAB5] opacity-0 transition-opacity group-hover:opacity-100" />
                  <div className="text-sm font-semibold text-slate-800 transition-colors group-hover:text-[#0ABAB5]">
                    {item.title}
                  </div>
                  <div className="text-xs text-slate-500 mt-1 transition-colors group-hover:text-slate-600">
                    {item.desc}
                  </div>
                </a>
              ))}
            </div>
          </div>
          
          {/* Divider */}
          <div className="w-px bg-slate-200/80" />

          {/* Column 2 (Edge / AI) */}
          <div className="w-[180px] flex flex-col gap-5">
            <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider text-left">The AI Engine</h3>
            <div className="flex flex-col gap-5">
              {["Autonomous AI Agents", "Process Automation", "AI-Ready Software Dev"].map((item) => (
                <a key={item} href={`#${item.toLowerCase().replace(/ /g, "-")}`} className="group relative block text-left">
                  <span className="absolute -left-4 top-1 w-1.5 h-1.5 rounded-full bg-slate-900 opacity-0 transition-opacity group-hover:opacity-100" />
                  <div className="text-sm font-medium text-slate-600 transition-colors group-hover:text-slate-900">
                    {item}
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}




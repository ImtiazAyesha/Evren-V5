"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useInView, type Variants } from "framer-motion";

// ═══════════════════════════════════════════════════════════════════════
//  MOTION CONFIG
// ═══════════════════════════════════════════════════════════════════════

const SPRING = { type: "spring" as const, stiffness: 100, damping: 20 };

const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.14, delayChildren: 0.06 },
  },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { ...SPRING, duration: 0.6 },
  },
};

// ═══════════════════════════════════════════════════════════════════════
//  CUSTOM ANIMATED VISUALS
// ═══════════════════════════════════════════════════════════════════════

function VisualLLM() {
  return (
    <div className="relative w-full h-full flex flex-col justify-center gap-4 overflow-hidden bg-evren-warm-white/50 rounded-2xl border border-evren-light-gray group-hover:border-evren-peach/30 transition-colors duration-500 p-6 md:p-8">
       {/* User Prompt */}
       <motion.div 
         className="self-end bg-evren-navy text-white text-[11px] md:text-sm font-medium py-2 px-4 rounded-xl rounded-tr-sm shadow-md"
         animate={{ opacity: [0, 1, 1, 0, 0], y: [10, 0, 0, -10, -10] }}
         transition={{ duration: 8, times: [0, 0.1, 0.8, 0.9, 1], repeat: Infinity, ease: "easeInOut" }}
       >
          Analyze context...
       </motion.div>

       {/* LLM Response */}
       <motion.div 
         className="self-start bg-white border border-evren-light-gray w-[85%] p-4 rounded-xl rounded-tl-sm shadow-sm space-y-2.5 lg:space-y-3"
         animate={{ opacity: [0, 0, 1, 1, 0], scale: [0.95, 0.95, 1, 1, 0.95] }}
         transition={{ duration: 8, times: [0, 0.15, 0.25, 0.8, 0.9], repeat: Infinity, ease: "easeInOut" }}
       >
          <motion.div 
             className="h-2 lg:h-2.5 bg-evren-peach rounded-full"
             animate={{ width: ["0%", "0%", "100%", "100%", "0%"] }}
             transition={{ duration: 8, times: [0, 0.25, 0.35, 0.8, 0.9], repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div 
             className="h-2 lg:h-2.5 bg-evren-navy/15 rounded-full"
             animate={{ width: ["0%", "0%", "85%", "85%", "0%"] }}
             transition={{ duration: 8, times: [0, 0.35, 0.45, 0.8, 0.9], repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div 
             className="h-2 lg:h-2.5 bg-evren-navy/15 rounded-full"
             animate={{ width: ["0%", "0%", "60%", "60%", "0%"] }}
             transition={{ duration: 8, times: [0, 0.45, 0.55, 0.8, 0.9], repeat: Infinity, ease: "easeInOut" }}
          />
       </motion.div>
    </div>
  );
}

function VisualVision() {
  return (
    <div className="relative w-full h-full flex items-center justify-center overflow-hidden bg-evren-warm-white/50 rounded-2xl border border-evren-light-gray group-hover:border-evren-peach/30 transition-colors duration-500 p-4 md:p-6">
      {/* Grid Pattern */}
      <div className="absolute inset-4 grid grid-cols-5 grid-rows-3 gap-2 opacity-15">
        {[...Array(15)].map((_, i) => (
          <div key={i} className="bg-evren-navy/40 w-full h-full rounded-sm" />
        ))}
      </div>
      
      {/* Moving Targeting Reticle */}
      <motion.div
         className="absolute w-[40%] h-[50%] border-2 border-evren-peach/70 rounded-md backdrop-blur-[2px] bg-evren-peach/5"
         animate={{ 
            left: ["10%", "50%", "40%", "10%"],
            top: ["10%", "20%", "40%", "10%"],
            scale: [1, 1.1, 0.95, 1] 
         }}
         transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="absolute -top-[2px] -left-[2px] w-3 h-3 border-t-2 border-l-2 border-evren-navy" />
        <div className="absolute -top-[2px] -right-[2px] w-3 h-3 border-t-2 border-r-2 border-evren-navy" />
        <div className="absolute -bottom-[2px] -left-[2px] w-3 h-3 border-b-2 border-l-2 border-evren-navy" />
        <div className="absolute -bottom-[2px] -right-[2px] w-3 h-3 border-b-2 border-r-2 border-evren-navy" />
      </motion.div>
    </div>
  );
}

function VisualPredictive() {
  const bars = [20, 35, 25, 60, 45, 80, 50, 75];
  return (
    <div className="relative w-full h-full flex items-end justify-between px-6 pb-6 pt-12 overflow-hidden bg-evren-warm-white/50 rounded-2xl border border-evren-light-gray group-hover:border-evren-peach/30 transition-colors duration-500">
      {bars.map((height, i) => (
        <motion.div
           key={i}
           className="w-[8%] bg-evren-navy/20 rounded-t-sm"
           initial={{ height: "10%" }}
           animate={{ height: [`10%`, `${height}%`, `20%`] }}
           transition={{ duration: 4, repeat: Infinity, delay: i * 0.15, ease: "easeInOut" }}
        />
      ))}
      {/* Moving Threshold Line */}
      <motion.div 
        className="absolute left-0 w-full h-[2px] bg-evren-peach shadow-[0_0_8px_rgba(244,168,154,0.6)] z-10"
        animate={{ bottom: ["20%", "75%", "45%", "20%"] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
}

function WorkflowNode({ x, y, icon, bgClass, name, sub, delay }: { x: string, y: string, icon: string, bgClass: string, name: string, sub: string, delay: number }) {
  return (
    <motion.div
      className={`absolute shadow-[0_4px_20px_rgba(0,0,0,0.04)] border border-white flex flex-col items-center justify-center rounded-[1rem] md:rounded-[1.2rem] w-[76px] h-[76px] md:w-[96px] md:h-[96px] p-2 z-10 ${bgClass}`}
      style={{ left: x, top: y }}
      initial={{ opacity: 0, scale: 0.8, x: "-50%", y: "-50%" }}
      animate={{ opacity: 1, scale: 1, x: "-50%", y: "-50%" }}
      transition={{ duration: 0.5, delay }}
    >
      <div className="w-7 h-7 md:w-9 md:h-9 mb-[6px] md:mb-2 flex items-center justify-center bg-white rounded-md md:rounded-lg shadow-sm">
        <Image src={icon} alt={name} width={20} height={20} className="object-contain block md:hidden" />
        <Image src={icon} alt={name} width={24} height={24} className="object-contain hidden md:block" />
      </div>
      <span className="text-[8px] md:text-[10px] font-bold text-evren-navy leading-none text-center whitespace-nowrap">{name}</span>
      <span className="text-[6px] md:text-[8px] text-evren-charcoal leading-tight text-center mt-1 whitespace-nowrap">{sub}</span>
    </motion.div>
  );
}

function VisualWorkflow() {
  return (
    <div className="relative w-full h-full flex flex-col items-center justify-center overflow-hidden bg-[#F9FAFB] rounded-2xl border border-evren-light-gray group-hover:border-evren-peach/20 transition-colors duration-500">
      {/* Dot Grid Background */}
      <div 
        className="absolute inset-0 opacity-[0.15] pointer-events-none" 
        style={{ backgroundImage: 'radial-gradient(var(--evren-navy) 1px, transparent 1px)', backgroundSize: '18px 18px' }}
      />
      
      {/* SVG Connecting Paths (drawn under nodes) */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 100 100" preserveAspectRatio="none">
         <path
           d="M 25 25 L 65 25 Q 75 25 75 35 L 75 65 Q 75 75 65 75 L 25 75"
           fill="none"
           stroke="rgba(27,42,74,0.15)"
           strokeWidth="1.5"
           vectorEffect="non-scaling-stroke"
         />
         {/* Animated path overlay */}
         <motion.path
           d="M 25 25 L 65 25 Q 75 25 75 35 L 75 65 Q 75 75 65 75 L 25 75"
           fill="none"
           stroke="#F4A89A"
           strokeWidth="2.5"
           strokeLinecap="round"
           vectorEffect="non-scaling-stroke"
           initial={{ pathLength: 0, opacity: 1 }}
           animate={{ pathLength: 1, opacity: 0.15 }}
           transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
         />
      </svg>
      
      {/* 4 Nodes in a pattern matching the reference image */}
      <WorkflowNode x="25%" y="25%" icon="/webhook.png" name="Webhooks" sub="Webhook response" bgClass="bg-[#FFF4F2]" delay={0} />
      <WorkflowNode x="75%" y="25%" icon="/slack.png" name="Slack" sub="Get a user" bgClass="bg-[#F0F5FF]" delay={0.2} />
      <WorkflowNode x="75%" y="75%" icon="/chat-gpt.png" name="Chat GPT" sub="Edit/Generate" bgClass="bg-[#ffffff]" delay={0.4} />
      <WorkflowNode x="25%" y="75%" icon="/n8n.png" name="n8n" sub="Router logic" bgClass="bg-[#F8FAFC]" delay={0.6} />
    </div>
  );
}

// ═══════════════════════════════════════════════════════════════════════
//  PILLAR DATA
// ═══════════════════════════════════════════════════════════════════════

const PILLARS = [
  {
    title: "LLM Integration",
    body: "We architect production-grade LLM pipelines — from prompt engineering and RAG architectures to fine-tuning domain-specific models that deliver reliable, context-aware outputs at scale.",
    Visual: VisualLLM,
  },
  {
    title: "Computer Vision",
    body: "Real-time image and video analysis pipelines built for edge and cloud. Object detection, OCR, document intelligence, and multi-modal reasoning tailored to your industry.",
    Visual: VisualVision,
  },
  {
    title: "Predictive Analytics",
    body: "Transform historical data into forward-looking decisions. Time-series forecasting, anomaly detection, and recommendation engines built on your proprietary data moats.",
    Visual: VisualPredictive,
  },
  {
    title: "Workflow Automation",
    body: "End-to-end intelligent automation — from document processing and data extraction to decision routing and compliance enforcement. Your ops team, amplified by AI agents.",
    Visual: VisualWorkflow,
  },
];

// ═══════════════════════════════════════════════════════════════════════
//  COMPONENTS
// ═══════════════════════════════════════════════════════════════════════

function PillarCard({ pillar, isWide = false }: { pillar: typeof PILLARS[0]; isWide?: boolean }) {
  const Visual = pillar.Visual;
  return (
    <motion.article
      variants={fadeUp}
      className={`group relative bg-white rounded-[2rem] p-6 lg:p-8 border border-evren-light-gray/60
                 transition-all duration-500 ease-out flex flex-col justify-center
                 hover:-translate-y-1 hover:shadow-[0_20px_40px_-15px_rgba(27,42,74,0.1)] hover:border-evren-peach/60
                 overflow-hidden w-full h-full ${isWide ? 'md:col-span-2' : 'md:col-span-1'}`}
    >
      {/* (Hover accent gradient explicitly removed) */}

      <div className={`relative z-10 w-full h-full flex ${isWide ? 'flex-col md:flex-row items-stretch md:items-center gap-6 lg:gap-10' : 'flex-col items-stretch gap-6 lg:gap-8'}`}>
        
        {/* Animated Visual Box */}
        <div className={`relative shrink-0 w-full ${isWide ? 'md:w-[45%] lg:w-[40%] h-[200px] lg:h-[240px]' : 'h-[180px] lg:h-[200px]'}`}>
          <Visual />
        </div>

        {/* Text Content */}
        <div className={`flex flex-col flex-1 ${isWide ? 'py-4' : ''}`}>
          <h3 className="text-2xl lg:text-[26px] font-heading font-bold text-evren-navy mb-3 lg:mb-4">
            {pillar.title}
          </h3>
          <p className="text-evren-charcoal font-body leading-relaxed text-base lg:text-[17px]">
            {pillar.body}
          </p>
        </div>
        
      </div>
    </motion.article>
  );
}

// ═══════════════════════════════════════════════════════════════════════
//  AI-NATIVE DIFFERENCE — TIGHT-FIT BENTO GRID
// ═══════════════════════════════════════════════════════════════════════

export default function AINativeDifference() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section
      ref={sectionRef}
      id="ai-native-difference"
      aria-label="The AI-Native Difference"
      className="relative w-full bg-evren-warm-white py-24 lg:py-32 overflow-hidden"
    >
      {/* ── Decorative Orbs ─────────────────────────────────────── */}
      <div
        className="absolute bottom-[10%] left-[-5%] w-[500px] h-[500px] rounded-full pointer-events-none z-0"
        style={{
          background: "radial-gradient(circle, rgba(244, 168, 154, 0.08) 0%, transparent 70%)",
          filter: "blur(100px)",
        }}
      />
      <div
        className="absolute top-[10%] right-[-5%] w-[400px] h-[400px] rounded-full pointer-events-none z-0"
        style={{
          background: "radial-gradient(circle, rgba(27, 42, 74, 0.05) 0%, transparent 70%)",
          filter: "blur(90px)",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        {/* ═══════════════════════════════════════════════════════════
            CENTERED HEADER
        ═══════════════════════════════════════════════════════════ */}
        <motion.div
          className="text-center max-w-2xl mx-auto mb-16 lg:mb-24"
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.p
            variants={fadeUp}
            className="text-sm uppercase tracking-[0.25em] text-evren-peach font-bold font-heading mb-4"
          >
            The Differentiation
          </motion.p>
          <motion.h2
            variants={fadeUp}
            className="text-3xl md:text-4xl lg:text-[2.5rem] xl:text-5xl text-evren-navy font-heading font-bold mb-6 leading-tight"
          >
            The <span className="relative inline-block">
              <span className="relative z-10">AI-Native</span>
              <svg className="absolute -bottom-1 lg:-bottom-2 left-0 w-full h-[10px] md:h-[14px]" viewBox="0 0 200 12" fill="none" preserveAspectRatio="none" aria-hidden="true">
                <g>
                  <animateTransform attributeName="transform" type="translate" from="-64 0" to="0 0" dur="3s" repeatCount="indefinite" />
                  <path d="M -64 6 Q -48 0, -32 6 T 0 6 T 32 6 T 64 6 T 96 6 T 128 6 T 160 6 T 192 6 T 224 6 T 256 6 T 288 6" stroke="#F4A89A" strokeWidth="2.5" strokeLinecap="round" fill="none" opacity="0.7" />
                </g>
              </svg>
            </span> Difference
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="text-base lg:text-lg text-evren-charcoal font-body leading-relaxed mb-8"
          >
            Most studios build a product and then ask:{" "}
            <em className="text-evren-peach/80 font-bold">
              &ldquo;Can we add AI to this?&rdquo;
            </em>{" "}
            At Evren, we start with AI. Intelligence isn&apos;t a feature we
            retrofit — it&apos;s the foundation we build on.
          </motion.p>
        </motion.div>

        {/* ═══════════════════════════════════════════════════════════
            CONTENT — TIGHT-FIT BENTO GRID
        ═══════════════════════════════════════════════════════════ */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-3 auto-rows-min gap-6 lg:gap-8 max-w-6xl mx-auto"
        >
          {/* Row 1: Wide then Narrow */}
          <PillarCard pillar={PILLARS[0]} isWide />
          <PillarCard pillar={PILLARS[1]} />
          
          {/* Row 2: Narrow then Wide */}
          <PillarCard pillar={PILLARS[2]} />
          <PillarCard pillar={PILLARS[3]} isWide />
        </motion.div>
      </div>
    </section>
  );
}

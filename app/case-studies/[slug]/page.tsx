"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  Cpu,
  Database,
  Globe,
  Layout,
  Server,
  Star,
} from "lucide-react";
import Link from "next/link";

// ═══════════════════════════════════════════════════════════════════════
//  MOCK DATA (To be replaced with dynamic data loading based on slug)
// ═══════════════════════════════════════════════════════════════════════

const CASE_STUDY_DATA = {
  clientName: "Global Health Systems",
  projectType: "Enterprise AI Transformation",
  industry: "Healthcare",
  timeline: "6 Months",
  teamSize: "8 Specialists",
  techStackBrief: "Next.js, Python, AWS, OpenAI",
  heroImage: "/Product 1.png", // Replace with actual path
  challenge: {
    description:
      "Global Health Systems was struggling with fragmented patient data across dozens of legacy reporting tools. Manual reconciliation took hundreds of hours each week, leading to delayed clinical decisions and operational bottlenecks. They needed a unified, intelligent system capable of real-time insights.",
    painPoints: [
      "Fragmented data silos across 15+ legacy systems",
      "Manual reporting causing 48-hour delays in insights",
      "High operational costs for data reconciliation",
      "Lack of predictive capabilities for patient load",
    ],
  },
  solution: {
    description:
      "We engineered a custom, HIPAA-compliant intelligence platform that aggregates data in real-time. By implementing a custom LLM layer, we enabled natural language querying of complex medical records, accessible via a high-performance web dashboard.",
    techStack: [
      { category: "Frontend", name: "Next.js, React, Tailwind CSS" },
      { category: "Backend", name: "Python, FastAPI, PostgreSQL" },
      { category: "Cloud", name: "AWS (HIPAA Compliant Environment)" },
      { category: "AI Tools", name: "OpenAI GPT-4, LangChain, Pinecone" },
    ],
    keyFeatures: [
      {
        icon: <Cpu className="w-6 h-6 text-teal-500" />,
        title: "Predictive Triage AI",
        description: "Machine learning models to forecast patient intake.",
      },
      {
        icon: <Database className="w-6 h-6 text-teal-500" />,
        title: "Unified Data Fabric",
        description: "Real-time sync across all 15 legacy hospital databases.",
      },
      {
        icon: <Layout className="w-6 h-6 text-teal-500" />,
        title: "Command Dashboard",
        description: "Actionable, role-based views for clinical staff.",
      },
    ],
  },
  featureShowcase: [
    {
      image: "/Product 1.png", // Replace with actual path
      name: "Natural Language Querying",
      description: "Ask complex questions about patient history in plain English.",
      benefit: "Reduced chart review time by 40%.",
    },
    {
      image: "/Product 1.png", // Replace
      name: "Real-time Intake Forecasting",
      description: "Live predictions of ER capacity and staffing needs.",
      benefit: "Optimized resource allocation during peak hours.",
    },
    {
      image: "/Product 1.png", // Replace
      name: "Automated Compliance Audits",
      description: "System automatically flags potential reporting omissions.",
      benefit: "Achieved 100% audit readiness score.",
    },
  ],
  impact: [
    { value: "40%", label: "Time Saved", context: "on chart reviews weekly" },
    { value: "15%", label: "Cost Reduction", context: "in operational overhead" },
    { value: "8", label: "Legacy Tools", context: "successfully deprecated" },
    { value: "0ms", label: "Latency", context: "in critical alerts" },
  ],
  testimonial: {
    quote:
      "Evren AI didn't just rebuild our software; they re-engineered how our hospital operates. The predictive capabilities have fundamentally changed how we allocate our nursing staff during critical periods. It's not just a dashboard, it's a lifeline.",
    name: "Dr. Sarah Jenkins",
    title: "Chief Medical Information Officer",
    company: "Global Health Systems",
    image: "https://i.pravatar.cc/150?img=5",
  },
};

// ═══════════════════════════════════════════════════════════════════════
//  ANIMATION VARIANTS
// ═══════════════════════════════════════════════════════════════════════
const fadeUpVar: any = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const staggerContainer: any = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

// ═══════════════════════════════════════════════════════════════════════
//  MAIN COMPONENT
// ═══════════════════════════════════════════════════════════════════════

export default function CaseStudyPage() {
  const data = CASE_STUDY_DATA;

  return (
    <main className="w-full bg-white font-inter text-[#2D3748]">
      {/* 1. HERO SECTION */}
      <section className="relative w-full h-[70vh] min-h-[500px] max-h-[800px] flex items-end">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src={data.heroImage}
            alt={`${data.clientName} Preview`}
            fill
            className="object-cover object-top"
            priority
          />
          {/* Gradients for readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A0E14] via-[#0A0E14]/70 to-transparent" />
        </div>

        {/* Hero Content Overlay */}
        <div className="relative z-10 w-full max-w-[1200px] mx-auto px-6 pb-20">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            <motion.div variants={fadeUpVar} className="flex gap-4 mb-4">
              <span className="bg-[#4FD1C5]/20 text-[#4FD1C5] px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider backdrop-blur-sm border border-[#4FD1C5]/30">
                {data.industry}
              </span>
              <span className="bg-white/10 text-slate-200 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider backdrop-blur-sm border border-white/20">
                Case Study
              </span>
            </motion.div>
            
            <motion.h1
              variants={fadeUpVar}
              className="text-4xl md:text-5xl lg:text-6xl font-jakarta font-extrabold text-white mb-6 leading-tight max-w-4xl"
            >
              Building the next generation of {data.industry.toLowerCase()}{" "}
              intelligence for {data.clientName}.
            </motion.h1>

            {/* Meta Info Bar */}
            <motion.div
              variants={fadeUpVar}
              className="flex flex-wrap gap-8 pt-8 border-t border-white/20 mt-8"
            >
              <div>
                <p className="text-slate-400 text-xs font-bold uppercase tracking-wider mb-1">
                  Project Type
                </p>
                <p className="text-white font-medium">{data.projectType}</p>
              </div>
              <div>
                <p className="text-slate-400 text-xs font-bold uppercase tracking-wider mb-1">
                  Timeline
                </p>
                <p className="text-white font-medium">{data.timeline}</p>
              </div>
              <div>
                <p className="text-slate-400 text-xs font-bold uppercase tracking-wider mb-1">
                  Team
                </p>
                <p className="text-white font-medium">{data.teamSize}</p>
              </div>
              <div>
                <p className="text-slate-400 text-xs font-bold uppercase tracking-wider mb-1">
                  Core Stack
                </p>
                <p className="text-white font-medium">{data.techStackBrief}</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 2. CHALLENGE SECTION */}
      <section className="py-24 bg-white">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeUpVar}
            >
              <h2 className="text-sm font-bold text-[#4FD1C5] uppercase tracking-widest mb-4">
                The Challenge
              </h2>
              <h3 className="text-3xl font-jakarta font-bold text-[#0A0E14] mb-6 leading-snug">
                The Problem
              </h3>
              <p className="text-lg text-slate-600 leading-relaxed">
                {data.challenge.description}
              </p>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
              className="bg-slate-50 p-8 rounded-2xl border border-slate-100"
            >
              <h4 className="text-xl font-bold text-[#0A0E14] mb-6">
                Key Pain Points
              </h4>
              <ul className="space-y-4">
                {data.challenge.painPoints.map((point, idx) => (
                  <motion.li
                    key={idx}
                    variants={fadeUpVar}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle2 className="w-6 h-6 text-[#4FD1C5] shrink-0 mt-0.5" />
                    <span className="text-slate-700 leading-relaxed">
                      {point}
                    </span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. SOLUTION SECTION */}
      <section className="py-24 bg-slate-50 border-y border-slate-100">
        <div className="max-w-[1200px] mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUpVar}
            className="max-w-3xl mb-16"
          >
            <h2 className="text-sm font-bold text-[#4FD1C5] uppercase tracking-widest mb-4">
              The Solution
            </h2>
            <h3 className="text-3xl md:text-4xl font-jakarta font-bold text-[#0A0E14] mb-6 leading-snug">
              What We Built
            </h3>
            <p className="text-xl text-slate-600 leading-relaxed">
              {data.solution.description}
            </p>
          </motion.div>

          {/* Key Features Cards */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
          >
            {data.solution.keyFeatures.map((feat, idx) => (
              <motion.div
                key={idx}
                variants={fadeUpVar}
                className="bg-white p-8 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100"
              >
                <div className="w-12 h-12 bg-teal-50 rounded-xl flex items-center justify-center mb-6">
                  {feat.icon}
                </div>
                <h4 className="text-xl font-bold text-[#0A0E14] mb-3">
                  {feat.title}
                </h4>
                <p className="text-slate-600 leading-relaxed">
                  {feat.description}
                </p>
              </motion.div>
            ))}
          </motion.div>

          {/* Tech Stack breakdown */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUpVar}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 py-8 border-t border-slate-200"
          >
            {data.solution.techStack.map((stack, idx) => (
              <div key={idx}>
                <p className="text-xs font-bold uppercase tracking-widest text-[#4FD1C5] mb-2">
                  {stack.category}
                </p>
                <p className="font-semibold text-[#0A0E14]">{stack.name}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 4. FEATURES SHOWCASE */}
      <section className="py-24 bg-white">
        <div className="max-w-[1200px] mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="space-y-24 lg:space-y-32"
          >
            {data.featureShowcase.map((feat, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <motion.div
                  key={idx}
                  variants={fadeUpVar}
                  className={`flex flex-col lg:flex-row gap-12 lg:gap-20 items-center ${
                    !isEven ? "lg:flex-row-reverse" : ""
                  }`}
                >
                  {/* Image */}
                  <div className="w-full lg:w-3/5">
                    <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-200 bg-slate-100 aspect-[4/3]">
                      <Image
                        src={feat.image}
                        alt={feat.name}
                        fill
                        className="object-cover"
                        sizes="(max-width: 1024px) 100vw, 60vw"
                      />
                    </div>
                  </div>
                  {/* Text */}
                  <div className="w-full lg:w-2/5">
                    <h3 className="text-2xl font-jakarta font-bold text-[#0A0E14] mb-4">
                      {feat.name}
                    </h3>
                    <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                      {feat.description}
                    </p>
                    <div className="inline-flex items-center gap-2 bg-teal-50 px-4 py-2 rounded-lg text-[#0ABAB5] font-semibold text-sm">
                      <Star size={16} />
                      {feat.benefit}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* 5. IMPACT SECTION */}
      <section className="py-24 bg-[#0A0E14] text-white">
        <div className="max-w-[1200px] mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUpVar}
            className="text-center mb-16"
          >
            <h2 className="text-sm font-bold text-[#4FD1C5] uppercase tracking-widest mb-4">
              The Results
            </h2>
            <h3 className="text-3xl md:text-4xl font-jakarta font-bold mb-6">
              Measurable Enterprise Impact
            </h3>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {data.impact.map((metric, idx) => (
              <motion.div
                key={idx}
                variants={fadeUpVar}
                className="bg-white/5 border border-white/10 p-8 rounded-2xl backdrop-blur-sm"
              >
                <div className="text-5xl font-jakarta font-extrabold text-[#4FD1C5] mb-2 tracking-tighter">
                  {metric.value}
                </div>
                <div className="text-lg font-bold mb-1">{metric.label}</div>
                <div className="text-sm text-slate-400">{metric.context}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 6. TESTIMONIAL */}
      <section className="py-32 bg-slate-50">
        <div className="max-w-[800px] mx-auto px-6 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUpVar}
          >
            <div className="text-[#4FD1C5] mb-8">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" className="mx-auto block">
                <path d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z" />
              </svg>
            </div>
            <p className="text-2xl md:text-3xl font-jakarta font-medium leading-relaxed text-[#0A0E14] mb-12">
              "{data.testimonial.quote}"
            </p>
            <div className="flex flex-col items-center">
              <div className="w-20 h-20 rounded-full overflow-hidden mb-4 ring-4 ring-white shadow-lg">
                <Image
                  src={data.testimonial.image}
                  alt={data.testimonial.name}
                  width={80}
                  height={80}
                  className="object-cover"
                />
              </div>
              <h5 className="font-bold text-[#0A0E14] text-lg">
                {data.testimonial.name}
              </h5>
              <p className="text-slate-500">
                {data.testimonial.title}, {data.testimonial.company}
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 7. CTA SECTION */}
      <section className="py-24 bg-white border-t border-slate-100">
        <div className="max-w-[1200px] mx-auto px-6 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUpVar}
            className="bg-evren-navy rounded-3xl p-12 md:p-20 relative overflow-hidden"
          >
            {/* Decals */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-evren-peach/15 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-evren-navy-light/30 rounded-full blur-[100px] translate-y-1/3 -translate-x-1/3 pointer-events-none" />

            <div className="relative z-10 max-w-2xl mx-auto">
              <h2 className="text-3xl md:text-5xl font-jakarta font-extrabold text-white mb-6">
                Want results like these?
              </h2>
              <p className="text-lg text-white/60 mb-10">
                Let&apos;s discuss how we can build intelligence into your business operations and drive measurable ROI.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <motion.a
                  href="/connect"
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0 16px 40px -8px rgba(244, 168, 154, 0.4)",
                  }}
                  whileTap={{ scale: 0.97 }}
                  className="inline-flex h-14 w-full sm:w-auto items-center justify-center gap-2 rounded-full bg-evren-peach px-8 font-heading text-sm font-bold text-evren-navy transition-transform"
                >
                  Book a Call
                  <ArrowRight size={16} />
                </motion.a>
                <Link
                  href="/work"
                  className="inline-flex h-14 w-full sm:w-auto items-center justify-center gap-2 rounded-xl bg-white/5 border border-white/10 px-8 font-inter text-sm font-semibold text-white transition-all hover:bg-white/10"
                >
                  View More Projects
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}

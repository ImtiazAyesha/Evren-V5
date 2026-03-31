"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { WORK_CASE_STUDIES, type CaseStudyCard } from "@/lib/case-studies-data";

// ═══════════════════════════════════════════════════════════════════════
//  CASE STUDY CARD
// ═══════════════════════════════════════════════════════════════════════

function CaseStudyCardComponent({
  study,
  index,
}: {
  study: CaseStudyCard;
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
    >
      <Link href={study.href} className="group cursor-pointer block">
        {/* ── Visual Asset ─── */}
        <div className="relative w-full aspect-[4/3] rounded-studio overflow-hidden shadow-warm">
          <div className="absolute inset-0 bg-gradient-to-br from-evren-navy/20 to-evren-peach/20" />
          <Image
            src={study.image}
            alt={`${study.client} case study preview`}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105"
            onError={(e) => {
              (e.target as HTMLImageElement).style.display = "none";
            }}
          />

          {/* ── ROI Overlay on hover ─── */}
          <div className="absolute inset-0 bg-gradient-to-br from-evren-navy/90 to-evren-peach/90 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col items-center justify-center text-center p-6">
            <span className="text-6xl font-heading font-bold text-white mb-2">
              {study.metric}
            </span>
            <span className="text-lg font-body text-white/90">
              {study.metricLabel}
            </span>
          </div>
        </div>

        {/* ── Content Details ─── */}
        <div className="mt-6 flex flex-col gap-2">
          {/* Industry Tags */}
          <div className="flex flex-wrap gap-2">
            {study.tags.map((tag) => (
              <span
                key={tag}
                className="bg-evren-peach-light text-evren-navy text-xs font-bold px-3 py-1 rounded-full w-fit"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Client / Project Title */}
          <h3 className="text-xl sm:text-2xl font-heading font-bold text-evren-navy group-hover:text-evren-peach transition-colors duration-300">
            {study.client}
          </h3>

          {/* Description */}
          <p className="text-evren-medium-gray font-body leading-relaxed max-w-md">
            {study.description}
          </p>
        </div>
      </Link>
    </motion.div>
  );
}

// ═══════════════════════════════════════════════════════════════════════
//  MAIN SECTION
// ═══════════════════════════════════════════════════════════════════════

export default function WorkCaseStudies() {
  return (
    <section
      id="work-case-studies"
      className="relative w-full py-24 sm:py-32 md:py-40 bg-evren-warm-white overflow-hidden"
    >
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ── Section Header ─── */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          <span className="text-sm uppercase tracking-widest text-evren-peach font-bold mb-4 block">
            Our Case Studies
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-7xl text-evren-navy font-heading font-bold">
            Real Products. Measurable Impact.
          </h1>
        </motion.div>

        {/* ── Case Study Grid ─── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-16 mt-16 md:mt-24">
          {WORK_CASE_STUDIES.map((study, i) => (
            <CaseStudyCardComponent key={study.href} study={study} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
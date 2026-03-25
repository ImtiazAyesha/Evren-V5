"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import ArrowButton from "@/components/ui/ArrowButton";

// ═══════════════════════════════════════════════════════════════════════
//  CASE STUDY DATA
// ═══════════════════════════════════════════════════════════════════════

interface CaseStudy {
  metric: string;
  metricLabel: string;
  client: string;
  description: string;
  tags: string[];
  image: string;
  href: string;
}

const CASE_STUDIES: CaseStudy[] = [
  {
    metric: "90%",
    metricLabel: "Reduction in Report Analysis Time",
    client:
      "Revolutionizing Healthcare Access: An AI-Powered Virtual Consultation Platform",
    description:
      "Global telehealth innovator iSeedoc partnered with Evren AI to architect an end-to-end, HIPAA-compliant telehealth platform that automates workflows, streamlines consultations, and leverages AI to deliver intelligent, accessible, and secure healthcare.",
    tags: ["Healthcare"],
    image: "/case studies/case 1.webp",
    href: "/case-studies/iseedoc-telehealth",
  },
  {
    metric: "$M+",
    metricLabel: "Cyber Risk Mitigated",
    client:
      "Mitigating Multi-Million Dollar Cyber Risk with Proactive AI Threat Detection",
    description:
      "For a high-growth fintech, we deployed a real-time LLM-based detection engine that analyzes and neutralizes sophisticated phishing attacks before they breach enterprise security.",
    tags: ["Cybersecurity"],
    image: "/case studies/case 2.webp",
    href: "/case-studies/cybersecurity-threat-detection",
  },
];

// ═══════════════════════════════════════════════════════════════════════
//  CASE STUDY CARD
// ═══════════════════════════════════════════════════════════════════════

function CaseStudyCard({
  study,
  index,
}: {
  study: CaseStudy;
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
    >
      <Link href={study.href} className="group cursor-pointer block">
        {/* ── Visual Asset ─── */}
        <div className="relative w-full aspect-[4/3] rounded-studio overflow-hidden shadow-warm">
          {/* Placeholder image — gradient fallback for now */}
          <div className="absolute inset-0 bg-gradient-to-br from-evren-navy/20 to-evren-peach/20" />
          <Image
            src={study.image}
            alt={`${study.client} case study preview`}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105"
            onError={(e) => {
              // Hide broken image, gradient fallback handles it
              (e.target as HTMLImageElement).style.display = "none";
            }}
          />

          {/* ── ROI Overlay ─── */}
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
          <h3 className="text-xl sm:text-2xl font-heading font-bold text-evren-navy">
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
//  FEATURED WORK SECTION
// ═══════════════════════════════════════════════════════════════════════

export default function FeaturedWorkSection() {
  return (
    <section
      id="featured-work"
      className="relative w-full py-12 sm:py-16 md:py-20 bg-evren-warm-white overflow-hidden"
    >
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ── Section Header ─── */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-6"
        >
          {/* Left — Text */}
          <div>
            <span className="text-sm uppercase tracking-widest text-evren-peach font-bold mb-4 block">
              Featured Work
            </span>
            <h2 className="text-3xl md:text-5xl text-evren-navy font-heading font-bold">
              Real Products. Measurable Impact.
            </h2>
          </div>

          {/* Right — CTA */}
          <ArrowButton
            href="/work"
            variant="ghost"
            size="sm"
          >
            View All Work
          </ArrowButton>
        </motion.div>

        {/* ── Case Study Grid ─── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          {CASE_STUDIES.map((study, i) => (
            <CaseStudyCard key={study.client} study={study} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

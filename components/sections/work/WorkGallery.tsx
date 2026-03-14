"use client";

import { useState, useRef, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence, type Variants } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import {
  CASE_STUDIES,
  getIndustries,
  type Industry,
  type CaseStudy,
} from "@/lib/case-studies-data";

// ═══════════════════════════════════════════════════════════════════════
//  MOTION CONFIG
// ═══════════════════════════════════════════════════════════════════════

const SPRING = { type: "spring" as const, stiffness: 100, damping: 20 };

const stagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 32, filter: "blur(4px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { ...SPRING },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 40, scale: 0.96 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
  exit: {
    opacity: 0,
    y: 20,
    scale: 0.96,
    transition: { duration: 0.3, ease: "easeIn" },
  },
};

// ═══════════════════════════════════════════════════════════════════════
//  FILTER BUTTON
// ═══════════════════════════════════════════════════════════════════════

function FilterButton({
  label,
  isActive,
  onClick,
}: {
  label: string;
  isActive: boolean;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      role="tab"
      aria-selected={isActive}
      className={`relative px-5 py-2.5 text-sm font-semibold font-body transition-colors duration-300 cursor-pointer
        focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-evren-navy
        ${
          isActive
            ? "text-evren-navy"
            : "text-evren-medium-gray hover:text-evren-navy"
        }`}
    >
      {label}
      {/* Active underline indicator */}
      <motion.span
        className="absolute bottom-0 left-0 right-0 h-[2px] bg-evren-navy rounded-full"
        initial={false}
        animate={{ scaleX: isActive ? 1 : 0, opacity: isActive ? 1 : 0 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        style={{ transformOrigin: "center" }}
      />
    </button>
  );
}

// ═══════════════════════════════════════════════════════════════════════
//  PROJECT CARD
// ═══════════════════════════════════════════════════════════════════════

function ProjectCard({
  study,
  index,
}: {
  study: CaseStudy;
  index: number;
}) {
  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      layout
      transition={{ duration: 0.6, delay: index * 0.1 }}
    >
      <Link
        href={`/work/${study.slug}`}
        className="group cursor-pointer block"
        aria-label={`View ${study.client} case study — ${study.hardMetric}`}
      >
        {/* ── Thumbnail with Hover Overlay ─── */}
        <div className="relative w-full aspect-[4/3] rounded-studio overflow-hidden shadow-warm group-hover:shadow-warm-hover transition-shadow duration-[600ms] ease-in-out">
          {/* Base gradient fallback */}
          <div className="absolute inset-0 bg-gradient-to-br from-evren-navy/10 to-evren-peach/10" />

          {/* Thumbnail Image */}
          <Image
            src={study.thumbnailImage}
            alt={`${study.client} project preview`}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover w-full h-full transition-transform duration-[600ms] ease-in-out group-hover:scale-105"
            onError={(e) => {
              (e.target as HTMLImageElement).style.display = "none";
            }}
          />

          {/* ── ROI Gradient Overlay — revealed on hover ─── */}
          <motion.div
            className="absolute inset-0 flex flex-col items-center justify-center text-center p-6"
            style={{
              background:
                "linear-gradient(to bottom right, rgba(27, 42, 74, 0.80), rgba(244, 168, 154, 0.80))",
            }}
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
          >
            <motion.span
              className="text-5xl sm:text-6xl font-heading font-extrabold text-white mb-3 drop-shadow-lg"
              initial={{ y: 20, opacity: 0 }}
              whileHover={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, ease: "easeInOut", delay: 0.1 }}
            >
              {study.hardMetric}
            </motion.span>
            <motion.span
              className="text-sm font-body text-white/90 uppercase tracking-widest font-semibold"
              initial={{ y: 10, opacity: 0 }}
              whileHover={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, ease: "easeInOut", delay: 0.2 }}
            >
              View Case Study
            </motion.span>
          </motion.div>

          {/* Corner Arrow */}
          <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-[600ms] ease-in-out">
            <ArrowUpRight className="w-5 h-5 text-white" />
          </div>
        </div>

        {/* ── Card Meta ─── */}
        <div className="mt-5 flex flex-col gap-2">
          {/* Industry Tag */}
          <span className="bg-evren-peach-light text-evren-navy text-[11px] font-bold px-3 py-1 rounded-full w-fit uppercase tracking-wider">
            {study.industry}
          </span>

          {/* Client Name */}
          <h3 className="text-xl font-heading font-bold text-evren-navy group-hover:text-evren-navy-light transition-colors duration-300">
            {study.client}
          </h3>

          {/* Description */}
          <p className="text-evren-medium-gray font-body text-sm leading-relaxed max-w-sm line-clamp-2">
            {study.subheadline}
          </p>
        </div>
      </Link>
    </motion.div>
  );
}

// ═══════════════════════════════════════════════════════════════════════
//  WORK GALLERY (MAIN EXPORT)
// ═══════════════════════════════════════════════════════════════════════

export default function WorkGallery() {
  const [activeFilter, setActiveFilter] = useState<Industry | "All">("All");
  const gridRef = useRef<HTMLDivElement>(null);
  const industries = getIndustries();

  const filteredStudies =
    activeFilter === "All"
      ? CASE_STUDIES
      : CASE_STUDIES.filter((s) => s.industry === activeFilter);

  const handleFilter = useCallback((filter: Industry | "All") => {
    setActiveFilter(filter);
  }, []);

  return (
    <section
      id="work-gallery"
      className="relative w-full py-24 md:py-32 bg-evren-warm-white overflow-hidden"
    >
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        {/* ── Section Header ─── */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="mb-12"
        >
          <motion.span
            variants={fadeUp}
            className="text-sm uppercase tracking-widest text-evren-peach font-bold mb-4 block"
          >
            Our Portfolio
          </motion.span>
          <motion.h1
            variants={fadeUp}
            className="text-4xl md:text-5xl lg:text-6xl text-evren-navy font-heading font-extrabold tracking-tight leading-[1.05]"
          >
            Real Products.
            <br />
            <span className="text-evren-medium-gray">Measurable Impact.</span>
          </motion.h1>
        </motion.div>

        {/* ── Filter System ─── */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
          className="flex items-center gap-1 mb-12 border-b border-evren-light-gray overflow-x-auto pb-0 scrollbar-none"
          role="tablist"
          aria-label="Filter projects by industry"
        >
          <FilterButton
            label="All"
            isActive={activeFilter === "All"}
            onClick={() => handleFilter("All")}
          />
          {industries.map((ind) => (
            <FilterButton
              key={ind}
              label={ind}
              isActive={activeFilter === ind}
              onClick={() => handleFilter(ind)}
            />
          ))}
        </motion.div>

        {/* ── Project Grid ─── */}
        <div
          ref={gridRef}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10"
        >
          <AnimatePresence mode="popLayout">
            {filteredStudies.map((study, i) => (
              <ProjectCard key={study.slug} study={study} index={i} />
            ))}
          </AnimatePresence>
        </div>

        {/* Empty state */}
        {filteredStudies.length === 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center py-20"
          >
            <p className="text-evren-medium-gray font-body text-lg">
              No case studies found for this industry yet.
            </p>
          </motion.div>
        )}
      </div>
    </section>
  );
}

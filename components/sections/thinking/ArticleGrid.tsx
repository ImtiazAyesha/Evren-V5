"use client";

import { useState, useMemo, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { ArrowRight } from "lucide-react";
import {
  ARTICLES,
  CATEGORIES,
  type Article,
  type ArticleCategory,
} from "@/lib/articles-data";

// ═══════════════════════════════════════════════════════════════════════
//  CONSTANTS
// ═══════════════════════════════════════════════════════════════════════

const ARTICLES_PER_PAGE = 6;

// Deterministic pseudo-random: avoids hydration mismatch from Math.random()
// Round to 6 decimals so Node.js (SSR) and browser produce identical strings
function seededRandom(row: number, col: number): number {
  const n = Math.sin(row * 127.1 + col * 311.7) * 43758.5453;
  return Math.round((n - Math.floor(n)) * 1e6) / 1e6; // 0..1, 6 dp
}

// Abstract geometry SVG patterns for cards without images
const PATTERNS = [
  // Concentric circles
  (
    <svg key="p1" className="w-full h-full" viewBox="0 0 400 200" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="320" cy="100" r="80" stroke="#1B2A4A" strokeWidth="0.5" opacity="0.12" />
      <circle cx="320" cy="100" r="55" stroke="#1B2A4A" strokeWidth="0.5" opacity="0.09" />
      <circle cx="320" cy="100" r="30" stroke="#1B2A4A" strokeWidth="0.5" opacity="0.06" />
      <line x1="0" y1="180" x2="250" y2="180" stroke="#1B2A4A" strokeWidth="0.5" opacity="0.06" />
      <line x1="0" y1="165" x2="180" y2="165" stroke="#1B2A4A" strokeWidth="0.5" opacity="0.04" />
    </svg>
  ),
  // Grid dots
  (
    <svg key="p2" className="w-full h-full" viewBox="0 0 400 200" fill="none" xmlns="http://www.w3.org/2000/svg">
      {Array.from({ length: 8 }).map((_, row) =>
        Array.from({ length: 16 }).map((_, col) => (
          <circle
            key={`${row}-${col}`}
            cx={25 + col * 25}
            cy={25 + row * 25}
            r="1.5"
            fill="#1B2A4A"
            opacity={Math.round((0.04 + seededRandom(row, col) * 0.06) * 1e6) / 1e6}
          />
        ))
      )}
    </svg>
  ),
  // Diagonal lines
  (
    <svg key="p3" className="w-full h-full" viewBox="0 0 400 200" fill="none" xmlns="http://www.w3.org/2000/svg">
      {Array.from({ length: 12 }).map((_, i) => (
        <line
          key={i}
          x1={i * 40}
          y1="0"
          x2={i * 40 + 200}
          y2="200"
          stroke="#1B2A4A"
          strokeWidth="0.5"
          opacity={0.03 + (i % 3) * 0.02}
        />
      ))}
    </svg>
  ),
  // Hexagonal pattern
  (
    <svg key="p4" className="w-full h-full" viewBox="0 0 400 200" fill="none" xmlns="http://www.w3.org/2000/svg">
      <polygon points="200,20 240,45 240,95 200,120 160,95 160,45" stroke="#1B2A4A" strokeWidth="0.5" opacity="0.08" fill="none" />
      <polygon points="280,60 320,85 320,135 280,160 240,135 240,85" stroke="#1B2A4A" strokeWidth="0.5" opacity="0.06" fill="none" />
      <polygon points="120,60 160,85 160,135 120,160 80,135 80,85" stroke="#1B2A4A" strokeWidth="0.5" opacity="0.05" fill="none" />
    </svg>
  ),
  // Intersecting arcs
  (
    <svg key="p5" className="w-full h-full" viewBox="0 0 400 200" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M 0 200 Q 200 -50 400 200" stroke="#1B2A4A" strokeWidth="0.5" opacity="0.08" fill="none" />
      <path d="M 0 200 Q 200 20 400 200" stroke="#1B2A4A" strokeWidth="0.5" opacity="0.06" fill="none" />
      <path d="M 0 200 Q 200 80 400 200" stroke="#1B2A4A" strokeWidth="0.5" opacity="0.04" fill="none" />
      <circle cx="200" cy="140" r="4" fill="#F4A89A" opacity="0.2" />
    </svg>
  ),
];

// ═══════════════════════════════════════════════════════════════════════
//  CARD COMPONENT
// ═══════════════════════════════════════════════════════════════════════

function ArticleCard({
  article,
  index,
  patternIndex,
}: {
  article: Article;
  index: number;
  patternIndex: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { amount: 0.2, once: true });

  // Format date
  const formattedDate = new Date(article.publishedAt).toLocaleDateString(
    "en-US",
    { month: "long", day: "numeric", year: "numeric" }
  );

  return (
    <motion.article
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{
        duration: 0.6,
        delay: (index % 3) * 0.1,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="group break-inside-avoid mb-6"
    >
      <a
        href={`/thinking/${article.slug}`}
        id={`article-card-${article.slug}`}
        className="block bg-white rounded-2xl border border-evren-light-gray/60 overflow-hidden
                   transition-all duration-500 ease-out
                   hover:border-evren-peach/50 hover:shadow-[0_20px_40px_-15px_rgba(27,42,74,0.1)] hover:-translate-y-1"
      >
        {/* ── Abstract Geometry Header ── */}
        <div className="relative h-40 bg-evren-warm-white overflow-hidden">
          <div className="absolute inset-0">
            {PATTERNS[patternIndex % PATTERNS.length]}
          </div>
          {/* Gradient overlay for depth */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white/60" />
        </div>

        {/* ── Card Body ── */}
        <div className="p-6 pt-5">
          {/* Category pill + Read time */}
          <div className="flex items-center justify-between mb-4">
            <span
              className="inline-block px-3 py-1 rounded-full text-xs font-medium tracking-wide
                         bg-evren-peach-light text-evren-navy"
            >
              {article.category}
            </span>
            <span className="text-xs text-evren-medium-gray font-body">
              {article.readTime}
            </span>
          </div>

          {/* Title */}
          <h3
            className="font-heading font-bold text-evren-charcoal leading-snug mb-3
                        group-hover:text-evren-navy transition-colors duration-300"
            style={{ fontSize: "clamp(18px, 2vw, 24px)" }}
          >
            {article.title}
          </h3>

          {/* Excerpt — 2 lines max */}
          <p className="font-body text-sm text-evren-medium-gray leading-relaxed line-clamp-2 mb-5">
            {article.excerpt}
          </p>

          {/* Author + Date */}
          <div className="flex items-center justify-between border-t border-evren-light-gray/40 pt-4">
            <div>
              <p className="text-xs font-medium text-evren-charcoal font-body">
                {article.author.name}
              </p>
              <p className="text-xs text-evren-medium-gray font-body">
                {formattedDate}
              </p>
            </div>

            {/* Read More link */}
            <span className="inline-flex items-center gap-1.5 text-sm font-medium text-evren-navy font-body group/link">
              Read
              <ArrowRight
                size={14}
                className="transition-transform duration-300 group-hover:translate-x-1.5"
              />
            </span>
          </div>
        </div>
      </a>
    </motion.article>
  );
}

// ═══════════════════════════════════════════════════════════════════════
//  CATEGORY FILTER BAR — Sticky horizontal sub-header
// ═══════════════════════════════════════════════════════════════════════

function CategoryFilter({
  active,
  onChange,
}: {
  active: ArticleCategory;
  onChange: (c: ArticleCategory) => void;
}) {
  return (
    <div
      id="category-filter"
      className="sticky top-[72px] z-30 bg-evren-warm-white/90 backdrop-blur-lg border-b border-evren-light-gray/40"
    >
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <nav className="flex items-center gap-6 md:gap-8 overflow-x-auto py-4 scrollbar-hide -mx-2 px-2">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              id={`filter-${cat.toLowerCase().replace(/[^a-z]/g, "-")}`}
              onClick={() => onChange(cat)}
              className={`relative whitespace-nowrap text-sm font-medium font-body transition-colors duration-300 pb-1 cursor-pointer shrink-0
                ${
                  active === cat
                    ? "text-evren-navy"
                    : "text-evren-medium-gray hover:text-evren-charcoal"
                }`}
            >
              {cat}
              {/* Active underline */}
              {active === cat && (
                <motion.div
                  layoutId="category-underline"
                  className="absolute -bottom-0 left-0 right-0 h-[2px] bg-evren-navy rounded-full"
                  transition={{
                    type: "spring",
                    stiffness: 500,
                    damping: 35,
                  }}
                />
              )}
            </button>
          ))}
        </nav>
      </div>
    </div>
  );
}

// ═══════════════════════════════════════════════════════════════════════
//  MAIN ARTICLE GRID — Masonry layout with "Load More"
// ═══════════════════════════════════════════════════════════════════════

export default function ArticleGrid() {
  const [activeCategory, setActiveCategory] =
    useState<ArticleCategory>("All");
  const [visibleCount, setVisibleCount] = useState(ARTICLES_PER_PAGE);

  // Filter articles
  const filteredArticles = useMemo(() => {
    if (activeCategory === "All") return ARTICLES;
    return ARTICLES.filter((a) => a.category === activeCategory);
  }, [activeCategory]);

  // Paginated articles
  const displayedArticles = filteredArticles.slice(0, visibleCount);
  const hasMore = visibleCount < filteredArticles.length;

  // Reset pagination on category change
  const handleCategoryChange = (cat: ArticleCategory) => {
    setActiveCategory(cat);
    setVisibleCount(ARTICLES_PER_PAGE);
  };

  return (
    <>
      {/* ── Sticky Category Filter ── */}
      <CategoryFilter active={activeCategory} onChange={handleCategoryChange} />

      {/* ── Masonry Grid ── */}
      <section
        id="article-grid"
        className="max-w-6xl mx-auto px-6 lg:px-8 pt-12 pb-20"
      >
        {/* Article count */}
        <motion.p
          key={activeCategory}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-sm text-evren-medium-gray font-body mb-8"
        >
          {filteredArticles.length} article
          {filteredArticles.length !== 1 ? "s" : ""}
          {activeCategory !== "All" ? ` in ${activeCategory}` : ""}
        </motion.p>

        {/* CSS Masonry columns */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.35 }}
            className="columns-1 md:columns-2 lg:columns-3 gap-6"
            style={{ columnFill: "balance" }}
          >
            {displayedArticles.map((article, idx) => (
              <ArticleCard
                key={article.slug}
                article={article}
                index={idx}
                patternIndex={idx}
              />
            ))}
          </motion.div>
        </AnimatePresence>

        {/* ── Load More ── */}
        {hasMore && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="flex justify-center mt-14"
          >
            <motion.button
              id="load-more-articles"
              onClick={() =>
                setVisibleCount((prev) => prev + ARTICLES_PER_PAGE)
              }
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full
                         border-2 border-evren-navy/15 text-evren-navy font-heading font-semibold text-sm
                         hover:border-evren-navy/30 hover:bg-evren-navy/[0.03]
                         transition-all duration-300 cursor-pointer"
            >
              Load More Articles
              <ArrowRight size={14} />
            </motion.button>
          </motion.div>
        )}

        {/* Empty state */}
        {filteredArticles.length === 0 && (
          <div className="text-center py-20">
            <p className="text-evren-medium-gray font-body text-lg">
              No articles found in this category yet.
            </p>
          </div>
        )}
      </section>
    </>
  );
}

"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";

// ═══════════════════════════════════════════════════════════════════════
//  TYPES (From Sanity Query)
// ═══════════════════════════════════════════════════════════════════════

export interface SanityPost {
  _id: string;
  title: string;
  slug: { current: string };
  excerpt: string;
  badge?: string;
  publishedAt: string;
  mainImage?: {
    asset: { url: string; metadata?: { lqip?: string } };
    alt?: string;
  };
  author?: {
    name: string;
    image?: { asset: { url: string } };
  };
  categories?: { title: string; slug: { current: string } }[];
}

const ARTICLES_PER_PAGE = 6;

// ═══════════════════════════════════════════════════════════════════════
//  CARD COMPONENT
// ═══════════════════════════════════════════════════════════════════════

function ArticleCard({
  article,
  index,
}: {
  article: SanityPost;
  index: number;
}) {
  const formattedDate = new Date(article.publishedAt).toLocaleDateString(
    "en-US",
    { month: "short", day: "numeric", year: "numeric" }
  );

  const primaryCategory =
    article.categories && article.categories.length > 0
      ? article.categories[0].title
      : "Uncategorized";

  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: (index % 3) * 0.1, ease: "easeOut" }}
      className="flex"
    >
      <Link
        href={`/thinking/${article.slug.current}`}
        className="flex flex-col bg-white rounded-2xl border border-evren-light-gray/60 overflow-hidden w-full transition-all duration-300 hover:shadow-lg hover:-translate-y-1 group"
      >
        {/* ── Image Section ── */}
        <div className="relative h-[240px] w-full bg-[#f4f4f7] overflow-hidden flex-shrink-0">
          {article.mainImage?.asset?.url ? (
            <Image
              src={article.mainImage.asset.url}
              alt={article.mainImage.alt || article.title}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
              placeholder={article.mainImage?.asset?.metadata?.lqip ? "blur" : "empty"}
              blurDataURL={article.mainImage?.asset?.metadata?.lqip}
            />
          ) : (
             <div className="absolute inset-0 bg-evren-light-gray/30" />
          )}

          {/* Badge Removed */}
        </div>

        {/* ── Card Body ── */}
        <div className="p-6 flex flex-col flex-1">
          {/* Metadata Row */}
          <div className="flex items-center gap-4 mb-4">
            <span className="text-xs font-bold tracking-wider text-[#FF6347] uppercase font-body">
              {primaryCategory}
            </span>
            <span className="text-xs text-evren-medium-gray font-body font-medium">
              {formattedDate}
            </span>
          </div>

          {/* Title */}
          <h3 className="font-heading font-bold text-xl text-evren-charcoal leading-snug mb-3 group-hover:text-evren-navy transition-colors duration-300">
            {article.title}
          </h3>

          {/* Excerpt */}
          <p className="font-body text-sm text-evren-medium-gray leading-relaxed line-clamp-2 mb-6 flex-1">
            {article.excerpt}
          </p>

          {/* Author */}
          <div className="flex items-center mt-auto pt-4">
            <span className="text-evren-medium-gray mr-1 text-[13px]">By</span>
            <span className="text-[13px] font-semibold text-evren-navy">{article.author?.name || "Unknown Author"}</span>
          </div>
        </div>
      </Link>
    </motion.article>
  );
}

// ═══════════════════════════════════════════════════════════════════════
//  MAIN COMPONENT
// ═══════════════════════════════════════════════════════════════════════

export default function ArticleGrid({ initialPosts }: { initialPosts: SanityPost[] }) {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  // Dynamically extract all unique categories from the fetched posts
  const allCategories = useMemo(() => {
    const categoriesSet = new Set<string>();
    initialPosts.forEach((post) => {
      if (post.categories) {
        post.categories.forEach((cat) => categoriesSet.add(cat.title));
      }
    });
    return ["All", ...Array.from(categoriesSet).sort()];
  }, [initialPosts]);

  // Filter posts based on selected category tab
  const filteredPosts = useMemo(() => {
    if (selectedCategory === "All") return initialPosts;
    return initialPosts.filter((post) => 
      post.categories?.some((cat) => cat.title === selectedCategory)
    );
  }, [initialPosts, selectedCategory]);

  // Pagination Logic (based on filtered posts!)
  const totalPages = Math.ceil(filteredPosts.length / ARTICLES_PER_PAGE);
  const displayedPosts = filteredPosts.slice(
    (currentPage - 1) * ARTICLES_PER_PAGE,
    currentPage * ARTICLES_PER_PAGE
  );

  const goToPage = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: document.getElementById("article-grid")?.offsetTop! - 100, behavior: "smooth" });
  };

  return (
    <section id="article-grid" className="max-w-[1280px] w-full mx-auto px-6 lg:px-8 pt-8 pb-16 lg:pt-12 lg:pb-24">
      {initialPosts.length === 0 ? (
        <div className="text-center py-20 bg-white rounded-3xl border border-dashed border-evren-light-gray">
          <p className="text-evren-medium-gray font-body md:text-lg">
            No articles published yet. They will appear here once added in Sanity.
          </p>
        </div>
      ) : (
        <>
          {/* Dynamic Category Tabs */}
          {allCategories.length > 1 && (
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex flex-wrap items-center gap-2 sm:gap-3 mb-10 sm:mb-12"
            >
              {allCategories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => {
                    setSelectedCategory(cat);
                    setCurrentPage(1); // Reset to page 1 when category changes
                  }}
                  className={`px-5 py-2 rounded-full text-sm font-heading font-semibold transition-all duration-300 ${
                    selectedCategory === cat
                      ? "bg-evren-navy text-white shadow-md shadow-evren-navy/20"
                      : "bg-white text-evren-charcoal border border-evren-light-gray hover:border-evren-navy/30 hover:bg-evren-warm-white"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </motion.div>
          )}

          {/* Main Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <AnimatePresence mode="popLayout">
              {displayedPosts.map((post, idx) => (
                <ArticleCard key={post._id} article={post} index={idx} />
              ))}
            </AnimatePresence>
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex items-center justify-center gap-2">
              <button
                onClick={() => goToPage(Math.max(1, currentPage - 1))}
                disabled={currentPage === 1}
                className="flex items-center justify-center h-10 px-4 rounded-full border border-evren-light-gray text-sm font-medium text-evren-charcoal disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50 transition-colors"
              >
                <ChevronLeft size={16} className="mr-1" />
                Previous
              </button>

              <div className="flex items-center gap-1 mx-2">
                {[...Array(totalPages)].map((_, i) => {
                  const pageNumber = i + 1;
                  return (
                    <button
                      key={pageNumber}
                      onClick={() => goToPage(pageNumber)}
                      className={`w-10 h-10 flex items-center justify-center rounded-full text-sm font-medium transition-colors ${
                        currentPage === pageNumber
                          ? "bg-evren-charcoal text-white"
                          : "text-evren-charcoal hover:bg-gray-100"
                      }`}
                    >
                      {pageNumber}
                    </button>
                  );
                })}
              </div>

              <button
                onClick={() => goToPage(Math.min(totalPages, currentPage + 1))}
                disabled={currentPage === totalPages}
                className="flex items-center justify-center h-10 px-4 rounded-full border border-evren-light-gray text-sm font-medium text-evren-charcoal disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50 transition-colors"
              >
                Next
                <ChevronRight size={16} className="ml-1" />
              </button>
            </div>
          )}
        </>
      )}
    </section>
  );
}

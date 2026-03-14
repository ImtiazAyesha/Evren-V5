"use client";

import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Clock, User } from "lucide-react";
import type { Article } from "@/lib/articles-data";
import ArticleCTA from "@/components/sections/thinking/ArticleCTA";

// ═══════════════════════════════════════════════════════════════════════
//  ARTICLE CONTENT — Full editorial reading experience
//  Wide margins, leading-relaxed body text, no sidebars.
// ═══════════════════════════════════════════════════════════════════════

export default function ArticleContent({
  article,
  relatedArticles,
}: {
  article: Article;
  relatedArticles: Article[];
}) {
  const formattedDate = new Date(article.publishedAt).toLocaleDateString(
    "en-US",
    { month: "long", day: "numeric", year: "numeric" }
  );

  return (
    <>
      {/* ── Article Header ── */}
      <article className="pt-36 md:pt-44 pb-16">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          {/* Back link */}
          <motion.a
            href="/thinking"
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
            className="inline-flex items-center gap-2 text-sm text-evren-medium-gray hover:text-evren-navy
                       font-body transition-colors duration-300 mb-10"
          >
            <ArrowLeft size={14} />
            Back to Thinking
          </motion.a>

          {/* Category pill */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="mb-6"
          >
            <span className="inline-block px-3 py-1 rounded-full text-xs font-medium tracking-wide bg-evren-peach-light text-evren-navy">
              {article.category}
            </span>
          </motion.div>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="font-heading font-bold text-evren-charcoal leading-[1.12] tracking-tight mb-8"
            style={{ fontSize: "clamp(28px, 5vw, 48px)" }}
          >
            {article.title}
          </motion.h1>

          {/* Meta bar */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="flex flex-wrap items-center gap-6 text-sm text-evren-medium-gray font-body
                        border-b border-evren-light-gray/50 pb-8 mb-12"
          >
            <div className="flex items-center gap-2">
              <User size={14} className="text-evren-peach" />
              <span>
                <span className="font-medium text-evren-charcoal">
                  {article.author.name}
                </span>
                {" · "}
                {article.author.role}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <Clock size={14} className="text-evren-peach" />
              <span>{formattedDate}</span>
            </div>
            <span className="text-evren-peach">•</span>
            <span>{article.readTime}</span>
          </motion.div>

          {/* ── Article Body ── */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.35 }}
          >
            {article.body.map((paragraph, idx) => (
              <p
                key={idx}
                className={`font-body text-evren-charcoal leading-[1.85] mb-7
                  ${idx === 0 ? "text-lg md:text-xl text-evren-charcoal/90" : "text-base md:text-[17px]"}`}
              >
                {paragraph}
              </p>
            ))}
          </motion.div>

          {/* ── End divider ── */}
          <div className="flex items-center justify-center gap-3 mt-16 mb-16">
            <span className="w-2 h-2 rounded-full bg-evren-peach/40" />
            <span className="w-2 h-2 rounded-full bg-evren-peach/60" />
            <span className="w-2 h-2 rounded-full bg-evren-peach/40" />
          </div>
        </div>
      </article>

      {/* ── Universal CTA ── */}
      <ArticleCTA />

      {/* ── Related Articles ── */}
      {relatedArticles.length > 0 && (
        <section
          id="related-articles"
          className="max-w-4xl mx-auto px-6 lg:px-8 pb-20"
        >
          <h2 className="font-heading font-bold text-evren-charcoal text-xl md:text-2xl tracking-tight mb-8">
            Continue Reading
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {relatedArticles.map((related) => {
              const relatedDate = new Date(
                related.publishedAt
              ).toLocaleDateString("en-US", {
                month: "short",
                day: "numeric",
              });

              return (
                <motion.a
                  key={related.slug}
                  href={`/thinking/${related.slug}`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="group block p-6 bg-white rounded-2xl border border-evren-light-gray/60
                             hover:border-evren-navy/15 hover:shadow-warm transition-all duration-300"
                >
                  <span className="inline-block px-2.5 py-0.5 rounded-full text-[11px] font-medium bg-evren-peach-light text-evren-navy mb-3">
                    {related.category}
                  </span>
                  <h3 className="font-heading font-bold text-evren-charcoal text-base leading-snug mb-2 group-hover:text-evren-navy transition-colors duration-300">
                    {related.title}
                  </h3>
                  <p className="font-body text-sm text-evren-medium-gray line-clamp-2 mb-4">
                    {related.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-evren-medium-gray font-body">
                      {relatedDate} · {related.readTime}
                    </span>
                    <ArrowRight
                      size={14}
                      className="text-evren-navy transition-transform duration-300 group-hover:translate-x-1"
                    />
                  </div>
                </motion.a>
              );
            })}
          </div>
        </section>
      )}
    </>
  );
}

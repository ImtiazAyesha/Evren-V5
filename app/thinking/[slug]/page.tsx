import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { ARTICLES, getArticleBySlug, getAllArticleSlugs } from "@/lib/articles-data";
import SmoothScroll from "@/components/SmoothScroll";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ArticleContent from "./ArticleContent";

// ═══════════════════════════════════════════════════════════════════════
//  /thinking/[slug] — Individual Article Page
//  Static generation with generateStaticParams for performance.
// ═══════════════════════════════════════════════════════════════════════

// Generate static paths for all articles
export function generateStaticParams() {
  return getAllArticleSlugs().map((slug) => ({ slug }));
}

// Dynamic metadata per article
export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const article = getArticleBySlug(params.slug);
  if (!article) return {};

  return {
    title: `${article.title} — Evren AI Thinking`,
    description: article.excerpt,
    openGraph: {
      title: article.title,
      description: article.excerpt,
      type: "article",
      publishedTime: article.publishedAt,
      authors: [article.author.name],
    },
  };
}

export default function ArticlePage({
  params,
}: {
  params: { slug: string };
}) {
  const article = getArticleBySlug(params.slug);
  if (!article) return notFound();

  // Get related articles (same category, excluding current)
  const relatedArticles = ARTICLES.filter(
    (a) => a.category === article.category && a.slug !== article.slug
  ).slice(0, 2);

  return (
    <SmoothScroll>
      <Navbar />
      <main className="flex flex-col min-h-screen bg-evren-warm-white">
        <ArticleContent article={article} relatedArticles={relatedArticles} />
      </main>
      <Footer />
    </SmoothScroll>
  );
}

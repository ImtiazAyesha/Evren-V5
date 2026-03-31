import { notFound } from "next/navigation";
import type { Metadata } from "next";
import SmoothScroll from "@/components/SmoothScroll";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ArticleContent from "./ArticleContent";
import { client } from "@/sanity/lib/client";
import { POST_BY_SLUG_QUERY, POSTS_QUERY } from "@/sanity/lib/queries";

// ═══════════════════════════════════════════════════════════════════════
//  /thinking/[slug] — Individual Article Page
// ═══════════════════════════════════════════════════════════════════════

export const revalidate = 60; // Revalidate every 60 seconds

// Dynamic metadata per article
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const resolvedParams = await params;
  const article = await client.fetch(POST_BY_SLUG_QUERY, { slug: resolvedParams.slug });
  if (!article) return {};

  return {
    title: `${article.title} — Evren AI Thinking`,
    description: article.excerpt || "Strategic insights from Evren AI.",
    openGraph: {
      title: article.title,
      description: article.excerpt,
      type: "article",
      publishedTime: article.publishedAt,
      authors: [article.author?.name || "Evren AI"],
    },
  };
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const resolvedParams = await params;
  const article = await client.fetch(POST_BY_SLUG_QUERY, { slug: resolvedParams.slug });
  
  if (!article) return notFound();

  // Get related articles (fetch all and filter for now, or use a specific GROQ query)
  const allPosts = await client.fetch(POSTS_QUERY);
  const primaryCategory = article.categories?.[0]?.title;
  
  const relatedArticles = allPosts
    .filter((a: any) => a.categories?.[0]?.title === primaryCategory && a?.slug?.current !== resolvedParams.slug)
    .slice(0, 2);

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

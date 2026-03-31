import type { Metadata } from "next";
import SmoothScroll from "@/components/SmoothScroll";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ThinkingHero from "@/components/sections/thinking/ThinkingHero";
import ArticleGrid from "@/components/sections/thinking/ArticleGrid";
import { client } from "@/sanity/lib/client";
import { POSTS_QUERY } from "@/sanity/lib/queries";

// ═══════════════════════════════════════════════════════════════════════
//  /thinking — The Editorial Index
// ═══════════════════════════════════════════════════════════════════════

export const metadata: Metadata = {
  title: "Thinking — Evren AI | AI Engineering Insights for CTOs & Product Leaders",
  description:
    "Open-sourced methodologies, engineering deep-dives, and strategic frameworks from the Evren AI studio. Written for CTOs and Product Leaders who ship.",
  openGraph: {
    title: "Thinking — Evren AI",
    description:
      "AI engineering insights, product strategy, and hard-won lessons from building AI systems in production.",
    type: "website",
  },
};

// Next.js Revalidation config for Sanity Content
export const revalidate = 60; // Revalidate every 60 seconds

export default async function ThinkingPage() {
  const initialPosts = await client.fetch(POSTS_QUERY);

  return (
    <SmoothScroll>
      <Navbar />
      <main className="flex flex-col min-h-screen bg-evren-warm-white">
        <ThinkingHero />
        <ArticleGrid initialPosts={initialPosts} />
      </main>
      <Footer />
    </SmoothScroll>
  );
}

import type { Metadata } from "next";
import SmoothScroll from "@/components/SmoothScroll";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ThinkingHero from "@/components/sections/thinking/ThinkingHero";
import ArticleGrid from "@/components/sections/thinking/ArticleGrid";

// ═══════════════════════════════════════════════════════════════════════
//  /thinking — The Editorial Index
//  SEO-optimized metadata for the main Thinking page.
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

export default function ThinkingPage() {
  return (
    <SmoothScroll>
      <Navbar />
      <main className="flex flex-col min-h-screen bg-evren-warm-white">
        <ThinkingHero />
        <ArticleGrid />
      </main>
      <Footer />
    </SmoothScroll>
  );
}


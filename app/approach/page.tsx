import type { Metadata } from "next";
import SmoothScroll from "@/components/SmoothScroll";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ApproachHero from "@/components/sections/approach/ApproachHero";
import MethodologySection from "@/components/sections/approach/MethodologySection";
import AINativeDifference from "@/components/sections/approach/AINativeDifference";
import EnterpriseStack from "@/components/sections/approach/EnterpriseStack";

export const metadata: Metadata = {
  title: "Our Approach — Built to Scale. Designed to Think. | Evren AI",
  description:
    "Discover how Evren AI bridges the gap between high-level innovation and hardened, scalable production code. Our AI-native approach integrates intelligence from Sprint 1, not as an afterthought.",
  keywords: [
    "AI development methodology",
    "AI-native development",
    "enterprise AI architecture",
    "scalable AI solutions",
    "AI integration strategy",
    "LLM integration",
    "computer vision",
    "predictive analytics",
  ],
  openGraph: {
    title: "Our Approach — Built to Scale. Designed to Think. | Evren AI",
    description:
      "Discover how Evren AI bridges the gap between high-level innovation and hardened, scalable production code.",
    type: "website",
  },
};

export default function ApproachPage() {
  return (
    <SmoothScroll>
      <Navbar />
      <main className="flex flex-col min-h-screen">
        <ApproachHero />
        <MethodologySection />
        <AINativeDifference />
        <EnterpriseStack />
      </main>
      <Footer />
    </SmoothScroll>
  );
}

import SmoothScroll from "@/components/SmoothScroll";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CaseStudyLayout from "@/components/sections/CaseStudyLayout";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Apex Construction — AI-Native Safety Portal | Evren AI Case Study",
  description:
    "How Evren AI engineered a computer-vision powered safety portal that achieved a 40% reduction in on-site incidents for Apex Construction across 24 active job sites.",
  openGraph: {
    title: "Apex Construction Case Study — 40% Incident Reduction",
    description:
      "See how Evren AI's custom AI safety portal transformed construction site operations.",
    type: "article",
  },
};

export default function CaseStudyPage() {
  return (
    <SmoothScroll>
      <Navbar />
      <main className="flex flex-col min-h-screen">
        <CaseStudyLayout />
      </main>
      <Footer />
    </SmoothScroll>
  );
}

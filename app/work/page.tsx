import SmoothScroll from "@/components/SmoothScroll";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WorkGallery from "@/components/sections/work/WorkGallery";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Work — Real Products, Measurable Impact | Evren AI",
  description:
    "Explore the portfolio of AI-powered enterprise products built by Evren AI. From healthcare intelligence to fintech compliance engines — see the ROI we deliver.",
  openGraph: {
    title: "Our Work — Real Products, Measurable Impact | Evren AI",
    description:
      "Explore the portfolio of AI-powered enterprise products built by Evren AI.",
    type: "website",
  },
};

export default function WorkPage() {
  return (
    <SmoothScroll>
      <Navbar />
      <main className="flex flex-col min-h-screen">
        <WorkGallery />
      </main>
      <Footer />
    </SmoothScroll>
  );
}

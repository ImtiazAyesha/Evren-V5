import type { Metadata } from "next";
import SmoothScroll from "@/components/SmoothScroll";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import CareersHero from "@/components/sections/careers/CareersHero";
import WhyEvren from "@/components/sections/careers/WhyEvren";
import OpenPositions from "@/components/sections/careers/OpenPositions";
import HiringProcess from "@/components/sections/careers/HiringProcess";
import CareersCtaBanner from "@/components/sections/careers/CareersCtaBanner";

export const metadata: Metadata = {
  title: "Careers — Join Evren AI | Digital Product Studio",
  description:
    "We're building AI-powered products that matter. Join a team of engineers, designers, and strategists at the frontier of intelligent product development. Two roles open: Full Stack AI Engineer and Senior AI Engineer.",
  openGraph: {
    title: "Careers — Join Evren AI | Digital Product Studio",
    description:
      "We're building AI-powered products that matter. Join a team of engineers, designers, and strategists at the frontier of intelligent product development.",
    type: "website",
  },
};

export default function CareersPage() {
  return (
    <SmoothScroll>
      <Navbar />
      <main className="flex flex-col min-h-screen">
        <CareersHero />
        <WhyEvren />
        <OpenPositions />
        <HiringProcess />
        <CareersCtaBanner />
      </main>
      <Footer hideCTA={true} />
    </SmoothScroll>
  );
}

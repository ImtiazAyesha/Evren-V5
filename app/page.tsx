import SmoothScroll from "@/components/SmoothScroll";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/components/sections/Hero";
// import HeroSection from "@/components/sections/HeroSection";
import Differentiators from "@/components/sections/Differentiators";
import FeaturedWorkSection from "@/components/sections/FeaturedWorkSection";
import ClientTrust from "@/components/sections/ClientTrust";
// import ChaosToClaritySection from "@/components/sections/ChaosToClaritySection";
// import ServiceBentoSection from "@/components/sections/ServiceBentoSection";
// import RoadmapSection from "@/components/sections/RoadmapSection";
// import AuthorityMockupSection from "@/components/sections/AuthorityMockupSection";
// import PeerReviewSection from "@/components/sections/PeerReviewSection";
// import ImplementationSpecsSection from "@/components/sections/ImplementationSpecsSection";
import ProcessSnapshot from "@/components/sections/ProcessSnapshot";

export default function HomePage() {
  return (
    <SmoothScroll>
      <Navbar />
      <main className="flex flex-col min-h-screen">
        <Hero />
        <Differentiators />
        {/* <TransformationProofSection />
        <HowWeTransformSection />
        <HowWeWorkSection /> */}
        <ProcessSnapshot />
        <FeaturedWorkSection />
        <ClientTrust />
        {/* <EnterpriseTrustBar /> */}
        {/* <DataToProductSection />
        <CapabilitiesShowcase />
        <FeaturedWorkSection />
        <MethodologySection />
        <GlobalAuthoritySection />
        <CEOManifesto />
        <FinalCTA /> */}
        {/* <ChaosToClaritySection /> */}
        {/* <ServiceBentoSection />
        <RoadmapSection />
        <AuthorityMockupSection /> */}
        {/* <PeerReviewSection /> */}
        {/* <ImplementationSpecsSection /> */}
        {/* <ConversionSection /> */}
      </main>
      <Footer />
    </SmoothScroll>
  );
}

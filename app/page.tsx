import SmoothScroll from "@/components/SmoothScroll";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/components/sections/Hero";
import Differentiators from "@/components/sections/Differentiators";
import FeaturedWorkSection from "@/components/sections/FeaturedWorkSection";
import ClientTrust from "@/components/sections/ClientTrust";
import ProcessSnapshot from "@/components/sections/ProcessSnapshot";

export default function HomePage() {
  return (
    <SmoothScroll>
      <Navbar />
      <main className="flex flex-col min-h-screen">
        <Hero />
        <Differentiators />
        <ProcessSnapshot />
        <FeaturedWorkSection />
        <ClientTrust />
      </main>
      <Footer />
    </SmoothScroll>
  );
}

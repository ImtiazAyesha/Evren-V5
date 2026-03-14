import SmoothScroll from "@/components/SmoothScroll";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CaseStudyTemplate from "@/components/sections/work/CaseStudyTemplate";
import { getCaseStudyBySlug, getAllSlugs } from "@/lib/case-studies-data";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

// ═══════════════════════════════════════════════════════════════════════
//  STATIC PARAMS — Pre-generate all case study pages
// ═══════════════════════════════════════════════════════════════════════

export function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

// ═══════════════════════════════════════════════════════════════════════
//  DYNAMIC METADATA
// ═══════════════════════════════════════════════════════════════════════

type PageProps = { params: Promise<{ slug: string }> };

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const study = getCaseStudyBySlug(slug);

  if (!study) {
    return { title: "Case Study Not Found | Evren AI" };
  }

  return {
    title: `${study.client} — ${study.headline} | Evren AI Case Study`,
    description: study.subheadline,
    openGraph: {
      title: `${study.client} Case Study — ${study.hardMetric}`,
      description: study.subheadline,
      type: "article",
    },
  };
}

// ═══════════════════════════════════════════════════════════════════════
//  PAGE COMPONENT
// ═══════════════════════════════════════════════════════════════════════

export default async function CaseStudyPage({ params }: PageProps) {
  const { slug } = await params;
  const study = getCaseStudyBySlug(slug);

  if (!study) {
    notFound();
  }

  return (
    <SmoothScroll>
      <Navbar />
      <main className="flex flex-col min-h-screen">
        <CaseStudyTemplate data={study} />
      </main>
      <Footer />
    </SmoothScroll>
  );
}

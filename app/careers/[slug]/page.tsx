import { notFound } from "next/navigation";
import { POSITIONS } from "@/lib/careers-data";
import SmoothScroll from "@/components/SmoothScroll";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { CheckCircle2, ArrowUpRight, ArrowLeft } from "lucide-react";
import Link from "next/link";

export async function generateStaticParams() {
  return POSITIONS.map((job) => ({
    slug: job.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const job = POSITIONS.find((p) => p.slug === slug);
  if (!job) return { title: "Not Found" };
  return {
    title: `${job.title} — Evren AI Careers`,
    description: job.opening.slice(0, 160) + "...",
  };
}

export default async function JobDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const job = POSITIONS.find((p) => p.slug === slug);
  if (!job) {
    notFound();
  }

  return (
    <SmoothScroll>
      <Navbar />
      <main className="flex flex-col min-h-screen bg-evren-warm-white pb-[80px] md:pb-[120px]">
        {/* --- HERO HEADER --- */}
        <div className="pt-[140px] md:pt-[180px] pb-[40px] md:pb-[60px] px-5 sm:px-6 relative overflow-hidden border-b border-evren-light-gray">
          {/* Subtle Background Mesh */}
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[radial-gradient(circle,rgba(244,168,154,0.15)_0%,transparent_60%)] rounded-full blur-3xl pointer-events-none -mr-40 -mt-40 z-0" />
          
          <div className="max-w-[1024px] mx-auto relative z-10">
            {/* Back Button */}
            <Link
              href="/careers"
              className="inline-flex items-center gap-2 text-[13px] font-heading font-semibold text-evren-medium-gray hover:text-evren-navy transition-colors mb-[32px] group"
            >
              <ArrowLeft size={16} className="transition-transform duration-300 group-hover:-translate-x-1" />
              Back to Careers
            </Link>

            {/* Title & Meta */}
            <h1 className="text-[40px] md:text-[56px] lg:text-[64px] font-heading font-bold text-evren-navy leading-[1.1] tracking-tight mb-[24px]">
              {job.title}
            </h1>
            
            <div className="flex flex-wrap gap-[10px] md:gap-[16px]">
              {job.meta.map((tag) => (
                <span
                  key={tag}
                  className="bg-white border border-evren-light-gray text-evren-navy/80 text-[13px] md:text-[14px] font-heading font-medium px-[16px] py-[8px] rounded-full tracking-[0.05em]"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* --- MAIN CONTENT MULTI-COLUMN --- */}
        <div className="px-5 sm:px-6 mt-[64px] md:mt-[80px]">
          <div className="max-w-[1024px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-[64px] lg:gap-[80px]">
            
            {/* Left Column (Details) */}
            <div className="lg:col-span-8">
              {/* Opening Paragraph */}
              <p className="text-[18px] md:text-[20px] font-body text-evren-navy/90 leading-[1.65] mb-[48px] font-medium">
                {job.opening}
              </p>

              {/* Section: What You'll Do */}
              <div className="mb-[48px]">
                <div className="flex items-center gap-3 mb-[24px]">
                  <h4 className="text-[14px] font-heading font-bold text-evren-navy uppercase tracking-[0.08em]">
                    What You&apos;ll Do
                  </h4>
                  <div className="h-[1px] flex-1 bg-evren-light-gray" />
                </div>
                <ul className="list-none p-0 m-0 flex flex-col gap-[16px]">
                  {job.whatYoullDo.map((item, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-[16px] text-[16px] md:text-[17px] font-body text-evren-charcoal leading-[1.6]"
                    >
                      <CheckCircle2 size={20} className="text-evren-peach shrink-0 mt-[4px]" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Section: What You Bring */}
              <div className="mb-[48px]">
                <div className="flex items-center gap-3 mb-[24px]">
                  <h4 className="text-[14px] font-heading font-bold text-evren-navy uppercase tracking-[0.08em]">
                    What You Bring
                  </h4>
                  <div className="h-[1px] flex-1 bg-evren-light-gray" />
                </div>
                <ul className="list-none p-0 m-0 flex flex-col gap-[16px]">
                  {job.whatYouBring.map((item, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-[16px] text-[16px] md:text-[17px] font-body text-evren-charcoal leading-[1.6]"
                    >
                      <CheckCircle2 size={20} className="text-evren-navy/30 shrink-0 mt-[4px]" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Section: Bonus */}
              <div>
                <h4 className="text-[13px] font-heading font-bold text-evren-medium-gray uppercase tracking-[0.08em] mb-[16px]">
                  Bonus If You Have
                </h4>
                <div className="flex flex-wrap gap-[10px]">
                  {job.bonuses.map((bonus, i) => (
                    <span
                      key={i}
                      className="inline-flex bg-white text-evren-charcoal text-[14px] font-body font-medium px-[18px] py-[8px] rounded-full border border-evren-light-gray shadow-[0_2px_8px_rgba(27,42,74,0.02)]"
                    >
                      {bonus}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column (Sidebar) */}
            <div className="lg:col-span-4 flex flex-col gap-[24px] lg:sticky lg:top-[120px] self-start">
              {/* Callout Box */}
              <div className="bg-evren-navy rounded-[24px] p-[32px] md:p-[40px] relative overflow-hidden group shadow-[0_12px_40px_rgba(27,42,74,0.08)]">
                {/* Decorative blob */}
                <div className="absolute top-0 right-0 w-[200px] h-[200px] bg-[radial-gradient(circle,rgba(244,168,154,0.15)_0%,transparent_70%)] rounded-full blur-xl pointer-events-none -mr-10 -mt-10" />
                
                <h4 className="text-[13px] font-heading font-bold text-evren-peach uppercase tracking-[0.1em] mb-[16px] relative z-10 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-evren-peach shrink-0" />
                  {job.whyThisRole.label}
                </h4>
                <p className="text-[17px] font-body text-white/90 leading-[1.6] relative z-10">
                  {job.whyThisRole.copy}
                </p>
              </div>

              {/* Apply Box */}
              <div className="bg-white border border-evren-light-gray rounded-[24px] p-[32px] md:p-[40px] flex flex-col items-center justify-center text-center shadow-[0_4px_20px_rgba(27,42,74,0.03)]">
                <p className="text-[15px] font-body text-evren-medium-gray mb-[24px] leading-relaxed">
                  Think you'd be a great fit? We'd love to hear from you.
                </p>
                <a
                  href={`mailto:hello@evrenai.com?subject=${encodeURIComponent(job.emailSubject)}`}
                  className="w-full inline-flex items-center justify-center gap-2 bg-evren-peach hover:bg-evren-rose text-evren-navy text-[16px] font-heading font-bold px-[32px] py-[16px] rounded-full transition-all duration-300 hover:shadow-[0_4px_16px_rgba(244,168,154,0.4)] hover:-translate-y-0.5"
                >
                  Apply Directly
                  <ArrowUpRight size={18} strokeWidth={2.5} />
                </a>
                <span className="block mt-4 text-[13px] text-evren-medium-gray/70 font-body">Or send your portfolio directly to hello@evrenai.com</span>
              </div>
            </div>

          </div>
        </div>
      </main>
      <Footer />
    </SmoothScroll>
  );
}

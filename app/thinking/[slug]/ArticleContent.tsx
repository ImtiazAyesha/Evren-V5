"use client";

import { motion, useScroll, useSpring } from "framer-motion";
import { ChevronLeft } from "lucide-react";
import ArticleCTA from "@/components/sections/thinking/ArticleCTA";
import { PortableText, PortableTextReactComponents } from "@portabletext/react";
import Image from "next/image";
import { useState, useEffect } from "react";
import { urlFor } from "@/sanity/lib/image";

// ═══════════════════════════════════════════════════════════════════════
//  HELPERS
// ═══════════════════════════════════════════════════════════════════════

// Generates a URL-safe slug from a heading string
const generateId = (text: string) => {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)+/g, "");
};

// ═══════════════════════════════════════════════════════════════════════
//  PORTABLE TEXT CUSTOM COMPONENTS
// ═══════════════════════════════════════════════════════════════════════

// We override the H2 block to strictly inject an ID for scroll-tracking
// and handle inline images.
const portableTextComponents: Partial<PortableTextReactComponents> = {
  types: {
    image: ({ value }: any) => {
      if (!value?.asset?._ref) {
        return null;
      }
      
      // Sanity cleverly stores the exact native dimensions of your uploaded image inside the unique ID string!
      // Example string: image-xyz123abc-1200x800-png 
      // We parse that here so Next.js never guesses the wrong size.
      const dimensionString = value.asset._ref.split("-")[2]; 
      const [width = 1200, height = 800] = dimensionString 
        ? dimensionString.split("x").map(Number) 
        : [1200, 800];

      return (
        <div className="my-12 relative w-full overflow-hidden rounded-2xl border border-black/5 shadow-sm">
          {/* By feeding it the native dimensions + w-full/h-auto, we guarantee perfect resolution 
              and 0 bounding-box clipping no matter what shape you upload! */}
          <Image
            src={urlFor(value).url()}
            alt={value.alt || "Article image"}
            width={width}
            height={height}
            className="w-full h-auto block"
          />
        </div>
      );
    },
  },
  block: {
    h2: ({ children }) => {
      // children is typically a React element array or string. Extract the raw text.
      const text = Array.isArray(children)
        ? children.map((c) => (typeof c === "string" ? c : c.props?.text || "")).join("")
        : typeof children === "string"
        ? children
        : "";
      
      const id = generateId(text);
      return <h2 id={id} className="scroll-mt-24">{children}</h2>;
    },
  },
};

// ═══════════════════════════════════════════════════════════════════════
//  ARTICLE CONTENT — Aloa Reference Layout w/ Dynamic ToC
// ═══════════════════════════════════════════════════════════════════════

export default function ArticleContent({
  article,
  relatedArticles,
}: {
  article: any;
  relatedArticles: any[];
}) {
  const [activeId, setActiveId] = useState<string>("");

  // Format Date (Handle 1970 if user forgot to set date in Sanity)
  const pubDate = new Date(article.publishedAt || Date.now());
  const formattedDate = pubDate.getFullYear() === 1970 
    ? "Just now" 
    : pubDate.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });

  const primaryCategory = article.categories?.[0]?.title || "Article";

  // Pre-parse the body to find all H2s for the sidebar ToC mapping
  const headings = article.body?.filter((block: any) => block._type === 'block' && block.style === 'h2')
    .map((block: any) => {
      const text = block.children?.map((c: any) => c.text).join('') || '';
      return {
        text,
        id: generateId(text)
      };
    }).filter((h: any) => h.text) || [];

  // Implement Scrollspy logic
  useEffect(() => {
    if (headings.length === 0) return;

    // Callback for IntersectionObserver
    const handleIntersect = (entries: IntersectionObserverEntry[]) => {
      // Find the foremost intersecting entry that's in the top area of the viewport
      const visibleEntries = entries.filter((entry) => entry.isIntersecting);
      
      if (visibleEntries.length > 0) {
        // Find the one closest to the top
        const firstVisibleEntry = visibleEntries.reduce((prev, current) => {
          return current.boundingClientRect.top < prev.boundingClientRect.top ? current : prev;
        });
        setActiveId(firstVisibleEntry.target.id);
      }
    };

    const observer = new IntersectionObserver(handleIntersect, {
      rootMargin: "-10% 0px -75% 0px", // Triggers when element is in upper 25% of screen
      threshold: 0,
    });

    headings.forEach((heading: any) => {
      const el = document.getElementById(heading.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [headings]);

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <>
      {/* ── Reading Progress Bar ── */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-[#FF6347] origin-left z-[100]"
        style={{ scaleX }}
      />

      <article className="pt-32 pb-16">
        
        {/* ── HERO SECTION (2-Column Layout) ── */}
        <div className="max-w-[1280px] w-full mx-auto px-6 lg:px-8 mb-16 lg:mb-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            
            {/* Left: Text & Meta */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <a
                href="/thinking"
                className="inline-flex items-center gap-2 text-sm text-evren-medium-gray hover:text-evren-navy font-body transition-colors mb-8"
              >
                <ChevronLeft size={16} />
                {primaryCategory}
              </a>

              <h1 
                className="font-heading font-semibold text-evren-charcoal leading-[1.1] tracking-tight mb-8"
                style={{ fontSize: "clamp(36px, 4vw, 56px)" }}
              >
                {article.title}
              </h1>

              <div className="flex items-center gap-6 text-sm text-evren-medium-gray font-body font-medium">
                <div className="flex items-center">
                  <span className="text-evren-medium-gray mr-1.5 text-[15px]">By</span>
                  <span className="text-evren-navy font-semibold text-[15px] whitespace-nowrap">
                    {article.author?.name || "Evren AI Team"} 
                  </span>
                </div>
                
                <div className="flex items-center gap-2 text-evren-medium-gray/80 whitespace-nowrap text-[15px]">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  {formattedDate}
                </div>

                {/* Vertical Divider */}
                <div className="w-[1px] h-3.5 bg-evren-medium-gray/30 mx-1"></div>

                <div className="flex items-center gap-1.5 text-evren-medium-gray/80 whitespace-nowrap text-[15px]">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  {/* Dynamic reading time: 200 words per min avg */}
                  <span>
                    {Math.max(
                      1,
                      Math.ceil(
                        (article.body
                          ?.filter((b: any) => b._type === "block")
                          .map((b: any) => b.children?.map((c: any) => c.text).join(""))
                          .join(" ")
                          .split(/\s+/) || []
                        ).length / 200
                      )
                    )}{" "}
                    min read
                  </span>
                </div>
              </div>
            </motion.div>

            {/* Right: Main Image Container */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="relative w-full aspect-[4/3] lg:aspect-auto lg:h-[400px] rounded-3xl overflow-hidden bg-[#f4f4f7] border border-black/5"
            >
              {article.mainImage?.asset?.url && (
                <Image 
                  src={article.mainImage.asset.url} 
                  alt={article.mainImage.alt || article.title} 
                  fill 
                  className="object-cover"
                  priority
                />
              )}
            </motion.div>
          </div>
        </div>

        {/* ── ALOA BODY LAYOUT (Sidebar + Content) ── */}
        <div className="max-w-[1280px] w-full mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-[250px_1fr] gap-16 lg:gap-24 relative">
            
            {/* Left Sidebar: Table of Contents */}
            <aside className="hidden lg:block relative">
              <div className="sticky top-32">
                <h4 className="text-xs font-bold tracking-widest text-[#FF6347] uppercase mb-6 font-body">
                  ON THIS PAGE
                </h4>
                {/* Track Line Background */}
                <div className="absolute left-[3px] top-10 bottom-0 w-[2px] bg-evren-light-gray/60 -z-10" />

                <ul className="space-y-1 font-body">
                  {headings.length > 0 ? (
                    headings.map((heading: any) => {
                      const isActive = activeId === heading.id;
                      return (
                        <li key={heading.id} className="relative">
                          {isActive && (
                            <motion.div 
                              layoutId="active-indicator"
                              className="absolute left-0 top-2 bottom-2 w-1.5 rounded-full bg-evren-navy" 
                            />
                          )}
                          <a 
                            href={`#${heading.id}`}
                            className={`block py-2 pl-5 text-sm transition-all duration-300 ${
                              isActive 
                                ? "text-evren-navy font-bold translate-x-1" 
                                : "text-evren-medium-gray hover:text-evren-charcoal font-medium hover:translate-x-1"
                            }`}
                            onClick={(e) => {
                              e.preventDefault();
                              document.getElementById(heading.id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                              setActiveId(heading.id);
                            }}
                          >
                            {heading.text}
                          </a>
                        </li>
                      )
                    })
                  ) : (
                    <li className="text-sm text-evren-medium-gray pl-4">No headings found. Add H2 in Sanity.</li>
                  )}
                </ul>
              </div>
            </aside>

            {/* Right Content Column */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="max-w-[800px] 
                         [&_p]:font-body [&_p]:text-[17px] [&_p]:leading-[1.85] [&_p]:text-evren-charcoal/90 [&_p]:mb-8
                         [&_h2]:font-heading [&_h2]:font-bold [&_h2]:text-evren-charcoal [&_h2]:tracking-tight [&_h2]:text-3xl [&_h2]:mt-16 [&_h2]:mb-8
                         [&_h3]:font-heading [&_h3]:font-semibold [&_h3]:text-evren-charcoal [&_h3]:text-xl [&_h3]:mt-10 [&_h3]:mb-4
                         [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:mb-8 [&_li]:text-[17px] [&_li]:text-evren-charcoal/90 [&_li]:leading-[1.8] [&_li]:mb-2
                         [&_ol]:list-decimal [&_ol]:pl-6 [&_ol]:mb-8
                         [&_a]:text-[#FF6347] [&_a]:underline hover:[&_a]:text-[#E05030]
                         [&_strong]:text-evren-navy [&_strong]:font-bold"
            >
              <PortableText value={article.body || []} components={portableTextComponents} />
            </motion.div>
          </div>
        </div>
      </article>

      {/* ── Related Articles ── */}
      {relatedArticles && relatedArticles.length > 0 && (
        <section
          id="related-articles"
          className="max-w-[1280px] w-full mx-auto px-6 lg:px-8 pb-24"
        >
          <div className="grid grid-cols-1 lg:grid-cols-[250px_1fr] gap-16 lg:gap-24">
            <div className="hidden lg:block"></div> {/* Spacer for sidebar alignment */}
            <div>
              <h2 className="font-heading font-semibold text-evren-charcoal text-2xl tracking-tight mb-8">
                Continue Reading
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {relatedArticles.map((related) => {
                  const relatedDate = new Date(
                    related.publishedAt
                  ).toLocaleDateString("en-US", {
                    month: "short",
                    day: "numeric",
                  });

                  return (
                    <a
                      key={related.slug.current}
                      href={`/thinking/${related.slug.current}`}
                      className="group block p-6 bg-[#f4f4f7] rounded-3xl border border-black/5
                                 hover:border-black/10 transition-all duration-300"
                    >
                      <h3 className="font-heading font-semibold text-evren-charcoal text-lg leading-snug mb-3 group-hover:text-evren-navy transition-colors duration-300 line-clamp-2">
                        {related.title}
                      </h3>
                      <div className="flex items-center justify-between mt-auto">
                        <span className="text-sm font-medium text-evren-medium-gray font-body">
                          {relatedDate}
                        </span>
                      </div>
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
}

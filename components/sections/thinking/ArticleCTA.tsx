"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

// ═══════════════════════════════════════════════════════════════════════
//  ARTICLE CTA — Universal footer CTA block for blog/thinking pages
//  bg-evren-peach-light, Peach CTA button → /connect
//  "Building something? We would love to hear about it."
// ═══════════════════════════════════════════════════════════════════════

export default function ArticleCTA() {
  return (
    <section id="article-cta" className="px-6 lg:px-8 pb-20">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="max-w-4xl mx-auto bg-evren-peach-light rounded-3xl p-12 md:p-16 text-center relative overflow-hidden"
      >
        {/* Decorative geometry */}
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          <div
            className="absolute -top-[30%] -right-[15%] w-[350px] h-[350px] rounded-full"
            style={{ border: "1px solid rgba(27, 42, 74, 0.05)" }}
          />
          <div
            className="absolute -bottom-[25%] -left-[10%] w-[280px] h-[280px] rounded-full"
            style={{ border: "1px solid rgba(244, 168, 154, 0.2)" }}
          />
        </div>

        {/* Content */}
        <div className="relative z-10">
          <h2 className="font-heading font-bold text-evren-navy text-2xl md:text-3xl lg:text-4xl tracking-tight mb-4">
            Building <span className="relative inline-block">
              <span className="relative z-10">something?</span>
              <svg className="absolute -bottom-1 left-0 w-full h-[8px] md:h-[10px]" viewBox="0 0 200 12" fill="none" preserveAspectRatio="none" aria-hidden="true">
                <g>
                  <animateTransform attributeName="transform" type="translate" from="-64 0" to="0 0" dur="3s" repeatCount="indefinite" />
                  <path d="M -64 6 Q -48 0, -32 6 T 0 6 T 32 6 T 64 6 T 96 6 T 128 6 T 160 6 T 192 6 T 224 6 T 256 6 T 288 6" stroke="#F4A89A" strokeWidth="2.5" strokeLinecap="round" fill="none" opacity="0.7" />
                </g>
              </svg>
            </span>
          </h2>
          <p className="font-body text-evren-charcoal/70 text-base md:text-lg leading-relaxed max-w-lg mx-auto mb-8">
            We would love to hear about it. Let&apos;s discuss how Evren AI can
            accelerate your journey from prototype to production.
          </p>
          <motion.a
            href="/connect"
            id="article-cta-book-call"
            whileHover={{
              scale: 1.05,
              boxShadow: "0 12px 32px -8px rgba(244, 168, 154, 0.35)",
            }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: "spring", stiffness: 400, damping: 20 }}
            className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full
                       bg-evren-peach text-evren-navy font-heading font-semibold text-sm
                       shadow-warm transition-colors duration-300 cursor-pointer"
          >
            Let&apos;s Talk
            <ArrowRight size={16} className="transition-transform duration-200" />
          </motion.a>
        </div>
      </motion.div>
    </section>
  );
}

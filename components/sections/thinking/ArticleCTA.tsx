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
            Building something?
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

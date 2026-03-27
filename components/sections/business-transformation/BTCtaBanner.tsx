"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Mail } from "lucide-react";
import ArrowButton from "@/components/ui/ArrowButton";

// ═══════════════════════════════════════════════════════════════════════
//  COMPONENT
// ═══════════════════════════════════════════════════════════════════════

export default function BTCtaBanner() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="bt-cta-banner"
      aria-label="Business Transformation CTA"
      style={{ background: "#1B2A4A", padding: "100px 0" }}
    >
      <div className="max-w-[700px] mx-auto px-5 sm:px-6 lg:px-8 flex flex-col items-center text-center">

        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ type: "spring", stiffness: 70, damping: 20 }}
          className="flex flex-col items-center"
        >
          {/* Top label */}
          <motion.span
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="block font-heading font-semibold uppercase tracking-[0.1em] mb-4"
            style={{ fontSize: 12, color: "#F4A89A", letterSpacing: "0.1em" }}
          >
            EVREN AI · BUSINESS TRANSFORMATION
          </motion.span>

          {/* H2 */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.25, duration: 0.6 }}
            className="font-heading font-bold text-white text-center leading-[1.2] tracking-tight"
            style={{ fontSize: "clamp(32px, 4vw, 40px)" }}
          >
            Not Sure What to Build Yet?
          </motion.h2>

          {/* Sub-copy */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.35, duration: 0.5 }}
            className="font-body text-center mt-4 mb-10"
            style={{
              fontSize: 18,
              color: "rgba(255,255,255,0.70)",
              lineHeight: 1.7,
              maxWidth: 520,
            }}
          >
            That&apos;s exactly where we can help. A single strategy
            conversation can save months of misdirected development. It costs
            you nothing to find out.
          </motion.p>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.45, duration: 0.5 }}
          >
            <ArrowButton
              href="/connect"
              id="bt-cta-banner-btn"
              ariaLabel="Book a free strategy call"
              variant="primary"
              size="lg"
              className="text-base whitespace-nowrap"
            >
              Book a Free Strategy Call
            </ArrowButton>
          </motion.div>

          {/* Secondary text */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="font-body mt-5 flex items-center justify-center gap-2"
            style={{ fontSize: 14, color: "rgba(255,255,255,0.50)" }}
          >
            Prefer email? Reach us at{" "}
            <a
              href="mailto:hello@evrenai.com"
              className="transition-opacity duration-200 hover:opacity-100 flex items-center gap-1"
              style={{ color: "rgba(255,255,255,0.70)" }}
            >
              <Mail size={13} />
              hello@evrenai.com
            </a>
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}

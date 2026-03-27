"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function CareersCtaBanner() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="careers-cta-banner"
      aria-label="Careers CTA"
      style={{ background: "#1B2A4A", padding: "100px 0" }}
    >
      <div className="max-w-[700px] mx-auto px-5 sm:px-6 lg:px-8 flex flex-col items-center text-center">

        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ type: "spring", stiffness: 70, damping: 20 }}
          className="flex flex-col items-center w-full"
        >
          {/* Top label */}
          <motion.span
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="block font-heading font-semibold uppercase mb-[20px]"
            style={{ fontSize: 12, color: "#F4A89A", letterSpacing: "0.1em" }}
          >
            EVREN AI &middot; CAREERS
          </motion.span>

          {/* H2 */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.25, duration: 0.6 }}
            className="font-heading font-bold text-white text-center leading-[1.2] tracking-tight"
            style={{ fontSize: "clamp(32px, 4vw, 40px)" }}
          >
            Don&apos;t See the Right Role?
          </motion.h2>

          {/* Sub-copy */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.35, duration: 0.5 }}
            className="font-body text-center mt-[16px] mb-[40px]"
            style={{
              fontSize: 18,
              color: "rgba(255,255,255,0.70)",
              lineHeight: 1.6,
              maxWidth: 520,
            }}
          >
            We hire for fit first. If you&apos;re an exceptional engineer who believes in building
            intelligent products the right way, send us a note. We&apos;re always interested in
            meeting people who care deeply about the craft.
          </motion.p>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.45, duration: 0.5 }}
          >
            <a
              href="mailto:hello@evrenai.com?subject=General Enquiry — Careers"
              className="inline-block bg-evren-peach hover:bg-evren-rose text-evren-navy text-[16px] font-heading font-semibold px-[36px] py-[16px] rounded-[8px] transition-colors duration-250 ease-out"
            >
              Send Us a Note
            </a>
          </motion.div>

          {/* Secondary text */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="font-body mt-[20px] text-center"
            style={{ fontSize: 14, color: "rgba(255,255,255,0.50)" }}
          >
            Both roles are also open to exceptional candidates from our 200+ extended network.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}

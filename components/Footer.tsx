"use client";

import { motion } from "framer-motion";
import { ArrowRight, Linkedin, Twitter, MapPin } from "lucide-react";

// ═══════════════════════════════════════════════════════════════════════
//  FOOTER — Universal CTA Banner + Main Footer
//  The final conversion point of the page.
// ═══════════════════════════════════════════════════════════════════════

const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Approach", href: "#approach" },
  { label: "Work", href: "#work" },
  { label: "Thinking", href: "#thinking" },
  { label: "Business Transformation", href: "#transformation" },
];

const OFFICES = [
  { city: "United States (HQ)", icon: MapPin },
  { city: "Dubai, UAE", icon: MapPin },
];

const SOCIALS = [
  {
    label: "LinkedIn",
    href: "https://linkedin.com/company/evren-ai",
    icon: Linkedin,
  },
  {
    label: "X (Twitter)",
    href: "https://x.com/evren_ai",
    icon: Twitter,
  },
];

// ═══════════════════════════════════════════════════════════════════════
//  COMPONENT
// ═══════════════════════════════════════════════════════════════════════

export default function Footer() {
  return (
    <footer>
      {/* ─── Part A: Floating CTA Banner ─── */}
      <div className="max-w-7xl mx-auto px-6 relative z-10 -mb-24">
        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ type: "spring", stiffness: 80, damping: 20, duration: 0.8 }}
          viewport={{ once: true, margin: "-60px" }}
          className="bg-evren-navy rounded-[32px] p-12 md:p-20 text-center relative overflow-hidden shadow-warm-hover"
        >
          {/* Abstract cosmic circles — depth elements */}
          <div
            className="absolute -top-[50%] -left-[10%] w-[500px] h-[500px] rounded-full border-[40px] border-white/5 pointer-events-none"
            aria-hidden="true"
          />
          <div
            className="absolute -bottom-[40%] -right-[5%] w-[600px] h-[600px] rounded-full border-[40px] border-evren-peach/10 pointer-events-none"
            aria-hidden="true"
          />
          {/* Secondary smaller circle for extra depth */}
          <div
            className="absolute top-[20%] right-[15%] w-[200px] h-[200px] rounded-full border-[20px] border-white/[0.03] pointer-events-none"
            aria-hidden="true"
          />

          {/* Content */}
          <div className="relative z-10">
            <h2 className="text-4xl md:text-6xl font-heading font-bold text-white mb-6 tracking-tight">
              Have an idea? Let&apos;s talk.
            </h2>
            <p className="text-lg md:text-xl text-evren-light-gray font-body max-w-2xl mx-auto mb-10">
              Partner with the studio that embeds intelligence from day one. Stop
              experimenting and start scaling.
            </p>
            <motion.a
              href="/connect"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="bg-evren-peach text-evren-navy font-bold text-lg px-10 py-5 rounded-full inline-flex items-center gap-3 transition-transform duration-300 cursor-pointer"
            >
              Let&apos;s Talk
              <ArrowRight size={20} strokeWidth={2.5} />
            </motion.a>
          </div>
        </motion.div>
      </div>

      {/* ─── Part B: Main Footer ─── */}
      <div className="bg-evren-warm-white pt-40 pb-12 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 border-b border-evren-medium-gray/20 pb-12">
          {/* Col 1 — Brand */}
          <div>
            <h3 className="text-2xl font-bold font-heading text-evren-navy mb-4">
              Evren AI
            </h3>
            <p className="text-evren-medium-gray font-body text-sm leading-relaxed">
              Where Ideas Become Intelligent Products.
            </p>
          </div>

          {/* Col 2 — Navigation */}
          <div>
            <h4 className="font-heading font-bold text-evren-navy mb-4">
              Studio
            </h4>
            <nav className="flex flex-col gap-3">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-evren-charcoal hover:text-evren-peach transition-colors text-sm font-body"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Col 3 — Offices */}
          <div>
            <h4 className="font-heading font-bold text-evren-navy mb-4">
              Offices
            </h4>
            <div className="flex flex-col gap-3">
              {OFFICES.map((office) => (
                <div key={office.city} className="flex items-center gap-2">
                  <office.icon
                    size={14}
                    className="text-evren-peach shrink-0"
                  />
                  <span className="text-sm text-evren-charcoal font-bold font-body">
                    {office.city}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Col 4 — Social / Connect */}
          <div>
            <h4 className="font-heading font-bold text-evren-navy mb-4">
              Connect
            </h4>
            <div className="flex gap-4">
              {SOCIALS.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="text-evren-navy hover:text-evren-peach transition-colors duration-200"
                >
                  <social.icon size={20} />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* ─── Copyright Row ─── */}
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between mt-8 gap-4">
          <p className="text-sm text-evren-medium-gray font-body">
            &copy; 2026 Evren AI. All rights reserved.
          </p>
          <div className="flex items-center gap-1 text-sm text-evren-medium-gray font-body">
            <a
              href="#"
              className="hover:text-evren-charcoal transition-colors duration-200"
            >
              Privacy Policy
            </a>
            <span className="mx-2">|</span>
            <a
              href="#"
              className="hover:text-evren-charcoal transition-colors duration-200"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

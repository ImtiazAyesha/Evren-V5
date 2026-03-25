"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence, type Variants } from "framer-motion";
import { Menu, X } from "lucide-react";
import ArrowButton from "@/components/ui/ArrowButton";

// ═══════════════════════════════════════════════════════════════════════
//  CONSTANTS
// ═══════════════════════════════════════════════════════════════════════

const NAV_LINKS = [
  { label: "About", href: "/about" },
  { label: "Approach", href: "/approach" },
  { label: "Work", href: "/work" },
  { label: "Thinking", href: "/thinking" },
];

// ═══════════════════════════════════════════════════════════════════════
//  MOTION VARIANTS
// ═══════════════════════════════════════════════════════════════════════

const mobileMenuVariants: Variants = {
  hidden: { opacity: 0, y: -20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.35, ease: [0.22, 1, 0.36, 1] },
  },
  exit: {
    opacity: 0,
    y: -20,
    transition: { duration: 0.25, ease: [0.22, 1, 0.36, 1] },
  },
};

const mobileLinkVariants: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.1 + i * 0.07,
      duration: 0.4,
      ease: "easeOut" as const,
    },
  }),
};

// ═══════════════════════════════════════════════════════════════════════
//  NAVBAR COMPONENT — Glassmorphic floating pill
// ═══════════════════════════════════════════════════════════════════════

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  return (
    <>
      {/* ── Fixed Full-Width Navbar ──────────────────────────────── */}
      <header
        id="global-navbar"
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 border-b ${scrolled
          ? "py-4 bg-white/85 backdrop-blur-2xl border-evren-light-gray/30 shadow-[0_10px_40px_-10px_rgba(27,42,74,0.15)]"
          : "py-6 bg-transparent border-transparent"
          }`}
      >
        <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 lg:px-8">
          {/* ── Logo ── */}
          <a
            href="/"
            id="navbar-logo"
            className="relative z-50 group flex items-center"
          >
            <span className="font-heading text-2xl font-bold tracking-tight text-evren-navy transition-opacity duration-200 group-hover:opacity-80">
              Evren AI
            </span>
          </a>

          {/* ── Desktop Navigation & CTA (Right) ── */}
          <div className="hidden md:flex items-center gap-4 lg:gap-8">
            <nav id="desktop-nav" className="flex items-center">
              {/* Nav links pill — subtle inner container */}
              <div className="flex items-center gap-1 bg-evren-warm-gray/40 rounded-full px-1.5 py-1">
                {NAV_LINKS.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    id={`nav-link-${link.label.toLowerCase()}`}
                    className="relative font-body text-sm font-medium text-evren-charcoal 
                                 hover:text-evren-navy transition-all duration-300 
                                 px-4 py-2 rounded-full hover:bg-evren-peach-light"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </nav>

            <ArrowButton
              href="/connect"
              id="navbar-cta"
              variant="primary"
              size="sm"
            >
              Let&apos;s Talk
            </ArrowButton>
          </div>

          {/* ── Mobile Hamburger ── */}
          <button
            id="mobile-menu-toggle"
            className="md:hidden relative z-50 p-2 text-evren-navy transition-colors 
                         hover:text-evren-navy-light rounded-full"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {/* ── Mobile Menu Overlay ─────────────────────────────────────── */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            id="mobile-menu-overlay"
            variants={mobileMenuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="fixed inset-0 z-40 bg-evren-warm-white/95 backdrop-blur-xl flex flex-col"
          >
            {/* Content — centered links */}
            <div className="flex-1 flex flex-col items-center justify-center px-8 pt-[72px]">
              <nav className="flex flex-col items-center gap-3 w-full max-w-sm">
                {NAV_LINKS.map((link, idx) => (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    custom={idx}
                    variants={mobileLinkVariants}
                    initial="hidden"
                    animate="visible"
                    className="font-heading text-3xl font-bold tracking-tight text-evren-navy 
                               py-3 w-full text-center border-b border-evren-light-gray/50 
                               transition-colors duration-200 hover:text-evren-peach"
                  >
                    {link.label}
                  </motion.a>
                ))}
              </nav>

              {/* Mobile CTA */}
              <div className="mt-10 w-full max-w-sm">
                <ArrowButton
                  href="/connect"
                  variant="primary"
                  size="lg"
                  className="w-full justify-between"
                >
                  Let&apos;s Talk
                </ArrowButton>
              </div>
            </div>

            {/* Decorative bottom gradient */}
            <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-evren-warm-gray to-transparent pointer-events-none" />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

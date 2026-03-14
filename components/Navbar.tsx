"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence, type Variants } from "framer-motion";
import { Menu, X, ArrowRight } from "lucide-react";

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
//  NAVBAR COMPONENT
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
      {/* ── Fixed Navbar ────────────────────────────────────────────── */}
      <header
        id="global-navbar"
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-evren-warm-white/80 backdrop-blur-xl border-b border-evren-light-gray/60 shadow-warm"
            : "bg-evren-warm-white/40 backdrop-blur-md border-b border-transparent"
        }`}
      >
        <div className="mx-auto max-w-7xl flex items-center justify-between px-6 lg:px-8 py-4">
          {/* ── Logo ── */}
          <a
            href="#"
            id="navbar-logo"
            className="relative z-50 group flex items-center"
          >
            <span className="font-heading text-2xl font-bold tracking-tight text-evren-navy transition-opacity duration-200 group-hover:opacity-80">
              Evren AI
            </span>
          </a>

          {/* ── Desktop Navigation (Center) ── */}
          <nav
            id="desktop-nav"
            className="hidden md:flex items-center space-x-8 absolute left-1/2 -translate-x-1/2"
          >
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                id={`nav-link-${link.label.toLowerCase()}`}
                className="group relative font-body text-sm font-medium text-evren-charcoal 
                           hover:text-evren-navy transition-colors duration-300 py-2"
              >
                {link.label}
                {/* Animated underline on hover */}
                <span
                  className="absolute bottom-0 left-0 h-[2px] w-0 bg-evren-peach rounded-full 
                             transition-all duration-300 ease-out group-hover:w-full"
                />
              </a>
            ))}
          </nav>

          {/* ── Desktop CTA (Right) ── */}
          <div className="hidden md:flex items-center">
            <motion.a
              href="/connect"
              id="navbar-cta"
              whileHover={{
                scale: 1.05,
                boxShadow: "0 12px 32px -8px rgba(244, 168, 154, 0.35)",
              }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: "spring", stiffness: 400, damping: 20 }}
              className="inline-flex items-center justify-center gap-2 rounded-full 
                         bg-evren-peach text-evren-navy px-6 py-2.5 
                         font-heading text-sm font-semibold shadow-warm 
                         transition-colors duration-300"
            >
              Let&apos;s Talk
              <ArrowRight
                size={14}
                className="transition-transform duration-200 group-hover:translate-x-1"
              />
            </motion.a>
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
            className="fixed inset-0 z-40 bg-evren-warm-white flex flex-col"
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
              <motion.a
                href="/connect"
                onClick={() => setMobileMenuOpen(false)}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.45, ease: "easeOut" }}
                className="mt-10 w-full max-w-sm inline-flex h-14 items-center justify-center 
                           rounded-full bg-evren-peach text-evren-navy px-8 
                           font-heading text-base font-semibold shadow-warm"
              >
                Let&apos;s Talk
              </motion.a>
            </div>

            {/* Decorative bottom gradient */}
            <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-evren-warm-gray to-transparent pointer-events-none" />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

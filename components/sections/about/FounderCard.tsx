"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useInView, type Variants } from "framer-motion";
import { Linkedin } from "lucide-react";

// ─── SPRING CONFIG ──────────────────────────────────────────────────
const SPRING = { type: "spring" as const, stiffness: 100, damping: 20 };

const cardReveal: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { ...SPRING },
  },
};

// ─── TYPES ──────────────────────────────────────────────────────────
interface FounderCardProps {
  name: string;
  role: string;
  bio: string;
  imageSrc: string;
  linkedInUrl: string;
  delay?: number;
}

// ═══════════════════════════════════════════════════════════════════════
//  FOUNDER CARD — Warm gray bg, hover scale + shadow, LinkedIn slide-in
// ═══════════════════════════════════════════════════════════════════════

export default function FounderCard({
  name,
  role,
  bio,
  imageSrc,
  linkedInUrl,
  delay = 0,
}: FounderCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <motion.div
      ref={ref}
      variants={cardReveal}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      transition={{ delay }}
      className="group relative flex flex-col bg-evren-warm-gray rounded-studio overflow-hidden
                 transition-all duration-300 ease-out
                 hover:scale-[1.01] hover:shadow-warm-hover cursor-default"
      id={`founder-card-${name.toLowerCase().replace(/\s/g, "-")}`}
    >
      {/* ── Headshot ─────────────────────────────────────── */}
      <div className="relative w-full aspect-[4/5] overflow-hidden bg-evren-warm-gray">
        <Image
          src={imageSrc}
          alt={`${name}, ${role} at Evren AI`}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
          placeholder="blur"
          blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8/5+hHgAHggJ/PchI7wAAAABJRU5ErkJggg=="
          quality={90}
        />

        {/* ── LinkedIn slide-in overlay ──────────────────── */}
        <a
          href={linkedInUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`View ${name}'s LinkedIn profile`}
          className="absolute bottom-4 right-4 z-10
                     flex items-center gap-2 rounded-full bg-evren-navy/90 backdrop-blur-sm
                     px-4 py-2.5 text-white text-xs font-heading font-semibold
                     translate-y-3 opacity-0
                     group-hover:translate-y-0 group-hover:opacity-100
                     transition-all duration-300 ease-out
                     hover:bg-evren-navy"
        >
          <Linkedin size={14} className="shrink-0" />
          <span>Connect</span>
        </a>
      </div>

      {/* ── Info ──────────────────────────────────────────── */}
      <div className="p-6 lg:p-7">
        <h3 className="font-heading font-bold text-evren-navy text-xl lg:text-2xl mb-1">
          {name}
        </h3>
        <p className="font-heading font-medium text-evren-peach text-sm tracking-wide mb-3">
          {role}
        </p>
        <p className="font-body text-evren-medium-gray text-sm leading-relaxed">
          {bio}
        </p>
      </div>
    </motion.div>
  );
}

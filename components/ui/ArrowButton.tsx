"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

// ═══════════════════════════════════════════════════════════════════════
//  ARROW BUTTON — Pill-shaped CTA with circular icon
//  Matches the "Shop Products ↗" reference pattern
// ═══════════════════════════════════════════════════════════════════════

type Variant = "primary" | "secondary" | "outline" | "dark" | "ghost";
type Size = "sm" | "md" | "lg";

interface ArrowButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: Variant;
  size?: Size;
  id?: string;
  ariaLabel?: string;
  className?: string;
  /** For use on dark backgrounds — inverts icon circle colors */
  inverted?: boolean;
}

const VARIANT_STYLES: Record<Variant, { pill: string; circle: string; circleHover: string }> = {
  primary: {
    pill: "bg-evren-peach text-evren-navy",
    circle: "bg-evren-navy/10 text-evren-navy",
    circleHover: "bg-evren-navy/20",
  },
  secondary: {
    pill: "bg-white border-2 border-evren-navy/15 text-evren-navy",
    circle: "bg-evren-navy/8 text-evren-navy",
    circleHover: "bg-evren-navy/18",
  },
  outline: {
    pill: "bg-transparent border-2 border-evren-navy text-evren-navy hover:bg-evren-navy hover:text-white",
    circle: "bg-evren-navy/10 text-evren-navy group-hover/btn:bg-white/20 group-hover/btn:text-white",
    circleHover: "bg-evren-navy/20",
  },
  dark: {
    pill: "bg-evren-peach text-evren-navy",
    circle: "bg-evren-navy/10 text-evren-navy",
    circleHover: "bg-evren-navy/20",
  },
  ghost: {
    pill: "bg-transparent text-evren-navy hover:bg-evren-peach-light/40",
    circle: "bg-evren-navy/8 text-evren-navy",
    circleHover: "bg-evren-navy/18",
  },
};

const SIZE_STYLES: Record<Size, { pill: string; circle: string; icon: number }> = {
  sm: {
    pill: "pl-5 pr-1.5 py-1.5 text-sm gap-3",
    circle: "w-8 h-8",
    icon: 14,
  },
  md: {
    pill: "pl-7 pr-2 py-2 text-sm gap-4",
    circle: "w-9 h-9",
    icon: 15,
  },
  lg: {
    pill: "pl-8 pr-2.5 py-2.5 text-base gap-4",
    circle: "w-10 h-10",
    icon: 17,
  },
};

export default function ArrowButton({
  children,
  href,
  onClick,
  variant = "primary",
  size = "md",
  id,
  ariaLabel,
  className = "",
  inverted = false,
}: ArrowButtonProps) {
  const v = VARIANT_STYLES[variant];
  const s = SIZE_STYLES[size];

  const inner = (
    <>
      <span className="font-heading font-semibold flex-1 text-left">{children}</span>
      <span
        className={`${s.circle} rounded-full flex items-center justify-center
                    transition-all duration-200 shrink-0
                    ${inverted ? "bg-white/15 text-white group-hover/btn:bg-white/25" : v.circle}
                    group-hover/btn:scale-105`}
      >
        <ArrowUpRight
          size={s.icon}
          strokeWidth={2.5}
          className="transition-transform duration-200 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5"
        />
      </span>
    </>
  );

  const sharedClasses = `group/btn inline-flex items-center rounded-full will-change-transform 
                          transition-all duration-200 ${v.pill} ${s.pill} ${className}`;

  if (href) {
    return (
      <motion.a
        href={href}
        id={id}
        aria-label={ariaLabel}
        className={sharedClasses}
        whileHover={{
          scale: 1.03,
          boxShadow:
            variant === "primary"
              ? "0 16px 40px -8px rgba(244, 168, 154, 0.35)"
              : "0 8px 24px -6px rgba(27, 42, 74, 0.12)",
        }}
        whileTap={{ scale: 0.97 }}
        transition={{ type: "spring", stiffness: 300, damping: 22 }}
      >
        {inner}
      </motion.a>
    );
  }

  return (
    <motion.button
      id={id}
      aria-label={ariaLabel}
      onClick={onClick}
      className={sharedClasses}
      whileHover={{
        scale: 1.03,
        boxShadow:
          variant === "primary"
            ? "0 16px 40px -8px rgba(244, 168, 154, 0.35)"
            : "0 8px 24px -6px rgba(27, 42, 74, 0.12)",
      }}
      whileTap={{ scale: 0.97 }}
      transition={{ type: "spring", stiffness: 300, damping: 22 }}
    >
      {inner}
    </motion.button>
  );
}

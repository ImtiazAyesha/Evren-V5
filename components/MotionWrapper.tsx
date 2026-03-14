"use client";

import { motion, useInView, type Variants } from "framer-motion";
import { ReactNode, useRef } from "react";

// ─── SPRING CONFIG: Expensive, Precise, Snappy ─────────────────────
const SPRING = { type: "spring" as const, stiffness: 100, damping: 20 };

const variants: Variants = {
    hidden: { opacity: 0, y: 28 },
    visible: {
        opacity: 1,
        y: 0,
        transition: SPRING,
    },
};

interface MotionWrapperProps {
    children: ReactNode;
    className?: string;
    delay?: number;
    y?: number;
}

export default function MotionWrapper({
    children,
    className = "",
    delay = 0,
    y = 28,
}: MotionWrapperProps) {
    const ref = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref, { amount: 0.3, once: true });

    return (
        <motion.div
            ref={ref}
            className={className}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={{
                hidden: { opacity: 0, y },
                visible: {
                    opacity: 1,
                    y: 0,
                    transition: { ...SPRING, delay },
                },
            }}
            style={{ willChange: "transform" }}
        >
            {children}
        </motion.div>
    );
}

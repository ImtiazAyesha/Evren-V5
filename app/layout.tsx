import type { Metadata } from "next";
import "./globals.css";
import { Geist } from "next/font/google";
import { cn } from "@/lib/utils";

const geist = Geist({ subsets: ['latin'], variable: '--font-sans' });

export const metadata: Metadata = {
  title: "Evren AI — Enterprise AI Consulting & Automation",
  description:
    "Stop experimenting with AI. Start driving measurable enterprise ROI. Evren AI delivers custom AI strategy, automation, and integration for growth-focused businesses.",
  keywords: [
    "AI consulting",
    "enterprise AI",
    "AI automation",
    "AI ROI",
    "business intelligence",
    "AI integration",
  ],
  openGraph: {
    title: "Evren AI — Enterprise AI Consulting & Automation",
    description:
      "Stop experimenting with AI. Start driving measurable enterprise ROI.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={cn("scroll-smooth", "font-sans", geist.variable)}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500;600;700&family=Playfair+Display:ital,wght@0,400;0,700;1,400;1,700&family=Plus+Jakarta+Sans:wght@400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased bg-evren-warm-white text-evren-charcoal font-body">
        {children}
      </body>
    </html>
  );
}

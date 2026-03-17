"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  Cpu,
  Database,
  Globe,
  Layout,
  Lock,
  MessageSquare,
  RefreshCw,
  Server,
  Shield,
  Star,
  Zap,
} from "lucide-react";
import Link from "next/link";
import { useParams } from "next/navigation";

// ═══════════════════════════════════════════════════════════════════════
//  CASE STUDY DATA
// ═══════════════════════════════════════════════════════════════════════

interface CaseStudyData {
  clientName: string;
  projectType: string;
  industry: string;
  timeline: string;
  teamSize: string;
  techStackBrief: string;
  heroImage: string;
  challenge: {
    description: string;
    painPoints: string[];
  };
  solution: {
    description: string;
    techStack: { category: string; name: string }[];
    keyFeatures: {
      icon: React.ReactNode;
      title: string;
      description: string;
    }[];
  };
  featureShowcase: {
    image: string;
    name: string;
    description: string;
    benefit: string;
  }[];
  impact: {
    value: string;
    label: string;
    context: string;
  }[];
  testimonial: {
    quote: string;
    name: string;
    title: string;
    company: string;
  };
}

const CASE_STUDIES: Record<string, CaseStudyData> = {
  "iseedoc-telehealth": {
    clientName: "iSeedoc",
    projectType: "AI-Powered Telehealth Platform",
    industry: "Healthcare",
    timeline: "8 Months",
    teamSize: "6 Specialists",
    techStackBrief: "FastAPI, GPT-4, WebSockets, JWT",
    heroImage: "/case studies/case 1.webp",
    challenge: {
      description:
        "Global telehealth innovator iSeedoc needed to bridge the gap between patient demand and specialist availability. Their core challenge was scaling operations without compromising on the quality of care, data security, or regulatory compliance. They partnered with Evren AI to architect an end-to-end, HIPAA-compliant telehealth platform that automates workflows, streamlines consultations, and leverages AI to deliver intelligent, accessible, and secure healthcare.",
      painPoints: [
        "Fortifying patient data security & ensuring HIPAA compliance across all touchpoints",
        "Automating clinical & administrative workflows including scheduling and report analysis",
        "Enabling seamless, low-latency patient-doctor communication in real-time",
        "Building a scalable infrastructure that handles growing provider and patient demand",
      ],
    },
    solution: {
      description:
        "We architected an enterprise-grade telehealth backend with secure role-based authentication, asynchronous task processing, AI-powered document analysis, and resilient real-time communication — all designed for HIPAA compliance at scale.",
      techStack: [
        { category: "Backend", name: "Python, FastAPI" },
        { category: "AI Engine", name: "OpenAI GPT-4" },
        { category: "Real-Time", name: "WebSockets" },
        { category: "Auth", name: "JWT, Role-Based Access" },
      ],
      keyFeatures: [
        {
          icon: <Lock className="w-6 h-6 text-evren-peach" />,
          title: "Secure Role-Based Auth Core",
          description:
            "JWT-based authentication engine with role-based access (Patient, Doctor, Admin) ensuring strict data control and auditability.",
        },
        {
          icon: <Cpu className="w-6 h-6 text-evren-peach" />,
          title: "AI Document Processing",
          description:
            "Leveraged GPT-4 to automate medical report analysis, extracting insights from various file formats and generating structured PDF summaries.",
        },
        {
          icon: <MessageSquare className="w-6 h-6 text-evren-peach" />,
          title: "Real-Time Communication",
          description:
            "WebSocket-based chat and notification system with automatic reconnection and user-specific tracking for reliable live consultations.",
        },
      ],
    },
    featureShowcase: [
      {
        image: "/case studies/case 1.webp",
        name: "Intelligent Document Processing",
        description:
          "GPT-4 automates medical report analysis, extracting insights from various file formats and generating structured PDF summaries, saving hours of manual effort.",
        benefit: "Reduced report analysis time by 90%.",
      },
      {
        image: "/case studies/case 1.webp",
        name: "Scalable Asynchronous Infrastructure",
        description:
          "Using FastAPI's background processing, we designed a non-blocking architecture to handle tasks like email notifications and AI report generation, keeping the platform responsive under load.",
        benefit: "Zero downtime during peak hours.",
      },
      {
        image: "/case studies/case 1.webp",
        name: "Conflict-Free Scheduling",
        description:
          "Integration with Google Calendar and dynamic slot-checking eliminated conflicts and automated scheduling, supporting iSeedoc's growing provider and patient base.",
        benefit: "Enabled scalable, conflict-free scheduling.",
      },
    ],
    impact: [
      {
        value: "90%",
        label: "Faster Report Analysis",
        context: "AI-powered engine transformed multi-hour process into minutes",
      },
      {
        value: "100%",
        label: "HIPAA Compliant",
        context: "end-to-end automated, compliant workflow",
      },
      {
        value: "0",
        label: "Scheduling Conflicts",
        context: "with dynamic slot-checking and calendar integration",
      },
      {
        value: "∞",
        label: "Future-Proof",
        context: "ready for EMR/EHR integrations via OAuth2 & comprehensive API",
      },
    ],
    testimonial: {
      quote:
        "Evren AI didn't just build software — they engineered the intelligent backbone of our telehealth platform. The AI-powered document processing alone saved our clinical team hours every day, and the scalable architecture means we're ready for whatever comes next.",
      name: "CTO",
      title: "Chief Technology Officer",
      company: "iSeedoc",
    },
  },

  "cybersecurity-threat-detection": {
    clientName: "VerifiedX",
    projectType: "AI Cybersecurity Platform",
    industry: "FinTech / Cybersecurity",
    timeline: "6 Months",
    teamSize: "5 Specialists",
    techStackBrief: "FastAPI, LLMs, Docker, Cross-Platform",
    heroImage: "/case studies/case 2.webp",
    challenge: {
      description:
        "In today's threat landscape, reactive cybersecurity is a recipe for financial and reputational disaster. VerifiedX, a high-growth FinTech platform, required an ironclad defense against sophisticated, AI-driven phishing attacks that traditional filters were missing. They partnered with Evren AI to build a proactive threat neutralization engine that leverages state-of-the-art LLMs to identify and stop attacks before they can impact the enterprise.",
      painPoints: [
        "Cybercriminals using generative AI to scale personalized phishing attacks, rendering rule-based systems ineffective",
        "Need for a unified, real-time defense system analyzing links, messages, and content across all digital channels",
        "Solution had to handle millions of real-time analysis requests on a scalable infrastructure without sacrificing performance",
        "Traditional pattern-matching filters were missing increasingly sophisticated attack vectors",
      ],
    },
    solution: {
      description:
        "We built a proactive, intelligent defense platform that deploys state-of-the-art LLMs for contextual threat analysis, backed by a high-performance real-time backend engineered for continuous learning and cross-platform scalability.",
      techStack: [
        { category: "Backend", name: "Python, FastAPI" },
        { category: "AI Engine", name: "Fine-Tuned LLMs" },
        { category: "Infra", name: "Docker, Cloud-Native" },
        { category: "Platforms", name: "Browser & Mobile" },
      ],
      keyFeatures: [
        {
          icon: <Shield className="w-6 h-6 text-evren-peach" />,
          title: "LLM-Powered Contextual Analysis",
          description:
            "Implemented leading LLMs trained on phishing data to move from pattern-matching to understanding deceptive content contextually.",
        },
        {
          icon: <Zap className="w-6 h-6 text-evren-peach" />,
          title: "Real-Time High-Performance Backend",
          description:
            "Built a scalable backend using FastAPI to handle real-time analysis of links and messages without compromising performance.",
        },
        {
          icon: <RefreshCw className="w-6 h-6 text-evren-peach" />,
          title: "Continuous Learning & Adaptation",
          description:
            "Created a system that continuously updates itself with new data to adapt to emerging and evolving phishing threats.",
        },
      ],
    },
    featureShowcase: [
      {
        image: "/case studies/case 2.webp",
        name: "Contextual Threat Intelligence",
        description:
          "State-of-the-art LLMs analyze the semantic meaning and intent behind suspicious content, going far beyond simple keyword or URL pattern matching.",
        benefit: "99.7% threat detection accuracy achieved.",
      },
      {
        image: "/case studies/case 2.webp",
        name: "Cross-Channel Real-Time Shield",
        description:
          "Unified, real-time defense across the entire digital ecosystem — from browser extensions to mobile apps — analyzing links, messages, and embedded content simultaneously.",
        benefit: "Real-time protection across all digital channels.",
      },
      {
        image: "/case studies/case 2.webp",
        name: "Self-Evolving Defense Architecture",
        description:
          "Containerized solution for cloud deployment that continuously learns from new threat data, ensuring the defense always stays one step ahead of attackers.",
        benefit: "A scalable foundation for future security.",
      },
    ],
    impact: [
      {
        value: "$7.5M+",
        label: "Annual Losses Prevented",
        context: "proactively neutralized threats preventing financial losses",
      },
      {
        value: "99.7%",
        label: "Detection Accuracy",
        context: "near-perfect accuracy in detecting and blocking threats",
      },
      {
        value: "Real-Time",
        label: "Cross-Channel Protection",
        context: "unified defense across the entire digital ecosystem",
      },
      {
        value: "∞",
        label: "Scalable Architecture",
        context: "containerized solution adapts as business grows",
      },
    ],
    testimonial: {
      quote:
        "Evren AI transformed our security posture from reactive to proactive. Their LLM-powered engine catches threats our previous systems never could have detected. The $7.5M+ in prevented losses speaks for itself — this partnership has been transformational for VerifiedX.",
      name: "CISO",
      title: "Chief Information Security Officer",
      company: "VerifiedX",
    },
  },
};

// ═══════════════════════════════════════════════════════════════════════
//  ANIMATION VARIANTS
// ═══════════════════════════════════════════════════════════════════════
const fadeUpVar: any = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const staggerContainer: any = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

// ═══════════════════════════════════════════════════════════════════════
//  MAIN COMPONENT
// ═══════════════════════════════════════════════════════════════════════

export default function CaseStudyPage() {
  const params = useParams();
  const slug = params.slug as string;
  const data = CASE_STUDIES[slug];

  if (!data) {
    return (
      <main className="w-full min-h-screen bg-evren-warm-white flex items-center justify-center font-body text-evren-charcoal">
        <div className="text-center">
          <h1 className="text-4xl font-heading font-bold text-evren-navy mb-4">
            Case Study Not Found
          </h1>
          <p className="text-evren-medium-gray mb-8">
            The case study you&apos;re looking for doesn&apos;t exist.
          </p>
          <Link
            href="/"
            className="inline-flex items-center gap-2 bg-evren-peach text-evren-navy px-6 py-3 rounded-full font-bold hover:opacity-90 transition-opacity"
          >
            Back to Home
            <ArrowRight size={16} />
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="w-full bg-white font-body text-evren-charcoal">
      {/* 1. HERO SECTION */}
      <section className="relative w-full h-[70vh] min-h-[500px] max-h-[800px] flex items-end">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src={data.heroImage}
            alt={`${data.clientName} Preview`}
            fill
            className="object-cover object-top"
            priority
          />
          {/* Gradients for readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-evren-navy via-evren-navy/70 to-transparent" />
        </div>

        {/* Hero Content Overlay */}
        <div className="relative z-10 w-full max-w-[1200px] mx-auto px-6 pb-20">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            <motion.div variants={fadeUpVar} className="flex gap-4 mb-4">
              <span className="bg-evren-peach/20 text-evren-peach px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider backdrop-blur-sm border border-evren-peach/30">
                {data.industry}
              </span>
              <span className="bg-white/10 text-evren-light-gray px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider backdrop-blur-sm border border-white/20">
                Case Study
              </span>
            </motion.div>

            <motion.h1
              variants={fadeUpVar}
              className="text-4xl md:text-5xl lg:text-6xl font-heading font-extrabold text-white mb-6 leading-tight max-w-4xl"
            >
              Building the next generation of{" "}
              {data.industry.toLowerCase()} intelligence for{" "}
              {data.clientName}.
            </motion.h1>

            {/* Meta Info Bar */}
            <motion.div
              variants={fadeUpVar}
              className="flex flex-wrap gap-8 pt-8 border-t border-white/20 mt-8"
            >
              <div>
                <p className="text-evren-light-gray/60 text-xs font-bold uppercase tracking-wider mb-1">
                  Project Type
                </p>
                <p className="text-white font-medium">{data.projectType}</p>
              </div>
              <div>
                <p className="text-evren-light-gray/60 text-xs font-bold uppercase tracking-wider mb-1">
                  Timeline
                </p>
                <p className="text-white font-medium">{data.timeline}</p>
              </div>
              <div>
                <p className="text-evren-light-gray/60 text-xs font-bold uppercase tracking-wider mb-1">
                  Team
                </p>
                <p className="text-white font-medium">{data.teamSize}</p>
              </div>
              <div>
                <p className="text-evren-light-gray/60 text-xs font-bold uppercase tracking-wider mb-1">
                  Core Stack
                </p>
                <p className="text-white font-medium">
                  {data.techStackBrief}
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 2. CHALLENGE SECTION */}
      <section className="py-24 bg-evren-warm-white">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeUpVar}
            >
              <h2 className="text-sm font-bold text-evren-peach uppercase tracking-widest mb-4">
                The Challenge
              </h2>
              <h3 className="text-3xl font-heading font-bold text-evren-navy mb-6 leading-snug">
                The Problem
              </h3>
              <p className="text-lg text-evren-medium-gray leading-relaxed">
                {data.challenge.description}
              </p>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
              className="bg-white p-8 rounded-studio border border-evren-light-gray"
            >
              <h4 className="text-xl font-bold text-evren-navy mb-6">
                Key Pain Points
              </h4>
              <ul className="space-y-4">
                {data.challenge.painPoints.map((point, idx) => (
                  <motion.li
                    key={idx}
                    variants={fadeUpVar}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle2 className="w-6 h-6 text-evren-peach shrink-0 mt-0.5" />
                    <span className="text-evren-charcoal leading-relaxed">
                      {point}
                    </span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. SOLUTION SECTION */}
      <section className="py-24 bg-white border-y border-evren-light-gray">
        <div className="max-w-[1200px] mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUpVar}
            className="max-w-3xl mb-16"
          >
            <h2 className="text-sm font-bold text-evren-peach uppercase tracking-widest mb-4">
              The Solution
            </h2>
            <h3 className="text-3xl md:text-4xl font-heading font-bold text-evren-navy mb-6 leading-snug">
              What We Built
            </h3>
            <p className="text-xl text-evren-medium-gray leading-relaxed">
              {data.solution.description}
            </p>
          </motion.div>

          {/* Key Features Cards */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
          >
            {data.solution.keyFeatures.map((feat, idx) => (
              <motion.div
                key={idx}
                variants={fadeUpVar}
                className="bg-evren-warm-white p-8 rounded-studio shadow-warm border border-evren-light-gray"
              >
                <div className="w-12 h-12 bg-evren-peach-light rounded-studio-sm flex items-center justify-center mb-6">
                  {feat.icon}
                </div>
                <h4 className="text-xl font-bold text-evren-navy mb-3">
                  {feat.title}
                </h4>
                <p className="text-evren-medium-gray leading-relaxed">
                  {feat.description}
                </p>
              </motion.div>
            ))}
          </motion.div>

          {/* Tech Stack breakdown */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUpVar}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 py-8 border-t border-evren-light-gray"
          >
            {data.solution.techStack.map((stack, idx) => (
              <div key={idx}>
                <p className="text-xs font-bold uppercase tracking-widest text-evren-peach mb-2">
                  {stack.category}
                </p>
                <p className="font-semibold text-evren-navy">{stack.name}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 4. FEATURES SHOWCASE */}
      <section className="py-24 bg-evren-warm-white">
        <div className="max-w-[1200px] mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="space-y-24 lg:space-y-32"
          >
            {data.featureShowcase.map((feat, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <motion.div
                  key={idx}
                  variants={fadeUpVar}
                  className={`flex flex-col lg:flex-row gap-12 lg:gap-20 items-center ${
                    !isEven ? "lg:flex-row-reverse" : ""
                  }`}
                >
                  {/* Image */}
                  <div className="w-full lg:w-3/5">
                    <div className="relative rounded-studio overflow-hidden shadow-warm border border-evren-light-gray bg-evren-warm-gray aspect-[4/3]">
                      <Image
                        src={feat.image}
                        alt={feat.name}
                        fill
                        className="object-cover"
                        sizes="(max-width: 1024px) 100vw, 60vw"
                      />
                    </div>
                  </div>
                  {/* Text */}
                  <div className="w-full lg:w-2/5">
                    <h3 className="text-2xl font-heading font-bold text-evren-navy mb-4">
                      {feat.name}
                    </h3>
                    <p className="text-lg text-evren-medium-gray mb-6 leading-relaxed">
                      {feat.description}
                    </p>
                    <div className="inline-flex items-center gap-2 bg-evren-peach-light px-4 py-2 rounded-lg text-evren-rose font-semibold text-sm">
                      <Star size={16} />
                      {feat.benefit}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* 5. IMPACT SECTION */}
      <section className="py-24 bg-evren-navy text-white">
        <div className="max-w-[1200px] mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUpVar}
            className="text-center mb-16"
          >
            <h2 className="text-sm font-bold text-evren-peach uppercase tracking-widest mb-4">
              The Results
            </h2>
            <h3 className="text-3xl md:text-4xl font-heading font-bold mb-6">
              Measurable Enterprise Impact
            </h3>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {data.impact.map((metric, idx) => (
              <motion.div
                key={idx}
                variants={fadeUpVar}
                className="bg-white/5 border border-white/10 p-8 rounded-studio backdrop-blur-sm"
              >
                <div className="text-5xl font-heading font-extrabold text-evren-peach mb-2 tracking-tighter">
                  {metric.value}
                </div>
                <div className="text-lg font-bold mb-1">{metric.label}</div>
                <div className="text-sm text-evren-light-gray/60">
                  {metric.context}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 6. TESTIMONIAL */}
      <section className="py-32 bg-evren-warm-white">
        <div className="max-w-[800px] mx-auto px-6 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUpVar}
          >
            <div className="text-evren-peach mb-8">
              <svg
                width="48"
                height="48"
                viewBox="0 0 24 24"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                className="mx-auto block"
              >
                <path d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z" />
              </svg>
            </div>
            <p className="text-2xl md:text-3xl font-heading font-medium leading-relaxed text-evren-navy mb-12">
              &ldquo;{data.testimonial.quote}&rdquo;
            </p>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-evren-peach to-evren-rose flex items-center justify-center mb-4 shadow-warm">
                <span className="text-white font-bold text-lg">
                  {data.testimonial.name}
                </span>
              </div>
              <h5 className="font-bold text-evren-navy text-lg">
                {data.testimonial.title}
              </h5>
              <p className="text-evren-medium-gray">
                {data.testimonial.company}
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 7. CTA SECTION */}
      <section className="py-24 bg-white border-t border-evren-light-gray">
        <div className="max-w-[1200px] mx-auto px-6 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUpVar}
            className="bg-evren-navy rounded-3xl p-12 md:p-20 relative overflow-hidden"
          >
            {/* Decals */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-evren-peach/15 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-evren-navy-light/30 rounded-full blur-[100px] translate-y-1/3 -translate-x-1/3 pointer-events-none" />

            <div className="relative z-10 max-w-2xl mx-auto">
              <h2 className="text-3xl md:text-5xl font-heading font-extrabold text-white mb-6">
                Want results like these?
              </h2>
              <p className="text-lg text-white/60 mb-10">
                Let&apos;s discuss how we can build intelligence into your
                business operations and drive measurable ROI.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <motion.a
                  href="/connect"
                  whileHover={{
                    scale: 1.05,
                    boxShadow:
                      "0 16px 40px -8px rgba(244, 168, 154, 0.4)",
                  }}
                  whileTap={{ scale: 0.97 }}
                  className="inline-flex h-14 w-full sm:w-auto items-center justify-center gap-2 rounded-full bg-evren-peach px-8 font-heading text-sm font-bold text-evren-navy transition-transform"
                >
                  Book a Call
                  <ArrowRight size={16} />
                </motion.a>
                <Link
                  href="/work"
                  className="inline-flex h-14 w-full sm:w-auto items-center justify-center gap-2 rounded-studio-sm bg-white/5 border border-white/10 px-8 font-body text-sm font-semibold text-white transition-all hover:bg-white/10"
                >
                  View More Projects
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}

"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import { ChevronDown } from "lucide-react";

const POSITIONS = [
  {
    title: "Full Stack AI Engineer",
    meta: ["Full-Time", "Remote", "Product Engineering"],
    emailSubject: "Application — Full Stack AI Engineer",
    opening:
      "You're the engineer who reads about a new model release and immediately thinks about what you could build with it. You're equally comfortable designing a data schema at 9am and integrating an LLM pipeline by noon. At Evren AI, you'll build complete, production-grade AI products — from the interface a user touches to the intelligence layer underneath it.",
    whatYoullDo: [
      "Build full-stack web and mobile applications with AI embedded at the architecture level — not patched in at the end",
      "Design and implement LLM integration layers including RAG pipelines, prompt engineering systems, and context management",
      "Work directly with product and design in the Discover phase — shaping what gets built, not just how",
      "Own your features end-to-end across frontend, backend, and AI layers within sprint-based delivery cycles",
      "Contribute to technical architecture decisions on new client engagements",
      "Participate in knowledge transfer sessions so client teams can maintain what you build",
    ],
    whatYouBring: [
      "3+ years of full-stack development experience — React/Next.js on the frontend, Node.js or Python on the backend",
      "Hands-on experience integrating LLMs into production applications — you've shipped something real, not just built a demo",
      "Strong understanding of API design, database architecture, and cloud deployment",
      "Comfort working across the full product lifecycle — from wireframe review to production deployment",
      "The ability to explain technical tradeoffs to a non-technical client without making them feel talked down to",
      "A genuine interest in AI — you follow the space, you have opinions, and you're not waiting to be told what matters",
    ],
    bonuses: [
      "Vector databases & embedding pipelines",
      "Mobile development (React Native or Flutter)",
      "Product studio or consultancy experience",
      "Fine-tuning workflows",
    ],
    whyThisRole: {
      label: "Why This Role",
      copy: "You won't be a frontend engineer who occasionally touches an API. You'll own the full stack of an AI-powered product from day one. That breadth is the job — and it's also what makes it interesting.",
    },
  },
  {
    title: "Senior AI Engineer",
    meta: ["Full-Time", "Remote", "AI & ML"],
    emailSubject: "Application — Senior AI Engineer",
    opening:
      "You've moved past proof-of-concepts. You've shipped AI systems in production, dealt with the real problems — latency, hallucination, cost, context drift — and come out with opinions about how to build reliably. At Evren AI, you'll be the person who defines how intelligence gets built into every product we touch.",
    whatYoullDo: [
      "Lead the AI architecture and implementation on client product engagements — from model selection through production deployment",
      "Design and build production LLM pipelines including RAG architectures, agent systems, and domain-specific fine-tuning workflows",
      "Evaluate and select the right AI approach for each problem — model-agnostic, choosing based on what the product actually needs",
      "Work in the Discover phase to define AI feasibility, data requirements, and integration strategy before a single sprint begins",
      "Mentor Full Stack engineers on AI integration best practices",
      "Stay ahead of the field — new models, new frameworks, new techniques — and bring what's useful back to the team",
      "Contribute to Evren AI's technical thought leadership through blog posts, internal playbooks, and open-source contributions",
    ],
    whatYouBring: [
      "5+ years of software engineering with at least 2+ years focused on AI/ML systems in production",
      "Deep experience with LLM integration — prompt engineering, RAG, fine-tuning, agent architectures — at production scale",
      "Strong Python background; familiarity with LLM orchestration frameworks and vector database ecosystems",
      "The ability to think at the product level — a technically correct solution that ships late or confuses the user has failed",
      "Clear written and verbal communication — you can write a technical spec a client's CTO can review and approve",
      "You have opinions about AI architecture. You can defend them and update them when presented with a better argument.",
    ],
    bonuses: [
      "Computer vision pipelines",
      "Predictive analytics & time-series",
      "Client-facing or consultancy experience",
      "Published technical writing or open-source",
      "Data science background",
    ],
    whyThisRole: {
      label: "Why This Role",
      copy: "You'll set the AI standard for every product Evren builds. The decisions you make about how intelligence gets architected into a product will shape what clients ship into the world. That's not a small thing.",
    },
  },
];

function JobCard({ job }: { job: typeof POSITIONS[0] }) {
  const [isExpanded, setIsExpanded] = useState(true);

  useEffect(() => {
    // Media query to default collapsed on mobile
    const mql = window.matchMedia("(max-width: 768px)");
    setIsExpanded(!mql.matches);

    const matchHandler = (e: MediaQueryListEvent) => {
      setIsExpanded(!e.matches);
    };

    mql.addEventListener("change", matchHandler);
    return () => mql.removeEventListener("change", matchHandler);
  }, []);

  const toggleExpand = () => setIsExpanded(!isExpanded);

  return (
    <div
      className="bg-white rounded-[16px] overflow-hidden transition-all duration-250 ease-out"
      style={{
        border: `1px solid ${isExpanded ? "rgba(244, 168, 154, 0.6)" : "#E8E4E1"}`,
      }}
    >
      {/* ── CARD HEADER ── */}
      <div
        className="px-[24px] py-[24px] md:px-[36px] md:py-[28px] flex flex-row items-center justify-between cursor-pointer"
        style={{
          borderBottom: isExpanded ? "1px solid #E8E4E1" : "none",
        }}
        onClick={toggleExpand}
      >
        <div>
          <h3 className="text-[20px] md:text-[22px] font-heading font-semibold text-evren-navy leading-tight tracking-tight">
            {job.title}
          </h3>
          <div className="flex flex-wrap gap-[10px] md:gap-[16px] mt-[10px] md:mt-[6px]">
            {job.meta.map((tag) => (
              <span
                key={tag}
                className="bg-evren-peach-light text-evren-rose text-[12px] font-heading font-semibold px-[12px] py-[4px] rounded-[20px] tracking-[0.05em]"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Action Button / Chevron */}
        <div className="flex items-center shrink-0 ml-[16px]">
          {/* Desktop Button */}
          <button className="hidden md:flex bg-transparent border-[1.5px] border-evren-navy text-evren-navy text-[14px] font-heading font-semibold px-[20px] py-[10px] rounded-[8px] hover:bg-evren-navy hover:text-white transition-colors duration-200">
            {isExpanded ? "Close Role" : "View Role"}
          </button>
          
          {/* Mobile Chevron */}
          <div className="md:hidden flex items-center justify-center p-[8px] border border-evren-light-gray rounded-[8px]">
            <ChevronDown
              size={20}
              className="text-evren-navy transition-transform duration-300"
              style={{
                transform: isExpanded ? "rotate(180deg)" : "rotate(0deg)",
              }}
            />
          </div>
        </div>
      </div>

      {/* ── CARD BODY (Expanded Region) ── */}
      <div
        className="transition-[max-height] duration-400 ease-in-out bg-white"
        style={{
          maxHeight: isExpanded ? "2500px" : "0px",
          overflow: "hidden",
        }}
      >
        <div className="p-[24px] md:p-[36px]">
          {/* Opening Paragraph */}
          <p className="text-[16px] font-body text-evren-charcoal leading-[1.7] border-b border-evren-light-gray pb-[32px] mb-[32px]">
            {job.opening}
          </p>

          {/* Section: What You'll Do */}
          <div className="mb-[32px]">
            <h4 className="text-[14px] font-heading font-semibold text-evren-rose uppercase tracking-[0.08em] mb-[16px]">
              What You&apos;ll Do
            </h4>
            <ul className="list-none p-0 m-0 flex flex-col">
              {job.whatYoullDo.map((item, i) => (
                <li
                  key={i}
                  className="flex items-start gap-[12px] text-[15px] font-body text-evren-charcoal leading-[1.6] py-[10px] border-b border-evren-warm-gray"
                >
                  <div className="w-[6px] h-[6px] rounded-full bg-evren-peach shrink-0 mt-[8px]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Section: What You Bring */}
          <div className="mb-[32px]">
            <h4 className="text-[14px] font-heading font-semibold text-evren-rose uppercase tracking-[0.08em] mb-[16px]">
              What You Bring
            </h4>
            <ul className="list-none p-0 m-0 flex flex-col">
              {job.whatYouBring.map((item, i) => (
                <li
                  key={i}
                  className="flex items-start gap-[12px] text-[15px] font-body text-evren-charcoal leading-[1.6] py-[10px] border-b border-evren-warm-gray"
                >
                  <div className="w-[6px] h-[6px] rounded-full bg-evren-peach shrink-0 mt-[8px]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Section: Bonus */}
          <div className="mb-[32px]">
            <h4 className="text-[14px] font-heading font-semibold text-evren-rose uppercase tracking-[0.08em] mb-[12px]">
              Bonus If You Have
            </h4>
            <div className="flex flex-wrap gap-[8px]">
              {job.bonuses.map((bonus, i) => (
                <span
                  key={i}
                  className="inline-flex bg-evren-peach-light text-evren-rose text-[13px] font-body font-medium px-[14px] py-[6px] rounded-[20px]"
                >
                  {bonus}
                </span>
              ))}
            </div>
          </div>

          {/* Callout Box */}
          <div className="bg-evren-navy rounded-[12px] p-[24px] md:p-[28px] mt-[32px] border-l-[4px] border-evren-peach">
            <h4 className="text-[12px] font-heading font-semibold text-evren-peach uppercase tracking-[0.08em] mb-[8px]">
              {job.whyThisRole.label}
            </h4>
            <p className="text-[16px] font-body text-white leading-[1.6] italic">
              &quot;{job.whyThisRole.copy}&quot;
            </p>
          </div>

          {/* Apply Row */}
          <div className="mt-[32px] flex flex-col sm:flex-row items-start sm:items-center gap-[16px]">
            <a
              href={`mailto:hello@evrenai.com?subject=${encodeURIComponent(job.emailSubject)}`}
              className="inline-flex items-center justify-center bg-evren-peach hover:bg-evren-rose text-evren-navy text-[15px] font-heading font-semibold px-[28px] py-[14px] rounded-[8px] transition-colors duration-200 min-w-[200px]"
            >
              Apply for This Role
            </a>
            <span className="text-[14px] font-body text-evren-medium-gray">
              or send your portfolio to hello@evrenai.com
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function OpenPositions() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-60px" });

  return (
    <section
      ref={sectionRef}
      className="bg-evren-warm-gray py-[48px] md:py-[64px] lg:py-[100px] px-5 sm:px-6 relative"
    >
      <div className="max-w-[900px] mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <span className="block text-[12px] font-heading font-semibold text-evren-rose uppercase tracking-[0.1em] mb-[12px]">
            Open Positions
          </span>
          <h2 className="font-heading text-[28px] md:text-[32px] font-semibold text-evren-navy-light leading-[1.3] tracking-tight">
            Two Roles. One Standard: Exceptional.
          </h2>
          <p className="font-body text-[16px] text-evren-medium-gray leading-[1.6] max-w-[520px] mx-auto mt-[16px]">
            We hire slowly and deliberately. Both roles require engineers who can think
            at the product level, not just the code level.
          </p>
        </motion.div>

        {/* Position Cards */}
        <div className="mt-[56px] flex flex-col gap-[24px]">
          {POSITIONS.map((job, idx) => (
            <motion.div
              key={job.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + idx * 0.1 }}
            >
              <JobCard job={job} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

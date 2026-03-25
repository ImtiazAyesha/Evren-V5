// ═══════════════════════════════════════════════════════════════════════
//  CASE STUDIES DATA LIBRARY — ALL 7 CASE STUDIES
//  Single source of truth for all case study pages + work listing cards
// ═══════════════════════════════════════════════════════════════════════

export interface CaseStudy {
  client: string;
  industry: string;
  headline: string;
  subheadline: string;
  timeline: string;
  teamSize: string;
  hardMetric: string;
  heroImage: string;
  challenge: {
    title: string;
    description: string;
    painPoints: string[];
  };
  approach: {
    title: string;
    description: string;
    steps: { step: string; detail: string }[];
  };
  solution: {
    solutionImage: string;
    features: { title: string; description: string }[];
  };
  results: { value: string; label: string; context: string }[];
  techStack: { name: string; icon: string }[];
  aiHighlight: {
    title: string;
    description: string;
    beforeImage: string;
    afterImage: string;
    beforeLabel: string;
    afterLabel: string;
  };
  testimonial?: {
    quote: string;
    name: string;
    title: string;
    company: string;
  };
}

export interface CaseStudyCard {
  metric: string;
  metricLabel: string;
  client: string;
  description: string;
  tags: string[];
  image: string;
  href: string;
}

// ═══════════════════════════════════════════════════════════════════════
//  CASE STUDY 1 — iSeedoc Telehealth
// ═══════════════════════════════════════════════════════════════════════

export const ISEEDOC_DATA: CaseStudy = {
  client: "iSeedoc",
  industry: "Healthcare",
  headline: "Revolutionizing Healthcare Access: An AI-Powered Virtual Consultation Platform",
  subheadline:
    "Global telehealth innovator iSeedoc partnered with Evren AI to architect an end-to-end, HIPAA-compliant platform that automates clinical workflows and delivers intelligent, scalable healthcare.",
  timeline: "8 Months",
  teamSize: "6 Specialists",
  hardMetric: "90% Faster Reports",
  heroImage: "/case studies/case 1.webp",
  challenge: {
    title: "Scaling Quality Care Without Compromising Security",
    description:
      "Global telehealth innovator iSeedoc needed to bridge the gap between patient demand and specialist availability. Their core challenge was scaling operations without compromising on the quality of care, data security, or regulatory compliance. They partnered with Evren AI to architect an end-to-end, HIPAA-compliant telehealth platform that automates workflows, streamlines consultations, and leverages AI to deliver intelligent, accessible, and secure healthcare.",
    painPoints: [
      "Fortifying patient data security & ensuring HIPAA compliance across all touchpoints",
      "Automating clinical & administrative workflows including scheduling and report analysis",
      "Enabling seamless, low-latency patient-doctor communication in real-time",
      "Building a scalable infrastructure that handles growing provider and patient demand",
    ],
  },
  approach: {
    title: "Engineering a Secure, Intelligent Foundation",
    description:
      "We began with a deep audit of iSeedoc's compliance requirements and data flows, then mapped every clinical touchpoint before writing a single line of code.",
    steps: [
      {
        step: "Compliance Architecture",
        detail:
          "Mapped all HIPAA data flows, defined role boundaries for Patient / Doctor / Admin, and designed the JWT auth system with auditability baked in from day one.",
      },
      {
        step: "AI Pipeline Design",
        detail:
          "Prototyped and benchmarked GPT-4 prompting strategies for medical document extraction, validating accuracy against real clinical report formats before committing to the pipeline.",
      },
      {
        step: "Real-Time Infrastructure",
        detail:
          "Architected WebSocket-based communication with auto-reconnect logic and user-specific tracking to guarantee reliable live consultations under variable network conditions.",
      },
      {
        step: "Async Task Orchestration",
        detail:
          "Designed non-blocking background processing for AI report generation, email notifications, and calendar sync — keeping the platform responsive under heavy clinical load.",
      },
    ],
  },
  solution: {
    solutionImage: "/case studies/case 1.webp",
    features: [
      {
        title: "Secure Role-Based Auth Core",
        description:
          "JWT-based authentication engine with role-based access (Patient, Doctor, Admin) ensuring strict data control and auditability across every clinical touchpoint.",
      },
      {
        title: "AI Document Processing",
        description:
          "GPT-4 automates medical report analysis, extracting structured insights from diverse file formats and generating polished PDF summaries — saving hours of manual clinical effort.",
      },
      {
        title: "Real-Time Communication",
        description:
          "WebSocket-based chat and notification system with automatic reconnection and user-specific tracking, enabling reliable live consultations between patients and providers.",
      },
    ],
  },
  results: [
    { value: "90%", label: "Faster Report Analysis", context: "AI-powered engine transformed multi-hour process into minutes" },
    { value: "100%", label: "HIPAA Compliant", context: "End-to-end automated, compliant workflow across all touchpoints" },
    { value: "0", label: "Scheduling Conflicts", context: "Dynamic slot-checking with Google Calendar integration" },
    { value: "∞", label: "Future-Proof Scale", context: "Ready for EMR/EHR integrations via OAuth2 & comprehensive API" },
  ],
  techStack: [
    { name: "Python", icon: "Code" },
    { name: "FastAPI", icon: "Zap" },
    { name: "GPT-4", icon: "Cpu" },
    { name: "WebSockets", icon: "Globe" },
    { name: "JWT Auth", icon: "Lock" },
    { name: "PostgreSQL", icon: "Database" },
    { name: "Google Calendar", icon: "Globe" },
    { name: "Cloud Infra", icon: "Cloud" },
  ],
  aiHighlight: {
    title: "From Hours to Minutes: AI-Powered Medical Document Intelligence",
    description:
      "GPT-4 reads, interprets, and structures medical reports in seconds — replacing a multi-hour manual review process with a single automated pipeline. The result is faster diagnoses, lower administrative overhead, and a clinical team that can focus on care.",
    beforeImage: "/case studies/case 1.webp",
    afterImage: "/case studies/case 1.webp",
    beforeLabel: "Before: Manual Review",
    afterLabel: "After: AI-Powered",
  },
  testimonial: {
    quote:
      "Evren AI didn't just build software — they engineered the intelligent backbone of our telehealth platform. The AI-powered document processing alone saved our clinical team hours every day, and the scalable architecture means we're ready for whatever comes next.",
    name: "CTO",
    title: "Chief Technology Officer",
    company: "iSeedoc",
  },
};

// ═══════════════════════════════════════════════════════════════════════
//  CASE STUDY 2 — VerifiedX Cybersecurity
// ═══════════════════════════════════════════════════════════════════════

export const VERIFIEDX_DATA: CaseStudy = {
  client: "VerifiedX",
  industry: "FinTech / Cybersecurity",
  headline: "Mitigating Multi-Million Dollar Cyber Risk with Proactive AI Threat Detection",
  subheadline:
    "For a high-growth FinTech, we deployed a real-time LLM-based detection engine that analyzes and neutralizes sophisticated phishing attacks before they breach enterprise security.",
  timeline: "6 Months",
  teamSize: "5 Specialists",
  hardMetric: "$7.5M+ Losses Prevented",
  heroImage: "/case studies/case 2.webp",
  challenge: {
    title: "Reactive Security Was No Longer Enough",
    description:
      "In today's threat landscape, reactive cybersecurity is a recipe for financial and reputational disaster. VerifiedX, a high-growth FinTech platform, required an ironclad defense against sophisticated, AI-driven phishing attacks that traditional filters were missing. They partnered with Evren AI to build a proactive threat neutralization engine leveraging state-of-the-art LLMs to identify and stop attacks before they impact the enterprise.",
    painPoints: [
      "Cybercriminals using generative AI to scale personalized phishing attacks, rendering rule-based systems ineffective",
      "Need for a unified, real-time defense system analyzing links, messages, and content across all digital channels",
      "Solution had to handle millions of real-time analysis requests on scalable infrastructure without sacrificing performance",
      "Traditional pattern-matching filters were missing increasingly sophisticated attack vectors",
    ],
  },
  approach: {
    title: "Designing a Proactive, Contextual Defense",
    description:
      "We started by analyzing VerifiedX's threat history and identified the semantic patterns that rule-based systems were missing, then engineered an LLM-first architecture around those gaps.",
    steps: [
      {
        step: "Threat Landscape Analysis",
        detail:
          "Catalogued historical attack vectors, identified semantic patterns that evaded rule-based systems, and established accuracy benchmarks to beat before the project was greenlit.",
      },
      {
        step: "LLM Selection & Fine-Tuning",
        detail:
          "Evaluated and fine-tuned leading LLMs on curated phishing datasets, iterating on prompt strategies to achieve contextual threat understanding — not just keyword matching.",
      },
      {
        step: "High-Performance Backend",
        detail:
          "Built a FastAPI backend capable of handling millions of real-time analysis requests with sub-second response times, pressure-tested against peak FinTech traffic loads.",
      },
      {
        step: "Continuous Learning Loop",
        detail:
          "Designed a feedback mechanism that feeds newly identified threats back into the model's training data, ensuring the defense evolves faster than the attack landscape.",
      },
    ],
  },
  solution: {
    solutionImage: "/case studies/case 2.webp",
    features: [
      {
        title: "LLM-Powered Contextual Analysis",
        description:
          "State-of-the-art LLMs trained on phishing data move beyond pattern-matching to understand deceptive content contextually — catching attacks no rule-based filter can detect.",
      },
      {
        title: "Real-Time High-Performance Backend",
        description:
          "A scalable FastAPI backend handles real-time analysis of links, messages, and embedded content across all digital channels without compromising response performance.",
      },
      {
        title: "Self-Evolving Defense Architecture",
        description:
          "A containerized, cloud-native solution that continuously ingests new threat data and adapts its models, ensuring defenses always stay ahead of the evolving attack landscape.",
      },
    ],
  },
  results: [
    { value: "$7.5M+", label: "Annual Losses Prevented", context: "Proactively neutralized threats preventing direct financial damage" },
    { value: "99.7%", label: "Detection Accuracy", context: "Near-perfect accuracy detecting and blocking sophisticated threats" },
    { value: "Real-Time", label: "Cross-Channel Protection", context: "Unified defense across browser, mobile, and messaging channels" },
    { value: "∞", label: "Scalable Architecture", context: "Containerized solution that adapts as the business grows" },
  ],
  techStack: [
    { name: "Python", icon: "Code" },
    { name: "FastAPI", icon: "Zap" },
    { name: "Fine-Tuned LLMs", icon: "Cpu" },
    { name: "Docker", icon: "Box" },
    { name: "Cloud-Native", icon: "Cloud" },
    { name: "Browser Extension", icon: "Globe" },
    { name: "Mobile SDK", icon: "Shield" },
    { name: "PostgreSQL", icon: "Database" },
  ],
  aiHighlight: {
    title: "LLMs That Understand Intent, Not Just Patterns",
    description:
      "Where rule-based systems read surface-level signals, our LLM engine reads meaning. It interprets semantic intent behind a message or link — detecting social engineering, urgency manipulation, and impersonation tactics that no keyword filter can catch.",
    beforeImage: "/case studies/case 2.webp",
    afterImage: "/case studies/case 2.webp",
    beforeLabel: "Before: Rule-Based Filters",
    afterLabel: "After: LLM Intelligence",
  },
  testimonial: {
    quote:
      "Evren AI transformed our security posture from reactive to proactive. Their LLM-powered engine catches threats our previous systems never could have detected. The $7.5M+ in prevented losses speaks for itself — this partnership has been transformational for VerifiedX.",
    name: "CISO",
    title: "Chief Information Security Officer",
    company: "VerifiedX",
  },
};

// ═══════════════════════════════════════════════════════════════════════
//  CASE STUDY 3 — AI Construction Safety
// ═══════════════════════════════════════════════════════════════════════

export const CONSTRUCTION_SAFETY_DATA: CaseStudy = {
  client: "National Construction Firm",
  industry: "Construction & Real Estate",
  headline: "Slashing On-Site Incidents by 40% with AI-Powered Safety Monitoring",
  subheadline:
    "Our edge-deployed computer vision system autonomously monitors for PPE compliance and structural hazards in real-time, providing instant alerts to prevent accidents and ensure OSHA compliance.",
  timeline: "5 Months",
  teamSize: "5 Specialists",
  hardMetric: "40% Fewer Incidents",
  heroImage: "/case studies/case 3.webp",
  challenge: {
    title: "Proactively Eliminate Job Site Risk Before It Becomes Tragedy",
    description:
      "For a leading national construction firm, ensuring worker safety and maintaining OSHA compliance across multiple active job sites was a mission-critical yet resource-intensive challenge. Traditional oversight was prone to human error and blind spots. They partnered with Evren AI to deploy a real-time, AI-powered computer vision system that autonomously identifies and flags safety hazards — preventing accidents before they happen.",
    painPoints: [
      "Fatal fall risks from workers near unprotected edges going undetected by manual oversight",
      "PPE non-compliance (missing safety helmets) was impossible to monitor consistently at scale",
      "Manual supervisors could not cover multiple simultaneous locations, creating dangerous blind spots",
      "Reactive safety processes meant incidents were addressed after the fact, not prevented proactively",
    ],
  },
  approach: {
    title: "Deploying an Autonomous Digital Safety Supervisor",
    description:
      "We engineered an edge-first architecture to bring AI inference directly onto the job site — eliminating cloud latency and ensuring real-time hazard detection even in remote or low-connectivity environments.",
    steps: [
      {
        step: "Edge AI Deployment",
        detail:
          "Deployed NVIDIA Jetson Xavier devices on-site for low-latency, real-time processing without cloud reliance, ensuring instant analysis in remote areas with unreliable connectivity.",
      },
      {
        step: "Custom Model Training",
        detail:
          "Developed a highly accurate YOLOv4 model custom-trained on 10,000+ real construction site images, ensuring reliable detection across diverse lighting, weather, and site conditions.",
      },
      {
        step: "Real-Time Alerting System",
        detail:
          "Built a configurable alert system that instantly notifies site supervisors with visual evidence upon detecting hazards — compressing the response window from hours to seconds.",
      },
      {
        step: "Multi-Camera Scalable Architecture",
        detail:
          "Leveraged NVIDIA DeepStream to process multiple simultaneous video streams, enabling easy expansion across additional job sites and cameras as the client's operations grow.",
      },
    ],
  },
  solution: {
    solutionImage: "/case studies/case 3.webp",
    features: [
      {
        title: "Edge-Deployed Computer Vision",
        description:
          "NVIDIA Jetson Xavier devices run YOLOv4 inference directly on-site, delivering sub-second hazard detection without cloud dependency — even in areas with limited connectivity.",
      },
      {
        title: "PPE & Hazard Detection",
        description:
          "Custom-trained models with 91% accuracy identify unprotected edges, missing helmets, and PPE non-compliance in real-time across all monitored zones simultaneously.",
      },
      {
        title: "Instant Supervisor Alerting",
        description:
          "Configurable alert system sends immediate notifications with visual evidence to site supervisors, enabling rapid intervention before a near-miss escalates into an incident.",
      },
    ],
  },
  results: [
    { value: "40%", label: "Reduction in Safety Incidents", context: "Reported within first 6 months across all monitored zones" },
    { value: "91%", label: "Hazard Detection Accuracy", context: "Exceptional accuracy identifying critical unprotected edge fall risks" },
    { value: "24/7", label: "Proactive Hazard Monitoring", context: "Continuous automated oversight replacing reactive manual processes" },
    { value: "↓", label: "Reduced Insurance Premiums", context: "Fortified OSHA compliance strengthened regulatory & legal position" },
  ],
  techStack: [
    { name: "YOLOv4", icon: "Search" },
    { name: "NVIDIA Jetson", icon: "Cpu" },
    { name: "DeepStream", icon: "Server" },
    { name: "Python", icon: "Code" },
    { name: "Computer Vision", icon: "Shield" },
    { name: "Edge AI", icon: "Zap" },
    { name: "Alert System", icon: "Globe" },
    { name: "PostgreSQL", icon: "Database" },
  ],
  aiHighlight: {
    title: "A Tireless Eye in the Sky: From Reactive Oversight to Proactive Prevention",
    description:
      "Traditional safety supervision relies on human attention — which is finite, fatigable, and limited to one location at a time. Our edge-deployed AI watches every corner of every site simultaneously, flagging hazards the moment they appear and delivering visual evidence to supervisors in seconds.",
    beforeImage: "/case studies/case 3.webp",
    afterImage: "/case studies/case 3.webp",
    beforeLabel: "Before: Manual Oversight",
    afterLabel: "After: AI Vision",
  },
  testimonial: {
    quote:
      "Safety is our number one priority, and Evren AI has given us a powerful new tool to uphold that commitment. Their AI system is our tireless eye in the sky, identifying risks we might have missed. The reduction in incidents and the peace of mind it provides are invaluable to our operations.",
    name: "Head of Operations",
    title: "Head of Operations",
    company: "Major National Construction Firm",
  },
};

// ═══════════════════════════════════════════════════════════════════════
//  CASE STUDY 4 — MarketPulse Financial AI
// ═══════════════════════════════════════════════════════════════════════

export const MARKETPULSE_DATA: CaseStudy = {
  client: "MarketPulse Live",
  industry: "Finance & Investing",
  headline: "Delivering Actionable Market Alpha with Real-Time Earnings Call Intelligence",
  subheadline:
    "We built a microservices-based platform that transcribes, summarizes, and analyzes earnings calls in real-time, giving financial advisors and investors an unfair information edge.",
  timeline: "7 Months",
  teamSize: "6 Specialists",
  hardMetric: "< 90 Seconds to Insight",
  heroImage: "/case studies/case 4.webp",
  challenge: {
    title: "Achieve an Unfair Information Advantage During Earnings Season",
    description:
      "In the world of finance, information latency is the difference between profit and loss. A leading financial advisory firm needed to equip its strategists and investors with an immediate edge during volatile earnings season. They partnered with Evren AI to build MarketPulse Live — a real-time analysis platform that ingests, transcribes, and summarizes earnings calls the moment they happen, turning unstructured audio into actionable market intelligence.",
    painPoints: [
      "Information latency turned live earnings calls into missed opportunities — insights arrived hours after the market had already moved",
      "Manual analysis of call transcripts was slow, inconsistent, and unable to detect nuanced shifts in executive tone and sentiment",
      "The platform needed to handle concurrent data streams from multiple simultaneous calls without degrading under peak market load",
      "Proprietary trading algorithms required a future-proof, API-first integration surface to consume AI-generated insights",
    ],
  },
  approach: {
    title: "Engineering a Real-Time Intelligence Engine",
    description:
      "We designed a cloud-native, microservices-first architecture from the ground up — built for speed, resilience, and the ability to scale horizontally across concurrent earnings events.",
    steps: [
      {
        step: "Cloud-Native Microservices Architecture",
        detail:
          "Designed a fully containerized microservices platform on Google Cloud Run, ensuring scalability and high availability with no single points of failure during peak market hours.",
      },
      {
        step: "Low-Latency Transcription Pipeline",
        detail:
          "Integrated OpenAI Whisper for real-time audio-to-text conversion of live earnings streams, processing speech with minimal latency to feed the downstream NLP analysis layer.",
      },
      {
        step: "NLP Sentiment & Summarization Engine",
        detail:
          "Deployed custom NLP models to extract key insights, detect sentiment shifts in executive Q&A sessions, and auto-generate structured summaries for immediate analyst consumption.",
      },
      {
        step: "Real-Time Dashboard & API Layer",
        detail:
          "Built a Next.js dashboard with WebSocket updates for live sentiment and stock visualizations, plus an API-first design enabling future integration with proprietary trading algorithms.",
      },
    ],
  },
  solution: {
    solutionImage: "/case studies/case 4.webp",
    features: [
      {
        title: "Real-Time Transcription & NLP Pipeline",
        description:
          "OpenAI Whisper converts live earnings call audio to text in near-real-time, feeding a custom NLP layer that extracts key insights and generates structured summaries within seconds.",
      },
      {
        title: "Executive Sentiment Analysis",
        description:
          "Advanced NLP models detect shifts in executive tone and sentiment during Q&A sessions — providing qualitative leading indicators for market reactions beyond raw transcription.",
      },
      {
        title: "Scalable Multi-Call Monitoring",
        description:
          "Cloud-native microservices architecture enables simultaneous monitoring of 10+ concurrent earnings calls, giving analysts unprecedented market coverage during peak earnings season.",
      },
    ],
  },
  results: [
    { value: "< 90s", label: "Audio to Actionable Insight", context: "Reduced information-to-insight cycle from hours to under 90 seconds" },
    { value: "10+", label: "Concurrent Calls Monitored", context: "Simultaneous earnings call coverage significantly expanded market reach" },
    { value: "Real-Time", label: "Sentiment Tracking", context: "Live qualitative indicators during Q&A sessions provided market edge" },
    { value: "∞", label: "Compounding Advantage", context: "Foundation for future AI-driven forecasting and anomaly detection" },
  ],
  techStack: [
    { name: "Next.js", icon: "Globe" },
    { name: "OpenAI Whisper", icon: "Cpu" },
    { name: "Custom NLP", icon: "Search" },
    { name: "Google Cloud Run", icon: "Cloud" },
    { name: "Microservices", icon: "Server" },
    { name: "WebSockets", icon: "Zap" },
    { name: "Docker", icon: "Box" },
    { name: "PostgreSQL", icon: "Database" },
  ],
  aiHighlight: {
    title: "From Live Audio to Market Intelligence in Under 90 Seconds",
    description:
      "While competitors are still listening to the call replay, our platform has already transcribed, analyzed, and surfaced the critical insights that matter. That information delta — measured in minutes — translates directly into trading alpha during the most volatile windows of earnings season.",
    beforeImage: "/case studies/case 4.webp",
    afterImage: "/case studies/case 4.webp",
    beforeLabel: "Before: Manual Analysis",
    afterLabel: "After: AI Intelligence",
  },
  testimonial: {
    quote:
      "In our business, speed is everything. Evren AI delivered a platform that has fundamentally changed how we operate during earnings season. We are no longer reacting to the market, we are anticipating it. Their ability to translate a complex architectural vision into a high-performance, real-world tool has been exceptional.",
    name: "Chief Investment Officer",
    title: "Chief Investment Officer",
    company: "Financial Advisory Firm",
  },
};

// ═══════════════════════════════════════════════════════════════════════
//  CASE STUDY 5 — BillClear Legal Tech
// ═══════════════════════════════════════════════════════════════════════

export const BILLCLEAR_DATA: CaseStudy = {
  client: "BillClear AI",
  industry: "Legal Tech",
  headline: "Recovering Lost Revenue & Ensuring Billing Compliance for a Top-Tier Law Firm",
  subheadline:
    "We developed an AI-powered analyzer that automatically reviews and corrects timekeeper narratives, transforming vague entries into compliant, billable records that withstand client scrutiny.",
  timeline: "6 Months",
  teamSize: "4 Specialists",
  hardMetric: "15% Revenue Recovered",
  heroImage: "/case studies/case 5.webp",
  challenge: {
    title: "Protect Firm Revenue and Client Trust from Silent Billing Leakage",
    description:
      "A leading national law firm was facing a significant challenge: revenue leakage caused by vague, non-compliant, or incomplete timekeeper narratives that were being rejected by clients. They partnered with Evren AI to build BillClear AI — a smart platform that uses a legal-specific AI engine to automatically analyze and improve billing narratives, ensuring every minute of work is accurately and compliantly captured.",
    painPoints: [
      "Vague and inconsistent billing entries were being written down or rejected by clients, causing direct revenue leakage",
      "Partners and senior staff were spending valuable billable hours manually reviewing and correcting timesheets",
      "Lack of billing transparency was eroding client confidence and creating unnecessary disputes",
      "No systemic way to educate timekeepers on best practices, leading to persistent quality issues across the firm",
    ],
  },
  approach: {
    title: "Building an Intelligent Billing & Compliance Engine",
    description:
      "We collaborated closely with legal billing experts to build an AI ruleset grounded in real-world compliance standards, then wrapped it in a system designed to educate as well as automate.",
    steps: [
      {
        step: "Legal-Specific AI Ruleset",
        detail:
          "Collaborated with legal billing experts to create a comprehensive AI ruleset for analyzing narratives against compliance standards — covering vagueness, block billing, and task code alignment.",
      },
      {
        step: "Automated Narrative Analysis Pipeline",
        detail:
          "Built a FastAPI-powered backend to process billing entries, flag non-compliant items in real-time, and generate AI-driven rewrite suggestions that preserve the timekeeper's intent.",
      },
      {
        step: "Educational User Interface",
        detail:
          "Designed an intuitive web interface where staff can view flagged issues, compare original vs. corrected entries, and absorb best-practice guidance to improve future time entry quality.",
      },
      {
        step: "Secure, Scalable Infrastructure",
        detail:
          "Containerized the platform with Docker and PostgreSQL, ensuring data confidentiality, regulatory security, and the scalability to grow alongside the firm's headcount and workload.",
      },
    ],
  },
  solution: {
    solutionImage: "/case studies/case 5.webp",
    features: [
      {
        title: "AI-Powered Narrative Analysis",
        description:
          "A legal-specific NLP engine automatically reviews every time entry against compliance standards, flagging vague descriptions, block billing, and non-compliant patterns before submission.",
      },
      {
        title: "Intelligent Rewrite Suggestions",
        description:
          "The system generates context-aware rewrite suggestions that transform non-compliant entries into clear, defensible billing records — reducing manual correction effort by over 80%.",
      },
      {
        title: "Firm-Wide Billing Transparency",
        description:
          "An intuitive dashboard gives partners real-time visibility into billing quality across the firm, with actionable insights that continuously raise the standard of timekeeper input.",
      },
    ],
  },
  results: [
    { value: "15%", label: "Revenue Recovered", context: "Previously written-down revenue identified and corrected, delivering strong ROI" },
    { value: "80%+", label: "Reduction in Manual Review", context: "Automated platform saved thousands of partner and staff hours" },
    { value: "100%", label: "Non-Compliant Submissions Eliminated", context: "All billing submissions adhered to strict standards, disputes reduced to zero" },
    { value: "↑", label: "Client Trust & Transparency", context: "Improved billing clarity strengthened client relationships firm-wide" },
  ],
  techStack: [
    { name: "Python", icon: "Code" },
    { name: "FastAPI", icon: "Zap" },
    { name: "Custom NLP", icon: "Search" },
    { name: "Next.js", icon: "Globe" },
    { name: "Docker", icon: "Box" },
    { name: "PostgreSQL", icon: "Database" },
    { name: "Rule Engine", icon: "Shield" },
    { name: "AWS", icon: "Cloud" },
  ],
  aiHighlight: {
    title: "From Revenue Leakage to Billing Confidence: AI That Reads Like a Senior Partner",
    description:
      "Every vague time entry is a potential write-down. BillClear's AI reads each narrative the way an experienced billing partner would — spotting ambiguity, block billing, and task code mismatches instantly — then rewrites them into defensible records before they ever reach a client invoice.",
    beforeImage: "/case studies/case 5.webp",
    afterImage: "/case studies/case 5.webp",
    beforeLabel: "Before: Vague Entry",
    afterLabel: "After: Compliant Record",
  },
  testimonial: {
    quote:
      "Revenue leakage from billing is a silent killer of profitability. Evren AI's BillClear platform has been a game-changer. It not only plugged the leaks in our revenue cycle but also gave our clients a new level of confidence in our operations. It is one of the best investments in operational technology we have ever made.",
    name: "Managing Partner",
    title: "Managing Partner",
    company: "National Law Firm",
  },
};

// ═══════════════════════════════════════════════════════════════════════
//  CASE STUDY 6 — IntelliBots AI Agent Platform
// ═══════════════════════════════════════════════════════════════════════

export const INTELLIBOTS_DATA: CaseStudy = {
  client: "IntelliBots",
  industry: "Enterprise Software & Logistics",
  headline: "From Chatbot to Command Center: Empowering Enterprise with an AI Agent Deployment Platform",
  subheadline:
    "We delivered a platform enabling our client to build and deploy their own RAG-powered chatbots for internal support, reducing IT help desk tickets and improving employee self-service.",
  timeline: "8 Months",
  teamSize: "6 Specialists",
  hardMetric: "70% Fewer Support Queries",
  heroImage: "/case studies/case 6.webp",
  challenge: {
    title: "Democratize AI Creation Across the Enterprise, Without Losing Control",
    description:
      "A global logistics enterprise needed to move beyond simple, single-purpose chatbots. Their goal was to empower internal teams to create, manage, and deploy multiple sophisticated AI assistants — for use cases ranging from IT support to customer service — without a massive development overhead for each new bot. They partnered with Evren AI to build IntelliBots, a centralized platform for deploying and managing autonomous, RAG-powered AI agents at scale.",
    painPoints: [
      "Every new chatbot required a full development cycle, making it impossible to scale conversational AI across the enterprise cost-effectively",
      "Existing bots gave generic, inaccurate answers — not grounded in internal documentation, causing user distrust and low adoption",
      "No centralized way to manage, monitor, or govern AI performance across multiple business units and use cases",
      "Embedding AI agents into websites and internal apps required complex, one-off engineering work for each deployment",
    ],
  },
  approach: {
    title: "Building a Scalable AI Agent Factory",
    description:
      "We designed IntelliBots as a multi-tenant platform where each business unit gets its own isolated agent environment — with a shared infrastructure that keeps costs low and governance centralized.",
    steps: [
      {
        step: "Modular Multi-Tenant Core",
        detail:
          "Built a robust FastAPI backend managing multiple isolated chatbot instances with strict data segregation, ensuring each business unit's knowledge base and conversations remain private.",
      },
      {
        step: "RAG & Indexing Engine",
        detail:
          "Integrated RAG with Elasticsearch to create a searchable, always-current knowledge base from uploaded documents and live websites — grounding every AI response in verified internal data.",
      },
      {
        step: "Dual Interface Design",
        detail:
          "Created two Next.js interfaces: an admin dashboard for non-developers to build and manage bots, and a responsive embeddable chat UI that drops into any web app with a single script tag.",
      },
      {
        step: "AWS High-Availability Infrastructure",
        detail:
          "Containerized the platform and hosted on AWS with load balancing and autoscaling, ensuring consistent performance and reliability as agent usage grows across the enterprise.",
      },
    ],
  },
  solution: {
    solutionImage: "/case studies/case 6.webp",
    features: [
      {
        title: "No-Code Agent Builder",
        description:
          "A user-friendly admin interface allows business users — not just developers — to create, configure, and manage AI agents by uploading documents or pointing to websites as their knowledge source.",
      },
      {
        title: "RAG-Powered Accuracy Engine",
        description:
          "Retrieval-Augmented Generation with Elasticsearch ensures every agent response is grounded in the client's own verified documentation, eliminating AI hallucinations and building user trust.",
      },
      {
        title: "One-Line Embeddable Chat UI",
        description:
          "A production-ready, responsive chat widget embeds into any website or internal app with minimal code, making enterprise-wide AI deployment a matter of hours, not months.",
      },
    ],
  },
  results: [
    { value: "70%", label: "Fewer Repetitive Support Queries", context: "First IT help desk agent automated common queries, freeing the team for complex issues" },
    { value: "Hours", label: "New Agent Deployment Time", context: "Reduced from months of dev work to self-service in hours" },
    { value: "100%", label: "Verifiable, Source-Based Responses", context: "RAG architecture ensured all answers grounded in client's own knowledge documents" },
    { value: "1", label: "Centralized AI Governance Platform", context: "Unified hub to manage strategy, monitor performance, and ensure quality across all agents" },
  ],
  techStack: [
    { name: "FastAPI", icon: "Zap" },
    { name: "Next.js", icon: "Globe" },
    { name: "RAG", icon: "Search" },
    { name: "Elasticsearch", icon: "Database" },
    { name: "Docker", icon: "Box" },
    { name: "AWS", icon: "Cloud" },
    { name: "Python", icon: "Code" },
    { name: "Multi-Tenancy", icon: "Server" },
  ],
  aiHighlight: {
    title: "RAG: AI That Answers From Your Knowledge, Not the Internet",
    description:
      "The difference between a chatbot people trust and one they abandon is grounding. IntelliBots' RAG engine retrieves the exact relevant passages from your internal documentation before generating any response — meaning every answer is verifiable, accurate, and aligned with your organization's actual policies and data.",
    beforeImage: "/case studies/case 6.webp",
    afterImage: "/case studies/case 6.webp",
    beforeLabel: "Before: Generic Chatbots",
    afterLabel: "After: RAG-Powered Agents",
  },
  testimonial: {
    quote:
      "IntelliBots has transformed our approach to internal AI. Instead of commissioning one-off projects, we now have a platform that empowers our own teams to build the solutions they need. Evren AI delivered a scalable, secure, and remarkably intuitive system that is driving efficiency across our entire organization.",
    name: "Chief Digital Officer",
    title: "Chief Digital Officer",
    company: "Global Logistics Enterprise",
  },
};

// ═══════════════════════════════════════════════════════════════════════
//  CASE STUDY 7 — TrackRec Sales Hiring AI
// ═══════════════════════════════════════════════════════════════════════

export const TRACKREC_DATA: CaseStudy = {
  client: "TrackRec",
  industry: "HR Tech / Sales Ops",
  headline: "Improving Sales Team Performance by Hiring the Right Reps, Faster",
  subheadline:
    "For a leading sales recruitment agency, we engineered an AI-powered platform that analyzes candidates against 11 KPIs to generate a Sales Fit Score, reducing bias and improving hiring accuracy.",
  timeline: "6 Months",
  teamSize: "5 Specialists",
  hardMetric: "25% Higher Quota Attainment",
  heroImage: "/case studies/case 7.webp",
  challenge: {
    title: "Replace Gut Feel with Data-Driven Sales Hiring Intelligence",
    description:
      "A premier sales recruitment agency recognized a costly inefficiency in the market: traditional hiring based on resumes and interviews was failing to consistently identify top-performing sales candidates. This led to high turnover and missed revenue targets for their clients. They partnered with Evren AI to build TrackRec — an AI-driven platform that moves beyond resumes to generate a data-backed Sales Fit Score, revolutionizing how sales talent is assessed and placed.",
    painPoints: [
      "Resume-based hiring failed to predict on-the-job sales performance, leading to expensive mis-hires and high first-year turnover",
      "Subjective interview processes introduced unconscious bias, excluding high-potential candidates who didn't interview well",
      "No standardized, data-driven framework for evaluating candidates against the specific KPIs that predict success in a given role",
      "Manual candidate research and profile enrichment was time-consuming, slowing the hiring cycle and frustrating clients",
    ],
  },
  approach: {
    title: "Engineering a Predictive Talent Assessment Engine",
    description:
      "We built TrackRec's scoring system by first working with the agency's top recruiters to identify the 11 KPIs that historically correlated with high sales performance, then engineering a model to assess every candidate against them.",
    steps: [
      {
        step: "Multi-Factor AI Scoring System",
        detail:
          "Developed the AI-powered Sales Fit Score by blending machine learning models and OpenAI to generate a reliable, explainable score based on 11 key performance metrics including deal size, industry experience, and tenure.",
      },
      {
        step: "High-Performance Scalable Backend",
        detail:
          "Architected a microservices platform with FastAPI and Celery to handle large candidate datasets and complex scoring operations asynchronously, hosted on secure AWS infrastructure.",
      },
      {
        step: "Third-Party Data Enrichment",
        detail:
          "Integrated the Apollo.io API to automatically enrich candidate profiles with external, industry-specific data — improving scoring accuracy and eliminating hours of manual research per candidate.",
      },
      {
        step: "Seamless Recruiter Interface",
        detail:
          "Designed TrackRec's frontend with Next.js and React.js to deliver a fast, modern, and intuitive interface that integrates with existing recruiter workflows with minimal friction.",
      },
    ],
  },
  solution: {
    solutionImage: "/case studies/case 7.webp",
    features: [
      {
        title: "AI-Powered Sales Fit Score",
        description:
          "A machine learning model evaluates every candidate against 11 data-driven KPIs — from deal size history to industry tenure — generating an explainable score that predicts on-the-job performance.",
      },
      {
        title: "Customizable Scoring Framework",
        description:
          "Recruiters can adjust the weight of each KPI to match the specific requirements of a role or client, making the platform a flexible asset for any sales position across any industry.",
      },
      {
        title: "Automated Profile Enrichment",
        description:
          "Apollo.io integration automatically enriches candidate profiles with real-time, industry-specific data — eliminating manual research and ensuring the AI scores on the most current information available.",
      },
    ],
  },
  results: [
    { value: "25%", label: "Increase in First-Year Quota Attainment", context: "Accurate candidate-role matching directly improved new hire revenue performance" },
    { value: "50%", label: "Faster Time-to-Hire", context: "Streamlined recruitment process reduced hiring cycle by half" },
    { value: "~0", label: "Subjective Hiring Bias", context: "Data-driven Sales Fit Score focused purely on performance indicators" },
    { value: "∞", label: "Flexible for Any Sales Role", context: "Customizable scoring system adapts to any role as a core strategic asset" },
  ],
  techStack: [
    { name: "Python", icon: "Code" },
    { name: "FastAPI", icon: "Zap" },
    { name: "OpenAI", icon: "Cpu" },
    { name: "Celery", icon: "Server" },
    { name: "Next.js", icon: "Globe" },
    { name: "Apollo.io API", icon: "Search" },
    { name: "AWS", icon: "Cloud" },
    { name: "PostgreSQL", icon: "Database" },
  ],
  aiHighlight: {
    title: "11 KPIs. One Score. Zero Gut Feel.",
    description:
      "TrackRec's Sales Fit Score takes the subjectivity out of hiring entirely. Instead of relying on interview impressions, recruiters get a single, data-backed number that tells them exactly how well a candidate's track record maps to the performance profile of a top rep in that specific role — before a single conversation takes place.",
    beforeImage: "/case studies/case 7.webp",
    afterImage: "/case studies/case 7.webp",
    beforeLabel: "Before: Resume Screening",
    afterLabel: "After: Sales Fit Score",
  },
  testimonial: {
    quote:
      "TrackRec has fundamentally changed the way we operate. We are no longer just matching resumes to job descriptions, we are matching sales DNA to business needs. Our clients are seeing higher quota attainment from the candidates we place, and our own efficiency has skyrocketed. Evren AI understood our business problem perfectly.",
    name: "CEO",
    title: "Chief Executive Officer",
    company: "Premier Sales Recruitment Agency",
  },
};

// ═══════════════════════════════════════════════════════════════════════
//  WORK LISTING CARDS — ALL 7 (shown on /work page)
// ═══════════════════════════════════════════════════════════════════════

export const WORK_CASE_STUDIES: CaseStudyCard[] = [
  {
    metric: "90%",
    metricLabel: "Faster Report Analysis",
    client: "Revolutionizing Healthcare Access: An AI-Powered Virtual Consultation Platform",
    description:
      "Global telehealth innovator iSeedoc partnered with Evren AI to architect an end-to-end, HIPAA-compliant telehealth platform that automates workflows, streamlines consultations, and leverages AI to deliver intelligent, accessible, and secure healthcare.",
    tags: ["Healthcare"],
    image: "/case studies/case 1.webp",
    href: "/case-studies/iseedoc-telehealth",
  },
  {
    metric: "$7.5M+",
    metricLabel: "Annual Losses Prevented",
    client: "Mitigating Multi-Million Dollar Cyber Risk with Proactive AI Threat Detection",
    description:
      "For a high-growth FinTech, we deployed a real-time LLM-based detection engine that analyzes and neutralizes sophisticated phishing attacks before they breach enterprise security.",
    tags: ["Cybersecurity"],
    image: "/case studies/case 2.webp",
    href: "/case-studies/verifiedx-cybersecurity",
  },
  {
    metric: "40%",
    metricLabel: "Reduction in On-Site Incidents",
    client: "Slashing On-Site Incidents by 40% with AI-Powered Safety Monitoring",
    description:
      "Our edge-deployed computer vision system autonomously monitors for PPE compliance and structural hazards in real-time, providing instant alerts to prevent accidents and ensure OSHA compliance.",
    tags: ["Construction & Real Estate"],
    image: "/case studies/case 3.webp",
    href: "/case-studies/ai-construction-safety",
  },
  {
    metric: "< 90s",
    metricLabel: "Audio to Actionable Insight",
    client: "Delivering Actionable Market Alpha with Real-Time Earnings Call Intelligence",
    description:
      "We built a microservices-based platform that transcribes, summarizes, and analyzes earnings calls in real-time, giving financial advisors and investors an information edge.",
    tags: ["Finance & Investing"],
    image: "/case studies/case 4.webp",
    href: "/case-studies/marketpulse-financial-ai",
  },
  {
    metric: "15%",
    metricLabel: "Revenue Recovered",
    client: "Recovering Lost Revenue & Ensuring Billing Compliance for Law Firms",
    description:
      "We developed an AI-powered analyzer that automatically reviews and corrects timekeeper narratives, transforming vague entries into compliant, billable records that withstand client scrutiny.",
    tags: ["Legal Tech"],
    image: "/case studies/case 5.webp",
    href: "/case-studies/billclear-legal-tech",
  },
  {
    metric: "70%",
    metricLabel: "Fewer Repetitive Support Queries",
    client: "Empowering a Global Logistics Firm to Deploy Autonomous Support Agents",
    description:
      "We delivered a platform enabling our client to build and deploy their own RAG-powered chatbots for internal support, reducing IT help desk tickets and improving employee self-service.",
    tags: ["Autonomous Agents"],
    image: "/case studies/case 6.webp",
    href: "/case-studies/intellibots-ai-agent-platform",
  },
  {
    metric: "25%",
    metricLabel: "Higher First-Year Quota Attainment",
    client: "Improving Sales Team Performance by Hiring the Right Reps, Faster",
    description:
      "For a leading sales recruitment agency, we engineered an AI-powered platform that analyzes candidates against 11 KPIs to generate a Sales Fit Score, reducing bias and improving hiring accuracy.",
    tags: ["HR Tech / Sales Ops"],
    image: "/case studies/case 7.webp",
    href: "/case-studies/trackrec-sales-hiring",
  },
];

// ═══════════════════════════════════════════════════════════════════════
//  CASE STUDY ROUTING HELPERS
// ═══════════════════════════════════════════════════════════════════════

const CASE_STUDIES_MAP: Record<string, CaseStudy> = {
  "iseedoc-telehealth": ISEEDOC_DATA,
  "verifiedx-cybersecurity": VERIFIEDX_DATA,
  "ai-construction-safety": CONSTRUCTION_SAFETY_DATA,
  "marketpulse-financial-ai": MARKETPULSE_DATA,
  "billclear-legal-tech": BILLCLEAR_DATA,
  "intellibots-ai-agent-platform": INTELLIBOTS_DATA,
  "trackrec-sales-hiring": TRACKREC_DATA,
};

export function getAllSlugs(): string[] {
  return Object.keys(CASE_STUDIES_MAP);
}

export function getCaseStudyBySlug(slug: string): CaseStudy | undefined {
  return CASE_STUDIES_MAP[slug];
}
// ═══════════════════════════════════════════════════════════════════════
//  CENTRALIZED CASE STUDY DATA
//  All case studies share a single data contract. Dynamic routes
//  (/work/[slug]) pull from this file.
// ═══════════════════════════════════════════════════════════════════════

export type Industry =
  | "Healthcare"
  | "Fintech"
  | "E-Commerce"
  | "Logistics"
  | "Construction";

export interface TechStackItem {
  name: string;
  icon: string; // Lucide icon name (resolved in UI)
}

export interface CaseStudyMetric {
  value: string;
  label: string;
  context: string;
}

export interface CaseStudy {
  slug: string;
  client: string;
  industry: Industry;
  headline: string;
  subheadline: string;
  thumbnailImage: string;
  heroImage: string;
  hardMetric: string; // The metric shown on hover in gallery (e.g. "340h Saved Monthly")
  timeline: string;
  teamSize: string;

  // Section 1: The Challenge
  challenge: {
    title: string;
    description: string;
    painPoints: string[];
  };

  // Section 2: Our Approach
  approach: {
    title: string;
    description: string;
    steps: { step: string; detail: string }[];
  };

  // Section 3: The Solution
  solution: {
    description: string;
    features: { title: string; description: string }[];
    solutionImage: string;
  };

  // Section 4: The Results
  results: CaseStudyMetric[];

  // Section 5: Tech Stack
  techStack: TechStackItem[];

  // Section 6: AI Highlight
  aiHighlight: {
    title: string;
    description: string;
    beforeImage: string;
    afterImage: string;
    beforeLabel: string;
    afterLabel: string;
  };

  // Testimonial
  testimonial?: {
    quote: string;
    name: string;
    title: string;
    company: string;
  };
}

// ═══════════════════════════════════════════════════════════════════════
//  CASE STUDY ENTRIES
// ═══════════════════════════════════════════════════════════════════════

export const CASE_STUDIES: CaseStudy[] = [
  {
    slug: "mclean-reserve",
    client: "McLean Reserve",
    industry: "Healthcare",
    headline: "AI-Native Patient Intelligence Platform",
    subheadline:
      "Unified 15 fragmented legacy systems into a single intelligent command center with natural language querying.",
    thumbnailImage: "/transformation-healthcare.png",
    heroImage: "/Product 1.png",
    hardMetric: "340h Saved Monthly",
    timeline: "6 Months",
    teamSize: "8 Specialists",

    challenge: {
      title: "The Challenge",
      description:
        "McLean Reserve managed patient data across 15 disconnected legacy systems. Manual chart reviews consumed hundreds of hours weekly, delaying critical clinical decisions. Compliance audits required 6-week scrambles through fragmented records, and predictive capabilities for patient load were non-existent.",
      painPoints: [
        "Patient data scattered across 15+ legacy systems with no integration",
        "Manual chart reviews consuming 48+ hours per clinician weekly",
        "Compliance audit preparation taking 6 weeks of dedicated effort",
        "Zero predictive capabilities for patient intake forecasting",
      ],
    },

    approach: {
      title: "Our Approach",
      description:
        "We began with a 3-week data topology audit, mapping every data source, its schema, update frequency, and downstream dependencies. This gave us the blueprint to architect a unified data fabric without disrupting live clinical workflows.",
      steps: [
        {
          step: "Data Topology Mapping",
          detail:
            "Catalogued 15 legacy systems, 2,400+ data fields, and identified 340+ redundant data paths.",
        },
        {
          step: "Schema Normalization",
          detail:
            "Built a FHIR-compliant unified data model that preserved clinical semantics while eliminating redundancy.",
        },
        {
          step: "NLP Layer Engineering",
          detail:
            "Trained a custom LLM on anonymized medical terminology for natural language querying of complex records.",
        },
        {
          step: "Predictive Model Integration",
          detail:
            "Deployed time-series forecasting for patient intake, enabling proactive resource allocation.",
        },
      ],
    },

    solution: {
      description:
        "A HIPAA-compliant intelligence platform that aggregates data in real-time, enabling natural language querying of complex medical records via a high-performance web dashboard.",
      features: [
        {
          title: "Natural Language Querying",
          description:
            "Ask complex questions about patient history in plain English. Reduced chart review time by 40%.",
        },
        {
          title: "Real-time Intake Forecasting",
          description:
            "Live predictions of ER capacity and staffing needs. Optimized resource allocation during peak hours.",
        },
        {
          title: "Automated Compliance Engine",
          description:
            "System automatically flags potential reporting omissions. Achieved 100% audit readiness.",
        },
      ],
      solutionImage: "/Product 1.png",
    },

    results: [
      {
        value: "340h",
        label: "Hours Saved Monthly",
        context: "on chart reviews & data reconciliation",
      },
      {
        value: "40%",
        label: "Time Reduction",
        context: "in clinical decision delays",
      },
      {
        value: "100%",
        label: "Audit Readiness",
        context: "achieved within 3 months of launch",
      },
      {
        value: "15→1",
        label: "System Consolidation",
        context: "legacy systems unified into one",
      },
    ],

    techStack: [
      { name: "Next.js", icon: "Globe" },
      { name: "LangChain", icon: "Link" },
      { name: "Pinecone", icon: "Database" },
      { name: "AWS", icon: "Cloud" },
      { name: "Python", icon: "Code" },
      { name: "FastAPI", icon: "Zap" },
      { name: "PostgreSQL", icon: "Server" },
      { name: "OpenAI", icon: "Cpu" },
    ],

    aiHighlight: {
      title: "The AI-Native Difference",
      description:
        "Before Evren, clinicians spent 45 minutes per patient manually cross-referencing 3-4 systems to build a complete picture. Our NLP-powered query engine replaced that entire manual bottleneck—clinicians now ask questions in plain English and get instant, source-cited answers from all 15 systems simultaneously.",
      beforeImage: "/images/before-ui.png",
      afterImage: "/images/after-ui.png",
      beforeLabel: "Before: Fragmented Legacy Systems",
      afterLabel: "After: Evren Intelligence Platform",
    },

    testimonial: {
      quote:
        "Evren AI didn't just rebuild our software; they re-engineered how our hospital operates. The predictive capabilities have fundamentally changed how we allocate our nursing staff during critical periods.",
      name: "Dr. Sarah Jenkins",
      title: "Chief Medical Information Officer",
      company: "McLean Reserve",
    },
  },

  {
    slug: "stratton-financial",
    client: "Stratton Financial",
    industry: "Fintech",
    headline: "Predictive Compliance Intelligence Engine",
    subheadline:
      "Architected a real-time compliance engine that automates regulatory reporting and flags discrepancies before they surface.",
    thumbnailImage: "/transformation-legal.png",
    heroImage: "/Product.png",
    hardMetric: "100% Audit Readiness",
    timeline: "4 Months",
    teamSize: "6 Specialists",

    challenge: {
      title: "The Challenge",
      description:
        "Stratton Financial processed 12,000+ transactions daily across multiple regulatory jurisdictions. Compliance officers spent 60% of their time manually auditing transactions, with a 72-hour lag between transaction and review. Regulatory penalties were averaging $2.4M annually due to delayed flagging.",
      painPoints: [
        "72-hour lag between transaction execution and compliance review",
        "$2.4M in annual regulatory penalties from delayed flagging",
        "Compliance team spending 60% of time on manual audit processes",
        "No real-time visibility into cross-jurisdictional regulatory exposure",
      ],
    },

    approach: {
      title: "Our Approach",
      description:
        "We conducted a 2-week regulatory audit across all jurisdictions, mapped every compliance touchpoint, and designed an event-driven architecture that processes transactions against regulatory rules in real-time.",
      steps: [
        {
          step: "Regulatory Mapping",
          detail:
            "Documented 200+ regulatory rules across 4 jurisdictions and encoded them as executable policies.",
        },
        {
          step: "Event-Driven Architecture",
          detail:
            "Built a streaming pipeline that evaluates every transaction against compliance rules in under 100ms.",
        },
        {
          step: "Anomaly Detection AI",
          detail:
            "Trained pattern recognition models on 3 years of historical transaction data to flag suspicious patterns.",
        },
        {
          step: "Automated Reporting",
          detail:
            "Engineered auto-generated compliance reports that satisfy regulatory requirements without manual intervention.",
        },
      ],
    },

    solution: {
      description:
        "A real-time compliance intelligence engine that monitors every transaction, automatically flags potential violations, and generates regulatory reports—reducing the 72-hour review lag to under 100ms.",
      features: [
        {
          title: "Real-time Transaction Monitoring",
          description:
            "Every transaction evaluated against 200+ regulatory rules in under 100ms.",
        },
        {
          title: "Predictive Anomaly Detection",
          description:
            "ML models trained on historical data to identify suspicious patterns before they escalate.",
        },
        {
          title: "Auto-Generated Reports",
          description:
            "Compliance reports generated automatically, satisfying multi-jurisdictional requirements.",
        },
      ],
      solutionImage: "/Product.png",
    },

    results: [
      {
        value: "100%",
        label: "Audit Readiness",
        context: "achieved from day one of deployment",
      },
      {
        value: "$2.4M",
        label: "Penalties Eliminated",
        context: "annual regulatory fines reduced to zero",
      },
      {
        value: "<100ms",
        label: "Review Latency",
        context: "down from 72-hour manual review lag",
      },
      {
        value: "60%",
        label: "Team Capacity Freed",
        context: "compliance staff redirected to strategic work",
      },
    ],

    techStack: [
      { name: "React", icon: "Globe" },
      { name: "Python", icon: "Code" },
      { name: "Apache Kafka", icon: "Zap" },
      { name: "TensorFlow", icon: "Cpu" },
      { name: "PostgreSQL", icon: "Server" },
      { name: "Redis", icon: "Database" },
      { name: "Docker", icon: "Box" },
      { name: "AWS", icon: "Cloud" },
    ],

    aiHighlight: {
      title: "The AI-Native Difference",
      description:
        "Before Evren, compliance officers manually reviewed transaction batches 72 hours after execution—meaning violations were only caught after the damage. Our AI engine evaluates every single transaction in real-time, catching anomalies within 100ms and auto-escalating before regulatory thresholds are breached.",
      beforeImage: "/images/before-ui.png",
      afterImage: "/images/after-ui.png",
      beforeLabel: "Before: 72-Hour Manual Review Lag",
      afterLabel: "After: Real-time Compliance Engine",
    },

    testimonial: {
      quote:
        "We went from dreading every audit season to having real-time confidence in our compliance posture. The AI flagging has caught patterns our team would have missed entirely.",
      name: "Michael Torres",
      title: "VP of Regulatory Compliance",
      company: "Stratton Financial",
    },
  },

  {
    slug: "apex-construction",
    client: "Apex Construction",
    industry: "Construction",
    headline: "AI-Native Safety Portal",
    subheadline:
      "Computer-vision powered safety portal that achieved a 40% reduction in on-site incidents across 24 active job sites.",
    thumbnailImage: "/case-study-hero-mockup.png",
    heroImage: "/case-study-hero-mockup.png",
    hardMetric: "40% Incident Reduction",
    timeline: "5 Months",
    teamSize: "7 Specialists",

    challenge: {
      title: "The Challenge",
      description:
        "Apex Construction managed 24 active job sites across three states with zero centralized safety oversight. Incident reports lived inside paper binders, Excel sheets, and scattered email threads — creating a data chaos problem that turned every compliance audit into a 6-week scramble.",
      painPoints: [
        "24 active job sites with zero centralized safety oversight",
        "Incident reports in paper binders, Excel, and email threads",
        "Field supervisors logging incidents hours or days after occurrence",
        "Emerging risk patterns invisible until after escalation",
      ],
    },

    approach: {
      title: "Our Approach",
      description:
        "We deployed IoT sensors and established a real-time data pipeline from field to headquarters, normalizing multi-source safety data instantly.",
      steps: [
        {
          step: "Field Data Infrastructure",
          detail:
            "Deployed IoT-connected reporting terminals across all 24 job sites.",
        },
        {
          step: "Real-time Normalization",
          detail:
            "Built data pipelines that standardize incident reports from any source within seconds.",
        },
        {
          step: "Computer Vision Integration",
          detail:
            "Implemented camera-based hazard detection at high-risk zones for automated alerting.",
        },
        {
          step: "Predictive Risk Modeling",
          detail:
            "Trained models on historical incident data to predict and prevent future safety events.",
        },
      ],
    },

    solution: {
      description:
        "A centralized safety intelligence portal with real-time monitoring, predictive risk scoring, and automated compliance reporting across all 24 job sites.",
      features: [
        {
          title: "Centralized Safety Dashboard",
          description:
            "Single pane of glass for all site safety data, risk scores, and incident tracking.",
        },
        {
          title: "Predictive Risk Alerts",
          description:
            "AI-powered risk scoring that flags potential hazards before incidents occur.",
        },
        {
          title: "Automated OSHA Reporting",
          description:
            "Compliance reports generated automatically from standardized incident data.",
        },
      ],
      solutionImage: "/case-study-macro-dashboard.png",
    },

    results: [
      {
        value: "40%",
        label: "Incident Reduction",
        context: "across all 24 managed job sites",
      },
      {
        value: "24",
        label: "Sites Unified",
        context: "into a single safety command center",
      },
      {
        value: "6wk→2d",
        label: "Audit Prep Time",
        context: "reduced from 6 weeks to 2 days",
      },
      {
        value: "94%",
        label: "Prediction Accuracy",
        context: "on high-risk zone identification",
      },
    ],

    techStack: [
      { name: "Next.js", icon: "Globe" },
      { name: "Python", icon: "Code" },
      { name: "FastAPI", icon: "Zap" },
      { name: "TensorFlow", icon: "Cpu" },
      { name: "AWS", icon: "Cloud" },
      { name: "PostgreSQL", icon: "Server" },
      { name: "Redis", icon: "Database" },
      { name: "Docker", icon: "Box" },
    ],

    aiHighlight: {
      title: "The AI-Native Difference",
      description:
        "Before Evren, field supervisors logged incidents hours or days after occurrence in paper forms. Our computer-vision system detects hazards in real-time, auto-generates normalized incident reports, and routes predictive alerts to supervisors before incidents materialize—replacing the entire manual safety bottleneck.",
      beforeImage: "/images/before-ui.png",
      afterImage: "/images/after-ui.png",
      beforeLabel: "Before: Paper-Based Incident Reports",
      afterLabel: "After: Real-time Safety Intelligence",
    },

    testimonial: {
      quote:
        "The predictive alerting has been transformational. We're catching hazards before they become incidents. Our insurance premiums dropped 18% within the first year.",
      name: "David Chen",
      title: "VP of Safety Operations",
      company: "Apex Construction",
    },
  },

  {
    slug: "vanguard-logistics",
    client: "Vanguard Logistics",
    industry: "Logistics",
    headline: "Autonomous Supply Chain Orchestrator",
    subheadline:
      "AI-driven route optimization and demand forecasting platform that reduced delivery SLAs by 28% across 3 distribution hubs.",
    thumbnailImage: "/transformation-supply-chain.png",
    heroImage: "/Product.png",
    hardMetric: "28% Faster SLAs",
    timeline: "5 Months",
    teamSize: "6 Specialists",

    challenge: {
      title: "The Challenge",
      description:
        "Vanguard Logistics operated 3 distribution hubs handling 8,000+ shipments daily. Route planning was done manually by dispatchers using static spreadsheets, leading to suboptimal routing, missed SLAs, and $1.8M in annual fuel waste. Demand forecasting was non-existent.",
      painPoints: [
        "Manual route planning via spreadsheets for 8,000+ daily shipments",
        "$1.8M annual fuel waste from suboptimal routing",
        "22% of deliveries missing SLA targets consistently",
        "No demand forecasting capability for inventory positioning",
      ],
    },

    approach: {
      title: "Our Approach",
      description:
        "We analyzed 18 months of delivery data to identify routing inefficiencies and demand patterns, then engineered an autonomous orchestration layer that optimizes in real-time.",
      steps: [
        {
          step: "Historical Analysis",
          detail:
            "Processed 18 months of delivery data (2.4M records) to map inefficiency patterns.",
        },
        {
          step: "Dynamic Routing Engine",
          detail:
            "Built a graph-based optimization algorithm that recalculates routes every 15 minutes.",
        },
        {
          step: "Demand Forecasting",
          detail:
            "Trained LSTM models on seasonal, promotional, and weather data for inventory pre-positioning.",
        },
        {
          step: "Dispatcher Dashboard",
          detail:
            "Designed an intuitive control center with real-time fleet visualization and override capabilities.",
        },
      ],
    },

    solution: {
      description:
        "An autonomous supply chain orchestration platform that dynamically optimizes routes, forecasts demand, and provides real-time fleet visibility across all 3 distribution hubs.",
      features: [
        {
          title: "Dynamic Route Optimization",
          description:
            "Graph-based algorithm recalculates optimal routes every 15 minutes for all active drivers.",
        },
        {
          title: "Demand Forecasting Engine",
          description:
            "LSTM-powered predictions for inventory positioning based on multi-signal analysis.",
        },
        {
          title: "Real-time Fleet Command",
          description:
            "Live fleet visualization with automated dispatch recommendations and manual override.",
        },
      ],
      solutionImage: "/Product.png",
    },

    results: [
      {
        value: "28%",
        label: "SLA Improvement",
        context: "delivery targets now consistently met",
      },
      {
        value: "$1.8M",
        label: "Fuel Savings",
        context: "annual routing optimization savings",
      },
      {
        value: "3",
        label: "Hubs Unified",
        context: "into single orchestration platform",
      },
      {
        value: "15min",
        label: "Route Refresh",
        context: "from static daily plans to dynamic updates",
      },
    ],

    techStack: [
      { name: "React", icon: "Globe" },
      { name: "Node.js", icon: "Server" },
      { name: "Python", icon: "Code" },
      { name: "TensorFlow", icon: "Cpu" },
      { name: "Redis", icon: "Database" },
      { name: "GraphQL", icon: "Link" },
      { name: "Docker", icon: "Box" },
      { name: "GCP", icon: "Cloud" },
    ],

    aiHighlight: {
      title: "The AI-Native Difference",
      description:
        "Before Evren, dispatchers manually planned routes each morning using static spreadsheets—a 3-hour process that couldn't adapt to real-time changes. Our AI orchestrator continuously recalculates optimal routes every 15 minutes, factoring in traffic, weather, and demand signals—eliminating the manual bottleneck entirely.",
      beforeImage: "/images/before-ui.png",
      afterImage: "/images/after-ui.png",
      beforeLabel: "Before: Static Spreadsheet Routing",
      afterLabel: "After: Dynamic AI Orchestration",
    },

    testimonial: {
      quote:
        "Our dispatchers went from spending 3 hours planning routes to overseeing an AI that does it in seconds. The fuel savings alone paid for the project in 4 months.",
      name: "Rachel Kim",
      title: "Director of Operations",
      company: "Vanguard Logistics",
    },
  },

  {
    slug: "nova-commerce",
    client: "Nova Commerce",
    industry: "E-Commerce",
    headline: "Hyper-Personalization Revenue Engine",
    subheadline:
      "AI-powered product recommendation and dynamic pricing platform that lifted conversion rates by 34% and average order value by 22%.",
    thumbnailImage: "/hero-dashboard.png",
    heroImage: "/hero-dashboard.png",
    hardMetric: "34% Conversion Lift",
    timeline: "4 Months",
    teamSize: "5 Specialists",

    challenge: {
      title: "The Challenge",
      description:
        "Nova Commerce served 2M+ monthly active users but suffered from generic product recommendations and static pricing. Cart abandonment was at 74%, and the marketing team had no visibility into real-time customer intent signals. Revenue per session had stagnated for 3 consecutive quarters.",
      painPoints: [
        "74% cart abandonment rate with generic recommendation engine",
        "Static pricing unable to respond to demand signals",
        "Marketing team blind to real-time customer intent",
        "Revenue per session stagnant for 3 consecutive quarters",
      ],
    },

    approach: {
      title: "Our Approach",
      description:
        "We instrumented every user touchpoint to build real-time behavioral profiles, then engineered a recommender system and dynamic pricing engine that responds to individual user intent.",
      steps: [
        {
          step: "Behavioral Instrumentation",
          detail:
            "Deployed event tracking across 400+ user touchpoints for real-time intent profiling.",
        },
        {
          step: "Recommendation Engine",
          detail:
            "Built collaborative filtering + content-based hybrid model trained on 18M historical interactions.",
        },
        {
          step: "Dynamic Pricing",
          detail:
            "Engineered price optimization that adjusts in real-time based on demand, inventory, and user segment.",
        },
        {
          step: "A/B Testing Framework",
          detail:
            "Built automated experimentation pipeline to continuously optimize algorithms.",
        },
      ],
    },

    solution: {
      description:
        "A hyper-personalization engine that combines real-time behavioral profiling with AI-powered recommendations and dynamic pricing to maximize revenue per session.",
      features: [
        {
          title: "Real-time Personalization",
          description:
            "Individual product recommendations based on live behavioral signals, not just historical data.",
        },
        {
          title: "Dynamic Pricing Engine",
          description:
            "Automated price optimization that responds to demand, inventory, and competitive signals.",
        },
        {
          title: "Intent Analytics Dashboard",
          description:
            "Real-time visibility into customer journey stages, enabling targeted marketing interventions.",
        },
      ],
      solutionImage: "/hero-dashboard.png",
    },

    results: [
      {
        value: "34%",
        label: "Conversion Lift",
        context: "across all product categories",
      },
      {
        value: "22%",
        label: "AOV Increase",
        context: "average order value through personalization",
      },
      {
        value: "74→52%",
        label: "Cart Abandonment",
        context: "reduced through intent-driven interventions",
      },
      {
        value: "3.2x",
        label: "Revenue per Session",
        context: "increase within first quarter",
      },
    ],

    techStack: [
      { name: "Next.js", icon: "Globe" },
      { name: "Python", icon: "Code" },
      { name: "TensorFlow", icon: "Cpu" },
      { name: "Redis", icon: "Database" },
      { name: "Elasticsearch", icon: "Search" },
      { name: "Kafka", icon: "Zap" },
      { name: "AWS", icon: "Cloud" },
      { name: "Docker", icon: "Box" },
    ],

    aiHighlight: {
      title: "The AI-Native Difference",
      description:
        "Before Evren, Nova's recommendation engine used simple 'customers also bought' rules—one-size-fits-all. Our AI processes 400+ real-time behavioral signals per user to build individual intent profiles, serving hyper-relevant recommendations within 50ms. The dynamic pricing layer then optimizes conversion probability per user segment—something no manual team could replicate at scale.",
      beforeImage: "/images/before-ui.png",
      afterImage: "/images/after-ui.png",
      beforeLabel: "Before: Generic Rule-Based Recommendations",
      afterLabel: "After: AI Hyper-Personalization Engine",
    },

    testimonial: {
      quote:
        "The personalization engine feels like having a dedicated shopping assistant for every single user. Our conversion numbers speak for themselves.",
      name: "Priya Sharma",
      title: "Chief Product Officer",
      company: "Nova Commerce",
    },
  },
];

// ═══════════════════════════════════════════════════════════════════════
//  HELPER FUNCTIONS
// ═══════════════════════════════════════════════════════════════════════

export function getCaseStudyBySlug(slug: string): CaseStudy | undefined {
  return CASE_STUDIES.find((cs) => cs.slug === slug);
}

export function getAllSlugs(): string[] {
  return CASE_STUDIES.map((cs) => cs.slug);
}

export function getIndustries(): Industry[] {
  return [...new Set(CASE_STUDIES.map((cs) => cs.industry))];
}

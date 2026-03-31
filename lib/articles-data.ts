// ═══════════════════════════════════════════════════════════════════════
//  CENTRALIZED ARTICLE DATA — Thinking Page
//  Structured as a static content layer. In production, swap with a
//  headless CMS fetch (Sanity, Contentful, etc.) via the same interface.
// ═══════════════════════════════════════════════════════════════════════

export type ArticleCategory =
  | "All"
  | "AI & Machine Learning"
  | "Product Development"
  | "Engineering";

export interface Article {
  slug: string;
  title: string;
  excerpt: string;
  category: Exclude<ArticleCategory, "All">;
  author: {
    name: string;
    role: string;
  };
  publishedAt: string; // ISO date string
  readTime: string;
  // Full article body — markdown-ish paragraphs
  body: string[];
}

// ═══════════════════════════════════════════════════════════════════════
//  ARTICLE ENTRIES
// ═══════════════════════════════════════════════════════════════════════

export const ARTICLES: Article[] = [
  {
    slug: "why-most-enterprise-ai-pilots-fail",
    title: "Why Most Enterprise AI Pilots Fail — And How to Fix the Feedback Loop",
    excerpt:
      "The failure rate of enterprise AI pilots hovers around 87%. The root cause isn't the model — it's the absence of a closed-loop feedback architecture between the data layer and business outcomes.",
    category: "AI & Machine Learning",
    author: { name: "Arshan Malik", role: "Chief AI Architect" },
    publishedAt: "2026-03-08",
    readTime: "9 min read",
    body: [
      "Enterprise AI has a dirty secret: the vast majority of pilots never make it to production. Gartner estimates that 87% of data science projects fail to reach deployment. The conventional wisdom blames 'bad data' or 'organizational resistance,' but these are symptoms, not root causes.",
      "The real failure point is architectural. Most enterprise AI initiatives are designed as open-loop systems — models are trained, deployed, and measured, but the feedback signal from business outcomes never flows back to inform the next training cycle. Without this closed loop, models degrade silently, and the business case evaporates before stakeholders even notice.",
      "At Evren AI, we engineer every engagement around what we call the 'Closed-Loop Intelligence Architecture.' Before a single line of model code is written, we define three things: the business metric the model must move, the data pipeline that captures outcome signals, and the retraining trigger that closes the loop.",
      "This isn't theoretical. For McLean Reserve, we built a patient intelligence platform that doesn't just surface insights — it measures whether those insights changed clinical decisions, and feeds that signal back into the recommendation engine. The result: 340 hours saved monthly, with model accuracy improving over time instead of degrading.",
      "The lesson for CTOs is clear: don't start with the model. Start with the feedback loop. Define how you'll know the AI is working, and architect the system to capture that signal from day one. Everything else follows from there.",
      "Here's a practical framework for engineering your own closed-loop architecture: First, instrument your outcome layer. Every AI system should have explicit outcome tracking — not vanity metrics like 'model accuracy,' but business-level signals like 'time to clinical decision' or 'compliance flag resolution time.' Second, build the feedback pipeline. The outcome signal must flow back to the data layer automatically. Manual quarterly reviews don't count. Third, define retraining triggers. When the outcome signal degrades past a threshold, the system should automatically queue a retraining cycle with the new data. This is the difference between an AI project and an AI product.",
    ],
  },
  {
    slug: "the-data-topology-audit",
    title: "The Data Topology Audit: Our First 3 Weeks on Every Engagement",
    excerpt:
      "Before we write a single line of model code, we spend three weeks mapping every data source, schema, and downstream dependency. Here's why this investment pays for itself 10x.",
    category: "Engineering",
    author: { name: "Sara Iqbal", role: "Lead Data Engineer" },
    publishedAt: "2026-03-01",
    readTime: "7 min read",
    body: [
      "Every Evren AI engagement begins the same way: three weeks of discovery before a single model is trained or a single pipeline is built. We call it the Data Topology Audit, and it's the highest-leverage investment we make on behalf of our clients.",
      "A data topology audit is not a data audit. We're not checking for missing values or schema violations — that comes later. We're mapping the entire topology of how data moves through the organization: every source system, every transformation, every downstream consumer, every manual process that touches the data, and every decision that depends on it.",
      "The output is a living document we call the 'Data Topology Map' — a graph of every node (system, database, API, spreadsheet, email inbox) and every edge (data flow, manual export, cron job, human decision). When we mapped McLean Reserve's topology, we discovered 340 redundant data paths across 15 legacy systems. That single insight saved 6 weeks of engineering time.",
      "Why three weeks? Because the first week reveals the systems everyone knows about. The second week reveals the shadow IT — the spreadsheets, the manual exports, the 'temporary' scripts that have been running for years. The third week is for validation: we confirm every path we've mapped with the humans who actually use the data.",
      "The ROI is straightforward. Without a topology audit, teams spend 40-60% of their engineering effort on 'data wrangling' — fixing issues that could have been anticipated. With a topology audit, we reduce that to under 15%, and we catch integration failures before they become project delays.",
      "For engineering leaders considering an AI initiative: demand a topology audit before any vendor starts building. If your AI partner can't articulate how they'll map your data landscape before writing code, they're optimizing for speed over success.",
    ],
  },
  {
    slug: "event-driven-compliance-architecture",
    title: "Event-Driven Compliance: Why Batch Processing Is a Liability",
    excerpt:
      "If your compliance system reviews transactions in batches, you're operating with a 24-72 hour blind spot. Here's how event-driven architecture eliminates regulatory lag.",
    category: "Engineering",
    author: { name: "Arshan Malik", role: "Chief AI Architect" },
    publishedAt: "2026-02-22",
    readTime: "8 min read",
    body: [
      "Batch processing was the standard for compliance for a reason: when transaction volumes were manageable and regulatory penalties were predictable, a nightly batch review was sufficient. That era is over.",
      "Modern regulatory environments — SOX, AML, GDPR, and sector-specific frameworks — demand real-time or near-real-time visibility. A 72-hour lag between transaction and review isn't just operationally slow; it's a regulatory liability that compounds with every batch cycle.",
      "At Stratton Financial, we replaced a batch-based compliance system with an event-driven architecture built on Apache Kafka. Every transaction is evaluated against 200+ regulatory rules within 100ms of execution. The result: $2.4M in annual regulatory penalties eliminated, and compliance officers freed from 60% of their manual audit workload.",
      "The architecture is straightforward in principle: every transaction emits an event. A streaming processor evaluates that event against a rules engine in real-time. Flagged events are routed to human reviewers with full context. Unflagged events are logged with an audit trail. The rules engine is version-controlled and testable, so regulatory updates can be deployed the same way you deploy code.",
      "The harder question is organizational: event-driven compliance requires compliance teams to think like engineers, and engineering teams to understand regulatory logic. The teams that succeed are the ones that break down this silo early.",
      "For CTOs evaluating their compliance architecture: if you're still running batch processes, calculate your exposure window. Multiply average daily transaction volume by average batch delay. That's your regulatory blind spot. If the number makes you uncomfortable, event-driven architecture isn't optional — it's urgent.",
    ],
  },
  {
    slug: "building-ai-products-not-projects",
    title: "Building AI Products, Not AI Projects",
    excerpt:
      "The difference between an AI project and an AI product is operationalization. A project ends at the demo. A product owns its own feedback loop, monitoring, and retraining.",
    category: "Product Development",
    author: { name: "Hana Chen", role: "VP of Product" },
    publishedAt: "2026-02-15",
    readTime: "6 min read",
    body: [
      "There's a pattern we see in nearly every enterprise AI initiative we evaluate: the team builds a model, the model performs well in testing, the stakeholders are excited, and then... nothing. The model sits in a notebook. The demo deck gets filed. The 'AI initiative' quietly moves to the next quarter's roadmap.",
      "This is what happens when you build AI projects instead of AI products. A project has a start date and an end date. A product has a lifecycle. The distinction isn't semantic — it's architectural.",
      "An AI product has four properties that an AI project lacks: First, it owns its own data pipeline. It doesn't depend on a data engineering team to manually prepare inputs. Second, it monitors its own performance. It tracks business-level outcomes, not just model metrics. Third, it has a retraining mechanism. When performance degrades, it can trigger retraining without human intervention. Fourth, it has an interface. Someone — a clinician, a dispatcher, a compliance officer — interacts with it daily and provides implicit feedback.",
      "At Evren AI, every engagement is structured to produce a product, not a project. Our deliverable isn't a model — it's a system that includes the model, its data pipeline, its monitoring dashboard, and its retraining infrastructure. When we built Vanguard Logistics' route optimization engine, we didn't hand them a trained model. We handed them a system that recalculates routes every 15 minutes, monitors SLA compliance in real-time, and retrains weekly on new delivery data.",
      "The shift from project to product thinking requires two things: organizational commitment to ongoing investment (products need maintenance budgets, not just launch budgets), and engineering discipline to build the operational infrastructure alongside the model. Most AI initiatives fail because they invest 90% in the model and 10% in operations. Invert that ratio.",
      "For product leaders: if your AI initiative doesn't have a monitoring dashboard, a retraining pipeline, and a user interface, it's a project. Projects end. Products earn revenue.",
    ],
  },
  {
    slug: "the-topology-of-product-intelligence",
    title: "The Topology of Product Intelligence: Where AI Meets UX Research",
    excerpt:
      "The best AI features aren't the ones with the highest accuracy — they're the ones embedded at the exact moment a user needs a decision made. Here's our framework for mapping AI to user intent.",
    category: "Product Development",
    author: { name: "Hana Chen", role: "VP of Product" },
    publishedAt: "2026-02-08",
    readTime: "10 min read",
    body: [
      "There's a persistent myth in AI product development: build the most accurate model, and users will come. This is engineering-first thinking, and it produces technically impressive features that nobody uses.",
      "Product intelligence — the integration of AI into product experiences — requires a different starting point. Instead of asking 'what can the model do?', we ask 'where does the user need a decision made?' This reframes AI from a capability to a service: the model exists to reduce cognitive load at specific moments in the user journey.",
      "We call this the 'Decision Topology' — a map of every moment in the product experience where a user must process information, evaluate options, and choose an action. Each of these moments is an opportunity for AI to add value, but only if the intervention is contextual, timely, and trustworthy.",
      "Take our work with Nova Commerce. The recommendation engine doesn't just surface products with high purchase probability — it surfaces them at the exact moment in the browsing journey where the user's intent signal peaks. We instrumented 400+ user touchpoints to detect these moments, and the result was a 34% conversion lift. The model accuracy was standard; the placement was exceptional.",
      "Here's the framework we use: First, map the user's decision topology. Identify every fork in the journey where a user must choose. Second, measure the cognitive cost of each decision. High-cost decisions are where AI adds the most value. Third, design the intervention. The AI's output should reduce the number of options, not add to them. Fourth, measure trust. If users override the AI's suggestion more than 30% of the time, the intervention is failing — either the model is wrong, or the presentation is wrong.",
      "For product leaders: stop leading with model accuracy in your AI roadmaps. Lead with user decision moments. The best AI feature is the one the user never notices because it made their decision feel effortless.",
    ],
  },
  {
    slug: "computer-vision-safety-systems",
    title: "Deploying Computer Vision in Safety-Critical Environments",
    excerpt:
      "Moving computer vision from lab accuracy to field reliability requires a fundamentally different engineering approach. Lessons from 24 active construction sites.",
    category: "AI & Machine Learning",
    author: { name: "Sara Iqbal", role: "Lead Data Engineer" },
    publishedAt: "2026-01-30",
    readTime: "11 min read",
    body: [
      "Lab accuracy is the most dangerous metric in computer vision. A model that achieves 98% accuracy on a curated test set can drop to 70% in the field — and in safety-critical environments, that 28% gap can cost lives.",
      "When Evren AI deployed computer vision systems across Apex Construction's 24 active job sites, we encountered every failure mode that doesn't show up in the research literature: cameras obscured by dust, lighting conditions that change hourly, workers wearing equipment that occludes key features, and environmental noise that creates false positives at a rate no lab test would predict.",
      "Our approach was to invert the traditional CV pipeline. Instead of training a model and then deploying it, we deployed cameras first — with no model — and spent 4 weeks collecting raw field data. This gave us a training set that represented the actual operating conditions, not idealized lab conditions. The result: our field accuracy matched our lab accuracy within 2%, because they were trained on the same data distribution.",
      "Three engineering principles emerged from this work. First, your training data must come from your deployment environment, not from public datasets. Second, your model must degrade gracefully. In safety-critical systems, a confident wrong prediction is worse than an uncertain one. We engineered our system to flag low-confidence detections for human review rather than making autonomous decisions. Third, your retraining pipeline must be site-specific. Environmental conditions vary dramatically between sites, and a model that works at Site A may fail at Site B.",
      "The business outcome: 40% reduction in on-site incidents across all 24 sites. But the engineering discipline that produced that result was not about building a better model — it was about building a better data pipeline and a better feedback loop.",
      "For engineering leaders deploying CV in high-stakes environments: your model is the least interesting part of the system. The data collection strategy, the confidence calibration, and the human-in-the-loop protocol are what separate lab demos from production systems.",
    ],
  },
  {
    slug: "dynamic-pricing-ethical-ai",
    title: "The Ethics of Dynamic Pricing: Building Fair AI Systems",
    excerpt:
      "Dynamic pricing powered by AI raises important ethical questions. Our framework ensures algorithmic pricing decisions are transparent, fair, and auditable.",
    category: "AI & Machine Learning",
    author: { name: "Arshan Malik", role: "Chief AI Architect" },
    publishedAt: "2026-01-22",
    readTime: "8 min read",
    body: [
      "Dynamic pricing is one of the most commercially powerful applications of AI — and one of the most ethically complex. When an algorithm adjusts prices based on user behavior, demand signals, and competitive data, the line between 'personalization' and 'exploitation' depends entirely on the guardrails the engineering team builds.",
      "At Evren AI, we've developed a framework for ethical dynamic pricing that we apply to every commerce engagement. It rests on three principles: transparency, fairness, and auditability.",
      "Transparency means the user understands why the price is what it is. This doesn't require exposing the algorithm — it requires exposing the rationale. 'Price adjusted for high demand' is transparent. A silent price change is not. We engineer pricing UIs that communicate the pricing context without revealing proprietary logic.",
      "Fairness means the algorithm doesn't systematically disadvantage protected groups. This requires proactive testing, not just reactive monitoring. Before deploying Nova Commerce's pricing engine, we ran adversarial audits across demographic segments to ensure no group was systematically quoted higher prices for the same product. We found and corrected two bias vectors before launch.",
      "Auditability means every pricing decision can be reconstructed after the fact. This is both an ethical requirement and a regulatory one. Our pricing systems log every input signal, every model inference, and every output decision in an append-only audit trail. When a customer disputes a price, we can trace exactly why that price was generated.",
      "The commercial outcome of ethical AI isn't just 'doing the right thing' — it's building systems that withstand regulatory scrutiny, earn user trust, and avoid the reputational catastrophes that have sunk other dynamic-pricing implementations. Ethics isn't a constraint on innovation; it's a competitive advantage.",
    ],
  },
  {
    slug: "from-monolith-to-microservices-ai",
    title: "From Monolith to Microservices: Refactoring for AI Readiness",
    excerpt:
      "Most enterprise architectures weren't built for AI. Here's our tactical playbook for refactoring legacy monoliths into AI-ready microservice architectures without stopping the business.",
    category: "Engineering",
    author: { name: "Sara Iqbal", role: "Lead Data Engineer" },
    publishedAt: "2026-01-15",
    readTime: "12 min read",
    body: [
      "The biggest technical barrier to enterprise AI adoption isn't the model, the data, or the talent — it's the architecture. Most enterprise systems are monoliths that were designed for transactional workloads, not for the real-time data flows that AI requires.",
      "Refactoring a monolith for AI readiness is a multi-quarter commitment, but it doesn't have to be a multi-quarter blocker. At Evren AI, we've developed a 'Strangler Pattern for AI' — a systematic approach to extracting the data-intensive components of a monolith into AI-ready microservices without disrupting the existing system.",
      "The pattern works in four phases. Phase 1: Identify the 'Data Seams.' These are the boundaries in your monolith where data flows can be intercepted without changing the existing logic. At McLean Reserve, we identified 15 data seams across their monolithic patient management system. Phase 2: Deploy Event Bridges. At each seam, we deploy a lightweight event emitter that captures data changes and publishes them to a streaming platform (Kafka or equivalent). The monolith continues to function exactly as before — we're just 'listening' at the seams.",
      "Phase 3: Build AI microservices. Each AI capability (recommendation engine, anomaly detector, forecasting model) is built as an independent service that consumes events from the bridges. These services are deployed, tested, and scaled independently. Phase 4: Gradual cutover. As AI services prove their value, the monolith's corresponding logic is gradually deprecated. The key insight is that Phase 2-4 happen concurrently — you're adding AI capabilities while the monolith is still running.",
      "The anti-pattern we see most often is 'Big Bang Refactor' — a team tries to redesign the entire architecture before building any AI capabilities. This approach fails because it couples the risk of architectural change with the risk of AI adoption. Our approach decouples them: the monolith keeps running, the AI services prove their value independently, and the architectural migration happens organically over time.",
      "For CTOs with legacy architectures: you don't need to 'modernize first, then do AI.' You need to find the data seams, deploy event bridges, and start building AI capabilities alongside your existing system. The architecture will modernize as a byproduct of the AI adoption, not as a prerequisite.",
    ],
  },
  {
    slug: "measuring-ai-roi-beyond-accuracy",
    title: "Measuring AI ROI: Beyond Model Accuracy to Business Impact",
    excerpt:
      "Model accuracy tells you how well the math works. Business impact tells you whether you should keep investing. Here's how we measure what matters.",
    category: "Product Development",
    author: { name: "Hana Chen", role: "VP of Product" },
    publishedAt: "2026-01-08",
    readTime: "7 min read",
    body: [
      "If your AI team is reporting model accuracy as their primary metric, you have a measurement problem. Model accuracy is an engineering metric — it tells you how well the math works. It tells you nothing about whether the AI is generating business value.",
      "At Evren AI, we define three tiers of AI measurement. Tier 1: Model Metrics. Accuracy, precision, recall, F1 score. These are table stakes — they tell you whether the model is technically sound. Tier 2: Operational Metrics. Latency, throughput, uptime, error rate. These tell you whether the system is production-ready. Tier 3: Business Metrics. Revenue impact, cost reduction, time saved, risk mitigated. These tell you whether you should keep investing.",
      "The mistake most teams make is treating Tier 1 as sufficient. A model with 99% accuracy that operates on the wrong data, serves predictions too slowly, or surfaces insights that users can't act on generates zero business value. Conversely, a model with 85% accuracy that's perfectly integrated into the decision workflow can generate millions in value.",
      "Here's our framework for defining AI ROI. Step 1: Define the business metric the AI must move. Not 'accuracy' — a business metric. For McLean Reserve, it was 'hours spent on chart reviews.' For Stratton Financial, it was 'annual regulatory penalties.' For Nova Commerce, it was 'conversion rate.' Step 2: Establish a baseline. Measure the business metric before AI intervention. Step 3: Define the measurement period. AI impact compounds over time as models learn; 90-day measurement windows are the minimum.",
      "Step 4: Isolate the AI signal. This is the hardest part. Business metrics are influenced by dozens of factors. We use A/B testing where possible, and synthetic control methods where A/B testing isn't feasible. Step 5: Calculate the full cost. AI ROI isn't revenue minus model training cost. It's revenue minus total cost of ownership: data infrastructure, model operations, monitoring, retraining, and engineering time.",
      "For executive teams evaluating AI investments: demand Tier 3 metrics from your AI teams. If the only number they can give you is model accuracy, the system isn't ready for production — it's still a research project.",
    ],
  },
];

// ═══════════════════════════════════════════════════════════════════════
//  HELPER FUNCTIONS
// ═══════════════════════════════════════════════════════════════════════

export const CATEGORIES: ArticleCategory[] = [
  "All",
  "AI & Machine Learning",
  "Product Development",
  "Engineering",
];

export function getArticleBySlug(slug: string): Article | undefined {
  return ARTICLES.find((a) => a.slug === slug);
}

export function getArticlesByCategory(
  category: ArticleCategory
): Article[] {
  if (category === "All") return ARTICLES;
  return ARTICLES.filter((a) => a.category === category);
}

export function getAllArticleSlugs(): string[] {
  return ARTICLES.map((a) => a.slug);
}

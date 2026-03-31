import CaseStudyTemplate from "@/components/sections/work/CaseStudyTemplate";
import { INTELLIBOTS_DATA } from "@/lib/case-studies-data";

export const metadata = {
  title: "IntelliBots AI Agent Platform — Evren AI Case Study",
  description:
    "How Evren AI built IntelliBots for a global logistics enterprise — a RAG-powered AI agent deployment platform that reduced repetitive IT support queries by 70% and cut new agent deployment time from months to hours.",
};

export default function IntellibotsCaseStudy() {
  return <CaseStudyTemplate data={INTELLIBOTS_DATA} />;
}
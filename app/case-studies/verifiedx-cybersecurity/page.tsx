import CaseStudyTemplate from "@/components/sections/work/CaseStudyTemplate";
import { VERIFIEDX_DATA } from "@/lib/case-studies-data";

export const metadata = {
  title: "VerifiedX Cybersecurity — Evren AI Case Study",
  description:
    "How Evren AI deployed a real-time LLM threat detection engine for VerifiedX, preventing $7.5M+ in annual losses with 99.7% accuracy across all digital channels.",
};

export default function VerifiedXCaseStudy() {
  return <CaseStudyTemplate data={VERIFIEDX_DATA} />;
}
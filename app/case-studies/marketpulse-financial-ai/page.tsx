import CaseStudyTemplate from "@/components/sections/work/CaseStudyTemplate";
import { MARKETPULSE_DATA } from "@/lib/case-studies-data";

export const metadata = {
  title: "MarketPulse Financial AI — Evren AI Case Study",
  description:
    "How Evren AI built a real-time earnings call intelligence platform that reduces the information-to-insight cycle to under 90 seconds, giving financial advisors an unfair market edge.",
};

export default function MarketPulseCaseStudy() {
  return <CaseStudyTemplate data={MARKETPULSE_DATA} />;
}
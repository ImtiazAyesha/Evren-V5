import CaseStudyTemplate from "@/components/sections/work/CaseStudyTemplate";
import { CONSTRUCTION_SAFETY_DATA } from "@/lib/case-studies-data";

export const metadata = {
  title: "AI Construction Safety — Evren AI Case Study",
  description:
    "How Evren AI deployed an edge AI computer vision system that reduced on-site safety incidents by 40% and achieved 91% hazard detection accuracy for a leading national construction firm.",
};

export default function ConstructionSafetyCaseStudy() {
  return <CaseStudyTemplate data={CONSTRUCTION_SAFETY_DATA} />;
}
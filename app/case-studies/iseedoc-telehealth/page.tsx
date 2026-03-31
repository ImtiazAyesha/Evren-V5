import CaseStudyTemplate from "@/components/sections/work/CaseStudyTemplate";
import { ISEEDOC_DATA } from "@/lib/case-studies-data";

export const metadata = {
  title: "iSeedoc Telehealth — Evren AI Case Study",
  description:
    "How Evren AI built an end-to-end, HIPAA-compliant AI telehealth platform for iSeedoc — cutting report analysis time by 90% and automating clinical workflows at scale.",
};

export default function IsSeedocCaseStudy() {
  return <CaseStudyTemplate data={ISEEDOC_DATA} />;
}
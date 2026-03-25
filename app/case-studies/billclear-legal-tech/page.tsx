import CaseStudyTemplate from "@/components/sections/work/CaseStudyTemplate";
import { BILLCLEAR_DATA } from "@/lib/case-studies-data";

export const metadata = {
  title: "BillClear Legal Tech — Evren AI Case Study",
  description:
    "How Evren AI built BillClear AI for a national law firm — recovering 15% of previously written-down revenue, eliminating 100% of non-compliant submissions, and reducing manual review time by over 80%.",
};

export default function BillClearCaseStudy() {
  return <CaseStudyTemplate data={BILLCLEAR_DATA} />;
}
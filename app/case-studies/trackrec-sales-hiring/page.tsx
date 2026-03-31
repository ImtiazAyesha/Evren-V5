import CaseStudyTemplate from "@/components/sections/work/CaseStudyTemplate";
import { TRACKREC_DATA } from "@/lib/case-studies-data";

export const metadata = {
  title: "TrackRec Sales Hiring AI — Evren AI Case Study",
  description:
    "How Evren AI built TrackRec for a premier sales recruitment agency — an AI platform that scores candidates against 11 KPIs, improving first-year quota attainment by 25% and cutting time-to-hire by 50%.",
};

export default function TrackRecCaseStudy() {
  return <CaseStudyTemplate data={TRACKREC_DATA} />;
}
import type { Metadata } from "next";
import { ServicePage } from "../components/ServicePage";

export const metadata: Metadata = {
  title: "Website & SEO Audit You Can Actually Use | Prometheus CEO",
  description:
    "Actionable technical SEO review, content audit, and competitor snapshot. Delivered in 48 hours. From $147.",
};

export default function SeoAuditPage() {
  return (
    <ServicePage
      title="Website & SEO Audit You Can Actually Use"
      subtitle="A clear, actionable audit covering technical SEO, content gaps, and competitor positioning — not a 50-page PDF you'll never read."
      price="From $147"
      turnaround="48 hours"
      includes={[
        "Technical SEO review (speed, structure, indexing)",
        "Content audit with gap analysis",
        "Competitor snapshot and positioning notes",
        "Prioritized action plan you can execute immediately",
        "Delivered as a clear written report",
      ]}
      ctaText="Start Your Project →"
      ctaHref="/start?service=seo-audit"
    />
  );
}

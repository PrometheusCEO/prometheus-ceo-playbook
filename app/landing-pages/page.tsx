import type { Metadata } from "next";
import { ServicePage } from "../components/ServicePage";

export const metadata: Metadata = {
  title: "Landing Pages That Convert | Prometheus CEO",
  description:
    "Custom, mobile-ready landing pages for launches, offers, and lead capture. Delivered in 24–48 hours. From $197.",
};

export default function LandingPagesPage() {
  return (
    <ServicePage
      title="Landing Pages That Convert"
      subtitle="Custom, mobile-ready landing pages designed for launches, offers, and lead capture. Built to look sharp and drive action."
      price="From $197"
      turnaround="24–48 hours"
      includes={[
        "Custom design matched to your brand and offer",
        "Mobile-first responsive layout",
        "Conversion-optimized copy and structure",
        "Hosted deployment on your domain or ours",
        "One round of revisions included",
      ]}
      ctaText="Start Your Project →"
      ctaHref="/start?service=landing-pages"
    />
  );
}

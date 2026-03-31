import type { Metadata } from "next";
import { ServicePage } from "../components/ServicePage";

export const metadata: Metadata = {
  title: "Cold Email Sequences Written for Your Buyer | Prometheus CEO",
  description:
    "Tailored 5-email outbound sequences for your exact ICP. Delivered in 24 hours. From $97.",
};

export default function ColdEmailPage() {
  return (
    <ServicePage
      title="Cold Email Sequences Written for Your Buyer"
      subtitle="Tailored 5-email outbound sequences designed for your exact ICP. Ready to load into your outreach tool and start sending."
      price="From $97"
      turnaround="24 hours"
      includes={[
        "5-email sequence tailored to your ICP",
        "Compelling subject lines tested for open rates",
        "Follow-up cadence and timing guidance",
        "Personalization framework you can reuse",
        "Delivered in a ready-to-paste format",
      ]}
      ctaText="Start Your Project →"
      ctaHref="/start?service=cold-email"
    />
  );
}

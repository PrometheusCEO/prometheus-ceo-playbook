import type { Metadata } from "next";
import { ServicePage } from "../components/ServicePage";

export const metadata: Metadata = {
  title: "AI Agent Setup — Done For You | Prometheus CEO",
  description:
    "Custom AI agent deployment, workflow automation, and integration setup. Delivered in 48–72 hours. From $497.",
};

export default function AiAgentPage() {
  return (
    <ServicePage
      title="AI Agent Setup — Done For You"
      subtitle="Custom AI agent deployment with workflow automation and integration setup. We build the system, you run the business."
      price="From $497"
      turnaround="48–72 hours"
      includes={[
        "Custom AI agent configured for your workflows",
        "Workflow automation setup and testing",
        "Integration with your existing tools and platforms",
        "Documentation and handoff walkthrough",
        "Post-deployment support window",
      ]}
      ctaText="Book a Fit Check →"
      ctaHref="/start?service=ai-agent-setup"
      note="AI Agent Setup requires a brief fit-check conversation before we begin. Submit your brief and we'll get back to you to confirm scope and fit before any payment."
    />
  );
}

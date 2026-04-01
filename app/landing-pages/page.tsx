import type { Metadata } from "next";
import Link from "next/link";
import { ServicePage } from "../components/ServicePage";

export const metadata: Metadata = {
  title: "Landing Pages That Convert | Prometheus CEO",
  description:
    "Custom, mobile-ready landing pages for launches, offers, and lead capture. Delivered in 24–48 hours. From $197.",
};

export default function LandingPagesPage() {
  return (
    <>
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
        note="Want to see the style first? Browse our fictional demo examples for roofing, dental, and chiropractic pages — built to show layout direction, not client claims."
      />

      <section className="px-5 pb-20 md:pb-24">
        <div className="mx-auto max-w-3xl rounded-2xl border border-white/10 bg-white/[0.03] p-6 md:p-8">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-gray-500">
                See sample direction
              </p>
              <h2 className="mt-2 text-2xl font-bold">Review demo examples before you start</h2>
              <p className="mt-3 max-w-2xl text-sm leading-relaxed text-gray-400">
                Explore three fictional sample pages to get a feel for how Prometheus CEO structures offers,
                trust sections, and conversion flow for local service businesses.
              </p>
            </div>
            <div>
              <Link
                href="/examples"
                className="inline-flex rounded-full border border-white/15 px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-white/5"
              >
                View Examples →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Demo Examples | Prometheus CEO",
  description:
    "Explore fictional sample landing page demos built by Prometheus CEO for roofing, dental, and chiropractic businesses.",
};

const demos = [
  {
    title: "Roofing Demo",
    niche: "Roofing",
    description:
      "A bold local-service landing page built to help a roofing company turn traffic into quote requests.",
    showcase:
      "Clear service hierarchy, trust-oriented layout, strong mobile CTA placement, and lead-focused structure.",
    href: "/demos/roofing.html",
  },
  {
    title: "Dentist Demo",
    niche: "Dentist",
    description:
      "A polished dental practice concept page designed to make booking feel simple and credible.",
    showcase:
      "Clean offer presentation, appointment-first messaging, conversion-friendly sections, and approachable visual pacing.",
    href: "/demos/dental.html",
  },
  {
    title: "Chiropractor Demo",
    niche: "Chiropractor",
    description:
      "A service-page concept for a chiropractic clinic focused on clarity, trust, and easy next steps.",
    showcase:
      "Direct positioning, outcome-focused copy flow, local-business structure, and streamlined inquiry paths.",
    href: "/demos/chiro.html",
  },
];

export default function ExamplesPage() {
  return (
    <div className="px-5 py-20 md:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex rounded-full border border-white/10 bg-white/[0.03] px-4 py-1.5 text-sm text-gray-300">
            Sample demo examples built by Prometheus CEO
          </span>
          <h1 className="mt-6 text-4xl font-extrabold leading-tight md:text-5xl">
            Demo examples for businesses that want a sharper landing page style
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-gray-400">
            These examples show the kind of landing page direction we can build
            for your offer, niche, and market — fast, clean, and conversion-focused.
          </p>
        </div>

        <div className="mx-auto mt-10 max-w-4xl rounded-2xl border border-[#feca57]/20 bg-[#feca57]/10 p-5 text-sm leading-relaxed text-[#ffe8a3] md:p-6">
          <strong className="text-white">Important:</strong> These are fictional
          demo examples created to showcase style and positioning. They are not
          client case studies, performance claims, or real business portfolios.
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {demos.map((demo) => (
            <article
              key={demo.href}
              className="flex h-full flex-col rounded-2xl border border-white/10 bg-white/[0.03] p-8 transition-all hover:border-white/20 hover:bg-white/[0.06]"
            >
              <div className="mb-5 flex items-center justify-between gap-3">
                <h2 className="text-2xl font-bold">{demo.title}</h2>
                <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-gray-300">
                  {demo.niche}
                </span>
              </div>

              <p className="text-gray-400 leading-relaxed">{demo.description}</p>

              <div className="mt-6 rounded-xl border border-white/10 bg-black/20 p-4">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gray-500">
                  What this demo showcases
                </p>
                <p className="mt-2 text-sm leading-relaxed text-gray-300">
                  {demo.showcase}
                </p>
              </div>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <Link
                  href={demo.href}
                  className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-[#ff6b6b] to-[#feca57] px-5 py-3 text-sm font-bold text-black transition-opacity hover:opacity-90"
                >
                  Open Demo
                </Link>
                <Link
                  href="/start?service=landing-pages"
                  className="inline-flex items-center justify-center rounded-full border border-white/15 px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-white/5"
                >
                  Start This Style
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}

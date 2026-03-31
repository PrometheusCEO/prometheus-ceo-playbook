import Link from "next/link";

const services = [
  {
    title: "Landing Pages",
    description: "Custom, mobile-ready landing pages for launches, offers, and lead capture.",
    price: "From $197",
    turnaround: "24–48 hours",
    href: "/landing-pages",
  },
  {
    title: "Cold Email Sequences",
    description: "Tailored 5-email outbound sequences written for your exact buyer.",
    price: "From $97",
    turnaround: "24 hours",
    href: "/cold-email-sequences",
  },
  {
    title: "Website & SEO Audit",
    description: "Actionable technical and content audit with a competitor snapshot.",
    price: "From $147",
    turnaround: "48 hours",
    href: "/website-seo-audit",
  },
  {
    title: "AI Agent Setup",
    description: "Done-for-you AI agent deployment, workflow automation, and integration.",
    price: "From $497",
    turnaround: "48–72 hours",
    href: "/ai-agent-setup",
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="py-24 md:py-32 text-center px-5">
        <div className="mx-auto max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
            <span className="bg-gradient-to-r from-[#ff6b6b] to-[#feca57] bg-clip-text text-transparent">
              Digital Services
            </span>{" "}
            That Ship Fast
          </h1>
          <p className="mt-6 text-lg md:text-xl text-gray-400 leading-relaxed max-w-2xl mx-auto">
            Landing pages, cold email sequences, website audits, and AI agent
            setup — built and delivered in 24–72 hours.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="#services"
              className="rounded-full bg-gradient-to-r from-[#ff6b6b] to-[#feca57] px-8 py-3.5 text-base font-bold text-black hover:opacity-90 transition-opacity"
            >
              See Services ↓
            </Link>
            <Link
              href="/start"
              className="rounded-full border border-white/20 px-8 py-3.5 text-base font-medium text-white hover:bg-white/5 transition-colors"
            >
              Start a Project →
            </Link>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-20 px-5">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-center text-3xl md:text-4xl font-bold mb-16">
            What We Build
          </h2>
          <div className="grid gap-6 md:grid-cols-2">
            {services.map((s) => (
              <Link
                key={s.href}
                href={s.href}
                className="group rounded-2xl border border-white/10 bg-white/[0.03] p-8 hover:border-white/20 hover:bg-white/[0.06] transition-all"
              >
                <h3 className="text-xl font-bold group-hover:text-[#feca57] transition-colors">
                  {s.title}
                </h3>
                <p className="mt-3 text-gray-400 leading-relaxed">
                  {s.description}
                </p>
                <div className="mt-6 flex items-center gap-4 text-sm">
                  <span className="rounded-full bg-white/10 px-3 py-1 font-medium">
                    {s.price}
                  </span>
                  <span className="text-gray-500">{s.turnaround}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why */}
      <section className="py-20 px-5 border-t border-white/5">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            Why Prometheus CEO
          </h2>
          <div className="grid gap-8 md:grid-cols-3 text-left md:text-center">
            <div>
              <div className="text-2xl mb-3">⚡</div>
              <h3 className="font-bold mb-2">Fast Turnaround</h3>
              <p className="text-sm text-gray-400">
                Most projects delivered in 24–48 hours. No weeks of waiting.
              </p>
            </div>
            <div>
              <div className="text-2xl mb-3">🎯</div>
              <h3 className="font-bold mb-2">Built to Convert</h3>
              <p className="text-sm text-gray-400">
                Every deliverable is designed to drive action, not just look good.
              </p>
            </div>
            <div>
              <div className="text-2xl mb-3">🔒</div>
              <h3 className="font-bold mb-2">Simple Process</h3>
              <p className="text-sm text-gray-400">
                Submit a brief, get a quote, receive your deliverable. No fluff.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-5 text-center">
        <div className="mx-auto max-w-2xl">
          <h2 className="text-3xl font-bold mb-4">Ready to Start?</h2>
          <p className="text-gray-400 mb-8">
            Tell us what you need. We&apos;ll get back to you within hours.
          </p>
          <Link
            href="/start"
            className="inline-block rounded-full bg-gradient-to-r from-[#ff6b6b] to-[#feca57] px-8 py-3.5 text-base font-bold text-black hover:opacity-90 transition-opacity"
          >
            Start Your Project →
          </Link>
        </div>
      </section>
    </>
  );
}

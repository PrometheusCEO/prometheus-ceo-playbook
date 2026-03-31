"use client";

import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";

const serviceOptions = [
  { value: "landing-pages", label: "Landing Pages — From $197" },
  { value: "cold-email", label: "Cold Email Sequences — From $97" },
  { value: "seo-audit", label: "Website & SEO Audit — From $147" },
  { value: "ai-agent-setup", label: "AI Agent Setup — From $497" },
];

function StartForm() {
  const searchParams = useSearchParams();
  const preselected = searchParams.get("service") || "";

  const [form, setForm] = useState({
    name: "",
    email: "",
    service: preselected,
    description: "",
    website: "",
    timeline: "",
  });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (preselected) {
      setForm((f) => ({ ...f, service: preselected }));
    }
  }, [preselected]);

  const isAiAgent = form.service === "ai-agent-setup";

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const serviceLabel =
      serviceOptions.find((s) => s.value === form.service)?.label ||
      form.service;

    const subject = encodeURIComponent(
      `New Project Brief: ${serviceLabel} — ${form.name}`
    );
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\nService: ${serviceLabel}\nWebsite: ${form.website || "N/A"}\nTimeline: ${form.timeline || "N/A"}\n\nProject Brief:\n${form.description}`
    );

    window.location.href = `mailto:prometheus.ceo.ai@gmail.com?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="py-20 md:py-28 px-5">
        <div className="mx-auto max-w-2xl text-center">
          <div className="text-5xl mb-6">✓</div>
          <h1 className="text-3xl md:text-4xl font-extrabold mb-4">
            Brief Sent
          </h1>

          {isAiAgent ? (
            <div className="text-gray-400 leading-relaxed">
              <p className="mb-4">
                We&apos;ll review your brief and get back to you to confirm scope
                and fit before any payment.
              </p>
              <p>
                If the email client didn&apos;t open, send your brief directly to{" "}
                <a
                  href="mailto:prometheus.ceo.ai@gmail.com"
                  className="text-[#feca57] hover:underline"
                >
                  prometheus.ceo.ai@gmail.com
                </a>
              </p>
            </div>
          ) : (
            <div className="text-gray-400 leading-relaxed">
              <p className="mb-6">
                If the email client didn&apos;t open, send your brief directly to{" "}
                <a
                  href="mailto:prometheus.ceo.ai@gmail.com"
                  className="text-[#feca57] hover:underline"
                >
                  prometheus.ceo.ai@gmail.com
                </a>
              </p>

              <div className="rounded-xl border border-white/10 bg-white/[0.03] p-8 text-left">
                <h2 className="text-lg font-bold text-white mb-4">
                  Payment Instructions
                </h2>
                <div className="space-y-4 text-sm">
                  <div>
                    <p className="font-medium text-white mb-1">PayPal</p>
                    <a
                      href="https://paypal.me/askProm"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#feca57] hover:underline break-all"
                    >
                      paypal.me/askProm
                    </a>
                  </div>
                  <div>
                    <p className="font-medium text-white mb-1">
                      USDC on Base
                    </p>
                    <code className="text-xs text-gray-300 break-all bg-white/5 px-2 py-1 rounded">
                      0x2F7F27C06D497928995906Ae1C3128B28855973D
                    </code>
                  </div>
                </div>
                <p className="mt-6 text-xs text-gray-500">
                  After payment, email your confirmation to
                  prometheus.ceo.ai@gmail.com
                </p>
              </div>
            </div>
          )}

          <a
            href="/"
            className="mt-10 inline-block rounded-full border border-white/20 px-6 py-2.5 text-sm text-white hover:bg-white/5 transition-colors"
          >
            ← Back to Home
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="py-20 md:py-28 px-5">
      <div className="mx-auto max-w-2xl">
        <h1 className="text-3xl md:text-4xl font-extrabold mb-3">
          Start Your Project
        </h1>
        <p className="text-gray-400 mb-10">
          Tell us what you need. We&apos;ll review your brief and get back to you
          within hours.
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Name */}
          <div>
            <label className="block text-sm font-medium mb-2">Name *</label>
            <input
              type="text"
              required
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-gray-500 focus:border-[#feca57] focus:outline-none focus:ring-1 focus:ring-[#feca57]"
              placeholder="Your name"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium mb-2">Email *</label>
            <input
              type="email"
              required
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-gray-500 focus:border-[#feca57] focus:outline-none focus:ring-1 focus:ring-[#feca57]"
              placeholder="you@example.com"
            />
          </div>

          {/* Service */}
          <div>
            <label className="block text-sm font-medium mb-2">
              Service *
            </label>
            <select
              required
              value={form.service}
              onChange={(e) => setForm({ ...form, service: e.target.value })}
              className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white focus:border-[#feca57] focus:outline-none focus:ring-1 focus:ring-[#feca57]"
            >
              <option value="" className="bg-[#1a1a1a]">Select a service</option>
              {serviceOptions.map((s) => (
                <option key={s.value} value={s.value} className="bg-[#1a1a1a]">
                  {s.label}
                </option>
              ))}
            </select>
          </div>

          {/* Description */}
          <div>
            <label className="block text-sm font-medium mb-2">
              Project Brief *
            </label>
            <textarea
              required
              rows={5}
              value={form.description}
              onChange={(e) =>
                setForm({ ...form, description: e.target.value })
              }
              className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-gray-500 focus:border-[#feca57] focus:outline-none focus:ring-1 focus:ring-[#feca57]"
              placeholder="Describe your project, audience, goals, and any specific requirements..."
            />
          </div>

          {/* Website */}
          <div>
            <label className="block text-sm font-medium mb-2">
              Website URL{" "}
              <span className="text-gray-500 font-normal">(optional)</span>
            </label>
            <input
              type="url"
              value={form.website}
              onChange={(e) => setForm({ ...form, website: e.target.value })}
              className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-gray-500 focus:border-[#feca57] focus:outline-none focus:ring-1 focus:ring-[#feca57]"
              placeholder="https://yoursite.com"
            />
          </div>

          {/* Timeline */}
          <div>
            <label className="block text-sm font-medium mb-2">
              Timeline / Urgency{" "}
              <span className="text-gray-500 font-normal">(optional)</span>
            </label>
            <input
              type="text"
              value={form.timeline}
              onChange={(e) => setForm({ ...form, timeline: e.target.value })}
              className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-gray-500 focus:border-[#feca57] focus:outline-none focus:ring-1 focus:ring-[#feca57]"
              placeholder="e.g. Need it by Friday, ASAP, no rush..."
            />
          </div>

          <button
            type="submit"
            className="w-full rounded-full bg-gradient-to-r from-[#ff6b6b] to-[#feca57] py-3.5 text-base font-bold text-black hover:opacity-90 transition-opacity"
          >
            Submit Brief →
          </button>
        </form>
      </div>
    </div>
  );
}

export default function StartPage() {
  return (
    <Suspense
      fallback={
        <div className="py-20 text-center text-gray-500">Loading…</div>
      }
    >
      <StartForm />
    </Suspense>
  );
}

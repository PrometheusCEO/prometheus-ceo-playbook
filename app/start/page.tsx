"use client";

import { useEffect, useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";

const serviceOptions = [
  { value: "landing-pages", label: "Landing Pages — From $197" },
  { value: "cold-email", label: "Cold Email Sequences — From $97" },
  { value: "seo-audit", label: "Website & SEO Audit — From $147" },
  { value: "ai-agent-setup", label: "AI Agent Setup — From $497" },
];

type SubmitState =
  | { status: "idle" }
  | { status: "submitting" }
  | { status: "success"; isAiAgent: boolean }
  | { status: "error"; message: string };

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
  const [submitState, setSubmitState] = useState<SubmitState>({ status: "idle" });

  useEffect(() => {
    if (preselected) {
      setForm((f) => ({ ...f, service: preselected }));
    }
  }, [preselected]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitState({ status: "submitting" });

    try {
      const response = await fetch("/api/brief", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const result = await response.json();
      if (!response.ok || !result?.ok) {
        throw new Error(result?.error || "Submission failed. Please try again.");
      }
      setSubmitState({ status: "success", isAiAgent: Boolean(result.isAiAgent) });
    } catch (error) {
      setSubmitState({
        status: "error",
        message:
          error instanceof Error
            ? error.message
            : "Submission failed. Please try again later.",
      });
    }
  };

  if (submitState.status === "success") {
    return (
      <div className="py-20 md:py-28 px-5">
        <div className="mx-auto max-w-2xl text-center">
          <div className="text-5xl mb-6">✓</div>
          <h1 className="text-3xl md:text-4xl font-extrabold mb-4">
            {submitState.isAiAgent ? "Fit Check Request Received" : "Brief Received"}
          </h1>

          {submitState.isAiAgent ? (
            <div className="text-gray-400 leading-relaxed">
              <p className="mb-4">
                Your fit-check request was delivered successfully. We&apos;ll review your brief and get back to you to confirm scope and fit before any payment.
              </p>
            </div>
          ) : (
            <div className="text-gray-400 leading-relaxed">
              <p className="mb-6">
                Your brief was delivered successfully. You can now complete payment using one of the options below.
              </p>
              <div className="rounded-xl border border-white/10 bg-white/[0.03] p-8 text-left">
                <h2 className="text-lg font-bold text-white mb-4">Payment Instructions</h2>
                <div className="space-y-4 text-sm">
                  <div>
                    <p className="font-medium text-white mb-1">PayPal</p>
                    <a href="https://paypal.me/askProm" target="_blank" rel="noopener noreferrer" className="text-[#feca57] hover:underline break-all">paypal.me/askProm</a>
                  </div>
                  <div>
                    <p className="font-medium text-white mb-1">USDC on Base</p>
                    <code className="text-xs text-gray-300 break-all bg-white/5 px-2 py-1 rounded">0x2F7F27C06D497928995906Ae1C3128B28855973D</code>
                  </div>
                </div>
                <p className="mt-6 text-xs text-gray-500">After payment, email your confirmation to prometheus.ceo.ai@gmail.com</p>
              </div>
            </div>
          )}

          <a href="/" className="mt-10 inline-block rounded-full border border-white/20 px-6 py-2.5 text-sm text-white hover:bg-white/5 transition-colors">← Back to Home</a>
        </div>
      </div>
    );
  }

  return (
    <div className="py-20 md:py-28 px-5">
      <div className="mx-auto max-w-2xl">
        <h1 className="text-3xl md:text-4xl font-extrabold mb-3">Start Your Project</h1>
        <p className="text-gray-400 mb-10">Tell us what you need. We&apos;ll review your brief and get back to you within hours.</p>

        {submitState.status === "error" && (
          <div className="mb-6 rounded-xl border border-red-500/30 bg-red-500/10 p-4 text-sm text-red-200">
            Submission failed. {submitState.message}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium mb-2">Name *</label>
            <input type="text" required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-gray-500 focus:border-[#feca57] focus:outline-none focus:ring-1 focus:ring-[#feca57]" placeholder="Your name" />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Email *</label>
            <input type="email" required value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-gray-500 focus:border-[#feca57] focus:outline-none focus:ring-1 focus:ring-[#feca57]" placeholder="you@example.com" />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Service *</label>
            <select required value={form.service} onChange={(e) => setForm({ ...form, service: e.target.value })} className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white focus:border-[#feca57] focus:outline-none focus:ring-1 focus:ring-[#feca57]">
              <option value="" className="bg-[#1a1a1a]">Select a service</option>
              {serviceOptions.map((s) => (
                <option key={s.value} value={s.value} className="bg-[#1a1a1a]">{s.label}</option>
              ))}
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Project Brief *</label>
            <textarea required rows={5} value={form.description} onChange={(e) => setForm({ ...form, description: e.target.value })} className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-gray-500 focus:border-[#feca57] focus:outline-none focus:ring-1 focus:ring-[#feca57]" placeholder="Describe your project, audience, goals, and any specific requirements..." />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Website URL <span className="text-gray-500 font-normal">(optional)</span></label>
            <input type="url" value={form.website} onChange={(e) => setForm({ ...form, website: e.target.value })} className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-gray-500 focus:border-[#feca57] focus:outline-none focus:ring-1 focus:ring-[#feca57]" placeholder="https://yoursite.com" />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Timeline / Urgency <span className="text-gray-500 font-normal">(optional)</span></label>
            <input type="text" value={form.timeline} onChange={(e) => setForm({ ...form, timeline: e.target.value })} className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-gray-500 focus:border-[#feca57] focus:outline-none focus:ring-1 focus:ring-[#feca57]" placeholder="e.g. Need it by Friday, ASAP, no rush..." />
          </div>
          <button type="submit" disabled={submitState.status === "submitting"} className="w-full rounded-full bg-gradient-to-r from-[#ff6b6b] to-[#feca57] py-3.5 text-base font-bold text-black hover:opacity-90 transition-opacity disabled:cursor-not-allowed disabled:opacity-60">
            {submitState.status === "submitting" ? "Submitting…" : "Submit Brief →"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default function StartPage() {
  return (
    <Suspense fallback={<div className="py-20 text-center text-gray-500">Loading…</div>}>
      <StartForm />
    </Suspense>
  );
}

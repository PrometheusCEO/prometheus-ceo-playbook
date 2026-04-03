import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { demoLibrary, demoMap } from "../demoLibrary";

export function generateStaticParams() {
  return demoLibrary
    .filter((demo) => demo.href.startsWith("/examples/"))
    .map((demo) => ({ slug: demo.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const demo = demoMap[params.slug];
  if (!demo || !demo.href.startsWith("/examples/")) {
    return { title: "Example | Prometheus CEO" };
  }

  return {
    title: `${demo.pageTitle} | Prometheus CEO`,
    description: demo.description,
  };
}

export default function DemoDetailPage({ params }: { params: { slug: string } }) {
  const demo = demoMap[params.slug];
  if (!demo || !demo.href.startsWith("/examples/")) {
    notFound();
  }

  return (
    <div className="bg-[#f6f9fc] text-[#061b31]">
      <div className="mx-auto max-w-6xl px-5 py-6 md:px-8">
        <Link
          href="/examples"
          className="inline-flex items-center rounded-md border border-[#d6dff0] bg-white px-3 py-2 text-sm font-medium text-[#273951] shadow-[0_18px_36px_-18px_rgba(0,0,0,0.1)] transition hover:border-[#b9b9f9] hover:text-[#533afd]"
        >
          ← Back to examples
        </Link>
      </div>

      <main className="mx-auto max-w-6xl px-5 pb-20 md:px-8 md:pb-28">
        <section className="grid gap-8 rounded-[28px] border border-[#e5edf5] bg-white px-6 py-10 shadow-[rgba(50,50,93,0.18)_0px_30px_45px_-30px,rgba(0,0,0,0.08)_0px_18px_36px_-18px] md:grid-cols-[1.05fr_0.95fr] md:px-10 md:py-12">
          <div>
            <span className="inline-flex rounded-md border border-[#d6d9fc] bg-[#f4f1ff] px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-[#533afd]">
              Sample / demo page
            </span>
            <p className="mt-4 text-sm font-medium text-[#64748d]">{demo.locationHint}</p>
            <h1 className="mt-4 max-w-3xl text-4xl font-light leading-tight tracking-[-0.04em] md:text-6xl">
              {demo.pageTitle}
            </h1>
            <p className="mt-5 max-w-2xl text-lg font-light leading-8 text-[#425466]">
              {demo.hero}
            </p>
            <p className="mt-5 max-w-2xl text-base leading-7 text-[#64748d]">{demo.intro}</p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/start?service=landing-pages"
                className="inline-flex items-center justify-center rounded-md bg-[#533afd] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#4434d4]"
              >
                Start this style
              </Link>
              <Link
                href="#example-structure"
                className="inline-flex items-center justify-center rounded-md border border-[#d6dff0] bg-white px-5 py-3 text-sm font-semibold text-[#533afd] transition hover:bg-[#f7f8ff]"
              >
                See page structure
              </Link>
            </div>
          </div>

          <div className="space-y-4">
            {demo.heroImage ? (
              <div className="overflow-hidden rounded-[24px] border border-[#e5edf5] bg-[#f8fbff] shadow-[rgba(50,50,93,0.18)_0px_30px_45px_-30px,rgba(0,0,0,0.08)_0px_18px_36px_-18px]">
                <div className="relative aspect-[1/1] bg-[#eef3fb]">
                  <Image
                    src={demo.heroImage}
                    alt={demo.heroImageAlt ?? `${demo.niche} demo preview image`}
                    fill
                    sizes="(max-width: 768px) 100vw, 42vw"
                    className="object-cover"
                    priority
                  />
                </div>
                <div className="border-t border-[#e5edf5] bg-white px-5 py-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#533afd]">Category preview</p>
                  <p className="mt-2 text-sm leading-7 text-[#64748d]">
                    Visual proof placed near the hero so the example feels more concrete without implying it was built for one specific business.
                  </p>
                </div>
              </div>
            ) : null}

            <div className="rounded-[24px] border border-[#e5edf5] bg-[linear-gradient(180deg,#f9fbff_0%,#eef3fb_100%)] p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#533afd]">Offer</p>
              <h2 className="mt-3 text-2xl font-light tracking-[-0.03em]">{demo.offerLabel}</h2>
              <p className="mt-4 text-sm leading-7 text-[#64748d]">
                Honest example page for a business in this category. No custom build is implied. It is here to show the type of simple page Prometheus CEO can make public and usable for outreach.
              </p>

              <div className="mt-6 grid gap-3">
                {demo.proofItems.map((item) => (
                  <div key={item} className="rounded-xl border border-[#e5edf5] bg-white px-4 py-3 text-sm text-[#273951] shadow-[0_15px_35px_0_rgba(23,23,23,0.06)]">
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="example-structure" className="mt-10 grid gap-6 md:grid-cols-3">
          <div className="rounded-2xl border border-[#e5edf5] bg-white p-6 shadow-[0_15px_35px_0_rgba(23,23,23,0.06)] md:col-span-2">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#533afd]">What this page includes</p>
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {demo.serviceItems.map((item) => (
                <div key={item} className="rounded-xl border border-[#eef2f8] bg-[#fbfcff] px-4 py-4 text-sm text-[#273951]">
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-[#e5edf5] bg-white p-6 shadow-[0_15px_35px_0_rgba(23,23,23,0.06)]">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#533afd]">Simple build flow</p>
            <div className="mt-5 space-y-3">
              {demo.processItems.map((item, index) => (
                <div key={item} className="rounded-xl border border-[#eef2f8] bg-[#fbfcff] px-4 py-4 text-sm text-[#273951]">
                  <span className="mr-2 inline-flex h-6 w-6 items-center justify-center rounded-full bg-[#f4f1ff] text-xs font-semibold text-[#533afd]">{index + 1}</span>
                  {item}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mt-10 rounded-[28px] border border-[#e5edf5] bg-[#061b31] px-6 py-10 text-white shadow-[rgba(3,3,39,0.22)_0px_30px_45px_-30px] md:px-10">
          <div className="grid gap-8 md:grid-cols-[1.15fr_0.85fr] md:items-center">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#b9b9f9]">Why this works</p>
              <h2 className="mt-4 text-3xl font-light tracking-[-0.03em] md:text-4xl">
                Simple pages work well when they make the next step obvious.
              </h2>
              <p className="mt-5 max-w-2xl text-base leading-7 text-[#c7d4e5]">
                For small local businesses, the goal is usually simple. Show what the business does, where it is, how to get in touch, and why someone should reach out now. That is what this example is meant to demonstrate.
              </p>
            </div>
            <div className="rounded-[24px] border border-white/10 bg-white/[0.04] p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#b9b9f9]">Useful on the page</p>
              <ul className="mt-4 space-y-3 text-sm leading-7 text-[#e7eef7]">
                <li>Clear services and offers</li>
                <li>Hours, location, and contact details</li>
                <li>Simple mobile-friendly layout</li>
                <li>One strong call to action</li>
                <li>Believable, category-specific copy</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mt-10 rounded-[28px] border border-[#e5edf5] bg-white px-6 py-10 shadow-[0_15px_35px_0_rgba(23,23,23,0.06)] md:px-10">
          <div className="grid gap-8 md:grid-cols-[1fr_auto] md:items-end">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#533afd]">Public proof asset</p>
              <h2 className="mt-4 text-3xl font-light tracking-[-0.03em] md:text-4xl">Use this example honestly in outreach.</h2>
              <p className="mt-5 max-w-3xl text-base leading-7 text-[#64748d]">
                The correct positioning is simple: this is an example of the kind of page that could be built for a business in this category, starting at $197.
              </p>
            </div>
            <Link
              href="/start?service=landing-pages"
              className="inline-flex items-center justify-center rounded-md bg-[#533afd] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#4434d4]"
            >
              Start a page like this
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}

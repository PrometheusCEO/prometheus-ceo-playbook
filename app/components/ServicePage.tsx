import Link from "next/link";

interface ServicePageProps {
  title: string;
  subtitle: string;
  price: string;
  turnaround: string;
  includes: string[];
  ctaText: string;
  ctaHref: string;
  note?: string;
}

export function ServicePage({
  title,
  subtitle,
  price,
  turnaround,
  includes,
  ctaText,
  ctaHref,
  note,
}: ServicePageProps) {
  return (
    <div className="py-20 md:py-28 px-5">
      <div className="mx-auto max-w-3xl">
        {/* Header */}
        <div className="mb-16">
          <h1 className="text-3xl md:text-5xl font-extrabold leading-tight mb-4">
            {title}
          </h1>
          <p className="text-lg text-gray-400 leading-relaxed">{subtitle}</p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <span className="rounded-full bg-gradient-to-r from-[#ff6b6b] to-[#feca57] px-5 py-2 text-sm font-bold text-black">
              {price}
            </span>
            <span className="text-gray-500 text-sm">
              Delivered in {turnaround}
            </span>
          </div>
        </div>

        {/* What's included */}
        <div className="mb-16">
          <h2 className="text-xl font-bold mb-6">What&apos;s Included</h2>
          <ul className="space-y-4">
            {includes.map((item, i) => (
              <li
                key={i}
                className="flex items-start gap-3 text-gray-300"
              >
                <span className="mt-1 text-[#feca57]">✓</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Note */}
        {note && (
          <div className="mb-16 rounded-xl border border-white/10 bg-white/[0.03] p-6">
            <p className="text-sm text-gray-400">{note}</p>
          </div>
        )}

        {/* CTA */}
        <div className="text-center md:text-left">
          <Link
            href={ctaHref}
            className="inline-block rounded-full bg-gradient-to-r from-[#ff6b6b] to-[#feca57] px-8 py-3.5 text-base font-bold text-black hover:opacity-90 transition-opacity"
          >
            {ctaText}
          </Link>
        </div>
      </div>
    </div>
  );
}

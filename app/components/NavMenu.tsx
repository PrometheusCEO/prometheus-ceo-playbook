"use client";

import { useState } from "react";
import Link from "next/link";

const links = [
  { href: "/landing-pages", label: "Landing Pages" },
  { href: "/cold-email-sequences", label: "Cold Email" },
  { href: "/website-seo-audit", label: "SEO Audit" },
  { href: "/ai-agent-setup", label: "AI Agent Setup" },
];

export function NavMenu() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Desktop */}
      <div className="hidden md:flex items-center gap-6 text-sm">
        {links.map((l) => (
          <Link
            key={l.href}
            href={l.href}
            className="text-gray-400 hover:text-white transition-colors"
          >
            {l.label}
          </Link>
        ))}
        <Link
          href="/start"
          className="rounded-full bg-gradient-to-r from-[#ff6b6b] to-[#feca57] px-5 py-2 text-sm font-bold text-black hover:opacity-90 transition-opacity"
        >
          Start a Project
        </Link>
      </div>

      {/* Mobile toggle */}
      <button
        onClick={() => setOpen(!open)}
        className="md:hidden text-gray-400 hover:text-white"
        aria-label="Toggle menu"
      >
        {open ? (
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        )}
      </button>

      {/* Mobile menu */}
      {open && (
        <div className="absolute top-full left-0 right-0 border-b border-white/10 bg-[#0f0f0f]/95 backdrop-blur-md md:hidden">
          <div className="flex flex-col gap-4 px-5 py-6">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-gray-400 hover:text-white transition-colors"
              >
                {l.label}
              </Link>
            ))}
            <Link
              href="/start"
              onClick={() => setOpen(false)}
              className="mt-2 inline-block rounded-full bg-gradient-to-r from-[#ff6b6b] to-[#feca57] px-5 py-2 text-center text-sm font-bold text-black"
            >
              Start a Project
            </Link>
          </div>
        </div>
      )}
    </>
  );
}

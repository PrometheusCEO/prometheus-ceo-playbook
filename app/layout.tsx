import type { Metadata } from "next";
import "./globals.css";
import Link from "next/link";
import { NavMenu } from "./components/NavMenu";

export const metadata: Metadata = {
  title: "Prometheus CEO — Digital Services That Ship Fast",
  description:
    "Landing pages, cold email sequences, website audits, and AI agent setup. Professional digital services delivered in 24–72 hours.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-[#0f0f0f]/90 backdrop-blur-md">
          <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
            <Link
              href="/"
              className="text-xl font-extrabold bg-gradient-to-r from-[#ff6b6b] to-[#feca57] bg-clip-text text-transparent"
            >
              Prometheus CEO
            </Link>
            <NavMenu />
          </div>
        </nav>

        <main className="pt-[72px]">{children}</main>

        <footer className="border-t border-white/10 py-10 text-center text-sm text-gray-500">
          <div className="mx-auto max-w-6xl px-5">
            <p>© 2026 Prometheus CEO</p>
            <p className="mt-1">
              <a
                href="mailto:prometheus.ceo.ai@gmail.com"
                className="hover:text-white transition-colors"
              >
                prometheus.ceo.ai@gmail.com
              </a>
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}

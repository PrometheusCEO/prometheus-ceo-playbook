import type { Metadata } from 'next';
import Link from 'next/link';
import RoofingDemoPage from './RoofingDemoPage';

export const metadata: Metadata = {
  title: 'Roofing Landing Page Example | Prometheus CEO',
  description: 'A sample roofing company landing page demo built by Prometheus CEO. Shows the type of simple, conversion-focused page we can create for local roofing businesses.',
};

export default function RoofingExamplePage() {
  return (
    <>
      {/* Back to examples link */}
      <div className="fixed top-4 left-4 z-50">
        <Link
          href="/examples"
          className="inline-flex items-center rounded-lg bg-white/90 backdrop-blur-sm px-4 py-2 text-sm font-medium text-gray-700 shadow-lg border border-gray-200 hover:bg-white transition"
        >
          ← Back to Examples
        </Link>
      </div>

      {/* Demo note overlay */}
      <div className="fixed top-4 right-4 z-50">
        <div className="rounded-lg bg-amber-500/90 backdrop-blur-sm px-4 py-2 text-sm font-bold text-amber-950 shadow-lg">
          SAMPLE DEMO PAGE
        </div>
      </div>

      {/* The actual roofing demo page */}
      <RoofingDemoPage 
        businessName="Summit Roofing Co."
        city="Dallas, TX"
        phone="(555) 123-4567"
        email="contact@summitroofingdemo.com"
        serviceArea={["Dallas", "Fort Worth", "Arlington", "Plano", "Irving", "Frisco", "McKinney"]}
        services={[
          "Roof Repair",
          "Roof Replacement", 
          "Storm Damage Repair",
          "Emergency Roof Service",
          "Insurance Claim Assistance",
          "Roof Inspections",
          "Gutter Installation",
          "Roof Maintenance",
          "Skylight Installation",
          "Roof Ventilation"
        ]}
        isDemo={true}
      />

      {/* Prometheus CEO overlay */}
      <div className="fixed bottom-4 left-4 z-50">
        <div className="rounded-lg bg-gray-900/90 backdrop-blur-sm px-4 py-3 text-sm text-white shadow-lg max-w-sm">
          <div className="font-bold mb-1">Built by Prometheus CEO</div>
          <p className="text-gray-300 text-xs">
            This is a sample landing page demo. We can build a similar page for your roofing business in 3 business days for $197.
          </p>
          <Link
            href="/start?service=landing-pages&niche=roofing"
            className="inline-block mt-2 bg-amber-500 hover:bg-amber-600 text-white font-bold py-2 px-4 rounded text-sm transition"
          >
            Start Your Page
          </Link>
        </div>
      </div>
    </>
  );
}
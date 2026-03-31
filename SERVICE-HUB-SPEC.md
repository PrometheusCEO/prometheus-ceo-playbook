# Prometheus CEO — Service Hub Rebuild Specification

## Mission
Transform this minimal Next.js 14 ebook landing page into a professional 4-offer service hub.

## Current State
- Single page site selling $49 ebook (broken checkout)
- Next.js 14 App Router, TypeScript, React 18
- All inline styles, no design system
- Only routes: /, /success, /api/checkout (all broken on production)

## Target State

### Design System
- Add Tailwind CSS (install tailwindcss, postcss, autoprefixer)
- Dark theme: backgrounds #0f0f0f → #1a1a1a, text white/gray
- Accent gradient: #ff6b6b → #feca57 (keep existing brand colors)
- Clean, professional, mobile-first responsive
- Consistent spacing, typography, component patterns

### Pages to Build

#### 1. Homepage `/` (app/page.tsx)
- Hero: "Prometheus CEO" brand name + clear positioning as a service provider
- Tagline: something like "We build your digital infrastructure — landing pages, email sequences, audits, and AI agents"
- 4 service cards linking to individual service pages
- Brief trust/credibility section
- Simple CTA: "See Services" or direct links to each service
- NO ebook/playbook mention on homepage
- NO "coming soon" or "waitlist" language
- Footer with: © Prometheus CEO, contact email prometheus.ceo.ai@gmail.com

#### 2. Service Page: Landing Pages `/landing-pages` (app/landing-pages/page.tsx)
- Title: "Landing Pages That Convert"
- Price: From $197
- Turnaround: 24-48 hours
- What's included: Custom design, mobile-responsive, conversion-optimized, hosted deployment
- CTA: "Start Your Project →" linking to /start?service=landing-pages

#### 3. Service Page: Cold Email Sequences `/cold-email-sequences` (app/cold-email-sequences/page.tsx)
- Title: "Cold Email Sequences Written for Your Buyer"
- Price: From $97
- Turnaround: 24 hours
- What's included: 5-email sequence, ICP-targeted, subject lines, follow-up cadence
- CTA: "Start Your Project →" linking to /start?service=cold-email

#### 4. Service Page: Website & SEO Audit `/website-seo-audit` (app/website-seo-audit/page.tsx)
- Title: "Website & SEO Audit You Can Actually Use"
- Price: From $147
- Turnaround: 48 hours
- What's included: Technical SEO review, content audit, competitor snapshot, actionable report
- CTA: "Start Your Project →" linking to /start?service=seo-audit

#### 5. Service Page: AI Agent Setup `/ai-agent-setup` (app/ai-agent-setup/page.tsx)
- Title: "AI Agent Setup — Done For You"
- Price: From $497
- Turnaround: 48-72 hours
- What's included: Custom AI agent deployment, workflow automation, integration setup
- CTA: "Book a Fit Check →" linking to /start?service=ai-agent-setup
- Note: This service requires a fit-check conversation before payment

#### 6. Brief/Intake Page `/start` (app/start/page.tsx)
- Reads ?service= query param to show service-specific heading
- Form fields:
  - Name (required)
  - Email (required)
  - Service (pre-selected from URL param, or dropdown)
  - Project description / brief (textarea, required)
  - Website URL (optional)
  - Timeline/urgency (optional)
- On submit: generate a mailto: link to prometheus.ceo.ai@gmail.com with all form fields
- Show confirmation state after submit with:
  - "Brief sent" confirmation
  - Payment instructions:
    - PayPal: https://paypal.me/askProm
    - USDC on Base: 0x2F7F27C06D497928995906Ae1C3128B28855973D
  - For AI Agent Setup: show "We'll review your brief and get back to you" instead of payment instructions
  - Fallback: manual email button if mailto doesn't work

#### 7. Layout (app/layout.tsx)
- Shared navigation bar with:
  - Prometheus CEO logo/brand (links to /)
  - Nav links: Landing Pages, Cold Email, SEO Audit, AI Agent Setup
  - Mobile hamburger menu
- Shared footer:
  - © 2026 Prometheus CEO
  - prometheus.ceo.ai@gmail.com
  - Simple, clean

### What to Remove
- Delete: app/api/checkout/route.ts (Stripe checkout route)
- Delete: app/success/page.tsx (old success page)
- Remove: stripe dependency from package.json
- Remove: all ebook/playbook references from homepage
- Keep: Prometheus-CEO-Playbook.pdf and public/ files (don't delete, just don't link)
- Keep: content/playbook.md (don't delete, just don't link)

### SEO Basics
- Add proper <title> and <meta description> to each page via metadata exports
- Homepage title: "Prometheus CEO — Digital Services That Ship Fast"
- Add a public/robots.txt allowing all crawlers
- Add a basic sitemap (can be static)

### Technical Requirements
- All pages must be responsive (mobile-first)
- All pages must work as static/SSG (no server-side features needed)
- No database, no auth, no Stripe needed
- Brief form uses client-side mailto: generation (no API route needed)
- Keep it simple — no over-engineering

### File Structure Target
```
app/
  layout.tsx              (shared nav + footer + Tailwind)
  page.tsx                (service hub homepage)
  landing-pages/page.tsx
  cold-email-sequences/page.tsx
  website-seo-audit/page.tsx
  ai-agent-setup/page.tsx
  start/page.tsx          (brief/intake form)
  globals.css             (Tailwind base)
public/
  robots.txt
  sitemap.xml
tailwind.config.ts
postcss.config.js
package.json              (updated: no stripe, add tailwind)
```

### Branch
Work on branch: service-hub-v1
Commit when complete with message: "feat: service hub rebuild — 4 offers, brief flow, Tailwind"
Push to origin when done.


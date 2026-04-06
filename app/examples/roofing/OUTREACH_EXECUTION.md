# Roofing Outreach - Operator Execution Pack

**Purpose:** Ready-to-use manual outreach workflow for roofing offer

---

## 1. DEPLOY PATH / REPO WORKFLOW

### Current State:
- **Repo:** `prometheus-ceo-playbook` (Next.js 14)
- **Path:** `app/examples/roofing/`
- **Target URL:** `https://prometheusceo.com/examples/roofing`

### To Make Live:
```
1. Deploy to Vercel:
   vercel deploy --prod

2. Set custom domain (if not already):
   vercel domains add prometheusceo.com

3. Environment variables in Vercel:
   SMTP_APP_PASSWORD=your_gmail_app_password
   (others from .env.local)

4. Build command:
   npm run build

5. Output: .next/standalone
```

**Status Check:**
- ✅ Code exists in repo
- ✅ Next.js config: `output: 'standalone'`
- ❌ Domain: `prometheusceo.com` must resolve to Vercel
- ❌ SMTP: `SMTP_APP_PASSWORD` must be valid in production

---

## 2. LIVE VERIFICATION REQUIREMENTS

### What Blocks Verification:
1. **Domain DNS:** `prometheusceo.com` → Vercel IPs
2. **SMTP Credentials:** Valid Gmail app password in production env vars
3. **SSL/TLS:** Automatic with Vercel
4. **Form Submission:** API route at `/api/contact`

### Minimum Verification Steps:
```
1. Visit: https://prometheusceo.com/examples/roofing
2. Check: Page loads without errors
3. Test: Submit contact form with test data
4. Verify: Email reaches prometheus.ceo.ai@gmail.com
5. Confirm: Demo banners show correctly
```

### If Verification Fails:
- **Page not loading:** Check Vercel deployment logs
- **Form not submitting:** Check SMTP_APP_PASSWORD in Vercel env vars
- **No email received:** Check Gmail app password permissions
- **Mixed content warnings:** Ensure HTTPS everywhere

---

## 3. DEFAULT OUTREACH PATH

### Link to Send:
```
https://prometheusceo.com/examples/roofing
```

### Default First-Touch Email:
**Subject:** `Roofing lead page example`

**Body (from OUTREACH_PACK.md):**
```
Hi [Business Name],

I was looking at roofing businesses in [City] and put together this example page:
https://prometheusceo.com/examples/roofing

It's a simple, mobile-friendly page for roofing companies (demo version shows contact form - real version sends enquiries to your email).

If you'd like something similar for your business, we can have it ready in 3 business days for $197. You own the page outright with no monthly fees.

If interested, reply with "Yes" and we'll get started.

Best,
Sakis
PrometheusCEO
```

### Outreach Variations:
- **Short DM/LinkedIn:** "Hi [Name], saw your roofing business in [City]. We build simple lead pages - here's an example: [link]"
- **Follow-up:** "Following up on my previous email about the roofing lead page example..."
- **Key points:** $197 one-time, 3 days, mobile-friendly, contact form

---

## 4. WARM LEAD HANDOFF FLOW

### Qualifying Reply:
- **Primary:** "Yes" (exact word from CTA)
- **Secondary:** Any positive interest ("interested", "tell me more", "how does it work")
- **Tertiary:** Questions about price/timeline/details

### Exact Next Steps (Operator Workflow):

**STEP 1: Send INTAKE_TEMPLATE.md**
```
Reply to prospect with INTAKE_TEMPLATE.md content.
Customize [City] and any other placeholders.
```

**STEP 2: Collect Client Information**
```
Required:
- Business name
- City/Service area  
- Phone number
- Email (for form destination)
- Services offered
- Any specific requests
```

**STEP 3: Quote & Payment**
```
Price: $197 one-time
Timeline: 3 business days
Payment options:
1. PayPal: paypal.me/askProm
2. USDC on Base: 0x2F7F27C06D497928995906Ae1C3128B28855973D
3. Or send Stripe link if configured
```

**STEP 4: Build Custom Page**
```
Files to modify:
1. app/api/contact/route.ts → Change DESTINATION_INBOX
2. app/examples/roofing/RoofingDemoPage.tsx → Update props
3. app/examples/roofing/page.tsx → Remove demo banners
4. (Optional) Update metadata in page.tsx
```

**STEP 5: Deploy & Deliver**
```
Options:
A. Deploy as standalone page on client subdomain
B. Integrate into client's existing website
C. Deliver code for client to deploy

Include OPERATOR_HANDOFF.md instructions.
```

**STEP 6: Post-Delivery**
```
1. Test form submission to client email
2. Verify mobile responsiveness
3. Send ACCEPTANCE_CHECKLIST.md for client review
4. Request confirmation of receipt
```

---

## 5. TROUBLESHOOTING & EDGE CASES

### Common Objections:
- **"Too expensive"**: Emphasize one-time cost vs monthly fees, ROI from leads
- **"I have a website already"**: Position as focused lead capture page, not full website
- **"Need to think about it"**: Offer to answer specific questions, follow up in 3 days

### Technical Issues:
- **Form not sending**: Check SMTP_APP_PASSWORD, test with different email
- **Page not loading**: Clear cache, check Vercel deployment status
- **Mobile issues**: Test on actual devices, not just emulators

### Payment Issues:
- **Client wants invoice**: Use PayPal invoice feature
- **International payments**: USDC on Base works globally
- **Delayed payment**: Start work after payment confirmation email

---

## 6. SUCCESS METRICS

**Outreach:**
- Emails sent: Track manually
- Response rate: Target 5-10%
- Conversion rate: Target 1-3%

**Delivery:**
- Build time: < 3 business days
- Client satisfaction: No revisions needed
- Form functionality: 100% working

**Business:**
- Revenue per page: $197
- Time investment: 2-3 hours total
- Profit margin: ~90% after Vercel costs

---

**READY TO EXECUTE:** Copy first-touch email, replace placeholders, send to roofing business list.
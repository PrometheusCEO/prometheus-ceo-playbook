# Roofing Demo - Operator Handoff Notes

**Purpose:** Guide for converting demo → real client page

---

## CURRENT STATE (DEMO)

**Demo URL:** `/examples/roofing`  
**Email Destination:** `prometheus.ceo.ai@gmail.com` (Prometheus CEO inbox)  
**Business Info:** Fictional "Summit Roofing Co."  
**Contact Form:** Submits to `/api/contact` → Prometheus CEO email

---

## MINIMUM STEPS FOR REAL CLIENT

### 1. CHANGE EMAIL DESTINATION

**File to modify:** `app/api/contact/route.ts`

**Change this line (line 5):**
```typescript
const DESTINATION_INBOX = "prometheus.ceo.ai@gmail.com";
```
**To:**
```typescript
const DESTINATION_INBOX = "client@theirbusiness.com"; // Client's email
```

**Alternative:** Create client-specific API route:
- Copy `app/api/contact/route.ts` to `app/api/contact-client/route.ts`
- Update `DESTINATION_INBOX` in the copy
- Update form to submit to `/api/contact-client`

### 2. UPDATE BUSINESS INFORMATION

**Files to modify:**
1. `app/examples/roofing/RoofingDemoPage.tsx` - Props at top of file
2. `app/examples/roofing/page.tsx` - Props passed to RoofingDemoPage

**Change these props in RoofingDemoPage:**
```typescript
businessName = "Summit Roofing Co.",      // → Client business name
city = "Dallas, TX",                      // → Client city
phone = "(555) 123-4567",                 // → Client phone
email = "contact@example.com",            // → Client email
serviceArea = ["Dallas", "Fort Worth"],   // → Client service areas
services = ["Roof Repair", ...]           // → Client services
isDemo = true                             // → Set to false
```

### 3. UPDATE PAGE METADATA

**File:** `app/examples/roofing/page.tsx`

**Update metadata:**
```typescript
export const metadata: Metadata = {
  title: 'Roofing Landing Page Example | Prometheus CEO', // → Client business name
  description: 'A sample roofing company landing page...', // → Client description
};
```

### 4. REMOVE DEMO BANNERS/OVERLAYS

**In `app/examples/roofing/page.tsx`:**
- Remove fixed demo banners (lines ~15-35)
- Remove Prometheus CEO overlay (lines ~55-70)

**In `app/examples/roofing/RoofingDemoPage.tsx`:**
- Remove demo banner (lines ~15-20)
- Remove demo note in footer (lines ~291-301)

### 5. UPDATE FORM COMPONENT

**File:** `app/examples/roofing/ContactForm.tsx`

**Remove demo note (lines ~101-108):**
```typescript
{isDemo && (
  <div className="mb-6 p-4 bg-amber-50 border border-amber-200 rounded-lg">
    <p className="text-sm text-amber-800">
      <strong>Demo Note:</strong> This form submits to Prometheus CEO...
    </p>
  </div>
)}
```

---

## VERIFICATION CHECKLIST (BEFORE DELIVERY)

✅ **Email destination updated** - Form sends to client email  
✅ **Business info updated** - All placeholder text replaced  
✅ **Demo banners removed** - No Prometheus CEO branding  
✅ **Form functional** - Test submission reaches client  
✅ **Mobile responsive** - Test on phone/tablet  
✅ **No broken links** - All links work  
✅ **SEO basics** - Title, description, alt tags  

---

## FILE PATHS SUMMARY

**Core files (always modify):**
- `app/api/contact/route.ts` - Email destination
- `app/examples/roofing/RoofingDemoPage.tsx` - Business info
- `app/examples/roofing/page.tsx` - Metadata & demo banners

**Optional modifications:**
- `app/examples/roofing/ContactForm.tsx` - Remove demo note
- Brand colors in Tailwind classes (search for `amber-500`, `gray-900`)

**Supporting files (for operator use):**
- `INTAKE_TEMPLATE.md` - Client information gathering
- `OUTREACH_PACK.md` - Outreach templates  
- `ACCEPTANCE_CHECKLIST.md` - Quality assurance

---

## TROUBLESHOOTING

**Form not sending emails:**
1. Check `SMTP_APP_PASSWORD` in `.env.local`
2. Verify `DESTINATION_INBOX` in API route
3. Check server logs for SMTP errors

**Client wants different design:**
1. Update Tailwind colors in `RoofingDemoPage.tsx`
2. Modify layout in component JSX
3. Update images in `public/demo-images/niches/`

**Integration with existing site:**
1. Export `RoofingDemoPage` component
2. Import into client's Next.js/React project
3. Update API route path if needed

---

**Time estimate:** 15-30 minutes for basic customization  
**Complexity:** Low (copy-paste updates)  
**Risk:** Low (test form before delivery)
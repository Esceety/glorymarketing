# Glory Marketing Workspace Context (For GPT Implementation Prompts)

This document provides comprehensive context about the Glory Regenerative marketing workspace structure, patterns, and conventions. Use this as reference when generating single-prompt implementations for new funnels.

---

## 1. Repo Overview

### Single Repo, Multiple Funnels
- **Repository Type**: Single monorepo hosting multiple marketing funnels
- **Domain**: gloryregenerativemed.com
- **Deployment**: Vercel
- **Framework**: Next.js 16 with App Router
- **Tech Stack**: TypeScript, Tailwind CSS v4, React 19

### Existing Funnels
Currently live funnels in production:

1. **Stem Cell Therapy Funnel**
   - Landing: `/stem-cell`
   - Book: `/stem-cell/book`
   - Success: `/stem-cell/success`

2. **Weight Loss Funnel**
   - Landing: `/weight-loss`
   - Book: `/weight-loss/book`
   - Success: `/weight-loss/success`

3. **Other Routes** (legacy/secondary)
   - `/book` - Generic booking page
   - `/success` - Generic success page
   - `/voucher-payment` - Payment flow for voucher purchases
   - `/payment-success`, `/payment-cancelled` - Payment status pages

### Where Funnels Live
All marketing funnels are located in:
```
src/app/(marketing)/
├── layout.tsx                    # Shared marketing layout (header/footer)
├── page.tsx                      # Root landing page
├── stem-cell/
│   ├── page.tsx                  # Stem cell landing page
│   ├── book/
│   │   └── page.tsx              # Stem cell booking page
│   └── success/
│       ├── layout.tsx            # Success layout (force dynamic)
│       └── page.tsx              # Stem cell success/thank you page
├── weight-loss/
│   ├── page.tsx                  # Weight loss landing page
│   ├── book/
│   │   └── page.tsx              # Weight loss booking page
│   └── success/
│       ├── layout.tsx            # Success layout (force dynamic)
│       └── page.tsx              # Weight loss success/thank you page
└── ...
```

---

## 2. Funnel Routing Pattern (App Router)

### Standard Folder/File Structure
Each funnel follows this pattern:

```
src/app/(marketing)/<funnel-name>/
├── page.tsx                      # Landing page (main funnel entry)
├── book/
│   └── page.tsx                  # Booking/calendar page
└── success/
    ├── layout.tsx                # Layout with export const dynamic = 'force-dynamic'
    └── page.tsx                  # Success/thank you page (tracks Lead event)
```

### Example: Stem Cell Funnel Directory Tree
```
src/app/(marketing)/stem-cell/
├── page.tsx                      # /stem-cell
├── book/
│   └── page.tsx                  # /stem-cell/book
└── success/
    ├── layout.tsx                # Forces dynamic rendering
    └── page.tsx                  # /stem-cell/success
```

### Page Responsibilities

#### Landing Page (`page.tsx`)
- Hero section with offer/headline
- Benefits and features
- Social proof (testimonials)
- Multiple CTAs (BookingButton components)
- Problem-solution narrative
- Trust indicators

#### Book Page (`/book/page.tsx`)
- Location selection (for stem-cell: MultiStepCalendar)
- Booking form (WeightLossBookingForm or FormModal)
- Reinforces the offer
- May include additional legal notices or information

#### Success Page (`/success/page.tsx`)
- **MUST be a client component** (`'use client'`)
- Confirmation message
- Next steps
- Fires Lead event to Meta Pixel
- May include additional testimonials or resources

---

## 3. Shared Components vs Self-contained Pages

### Mostly Self-Contained with Shared UI Components

**Funnels are page-local** — each funnel page contains its own layout, sections, and copy. However, they reuse shared UI components for consistency.

### Shared Component Directories

```
src/components/
├── analytics/
│   ├── MetaPixel.tsx             # Tracks PageView on route changes
│   └── LeadEvent.tsx             # Fires Lead event (currently unused in favor of inline)
├── layout/
│   ├── SiteHeader.tsx            # Global header
│   ├── SiteFooter.tsx            # Global footer
│   └── PageContainer.tsx         # Wrapper for page content
└── ui/
    ├── BookingButton.tsx         # CTA button that opens FormModal
    ├── FormModal.tsx             # Modal with embedded GoHighLevel form
    ├── MultiStepCalendar.tsx     # Location selector + calendar embed
    ├── WeightLossBookingForm.tsx # Custom booking form for weight loss
    ├── CalendarEmbed.tsx         # Iframe calendar embed
    ├── Testimonials.tsx          # Reusable testimonials grid
    ├── Badge.tsx                 # Small badge/tag component
    ├── Button.tsx                # Generic button component
    ├── Section.tsx               # Section wrapper
    ├── ScrollToTopButton.tsx     # Scroll to top FAB
    └── CustomVideoPlayer.tsx     # Video player component
```

### shadcn/ui Usage
**Not currently used.** All UI components are custom-built with Tailwind CSS.

### Typical Page Structure Pattern

Each funnel page typically follows this internal structure:

```tsx
export default function FunnelLandingPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[600px] ...">
        {/* Background Image */}
        <Image src="/images/..." fill ... />
        
        {/* Content */}
        <div className="relative z-10 ...">
          <h1>...</h1>
          <p>...</p>
          <BookingButton>...</BookingButton>
        </div>
      </section>

      {/* Benefits/Features Section */}
      <section className="py-16 ...">
        {/* Benefits grid or list */}
      </section>

      {/* Social Proof / Testimonials */}
      <section className="py-16 ...">
        <Testimonials />
      </section>

      {/* Final CTA */}
      <section className="py-16 ...">
        <BookingButton>...</BookingButton>
      </section>
    </div>
  );
}
```

---

## 4. Styling & UI Stack

### Tailwind CSS v4
- **Version**: Tailwind CSS v4 (using `@tailwindcss/postcss`)
- **Import**: `@import 'tailwindcss';` in `src/app/globals.css`
- **No tailwind.config.ts** — Tailwind v4 uses inline theme configuration

### CSS Variables & Theme
Located in `src/app/globals.css`:

```css
:root {
  --background: #fafafa;
  --foreground: #1a1a1a;
  --color-primary: #1e40af;           /* Blue */
  --color-primary-foreground: #ffffff;
  --color-secondary: #06b6d4;         /* Cyan */
  --color-accent: #f59e0b;            /* Amber/Orange */
  --color-background: #f5f5f5;
}

@theme inline {
  --color-background: var(--background);
  --color-foreground: var(--foreground);
  --color-primary: var(--color-primary);
  --color-primary-foreground: var(--color-primary-foreground);
  --color-secondary: var(--color-secondary);
  --color-accent: var(--color-accent);
  --font-sans: var(--font-geist-sans);
  --font-mono: var(--font-geist-mono);
}
```

### Brand Colors & Design Conventions

**Core Brand Colors:**
- **Primary Blue**: `#1e40af` (blue-700) or `#078AAD` (teal/cyan accent used in stem-cell)
- **Secondary Cyan**: `#06b6d4` (cyan-500)
- **Accent Orange/Yellow**: `#f59e0b` (amber-500), `#f59e0b` (yellow-400)
- **Background**: Light gray (`#fafafa`, `#f5f5f5`)

**Funnel-Specific Color Palettes:**
- **Stem Cell**: Cyan/teal (`#078AAD`), yellow accents, dark overlays
- **Weight Loss**: Purple-pink gradient (`from-purple-600 via-pink-600 to-rose-500`)

**Typography:**
- **Fonts**: Geist Sans (primary), Geist Mono (monospace)
- **Headings**: Bold (font-weight: 700), tight line-height (1.2), negative letter-spacing
- **Body**: System fonts fallback, line-height 1.6

**Do NOT Change:**
- Font families (Geist Sans/Mono)
- Core CSS variable names
- Global body/heading styles
- Background/foreground contrast ratios

---

## 5. Analytics / Tracking (CRITICAL)

### Meta Pixel Implementation

#### Global Injection (Root Layout)
Located in `src/app/layout.tsx`:

```tsx
{/* Meta Pixel Base Code */}
<Script
  id="meta-pixel-base"
  strategy="afterInteractive"
  dangerouslySetInnerHTML={{
    __html: `
      !function(f,b,e,v,n,t,s)
      {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
      n.callMethod.apply(n,arguments):n.queue.push(arguments)};
      if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
      n.queue=[];t=b.createElement(e);t.async=!0;
      t.src=v;s=b.getElementsByTagName(e)[0];
      s.parentNode.insertBefore(t,s)}(window, document,'script',
      'https://connect.facebook.net/en_US/fbevents.js');
      fbq('init', '1132309318316660');
      fbq('track', 'PageView');
    `,
  }}
/>
```

**Pixel ID**: `1132309318316660` (hardcoded in layout.tsx)

#### Client-Side PageView Tracking
Located in `src/components/analytics/MetaPixel.tsx`:

```tsx
'use client';

import { useEffect } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';

export function MetaPixel() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (window.fbq) {
      const testEventCode = searchParams?.get('test_event_code');
      
      if (testEventCode) {
        window.fbq('track', 'PageView', {}, { 
          eventID: `pageview_${Date.now()}`, 
          test_event_code: testEventCode 
        });
      } else {
        window.fbq('track', 'PageView');
      }
    }
  }, [pathname, searchParams]);

  return null;
}
```

**Mounted in**: Root layout (`src/app/layout.tsx`) wrapped in `<Suspense>`

### Event Tracking Pattern

#### Lead Event (Success Pages)
Fired when user lands on `/success` page. Example from `stem-cell/success/page.tsx`:

```tsx
'use client';

import { useEffect, useRef } from 'react';
import { useSearchParams } from 'next/navigation';

export default function StemCellSuccessPage() {
  const hasTrackedRef = useRef(false);
  const searchParams = useSearchParams();

  useEffect(() => {
    if (!hasTrackedRef.current && typeof window !== 'undefined' && window.fbq) {
      const testEventCode = searchParams?.get('test_event_code');
      
      if (testEventCode) {
        window.fbq('track', 'Lead', {
          content_name: 'Stem Cell Therapy',
          content_category: 'Stem Cell',
        }, { 
          eventID: `lead_stemcell_${Date.now()}`,
          test_event_code: testEventCode 
        });
      } else {
        window.fbq('track', 'Lead', {
          content_name: 'Stem Cell Therapy',
          content_category: 'Stem Cell',
        });
      }
      hasTrackedRef.current = true;
    }
  }, [searchParams]);

  return (
    // ... page content
  );
}
```

**Key Points:**
- Success pages MUST be client components (`'use client'`)
- Use `useRef` to prevent duplicate Lead events
- Support `test_event_code` URL parameter for Meta Test Events tool
- Include descriptive `content_name` and `content_category` parameters
- Generate unique `eventID` for deduplication

### Other Events
- **PageView**: Tracked automatically on every route change via MetaPixel component
- **ViewContent**: Not currently implemented
- **CompleteRegistration**: Not currently implemented
- **Purchase**: Used for Stripe payments (in webhook handler)

### UTM Preservation

**Current Implementation**: Basic URLSearchParams usage, no dedicated UTM preservation system.

#### How It Works:
1. **FormModal** (`src/components/ui/FormModal.tsx`):
   - Captures form data from GoHighLevel iframe messages
   - Stores form data in `localStorage` as `userFormData`
   - Preserves current URL search params when navigating:
     ```tsx
     const currentParams = new URLSearchParams(window.location.search);
     const queryString = currentParams.toString();
     router.push(`/stem-cell/book${queryString ? `?${queryString}` : ''}`);
     ```

2. **MultiStepCalendar** (`src/components/ui/MultiStepCalendar.tsx`):
   - Reads URL params and `localStorage` to pre-fill calendar
   - Passes user data to calendar iframe via URL params
   - Does NOT explicitly handle UTM parameters

3. **Success Pages**:
   - Read `test_event_code` from `searchParams` for testing
   - No explicit UTM handling

**Limitation**: UTM parameters are NOT automatically preserved across funnel steps. This would need to be implemented for comprehensive tracking.

---

## 6. Environment Variables / Config

### Required Environment Variables

Based on code references, the following environment variables are used:

#### Stripe (Payment Processing)
- `STRIPE_SECRET_KEY` - Stripe API secret key
- `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY` - Stripe publishable key (client-side)
- `STRIPE_WEBHOOK_SECRET` - Stripe webhook signing secret

#### GoHighLevel (CRM Integration)
- `GHL_INBOUND_WEBHOOK_URL` - GoHighLevel webhook endpoint for form submissions

#### Site Configuration
- `NEXT_PUBLIC_SITE_URL` - Base URL for the site (e.g., https://gloryregenerativemed.com)

#### Vercel Environment
- `VERCEL` - Boolean, set by Vercel automatically
- `VERCEL_ENV` - Environment name (production, preview, development)
- `NODE_ENV` - Node environment (development, production)

### Where Environment Variables Are Referenced

- `src/config/payment.ts` - Validates and exports Stripe config
- `src/lib/stripe.ts` - Initializes Stripe client
- `src/lib/idempotency.ts` - Uses `process.env.VERCEL` for cache directory
- `src/pages/api/stripe/webhook.ts` - Stripe webhook handler
- `src/app/api/stripe/create-checkout-session/route.ts` - Checkout session creation

### Meta Pixel ID
**HARDCODED** in `src/app/layout.tsx` as `1132309318316660`. 

_Recommendation: Extract to `NEXT_PUBLIC_META_PIXEL_ID` for flexibility._

### Config Files
- `src/config/site.ts` - Site metadata and navigation config
  ```typescript
  export const siteConfig = {
    name: 'Glory Regenerative',
    description: '...',
    mainNav: [
      { label: 'Home', href: '/' },
      { label: 'Book', href: '/book' },
    ],
  };
  ```

- `src/config/payment.ts` - Payment configuration and environment validation

---

## 7. Existing Patterns We Must Mirror

### Metadata Pattern

Each page exports a `metadata` constant for SEO:

```tsx
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Stem Cell Therapy Tampa - 40 Free Consultation Vouchers | Glory Regenerative',
  description: 'Glory Regenerative Center is offering 40 free stem cell therapy consultation vouchers...',
};

export default function StemCellPage() {
  // ...
}
```

**Pattern**: 
- Title: `[Treatment] [Location] - [Offer] | Glory Regenerative`
- Description: Brief summary of offer and services

### Image Handling Pattern

#### Storage Location
All images stored in: `public/images/`

Examples:
- `public/images/stem-cell-therapy-hero.jpg`
- `public/images/weight-loss-hero.jpg`

#### Usage with Next.js Image Component

```tsx
import Image from 'next/image';

<Image
  src="/images/stem-cell-therapy-hero.jpg"
  alt="Glory Regenerative Center - Stem Cell Therapy"
  fill
  className="object-cover"
  priority
  quality={85}
  sizes="100vw"
  placeholder="blur"
  blurDataURL="data:image/jpeg;base64,..."
  style={{ objectPosition: 'center center' }}
/>
```

**Key Props:**
- `fill` for full-container images (position: relative parent required)
- `priority` for above-the-fold hero images
- `quality={85}` for balance of quality/performance
- `sizes="100vw"` for full-width responsive images
- `placeholder="blur"` with `blurDataURL` for loading placeholder

### Button/Link Components

#### BookingButton Component
Opens a modal with GoHighLevel form.

**Usage:**
```tsx
import { BookingButton } from '@/components/ui/BookingButton';

<BookingButton 
  className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-xl ..."
  formId="unuDEJBs8DPU2COLwKLT"
>
  🎁 Claim Your $100 Voucher →
</BookingButton>
```

**Form IDs:**
- `ouANN3PSeW0qb7AAdVpr` - Preferred Lead Optin Form A
- `unuDEJBs8DPU2COLwKLT` - Preferred Lead Optin Form B (stem-cell)
- `wz9f6DHcnCdzO5C7vX0x` - Weight Loss Lead Optin Form

#### WhatsApp Links
Not currently used in existing funnels, but can be implemented as:

```tsx
<a 
  href="https://wa.me/1234567890?text=Hello%2C%20I%27m%20interested%20in..." 
  target="_blank" 
  rel="noopener noreferrer"
  className="inline-flex items-center ..."
>
  <svg>...</svg> {/* WhatsApp icon */}
  Chat on WhatsApp
</a>
```

---

## 8. Constraints for Nigeria Funnel (Phase 1)

### Content Restrictions

#### ❌ NOT ALLOWED (Phase 1):
- **No physician spotlighting** - Do not feature individual doctors or their credentials
- **No procedure photos** - No images of medical procedures, treatments, or clinical settings
- **No video** - No video content of any kind
- **No specific outcome claims** - Avoid specific medical claims or guarantees

#### ✅ ALLOWED:
- **Testimonials** - Can include as placeholders (may be removed later)
- **Generic regenerative medicine imagery** - Nature, health, wellness themes
- **Facility exterior photos** - If generic and non-clinical
- **Educational content** - General information about regenerative medicine

### Primary CTA Strategy

#### WhatsApp CTAs (Primary)
- **Abuja number**: To be provided
- **Lagos number**: To be provided
- Format: `https://wa.me/[country_code][number]?text=[prefilled_message]`

#### Optional: Simple Booking Form
- Can include a basic contact form (non-calendar)
- Capture: Name, Phone, Email, Location Preference
- Submit to GoHighLevel webhook

### Deployment Approach
- **Same domain**: gloryregenerativemed.com
- **Same repo**: Add new route in `src/app/(marketing)/nigeria/`
- **Same infrastructure**: Vercel deployment

---

## 9. Implementation Hooks for Copilot

### Route Naming Conventions

**Preferred pattern**: Use lowercase, hyphenated route names that describe the service or location.

Examples:
- `/nigeria` - Main Nigeria landing page
- `/regenerative` - Generic regenerative medicine funnel
- `/stem-cell-international` - International stem cell funnel
- `/abuja`, `/lagos` - Location-specific funnels

**Directory structure:**
```
src/app/(marketing)/nigeria/
├── page.tsx
├── book/
│   └── page.tsx
└── success/
    ├── layout.tsx
    └── page.tsx
```

### Linting & Type Checking

**Commands to run after changes:**

```bash
# Lint check
npm run lint

# Format check
npm run format

# Format fix
npm run format:write

# Type check (via build)
npm run build
```

**ESLint config**: `eslint.config.mjs` (flat config format)
**Prettier config**: Embedded in package.json or `.prettierrc`

### Local Development

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Open browser
# http://localhost:3000
```

**Dev server features:**
- Fast Refresh
- Auto-reload on file changes
- TypeScript error overlay
- API routes available

### Testing & Validation Checklist

After implementing a new funnel:

1. **Visual Check**:
   - [ ] Landing page renders correctly
   - [ ] Images load properly
   - [ ] CTAs are visible and styled correctly
   - [ ] Responsive on mobile, tablet, desktop

2. **Navigation**:
   - [ ] Links to `/book` page work
   - [ ] Links to `/success` page work (may need to trigger via form submission)
   - [ ] Header/footer navigation intact

3. **Analytics**:
   - [ ] PageView fires on landing page
   - [ ] Lead event fires on success page
   - [ ] test_event_code parameter is respected
   - [ ] Meta Events Manager shows events

4. **Meta Testing**:
   - Visit with `?test_event_code=TEST12345`
   - Check Meta Events Manager Test Events tab

5. **Build Check**:
   ```bash
   npm run build
   ```
   - [ ] No TypeScript errors
   - [ ] No ESLint errors
   - [ ] Build completes successfully

6. **Metadata**:
   - [ ] Page title appears correctly in browser tab
   - [ ] Description is appropriate for SEO

---

## 10. Quick Reference: File Locations

### Key Files to Reference When Building New Funnels

| Purpose | File Path | Notes |
|---------|-----------|-------|
| **Funnel Landing Example** | `src/app/(marketing)/stem-cell/page.tsx` | 602 lines, comprehensive hero/benefits/testimonials pattern |
| **Funnel Book Example** | `src/app/(marketing)/stem-cell/book/page.tsx` | Location selector + calendar |
| **Funnel Success Example** | `src/app/(marketing)/stem-cell/success/page.tsx` | Client component with Lead event |
| **Weight Loss (Simpler)** | `src/app/(marketing)/weight-loss/page.tsx` | Alternative layout style, gradient-heavy |
| **BookingButton Component** | `src/components/ui/BookingButton.tsx` | Opens FormModal with GHL form |
| **FormModal Component** | `src/components/ui/FormModal.tsx` | Embeds GoHighLevel form iframe |
| **MultiStepCalendar** | `src/components/ui/MultiStepCalendar.tsx` | Location picker + calendar embed |
| **Testimonials Component** | `src/components/ui/Testimonials.tsx` | Reusable testimonial grid |
| **MetaPixel Tracker** | `src/components/analytics/MetaPixel.tsx` | PageView tracking component |
| **Root Layout** | `src/app/layout.tsx` | Global scripts, Meta Pixel init, fonts |
| **Marketing Layout** | `src/app/(marketing)/layout.tsx` | Header/Footer wrapper for funnels |
| **Global Styles** | `src/app/globals.css` | CSS variables, Tailwind import, theme |
| **Site Config** | `src/config/site.ts` | Site name, description, nav items |

---

## 11. Additional Context

### GoHighLevel Form Integration

**How Forms Work:**
1. BookingButton opens FormModal
2. FormModal embeds GoHighLevel form via iframe
3. User submits form → data sent to GHL
4. GHL iframe posts message to parent window
5. FormModal captures message, stores data in localStorage
6. User redirected to `/book` page with data preserved
7. Booking page pre-fills calendar with user data

### Calendar Booking Flow (Stem Cell Example)

1. User clicks BookingButton → FormModal opens
2. User fills GHL form → data stored in localStorage
3. User redirected to `/stem-cell/book`
4. MultiStepCalendar component:
   - Step 1: Select location (Tampa, Lakeland, New Port Richey)
   - Step 2: Calendar iframe with user data pre-filled
5. User books appointment
6. Redirect to `/stem-cell/success`
7. Success page fires Lead event to Meta Pixel

### Weight Loss Booking Flow

1. User clicks BookingButton → FormModal opens
2. User fills GHL form
3. OR: User directly fills WeightLossBookingForm on `/weight-loss/book` page
4. Form submits to GHL webhook
5. Redirect to `/weight-loss/success`
6. Success page fires Lead event

---

## 12. Unknown/TBD Items

The following items are not clearly defined in the current codebase:

1. **UTM Parameter Specification**: Which UTM parameters are prioritized? (utm_source, utm_medium, utm_campaign, utm_content, utm_term?)
2. **UTM Preservation System**: No dedicated system exists — would need to be built (useEffect + Context/localStorage pattern)
3. **Nigeria-Specific Details**:
   - WhatsApp phone numbers (Abuja + Lagos)
   - Preferred funnel route name (e.g., `/nigeria`, `/nigeria-regenerative`, etc.)
   - Specific hero imagery preferences
   - Copy/messaging tone (formal vs. conversational)
   - Currency/pricing display (Naira vs. USD)?
4. **Google Analytics**: Only Google Ads (AW-1059047449) is configured; no GA4 tracking
5. **Conversion API**: No server-side Meta Conversion API integration detected
6. **A/B Testing**: No A/B testing framework in place
7. **GoHighLevel Webhook Endpoints**: Specific webhook URLs not documented in code (env vars)

---

## 13. Implementation Prompt Template

When creating a new funnel, provide the following details to GPT:

```
Create a new [TREATMENT/SERVICE] funnel for Glory Regenerative's website.

FUNNEL DETAILS:
- Route name: /[route-name]
- Target audience: [description]
- Primary offer: [offer description]
- CTA strategy: [BookingButton + WhatsApp / other]

CONTENT REQUIREMENTS:
- Headline: [main headline]
- Subheadline: [supporting headline]
- Benefits: [3-5 key benefits]
- Social proof: [testimonials, yes/no]
- Imagery: [description of hero image style]

CONSTRAINTS:
- [Any specific constraints, e.g., no physicians, no video]

TECHNICAL:
- Follow existing patterns from /stem-cell and /weight-loss funnels
- Mirror metadata, image handling, and component usage patterns
- Use BookingButton component with formId: [form-id]
- Success page must fire Lead event with content_name and content_category
- Ensure responsive design with Tailwind CSS
- Hero section minimum height: 600px
- Include Testimonials component if applicable

FILES TO CREATE:
1. src/app/(marketing)/[route-name]/page.tsx
2. src/app/(marketing)/[route-name]/book/page.tsx
3. src/app/(marketing)/[route-name]/success/layout.tsx
4. src/app/(marketing)/[route-name]/success/page.tsx
5. (Optional) public/images/[route-name]-hero.jpg

ANALYTICS:
- PageView: Auto-tracked by MetaPixel component
- Lead: Fire on success page with test_event_code support

Implement the complete funnel with all three pages, following the exact patterns documented in README-GPT-WORKSPACE-CONTEXT.md.
```

---

## 14. Summary for Quick Copy/Paste Context

**This is a Next.js 16 App Router monorepo** hosting multiple marketing funnels on `gloryregenerativemed.com`, deployed via Vercel. Funnels live in `src/app/(marketing)/[funnel-name]/` with standard routes: `/`, `/book`, `/success`. Styling uses **Tailwind CSS v4** with custom components (no shadcn/ui). **Meta Pixel** is injected globally in root layout (ID: `1132309318316660`), with PageView tracked on route changes and Lead events fired on success pages (client components with `useRef` to prevent duplicates). Images live in `public/images/` and use `next/image` with `fill`, `priority`, and `placeholder="blur"` props. CTAs use `BookingButton` component opening `FormModal` with GoHighLevel forms. Metadata follows pattern: `export const metadata: Metadata = { title: '...', description: '...' }`. Run `npm run dev` for local dev, `npm run lint` and `npm run build` to validate changes. For Nigeria funnel: **no physician spotlighting, no procedure photos, no video**. Primary CTA: **WhatsApp (Abuja + Lagos numbers TBD)**. Testimonials allowed as placeholders.

---

**END OF DOCUMENT**

_Last Updated: 2026-02-23_  
_Created for: GPT-4 Context for Nigeria Funnel Implementation_

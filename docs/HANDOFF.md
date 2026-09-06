# HANDOFF — glorymarketing (Glory Regenerative funnels)

Written 2026-09-06 for a fresh agent session. Light handoff: this repo was
only touched once recently. `README.md` (stack/scripts) and
`README-GPT-WORKSPACE-CONTEXT.md` (funnel context) are accurate.

## 1. What this is, on one screen

The **paid-ads marketing funnels** for Glory Regenerative (Dr. David
Ikudayisi's US practice — the main site and SEO engine live in
`gloryregenerative-platform`). Next 16 App Router on Vercel project
`glory-marketing`. Route groups:

- `(marketing)`: `/stem-cell`, `/weight-loss` landing pages; `/book`;
  `/voucher-payment` → Stripe Checkout → `/payment-success` /
  `/payment-cancelled` / `/success`; `/privacy-policy-terms-conditions`.
- `(nigeria)`: `/regenerative-nigeria` funnel with its own Meta Pixel
  (`2567808313570758`) and GA tag (`G-XNJH08H8XZ`).
- `(resources)`: `/marketing-resources`; `/unsubscribe`; `/ads-preview`.
- `api/stripe`: webhook (`PAYMENT_IMPLEMENTATION.md`,
  `STRIPE_WEBHOOK_TROUBLESHOOTING.md`).
- `brochure-ng/`: a separate paginated brochure app for Nigeria.

DNS record files in the root (`vercel-a-record.json`,
`comm-subdomain-records.json`, `dmarc-record.json`) document the records
applied for the domain and the `comm.` mail subdomain.

## 2. Code map

`src/app/(marketing|nigeria|resources)/*` pages;
`src/app/api/stripe/create-checkout-session` (Checkout; env
`STRIPE_SECRET_KEY`, `STRIPE_PRICE_ID`, `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY`;
webhook verification per `STRIPE_WEBHOOK_SECRET` / `STRIPE_SIGNATURE_CHECK` —
see `PAYMENT_IMPLEMENTATION.md` for where it lives, there is also a legacy
`src/pages` tree); `src/{components,config,lib}`; `vercel.json`
(headers/redirects). Grep `STRIPE_`, `unsubscribe`, the pixel ids.

## 3. Infrastructure (names and paths, never values)

GitHub `Esceety/glorymarketing`; Vercel `glory-marketing`
(`prj_wk0mCamfYw93WabHTUkTwtDjqigU`, team `esceety-216a0bfa`), git
auto-deploy; Stripe keys + webhook secret on Vercel only (local
`.env.local` holds just the Vercel OIDC token). Verify: `npm run lint`,
`npm run format`, `npx next build`.

## 4. State of play (as of 2026-09-06)

Last commit `3bcc165` (2026-08-14) removed the standalone ads-preview apps
and a stray `nul` file. Nothing else since March (Nigeria pixel/GA). Not
verified since: whether the Stripe webhook still receives events (check
the Stripe dashboard's webhook log), and whether the funnels are still in
active ad rotation.

Open: does the Nigeria funnel move to `glorywellnessng-website` once that
site goes live (it has the same audience and stronger SEO), leaving this
repo US-only?

Next: (1) confirm webhook health; (2) decide the Nigeria funnel's home;
(3) fold `brochure-ng` into the NG site or archive it.

## 5. Working rules

Same compliance bar as the Glory sites (no cure/guarantee claims; stem
cell treatments described as investigational). Payments only via Stripe
Checkout — never handle card data. Secrets by path.

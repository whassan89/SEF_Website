# SEF Website — Project Constitution
# Safia Empowerment Foundation (sefngo.com)

## Project Identity
- **Organization:** Safia Empowerment Foundation (SEF)
- **Domain:** sefngo.com
- **Purpose:** NGO website — awareness, charity collection, program information
- **Legal:** Licensed by SECP under Section 42, Companies Act 2017 | Punjab Charity Commission registered
- **SDD Reference:** SEF-Website-SDD.md (in parent directory)

## Architecture Principles
- All pages use Static Site Generation (SSG) — pre-built at deploy time, served from Vercel CDN
- CMS content (Sanity) is fetched at build time via GROQ queries; on-demand revalidation via webhooks
- Donation flow uses external payment gateway iframes/redirects — never handle raw card data in this codebase
- All components are mobile-first; desktop styles added as Tailwind responsive prefixes (md:, lg:)
- Component files stay under 150 lines; split into sub-components if exceeded
- Sanity Studio lives at `/studio` route (embedded via next-sanity)

## Technology Constraints
- **Framework:** Next.js 15 (App Router) — latest stable
- **Language:** TypeScript strict mode — `"strict": true` in tsconfig; no `any` types
- **Styling:** Tailwind CSS v4 — utility-first; no custom CSS files unless absolutely necessary
- **CMS:** Sanity v3 — all content managed via Sanity Studio
- **Images:** `next/image` for ALL images — never raw `<img>` tags
- **Fonts:** `next/font` — Inter as primary font
- **Icons:** lucide-react — consistent icon library
- **Email:** Resend API for transactional emails (contact form, donation receipts)
- **Deployment:** Vercel — free tier

## File & Folder Structure
```
sef-website/
├── app/                        # Next.js App Router pages
│   ├── (site)/                 # Public-facing site layout group
│   │   ├── layout.tsx          # Navbar + Footer wrapper
│   │   ├── page.tsx            # Homepage
│   │   ├── about/page.tsx
│   │   ├── programs/
│   │   ├── donate/page.tsx
│   │   ├── gallery/page.tsx
│   │   ├── news/
│   │   ├── volunteer/page.tsx
│   │   ├── contact/page.tsx
│   │   └── transparency/page.tsx
│   ├── studio/[[...tool]]/     # Sanity Studio (embedded)
│   └── api/                    # API routes (contact form, webhooks)
├── components/
│   ├── layout/                 # Navbar, Footer, MobileDrawer
│   ├── home/                   # Homepage sections
│   ├── shared/                 # Reusable: Button, Card, Badge, etc.
│   └── sanity/                 # Sanity image, portable text renderer
├── sanity/
│   ├── schemas/                # All Sanity document type schemas
│   ├── lib/                    # Sanity client, image builder, GROQ queries
│   └── sanity.config.ts        # Sanity Studio configuration
├── lib/
│   └── types.ts                # Shared TypeScript interfaces
└── public/
    └── images/                 # Static assets (logo, badges)
```

## Code Quality Standards
- No function or component longer than 50 lines — split if exceeded
- All React components have explicit TypeScript prop interfaces
- All `async` server components handle errors gracefully with fallback UI
- Minimum `alt` text on every `next/image` — meaningful, not empty strings
- WCAG 2.1 AA accessibility — all interactive elements keyboard accessible
- No hardcoded colors — always use Tailwind design tokens defined below

## Design Tokens (Tailwind)
- **Primary:** `green-800` (#1B5E20) — headers, nav, primary buttons
- **Accent:** `amber-500` (#F59E0B) — Donate Now CTAs, highlights
- **Background:** `white` / `gray-50` — alternating sections
- **Text:** `gray-900` (primary) / `gray-500` (secondary)
- **Success:** `green-600`
- **Error:** `red-700`

## Security Requirements
- No API keys, secrets, or credentials in committed code — `.env.local` only
- `.env.local` is in `.gitignore` — never commit it
- Content Security Policy headers in `next.config.ts`
- All external links: `rel="noopener noreferrer"`
- Donation page enforces HTTPS (Vercel handles this automatically)
- No raw user input rendered as HTML — use React's default escaping
- Contact/volunteer form submissions sanitized before sending via Resend

## Workflow Rules
- When a spec requirement is ambiguous, ask ONE clarifying question before implementing
- Commit after each completed task: `feat(scope): description` or `fix(scope): description`
- Every page must pass Lighthouse > 90 (Performance, Accessibility, SEO, Best Practices)
- Propose two options for major UI decisions and wait for approval
- Flag any deviation from this constitution explicitly before proceeding

## Environment Variables Required
```
# Sanity
NEXT_PUBLIC_SANITY_PROJECT_ID=
NEXT_PUBLIC_SANITY_DATASET=production
SANITY_API_TOKEN=

# Resend (email)
RESEND_API_KEY=

# Payment (add when accounts ready)
PAYPRO_MERCHANT_ID=
PAYPRO_SECRET_KEY=
```

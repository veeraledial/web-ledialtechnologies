# LaDial Technologies — B2B LED Display Website Architecture

> **Website Type:** Lead-generation + Brand Authority Platform  
> **Stack:** Next.js 16 (App Router) • React 19 • Tailwind CSS 4 • TypeScript  
> **Primary Goals:** SEO • Lead Capture • Scalability • Professional Branding

---

## 1. Business Context & Website Goals

| Goal | Implementation |
|------|----------------|
| **Showcase products** | Dedicated product catalog with categories, specs, galleries |
| **Show industries/applications** | Solutions section by vertical (Retail, Broadcast, etc.) |
| **Build brand credibility** | About Us, certifications, case studies, leadership |
| **Generate leads** | Strategic enquiry forms (product, quote, contact, support) |
| **Support distributors** | Global presence, partner portal, enquiry routing |
| **Rank on Google** | Semantic URLs, structured data, and technical SEO |

---

## 2. Complete Sitemap & URL Structure

```
/                           → Home
/about                      → About Us (landing)
/about/company-overview     → Company Overview
/about/vision-mission       → Vision & Mission
/about/facilities           → Manufacturing Facilities
/about/leadership           → Leadership Team
/about/global-presence      → Global Presence
/about/certifications       → Certifications
/about/careers              → Careers

/products                   → Products hub (all categories)
/products/indoor-led-displays
/products/outdoor-led-displays
/products/standee-a-type-displays
/products/standee-i-type-displays
/products/cctv-camera-security

/solutions                  → Solutions hub (all industries)
/solutions/retail
/solutions/control-rooms
/solutions/broadcast-studios
/solutions/airports-transportation
/solutions/corporate
/solutions/events-entertainment
/solutions/education
/solutions/healthcare

/projects                   → Case studies hub
/projects/[slug]            → Individual case study (e.g. /projects/dubai-airport-terminal-3)

/contact                    → Contact & enquiry hub
/support                    → Support / technical enquiry
/distributors               → Distributor enquiry & map
```

---

## 3. Technical Architecture — Folder Structure

```
app/
├── (marketing)/                    # Marketing layout group
│   ├── layout.tsx                 # Shared header, footer, CTA
│   ├── page.tsx                   # Home
│   ├── about/
│   │   ├── page.tsx               # About hub
│   │   ├── company-overview/page.tsx
│   │   ├── vision-mission/page.tsx
│   │   ├── facilities/page.tsx
│   │   ├── leadership/page.tsx
│   │   ├── global-presence/page.tsx
│   │   ├── certifications/page.tsx
│   │   └── careers/page.tsx
│   ├── products/
│   │   ├── page.tsx               # Products hub
│   │   ├── [category]/page.tsx    # e.g. indoor-led-displays
│   │   └── [category]/[slug]/page.tsx  # Individual product variant (optional)
│   ├── solutions/
│   │   ├── page.tsx               # Solutions hub
│   │   └── [industry]/page.tsx    # e.g. retail
│   ├── projects/
│   │   ├── page.tsx               # Case studies listing
│   │   └── [slug]/page.tsx        # Case study detail
│   └── (blog removed)
│
├── (contact)/                     # Contact layout (may share header/footer)
│   ├── contact/page.tsx
│   ├── support/page.tsx
│   └── distributors/page.tsx
│
├── api/                           # API routes
│   ├── enquires/route.ts          # Lead form submissions
│   ├── newsletter/route.ts        # Newsletter signup
│   └── support/route.ts           # Support form
│
├── layout.tsx                     # Root layout (fonts, meta)
├── globals.css
└── not-found.tsx

components/
├── layout/
│   ├── Header.tsx
│   ├── Footer.tsx
│   ├── MobileNav.tsx
│   └── CTABanner.tsx
├── home/
│   ├── Hero.tsx
│   ├── FeaturedProducts.tsx
│   ├── IndustrySolutions.tsx
│   ├── WhyChooseUs.tsx
│   ├── Certifications.tsx
│   ├── CaseStudiesPreview.tsx
│   └── CTA.tsx
├── products/
│   ├── ProductCard.tsx
│   ├── ProductHero.tsx
│   ├── ProductSpecs.tsx
│   ├── ProductGallery.tsx
│   ├── ProductEnquiryForm.tsx
│   └── BrochureDownload.tsx
├── solutions/
│   ├── SolutionHero.tsx
│   ├── ProblemSolution.tsx
│   └── IndustryCases.tsx
├── projects/
│   ├── ProjectCard.tsx
│   ├── ProjectHero.tsx
│   ├── ProjectGallery.tsx
│   └── ProjectSpecs.tsx
├── (blog removed)
├── forms/
│   ├── EnquiryForm.tsx
│   ├── ContactForm.tsx
│   ├── SupportForm.tsx
│   └── NewsletterForm.tsx
└── ui/
    ├── Button.tsx
    ├── Input.tsx
    ├── Select.tsx
    └── Modal.tsx

lib/
├── data/
│   ├── products.ts
│   ├── solutions.ts
│   ├── projects.ts
│   └── (blog removed)
├── utils/
│   ├── seo.ts
│   └── slugify.ts
└── validations/
    └── enquiry.ts

content/                            # MDX or CMS content (if used)
├── products/
├── solutions/
├── projects/
└── (blog removed)

types/
├── product.ts
├── project.ts
├── enquiry.ts
└── nav.ts

public/
├── images/
│   ├── products/
│   ├── solutions/
│   ├── projects/
│   ├── about/
│   └── home/
├── documents/
│   └── brochures/
└── favicon.ico
```

---

## 4. Data Models & Content Structure

### Product
```typescript
interface Product {
  id: string;
  slug: string;
  category: 'indoor-led-displays' | 'outdoor-led-displays' | 'standee-a-type-displays' | 'standee-i-type-displays' | 'cctv-camera-security';
  name: string;
  tagline: string;
  overview: string;
  features: string[];
  specifications: { label: string; value: string }[];
  applications: string[];
  images: string[];
  videoUrl?: string;
  brochureUrl?: string;
  metaTitle: string;
  metaDescription: string;
  ogImage?: string;
}
```

### Solution (Industry)
```typescript
interface Solution {
  id: string;
  slug: string;
  industry: string;
  title: string;
  problem: string;
  solution: string;
  caseStudyIds: string[];
  images: string[];
  metaTitle: string;
  metaDescription: string;
}
```

### Project (Case Study)
```typescript
interface Project {
  id: string;
  slug: string;
  clientName: string;
  location: string;
  productInstalled: string;
  screenSize?: string;
  specs?: string;
  challenge: string;
  result: string;
  images: string[];
  date: string;
  metaTitle: string;
  metaDescription: string;
}
```

### Enquiry
```typescript
interface Enquiry {
  type: 'product' | 'quote' | 'contact' | 'support' | 'distributor';
  name: string;
  email: string;
  company?: string;
  phone?: string;
  product?: string;
  message: string;
  sourceUrl?: string;
  createdAt: string;
}
```

---

## 5. SEO Architecture

### URL Conventions
- **Lowercase, hyphenated:** `/products/indoor-led-displays`
- **Semantic:** Use product/industry names, not IDs
- **Canonical:** Self-referencing canonical on every page

### Metadata Strategy
```typescript
// Every page exports:
export const metadata = {
  title: 'Indoor LED Displays | LaDial Technologies',
  description: '...',
  openGraph: { title, description, images, url },
  alternates: { canonical: 'https://...' },
  robots: { index: true, follow: true },
};
```

### Structured Data (JSON-LD)
- **Organization** (sitewide)
- **Product** (product pages)
- **Article** (optional content module)
- **LocalBusiness** (contact)
- **BreadcrumbList** (all pages)

### Sitemap
- `/sitemap.xml` — auto-generated from routes + dynamic content
- `/robots.txt` — allow all, link sitemap

---

## 6. Lead Capture Strategy

| Form Type | Location | Fields | Action |
|-----------|----------|--------|--------|
| **Product Enquiry** | Product pages | Name, Email, Company, Phone, Product (pre-filled), Message | → API → CRM/Email |
| **Quote Request** | Home CTA, footer | Name, Email, Company, Phone, Product interest, Message | → API → Sales |
| **Contact** | Contact page | Name, Email, Subject, Message | → API → General inbox |
| **Support** | Support page | Name, Email, Product, Issue type, Message | → API → Support team |
| **Distributor** | Distributors page | Company, Contact, Region, Message | → API → Partnerships |
| **Newsletter** | Footer | Email | → API → Newsletter platform |

### API Flow
```
Form Submit → Server Action or API Route
  → Validation (Zod)
  → Spam check (optional: honeypot, reCAPTCHA)
  → Store / Send (email, CRM, database)
  → Response (success/error)
```

---

## 7. Page-Level Specifications

### Home
| Section | Component | Content |
|---------|-----------|---------|
| Hero | `Hero` | Full-width LED visual, headline, CTA (Get Quote) |
| Intro | `AboutIntro` | 2–3 sentences, link to About |
| Featured Products | `FeaturedProducts` | 4–6 product cards, link to /products |
| Industry Solutions | `IndustrySolutions` | 4–8 industry tiles, link to /solutions |
| Why Choose Us | `WhyChooseUs` | 4–6 USPs with icons |
| Certifications | `Certifications` | Logos + short copy |
| Case Studies | `CaseStudiesPreview` | 3 latest projects |
| CTA | `CTA` | Get Quote / Contact Us |
| Footer | `Footer` | Links, newsletter, contact, social |

### Product Page
| Section | Component | Content |
|---------|-----------|---------|
| Hero | `ProductHero` | Product image, name, tagline |
| Overview | Rich text | Product description |
| Features | `ProductSpecs` or list | Key features |
| Specs | Table | Technical specifications |
| Applications | Grid | Use cases |
| Gallery | `ProductGallery` | Images + video |
| Brochure | `BrochureDownload` | PDF download CTA |
| Enquiry | `ProductEnquiryForm` | Form with product pre-filled |

### Solution Page
| Section | Component | Content |
|---------|-----------|---------|
| Hero | `SolutionHero` | Industry image, title |
| Problem | Copy | Industry pain points |
| Solution | Copy + images | How LED solves it |
| Case Studies | `IndustryCases` | Related projects |
| CTA | Enquiry form | Contact for this solution |

### Project (Case Study)
| Section | Component | Content |
|---------|-----------|---------|
| Hero | `ProjectHero` | Main image, client, location |
| Overview | Copy | Client, product, specs |
| Challenge | Copy | Project challenges |
| Result | Copy + gallery | Outcome, images |
| Specs | Table/list | Screen size, product details |
| CTA | Link to products / contact | |

---

## 8. Scalability Considerations

- **Content:** Start with static data (`lib/data/`), migrate to CMS (Sanity, Contentful) or MDX when content grows
- **Images:** Use Next.js `Image` with proper sizing; consider CDN for media
- **Forms:** Use server actions or API routes; integrate with Resend, SendGrid, or CRM webhooks
- **i18n:** Add `[lang]` segment for future multi-language support
- **Analytics:** Google Analytics 4, search console, conversion tracking on forms

---

## 9. Implementation Phases

### Phase 1 — Foundation
- [ ] Layout (Header, Footer, navigation)
- [ ] Home page (all sections)
- [ ] Global styles, typography, design tokens
- [ ] Basic SEO (metadata, sitemap)

### Phase 2 — Products & Solutions
- [ ] Products hub + category pages
- [ ] Solutions hub + industry pages
- [ ] Shared components (cards, forms)

### Phase 3 — Trust & Authority
- [ ] About Us pages
- [ ] Projects / case studies
- [ ] Certifications, leadership

### Phase 4 — Engagement
- [ ] Optional content pages (if needed later)
- [ ] Contact, support, distributors
- [ ] Enquiry API + forms

### Phase 5 — Polish
- [ ] Structured data
- [ ] Performance optimization
- [ ] Analytics & conversion tracking

---

## 10. Design Principles

- **Professional:** Clean, corporate, trust-building
- **Visual:** Strong use of LED display imagery (installations, products)
- **Clear CTAs:** "Get Quote", "Request Demo", "Contact Us" prominent
- **Mobile-first:** Forms, nav, content readable on all devices
- **Accessible:** Semantic HTML, contrast, focus states

---

*Document version: 1.0 — Created for LaDial Technologies B2B LED Display Website*

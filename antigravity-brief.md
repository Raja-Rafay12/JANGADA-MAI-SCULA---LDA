# Project Brief: Jangada Maiúscula, Lda. Website

Paste this into Antigravity as the first prompt, and attach the reference mockup image so the agent can see the target design.

## 1. Goal
Build a modern, fast, mobile-first marketing website for a landscaping and gardening company registered in Portugal. All projects shown are in the **UAE**, so the audience is UAE clients (villa owners, developers, hotels, commercial sites). The site generates quote requests. **There is no selling, buying, cart or payments.** Products are shown as a showcase only.

## 2. Tech stack
- Next.js (App Router) + TypeScript
- Tailwind CSS
- `next-intl` for i18n
- Content in local JSON/TS files for now (services, projects, materials, blog), structured so it can move to a CMS later
- Contact form posts to a Next.js API route that sends email (Resend or Nodemailer, via env vars)
- Deploy target: Vercel

## 3. Languages
- **English (default)**, **Arabic (full RTL layout, mirrored)**, optional **Portuguese**
- Language switcher in the header (EN / AR / PT)
- Use logical CSS properties (`ms-`, `me-`, `ps-`, `pe-`, `text-start`) so RTL works without separate styles
- Arabic font: Noto Kufi Arabic or Cairo. Latin: serif for headings (e.g. Playfair Display or Cormorant), clean sans for body (e.g. Inter)

## 4. Visual design (match the reference mockup)
- Palette: deep forest green (~#0b2a20), cream (~#f3efe6), bright green accent (~#2f9e5f), dark text on cream, white text on green
- Alternating dark and light full-width sections, with a curved divider under the hero
- Rounded cards with thin borders, thin outline icons (lucide-react)
- Primary button: filled green. Secondary: outlined
- Subtle scroll animations (fade/slide), nothing heavy
- Sticky header that becomes solid on scroll

## 5. Pages and sections

**Home**
1. Header: logo, nav (Home, About, Services, Projects, Materials, Contact), "Request a Quote" button, language switcher
2. Hero: full-width garden image, headline, intro, buttons ("Request a Quote", "View Projects")
3. Services: six cards (Gardening, Landscaping, Maintenance, Irrigation, Agricultural Support, Equipment & Materials)
4. About: dark section with image and four values (Sustainability, Quality, Experience, Commitment)
5. Portfolio: filterable grid (All, Gardening, Landscaping, Irrigation, Maintenance, Agriculture) plus an emirate filter (Dubai, Abu Dhabi, Sharjah, etc.)
6. Numbers: years of experience, projects completed, clients (placeholder values in a config file)
7. Process: Analysis, Planning, Execution, Maintenance
8. Call to action: "Have a project in mind?" with contact details
9. Footer: services links, company links, contact info, legal links

**Other pages**
- **About**: story, team, values, certifications
- **Services** overview plus one page per service (what's included, process, FAQ, quote button)
- **Maintenance Packages**: monthly and annual plans, no prices needed, "Request a quote" only
- **Projects**: list with filters, plus a detail page (images, location, scope, materials used)
- **Materials & Equipment** (showcase only): categories (plants and trees, turf, irrigation, soil and fertilizers, machinery and tools). Each item has an image, name, description, where it's used, and a "Request a quote" button. **No prices, no cart.**
- **Blog**: UAE-focused gardening and irrigation tips (a few placeholder posts)
- **Contact**: quote form (name, phone, email, service type, emirate, message, optional photo upload), floating **WhatsApp button** on every page, map or service areas
- **Legal**: Privacy Policy, Cookie Policy, Terms

## 6. Content guidance
- Placeholder copy must be realistic and UAE-relevant: drought-tolerant and native planting, smart water-saving irrigation, heat-resistant turf, sandy and saline soil improvement, year-round maintenance contracts
- Mark every placeholder number, phone, address and image clearly (e.g. in one `siteConfig` file) so the client can replace them
- Do not claim "100% satisfied clients" or other unverifiable stats. Use neutral placeholders
- Contact details come from config (the mockup shows a Lisbon address, which is placeholder only)

## 7. Technical requirements
- SEO: per-page metadata, `hreflang` for each language, sitemap.xml, robots.txt, OpenGraph tags, structured data (`LocalBusiness`)
- Images via `next/image`, lazy loading, WebP/AVIF
- Accessibility: semantic HTML, alt text, keyboard navigation, sufficient contrast
- Cookie consent banner and privacy policy link (the company is EU-based, so GDPR applies; also keep UAE PDPL in mind)
- Form validation (zod) and spam protection (honeypot or reCAPTCHA)
- Lighthouse target: 90+ on performance, accessibility and SEO

## 8. Out of scope (for now)
E-commerce, payments, user accounts, wholesale pricing, and the newsletter (unless the client asks for it, in which case add a consent checkbox).

## 9. Suggested build order
1. Project setup, Tailwind theme (colors, fonts), i18n with EN and AR RTL
2. Layout: header, footer, WhatsApp button
3. Home page sections, matching the mockup
4. Services, Projects (with filters), Materials showcase
5. Contact form and API route
6. About, Maintenance Packages, Blog, legal pages
7. SEO, accessibility, performance pass

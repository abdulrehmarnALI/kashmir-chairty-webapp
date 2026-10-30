# ADR 001 | Framework

Status: Accepted

## Context (The Problem)

The site is for a small community charity raising funds for a hospital build. It needs to:

- load fast on mid-range phones and slow connections, since most visitors will be on mobile
- be SEO-friendly, so the charity can be found and shared
- serve mostly static content: pages, updates, a magazine, progress information
- include one genuinely interactive feature, the donation impact selector
- be cheap to host and low-maintenance, because the charity is unlikely to update it often and I don't want to be the bottleneck
- keep content (costs, build phases, updates) in files or a light CMS that non-developers can edit later

## Options Considered

- **Astro** with React islands
- **Next.js**
- **React + Vite (SPA)**
- **Site builder (WordPress, Wix, Squarespace)**

## Decision (The Solution)

Use **Astro** with TypeScript, and React for interactive components only (the impact selector).

Pages are rendered to static HTML at build time, and JavaScript is shipped only where a component needs it. Stripe Checkout sessions and the webhook run as a small number of serverless functions.

## Consequences (The Trade-offs)

### Positives

- Fast by default, with little client-side JavaScript on content pages
- Static HTML is good for SEO and cheap to host
- Content collections (Markdown plus typed data files) suit the updates feed and the cost catalogue
- React islands let me reuse existing skills for the interactive parts
- Easy to add a git-based CMS later for handover

### Negatives

- I'm less familiar with Astro than with React or Next.js, so there's a learning curve (covered by a spike issue)
- Sharing state between islands is more awkward than in a single React app
- If the site later needs lots of interactivity, such as accounts or dashboards, Astro would be the wrong fit and I'd have to reconsider
- Server-side features (Stripe, webhooks) depend on the hosting adapter, so the hosting choice is constrained, to be settled in a later ADR

## Revisit if

The site grows into a logged-in, app-like product, or the charity needs heavy dynamic content.

# Osolutions Academy

The learning platform for **Osolutions**, a creative and performance agency in Cairo.
Static, dependency free, bilingual (English / Arabic with full RTL), light and dark themed.

**Live:** https://mohamed-sr-designer.github.io/osolutions-academy/

## What is in here

| Surface | File | What it does |
| --- | --- | --- |
| Marketing home | `index.html` | Hero, cohort story, catalog, graduates, testimonials, FAQ |
| Catalog | `courses.html` | Search, category, level and sort filters |
| Course page | `course.html?id=…` | Curriculum, outcomes, instructor, reviews, three plans, FAQ |
| Classroom | `learn.html?id=…` | Lesson stage, notes, resources, checkpoint, discussion, progress |
| Student dashboard | `dashboard.html` | Progress, schedule, assignments, badges, certificates |
| Instructor studio | `instructor.html` | Cohorts, grading queue, students, analytics, announcements |
| Business console | `console.html` | Executive, finance, marketing and product views |
| Enrollment | `checkout.html?id=…` | Plan picker, promo codes, confirmation |
| Auth | `login.html` | Demo role picker |
| About | `about.html` | Story, timeline, instructors, contact |
| Not found | `404.html` | Branded 404 with catalog recovery |

## Architecture

```
assets/
  css/   main.css      design tokens, components, light + dark, LTR + RTL
         pages.css     page and app layouts
         home.css      homepage sections
         motion.css    motion + interaction layer
         console.css   business console
  js/    i18n.js       dictionary + language engine
         data.js       all course, instructor and demo content ({en, ar})
         motion.js     scroll, reveal, split text, parallax, tilt, spotlight, story
         seo.js        canonical, hreflang, Open Graph, JSON-LD
         cro.js        countdowns, lead capture, UTM attribution
         app.js        header, footer, theme, badges, cards, command palette
         <page>.js     one controller per surface
```

No build step and no framework. Every user facing string lives in `i18n.js` (chrome)
or `data.js` (content) as an `{ en, ar }` pair.

## Running locally

```bash
node server.js 4720
```

Then open http://localhost:4720. The bundled server keeps `.html` extensions and
query strings intact, which `npx serve` does not do by default.

## Production notes

- **SEO** — per page canonical and hreflang, Open Graph and Twitter cards, and a JSON-LD
  graph covering `EducationalOrganization`, `WebSite`, `Course`, `FAQPage`, `BreadcrumbList`
  and `ItemList`. `sitemap.xml` and `robots.txt` are generated for the live host.
- **PWA** — `manifest.webmanifest` plus a service worker with a stale while revalidate
  shell cache and a cache first media cache.
- **Accessibility** — skip link, focus rings, semantic landmarks, `aria-expanded` on
  accordions, and a full `prefers-reduced-motion` path that disables every animation.
- **Command palette** — `⌘K` or `Ctrl K` anywhere.

## Before going live

1. Replace `assets/img/people/*.webp` — the instructor and graduate portraits are
   AI generated placeholders, flagged as such on the About and home pages.
2. Point `OSO_SITE_URL` (or the constant at the top of `assets/js/seo.js`) at the
   production domain, then regenerate `sitemap.xml` and `robots.txt`.
3. Wire `checkout.html` and the lead capture in `cro.js` to a real payment and CRM
   endpoint. Nothing is sent anywhere today.
4. The figures in `console.html` are a modelled sample set, labelled in the interface.

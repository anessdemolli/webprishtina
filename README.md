<div align="center">
  <img src="img/logo.png" alt="webprishtina" width="120" style="filter: invert(1)"/>

  <h1>webprishtina</h1>
  <p><strong>Full-Service Digital Agency — Prishtina, Kosovo</strong></p>

  <p>
    <a href="https://webprishtina.onrender.com" target="_blank"><img src="https://img.shields.io/badge/Live%20Site-webprishtina.onrender.com-black?style=for-the-badge&logo=google-chrome&logoColor=white" alt="Live Site"/></a>
    <img src="https://img.shields.io/badge/HTML5-black?style=for-the-badge&logo=html5&logoColor=white" alt="HTML5"/>
    <img src="https://img.shields.io/badge/CSS3-black?style=for-the-badge&logo=css3&logoColor=white" alt="CSS3"/>
    <img src="https://img.shields.io/badge/JavaScript-black?style=for-the-badge&logo=javascript&logoColor=white" alt="JavaScript"/>
  </p>

  <p>
    <a href="https://instagram.com/webprishtina"><img src="https://img.shields.io/badge/Instagram-webprishtina-black?style=flat-square&logo=instagram" alt="Instagram"/></a>
    <a href="https://linkedin.com/in/anesco"><img src="https://img.shields.io/badge/LinkedIn-anesco-black?style=flat-square&logo=linkedin" alt="LinkedIn"/></a>
    <a href="https://github.com/anessdemolli"><img src="https://img.shields.io/badge/GitHub-anessdemolli-black?style=flat-square&logo=github" alt="GitHub"/></a>
  </p>
</div>

---

## Overview

The official agency website for **webprishtina** — a full-service digital agency based in Prishtina, Kosovo. Built from scratch in pure HTML, CSS and vanilla JavaScript with zero frameworks or build tools. Optimised for performance, SEO, and mobile responsiveness.

> **Symbol:** *Hyjnesha Ne Front* — the Goddess at the Front — representing strength and vision.

---

## Features

| Feature | Description |
|---|---|
| **Particle Hero** | Full-screen hero with typewriter effect and animated stat counters |
| **Services Grid** | 3×2 hover-invert card grid showcasing 6 core services |
| **Project Cards** | 12-card grid — real projects with live links, concepts with demo links |
| **Featured Case Study** | Master Service Chef (RTK Television, 1M+ viewers) with microlink.io screenshot |
| **AI Chatbot** | Keyword-based assistant with pricing info, 40% discount offer & booking links |
| **Contact Form** | Web3Forms AJAX submission — no backend required |
| **Cal.com Booking** | Embedded 30-min strategy call booking via `cal.com/anesdemolli` |
| **AI News Carousel** | 22-card horizontal carousel with arrow navigation and dot pagination |
| **Kosovo Live Clock** | Real-time timezone clock (Europe/Belgrade / CET) in the footer |
| **Logo Watermark** | Low-opacity logo behind content in every section |
| **Scroll Reveal** | IntersectionObserver-based staggered entrance animations |
| **FAQ Accordion** | Accessible expand/collapse FAQ section |
| **Back to Top** | Fixed scroll-to-top button |
| **SEO Ready** | sitemap.xml + robots.txt configured for Google Search Console |

---

## Tech Stack

```
HTML5          — Semantic structure, single-page layout
CSS3           — Custom properties, CSS Grid, Flexbox, @keyframes
Vanilla JS     — No frameworks, no bundlers, no dependencies
Web3Forms      — Contact form submissions (no backend needed)
Cal.com        — Embedded booking calendar
Microlink.io   — Live website screenshot in featured project card
Google Fonts   — Bebas Neue · Inter · JetBrains Mono
```

---

## Project Structure

```
webprishtina/
├── index.html          # Single-page markup — all sections
├── style.css           # All styles — theme, layout, animations, responsive
├── script.js           # All JS — navbar, reveals, counters, chatbot, carousel, form
├── sitemap.xml         # XML sitemap for Google Search Console
├── robots.txt          # Crawler instructions + sitemap reference
└── img/
    └── logo.png        # Agency logo (used as favicon, watermark, chatbot icon)
```

---

## Sections

1. **Navbar** — Fixed, centered links, glass blur on scroll, mobile hamburger
2. **Hero** — Typewriter headline, animated counters, grid dot background
3. **Featured Project** — Master Service Chef with live screenshot & testimonial
4. **Services** — Web Dev · Social Media · Management · Branding · Graphic Design · Digital Marketing
5. **Projects** — 12 cards: 2 live + 10 concept demos
6. **About** — Agency story, numbered badges, key metrics
7. **FAQ** — 6 accordion items
8. **Contact** — Web3Forms + info panel + Cal.com booking
9. **AI News** — 22 tech/AI news cards in carousel
10. **Footer** — Nav links · Services · Contact · Live Kosovo clock

---

## Integrations

### Web3Forms (Contact)
```html
<input type="hidden" name="access_key" value="YOUR_KEY"/>
```
Form submissions are sent to your email via [web3forms.com](https://web3forms.com) — no server needed.

### Cal.com (Booking)
```html
<button data-cal-link="anesdemolli" data-cal-config='{"layout":"month_view"}'>
  Book on Cal.com →
</button>
```

### Microlink.io (Screenshot)
```
https://api.microlink.io/?url=https://masterservicechef.com&screenshot=true&meta=false&embed=screenshot.url
```
Free-tier screenshot API used for the featured project preview image.

---

## Running Locally

No build step needed. Just open the file:

```bash
# Option 1 — directly in browser
open index.html

# Option 2 — with a local server (recommended to avoid CORS on fonts)
npx serve .
# or
python -m http.server 8000
```

---

## Deployment

Currently deployed on **Render** at:
```
https://webprishtina.onrender.com
```

Can also be deployed to:
- **Vercel** — drag and drop or `vercel deploy`
- **Netlify** — drag the folder into netlify.com
- **GitHub Pages** — push and enable Pages in repo settings

---

## SEO & Search Console

1. Go to [Google Search Console](https://search.google.com/search-console)
2. Add property: `https://webprishtina.onrender.com`
3. Verify ownership (HTML file or DNS record)
4. Submit sitemap: `https://webprishtina.onrender.com/sitemap.xml`
5. Request indexing on the URL Inspection tool

---

## Contact

| | |
|---|---|
| **Email** | [info@anesdemolli.tech](mailto:info@anesdemolli.tech) |
| **Phone** | +383 (44) 366/680 |
| **WhatsApp** | [wa.me/38344366680](https://wa.me/38344366680) |
| **Book a Call** | [cal.com/anesdemolli](https://cal.com/anesdemolli) |
| **Location** | Prishtina, Kosovo |

---

<div align="center">
  <p>© 2021–2025 <strong>webprishtina</strong> — All rights reserved.</p>
  <p>Powered by <em>Hyjnesha Ne Front</em></p>
</div>

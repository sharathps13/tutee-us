# Tutee Connect — Study in the USA ("Harbor to Horizon" edition)

Static site, no build step needed to deploy (Netlify config included). `tutee-usa-site.html` is the same site as one file that opens straight from disk.

## Pages
- `index.html` — landing page. The story runs coast to coast (New York → San Francisco):
  hero (outlined "AMERICA" set between the sunset sky and the Statue of Liberty; scrolling pushes through the word), why the USA, destinations with map, top universities (Tutee Connect's 218 featured: state map + search + filters),
  services (expanding panels), funding (scholarships / loans / earn-while-you-learn calculator), visa steps, STEM OPT (12 + 24 = 36 months timeline with eligibility notes and a counselling CTA), testimonials, FAQ, enquiry form.
- `universities.html` — University Atlas: all 3,969 accredited, degree-granting US institutions (IPEDS 2024) on a lit-up map with search, type/level/state/category/size filters and shortlist (`?q=` deep links work, e.g. `universities.html?q=Texas`).
  Data: `tools/data/ipeds-hd2024.json` → `node tools/build-dir-data.mjs` → `assets/js/us-institutions.js` (needs d3-geo for the map projection). To refresh, download the newest HD file from nces.ed.gov/ipeds/datacenter/DataFiles.aspx.

## Source → build
- `tools/usa.tpl.html` — landing page template. `python3 tools/build-usa.py` → `index.html`
  (data: `tools/photos.json`, `tools/services.json`, `tools/us-states.json`, `tools/us-nation.txt`, `tools/us-cities.json`).
- `src/css/usa.css`, `src/css/carry.css`, `src/css/usa-responsive.css` → `python3 tools/build-css.py` → `assets/css/site.css`.
- `python3 tools/build-pages.py` regenerates `universities.html` header/footer from `index.html`.
- `python3 tools/build-single.py` rebuilds `tutee-usa-site.html`.

Full rebuild: `python3 tools/build-css.py && python3 tools/build-usa.py && python3 tools/build-pages.py && python3 tools/build-single.py`

## Scripts
- Hero: `assets/img/hero-liberty-{836,1672,3344}.webp` (your supplied photo, upscaled 2× with Real-ESRGAN; `.jpg` copy for social previews). The statue, pedestal, island and trees are a pre-cut transparent copy (`assets/img/hero-liberty-fg-*.webp`) layered over the photo, so the word sits behind the statue without any runtime masking. The word is drawn from clean SVG outlines made by `python3 tools/make-hero-word.py` (Manrope ExtraBold, overlaps removed) → `tools/hero-word.json`. If you change the hero photo, the mask must be remade for it.
- `assets/img/hero-statue-*` (alternative sunrise photo), `assets/img/skyline-mask.png`, `assets/img/liberty-mask.png`, `assets/js/hero-depth.js` and `assets/img/hero-depth.png` are no longer used (safe to delete).
- `assets/js/main.js` — Lenis smooth scroll, GSAP/ScrollTrigger choreography, finder, services, calculator, visa tabs, stories, FAQ.
- `assets/js/forms.js` (Web3Forms enquiry), `chat.js` (Tutee AI), `universities-data.js` / `universities.js` (directory).
- Reduced-motion users get the static layout with no pinning or WebGL animation.

## Photos
Photographs are hotlinked from Wikimedia Commons (`thumb.wikimedia.org`, allowed in the CSP in `netlify.toml`).
Their licences (CC BY / CC BY-SA) require the credits shown in the footer — keep them if photos are changed.
To swap a photo, edit `tools/photos.json` and rebuild. For self-hosting, download the files into `assets/img/` and change the URLs.

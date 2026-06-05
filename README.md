# Eric Yang — Academic Personal Website

A small, dependency-free static website hosted on **GitHub Pages** from the `main`
branch root (`https://andrea1618.github.io/`). Plain HTML5, one shared stylesheet, and
one shared vanilla-JavaScript file. No build step, no framework, no runtime
dependencies (the only external resource is the Google Fonts "Inter" stylesheet).

## Pages

| File            | Purpose                                                        |
| --------------- | -------------------------------------------------------------- |
| `index.html`    | Home: profile, bio, research highlights                        |
| `research.html` | Working papers with abstracts                                  |
| `cv.html`       | CV page (PDF embed, currently a placeholder — see TODOs)       |
| `contact.html`  | Email and profile/network links (currently TODO placeholders)  |

## Structure

```
/
├── index.html, research.html, cv.html, contact.html
├── assets/
│   ├── css/style.css     # all styling (CSS custom properties in :root)
│   ├── js/script.js      # progressive enhancement only; site works without JS
│   ├── img/              # profile photo and favicon go here
│   └── papers/           # working-paper PDFs go here
├── cv/cv.pdf             # CV PDF
├── sitemap.xml, robots.txt
└── README.md, SETUP-CHECKLIST.md
```

## Editing

- **Identity / bio:** `index.html` (profile section). Keep the title and bio consistent
  across all pages.
- **Papers:** add a `.paper-item` block in `research.html`. Drop the PDF into
  `assets/papers/` and uncomment the `paper-links` block in that item.
- **Colors / spacing / fonts:** edit the `:root` variables at the top of
  `assets/css/style.css`.
- **Navigation/footer** are duplicated in each HTML file (intentionally, to keep the site
  buildless). When you change one, change all four.

## Deploying

Pushing to `main` publishes automatically via GitHub Pages
(Settings → Pages → Deploy from a branch → `main` / root).

## What still needs your real values

See **`SETUP-CHECKLIST.md`** for the list of `TODO` placeholders to fill in before this
site is fully accurate (email, profile links, CV PDF, profile photo, etc.). Search the
repo for `TODO` to find them in context.

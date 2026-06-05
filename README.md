# Zheyu Yang — Personal Website

A small, dependency-free static website hosted on **GitHub Pages** from the `main`
branch root (`https://andrea1618.github.io/`). Plain HTML5 + one shared stylesheet.
No JavaScript, no build step, no framework (the only external resource is the Google
Fonts stylesheet: **Fraunces** for headings, **Newsreader** for body text).

The design is a warm, minimal, single-column editorial layout: the home page is a
**portal** (intro + Writing list + Research list + contact footer), and each paper or
post lives on its own page.

## Pages

| File                          | Purpose                                            |
| ----------------------------- | -------------------------------------------------- |
| `index.html`                  | Home/portal: intro, Writing list, Research list    |
| `research/*.html`             | One page per working paper (full abstract)         |
| `cv.html`                     | CV page (PDF placeholder — see TODOs)              |
| `writing/example-post.html`   | Template for a writing post — copy it per new post |

## Structure

```
/
├── index.html               # home portal
├── research/                # one page per paper
│   ├── risk-taking.html
│   ├── boom-bust.html
│   └── provincial.html
├── writing/
│   └── example-post.html    # post template (noindex; uses ../ paths)
├── cv.html                  # CV (PDF placeholder)
├── assets/
│   ├── css/style.css        # all styling; tweak the :root variables at the top
│   ├── img/favicon.svg      # site icon
│   └── papers/              # working-paper PDFs go here
├── sitemap.xml, robots.txt, .gitignore
└── README.md, SETUP-CHECKLIST.md
```

(When you add a CV PDF, drop it at `cv/cv.pdf` and enable the embed in `cv.html`.)

## Editing

- **Look & feel:** change the `:root` variables (colors, accent, max width) at the top of
  `assets/css/style.css`. `--accent` is the single pop of color.
- **Identity / intro:** edit the `<header>` in `index.html`.
- **A paper:** copy a file in `research/` to `research/your-paper.html`, edit the title and
  abstract, then add a matching `<li>` to the Research section of `index.html`. Drop the
  PDF into `assets/papers/` and uncomment the PDF link in the paper page.
- **A writing post:**
  1. Copy `writing/example-post.html` to `writing/your-title.html`, edit it, and remove
     the `noindex` line once it's real.
  2. Add an `<li>` to the Writing section in `index.html` pointing at the new file.
  (Pages in `research/` and `writing/` reference CSS/links/images with `../`.)
- **Keep `sitemap.xml` in sync** when you add or remove pages.

## Deploying

Pushing to `main` publishes automatically via GitHub Pages
(Settings → Pages → Deploy from a branch → `main` / root).

## What still needs your real values

See **`SETUP-CHECKLIST.md`**. Search the repo for `TODO` to find each spot in context.

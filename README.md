# Zheyu Yang — Personal Website

A small, dependency-free static website hosted on **GitHub Pages** from the `main` branch root
(`https://andrea1618.github.io/`). Plain HTML5 + one shared stylesheet; no JavaScript, no build
step, no framework (the only external resource is Google Fonts: **Fraunces** for headings,
**Newsreader** for body). The home page is a **portal** (intro + Writing + Research + contact
footer); each paper or post lives on its own page.

## Current status

- Last commit 2026-06-05 (first writing post, "Revenue In, Profit Out"); the editorial redesign
  landed 2026-06-04. On 2026-10-06 the decision was to keep this public version (recorded in
  `dev-standards/docs/PROJECT-MAP.md`).
- Still open: the contact links in the `index.html` footer are a `TODO` placeholder;
  `cv/cv.pdf` does not exist (`cv.html` shows a placeholder message instead of the embed);
  `assets/papers/` holds no PDFs yet. The full list is in `SETUP-CHECKLIST.md`.

## How to run

No build and no environment. Open `index.html` in a browser to preview. Pushing to `main`
publishes automatically via GitHub Pages (Settings → Pages → Deploy from a branch →
`main` / root); `.nojekyll` keeps Pages from running Jekyll on the files.

## Pages

| File                                  | Purpose                                              |
| ------------------------------------- | ---------------------------------------------------- |
| `index.html`                          | Home/portal: intro, Writing list, Research list      |
| `research/*.html`                     | One page per working paper (full abstract)           |
| `writing/*.html`                      | Writing posts; `example-post.html` is the noindex template |
| `cv.html`                             | CV page (PDF placeholder — see SETUP-CHECKLIST)      |

## Structure

```
/
├── index.html               # home portal
├── research/                # one page per paper: risk-taking, boom-bust, provincial
├── writing/
│   ├── revenue-in-profit-out.html
│   └── example-post.html    # post template (noindex; uses ../ paths)
├── cv.html                  # CV (PDF placeholder; a real PDF goes at cv/cv.pdf)
├── assets/
│   ├── css/style.css        # all styling; tweak the :root variables at the top
│   ├── img/favicon.svg      # site icon
│   ├── charts/              # aapl, jpm, msft, pgr, tsla, wmt .svg (used by the writing post)
│   └── papers/README.md     # where working-paper PDFs go, and how to link them
└── sitemap.xml, robots.txt, .nojekyll, .gitignore, README.md, SETUP-CHECKLIST.md
```

## Editing

- **Look & feel:** the `:root` variables at the top of `assets/css/style.css`; `--accent` is the single pop of color.
- **Identity / intro:** the `<header>` in `index.html`.
- **A paper / a post:** copy a file in `research/` (or `writing/example-post.html`, then remove its `noindex` line), edit it, add an `<li>` to the matching list in `index.html`, and update `sitemap.xml`. Pages one folder deep reference CSS/links/images with `../`; paper PDFs go in `assets/papers/` (see its README).

## More

- `SETUP-CHECKLIST.md`: values still needed (contact links, SEO, CV and paper PDFs) and notes on the redesign; search the repo for `TODO` to find each spot.
- `assets/papers/README.md`: PDF naming and linking.

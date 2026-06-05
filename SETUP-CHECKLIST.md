# Setup Checklist — values still needed

The site contains only verifiable content; everything not yet known is a `TODO`.
Search the repo for `TODO` to jump to each spot.

## Contact (footer of `index.html`)
- [ ] **Email address** — replace `[ TODO: email · Google Scholar · GitHub ]` with real
      links (commented example is right above it).
- [ ] **Google Scholar** URL — or omit.
- [ ] **GitHub** URL — or omit.
- [ ] *(Optional)* ORCID / RePEc / SSRN / LinkedIn — add to the footer and/or the
      `sameAs` array in the JSON-LD block.

## SEO (`index.html`)
- [ ] Add your profile URLs to the `sameAs` array in the JSON-LD block (commented TODO).
- [ ] *(Optional)* Add a social share image and uncomment the `og:image` tags.

## Files (currently placeholder)
- [ ] **CV PDF** — none yet. Add it at `cv/cv.pdf`, then uncomment the `<object>` embed +
      download link in `cv.html`.
- [ ] **Paper PDFs** — none exist in `assets/papers/`. Add them and uncomment the PDF
      link near the bottom of each page in `research/`.

## Writing
- [ ] Replace the placeholder entry in the Writing section of `index.html` with a real
      post (copy `writing/example-post.html` → `writing/your-title.html`, remove the
      `noindex` line), or remove the Writing section until you have a post.

## To verify yourself
- [ ] Paper titles, abstracts, dates, and statuses in `research/` are accurate.
      (Co-author for "Boom-Bust Capital Flow Cycles" is recorded as **Graciela L. Kaminsky**.)

## Notes on what changed in the redesign
- Warm, minimal single-column **editorial** style (Fraunces + Newsreader); home is a
  portal, each paper/post is its own page.
- Removed: old multi-page nav, `contact.html` (folded into footer), `assets/js/script.js`
  (site is now fully static), the fabricated `teaching.html`, and leftover 1-byte stub
  files. Added: `assets/img/favicon.svg`, `.gitignore`.

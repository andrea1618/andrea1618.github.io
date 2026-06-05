# Setup Checklist — values still needed

This site was cleaned up to remove all template/placeholder content. The items below are
the **real values only you can provide**. Each is marked with a `TODO` comment in the
code — search the repo for `TODO` to jump to each spot.

## Contact (`contact.html`, and quick links in `index.html`)
- [ ] **Email address** — replace `[ TODO: add email address ]` and the commented
      `mailto:` snippet. Also uncomment the Email quick-link in `index.html`.
- [ ] **Google Scholar** URL — or delete the line if you don't have one.
- [ ] **ORCID** URL — or delete.
- [ ] **RePEc** URL — or delete.
- [ ] **SSRN** URL — or delete.
- [ ] **LinkedIn** URL — or delete.
- [ ] **GitHub** URL — or delete.
- [ ] *(Optional)* Phone / office / mailing address — removed because the repo only had
      placeholder values; re-add in the "Get in Touch" card if you want them public.

## SEO (`index.html`)
- [ ] Add the same profile URLs to the `sameAs` array in the JSON-LD block (commented TODO).
- [ ] *(Optional)* Add a social share image and uncomment the `og:image` tags.

## Files (currently empty/placeholder — these would otherwise 404)
- [ ] **`cv/cv.pdf`** — currently a 1-byte stub. Add the real PDF, then uncomment the
      `<object>` embed + download button in `cv.html`.
- [ ] **Profile photo** — `assets/img/` only has a 1-byte stub. Add a real photo and
      replace the `EY` initials placeholder in `index.html` with the commented `<img>` tag.
- [ ] **Paper PDFs** — none exist in `assets/papers/`. Add them and uncomment the
      `paper-links` blocks in `research.html`.
- [ ] **`favicon.ico`** — none exists. Add one to `assets/img/` and re-enable the
      `<link rel="icon">` tag (commented in every page's `<head>`).

## To verify yourself (could not be verified from the repo)
- [ ] **Co-author name** in "Boom-Bust Capital Flow Cycles" reads "Graciela K." — confirm
      and complete the full name (`research.html`).
- [ ] Paper titles, abstracts, dates, and statuses on `research.html` are accurate.
- [ ] **Teaching page was removed.** It contained only fabricated content (invented
      instructor names, made-up ratings, fake testimonials). Re-add a `teaching.html`
      with real content when you have it, and restore its nav link in all four pages.

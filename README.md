# My Website

A personal site built and inspired by Muji notebook bullet journaling and scrapbooking: cut-paper letters, washi tape, sticky notes, and pages that turn.

**Check it out here:** https://londonho.github.io/my-website/

## About

Built as a self-directed project to get back into front-end work. The design idea comes from Muji stationery and from a graphic design I made years ago as well as my interest in bullet journaling/scrapbooking.

## Features

- **Ransom-note cover** - six letters all unique. Each letter's
  surface (gingham, polka dot, candy stripes) is built from repeating
  CSS gradients and `clip-path`, no images.
- **FLIP transition** - opening the notebook measures the cover title and the logo with `getBoundingClientRect()`, then animates one onto the other as a single `transform`. No layout is animated, so it runs on the compositor.
- **3D page turns** — direction-aware rotation around the spine using Framer Motion variants and `AnimatePresence` in `mode="wait"`, with a flat slide fallback on narrow screens.
- **No backend** — the contact form posts to a form endpoint, so the whole site stays a static build on GitHub Pages.
- **Mobile without a second layout** — the cover renders at device width while the notebook is scaled down with CSS `zoom`, which (unlike `transform: scale`) affects layout, so there's no phantom overflow.

## Stack

React 19 · Vite 8 · React Router 7 · Framer Motion · plain CSS (custom properties, no framework)

## Structure

```
src/
  components/   Reusable collage pieces — Tape, Polaroid, StickyNote, RansomTitle
  layout/       Notebook shell: tabs, page-turn stage, header
  pages/        About, Work, Contact
  data/         Content as data — projects, experience, facts
  lib/          Small hooks and helpers
  styles/       tokens.css (the design system) and base.css
```

Content lives in `src/data/` rather than in JSX, so adding a project or a job is a
one-line edit.

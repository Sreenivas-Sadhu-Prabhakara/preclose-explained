# preclose explained

**How home loan prepayment actually works — animated.** A single-page, scroll-driven
explainer that shows what a prepayment does to a loan: the amortization schedule
rewritten, months erased, interest quietly saved, and the plain-English reason banks
give you **two** choices when you prepay — **reduce EMI vs reduce tenure**. Then it hands
you off to the free calculator to run the numbers on your own loan.

It is the storytelling companion to the **[preclose](https://sreenivas-sadhu-prabhakara.github.io/preclose/)**
calculator — same visual identity (blue-black indigo + Closure Amber, twin burn-down
curves), same enforced-privacy contract.

![preclose explained](./preview.png)

## Why this exists

Most people have never seen what a lump-sum prepayment does to a loan, because no bank
statement draws it. The idea is genuinely counter-intuitive: a single early payment can
erase *many* months from the end of a 20-year loan, because every rupee of principal you
knock off stops accruing interest for the entire remaining term.

This page makes that visible. You scroll, and the concept animates:

1. **The hook** — a bonus in hand: park it, or throw it at the loan?
2. **The problem** — your bank shows an EMI, never the interest split hiding inside it.
3. **How it works** — the twin burn-down curves; one lump sum and the whole curve dives.
4. **The two choices** — reduce-tenure vs reduce-EMI, and why tenure usually wins.
5. **The guarantee** — your loan numbers never leave the device; the browser enforces it.
6. **A short feature tour** — everything the calculator computes.
7. **A prominent CTA** — open the live calculator and run your own loan.

## The tool it explains

**[Open the preclose calculator →](https://sreenivas-sadhu-prabhakara.github.io/preclose/)**

The calculator rebuilds your full month-by-month amortization schedule, applies one-time
and recurring prepayments, computes reduce-EMI vs reduce-tenure side by side to the paisa,
draws the burn-down chart, and exports CSV / prints to PDF — all on your device.

## Built with

- Plain HTML, one CSS file, one small JS file. **No framework, no bundler, no dependencies.**
- All motion is **CSS + inline SVG** — draw-on curves, split bars, a blocked-packet privacy
  animation. JavaScript only reveals each scene on scroll (IntersectionObserver) and moves
  a progress rail.
- **`prefers-reduced-motion` is fully respected** — every animation degrades to its final,
  legible static state. The page is also completely usable with JavaScript disabled.

## Privacy

- A strict Content-Security-Policy sets `connect-src 'none'`: this page **cannot** make any
  network request even if it tried. No fetch, no analytics, no external fonts, no CDN — the
  browser itself blocks any send. This is an enforced guarantee, not a promise.
- Everything is self-contained and same-origin. Nothing about you is collected or stored.

## Quickstart

Just open `index.html` in any modern browser — no build step, no server, no install.

- **Local:** double-click `index.html`, or run a static server in the folder.
- **Hosted:** **[Open preclose explained live](https://sreenivas-sadhu-prabhakara.github.io/preclose-explained/)**

## Disclaimer

This is an **educational explainer** of how loan prepayment works, provided for
informational purposes only. It is **not financial advice**. Every curve, bar, and split
shown here is **illustrative of the concept, not your loan** — it uses a standard
monthly-rest reducing-balance model, whereas banks use daily-reducing balances, so real
figures differ. Verify any prepayment decision against your lender's official statement and
terms before acting. This software is provided under the MIT License, "as is", without
warranty of any kind; the author accepts no liability for any loss or damage arising from
its use.

## License

[MIT](./LICENSE) © 2026 Sreenivas Sadhu Prabhakara

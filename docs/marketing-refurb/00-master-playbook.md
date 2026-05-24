# OpenHouse Marketing Site Refurb, Master Playbook

This document is the spine. Five page briefs live alongside it:

- `homepage-brief.md`
- `sales-brief.md`
- `build-brief.md`
- `handover-brief.md`
- `intelligence-brief.md`
- `care-brief.md`

(The Agent page is already built from `agent-page-implementation-brief-final.md`.)

Each page brief is short on purpose. The shared logic, science, components, and copy rules all live here. Every page brief assumes Claude Code has already read this document.

---

## 1. The North Star

One goal: **increase demo bookings.** That is the metric every section on every page is engineered for.

One method: **engineer each page around its specific buyer's emotional state, fear, and desire.** Not against an abstract "user". Against a named person reading on a phone in a real life moment.

One system: **every page reuses the same component vocabulary.** The Agent page proved that visitors trust a site that holds together as one thing. Six pages that look like six microsites would undo that trust.

---

## 2. The science behind every page

These principles are applied across the entire site. Each page brief references them by name.

1. **The 5-second test** (Nielsen Norman Group). Stay-or-leave is decided in 5 to 10 seconds. The hero must pass *what is it, is it for me, why should I care* in that order.
2. **Hick's Law.** Every additional choice slows decisions. Fewer, clearer options outperform more options. Three CTAs in a hero is the failure mode. One primary plus one secondary is the pattern.
3. **Miller's Law.** Working memory holds about four chunks. Lists of seven features are forgotten lists. We chunk in fours, max.
4. **The picture superiority effect.** Images are remembered roughly 6x more than text. Every page must have at least one visual that tells the whole story alone.
5. **The Von Restorff isolation effect.** One thing that stands out is remembered. Each page has exactly one "money shot" section, visually heavier than every other.
6. **The peak-end rule** (Kahneman). People remember the most intense moment and the end. The money shot is the peak. The final CTA is the end. Both must be deliberate.
7. **Loss aversion** (Kahneman). Losses feel about twice as powerful as equivalent gains. We frame problems concretely, not abstractly.
8. **The IKEA effect.** Visitors who do something on the page convert roughly 3x harder than visitors who only scroll. Where possible, every page has one interactive moment.
9. **Social proof and authority bias** (Cialdini). Real names, real numbers, real logos beat abstract claims by a wide margin. Never invent. The audience will check.
10. **Identification.** Visitors convert when they see themselves on the page. Persona cards, real-world scenarios, and named example schemes do this. Generic "modern business" framing does not.
11. **F-pattern and layer-cake scanning.** Most visitors scan. The page must tell its whole story through headlines and visuals alone.

---

## 3. The audience map

Each page has one buyer. Build for them. Ignore everyone else.

| Page | Primary buyer | Role | Fear they walk in with | Desire they want resolved |
|---|---|---|---|---|
| Homepage | Property developer principal | MD / Head of Development | "Yet another piece of software my team won't use" | Visibility across every scheme without chasing five people on WhatsApp |
| Sales | Sales director at a developer | Sales Director / Head of New Homes | "Deals are slipping and we don't even know" | A live pipeline, not a Friday spreadsheet |
| Build | Construction director | Construction Director / Project Director | "Compliance gets bodged at handover and we get burned" | Organised certs and docs, no scrambles |
| Handover | Customer care lead | Aftersales Manager / Customer Care | "Residents call us at 9pm asking how the heating works" | Residents finding their own answers |
| Intelligence | The principal who already bought | MD / Director | "I don't know what I don't know about my own business" | One assistant that knows every scheme |
| Care | Installer technical director | Technical Director / Operations | "Callouts are killing our margin" | Customers fixing simple things themselves |

For each page, the hero must implicitly answer their fear and explicitly preview their desire. Everything else flows from there.

---

## 4. The shared section vocabulary

Every page is assembled from these blocks. New blocks are not invented. If a page wants to do something the vocabulary doesn't cover, it earns one bespoke block as its "money shot" and reuses everything else.

### A. Hero block

- Breadcrumb badge (top left): back link "← Platform" plus a pill with the module name and a Lucide icon.
- Display headline, white, left aligned, with one gold word. Maximum twelve words.
- Sub-headline: one sentence. Body-lg, neutral-300, max-w-xl.
- CTA row: one primary gold pill, one outline secondary.
- Right column: floating preview cards (3 to 4), staggered, idle drift on 6 to 8 second loop, motion-safe.

### B. Try-it block (interactive demo, only used on Agent and Intelligence)

A small panel that lets the visitor do one thing without sign-up. Pre-built front-end responses. Demonstrates the actual interaction, not a description of it.

### C. Money shot block (one per page, visually heaviest section)

Full-bleed dark section. Either:
- A split-screen mock (phone + drawer/result), or
- A single hero screenshot at scale with one callout, or
- A short looping product video.

The money shot is the only section on the page allowed to break the standard rhythm. It is the peak in peak-end.

### D. Before/After block (timeline or contrast)

Two-column comparison. Either a day-in-the-life timeline (Agent uses this), a workflow contrast (Sales, Build), or a stat-pair contrast (Care, with cost-per-callout). Same component, different content.

### E. Three-step block ("how it works")

Three numbered cards with Lucide icons. One sentence of body each. Reused everywhere.

### F. Four-card grid ("what it does")

2x2 grid of feature cards. Four cards, no more. Each: icon, bold heading, two short sentences.

### G. Three-persona block ("built for you")

Three cards in a row. Each represents a real person doing a real job. Identification lever.

### H. Quiet trust line block

Centred light section, one sentence headline, one paragraph beneath. Used to name a trust mechanism (drawer-and-approve, data ownership, security) without devoting a whole section to it.

### I. Peak-end CTA block ("ready to see it")

Full-width dark section with the OpenHouse mark watermark. Oversized centred primary CTA. Optional real-customer quote above. Optional app store buttons below.

### J. Platform strip block

Cross-link to the other module pages. Tiny cards. Same on every page.

### K. Footer

Standard site footer.

---

## 5. The CTA hierarchy

Every page follows the same escalation:

1. **Hero CTA:** lowest-friction action available (see it, try it, watch it).
2. **Mid-page CTA:** none. The page earns the demo through investment, not pestering.
3. **Peak-end CTA:** Book a Demo, oversized, centred, only once. This is where the demo gets booked.

The exceptions are Agent (which keeps app store buttons under the demo CTA because it's a daily-user product) and Care (which keeps a small "watch the 90 second walkthrough" link in the hero alongside Book a Demo, because installers want to qualify the product before talking to anyone).

Never put "Book a Demo" three times on a page. Hick's law penalises repetition. Once, oversized, at the peak-end moment.

---

## 6. The copy rules (apply globally, no exceptions)

- **No em dashes.** Anywhere. Use commas, full stops, or "to" / "and" instead.
- **No en dashes either.** Same logic.
- **No exclamation marks.**
- **No emoji in UI text.**
- **Banned words:** revolutionary, cutting-edge, game-changer, leverage, synergy, seamless, robust, transform, supercharge, empower, unlock, unleash, paradigm, frictionless, world-class, best-in-class, next-generation, smart (as adjective), powerful, intuitive.
- **Irish/British English spelling** throughout (organise, colour, prioritise, behaviour, recognise).
- **Numbers:** figures for anything over nine, words for one through nine. Currency in euro using €.
- **Real names always.** Reference real schemes, real partners (Longview Estates, Cairn Homes, SE Systems Cork) when they fit, never invented brands.
- **Lowercase for the role, capitalised for the product.** "An agent uses Agent. A developer uses OpenHouse."
- **Read every sentence aloud.** If it sounds like a press release, rewrite it.

The tone the entire site should hit: an experienced Irish property professional explaining their work to another professional over a coffee. Direct, unhurried, specific, no hype.

---

## 7. The visual rules

- **Primary gold:** `#D4AF37` (brand-500). Never any other gold. Never `#f5b800`.
- **Section alternation:** dark, light, dark, light, with the money shot and peak-end CTA always dark. This matches the rhythm of the current site.
- **Hero treatment:** deep navy/black gradient with subtle gold OpenHouse mark watermark behind the floating cards.
- **Icons:** Lucide React only. No emoji, no FontAwesome.
- **Animation:** `ease-premium` (`cubic-bezier(0.16, 1, 0.3, 1)`) for any motion. Floating cards drift on a 6 to 8 second loop. All animations wrapped in `motion-safe:` to respect `prefers-reduced-motion`.
- **Cards:** rounded corners, soft gold-glow shadow on dark surfaces, neutral lift on light surfaces. Reuse the existing component, never bespoke.
- **Type scale:** Inter throughout. Display for hero, heading-xl for section headings, body-lg for sub-text, body for paragraphs. Minimum 17px body on mobile.

---

## 8. Accessibility (this matters more for property than for typical SaaS)

The audience skews 35 to 60, often reading on a phone in a moving environment, frequently older than the typical SaaS visitor.

- Minimum tap target: 48x48px.
- Minimum body font size on mobile: 17px.
- Contrast: AAA on body copy (7:1).
- All interactive elements need visible focus rings (`focus-visible:ring-2 focus-visible:ring-brand-500`).
- All animations wrapped in `motion-safe:`.
- All meaningful images need alt text. Decorative hero cards take empty alt attributes.
- Every interactive widget operable by keyboard.
- Test the page at 375px width.

---

## 9. The conversion-rate disciplines applied

These are the levers used by Stripe, Linear, Vercel, and Notion, applied to OpenHouse:

- **Hook in the first viewport.** Headline + one image + one CTA, no scroll required to understand the product.
- **Show, don't describe.** Every claim has a visual proof.
- **Specificity beats abstraction.** "31 units sale agreed on The Coppice" beats "track your pipeline at a glance."
- **One idea per section.** If a section has two ideas, it has zero.
- **Defer the demo CTA.** The demo CTA arrives once, at the peak-end moment, oversized.
- **Real proof, never invented.** Logos, quotes, numbers, names. If you don't have them yet, the section is shorter, not faker.
- **Internal cross-links earn trust.** Every page links to the other module pages at the bottom. A visitor who clicks through three pages is roughly 5x more likely to book a demo than one who reads one page.

---

## 10. The order of work

1. Refurb each module page in this order: **Build, Sales, Handover, Intelligence, Care**.
2. Once all five are done, refurb the **homepage** last. The homepage is the integration of everything that lives on the module pages, so it can only be properly refurbed after they exist.

Each module page should be a single PR, single branch (`feat/<page>-marketing-refurb`), independently revertible. Don't combine them. Each one is reviewable in isolation.

Read the existing version of the page first, every time, before writing a single line of new code. Reuse every shared component the existing site already has.

---

## 11. Acceptance bar for every page

Every page brief includes its own specific acceptance criteria. These global ones apply to every page without exception:

- [ ] Page reuses the shared component vocabulary, no bespoke styling for things already designed
- [ ] Page has exactly one "money shot" section, visually heavier than every other
- [ ] Page has exactly one "Book a Demo" CTA, oversized, at the peak-end position
- [ ] Page passes the 5-second test (a stranger can identify what it is and who it's for in 5 seconds)
- [ ] No em dashes anywhere in the diff (`git diff main | grep -P "[\u2013\u2014]"` returns zero)
- [ ] No banned words anywhere in the new copy
- [ ] All icons are Lucide React
- [ ] Body text is 17px+ on mobile
- [ ] Page renders cleanly at 375px, 768px, 1024px, 1440px
- [ ] Tap targets are 48px minimum
- [ ] All animations wrapped in `motion-safe:`
- [ ] Lighthouse scores in the same band as the rest of the site
- [ ] Platform cross-link strip at the bottom links to all other module pages

---

## 12. One final principle

The website is not a brochure. It is the first product the buyer experiences. Every choice on every page is a signal of how the actual product is built. If the marketing site is rushed, the product feels rushed. If the marketing site is honest, calm, and specific, the product feels honest, calm, and specific.

A reviewer should not be able to tell which page was built first. A visitor should not be able to tell where the marketing site ends and the product begins.

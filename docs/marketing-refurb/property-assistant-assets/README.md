# Property Assistant Page, Real-App Reference Assets

Sam has provided real, working renderings of the Property Assistant homeowner app from the OpenHouse promo video. These references show the actual production design language, chrome, typography, colours, brand tokens, and interaction flows. Use them as the source of truth for everything visual in the Property Assistant page mockups.

This addendum supersedes any conflicting design language in `03-property-assistant-brief.md`. The brief's underlying architecture (hero, money shot, scenarios, persona block, peak-end CTA) stands. What changes are the specific UI details inside the phone mockups so they match the real app exactly.

---

## What's in `source-references/`

| File | What it contains |
|---|---|
| `homeowner-app.jsx` | The top-level Property Assistant app shell (iOS status bar, viewport, scaffolding) |
| `homeowner-phone-screens.jsx` | Every individual screen: chat home, heat pump diagnosis, floor plan, breadth montage (manuals, certs, solar, maps, noticeboard) |
| `homeowner-scenes.jsx` | The narrative sequencing of the screens for the promo |
| `tokens.css` | The brand tokens: gold (#D4AF37), warm cream backgrounds, exact typography, spacing |
| `animations.jsx` | Easing curves and animation timings used in the real app |

## What's in `brand-assets/`

- `openhouse-mark.png`: the gold-on-cream OpenHouse mark used in the header and as a centred branding device
- `openhouse-ai-header.png`: the "OpenHouse Ai" wordmark used in the app header
- `openhouse-ai-centered.png`: the larger centred version used on the chat home screen
- `openhouse-logo-horizontal.png`: the full horizontal logo for any web-side display

## What's in the root

- `OpenHouse Property Assistant Promo.html`: open this file in a browser to see the actual app rendering live. This is the visual standard. Match it.

---

## Specifically what to use for each section of the page

### Hero (Section 1)

The right column of the hero is a single oversized iPhone mockup. Build it using the real Property Assistant chrome from `homeowner-phone-screens.jsx`:

- Header: white background, gold OpenHouse Ai mark + wordmark left, EN selector pill, mode toggle (moon icon), gold avatar circle right
- Body: white background, cream undertones
- Bottom: 4-tab nav with Chat / Map / News / Docs, plus the "Ask anything..." input pill with mic and send icons

The chat content shown in the hero should be one of the real example questions from the homeowner app. Recommended: the kitchen warranty question, which works visually because it shows a clean text-only answer.

### Money shot (Section 2)

This is the most important visual on the entire site. The brief specifies a two-phone side-by-side layout: a heat pump error photo upload on the left, the assistant's diagnostic response on the right.

**Correction to the brief based on the real app:**

The real Property Assistant heat pump flow uses **E3** as the error code, not E4, and references **Mitsubishi Ecodan** as the heat pump model (not Daikin Altherma). Use the real values, not the brief's placeholder values. Specifically:

- Resident prompt (real, from the app): *"There's a red light flashing on my heat pump and it's saying E3. What do I do?"*
- Assistant response (real, from the app):
  > **E3** means high pressure in your heat pump, usually a **blocked air filter**. Here's how to clear it:
  >
  > • Switch off at the unit and the isolator. Wait 3 minutes.
  > • Find the indoor unit, usually in your utility or hot press.
  > • Check the air filter behind the front panel.
  > • Rinse, dry for 20 minutes, refit.
  > • Switch back on. The red light clears in 2 minutes.
  >
  > *Source · your Mitsubishi Ecodan installation manual, page 14.*

The "Source · your Mitsubishi Ecodan installation manual, page 14" line is critically important. It is the proof point for the "doesn't make things up" trust mechanism. Render it visibly underneath the checklist, separated by a dashed border, with a small gold info icon, exactly as in the real app.

**On the photo upload framing:** the brief calls for a literal photo upload (resident takes a picture of the display, the assistant looks at the image). The real promo app demonstrates text-based diagnosis with a citation, not image-based diagnosis. This is a real divergence. Two options:

**Option A (recommended):** match the real app exactly. Show the text-based flow with the Mitsubishi Ecodan citation, no photo upload UI. The "Now it sees what your residents see" headline still works because the assistant *understands* the resident's situation (the E3 code, the specific heat pump, the right fix) with sourced specificity. This is honest and ships immediately.

**Option B:** keep the brief's photo-upload framing if the production app's image-diagnosis feature is real and ready. Sam should confirm. If it's not yet shipped, use Option A and revisit when image-diagnosis lands.

The brief was written assuming image-diagnosis was a live, marketable feature. If it's still in development, Option A is the safer ship. Either way, use the real E3 / Mitsubishi Ecodan / page 14 citation, not the placeholder Daikin Altherma E4 references.

### Three scenarios (Section 4)

The brief specifies three scenarios. Replace its placeholder scenarios with three real flows from the homeowner app:

**Scenario 1: Floor plans on tap.** Resident asks "What size is my living room?" Assistant responds with the floor plan diagram showing the highlighted living room with dimensions (28.5 m², 5.7 × 5.0). Caption: *"The question that used to need a paper plan in a drawer."*

(Source: `LivingRoomScreen` in `homeowner-phone-screens.jsx`.)

**Scenario 2: Heat pump diagnosis.** As described above in the money shot, but here a smaller framed version for the scenarios row. Caption: *"The question that used to mean a callout."*

**Scenario 3: Documents and warranties.** Resident asks "When does my BER cert expire?" Assistant responds with the BER report card showing "A2 · valid until 2036 · ON FILE". Caption: *"The document that used to live in a binder no one opened."*

(Source: the Docs section of `HomeownerBreadthScreen`.)

### What it knows (Section 3, four-card grid)

The real app already organises its capabilities into the same four-card structure the brief specifies, exactly mapped to the real homeowner app sections:

- **Every appliance in this home** → maps to the "YOUR APPLIANCES" frames in `HO_BREADTH` (heat pump, solar + battery)
- **Every document for this home** → maps to "YOUR DOCUMENTS" frame (HomeBond cert, BER report, appliance manuals)
- **Every walkthrough your team recorded** → from the underlying brief, no direct app analogue, keep as written
- **Every reminder this home needs** → maps to the badge system in the breadth frames (Annual service "Due in 47 days", BER "valid until 2036")

You can lift the real example data verbatim from the breadth frames in `homeowner-phone-screens.jsx`:

- HomeBond cert · Policy MB-44219 · ON FILE
- BER report · A2 · valid until 2036 · ON FILE
- Appliance manuals · 12 documents indexed · INDEXED
- Solar generated today · 9.5 kWh · LIVE
- Saved this month · €87.12 · +4% MoM
- Battery · 68% solar charge · CHARGING
- Annual service · Due in 47 days · BOOKED

These are illustrative product UI data (Category D in the claims audit) and safe to use, since they're shown as example product responses, not statistical claims about the world.

---

## Design tokens to extract from the real app

Read `tokens.css` and use those exact tokens in the Property Assistant page mockups. Specifically:

- The gold: `#D4AF37` (matches the site's brand-500)
- Background warm cream: not pure white, slightly warmed
- Text 1 (primary): the exact dark used in the app
- Text 2 (secondary): the exact muted grey
- Border: the exact light divider colour
- Font: var(--font-sans), matched to the site's existing Inter stack
- Border radius for cards: matches the existing site

If `tokens.css` defines a value that conflicts with the marketing site's tokens, prefer the marketing site's token (since the site has to remain cohesive across pages). The intent is that the phone mockups feel like the real app, not that the entire marketing page restyles itself around the app.

---

## What you should NOT do

- **Do not embed the promo HTML directly in the marketing page.** The promo is animated and runs at a specific timing; the marketing page mockups should be still frames or short loops, not full promo embeds.
- **Do not invent new Property Assistant UI patterns.** If a screen isn't in the source references, don't make one up. The marketing page should only show flows that exist in the real app.
- **Do not change the brand colours or fonts in the mockups to match the marketing site's exact palette.** The mockups should feel like the actual product, which means using the app's own warm-cream and gold treatment. The contrast between the marketing page's dark surfaces and the warm phone mockups is *desirable*: it makes the phones feel like real objects on the page.

---

## How to integrate this addendum

In Session 2, after attaching the marketing-refurb docs as usual, also tell Claude Code:

> Real Property Assistant app renderings are in `docs/marketing-refurb/property-assistant-assets/`. The `source-references/` folder contains the actual app's JSX components for the homeowner side. The `brand-assets/` folder contains the real logo and mark assets. Open `OpenHouse Property Assistant Promo.html` in a browser preview to see the live render. Use these as the visual source of truth for every phone mockup on the page. The README in the assets folder explains what to use where.

That's enough for Claude Code to pick up the references and build the mockups against the real app, not against a generic iPhone template.

# Homepage Edit Brief (v3, surgical)

> Read `00-master-playbook.md`, `00b-simplified-architecture.md`, and `VERIFIED-STATS-REPLACEMENTS.md` first.
>
> **This brief supersedes `01-homepage-brief-v2.md`.** That document called for a homepage rebuild. Sam has decided the existing homepage works and should be kept. This brief specifies the surgical edits required to (a) update the nav to the new five-product structure, (b) insert a flagship Property Assistant section as the new visual peak, and (c) replace any fabricated statistics with verified ones.

---

## What you do NOT change

The existing homepage works. The following elements stay exactly as they are:

- **The dark hero gradient and gold OpenHouse mark watermark**
- **The headline "One platform for every stage of property development"** with "every stage" in gold
- **The four floating cards on the right of the hero** (Sales status, Build compliance, Handover AI, Intelligence stats). These continue to represent platform capabilities at a glance, even though the underlying nav now has different names.
- **The pill at the top of the hero** ("Live on active developments today"), although the wording inside it may need to change, see below
- **The "Book a Demo" and "Explore Modules" CTAs** in the hero, though the secondary CTA label should change (see below)
- **Any existing "scroll to explore" indicator** at the bottom of the hero
- **The general dark/light section rhythm** of the rest of the page

The instinct should be to preserve every successful element of the current page and add to it surgically, not to second-guess what's already working.

---

## What you DO change (in order)

### Change 1. Nav: replace the six module items with the new five-product structure

Currently the nav reads (from the screenshot):

```
Sales  |  Build  |  Handover  |  Intelligence  |  Care
```

Update to:

```
Property Assistant  |  Developer Dashboard  |  Agent  |  Intelligence  |  Care
```

Apply this everywhere the old nav appears: top nav, mobile nav, footer Products column, and any inline cross-links elsewhere on the homepage. Sales, Build, and Handover disappear from the nav and footer entirely. Their routes (if any) should redirect to `/developer-dashboard`.

### Change 2. Hero pill: update the live-today text

The current hero pill reads "Live on active developments today" (per the screenshot). Memory says only Longview is in production at present. The honest replacement reads:

```
Live on a 1,000-home pipeline at Longview Estates Cork
```

This is stronger than the vague version because it names a real Irish development and a concrete scale. It also positions Sam-as-founder-developer naturally for the Built by a Developer section later in the page. If multiple developers are in production by the time the homepage edit ships, replace with the most accurate honest version, but never use a generic phrase that implies more breadth than exists.

### Change 3. Hero secondary CTA: update label

The current secondary CTA appears to read "Explore Modules". The new label:

```
See the products
```

The new label maps to the new five-product structure and the simplified architecture. "Modules" was the old vocabulary and should disappear from the homepage. The button anchors to Section 2 below.

### Change 4. Add Section 2: "Two products. One platform." (the simplification beat)

Insert this section directly after the hero, before any other content. This is the new beat that teaches the simplified product map.

**Layout:** light surface (the first light section after the dark hero). Full-width section split into two halves, side by side. Centred above the split, a single short heading.

**Heading (display, dark, centred):**

```
Two products. One platform.
```

**Sub-line (body-lg, neutral-700, max-w-2xl, centred):**

```
Both connect to the same data. Your residents and your team see different views of the same source of truth.
```

**Left half: Developer Dashboard card**

- Lucide `LayoutDashboard` icon
- Small label above: "For developers"
- Heading: "Developer Dashboard"
- Body (3 short lines):
  - The control room for everything you build.
  - Live pipeline, documents, handover, compliance, residents, reports.
  - Works for build-to-sell, build-to-rent, and student accommodation.
- Link: "See the Developer Dashboard →" linking to `/developer-dashboard`

**Right half: Property Assistant card**

- Lucide `Smartphone` icon
- Small label above: "For residents"
- Heading: "Property Assistant"
- Body (3 short lines):
  - The app every buyer and resident gets in their pocket.
  - Documents, manuals, walkthroughs, and an AI that answers questions from text or photos.
  - Available the moment they pick up the keys.
- Link: "See the Property Assistant →" linking to `/property-assistant`

Rationale: this is the one new beat that needs to land before any other content. It teaches the simplified mental model that the new nav implies. After this section, a developer scanning the page understands the product structure and can keep reading without confusion.

### Change 5. Insert flagship Property Assistant section (the new visual peak)

This is the most important change in the entire edit. Sam has called the Property Assistant "the main event." The homepage must now visibly treat it as the main event. Insert this section roughly two-thirds of the way down the page, after the existing platform-features content and before the existing "Built by a developer" or equivalent credibility section.

This is the homepage's **money shot.** It should be the visually heaviest section on the page, full-bleed, dark surface, given more weight than anything except the hero. This is the peak in peak-end.

**Layout:** full-width dark section. Two large iPhone mockups side by side (collapsing to stacked on mobile). The two phones tell a sequential story: a resident takes a photo of a fault, the Property Assistant responds with a fix.

**Left phone:**

The resident's chat input with a photo just uploaded. The photo: a heat pump display showing "E4" in red. The resident's typed message above the photo: *"This just came on. Is it serious?"* A small uploading shimmer in gold.

**Right phone:**

The assistant's fully-rendered response. Inside the response:

- A small thumbnail of the photo
- Plain-language text: *"That's an E4 error on your Daikin Altherma 3 R, the heat pump in your utility room. E4 means low water flow, usually caused by a closed valve or air in the system. Not urgent, but should be cleared today. Here's the 60-second check your developer recorded for this exact unit. If it doesn't fix it, I'll send the issue to your developer's customer care team."*
- An embedded video thumbnail labelled "60-second pressure check"
- A "Resolved? Let me know" pill at the bottom

**Heading above the two phones (display, white, centred):**

```
Now it sees
what your residents see.
```

**Sub-line (body-lg, neutral-300, max-w-2xl, centred):**

```
A resident takes a photo. The Property Assistant looks at the image, identifies the specific equipment, checks against the manuals you uploaded, and walks them through the fix. Not a generic chatbot. The actual help, for the actual home, from the actual photo.
```

**Below the two phones, a single muted CTA link:**

```
See how the Property Assistant works →
```

Linking to `/property-assistant`. This CTA must be visually subordinate to the page's main Book a Demo CTA (which still appears at the peak-end position later). Style as a quiet text link with a gold arrow, not a pill.

Rationale: this section is the WOW moment Sam called for. It's the single thing that elevates the homepage from "main event in the mix" to "main event of the page." Image-diagnosis is the differentiating capability and the homepage must make it impossible to miss. The CTA links to the Property Assistant page for visitors who want to dig deeper, but the page's primary CTA (Book a Demo at peak-end) is unaffected.

### Change 6. Specialist strip (the three smaller cards)

If the existing homepage does not already have a section that introduces Agent, Intelligence, and Care as three smaller specialist tools, add one. If it does, update the names and routes only.

**Layout:** three small cards in a row, light surface, after the Property Assistant money shot.

**Heading above (heading-md, dark, centred):**

```
Three specialist tools that fit the same platform.
```

**Sub-line:**

```
Built for the people working alongside you on every scheme.
```

**Card 1, Agent:**
- Icon: `Headphones`
- "Voice-first AI for estate and letting agents."
- Link: "See Agent →" → `/agent`

**Card 2, Intelligence:**
- Icon: `Sparkles`
- "Ask anything across your portfolio, get the answer with sources."
- Link: "See Intelligence →" → `/intelligence`

**Card 3, Care:**
- Icon: `LifeBuoy`
- "Aftercare AI for renewable energy installers."
- Link: "See Care →" → `/care`

Each card is visually smaller than the two-product split in Change 4. This is deliberate. The hierarchy is: two main products (large), three specialists (small).

### Change 7. Replace any fabricated statistics with verified ones

If the existing homepage carries any statistics not sourced (industry estimates, "1000s of users", etc), replace them with verified Irish-market stats from `VERIFIED-STATS-REPLACEMENTS.md`. The recommended replacement strip:

```
36,284 new homes      Completed in Ireland in 2025
240,964 tenancies     Registered with the RTB
3,609 heat pumps      Installed under SEAI schemes in 2024
```

**Footnote underneath the strip (small grey text, centred):**

```
Sources: CSO New Dwelling Completions Q4 2025. RTB Q4 2024 Profile of the Register. SEAI Record Year of Progress 2024.
```

Placement: after the existing platform-narrative section (where the current homepage talks about the lifecycle from Sale through Build to Handover), but before the Property Assistant money shot. Or wherever the existing homepage has a similar "live in the market" beat. Replace, don't add a second one.

### Change 8. Keep the "Built by a developer" beat

If the existing homepage already has a section establishing Sam-as-founder-developer, leave it as is or strengthen it lightly. If it doesn't have one, add the following section after the specialist strip and before the peak-end CTA.

**Heading (display, dark, centred):**

```
Built by a developer, for developers.
```

**Sub-line (body-lg, neutral-700, max-w-2xl, centred):**

```
OpenHouse was built by Sam Donworth, founder of Longview Estates Cork, while running a 1,000-home development pipeline. Every workflow exists because it was missing from a real developer's day. We use it on our own schemes.
```

Optional: small photo of Sam on site (not a corporate headshot), with caption *"Sam Donworth, OpenHouse founder and developer at Longview Estates Cork."*

This is the lever no competitor can match. The fact that the platform was built by a working developer is the single most powerful credibility signal on the site. Keep it visible.

### Change 9. Footer Products column

Update the footer Products column to list the new five products only:

- Property Assistant
- Developer Dashboard
- Agent
- Intelligence
- Care

Remove any links to Sales, Build, or Handover from the footer. If those routes existed, they should 301-redirect to `/developer-dashboard`.

---

## What stays untouched (re-emphasised)

- The hero gradient, watermark, and main headline
- The four floating cards on the right of the hero (their content may need light updates to match the new products, but the staggered floating-card pattern itself stays)
- The dark/light section rhythm
- The scroll-to-explore indicator
- Any existing case studies, customer logos, or social proof that's already real and sourced (do not invent new ones)

If unsure whether to change something, default to keeping it. The instruction from Sam is clear: the existing homepage works.

---

## Acceptance criteria

- [ ] Nav reads: Property Assistant | Developer Dashboard | Agent | Intelligence | Care
- [ ] Sales, Build, and Handover are removed from the nav and footer
- [ ] Hero gradient, watermark, headline, and floating cards are unchanged
- [ ] Hero pill updated to "Live on a 1,000-home pipeline at Longview Estates Cork" (or the most accurate honest version available at ship)
- [ ] Hero secondary CTA reads "See the products"
- [ ] Section 2 "Two products. One platform." is inserted after the hero
- [ ] The flagship Property Assistant section with two phone mockups is inserted as the page's visual peak
- [ ] The image-diagnosis money shot uses a real Irish-market device reference (Daikin Altherma 3 R)
- [ ] The Property Assistant section's CTA "See how the Property Assistant works" is visually subordinate to the page's main Book a Demo CTA
- [ ] Three small specialist cards (Agent, Intelligence, Care) appear after the Property Assistant section
- [ ] Verified Irish-market statistics replace any fabricated ones, with sourced footnote
- [ ] "Built by a developer, for developers" credibility section is present, with Longview Estates Cork named
- [ ] Footer Products column lists the five new products only
- [ ] All standard playbook acceptance criteria pass (no em dashes, no banned words, Lucide icons only, 17px+ mobile body, 48px tap targets, motion-safe animations)

---

## The mental check before shipping

Pull up the existing homepage and the edited version side by side. Ask: *if a property developer principal opened the new version, would they instantly recognise it as the same site, with the Property Assistant elevated as the main event?*

If the new version feels like a redesign, you've gone too far. The instruction is "elevate the Property Assistant within the existing homepage", not "redesign the homepage."

If the new version feels like the old version with the Property Assistant inserted as the visual peak, the nav simplified, and the statistics made honest, you're done.

---

## One specific note for Claude Code

The Property Assistant money shot is the single most important new asset on the entire site. Two phones side by side. Real photo upload visible on the left, real assistant response visible on the right. If the iPhone mockups feel cheap, the entire homepage edit underperforms. If the response copy feels generic, the page underperforms. Spend the time to make those two phones feel like the actual product, with the actual specificity (Daikin Altherma 3 R, utility room, your developer's video, 60-second pressure check, escalate to customer care team) that distinguishes the Property Assistant from any other home app.

When in doubt, look at how Stripe shows its Checkout product in screenshots. Real-looking UI, real-looking content, plausible specificity. That's the standard for the Property Assistant section here.

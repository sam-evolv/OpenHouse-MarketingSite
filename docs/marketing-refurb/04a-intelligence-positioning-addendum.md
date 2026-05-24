# Intelligence Brief, Positioning Addendum

> Read this in conjunction with `04-intelligence-brief.md`. This addendum updates the page's positioning under the simplified architecture without changing the page's core content. Apply both documents together when building.

---

## Why this addendum exists

Sam has confirmed that Intelligence is a *feature of the Developer Dashboard*, not a separately licensed product. But it deserves its own marketing page in the nav because it's a powerful enough capability to attract attention on its own and serves as a cross-sell driver for the Developer Dashboard.

This is the same pattern Linear uses for Insights, Notion uses for AI, and Stripe uses for Atlas. A capability of the main product, given its own page in marketing because it warrants the focus.

The original Intelligence brief reads as if Intelligence is a standalone product. The page architecture and content all still stand. What changes is the framing in the hero and in the trust line, plus one new closing beat that links Intelligence back to the Developer Dashboard.

---

## Change 1. Hero sub-headline

Replace the existing sub-headline with one that explicitly names Intelligence as part of the Developer Dashboard:

```
Intelligence is the question-asking layer of the Developer Dashboard. Type or ask a question about any scheme, any unit, any cert, any resident, any number. Get the answer in plain language, with the data it came from.
```

The opening clause ("Intelligence is the question-asking layer of the Developer Dashboard") is doing the heavy lifting. It instantly resolves any ambiguity about what Intelligence is and how it relates to the rest of the platform.

## Change 2. Section 7 trust line update

The original Section 7 (Quiet trust line, "Every answer is sourced. Every source is yours.") stays. But the body underneath should be updated to make the Developer Dashboard relationship visible:

```
Intelligence draws its answers from the data already in your Developer Dashboard. Your pipeline, your compliance documents, your residents' questions. Nothing leaves your platform. Nothing is trained on your data to improve a generic model. Your data is yours.
```

## Change 3. Add a closing beat before the peak-end CTA

Between Section 7 (trust line) and Section 8 (peak-end CTA), add a short single-paragraph beat that closes the loop on the Dashboard relationship:

### New section: "Where Intelligence lives"

Light surface, centred, single column.

**Heading (heading-md, dark):**

```
Already part of the platform.
```

**Body (body-lg, neutral-700, max-w-2xl, centred):**

```
Intelligence ships as part of the Developer Dashboard. If you already use OpenHouse, Intelligence is in your account today. If you're evaluating OpenHouse, the demo will show you both the Dashboard and Intelligence in the same session.
```

Rationale: this is the line that converts a curious developer who's been reading the Intelligence page in isolation. By naming the relationship plainly, the page makes clear that booking a demo for Intelligence is the same action as booking a demo for the Developer Dashboard. No risk of the visitor thinking they have to buy two things.

## Change 4. Update the peak-end CTA sub-line

The original sub-line:

```
A demo takes thirty minutes. We'll load Intelligence against a development that looks like yours, and you can ask whatever questions are on your mind today.
```

Replace with:

```
A demo takes thirty minutes. We'll load the Developer Dashboard with Intelligence active against a development that looks like yours. Ask whatever questions are on your mind today and you'll see Intelligence answer in your own data context.
```

The CTA itself ("Book a Demo") stays unchanged.

## Change 5. Platform strip ordering

In the platform strip at the bottom of the page, list the Developer Dashboard first. The default ordering should signal that Intelligence is closest to the Dashboard:

```
[LayoutDashboard] Developer Dashboard    Where Intelligence lives.
[Smartphone]      Property Assistant     For residents.
[Headphones]      Agent                  For estate and letting agents.
[LifeBuoy]        Care                   For installers.
```

Note Intelligence does not appear in its own platform strip, since visitors are already on the Intelligence page.

---

## What stays unchanged

- The hero headline "Ask anything about any scheme. Get the actual answer."
- The try-it widget in Section 2 (this is the page's spine)
- The money shot in Section 3 (the full Intelligence interface)
- The three-step block in Section 4
- The four-card grid in Section 5
- The three persona cards in Section 6
- All verified statistics and Irish regulatory references
- All standard playbook discipline (no em dashes, no banned words, etc)

---

## Acceptance criteria specific to this addendum

- [ ] The hero sub-headline opens with "Intelligence is the question-asking layer of the Developer Dashboard"
- [ ] The trust line body names "your Developer Dashboard" explicitly
- [ ] A new "Already part of the platform" section appears between the trust line and the peak-end CTA
- [ ] The peak-end CTA sub-line mentions both the Developer Dashboard and Intelligence
- [ ] The platform strip at the bottom lists Developer Dashboard first
- [ ] The Intelligence page never claims Intelligence is sold separately

---

## Why this matters for conversion

A developer principal evaluating the platform should never have to wonder "do I have to buy this on top of the Dashboard?" Every page on the site is engineered to remove friction from the demo decision. A page that introduces ambiguity about what's included is a page that loses demos.

Naming Intelligence as part of the Developer Dashboard, plainly and confidently, removes that friction. It also positions Intelligence as a benefit of the platform a developer would already be buying, rather than as a separate cost to evaluate. That's the right frame for conversion.

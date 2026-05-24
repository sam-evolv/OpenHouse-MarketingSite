# OpenHouse Marketing Site, Simplified Architecture (v2)

> This document supersedes the original master playbook's product map. The science, components, copy rules, and accessibility standards from `00-master-playbook.md` all still apply. What changes here is the *product structure* and therefore the page list.

---

## The mental model the site must build

A developer should be able to leave the homepage with one sentence in their head:

> *OpenHouse has one platform with two main faces, the Developer Dashboard for me, the Property Assistant for every resident in every home I build, plus three specialist tools my partners use.*

That's the whole site, in one sentence. Every page reinforces that mental model. If a section can't be justified inside it, the section is wrong.

---

## The five products

```
1. Property Assistant     The resident-facing AI app, on every homeowner's phone.
                          Takes images. Diagnoses. Answers. Connects to the developer.

2. Developer Dashboard    The control room. Pipeline, units, buyers, documents,
                          handover, compliance, residents. Build-to-sell, build-to-rent,
                          and student accommodation, all in one place.

3. Agent                  Voice-first AI for estate and letting agents. Already specced.

4. Intelligence           Ask anything about any scheme, get the answer with sources.
                          Already specced.

5. Care                   Aftercare for renewable energy installers. Already specced.
```

That's it. Five products. Five nav items. Five pages.

---

## What changed from the old architecture

| Old (broken) | New (clear) |
|---|---|
| Sales (page) | Section inside Developer Dashboard |
| Build (page) | Section inside Developer Dashboard |
| Handover (page) | Section inside Developer Dashboard, plus the consumer side becomes the Property Assistant page |
| Intelligence (page) | Unchanged |
| Care (page) | Unchanged |
| Agent (page) | Unchanged |

The lifecycle framing ("Sale → Build → Handover → Ongoing") used to *be* the product map. In the new architecture, that lifecycle is still the developer's reality, but it lives *inside* the Developer Dashboard page as a feature view. The site's product map is simpler than the developer's job, because the site is selling the platform, not narrating the job.

---

## The new navigation

```
Property Assistant  |  Developer Dashboard  |  Agent  |  Intelligence  |  Care
```

Five items. Each clearly named. Each maps to a real product. No internal jargon.

- **Property Assistant** is named for what it is (an assistant, for the property)
- **Developer Dashboard** is named for who uses it and what it is (a dashboard, for developers)
- **Agent, Intelligence, Care** keep their existing names because they're already coherent

On mobile: same five items, hamburger menu.

On the homepage hero: the existing floating-cards pattern still works, but each card should represent one of the five products rather than one of the old six modules.

---

## The new page list and build order

1. **Homepage** (rebuilt around the five-product story)
2. **Developer Dashboard** (new page, replaces Sales + Build + half of Handover)
3. **Property Assistant** (new page, the resident-facing story including image diagnosis)
4. **Agent** (already built, no changes)
5. **Intelligence** (already specced, no changes)
6. **Care** (already specced, no changes)

The build order is changed from the old sequencing doc:

```
1. Developer Dashboard    (primary revenue, this is the page that converts)
2. Property Assistant     (the most visually compelling, the WOW moment)
3. Intelligence           (cross-sell to existing dashboard customers)
4. Care                   (different audience, secondary)
5. Homepage               (always last, integrates everything)
```

Agent stays as it is and doesn't need rework.

---

## The principle of clarity

A developer principal on a phone, between meetings, with five seconds before they decide whether to keep reading: they should be able to look at the homepage and say:

> *"I see. Property Assistant is what residents get. Developer Dashboard is what I get. The rest are extras."*

If the page doesn't deliver that in five seconds, it has failed. Every word of copy, every nav choice, every visual on the homepage is measured against that test.

---

## What stays the same from the original master playbook

Every other discipline in `00-master-playbook.md` still applies:

- The science (5-second test, Hick's law, Miller's law, picture superiority, Von Restorff, peak-end, loss aversion, IKEA effect, F-pattern scanning, identification)
- The shared component vocabulary (hero block, try-it block, money shot, before/after, three-step, four-card grid, persona block, trust line, peak-end CTA, platform strip, footer)
- The copy rules (no em dashes, no emoji in UI, banned words list, Irish/British spelling)
- The visual rules (gold #D4AF37, dark/light alternation, Lucide icons only, motion-safe animations, ease-premium curve)
- The accessibility bar (48px tap targets, 17px+ mobile body, AAA contrast, motion-safe, keyboard operable)
- The CTA discipline (one Book a Demo per page at peak-end, no mid-page CTA spam)
- The citation rule (every numerical claim has a sourced footnote, per `VERIFIED-STATS-REPLACEMENTS.md`)
- The honesty rule (no fabricated industry statistics, ever)

The simplification changes the architecture, not the standards.

---

## What replaces the old briefs

| Old brief file | Status under new architecture |
|---|---|
| `00-master-playbook.md` | Still active. Science and components apply universally. |
| `00a-sequencing-and-priority.md` | Replaced by this document's build order. |
| `01-homepage-brief.md` | Retired. Sam has decided the existing homepage works and should be edited surgically, not rebuilt. See `01-homepage-edit-brief-v3.md` for the precise edits. |
| `01-homepage-brief-v2.md` | Retired. Same reason. The v2 rebuild brief is now superseded by `01-homepage-edit-brief-v3.md`, which keeps the existing homepage and inserts the Property Assistant as the new visual peak. |
| `02-sales-brief.md` | Retired. Sales is now a section inside Developer Dashboard. |
| `03-build-brief.md` | Retired. Build is now a section inside Developer Dashboard. |
| `04-handover-brief.md` | Partially retired. The developer-facing handover content goes inside Developer Dashboard. The resident-facing content becomes the Property Assistant page. |
| `05-intelligence-brief.md` | Active, no changes. |
| `06-care-brief.md` | Active, no changes. |
| `07-agent-brief.md` | Active, no changes. |
| `CLAIMS-AUDIT.md` | Still relevant for honesty discipline. |
| `CORRECTIONS.md` | Mostly superseded by the rebuilt pages, but the honesty rule it establishes still binds. |
| `VERIFIED-STATS-REPLACEMENTS.md` | Active. Every verified stat in there gets used in the new pages. |

The new bundle Claude Code reads is:

```
00-master-playbook.md
00b-simplified-architecture.md        (this file)
01-homepage-edit-brief-v3.md          (surgical edits to the existing homepage)
02-developer-dashboard-brief.md
03-property-assistant-brief.md
04-intelligence-brief.md              (with the positioning addendum below)
04a-intelligence-positioning-addendum.md   (frames Intelligence as part of the Developer Dashboard)
05-care-brief.md                      (unchanged)
06-agent-brief.md                     (unchanged)
VERIFIED-STATS-REPLACEMENTS.md
```

Ignore the old `02-sales-brief.md`, `03-build-brief.md`, `04-handover-brief.md`, `00a-sequencing-and-priority.md`, `01-homepage-brief.md`, and `01-homepage-brief-v2.md`. They describe an architecture that has been simplified, or call for a homepage rebuild that Sam has decided against.

---

## One final principle

The original mistake was treating *features of the platform* as if they were *separate products*. Sales, Build, and Handover are jobs the Developer Dashboard does. They're not products a developer buys. By collapsing them into one product page with multiple sections, the site stops competing with itself for the developer's attention and starts looking like the unified platform it actually is.

The platform was always one thing. The marketing site should be too.

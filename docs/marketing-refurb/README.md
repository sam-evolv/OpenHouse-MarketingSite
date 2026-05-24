# OpenHouse Marketing Refurb, Build Bundle

This folder contains the complete build brief for the simplified OpenHouse marketing site refurb.

## Read in this order

```
00-master-playbook.md                Science, components, copy rules, accessibility, standards
00b-simplified-architecture.md       The five-product structure
VERIFIED-STATS-REPLACEMENTS.md       Every real, sourced statistic for the live pages

01-homepage-edit-brief-v3.md         Surgical edits to the existing homepage (NOT a rebuild)
02-developer-dashboard-brief.md      Developer Dashboard product page (new)
03-property-assistant-brief.md       Property Assistant product page (new)
04-intelligence-brief.md             Intelligence product page
04a-intelligence-positioning-addendum.md   Frames Intelligence as part of the Developer Dashboard
05-care-brief.md                     Care product page (unchanged)
06-agent-brief.md                    Agent product page (already built, no rebuild)
```

## Build order

```
1. Developer Dashboard     (primary revenue, the page that converts)
2. Property Assistant      (the WOW page, image-diagnosis is the differentiator)
3. Intelligence            (apply both 04 and 04a together)
4. Care                    (different audience, secondary)
5. Homepage edit           (last, since it integrates the products above and is a
                            surgical edit, not a rebuild)
```

Agent is already shipped and needs no rebuild.

## The product map

```
NAV:  Property Assistant  |  Developer Dashboard  |  Agent  |  Intelligence  |  Care
```

Five products. Five pages. No more Sales, Build, or Handover as separate pages.

**A note on Intelligence.** Intelligence is part of the Developer Dashboard, but it gets its own marketing page because it's a powerful enough capability to attract attention on its own and serves as a cross-sell driver. The Intelligence page must name this relationship plainly (see `04a-intelligence-positioning-addendum.md`).

**A note on the homepage.** The existing homepage works and is being kept. The edit is surgical: update the nav, insert a flagship Property Assistant section as the new visual peak, replace fabricated stats with sourced ones, update the footer. Read `01-homepage-edit-brief-v3.md` carefully before touching anything on the homepage.

## What's in `archived-original-briefs/`

Old briefs from earlier iterations of the project, kept for reference but no longer the source of truth. Ignore these when building.

```
archived-original-briefs/
  00a-sequencing-and-priority.md           (replaced by the build order above)
  01-homepage-brief.md                     (replaced by 01-homepage-edit-brief-v3.md)
  01-homepage-brief-v2.md                  (replaced by 01-homepage-edit-brief-v3.md)
  02-sales-brief.md                        (folded into Developer Dashboard)
  03-build-brief.md                        (folded into Developer Dashboard)
  04-handover-brief.md                     (developer-side folded into Developer Dashboard,
                                            resident-side became Property Assistant)
  CLAIMS-AUDIT.md                          (honesty audit, learnings now in VERIFIED-STATS)
  CORRECTIONS.md                           (prose corrections, superseded by VERIFIED-STATS)
```

## The non-negotiable rules across every page

1. **No fabricated statistics.** Every number on a live page must be cited to a real source (CSO, RTB, SEAI, Law Society, CIF, ESRI). Use `VERIFIED-STATS-REPLACEMENTS.md`.
2. **No em dashes.** Anywhere. Use commas, full stops, or "to" instead.
3. **No banned words.** See `00-master-playbook.md` Section 6 for the full list.
4. **Lucide icons only.** No emoji in UI text.
5. **Irish/British English spelling** throughout.
6. **One Book a Demo CTA per page**, oversized, at the peak-end position.
7. **48px tap targets, 17px+ mobile body, AAA contrast** on body copy.
8. **Every page reuses the shared component vocabulary.** No bespoke styling for things already designed.
9. **The site should feel like one platform**, not six microsites.

## The mental model the whole site exists to install

> *OpenHouse has one platform with two main products: the Developer Dashboard for me, the Property Assistant for every resident in every home I build. Plus three specialist tools.*

If a page, section, or feature can't be justified inside that mental model, it doesn't belong on the site.

# Developer Dashboard Page Brief

> Read `00-master-playbook.md` and `00b-simplified-architecture.md` first. This brief assumes both.
>
> This page replaces the old Sales, Build, and developer-facing parts of the Handover briefs. Everything in those three pages is now one coherent product story under the Developer Dashboard.

---

## The one reader

A property developer principal, MD, or Construction Director with buying authority. They run between 1 and 12 active schemes. Some build-to-sell, some build-to-rent, some student accommodation. They've clicked through to this page from the homepage or directly from the nav. They want to understand what the Developer Dashboard actually does.

## The one goal

That principal books a demo.

## The fear

"Yet another piece of software my team won't use. Or worse, software that duplicates something we already have and forces my team to do double the entry."

## The desire

One control room for every scheme. Pipeline they can see in real time, not Friday spreadsheets. Compliance docs that organise themselves. Handover packs that build themselves. Residents who find their own answers. All on one platform, working across build-to-sell, build-to-rent, and student accommodation.

## The persuasive lever

**Comprehensiveness shown, not described.** This page must make the developer feel that whatever job they need done across the development lifecycle, the Dashboard handles it. The risk is that listing every feature feels like a SaaS brochure. The fix is to organise the page around the *four jobs* the Dashboard does, then show each one in action with a real-looking screenshot.

The four jobs map cleanly to what used to be separate pages, now folded into one product:

1. **Pipeline** (what was Sales)
2. **Documents and compliance** (what was Build)
3. **Handover** (what was Handover, developer side)
4. **Ongoing resident management** (new section)

Plus one cross-cutting capability: **build-to-sell, build-to-rent, and student accommodation all on one platform**.

---

## The page architecture

```
[1] HERO                  -> What the Dashboard is, in five seconds
[2] FOUR JOBS STRIP       -> The four things it does, named clearly
[3] PIPELINE              -> Job 1, with screenshot
[4] DOCUMENTS             -> Job 2, with screenshot
[5] HANDOVER              -> Job 3, with screenshot
[6] RESIDENTS             -> Job 4, with screenshot
[7] WORKS FOR EVERY MODEL -> Build-to-sell, BTR, student
[8] BUILT BY A DEVELOPER  -> Sam at Longview
[9] QUIET TRUST LINE      -> Data, adoption, integration
[10] PEAK-END CTA         -> Book a Demo
[11] PLATFORM STRIP       -> Cross-link to the other products
[12] FOOTER               -> Standard
```

---

## Section 1. Hero

**Job:** in five seconds, a developer understands what the Developer Dashboard is.

### Layout

Standard hero block.

**Breadcrumb badge:** "Developer Dashboard", Lucide `LayoutDashboard` icon.

**Headline (display, white, with one gold accent word):**

```
Your control room
for every home,
every scheme,
every stage.
```

The word **control** is the gold accent.

Rationale: "control room" is the metaphor the page is built around. A developer principal reads it and immediately understands the value proposition: visibility. The repetition of "every" hammers comprehensiveness.

**Sub-headline (one sentence, body-lg, neutral-300, max-w-xl):**

```
Live pipeline across every scheme. Compliance docs against every unit. Handover packs that build themselves. Residents who find their own answers. Build-to-sell, build-to-rent, and student accommodation, all on one platform.
```

Rationale: this sentence is the whole page in summary form. A visitor who reads only the hero still understands the four jobs and the cross-cutting capability.

**CTA row:**
- Primary gold pill: **"See it in action"** anchored to Section 3
- Secondary outline: **"Book a Demo"** linking to `/book`

### Right column, floating cards

Four cards drifting on a 6 to 8 second idle loop, motion-safe. Each represents one of the four jobs:

1. **Pipeline card (top):** "Riverside Gardens, 47 units" with a status bar: "Available 8, Reserved 12, Sale Agreed 18, Contracts Out 6, Closed 3". Small gold "Live" indicator.

2. **Compliance card (middle, offset right):** "Compliance, Unit A12, 87%". List underneath: "BCAR ✓, HomeBond ✓, BER pending, Fire safety ✓".

3. **Handover card (lower left, offset down):** Package icon. "Handover pack, Unit B7, ready". List: "Manuals, certs, warranties, walkthroughs assembled."

4. **Resident card (peeking from behind):** Chat icon. "Resident question, Unit 12". Body: *"How do I top up the heat pump? Answered by Property Assistant."*

Rationale: the four cards demonstrate the four jobs at a glance. Each is a different feature visible inside the Dashboard. The cards together preview the four sections below.

---

## Section 2. The four jobs strip

**Job:** name the four jobs the Dashboard does in clear language, so the visitor has a mental table of contents for the rest of the page.

### Layout

Light surface. Full-width thin band. Four small cards in a row (collapsing to 2x2 on mobile). Each card has a Lucide icon, a job name, and one short line.

```
[TrendingUp]    Pipeline       Live across every unit and every scheme.
[FileCheck]     Documents      Every cert against the unit it belongs to.
[KeyRound]      Handover       Packs that build themselves.
[MessageSquare] Residents      Their questions, your visibility.
```

Heading above (heading-md, dark, centred):

```
Four jobs. One Dashboard.
```

Rationale: this is the page's table of contents in visual form. A visitor scrolling fast can stop here and still understand what the product does.

---

## Section 3. Pipeline (Job 1, replaces the old Sales page)

**Job:** show a live pipeline at scale. The developer should look at this and recognise it as the view they wish they had.

### Layout

Dark surface. Section header on left, large screenshot on right (or stacked on mobile).

**Header (left column):**

Small label: "Job 1"

Heading (display, white):

```
A live pipeline,
not a Friday spreadsheet.
```

Body (body, neutral-300, max-w-md):

```
Every unit, every buyer, every stage, in one view. Filter by scheme, by stage, by agent. The slow deals are surfaced before they die. Solicitors who've sat on contracts for three weeks are visible without anyone having to ask.
```

Three small bullet points beneath:

- Aged contracts flagged automatically
- Buyers gone quiet, surfaced
- Reports drafted for your developer partners

**Screenshot (right column):**

A large screenshot of the Pipeline view. Visible elements:
- Scheme selector at the top: "Riverside Gardens, Cork"
- A list of units in a table, with columns: Unit, Buyer, Stage, Days at stage, Last action
- One row highlighted in soft gold drawing the eye to an at-risk deal
- A "Drafted: follow-up to solicitor" callout floating beside the highlighted row

### Honesty note: contextual stat

After this section, a small grey footnote strip:

```
Average time to complete a residential conveyance in Ireland: 10.4 weeks. Nearly one in seven deals fall through, mostly due to issues found too late. Pipeline catches them earlier.
```

Footnote source line (small grey): *Sources: IPAV, Irish Times Sept 2025.*

Rationale: verified Irish-specific market context, sourced. Establishes the problem Pipeline solves without making up statistics.

---

## Section 4. Documents and compliance (Job 2, replaces the old Build page)

**Job:** show a real-looking unit document view that a construction director would recognise as the view they wish they had.

### Layout

Light surface. Mirror of Section 3 (header on right this time, screenshot on left, to alternate the eye).

**Screenshot (left column):**

A large screenshot of the Documents view for a single unit. Visible:
- Header: "Unit A12, Riverside Gardens"
- A vertical compliance timeline from foundation through to handover, each milestone showing document status
- A side panel with the document tree organised by category (Compliance, Sub-contractor, Homeowner, Warranty)
- One document highlighted in soft gold with a "Missing" label

**Header (right column):**

Small label: "Job 2"

Heading (display, dark):

```
Every cert,
every doc,
against the unit
it belongs to.
```

Body (body, neutral-700, max-w-md):

```
BCAR, BER, HomeBond, fire safety, Part L, Part F, sub-contractor certs, homeowner manuals. The full Irish residential checklist, per unit, with status visible at a glance. Sub-contractors get scoped access to upload their own certs. The Certificate of Compliance on Completion Annex builds itself.
```

Three bullets:

- Sub-contractors upload their own certs directly
- Audit-ready, every document timestamped and versioned
- The CCC Annex assembles automatically

### Honesty note: contextual stat

```
Under SI 9 of 2014, a Certificate of Compliance on Completion must be registered with the Building Control Authority before any new building can be used, occupied, or sold. The Annex must include ancillary certificates from every designer and sub-contractor on the project.
```

Footnote source (small grey): *Sources: Building Control (Amendment) Regulations 2014; National Building Control Office.*

Rationale: instead of inventing a "€4,500 cost of delayed handover" figure, the page references the actual legal regime. Construction directors respect specificity.

---

## Section 5. Handover (Job 3)

**Job:** show that handover packs build themselves, which is the single biggest pain point in Irish residential construction.

### Layout

Dark surface. Header on left, screenshot on right.

**Header:**

Small label: "Job 3"

Heading (display, white):

```
Handover packs
that build themselves.
```

Body (body, neutral-300, max-w-md):

```
A week before handover, the Dashboard shows you exactly what's outstanding. The homeowner pack assembles itself from the documents already in the system. The Property Assistant for that home is configured automatically. The buyer scans a QR code at handover and their phone is linked to their home's portal.
```

Three bullets:

- Outstanding documents flagged a week before keys
- Pack assembles from existing data, no double entry
- Property Assistant configured per-home, ready at handover

**Screenshot:**

A handover-ready view. Visible:
- Unit identifier: "Unit B7, Riverside Gardens"
- A green "Ready for handover" status badge
- A list of the documents assembled: floor plans, BER cert, kitchen warranty, heat pump manual, fire safety cert, BCAR sign-off
- A QR code preview that links to the resident's Property Assistant
- A small "Send to buyer" button

---

## Section 6. Residents (Job 4)

**Job:** show the developer side of the resident experience. They see what residents are asking across every scheme, so they can fix documentation gaps for the next scheme.

### Layout

Light surface. Screenshot on left, header on right.

**Screenshot:**

A "Residents" view in the Dashboard. Visible:
- A list of recent resident questions across all active schemes
- For each: the resident's name, the unit, the scheme, the question, and how it was resolved (Property Assistant answered, or escalated to developer)
- A small chart showing question patterns ("Top topics this month: heat pump, kitchen, warranties")

**Header:**

Small label: "Job 4"

Heading (display, dark):

```
Their questions,
your visibility.
```

Body (body, neutral-700, max-w-md):

```
Every resident has the Property Assistant in their pocket. When they ask a question, the Assistant answers from the documents you uploaded for that specific home. When it can't, the question routes to you. You see every interaction, across every scheme, in one feed.
```

Three bullets:

- Property Assistant resolves what it can
- You see what escalated, and what didn't
- Question patterns inform your next scheme's documentation

Rationale: this section is what closes the loop. The Developer Dashboard isn't just a build-and-handover system, it's a continuous-improvement system. The data from the resident side feeds back into the developer's own documentation quality.

---

## Section 7. Works for every model (the cross-cutting capability)

**Job:** explicitly name the three buyer types (build-to-sell, build-to-rent, student accommodation) so any developer reading recognises their business model on the page.

### Layout

Dark surface. Three cards in a row.

Heading above (display, white, centred):

```
One platform. Every model.
```

Sub-line (body-lg, neutral-300, max-w-2xl, centred):

```
Whether you're selling units to private buyers, holding for rental, or operating student accommodation, the Developer Dashboard adapts. Same data spine, different lifecycle views.
```

### Card 1, Build-to-sell

- Lucide `Home` icon
- Heading: "Build-to-sell"
- Body: "Pipeline runs from first viewing to keys. Handover pack and Property Assistant configured per unit. Documents tied to the unit and transferred with the buyer."

### Card 2, Build-to-rent

- Lucide `Building` icon
- Heading: "Build-to-rent"
- Body: "Pipeline runs from completion to occupancy. Tenancies registered, RPZ compliance tracked, Property Assistant configured per apartment. Lease renewals handled through Agent if you use it."

### Card 3, Student accommodation

- Lucide `GraduationCap` icon
- Heading: "Student accommodation"
- Body: "Per-bed inventory. Academic-year lifecycle. Property Assistant configured per scheme with the rules and details students actually need. RTB-registered tenancies handled correctly."

### Honesty note

Beneath, a small grey strip:

```
240,964 private tenancies and 50,507 Approved Housing Body tenancies are currently registered with the RTB in Ireland. The Dashboard handles each tenancy type with the right compliance regime.
```

Footnote source: *RTB Q4 2024 Profile of the Register.*

Rationale: explicitly addressing the three models is the move that catches developers who otherwise might have assumed the platform was build-to-sell only. The RTB data legitimises the rental and student claims with real numbers.

---

## Section 8. Built by a developer (the credibility moment)

**Job:** the same credibility section that appears on the homepage. Sam is a working developer at Longview. This is the lever no competitor can match.

### Layout

Light surface. Single column, centred, generous whitespace.

Heading (display, dark, centred):

```
Built by a developer.
```

Sub-line (body-lg, neutral-700, max-w-2xl, centred):

```
The Developer Dashboard was built by Sam Donworth, founder of Longview Estates Cork, while running a 1,000-home development pipeline. Every feature exists because something was missing from a real developer's day. We use it on our own schemes.
```

Optional photo of Sam on site, with caption.

Rationale: this is the section that converts a skeptical principal. The Developer Dashboard page leans on this harder than any other page because the buyer is a peer of Sam's.

---

## Section 9. Quiet trust line

### Layout

Dark surface, centred.

Heading (heading-md, white):

```
Your data stays yours.
```

Body (body-lg, neutral-300, max-w-2xl):

```
Hosted in Europe. Your team adopts it in an afternoon, not a twelve-week implementation. Your existing tools (email, calendar, accounting, design software) keep working. Export everything at any time. You're never locked in.
```

Rationale: principal-level buyers care about data, adoption, and integration. One paragraph covers all three.

---

## Section 10. Peak-end CTA

### Layout

Light surface, oversized centred CTA.

Heading (display, dark, centred):

```
See it on a scheme like yours.
```

Sub-line (body-lg, neutral-700, max-w-2xl, centred):

```
A demo takes thirty minutes. Bring details of one of your live developments and we'll show you exactly how the Developer Dashboard would work for that scheme, configured for your model.
```

Primary gold pill, oversized: **"Book a Demo"** linking to `/book`.

Underneath: *"Or email sam@openhouseai.ie with questions first."*

Rationale: "bring details of one of your live developments" frames the demo as useful work, not a sales pitch. Developers respect that.

---

## Section 11. Platform strip

Standard. Cross-link to Property Assistant, Agent, Intelligence, and Care.

Heading above:

```
The rest of the platform.
```

Sub-text:

```
The Developer Dashboard is your control room. The Property Assistant is what your residents get. Agent, Intelligence, and Care are specialist tools for the partners working alongside you.
```

Five small cards linking to each product page (the same five-card strip used on the homepage).

---

## Section 12. Footer

Standard. Products column lists all five products.

---

## Acceptance criteria

- [ ] Breadcrumb pill reads "Developer Dashboard" with `LayoutDashboard` icon
- [ ] The hero headline reads "Your control room for every home, every scheme, every stage." with "control" in gold
- [ ] Section 2 names the four jobs in clear language: Pipeline, Documents, Handover, Residents
- [ ] Sections 3 to 6 each have one job, one screenshot, one heading, three bullet points
- [ ] Section 7 explicitly names build-to-sell, build-to-rent, and student accommodation as separate cards
- [ ] Every numerical claim has a sourced footnote in the format `Sources: [Body], [Document].`
- [ ] No fabricated statistics anywhere
- [ ] One Book a Demo CTA only, oversized, in Section 10
- [ ] The "Built by a developer" section is present in Section 8 and visually treated as a flagship moment
- [ ] All standard playbook acceptance criteria pass

---

## One specific note for Claude Code

The biggest temptation on this page will be to over-feature it. The Dashboard does a lot of things. A B2B marketing page that lists every feature is forgettable. A B2B marketing page that names the four jobs cleanly and shows each one in action with one screenshot is memorable.

If a feature doesn't fit inside one of the four jobs, it doesn't appear on this page. It might appear on a future product-detail page, or in the demo itself, but not here. Resist the urge to add a fifth job, a sixth section, or a list of "100+ features". The page wins on clarity, not on completeness.

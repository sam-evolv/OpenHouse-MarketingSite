# Intelligence Module Page Refurb Brief

> Read `00-master-playbook.md` first. This brief only covers what's specific to Intelligence.

## The one reader

A developer principal, MD, or director who has either already adopted OpenHouse for one of the other modules, or is evaluating the platform as a whole and ran into Intelligence as part of their research. They're senior, time-poor, and have been promised "AI insights" by a hundred SaaS tools before this one.

## The one goal

That principal books a demo.

## The fear

"AI dashboards are usually a sentence dressed up as a screenshot. I don't need more graphs. I don't need a chat bot that tells me obvious things. I need answers to the questions I actually have, about the schemes I'm actually running, drawn from the data my team actually uses."

## The desire

Ask any question about any scheme, any time, get a real answer based on real data. Pipeline status, revenue projections, compliance gaps, buyer queries, sub-contractor performance. The questions a principal asks their team five times a week, answered without asking anyone.

## The psychological lever this page leans on

**Demonstration over description.** Intelligence is the hardest module to sell because every competitor claims "AI insights" and every principal has been burned. Words don't move this audience. Watching it answer a real question, in real time, with real data references, is what moves it.

The page is built around one large interactive moment: a try-it widget where the visitor types a question and watches the assistant answer with references to real data. Everything else supports that one demonstration.

The secondary lever is **specificity**. The questions in the widget and the example answers must use real-sounding scheme names, real unit numbers, real regulatory references (Part F, Part L, BCAR). Abstract "what's our sales velocity?" examples will not move this audience.

---

## Section-by-section

### Section 1. Hero

**Layout:** standard hero block.

**Breadcrumb badge:** "Intelligence Module", Lucide `Sparkles` icon.

**Headline (display, white, with one gold word):**

```
Ask anything
about any scheme.
Get the actual answer.
```

The word **actual** is the gold accent.

Rationale: "actual" is the load-bearing word. It signals the page knows what generic AI dashboards usually deliver, and is offering something different. A principal reads "actual" and pauses, because no other product page they've seen has used that word.

**Sub-headline (body-lg, neutral-300, max-w-xl):**

```
OpenHouse Intelligence sits across your live sales data, compliance documents, financial projections, resident questions, and regulations. Ask a question. Get the answer with the data it came from. No graphs to interpret. No tools to learn.
```

**CTA row:**
- Primary gold: **"Ask it something"** anchored to Section 2 (the try-it widget)
- Secondary outline: **"Book a Demo"** linking to `/book`

**Floating cards:**

1. **Question card (top):** Question bubble, *"What's our projected revenue this month?"* with a small cursor.

2. **Answer card (middle, offset right):** AI response: *"Your three active developments are projected to close €1.84m this month, based on 9 sale agreed contracts ready to sign. Riverside Gardens is the biggest contributor at €910k."* Below it, three small "Source" pills linking to the underlying data.

3. **Compliance question card (lower left, offset down):** *"Does our ventilation comply with Part F?"* Answer: *"Yes, for Riverside Gardens and Meadow View. For Orchard Close, the assessment is outstanding from your M&E engineer. Last contacted 14 days ago."*

4. **Cross-scheme card (peeking from behind):** *"Across your portfolio, you have 158 units sale agreed and 3 units with missing fire safety certs (all in Orchard Close)."*

### Section 2. Try it (the IKEA effect, demonstration-first)

**Job:** the visitor types a question and watches Intelligence answer in real time. This section is the page's spine.

**Layout:** full-width dark panel. Inside it, a card with an input field at the top and a response area below.

The input field shows a placeholder: *"Ask anything about your developments..."*

Above the input, three suggested prompt pills:

- "What's our projected revenue this month?"
- "Does Riverside Gardens comply with Part F?"
- "Which units have missing fire safety certs?"

When the visitor taps a pill or types a question and submits, the response area animates in. Pre-built responses on the front-end. The response includes:

- A clear, plain-language answer in 2 to 4 sentences
- A "Sources" row at the bottom with 2 to 3 source chips (e.g. "Riverside Gardens pipeline", "Compliance log March 2026", "Building regulations Part F")
- A small "Ask a follow-up" prompt suggesting where the conversation would go next

Heading above the panel (heading-md, white, left aligned):

```
Try it. No sign-up.
```

Sub-line below the panel (body-sm, neutral-400):

```
This is the actual Intelligence interface. Every answer cites the data it came from. If it doesn't know, it says so.
```

Rationale: this widget is doing the entire job of the page. A principal who watches Intelligence answer a question they recognise (with sources) immediately understands the product. Everything below this section is just helping them justify the demo booking.

### Section 3. The money shot, full Intelligence view (the peak)

**Job:** show the full Intelligence interface at scale, demonstrating the breadth of what it can answer.

Full-bleed dark section. A large screenshot or short loop showing the OpenHouse Intelligence interface mid-conversation. Visible elements:

- The conversation panel with three or four exchanged messages, each showing the question and the answer with source citations
- A side panel showing "Today's briefing" with bullet points: revenue projection, urgent attention items, upcoming compliance deadlines
- A scheme selector showing the developer's three active schemes

Heading above (display, white, centred):

```
One assistant. Every scheme. Every system. Every question.
```

Sub-line (body-lg, neutral-300, max-w-2xl, centred):

```
Live sales data, compliance documents, financial projections, resident queries, Irish building regulations. Intelligence sits across all of it. Ask about one development or the whole portfolio. The answer is the same speed.
```

### Section 4. How Intelligence actually works (three-step block)

Light surface.

**Step 1. Your data, in one place.** (`Database`)
Sales pipeline, compliance certs, document library, resident questions, financial projections, all already on the OpenHouse platform.

**Step 2. Ask a question.** (`MessageSquare`)
Plain English. Voice or text. About one scheme or your whole portfolio. No syntax, no dashboards to learn.

**Step 3. The answer cites the data.** (`Link`)
Every answer comes with the source data it drew from. If Intelligence doesn't know, it says so. No hallucinations, no guesses.

### Section 5. What Intelligence does (four-card grid)

Dark surface.

1. **Cross-scheme questions answered.** (`LayoutDashboard`)
Ask about one development or your full portfolio. Pipeline, compliance, revenue, residents, anything.

2. **Live financial projections.** (`LineChart`)
This month's projected close. End-of-quarter forecast. Revenue per scheme. Pulled from live pipeline data, not a stale spreadsheet.

3. **Regulatory expertise built in.** (`BookOpen`)
Irish building regulations are in the assistant's knowledge. Ask whether your ventilation meets Part F or your insulation meets Part L and you get a real answer.

4. **Today's briefing every morning.** (`Sunrise`)
What needs your attention today. What's progressing. What's stuck. Delivered as a short briefing, customised to what you actually run.

### Section 6. Built for you (persona block)

Three cards.

1. **Developer principals.** (`Building2`)
You run the business. Intelligence holds the whole picture so you don't have to. Every scheme, every cost, every resident, askable.

2. **Construction and sales directors.** (`Briefcase`)
You run the operation. Intelligence answers the questions you'd otherwise ask your team five times a week.

3. **Finance and compliance leads.** (`Calculator`)
You run the numbers and the audit trail. Intelligence pulls projections from live data and compliance status from real documents.

### Section 7. Quiet trust line

Light surface, centred.

```
Every answer is sourced. Every source is yours.
```

Body underneath:

```
Intelligence draws its answers from the data already in your OpenHouse account. Your sales pipeline, your compliance documents, your residents' questions. Nothing leaves your platform. Nothing is trained on your data to improve a generic model. Your data is yours.
```

Rationale: this addresses the single biggest fear a principal has about AI. The fear that their commercial data is being used to train someone else's model. Stating the boundary directly is the trust mechanism.

### Section 8. Peak-end CTA

Dark surface, oversized centred CTA.

```
See it on your actual data.
```

Sub-line:

```
A demo takes thirty minutes. We'll load Intelligence against a development that looks like yours, and you can ask whatever questions are on your mind today.
```

Primary gold pill: **"Book a Demo"** linking to `/book`.

Underneath: *"Or email sam@openhouseai.ie if you have a specific question first."*

### Section 9. Platform strip and footer

Standard.

---

## Acceptance criteria specific to Intelligence

- [ ] Section 2 (the try-it widget) works on mobile, requires no sign-up, and is keyboard accessible
- [ ] The widget's pre-built responses include source citations (this is non-negotiable, the citations are the trust mechanism)
- [ ] All example questions and answers use real-sounding scheme names, real regulatory references, and real numbers
- [ ] The headline uses "actual" as the gold accent word
- [ ] The "no hallucinations" / source-citing trust mechanism is named in the hero, in the widget, and in the trust line
- [ ] All standard playbook acceptance criteria pass

---

## One specific note for Claude Code

The widget is the page. Spend the time to make it feel like a real product, not a marketing mock. The typing animation, the source chips, the realistic delays, the way the answer streams in. If the widget feels cheap, the page fails. If the widget feels like the actual product, the demo books itself.

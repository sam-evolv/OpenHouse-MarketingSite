# OpenHouse Agent, Marketing Page Implementation Brief (v3, final)

## Who this page is for and what it has to do

One reader: an Irish estate or letting agent who has just landed on `/agent`, curious, probably on their phone, probably between something else. They are not sceptical. They are *interested* and they have ninety seconds before something else pulls them away.

One outcome: that agent books a demo.

Everything else on the page is in service of that single moment. The page is not a brochure. It is a slope. Curiosity at the top, investment in the middle, emotional commitment at the bottom, demo CTA placed at the exact point where the agent's *want* outweighs their friction.

## The science we're building on

This page is engineered around six well-evidenced principles of how curious-but-time-poor visitors actually behave on a landing page:

1. **The 5-second test** (Nielsen Norman Group). Stay-or-leave is decided in 5 to 10 seconds. The hero answers *what is it, is it for me* before the second screenful.
2. **The IKEA effect.** Visitors who do something on the page convert roughly 3x harder than visitors who only scroll. We include one interactive moment, early.
3. **The picture superiority effect.** Images are remembered roughly 6x more than text. The money shot does more than 500 words of copy.
4. **Miller's law.** Working memory holds about four chunks. Lists of seven features are forgotten lists. We chunk in fours, max.
5. **The Von Restorff isolation effect.** One thing that stands out is remembered. We have exactly one "money shot": the voice-to-draft moment. Everything else supports it.
6. **The peak-end rule** (Kahneman). People remember the most intense moment of an experience and the end. The money shot is the peak. The final CTA is the end. Both must be deliberate.

The audience profile: Irish estate and letting agents, mostly mobile-first, often reading from a car or show house, time-poor, peer-to-peer in conversation. They are curious about AI, not afraid of it. They want to see whether this thing actually works, not be talked into anything.

---

## Pre-flight for Claude Code (do not skip)

```bash
git log --oneline -20
rg -l "Intelligence" --type tsx | head
ls app/
```

Open the existing Sales, Build, Handover, Intelligence, and Care pages in full. Open the shared nav, hero, and section components they import. The Agent page MUST reuse those exact components. If you're about to style something from scratch, stop. The pattern already exists.

Hard rules:
- No em dashes anywhere (commits, code, copy, comments). Use commas, full stops, or "to" instead.
- No emoji in product UI.
- Lucide React icons only.
- Irish/British English spelling.
- Primary gold: `#D4AF37` (brand-500), never any other gold.

---

## The slope

```
[1] HERO                  -> Hook the curiosity in 5 seconds
[2] TRY IT WIDGET         -> Reward the curiosity in 15 seconds
[3] THE MONEY SHOT        -> Deepen the imagination
[4] BEFORE / AFTER DAY    -> Make it personal
[5] HOW IT WORKS          -> Three steps, satisfies the "okay but how"
[6] WHAT IT DOES          -> Four cards, breadth without bloat
[7] BUILT FOR YOU         -> Mirror moment, "that's me"
[8] QUIET TRUST CALLOUT   -> The drawer-and-approve line, short
[9] LIVE TODAY + CTA      -> Peak-end: emotional commit + the demo CTA
[10] PLATFORM STRIP       -> Cross-link to the rest of the suite
[11] FOOTER               -> Standard, with Agent added
```

Each section has one job. Read the rationale at the top of each before building. The rationale is not filler. It tells Claude Code what to optimise for if a trade-off comes up.

---

## 1. Navigation

Add **Agent** to the main nav between **Intelligence** and **Care**:

`Sales | Build | Handover | Intelligence | Agent | Care`

Rationale: Agent shares the AI-assistant family with Intelligence. Placing it last after Care implies it's an afterthought.

Apply this everywhere: top nav, mobile nav, footer link list, homepage module grid. Active state matches the other module pages (gold accent identical to Sales / Build / etc).

Route: `/agent`.

---

## 2. Section 1. Hero (hook the curiosity)

**Job:** in five seconds, make a curious agent want to know more. The hero is not selling. It's promising the next 90 seconds will be worth their time.

**Constraint:** the headline must read in under two seconds. The sub-headline is one sentence.

### Left column

**Breadcrumb badge (top, exact same component as the other module pages):**
- Back link "← Platform" pointing to `/`
- Pill: text **"Agent Module"**, Lucide `Headphones` icon

**Headline (display size, white, left aligned):**

```
A colleague
who works
at the speed
of voice.
```

The word **voice** is the gold accent (`#D4AF37`). Same font weight, letter-spacing, and line-height as the homepage "every stage" treatment.

Rationale: "colleague" frames the product as a partner rather than a replacement. "Speed of voice" is concrete and slightly poetic. It also previews the central interaction (voice in, draft out) without describing it. A curious reader's next question is *how*, which is exactly what Section 2 answers.

**Sub-headline (one sentence, body-lg, neutral-300, max-w-xl):**

```
OpenHouse Agent listens between viewings, drafts the email, schedules the follow-up, pulls the report. You stay in your day. The admin stops piling up.
```

Rationale: four concrete verbs (listens, drafts, schedules, pulls), then a benefit framed in the agent's vocabulary ("admin stops piling up"). No claims, no hype.

**Hero CTA row:**
- Primary gold: **"Try the voice prompt"** anchored to Section 2
- Secondary outline: **"Book a Demo"** linking to `/book`

Rationale: a curious visitor pays off curiosity, not commitment. The primary CTA invites them to do the smallest possible thing. "Book a Demo" sits second, available but not pushed. It returns as the primary in the final CTA section, after the visitor has earned the want.

### Right column, floating cards

Same staggered floating-card pattern as the Build hero and the homepage hero. Reuse the existing component. Four cards drifting on a 6 to 8 second idle loop, motion-safe:

1. **Voice card (top, slightly tilted):** Mic icon, label "Listening". Transcript line: *"Email number 3 in Árdan View, ask if they've picked their kitchen."* Pulsing gold dot.

2. **Draft card (middle, offset right):** Envelope icon, label "Draft ready". Recipient: Conor Ryan. Subject: "Kitchen selection for No. 3 Árdan View". Two-line body preview. Gold "Approve" pill, ghost "Edit" beside it.

3. **Schedule card (lower left, offset down):** Calendar icon, label "Viewing scheduled". Body: *"Saturday 11:00, 7 Orchard Close, Sarah Doyle."* Gold "Confirm" pill.

4. **Renewal card (peeking from behind):** Small "RPZ" badge, label "Lease renewal". Body: *"Apartment 4B Bishopstown, proposed €1,632 (+2%, within RPZ cap)."*

Rationale: four jobs-to-be-done (sales, lettings, scheduling, compliance) so a visitor's eye lands on whichever card is closest to their world. Mirror neurons handle the rest.

---

## 3. Section 2. Try it (reward the curiosity)

**Job:** pay off the hero's promise inside 15 seconds. A curious visitor who taps something is now invested. This is the single most important conversion lever on the page.

**Constraint:** must work without sign-up, without permissions, on mobile. Three pre-built responses on the front-end, animated in with a typewriter shimmer. No real API call.

### Layout

Full-width dark panel. Inside it, a card with two halves.

**Left half:** a chunky Lucide `Mic` button (large, tappable, gold ring around it). Above it, three suggested prompts as tap-to-fill pills:

- "Email Sarah Doyle to confirm Saturday's viewing"
- "Pull this week's pipeline for Cairn Homes"
- "Renew the lease at 4B Bishopstown with the RPZ cap"

A typed prompt option underneath ("or type a prompt") for visitors who can't or won't use voice in the moment.

**Right half:** initially shows a soft "Tap a prompt to see what Agent drafts" placeholder. When the visitor taps a pill (or holds the mic and speaks, or types and submits), the right half animates into the resulting draft: a real-looking email, report, or calendar event, with Approve / Edit / Discard buttons in the same gold treatment used in the real product.

Heading above the panel (heading-md, white, left aligned):

```
Try a prompt. No sign-up.
```

Sub-line below the panel (body-sm, neutral-400):

```
This is the actual flow Agent uses on the job. Voice in. Draft out. You approve before anything sends.
```

Rationale: the visitor goes from passive to active in under a minute. The widget also shows, not tells, the drawer-and-approve pattern. The single line of sub-copy is the only place on the page where the trust mechanism is named in this section, which is deliberate. Section 8 reinforces it.

---

## 4. Section 3. The money shot (deepen the imagination)

**Job:** the one thing every visitor remembers. The voice-to-draft moment, full bleed, given more visual weight than any other section on the page.

**Constraint:** this section must work as a screenshot. A visitor who only sees this section on a forwarded email should still understand the product.

### Layout

Full-width dark section. Split screen.

- **Left:** iPhone mock at proper scale, showing the Agent voice screen. Large mic in the centre, a real transcribed instruction above it (*"Reach out to number 3 in Árdan View, ask if they've picked their kitchen"*). Animated waveform.

- **Right:** the draft drawer, full size, showing the resulting email exactly as it appears in the real app. Real-looking recipient, subject, three short paragraphs of body text. Approve / Edit / Discard buttons at the bottom.

Heading above the split (display, white, centred):

```
Voice in. Draft out. Day back.
```

Sub-line (body-lg, neutral-300, max-w-2xl, centred):

```
The work that used to take an hour at the desk happens in twenty seconds in the car. Same quality of email. Same tone. Same details. You just don't have to type it.
```

Rationale: the heading is three short phrases each ending in a strong stop. Reads like a beat. Stops the scan. The sub-line frames the value in time and place ("hour at the desk" vs "twenty seconds in the car") which is more vivid than any percentage. The visual does the heavy lifting.

---

## 5. Section 4. Before / after (make it personal)

**Job:** put the agent inside their own day, then show the same day with Agent in it. Identification is the most powerful conversion lever in a peer-to-peer audience.

**Constraint:** no statistics. The contrast is the argument. Tone is recognisably *Irish working day*, not American startup.

### Layout

Two columns, side by side. Each is a vertical timeline from 7am to 8pm with time slots and one short line each.

Heading above (display, white, centred):

```
A Tuesday, before and after.
```

### Left column (heading: "Tuesday today")

```
07:30  In the car. Phone propped on the dash, reading last night's emails at red lights.
09:00  At a viewing. Buyer asks about the warranty. You promise to dig it out and send it.
10:30  Driving to the next one. Two buyers waiting on contract updates.
13:00  Sandwich at the desk. Six follow-ups to write before the next viewing.
15:00  Show house. Phone buzzing. Three solicitors chasing the same buyer.
17:30  Office. Pulling the weekly pipeline for the developer. Spreadsheet open, no end in sight.
20:45  Home. Replying to the emails you didn't get to today.
```

### Right column (heading: "Tuesday with Agent")

```
07:30  In the car. "What's waiting on me today?" Briefing read aloud, twenty seconds.
09:00  At a viewing. "Send John the warranty cert for unit 3." Drafted by the time you're back in the car.
10:30  Driving. "Status on contracts for Conor and Mark." Both ready to approve.
13:00  Sandwich at the desk. Six drafts in the queue. Approve all in ninety seconds.
15:00  Show house. Walk-ins logged by voice. Follow-ups drafted before you leave.
17:30  Office. Pipeline report drafted overnight. Read it, tweak it, send it.
20:45  Home. Phone away.
```

Underneath, single sentence centred (body-lg, neutral-200):

```
The point is not to do more. The point is to leave at six.
```

Rationale: the timeline format defeats abstract feature lists. "Phone away" at 8:45pm is the sentence that does the work. It is the version of the day the agent secretly wants.

---

## 6. Section 5. How it works (three steps)

**Job:** satisfy the curious "okay, but how does it actually work" thought. Three steps, no more. If the visitor only reads the headings, they should understand the mechanism.

**Constraint:** each step is one sentence of body. Anything longer breaks the scan.

Reuse the same three-step component the Build or Care page uses.

**Step 1. You speak. (Lucide `Mic`)**

Tap and hold. Talk plainly, in the car or at the desk. No commands, no syntax.

**Step 2. Agent drafts. (Lucide `Wand2`)**

The system finds the right buyer, unit, and history, then writes the email in your tone. Every output lands in a review drawer.

**Step 3. You approve. (Lucide `CheckCheck`)**

One tap to send. One tap to edit. Nothing leaves your phone until you say so.

---

## 7. Section 6. What it does (breadth, chunked)

**Job:** show enough breadth that the visitor understands this isn't a one-trick tool, without overwhelming. Miller's law applies hard.

**Constraint:** four cards. Not six, not eight. If a fifth feature feels critical, it goes inside one of the existing four.

Four cards in a 2x2 grid (collapses to a single column on mobile). Each: Lucide icon, bold heading, two short sentences.

1. **Drafts every email worth writing.** (`Mail`)
Follow-ups, contract chases, kitchen selection nudges, solicitor queries. Agent knows who, why, and when.

2. **Schedules viewings on your calendar.** (`CalendarClock`)
Connect once. Agent proposes times that work, sends the confirmation, handles the reschedule when buyers cancel.

3. **Handles lettings end to end.** (`KeyRound`)
RPZ rent caps built in. Rent arrears flags. RTB reminders. Tenant communication.

4. **Pulls the report you'd build by hand.** (`BarChart3`)
Weekly pipelines for developers. End-of-week summaries for partners. Drafted, formatted, ready to send.

---

## 8. Section 7. Built for you (mirror moment)

**Job:** one of these three personas should make the visitor think *that's me*. Identification is the persuasion lever that does most of the closing work on this page.

**Constraint:** specific enough to be recognisable, not so specific they exclude. Three covers most of the Irish market.

Three cards in a row, collapsing to a stack on mobile. Same component as the existing site's persona cards if one exists.

1. **New homes sales agents.** (`HardHat`)
Selling 20 to 200 units across schemes. Agent keeps the pipeline moving and drafts the developer reports without you opening a spreadsheet.

2. **Letting agents with full portfolios.** (`Building2`)
Tracking 30 to 100 active tenancies. Agent handles renewals at RPZ-permitted rents, flags arrears, and keeps RTB compliance current.

3. **Sole practitioners and small offices.** (`UserRound`)
The agent is the office. Agent is the colleague who picks up the typing so you can stay on the phone and on the road.

---

## 9. Section 8. The quiet trust line

**Job:** name the trust mechanism (drawer-and-approve) one more time, calmly, without making it the page's spine. A curious visitor hasn't asked for reassurance, but they need to encounter the trust line somewhere visible before they book a demo.

**Constraint:** one short paragraph. No card. No icon grid. Just a quiet centred band of text.

Light background. Centred. heading-md, dark text. No flourishes.

```
You stay in control of everything that leaves your name.
```

Underneath, body-lg, max-w-2xl, neutral-700:

```
Every email, viewing confirmation, and renewal letter sits in a drawer until you tap Approve. Voice doesn't override that. The drawer is not a limitation. It's the part of the design that makes the rest of it possible to trust.
```

Rationale: this section is deliberately short and undecorated. For a curious audience, a long defensive section about safety would feel like the product is hiding something. A single confident paragraph signals *we've thought about this, here is the answer, let's move on*.

---

## 10. Section 9. Live today (peak-end, the demo CTA)

**Job:** the peak-end moment. The visitor has tried the widget, seen the money shot, recognised themselves, encountered the trust line. Now the demo CTA arrives at the highest point of *want*, not the lowest point of friction.

**Constraint:** the section must feel like an invitation, not a sales pitch. The CTA is the primary action on the page and gets the full weight of the design.

Full-width dark section. Subtle gold OpenHouse mark watermark behind the content.

Heading (display, white, centred):

```
Live in agents' pockets today.
```

Sub-line (body-lg, neutral-300, max-w-2xl, centred):

```
Agent runs on iOS and Android. Voice-first on the road. Full keyboard at the desk. We ship new features continuously based on what real agents tell us they need.
```

CTA row, centred, large:
- **Primary gold pill, oversized: "Book a Demo"** linking to `/book`. This is the page's hero CTA. It should feel more weighted than any other button on the page.
- Underneath the primary, two smaller app store buttons (Apple, Google Play) in a row, with a small "or get the app" label.

If a real customer quote exists, place it in a bordered quote card above the CTA row, with the agent's name, role, and location. If real download or active-user numbers are appropriate to share, they go in one line of stat text above the quote. If none of those exist yet, the section stays exactly as written above. Do not invent quotes or numbers. Curious audiences will check.

Rationale: this is the peak-end moment. Kahneman's peak-end rule says people remember the most intense moment of an experience and the very last one. The money shot is the peak. This section is the end. Both must be deliberate. Sized large, centred, calm.

---

## 11. Section 10. Platform strip

**Job:** show that Agent is part of a larger platform. Reinforces credibility and gives the visitor a path back to the rest of the site if they want to read more before booking.

Reuse the existing cross-product strip from the other module pages. Tiny module cards linking to Sales, Build, Handover, Intelligence, Care. Heading above:

```
Part of the OpenHouse platform.
```

Sub-text:

```
Developers run the dashboard. Residents get the homeowner app. Installers get Care. Agents get Agent. Same data, different surfaces.
```

---

## 12. Footer

Standard site footer. Add an "Agent" link under the Platform / Products column alongside the other module links.

---

## Copy rules (apply globally)

- No em dashes or en dashes. Use commas, full stops, or "to" / "and" instead.
- No exclamation marks.
- No emoji in any UI text.
- Banned words: revolutionary, cutting-edge, game-changer, leverage, synergy, seamless, robust, transform, supercharge, empower, unlock, unleash.
- Irish/British English spelling (organise, colour, prioritise, behaviour, recognise).
- Numbers: figures for anything over nine, words for one through nine. Currency in euro using €.
- Lowercase "agent" for the person, capitalised **Agent** for the product.
- Read every sentence aloud. If it sounds like a press release, rewrite it.

---

## Visual rules (matching the site)

- Primary gold: `#D4AF37` (brand-500). Never any other gold.
- Hero background: same dark treatment as the homepage and Build hero. Subtle gold OpenHouse mark watermark behind the cards.
- Section alternation: dark, dark, dark, dark, light, dark, dark, light, dark, light. This matches the rhythm of the existing module pages and gives the money shot (Section 3) and the final CTA (Section 9) the dark gravity they need.
- Icons: Lucide React only.
- Animation: `ease-premium` (`cubic-bezier(0.16, 1, 0.3, 1)`). Floating cards drift on a 6 to 8 second loop, motion-safe.
- Card corners, shadows, type scale: match the existing site exactly. If unsure, open the homepage hero in DevTools and copy the values.

---

## Accessibility (more important here than usual)

The audience skews older and is frequently on a phone in a moving environment.

- Minimum tap target: 48x48px (above WCAG minimum because of on-the-road use).
- Minimum body font size on mobile: 17px.
- Contrast: aim for AAA on body copy (7:1), not just AA.
- All interactive elements need visible focus rings (`focus-visible:ring-2 focus-visible:ring-brand-500`).
- All animations wrapped in `motion-safe:` to respect `prefers-reduced-motion`.
- All meaningful images need alt text. The hero cards are decorative and need empty alt attributes.
- The try-it widget must be fully operable by keyboard (tab to mic or to any prompt pill, space/enter to activate, arrow keys to move between prompts).
- The voice prompt mic button must have a clear non-voice fallback (the three pill prompts) since many visitors won't grant mic permission on a marketing page.
- Test the page at 375px width. If it breaks at 375, it breaks for half the audience.

---

## Acceptance criteria

- [ ] `Agent` appears in top nav between Intelligence and Care
- [ ] `Agent` appears in mobile nav and footer
- [ ] `/agent` route exists and is reachable
- [ ] Hero uses the same shared components as Build and Care heroes (not bespoke)
- [ ] Headline reads "A colleague who works at the speed of voice." with "voice" in gold
- [ ] Hero primary CTA is "Try the voice prompt" anchoring to Section 2; secondary is "Book a Demo"
- [ ] Section 2 try-it widget works on mobile, is keyboard accessible, has prompt pills as fallback if the mic isn't used, requires no sign-up
- [ ] Section 3 (the money shot) is visually heavier than every other section
- [ ] Section 4 before/after timeline renders cleanly on mobile
- [ ] Section 5 has exactly three steps, no more
- [ ] Section 6 has exactly four feature cards, no more
- [ ] Section 7 has exactly three persona cards
- [ ] Section 8 is short, undecorated, centred, no icons or cards
- [ ] Section 9 has "Book a Demo" as the primary action, oversized, centred
- [ ] No em dashes anywhere in the diff (run `git diff main | grep -P "[\u2013\u2014]"` and confirm zero results)
- [ ] No emoji in any UI text
- [ ] All icons are Lucide React
- [ ] Body text is 17px+ on mobile
- [ ] All animations wrapped in motion-safe
- [ ] Tap targets are 48px minimum
- [ ] Page renders cleanly at 375px, 768px, 1024px, 1440px
- [ ] Lighthouse scores in the same band as the existing module pages

---

## PR discipline

- Single PR, single branch: `feat/agent-marketing-page`.
- Atomic commits, no em dashes in commit messages.
- Don't touch unrelated files.
- Open the PR with two screenshots (desktop and 375px mobile) and a 10-second screen recording of the try-it widget.

---

## One final principle

If at any point you're about to build a component that already exists elsewhere on the site, stop and reuse it. The Agent page should be invisible at the seams. A reviewer should not be able to tell which module page was built first. This page is not a chance to show off the design. It's a chance to make a curious agent feel that the people who built this understood their job before they wrote a line of code.

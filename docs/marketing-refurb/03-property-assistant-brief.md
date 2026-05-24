# Property Assistant Page Brief

> Read `00-master-playbook.md` and `00b-simplified-architecture.md` first. This brief assumes both.
>
> This is a new product page. The resident-facing parts of the old Handover brief fold into this page. The developer-facing parts of Handover live inside the Developer Dashboard page instead.

---

## The one reader

This page has a slightly unusual audience structure. The page is *seen by developers* (because developers are who buys), but it's about *what residents get*. So the page must do two things at once:

1. **Show developers what they're offering their buyers** as a differentiator at handover
2. **Be visually beautiful enough** that the developer can imagine handing over a home with this as part of the experience

The single most important reader is still the developer principal who is evaluating the platform. But this page should feel like consumer-grade product marketing, because the product itself is consumer-facing.

## The one goal

That developer books a demo.

## The fear (the developer's, not the resident's)

"Will my residents actually use this? Or is it another app that lives on their phone for a week and then gets deleted?"

## The desire

A handover experience that visibly differentiates a home built by this developer from a home built by anyone else. An app that residents genuinely use because it solves real problems, not because they were forced to download it.

## The persuasive lever

**Show, don't describe.** The Property Assistant page is the most visual page on the entire site. Image-diagnosis is the WOW moment. The hero, the money shot, and the four-card grid all show the app *doing* things, not describing what it does.

The secondary lever is **the per-home specificity**. Most "smart home" apps are generic. The Property Assistant knows the buyer's specific heat pump model, their specific kitchen warranty, their specific BER cert. That specificity is what makes residents use it instead of deleting it.

---

## The page architecture

```
[1] HERO                  -> Beautiful, shows the app on a phone
[2] THE MOMENT            -> Image diagnosis money shot (peak)
[3] WHAT IT KNOWS         -> Per-home specificity, four card grid
[4] HOW RESIDENTS USE IT  -> Three real scenarios
[5] WHAT DEVELOPERS GET   -> Visibility on the dev side
[6] CONFIGURED AT HANDOVER -> QR code, ready day one
[7] DOESN'T MAKE THINGS UP -> The trust line
[8] PEAK-END CTA          -> Book a Demo (end)
[9] PLATFORM STRIP        -> Cross-link
[10] FOOTER               -> Standard
```

---

## Section 1. Hero

**Job:** in five seconds, the developer sees what the Property Assistant looks like and understands what it is.

### Layout

Standard hero block, but the right column gets significantly more visual weight than usual. The phone mockup is the centrepiece.

**Breadcrumb badge:** "Property Assistant", Lucide `Smartphone` icon.

### Left column

**Headline (display, white, with one gold accent word):**

```
Every home
gets its own
assistant.
```

The word **own** is the gold accent.

Rationale: "own" is the load-bearing word because it signals the per-home specificity that distinguishes this from any other home app. A developer reads "own" and understands this isn't a generic chatbot.

**Sub-headline (one sentence, body-lg, neutral-300, max-w-xl):**

```
Trained on the specific manuals, certs, warranties, and walkthroughs for one specific home. Residents type. Residents take photos. The Property Assistant looks, understands, and answers. Live the moment they pick up the keys.
```

Rationale: four short verbs (type, take, look, understand, answer) and one timing promise (the moment they pick up the keys) tell the developer the whole product.

**CTA row:**
- Primary gold pill: **"See it in action"** anchored to Section 2 (the image-diagnosis money shot)
- Secondary outline: **"Book a Demo"** linking to `/book`

### Right column

A single oversized iPhone mockup at proper scale, drifting slightly on a 6 to 8 second idle loop, motion-safe.

The phone screen shows a recent conversation thread:

- Resident message (with timestamp): *"What's the warranty on my kitchen tiles?"*
- Assistant response: *"Your kitchen tiles are the Porcelanosa Stark range, installed by [Tiler] in October 2024. The manufacturer warranty is 10 years against defects. Here's the warranty document and the care instructions for the Stark glaze."*
- Below: a small "Open document" pill linking to the actual warranty PDF

Behind the phone: subtle gold edge-glow, the OpenHouse mark watermark in the background. The phone should feel like the centrepiece of the section, not a corner asset.

Rationale: the hero is more visual than any other hero on the site, because this product is more visual than any other product on the platform. The phone is the proof.

---

## Section 2. The moment (image diagnosis, the money shot)

**Job:** the one section every visitor remembers. The image-diagnosis capability, full bleed, more visual weight than any other section on the page. This is the peak.

### Layout

Full-width dark section. Two large iPhone mockups side by side (collapsing to stacked on mobile). The two phones tell a sequential story: the resident takes a photo, the assistant responds.

**Left phone:**

The resident's chat input, with a photo they just took. The photo is of a heat pump display showing "E4" in red. Above the photo, the resident has typed: *"This just came on. Is it serious?"*

A small "Uploading..." indicator with a subtle gold shimmer.

**Right phone:**

The assistant's response, fully rendered. Inside the response:

- A small thumbnail of the photo the resident sent
- The assistant's text:
  > *"That's an E4 error on your Daikin Altherma 3 R, the heat pump in your utility room. E4 means low water flow, usually caused by a closed valve or air in the system. It's not urgent, but it should be cleared today.*
  >
  > *Here's the 60-second check your developer recorded for this exact unit. If it doesn't fix it, I'll send the issue to your developer's customer care team."*
- An embedded video thumbnail labelled "60-second pressure check"
- A "Resolved? Let me know" pill at the bottom

Heading above the two phones (display, white, centred):

```
Now it sees
what your residents see.
```

Sub-line (body-lg, neutral-300, max-w-2xl, centred):

```
A resident takes a photo. The Property Assistant looks at the image, identifies the specific equipment, checks against the manuals you uploaded, and walks them through the fix. Not a generic chatbot. The actual help, for the actual home, from the actual photo.
```

Rationale: this is the WOW. Two phones, side by side, telling a sequential story. A developer who sees this once will mention it in their next pitch meeting. The heading is three short phrases, each ending in a stop, designed to stop the scan.

---

## Section 3. What it knows (per-home specificity, four-card grid)

**Job:** show the breadth of what the Property Assistant is trained on, without overwhelming.

### Layout

Light surface. 2x2 grid of cards. Each card: a Lucide icon, a heading, two short sentences.

Heading above (display, dark, centred):

```
It knows this home,
not just any home.
```

Sub-line (body-lg, neutral-700, max-w-2xl, centred):

```
Configured at handover from the documents your team has already gathered. Updated whenever you upload something new. Residents get answers that match their actual home, every time.
```

### Card 1

- Lucide `Cog` icon
- Heading: "Every appliance in this home"
- Body: "Boiler model, heat pump make, kitchen appliances, EV charger, solar panels. The Property Assistant knows exactly what's installed and where it lives."

### Card 2

- Lucide `FileText` icon
- Heading: "Every document for this home"
- Body: "BER cert, BCAR completion, fire safety, kitchen warranty, solar manuals, HomeBond. The Property Assistant has them all and can show any of them on request."

### Card 3

- Lucide `Video` icon
- Heading: "Every walkthrough your team recorded"
- Body: "The 60-second video showing where the stopcock is. The walkthrough for the heat pump pressure check. The kitchen orientation tour. Loaded into the assistant for the home they were filmed in."

### Card 4

- Lucide `Bell` icon
- Heading: "Every reminder this home needs"
- Body: "Boiler service due. BER renewal coming up. Heat pump filter check. The Property Assistant notifies the resident at the right time and offers to book the right contractor."

Rationale: four cards, four jobs, no overlap. The pattern matches the Developer Dashboard's four-jobs layout, reinforcing that the two products are siblings.

---

## Section 4. How residents use it (three real scenarios)

**Job:** show three concrete scenarios so the developer can imagine their own buyers using this. Identification is the conversion lever.

### Layout

Dark surface. Three scenarios in a row (collapsing to stack on mobile). Each is a small phone mockup with a one-line question and a snippet of the assistant's response.

Heading above (display, white, centred):

```
The questions
their handover folder
was supposed to answer.
```

### Scenario 1

Phone shows:

> Resident: *"Where's my BER cert?"*
>
> Assistant: *"Right here. Your home has a B1 rating from your BER assessment in February 2024. Download the cert below."*

Caption underneath the phone: "The question that used to go to your customer care line."

### Scenario 2

Phone shows a photo of a thermostat with a flashing warning light.

> Resident: *"What's this light mean?"*
>
> Assistant: *"That's the Honeywell T6R Pro showing a 'no signal' warning. The thermostat has lost its connection to the receiver. Here's the 30-second re-pairing walkthrough..."*

Caption: "The question that used to mean a callout."

### Scenario 3

Phone shows:

> Resident: *"My boiler service is due. Can you help?"*
>
> Assistant: *"Yes. Your boiler is the Worcester Greenstar 30CDi Compact, last serviced October 2024. Next service is recommended for October 2025. Want me to send a request to your usual installer?"*

Caption: "The job that used to live on someone's to-do list, forever."

Rationale: three scenarios cover three different categories of question (where is X, what does X mean, can you do X). A developer reads each and recognises moments their own residents have asked. The captions tie each one back to what the developer's own team is currently bearing the cost of.

---

## Section 5. What developers get (the visibility loop)

**Job:** remind the developer that they see the resident side too. The Property Assistant isn't just for residents, it's a feedback loop that improves the developer's own next scheme.

### Layout

Light surface. Single column, centred.

Heading (display, dark, centred):

```
You see every question.
Across every home.
```

Body (body-lg, neutral-700, max-w-2xl, centred):

```
On the Developer Dashboard side, you see every resident interaction. What's being asked, what the assistant could resolve, what needed to escalate to you. Patterns surface. Documentation gaps surface. Your next scheme handovers better than your last because the last one told you exactly what was missing.
```

Below, a small screenshot or animated diagram showing the dashboard view of resident questions across multiple schemes, with a pattern callout ("Top topic this month: heat pump pressure").

Rationale: developers won't buy a product just because residents like it. They have to see the operational value to themselves. This section makes the developer-side benefit explicit.

---

## Section 6. Configured at handover (the operational moment)

**Job:** explain how the assistant gets configured per-home, so the developer understands this isn't a magical claim, it's a real workflow.

### Layout

Dark surface. Three-step block. Same component used on every other page.

**Step 1. Your team uploads, once. (Lucide `Upload`)**

Manuals, certs, warranties, and the walkthroughs your team records for each unit type. Most of this already lives somewhere in your operation. The Property Assistant ingests it once per unit type.

**Step 2. Configured for the actual home. (Lucide `Settings`)**

For each unit, the Property Assistant inherits the unit type's library and adds the home-specific details: the buyer's name, the actual appliance serials, the BER cert for this address, the warranty for this kitchen.

**Step 3. Live at handover. (Lucide `QrCode`)**

You hand the buyer a QR code at handover. They scan it. Their phone is linked to their home's Property Assistant. From that moment on, it works.

Heading above:

```
From upload to live, in one workflow.
```

Rationale: developers buy software they understand the workflow of. Three steps demystifies the per-home configuration so it doesn't feel like a magic claim.

---

## Section 7. Doesn't make things up (the trust line)

**Job:** address the single biggest fear about putting an AI in front of buyers. The fear that the AI will say something wrong, the buyer will act on it, and the developer's reputation will take the hit.

### Layout

Light surface, centred.

Heading (heading-md, dark):

```
The assistant doesn't make things up.
```

Body (body-lg, neutral-700, max-w-2xl):

```
Every answer comes from the documents your team uploaded for that specific home. If the assistant doesn't know, it says so and routes the question to your customer care team. No hallucinations, no fake confidence, no answers pulled from the wider internet. The resident either gets the right answer from the documents, or they get put through to a human.
```

Rationale: this paragraph is the single most important paragraph on the page for the developer. A developer who reads "no hallucinations, no answers pulled from the wider internet" and trusts it is a developer who books the demo. Keep it short, factual, confident.

---

## Section 8. Peak-end CTA

### Layout

Dark surface, oversized centred CTA.

Heading (display, white, centred):

```
See it configured for one of your homes.
```

Sub-line (body-lg, neutral-300, max-w-2xl, centred):

```
A demo takes thirty minutes. Bring the documents you'd hand over for one of your typical units and we'll show you exactly what the resident's experience would look like.
```

Primary gold pill, oversized: **"Book a Demo"** linking to `/book`.

Underneath: *"Or email sam@openhouseai.ie with questions first."*

---

## Section 9. Platform strip

Standard. Cross-link to Developer Dashboard, Agent, Intelligence, Care.

Heading: *"The rest of the platform."*

---

## Section 10. Footer

Standard.

---

## Acceptance criteria

- [ ] Breadcrumb pill reads "Property Assistant" with `Smartphone` icon
- [ ] Hero headline reads "Every home gets its own assistant." with "own" in gold
- [ ] Hero right column features a single oversized iPhone mockup, not a stack of cards
- [ ] Section 2 (the money shot) shows two phones side by side telling a sequential story: photo upload on left, assistant response on right
- [ ] Section 2's heading reads "Now it sees what your residents see."
- [ ] The image diagnosis example uses a real Irish-market appliance reference (Daikin Altherma 3 R, Honeywell T6R Pro, Worcester Greenstar) for credibility
- [ ] Section 4 shows three concrete scenarios, each with a phone mockup and a one-line caption
- [ ] Section 7 (the trust line) explicitly names "no hallucinations" and "no answers pulled from the wider internet"
- [ ] One Book a Demo CTA only, oversized, in Section 8
- [ ] All standard playbook acceptance criteria pass

---

## One specific note for Claude Code

This is the page where the visual design has to work hardest. Every other page on the site can win on copy alone if necessary. This page cannot. If the iPhone mockups feel cheap, the page fails. If the photo-upload interaction in Section 2 doesn't feel like a real conversation, the page fails. The Property Assistant is a visual product and the page is its showcase.

If the production app's UI isn't ready for marketing-grade screenshots yet, use design mockups built to look identical to the production app, but make sure they look identical. A visitor who clicks through to the actual product from a beautiful screenshot and finds a noticeably less polished UI loses trust in both.

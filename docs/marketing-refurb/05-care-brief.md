# Care Module Page Refurb Brief

> Read `00-master-playbook.md` first. This brief only covers what's specific to Care.

## The one reader

A Technical Director or Operations lead at a renewable energy installer in Ireland. They install heat pumps, solar PV, HVAC systems, or a mix. They manage 200 to 5,000 active installations. They're not in property development. They came to the page because someone in their network mentioned it, or they followed a link from SE Systems Cork (the anchor client) or from an Enterprise Ireland feature.

This is the only OpenHouse page that sells to a different industry. Treat that seriously.

## The one goal

That installer technical director books a demo.

## The fear

"Every callout that turns out to be a customer not knowing how to read the heat pump display is money I'm losing. My technicians are driving across counties for things the customer could have fixed themselves. We're profitable until we're not, and the line is always the avoidable callouts."

## The desire

Fewer callouts. Specifically, fewer of the callouts that didn't need an engineer. A way for the customer to fix the simple things themselves, with a tool that doesn't cost more than the callouts it prevents.

## The psychological lever this page leans on

**ROI math made visible.** Installers do not buy on vibes. They buy on cost-per-callout vs cost-per-month. The page must do the math openly, in the installer's vocabulary, with the savings line stark and obvious. This is the most spreadsheet-friendly audience on the site and the page must respect that.

The secondary lever is **the SE Systems Cork anchor.** Real social proof beats abstract claims. If SE Systems is willing to be named, their logo and a one-line quote go on the page. If not, the section is shorter, not faker.

The tertiary lever is **Sam's credibility as a property developer building Care.** This is unusual: an outsider building software for installers. The page must address it head-on. The framing: *Care exists because property developers and installers share customers, and OpenHouse is the system that already sits between them.*

---

## Section-by-section

### Section 1. Hero

**Layout:** standard hero block.

**Breadcrumb badge:** "Care Module", Lucide `LifeBuoy` icon.

**Headline (display, white, with one gold word):**

```
Stop the callouts
that don't need
an engineer.
```

The word **callouts** is the gold accent.

Rationale: this is an installer's exact internal vocabulary. They don't say "service requests" or "tickets". They say callouts. Using their word in the headline signals the page was built by people who understand their work.

**Sub-headline (body-lg, neutral-300, max-w-xl):**

```
Roughly four in ten heat pump and solar callouts are for things the customer could resolve themselves. OpenHouse Care gives every installation its own AI assistant, branded for your business, trained on the systems you actually installed.
```

**CTA row:**
- Primary gold: **"See the math"** anchored to Section 2 (the ROI calculator)
- Secondary outline: **"Book a Demo"** linking to `/book`

**Floating cards:**

1. **Customer card (top):** Question bubble, *"My heat pump is showing E4. Is that serious?"* Response: *"E4 on your Mitsubishi Ecodan means low water flow. Here's the 60-second check and the fix if it's a stuck valve, both filmed by your installer SE Systems."*

2. **Installer card (middle, offset right):** Dashboard view, *"This week, 47 customer queries answered without a callout. 12 saved engineer hours."*

3. **Branded card (lower left, offset down):** Logo placeholder + label "Your branding". Body: *"Customers see your name, your colours, your team. Care is the front line; you're the trusted brand."*

4. **Telemetry card (peeking from behind):** Connection icon, *"Connected to Huawei FusionSolar, Daikin ONECTA, SolarEdge"* with three small status dots.

### Section 2. The ROI math (the lever this page lives on)

**Job:** show the installer in plain numbers how much money the avoidable callouts are costing, and where Care's cost lands against that.

Full-width dark band. A simple split: left side the costs of the current way of working, right side the costs with Care.

**Left side, "Without Care":**

```
Average cost of a callout (technician time + travel + admin)     €150
Avoidable callouts per 100 installations per year                40
Cost per 100 installations per year                              €6,000
```

**Right side, "With Care":**

```
OpenHouse Care subscription per 100 installations per year       €[price]
Avoidable callouts caught by the assistant                       28 of 40
Net cost per 100 installations per year                          €[price minus 4,200]
Net saving                                                       €[approximately €3,000+]
```

(Numbers are illustrative and need Sam's input on the actual subscription pricing. The structure of the table is what matters.)

Underneath (body-lg, neutral-200, centred):

```
The math gets better the more installations you have, because the fixed costs of training the assistant don't scale linearly. We're happy to run these numbers against your actual installation base on a call.
```

Rationale: this is the most important section on the page for this audience. Installers will photograph this table and share it with their finance lead. Make it photographable.

### Section 3. The money shot, the resident assistant in action (the peak)

**Job:** show Care's customer-facing assistant answering a real technical question about a real installed system, branded for the installer.

Full-bleed dark section. Split screen.

**Left:** an iPhone mock showing a homeowner's view of the Care app. The app is branded for an example installer ("SE Systems Cork" if permission, otherwise "Acme Renewables"). A chat thread.

The homeowner has asked: *"My Daikin Altherma is showing E5. What does that mean?"*

**Right:** the assistant's response, branded:

*"Your heat pump is the Daikin Altherma 3 R, installed by SE Systems in March 2024. E5 means the unit has detected a flow temperature sensor issue. Here's the 90-second check to see if it's a wiring connection that's come loose. If the check doesn't resolve it, this is something we'll need to send an engineer for, and you can book a callout with us directly below."*

Below the response: a "Book a callout with SE Systems" button in SE Systems' branding.

Heading above the split (display, white, centred):

```
Branded for you. Trained on your installations.
```

Sub-line (body-lg, neutral-300, max-w-2xl, centred):

```
Customers see your name, not ours. The assistant knows what you installed, when you installed it, and what to do when something goes wrong. The trust stays with your brand. The callouts that actually need you, still come to you.
```

Rationale: the branding point is critical for this audience. Installers will not put a third-party assistant in front of their customers if it dilutes their brand. The page must show, visibly, that the installer is the brand the customer sees. Care is invisible infrastructure.

### Section 4. How Care actually works (three-step block)

Light surface.

**Step 1. Onboard your installations.** (`Upload`)
Add your installation base. Heat pumps, solar arrays, HVAC, EV chargers. Each installation is registered against the customer's home, with the system specs the assistant needs.

**Step 2. Customers get a branded portal.** (`Smartphone`)
QR code at handover. Customer scans, links their installation to the portal. The assistant is now available 24/7 in your branding.

**Step 3. You see what's happening.** (`BarChart3`)
On the installer side, you see every question, every resolved issue, every callout that did need an engineer. Patterns surface. Training improves. Your operation gets leaner.

### Section 5. What Care does (four-card grid)

Dark surface.

1. **A branded customer assistant.** (`Headset`)
24/7 support in your branding. Trained on the specific systems you installed. Customers get the right answer the first time.

2. **Telemetry integrations.** (`Plug`)
Huawei FusionSolar, Daikin ONECTA, SolarEdge, and growing. The assistant reads live system data where the integration exists.

3. **Callouts that do need you, routed to you.** (`PhoneCall`)
When the issue is real, the customer is taken straight to your booking flow. You don't lose the work, you just lose the avoidable trips.

4. **Patterns across your installation base.** (`Activity`)
Every question and every callout gives you data on what's failing, where, and how often. Your next install is informed by your last hundred.

### Section 6. Built for you (persona block)

Three cards.

1. **Heat pump and HVAC installers.** (`Thermometer`)
Managing 500 to 5,000 active installs. Care drops your avoidable callouts and gives you data on what your fleet is actually doing.

2. **Solar PV and battery installers.** (`Sun`)
Customers want to understand their system. Care gives them the answers without your phone ringing every week about a normal nighttime drop.

3. **Multi-system installers.** (`Layers`)
Heat pump plus solar plus battery plus EV charger in the same home. Care holds the whole system in one place for the customer and one dashboard for you.

### Section 7. Quiet trust line

Light surface, centred.

```
Built by people who already work with developers.
```

Body underneath:

```
OpenHouse is a property platform used by developers across Ireland. Care exists because the same homes that come out of those developments have heat pumps and solar arrays that need ongoing care. We already sit between developers and homeowners. Care extends that to installers.
```

Rationale: this addresses the obvious "who built this and why should installers trust them" question directly. Honesty about the lineage builds more trust than pretending Care was designed in a vacuum for installers.

### Section 8. Peak-end CTA

Dark surface, oversized centred CTA.

```
See it on your actual installation base.
```

Sub-line:

```
A demo takes thirty minutes. Bring the spec of one of your typical installations and we'll show you exactly what your customer's experience would look like in Care, branded for you.
```

Primary gold pill: **"Book a Demo"** linking to `/book`.

Underneath: *"Or email sam@openhouseai.ie with questions first."*

### Section 9. Platform strip and footer

Standard.

---

## Acceptance criteria specific to Care

- [ ] The page uses installer vocabulary correctly throughout (callouts, installations, technicians, fleet, system specs, error codes)
- [ ] Section 2 (the ROI math) is structured as a photographable cost comparison
- [ ] The money shot in Section 3 visibly shows installer branding, not OpenHouse branding
- [ ] At least one floating card mentions real telemetry integrations (Huawei FusionSolar, Daikin ONECTA, SolarEdge) by name
- [ ] No abstract "aftercare workflow" language anywhere. Use specific verbs: book, route, resolve, install
- [ ] All standard playbook acceptance criteria pass

---

## One specific note

If SE Systems Cork gives permission to be named on the page, this should be the only module page in the whole refurb that includes a real customer quote in Section 8 above the CTA. SE Systems is the anchor client and naming them is the single most powerful conversion lever on this page. Sam should ask Jason Collins or Derrick Enright directly.

# OpenHouse World-Class Homepage Implementation Plan

> **For Hermes:** Use subagent-driven-development skill to implement this plan task-by-task. Require specification review before quality review for each implementation phase.

**Goal:** Replace the current abstract, animation-heavy homepage with a truthful, premium product narrative in which construction evidence becomes a home-specific context layer, a homeowner receives a sourced answer, developers see recurring gaps, and energy intelligence appears as a clearly labelled example and direction.

**Architecture:** Keep `app/page.tsx` server-rendered. Use one small client island for the opening sequence and separate, isolated client islands for selectable examples. Use DOM, CSS and inline SVG rather than canvas or WebGL. The first frame, headline, proposition, labels and primary actions must exist in server HTML and remain understandable without JavaScript.

**Tech Stack:** Next.js 14 App Router, React 18, TypeScript, Tailwind CSS, Next Image, minimal Framer Motion only inside isolated client interactions where CSS is insufficient.

**Source of truth:**

- Research and creative direction: `/Users/samdonworth/GroundZero/vault/briefs/openhouse-world-class-marketing-site-research-2026-07-23.md`
- Product archaeology: `/Users/samdonworth/.hermes/cache/delegation/subagent-summary-0-20260723_115244_870758.txt`
- Repository audit: `/Users/samdonworth/.hermes/cache/delegation/subagent-summary-1-20260723_115244_872373.txt`
- Claims ledger: `/Users/samdonworth/.hermes/cache/delegation/subagent-summary-2-20260723_115244_872746.txt`

## Non-negotiable product truth

### Live

- OpenHouse connects house-type and home-specific plans, specifications, room information and approved documents to the homeowner experience.
- Homeowners can ask practical questions and open the source used in an answer.
- Developers can see recurring questions, low-confidence answers and gaps in available information.
- Documents, manuals, warranties and approved guidance remain accessible after handover.

### Example

- The floor-plan UI is a polished product visualisation of implemented room-context, provenance and source-opening workflows.
- The E3 UI represents implemented troubleshooting capability, but its exact manual and page citation are not verified. It must not be presented as an unedited live capture.
- Money, Comfort and Risk use seeded demonstration data. The experience must say this visibly.
- The resolved-versus-escalated developer table is a conceptual marketing view assembled from capabilities spread across current developer interfaces.

### Direction

- Live smart-meter, tariff, bill and device connections.
- Continuous telemetry, proactive diagnosis and autonomous optimisation.
- Full longitudinal home memory.
- Scheme-level energy performance benchmarking.
- Quantified savings, avoided call-outs or support reduction.

## Release gates

### Pre-flight gate

- Work only on `feat/energy-intelligence-positioning`.
- Do not push, merge, publish or deploy production.
- Preserve a clean record of pre-existing files and baseline metrics.
- Baseline `npm run build` must pass before edits.

### Revision gate

A phase cannot proceed if:

- a Live claim lacks code or product evidence;
- an Example lacks a visible label;
- an essential proposition is hidden until hydration;
- a new interaction has no mobile, keyboard or reduced-motion state;
- a product mock is presented as an authenticated screenshot.

### Release gate

The implementation is ready for a preview only when:

- production build passes;
- mobile LCP is at or below 2.5 seconds in local Lighthouse;
- accessibility Lighthouse is 100 or remaining tool limitations are documented and manually verified;
- desktop and mobile layouts have been screenshot-reviewed;
- keyboard, pause, reduced-motion and Save Data behaviours work;
- no form can display success without a confirmed backend response;
- every Live, Example and Direction label has passed claims review.

---

## Task 1: Establish design and claim primitives

**Objective:** Create a single typed source for homepage chapters, status labels, evidence layers and example disclosures.

**Files:**

- Create: `components/home/home-content.ts`
- Create: `components/home/CapabilityLabel.tsx`
- Create: `components/home/SectionShell.tsx`

**Required content:**

- Hero eyebrow: `For property developers`
- Hero headline: `A home that can explain itself.`
- Hero support: `OpenHouse connects each house type’s plans, specifications, systems and approved documents to a practical homeowner assistant. Developers see the questions it can answer and the gaps that still need a person.`
- Primary action: `See a working example`
- Commercial action: `Show me one of our house types`
- Status types: `live`, `example`, `direction`
- Evidence layer names: `Plans`, `Specifications`, `Systems`, `Documents`, `History`

**Verification:**

1. Run `npx tsc --noEmit`.
2. Confirm no em dashes in new files.
3. Confirm the copy contains no unsupported metrics or absolute accuracy claims.

**Commit:** `feat(home): establish truthful homepage content model`

## Task 2: Replace the opening architecture

**Objective:** Build a server-rendered hero shell with a five-state visual sequence and no hidden initial content.

**Files:**

- Create: `components/home/LivingHomeHero.tsx`
- Create: `components/home/HeroSequencePlayer.tsx`
- Create: `components/home/LivingHomeDiagram.tsx`
- Create: `components/home/EvidenceThread.tsx`
- Modify: `app/page.tsx`
- Stop using on homepage: `components/hero/ModuleHero.tsx`

**Sequence states:**

1. **Context:** Plans, specifications, systems and approved documents appear around one home.
2. **Home model:** The evidence thread connects those sources to rooms and installed systems.
3. **Question:** The homeowner asks, `What size is my living room?`
4. **Sourced answer:** The answer, highlighted floor-plan region and source control appear.
5. **Developer learning:** The view pulls back to recurring questions and missing-information signals.

**Interaction requirements:**

- Initial state is fully rendered by the server.
- Autoplay begins only after hydration and only if motion and data preferences allow.
- Timeline uses one `requestAnimationFrame` loop while visible.
- Sequence rests after completion and does not automatically loop.
- Controls include pause or play, direct state selection and replay.
- `IntersectionObserver` pauses the sequence off-screen.
- `visibilitychange` pauses when the document is hidden.
- Mobile uses tap-through chapters and cross-fades.
- Reduced motion shows all five states as static controls with no autoplay.
- All essential text remains DOM text.

**Tests:**

- Create: `components/home/__tests__/hero-sequence-contract.test.mjs`
- Verify the content model exposes five ordered states.
- Verify every state has a title, description and accessible label.

**Verification:**

1. `node --test components/home/__tests__/hero-sequence-contract.test.mjs`
2. `npx tsc --noEmit`
3. `npm run build`
4. Capture desktop and 390px screenshots.
5. Disable JavaScript and confirm headline, proposition, first frame and actions remain understandable.

**Commit:** `feat(home): build living home hero sequence`

## Task 3: Build the warm evidence chapter

**Objective:** Explain what the home’s current memory actually contains without implying a complete digital twin or construction history.

**Files:**

- Create: `components/home/LivingModelChapter.tsx`
- Create: `components/home/EvidenceLayerCard.tsx`
- Modify: `app/page.tsx`

**Copy:**

- Label: `Live`
- Headline: `Give the home its context.`
- Support: `Organise plans, specifications, room information, systems, manuals and warranties around the home they belong to.`
- Caveat within product scene: `Coverage depends on the information supplied for each house type and home.`

**Visual direction:**

- Warm porcelain background to interrupt the dark opening.
- Architectural plan lines at low contrast.
- Five evidence layers feeding one structured home record.
- Gold only marks verified or connected information.
- Avoid glass cards and equal feature-grid styling.

**Verification:**

- Contrast meets WCAG AA.
- Section is readable at 320px without horizontal scroll.
- Decorative SVG has `aria-hidden="true"`.
- No language claims complete or automatic extraction.

**Commit:** `feat(home): explain the living home context`

## Task 4: Build one complete sourced-answer demonstration

**Objective:** Demonstrate input, reasoning context, output and source using the strongest defensible floor-plan workflow.

**Files:**

- Create: `components/home/AskTheHomeChapter.tsx`
- Create: `components/home/SourcedAnswerDemo.tsx`
- Modify: `app/page.tsx`
- Reuse: `public/images/product/assistant-floorplan-ui.png`

**Copy:**

- Label: `Live capability, example home`
- Headline: `Ask the home, not the folder.`
- Support: `Homeowners ask in ordinary language. OpenHouse answers from the available home information and shows the supporting source.`

**Interaction:**

- Default question: `What size is my living room?`
- Secondary examples: `What paint was used in the kitchen?` and `Where is my heat pump manual?`
- Only the floor-plan example needs a complete visual state in the first pass.
- Source affordance is a real button that opens an accessible in-page source preview, not a dead decorative control.
- The displayed measurement is labelled as example-home information.

**Verification:**

- Keyboard can select question and open or close source.
- Focus returns correctly after source preview closes.
- Image alt describes the workflow without claiming an authenticated capture.
- No exact E3 manual citation is promoted as verified.

**Commit:** `feat(home): add sourced homeowner answer proof`

## Task 5: Build developer feedback and escalation chapter

**Objective:** Show the commercial payoff using claims supported by current developer analytics and issue workflows.

**Files:**

- Create: `components/home/DeveloperInsightChapter.tsx`
- Create: `components/home/DeveloperSignals.tsx`
- Modify: `app/page.tsx`
- Use carefully: `public/images/product/builder-homeowners-ui.png`

**Copy:**

- Label: `Live capability, example view`
- Headline: `See where the information runs out.`
- Support: `Track recurring questions, low-confidence answers and missing information so future handovers become clearer.`
- Supporting line: `When something needs a person, OpenHouse can carry the homeowner’s context into the team’s workflow.`

**Visual direction:**

- Do not present the current conceptual table as an unedited product screenshot.
- Add an explicit `Example developer view` label inside the frame.
- Emphasise three defensible signals: recurring questions, missing information and genuine issues.
- Do not use fabricated scheme names, customer names or outcome percentages.

**Verification:**

- Claims reviewer confirms language against the ledger.
- Labels remain visible on mobile and are not hidden in hover states.

**Commit:** `feat(home): show developer feedback loop`

## Task 6: Reframe energy as an explicit example and direction

**Objective:** Keep Money, Comfort and Risk as a valuable differentiator without implying live supplier or device telemetry.

**Files:**

- Create: `components/home/EnergyIntelligenceChapter.tsx`
- Create: `components/home/EnergyLensDemo.tsx`
- Modify: `app/page.tsx`
- Retire homepage use of the energy demo inside `components/marketing/ProductShowcase.tsx`

**Copy:**

- Label: `Example`
- Headline: `Energy, explained through the home.`
- Support: `See how one home’s systems and usage data can be translated into Money, Comfort and Risk, with a clear explanation and next step.`
- Disclosure: `Demonstration data. No live supplier or device connection is implied.`
- Direction line: `The next layer connects consented energy data, system history and homeowner preferences.`

**Interaction:**

- Money, Comfort and Risk use buttons with selected state and accessible panel relationships.
- State changes use opacity and transform only.
- Reduced motion changes instantly.
- The demo cannot use animated fake live readings.

**Verification:**

- Run keyboard interaction test.
- Confirm disclosure remains adjacent to the demo at every breakpoint.
- Search homepage source for unsupported terms such as `live meter`, `savings`, `automatic optimisation` and `reduces call-outs`.

**Commit:** `feat(home): present energy intelligence truthfully`

## Task 7: Simplify navigation, footer and global runtime

**Objective:** Remove first-load distractions and reduce the global runtime before polishing secondary routes.

**Files:**

- Modify: `components/navigation.tsx`
- Modify: `components/footer.tsx`
- Modify: `app/layout.tsx`
- Modify: `app/globals.css`
- Stop mounting globally:
  - `components/providers/PrefetchProvider.tsx`
  - `components/providers/ScrollProvider.tsx`
  - `components/TransitionOverlay.tsx`
  - `components/transitions/RouteWipe.tsx`
  - `components/transitions/ProgressBar.tsx`
  - `components/transitions/RouteTransitionHandler.tsx`

**Navigation requirements:**

- Header height between 72 and 88px.
- Visible links: `Product`, `For developers`, `Energy direction`.
- Primary action: `Request a walkthrough`.
- Login becomes a lower-emphasis text link.
- No breathing animation, tooltip theatre, explicit eager prefetch or continuous scroll state updates.
- Mobile dialog locks background scroll and returns focus when closed.

**Layout requirements:**

- Add `metadataBase: new URL("https://www.openhouseai.ie")`.
- Update title and description to the living-home positioning.
- Load analytics during idle or after consent, not before the opening experience settles.
- Reduce from three downloaded typefaces to two. Use a system mono stack.

**Footer requirements:**

- No priority logo.
- Sequential heading levels.
- Minimum AA contrast.
- Correct OpenHouse contact email and production host.
- Retain a small EvolvAI credit without making it a competing brand mark.

**Verification:**

- `npm run build`
- Compare first-load JS against the 159KB baseline.
- Confirm no route overlays appear on first load.
- Run heading-order and contrast audits.

**Commit:** `perf(shell): simplify navigation and global runtime`

## Task 8: Replace heavy and broken brand assets

**Objective:** Remove avoidable first-party transfer and provide real metadata assets.

**Files:**

- Create: `public/images/openhouse-wordmark.svg`
- Replace: `app/icon.png` with correctly sized favicon assets
- Replace: `public/og.jpg` with a real 1200 by 630 image
- Replace or remove: `public/hero-poster.jpg`
- Modify references in `components/navigation.tsx`, `components/footer.tsx` and metadata

**Requirements:**

- Wordmark must render cleanly at 140 to 180 CSS pixels and remain under 20KB.
- Favicon variants must not ship a 316KB source.
- Social image must accurately represent the living-home proposition and contain no unsupported claims.
- Do not delete legacy assets until all tracked references have been searched.

**Verification:**

- Search repository for every replaced filename.
- Verify dimensions and file sizes.
- Inspect OG image and favicon visually.
- `npm run build`.

**Commit:** `perf(brand): replace oversized marketing assets`

## Task 9: Build the commercial close and truthful lead path

**Objective:** Turn the website into one concrete developer offer and eliminate the fake-success form.

**Files:**

- Create: `components/home/WalkthroughCTA.tsx`
- Modify: `components/forms/ContactForm.tsx`
- Modify: `app/contact/page.tsx`
- Create if a verified destination is configured: `app/api/contact/route.ts`
- Modify: `.env.example`

**CTA:**

- Headline: `See one of your house types inside OpenHouse.`
- Support: `Send a house-type link or approved information pack. We will show how the home context becomes a purchaser walkthrough and developer insight.`
- Button: `Request a house-type walkthrough`

**Form fields:**

- Name
- Work email
- Company
- Optional development or house-type link

**Submission rules:**

- Never display success before a backend confirms receipt.
- If no verified backend destination exists, do not simulate submission. Offer a prefilled `mailto:sam@openhouseai.ie` action and state clearly that it opens the visitor’s email application.
- When a backend is configured, validate on the server, rate-limit, use a honeypot, log failure safely and return a truthful response.
- Do not promise a 24-hour response unless Sam confirms it.

**Verification:**

- Test success, server failure, missing configuration, validation and bot-field paths.
- Confirm no lead can disappear behind a fake success state.

**Commit:** `fix(contact): create truthful walkthrough conversion path`

## Task 10: Correct metadata, robots and semantic defects

**Objective:** Ensure public discovery and assistive technology describe the same product as the homepage.

**Files:**

- Modify: `app/layout.tsx`
- Modify: `app/robots.ts`
- Modify: `app/sitemap.ts`
- Modify: homepage metadata in `app/page.tsx`
- Modify semantic headings in `components/footer.tsx`

**Requirements:**

- Canonical host: `https://www.openhouseai.ie`.
- No stale `AI Resident Portal` or `openhouse.ai` references in public metadata.
- Correct OpenGraph and Twitter images.
- One H1 on homepage.
- Sequential section headings.

**Verification:**

- `npm run build`
- Request `/robots.txt` and `/sitemap.xml` locally.
- Inspect document title, meta description, canonical and social image.

**Commit:** `fix(seo): align metadata and crawl surfaces`

## Task 11: Remove obsolete homepage runtime and dependencies safely

**Objective:** Remove unused Three.js, Lenis and route-animation code only after proving there are no live route dependencies.

**Files:**

- Candidate removals are listed in the repository audit.
- Modify: `package.json`
- Modify lockfile if present.

**Procedure:**

1. Search all tracked imports for each candidate module and package.
2. Remove only modules with zero surviving imports.
3. Remove only dependencies unused by all retained routes.
4. Build after each dependency group rather than removing everything at once.
5. Preserve secondary-route behaviour unless an explicit redirect replaces it.

**Verification:**

- `npm run build`
- Compare dependency and first-load bundle sizes.
- Visit every statically generated route in the build output.

**Commit:** `perf(site): remove obsolete animation runtime`

## Task 12: Validate comprehension, accessibility and performance

**Objective:** Prove the site meets the defined standard rather than relying on internal taste.

**Automated checks:**

- `npx tsc --noEmit`
- `npm run build`
- Contract and interaction tests
- Mobile Lighthouse
- Desktop Lighthouse
- Accessibility scan
- Broken-link scan
- No-JavaScript inspection

**Responsive review widths:**

- 320px
- 390px
- 768px
- 1024px
- 1280px
- 1440px

**Manual interaction checks:**

- Hero pause, replay and state selection
- Question selection and source opening
- Money, Comfort and Risk tabs
- Mobile navigation
- Walkthrough conversion path
- Keyboard-only operation
- Reduced motion
- Save Data
- Hidden-tab and off-screen animation pause

**Comprehension questions:**

After five seconds:

1. What is OpenHouse?
2. Who is it for?
3. What happened in the demonstration?

After 30 seconds:

1. What information does OpenHouse use?
2. What can a homeowner do?
3. What does a developer learn?
4. Which energy capability is live versus illustrative?
5. What is the next action?

**Acceptance threshold:**

- At least 80 percent of representative participants correctly identify the developer-provisioned home-context and sourced-answer wedge.
- No participant leaves believing live smart-meter or automatic device control is already generally deployed.
- At least 80 percent identify `Request a house-type walkthrough` as the main next action.

**Final review:**

- Fresh specification reviewer
- Fresh visual-quality reviewer
- Fresh claims reviewer
- Final integration review

**Commit:** `test(site): complete world-class homepage validation`

## Stopping point

The homepage is complete when it is clear, truthful, memorable, performant, accessible and ready for a verified preview. It is not held open for speculative WebGL, unverified customer metrics, bespoke film, extra product categories or visual effects without an explanatory role.

No production push, merge or deployment occurs without Sam’s explicit approval.

# AI FlowPal Website

Static marketing site for `aiflowpal.com` and `aiflowpal.ca`.

## Local preview

```bash
node server.js
```

Open http://localhost:4180

## Google Analytics

GA4 is installed across the public HTML pages.

- Account: `AI FlowPal`
- Property: `AI FlowPal Website`
- Account ID: `395428176`
- Property ID: `538507281`
- Web stream: `AI FlowPal Website` / `https://aiflowpal.com`
- Stream ID: `14924101100`
- Measurement ID: `G-FZ6X71N7KY`
- Setup verification: Google tag installation test passed, and Realtime showed active users after live deployment.

## Design psychology pass - 2026-05-20

Local-only update applying AI FlowPal's design/psychology research:

- Blue/blue-gray is the default trust/evidence posture; teal/green marks handled progress.
- Amber is reserved for review/approval/uncertainty, especially guardrail cards.
- Red remains a hard-stop/compliance cue only; never rely on color alone.
- Rounded containers support warmth and psychological safety; structured cards preserve proof/control.
- Homepage copy now frames the core emotional shift as overwhelm -> handled, skepticism -> trust, and risk -> reviewed.
- Landing pages now repeat the source/context/confidence/human-review guardrail instead of vague automation claims.
- Follow-up correction after review: warmed the hero tone, restored warm gold/rose accents for human/relationship cues, relaxed compressed heading letter-spacing, and replaced the awkward mark with a clean ASCII `FP` monogram so the lettering renders reliably.
- Node-field correction after Andriy direction: the issue was the general page layout feeling too boxed/stiff, not the AI-node idea itself. Kept and expanded the AI node language with a richer operating-field section, more signal nodes/links in the hero, and less rigid section composition.
- Universal AI/human colour pass after Andriy direction: strengthened one shared semantic colour system across the whole local site without turning it into rainbow decoration. Warm/gold/rose marks human/action, blue marks trust/evidence, green marks handled/progress, amber marks review, purple marks AI-routing/strategy, and red remains true stop/risk only. Added proof-flow chips (`Source -> AI route -> Human review -> Ready`) across the main pages.
- Human-feeling homepage pass after Andriy direction: shifted the homepage hero toward people/promises/habits/tone, added explicit staff judgment and customer-not-chasing language, and added a `The human layer` section with customer/team/business cue cards.
- Pop-out drawer pass after Andriy direction: applied the same learned system to the `Start a project` drawer, including proof-flow chips, customer/team/human-rule cue cards, review-first form labels, clearer no-automation guardrails, human-review status text, and semantic drawer styling.
- Human editorial de-AI correction after Andriy direction: the rounded/glass/pill treatment still felt too AI/SaaS-coded. Shifted the whole local page toward calm workshop/editorial notes: quieter paper-like panels, smaller radii, fewer gradient rails/glows/chips, plain review-trail notes, and subtler semantic colour.
- Operator-first redesign after Andriy direction: the site risk was not just visual AI/SaaS feeling; it under-showed the person/operator behind the work and over-credited AI/technical complexity. Rebuilt the local homepage and landing pages around practical work diagnosis, judgment, build competence, before/after workflow repair, human team review rules, and AI as leverage for monitoring/drafts/routing/evidence. Kept the existing colour theme and semantic colour grammar.
- Square/angular/sharp design-language pass after Andriy direction: shifted the local site surface language toward architectural operator competence with sharper grids, clipped/chamfered corners, lower border radii, harder panels/buttons/cards/drawer surfaces, muted organic glow, and crisper hierarchy while keeping the current colour theme. Also repaired mobile overflow from off-canvas decorative elements/hidden drawer and removed stale A/B copy that over-emphasized AI/system mapping.
- Rising-sun pathing-web background pass after Andriy direction: replaced the homepage abstract node field with a hyper-abstract warm rising sun origin point, clean gold/rose light, darker pathing-web shadow strokes emanating from the sun, and dispersed warm/bridge/cool nodes. Follow-up mirrored the background horizontally and increased the opacity of the overlay grid/panel above it. Then fixed the `Report` node in the `Where AI earns its place` map, spaced it away from `Draft`, pulled back over-intrusive green in the middle, and spread green sparingly as a handled/progress wayfinding cue that naturally nudges toward outreach/contact without obvious navigation. Kept the operator-first language and square/angular competence layer. Current stylesheet cache key: `styles.css?v=20260521-mobile-form-fit`.
- Unique-workflow pitch cleanup after Andriy direction: removed the legacy reporting surface area, reframed the homepage around every business needing a workflow designed around its own tools/team/approvals/customer promises, cleaned visitor scan-path language, and added a very slight green glow to handled/progress cues. Current stylesheet cache key: `styles.css?v=20260521-mobile-form-fit`.
- Also repaired previously damaged Gmail/Outlook compose query URLs and inline homepage analytics ternaries from the punctuation cleanup pass.

No live deploy was performed as part of this pass.

## Deploy

Upload `index.html`, `email.html`, and `styles.css` to any static host: Cloudflare Pages, Netlify, Vercel, GitHub Pages, or a simple web server.

Suggested DNS:

- `aiflowpal.com` primary
- `www.aiflowpal.com` redirect to primary
- `aiflowpal.ca` redirect or mirror to primary
- `www.aiflowpal.ca` redirect or mirror to primary

Email landing page is `email.html`. Configure `hello@aiflowpal.com` before launch; see `EMAIL_SETUP.md` for provider/DNS notes.


## SEO deployment package

This repo/site root includes crawl and listing files:

- `robots.txt`
- `sitemap.xml`
- `llms.txt`
- six buyer-intent landing page directories
- homepage structured data and internal SEO links

If connected to Porkbun Static Hosting GitHub Connect, use branch `main` and root directory `/`.

- Local customer-audience copy pass before publish: reframed homepage and landing-page wording away from internal/operator instructions and toward the target customer: repeated work, customer follow-through, team approval, workflow fit, and practical pilot value. Current stylesheet cache key: `styles.css?v=20260521-mobile-form-fit`.

- Mobile hero tightening after phone screenshot: made the shorter workflow-cleanup headline deterministic as the default homepage hero, contained the mobile hero/panel overflow, and updated the stylesheet cache key to styles.css?v=20260521-mobile-form-fit.

- Unique-business target-audience rewrite after Andriy direction: homepage now leads with Your business is unique. Your AI should be too., directs copy at the buyer's specific tools/team/approvals/customer promises, updates the drawer/contact path, landing-page intros, llms.txt, and cache key styles.css?v=20260521-mobile-form-fit.

- Mobile unique-message headline fit: tightened the 360px hero headline sizing for the unique-business message and bumped cache key to styles.css?v=20260521-mobile-form-fit.

- Mobile readability follow-up: shortened the visible hero line to Your business is unique. Your AI should be too. while keeping AI system language in supporting copy and metadata.

- Mobile drawer typing-box fix: removed phone auto-focus, added dynamic viewport height handling, scroll-into-view on focused fields, compact mobile drawer spacing, and cache key `styles.css?v=20260521-mobile-form-fit` so the form/textarea stays visible with the phone keyboard open.

- Mobile drawer opacity/scroll hardening: forced the open mobile drawer and typing fields to be opaque/scrollable over earlier decorative containment rules, so page hero text cannot show through the textarea while typing.

- Mobile drawer compact actions while typing: shortens the Gmail/Outlook/Submit cards while a phone field is active so the user can scroll to the actions more easily above the keyboard.

- Public company-copy cleanup after Andriy direction: removed defensive anti-automation warnings from public/company-facing copy. Reframed the site around fitted AI workflow automation, practical build paths, approval paths, and licensed/professional judgment where relevant. No live deploy was performed as part of this pass.

- Proactive customer-AI offer pass after Andriy direction: shifted the homepage pitch from generic unique-business workflow language toward custom customer AI solutions that help teams get proactive about work. Added a demo-systems section showing expected practical systems: lead intake/fast reply, contractor estimate desk, client status radar, document/checklist chaser, quote/proposal follow-up, and daily work briefing. No live deploy was performed as part of this pass.

- Proactive customer-AI design template set after Andriy direction: added local-only prototype pages under `design-templates/` for three alternate website directions using updated lessons: `Operator Workbench`, `Customer Work Radar`, and `Field Estimate Desk`. These are disposable prototypes for comparison and not deployed.

- Fresh layout template correction after Andriy clarified the first set recycled old design patterns too much: added a stricter, local-only second set under `fresh-layout-templates/` with three distinct layout metaphors: `Customer Work Dossier` (paper/evidence case-file), `Proactive Route Map` (dispatch/routing map), and `Customer-work AI Tool Showroom` (productized demo catalogue). No live deploy was performed.

- Corrected Layout C promotion after Andriy clarified the real issue was feature-vs-structure-vs-theme-vs-colour extraction, not just visual old-design leakage. Added `design-extraction-layout-c-showroom.md`, then rebuilt the local homepage with: old site features preserved as capabilities/content only; Layout C structure imported as showroom/stage + visible system objects + catalogue-first flow; Customer-work AI Tool Showroom metaphor strengthened with six system objects and per-object operator review steps; original AI FlowPal dark navy + warm/gold + semantic blue/green/violet palette preserved instead of the beige/brown template palette. Preserved GA tag, internal analytics, contact drawer, Gmail/Outlook/direct request flow, `data-system` drawer prefill, demo systems, service model, outcomes, use cases, process, fit check, safeguards, offer section, FAQ, industry landing links, footer, and SEO/JSON-LD head data. Mirrored `index.html` to `ftp-index.html` and bumped stylesheet cache key to `styles.css?v=20260601-layoutc-corrected-r4`. No live deploy was performed.

- Matte Option C refinement after Andriy said the corrected showroom was neat but too much: kept the top bar, reduced above-fold density, returned the hero/shelf closer to the original Option C template rhythm, switched the surface toward the matte warm showroom palette, limited the visible hero shelf to three simple system objects, hid the extra process/checklist density above the fold, and kept the remaining feature content below. Current local cache key: `styles.css?v=20260601-layoutc-matte-c5`. No live deploy was performed.

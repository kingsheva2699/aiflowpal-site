# AI FlowPal Website

Static marketing site for `aiflowpal.com` and `aiflowpal.ca`.

## Local preview

```bash
node server.js
```

Open http://localhost:4180

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
- Operator-first redesign after Andriy direction: the site risk was not just visual AI/SaaS feeling; it under-showed the person/operator behind the work and over-credited AI/technical complexity. Rebuilt the local homepage and landing pages around operator diagnosis, judgment, build competence, before/after workflow repair, human approval rules, and AI as leverage for monitoring/drafts/routing/evidence. Kept the existing colour theme and semantic colour grammar.
- Square/angular/sharp design-language pass after Andriy direction: shifted the local site surface language toward architectural operator competence with sharper grids, clipped/chamfered corners, lower border radii, harder panels/buttons/cards/drawer surfaces, muted organic glow, and crisper hierarchy while keeping the current colour theme. Also repaired mobile overflow from off-canvas decorative elements/hidden drawer and removed stale A/B copy that over-emphasized AI/system mapping. Current stylesheet cache key: `styles.css?v=20260520-angular-sharp`.
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
- `/ei-biweekly-report/` EI biweekly report workflow support page
- homepage structured data and internal SEO links

If connected to Porkbun Static Hosting GitHub Connect, use branch `main` and root directory `/`.

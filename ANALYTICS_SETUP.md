# AI FlowPal Website Analytics Setup

This uses lightweight first-party analytics without Google Analytics, ad trackers, or third-party pixels.

## Current live endpoint

The site sends analytics and contact form requests to the AI FlowPal Apps Script endpoint already embedded in `index.html` and `/analytics.js`.

Analytics sheet:

https://docs.google.com/spreadsheets/d/1zxlYU5TOqgV9hYut0zR45valQUhQFhwIadIvhQGzbAg/edit

## What gets logged

Core events:

- `page_view`
- `page_exit`
- `section_view`
- `scroll_depth` at 25%, 50%, 75%, 90%
- `cta_click`
- `ui_click`
- `internal_link_click`
- `outbound_link_click`
- `drawer_open`
- `drawer_close`
- `form_field_start`
- `send_choice_click`
- `direct_form_attempt`
- `direct_form_sent`
- `direct_form_error`

Core columns still available directly in the sheet:

- receivedAt
- event
- path
- title
- referrer
- visitorId
- sessionId
- details
- language
- screen
- viewport
- timezone
- userAgent

Expanded data is stored inside the `details` JSON field so the existing Apps Script deployment can keep working without a backend redeploy.

## Expanded details JSON

The `details` column now includes, depending on event:

- Full URL, query string, hash
- UTM and paid-click params: `utm_source`, `utm_medium`, `utm_campaign`, `utm_term`, `utm_content`, `gclid`, `fbclid`, `msclkid`
- Referrer host and inferred traffic channel: direct, campaign, organic search, social referral, referral
- Browser/device hints:
  - language/languages
  - timezone
  - screen and viewport
  - pixel ratio
  - platform
  - hardware concurrency
  - device memory when available
  - touch point count
  - connection type / save-data hint when available
  - cookies enabled
  - Do Not Track value
- Page engagement:
  - seconds on page
  - max scroll percent
  - section views
  - scroll milestones
  - link/button text, href, id, classes, section
- Homepage A/B test metadata
- Page performance on `page_view` where browser exposes it:
  - navigation type
  - DOMContentLoaded timing
  - load timing
  - transfer size/body size

Privacy boundary:

- No IP address is collected by the front-end tracker.
- No GPS location is collected.
- No keystrokes are logged.
- Contact message body is not sent to analytics; only message length and subject metadata are logged around form events.

## Homepage A/B test

Current test:

- `testId`: `homepage_hero_cta_v1`
- `A_control`: existing homepage hero/CTA
- `B_audit_cta`: workflow-audit-focused hero/CTA

Variant is randomly assigned once per browser and stored in `localStorage` under `aiflowpal_ab_homepage_v1`.

Primary conversion events to compare:

1. `cta_click`
2. `drawer_open`
3. `form_field_start`
4. `send_choice_click`
5. `direct_form_sent`

Secondary engagement events:

- `scroll_depth`
- `section_view`
- `page_exit.secondsOnPage`
- `page_exit.maxScrollPercent`

## Files changed/added

- `index.html` — expanded homepage tracker + A/B test.
- `analytics.js` — shared first-party analytics tracker for non-homepage static pages.
- `apps-script-analytics-backend.gs` — backend reference. Existing deployment can continue because expanded data is sent inside `details`.

## Notes

For proper analysis, do not judge A/B results too early. Wait for enough sessions. With low traffic, treat results as directional until at least dozens of real visitor sessions per variant.

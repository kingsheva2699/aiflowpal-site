# AI FlowPal Website Analytics Setup

This adds lightweight first-party analytics without Google Analytics or ad trackers.

## What gets logged

- Page views
- Section views
- CTA clicks
- Internal/outbound link clicks
- Project drawer opens/closes
- Send option clicks: Gmail, Outlook, direct send
- Direct form attempt/sent/error
- Page exit + seconds on page

## Where the data goes

A Google Sheet created by the Apps Script backend: **AI FlowPal Website Analytics** with an `events` tab.

## Files changed/added

- `index.html` — contains the browser-side analytics tracker.
- `apps-script-analytics-backend.gs` — Google Apps Script backend for contact form + analytics logging.

## Activation steps

1. Open the existing AI FlowPal Apps Script project.
2. Replace/add backend code from `apps-script-analytics-backend.gs`.
3. Deploy as Web App:
   - Execute as: **Me**
   - Who has access: **Anyone**
4. Copy the deployed `/exec` URL.
5. In `index.html`, replace:

```js
const analyticsEndpoint = 'REPLACE_WITH_ANALYTICS_WEB_APP_URL';
```

with:

```js
const analyticsEndpoint = 'YOUR_DEPLOYED_EXEC_URL_HERE';
```

6. Publish/upload the updated `index.html`.
7. Visit the site and click around.
8. Open the Apps Script `/exec` URL directly once; it returns the analytics sheet URL.

## Important note

Do **not** point `analyticsEndpoint` at the old contact-only endpoint unless the Apps Script backend has been updated to handle `action === 'analytics'`. Otherwise page views could be treated like form submissions.

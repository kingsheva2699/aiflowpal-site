# AI FlowPal Website

Static marketing site for `aiflowpal.com` and `aiflowpal.ca`.

## Local preview

```bash
node server.js
```

Open http://localhost:4180

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

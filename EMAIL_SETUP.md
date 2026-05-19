# AI FlowPal Email Setup

Target inbox used by the site: `hello@aiflowpal.com`

## Chosen setup

**Google Workspace** for `aiflowpal.com` — best fit if the business will use Gmail, Google Drive, Calendar, and Meet.

Current Google Workspace account:

- Admin/user mailbox: `ashevchuk@aiflowpal.com`
- Public site/contact address: `hello@aiflowpal.com` as an alias on the admin/user mailbox

## Setup status

Completed on Porkbun + Google Admin:

- Domain verified with Google Workspace.
- Gmail activated for `aiflowpal.com`.
- `hello@aiflowpal.com` alias added.
- MX, SPF, DKIM, and starter DMARC records configured.
- DKIM authentication started in Google Admin.

## DNS records configured

### MX

```txt
Name: @
Type: MX
Priority: 1
Value: smtp.google.com
```

If Google shows legacy multi-MX values instead, use the values Google gives.

### SPF

```txt
Name: @
Type: TXT
Value: v=spf1 include:_spf.google.com ~all
```

### DKIM

```txt
Name: google._domainkey
Type: TXT
Value: v=DKIM1; k=rsa; p=MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAxmE2CuDH4gK18B79cr0zGkrsRkk+ejote9Fs0xj8V/QxMfB35ApCUmcYpTFWSlhvnDueEKA56RLn2TfHwNeUWMXv3y5ip06lv2FxvgZix06A+qKuo0e4dVOd0D2qMdF5SmnsSg1xuZSK72G2L7jCY/6bYstQbWS+5E58F2+/KB5Oe6ciqa/GCUgUB5W3nBAXpCKoPM2Dqso2hFX85dcDUCPOtIWJU3NziwDVMJ8CVFemuOzCdR7MpPSunD/oLLR8kJDfD5ANsD+/Wn1+pu1tmWbt0zO3BgT6AtwOD0FOnpw96hIGou0r//mJEC9Yns3O+gwt7hp8wu/M//miTiurgQIDAQAB
```

Google Admin status: **Authenticating email with DKIM.**

### DMARC starter

```txt
Name: _dmarc
Type: TXT
Value: v=DMARC1; p=none; rua=mailto:hello@aiflowpal.com; adkim=s; aspf=s
```

After mail is stable, tighten `p=none` to `p=quarantine`, then eventually `p=reject`.

## Website wiring completed

- `index.html` sends visitors to `email.html` instead of a raw `mailto:` link.
- `email.html` offers:
  - Gmail compose
  - Outlook compose
  - default mail app
  - a simple project request form fallback
- `index.html` includes the primary “Start a project” slide-out composer.
- The slide-out composer posts direct submissions to a Google Apps Script web app and sends them to `hello@aiflowpal.com`.

## Direct website submissions

Direct “Send request” delivery is handled by Google Apps Script:

- Script project: `1iw3F4y-JdAfn_R1nsg7-hm7Vy_7AB_qZjfhsW-6pbyNZoetqydREV0QQ`
- Web app URL: `https://script.google.com/macros/s/AKfycbw_Gibxexz3tznNll1B1JJdS7lcA-cibRD3IwGND-Xifn_Sm1FYHXsiktPiEnxo1c4_5Q/exec`
- Recipient in script: `hello@aiflowpal.com`
- Website handler: `sendDirectRequest(button)` in `index.html`

Validated on 2026-05-15:

- Direct POST to the Apps Script endpoint returned `{"ok":true}`.
- Live `https://aiflowpal.com/` form showed `Request sent. We will reply to the email you provided.` after submission.

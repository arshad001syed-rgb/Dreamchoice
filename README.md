```markdown
# Dream Choice — Contact Integrations (Merged)

This repository contains a merged static website and three contact handling options so you can pick the one that best fits your hosting:

- Static site: `index.html` — accessible, SEO-friendly, JSON-LD, and a progressive contact form that POSTs JSON to `/api/contact`. Mailto fallback to arshad001syed@gmail.com and phone +91 9652864229.
- a) Node/Express server: `server/index.js` — run on your server or container. Uses nodemailer for SMTP delivery. Optional Google Sheets webhook forwarding.
- b) Netlify Function: `functions/netlify-contact.js` — serverless function for Netlify Functions.
- c) Next.js example:
  - `nextjs/pages/index.js` — React page with the same form.
  - `nextjs/pages/api/contact.js` — API route sending mail via SMTP or forwarding to Google Sheets.

What you need to configure
- Set SMTP environment variables (if you want emails sent directly):
  - SMTP_HOST
  - SMTP_PORT
  - SMTP_SECURE (true/false)
  - SMTP_USER
  - SMTP_PASS
  - CONTACT_TO_EMAIL (defaults to arshad001syed@gmail.com)
- Optional Google Sheets webhook: GOOGLE_SHEET_WEBHOOK_URL (use Apps Script endpoint)
- For Netlify: add env vars in Netlify site settings.
- For Next.js: add env vars to Vercel or your host.

Quick start (Express)
1. Copy `server/` and `index.html` to your server.
2. Create a `.env` using `.env.example`.
3. npm install && node server/index.js
4. Serve `index.html` as static (or embed it in your site). Form action should point to the server URL `/api/contact`.

Quick start (Netlify)
1. Deploy static `index.html` as your site.
2. Put `functions/netlify-contact.js` into `/functions` and deploy to Netlify.
3. Set SMTP env vars in Netlify dashboard.
4. Ensure `index.html` form action points to `/.netlify/functions/netlify-contact`.

Quick start (Next.js)
1. Drop `nextjs/pages/*` into your Next.js app `pages/` folder.
2. Deploy to Vercel (or any host supporting Next.js).
3. Configure SMTP env vars in Vercel.

Google Sheets (optional)
- Use the provided Google Apps Script `google-apps-script/Code.gs` to accept POST requests and append rows.
- Set `GOOGLE_SHEET_WEBHOOK_URL` to the deployed Apps Script URL so serverless or server handlers forward submissions.

Security & spam mitigation
- Honeypot field `website` is present and checked.
- Basic server-side validation included; add rate-limiting/recaptcha if spam becomes an issue.
- Configure a Content-Security-Policy and enable HTTPS in production.

If you want I can:
- Create a ready-to-push GitHub repo with these files (tell me the repo name and whether to push to your account).
- Provide a Dockerfile + sample systemd unit for hosting the Express server.
- Generate a Vercel/Netlify deploy configuration.

```
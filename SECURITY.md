# Security Notes

This portfolio is a static-first website. That keeps the attack surface small, but it does not make the project immune to takeover or SEO spam injection by itself.

## What is already hardened

- Security headers are set in [vercel.json](/D:/Project/okta-portfolio/vercel.json) and [server.js](/D:/Project/okta-portfolio/server.js).
- Only `GET` and `HEAD` requests are accepted by the Express runtime.
- Unknown file-like requests such as `/.env`, `/wp-admin.php`, or other dotted probe paths return `404` instead of falling through to the SPA shell.
- The app uses a restrictive Content Security Policy so third-party scripts, frames, and plugin content cannot be loaded arbitrarily.

## What still matters operationally

These are the most important protections against "inject judol", defacement, or takeover:

1. Enable 2FA on:
   - GitHub
   - Vercel
   - domain registrar / DNS provider

2. Protect the production branch:
   - require pull requests
   - block force-push to `main`
   - limit who can deploy to production

3. Rotate and reduce secrets:
   - delete old Vercel tokens
   - review GitHub personal access tokens
   - remove secrets that are no longer used

4. Lock the domain:
   - enable registrar lock
   - use strong DNS account protection
   - review DNS records regularly

5. Monitor for unexpected changes:
   - watch Vercel deployment history
   - watch GitHub commit history
   - watch Google Search Console for spam pages or strange indexed URLs

## Quick post-deploy checks

After each production deploy, verify:

- site loads normally
- `/api/health` returns `200`
- `/CV_Oktawahyudi.pdf` still opens
- response headers include CSP, `nosniff`, `DENY`, and `strict-origin-when-cross-origin`
- Search Console does not show unexpected gambling or spam URLs

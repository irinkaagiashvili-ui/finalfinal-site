# FinalFinal website

Static site for FinalFinal — Campaign QA for Adobe Illustrator. Plain HTML, CSS,
and a few lines of vanilla JavaScript. No build step, no dependencies, no backend.

## Deploying to GitHub Pages

1. Create a new GitHub repository (public), e.g. `finalfinal-site`.
2. Copy everything in this folder (`index.html`, `help.html`, `privacy.html`,
   `terms.html`, `assets/`, this `README.md`) into the root of that repository.
3. Commit and push:
   ```
   git init
   git add .
   git commit -m "FinalFinal website"
   git branch -M main
   git remote add origin https://github.com/<your-username>/finalfinal-site.git
   git push -u origin main
   ```
4. On GitHub, go to the repository's **Settings → Pages**.
5. Under **Build and deployment**, set **Source** to **Deploy from a branch**,
   branch **main**, folder **/ (root)**. Save.
6. GitHub will publish the site at:
   ```
   https://<your-username>.github.io/finalfinal-site/
   ```
   (First deploy can take a minute or two.)

All links and asset paths in this site are **relative** (`assets/...`,
`help.html`, etc.), so it works correctly whether it's served from a domain
root or from a subpath like `/finalfinal-site/` — no path edits needed.

## Using a custom domain (optional)

If you'd rather serve this from your own domain (e.g. `finalfinal.app`):

1. Add a `CNAME` file to the repository root containing just your domain,
   e.g. `finalfinal.app`.
2. In your DNS provider, point the domain at GitHub Pages (an `A` record to
   GitHub's IPs, or a `CNAME` record to `<your-username>.github.io` for a
   subdomain) — see GitHub's own "Managing a custom domain" docs for current
   values, since these occasionally change.
3. Back in **Settings → Pages**, enter the custom domain and enable
   **Enforce HTTPS** once it's available.

## Updating content later

- Support email, copy, and links: edit the HTML files directly.
- Colors/spacing: edit `assets/css/style.css` — the palette at the top of the
  file (`:root`) matches the actual FinalFinal extension's own design tokens,
  so keep the two in sync if the extension's theme ever changes.
- Screenshots: replace files in `assets/img/screenshots/` (same filenames),
  or add new `<img>` entries in `index.html`. Keep them under ~1000px wide —
  they're already optimized (palette-quantized PNGs) to load fast.

## What's intentionally not in this repo

- No signed `.zxp` package, certificates, or `.p12` files.
- No extension source code.
- No analytics, tracking, or third-party scripts of any kind.

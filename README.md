# Hannah Teng — Portfolio

A single-page, fully responsive personal portfolio. **Static site** — no build step, no npm, no framework. Just HTML + Bootstrap (via CDN) + one small custom stylesheet + a little vanilla JS.

## Stack
- HTML5
- Bootstrap 5.3 CSS + JS bundle (CDN)
- Bootstrap Icons (CDN)
- Google Fonts: Fraunces (display serif) + Inter (UI sans)
- `custom.css` — brand overrides + small layout tweaks (commented so you can learn each block)

## Files
- `index.html` — all markup, plus the inline navbar/scroll script at the bottom
- `custom.css` — palette, fonts, navbar, hero, timeline, skill pills, cards
- `README.md` — this file

---

## (a) Preview locally

From inside the `hannah-portfolio/` folder, start Python's built-in static server:

```sh
cd hannah-portfolio
python3 -m http.server 8000
```

Then open: **http://localhost:8000**

Press `Ctrl + C` in the terminal to stop the server.

> If port 8000 is in use, swap in any free port: `python3 -m http.server 5500`

---

## (b) Deploy free to GitHub Pages (build-free, no npm)

This deploys the site directly from your repo's `main` branch root — no `gh-pages` package, no GitHub Actions needed.

1. **Create a new public GitHub repo** named `hannah-portfolio` (or anything you like) under your account `HannahTeng`. Don't initialize it with a README from GitHub — we'll push our own.

2. **Push this folder to `main`** (run inside `hannah-portfolio/`):

   ```sh
   cd hannah-portfolio
   git init -b main
   git add .
   git commit -m "Initial portfolio site"
   git remote add origin https://github.com/HannahTeng/hannah-portfolio.git
   git push -u origin main
   ```

3. On GitHub, open the repo → **Settings** → **Pages**.

4. Under **Build and deployment**:
   - **Source:** *Deploy from a branch*
   - **Branch:** `main` · Folder: `/ (root)`
   - Click **Save**.

5. Wait ~1 minute. GitHub will show your live URL at the top of the Pages settings page. It will be:

   **`https://hannahteng.github.io/hannah-portfolio/`**

> **Tip — custom-looking URL without a custom domain:** if you instead name the repo `HannahTeng.github.io` (matching your username exactly), the URL becomes the cleaner `https://hannahteng.github.io/`.

### Updating the site later
Just commit & push to `main`. GitHub Pages auto-rebuilds within a minute.

```sh
git add .
git commit -m "Update content"
git push
```

---

## (c) Deploy free to Vercel

Two ways — pick whichever you prefer.

### Option 1 — Vercel web (no CLI, no npm)

1. Push the folder to GitHub first (do step (b) above).
2. Go to **https://vercel.com/new** and sign in with GitHub.
3. **Import** your `hannah-portfolio` repo.
4. On the configuration screen:
   - **Framework Preset:** *Other*
   - Leave **Build Command** and **Output Directory** empty.
   - Root Directory: leave as `/`.
5. Click **Deploy**.

After ~30 seconds your URL will be:

**`https://hannah-portfolio.vercel.app`**

(You can rename the project in Vercel's dashboard → Settings → General.)

### Option 2 — Vercel CLI

Requires Node.js installed once on your machine. Then:

```sh
npm i -g vercel        # one-time install of the CLI
cd hannah-portfolio
vercel login           # browser-based login, one-time
vercel                 # first deploy → preview URL
vercel --prod          # promote to production
```

Production URL will be: **`https://<your-project-name>.vercel.app`**

---

## Editing content

- Personal details, dates, bullet text, links — all in `index.html`. Search for `href="#"` to find the project placeholder GitHub links.
- Brand colors, fonts, spacing — all live at the top of `custom.css` (variables on `:root`).
- Need a different accent color? Change `--accent` (and the matching `--bs-primary`) in one place and the whole palette updates.

## Accessibility notes
- Semantic landmarks (`<nav>`, `<main>`, `<section>`, `<footer>`)
- `aria-label` on every action link / icon button
- AA contrast ratios — ink on background ≈ 14:1; teal accent on background ≈ 5.4:1
- Keyboard-only focus rings via `:focus-visible`

## Browser support
Modern evergreen browsers (Chrome, Safari, Firefox, Edge). Uses CSS variables, `scroll-padding`, and IntersectionObserver-based ScrollSpy from Bootstrap 5.3.

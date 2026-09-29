# Trust Chain

Landing page for **Trust Chain** – a blockchain-based secure platform for decentralized identity, role-based access control, digital asset management, and transparent audit trails.

**Team:** Hexatex  
**Event:** Smart India Hackathon 2026  
**Problem Statement ID:** 26125

---

## Tech Stack

- [React 18](https://react.dev/) + [Vite 5](https://vitejs.dev/)
- [Tailwind CSS 3](https://tailwindcss.com/)

## Local Development

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173).

## Production Build

```bash
npm run build       # outputs to dist/
npm run preview     # preview the dist build locally
```

---

## Deploy to Vercel

### Option 1 — Vercel CLI

```bash
npm i -g vercel
vercel
```

Follow the prompts. Vercel auto-detects Vite and sets the correct build command (`npm run build`) and output directory (`dist`).

### Option 2 — Vercel Dashboard (recommended)

1. Push this repository to GitHub (or GitLab / Bitbucket).
2. Go to [vercel.com/new](https://vercel.com/new) and import the repository.
3. Vercel detects the Vite framework automatically.
4. Confirm these settings (Vercel fills them in):
   - **Framework Preset:** Vite
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
   - **Install Command:** `npm install`
5. Click **Deploy**.

Every push to the default branch will trigger an automatic redeploy.

### Environment variables

None required — this is a purely static frontend site.

---

## Project Structure

```
trust-chain/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── Introduction.jsx
│   │   ├── Features.jsx
│   │   ├── ComingSoon.jsx
│   │   └── Footer.jsx
│   ├── hooks/
│   │   └── useScrollAnimation.js
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── vite.config.js
├── tailwind.config.js
└── postcss.config.js
```

---

> **Disclaimer:** This is a concept-stage proposal for SIH 2026. No features are operational.

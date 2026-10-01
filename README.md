# Akash Bobba — Cloud & DevOps Portfolio

Personal portfolio for **Akash Bobba**, Junior Cloud & DevOps Engineer (AWS & Linux Infrastructure), Bengaluru.

Built with **React 19 + TypeScript + Tailwind CSS 3 + Vite**. No UI or animation libraries; icons and diagrams are inline SVG.

> **Opening the site without installing anything:** use the ready-built `index.html` from the
> "site ready to upload" zip — double-click it and it opens in any browser.
> The `index.html` in *this* source folder is only a template for the build tool and shows a
> blank page if opened directly.

## Run locally

```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # production build -> dist/ (single self-contained index.html + resume PDF)
npm run preview    # serve dist/ locally
```

Requires Node 18+.

## Edit content

All text lives in **`src/data/profile.ts`** (sourced from the resume). Components only render it.

| To change | Edit |
|---|---|
| Name, title, contact, LinkedIn | `profile` in `src/data/profile.ts` |
| Skills | `skillGroups` |
| Projects, bullets, architecture flows | `projects` |
| Training timeline, SAA-C03 status | `training`, `certificationPrep` |
| Resume PDF | replace `public/Akash_Bobba_Resume.pdf` (keep the filename, or update `profile.resumeFile`) |

### Placeholders to fill in later (hidden in the UI until set)

- `profile.githubUrl` — adds GitHub to the contact list and footer.
- `projects[].repoUrl` / `projects[].demoUrl` — adds "Source code" / "Live demo" buttons.
- `index.html` — replace `https://example.com/` in the canonical and Open Graph tags with the real domain, and add an `og-image.png` (1200×630) if wanted.

When Akash passes SAA-C03, update `certificationPrep` (status + note) — the site never shows it as certified until then.

## Contact form

The form validates name, email and message on the client.

- **No backend configured (default):** on submit it opens the visitor's email app with the message pre-filled. It never claims a message was sent.
- **With a backend:** copy `.env.example` to `.env` and set `VITE_CONTACT_ENDPOINT`. The form POSTs `{ name, email, message }` as JSON and shows a success message on any 2xx response. A good fit for this portfolio: **API Gateway → Lambda → Amazon SES**. Formspree / Getform endpoints also work.

Logic lives in `src/lib/contact.ts`.

## Deploy

`npm run build` outputs a static site in `dist/` (one `index.html` with everything inlined, plus the resume PDF). Any static host works, and the file also opens directly from disk:

- **AWS:** S3 bucket + CloudFront (Origin Access Control), or AWS Amplify Hosting.
- **Vercel / Netlify:** framework preset "Vite", build `npm run build`, output `dist`.
- **GitHub Pages:** works as-is (paths are relative).
- **Netlify Drop:** drag the `dist` folder onto app.netlify.com/drop.

## Structure

```
src/
  data/profile.ts         content (single source of truth)
  lib/                    contact form, resume download, scroll-reveal hook
  components/
    Navbar, Hero, HeroVisual, Highlights, About, Skills,
    Projects, ProjectDetails (modal), FlowDiagram,
    Architecture (interactive AWS diagram), DevOpsWorkflow,
    Training, Education, Contact, Footer, SectionHeader, Icon
```

## Accessibility & quality notes

- Semantic landmarks, skip link, visible focus states, keyboard-operable diagram nodes and modal (native `<dialog>`).
- Animations are subtle and fully disabled under `prefers-reduced-motion`.
- Checked with axe-core (WCAG 2 A/AA): no violations. No horizontal overflow from 360px to 1440px.

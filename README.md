# CoRoLab website

React (Next.js) + Tailwind, bilingual (EN/DE), hosted on GitHub Pages.
**All text lives in `content/` – nobody needs to touch code to change it.**

## Edit content (no setup needed)

1. Open this repository on GitHub and go to the `content` folder.
2. Pick the language: `en` (English) or `de` (Deutsch).
3. Click a file → ✏️ (pencil) → edit → **Commit changes**.
   The site rebuilds automatically (~2 min). If you made a mistake in the header of a file, the build fails with a
   plain message and the live site stays unchanged.

### What is where

| Folder / file | What |
|---|---|
| `content/<lang>/site.md` | menu labels, footer, fixed texts |
| `content/<lang>/pages/home.md` | start page (hero, text, image strip, logos) |
| `content/<lang>/pages/contact.md`, `disclaimer.md` | contact and legal pages (plain text) |
| `content/<lang>/projects/*.md` | one file per project |
| `content/<lang>/hardware/*.md` | one file per robot/device |
| `content/<lang>/work/*.md` | research topics |
| `content/<lang>/team/*.md` | one file per person (grouped by role, then surname) |
| `content/<lang>/teaching/*.md` | one file per module |
| `content/<lang>/publications/*.md` | lists per category (journal, conference, …) |
| `content/<lang>/<section>/_index.md` | title + intro text of that section's page |

### Add something new

Open the folder → **Add file → Create new file** → name it e.g. `my-project.md` → copy the matching file from
[`templates/`](templates) and fill it in. The file name becomes the URL.

### Images and PDFs

Upload to `public/images/...` or `public/pdfs/...` (**Add file → Upload files**), then reference as
`images/projects/photo.jpg`. Please resize photos to ≤ 1600 px wide.

### Translations

German and English files have the same name. If a German file is missing, the English text is shown with a short note,
so nothing ever disappears. To translate: copy the English file into `content/de/…` and translate it.

### The header block

Each file starts with fields between `---` lines (`title:`, `description:` …). Keep the `---` lines and the
`field: value` format. Put text with a colon in quotes: `title: "Robots: a story"`.
Allowed fields are in [`src/lib/schemas.ts`](src/lib/schemas.ts) and the templates.

## Develop locally

```bash
npm install
npm run dev        # http://localhost:3000/en/
npm run build      # validates content, builds static site into ./out
```

Deployment: pushes to `main` build and publish to GitHub Pages (`.github/workflows/deploy.yml`).
In the repo settings set **Pages → Source: GitHub Actions**.

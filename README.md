# 🛠️ Lab Website – Local Setup & Content Editing Guide

## Prerequisites

- **[Node.js](https://nodejs.org/en/download)** (latest version)
- **pnpm** package manager (`npm install -g pnpm`)
- **Git**


## Installation

```bash
git clone <REPO_URL>
cd <REPO_NAME>
pnpm install
```


## Running Locally

```bash
pnpm dev
```

Then open http://localhost:3000/website in your browser. If port 3000 is busy check the console output for the correct port


## Content Structure & Editing

All main page content (headings, intros, listings, etc.) lives in `/content`.  
Only layouts and components are in `.vue` files.

### Section Index Pages

Every main section (`/hardware`, `/projects`, `/work`, `/publications`, `/team`, etc.) has its title/description in  
`/content/[section]/_index.md`.

**To change a page heading or intro:**  
- Edit the frontmatter (the stuff between the --- at the top) in the relevant `_index.md`.

**Example: `/content/projects/_index.md`**

```
---
title: "Current and past projects in our lab"
description: |
  Here you'll find a selection of our research projects—past and present. Click on any project to read more details.
---
```

### Listing Pages (hardware, projects, work, etc.)

- All items are individual markdown files in their section subfolders:
  - `/content/hardware/*.md`
  - `/content/projects/*.md`
  - `...`

**To add/edit items:**  
- Create or edit a `.md` file in the respective folder.  

**Example: `/content/hardware/go1_edu.md`**

```
---
title: "Go1 Edu"
image: "/images/hardware/go1.jpg"
description: "Educational quadruped robot platform."
order: 1
---

Details about the robot go here…
```

### Static Pages (Disclaimer, Index (Home))

- Their content is also managed via `/content/disclaimer.md` and `/content/home.md` frontmatter.
- These are pulled dynamically in the Vue files.


## Adding/Editing Content

1. Find the relevant `.md` file in `/content`
2. Edit the text in your favorite editor
3. Save and reload your browser (dev server auto-reloads)
4. If you add new files, make sure to fill out required frontmatter (title, order, description, etc.)


## Assets

- Images go in `/public/images/` (organize in subfolders if you want)
- Reference them in markdown as `/images/yourimage.jpg`
- PDFs go in `/public/pdfs/`


## Troubleshooting

- Changes not showing up? Try restarting the dev server.
- Markdown not rendering? Check frontmatter for typos.
- Nuxt Content documentation: https://content.nuxt.com/


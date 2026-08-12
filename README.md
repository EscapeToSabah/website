# Escape to Sabah

A Next.js blog for **escapetosabah.com** — tourism stories, tips & tricks,
and top experiences across Sabah, Borneo. Content lives in a Google Sheet,
so you (or anyone you invite) can publish new posts by editing a
spreadsheet — no code, no CMS login, no deploy needed for content changes.

## What's inside

- **Home** — hero + latest stories + featured experiences + tips teaser
- **Stories** (`/stories`) — first-person blog posts, markdown content
- **Top Experiences** (`/experiences`) — featured places, plotted on a
  vertical "elevation line" from Mount Kinabalu's 4,095m summit down to
  Sipadan's 600m reef wall (the site's one signature visual device)
- **Tips & Tricks** (`/tips`) — practical advice grouped by category,
  shown as an accordion

Built with Next.js (App Router), TypeScript, and Tailwind CSS v4. No
database — content is fetched live from Google Sheets on each request
(cached 5 minutes) and pages are pre-rendered at build time too, so the
site is fast even if Sheets is briefly unreachable.

## 1. Run it right now (no setup)

The project ships with sample content (`lib/sample-data.ts`) so it looks
right immediately:

```bash
npm install
npm run dev
```

Open http://localhost:3000. Everything you see — the stories, tips, and
featured places — is demo content you'll replace with your own sheet.

## 2. Connect your Google Sheet

### Create the sheet

Make a new Google Sheet with **three tabs**, named exactly:

**`Stories`**

| Column | Notes |
|---|---|
| `slug` | URL segment, e.g. `sunrise-on-low-s-peak`. Lowercase, hyphens, no spaces. |
| `title` | Post title |
| `excerpt` | 1–2 sentence teaser shown on cards |
| `cover_image` | Optional label/id (the site renders elevation-toned art, not photos, by default — see "Adding real photos" below) |
| `author` | Author name |
| `date` | `YYYY-MM-DD` |
| `tags` | Comma-separated, e.g. `Mount Kinabalu, Hiking` |
| `content` | The post body, in **Markdown**. Use `##` for headings, blank lines between paragraphs. |
| `featured` | `yes` / `no` |

**`Tips`**

| Column | Notes |
|---|---|
| `slug` | Unique id, e.g. `when-to-visit` |
| `title` | Tip title |
| `category` | Groups tips on the page, e.g. `Before You Go`, `Getting Around`, `Money & Practical`, `Culture` |
| `icon` | A [lucide.dev](https://lucide.dev/icons) icon name in PascalCase, e.g. `CloudSun`, `Ticket`, `Car` |
| `summary` | 1 sentence, shown collapsed |
| `content` | Full tip text, in Markdown, shown when expanded |
| `order` | Number controlling sort order within a category |

**`Experiences`**

| Column | Notes |
|---|---|
| `slug` | Unique id, e.g. `mount-kinabalu-summit` |
| `title` | Place/experience name |
| `category` | e.g. `Mountains`, `Islands & Diving`, `Wildlife`, `Culture`, `Adventure` |
| `location` | e.g. `Kinabalu Park` |
| `elevation_m` | **Number.** Metres above sea level; use a negative number for underwater depth (e.g. `-600` for a dive site). This drives the elevation-line visual, so it's worth getting roughly right for every row. |
| `difficulty` | e.g. `Easy`, `Moderate`, `Challenging` |
| `duration` | e.g. `Half day`, `2 days` |
| `image` | Optional label/id |
| `summary` | 1–2 sentences shown on cards |
| `content` | Full write-up, in Markdown |
| `featured` | `yes` / `no` — featured rows show on the homepage |

The first row of each tab must be exactly these header names (lowercase,
underscores) — the site reads columns by name, not position.

### Share it

Click **Share** → set to **"Anyone with the link" → Viewer**. The site
reads your sheet through Google's public CSV export, so no API key or
service account is needed — but the sheet has to be link-viewable.

### Point the site at it

Copy your sheet's ID out of its URL:

```
https://docs.google.com/spreadsheets/d/THIS_PART_IS_THE_ID/edit
```

Then:

```bash
cp .env.local.example .env.local
# edit .env.local and set:
# SHEET_ID=THIS_PART_IS_THE_ID
```

Restart `npm run dev`. Your sheet's rows now replace the sample content.
Edits to the sheet show up within 5 minutes on a live/deployed site
(content is revalidated every 300 seconds), or instantly in local dev.

## 3. Adding real photos

Right now, Story and Experience cards render generated gradient art
instead of photos — deliberately, so the site works before you've
uploaded anything and never breaks on a missing image. To use real
photos instead:

1. Add an `image_url` column to the `Stories` and/or `Experiences` tab
   with a direct image URL (e.g. from Cloudinary, Unsplash, or your own
   hosting).
2. In `components/StoryCard.tsx` / `components/ExperienceCard.tsx` /
   `components/ElevationArt.tsx`, swap the gradient `<div>` for a
   Next.js `<Image>` pointed at that URL, and add the image host to
   `images.remotePatterns` in `next.config.ts`.

## 4. Deploy

This is a standard Next.js app — it deploys to Vercel, Netlify, or any
Node host. On Vercel: import the repo, set the `SHEET_ID` environment
variable in your project settings, deploy. Point `escapetosabah.com`'s
DNS at it from your domain registrar.

## Project structure

```
app/
  page.tsx                    Home
  stories/page.tsx            Stories list
  stories/[slug]/page.tsx     Story detail
  experiences/page.tsx        Top Experiences list + elevation ruler
  experiences/[slug]/page.tsx Experience detail
  tips/page.tsx                Tips & Tricks
  globals.css                 Design tokens (colors, type, prose styles)
lib/
  sheets.ts                   Google Sheets fetch + parsing
  csv.ts                      Dependency-free CSV parser
  sample-data.ts              Fallback/demo content
  types.ts                    Story / Tip / Experience types
components/
  ElevationRuler.tsx           The vertical summit-to-reef line
  ElevationArt.tsx              Elevation-toned gradient art for cards
  StoryCard.tsx / TipCard.tsx / ExperienceCard.tsx
  Header.tsx / Footer.tsx
```

## Design notes

The palette and layout are built around Sabah's actual vertical
geography: rainforest canopy green, golden-hour amber, and reef teal,
rather than a generic travel-blog look. The "elevation line" on the
homepage and Experiences page is real data — each featured
experience's row is plotted at its true elevation (or depth, for dive
sites), from Low's Peak at +4,095m down to Sipadan's wall at -600m.

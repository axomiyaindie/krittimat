# Krittimat — AI Learning Hub

> Your premier AI tools discovery and learning platform in English & Assamese.

🌐 **Live:** https://krittimat.netlify.app

---

## Features

- 🔍 **100+ AI Tools Directory** — Searchable, filterable, with full detail pages
- 📝 **Prompt Library** — Copy-ready prompts for ChatGPT, coding, students & business
- 📚 **Learn AI Guides** — Beginner-friendly articles in English & Assamese
- 🎬 **Tutorials** — Step-by-step guides for using AI tools
- 🌐 **Bilingual** — Full English + Assamese (অসমীয়া) support
- 🔎 **Fuse.js Search** — Global search across all content
- 📱 **Mobile-first** — Fully responsive on all devices
- ⚡ **SEO Optimized** — Meta tags, OG, schema markup on every page

---

## Tech Stack

| Tool | Purpose |
|------|---------|
| React 18 + Vite | Framework |
| React Router v6 | Routing |
| TailwindCSS | Styling |
| Fuse.js | Search |
| react-helmet-async | SEO |
| Lucide React | Icons |

---

## Getting Started

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

---

## Deploy to Netlify

1. Push to GitHub
2. Connect repo to Netlify
3. Build command: `npm run build`
4. Publish directory: `dist`
5. The `netlify.toml` handles SPA routing automatically

---

## Project Structure

```
src/
├── components/     # Reusable UI components
├── layouts/        # Page layout wrappers
├── pages/          # Route pages
├── data/           # JSON databases
├── utils/          # Search & language utilities
└── styles/         # Global CSS
```

---

## Adding New AI Tools

Edit `src/data/tools.json` and add a new entry:

```json
{
  "id": "tool-name",
  "name": "Tool Name",
  "company": "Company",
  "description": "What it does...",
  "category": "Chat AI",
  "tags": ["chat", "writing"],
  "pricing": "Free / $20/mo",
  "url": "https://tool.com",
  "featured": false,
  "trending": false,
  "rating": 4.5
}
```

---

## Color System (Azure Inspired)

```
Primary:      #0078D4
Primary Dark: #005A9E
Accent:       #50E6FF
Background:   #F5F9FF
Text Main:    #0B1F33
Text Soft:    #5B6B7C
```

---

Built with ❤️ in Assam, India.

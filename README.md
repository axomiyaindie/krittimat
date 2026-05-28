# Krittimat — AI Learning Hub

> Your premier AI tools discovery and learning platform in **English & Assamese**.

🌐 **Live:** [krittimat.vercel.app](https://krittimat.vercel.app) | [krittimat.netlify.app](https://krittimat.netlify.app)

---

## Features

- 🔍 **100+ AI Tools Directory** — Searchable, filterable, with detailed pages
- 📝 **Prompt Library** — Ready-to-use prompts for ChatGPT, coding, students & business
- 📚 **Learn AI Guides** — Beginner-friendly articles in English & Assamese
- 🎬 **Tutorials** — Step-by-step guides for using AI tools
- 🌐 **Bilingual Support** — Full English + Assamese (অসমীয়া) interface
- 🔎 **Powerful Search** — Global search with Fuse.js
- 📱 **Mobile-First** — Fully responsive design
- ⚡ **SEO Optimized** — Dynamic metadata, Open Graph, and multilingual support

---

## Tech Stack

| Technology          | Purpose                     |
|---------------------|-----------------------------|
| Next.js 15 (App Router) | React Framework            |
| TypeScript          | Type Safety                 |
| Tailwind CSS        | Styling                     |
| pnpm                | Package Manager             |
| Fuse.js             | Search Engine               |
| Vercel / Netlify    | Deployment                  |

---

## Getting Started

```bash
# Clone the repository
git clone https://github.com/axomiyaindie/krittimat.git
cd krittimat

# Install dependencies
pnpm install

# Start development server
pnpm dev

Available Scripts
Bashpnpm dev          # Start dev server
pnpm build        # Build for production
pnpm start        # Start production server
pnpm lint         # Run linting

Deployment
Deploy to Vercel (Recommended)

Push your code to GitHub
Go to vercel.com and import your repository
Vercel will auto-detect Next.js settings
Deploy

Deploy to Netlify

Push your code to GitHub
Go to netlify.com → New site from Git
Set build settings:
Build Command: pnpm run build
Publish Directory: out or .next (depending on output)

Add netlify.toml if needed for routing


Project Structure
Bashsrc/
├── app/              # Next.js App Router
│   ├── [lang]/       # Bilingual routes (en, as)
│   ├── api/          # API routes
│   └── globals.css
├── components/       # Reusable components
├── data/             # Static data (tools, prompts, etc.)
├── lib/              # Utilities
└── types/            # TypeScript definitions

Environment Variables
Copy .env.example to .env.local:
Bashcp .env.example .env.local
Then update NEXT_PUBLIC_SITE_URL as needed.

Adding New AI Tools
Edit the data files in src/data/ and restart the dev server.

Color System

Primary: #0078D4 (Azure Blue)
Accent: #50E6FF
Dark: #0B1F33
Background: #F5F9FF


Built with ❤️ in Assam, India 🇮🇳
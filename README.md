# N7 Banking Platform

A pixel-perfect implementation of the N7 Banking platform — a modern fintech marketing and dashboard application built with Next.js 14, TypeScript, Tailwind CSS, and Express.js.

## Tech Stack

| Layer | Tech |
|-------|------|
| Frontend | Next.js 14 (App Router), TypeScript, Tailwind CSS |
| Backend | Express.js, TypeScript, Node.js |
| Fonts | Syne (display) + DM Sans (body) + DM Mono |
| Icons | Lucide React |

## Project Structure

```
n7-banking/
├── frontend/          # Next.js 14 app
│   ├── app/           # App router pages
│   │   ├── page.tsx           # Home page
│   │   ├── solutions/         # Solutions page
│   │   ├── about/             # About us page
│   │   ├── insights/          # Insights / blog
│   │   └── contact/           # Contact / demo request
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.tsx     # Responsive navbar with dropdowns
│   │   │   └── Footer.tsx     # Full footer with links & offices
│   │   └── sections/
│   │       ├── HeroSection.tsx           # Hero with dashboard mockup
│   │       ├── SolutionsSection.tsx      # 5 solution cards
│   │       ├── CoreBankingSection.tsx    # CB7 with AML dashboard
│   │       ├── DigitalBankingSection.tsx # Phone mockup features
│   │       └── InsightsSection.tsx       # Blog cards + case studies
│   └── ...config files
│
└── backend/           # Express.js API
    └── src/
        ├── index.ts          # Server entry point
        └── routes/
            ├── solutions.ts  # GET /api/solutions
            ├── insights.ts   # GET /api/insights/articles|case-studies
            ├── contact.ts    # POST /api/contact
            └── dashboard.ts  # GET /api/dashboard/aml|wallet|weekly-summary
```

## Getting Started

### Prerequisites
- Node.js 18+
- npm 9+

### 1. Frontend Setup

```bash
cd frontend
npm install
cp .env.local.example .env.local
npm run dev
```

Frontend runs at **http://localhost:3000**

### 2. Backend Setup

```bash
cd backend
npm install
cp .env.example .env
npm run dev
```

Backend runs at **http://localhost:4000**

## API Endpoints

### Solutions
- `GET /api/solutions` — All solutions
- `GET /api/solutions/:slug` — Single solution

### Insights
- `GET /api/insights/articles` — All articles
- `GET /api/insights/articles/:slug` — Single article
- `GET /api/insights/case-studies` — All case studies

### Contact
- `POST /api/contact` — Submit contact form
- `POST /api/contact/demo` — Request demo

### Dashboard (mock data)
- `GET /api/dashboard/aml` — AML dashboard data
- `GET /api/dashboard/wallet` — Wallet/account data
- `GET /api/dashboard/weekly-summary` — Weekly summary
- `GET /api/dashboard/transactions` — Transaction history

## Design System

### Colors
- **Primary background**: `#070B14`
- **Card**: `#0D1525`
- **Accent cyan**: `#00E5FF`
- **Accent blue**: `#1E6FFF`
- **Border**: `#1E2D4A`
- **Text muted**: `#8899B4`

### Typography
- **Display**: Syne (headings, labels, buttons)
- **Body**: DM Sans (paragraphs, descriptions)
- **Mono**: DM Mono (code, metadata, tags)

## Pages

| Route | Description |
|-------|-------------|
| `/` | Home — Hero, Solutions, Core Banking, Digital Banking, Insights |
| `/solutions` | All solutions overview |
| `/about` | Company story, mission, offices |
| `/insights` | Blog articles + case studies |
| `/contact` | Contact form + demo request |

## Features

- ✅ Fully responsive (mobile, tablet, desktop)
- ✅ Animated hero section with floating dashboard mockup
- ✅ AML Dashboard visualization
- ✅ Phone mockup screens (Digital Banking features)
- ✅ Scroll-triggered animations
- ✅ Sticky navbar with dropdown menus
- ✅ Full footer with office addresses
- ✅ Contact/demo request form
- ✅ Dark theme throughout
- ✅ CSS Grid layout system
- ✅ Tailwind CSS utility classes
- ✅ TypeScript throughout

## License

© 2024 Lincley Infrasystems Ltd. All rights reserved.

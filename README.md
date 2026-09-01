<div align="center">
  <h1>🇧🇩 Bangladesh Cultural Showcase</h1>
  <p>An immersive, open-source Next.js web application celebrating the rich history, breathtaking nature, and exquisite culinary heritage of Bangladesh.</p>

  <!-- Badges -->
  <a href="https://nextjs.org/"><img src="https://img.shields.io/badge/Next.js-15-black?style=flat&logo=next.js" alt="Next.js" /></a>
  <a href="https://react.dev/"><img src="https://img.shields.io/badge/React-19-blue?style=flat&logo=react" alt="React" /></a>
  <a href="https://tailwindcss.com/"><img src="https://img.shields.io/badge/Tailwind-CSS-06B6D4?style=flat&logo=tailwind-css" alt="Tailwind CSS" /></a>
  <a href="https://www.framer.com/motion/"><img src="https://img.shields.io/badge/Framer-Motion-E902B5?style=flat&logo=framer" alt="Framer Motion" /></a>
  <a href="LICENSE"><img src="https://img.shields.io/badge/License-MIT-green.svg" alt="License" /></a>
</div>

## ✨ Overview

Originally conceptualized for **International Mother Language Day**, this project provides a deeply engaging and modern digital experience. It acts as an interactive digital museum where users can explore historical milestones (like the Language Movement of 1952), renowned geographical landmarks, and authentic Bengali recipes.

## 🚀 Key Features

*   **Interactive Discovery Wheel**: Spin the wheel to stumble upon random cultural facts, historical events, and globally recognized GI (Geographical Indication) Products from Bangladesh.
*   **Immersive Full-Screen Galleries**: Beautiful masonry grids and modal views equipped with interactive thumbnail sliders and a captivating frosted green glass (`glassmorphism`) visual aesthetic.
*   **Gourmet Bengali Kitchen**: A dedicated food directory serving step-by-step recipes of authentic traditional dishes like *Kacchi Biryani*, *Shorshe Ilish*, and *Fuchka*.
*   **Thematic Design System**: Tailored exactly to represent the Bangladesh flag colors (`bd-green` and `bd-red`) gracefully applied via complex Tailwind gradients, accents, and hover states.
*   **Blazing Fast Performance**: 
    *   Fully implements the bleeding-edge Next.js 15 `<Image>` component natively.
    *   Generates highly compressed `WebP` images automatically, transforming otherwise slow Wikipedia/Unsplash images into ultra-fast assets served lazily.
*   **Fluid Animations**: Utilizing `framer-motion` for buttery smooth spring transitions, layout shifts, image zoom interactions, and elegant page reveals.

## 🛠️ Technology Stack

| Technology | Purpose |
| ---------- | ------- |
| **Next.js 15 (App Router)** | Core React framework, Serverless Route Handlers & Image Optimization |
| **MongoDB & Mongoose** | Production database and typed ODM with serverless connection pooling |
| **TanStack Query (React Query)** | Asynchronous state management, intelligent caching, and server-state synchronization |
| **Zod** | Runtime API request validation and sanitization |
| **TypeScript** | Static typing and robust code foundation |
| **Tailwind CSS** | Atomic highly-customized styling and theming |
| **Framer Motion** | Complex UI transitions and gesture animations |
| **Lucide React** | Clean, responsive, and minimalist SVG iconography |

## 💻 Getting Started

To get a local development environment up and running, follow these simple steps:

### Prerequisites
- Node.js (v18.x or later)
- MongoDB instance (local or [MongoDB Atlas](https://www.mongodb.com/atlas))

### Installation & Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/mehedihassandev/International-Day.git
   cd International-Day
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Configure Environment Variables**
   Copy `.env.example` to `.env.local`:
   ```bash
   cp .env.example .env.local
   ```
   Set your `MONGODB_URI`:
   ```env
   MONGODB_URI=mongodb://localhost:27017/international_day
   ```

4. **Seed the MongoDB Database**
   Populate your MongoDB database with historical facts and authentic recipes:
   ```bash
   npm run db:seed
   ```

5. **Start the development server**
   ```bash
   npm run dev
   ```

6. **Explore the Showcase!**
   Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📡 REST API Documentation

The app provides Next.js 15 REST API endpoints for full data management:

| Method | Endpoint | Description |
| :--- | :--- | :--- |
| `GET` | `/api/facts` | List facts with filters (`?category=`, `?search=`, `?page=`, `?limit=`) |
| `GET` | `/api/facts/[id]` | Get single fact by slug ID or MongoDB `_id` |
| `POST` | `/api/facts` | Create new fact (validated with Zod) |
| `PUT` | `/api/facts/[id]` | Update fact by ID |
| `DELETE` | `/api/facts/[id]` | Delete fact by ID |
| `GET` | `/api/facts/random` | Get random facts for Spin Wheel (`?count=20`) |
| `GET` | `/api/recipes` | List recipes with filters (`?category=`, `?search=`, `?limit=`) |
| `GET` | `/api/recipes/[id]`| Get single recipe by slug ID or `_id` |
| `POST` | `/api/recipes` | Create new recipe (validated with Zod) |
| `PUT` | `/api/recipes/[id]`| Update recipe by ID |
| `DELETE` | `/api/recipes/[id]`| Delete recipe by ID |
| `POST` | `/api/seed` | Seed/re-populate database from data templates |

## 📂 Project Structure

```text
├── src/
│   ├── app/
│   │   ├── api/             # Next.js 15 REST API routes (facts, recipes, seed)
│   │   ├── foods/           # Bengali Kitchen page (dynamic data & filters)
│   │   ├── heritage/        # Heritage Gallery page (dynamic data & search)
│   │   ├── layout.tsx       # Global root layout
│   │   └── page.tsx         # Home page with dynamic Spin Wheel
│   ├── components/          # Reusable UI elements (Modals, Cards, SpinWheel)
│   ├── models/              # Mongoose schemas & models (Fact.ts, Recipe.ts)
│   ├── services/            # Client/server data fetchers with resilient fallback
│   ├── lib/
│   │   ├── mongodb.ts       # Cached Mongoose connection pool
│   │   ├── api-response.ts  # Standardized API response helpers
│   │   └── validations/     # Zod request validation schemas
│   ├── scripts/
│   │   └── seed.ts          # CLI database seeding script
│   └── data/                # Static fallback datasets (facts.ts, recipes.ts)
├── public/                  # Static assets
└── next.config.ts           # Next.js configuration
```

## 📜 License

This project is completely open source and distributed under the **MIT License**. See the `LICENSE` file for more information.

## 🤝 Contributing

Contributions, issues, and feature requests are always welcome! Since this is an open-source celebration of culture, feel free to submit pull requests if you want to add new recipes, historical facts, or optimize any code under the hood. Check out the [issues page](https://github.com/mehedihassandev/International-Day/issues).

## ✨ Contributors

A huge thank you to everyone who has helped build and maintain this project!

<!-- readme: contributors -start -->
<table>
<tr>
    <td align="center">
        <a href="https://github.com/mehedihassandev">
            <img src="https://avatars.githubusercontent.com/u/59695824?v=4" width="100;" alt="mehedihassandev"/>
            <br />
            <sub><b>Md. Mehedi Hassan</b></sub>
        </a>
    </td>
    <td align="center">
        <a href="https://github.com/ashiqur12315">
            <img src="https://avatars.githubusercontent.com/u/144902205?v=4" width="100;" alt="ashiqur12315"/>
            <br />
            <sub><b>Md. Ashiqur Rahman</b></sub>
        </a>
    </td>
    <td align="center">
        <a href="https://github.com/ashiqur214">
            <img src="https://avatars.githubusercontent.com/u/175605855?v=4" width="100;" alt="ashiqur214"/>
            <br />
            <sub><b>Ashiq</b></sub>
        </a>
    </td>
    <td align="center">
        <a href="https://github.com/Sumiya-Sayeed">
            <img src="https://avatars.githubusercontent.com/u/17126793?v=4" width="100;" alt="Sumiya-Sayeed"/>
            <br />
            <sub><b>Sumiya Sayeed</b></sub>
        </a>
    </td></tr>
</table>
<!-- readme: contributors -end -->

---

<div align="center">
  <sub>Made with ❤️ by <a href="https://github.com/mehedihassandev">Mehedi Hassan</a> to celebrate the vibrant culture of Bangladesh.</sub>
</div>

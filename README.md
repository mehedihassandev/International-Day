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
| **Next.js 15 (App Router)** | Core React framework, Routing, and Native Image Optimization |
| **TypeScript** | Static typing and robust code foundation |
| **Tailwind CSS** | Atomic highly-customized styling and theming |
| **Framer Motion** | Complex UI transitions and gesture animations |
| **Lucide React** | Clean, responsive, and minimalist SVG iconography |

## 💻 Getting Started

To get a local development environment up and running, follow these simple steps:

### Prerequisites
Make sure you have Node.js (v18.x or later) installed on your machine.

### Installation

1.  **Clone the repository**
    ```bash
    git clone https://github.com/mehedihassandev/International-Day.git
    cd International-Day
    ```

2.  **Install dependencies**
    ```bash
    npm install
    # or
    yarn install
    # or
    pnpm install
    ```

3.  **Start the development server**
    ```bash
    npm run dev
    ```

4.  **Explore the Showcase!**
    Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📂 Project Structure

```text
├── src/
│   ├── app/             # Standard Next.js 15 App Router pages & layouts
│   ├── components/      # Reusable React UI elements (Modals, Cards, SpinWheel)
│   ├── data/            # Local data models & structured objects (facts.ts, recipes.ts)
│   ├── lib/             # Utility functions
├── public/              # Static assets (fonts, icons)
├── tailwind.config.ts   # Custom theme setup injecting custom `bd-green` and `bd-red` variable tokens
└── next.config.ts       # Network security rules & remotePatterns caching config for Next Images
```

## 📜 License

This project is completely open source and distributed under the **MIT License**. See the `LICENSE` file for more information.

## 🤝 Contributing

Contributions, issues, and feature requests are always welcome! Since this is an open-source celebration of culture, feel free to submit pull requests if you want to add new recipes, historical facts, or optimize any code under the hood. Check out the [issues page](https://github.com/mehedihassandev/International-Day/issues).

## ✨ Contributors

A huge thank you to everyone who has helped build and maintain this project!

<!-- readme: contributors -start -->
<table align="center">
  <tbody>
    <tr>
      <td align="center" valign="top" width="150px">
        <a href="https://github.com/mehedihassandev">
          <img src="https://github.com/mehedihassandev.png?size=100" width="100px;" alt="Mehedi Hassan" style="border-radius: 50%;" />
          <br />
          <sub><b>Mehedi Hassan</b></sub>
        </a><br/>
      </td>
    </tr>
  </tbody>
</table>
<!-- readme: contributors -end -->

---

<div align="center">
  <sub>Made with ❤️ by <a href="https://github.com/mehedihassandev">Mehedi Hassan</a> to celebrate the vibrant culture of Bangladesh.</sub>
</div>

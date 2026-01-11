<!-- # React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
``` -->

<!--
# Omololu Jumat – Portfolio Website

My personal portfolio website showcasing my projects, skills, and experience as a software developer.
Built with modern web technologies, with a focus on performance, responsiveness, and clean UI.

---

## 🌐 Live Demo

https://omololujumat.netlify.app/

---

## 🛠 Tech Stack

- React
- TypeScript
- Tailwind CSS
- Bun (package manager & runtime)
- Git & GitHub

---

## ✨ Features

- Fully responsive (mobile-first)
- Projects showcase with live demos and source code links
- About, skills, and experience sections
- Clean and modern UI
- Optimized for performance and accessibility

---

## 🚀 Getting Started

### Prerequisites

- **Bun** installed
  👉 https://bun.sh

---

### Installation

```bash
git clone https://github.com/Jummate/omololujumat.git
cd omololujumat
bun install
 -->

# Omololu Jumat – Portfolio Website

My personal portfolio website showcasing my projects, skills, and experience as a software developer.
Built with modern web technologies, with a focus on performance, responsiveness, and clean UI.

## 🌐 Live Demo

https://omololujumat.netlify.app/

## 🛠 Tech Stack

- React
- TypeScript
- Tailwind CSS
- Bun

## ✨ Features

- Responsive, mobile-first design
- Projects showcase with live demos
- Clean and modern UI
- Performance and accessibility focused

## 🚀 Run Locally

```bash
git clone https://github.com/Jummate/omololujumat.git
cd omololujumat
bun install
bun run dev
```

## 📬 Contact

- Email: omololujumat@gmail.com
- GitHub: https://github.com/Jummate
- LinkedIn: https://linkedin.com/in/omololu-jumat-1405

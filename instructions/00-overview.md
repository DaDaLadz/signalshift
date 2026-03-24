# Signal Shift — Project Overview

## Stack
- **Framework**: React 18 (via Vite)
- **Styling**: Tailwind CSS v3
- **Build tool**: Vite 5

## Folder Structure
```
signalshift/
├── public/
│   └── images/          # Static images served as-is (no import needed)
├── src/
│   ├── assets/
│   │   └── images/      # Images imported in components (Vite handles hashing)
│   ├── components/      # Reusable UI components
│   ├── hooks/           # Custom React hooks
│   ├── pages/           # Page-level components
│   ├── styles/
│   │   └── index.css    # Tailwind directives entry point
│   ├── App.jsx          # Root component / routing shell
│   └── main.jsx         # React DOM entry point
├── instructions/        # Build guides (you are here)
├── index.html
├── package.json
├── tailwind.config.js
├── postcss.config.js
└── vite.config.js
```

## Getting Started
```bash
npm install
npm run dev
```

## Instructions Index
| File | Topic |
|------|-------|
| `01-pages.md` | How to add new pages |
| `02-components.md` | How to build components |
| `03-styling.md` | Tailwind patterns and theming |
| `04-images.md` | How to add and use images |

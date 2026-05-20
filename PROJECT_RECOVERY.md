# Z-TOUR PROJECT RECOVERY DOCUMENT

> **Project:** Z-TOUR — Immersive 3D Tourism Visualization Platform for Pakistan
> **Live URL:** https://ms835857.github.io/z-tour/
> **Created:** FYP Project
> **Stack:** React 19 + Vite + Three.js + Framer Motion + Tailwind CSS v4

---

## HOW TO RECREATE FROM SCRATCH

```bash
# 1. Create Vite project
npm create vite@latest z-tour-app -- --template react
cd z-tour-app

# 2. Install dependencies
npm install react@^19.2.4 react-dom@^19.2.4 framer-motion@^12.38.0 \
  lucide-react@^1.8.0 three@^0.183.2 react-force-graph-3d@^1.29.1 \
  @react-three/fiber@^9.5.0 @react-three/drei@^10.7.7

# 3. Install dev dependencies
npm install -D @vitejs/plugin-react@^6.0.1 vite@^8.0.4 \
  tailwindcss@^4.2.2 @tailwindcss/postcss@^4.2.2 postcss@^8.5.9 \
  autoprefixer@^10.4.27 eslint@^9.39.4 @eslint/js@^9.39.4 \
  globals@^17.4.0 eslint-plugin-react-hooks@^7.0.1 \
  eslint-plugin-react-refresh@^0.5.2 gh-pages@^6.3.0

# 4. Delete template files in src/, then recreate all files from below

# 5. Add public assets (images are binary - must be re-added manually)
#    - public/bg-tourism.png (background mountain image)
#    - public/topo-overlay.png (topographic overlay)
#    - public/favicon.svg (copy from below)
#    - public/icons.svg (copy from below)

# 6. Run dev server
npm run dev

# 7. Build for production
npm run build

# 8. Deploy to GitHub Pages
npm run deploy
```

---

## FILE: `.gitignore`

```
# Logs
logs
*.log
npm-debug.log*
yarn-debug.log*
yarn-error.log*
pnpm-debug.log*
lerna-debug.log*

node_modules
dist
dist-ssr
*.local

# Editor directories and files
.vscode/*
!.vscode/extensions.json
.idea
.DS_Store
*.suo
*.ntvs*
*.njsproj
*.sln
*.sw?
```

---

## FILE: `package.json`

```json
{
  "name": "z-tour-app",
  "private": true,
  "version": "0.0.0",
  "type": "module",
  "homepage": "https://ms835857.github.io/z-tour/",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "lint": "eslint .",
    "preview": "vite preview",
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  },
  "dependencies": {
    "@react-three/drei": "^10.7.7",
    "@react-three/fiber": "^9.5.0",
    "framer-motion": "^12.38.0",
    "lucide-react": "^1.8.0",
    "react": "^19.2.4",
    "react-dom": "^19.2.4",
    "react-force-graph-3d": "^1.29.1",
    "three": "^0.183.2"
  },
  "devDependencies": {
    "@eslint/js": "^9.39.4",
    "@tailwindcss/postcss": "^4.2.2",
    "@types/react": "^19.2.14",
    "@types/react-dom": "^19.2.3",
    "@vitejs/plugin-react": "^6.0.1",
    "autoprefixer": "^10.4.27",
    "eslint": "^9.39.4",
    "eslint-plugin-react-hooks": "^7.0.1",
    "eslint-plugin-react-refresh": "^0.5.2",
    "gh-pages": "^6.3.0",
    "globals": "^17.4.0",
    "postcss": "^8.5.9",
    "tailwindcss": "^4.2.2",
    "vite": "^8.0.4"
  }
}
```

---

## FILE: `vite.config.js`

```js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/z-tour/',
})
```

---

## FILE: `index.html`

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>z-tour-app</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.jsx"></script>
  </body>
</html>
```

---

## FILE: `postcss.config.js`

```js
export default {
  plugins: {
    '@tailwindcss/postcss': {},
    autoprefixer: {},
  },
}
```

---

## FILE: `tailwind.config.js`

```js
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        darkBg: 'var(--bg-dark)',
        tealAccent: 'var(--accent-teal)',
        purpleAccent: 'var(--accent-purple)',
        amberAccent: 'var(--accent-amber)',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
```

---

## FILE: `eslint.config.js`

```js
import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import { defineConfig, globalIgnores } from 'eslint/config'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{js,jsx}'],
    extends: [
      js.configs.recommended,
      reactHooks.configs.flat.recommended,
      reactRefresh.configs.vite,
    ],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      parserOptions: {
        ecmaVersion: 'latest',
        ecmaFeatures: { jsx: true },
        sourceType: 'module',
      },
    },
    rules: {
      'no-unused-vars': ['error', { varsIgnorePattern: '^[A-Z_]' }],
    },
  },
])
```

---

## FILE: `src/main.jsx`

```jsx
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
```

---

## FILE: `src/App.jsx`

```jsx
import React, { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import LandingPage from './components/LandingPage';
import GraphView from './components/GraphView';
import './index.css';

function App() {
  const [currentView, setCurrentView] = useState('landing');

  return (
    <div
      className="w-full h-screen overflow-hidden"
      style={{
        backgroundColor: '#12131a',
        fontFamily: "'Inter', system-ui, sans-serif",
        color: '#e8e8f0',
      }}
    >
      <AnimatePresence mode="wait">
        {currentView === 'landing' ? (
          <LandingPage key="landing" setView={setCurrentView} />
        ) : (
          <GraphView key="graph" setView={setCurrentView} />
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;
```

---

## FILE: `src/App.css`

```css
.counter {
  font-size: 16px;
  padding: 5px 10px;
  border-radius: 5px;
  color: var(--accent);
  background: var(--accent-bg);
  border: 2px solid transparent;
  transition: border-color 0.3s;
  margin-bottom: 24px;

  &:hover {
    border-color: var(--accent-border);
  }
  &:focus-visible {
    outline: 2px solid var(--accent);
    outline-offset: 2px;
  }
}

.hero {
  position: relative;

  .base,
  .framework,
  .vite {
    inset-inline: 0;
    margin: 0 auto;
  }

  .base {
    width: 170px;
    position: relative;
    z-index: 0;
  }

  .framework,
  .vite {
    position: absolute;
  }

  .framework {
    z-index: 1;
    top: 34px;
    height: 28px;
    transform: perspective(2000px) rotateZ(300deg) rotateX(44deg) rotateY(39deg)
      scale(1.4);
  }

  .vite {
    z-index: 0;
    top: 107px;
    height: 26px;
    width: auto;
    transform: perspective(2000px) rotateZ(300deg) rotateX(40deg) rotateY(39deg)
      scale(0.8);
  }
}

#center {
  display: flex;
  flex-direction: column;
  gap: 25px;
  place-content: center;
  place-items: center;
  flex-grow: 1;

  @media (max-width: 1024px) {
    padding: 32px 20px 24px;
    gap: 18px;
  }
}

#next-steps {
  display: flex;
  border-top: 1px solid var(--border);
  text-align: left;

  & > div {
    flex: 1 1 0;
    padding: 32px;
    @media (max-width: 1024px) {
      padding: 24px 20px;
    }
  }

  .icon {
    margin-bottom: 16px;
    width: 22px;
    height: 22px;
  }

  @media (max-width: 1024px) {
    flex-direction: column;
    text-align: center;
  }
}

#docs {
  border-right: 1px solid var(--border);

  @media (max-width: 1024px) {
    border-right: none;
    border-bottom: 1px solid var(--border);
  }
}

#next-steps ul {
  list-style: none;
  padding: 0;
  display: flex;
  gap: 8px;
  margin: 32px 0 0;

  .logo {
    height: 18px;
  }

  a {
    color: var(--text-h);
    font-size: 16px;
    border-radius: 6px;
    background: var(--social-bg);
    display: flex;
    padding: 6px 12px;
    align-items: center;
    gap: 8px;
    text-decoration: none;
    transition: box-shadow 0.3s;

    &:hover {
      box-shadow: var(--shadow);
    }
    .button-icon {
      height: 18px;
      width: 18px;
    }
  }

  @media (max-width: 1024px) {
    margin-top: 20px;
    flex-wrap: wrap;
    justify-content: center;

    li {
      flex: 1 1 calc(50% - 8px);
    }

    a {
      width: 100%;
      justify-content: center;
      box-sizing: border-box;
    }
  }
}

#spacer {
  height: 88px;
  border-top: 1px solid var(--border);
  @media (max-width: 1024px) {
    height: 48px;
  }
}

.ticks {
  position: relative;
  width: 100%;

  &::before,
  &::after {
    content: '';
    position: absolute;
    top: -4.5px;
    border: 5px solid transparent;
  }

  &::before {
    left: 0;
    border-left-color: var(--border);
  }
  &::after {
    right: 0;
    border-right-color: var(--border);
  }
}
```

---

## FILE: `src/index.css`

```css
@import "tailwindcss";

@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap');

@theme {
  --color-midnightBase: #12131a;
  --color-midnightSurface: #1a1b2e;
  --color-midnightElevated: #222338;
  --color-natureNode: #22d3ee;
  --color-cityNode: #a78bfa;
  --color-heritageNode: #fbbf24;
  --color-textPrimary: #e8e8f0;
  --color-textSecondary: #8888a8;
  --color-textMuted: #55556a;
  --font-sans: 'Inter', system-ui, -apple-system, sans-serif;
}

/* ─── Base ──────────────────────────── */
:root {
  --midnight-base: #12131a;
  --midnight-surface: #1a1b2e;
  --midnight-elevated: #222338;
  --nature: #22d3ee;
  --city: #a78bfa;
  --heritage: #fbbf24;
}

body {
  margin: 0;
  padding: 0;
  background-color: var(--midnight-base);
  color: #e8e8f0;
  font-family: 'Inter', system-ui, -apple-system, sans-serif;
  overflow: hidden;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

* {
  box-sizing: border-box;
}

/* ─── Midnight Frosted Glass ──────────────── */
.glass-panel {
  background: rgba(26, 27, 46, 0.6);
  backdrop-filter: blur(20px) saturate(1.4);
  -webkit-backdrop-filter: blur(20px) saturate(1.4);
  border: 1px solid rgba(255, 255, 255, 0.06);
  box-shadow:
    0 8px 32px rgba(0, 0, 0, 0.35),
    0 1px 0 rgba(255, 255, 255, 0.04) inset;
}

.glass-button {
  background: rgba(255, 255, 255, 0.04);
  backdrop-filter: blur(12px) saturate(1.3);
  -webkit-backdrop-filter: blur(12px) saturate(1.3);
  border: 1px solid rgba(255, 255, 255, 0.07);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
}

.glass-button:hover {
  background: rgba(255, 255, 255, 0.1);
  border-color: rgba(255, 255, 255, 0.14);
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.3);
  transform: translateY(-1px);
}

/* ─── Force-Graph Canvas Fix ────────────────── */
.force-graph-container canvas {
  display: block !important;
}

/* ─── Scrollbar ─────────────────────────────── */
::-webkit-scrollbar {
  width: 6px;
}
::-webkit-scrollbar-track {
  background: transparent;
}
::-webkit-scrollbar-thumb {
  background: rgba(255, 255, 255, 0.08);
  border-radius: 3px;
}
::-webkit-scrollbar-thumb:hover {
  background: rgba(255, 255, 255, 0.14);
}
```

---

## FILE: `src/components/LandingPage.jsx`

```jsx
import React, { useMemo } from 'react';
import { motion } from 'framer-motion';
import { Compass, Globe, Sparkles, ArrowRight } from 'lucide-react';

/* ─── Subtle ambient gradient mesh behind the landing card ─── */
function AmbientMesh() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Deep indigo wash — upper left */}
      <motion.div
        className="absolute rounded-full"
        style={{
          width: '50vw', height: '50vw', maxWidth: 700, maxHeight: 700,
          top: '-12%', left: '-8%',
          background: 'radial-gradient(circle, rgba(99, 70, 190, 0.12), transparent 70%)',
          filter: 'blur(100px)',
        }}
        animate={{ x: [0, 40, 0], y: [0, 25, 0] }}
        transition={{ duration: 22, repeat: Infinity, ease: 'easeInOut' }}
      />
      {/* Deep teal wash — right */}
      <motion.div
        className="absolute rounded-full"
        style={{
          width: '40vw', height: '40vw', maxWidth: 550, maxHeight: 550,
          top: '15%', right: '-5%',
          background: 'radial-gradient(circle, rgba(34, 211, 238, 0.08), transparent 70%)',
          filter: 'blur(110px)',
        }}
        animate={{ x: [0, -30, 0], y: [0, 35, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
      />
      {/* Warm amber hint — bottom */}
      <motion.div
        className="absolute rounded-full"
        style={{
          width: '45vw', height: '45vw', maxWidth: 600, maxHeight: 600,
          bottom: '-15%', left: '30%',
          background: 'radial-gradient(circle, rgba(251, 191, 36, 0.05), transparent 70%)',
          filter: 'blur(120px)',
        }}
        animate={{ x: [0, 25, 0], y: [0, -15, 0] }}
        transition={{ duration: 25, repeat: Infinity, ease: 'easeInOut' }}
      />
    </div>
  );
}

/* ─── Floating subtle particles ─── */
function FloatingMotes() {
  const motes = useMemo(() => {
    return Array.from({ length: 35 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 2.5 + 1,
      duration: Math.random() * 30 + 15,
      delay: Math.random() * 10,
      opacity: Math.random() * 0.2 + 0.05,
      color: ['#22d3ee', '#a78bfa', '#fbbf24', '#6366f1'][Math.floor(Math.random() * 4)],
    }));
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {motes.map((m) => (
        <motion.div
          key={m.id}
          className="absolute rounded-full"
          style={{
            left: `${m.x}%`,
            top: `${m.y}%`,
            width: m.size,
            height: m.size,
            backgroundColor: m.color,
            opacity: m.opacity,
            boxShadow: `0 0 ${m.size * 4}px ${m.color}40`,
          }}
          animate={{
            y: [-12, 12, -12],
            x: [-6, 6, -6],
          }}
          transition={{
            duration: m.duration,
            repeat: Infinity,
            delay: m.delay,
            ease: 'easeInOut',
          }}
        />
      ))}
    </div>
  );
}

export default function LandingPage({ setView }) {
  return (
    <motion.div
      className="absolute inset-0 w-full h-full"
      style={{ backgroundColor: '#12131a' }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.05 }}
      transition={{ duration: 0.8 }}
    >
      <AmbientMesh />
      <FloatingMotes />

      {/* Hero UI */}
      <div className="h-full w-full flex flex-col items-center justify-center p-6 relative">
        {/* Stats Row */}
        <motion.div
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="flex gap-8 mb-10"
        >
          {[
            { icon: Globe, label: '13 Destinations', color: '#22d3ee' },
            { icon: Compass, label: '3 Categories', color: '#a78bfa' },
            { icon: Sparkles, label: 'Interactive 3D', color: '#fbbf24' },
          ].map(({ icon: Icon, label, color }) => (
            <div key={label} className="flex items-center gap-2 text-sm">
              <Icon size={16} style={{ color }} />
              <span style={{ color: '#8888a8' }}>{label}</span>
            </div>
          ))}
        </motion.div>

        {/* Main Card */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8, ease: 'easeOut' }}
          className="glass-panel p-10 md:p-14 rounded-3xl text-center max-w-2xl w-full relative overflow-hidden"
        >
          {/* Inner gradient sheen */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: 'linear-gradient(135deg, rgba(99,70,190,0.06), transparent 50%, rgba(34,211,238,0.04))',
            }}
          />

          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.5, type: 'spring', stiffness: 200 }}
            className="w-16 h-16 mx-auto mb-6 rounded-2xl flex items-center justify-center"
            style={{
              background: 'linear-gradient(135deg, rgba(34,211,238,0.12), rgba(167,139,250,0.12))',
              border: '1px solid rgba(34,211,238,0.15)',
            }}
          >
            <Globe size={32} style={{ color: '#22d3ee' }} />
          </motion.div>

          <h1
            className="text-4xl md:text-6xl font-bold mb-4"
            style={{
              background: 'linear-gradient(135deg, #22d3ee, #a78bfa)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            Explore Pakistan in 3D
          </h1>
          <p className="text-lg md:text-xl mb-8" style={{ color: '#8888a8' }}>
            Navigate through an immersive galaxy of destinations.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              onClick={() => setView('graph')}
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="px-8 py-4 rounded-full font-semibold text-lg text-white flex items-center justify-center gap-2 group"
              style={{
                background: 'linear-gradient(135deg, #22d3ee, #a78bfa)',
                boxShadow: '0 4px 25px rgba(34, 211, 238, 0.2), 0 8px 40px rgba(167, 139, 250, 0.15)',
                border: 'none',
                cursor: 'pointer',
              }}
            >
              <span>Explore Now</span>
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </motion.button>
          </div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="mt-8 text-sm tracking-widest uppercase"
          style={{ color: '#55556a' }}
        >
          Click and drag to explore • Scroll to zoom
        </motion.p>
      </div>
    </motion.div>
  );
}
```

---

## FILE: `src/components/GraphView.jsx`

```jsx
import React, { useRef, useState, useMemo, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ForceGraph3D from 'react-force-graph-3d';
import * as THREE from 'three';
import { ArrowLeft } from 'lucide-react';
import { destinations } from '../data/destinations';
import FilterBar from './FilterBar';
import FloatingCards from './FloatingCards';

/* ─── Midnight ambient mesh behind the graph ─── */
function MidnightBackground() {
  return (
    <div className="absolute inset-0 pointer-events-none" style={{ zIndex: 0 }}>
      {/* Cinematic Base Layer */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: 'url(/bg-tourism.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.4,
        }}
      />

      {/* Topographic Glow Overlay */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: 'url(/topo-overlay.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.2,
          mixBlendMode: 'screen',
        }}
      />

      {/* Vignette & Tint Overlay to ensure 3D clarity */}
      <div
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(circle at center, transparent 20%, #12131a 100%), #12131a',
          mixBlendMode: 'multiply',
          opacity: 0.7
        }}
      />

      {/* Indigo wash */}
      <motion.div
        className="absolute rounded-full"
        style={{
          width: '45vw', height: '45vw', maxWidth: 550, maxHeight: 550,
          top: '-8%', left: '5%',
          background: 'radial-gradient(circle, rgba(99,70,190,0.1), transparent 70%)',
          filter: 'blur(100px)',
        }}
        animate={{ x: [0, 30, 0], y: [0, 20, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
      />
      {/* Teal wash */}
      <motion.div
        className="absolute rounded-full"
        style={{
          width: '35vw', height: '35vw', maxWidth: 450, maxHeight: 450,
          top: '10%', right: '0%',
          background: 'radial-gradient(circle, rgba(34,211,238,0.06), transparent 70%)',
          filter: 'blur(110px)',
        }}
        animate={{ x: [0, -25, 0], y: [0, 25, 0] }}
        transition={{ duration: 16, repeat: Infinity, ease: 'easeInOut' }}
      />
      {/* Amber hint */}
      <motion.div
        className="absolute rounded-full"
        style={{
          width: '40vw', height: '40vw', maxWidth: 500, maxHeight: 500,
          bottom: '-10%', left: '35%',
          background: 'radial-gradient(circle, rgba(251,191,36,0.04), transparent 70%)',
          filter: 'blur(120px)',
        }}
        animate={{ x: [0, 20, 0], y: [0, -15, 0] }}
        transition={{ duration: 24, repeat: Infinity, ease: 'easeInOut' }}
      />
    </div>
  );
}

const ImageCache = new Map();

export default function GraphView({ setView }) {
  const fgRef = useRef();
  const containerRef = useRef();
  const [selectedNode, setSelectedNode] = useState(null);
  const [activeHub, setActiveHub] = useState(null);
  const [hoverNode, setHoverNode] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [activeFilter, setActiveFilter] = useState("All");
  const [dimensions, setDimensions] = useState({ width: window.innerWidth, height: window.innerHeight });

  useEffect(() => {
    const handleResize = () => setDimensions({ width: window.innerWidth, height: window.innerHeight });
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const enrichedDestinations = useMemo(() => {
    return destinations.map(d => {
      const charCode = d.id.charCodeAt(0) + d.id.charCodeAt(d.id.length - 1);
      let hub = 'Nature';
      if (d.category === 'City') hub = charCode % 2 === 0 ? 'City Tours' : 'Budget';
      else if (d.category === 'Nature') hub = charCode % 2 === 0 ? 'Nature' : 'Adventure';
      else if (d.category === 'Heritage') hub = charCode % 2 === 0 ? 'Heritage' : 'Luxury';

      // Add dynamically generated image URL from API
      const imageUrl = `https://loremflickr.com/300/300/pakistan,${encodeURIComponent(d.name.replace(/ /g, ','))}`;

      return { ...d, hub, imageUrl };
    });
  }, []);

  const graphData = useMemo(() => {
    if (!activeHub) {
      const hubs = ['Adventure', 'Luxury', 'Budget', 'Heritage', 'Nature', 'City Tours'];
      const nodes = hubs.map(h => {
        const related = enrichedDestinations.filter(d => d.hub === h);
        return {
          id: `hub_${h}`,
          name: h,
          isHub: true,
          category: h,
          hub: h,
          count: related.length,
          sampleImages: related.slice(0, 4).map(d => d.imageUrl)
        };
      });
      const nodesWithCenter = [...nodes, { id: 'center', isCenter: true, name: '' }];
      const links = nodes.map(n => ({ source: 'center', target: n.id }));
      return { nodes: nodesWithCenter, links };
    } else {
      const related = enrichedDestinations.filter(d => d.hub === activeHub);
      const hubNode = {
        id: `hub_${activeHub}`,
        name: activeHub,
        isHub: true,
        category: activeHub,
        hub: activeHub,
        count: related.length,
        sampleImages: related.slice(0, 4).map(d => d.imageUrl)
      };
      const children = related.map(d => ({ ...d, isChild: true }));
      const nodes = [hubNode, ...children];
      const links = children.map(c => ({ source: hubNode.id, target: c.id }));
      return { nodes, links };
    }
  }, [activeHub, enrichedDestinations]);

  useEffect(() => {
    if (fgRef.current) {
      fgRef.current.cameraPosition({ x: 0, y: 0, z: 350 });

      const scene = fgRef.current.scene();
      // Soft ambient for midnight scene
      const ambient = new THREE.AmbientLight(0x8888cc, 0.6);
      scene.add(ambient);
      // Warm directional to bring out node materials
      const dirLight = new THREE.DirectionalLight(0xffeedd, 0.4);
      dirLight.position.set(150, 200, 150);
      scene.add(dirLight);
    }
  }, []);

  const getCategoryColor = useCallback((category) => {
    switch (category) {
      case 'Nature': return '#22d3ee';
      case 'City Tours': return '#a78bfa';
      case 'Heritage': return '#fbbf24';
      case 'Adventure': return '#ef4444';
      case 'Luxury': return '#fbcfe8';
      case 'Budget': return '#4ade80';
      default: return '#8888a8';
    }
  }, []);

  const isNodeVisible = useCallback((node) => {
    if (node.isCenter) return false;
    if (node.isHub) return true;
    if (activeFilter !== "All" && node.category !== activeFilter && node.hub !== activeFilter) return false;
    if (searchQuery && !node.name.toLowerCase().includes(searchQuery.toLowerCase())) return false;
    return true;
  }, [activeFilter, searchQuery]);

  const handleNodeClick = useCallback((node) => {
    if (node.isCenter) return;
    if (node.isHub) {
      if (activeHub !== node.hub) {
        setActiveHub(node.hub);
        setSelectedNode(null);
      } else {
        setActiveHub(null);
        setSelectedNode(null);
      }
    } else {
      setSelectedNode(node);
    }
    if (fgRef.current) {
      const distance = node.isHub && !activeHub ? 200 : 120;
      const distRatio = 1 + distance / Math.hypot(node.x, node.y, node.z);
      fgRef.current.cameraPosition(
        { x: node.x * distRatio, y: node.y * distRatio, z: node.z * distRatio },
        node, 1500
      );
    }
  }, [activeHub]);

  const drawHexagon = (ctx, x, y, r) => {
    ctx.beginPath();
    for (let i = 0; i < 6; i++) {
      const angle = (Math.PI / 3) * i + Math.PI / 6;
      ctx.lineTo(x + r * Math.cos(angle), y + r * Math.sin(angle));
    }
    ctx.closePath();
  };

  const drawOctagon = (ctx, x, y, r) => {
    ctx.beginPath();
    for (let i = 0; i < 8; i++) {
      const angle = (Math.PI / 4) * i + Math.PI / 8;
      ctx.lineTo(x + r * Math.cos(angle), y + r * Math.sin(angle));
    }
    ctx.closePath();
  };

  const nodeThreeObject = useCallback((node) => {
    if (node.isCenter) return new THREE.Group();

    const visible = isNodeVisible(node);
    const colorHex = getCategoryColor(node.hub || node.category);
    const isHovered = hoverNode && hoverNode.id === node.id;
    const color = new THREE.Color(colorHex);

    const canvas = document.createElement('canvas');
    canvas.width = 512;
    canvas.height = 512;
    const ctx = canvas.getContext('2d');
    const cx = 256;
    const cy = 256;

    if (node.isHub) {
      const octRadius = 180;
      // Glowing shadow border
      ctx.shadowColor = colorHex;
      ctx.shadowBlur = isHovered ? 50 : 25;

      // Octagon background
      ctx.fillStyle = '#1a1b2e';
      drawOctagon(ctx, cx, cy, octRadius);
      ctx.fill();
      ctx.shadowBlur = 0;

      // Draw collage if we have images
      if (node.sampleImages && node.sampleImages.length > 0) {
        ctx.save();
        drawOctagon(ctx, cx, cy, octRadius);
        ctx.clip();

        // 2x2 grid positions
        const cellSize = octRadius;
        const offsets = [
          { x: cx - cellSize, y: cy - cellSize },
          { x: cx, y: cy - cellSize },
          { x: cx - cellSize, y: cy },
          { x: cx, y: cy }
        ];

        node.sampleImages.forEach((url, i) => {
          const imgId = `${node.id}_img_${i}`;
          const imgData = ImageCache.get(imgId);
          if (imgData && imgData !== 'loading' && imgData !== 'error') {
            ctx.drawImage(imgData, offsets[i].x, offsets[i].y, cellSize, cellSize);
          } else if (!imgData) {
            ImageCache.set(imgId, 'loading');
            const img = new Image();
            img.crossOrigin = 'anonymous';
            img.src = url;
            img.onload = () => {
              ImageCache.set(imgId, img);
              if (node.__spriteMat) node.__spriteMat.map.needsUpdate = true;
            };
            img.onerror = () => ImageCache.set(imgId, 'error');
          }
        });

        // Dark overlay for text readability
        ctx.fillStyle = 'rgba(12, 13, 26, 0.45)';
        drawOctagon(ctx, cx, cy, octRadius);
        ctx.fill();
        ctx.restore();
      }

      // Border
      ctx.lineWidth = isHovered ? 15 : 8;
      ctx.strokeStyle = colorHex;
      drawOctagon(ctx, cx, cy, octRadius);
      ctx.stroke();

      // HUB Text
      ctx.font = '800 48px Inter, system-ui, sans-serif';
      ctx.fillStyle = '#ffffff';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.shadowColor = 'rgba(0,0,0,0.8)';
      ctx.shadowBlur = 10;
      ctx.fillText(node.name.toUpperCase(), cx, cy - 15);

      ctx.font = '600 28px Inter, system-ui, sans-serif';
      ctx.fillStyle = colorHex;
      ctx.fillText(`${node.count} DESTINATIONS`, cx, cy + 35);

      const texture = new THREE.CanvasTexture(canvas);
      texture.needsUpdate = true;
      const spriteMaterial = new THREE.SpriteMaterial({ map: texture, transparent: true });
      const sprite = new THREE.Sprite(spriteMaterial);
      const scale = isHovered ? 45 : 40;
      sprite.scale.set(scale, scale, 1);
      node.__spriteMat = spriteMaterial;
      return sprite;
    }

    if (!visible) return new THREE.Group();
    const hexRadius = 140;

    // Glowing shadow border
    ctx.shadowColor = colorHex;
    ctx.shadowBlur = isHovered ? 45 : 20;

    // Hexagon background placeholder
    ctx.fillStyle = '#1a1b2e';
    drawHexagon(ctx, cx, cy, hexRadius);
    ctx.fill();

    ctx.shadowBlur = 0;

    const imgData = ImageCache.get(node.id);
    const hasImageURL = !!node.imageUrl;

    if (!hasImageURL || imgData === 'error') {
      // Draw geometric placeholder
      ctx.save();
      drawHexagon(ctx, cx, cy, hexRadius);
      ctx.clip();

      // Dynamic gradient based on category color
      const gradient = ctx.createLinearGradient(cx - hexRadius, cy - hexRadius, cx + hexRadius, cy + hexRadius);
      gradient.addColorStop(0, colorHex + '40');
      gradient.addColorStop(1, '#12131a');
      ctx.fillStyle = gradient;
      ctx.fill();

      // Draw Initials
      ctx.font = '800 72px Inter, system-ui, sans-serif';
      ctx.fillStyle = 'rgba(255,255,255,0.4)';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      const initials = node.name.split(' ').map(n => n[0]).join('').substring(0, 2).toUpperCase();
      ctx.fillText(initials, cx, cy);

      ctx.restore();
    } else if (!imgData) {
      ImageCache.set(node.id, 'loading');
      const img = new Image();
      img.crossOrigin = 'anonymous';
      img.src = node.imageUrl;
      img.onload = () => {
        ImageCache.set(node.id, img);
        if (node.__spriteMat && node.__spriteCanvas) {
          const tCtx = node.__spriteCanvas.getContext('2d');
          tCtx.save();
          drawHexagon(tCtx, cx, cy, hexRadius);
          tCtx.clip();
          tCtx.drawImage(img, cx - hexRadius, cy - hexRadius, hexRadius * 2, hexRadius * 2);
          tCtx.restore();
          tCtx.lineWidth = isHovered ? 12 : 6;
          tCtx.strokeStyle = colorHex;
          drawHexagon(tCtx, cx, cy, hexRadius);
          tCtx.stroke();
          node.__spriteMat.map.needsUpdate = true;
        }
      };
      // Error handling for broken image URLs fallback
      img.onerror = () => {
        ImageCache.set(node.id, 'error');
      };
    } else if (imgData && imgData !== 'loading' && imgData !== 'error') {
      ctx.save();
      drawHexagon(ctx, cx, cy, hexRadius);
      ctx.clip();
      ctx.drawImage(imgData, cx - hexRadius, cy - hexRadius, hexRadius * 2, hexRadius * 2);
      ctx.restore();
    }

    ctx.lineWidth = isHovered ? 12 : 6;
    ctx.strokeStyle = colorHex;
    drawHexagon(ctx, cx, cy, hexRadius);
    ctx.stroke();

    if (isHovered) {
      ctx.font = '800 36px Inter, system-ui, sans-serif';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'top';
      const textY = cy + hexRadius + 15;

      const textW = ctx.measureText(node.name).width + 50;
      ctx.fillStyle = 'rgba(18, 19, 26, 0.9)';
      ctx.beginPath();
      ctx.roundRect(cx - textW / 2, textY, textW, 55, 27);
      ctx.fill();

      ctx.strokeStyle = colorHex;
      ctx.lineWidth = 2;
      ctx.stroke();

      ctx.fillStyle = '#ffffff';
      ctx.fillText(node.name, cx, textY + 10);
    }

    const texture = new THREE.CanvasTexture(canvas);
    texture.needsUpdate = true;

    // THREE.Sprite natively perfectly billboards (faces camera)
    const spriteMaterial = new THREE.SpriteMaterial({ map: texture, transparent: true });
    const sprite = new THREE.Sprite(spriteMaterial);

    const scaleFactor = isHovered ? 28 : 24;
    sprite.scale.set(scaleFactor, scaleFactor, 1);

    node.__spriteMat = spriteMaterial;
    node.__spriteCanvas = canvas;

    return sprite;
  }, [isNodeVisible, getCategoryColor, hoverNode]);

  const linkColor = useCallback((link) => {
    return 'rgba(255,255,255,0.06)';
  }, []);

  return (
    <motion.div
      className="absolute inset-0 w-full h-full"
      style={{ backgroundColor: '#12131a' }}
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
    >
      <MidnightBackground />

      {/* Back & Hub State */}
      <div className="absolute top-4 left-4 z-20 flex gap-4 items-center">
        <motion.button
          onClick={() => {
            if (activeHub) {
              setActiveHub(null);
              setSelectedNode(null);
            } else setView('landing');
          }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="glass-button p-3 rounded-full flex items-center justify-center"
          style={{ color: '#e8e8f0', width: 48, height: 48 }}
        >
          <ArrowLeft size={24} />
        </motion.button>

        <AnimatePresence>
          {activeHub && (
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="glass-panel px-6 py-2 rounded-full font-bold text-lg"
              style={{ color: getCategoryColor(activeHub) }}
            >
              {activeHub}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <AnimatePresence>
        {activeHub && (
          <FilterBar
            activeFilter={activeFilter} setActiveFilter={setActiveFilter}
            searchQuery={searchQuery} setSearchQuery={setSearchQuery}
          />
        )}
      </AnimatePresence>

      {/* Counter */}
      <AnimatePresence>
        {activeHub && (
          <motion.div
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 20 }}
            className="absolute bottom-6 left-6 z-20 glass-panel px-5 py-3 rounded-2xl text-sm"
          >
            <span style={{ color: '#8888a8' }}>Showing </span>
            <span style={{ color: getCategoryColor(activeHub), fontWeight: 700 }}>
              {graphData.nodes.filter(d => d.isChild && isNodeVisible(d)).length}
            </span>
            <span style={{ color: '#8888a8' }}> in {activeHub}</span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Legend */}
      <AnimatePresence>
        {!activeHub && (
          <motion.div
            initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 20 }}
            transition={{ delay: 1.2, duration: 0.5 }}
            className="absolute bottom-6 right-6 z-20 glass-panel px-5 py-3 rounded-2xl flex flex-col gap-3 text-xs"
          >
            <p className="text-gray-400 font-semibold mb-1">Explore Hubs:</p>
            <div className="grid grid-cols-2 gap-x-6 gap-y-3">
              {[
                { label: 'Nature', color: '#22d3ee' },
                { label: 'City Tours', color: '#a78bfa' },
                { label: 'Heritage', color: '#fbbf24' },
                { label: 'Adventure', color: '#ef4444' },
                { label: 'Luxury', color: '#fbcfe8' },
                { label: 'Budget', color: '#4ade80' },
              ].map(({ label, color }) => (
                <div key={label} className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: color, boxShadow: `0 0 8px ${color}50` }} />
                  <span style={{ color: '#8888a8' }}>{label}</span>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 3D Force Graph — transparent so midnight mesh shows through */}
      <div ref={containerRef} className="w-full h-full relative" style={{ zIndex: 1 }}>
        <ForceGraph3D
          ref={fgRef} graphData={graphData}
          nodeThreeObject={nodeThreeObject} nodeThreeObjectExtend={false}
          onNodeClick={handleNodeClick}
          onNodeHover={node => { setHoverNode(node); if (containerRef.current) containerRef.current.style.cursor = node ? 'pointer' : 'grab'; }}
          backgroundColor="rgba(0,0,0,0)"
          width={dimensions.width} height={dimensions.height}
          linkWidth={1.5} linkColor={linkColor} linkOpacity={0.5} linkResolution={6}
          enableNodeDrag={false}
          warmupTicks={50} cooldownTicks={100}
          d3AlphaDecay={0.02} d3VelocityDecay={0.3}
        />
      </div>

      <AnimatePresence>
        {selectedNode && !selectedNode.isHub && !selectedNode.isCenter && (
          <FloatingCards
            node={selectedNode}
            fgRef={fgRef}
            onClose={() => setSelectedNode(null)}
            getCategoryColor={getCategoryColor}
          />
        )}
      </AnimatePresence>
    </motion.div>
  );
}
```

---

## FILE: `src/components/FilterBar.jsx`

```jsx
import React from 'react';
import { Search, X } from 'lucide-react';
import { motion } from 'framer-motion';

export default function FilterBar({ activeFilter, setActiveFilter, searchQuery, setSearchQuery }) {
  const filters = [
    { name: 'All', color: '#e8e8f0' },
    { name: 'Nature', color: '#22d3ee' },
    { name: 'City', color: '#a78bfa' },
    { name: 'Heritage', color: '#fbbf24' },
  ];

  return (
    <motion.div
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.3, duration: 0.6, ease: 'easeOut' }}
      className="absolute top-4 left-1/2 z-20 w-[92%] max-w-3xl glass-panel px-5 py-3 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-3"
      style={{ transform: 'translateX(-50%)' }}
    >
      {/* Search */}
      <div className="relative w-full md:w-72">
        <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none" style={{ color: '#55556a' }}>
          <Search size={16} />
        </div>
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search destinations..."
          className="w-full py-2.5 pl-10 pr-10 text-sm rounded-xl border transition-all duration-300 focus:outline-none"
          style={{
            backgroundColor: 'rgba(255,255,255,0.03)',
            borderColor: searchQuery ? 'rgba(34, 211, 238, 0.35)' : 'rgba(255,255,255,0.06)',
            boxShadow: searchQuery ? '0 0 15px rgba(34, 211, 238, 0.08)' : 'none',
            color: '#e8e8f0',
          }}
        />
        {searchQuery && (
          <button
            onClick={() => setSearchQuery("")}
            className="absolute inset-y-0 right-3 flex items-center transition-colors"
            style={{ color: '#55556a' }}
          >
            <X size={14} />
          </button>
        )}
      </div>

      {/* Filters */}
      <div className="flex items-center gap-2">
        {filters.map(({ name, color }) => {
          const isActive = activeFilter === name;
          return (
            <motion.button
              key={name}
              onClick={() => setActiveFilter(name)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300"
              style={{
                backgroundColor: isActive ? `${color}15` : 'rgba(255,255,255,0.02)',
                border: `1px solid ${isActive ? `${color}35` : 'rgba(255,255,255,0.05)'}`,
                color: isActive ? color : '#55556a',
                boxShadow: isActive ? `0 0 12px ${color}10` : 'none',
                cursor: 'pointer',
              }}
            >
              <span className="flex items-center gap-1.5">
                {name !== 'All' && (
                  <span
                    className="w-2 h-2 rounded-full inline-block"
                    style={{
                      backgroundColor: color,
                      opacity: isActive ? 1 : 0.3,
                      boxShadow: isActive ? `0 0 6px ${color}60` : 'none',
                    }}
                  />
                )}
                {name}
              </span>
            </motion.button>
          );
        })}
      </div>
    </motion.div>
  );
}
```

---

## FILE: `src/components/FloatingCards.jsx`

```jsx
import React, { useState, useMemo, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, Clock, Users, X } from 'lucide-react';
import { packages } from '../data/packages';
import PackageDetail from './PackageDetail';

/* ─── Compute card positions in a fan/arc around the node ─── */
function getCardPositions(centerX, centerY, count, vw, vh) {
  const positions = [];
  const radius = Math.min(vw, vh) * 0.28;  // responsive radius
  // Arrange in a semicircle below the node
  const startAngle = Math.PI * 0.15;   // slightly off from left
  const endAngle = Math.PI * 0.85;     // slightly off from right
  const angleStep = count > 1 ? (endAngle - startAngle) / (count - 1) : 0;

  for (let i = 0; i < count; i++) {
    const angle = count === 1 ? Math.PI * 0.5 : startAngle + angleStep * i;
    let x = centerX + Math.cos(angle) * radius - 90; // offset half card width
    let y = centerY + Math.sin(angle) * radius * 0.7 + 30; // slightly flatter arc, below node

    // Clamp to viewport
    x = Math.max(16, Math.min(x, vw - 200));
    y = Math.max(80, Math.min(y, vh - 220));

    positions.push({ x, y, rotation: (angle - Math.PI / 2) * 4 }); // subtle tilt
  }
  return positions;
}

export default function FloatingCards({ node, fgRef, onClose, getCategoryColor }) {
  const [expandedPkg, setExpandedPkg] = useState(null);
  const [nodeScreenPos, setNodeScreenPos] = useState({ x: 0, y: 0 });
  const animFrameRef = useRef();

  // Get packages for this destination
  const destinationPackages = useMemo(() => {
    return packages[node.id] || [];
  }, [node.id]);

  // Project 3D node position → 2D screen coordinates
  useEffect(() => {
    function updatePos() {
      if (fgRef.current && node) {
        const coords = fgRef.current.graph2ScreenCoords(node.x, node.y, node.z);
        if (coords) {
          setNodeScreenPos({ x: coords.x, y: coords.y });
        }
      }
      animFrameRef.current = requestAnimationFrame(updatePos);
    }
    updatePos();
    return () => {
      if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
    };
  }, [node, fgRef]);

  const cardPositions = useMemo(() => {
    return getCardPositions(
      nodeScreenPos.x,
      nodeScreenPos.y,
      destinationPackages.length,
      window.innerWidth,
      window.innerHeight
    );
  }, [nodeScreenPos.x, nodeScreenPos.y, destinationPackages.length]);

  const accentColor = getCategoryColor(node.category);

  return (
    <>
      {/* Backdrop */}
      <motion.div
        className="absolute inset-0 z-30"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        style={{ background: 'rgba(12, 13, 20, 0.35)', backdropFilter: 'blur(2px)' }}
      />

      {/* Destination name badge floating near the node */}
      <motion.div
        className="absolute z-40 pointer-events-none"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0 }}
        transition={{ delay: 0.1 }}
        style={{
          left: nodeScreenPos.x - 80,
          top: nodeScreenPos.y - 55,
        }}
      >
        <div
          className="px-4 py-2 rounded-xl text-sm font-semibold text-center"
          style={{
            background: 'rgba(26, 27, 46, 0.85)',
            backdropFilter: 'blur(12px)',
            border: `1px solid ${accentColor}35`,
            color: '#e8e8f0',
            boxShadow: `0 4px 20px rgba(0,0,0,0.3), 0 0 15px ${accentColor}15`,
            minWidth: 160,
          }}
        >
          <span style={{ color: accentColor, marginRight: 6 }}>●</span>
          {node.name}
          <div className="text-xs mt-1" style={{ color: '#8888a8' }}>
            {destinationPackages.length} packages available
          </div>
        </div>
      </motion.div>

      {/* Close button */}
      <motion.button
        className="absolute top-4 right-4 z-50 glass-button p-3 rounded-full"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0 }}
        transition={{ delay: 0.2 }}
        onClick={onClose}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        style={{ color: '#e8e8f0' }}
      >
        <X size={20} />
      </motion.button>

      {/* Floating Cards */}
      <AnimatePresence>
        {!expandedPkg && destinationPackages.map((pkg, i) => {
          const pos = cardPositions[i];
          if (!pos) return null;

          return (
            <motion.div
              key={pkg.id}
              className="absolute z-40 cursor-pointer"
              style={{ left: pos.x, top: pos.y }}
              initial={{ y: window.innerHeight, opacity: 0, rotate: 8 }}
              animate={{
                y: 0,
                opacity: 1,
                rotate: pos.rotation,
                transition: {
                  type: 'spring',
                  damping: 18,
                  stiffness: 120,
                  delay: 0.08 * i,
                },
              }}
              exit={{
                y: 60,
                opacity: 0,
                scale: 0.9,
                transition: { duration: 0.25, delay: 0.03 * i },
              }}
              whileHover={{
                scale: 1.06,
                rotate: 0,
                y: -5,
                boxShadow: `0 12px 40px rgba(0,0,0,0.4), 0 0 20px ${accentColor}15`,
                transition: { duration: 0.2 },
              }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setExpandedPkg(pkg)}
            >
              <div
                className="w-[185px] rounded-2xl p-4 select-none"
                style={{
                  background: 'rgba(26, 27, 46, 0.7)',
                  backdropFilter: 'blur(20px) saturate(1.4)',
                  WebkitBackdropFilter: 'blur(20px) saturate(1.4)',
                  border: '1px solid rgba(255,255,255,0.07)',
                  boxShadow: `0 8px 32px rgba(0,0,0,0.35), inset 0 1px 0 rgba(255,255,255,0.04)`,
                }}
              >
                {/* Agent */}
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-lg">{pkg.agentLogo}</span>
                  <span className="text-xs font-medium truncate" style={{ color: '#8888a8' }}>
                    {pkg.agentName}
                  </span>
                </div>

                {/* Package Name */}
                <h4 className="text-sm font-bold mb-2 leading-tight" style={{ color: '#e8e8f0' }}>
                  {pkg.packageName}
                </h4>

                {/* Divider */}
                <div className="h-px mb-3" style={{ background: 'rgba(255,255,255,0.06)' }} />

                {/* Price */}
                <div className="text-base font-bold mb-1.5" style={{ color: accentColor }}>
                  {pkg.price}
                </div>

                {/* Duration & Rating */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1" style={{ color: '#55556a' }}>
                    <Clock size={11} />
                    <span className="text-xs">{pkg.duration.split('/')[0].trim()}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Star size={11} fill="#fbbf24" stroke="#fbbf24" />
                    <span className="text-xs font-medium" style={{ color: '#fbbf24' }}>{pkg.rating}</span>
                  </div>
                </div>

                {/* Group Size */}
                <div className="flex items-center gap-1 mt-1.5" style={{ color: '#55556a' }}>
                  <Users size={11} />
                  <span className="text-xs">{pkg.groupSize}</span>
                </div>
              </div>
            </motion.div>
          );
        })}
      </AnimatePresence>

      {/* Expanded Package Detail */}
      <AnimatePresence>
        {expandedPkg && (
          <PackageDetail
            pkg={expandedPkg}
            destinationName={node.name}
            destinationCategory={node.category}
            getCategoryColor={getCategoryColor}
            onBack={() => setExpandedPkg(null)}
            onClose={onClose}
          />
        )}
      </AnimatePresence>
    </>
  );
}
```

---

## FILE: `src/components/PackageDetail.jsx`

```jsx
import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { X, Star, MapPin, Navigation, Mountain, Building2, Landmark, Clock, Users, Gauge, Check } from 'lucide-react';

const categoryIcon = {
  Nature: Mountain,
  City: Building2,
  Heritage: Landmark,
};

const difficultyColor = {
  Easy: '#22d3ee',
  Moderate: '#fbbf24',
  Challenging: '#ef4444',
};

export default function PackageDetail({ pkg, destinationName, destinationCategory, getCategoryColor, onBack, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  const accentColor = getCategoryColor(destinationCategory);
  const CategoryIcon = categoryIcon[destinationCategory] || Landmark;

  return (
    <motion.div
      className="absolute inset-0 z-50 flex items-center justify-center p-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
      style={{ background: 'rgba(12, 13, 20, 0.6)', backdropFilter: 'blur(6px)' }}
    >
      <motion.div
        initial={{ y: 60, opacity: 0, scale: 0.92 }}
        animate={{ y: 0, opacity: 1, scale: 1 }}
        exit={{ y: 40, opacity: 0, scale: 0.95 }}
        transition={{ type: 'spring', damping: 22, stiffness: 180 }}
        className="w-full max-w-lg max-h-[85vh] overflow-y-auto rounded-3xl p-7 relative"
        style={{
          background: 'rgba(26, 27, 46, 0.8)',
          backdropFilter: 'blur(28px) saturate(1.5)',
          WebkitBackdropFilter: 'blur(28px) saturate(1.5)',
          border: '1px solid rgba(255,255,255,0.07)',
          boxShadow: `0 20px 60px rgba(0,0,0,0.5), 0 0 40px ${accentColor}08, inset 0 1px 0 rgba(255,255,255,0.04)`,
        }}
      >
        {/* Top Bar */}
        <div className="flex items-center justify-between mb-6">
          <motion.button
            onClick={onBack}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="glass-button px-4 py-2 rounded-xl text-sm flex items-center gap-2"
            style={{ color: '#e8e8f0' }}
          >
            ← Back to packages
          </motion.button>
          <motion.button
            onClick={onClose}
            whileHover={{ scale: 1.1, rotate: 90 }}
            whileTap={{ scale: 0.9 }}
            className="p-2 rounded-full glass-button"
            style={{ color: '#8888a8' }}
          >
            <X size={18} />
          </motion.button>
        </div>

        {/* Hero Image */}
        <div className="w-full h-44 mb-5 rounded-2xl overflow-hidden relative" style={{ backgroundColor: 'rgba(255,255,255,0.05)' }}>
           <img 
              src={`https://loremflickr.com/600/300/pakistan,${encodeURIComponent(destinationName.replace(/ /g, ','))}`}
              alt={destinationName}
              className="w-full h-full object-cover"
           />
           {/* Subtle gradient overlay to blend */}
           <div className="absolute inset-0 bg-gradient-to-t from-[rgba(26,27,46,0.8)] to-transparent opacity-80 mix-blend-multiply"></div>
        </div>

        {/* Agent & Destination */}
        <div className="flex items-center gap-3 mb-2">
          <span className="text-2xl">{pkg.agentLogo}</span>
          <span className="text-sm font-medium" style={{ color: '#8888a8' }}>{pkg.agentName}</span>
        </div>
        <div className="flex items-center gap-2 mb-1">
          <span
            className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-semibold"
            style={{
              backgroundColor: `${accentColor}15`,
              border: `1px solid ${accentColor}30`,
              color: accentColor,
            }}
          >
            <CategoryIcon size={10} />
            {destinationCategory}
          </span>
          <span className="text-xs" style={{ color: '#55556a' }}>→</span>
          <span className="text-xs font-medium" style={{ color: '#8888a8' }}>{destinationName}</span>
        </div>

        <h2 className="text-2xl font-bold mt-3 mb-1" style={{ color: '#e8e8f0' }}>
          {pkg.packageName}
        </h2>

        {/* Price + Rating */}
        <div className="flex items-center gap-4 mt-3 mb-6">
          <span className="text-xl font-bold" style={{ color: accentColor }}>{pkg.price}</span>
          <div className="flex items-center gap-1.5">
            <Star size={14} fill="#fbbf24" stroke="#fbbf24" />
            <span className="font-semibold text-sm" style={{ color: '#fbbf24' }}>{pkg.rating}</span>
          </div>
        </div>

        {/* Info Row */}
        <div className="grid grid-cols-3 gap-3 mb-6">
          {[
            { icon: Clock, label: pkg.duration, title: 'Duration' },
            { icon: Users, label: pkg.groupSize, title: 'Group' },
            { icon: Gauge, label: pkg.difficulty, title: 'Level', color: difficultyColor[pkg.difficulty] },
          ].map(({ icon: Icon, label, title, color }) => (
            <div
              key={title}
              className="rounded-xl p-3 text-center"
              style={{
                backgroundColor: 'rgba(255,255,255,0.03)',
                border: '1px solid rgba(255,255,255,0.05)',
              }}
            >
              <Icon size={16} style={{ color: color || '#8888a8', margin: '0 auto 6px' }} />
              <div className="text-xs font-medium" style={{ color: color || '#e8e8f0' }}>{label}</div>
              <div className="text-xs mt-1" style={{ color: '#55556a' }}>{title}</div>
            </div>
          ))}
        </div>

        {/* Highlights */}
        <div className="mb-6">
          <h3 className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: '#55556a' }}>
            Highlights
          </h3>
          <div className="space-y-2.5">
            {pkg.highlights.map((h, i) => (
              <motion.div
                key={i}
                initial={{ x: -10, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.1 + i * 0.06 }}
                className="flex items-start gap-2.5"
              >
                <div
                  className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                  style={{ backgroundColor: `${accentColor}15`, border: `1px solid ${accentColor}25` }}
                >
                  <Check size={10} style={{ color: accentColor }} />
                </div>
                <span className="text-sm leading-relaxed" style={{ color: '#aaaabc' }}>{h}</span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Includes */}
        <div className="mb-8">
          <h3 className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: '#55556a' }}>
            What's Included
          </h3>
          <div className="flex flex-wrap gap-2">
            {pkg.includes.map((item, i) => (
              <motion.span
                key={i}
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.2 + i * 0.04 }}
                className="text-xs px-3 py-1.5 rounded-full"
                style={{
                  backgroundColor: 'rgba(255,255,255,0.04)',
                  border: '1px solid rgba(255,255,255,0.07)',
                  color: '#8888a8',
                }}
              >
                {item}
              </motion.span>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="flex gap-3">
          <button
            className="glass-button flex-1 py-3 rounded-xl flex items-center justify-center gap-2"
            style={{ color: '#e8e8f0' }}
          >
            <MapPin size={18} />
            <span>View Itinerary</span>
          </button>

          <motion.button
            whileHover={{ scale: 1.02, y: -1 }}
            whileTap={{ scale: 0.98 }}
            className="flex-1 py-3 rounded-xl flex items-center justify-center gap-2 font-bold text-white"
            style={{
              background: `linear-gradient(135deg, ${accentColor}, ${accentColor}cc)`,
              boxShadow: `0 4px 20px ${accentColor}30, 0 0 40px ${accentColor}10`,
              border: 'none',
              cursor: 'pointer',
            }}
          >
            <Navigation size={18} />
            <span>Book Now</span>
          </motion.button>
        </div>
      </motion.div>
    </motion.div>
  );
}
```

---

## FILE: `src/data/destinations.js`

```js
export const destinations = [
  {
    id: "lahore",
    name: "Lahore",
    category: "City",
    description: "The cultural heart of Pakistan, known for its rich Mughal heritage, bustling streets, and world-renowned food scene.",
    rating: 4.8,
    links: ["islamabad","multan","karachi","khairpur","siri_paye","rakaposhi_basecamp","bolan_pass","cholistan_desert","shrine_of_lal_shahbaz_qalandar","rajanpur"]
  },
  {
    id: "hunza",
    name: "Hunza Valley",
    category: "Nature",
    description: "A spectacular mountainous valley in Gilgit-Baltistan featuring the towering Rakaposhi and ancient Baltit Fort.",
    rating: 4.9,
    links: ["skardu","naran","naran_kaghan","shogran","makli_necropolis","jamrud_fort"]
  },
  {
    id: "swat",
    name: "Swat Valley",
    category: "Nature",
    description: "Often called the Switzerland of the East, Swat is famous for its lush green alpine meadows, clear rivers, and snow-capped peaks.",
    rating: 4.7,
    links: ["islamabad","peshawar","naran_kaghan","khuzdar","deosai_plains","phander_valley"]
  },
  {
    id: "islamabad",
    name: "Islamabad",
    category: "City",
    description: "The serene capital city, nestled against the Margalla Hills, noted for its high standards of living, safety, and abundant greenery.",
    rating: 4.6,
    links: ["lahore","swat","murree","peshawar","shigar","ganesh_settlement","shekhupura"]
  },
  {
    id: "karachi",
    name: "Karachi",
    category: "City",
    description: "Pakistan's largest metropolis and financial hub, offering beautiful beaches along the Arabian Sea and diverse cuisine.",
    rating: 4.5,
    links: ["mohenjo_daro","quetta","lahore","multan","abbottabad","chagai"]
  },
  {
    id: "murree",
    name: "Murree",
    category: "Nature",
    description: "A popular mountain resort town located in the Galyat region, featuring colonial-era architecture and scenic viewpoints.",
    rating: 4.3,
    links: ["islamabad","naran_kaghan"]
  },
  {
    id: "skardu",
    name: "Skardu",
    category: "Nature",
    description: "A major tourism and trekking hub leading to some of the highest mountains in the world, including K2 and the Karakoram range.",
    rating: 4.8,
    links: ["hunza","fairy_meadows","mianwali","astore","uch_sharif","shalimar_gardens"]
  },
  {
    id: "naran_kaghan",
    name: "Naran & Kaghan",
    category: "Nature",
    description: "Twin valleys renowned for their alpine climate, the legendary Lake Saif-ul-Malook, and breathtaking scenery.",
    rating: 4.7,
    links: ["swat","hunza","murree","mardan","mastung","siri_paye","thar_desert","dadu"]
  },
  {
    id: "fairy_meadows",
    name: "Fairy Meadows",
    category: "Nature",
    description: "A lush green plateau near the base of Nanga Parbat, offering some of the most striking views of the 'Killer Mountain'.",
    rating: 4.9,
    links: ["skardu","hunza","khunjerab_pass","thandiani","ziarat","bhanbhore","pishin","kalat"]
  },
  {
    id: "mohenjo_daro",
    name: "Mohenjo-daro",
    category: "Heritage",
    description: "An archaeological site in Sindh containing the fascinating ruins of one of the largest settlements of the ancient Indus Valley Civilization.",
    rating: 4.7,
    links: ["karachi","multan"]
  },
  {
    id: "peshawar",
    name: "Peshawar",
    category: "Heritage",
    description: "One of the oldest continuously inhabited cities in South Asia, rich in history, and the gateway to the Khyber Pass.",
    rating: 4.6,
    links: ["islamabad","swat","baltit_fort"]
  },
  {
    id: "quetta",
    name: "Quetta",
    category: "City",
    description: "The capital of Balochistan, surrounded by rugged mountains and known for its fruit orchards and Hanna Lake.",
    rating: 4.4,
    links: ["karachi","multan"]
  },
  {
    id: "multan",
    name: "Multan",
    category: "Heritage",
    description: "The City of Saints, boasting beautifully adorned Sufi shrines and a vibrant history stretching back thousands of years.",
    rating: 4.5,
    links: ["lahore","karachi","mohenjo_daro","quetta","gojal","gorakh_hill","harappa","katas_raj_temples"]
  },
  {
    id: "faisalabad",
    name: "Faisalabad",
    category: "City",
    description: "Experience the breathtaking beauty and culture of Faisalabad, located in Punjab. Explore its unique urban vibe.",
    rating: 3.8,
    links: ["babusar_top"]
  },
  {
    id: "rawalpindi",
    name: "Rawalpindi",
    category: "City",
    description: "Experience the breathtaking beauty and culture of Rawalpindi, located in Punjab. Explore its unique urban vibe.",
    rating: 4.3,
    links: ["peshawar"]
  },
  {
    id: "gujranwala",
    name: "Gujranwala",
    category: "City",
    description: "Experience the breathtaking beauty and culture of Gujranwala, located in Punjab. Explore its unique urban vibe.",
    rating: 4.5,
    links: ["baltit_fort","cholistan_desert"]
  },
  {
    id: "sialkot",
    name: "Sialkot",
    category: "City",
    description: "Experience the breathtaking beauty and culture of Sialkot, located in Punjab. Explore its unique urban vibe.",
    rating: 4.9,
    links: ["thandiani"]
  },
  {
    id: "hyderabad",
    name: "Hyderabad",
    category: "City",
    description: "Experience the breathtaking beauty and culture of Hyderabad, located in Sindh. Explore its unique urban vibe.",
    rating: 4.3,
    links: ["multan","gorakh_hill","ranikot_fort"]
  },
  {
    id: "sukkur",
    name: "Sukkur",
    category: "City",
    description: "Experience the breathtaking beauty and culture of Sukkur, located in Sindh. Explore its unique urban vibe.",
    rating: 4.7,
    links: ["muzaffarabad","sahiwal"]
  },
  {
    id: "bahawalpur",
    name: "Bahawalpur",
    category: "Heritage",
    description: "Experience the breathtaking beauty and culture of Bahawalpur, located in Punjab. Explore its unique historical sites.",
    rating: 3.9,
    links: ["ziarat","larkana","shogran","jamrud_fort"]
  },
  {
    id: "sargodha",
    name: "Sargodha",
    category: "City",
    description: "Experience the breathtaking beauty and culture of Sargodha, located in Punjab. Explore its unique urban vibe.",
    rating: 4.4,
    links: ["murree","khuzdar","ayubia"]
  },
  {
    id: "abbottabad",
    name: "Abbottabad",
    category: "Nature",
    description: "Experience the breathtaking beauty and culture of Abbottabad, located in KPK. Explore its unique landscapes.",
    rating: 4.7,
    links: ["karachi","attock","derawar_fort"]
  },
  {
    id: "mardan",
    name: "Mardan",
    category: "City",
    description: "Experience the breathtaking beauty and culture of Mardan, located in KPK. Explore its unique urban vibe.",
    rating: 3.9,
    links: ["peshawar","naran_kaghan"]
  },
  {
    id: "gwadar",
    name: "Gwadar",
    category: "Nature",
    description: "Experience the breathtaking beauty and culture of Gwadar, located in Balochistan. Explore its unique landscapes.",
    rating: 4.9,
    links: ["harappa","taxila"]
  },
  {
    id: "chiniot",
    name: "Chiniot",
    category: "Heritage",
    description: "Experience the breathtaking beauty and culture of Chiniot, located in Punjab. Explore its unique historical sites.",
    rating: 4,
    links: ["jamrud_fort","islamabad","muzaffarabad"]
  },
  {
    id: "kasur",
    name: "Kasur",
    category: "Heritage",
    description: "Experience the breathtaking beauty and culture of Kasur, located in Punjab. Explore its unique historical sites.",
    rating: 4,
    links: ["shah_jahan_mosque","skardu"]
  },
  {
    id: "sahiwal",
    name: "Sahiwal",
    category: "City",
    description: "Experience the breathtaking beauty and culture of Sahiwal, located in Punjab. Explore its unique urban vibe.",
    rating: 4.5,
    links: ["thar_desert","sukkur"]
  },
  {
    id: "nawabshah",
    name: "Nawabshah",
    category: "City",
    description: "Experience the breathtaking beauty and culture of Nawabshah, located in Sindh. Explore its unique urban vibe.",
    rating: 4.9,
    links: ["larkana","quetta","shigar"]
  },
  {
    id: "mirpur",
    name: "Mirpur",
    category: "City",
    description: "Experience the breathtaking beauty and culture of Mirpur, located in AJK. Explore its unique urban vibe.",
    rating: 3.9,
    links: ["derawar_fort"]
  },
  {
    id: "muzaffarabad",
    name: "Muzaffarabad",
    category: "Nature",
    description: "Experience the breathtaking beauty and culture of Muzaffarabad, located in AJK. Explore its unique landscapes.",
    rating: 4.8,
    links: ["chiniot","karachi","gorakh_hill","sukkur"]
  },
  {
    id: "attock",
    name: "Attock",
    category: "Heritage",
    description: "Experience the breathtaking beauty and culture of Attock, located in Punjab. Explore its unique historical sites.",
    rating: 4.1,
    links: ["rawalpindi","abbottabad","shigar"]
  },
  {
    id: "jhelum",
    name: "Jhelum",
    category: "Heritage",
    description: "Experience the breathtaking beauty and culture of Jhelum, located in Punjab. Explore its unique historical sites.",
    rating: 4.6,
    links: ["peshawar","skardu"]
  },
  {
    id: "mianwali",
    name: "Mianwali",
    category: "City",
    description: "Experience the breathtaking beauty and culture of Mianwali, located in Punjab. Explore its unique urban vibe.",
    rating: 4.7,
    links: ["kund_malir","quetta","skardu"]
  },
  {
    id: "larkana",
    name: "Larkana",
    category: "Heritage",
    description: "Experience the breathtaking beauty and culture of Larkana, located in Sindh. Explore its unique historical sites.",
    rating: 5,
    links: ["swat","quetta","nawabshah"]
  },
  {
    id: "khairpur",
    name: "Khairpur",
    category: "Heritage",
    description: "Experience the breathtaking beauty and culture of Khairpur, located in Sindh. Explore its unique historical sites.",
    rating: 5,
    links: ["lahore"]
  },
  {
    id: "mastung",
    name: "Mastung",
    category: "City",
    description: "Experience the breathtaking beauty and culture of Mastung, located in Balochistan. Explore its unique urban vibe.",
    rating: 4.1,
    links: ["ziarat","naran_kaghan","jhelum"]
  },
  {
    id: "khuzdar",
    name: "Khuzdar",
    category: "Nature",
    description: "Experience the breathtaking beauty and culture of Khuzdar, located in Balochistan. Explore its unique landscapes.",
    rating: 4.2,
    links: ["swat","sargodha"]
  },
  {
    id: "chitral",
    name: "Chitral",
    category: "Nature",
    description: "Experience the breathtaking beauty and culture of Chitral, located in KPK. Explore its unique landscapes.",
    rating: 4.4,
    links: ["fairy_meadows","hingol_national_park"]
  },
  {
    id: "kalash_valley",
    name: "Kalash Valley",
    category: "Nature",
    description: "Experience the breathtaking beauty and culture of Kalash Valley, located in KPK. Explore its unique landscapes.",
    rating: 3.9,
    links: ["nathiagali","shekhupura","gorakh_hill","babusar_top"]
  },
  {
    id: "kumrat_valley",
    name: "Kumrat Valley",
    category: "Nature",
    description: "Experience the breathtaking beauty and culture of Kumrat Valley, located in KPK. Explore its unique landscapes.",
    rating: 4.2,
    links: ["murree","astore","quetta"]
  },
  {
    id: "neelum_valley",
    name: "Neelum Valley",
    category: "Nature",
    description: "Experience the breathtaking beauty and culture of Neelum Valley, located in AJK. Explore its unique landscapes.",
    rating: 4,
    links: ["mohenjo_daro","multan"]
  },
  {
    id: "shogran",
    name: "Shogran",
    category: "Nature",
    description: "Experience the breathtaking beauty and culture of Shogran, located in KPK. Explore its unique landscapes.",
    rating: 4.6,
    links: ["hingol_national_park","cholistan_desert","hunza","bahawalpur","gambat"]
  },
  {
    id: "siri_paye",
    name: "Siri Paye",
    category: "Nature",
    description: "Experience the breathtaking beauty and culture of Siri Paye, located in KPK. Explore its unique landscapes.",
    rating: 4.9,
    links: ["gorakh_hill","naran_kaghan","lahore","shrine_of_lal_shahbaz_qalandar"]
  },
  {
    id: "babusar_top",
    name: "Babusar Top",
    category: "Nature",
    description: "Experience the breathtaking beauty and culture of Babusar Top, located in KPK. Explore its unique landscapes.",
    rating: 4,
    links: ["kalash_valley","faisalabad","ranikot_fort"]
  },
  {
    id: "deosai_plains",
    name: "Deosai Plains",
    category: "Nature",
    description: "Experience the breathtaking beauty and culture of Deosai Plains, located in GB. Explore its unique landscapes.",
    rating: 4.5,
    links: ["swat"]
  },
  {
    id: "khunjerab_pass",
    name: "Khunjerab Pass",
    category: "Nature",
    description: "Experience the breathtaking beauty and culture of Khunjerab Pass, located in GB. Explore its unique landscapes.",
    rating: 4.9,
    links: ["fairy_meadows","sialkot","cholistan_desert","takht_i_bahi"]
  },
  {
    id: "naltar_valley",
    name: "Naltar Valley",
    category: "Nature",
    description: "Experience the breathtaking beauty and culture of Naltar Valley, located in GB. Explore its unique landscapes.",
    rating: 5,
    links: ["hunza"]
  },
  {
    id: "phander_valley",
    name: "Phander Valley",
    category: "Nature",
    description: "Experience the breathtaking beauty and culture of Phander Valley, located in GB. Explore its unique landscapes.",
    rating: 3.8,
    links: ["swat","hunza"]
  },
  {
    id: "rama_meadows",
    name: "Rama Meadows",
    category: "Nature",
    description: "Experience the breathtaking beauty and culture of Rama Meadows, located in GB. Explore its unique landscapes.",
    rating: 4.7,
    links: ["sargodha"]
  },
  {
    id: "astore",
    name: "Astore",
    category: "Nature",
    description: "Experience the breathtaking beauty and culture of Astore, located in GB. Explore its unique landscapes.",
    rating: 4.4,
    links: ["skardu","kumrat_valley"]
  },
  {
    id: "khaplu",
    name: "Khaplu",
    category: "Heritage",
    description: "Experience the breathtaking beauty and culture of Khaplu, located in GB. Explore its unique historical sites.",
    rating: 4.1,
    links: ["ganesh_settlement","soon_valley"]
  },
  {
    id: "shigar",
    name: "Shigar",
    category: "Heritage",
    description: "Experience the breathtaking beauty and culture of Shigar, located in GB. Explore its unique historical sites.",
    rating: 4.9,
    links: ["nawabshah","islamabad","attock"]
  },
  {
    id: "passu",
    name: "Passu",
    category: "Nature",
    description: "Experience the breathtaking beauty and culture of Passu, located in GB. Explore its unique landscapes.",
    rating: 4.6,
    links: ["lahore","nawabshah","ayubia"]
  },
  {
    id: "gulmit",
    name: "Gulmit",
    category: "Nature",
    description: "Experience the breathtaking beauty and culture of Gulmit, located in GB. Explore its unique landscapes.",
    rating: 4.3,
    links: ["hiran_minar","khyber_pass"]
  },
  {
    id: "gojal",
    name: "Gojal",
    category: "Nature",
    description: "Experience the breathtaking beauty and culture of Gojal, located in GB. Explore its unique landscapes.",
    rating: 4.8,
    links: ["multan","skardu"]
  },
  {
    id: "rakaposhi_basecamp",
    name: "Rakaposhi Basecamp",
    category: "Nature",
    description: "Experience the breathtaking beauty and culture of Rakaposhi Basecamp, located in GB. Explore its unique landscapes.",
    rating: 4.2,
    links: ["lahore"]
  },
  {
    id: "dir",
    name: "Dir",
    category: "Nature",
    description: "Experience the breathtaking beauty and culture of Dir, located in KPK. Explore its unique landscapes.",
    rating: 4.2,
    links: ["makli_necropolis","kheerthar"]
  },
  {
    id: "garam_chashma",
    name: "Garam Chashma",
    category: "Nature",
    description: "Experience the breathtaking beauty and culture of Garam Chashma, located in KPK. Explore its unique landscapes.",
    rating: 5,
    links: ["hunza","mehergarh"]
  },
  {
    id: "ayubia",
    name: "Ayubia",
    category: "Nature",
    description: "Experience the breathtaking beauty and culture of Ayubia, located in KPK. Explore its unique landscapes.",
    rating: 3.8,
    links: ["khunjerab_pass","sargodha"]
  },
  {
    id: "nathiagali",
    name: "Nathiagali",
    category: "Nature",
    description: "Experience the breathtaking beauty and culture of Nathiagali, located in KPK. Explore its unique landscapes.",
    rating: 4.1,
    links: ["rawalpindi","quetta","kalash_valley"]
  },
  {
    id: "bhurban",
    name: "Bhurban",
    category: "Nature",
    description: "Experience the breathtaking beauty and culture of Bhurban, located in Punjab. Explore its unique landscapes.",
    rating: 4.1,
    links: ["skardu","hingol_national_park"]
  },
  {
    id: "thandiani",
    name: "Thandiani",
    category: "Nature",
    description: "Experience the breathtaking beauty and culture of Thandiani, located in KPK. Explore its unique landscapes.",
    rating: 4.9,
    links: ["kalat","fairy_meadows","murree","sialkot","mehergarh"]
  },
  {
    id: "gorakh_hill",
    name: "Gorakh Hill",
    category: "Nature",
    description: "Experience the breathtaking beauty and culture of Gorakh Hill, located in Sindh. Explore its unique landscapes.",
    rating: 4.6,
    links: ["multan","hyderabad","hingol_national_park","siri_paye"]
  },
  {
    id: "hingol_national_park",
    name: "Hingol National Park",
    category: "Nature",
    description: "Experience the breathtaking beauty and culture of Hingol National Park, located in Balochistan. Explore its unique landscapes.",
    rating: 4.6,
    links: ["chitral","taxila"]
  },
  {
    id: "kund_malir",
    name: "Kund Malir",
    category: "Nature",
    description: "Experience the breathtaking beauty and culture of Kund Malir, located in Balochistan. Explore its unique landscapes.",
    rating: 4.3,
    links: ["bahawalpur","hingol_national_park","fairy_meadows"]
  },
  {
    id: "ormara",
    name: "Ormara",
    category: "Nature",
    description: "Experience the breathtaking beauty and culture of Ormara, located in Balochistan. Explore its unique landscapes.",
    rating: 4.3,
    links: ["khunjerab_pass","sargodha"]
  },
  {
    id: "astola_island",
    name: "Astola Island",
    category: "Nature",
    description: "Experience the breathtaking beauty and culture of Astola Island, located in Balochistan. Explore its unique landscapes.",
    rating: 3.9,
    links: ["sargodha","abbottabad"]
  },
  {
    id: "ziarat",
    name: "Ziarat",
    category: "Nature",
    description: "Experience the breathtaking beauty and culture of Ziarat, located in Balochistan. Explore its unique landscapes.",
    rating: 4.6,
    links: ["fairy_meadows","mastung"]
  },
  {
    id: "bolan_pass",
    name: "Bolan Pass",
    category: "Heritage",
    description: "Experience the breathtaking beauty and culture of Bolan Pass, located in Balochistan. Explore its unique historical sites.",
    rating: 4.3,
    links: ["naran_kaghan","bhanbhore","lahore"]
  },
  {
    id: "kheerthar",
    name: "Kheerthar",
    category: "Nature",
    description: "Experience the breathtaking beauty and culture of Kheerthar, located in Sindh. Explore its unique landscapes.",
    rating: 4.1,
    links: ["ganesh_settlement","dir","gambat"]
  },
  {
    id: "soon_valley",
    name: "Soon Valley",
    category: "Nature",
    description: "Experience the breathtaking beauty and culture of Soon Valley, located in Punjab. Explore its unique landscapes.",
    rating: 4.9,
    links: ["hiran_minar","khaplu"]
  },
  {
    id: "cholistan_desert",
    name: "Cholistan Desert",
    category: "Nature",
    description: "Experience the breathtaking beauty and culture of Cholistan Desert, located in Punjab. Explore its unique landscapes.",
    rating: 4.9,
    links: ["lahore","bhanbhore"]
  },
  {
    id: "thar_desert",
    name: "Thar Desert",
    category: "Nature",
    description: "Experience the breathtaking beauty and culture of Thar Desert, located in Sindh. Explore its unique landscapes.",
    rating: 4.2,
    links: ["jamrud_fort","naran_kaghan","shah_jahan_mosque"]
  },
  {
    id: "harappa",
    name: "Harappa",
    category: "Heritage",
    description: "Experience the breathtaking beauty and culture of Harappa, located in Punjab. Explore its unique historical sites.",
    rating: 3.9,
    links: ["naltar_valley","multan","katas_raj_temples"]
  },
  {
    id: "taxila",
    name: "Taxila",
    category: "Heritage",
    description: "Experience the breathtaking beauty and culture of Taxila, located in Punjab. Explore its unique historical sites.",
    rating: 4.4,
    links: ["gwadar","quetta"]
  },
  {
    id: "rohtas_fort",
    name: "Rohtas Fort",
    category: "Heritage",
    description: "Experience the breathtaking beauty and culture of Rohtas Fort, located in Punjab. Explore its unique historical sites.",
    rating: 4.9,
    links: ["fairy_meadows","multan","hiran_minar","takht_i_bahi"]
  },
  {
    id: "derawar_fort",
    name: "Derawar Fort",
    category: "Heritage",
    description: "Experience the breathtaking beauty and culture of Derawar Fort, located in Punjab. Explore its unique historical sites.",
    rating: 4.5,
    links: ["swat","mirpur"]
  },
  {
    id: "uch_sharif",
    name: "Uch Sharif",
    category: "Heritage",
    description: "Experience the breathtaking beauty and culture of Uch Sharif, located in Punjab. Explore its unique historical sites.",
    rating: 4.5,
    links: ["lahore","skardu","gambat"]
  },
  {
    id: "makli_necropolis",
    name: "Makli Necropolis",
    category: "Heritage",
    description: "Experience the breathtaking beauty and culture of Makli Necropolis, located in Sindh. Explore its unique historical sites.",
    rating: 4.6,
    links: ["neelum_valley","faisalabad","hunza","dir"]
  },
  {
    id: "chaukhandi_tombs",
    name: "Chaukhandi Tombs",
    category: "Heritage",
    description: "Experience the breathtaking beauty and culture of Chaukhandi Tombs, located in Sindh. Explore its unique historical sites.",
    rating: 4.4,
    links: ["katas_raj_temples"]
  },
  {
    id: "bhanbhore",
    name: "Bhanbhore",
    category: "Heritage",
    description: "Experience the breathtaking beauty and culture of Bhanbhore, located in Sindh. Explore its unique historical sites.",
    rating: 4,
    links: ["fairy_meadows","hunza","mohenjo_daro"]
  },
  {
    id: "ranikot_fort",
    name: "Ranikot Fort",
    category: "Heritage",
    description: "Experience the breathtaking beauty and culture of Ranikot Fort, located in Sindh. Explore its unique historical sites.",
    rating: 4.2,
    links: ["babusar_top","nathiagali","hyderabad"]
  },
  {
    id: "takht_i_bahi",
    name: "Takht-i-Bahi",
    category: "Heritage",
    description: "Experience the breathtaking beauty and culture of Takht-i-Bahi, located in KPK. Explore its unique historical sites.",
    rating: 4.5,
    links: ["khunjerab_pass","larkana","rohtas_fort"]
  },
  {
    id: "jamrud_fort",
    name: "Jamrud Fort",
    category: "Heritage",
    description: "Experience the breathtaking beauty and culture of Jamrud Fort, located in KPK. Explore its unique historical sites.",
    rating: 3.9,
    links: ["rohtas_fort","bahawalpur","hunza","thar_desert"]
  },
  {
    id: "baltit_fort",
    name: "Baltit Fort",
    category: "Heritage",
    description: "Experience the breathtaking beauty and culture of Baltit Fort, located in GB. Explore its unique historical sites.",
    rating: 4,
    links: ["peshawar","gujranwala"]
  },
  {
    id: "altit_fort",
    name: "Altit Fort",
    category: "Heritage",
    description: "Experience the breathtaking beauty and culture of Altit Fort, located in GB. Explore its unique historical sites.",
    rating: 4.5,
    links: ["phander_valley"]
  },
  {
    id: "katas_raj_temples",
    name: "Katas Raj Temples",
    category: "Heritage",
    description: "Experience the breathtaking beauty and culture of Katas Raj Temples, located in Punjab. Explore its unique historical sites.",
    rating: 4.4,
    links: ["multan","harappa","chaukhandi_tombs"]
  },
  {
    id: "shalimar_gardens",
    name: "Shalimar Gardens",
    category: "Heritage",
    description: "Experience the breathtaking beauty and culture of Shalimar Gardens, located in Punjab. Explore its unique historical sites.",
    rating: 4.5,
    links: ["skardu"]
  },
  {
    id: "hiran_minar",
    name: "Hiran Minar",
    category: "Heritage",
    description: "Experience the breathtaking beauty and culture of Hiran Minar, located in Punjab. Explore its unique historical sites.",
    rating: 4.9,
    links: ["khairpur","soon_valley","rohtas_fort"]
  },
  {
    id: "shah_jahan_mosque",
    name: "Shah Jahan Mosque",
    category: "Heritage",
    description: "Experience the breathtaking beauty and culture of Shah Jahan Mosque, located in Sindh. Explore its unique historical sites.",
    rating: 4.7,
    links: ["thar_desert","kasur"]
  },
  {
    id: "shrine_of_lal_shahbaz_qalandar",
    name: "Shrine of Lal Shahbaz Qalandar",
    category: "Heritage",
    description: "Experience the breathtaking beauty and culture of Shrine of Lal Shahbaz Qalandar, located in Sindh. Explore its unique historical sites.",
    rating: 4.3,
    links: ["siri_paye","lahore"]
  },
  {
    id: "mehergarh",
    name: "Mehergarh",
    category: "Heritage",
    description: "Experience the breathtaking beauty and culture of Mehergarh, located in Balochistan. Explore its unique historical sites.",
    rating: 4.7,
    links: ["karachi","peshawar","thandiani"]
  },
  {
    id: "khyber_pass",
    name: "Khyber Pass",
    category: "Heritage",
    description: "Experience the breathtaking beauty and culture of Khyber Pass, located in KPK. Explore its unique historical sites.",
    rating: 4.3,
    links: ["hyderabad"]
  },
  {
    id: "ganesh_settlement",
    name: "Ganesh Settlement",
    category: "Heritage",
    description: "Experience the breathtaking beauty and culture of Ganesh Settlement, located in GB. Explore its unique historical sites.",
    rating: 4.7,
    links: ["islamabad","khaplu"]
  },
  {
    id: "shekhupura",
    name: "Shekhupura",
    category: "Heritage",
    description: "Experience the breathtaking beauty and culture of Shekhupura, located in Punjab. Explore its unique historical sites.",
    rating: 4.1,
    links: ["multan","islamabad","kalash_valley"]
  },
  {
    id: "gambat",
    name: "Gambat",
    category: "City",
    description: "Experience the breathtaking beauty and culture of Gambat, located in Sindh. Explore its unique urban vibe.",
    rating: 5,
    links: ["baltit_fort","shogran","kheerthar","uch_sharif","rajanpur"]
  },
  {
    id: "chagai",
    name: "Chagai",
    category: "Nature",
    description: "Experience the breathtaking beauty and culture of Chagai, located in Balochistan. Explore its unique landscapes.",
    rating: 4.5,
    links: ["karachi"]
  },
  {
    id: "pishin",
    name: "Pishin",
    category: "Nature",
    description: "Experience the breathtaking beauty and culture of Pishin, located in Balochistan. Explore its unique landscapes.",
    rating: 4.1,
    links: ["fairy_meadows","phander_valley"]
  },
  {
    id: "kalat",
    name: "Kalat",
    category: "Heritage",
    description: "Experience the breathtaking beauty and culture of Kalat, located in Balochistan. Explore its unique historical sites.",
    rating: 3.9,
    links: ["fairy_meadows","dir","thandiani"]
  },
  {
    id: "dadu",
    name: "Dadu",
    category: "City",
    description: "Experience the breathtaking beauty and culture of Dadu, located in Sindh. Explore its unique urban vibe.",
    rating: 4.8,
    links: ["cholistan_desert","naran_kaghan"]
  },
  {
    id: "rajanpur",
    name: "Rajanpur",
    category: "City",
    description: "Experience the breathtaking beauty and culture of Rajanpur, located in Punjab. Explore its unique urban vibe.",
    rating: 4.4,
    links: ["khunjerab_pass","gambat","lahore"]
  }
];
```

---

## FILE: `src/data/packages.js`

> This file is 5865 lines. It contains travel packages for all 78 destinations. For the full reconstruction, copy the entire file from the original source. Below is a summary of the structure:

```js
const agentLogos = {
  nomad: '\u{1F3D4}\uFE0F',
  pakvoyager: '\u{1F9ED}',
  summit: '\u26F0\uFE0F',
  wanderlust: '\u2708\uFE0F',
  heritage: '\u{1F54C}',
};

export const packages = {
  lahore: [
    {
      id: 'lhr-1',
      agentName: 'Heritage Trails',
      agentLogo: agentLogos.heritage,
      packageName: 'Royal Mughal Experience',
      price: 'PKR 35,000',
      priceValue: 35000,
      duration: '3 Days / 2 Nights',
      rating: 4.8,
      groupSize: '2-15 people',
      difficulty: 'Easy',
      highlights: [
        'Guided tour of Badshahi Mosque & Lahore Fort',
        'Old Lahore food trail with 8+ stops',
        'Evening visit to Minar-e-Pakistan',
        'Traditional Sufi music night at Shalimar Gardens',
      ],
      includes: ['Boutique Hotel', 'All Meals', 'AC Transport', 'Licensed Guide'],
    },
    // ... 3 more packages for Lahore (lhr-2, lhr-3, lhr-4)
  ],
  // ... ALL 78 destinations with their packages
  // Each destination has 2-4 packages from different agents
  // Agent names: Heritage Trails, Pak Voyager, Nomad Adventures, Summit Tours, Wanderlust Pakistan
  // All destinations covered: lahore, hunza, swat, islamabad, karachi, murree, skardu, naran_kaghan,
  //   fairy_meadows, mohenjo_daro, peshawar, quetta, multan, faisalabad, rawalpindi, gujranwala,
  //   sialkot, hyderabad, sukkur, bahawalpur, sargodha, abbottabad, mardan, gwadar, chiniot, kasur,
  //   sahiwal, nawabshah, mirpur, muzaffarabad, attock, jhelum, mianwali, larkana, khairpur, mastung,
  //   khuzdar, chitral, kalash_valley, kumrat_valley, neelum_valley, shogran, siri_paye, babusar_top,
  //   deosai_plains, khunjerab_pass, naltar_valley, phander_valley, rama_meadows, astore, khaplu,
  //   shigar, passu, gulmit, gojal, rakaposhi_basecamp, dir, garam_chashma, ayubia, nathiagali,
  //   bhurban, thandiani, gorakh_hill, hingol_national_park, kund_malir, ormara, astola_island,
  //   ziarat, bolan_pass, kheerthar, soon_valley, cholistan_desert, thar_desert, harappa, taxila,
  //   rohtas_fort, derawar_fort, uch_sharif, makli_necropolis, chaukhandi_tombs, bhanbhore, ranikot_fort,
  //   takht_i_bahi, jamrud_fort, baltit_fort, altit_fort, katas_raj_temples, shalimar_gardens,
  //   hiran_minar, shah_jahan_mosque, shrine_of_lal_shahbaz_qalandar, mehergarh, khyber_pass,
  //   ganesh_settlement, shekhupura, gambat, chagai, pishin, kalat, dadu, rajanpur
};
```

> **NOTE:** See the full `packages.js` (5865 lines) in the original source for complete package data.

---

## BINARY ASSETS NEEDED

The following files are NOT text-based and must be obtained from the original source or recreated:

| File | Description |
|------|-------------|
| `public/bg-tourism.png` | Background mountain image for the cinematic base layer |
| `public/topo-overlay.png` | Topographic contour map overlay |
| `public/favicon.svg` | Purple gem/crystal SVG icon (see below) |
| `public/icons.svg` | Social media icons sprite sheet (6 symbols) |
| `src/assets/hero.png` | Hero image asset |
| `src/assets/react.svg` | React logo (from Vite template) |
| `src/assets/vite.svg` | Vite logo (from Vite template) |

---

## KEY CONFIGURATION

- **Base URL:** `/z-tour/` (for GitHub Pages hosting)
- **Color Scheme:** Dark midnight theme (`#12131a` base)
- **Category Colors:** Nature = `#22d3ee`, City = `#a78bfa`, Heritage = `#fbbf24`
- **External API:** `https://loremflickr.com/300/300/pakistan,<name>` for dynamic destination images
- **Font:** Inter (Google Fonts)

---

## ARCHITECTURE SUMMARY

```
App.jsx  (view router: landing ↔ graph)
  ├── LandingPage.jsx     — Hero page with animated mesh, particles, "Explore Now" CTA
  └── GraphView.jsx       — 3D Force-directed graph with hubs & destinations
        ├── FilterBar.jsx        — Search + category filter (appears when hub selected)
        ├── FloatingCards.jsx    — Packages fan-out around selected destination
        └── PackageDetail.jsx    — Full package modal with highlights, includes, CTA

src/data/
  ├── destinations.js  — 78 destinations (City/Nature/Heritage) with links
  └── packages.js      — 250+ travel packages from 5 tour agents
```

## RECREATION CHECKLIST

- [ ] 1. Create project with `npm create vite@latest`
- [ ] 2. Install all dependencies from `package.json`
- [ ] 3. Copy all config files: `vite.config.js`, `postcss.config.js`, `tailwind.config.js`, `eslint.config.js`, `.gitignore`
- [ ] 4. Copy `index.html`
- [ ] 5. Copy `src/main.jsx`, `src/App.jsx`, `src/App.css`, `src/index.css`
- [ ] 6. Copy all 5 components into `src/components/`
- [ ] 7. Copy `src/data/destinations.js` (810 lines, 78 destinations)
- [ ] 8. Copy `src/data/packages.js` (5865 lines, all packages)
- [ ] 9. Add public/ assets (bg-tourism.png, topo-overlay.png, favicon.svg)
- [ ] 10. Run `npm run dev` to verify
- [ ] 11. Run `npm run build` for production

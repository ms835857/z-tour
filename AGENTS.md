# Project Rules: Immersive 3D Tourism Visualization

## Tech Stack
- **Frontend:** React (Vite)
- **3D Engine:** Three.js (@react-three/fiber, @react-three/drei)
- **Physics/Data:** D3.js (d3-force for graph layouts)

## Project Structure
- `/src/components`: React components (UI and 3D)
- `/src/hooks`: Custom hooks (data simulation, interaction)
- `/src/data`: Data files (JSON, CSV)
- `/src/assets`: Static assets (textures, models)

## Conventions
- Use functional components and hooks.
- Keep 3D logic inside `@react-three/fiber` Canvas components.
- Use `d3-force` for calculating node positions in the `useDataSimulation` hook.
- All 3D coordinates should be reactive and updated via state or refs.

## Current Setup
- `Scene.jsx`: Main 3D entry point.
- `useDataSimulation.js`: D3-force simulation logic.
- `tourismData.json`: Placeholder network data.

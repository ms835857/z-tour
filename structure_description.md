# Z-Tour Project Structure & Developer Integration Guide

This document provides a detailed breakdown of the `z-tour` codebase, explaining the directory structure, the purpose of each component, how data flows through the application, and a practical guide on how to determine where to implement new features or updates.

---

## 1. Directory & File Structure

Here is a visual map of the key directories and files in the `z-tour` repository:

```text
z-tour/
├── dist/                  # Production build output (generated via npm run build)
├── public/                # Static public assets served directly to the client
│   ├── bg-tourism.png     # Scenic background image behind the 3D graph
│   └── topo-overlay.png   # Topographic overlay lines for the midnight aesthetic
├── src/                   # Main source code directory
│   ├── main.jsx           # Entry point; mounts the React App in index.html
│   ├── App.jsx            # Main app shell; toggles between Landing and Graph views
│   ├── App.css            # Styles specific to the App container
│   ├── index.css          # Core design system, custom global themes, scrollbars, and glassmorphism styles
│   ├── assets/            # Static media assets imported in JS (icons, images)
│   ├── data/              # Static/Mock database modules
│   │   ├── destinations.js# Dataset of Pakistan destinations with graph linkages
│   │   └── packages.js    # Travel packages grouped by destination
│   └── components/        # Reusable UI component modules
│       ├── LandingPage.jsx   # Animated entry page with modern HSL backdrop and floaty particles
│       ├── GraphView.jsx     # Immersive 3D Force Graph containing nodes, links, and scene physics
│       ├── FilterBar.jsx     # Interactive search input and category filter buttons
│       ├── FloatingCards.jsx # Coordinates projector mapping 3D node points to 2D card arcs
│       └── PackageDetail.jsx # Detailed modal displaying highlights, inclusions, and CTAs
├── eslint.config.js       # ESLint rules for code formatting and standard validation
├── index.html             # The root page template with React entry script mount point
├── package.json           # Node.js manifest specifying dependencies and scripts
├── postcss.config.js      # PostCSS processor settings for tailwind integration
├── tailwind.config.js     # Tailwind CSS theme custom variables and setup
└── vite.config.js         # Vite bundler parameters (port configurations, plugins)
```

---

## 2. Code Breakdown: What Each Part Does

### A. Root Configurations
*   **`index.html`**: Sets up the basic HTML structure, browser tab icon, page title, and includes the root `<div id="root"></div>` where React is dynamically rendered.
*   **`tailwind.config.js` & `index.css`**: Define the design system. `index.css` leverages Tailwind v4 `@theme` bindings to set uniform colors like `--color-midnightBase` and defines `.glass-panel` and `.glass-button` using modern `backdrop-filter` rules for premium visual texture.

### B. Core Application Shell (`src/`)
*   **`main.jsx`**: Initializes React, imports global styles (`index.css`), and hooks up the parent component `<App />`.
*   **`App.jsx`**: Holds the top-level view router state `currentView`. It uses Framer Motion's `<AnimatePresence>` to trigger seamless screen transitions between the `'landing'` state and `'graph'` state.

### C. UI Components (`src/components/`)
*   **`LandingPage.jsx`**: Handles the first impression. It renders an animated glowing vector mesh (using `AmbientMesh`) and floaty cosmic specks (using `FloatingMotes`) designed to wow the user instantly. Contains the "Explore Now" button that routes to the 3D graph view.
*   **`GraphView.jsx`**: The core interactive visual center.
    *   Imports and renders `<ForceGraph3D>` inside a transparent canvas context.
    *   Injects soft Three.js ambient lights (`THREE.AmbientLight`) and spotlighting to elevate visual depth.
    *   Utilizes a 2D HTML Canvas to draw custom glowing nodes: octagonal collages for categories/hubs, and hexagon frames with dynamically prefetched photos for destinations.
    *   Manages click logic, centering the camera dynamically over clicked nodes using a standard distance ratio calculation.
*   **`FilterBar.jsx`**: A floating input menu allowing users to search destinations by string matching (`searchQuery`) or filter by tags: *Nature*, *City*, and *Heritage*.
*   **`FloatingCards.jsx`**: Generates a responsive card fan layout. It translates 3D coordinate vectors `(x, y, z)` of the active graph node to 2D viewport coordinates `(x, y)` on the screen. It positions preview cards for travel packages in a neat semi-circle arc right beneath the node.
*   **`PackageDetail.jsx`**: Displays a scrollable modal overlay detailing a travel agent's program: highlights checklist, inclusions badges, difficulty indicators, rating details, and buttons to book or see itineraries.

### D. Data Layer (`src/data/`)
*   **`destinations.js`**: An array of over 80+ destination objects. Critical fields:
    ```javascript
    {
      id: "lahore",
      name: "Lahore",
      category: "City",
      description: "...",
      rating: 4.8,
      links: ["islamabad", "multan", "karachi", ...] // IDs of other nodes this links to in the graph
    }
    ```
*   **`packages.js`**: Key-value mapping matching destination IDs to arrays of detailed travel opportunities, listing pricing, difficulty scales, schedules, and agent identifiers.

---

## 3. How to Figure Out Where to Add a New Feature

If you are asked to introduce a new feature or modify behavior, use this structured guide to identify exactly which files to edit.

### Scenario A: Adding a New Destination or Modifying Travel Data
*   **Goal**: You want a new city, nature park, or historical monument to show up in the 3D galaxy.
*   **Where to go**:
    *   **Data Structure**: Open `src/data/destinations.js` and add a new object to the `destinations` array.
    *   **Connectivity**: Define which nodes it links to by inserting existing destination IDs in its `links` array (ensure reciprocal linkages for a balanced graph).
    *   **Adding Packages**: Go to `src/data/packages.js`, create a key matching your new destination's `id`, and add a list of tour packages.

### Scenario B: Modifying the 3D Node Aesthetics or Graphic Performance
*   **Goal**: You want to change node sizes, border colors, collage layouts (e.g. from octagon to circle), link styling, or camera behaviors.
*   **Where to go**:
    *   **Shapes & Drawing**: Open `src/components/GraphView.jsx`. Look for `nodeThreeObject` (Line 232). Nodes are rendered on canvas sprites. Modify `drawHexagon`, `drawOctagon`, or adjust canvas drawing operations there.
    *   **Link Design**: Look at `<ForceGraph3D>` inside `GraphView.jsx` and modify properties like `linkWidth`, `linkColor`, or `linkOpacity`.
    *   **Physics / Interaction**: If nodes fly too fast or you want to alter double-click speeds, tune properties like `d3AlphaDecay`, `d3VelocityDecay`, or `handleNodeClick`.

### Scenario C: Adjusting Filters or Adding a New Search Parameter
*   **Goal**: You want to filter destinations by a new attribute (e.g., "Budget" level, "Province", or "Duration").
*   **Where to go**:
    *   **UI Controls**: Open `src/components/FilterBar.jsx` and add a new entry to the `filters` array or add another form input.
    *   **Filter Logic**: Open `src/components/GraphView.jsx` and update the `isNodeVisible` callback function. This function determines whether nodes should render based on `searchQuery` and `activeFilter`.

### Scenario D: Introducing a New View (e.g., Booking Form or User Profiles)
*   **Goal**: Create a new screen that opens when clicking a button.
*   **Where to go**:
    *   **View Registration**: Open `src/App.jsx`. Add a new string to the state `currentView` (e.g., `'booking'`).
    *   **Conditional Render**: Import your new component and add a branch inside the `<AnimatePresence>` block checking for your view name.
    *   **Navigation**: Pass `setView` to whatever component initiates the transition (e.g. in `PackageDetail.jsx` on clicking "Book Now").

### Scenario E: Changing Global Styling, Themes, or Micro-animations
*   **Goal**: Adjust custom scrollbars, background gradients, default fonts, card hover scales, or glassmorphic parameters.
*   **Where to go**:
    *   **CSS Classes & Tailwind Ext**: Open `src/index.css` to update global styles or extend the `@theme` palette.
    *   **Micro-animations**: Components like `FloatingCards.jsx`, `LandingPage.jsx`, and `PackageDetail.jsx` use Framer Motion (`motion.div`). Modify `initial`, `animate`, `whileHover`, or `transition` properties within those files for customized responsiveness.

---

## 4. Troubleshooting & Search Tips (Dev Hacks)

When trying to find code in an unfamiliar place:
1.  **Search by Rendered Text**: Inspect the app in your browser, find a unique word on screen (e.g. `"What's Included"`), and search for that exact term in the codebase. It will instantly point you to `PackageDetail.jsx`.
2.  **Follow the State Chain**: If something is changing dynamically (like clicking a card to open a modal), find what manages that view:
    *   `selectedNode` is set in `GraphView.jsx`.
    *   It is passed as a prop (`node={selectedNode}`) to `FloatingCards.jsx`.
    *   `FloatingCards.jsx` processes the packages and passes `expandedPkg` to `PackageDetail.jsx`.
3.  **Trace UI Icons**: Look for imports from `lucide-react`. If you see an icon on screen and want to find where it is defined, search the codebase for that icon name (e.g. `MapPin` or `Mountain`).

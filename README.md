# CottTroll - NovaSynth AI Landing Page

A sleek, modern, and *deceptive* landing page for a fake AI company. Built with BunJS, Tailwind CSS, and server-side rendering.

## Features

- **Modern Design**: Glassmorphism, animated gradients, floating elements, and a polished dark theme
- **Server-Side Rendering**: Fast initial load with BunJS
- **Hidden Functionality**: Clicking anywhere opens tabs from a server-defined URL list
- **Stealth Mode**: Cursor doesn't show pointer state on clickable elements
- **Modular Architecture**: Clean separation of concerns for maintainability

## Getting Started

### Prerequisites

- [Bun](https://bun.sh) installed on your system

### Installation

```bash
bun install
```

### Running the Server

Development mode (with hot reload):

```bash
bun run dev
```

Production mode:

```bash
bun run start
```

The server will start at `http://localhost:3000` (or the next available free port)

## Project Structure

```bash
CottTroll/
├── index.ts                    # Entry point
├── src/
│   ├── server.ts               # Server setup
│   ├── config/
│   │   ├── site.ts             # Site branding & configuration
│   │   └── urls.ts             # Troll URLs & behavior config
│   ├── routes/
│   │   └── index.ts            # Route handlers (API, static, pages)
│   ├── templates/
│   │   ├── layout.ts           # Base HTML layout
│   │   ├── styles.ts           # Inline CSS & Tailwind config
│   │   ├── components/
│   │   │   ├── index.ts        # Component exports
│   │   │   ├── nav.ts          # Navigation bar
│   │   │   ├── hero.ts         # Hero section
│   │   │   ├── features.ts     # Feature cards
│   │   │   ├── stats.ts        # Stats section
│   │   │   ├── cta.ts          # Call-to-action
│   │   │   ├── footer.ts       # Footer
│   │   │   └── background.ts   # Animated background
│   │   └── pages/
│   │       ├── index.ts        # Page exports
│   │       └── home.ts         # Home page assembly
│   └── styles/
│       └── input.css           # Tailwind source (for build)
├── public/
│   └── js/
│       └── troll.js            # Client-side troll script
├── package.json
├── tailwind.config.js
└── tsconfig.json
```

## Configuration

### Changing the Troll URLs

Edit `src/config/urls.ts`:

```typescript
export const TROLL_URLS: string[] = [
  "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
  "https://nyan.cat/",
  // Add your own URLs here
];

export const TROLL_CONFIG = {
  clickCooldown: 500,      // ms between clicks
  maxTabsPerClick: 3,      // max tabs per click
  disableContextMenu: true,
  disableSelection: true,
};
```

### Changing Site Branding

Edit `src/config/site.ts` to customize the fake company name, tagline, stats, navigation links, and footer content.

### Adding New Pages

1. Create a new file in `src/templates/pages/`
2. Import and use components from `src/templates/components/`
3. Wrap content with `renderLayout()` from `src/templates/layout.ts`
4. Add the route in `src/routes/index.ts`

### Adding New Components

1. Create a new file in `src/templates/components/`
2. Export a render function that returns an HTML string
3. Add export to `src/templates/components/index.ts`

## How It Works

1. The page renders a completely legitimate-looking AI startup landing page
2. All cursor styles are overridden to show the default cursor everywhere
3. When a user clicks anywhere on the page, it opens tabs from the server-defined URL list
4. Each subsequent click opens more tabs (escalating chaos)
5. Right-click is disabled to prevent easy inspection

## Tech Stack

- **Runtime**: BunJS
- **Styling**: Tailwind CSS (via CDN for SSR simplicity)
- **Rendering**: Server-Side Rendering (SSR)
- **Architecture**: Modular component-based templates

## Legal Disclaimer

This project is for educational and entertainment purposes only. Use responsibly.

---

Built with mischief (and maintainability) in mind.

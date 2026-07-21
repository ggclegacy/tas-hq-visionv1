# TAS HQ Executive Vision Experience

A directed executive cinematic experience. The default route combines a 54-second shot-driven Prologue and 82-second Act I on one deterministic timeline.

## Setup

Requirements: Node.js 22 or newer and npm.

```bash
npm install
npm run dev
```

## Commands

- `npm run dev` — start the Vite development server.
- `npm run build` — type-check and create a production build.
- `npm run preview` — serve the production build locally.
- `npm run typecheck` — run strict TypeScript checks.
- `npm run lint` — run ESLint with zero warnings allowed.
- `npm run format` / `npm run format:check` — write or verify deterministic formatting.
- `npm run test` / `npm run test:watch` — run the Vitest suite once or in watch mode.

See [CONTRIBUTING.md](CONTRIBUTING.md), [runtime architecture](docs/ARCHITECTURE.md), and [current build status](docs/BUILD_STATUS.md) before extending the project.

The default route opens the executive Prologue launch. Append `?debug` during local development to expose the shot inspector, deterministic seek, viewport simulation, quality tiers, reduced motion, and chapter skip. Debug controls are never shown by default.

## Phase boundary

Act I ends on an intentional `Act II` / `The Challenge` hold. Act II and later acts, final Onyx narration and ambience, product demonstrations, the closing sequence, and exploration mode are not part of the runtime. Pending audio paths are metadata hooks and are not loaded.

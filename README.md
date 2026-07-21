# TAS HQ Executive Vision Experience

A directed executive cinematic experience. The production sequence now composes the 54-second Prologue, 60-second Act I, and 60-second Act II on one deterministic timeline.

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

See [CONTRIBUTING.md](CONTRIBUTING.md), [runtime architecture](docs/ARCHITECTURE.md), and [current build status](BUILD_STATUS.md) before extending the project.

The default route opens the executive Prologue launch. Append `?debug` during local development to expose quality-tier and seek controls. Debug controls are never shown by default.

## Phase boundary

Act II ends at an intentional `Act III` / `The Future Standard` hold. Act III and later acts, final Onyx narration and ambience, 3D environments, the closing sequence, and exploration mode are not implemented. Pending audio paths are metadata hooks and are not loaded.

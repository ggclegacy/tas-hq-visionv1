# Contributing

## Preserve the foundation

Read `BUILD_STATUS.md` and `docs/ARCHITECTURE.md` before changing the project. Extend public module boundaries; do not replace working systems or import private files across modules. Never copy the architecture, routing, global state, or application shell of a prior TAS HQ project.

## Dependency and runtime rules

- Authored content belongs in `src/presentation` and stays data-only.
- The Presentation Director is the only authority for presentation state and canonical time.
- Scenes derive effects from Director snapshots. Do not add global scene timers, scattered `setTimeout` choreography, or route-driven sequencing.
- Browser clocks and media engines are injected adapters, never alternate time authorities.
- Cinematic playback and `src/exploration` remain separate application modes.
- Add a production dependency only when a documented requirement cannot be met by platform APIs or the current stack.

## Manifest authoring

Use the contracts exported from `src/presentation`. All IDs are globally unique. Structural time ranges are absolute milliseconds, valid, contained by their parent, and non-overlapping. Same-type scene cues do not overlap. Every reference resolves. Motion-required cues, moving camera instructions, interface choreography, and timed transitions include a reduced-motion alternative. Run validator tests for every new invalid condition.

## Director invariants

- Commands reject invalid transitions instead of silently mutating state.
- Snapshots are immutable and stable between emissions.
- Paused and interrupted time does not drift.
- Seeking, skipping, restart, failure, completion, and disposal perform lifecycle cleanup.
- Scene lifecycle code never advances canonical time.

## Assets

`gac-logo.png` and `tas-hq-logo.png` at the repository root are immutable originals. Public copies must remain byte-identical. Do not overwrite, trace, stretch, crop, or destructively optimize them. GAC is reserved for presenting credit. TAS HQ is reserved for emblem formation, system reveal, and closing return. Meaningful appearances use the accessibility labels in `src/media/assets.ts`; purely decorative duplicates use empty alt text.

## Accessibility and quality tiers

Keyboard focus must remain visible, text contrast readable, logos undistorted, and controls semantically labeled. `prefers-reduced-motion` resolves cinematic and interface motion to a static state. Quality tiers express intent: `essential` preserves the complete message, `enhanced` adds polish, and `cinematic` permits the highest-fidelity assets. Quality may change fidelity, never content or Director timing.

## Before handing off

Run:

```bash
npm run format:check
npm run typecheck
npm run lint
npm run test
npm run build
```

Update `BUILD_STATUS.md` honestly. Future prompts must preserve completed gates and remain within their stated phase.

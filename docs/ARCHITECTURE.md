# Runtime Architecture

## Purpose

This repository is a directed cinematic runtime. It is not organized around pages, routes, or dashboard features. Authored presentation data flows through one deterministic director into a rendering stage.

## Dependency direction

```text
presentation definition ──> director runtime <── adapters (clock/media)
                                  │
                                  v
                         narrow React adapter
                                  │
                                  v
stage <── scenes <── captions / controls / design system / media contracts

exploration (later) ──> its own application shell and navigation
```

- `presentation` owns authored, data-only definitions and validation.
- `director` owns canonical presentation state and canonical presentation time. It is framework-agnostic and may depend only on presentation contracts and shared utilities.
- `scenes` implement lifecycle-driven rendering units. They consume director snapshots; they do not advance canonical time.
- `stage` adapts director snapshots to React rendering and composition.
- `media`, `captions`, and `controls` expose focused integration contracts.
- `design-system` owns semantic visual primitives.
- `shared` contains genuinely cross-cutting, stateless utilities.
- `exploration` is a separate future application boundary. Cinematic playback must never depend on exploration navigation.

Public `index.ts` files are the supported import surface for each module. Cross-module imports must use those public surfaces instead of reaching into internal files.

## Director invariants

The Presentation Director is the single source of truth for canonical presentation state and time. Scene state must be derived from the director snapshot and authored cues.

The following patterns are prohibited:

- scene-owned global timers;
- scattered `setTimeout` choreography;
- route-driven presentation sequencing;
- independent clocks that can drift from the Director;
- coupling cinematic playback state to exploration navigation.

Any browser, animation, or media clock is an injected adapter. It reports observations to the Director; it does not become the canonical authority.

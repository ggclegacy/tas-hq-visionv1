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

## Shot rendering

The cinematic renderer extends scenes with declarative shots. The validated manifest flows through the Director snapshot and pure frame resolver before it reaches the stage. A resolved shot contains its local progress, entrance/hold/exit phase, camera, tier-filtered layers, lighting, transition, and active viewport profile. See [the production contract](CINEMATIC_PRODUCTION_ARCHITECTURE.md) and [shot authoring guide](SHOT_AUTHORING.md).

The stage may use transforms, masks, opacity, or future imperative render adapters, but no renderer may infer narrative progression from an animation callback. Direct seek, replay, viewport changes, quality changes, and reduced-motion changes must reconstruct state from the same canonical timestamp.

The reconstructed opening remains data-driven: the typed asset manifest supplies the preserved GAC and TAS HQ marks, timed narration and caption metadata share the Director clock, and Prologue continuity flows into the first Act I shot through declarative shot overlap and continuity-carrier fields. This keeps the branded opening reusable without introducing a one-off component timeline.

# ADR 0001: State-driven Director and separate experience modes

- Status: Accepted
- Date: 2026-07-20

## Context

The experience needs repeatable cinematic timing, interruption safety, deterministic tests, and a later free-exploration mode. Page routing, component-owned timers, and shared navigation/playback state would create competing sources of truth and clock drift.

## Decision

Use a framework-agnostic Presentation Director state machine as the sole authority for playback state and canonical presentation time. Authored manifests are validated data. Clocks, media, and React are narrow adapters. Scene effects derive from immutable Director snapshots and participate in explicit lifecycle cleanup.

Keep directed presentation playback and free exploration in separate application shells. Exploration navigation cannot control or encode cinematic sequencing, and the cinematic Director cannot depend on exploration routes.

## Consequences

- Director behavior can be tested with an injected clock and no browser.
- Visibility interruption freezes canonical time and requires explicit recovery.
- React renders state but does not own playback chronology.
- Scene authors must express time in the manifest and cannot use independent choreography timers.
- Some future services may need two adapters—one per mode—instead of a shared global shell. This duplication is intentional when it preserves state ownership.

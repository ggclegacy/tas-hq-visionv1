# Shot Authoring Guide

## Authoring flow

1. Place a shot inside the absolute time range of its parent scene and assign stable IDs.
2. State the emotional and narrative intent before specifying visual behavior.
3. Define camera `from` and `to` framing, focal subject, focal bias, depth, drift, and optional lens language.
4. Declare only the layers the shot needs: environment, architecture, atmosphere, subject, typography, and foreground.
5. Give meaningful layers semantic content and an accessibility description; mark purely visual layers decorative.
6. Author lighting endpoints, entrance/hold/exit boundaries, and a transition that fits entirely inside the exit phase.
7. Provide mobile, tablet, and desktop overrides plus an intentional reduced-motion camera and transition.
8. Assign every layer to valid quality tiers. Essential always retains the full message; nonessential layers hide cleanly.
9. Add exact boundary, mid-shot seek, backward-seek, completion-hold, viewport, tier, and reduced-motion tests.

Authored data contains no React elements, CSS classes, route decisions, callbacks, or animation-library timelines.

## Layer and camera rules

Environment and architecture establish continuous space. Atmosphere and light support depth without carrying meaning. Subject holds approved imagery. Typography is semantic and belongs to the framing rather than sitting in a generic centered stack. Foreground creates scale, occlusion, or a motivated transition and must remain bounded.

Camera values describe 2.5D composition, not fictitious physical camera precision. Use controlled push, lateral drift, macro-to-wide contrast, focal shifts, depth parallax, and stillness. Avoid constant floating, repeated scale-up, orbiting, random particles, and animation for its own sake.

## Environment and material language

- Obsidian and graphite establish architecture.
- Apothecary green represents trusted intelligence and living guidance.
- Dimensional gold marks significance; it is not decoration.
- Warm ivory carries language.
- Dark glass and machined metal are suggested through restrained reflection, shadow, and edge light rather than generic glass panels.
- Motivated transitions include light wipe, occlusion, precision lock, dissolve, and cut.

## Viewports and quality

Mobile portrait is independently composed: protect upper subject space, a lower semantic copy region, caption safe areas, and reachable controls. Tablet compresses lateral depth. Desktop/display can use stronger asymmetry and negative space. All profiles share time, copy, shot order, and meaning.

Essential uses the architecture, subject, and copy with minimal compositing. Enhanced adds bounded light and atmosphere. Cinematic adds foreground finishing and fuller depth. Older-Mac safety comes from rendering only the active shot, tier filtering before render, no permanent canvas, no random systems, and no independent high-frequency loop.

## Assets, accessibility, and future acts

Never overwrite, trace, crop destructively, distort, or recolor the approved logo originals. Reference the typed asset manifest and provide a fallback. Captions sit above the cinematic planes, visible focus is mandatory, silence must remain complete, and reduced motion must preserve every idea without spatial movement.

Later acts reuse these contracts by adding validated scenes and shots to the manifest. They must not bypass the Presentation Director, introduce component clocks, or couple playback to exploration navigation.

Debug access is `?debug`. The shot inspector is a development aid only and must remain absent from the default route.

## Opening reconstruction grammar

The opening uses five authored shots and only three major title moments: GAC, the exclusive dedication, and the combined TAS HQ / Act I handoff. Complete phrases become legible within 850 ms, logo marks are treated as cinematic subjects rather than interface ornaments, and every cut carries forward a motivated light, atmosphere, or architectural edge. Do not reintroduce a chain of centered title cards or a visual reset at the Act I boundary.

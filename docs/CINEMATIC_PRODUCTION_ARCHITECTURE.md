# Cinematic Production Architecture

## Production contract

TAS HQ is a deterministic executive film rendered by the browser. The existing Presentation Director, manifest validation, frame resolver, transport recovery, captions, accessibility foundation, quality tiers, and preserved brand assets remain authoritative. The centered scene-as-screen renderer and its flat visual scaffolding are superseded by the shot system described here.

Final subjective visual acceptance belongs to Neil after the complete phase. Automated checks establish technical correctness; they do not claim creative approval.

## Dependency direction

```text
validated manifest
  -> Presentation Director snapshot (canonical time and transport state)
  -> pure resolved shot frame (shot, phase, camera, layers, lighting, transition)
  -> viewport and quality composition
  -> layered cinematic stage
```

Renderers never advance the story. A direct seek to any timestamp must reconstruct the same frame without replaying earlier animation. Imperative effects may only render toward resolved state.

## Authored vocabulary

- **Scene:** a narrative container within a chapter, used for lifecycle and editorial grouping.
- **Shot:** a continuous authored camera/composition interval inside a scene.
- **Layer:** a declarative visual or semantic element assigned to environment, architecture, atmosphere, subject, typography, or foreground depth.
- **Camera/framing state:** focal subject, focal bias, scale, depth, drift, and optional lens language resolved for the active viewport.
- **Transition:** the authored relationship between adjacent shots; it is derived from canonical time and cannot decide progression.

## Composition responsibilities

The manifest owns intent, timing, content references, layer roles, camera endpoints, lighting, transitions, quality availability, viewport overrides, fallbacks, and reduced-motion alternatives. The resolver interpolates deterministic numeric state. The stage maps resolved state to semantic DOM/SVG and bounded GPU-friendly CSS composition.

Mobile portrait, tablet/laptop, and desktop/display are authored profiles, not scaled copies. They may alter crop, focal bias, depth, text region, safe area, parallax, and motion intensity without changing canonical timing or meaning.

Essential, enhanced, and cinematic tiers preserve copy, shot order, timing, and meaning. Higher tiers may add bounded atmosphere, reflections, masks, and depth. Reduced motion preserves complete meaning through stable compositions, cuts, and short opacity changes without spatial dependence.

## Accessibility and operational rules

Semantic copy and meaningful marks remain in the document. Decorative layers are hidden from assistive technology. Captions remain readable above the composition, controls retain visible focus and keyboard operation, logo aspect ratios remain unchanged, silence remains a complete path, and hidden/interrupted playback performs no narrative work.

No scene-owned clocks, scattered timers, route-driven sequencing, animation-completion progression, live network dependency, or coupling to future exploration mode is permitted.

## Prompt 1 baseline — 2026-07-21

- Git: `main` at `14b0de5`; clean tracked tree with one preserved pre-existing untracked phase build-sequence document.
- Checks: formatting, strict typecheck, zero-warning lint, 42 tests, and production build passed.
- Bundle: JS 214.78 kB / 67.12 kB gzip; CSS 10.08 kB / 2.96 kB gzip.
- Logos: GAC SHA-256 `c74d3bb21130b41473f3078e00488102186f213936ec0ed12bd6126ad2bdf268`; TAS HQ SHA-256 `4c6ad9377c7c5183c13c16c5f1269ffb187b6591a01f9257d2d37bab9410430a`; root/public pairs match.

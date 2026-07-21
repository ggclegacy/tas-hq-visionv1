# TAS HQ Executive Vision Experience

## Phase 3 — First Act Build Sequence

**Status: Prompts 1–7 implemented 2026-07-21 under explicit project-owner delegation; Prompt 8 manual visual acceptance is owned by the project owner.**

This sequence extends the validated Prologue into the first substantive presentation act. It establishes how an approved executive idea becomes a deterministic cinematic act without authoring the remaining acts, simulating unapproved product capabilities, or entering free-exploration mode.

## Project identity

- Local project folder: `/Users/neil/Desktop/tas-hq`
- GitHub repository: `https://github.com/ggclegacy/tas-hq-visionv1.git`
- Approved existing assets:
  - `/Users/neil/Desktop/tas-hq/gac-logo.png`
  - `/Users/neil/Desktop/tas-hq/tas-hq-logo.png`
- Product: a directed executive cinematic vision experience—not a website, slide deck, SaaS dashboard, or conventional clickable prototype.
- Phase scope: the first approved presentation act only, beginning at the Prologue handoff and ending at a clean boundary before the second act.

## Preconditions

Phase 3 may begin only when:

1. Phase 2 is marked complete in `BUILD_STATUS.md` with no false completion claims.
2. The production Prologue has a validated terminal handoff into the future first act.
3. Phase 1 Director, manifest, accessibility, interruption, recovery, and asset-integrity gates still pass.
4. The first act has an approved executive purpose, exact business message, copy, evidence, and end-state.
5. Every required production asset has an identified owner, provenance, approval status, and delivery path.
6. Any required narration or audio policy is resolved before dependent implementation begins.

If a precondition is not met, record the exact blocker and stop. Do not bypass the missing decision with invented content or production-looking placeholders.

## Approval decisions required before Prompt 1

Approval of this sequence must confirm, or explicitly delegate, the following:

1. **Act purpose:** What must the executive audience understand, feel, or decide by the end of the act?
2. **Exact message:** What approved thesis, claims, terminology, and on-screen copy may appear?
3. **Evidence:** Which approved facts, metrics, operating principles, diagrams, workflows, or product behaviors support the message?
4. **Structure:** What are the approved chapters and their narrative order?
5. **Duration:** What is the target duration and acceptable pacing envelope?
6. **Narration:** Is the act silent, narrated, or temporarily voiced, and what exact approved transcript applies?
7. **Assets:** Which supplied images, videos, diagrams, fonts, audio files, or models are approved for production use?
8. **Product representation:** Is the act conceptual, demonstrative, or both, and which product states are approved to portray?
9. **Audience control:** Is the act strictly directed, may the presenter pause or seek, and are any audience interactions permitted?
10. **Final handoff:** What exact state ends the first act and hands off to the future second act?

## Rules for every prompt

1. Execute one prompt at a time, in order, and stop after its completion gate.
2. Work only inside `/Users/neil/Desktop/tas-hq`. Inspect `BUILD_STATUS.md`, repository state, architecture documentation, ADRs, the Phase 2 completion record, and completed Phase 3 entries first.
3. Preserve all Phase 1 and Phase 2 gates. Extend working public boundaries; do not replace the Director, manifest system, Prologue, stage shell, or recovery behavior.
4. Treat previous TAS HQ projects only as approved asset, copy, component, design, or interaction references. **Do not copy architecture, routing, global state, timing, directory structure, or application shells.**
5. The Presentation Director remains the sole authority for canonical state and time. Scenes resolve from Director snapshots and manifest data; do not add independent clocks, scene chronology, scattered `setTimeout` choreography, or route-driven sequencing.
6. Keep authored content data-only and runtime-validated. Rendering implementations must not be embedded in manifests.
7. Keep the cinematic experience separate from the deferred exploration shell. Do not implement free navigation, route-based acts, or an “enter HQ” application mode.
8. Use only explicitly approved, provenance-recorded assets. Do not download, synthesize, license, trace, or fabricate production media without authorization.
9. Do not invent corporate claims, product capabilities, customer outcomes, metrics, strategy language, executive quotes, or narration.
10. Label development fixtures and unavailable assets honestly. Never allow a production-looking placeholder to be mistaken for approved content.
11. Every quality tier must preserve identical approved meaning, copy, canonical timing, scene order, captions, and handoff boundaries.
12. Every moving or time-dependent visual must have an intentional reduced-motion state that preserves meaning without requiring motion.
13. Accessibility is a release gate: semantic structure, keyboard operation, visible focus, readable contrast, caption equivalence, non-color-only meaning, responsive scaling, and interruption-safe status.
14. Prefer the existing stack and platform APIs. Add a dependency only when an approved requirement cannot reasonably be met otherwise, and document its purpose, cost, and ownership.
15. Add tests for deterministic boundaries, arbitrary seeking, interruption, recovery, restart, completion, cleanup, reduced motion, quality tiers, and failure behavior introduced by the prompt.
16. Run relevant focused validation after every change and the complete quality suite before each handoff.
17. At the end of every prompt, update `BUILD_STATUS.md` with status, date, files changed, validation results, decisions, assumptions, limitations, and the exact next prompt.
18. Do not commit, push, deploy, publish, delete user work, or open a pull request unless explicitly authorized.

---

## Prompt 1 — Approve and author the first-act treatment

```text
Execute approved Phase 3, Prompt 1 only.

Read BUILD_STATUS.md, the Phase 3 sequence, architecture documentation, Phase 2 treatment and completion record, current manifests, and runtime contracts before changing files. Confirm every Phase 3 precondition and approval decision. If the act purpose, exact business message, evidence, structure, duration, narration policy, production assets, product-representation boundary, audience control, or final handoff remains unresolved, document the precise decision needed and stop without inventing an answer.

Create a concise first-act treatment that records: executive objective; audience posture; approved thesis; exact on-screen copy; approved narration when applicable; claim and evidence mapping; chapter sequence; visual intent; product-representation boundary; asset inventory and provenance; accessibility meaning; quality-tier behavior; reduced-motion behavior; target timing; and the exact boundary into the future second act.

Separate approved facts from creative interpretation. Every business claim must identify its approved source or owner. Every unavailable production asset must be explicitly marked unavailable. The treatment must be reviewable without running the application and must not prescribe speculative technical effects.

Do not author the first-act manifest, render scenes, modify the Prologue, play media, implement product demonstrations, or create second-act content. Run documentation formatting and repository checks. Update BUILD_STATUS.md according to the sequence rules, then stop.
```

**Completion gate:** The first act has one approved, source-mapped creative contract with exact messaging, evidence, timing intent, asset provenance, accessibility meaning, and hard boundaries before implementation begins.

---

## Prompt 2 — Author and validate the first-act manifest

```text
Execute approved Phase 3, Prompt 2 only.

Read BUILD_STATUS.md and preserve the approved treatment and all earlier-phase systems. Translate the approved first-act treatment into a data-only manifest using the existing presentation contracts. Extend contracts only when a concrete approved requirement cannot be represented accurately, and keep any extension independent of React and scene-rendering details.

Define the first act, chapters, scenes, cues, transitions, caption references, narration references, camera intent, interface choreography, asset requirements, quality-tier behavior, reduced-motion alternatives, and exact Prologue-to-act and act-to-future-act boundaries. Use absolute canonical timing and stable globally unique IDs. Do not represent unavailable media as delivered.

Add runtime validation and focused tests for exact duration coverage, valid structural boundaries, duplicate IDs, overlaps, missing references, asset approval state, unsupported cue types, required reduced-motion alternatives, chapter consistency, approved-copy consistency, and a single terminal handoff. Verify that the production presentation composes the Prologue and first-act manifests without duplicating or drifting canonical time.

Do not render final scenes, implement media, alter approved Prologue timing, author the second act, or touch exploration mode. Run formatting, type checking, linting, focused tests, the full test suite, and a production build. Update BUILD_STATUS.md according to the sequence rules, then stop.
```

**Completion gate:** The approved first-act treatment has a valid canonical manifest that composes cleanly after the Prologue and stops exactly before the future second act.

---

## Prompt 3 — Build deterministic act composition and chapter boundaries

```text
Execute approved Phase 3, Prompt 3 only.

Read BUILD_STATUS.md and preserve the validated manifest. Extend the scene registry, cue resolver, and stage composition only as required to support the approved first-act chapters. Scene renderers must consume read-only resolved state and local time; they must not own chronology, routing, global navigation, or independent stores.

Implement restrained semantic placeholders for each approved first-act scene. Prove the full structural path from Prologue handoff through every chapter to the inert second-act boundary. Define exact behavior for arbitrary forward and backward seeking, chapter skipping when allowed, pause/resume, visibility interruption, recovery, restart, completion, and unknown scene IDs.

Ensure Prologue scene implementations remain unchanged unless a concrete integration defect requires a surgical fix. Add deterministic tests for the Prologue handoff, chapter boundaries, local scene time, direct seeks into every scene, backward seeks across chapters, cleanup, completion, replay, and the final inert handoff.

Do not implement final act visuals, product behavior, audio, the second act, or exploration mode. Run formatting, type checking, linting, focused tests, the full suite, and a production build. Update BUILD_STATUS.md according to the sequence rules, then stop.
```

**Completion gate:** The complete first-act structure composes deterministically after the Prologue, reconstructs from any canonical timestamp, and ends without implementing later content.

---

## Prompt 4 — Implement the first-act opening chapter

```text
Execute approved Phase 3, Prompt 4 only.

Read BUILD_STATUS.md and preserve the approved treatment, manifest, Prologue, and deterministic act composition. Implement only the first approved chapter of the first act.

Use exact approved copy, claims, evidence, and assets. Compose the chapter with semantic DOM and the existing cinematic design system. Extend visual primitives only for concrete requirements shared by approved scenes. Do not turn the chapter into a slide, dashboard, marketing landing page, generic card grid, or speculative interface.

Drive every visible state from resolved manifest cues and Director time. Ensure identical canonical time produces equivalent output after uninterrupted playback, seeking, pause/resume, interruption/recovery, restart, or quality-tier change. Implement intentional reduced-motion states that preserve all approved meaning and evidence.

Add focused tests for exact copy, source-mapped evidence, asset treatment, cue boundaries, direct seeking, reduced motion, all quality tiers, responsive semantics, accessibility, and lifecycle cleanup. Do not implement later chapters, unapproved product behaviors, second-act content, or exploration mode.

Run formatting, type checking, linting, focused tests, the full suite, and a production build. Perform browser-based visual checks when a browser backend is available and record honest limitations otherwise. Update BUILD_STATUS.md according to the sequence rules, then stop.
```

**Completion gate:** The first chapter is a deterministic, accessible, source-faithful cinematic implementation that preserves the approved Prologue and does not advance into later chapters.

---

## Prompt 5 — Implement the first-act development chapters

```text
Execute approved Phase 3, Prompt 5 only.

Read BUILD_STATUS.md and preserve the completed opening chapter. Implement only the approved middle or development chapters of the first act, in their manifest order.

Represent approved ideas, evidence, diagrams, and product states truthfully. If the treatment calls for a product demonstration, implement only the explicitly approved deterministic states and transitions. Do not fabricate live data, imply backend functionality, simulate unsupported intelligence, or create a reusable SaaS application shell. Label non-production data in source and keep demonstration state under Director control.

Maintain visual continuity without introducing scene-owned animation timelines. Ensure each chapter reconstructs correctly after direct seek and cleanup. Preserve exact copy, captions, narration references, quality-tier meaning, and reduced-motion equivalence.

Add focused tests for each chapter's approved states, claim/evidence pairing, product-representation boundary, cue timing, seek equivalence, reduced motion, quality tiers, responsive semantics, interruption, recovery, and cleanup. Do not implement the final synthesis chapter, second act, generic product navigation, or exploration mode.

Run formatting, type checking, linting, focused tests, the full suite, and a production build. Perform available browser QA and document limitations. Update BUILD_STATUS.md according to the sequence rules, then stop.
```

**Completion gate:** The act's development chapters communicate only approved ideas and product states, remain deterministic under all transport operations, and introduce no hidden application architecture.

---

## Prompt 6 — Implement act synthesis and the second-act threshold

```text
Execute approved Phase 3, Prompt 6 only.

Read BUILD_STATUS.md and preserve every completed chapter. Implement only the approved first-act synthesis, conclusion, and terminal handoff into the future second act.

Resolve the act's approved thesis and evidence without adding new claims. The final frame must clearly complete the first act and expose a typed, inert second-act handoff. Do not render second-act content, navigate to a second-act route, initialize exploration mode, or imply that unavailable content is complete.

Refine cross-chapter continuity only where necessary for the full act to read as one directed sequence. All transitions remain manifest-authored and Director-derived. Verify direct seeking to the final state produces the same result as uninterrupted playback. Preserve reduced-motion meaning, quality-tier timing, captions, accessibility, interruption safety, and cleanup.

Add integration tests for the full silent visual path from Prologue handoff through act completion, including chapter boundaries, seeking, skipping when allowed, pause/resume, interruption/recovery, restart, replay, final cleanup, and one inert second-act event.

Do not integrate unapproved audio, author the second act, modify exploration mode, or add website navigation. Run formatting, type checking, linting, focused tests, the full suite, and a production build. Perform available browser QA and record limitations. Update BUILD_STATUS.md according to the sequence rules, then stop.
```

**Completion gate:** The first act forms one complete visual argument, ends at an honest second-act threshold, and remains deterministic from the Prologue handoff through replay.

---

## Prompt 7 — Integrate approved narration, media, and executive playback

```text
Execute approved Phase 3, Prompt 7 only.

Read BUILD_STATUS.md and preserve the complete silent visual act. Inventory actual supplied narration, audio, video, font, diagram, and other production media against the approved treatment and manifest. If required production media is unavailable or unapproved, record the exact deliverable and stop before dependent implementation; do not synthesize, download, license, or substitute it.

When approved assets exist, extend the existing media adapter rather than creating a second transport system. Media must follow Director prepare, play, pause, seek, chapter skip, interruption, resume, restart, completion, failure, and cleanup commands. Correct drift toward Director time without making media an alternate canonical clock.

Implement captions from the exact approved transcript and ensure essential meaning remains available when audio is blocked, muted, missing, or fails. Integrate any approved diagrams, video, or product captures with provenance, responsive containment, accessible alternatives, deterministic seek behavior, and quality-tier fallbacks.

Extend executive playback controls only for approved first-act needs. Preserve keyboard access, focus, captions, pause, recovery, restart, fullscreen failure handling, and development-only isolation of diagnostics. Add deterministic adapter and integration tests for media sync, large seeks, chapter boundaries, interruption, failure, caption timing, cleanup, and silent fallback.

Do not add unapproved media, second-act content, analytics, exploration navigation, or generic product controls. Run formatting, type checking, linting, focused tests, the full suite, and a production build. Perform available browser and media QA and record limitations. Update BUILD_STATUS.md according to the sequence rules, then stop.
```

**Completion gate:** Approved media follows Director time, captions preserve meaning, executive playback remains resilient, and the first act is complete even when optional media cannot play.

---

## Prompt 8 — Visually verify, harden, and close Phase 3

```text
Execute approved Phase 3, Prompt 8 only.

Read BUILD_STATUS.md and audit every Phase 3 completion gate. Preserve all Phase 1 and Phase 2 systems. Remove obsolete first-act placeholders, dead styles, unused assets, warnings, accidental abstractions, and unneeded dependencies without changing approved content or timing.

Confirm the approved treatment, claims, evidence, copy, narration, assets, manifest, scene implementations, captions, quality tiers, reduced motion, executive controls, and second-act boundary agree. Confirm every business claim retains its approved source mapping and every production asset has recorded provenance. Confirm no fabricated product capability, previous-project architecture, route-driven sequencing, later act, or exploration feature entered the project.

Run the complete automated quality suite, production build, dependency audit, secret scan, prohibited-pattern scan, and byte/hash comparison for protected logo assets. Perform browser-based visual QA at representative desktop, laptop, and narrow viewports. Verify Prologue handoff, every chapter boundary, exact copy, evidence presentation, product states, direct and backward seeking, chapter skip when enabled, pause/resume, restart, completion, replay, fullscreen outcomes, keyboard-only use, focus order, captions, muted/blocked/failed media, visibility recovery, reduced motion, and every quality tier.

Capture a small labeled QA evidence set for the Prologue handoff, each first-act chapter, final synthesis, second-act threshold, reduced-motion states, and critical failure states. Keep QA evidence outside production assets unless explicitly approved.

Record honest browser/platform coverage, asset provenance, known limitations, and remaining unavailable media. Mark Phase 3 complete only when every gate passes and no production claim depends on a placeholder. Otherwise leave it in progress with exact remediation. Recommend a separate Phase 4 planning document; do not author the second act, exploration mode, commit, push, publish, deploy, or open a pull request unless explicitly authorized.

Update BUILD_STATUS.md according to the sequence rules, then stop.
```

**Completion gate:** The first act is a visually verified, source-faithful, accessible, resilient production sequence that preserves the Prologue and stops truthfully before the second act.

## Phase 3 exit criteria

Phase 3 is complete only when:

- Phase 2 remains complete and the production Prologue is unchanged except for documented surgical fixes;
- the approved first-act treatment maps every claim, evidence item, exact copy block, narration segment, and production asset to an accountable source or owner;
- the first-act manifest validates and composes after the Prologue without gaps, overlaps, duplicate IDs, or canonical-time drift;
- every chapter reconstructs deterministically from the same Director timestamp after playback or seeking;
- all visual and product states represent only approved capabilities and evidence;
- no development fixture or placeholder can be mistaken for production content;
- essential, enhanced, and cinematic tiers preserve identical message, timing, captions, and chapter order;
- reduced motion preserves every approved state and uses no motion-only meaning;
- approved media, when required, is provenance-recorded, synchronized, captioned, accessible, seekable, and failure-tolerant;
- the sequence remains coherent when muted, autoplay-blocked, offline after load, interrupted, fullscreen-denied, or recovered from an error;
- executive playback remains keyboard-operable, visibly focused, semantically labeled, and free of production-facing diagnostics;
- the second-act handoff is typed and inert, with no second-act or exploration content implemented;
- protected logo originals and public copies remain byte-identical and cataloged;
- browser QA evidence covers representative viewports, every chapter, reduced motion, quality tiers, and critical failure states;
- the complete automated suite and production build pass without warnings introduced by Phase 3;
- `BUILD_STATUS.md` contains no false completion claims, unsupported claims, or hidden placeholders.

## Explicitly deferred beyond Phase 3

- the second presentation act and every later act;
- unapproved product demonstrations, claims, metrics, and strategic messaging;
- unavailable narration, voice talent, music, video, imagery, diagrams, fonts, and models;
- the final presentation closing sequence;
- 3D environments, spatial exploration, and free-navigation controls;
- exploration-mode application shell and routing;
- analytics, publishing, deployment, and remote repository operations.

## Approval record

- Execution authorization date: 2026-07-21
- Authorized scope: all prompts in this sequence
- Delegation amendment: the project owner explicitly directed Codex to build every uploaded phase and assumed responsibility for manual visual inspection.
- Creative contract: `docs/FIRST_ACT_TREATMENT.md`
- Source material: project-owner-approved Prologue narration themes only
- Evidence policy: no quantitative, outcome, customer, or product-capability claims; conceptual language is source-mapped to the approved narration/delegation
- Assets/media: no new assets or required audio
- Duration: 60 seconds, canonical time 00:54–01:54
- Product boundary: conceptual cinematic presentation only
- Handoff: inert Act II boundary, composed into the subsequently authorized Phase 4 implementation

Automated implementation and hardening are complete. Final Prompt 8 visual acceptance remains with the project owner's manual inspection.

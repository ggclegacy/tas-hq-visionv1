# TAS HQ Executive Vision Experience

## Phase 2 — Prologue Build Sequence

**Status: approved 2026-07-21. Prompts 1–7 are complete; Prompt 8 awaits browser-based visual QA.**

This sequence delivers one production-quality vertical slice: the opening Prologue, from the GAC presenting credit through the TAS HQ emblem reveal and the handoff into the future first act. It proves the creative and technical language for later acts without authoring them.

## Project identity

- Local project folder: `/Users/neil/Desktop/tas-hq`
- GitHub repository: `https://github.com/ggclegacy/tas-hq-visionv1.git`
- Approved existing assets:
  - `/Users/neil/Desktop/tas-hq/gac-logo.png`
  - `/Users/neil/Desktop/tas-hq/tas-hq-logo.png`
- Product: a directed executive cinematic vision experience—not a website, slide deck, SaaS dashboard, or conventional clickable prototype.
- Phase scope: a complete, deterministic Prologue slice only. The nine presentation acts, product demonstrations, 3D environments, final closing sequence, and free-exploration mode remain out of scope.

## Approval decisions required before Prompt 1

Approval of this sequence must confirm, or explicitly delegate, the following:

1. The Prologue's message, on-screen copy, and narration script. No business claim or executive promise may be invented during implementation.
2. The target duration and pacing envelope. The proposed working envelope is 45–75 seconds; authored timing becomes authoritative in Prompt 1.
3. Whether the approved Prologue is silent, uses supplied narration, or uses a separately approved temporary voice track. No voice may be synthesized or licensed without explicit authorization.
4. Whether supplied music, ambience, sound design, or fonts are approved. Unprovided assets must use documented placeholders or platform-safe fallbacks, not unlicensed substitutes.
5. The intended handoff at the end of the Prologue. The default is a deliberate paused threshold labeled as a future Act I boundary, not an implemented Act I.

If any decision is unavailable, Prompt 1 must record the open item and stop before content implementation that depends on it.

## Rules for every prompt

1. Execute one prompt at a time, in order, and stop after its completion gate.
2. Work only inside `/Users/neil/Desktop/tas-hq`; inspect `BUILD_STATUS.md`, `docs/ARCHITECTURE.md`, and current repository state first.
3. Preserve all Phase 1 gates and public module boundaries. Extend working systems; do not replace them or copy architecture from a previous TAS HQ project.
4. The Presentation Director remains the single authority for canonical state and time. Scenes derive their state from Director snapshots and authored cues; do not add scene clocks, global timers, scattered `setTimeout` choreography, or route-driven sequencing.
5. Keep cinematic playback separate from the deferred exploration shell.
6. Preserve the root logo originals byte-for-byte. Never overwrite, trace, crop, stretch, recolor, or destructively optimize them. GAC is used only for the presenting credit; TAS HQ is used only for the emblem/system reveal in this phase.
7. Authored presentation content remains data-only and runtime-validated. Rendering behavior must not be embedded in the manifest.
8. Every moving or time-dependent visual must have an intentional reduced-motion treatment. Essential meaning, copy, captions, and timing boundaries must survive every quality tier.
9. Accessibility is a release requirement: keyboard operability, visible focus, readable contrast, semantic controls, captions or equivalent text for speech, non-color-only meaning, and a usable static reduced-motion state.
10. Add dependencies only when an approved requirement cannot reasonably be met with the platform or existing stack. Record the purpose and cost of each addition.
11. Do not fabricate final narration, music, licensed media, product claims, analytics, or approval. Use explicit development placeholders only where this sequence permits them.
12. Run relevant focused checks during each prompt and the complete quality suite before handoff.
13. At the end of each prompt, update `BUILD_STATUS.md` with status, date, changed files, validation results, decisions, assumptions, limitations, and the exact next prompt. Do not commit, push, publish, or start the next prompt unless explicitly authorized.

---

## Prompt 1 — Define and author the Prologue presentation slice

```text
Execute approved Phase 2, Prompt 1 only.

Read BUILD_STATUS.md, the Phase 2 sequence, the architecture documentation, presentation contracts, and current runtime before changing files. Confirm the approved Prologue decisions recorded with this sequence. If message, copy, narration policy, target duration, asset authorization, or the final handoff is unresolved, document the precise decision needed and stop without inventing an answer.

Create a concise Prologue treatment and timing map covering: opening stillness; GAC presenting credit; transition into the TAS HQ world; TAS HQ emblem formation/system reveal; the approved thesis or invitation; and a clean boundary into the future first act. Record exact on-screen copy, narration text when approved, visual intent, audio intent, accessibility meaning, quality-tier behavior, reduced-motion behavior, and absolute timing. Keep the treatment implementation-agnostic and restrained; it is a cinematic direction contract, not a storyboard full of speculative effects.

Author a data-only Prologue manifest from the approved treatment using the existing contracts. Use explicit development asset references for approved-but-not-yet-delivered media and label them as unavailable; do not create fake production assets. Add focused manifest-validation tests for the authored slice. Do not render final scenes, play audio, request fullscreen, or implement Act I.

Run formatting, type checking, linting, focused tests, the full test suite, and a production build. Update BUILD_STATUS.md according to the sequence rules, then stop.
```

**Completion gate:** The approved Prologue has a single reviewable creative contract and a valid data-only manifest with exact copy, timing, accessibility intent, quality tiers, reduced-motion behavior, asset availability, and a hard boundary before Act I.

## Prompt 2 — Harden Prologue contracts and deterministic cue resolution

```text
Execute approved Phase 2, Prompt 2 only.

Read BUILD_STATUS.md and preserve Prompt 1. Audit the authored Prologue against the existing presentation contracts and validator. Extend contracts only for concrete Prologue requirements that cannot be expressed accurately today. Keep extensions small, data-only, backward-compatible where practical, and free of rendering implementation details.

Implement a framework-agnostic cue resolver that derives the active Prologue scene, local scene time, cues, transition state, captions, camera intent, and interface intent solely from the validated manifest and a Director snapshot. Define deterministic boundary semantics for exact start/end times, seeking in either direction, chapter skipping, restart, completion, and reduced motion. Do not create another clock or store mutable scene chronology.

Add tests for scene and cue boundaries, large time jumps, backward seeks, replay after completion, reduced-motion selection, invalid references, and stable repeated resolution. Do not render final visuals or integrate media yet.

Run validation, update BUILD_STATUS.md according to the sequence rules, then stop.
```

**Completion gate:** Every Prologue state can be deterministically reconstructed from manifest data plus a Director snapshot, including after seeking or interruption, with no scene-owned timing.

## Prompt 3 — Build the cinematic scene and transition primitives

```text
Execute approved Phase 2, Prompt 3 only.

Read BUILD_STATUS.md and preserve completed work. Build only the reusable visual primitives required by the approved Prologue treatment: full-viewport scene composition, safe-area copy placement, logo presentation without distortion, controlled darkness/light fields, typography, fades or dissolves, and transition masking. Keep primitives semantic and driven by resolved presentation state rather than imperative animation chains.

Implement essential, enhanced, and cinematic quality treatments using CSS and browser capabilities unless the approved treatment proves another dependency necessary. Quality tiers may change fidelity, never message, canonical timing, or scene order. Implement reduced-motion variants as authored static states or crossfades. Ensure intermediate seek states render correctly without replaying hidden animations.

Create a developer-only scene harness or focused tests for primitive states. Do not assemble the finished Prologue, add final audio, build executive controls, or implement generic design-system components unrelated to the slice.

Run validation, update BUILD_STATUS.md according to the sequence rules, then stop.
```

**Completion gate:** The minimal Prologue visual vocabulary renders deterministically at arbitrary timestamps, across quality and motion preferences, without distorting either logo or introducing independent choreography.

## Prompt 4 — Implement the presenting credit and world transition

```text
Execute approved Phase 2, Prompt 4 only.

Read BUILD_STATUS.md and preserve completed work. Implement the opening portion of the approved manifest: opening stillness, the GAC presenting credit, its exit, and the transition into the TAS HQ visual world. Use only the byte-identical approved GAC logo copy and the exact approved copy. Keep the treatment executive, quiet, and cinematic; do not turn it into a splash page or expose developer controls as final UI.

Drive every visible state from the cue resolver and Director snapshot. Verify arbitrary seeks into the middle and boundaries of each state, pause/resume, restart, interruption recovery, every quality tier, and reduced motion. Add scene-level and stage-integration tests for meaningful states rather than fragile animation-frame snapshots.

Do not reveal the TAS HQ emblem early, play unapproved audio, request fullscreen, or implement later Prologue scenes.

Run validation, update BUILD_STATUS.md according to the sequence rules, then stop.
```

**Completion gate:** The presenting-credit sequence and transition render with approved branding and copy, reconstruct correctly after transport operations, and preserve meaning without motion.

## Prompt 5 — Implement the TAS HQ emblem and Prologue handoff

```text
Execute approved Phase 2, Prompt 5 only.

Read BUILD_STATUS.md and preserve completed work. Implement the remaining approved Prologue visuals: TAS HQ emblem formation/system reveal, approved thesis or invitation copy, and the terminal handoff boundary. Use only the byte-identical approved TAS HQ logo copy. The final frame must clearly read as the end of the Prologue and must not simulate or implement Act I.

Compose the complete visual Prologue through the manifest, resolver, Director, and stage. Ensure seeking, skipping, pausing, restarting, visibility interruption, completion, and error recovery preserve correct scene lifecycle cleanup. Implement all approved quality-tier and reduced-motion states. Add integration coverage for the entire silent visual path and exact final boundary.

Do not add narration or sound playback in this prompt, and do not build exploration navigation or presentation acts.

Run validation, update BUILD_STATUS.md according to the sequence rules, then stop.
```

**Completion gate:** The complete silent visual Prologue is deterministic, reviewable end to end, accessible in reduced motion, and stops at a truthful unimplemented Act I boundary.

## Prompt 6 — Integrate approved audio, narration, and captions

```text
Execute approved Phase 2, Prompt 6 only.

Read BUILD_STATUS.md and preserve completed work. Inventory the actual approved audio files against the manifest before implementation. If required production audio has not been supplied or explicitly authorized, keep the visual Prologue functional, record the missing deliverable, and stop without synthesizing, licensing, downloading, or substituting media.

When approved assets exist, add a narrow browser media adapter that follows Director commands for prepare, play, pause, seek, interruption, resume, restart, completion, failure, and cleanup. The Director remains canonical; media drift correction must converge to Director time without creating a competing timeline. Respect browser autoplay rules with a deliberate user gesture and provide a clear muted or unavailable-audio path.

Implement captions from the approved transcript, including correct timing, semantic live behavior that does not spam assistive technology during seeks, caption visibility control, and readable responsive layout. Essential meaning must remain available when audio fails or is muted. Add deterministic adapter tests with fakes plus stage integration tests for sync, seeking, interruption, failure, and cleanup.

Run validation, update BUILD_STATUS.md according to the sequence rules, then stop.
```

**Completion gate:** Approved audio follows Director time and transport reliably; captions accurately preserve spoken meaning; the Prologue remains complete and usable when audio is blocked, muted, missing, or fails.

## Prompt 7 — Create the executive launch, playback, and fullscreen experience

```text
Execute approved Phase 2, Prompt 7 only.

Read BUILD_STATUS.md and preserve completed work. Replace the temporary developer-facing entry for the Prologue with a restrained executive launch state and minimal accessible playback controls required for begin, pause/resume, captions, audio state, restart, and exit from fullscreen. Keep seek and chapter-skip tools available only in an explicitly identified development mode unless the approved experience calls for them.

Request fullscreen only from an intentional user action. Treat denial, unsupported APIs, escape, focus loss, visibility changes, audio blocking, and runtime errors as normal recoverable states. Preserve keyboard operation, visible focus, semantic names, focus restoration, and readable status. Do not trap the user in fullscreen or hide the means to pause motion or expose captions.

Add integration tests for launch, autoplay-safe media start, keyboard controls, fullscreen adapter outcomes, visibility interruption, recovery, completion, and restart. Do not create website navigation, exploration mode, or Act I content.

Run validation, update BUILD_STATUS.md according to the sequence rules, then stop.
```

**Completion gate:** An executive can deliberately launch, understand, control, recover, and replay the Prologue with or without fullscreen, audio, pointer input, or motion.

## Prompt 8 — Visually verify, harden, and close Phase 2

```text
Execute approved Phase 2, Prompt 8 only.

Read BUILD_STATUS.md and audit every Phase 2 completion gate. Remove obsolete temporary Prologue scaffolding, dead code, warnings, and accidental complexity without disturbing Phase 1 systems. Confirm the Prologue manifest, treatment, runtime behavior, approved assets, captions, controls, quality tiers, reduced motion, and Act I boundary agree.

Run the complete automated quality suite, production build, dependency audit, secret scan, prohibited-architecture scan, and byte/hash comparison for both original/public logo pairs. Perform browser-based visual QA at representative desktop and laptop viewports and at least one narrow viewport. Verify launch, full playback, exact scene boundaries, pause, bidirectional seek in development mode, restart, completion, fullscreen success/failure, focus order, keyboard-only use, captions, muted/blocked/failed audio, visibility recovery, reduced motion, and all supported quality tiers. Capture a small, labeled QA evidence set for the opening, presenting credit, TAS HQ reveal, final handoff, and reduced-motion states; keep generated evidence out of production assets unless explicitly approved.

Record honest browser/platform coverage, asset provenance, known limitations, and remaining placeholders. Mark Phase 2 complete only if every gate passes and no completion claim depends on missing production media. Otherwise leave it in progress with exact remediation steps. Recommend a separate Phase 3 planning prompt; do not author Act I, exploration mode, commit, push, publish, or open a pull request unless explicitly authorized.

Update BUILD_STATUS.md according to the sequence rules, then stop.
```

**Completion gate:** The Prologue is a visually verified, accessible, resilient production slice; every production asset is approved and traceable; Phase 1 invariants remain intact; and no later presentation content has been implemented.

## Phase 2 exit criteria

Phase 2 is complete only when:

- the approved treatment, exact copy, narration policy, timing, and final handoff match the authored manifest;
- the Prologue manifest passes runtime validation and remains separate from rendering behavior;
- cue and scene state reconstruct deterministically from the Director at any timestamp;
- the GAC presenting credit uses only the preserved approved GAC logo;
- the TAS HQ reveal uses only the preserved approved TAS HQ logo;
- both logo originals and public copies remain byte-identical to the Phase 1 inventory;
- the complete Prologue works across essential, enhanced, and cinematic quality tiers without changing its message or timing;
- reduced motion preserves every essential state and avoids motion-dependent meaning;
- approved narration/audio, if required for completion, is provenance-recorded, synchronized, captioned, and failure-tolerant;
- the experience remains coherent when muted, autoplay-blocked, offline after load, interrupted, fullscreen-denied, or recovered from an error;
- executive controls are keyboard-operable, visibly focused, semantically labeled, and never trap the viewer;
- browser-based visual QA evidence covers representative viewports and critical normal, reduced-motion, and failure states;
- all automated checks and the production build pass without warnings introduced by Phase 2;
- `BUILD_STATUS.md` contains no false completion claims or hidden production placeholders;
- no Act I, later act, closing sequence, 3D environment, or exploration feature has been prematurely implemented.

## Approval record

- Approval date: 2026-07-21
- Approver: user/project owner
- Scope: all eight prompts authorized for sequential execution without intermediate approval stops
- Message and copy: approved exactly as recorded in `docs/PROLOGUE_TREATMENT.md`
- Duration: approved range 45–60 seconds; authored duration 54 seconds
- Narration: approved temporary script as metadata; final proprietary Onyx recording deferred; no synthetic substitute
- Audio: silent fallback required; final ambience, music, and voice assets not supplied
- Fonts: Phase 1 system stacks retained; no font dependency added
- Handoff: intentional `Act I` / `The Standard` completed hold; no Act I implementation
- Amendment: approval explicitly authorized continuing through every prompt instead of stopping after each one

Exact next action: complete Prompt 8 browser visual QA when an interactive browser backend is available, then close Phase 2 if every visual gate passes.

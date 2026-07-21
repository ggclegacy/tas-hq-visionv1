# TAS HQ Executive Vision Experience

## Phase 1 — Foundation Build Sequence

This document contains the complete Phase 1 build sequence for the **TAS HQ Executive Vision Experience**. Execute the prompts below **one at a time, in order**. Finish and verify each prompt before starting the next.

## Project identity

- Local project folder: `/Users/neil/Desktop/tas-hq`
- GitHub repository: `https://github.com/ggclegacy/tas-hq-visionv1.git`
- Approved project assets:
  - `/Users/neil/Desktop/tas-hq/gac-logo.png`
  - `/Users/neil/Desktop/tas-hq/tas-hq-logo.png`
- Product: a directed executive cinematic vision experience—not a website, slide deck, SaaS dashboard, or conventional clickable prototype.
- Phase scope: foundation only. Do not build the finished Prologue, presentation acts, product demonstrations, narration, 3D environments, or exploration mode in this phase.

## Rules for every prompt

1. Work only inside `/Users/neil/Desktop/tas-hq`.
2. Inspect the current repository and `BUILD_STATUS.md` before making changes.
3. Preserve all completed work. Extend the existing foundation; do not replace working systems or rewrite unrelated files.
4. Treat any previous TAS HQ project only as an asset, copy, component, design, or interaction reference. **Do not copy its architecture, directory structure, routing model, state model, or application shell.**
5. Use only the two approved logos from the project folder. Preserve their original files; never overwrite, distort, trace, or destructively modify them.
6. Keep the cinematic presentation runtime separate from the later free-exploration application shell.
7. Do not add features from later phases. Use restrained placeholders where a future system needs an integration point.
8. Keep dependencies minimal and justify every new production dependency.
9. Run the relevant validation after each change. Fix failures caused by the prompt before stopping.
10. At the end of every prompt, update `BUILD_STATUS.md` with:
    - prompt number and title;
    - status and completion date;
    - files created or changed;
    - validation performed and results;
    - decisions and assumptions;
    - known issues or deferred work;
    - exact recommended next prompt.
11. End each execution with a concise summary of what changed, validation results, and any blockers. Do not begin the next prompt automatically.

---

## Prompt 1 — Establish the clean project and repository

```text
Execute Phase 1, Prompt 1 only.

Inspect /Users/neil/Desktop/tas-hq and preserve gac-logo.png and tas-hq-logo.png. Establish this folder as the clean, independent TAS HQ Executive Vision Experience project. Connect it to https://github.com/ggclegacy/tas-hq-visionv1.git without overwriting remote or local work. If Git history or remote content already exists, inspect it and integrate safely; do not force-push, reset, delete, or commit unless explicitly authorized.

Create only the minimal project metadata and ignore rules needed for a modern TypeScript web experience. Do not scaffold application code yet. Create BUILD_STATUS.md with project identity, phase scope, repository details, asset inventory, completed prompts, decisions, risks, deferred work, and next action sections.

Verify the repository state, remote configuration, logo files, and absence of accidentally committed secrets or generated artifacts. Update BUILD_STATUS.md according to the sequence rules, then stop.
```

**Completion gate:** The folder is an independent, safely configured repository; both logo assets remain intact; `BUILD_STATUS.md` accurately records the baseline.

---

## Prompt 2 — Scaffold the minimal application foundation

```text
Execute Phase 1, Prompt 2 only.

Read BUILD_STATUS.md and inspect the existing repository first. Scaffold a minimal production-ready React and TypeScript application using the current stable Vite toolchain. Add only essential scripts for development, build, type checking, linting, formatting, and tests. Configure strict TypeScript, sensible linting, deterministic formatting, and a lightweight test runner.

Do not use a dashboard template, component kit, page-builder architecture, conventional multi-page website shell, or code from the previous TAS HQ project. Do not implement final visuals. Provide only a neutral full-viewport stage placeholder that proves the application mounts correctly.

Install dependencies, run all relevant checks, update BUILD_STATUS.md according to the sequence rules, then stop.
```

**Completion gate:** A clean full-viewport application starts and builds; type, lint, and test commands succeed; no later-phase experience has been implemented.

---

## Prompt 3 — Define repository boundaries and architecture

```text
Execute Phase 1, Prompt 3 only.

Read BUILD_STATUS.md and preserve all completed work. Create the lean source structure and architectural boundaries for a directed cinematic runtime. Separate presentation definition, director runtime, scene contracts, stage rendering, media, captions, controls, design system, shared utilities, and later exploration mode. Use clear public entry points and avoid speculative abstractions.

Add a concise architecture document explaining dependency direction and the rule that the Presentation Director is the single source of truth for canonical presentation state and time. Explicitly prohibit scene-owned global timers, scattered setTimeout choreography, route-driven presentation sequencing, and coupling between cinematic playback and exploration navigation.

Add placeholder modules only where needed to prove boundaries compile. Do not implement the director or final scenes yet. Run validation, update BUILD_STATUS.md according to the sequence rules, then stop.
```

**Completion gate:** The repository communicates firm module boundaries, compiles cleanly, and prevents the cinematic runtime from becoming a conventional website architecture.

---

## Prompt 4 — Create the visual foundation and asset pipeline

```text
Execute Phase 1, Prompt 4 only.

Read BUILD_STATUS.md and preserve all completed work. Establish semantic design tokens for the TAS HQ cinematic world: obsidian surfaces, controlled gold, apothecary green, warm ivory typography, machined-metal accents, architectural light, depth, spacing, motion durations, easing, and focus states. Implement tokens with CSS custom properties and typed references only where useful.

Create a restrained foundation-stage specimen for validating tokens; it must remain a test surface, not a finished Prologue or website landing page. Build a non-destructive asset pipeline for gac-logo.png and tas-hq-logo.png. Keep originals in place or copy them into an organized public asset location without altering the source files. Record dimensions, format, intended use, and accessibility treatment in an asset manifest. GAC is reserved for the presenting-credit sequence; TAS HQ is reserved for emblem formation, system reveal, and closing return.

Verify responsive scaling, no logo distortion, keyboard-visible focus, readable contrast, and a usable static reduced-motion state. Run validation, update BUILD_STATUS.md according to the sequence rules, then stop.
```

**Completion gate:** Semantic visual primitives and verified logo handling exist without prematurely designing the presentation.

---

## Prompt 5 — Define presentation contracts and manifest validation

```text
Execute Phase 1, Prompt 5 only.

Read BUILD_STATUS.md and preserve all completed work. Define strict TypeScript contracts for presentation metadata, acts, chapters, scenes, cues, narration tracks, captions, camera instructions, ambient audio, interface choreography, transitions, asset requirements, quality tiers, and reduced-motion alternatives.

Create a small sample manifest containing foundation test data only. Add runtime validation with actionable error messages for duplicate IDs, invalid or overlapping time ranges, missing references, unsupported cue types, absent reduced-motion fallbacks where required, and chapter duration inconsistencies. Keep authored presentation content data-driven and separate from runtime behavior.

Add focused tests for valid and invalid manifests. Do not author the nine acts or final narration. Run validation, update BUILD_STATUS.md according to the sequence rules, then stop.
```

**Completion gate:** Presentation content has a reliable, tested schema that can become the runtime’s canonical input.

---

## Prompt 6 — Build the Presentation Director state-machine shell

```text
Execute Phase 1, Prompt 6 only.

Read BUILD_STATUS.md and preserve all completed work. Implement the framework-agnostic shell of the Presentation Director as a deterministic state machine. Support the states idle, ready, playing, paused, seeking, interrupted, completed, and error. Define commands for prepare, begin, play, pause, resume, seek, skip chapter, restart, handle visibility interruption, recover, complete, and fail.

The director must own canonical presentation time and expose a subscribable read-only snapshot. Time-based effects must derive from the director clock, not independent scene timers. Inject the clock and media adapters so tests remain deterministic. Define lifecycle hooks for scene entry, update, exit, and cleanup. Do not add final audio, animation, fullscreen, or scene content.

Test valid transitions, rejected transitions, pause/resume continuity, seeking, chapter skipping, restart, interruption handling, cleanup, and completion. Run validation, update BUILD_STATUS.md according to the sequence rules, then stop.
```

**Completion gate:** A deterministic, tested Director shell exists as the single authority for playback state and time.

---

## Prompt 7 — Integrate the runtime with a temporary presentation stage

```text
Execute Phase 1, Prompt 7 only.

Read BUILD_STATUS.md and preserve all completed work. Connect the sample manifest and Presentation Director to the React stage through a narrow adapter. Render temporary scene labels and progress derived from director state. Add minimal developer-facing controls for begin, pause, resume, seek, skip chapter, and restart. These controls are scaffolding, not the executive-facing control design.

Add safe handling for document visibility changes and demonstrate that interruption pauses the experience rather than allowing the clock to drift. Add an error boundary and a restrained recovery state. Respect reduced-motion preference in the test stage. Do not request fullscreen, play audio, create final transitions, or implement exploration mode.

Add integration tests covering the main playback path and interruption recovery. Run validation, update BUILD_STATUS.md according to the sequence rules, then stop.
```

**Completion gate:** The temporary stage proves manifest-to-director-to-renderer flow and reliable interruption behavior.

---

## Prompt 8 — Harden, document, and close Phase 1

```text
Execute Phase 1, Prompt 8 only.

Read BUILD_STATUS.md and audit every Phase 1 completion gate. Remove accidental complexity, unused dependencies, dead placeholders, and warnings without disturbing completed systems. Confirm both original logos are preserved and correctly cataloged. Confirm the project contains no architecture copied from the previous TAS HQ app.

Create concise contributor documentation covering setup, commands, architectural boundaries, manifest authoring, director invariants, asset rules, accessibility baseline, reduced motion, quality-tier intent, and how future prompts must preserve completed work. Add an architecture decision record for the state-driven Presentation Director and the separation of presentation and exploration modes.

Run the complete quality suite and a production build. Record results and any honest limitations. Mark Phase 1 complete in BUILD_STATUS.md only if every gate passes; otherwise leave it in progress with exact remediation steps. Recommend the first Phase 2 prompt but do not begin Phase 2, commit, push, or open a pull request unless explicitly authorized. Update BUILD_STATUS.md according to the sequence rules, then stop.
```

**Completion gate:** Phase 1 is validated, documented, maintainable, and ready for the next surgical build sequence.

## Phase 1 exit criteria

Phase 1 is complete only when:

- the local project and GitHub remote are safely configured;
- both approved logo originals are intact and cataloged;
- the minimal application builds and passes its quality checks;
- cinematic and exploration boundaries are documented;
- design tokens and reduced-motion foundations exist;
- the presentation manifest is typed and runtime-validated;
- the Presentation Director shell is deterministic and tested;
- the temporary stage proves end-to-end runtime integration;
- interruption and recovery behavior is verified;
- `BUILD_STATUS.md` is current and contains no false completion claims;
- no Phase 2 feature has been prematurely implemented.

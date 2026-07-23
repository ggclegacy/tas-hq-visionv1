# TAS HQ Executive Vision Experience

## Production Bible

**Document role:** Master production playbook  
**Applies to:** Every future plan, build sequence, scene, act, system, asset, and release  
**Status:** Permanent governing document  

---

## 1. Purpose and authority

This document governs how the TAS HQ production standards are used together. It does not replace, summarize, or weaken the specialist Bibles. It turns them into one operating system for production.

The specialist Bibles define the approved creative languages:

- `docs/CINEMATIC_DIRECTION_BIBLE.md`
- `docs/PRODUCTION_ASSET_BIBLE.md`
- `docs/MOTION_BIBLE.md`
- `docs/INTERFACE_BIBLE.md`
- `docs/ONYX_BIBLE.md`

This Production Bible defines how work is conceived, specified, implemented, validated, documented, and committed while following those authorities.

No implementation phase may treat “premium,” “cinematic,” “futuristic,” or “executive” as permission to invent a new visual language. Those qualities must come from faithful use of the approved systems.

If a required Bible is absent, incomplete, or cannot be read, the implementer must report that fact. It must not silently invent replacement rules. Work may continue only where the remaining authorities and explicit phase instructions provide an unambiguous path.

---

## 2. Project mission and north star

### Mission

Create the definitive executive vision experience for TAS HQ: a directed cinematic film rendered through real software systems, built exclusively for Blair Vidrine, Bailey Soileau, and The Apothecary Shoppe.

The experience must honor what The Apothecary Shoppe has already built and reveal TAS HQ as an operating system for people—one that preserves knowledge, strengthens standards, supports leadership, and carries culture forward.

### North-star statement

> TAS HQ Executive Vision Experience is a continuous, premium executive film experienced through a browser. The Presentation Director reveals the value through authored shots, narration, sound, light, material, motion, and real interface demonstrations. The audience watches the story unfold; it is never asked to discover the story by navigating a website.

### Permanent product truths

- Story comes first; optional exploration comes after the directed experience.
- The Presentation Director is the single source of truth for sequence and canonical time.
- Scenes are authored as shots, not pages, slides, sections, or text cards.
- The world is continuous; acts do not feel like unrelated screens.
- Onyx is governed organizational intelligence and a digital coworker, not a generic chatbot.
- The Apothecary Shoppe is treated with respect, specificity, and executive-level restraint.
- Technology supports people and culture; it does not replace them.
- Reliability is part of the luxury standard.

### Definition of premium

Premium means disciplined hierarchy, controlled pacing, precise material and light behavior, readable typography, purposeful movement, confident restraint, and operational reliability. It does not mean more effects, more gold, more glow, more text, or more motion.

---

## 3. Creative authority hierarchy

Every contributor and every Codex build sequence must use the following conflict-resolution order.

### Level 1 — Explicit current human direction

The latest explicit instruction from Neil for the current task has highest authority, provided it does not require unsafe, destructive, illegal, or technically impossible action. A task-specific decision overrides general defaults only for the stated scope.

### Level 2 — Production Bible

This document governs workflow, required inputs, architecture preservation, validation, documentation, performance, and completion.

### Level 3 — Domain authority

For domain-specific decisions, the relevant specialist Bible is authoritative:

- Cinematic intent, composition, camera, lighting philosophy, narrative economy, and overall creative standard: `CINEMATIC_DIRECTION_BIBLE.md`
- Materials, environment objects, asset formats, production color tokens, lighting assets, and quality tiers: `PRODUCTION_ASSET_BIBLE.md`
- Timing, easing, physics, transitions, camera motion, logo choreography, and environmental motion: `MOTION_BIBLE.md`
- Product interface layout, components, interaction states, responsive UI, and interface visual grammar: `INTERFACE_BIBLE.md`
- Onyx identity, language, narration, voice, behavior, source transparency, uncertainty, and escalation: `ONYX_BIBLE.md`

These domain authorities are peers. One specialist Bible must not be used to overrule another outside its domain.

### Level 4 — Architecture and authoring references

- `docs/ARCHITECTURE.md`
- `docs/CINEMATIC_PRODUCTION_ARCHITECTURE.md`
- `docs/SHOT_AUTHORING.md`
- accepted architecture decision records in `docs/adr/`

These govern implementation details where they do not conflict with the Production Bible or a specialist Bible.

### Level 5 — Phase treatment and build sequence

An approved act treatment and current build-sequence document define the immediate scope, story beats, deliverables, and execution order. They may specialize the permanent rules but may not silently contradict them.

### Level 6 — Existing implementation

Existing code is evidence of the current state, not automatic creative authority. Preserve working architecture and approved systems. Weak visuals, temporary copy, duplicated patterns, and website-like implementation are not protected merely because they already exist.

### Conflict protocol

When guidance conflicts:

1. Identify the exact conflict and affected domain.
2. Apply the hierarchy above.
3. Prefer the narrowest authoritative instruction.
4. Preserve runtime integrity and accessibility.
5. Record any material interpretation in the phase completion report and, when architectural, in an ADR.
6. Ask for human direction only when the hierarchy cannot resolve a decision that would materially change creative intent, architecture, cost, or scope.

---

## 4. Repository standards

### 4.1 Canonical organization

Use the repository’s established structure. Do not reorganize the project during a feature phase unless the phase explicitly authorizes an architectural migration.

```text
docs/
  PRODUCTION_BIBLE.md
  CINEMATIC_DIRECTION_BIBLE.md
  PRODUCTION_ASSET_BIBLE.md
  MOTION_BIBLE.md
  INTERFACE_BIBLE.md
  ONYX_BIBLE.md
  BUILD_STATUS.md
  adr/
  build-sequences/

src/
  captions/
  controls/
  design-system/
  director/
  exploration/
  media/
  presentation/
  scenes/
  shared/
  stage/
```

New folders must have a distinct responsibility. Do not create vague buckets such as `misc`, `new`, `temp-components`, or `helpers2`.

### 4.2 Dependency boundaries

- The director owns presentation state, canonical time, lifecycle, playback, pause, resume, seek, skip, completion, and interruption recovery.
- Manifests describe authored timing and cues; they do not render UI.
- Scenes render deterministic state from director time; they do not become independent clocks.
- Stage and environment systems provide reusable cinematic layers.
- Design-system components provide approved tokens and primitives.
- Media and caption systems remain replaceable, synchronized, and independently testable.
- Exploration mode remains separate from the directed presentation runtime.

Do not create circular dependencies or let scene components reach into unrelated systems to control global sequence state.

### 4.3 Naming standards

- Use descriptive names tied to narrative or system responsibility.
- Use stable act, chapter, scene, shot, and cue identifiers.
- Do not encode temporary ordering in an identifier if the identity should survive editorial changes.
- Prefer domain names such as `actOneStandard`, `onyxEscalation`, or `tasHqReveal` over visual guesses such as `greenScreen2`.
- Use the established project casing and file conventions in the surrounding directory.
- Reusable tokens and authored vocabulary must use existing names before new variants are introduced.

### 4.4 Manifest standards

Every act or chapter manifest must:

- have stable identifiers;
- declare total and shot-level timing intentionally;
- reference approved scene and transition vocabulary;
- remain deterministic under pause, seek, replay, and chapter skip;
- include narration and caption timing hooks where required;
- declare viewport and quality-tier behavior when it materially differs;
- avoid hidden component-level delays;
- validate before it is connected to the production runtime.

Timing must not be duplicated across manifests, React components, CSS delays, and arbitrary timers.

### 4.5 Asset organization

- Preserve the official `gac-logo.png` and `tas-hq-logo.png` artwork.
- Follow `PRODUCTION_ASSET_BIBLE.md` for naming, metadata, formats, preparation, reuse, quality tiers, and budgets.
- Keep source, production, and fallback assets distinguishable.
- Store only assets the project has permission to use.
- Do not add commercial fonts, music, video, stock imagery, or third-party artwork without documented rights.
- Prefer parameterized reuse over near-duplicate assets.
- Optimize assets before production use; do not rely on the browser to correct oversized source files.
- Every heavyweight asset must have an intentional loading strategy and a graceful fallback.

### 4.6 Documentation expectations

Documentation must describe the current system, not an imagined future state. Update the relevant document in the same phase when behavior, contracts, manifests, or production rules change.

Use an ADR for durable architectural decisions that change dependency direction, state ownership, timing ownership, rendering strategy, or mode separation.

Do not rewrite permanent Bibles from within an implementation phase unless the task explicitly authorizes that change.

---

## 5. Production workflow

Every new act, chapter, reconstruction, or major system follows this workflow.

### Gate 1 — Orientation

Read this Production Bible and every required specialist Bible in full. Read the relevant architecture references, current treatment, current build sequence, `BUILD_STATUS.md`, manifests, and affected implementation.

Confirm:

- current branch and working-tree state;
- existing user changes that must be preserved;
- scope boundaries;
- required assets and their availability;
- current runtime and quality-tier behavior;
- unresolved dependencies or temporary systems.

### Gate 2 — Concept and narrative intent

Define the audience emotion, story purpose, essential message, and reason the sequence exists. Remove any beat that merely repeats narration as on-screen text.

### Gate 3 — Treatment and editorial plan

Define the chapter arc, narration, selective on-screen copy, intended runtime, visual storytelling strategy, and entry/exit relationship with adjacent chapters.

### Gate 4 — Shot design

Create the mandatory scene production contract in Section 6. Plan shots, not screens. Establish visual hierarchy, camera continuity, lighting evolution, environmental behavior, and transition overlap before implementation.

### Gate 5 — Technical reconciliation

Map the treatment to existing director, stage, scene, media, caption, design-system, and quality-tier capabilities. Identify what can be reused and what needs a new reusable primitive.

Do not solve a missing system with one-off scene logic if it will recur.

### Gate 6 — Implementation

Implement in small, coherent increments while preserving canonical timing and runtime controls. Integrate approved systems before adding detail. Build the Essential tier first, then Enhanced and Cinematic enhancements.

### Gate 7 — Functional validation

Validate build, lint, types, tests, manifest integrity, playback, pause, resume, seek, replay, chapter skip, tab interruption, audio failure, captions, reduced motion, and completion behavior as applicable.

### Gate 8 — Performance and responsive validation

Test target viewports and quality tiers. Measure rather than assume. Apply the optimization workflow in Section 11.

### Gate 9 — Cinematic review

Evaluate the rendered experience as a film:

- Is the first meaningful beat immediate?
- Does the world remain alive?
- Is there one dominant idea per beat?
- Does camera and light motivate each reveal?
- Is copy concise and specific?
- Do transitions overlap into one continuous world?
- Does any shot feel like a website, title card, or loading state?

Codex performs technical and rule-based checks. Neil performs final subjective visual approval unless explicitly delegated.

### Gate 10 — Documentation and handoff

Update `docs/BUILD_STATUS.md`, affected treatments, manifests, authoring guidance, tests, and ADRs. Report completed scope, changed files, validation results, measured performance, known limitations, and next dependencies.

---

## 6. Mandatory scene production pipeline

No scene may enter implementation without the following contract. It may live in an approved treatment, shot manifest, or phase document, but every field must be explicit.

### 6.1 Identity

- Act, chapter, scene, and shot IDs
- Human-readable title
- Owner or implementing phase
- Status: proposed, approved, implementing, validation, or complete

### 6.2 Objective

State what changes for the audience by the end of the scene. The objective must be narrative, not merely “show the logo” or “display text.”

### 6.3 Emotion

Define the entry emotion, intended emotional turn, exit emotion, and corresponding motion language.

### 6.4 Narration and on-screen copy

Provide:

- final or explicitly temporary narration;
- caption text and timing requirements;
- pronunciation notes;
- maximum on-screen copy;
- the reason each visible phrase must be read rather than only heard.

Narration and visible copy must complement one another, not duplicate entire passages.

### 6.5 Shot list

For every shot define:

- framing and composition;
- foreground, midground, and background;
- hero subject;
- dominant visual action;
- duration;
- entry state;
- exit state;
- quality-tier variation;
- mobile composition variation.

### 6.6 Camera plan

Define lens character, camera position, movement, speed, parallax, focus behavior, settle, and continuity into the next shot. Camera movement must be motivated and must follow `MOTION_BIBLE.md`.

### 6.7 Lighting plan

Define key, rim, intelligence, significance, atmosphere, shadow, and any transition-driven light behavior using approved lighting vocabulary. State what remains hidden and what the lighting reveals.

### 6.8 Asset list

List every logo, image, video, model, texture, font, sound, interface fixture, and fallback. Identify source, rights status, format, expected size, preload priority, quality tiers, and reuse path.

### 6.9 Runtime budget

Define:

- scene and shot duration;
- first meaningful visual deadline;
- reading-time allowance;
- transition overlap;
- maximum intentional stillness;
- render and asset budgets;
- quality-tier targets.

Any hold long enough to resemble a freeze must be shortened or supplied with legible environmental progression.

### 6.10 Transition plan

Define the narrative, camera, environmental, lighting, motion, sound, and state handoff into and out of the scene. Adjacent scenes should share visual material or movement whenever appropriate so the world does not reset.

### 6.11 Validation checklist

Include scene-specific acceptance criteria for:

- narrative clarity;
- cinematic composition;
- copy and caption accuracy;
- deterministic timing;
- seek and replay behavior;
- desktop, mobile, and reduced motion;
- Essential, Enhanced, and Cinematic tiers;
- performance;
- audio-disabled fallback;
- accessibility;
- clean entry and exit transitions.

---

## 7. Codex operating rules

Future Codex instructions must enforce these rules.

### Read before acting

Codex must read this document, all specialist Bibles, the relevant phase sequence, current `BUILD_STATUS.md`, architecture references, and affected files before implementation. A summary from an earlier conversation is not a substitute for reading the repository sources.

### Preserve ownership and architecture

- Preserve the Presentation Director as the owner of canonical time and sequence.
- Preserve pause, resume, restart, seek, skip, interruption recovery, captions, reduced motion, and completion behavior.
- Preserve separation between presentation mode and exploration mode.
- Do not replace deterministic state with scattered timers, CSS-delay choreography, or component-owned timelines.
- Do not rebuild the repository or replace proven infrastructure merely to change visuals.

### Reuse before invention

- Reuse approved tokens, primitives, scene systems, environment systems, transitions, motion curves, interface components, and asset families.
- Extend reusable systems when a genuine capability is missing.
- Do not create near-duplicate colors, easings, materials, cards, logo treatments, camera moves, or environmental effects.
- Search the repository before adding a new abstraction.

### Do not invent a new language

Codex must not invent unapproved:

- color or gold treatments;
- typography systems;
- motion physics or easing families;
- logo behavior;
- material or lighting vocabulary;
- interface grammar;
- Onyx personality, facts, citations, or voice direction;
- architectural ownership rules.

If existing authorities do not cover a material decision, state the gap and propose a narrowly scoped addition for approval.

### Never regress to website patterns

Prohibited defaults include:

- text-card slideshows;
- one statement per blank screen;
- repeated centered heading stacks;
- repeated bottom-left copy layouts;
- static logos placed over gradients;
- flat backgrounds presented as environments;
- full-scene fade-out followed by full-scene fade-in;
- generic SaaS dashboards, card grids, hero sections, carousels, and navigation patterns;
- decorative particles, glow, glass, rotation, or camera drift without narrative purpose;
- long dead holds that resemble loading or failure.

### Scope and autonomy

When a build-sequence document grants permission to execute all prompts, Codex should execute them in order without pausing for routine approval or waiting for Neil’s visual inspection. It must stop only for a true blocker, missing required authority or credential, destructive ambiguity, or a decision that materially changes approved intent or scope.

Autonomy does not authorize unrelated refactors, new acts, external publication, licensed asset acquisition, destructive Git operations, or changes outside the phase.

### Working-tree safety

- Inspect Git status before editing.
- Treat pre-existing changes as Neil’s work.
- Do not discard, overwrite, reformat, stage, or commit unrelated changes.
- Make the smallest coherent change set that completes the phase.
- Never use destructive Git recovery commands without explicit permission.

---

## 8. Implementation quality gates

A phase is not complete until every applicable gate passes or a limitation is explicitly documented.

### 8.1 Architecture gate

- Director remains the single source of truth.
- Dependency direction remains valid.
- Scene timing is deterministic.
- New reusable capabilities have clear ownership.
- No temporary hack becomes an undocumented production dependency.

### 8.2 Runtime gate

- Clean start and Begin threshold work.
- Playback completes in order.
- Pause and resume remain synchronized.
- Seek, replay, and chapter skip resolve to valid states.
- Tab interruption recovery is deliberate.
- Missing or failed audio does not break the experience.
- Captions remain synchronized.
- End-state and next-act handoff are intentional.

### 8.3 Cinematic gate

- The sequence reads as shots within one world.
- Visual storytelling carries the majority of meaning.
- Typography is selective, legible, and compositionally intentional.
- Logos behave as integrated hero artifacts.
- Environment, material, lighting, and motion follow their Bibles.
- No shot reads as a generic website, title card, or placeholder.
- Pacing has no accidental dead time.

### 8.4 Interface gate

- Interface content is real enough to communicate value.
- Camera and lighting discover the interface; the film does not abruptly become a webpage.
- UI hierarchy, spacing, components, and states follow `INTERFACE_BIBLE.md`.
- Interaction demonstrations are deterministic and do not require executive input.

### 8.5 Responsive gate

- Mobile portrait is intentionally composed, not merely scaled down.
- Tablet and older-laptop layouts preserve meaning and readability.
- Desktop and executive-display layouts use scale and depth without excessive density.
- Safe areas, captions, controls, and touch targets remain usable.

### 8.6 Accessibility gate

- Reduced motion preserves narrative meaning and control.
- Captions are accurate, readable, and available.
- Contrast and text sizing meet project requirements.
- Keyboard and focus behavior work for all controls.
- Meaning is not communicated by color, sound, or motion alone.

### 8.7 Performance gate

- All required quality tiers function.
- The Essential tier remains complete and dignified.
- Loading behavior never resembles a frozen presentation.
- Measurements satisfy the budgets in the controlling specialist Bibles or documented phase targets.
- No avoidable oversized assets, retained scenes, runaway effects, or duplicate render loops remain.

### 8.8 Engineering gate

- Required build, type, lint, and test commands pass.
- Manifests validate.
- Browser console has no new production errors.
- New warnings are resolved or documented with justification.
- Tests cover new deterministic behavior in proportion to risk.

---

## 9. Documentation maintenance

### `docs/BUILD_STATUS.md`

Update `docs/BUILD_STATUS.md` after each completed prompt or coherent milestone in an autonomous build sequence. Each update must include:

- date and phase;
- completed work;
- files or systems affected;
- validation performed and results;
- current runtime or timing changes;
- known limitations and temporary assets;
- unresolved dependencies;
- exact next step.

Do not mark a phase complete when required validation, assets, or handoff behavior remain unfinished.

### Other required updates

- Update act treatments when the implemented narrative changes.
- Update shot manifests when timing, IDs, copy, or transitions change.
- Update architecture documentation when responsibilities change.
- Add an ADR for durable architectural decisions.
- Update authoring documentation when a new reusable production primitive is introduced.
- Keep temporary narration, assets, and fallbacks explicitly labeled.

Documentation updates are part of implementation, not optional cleanup.

---

## 10. Git workflow and commit standards

### Before implementation

1. Confirm the current branch.
2. Inspect the working tree.
3. Identify pre-existing user changes.
4. Confirm the phase’s intended branch and push target from repository state or explicit instruction; do not assume a branch exists.

### During implementation

- Keep phase changes scoped.
- Do not mix unrelated formatting or cleanup with production work.
- Never amend or rewrite user commits without explicit permission.
- Do not stage unrelated changes.
- Do not push unless the current task explicitly authorizes it.

### Commit standard

Commits should communicate the production outcome, not the tool or prompt used. Use imperative, scoped messages such as:

```text
Reconstruct Prologue as a continuous cinematic sequence
Add deterministic Act III shot choreography
Optimize cinematic environment quality tiers
Document TAS HQ production workflow
```

Avoid vague messages such as `updates`, `fix stuff`, `phase changes`, or `Codex work`.

### Phase handoff

At the end of an authorized implementation phase, report:

- current branch;
- commit status;
- changed files;
- validation results;
- exact commit and push commands appropriate to the verified branch;
- whether the push will create a preview or production deployment, if known.

Never claim work is on a feature branch without verifying it.

---

## 11. Performance budgets and optimization workflow

Neil’s older Mac is a primary development and review constraint. It changes the production strategy, not the creative ambition.

### Performance principles

- Build a complete Essential experience first.
- Add Enhanced and Cinematic layers progressively.
- Prefer authored 2D, SVG, DOM, compositing, and optimized pre-rendered media when real-time 3D does not materially improve the shot.
- Reserve WebGL for signature depth and transitions that justify its cost.
- Do not keep invisible scenes, videos, canvases, observers, or animation loops alive.
- Load the next required assets before they are visible, but do not preload the entire film indiscriminately.
- Make fallbacks intentional and visually consistent.

### Runtime targets

The exact numeric budgets in `PRODUCTION_ASSET_BIBLE.md` and `MOTION_BIBLE.md` control. At minimum:

- target smooth playback at the selected tier;
- prevent sustained main-thread stalls;
- prevent layout shifts during authored playback;
- bound memory growth across chapter transitions and replay;
- keep initial payload and first meaningful visual within the approved project budgets;
- avoid dropped-frame clusters during hero reveals and transitions;
- maintain control responsiveness during all effects.

### Optimization order

When a scene misses budget, optimize in this order:

1. Measure and identify the actual bottleneck.
2. Remove duplicate work, retained offscreen systems, and unnecessary re-renders.
3. Reduce asset dimensions, bitrates, texture sizes, and decode cost.
4. Simplify effect density, particle counts, blur, shadows, reflection layers, and compositing passes.
5. Lower update frequency or replace continuous work with time-derived state.
6. Substitute pre-rendered media or a lighter approved technique.
7. Reduce quality tier while preserving composition, story, legibility, and timing.

Do not begin by stripping the hero subject, flattening the environment, or replacing authored motion with generic fades.

### Required test matrix

- Neil’s older Mac at Essential and its selected automatic tier
- mobile portrait at Essential
- representative tablet or narrow laptop layout
- desktop/executive display at Enhanced or Cinematic where supported
- reduced-motion mode
- audio-disabled or audio-failure mode
- replay after full completion
- tab hide and resume during a transition

Record device/browser context, tier, observed result, and any measurement used for approval.

---

## 12. Phase completion review checklist

Before declaring any phase complete, confirm all applicable items.

### Authority and scope

- [ ] Production Bible and all specialist Bibles were read.
- [ ] Required source files and current repository status were inspected.
- [ ] Work remained within the authorized phase.
- [ ] No existing user changes were overwritten or included unintentionally.
- [ ] Any authority gap or conflict was resolved and documented.

### Story and shots

- [ ] Every scene has the mandatory production contract.
- [ ] Every shot has a clear objective and emotional function.
- [ ] Narration and visible copy complement rather than duplicate each other.
- [ ] Copy is specific, concise, accurate, and appropriate to The Apothecary Shoppe.
- [ ] The sequence contains no unnecessary text-only screens.
- [ ] Runtime and holds feel deliberate.

### Cinematic execution

- [ ] The sequence feels like one continuous world.
- [ ] Camera, light, environment, and sound motivate reveals.
- [ ] Foreground, midground, and background create depth where appropriate.
- [ ] Logos are premium integrated artifacts, not static PNG placements.
- [ ] Materials, green, gold, ivory, shadow, and reflections follow approved systems.
- [ ] Motion has weight, hierarchy, and resolution.
- [ ] Transitions overlap and preserve continuity.
- [ ] No generic website, SaaS, slideshow, gaming, or cyberpunk pattern remains.

### Runtime and quality

- [ ] Director ownership and deterministic timing are preserved.
- [ ] Start, playback, pause, resume, seek, replay, skip, and completion work.
- [ ] Tab interruption and recovery work.
- [ ] Captions and audio fallback work.
- [ ] Reduced motion preserves meaning.
- [ ] Mobile, tablet, older Mac, desktop, and executive display were validated as applicable.
- [ ] Essential, Enhanced, and Cinematic tiers degrade gracefully.
- [ ] Performance was measured and meets the controlling budgets.

### Engineering and handoff

- [ ] Build, types, lint, tests, and manifest validation pass as applicable.
- [ ] No new production console errors remain.
- [ ] `docs/BUILD_STATUS.md` is current.
- [ ] Treatments, manifests, authoring guides, and ADRs are current.
- [ ] Temporary assets and remaining dependencies are clearly labeled.
- [ ] Completion report lists changed files and validation results.
- [ ] Git guidance is based on the verified current branch.
- [ ] Neil’s visual inspection is identified as pending when it has not occurred.

Passing automated checks does not equal creative approval. A phase is technically complete only after its gates pass; it is visually approved only after Neil accepts the rendered experience or explicitly delegates that decision.

---

## 13. Required instruction for every future build sequence

Every future build-sequence document must begin with an instruction equivalent to the following:

> Before making changes, read `docs/PRODUCTION_BIBLE.md`, `docs/CINEMATIC_DIRECTION_BIBLE.md`, `docs/PRODUCTION_ASSET_BIBLE.md`, `docs/MOTION_BIBLE.md`, `docs/INTERFACE_BIBLE.md`, and `docs/ONYX_BIBLE.md` in full. Also read the relevant architecture references, treatment, manifests, and `docs/BUILD_STATUS.md`. Treat the Production Bible as the master operating manual and each specialist Bible as the authority for its domain. Do not implement changes until these sources and the current repository state have been inspected.

Every build sequence must also state:

- its exact scope and prohibited scope;
- the source treatment and mandatory scene contracts;
- whether it grants autonomous execution of all prompts;
- that routine validation does not require an approval pause;
- that Neil will perform final visual inspection unless explicitly delegated;
- the true blockers that justify stopping;
- required quality gates and test matrix;
- required `BUILD_STATUS.md` updates;
- required completion report;
- whether committing or pushing is authorized.

A build sequence may be autonomous without being vague. The more autonomy it grants, the more precisely it must define scope, authority, acceptance criteria, and stop conditions.

---

## 14. Final production standard

TAS HQ must never become a long collection of branded screens merely because the runtime works. It must remain a directed cinematic experience in which technology, architecture, motion, light, narration, sound, and real interfaces form one coherent world.

The Production Bible exists to prevent drift:

- from film back to website;
- from authored motion back to generic animation;
- from governed intelligence back to chatbot convention;
- from reusable systems back to one-off effects;
- from measured performance back to hope;
- from explicit completion gates back to subjective claims of “done.”

Every phase must strengthen the same production—not start a different one.

The standard is met when the experience feels inevitable: emotionally precise, visually advanced, operationally reliable, unmistakably TAS HQ, and worthy of The Apothecary Shoppe.

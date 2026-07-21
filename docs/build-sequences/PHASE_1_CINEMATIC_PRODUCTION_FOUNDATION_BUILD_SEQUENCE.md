# TAS HQ Executive Vision Experience

## Phase 1 — Cinematic Production Foundation and Prologue Vertical Slice

**Document status:** Authorized for complete autonomous execution by Neil.

This is the first production sequence after the repository orientation brief. It converts the existing technically sound but visually basic Prologue into a reusable, shot-driven cinematic system. It does **not** restart the repository, replace the Presentation Director, or build the full nine-act experience.

---

## Execution authorization — read before doing anything

Neil has already authorized Codex to execute this **entire document**, from Prompt 1 through Prompt 8, in order.

Codex must:

1. Read this entire document before changing any file.
2. Inspect the current repository, Git status, architecture, manifests, tests, treatments, and build-status record before implementation.
3. Execute every prompt in order from start to finish.
4. Continue automatically to the next prompt after the current prompt's automated checks pass.
5. Fix errors introduced during the phase and rerun the relevant checks before continuing.
6. Update `docs/BUILD_STATUS.md` after every prompt. If the repository still uses root `BUILD_STATUS.md`, migrate that canonical record to `docs/BUILD_STATUS.md` during Prompt 1, update references, preserve all history, and do not maintain two competing status files.
7. Finish the complete phase before returning a final report.

Codex must **not**:

- stop after Prompt 1;
- ask Neil to approve each prompt, treatment detail, implementation detail, or intermediate result;
- use “stop and wait,” “execute this prompt only,” or any equivalent approval gate;
- require Neil to perform visual QA before proceeding;
- pause because a subjective creative choice could be refined later;
- commit, push, publish, deploy, rewrite Git history, or open a pull request during this sequence.

Neil will perform the subjective visual inspection after the full sequence is complete. Codex is responsible for implementation, automated checks, deterministic browser/runtime checks available in its environment, and honest reporting. Codex must not claim Neil's visual approval or make subjective final-quality claims on his behalf.

Codex may stop before Prompt 8 only for a true blocker:

- a required credential is missing and no safe local fallback exists;
- a required file or approved asset is absent and the work cannot be completed with an explicit replaceable placeholder;
- a destructive ambiguity could overwrite or delete user work and cannot be resolved through read-only inspection or a safe additive approach;
- the repository is corrupted or technically unusable in a way that prevents continued work.

A missing optional audio track, unavailable browser automation, an unmade aesthetic preference, or a deferred final asset is **not** a blocker. Record it, implement the safe fallback or hook, and continue.

---

## Project identity

- Local repository: `/Users/neil/Desktop/tas-hq`
- GitHub repository: `https://github.com/ggclegacy/tas-hq-visionv1.git`
- Product: **TAS HQ Executive Vision Experience**
- Audience: Blair Vidrine and Bailey Soileau of The Apothecary Shoppe
- Presenting organization: Gent Ascend Collective
- Approved logo originals:
  - `/Users/neil/Desktop/tas-hq/gac-logo.png`
  - `/Users/neil/Desktop/tas-hq/tas-hq-logo.png`

This is a directed executive film experienced through a browser. It is not a website, landing page, slide deck, SaaS dashboard, conventional product tour, or collection of animated sections.

The production target is a fusion of:

- luxury automotive reveal;
- premium medical architecture;
- advanced aerospace intelligence;
- Apple-level restraint;
- executive keynote precision;
- a real-time cinematic product film.

The visual world uses obsidian, machined graphite, controlled dimensional gold, apothecary green, warm ivory, dark glass, architectural shadow, restrained internal illumination, and material depth. Avoid generic corporate motion, centered logo-and-copy stacks, decorative sci-fi HUDs, gaming aesthetics, neon cyberpunk, random particles, excessive bloom, and effects without narrative purpose.

---

## Phase objective

Preserve the correct runtime foundation and replace the website-like presentation layer with a reusable cinematic production architecture.

By the end of this phase, the default experience must contain one upgraded Prologue vertical slice driven by authored shots, continuous environmental state, camera/framing intent, layered depth, viewport-aware composition, purposeful transitions, and the existing Director clock.

The Prologue remains the proof slice. This phase establishes the systems future acts will reuse; it does not attempt to finish the film.

---

## Preserve, replace, and defer

### Preserve

Preserve unless inspection proves a narrowly scoped correction is necessary:

- Git repository and history;
- deployment and project configuration;
- Presentation Director state machine and canonical clock;
- pause, resume, restart, seek, chapter skip, interruption recovery, completion, and cleanup behavior;
- presentation manifests, validation, deterministic frame resolution, and useful tests;
- audio and caption integration hooks;
- accessibility and reduced-motion foundations;
- quality-tier concept;
- separation between cinematic presentation and future exploration mode;
- root logo originals and byte-identical public copies;
- approved Prologue copy and truthful Act I handoff;
- developer controls behind `?debug` or an equivalent development-only mechanism.

### Replace or refactor

Replace or refactor the current visual patterns that make the Prologue feel like an animated webpage:

- repeated centered logo-and-copy compositions;
- flat or nearly static backgrounds;
- simple opacity fades used as the dominant transition language;
- scene-as-screen rendering;
- typography pasted over a background rather than composed within a shot;
- one-size-fits-all responsive scaling;
- decorative motion without camera, material, lighting, or narrative intent;
- visual logic that cannot reconstruct the correct frame after seek or interruption.

### Do not build yet

Do not build:

- final Acts I–IX;
- Daily Headquarters, Onyx, Knowledge, Training, or Leadership product demonstrations;
- free exploration mode;
- live AI, live ElevenLabs calls, or network-dependent presentation content;
- final proprietary Onyx narration;
- a full real-time 3D world or an Unreal-style rendering pipeline;
- a generic component library or dashboard design system;
- a content-management system;
- production analytics, authentication, databases, or back-office tools;
- unlicensed fonts, music, footage, models, textures, or sound effects.

---

## Non-negotiable architecture rules

1. The Presentation Director remains the single authority for canonical presentation state and time.
2. Shots and visual layers derive their state from the validated manifest plus Director snapshot.
3. Do not introduce scene-owned global clocks, scattered `setTimeout` choreography, route-driven sequencing, or animation callbacks that decide narrative progression.
4. Imperative animation libraries may render toward an authored state, but they must not become the source of truth. Seeking directly to an arbitrary timestamp must reconstruct the intended frame without replaying earlier shots.
5. Authored shot data stays separate from rendering behavior.
6. Cinematic playback and future exploration remain separate modes.
7. Accessibility, captions, reduced motion, transport recovery, and graceful silent playback remain functional.
8. The default route shows the cinematic experience. Debug tools remain hidden unless explicitly enabled.

---

## Performance and device rules

Neil develops on an older Mac. The implementation must pursue cinematic quality through efficient composition rather than brute-force rendering.

- Prefer GPU-friendly transforms, opacity, masks, gradients, compositing, responsive images, SVG, and carefully bounded effects.
- Use DOM/SVG for typography and readable content.
- Add WebGL/Three.js only when a measured hero requirement cannot be achieved reliably with the existing stack. Do not add it speculatively in this phase.
- Support `essential`, `enhanced`, and `cinematic` quality tiers with the same message, timing, and shot order.
- Essential must remain visually intentional, not look like a broken version of cinematic.
- Pause or sharply reduce nonessential environmental work when hidden, paused, outside the active shot, or under reduced motion.
- Avoid unbounded particle counts, full-screen high-radius blur animation, multiple large video decoders, huge canvas backing stores, and permanent high-frequency loops.
- Do not add heavyweight production dependencies without documenting the concrete need, bundle impact, and fallback.
- Preserve a fast development loop on the older Mac and a reliable production build.

Mobile portrait is a first-class authored composition. Do not merely shrink the desktop frame. Shot definitions must support intentional changes in crop, focal point, text region, depth, logo scale, safe areas, and motion intensity for mobile portrait, tablet/laptop, and executive desktop/display.

---

## Git and workspace hygiene

- Work only inside `/Users/neil/Desktop/tas-hq`.
- Inspect `git status` before changes and after every prompt.
- Preserve all pre-existing user changes; do not overwrite unrelated work.
- Do not use destructive Git commands, force operations, broad deletion, or history rewriting.
- Do not commit, push, deploy, or open a pull request.
- Do not modify either root logo original.
- Do not add secrets, credentials, generated build output, large speculative assets, or downloaded unlicensed media.
- Keep each prompt's changes cohesive and record them in `docs/BUILD_STATUS.md`.
- Formatting-only churn unrelated to the phase is prohibited.

---

## Required status entry after every prompt

After each prompt, append or update a clearly labeled entry in `docs/BUILD_STATUS.md` containing:

- phase and prompt number;
- status and completion date;
- concise outcome;
- files created, changed, moved, or removed;
- checks run and their exact result;
- architecture and creative decisions made;
- performance and accessibility considerations;
- honest limitations, deferred assets, or follow-up dependencies;
- the next prompt that Codex will execute automatically.

Do not mark a prompt complete when its completion gate has not passed. If a nonblocking limitation remains, document it and continue.

---

## Prompt 1 — Audit, baseline, and formalize the cinematic production contract

Inspect the complete repository before editing. Read the current architecture, all build sequences, Prologue treatment, production manifests, Director, frame resolver, stage, styles, tests, assets, Git state, and status record.

Create a concise cinematic production architecture document that records:

- the current systems being preserved;
- the visual implementation being superseded;
- dependency direction from manifest to Director snapshot to resolved shot frame to stage layers;
- the difference between a scene, a shot, a layer, a camera/framing state, and a transition;
- the deterministic seek/replay requirement;
- viewport composition and quality-tier responsibilities;
- reduced-motion and accessibility requirements;
- the rule that final subjective visual acceptance belongs to Neil after phase completion.

If the canonical status file is still root `BUILD_STATUS.md`, move it to `docs/BUILD_STATUS.md` with history intact and update repository references. Do not leave a duplicate status authority.

Record a baseline of existing automated checks, bundle output, logo hashes, and current Git state. Do not alter the visible Prologue in this prompt.

Run formatting check, typecheck, lint, tests, and production build. Update `docs/BUILD_STATUS.md`, then continue automatically.

**Completion gate:** The repository has one canonical status record, a clear cinematic production contract, an honest baseline, and no visible experience change.

---

## Prompt 2 — Extend authored contracts from scenes to deterministic shots

Extend the existing data-only presentation contracts and validation only as required to express cinematic shots. Preserve backward compatibility where practical and migrate current Prologue data cleanly where necessary.

The shot model must be able to author:

- stable IDs, parent scene/chapter references, and absolute time ranges;
- emotional or narrative intent;
- camera/framing state, focal subject, focal-point bias, scale/depth intent, and optional lens-language metadata;
- foreground, midground, subject, typography, atmosphere, and background layer references;
- lighting/environment state;
- entrance, hold, and exit phases;
- transition into the next shot;
- viewport-specific composition overrides for mobile portrait, tablet/laptop, and desktop/display;
- essential, enhanced, and cinematic quality behavior;
- reduced-motion alternatives;
- asset requirements and fallbacks;
- accessibility meaning and decorative-layer classification.

Keep the manifest declarative. Do not embed React elements, CSS class names, imperative animation callbacks, or library-specific timeline code in authored data.

Extend validation with actionable errors for invalid timing, gaps or overlaps where continuity is required, missing layer/asset references, invalid viewport overrides, missing reduced-motion treatments, impossible transition ranges, and quality-tier violations. Extend deterministic frame resolution so an exact Director timestamp resolves the active shot, local shot progress, phase, camera/framing state, layer states, lighting/environment state, and transition state.

Add focused tests for exact boundaries, direct mid-shot seek, backward seek, large jumps, replay, completion hold, every viewport class, every quality tier, and reduced motion.

Run focused checks and the complete quality suite. Update `docs/BUILD_STATUS.md`, then continue automatically.

**Completion gate:** The Prologue can be described and reconstructed as authored shots without a second clock or rendering details leaking into the manifest.

---

## Prompt 3 — Build the layered cinematic stage and viewport composition model

Create a reusable cinematic stage that renders resolved shot state in explicit depth layers:

1. environment/background;
2. distant architecture or spatial field;
3. atmosphere and controlled light;
4. hero subject or brand mark;
5. typography/content plane;
6. foreground occlusion or finishing layer;
7. captions and executive controls above the cinematic composition.

Build a camera/framing transform model that gives camera-like motion to the layered stage without pretending the DOM is a full 3D engine. It must support controlled push, lateral drift, macro-to-wide scale language, focal-point shifts, depth parallax, and intentional holds, all derived from resolved shot state.

Implement viewport-specific composition profiles for mobile portrait, tablet/laptop, and desktop/display. Profiles may change crop, focal origin, layer scale, text region, safe areas, parallax range, and motion intensity while preserving story and canonical timing.

Keep logo dimensions correct with `object-fit: contain` or an equivalent non-distorting strategy. Keep semantic copy in the document, decorative layers hidden from assistive technology, captions readable, controls operable, and focus visible.

Add a development-only shot harness accessible behind `?debug` or a dedicated debug-only route/flag. It must allow deterministic inspection of shot IDs, timestamps, viewports, tiers, reduced motion, layer visibility, and camera state without appearing in the default executive experience.

Add component and resolver integration tests. Run the full quality suite. Update `docs/BUILD_STATUS.md`, then continue automatically.

**Completion gate:** A reusable layered stage renders arbitrary shot timestamps correctly across viewport classes, tiers, and motion preferences, while debug tools remain absent from the default experience.

---

## Prompt 4 — Establish the environment, lighting, material, and motion language

Create a restrained reusable visual-effects vocabulary for this project's world. It must support:

- obsidian and graphite architectural fields;
- controlled apothecary-green intelligence light;
- limited dimensional-gold significance light;
- warm ivory typography;
- dark glass and machined-metal suggestion without generic glassmorphism;
- moving reflections or light passes;
- bounded shadow and atmospheric depth;
- subtle fog or particulate texture only when it materially supports depth;
- foreground occlusion and negative space;
- deliberate stillness.

Define motion primitives as pure functions or deterministic mappings from resolved progress wherever practical: controlled dolly/push, reveal by light or mask, parallax, precision lock, focus/focal change, material-light travel, hold, dissolve, occlusion wipe, and motivated cut. Do not make generic fade/scale the default answer.

Every primitive must:

- render a stable arbitrary timestamp;
- have essential, enhanced, cinematic, and reduced-motion behavior;
- avoid continuous work when inactive or hidden;
- avoid narrative control or independent clocks;
- remain composable without global style leakage.

Do not add random particle systems, constant floating, gaming HUDs, excessive bloom, perpetual orbiting, or decorative lens flares. Add only dependencies proven necessary after first attempting the existing platform and stack.

Add focused tests for deterministic state and source-level safeguards where visual behavior cannot be meaningfully snapshot-tested. Run the complete quality suite and measure the production bundle against Prompt 1's baseline. Update `docs/BUILD_STATUS.md`, then continue automatically.

**Completion gate:** The project has a coherent, efficient cinematic visual language that can build shots rather than screens and degrades intentionally on an older Mac.

---

## Prompt 5 — Re-author the Prologue as a directed shot sequence

Replace the current scene-as-screen Prologue composition with an authored shot sequence while preserving approved message, audience, asset roles, canonical duration unless a small documented timing correction is technically necessary, captions, launch behavior, and truthful Act I handoff.

Create or update a Prologue shot treatment that defines each shot's:

- emotional objective;
- exact time range;
- framing and viewport variants;
- foreground, midground, background, subject, and typography layers;
- lighting state;
- camera movement or intentional stillness;
- on-screen copy;
- narration/caption relationship;
- quality-tier and reduced-motion behavior;
- transition into the following shot.

The shot progression must include:

- opening darkness/stillness that establishes scale rather than an empty web background;
- a Gent Ascend Collective presenting-credit sequence using `gac-logo.png` without altering the logo;
- an exclusive dedication to Blair Vidrine, Bailey Soileau, and The Apothecary Shoppe composed as cinema, not a centered text stack;
- entry into the TAS HQ world;
- a TAS HQ emblem/system reveal using `tas-hq-logo.png` without redrawing or distorting it;
- a polished hold at `Act I — The Standard` that reads as an intentional threshold, never a developer screen or error.

The logos may be revealed through masks, controlled light, depth, shadow, reflection, restrained glow, and parallax. Do not stretch, crop destructively, trace, redraw, or permanently recolor the source artwork. If true 3D logo geometry does not exist, do not fake a low-quality literal 3D reconstruction; create dimensional presentation around the approved raster mark.

Do not implement final narration, music, Act I content, or exploration. Keep missing audio modular and the silent path complete.

Add manifest validation and shot-boundary tests. Run the full quality suite. Update `docs/BUILD_STATUS.md`, then continue automatically.

**Completion gate:** The approved Prologue exists as a complete, reviewable shot treatment and validated deterministic shot manifest using both approved logos correctly.

---

## Prompt 6 — Implement the upgraded Prologue vertical slice

Implement the complete shot-authored Prologue through the layered stage, existing Director, resolver, and cinematic primitives.

The camera must feel as though it remains inside one continuous world. Use motivated environmental continuity and transitions rather than a sequence of disconnected full-screen cards. Create compositional rhythm through asymmetry, negative space, macro detail, wide framing, off-axis subjects, scale contrast, and moments of stillness. Typography must belong to the composition and be revealed through light, masking, depth, occlusion, or camera movement rather than ordinary heading fades.

All visible states must derive from Director time so these operations reconstruct correctly:

- begin;
- pause and resume;
- direct seek forward or backward in debug mode;
- chapter skip in debug mode;
- tab interruption and recovery;
- restart;
- completion and replay;
- reduced motion;
- tier changes;
- viewport changes.

Keep the default route executive-facing and free of developer labels, timeline readouts, quality selectors, seek controls, or runtime diagnostics. Keep those tools behind the debug mechanism.

Preserve keyboard operation, captions, muted/silent fallback, fullscreen denial recovery, visible focus, semantic names, and intentional mobile portrait framing. Do not claim visual approval.

Add meaningful integration tests for critical shot boundaries and transport recovery. Run the full quality suite and production build. Update `docs/BUILD_STATUS.md`, then continue automatically.

**Completion gate:** The default route plays a complete shot-driven Prologue, ends on the intentional Act I threshold, and remains deterministic, accessible, responsive, and recoverable.

---

## Prompt 7 — Performance, resilience, responsive, and accessibility hardening

Audit the complete vertical slice on the actual implementation rather than theoretical intent.

Perform and document:

- production bundle size comparison to the Prompt 1 baseline;
- active-loop and event-listener cleanup review;
- hidden-tab and paused-state work review;
- large image sizing and decoding review;
- expensive paint, blur, filter, mask, and compositing review;
- layout-shift and overflow review;
- essential/enhanced/cinematic tier behavior;
- reduced-motion behavior;
- mobile portrait composition at representative narrow widths;
- tablet/laptop and executive desktop/display compositions;
- keyboard and focus behavior;
- caption readability and safe areas;
- color/contrast and non-color-only meaning;
- audio-unavailable and fullscreen-denied recovery;
- arbitrary seek, restart, interruption, and completion cleanup.

Use automated browser checks or screenshots if a compatible local browser tool is available. These are engineering evidence, not Neil's subjective approval. If browser automation is unavailable, do not stop; use component/integration tests, production preview smoke checks, static audits, and document the missing evidence honestly.

Optimize measured or clearly evidenced problems. Do not lower the artistic direction globally to solve a local performance issue; use quality tiers, viewport-specific treatment, bounded effects, and intentional fallbacks.

Run the complete quality suite, production build, dependency audit, secret scan, prohibited-architecture scan, and byte/hash comparison of both root/public logo pairs. Update `docs/BUILD_STATUS.md`, then continue automatically.

**Completion gate:** The slice has documented performance and resilience evidence, intentional lower-power behavior, first-class mobile portrait composition, and no known critical accessibility or transport regression.

---

## Prompt 8 — Final audit, documentation, and phase handoff

Audit every completion gate in this document. Fix remaining in-scope defects, warnings, dead code, obsolete Prologue visual scaffolding, duplicate styles, and accidental complexity. Preserve historical treatments and build sequences when useful, but label superseded visual direction clearly so future Codex sessions do not restore the website-like implementation.

Update project documentation with:

- how to author a shot;
- shot/layer/camera/viewport contracts;
- deterministic rendering and seeking rules;
- environment, lighting, material, transition, and motion language;
- quality tiers and older-Mac constraints;
- mobile portrait composition rules;
- logo and asset rules;
- debug-mode access;
- accessibility and reduced-motion requirements;
- how later acts reuse the system without bypassing the Director.

Run final validation:

- formatting check;
- strict typecheck;
- zero-warning lint;
- all focused and full tests;
- production build;
- dependency audit;
- secret scan;
- Git diff and status review;
- logo integrity comparison;
- default-route review for exposed debug UI;
- checks for scene-owned timers, route-driven sequencing, and other prohibited architecture;
- available automated browser/runtime smoke checks.

Mark this phase complete in `docs/BUILD_STATUS.md` only when every completion gate has passed or any remaining nonblocking limitation is explicitly recorded. Do not wait for Neil's visual inspection and do not label the visuals “approved.” Neil will inspect the completed experience after handoff.

Do not commit, push, deploy, or begin the next phase.

**Completion gate:** The cinematic production foundation and upgraded Prologue slice are implemented, validated, documented, and ready for Neil's visual inspection and the next build-sequence document.

---

## Phase exit criteria

This phase is complete only when:

- all eight prompts were executed in order without intermediate approval gates;
- the existing Director and useful runtime behavior remain intact;
- scenes are authored and rendered as deterministic shots with explicit layers, camera/framing, lighting, transitions, and viewport composition;
- exact frames reconstruct correctly after seek, restart, interruption, tier change, and viewport change;
- the default route contains no exposed developer runtime screen;
- the upgraded Prologue uses the approved GAC and TAS HQ logos without altering the originals;
- the Prologue feels structurally like one directed world rather than sequential web pages;
- mobile portrait, tablet/laptop, and desktop/display have intentional compositions;
- reduced motion and essential quality remain complete, coherent experiences;
- performance strategy is appropriate for Neil's older Mac;
- no final acts, exploration mode, live AI, or unapproved media were built;
- `docs/BUILD_STATUS.md` accurately records every prompt and limitation;
- all required automated checks pass;
- no subjective visual approval is falsely claimed.

---

## Required final completion report

After Prompt 8, return one concise report containing:

1. **Outcome** — what the complete phase now delivers.
2. **Prompts completed** — confirmation that Prompts 1–8 ran in order.
3. **Files changed** — grouped by architecture/contracts, stage/visual systems, Prologue content, tests, and documentation.
4. **Checks run** — exact commands and pass/fail results.
5. **Performance and compatibility** — bundle impact, quality-tier behavior, older-Mac considerations, mobile portrait coverage, and any unavailable browser evidence.
6. **Preserved systems** — confirmation that Director/runtime invariants and logo originals remain intact.
7. **Remaining dependencies** — final Onyx voice, approved score/ambience, subjective visual notes from Neil, and later-act content only where applicable.
8. **Git status** — concise summary of uncommitted changes; do not commit automatically.
9. **Exact commit and push commands** — provide these commands exactly, but do not execute them:

```bash
cd /Users/neil/Desktop/tas-hq
git add .
git commit -m "Build cinematic production foundation and shot-driven Prologue"
git push origin HEAD
```

End the report by stating:

> Phase 1 implementation is complete and ready for Neil's visual inspection. No subjective visual approval was claimed, and no commit or push was performed.

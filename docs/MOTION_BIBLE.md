# TAS HQ Executive Vision Experience

## Motion Bible

**Status:** Permanent production standard  
**Authority:** Universal motion reference for every act, shot, interface demonstration, and transition  
**Companion references:** `docs/CINEMATIC_DIRECTION_BIBLE.md`, `docs/PRODUCTION_ASSET_BIBLE.md` when present, `docs/CINEMATIC_PRODUCTION_ARCHITECTURE.md`, and `docs/SHOT_AUTHORING.md`  
**Audience:** Blair Vidrine and Bailey Soileau, The Apothecary Shoppe

---

## 1. Purpose and authority

This Bible defines how the TAS HQ Executive Vision Experience moves. It converts the creative direction into a repeatable production system so camera, protected logos, typography, architecture, knowledge, interfaces, light, and atmosphere behave as one directed film.

Motion is not decoration. It directs attention, gives materials believable mass, supports comprehension, carries emotion, and connects the experience into one world. The production must never feel like a website with animations, a title-card carousel, or a collection of unrelated effects.

Every future build-sequence document must:

1. Read this Bible and `docs/CINEMATIC_DIRECTION_BIBLE.md` completely before acting.
2. Read `docs/PRODUCTION_ASSET_BIBLE.md` when present and honor its asset, lighting, material, and tier contracts.
3. Cite relevant Motion Bible sections in shot requirements and acceptance criteria.
4. Define canonical timing, hierarchy, transition carriers, viewport adaptations, tiers, and reduced-motion behavior before implementation.
5. Preserve deterministic pause, resume, seek, replay, skip, and interruption recovery.
6. Treat existing motion as replaceable when it fails this standard.
7. Record any exception, reason, scope, and Neil's explicit approval.

This document governs motion unless Neil explicitly overrides a named rule. It does not authorize application changes by itself.

---

## 2. Core motion proposition

The world behaves like a precision-engineered executive environment with physical weight and intelligent internal life.

All motion must be:

- **Directed:** every movement has a purpose and subject.
- **Weighted:** speed and easing reflect apparent mass.
- **Continuous:** shots hand momentum, light, shape, or sound to one another.
- **Hierarchical:** one dominant motion idea leads each beat.
- **Responsive:** the world reacts to meaning, especially Onyx, knowledge, leadership, and the TAS HQ core.
- **Restrained:** activity is selective and stillness remains available.
- **Legible:** spectacle never compromises comprehension.
- **Deterministic:** the same presentation time produces the same visible state.
- **Adaptive:** intent survives viewport, tier, and accessibility changes.

---

## 3. Universal laws

### Cause before effect

Movement requires a visible, narrative, or sonic cause. Light may activate architecture. Onyx may trigger knowledge flow. Camera travel may discover a subject. A subject may become the next transition carrier. Do not move an element merely because it entered the timeline.

### One dominant motion per beat

Camera, hero subject, architecture, light, typography, information flow, or interface focus may lead. Other systems support at lower amplitude. If two systems demand equal attention, delay or reduce one.

### Mass determines behavior

Architecture is monumental. Emblem environments feel machined and heavy. Glass and interface planes are medium-weight. Information and typography are precise. Fog and particles are atmospheric and subordinate.

### Movement changes meaning

- Push: importance, intimacy, discovery.
- Pullback: scale, consequence, connection.
- Alignment: coherence and confidence.
- Separation: complexity and tension.
- Stabilization: trust and authority.
- Expansion: possibility, growth, legacy.
- Stillness: certainty, boundaries, finality.

### Motion resolves

Every movement has a purposeful start, development, and resolved state. Nothing stops merely because a duration expired. The end frame must feel settled, legible, and ready to carry the next beat.

### Stillness is authored

A quiet shot may retain low-amplitude light, reflection, focus, atmosphere, or distant depth. A fully static frame is reserved for exceptional emphasis, responsible escalation, or finality.

### Canonical time owns motion

All narrative state derives from Presentation Director time and declared shot data. Component mount time, animation callbacks, unseeded random loops, and `setTimeout` chains never own story progression.

---

## 4. Motion hierarchy

Use this priority:

1. Narrative subject.
2. Camera and framing.
3. Meaningful light.
4. Supporting architecture.
5. Typography or captions.
6. Ambient systems.

Ambient motion should remain below conscious inspection unless it becomes the narrative subject.

---

## 5. Easing and physics

Easing feels engineered, never playful. Use controlled acceleration, confident travel, and a longer deceleration into a precise settle. Linear motion is reserved for continuous energy or scanning light.

Named starting tokens:

| Token | Suggested curve | Use |
|---|---|---|
| `precision-out` | `cubic-bezier(0.16, 1, 0.3, 1)` | Type masks, focus, controls |
| `executive-in-out` | `cubic-bezier(0.65, 0, 0.35, 1)` | Camera and composed travel |
| `mass-out` | `cubic-bezier(0.22, 1, 0.36, 1)` | Heavy architecture resolving |
| `continuity-in` | `cubic-bezier(0.45, 0, 0.55, 1)` | Motion handed to next shot |
| `light-linear` | `linear` | Authored light/energy travel only |

Store curves as shared tokens, not anonymous values scattered through components.

### Apparent mass

| Class | Examples | Acceleration | Deceleration | Overshoot |
|---|---|---|---|---|
| Monumental | Chambers, walls, structural rings | Slow | Long | None |
| Heavy | Emblem assemblies, large panels | Restrained | Long | None |
| Medium | Glass and interface planes | Moderate | Controlled | None |
| Light | Labels, indicators, knowledge paths | Quick | Short-clean | None |
| Atmospheric | Fog, particles, distant reflections | Nearly imperceptible | Continuous | N/A |

Large objects require visible lead-in and settle distance. Camera direction never reverses abruptly. Parallax layers lag according to depth. Default overshoot is zero. A precision lock may use a nearly imperceptible compression-and-settle only when it reads as machined engagement—not bounce.

No elastic, bounce, back-overshoot, or casual spring curve belongs in the cinematic runtime.

---

## 6. Camera behavior

The camera is a confident executive observer: deliberate, composed, and never impressed with itself.

### Universal rules

- Every move reveals information, changes emotional scale, establishes relationship, or carries a transition.
- Establish the focal subject within approximately 1.2 seconds.
- Use translation more often than rotation.
- Preserve spatial continuity and a stable horizon.
- Do not repeat the same center push across consecutive shots.
- Never use handheld simulation, idle camera drift, or unmotivated orbiting.
- Camera motion never makes essential interface text hard to read.
- Any timestamp reconstructs the same camera state.

### Push

Use for importance, intimacy, discovery, or entry into knowledge. Prove travel with foreground/background parallax and slow before essential reading begins. Typical duration: **1.6–4.5s**.

### Pullback

Use to reveal scale, consequence, connected people, or system architecture. New information must emerge during travel. Typical duration: **1.8–5s**.

### Lateral dolly

Use for relationships and architectural depth. Include controlled foreground occlusion and stable reading regions. Typical duration: **1.5–4s**.

### Vertical travel

Use for emergence, system depth, and mobile-friendly discovery. Avoid game-menu elevator behavior. Typical duration: **1.4–3.5s**.

### Macro-to-wide / wide-to-macro

Use a recognizable edge, engraving, energy path, reflection, source mark, or interface detail as the carrier. Typical duration: **2–5s**. Do not use extreme blur instead of authored geometry.

### Rotation limits

- Camera roll: 0° by default; approved ceremonial exceptions generally below 1°.
- Yaw/pitch change: normally 2–6° per shot.
- Hero orbital travel: normally below 12° and only to reveal form.
- No continuous orbiting.
- Never rotate a flat protected logo to fake three dimensions.

### Parallax

Use two to four meaningful depth layers. Desktop uses the full authored range; tablet/older laptop approximately 60–80%; mobile approximately 35–60%. Reduced motion removes travel parallax and retains depth through composition, light, and occlusion.

### Momentum and settle

- Acceleration: approximately 15–30% of a move.
- Sustained travel: approximately 30–55%.
- Deceleration/settle: approximately 25–45%.
- Standard settle: 180–350ms.
- Hero settle: 350–650ms.
- Interface reading settle: no more than 250ms after essential content stabilizes.

Do not fully settle when momentum is intentionally handed into the next shot.

### Framing transitions

Use thirds-to-center authority, foreground reveal, aperture passage, focal transfer, architecture-to-interface alignment, or matched geometry. Never slide the whole frame like a carousel.

---

## 7. GAC logo choreography

`gac-logo.png` is protected artwork. It may be framed, masked, illuminated, reflected, and spatially integrated, but never redrawn, distorted, squashed, stretched, or spun like a coin.

The GAC mark establishes authorship and exclusivity. It feels assured and invitational, not louder than TAS HQ.

### Reveal

1. The environment is alive at frame one.
2. A restrained source discovers an edge or silhouette.
3. The mark resolves through mask, reflection, depth separation, or illumination.
4. One short specular event establishes material presence.
5. Camera or architecture carries it into the dedication.

- First indication: 0–350ms.
- Recognizable mark: within 1.0–1.4s.
- Fully resolved: 1.6–2.6s.
- Meaningful hold: 1.2–2.2s while the world continues developing.

### Idle and pulse

Use no more than two: depth parallax, a 6–10s illumination breath, a 4–7s rim-light travel, reflection movement, or distant architectural response. Apparent scale breathing stays around 0.4–1.0% and may be omitted.

Use one activation pulse. Optional secondary pulse may occur 2.5–4.5s later only if the shot remains active. Rise: 250–450ms. Decay: 900–1,800ms. Never loop rapid pulses.

### Exit

Prefer camera travel, foreground occlusion, light loss, reflection, or architecture. Keep the mark perceptible until the next subject begins taking ownership. Generic fade-out is not the default.

---

## 8. TAS HQ emblem choreography

`tas-hq-logo.png` is the primary protected emblem: hero artifact, intelligence core, gateway, architectural key, or final legacy mark. Its authority comes from the world's response.

### Reveal phases

1. **Signal:** green intelligence or gold edge light indicates presence.
2. **Discovery:** camera or light reveals protected geometry.
3. **Activation:** architecture, rings, channels, or depth responds around it.
4. **Authority:** the emblem reaches a commanding composition.
5. **Handoff:** geometry, light, or aperture carries the audience onward.

- Signal: 0–500ms.
- Recognizable emblem: 900–1,500ms.
- Primary reveal resolved: 2–3s.
- Activation may continue 1.5–3s without delaying recognition.
- Hero hold: 1.5–3s only while narration, material, or environment develops.

Use confident central or near-central placement for ceremonial moments. Mobile favors central or upper-central authority with caption space. Do not keep the emblem timidly small.

### Idle, rotation, light, and pulse

Use low-amplitude response: 7–12s illumination breath, 5–9s edge sweep, 10–20s environmental-ring travel, restrained reflection, camera-linked parallax, or an authored activation pulse.

- Apparent scale breathing: below 1.2%.
- Protected flat artwork rotation: normally 0°.
- If a true dimensional asset is later approved: generally below 3° local rotation per shot, never continuous.
- Typical light sweep: 1.2–2.4s, normally once per short hold.
- Activation pulse rise: 300–600ms.
- Main decay: 1.2–2.4s.
- Rest before secondary response: at least 2.5s.

Green indicates intelligence; gold indicates significance. Do not flash both at maximum intensity.

### Exit/transformation

The emblem may become an aperture, expand into architectural sectors, transfer energy paths into an interface, move behind structure while its light remains, or match through reflection. It never simply shrinks and fades like a slide element.

---

## 9. Typography motion

Typography is read, not watched perform. It resolves quickly, becomes stable, and stays quiet.

### Rules

- Reveal complete semantic thoughts.
- Primary copy becomes fully legible in 500–850ms.
- Never use typewriter, character-by-character, or slow word-by-word reveals.
- Never split a simple sentence into awkward delayed halves.
- Typography does not float, bob, pulse, or continuously track.
- Use mask, light, focus, depth, restrained opacity, or camera relationship.
- Reading begins only when type is stable and high contrast.

### Line stagger

- One-line hero: one semantic unit.
- Two-line hero: together or 80–180ms stagger.
- Three-line composition: total stagger normally below 320ms and only with purposeful hierarchy.
- Label before hero: 150–300ms.
- Hero before support: 250–450ms.
- Separate claims require a new directed beat, not a long stagger.

### Word limits

- Hero target: 3–8 words.
- Hero maximum: 12 words without explicit justification.
- Supporting phrase: 5–14 words.
- Cinematic title composition: approximately 18 total words maximum, excluding captions and identifiers.
- Full narration never becomes oversized title copy.

### Reading budgets

Baseline formula: `0.25 seconds + (word count / 3.5 words per second)`. Use the longer of calculated time or these minimum holds after full legibility:

| Copy | Minimum hold | Typical maximum before new development |
|---|---:|---:|
| Act label | 0.8s | 1.5s |
| 1–4 word hero | 1.2s | 2.2s |
| 5–8 word hero | 1.6s | 2.8s |
| 9–12 word hero | 2.2s | 3.5s |
| Supporting phrase | Calculated | 3.5s |

Longer narration may continue while visuals develop; a static title cannot remain the sole event.

### Emphasis and exit

A key word may receive restrained light/material emphasis 120–250ms after resolution. Do not animate several words independently. Standard text exit: 250–550ms, with 200–500ms overlap where appropriate. Prefer mask closure, light loss, depth occlusion, focus transfer, or environmental integration.

Captions use stable 100–200ms opacity transitions, never hero-title movement. They remain synchronized, high contrast, and independent of cinematic layers.

---

## 10. Interface choreography

The interface is evidence within the film, not a conventional product tour.

### Entry

Architecture, glass, light, emblem geometry, or knowledge flow forms the interface plane. Functional framing resolves in 500–900ms; focal content follows by 120–300ms. Essential text stabilizes before camera travel resumes. Never animate every card from a different direction or reveal an entire dashboard at once.

### Cards and panels

- Card entry: 350–650ms.
- Supporting-card stagger: 80–160ms, maximum three in one group.
- Panel open: 450–800ms.
- Large architectural panel: 700–1,100ms.
- Panel close/transfer: 300–650ms.

Use depth, mask, light, or structured expansion—not repeated scale-fades or generic modals. Preserve spatial origin.

### Buttons and controls

- Press feedback: 90–180ms.
- State confirmation: 180–350ms.
- Keyboard focus: visible within 100ms.
- CTAs do not bounce, rubber-band, or pulse constantly.
- Directed-playback controls remain subordinate.

### Knowledge reveals

Show causality: need → governed retrieval → approved source → answer → ownership/date/confidence/escalation.

- Need recognition: 300–600ms.
- Retrieval flow: 600–1,200ms.
- Answer frame: 400–750ms.
- Source reveal: 250–500ms after structure.
- Hold: long enough to understand the result and source.

Decorative data streams without origin or destination are prohibited.

### Onyx responses

Onyx never types letter by letter. A listening/processing response may last 900–1,800ms but is not an indefinite spinner. Semantic response blocks resolve in 250–550ms; source/action follows 150–350ms later. Responsible escalation reduces motion and stabilizes the frame.

### Focus movement

Move one target at a time using light, contrast, depth, camera bias, or a precise indicator. Standard transfer: 250–500ms; large spatial transfer: 500–900ms. Cursor paths are direct and stop before the result animates.

### Exit

Interface structure becomes architecture, knowledge flow, reflection, or an aperture. Never shrink a webpage away or dissolve into an empty title card.

---

## 11. Environmental motion

The environment is a living intelligence chamber, not moving wallpaper.

### Universal rules

- At least one subtle behavior exists at frame one.
- Use two or three coordinated ambient systems, not every effect.
- Behavior is authored, bounded, or seeded.
- All systems pause with the Director and when hidden.
- Amplitude drops during reading, source transparency, and escalation.
- Essential tier may use premium still lighting instead.

### Fog

Only visible in motivated light; low-frequency and directional. Typical cycle: 12–30s. No full-screen smoke or obvious loops. Mobile and Essential reduce or remove live fog.

### Particles

Sparse, localized to light or transfer, with 8–20s local drift. No explosions, starfields, snow, sparks, or cursor followers. Seed visible behavior when replay consistency matters. Decorative particles degrade first.

### Energy flow

Green means trusted knowledge; gold means significance or leadership. Every path has an origin and destination. Local travel: 500–1,500ms. Architectural travel: 1.2–3.5s. Sustained flow may use varied 4–10s cycles—never synchronized neon chasing.

### Light

- Rim/specular sweep: 1.2–2.4s.
- Architectural rise: 500–1,200ms.
- Ambient evolution: 6–16s.
- Hero illumination settle: 800–1,800ms.

Avoid constant sweeping, lens-flare travel, and full-environment pulse loops.

### Reflections and shadows

Reflections follow camera, geometry, and implied sources; typical travel is 4–12s. Shadow evolution is 8–20s. Neither may reduce logo or text legibility. Lower tiers may bake them into still or pre-rendered layers.

### Structural motion

Ambient rings generally show only 4–10° travel during a shot. Architecture moves only to reveal, align, protect, transform, or create passage. No perpetual machinery for its own sake.

---

## 12. Timing standards

Values are ranges, not templates. Comprehension, narration, material weight, and viewport determine final timing.

| Event | Duration |
|---|---:|
| Control feedback | 90–180ms |
| Caption change | 100–200ms |
| Focus indicator | 150–300ms |
| Act label | 250–450ms |
| Text exit | 250–550ms |
| Interface focus transfer | 250–500ms |
| Hero text reveal | 500–850ms |
| Card entry | 350–650ms |
| Panel open | 450–800ms |
| Light activation | 500–1,200ms |
| Standard transition | 500–1,000ms |
| Knowledge retrieval | 600–1,200ms |
| Camera micro-reframe | 600–1,200ms |
| Logo recognizable | 900–1,500ms |
| Logo full reveal | 1.6–3s |
| Camera push/dolly | 1.5–4.5s |
| Heavy architecture | 1.2–3.5s |
| Macro/wide transition | 2–5s |
| Hero light sweep | 1.2–2.4s |
| Short hero hold | 1.2–2.8s |
| Ambient light cycle | 6–16s |
| Logo illumination breath | 7–12s |
| Fog/shadow evolution | 12–30s |

### Dead time and overlap

- Environmental pickup starts within 250ms.
- Primary subject is identifiable within approximately 1.2s.
- No hold remains visually and sonically unchanged.
- Standard transition overlap: 250–700ms.
- Major handoff overlap: 600–1,200ms.
- Extended holds require a named purpose in the shot contract.
- Do not overlap competing hero copy or unrelated focal subjects.

---

## 13. Emotional motion language

| Emotion | Camera | World | Rhythm |
|---|---|---|---|
| Curiosity | Slow push/lateral reveal | Partial form, narrow discovery light | Spacious but developing |
| Recognition | Stabilizes on a known truth | Elements align; warm ivory enters | Clear and respectful |
| Respect | Composed, minimal rotation | Hero holds with weight | Measured and quiet |
| Tension | Bounded separation/parallax | Paths fragment; shadows deepen | Shorter beats, controlled pressure |
| Complexity | Pullback/lateral disclosure | More relationships become visible | Layered, never frantic |
| Discovery | Push through carrier/focus shift | Green intelligence resolves | Gentle acceleration into clarity |
| Possibility | Opens space or scale | Structures begin aligning | Forward and optimistic |
| Confidence | Stable horizon and settle | Geometry locks precisely | Firm and uncluttered |
| Trust | Minimal travel | Sources and boundaries stabilize | Calm comprehension |
| Responsible escalation | Near-still | Effects reduce; route/source leads | Precise pause and resolution |
| Proof | Directed interface focus | Action visibly causes result | Crisp and causal |
| Leadership | Elevated, not superior | Signals converge; gold is sparing | Assured and broad |
| Growth | Controlled expansion | Connections extend without disorder | Larger scope, stable base |
| Legacy | Slow pullback/expansion | Emblem, people, standard resolve | Spacious, long decay |
| Finality | Complete settle | One enduring hero state | Stillness and silence |

Tension is not shaking. Discovery is not fast zooming. Confidence is not a loud impact. Legacy is not slow motion alone.

---

## 14. Transition choreography

A transition is the relationship between shots, not an effect inserted between them.

### Approved families

- **Aperture passage:** camera enters emblem, architecture, glass, or system opening.
- **Foreground occlusion:** a physical frame conceals layer exchange and preserves momentum.
- **Light handoff:** motivated illumination transfers meaning between subjects.
- **Geometry match:** ring, edge, line, panel, or silhouette aligns with the next shot.
- **Material transformation:** reflection, glass, metal, or energy becomes interface/architecture.
- **Focus transfer:** depth or contrast shifts between related layers.
- **Precision lock/release:** elements align into coherence or separate into complexity.
- **Motivated cut:** contrast preserved by shape, sound, direction, or narrative idea.
- **Restrained dissolve:** reserved for memory, legacy, time, or continuous human meaning.

### Rules

- Declare incoming and outgoing carriers for every shot.
- Begin the next state before the current state becomes empty.
- Preserve direction unless reversal signals a deliberate narrative turn.
- Do not repeat the same carrier consecutively.
- Avoid black resets except intentional threshold or finality.
- Keep captions stable across transitions.
- Boundary seeks must produce complete valid frames with no raw layers or missing assets.
- One transition concept leads; never stack zoom, spin, flash, particles, blur, and crossfade.

---

## 15. Viewport adaptation

Story time and emotional intent remain identical; paths and amplitude adapt.

### Mobile portrait

- Favor central/upper-frame hero authority.
- Substitute vertical discovery for wide lateral travel.
- Use 35–60% desktop parallax.
- Reduce travel distance 20–40%.
- Use fewer environmental layers.
- Stabilize typography earlier.
- Protect captions, controls, notch, and browser safe areas.
- Never merely shrink desktop UI.

### Tablet and older laptop

- Treat as a primary review profile.
- Use 60–80% desktop parallax.
- Preserve hero/copy relationships.
- Reduce blur, shadow, and compositing before narrative motion.
- Avoid transitions requiring extreme horizontal space.

### Desktop/executive display

Use wider asymmetry, deeper parallax, architectural scale, and longer spatial carriers. Do not increase duration because the display is larger. Test at realistic viewing distance.

All profiles preserve sequence, timing, narration, captions, narrative outcome, logo integrity, controls, and accessibility.

---

## 16. Reduced motion and accessibility

Reduced motion is a fully directed mode, not animation removed from a broken composition.

- Replace large travel with stable reframing, direct cuts, short dissolves, focus, and light changes.
- Remove parallax travel, continuous rotation, large scaling, tunneling, live fog, and decorative particles.
- Resolve logos with mask/light in 250–600ms, without breathing loops.
- Typography and interface changes use 100–250ms transitions.
- Light emphasis uses 200–500ms at reduced intensity.
- Reading holds and narrative timing remain intact.
- No flashing above three times per second.
- Avoid full-screen brightness changes and rapid contrast inversions.
- Motion never carries meaning alone.
- Captions do not move with cinematic layers.
- Focus is immediate and keyboard-visible.
- The presentation remains complete without audio.
- Hidden playback performs no work.

---

## 17. Performance budgets for Neil's older Mac

Neil's older Mac is a primary development and review environment. This changes strategy, not ambition.

### Targets

- Target 60fps on capable devices.
- Enhanced tier must remain credible at a stable 30fps on the older Mac.
- Stable cadence is better than fluctuating high frame rate.
- Frame time: under 16.7ms for 60fps; under 33.3ms for 30fps.
- Active-playback main-thread work normally below 8ms and not repeatedly above 16ms.

### Per-shot budgets

- One dominant motion system.
- No more than two supporting ambient systems.
- Two to four meaningful parallax layers.
- At most one live blur/backdrop-filter region on lower hardware, preferably none.
- No unbounded particles.
- No simultaneous full-screen filter stacks.
- No inactive timelines running behind the active shot.

### Strategy

- Prefer transform and opacity for frequent DOM/SVG animation.
- Use masks, filters, shadows, and blur selectively and briefly.
- Apply `will-change` only near active motion and release it.
- Render only current shot and declared overlap.
- Pause all work while paused or hidden.
- Pre-render hero atmosphere, depth, reflection, or volumetrics when real-time work is unreliable.
- Size media for actual display needs.
- Preload the next critical shot, not the whole film at maximum quality.
- Use seeded/authored motion rather than uncontrolled simulation.
- Keep typography, captions, and readable UI semantic.

### Degradation order

Remove or simplify:

1. decorative particles;
2. live fog;
3. secondary reflections;
4. blur, bloom, and shadow compositing;
5. tertiary foreground depth;
6. oversized media variants;
7. secondary ambient motion.

Never remove narration, captions, primary copy, protected logos, essential interface outcomes, timing, controls, or transition meaning.

Release inactive media/WebGL resources, avoid simultaneous hero-video decoding, provide poster states, and test cold load, replay, forward/backward seeking, tab recovery, and repeated complete playback.

---

## 18. Quality tiers

All tiers preserve story, timing, copy, logos, narration, captions, controls, and meaning.

### Essential

Premium composed still architecture, primary subject, logo, readable type, minimal transforms, baked lighting, short motivated transitions, and complete interface outcomes. No particles, live fog, expensive blur, or continuous reflection. Essential must feel art-directed, not empty.

### Enhanced

Default for Neil's older Mac, capable phones, and ordinary laptops: bounded 2.5D travel, two to four depth layers, one primary light movement, restrained atmosphere/reflection, logo edge response, limited masks, and no persistent expensive WebGL dependency.

### Cinematic

For capable displays: fuller foreground depth, higher-quality pre-rendered or selective WebGL layers, richer atmosphere/reflections, restrained motion blur/depth of field/bloom/grain, and more detailed material-light response. Canonical timing and intent remain the same.

Select a safe initial tier from capability signals and preference. Avoid switching mid-shot; degrade at boundaries. Do not equate viewport size with performance capability.

---

## 19. Determinism, seeking, and interruption

At any canonical time, reconstruct camera, subject, typography, architecture, interface, lighting, transition, captions, and narration alignment.

- Use fixed seeds, authored paths, or deterministic lookup tables.
- Pause freezes every system on one frame.
- Resume does not replay entrances or jump to callbacks.
- Direct seek never requires replaying all prior animation.
- Backward seek restores correct prior state.
- Transition seeks resolve correct carrier and layer ownership.
- No flash of default CSS, unmasked images, or empty stage.
- Hidden playback pauses safely; ambient systems do not advance.
- Audio and narration never drift from canonical time.

---

## 20. Forbidden motion patterns

Unless Neil approves a documented exception, prohibit:

- Generic fades as the dominant language.
- Fade in, sit still, fade out.
- Endless zooms, random orbits, camera drift, shake, roll, and whip pans.
- Abrupt starts, stops, and reversals.
- CSS scale pretending to be camera travel without depth.
- Static logos on flat backgrounds.
- Spinning protected PNGs like coins.
- Constant logo pulsing, bobbing, floating, or rubber-band scaling.
- Nightclub glow, rapid flashes, particle explosions, excessive bloom.
- Typewriter, character-by-character, or slow word-by-word copy.
- Awkward delayed sentence halves.
- Text entering from arbitrary edges, pulsing, or floating.
- Springy SaaS cards, bouncing CTAs, generic modals, dashboard walls.
- Wandering cursors, indefinite spinners, letter-by-letter Onyx answers.
- Random floating objects, starfields, smoke-machine fog, neon chasing.
- Constant light sweeps, lens flares, and perpetual machinery.
- Routine black resets and effects stacks.
- Long dead holds.
- Animation callbacks or component timers controlling progression.
- Motion that cannot pause, seek, replay, and reconstruct.

---

## 21. Required shot-level motion contract

Before implementation, every shot defines:

- stable ID and canonical range;
- emotional objective and narrative purpose;
- dominant and supporting motion systems;
- cause and intended response;
- camera start/end/path/duration/settle;
- focal-subject development and resolved state;
- apparent mass and easing tokens;
- typography reveal/read/emphasis/exit timing;
- environmental systems, amplitude, and cycles;
- GAC/TAS HQ behavior when present;
- interface choreography and focus path;
- incoming/outgoing transition carriers;
- narration/audio cues;
- mobile, tablet, and desktop overrides;
- Essential, Enhanced, and Cinematic behavior;
- reduced-motion equivalent;
- pause, seek, backward-seek, boundary, and interruption expectations;
- performance budget and degradation order;
- stillness or extended-hold justification.

Without these decisions, the shot is not ready to build.

---

## 22. Validation checklist

### Narrative and hierarchy

- [ ] Every movement has a cause.
- [ ] One dominant motion leads each beat.
- [ ] Motion changes understanding, emotion, or focus.
- [ ] Stillness is intentional and never dead.
- [ ] The subject is identifiable within approximately 1.2s.
- [ ] No shot outlasts its idea.

### Camera and physics

- [ ] Camera reveals information or emotional scale.
- [ ] Acceleration and deceleration reflect mass.
- [ ] No abrupt start, stop, reversal, or unmotivated rotation remains.
- [ ] Parallax proves depth without exposing layers.
- [ ] Final composition settles credibly.
- [ ] Consecutive shots do not mechanically repeat moves.

### Logos and typography

- [ ] Protected artwork is undistorted.
- [ ] Logos become recognizable before flourish finishes.
- [ ] Light, architecture, or camera gives physical presence.
- [ ] Idle behavior is restrained.
- [ ] Copy resolves inside the approved budget.
- [ ] Thoughts reveal complete and reading holds pass.
- [ ] Captions remain stable and independent.

### Interfaces and environment

- [ ] Interface retains spatial origin and shows cause/result.
- [ ] Only necessary cards and panels animate.
- [ ] Onyx reveals semantic blocks, not typed characters.
- [ ] Sources/escalation receive stable reading time.
- [ ] Focus moves one target at a time.
- [ ] Ambient systems are visible but subordinate.
- [ ] Energy has meaningful origin/destination.
- [ ] Reflections, shadows, and light agree spatially.

### Transitions, viewports, and accessibility

- [ ] Incoming/outgoing carriers are declared.
- [ ] Next shot forms before current shot empties.
- [ ] No routine reset or generic effects stack remains.
- [ ] Mobile is independently composed.
- [ ] Tablet/older-laptop is tested as primary.
- [ ] Reduced motion preserves all meaning.
- [ ] Text, captions, focus, controls, and touch targets remain accessible.

### Performance and integrity

- [ ] Enhanced tier sustains stable cadence on Neil's older Mac.
- [ ] Only active shot and overlap render.
- [ ] Decoration degrades before narrative elements.
- [ ] Pause freezes all systems on one canonical frame.
- [ ] Resume, forward/backward seek, replay, skip, and recovery pass.
- [ ] No visible randomness breaks QA.
- [ ] No callback or timer owns progression.
- [ ] Cold load and repeated complete playback remain reliable.

---

## 23. Review protocol

Technical tests do not equal creative approval. Review every sequence through:

1. Real-time uninterrupted viewing.
2. Silent viewing.
3. Captioned viewing.
4. Seeking to every start, midpoint, boundary, and final frame.
5. Slow inspection of logo integrity, masks, lighting, and layer edges.
6. Mobile portrait review.
7. Enhanced-tier older-Mac review.
8. Essential-tier review.
9. Reduced-motion review.
10. Neil's visual inspection after implementation is complete.

Diagnose problems as narrative timing, composition, hierarchy, physics, continuity, performance, or asset quality. Do not automatically add more effects.

---

## 24. Required instruction for future Codex build sequences

Every future build-sequence document must begin with language substantially equivalent to:

> Read `docs/CINEMATIC_DIRECTION_BIBLE.md` and `docs/MOTION_BIBLE.md` completely before acting. Read `docs/PRODUCTION_ASSET_BIBLE.md` when present. Treat them as permanent creative and production authorities unless Neil explicitly overrides a named rule. Preserve the deterministic Presentation Director and the contracts in `docs/CINEMATIC_PRODUCTION_ARCHITECTURE.md` and `docs/SHOT_AUTHORING.md`. Before implementing each scene, define its shot-level motion contract, canonical timing, motion hierarchy, carriers, viewport adaptations, quality tiers, reduced-motion behavior, and performance budget. Existing motion is not approved merely because it exists.

Each build sequence must also:

1. Name the emotional motion language for every sequence.
2. Declare one dominant system per beat.
3. Use named easing/duration tokens.
4. Define logo choreography when either protected logo appears.
5. Define copy reading budgets and interface focus paths.
6. Define environmental systems and degradation order.
7. Specify mobile, tablet/older-laptop, desktop, all tiers, and reduced motion before implementation.
8. Require exact pause, resume, seek, backward-seek, replay, skip, and interruption behavior.
9. Self-audit against this Bible before declaring completion.
10. Report deviations and never claim tests equal Neil's visual approval.

Future prompts must not merely say “make it cinematic,” “add parallax,” or “improve transitions.” They must name the subject, cause, path, mass, duration, easing, settle, hierarchy, carrier, viewport behavior, reduced-motion equivalent, and emotional result.

---

## 25. Final standard

The experience succeeds when movement feels inevitable rather than applied.

The camera discovers. Architecture carries weight. Light reveals meaning. Logos command the environment without becoming effects. Typography resolves quickly and stays quiet. Interfaces prove cause and value. Onyx changes the world through intelligence, not spectacle. Transitions preserve one continuous reality. Every quality tier retains the story. Every frame can be paused, sought, replayed, and trusted.

The standard is not more animation.

The standard is **directed motion with purpose, mass, continuity, clarity, and restraint**.

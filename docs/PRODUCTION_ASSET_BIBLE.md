# TAS HQ Executive Vision Experience

## Production Asset Bible

**Status:** Permanent production reference  
**Authority:** Required companion to `docs/CINEMATIC_DIRECTION_BIBLE.md`  
**Scope:** Materials, lighting, environment, color, iconography, texture, animation, quality, performance, and asset governance  
**Audience:** Every future designer, director, developer, asset creator, and Codex build sequence

---

## 1. Purpose and authority

This Bible defines the approved physical and visual vocabulary of the TAS HQ Executive Vision Experience. The Cinematic Direction Bible defines how the film should feel and behave; this document defines what the world is made of, how those assets respond, and how they may be reused.

Every future build-sequence document must:

1. Read `docs/CINEMATIC_DIRECTION_BIBLE.md` and this document completely before planning or implementation.
2. Treat both as permanent, coequal creative references. When they address different concerns, both apply.
3. Name the specific approved materials, lights, environmental objects, color tokens, animation systems, and quality-tier behavior used by the phase.
4. Convert the relevant rules and checklists into explicit acceptance criteria.
5. Reuse approved production assets before inventing new ones.
6. Record any proposed exception, its reason, scope, performance cost, and Neil's explicit approval.

This document does not authorize application changes by itself. It is a specification for future work.

### Governing principle

The TAS HQ world is a premium executive intelligence environment: physically credible, masculine, precise, medical without cliché, futuristic without fantasy, and alive without visual noise.

The environment is never “a background.” It is architecture, light, atmosphere, and governed motion supporting the story.

---

## 2. Asset-system principles

Every asset must satisfy all of the following:

- **Narrative role:** It communicates structure, knowledge, care, leadership, standards, growth, or transition.
- **Physical logic:** Its material, reflection, depth, and motion agree with an implied world.
- **Visual hierarchy:** It supports the focal subject instead of competing with it.
- **Brand restraint:** It uses the approved palette and avoids generic science-fiction decoration.
- **Determinism:** Its authored state can be reconstructed from canonical Presentation Director time.
- **Adaptability:** It has intentional mobile, tablet, desktop, reduced-motion, and quality-tier behavior.
- **Performance value:** Its visual contribution justifies its decode, layout, paint, compositing, or GPU cost.
- **Reusability:** It belongs to a named family with documented variants instead of being a one-off effect.

No asset is approved merely because it looks impressive in isolation. It must belong to the TAS HQ world and remain legible in motion, under captions, on a phone, and on Neil's older Mac.

---

## 3. Material system

Material values below are art-direction ranges, not mandatory renderer-specific constants. In WebGL, they may guide PBR inputs. In DOM/SVG/video, they guide gradients, highlights, masks, compositing, and reference imagery. A material must look consistent across implementations.

### 3.1 Obsidian glass — `material.obsidianGlass`

**Character:** Near-black translucent mineral glass with deep neutral mass, subtle green-black internal depth, polished edges, and restrained reflected detail.

**Reflection behavior:** Dark, controlled, and directional. Reflections emerge at grazing angles; the face should not behave like a mirror. Edge reflections are cleaner than surface reflections.

**Nominal response:** Roughness 0.12–0.24; low-to-moderate transmission; high absorption; faint deep-green internal tint; no milky haze.

**Lighting response:** Best under narrow rim light, moving gold or ivory edge sweeps, and recessed green illumination behind or beneath the material.

**Approved uses:** Hero plinths, emblem chambers, deep foreground occluders, gateway apertures, protected interface housings, premium dividers, and transition planes.

**Prohibited uses:** Full-screen transparent overlays, every UI card, large readable text surfaces without contrast protection, bright glassmorphism, or stacked blur panels.

### 3.2 Machined titanium — `material.machinedTitanium`

**Character:** Dark graphite titanium with precise machining, cool-neutral body, fine directional brushing, dense mass, and crisp edges.

**Reflection behavior:** Narrow directional highlights follow the machining grain. Reflections are controlled and elongated rather than chrome-like.

**Nominal response:** Metallic 0.9–1.0; roughness 0.28–0.42; anisotropy suggested where supported; graphite body from `graphite.700` to `graphite.900`.

**Lighting response:** Separates under ivory key light and soft green bounce. Gold should appear as reflection only when a gold source is motivated.

**Approved uses:** Primary structural frames, rails, ring bodies, system cores, camera-adjacent foreground structure, interface bezels, and precision locking mechanisms.

**Prohibited uses:** Large flat featureless rectangles, bright silver chrome, distressed industrial grunge, weapon-like styling, or decorative machinery without function.

### 3.3 Champagne gold — `material.champagneGold`

**Character:** Refined pale warm metal—ceremonial, executive, and clean. It must read as champagne gold, never mustard, orange, brown-yellow, or beige.

**Reflection behavior:** Bright ivory-gold specular edge, restrained warm metallic body, and controlled bronze only in the deepest shadow. Highlights should move with the light source.

**Nominal response:** Metallic 0.95–1.0; roughness 0.20–0.34; body anchored to `gold.500`; highlight `gold.200`; shadow no warmer than `gold.800`.

**Lighting response:** Requires a dark neutral environment and a narrow ivory or pale-gold source. Avoid broad yellow light that flattens the metal.

**Approved uses:** TAS HQ significance moments, hero trim, emblem response, standards, leadership markers, precision edges, milestone locks, and a small number of key words.

**Prohibited uses:** Paragraph copy, full panels, broad background washes, every border, ambient fog, large yellow glows, or simultaneous use on all objects.

### 3.4 Brushed brass — `material.brushedBrass`

**Character:** Deeper and more architectural than champagne gold, with visible fine brushing and a grounded warm tone.

**Reflection behavior:** Directional satin highlight; darker body; less brilliant than champagne gold. It supports rather than becomes the hero.

**Nominal response:** Metallic 0.9–1.0; roughness 0.34–0.48; limited saturation; directional texture at low contrast.

**Lighting response:** Warm edge response under ivory light; minimal glow. Green bounce may appear subtly in shadow-facing edges.

**Approved uses:** Secondary architectural inlays, anchors, hinge details, recessed rails, historical or legacy accents, and supporting framework.

**Prohibited uses:** Primary hero text, broad shiny surfaces, ornate decoration, antique/vintage styling, or a substitute for every gold element.

### 3.5 Carbon fiber — `material.carbonFiber`

**Character:** Deep graphite engineered composite with a nearly invisible weave that appears only at close range or under traveling light.

**Reflection behavior:** Soft directional sheen with low-contrast weave response. Never glossy automotive-pattern wallpaper.

**Nominal response:** Roughness 0.38–0.56; specular moderate; pattern scale physically small; contrast under 8% in normal lighting.

**Lighting response:** Detail appears briefly under grazing key or rim light and returns to near-black.

**Approved uses:** Select structural backing, close macro details, device housings, and performance-oriented interior surfaces.

**Prohibited uses:** Full backgrounds, large decorative panels, highly visible checker patterns, or use that implies sports-car cosplay.

### 3.6 Satin ceramic — `material.satinCeramic`

**Character:** Warm or neutral precision ceramic with medical calm, soft tactility, and substantial form.

**Reflection behavior:** Broad soft highlight, no metallic edge, no plastic glare.

**Nominal response:** Roughness 0.48–0.68; nonmetallic; warm ivory or near-black body; extremely subtle microtexture.

**Lighting response:** Responds well to large soft ivory sources and controlled shadow. Green light may gently tint the edge, never the full face.

**Approved uses:** Human-centered interface surfaces, patient-care moments, controlled control surfaces, small architectural inserts, and calm visual resets.

**Prohibited uses:** Toy-like white plastic, glossy pill-shaped UI everywhere, pure-white rooms, or pharmacy/clinical clichés.

### 3.7 Dark stone — `material.darkStone`

**Character:** Honed charcoal stone with quiet mineral variation, architectural permanence, and almost no decorative veining.

**Reflection behavior:** Diffuse with a very soft grazing sheen. It absorbs more light than metal and glass.

**Nominal response:** Roughness 0.68–0.86; nonmetallic; tonal variation below 6%; no obvious repeating texture.

**Lighting response:** Best under raking side light that reveals scale and surface without brightening the whole plane.

**Approved uses:** Foundation planes, distant walls, plinths, quiet grounding surfaces, and human/legacy chapters.

**Prohibited uses:** Marble luxury clichés, dramatic white veining, kitchen-counter appearance, visibly tiled textures, or animated surface effects.

### 3.8 Frosted glass — `material.frostedGlass`

**Character:** Functional translucent separation with soft diffusion and precise edges.

**Reflection behavior:** Broad, low-contrast highlights with obscured forms behind it. Refraction is restrained and stable.

**Nominal response:** Roughness 0.48–0.72; moderate transmission; controlled blur; neutral or faint green-gray tint.

**Lighting response:** Reveals silhouettes, knowledge flow, and approaching interfaces under backlight.

**Approved uses:** Transitional partitions, privacy/separation metaphors, source layers, interface emergence, and depth planes.

**Prohibited uses:** Every card, continuous backdrop blur, text placed over unstable contrast, or generic glassmorphism.

### 3.9 Smoked optical glass — `material.smokedOpticalGlass`

**Character:** Cleaner and more transparent than frosted glass, with a dark neutral tint and optically precise edges.

**Reflection behavior:** Selective crisp reflection at edges; face remains readable. Minimal chromatic aberration.

**Nominal response:** Roughness 0.08–0.18; controlled transmission; neutral smoke; low distortion.

**Lighting response:** Edge-lit by ivory or apothecary green; content behind it remains legible.

**Approved uses:** Premium interface planes, approved-source layers, restrained overlays, and close-up knowledge visualization.

**Prohibited uses:** Multiple overlapping transparent UI stacks, mirror-like glare, bright blue tint, or decorative shards.

### 3.10 Matte graphite — `material.matteGraphite`

**Character:** Quiet, light-absorbing engineered coating that creates negative space around hero materials.

**Reflection behavior:** Minimal diffuse response with just enough edge separation to retain form.

**Nominal response:** Roughness 0.78–0.92; nonmetallic; graphite-neutral body.

**Lighting response:** Requires rim or adjacency contrast; should never collapse important geometry into illegible black.

**Approved uses:** Secondary architecture, equipment interiors, hidden supports, masks, and visual rest areas.

**Prohibited uses:** Every surface, primary typography, or large unlit areas that read as a rendering failure.

### 3.11 Warm ivory light surface — `material.warmIvorySurface`

**Character:** A controlled luminous or satin surface representing human clarity, care, and language.

**Reflection behavior:** Soft, diffuse, never fluorescent.

**Nominal response:** Nonmetallic; low emission when luminous; color anchored to `ivory.100`–`ivory.300`.

**Lighting response:** Warm and legible against obsidian and graphite. It may softly influence nearby materials.

**Approved uses:** Primary typography, captions, human-centered markers, rare luminous insets, and care/legacy moments.

**Prohibited uses:** Full-screen white fields, hard clinical glare, or large emissive surfaces that flatten the scene.

### 3.12 Material pairing rules

- A shot should normally feature one hero material, one structural material, and at most one accent material.
- Champagne gold and brushed brass may coexist only when their hierarchy is obvious.
- Obsidian glass needs titanium, stone, or matte graphite to prevent a weightless glass-only world.
- Carbon fiber is a detail, never the visual premise.
- Ceramic and warm ivory introduce human calm; use them selectively so they retain meaning.
- Glass always has a functional reason: separation, reveal, protection, depth, or interface integration.
- No scene may show all approved materials at once.

---

## 4. Complete lighting system

Every shot defines a lighting start state, development, hero state, and exit state. Lights are narrative instruments, not decoration.

### 4.1 Executive key — `light.executiveKey`

- **Role:** Establishes the primary subject and its physical credibility.
- **Character:** Large, soft, controlled ivory-neutral source with disciplined falloff.
- **Placement:** Usually above and 25–55 degrees off-axis; never flat frontal fill.
- **Use:** Logos, hero architecture, human meaning, and interface proof.
- **Rule:** One dominant key direction per shot.
- **Prohibit:** Evenly exposing the entire environment or using pure white glare.

### 4.2 Precision rim — `light.precisionRim`

- **Role:** Separates a logo, ring, edge, or foreground object from darkness.
- **Character:** Narrow ivory, pale-gold, or restrained green line with fast falloff.
- **Use:** Material edges, emblem depth, apertures, and transition silhouettes.
- **Rule:** Rim light traces form; it does not outline every object.
- **Prohibit:** Neon strokes around all geometry.

### 4.3 Architectural accent — `light.architecturalAccent`

- **Role:** Reveals scale, depth, frames, bays, and distant structure.
- **Character:** Low-intensity raking or recessed illumination.
- **Use:** Background continuity, foreground parallax, and world orientation.
- **Rule:** Accents form a hierarchy with dark zones between them.
- **Prohibit:** Repeating runway lights, nightclub strips, or uniformly lit grids.

### 4.4 Intelligence green — `light.intelligenceGreen`

- **Role:** Represents approved knowledge, guidance, living systems, and governed connection.
- **Character:** Deep apothecary green with a controlled emerald highlight; localized, recessed, and directional.
- **Use:** Energy channels, source confirmation, Onyx activation, system paths, and knowledge movement.
- **Rule:** Green light travels through or under a system; it is not the color of the whole room.
- **Prohibit:** Full-screen green washes, neon lime, toxic saturation, or unexplained glow.

### 4.5 Gold sweep — `light.goldSweep`

- **Role:** Marks ceremony, leadership, a standard, a precision lock, or a hero reveal.
- **Character:** Narrow pale-gold traveling reflection with clean falloff and no broad yellow haze.
- **Use:** GAC/TAS HQ emblem reveals, significance edges, and selected transitions.
- **Rule:** A sweep reveals material once; it does not loop continuously.
- **Prohibit:** Constant scanning, wide yellow beams, or repeated use on ordinary UI.

### 4.6 Human warmth — `light.humanWarmth`

- **Role:** Connects the technical world to people, patients, care, culture, and legacy.
- **Character:** Soft warm ivory with gentle diffusion.
- **Use:** Act I, coaching, recognition, patient preparation, and closing moments.
- **Rule:** Warmth modifies the existing world rather than replacing it with a beige scene.
- **Prohibit:** Sentimental orange lighting or stock-photography warmth.

### 4.7 Volumetric beam — `light.volumetricBeam`

- **Role:** Reveals depth, scale, a threshold, or controlled atmospheric structure.
- **Character:** Soft-edged beam visible only through localized atmosphere.
- **Use:** Hero chambers, apertures, major act transitions, and emblem emergence.
- **Rule:** Normally one primary volumetric direction per composition; opacity remains restrained.
- **Prohibit:** Multiple intersecting stage beams, permanent god rays, or beams passing through solid geometry without logic.

### 4.8 Interface task light — `light.interfaceTask`

- **Role:** Makes real product information crisp and readable inside the cinematic world.
- **Character:** Neutral-to-warm, localized, low-glare illumination.
- **Use:** Daily Headquarters, Onyx, Knowledge, Training, and Leadership interface planes.
- **Rule:** Readability outranks atmosphere; surrounding architecture falls back to support the evidence.
- **Prohibit:** Colored light over body copy or specular glare across content.

### 4.9 Negative fill and shadow — `light.negativeFill`

- **Role:** Preserves authority, scale, depth, and material contrast.
- **Character:** Intentional darkness with readable silhouettes and controlled black levels.
- **Rules:**
  - Maintain a clear focal exposure hierarchy.
  - Preserve detail on ordinary phones and presentation displays.
  - Contact shadows anchor objects; soft environmental shadows establish scale.
  - Shadows may conceal nonessential detail, never required information.
  - Avoid crushed blacks around logos and captions.
- **Prohibit:** Uniform ambient fill, gray fog over the frame, or darkness used to hide unfinished assets.

### 4.10 Lighting ratios and limits

- At least 65% of most cinematic frames should remain low-luminance or negative space, while all essential content remains legible.
- The focal subject should have the clearest contrast and most resolved material response.
- Maximum two visible colored-light families in a shot, excluding warm ivory readability light.
- Bloom belongs only to motivated luminous sources and should not enlarge their apparent area dramatically.
- Reflections must correspond to an implied source or environmental plane.
- A lighting change must reveal, prioritize, transition, or respond to Onyx—not merely prevent stillness.

---

## 5. Environmental object library

Objects are reusable families. Each family should support a small number of proportion, depth, and finish variants while retaining a common identity.

### 5.1 Architectural frames — `environment.frame.*`

Machined titanium or dark-stone structures defining depth, thresholds, and protected information zones.

- **Variants:** portal, bay, rail, monolith, inset, device bezel.
- **Motion:** precision alignment, slow reveal by parallax, or controlled aperture movement.
- **Use:** Compose the frame, carry transitions, and integrate interfaces.
- **Avoid:** Random rectangles, repeated tunnel grids, or decorative scaffolding.

### 5.2 Floating structures — `environment.structure.*`

Bounded architectural masses that imply a modular operating system.

- **Variants:** slab, fin, suspended plane, system block, layered core.
- **Motion:** Very slow authored drift only when structurally plausible; preferred motion is alignment, separation, or camera-relative parallax.
- **Use:** Complexity, reorganization, system emergence, and scale.
- **Avoid:** Weightless rocks, constant bobbing, or crowded debris fields.

### 5.3 Structural rings — `environment.ring.*`

Machined circular or partial-ring systems representing focus, connection, governance, or a system core.

- **Variants:** hero halo, segmented system ring, aperture ring, four-pillar ring.
- **Motion:** Slow partial rotation, segment alignment, internal light travel, or precision lock.
- **Use:** Around—not over—the protected TAS HQ emblem; system reveals and chapter gateways.
- **Avoid:** Spinning the flat logo, gyroscope clutter, perpetual rotation, or generic sci-fi portals.

### 5.4 Glass panels — `environment.glassPanel.*`

Obsidian, smoked optical, or frosted glass planes with functional depth.

- **Variants:** interface plane, source layer, privacy plane, reflection carrier, foreground occluder.
- **Motion:** Camera discovery, short mechanical travel, mask reveal, focus change, or transition occlusion.
- **Use:** Interface integration, knowledge layering, and spatial separation.
- **Avoid:** Card-grid walls, unreadable transparency, and stacked glassmorphism.

### 5.5 Energy paths — `environment.energyPath.*`

Governed apothecary-green information routes embedded within architecture.

- **Variants:** recessed channel, thin bridge, node path, source-confirmation pulse, pillar connection.
- **Motion:** Directional authored travel with clear origin and destination.
- **Use:** Knowledge retrieval, connection, synchronization, approval, and Onyx response.
- **Avoid:** Random circuit-board wallpaper, bright neon tubes, infinite loops, or movement without meaning.

### 5.6 Particles — `environment.particleField.*`

Sparse, fine atmospheric particulates visible only near motivated light.

- **Variants:** beam dust, localized activation motes, distant microfield.
- **Motion:** Seeded, slow, bounded, and subordinate to camera motion.
- **Use:** Reveal depth and light volume during selected hero moments.
- **Avoid:** Full-frame snow, spark explosions, logo disintegration, glitter, or meaning-critical motion.

### 5.7 Fog and atmosphere — `environment.atmosphere.*`

Low-density spatial depth, never a color wash.

- **Variants:** floor haze, beam-local fog, distant depth veil, aperture breath.
- **Motion:** Low-frequency authored development; pause-safe and deterministic.
- **Use:** Separate layers, reveal scale, soften distance, and support volumetric light.
- **Avoid:** Graying the entire image, obscuring copy, green smoke, or constant heavy movement.

### 5.8 Light bridges — `environment.lightBridge.*`

Thin, restrained paths connecting architecture, people, pillars, or knowledge states.

- **Variants:** linear link, curved connection, interface handoff, four-pillar convergence.
- **Motion:** Builds from origin to destination, resolves, then dims to a stable state.
- **Use:** Show relationship and governed flow.
- **Avoid:** Laser beams, crossing spaghetti, decorative webs, or more than the audience can parse in one beat.

### 5.9 Plinths and hero chambers — `environment.heroStage.*`

Physical spaces designed for GAC and TAS HQ emblem moments.

- **Variants:** obsidian plinth, suspended core, architectural recess, circular chamber.
- **Motion:** Environment responds through light, ring, reflection, and camera; the protected image itself remains undistorted.
- **Use:** Ceremonial reveals and final returns.
- **Avoid:** Logo floating alone on a gradient or sitting inside a generic card.

### 5.10 Intelligence nodes — `environment.node.*`

Small governed connection points that represent people, sources, standards, or actions.

- **Variants:** dormant, active, verified, escalated, leadership.
- **Motion:** Short activation, routed connection, or confidence confirmation.
- **Use:** Visual systems with explicit meaning and a readable legend through context.
- **Avoid:** Decorative starfields, hundreds of identical dots, or analytics without narrative purpose.

### 5.11 Object-density rule

Each shot must declare:

- one focal object or relationship;
- zero to three supporting object families;
- one environmental-life system;
- one incoming and one outgoing continuity carrier.

If more object families are present, the shot requires a written hierarchy justification. Complexity is shown through choreography, not clutter.

---

## 6. Color tokens and exact roles

The following values are canonical starting tokens. Implementations may use calibrated tonal interpolation, but may not change semantic roles without approval.

### 6.1 Neutral structure

| Token | Hex | Role |
|---|---:|---|
| `obsidian.950` | `#030706` | Deep frame, silence, negative space |
| `obsidian.900` | `#07100E` | Primary environmental dark |
| `obsidian.800` | `#0B1714` | Green-black material depth |
| `graphite.900` | `#111614` | Dark structural body |
| `graphite.800` | `#1A211E` | Machined planes and frames |
| `graphite.700` | `#27302C` | Lit structural edges |
| `graphite.500` | `#56615C` | Disabled/secondary neutral detail |

### 6.2 Apothecary intelligence

| Token | Hex | Role |
|---|---:|---|
| `green.950` | `#03120C` | Deep green absorption and shadow |
| `green.900` | `#082319` | Recessed system channels |
| `green.700` | `#0F5A3E` | Active governed knowledge |
| `green.500` | `#1B8A5D` | Focused intelligence illumination |
| `green.300` | `#62C99A` | Small verified highlight only |
| `green.glow` | `rgba(27,138,93,0.28)` | Localized bloom/atmospheric contribution |

Green signifies knowledge, guidance, connection, verification, or living system state. It is not a default background fill.

### 6.3 Significance metals

| Token | Hex | Role |
|---|---:|---|
| `gold.900` | `#3E2F18` | Deep metal shadow only |
| `gold.800` | `#6B5128` | Brushed brass body/shadow |
| `gold.500` | `#B89A5B` | Champagne-gold body |
| `gold.300` | `#D7C18A` | Lit gold surface |
| `gold.200` | `#E9D9AE` | Specular edge and sweep highlight |
| `gold.glow` | `rgba(215,193,138,0.20)` | Restrained local significance glow |

Gold signifies ceremony, standards, leadership, precision, and major milestones. It must remain scarce.

### 6.4 Human clarity

| Token | Hex | Role |
|---|---:|---|
| `ivory.50` | `#FFFDF6` | Rare peak highlight |
| `ivory.100` | `#F6F0E2` | Primary hero copy |
| `ivory.200` | `#E8E0D0` | Primary interface/caption copy |
| `ivory.300` | `#CFC5B4` | Supporting copy |
| `ivory.500` | `#978F82` | Quiet metadata and inactive labels |

Ivory signifies human clarity, language, care, and truth. Primary copy is ivory by default.

### 6.5 State tokens

| Token | Hex | Role |
|---|---:|---|
| `state.verified` | `#62C99A` | Approved/verified source, with icon/text reinforcement |
| `state.attention` | `#D7C18A` | Leadership attention or controlled caution |
| `state.escalation` | `#D09A72` | Responsible escalation, never alarm red by default |
| `state.error` | `#C96B68` | True system error only |
| `state.focus` | `#F6F0E2` | Keyboard focus with visible structural outline |

### 6.6 Contrast and usage rules

- Body copy must meet WCAG AA contrast against its actual moving background; critical controls and captions should target stronger contrast.
- Moving light may pass near copy but never reduce readability during the reading window.
- Gold text is limited to short ceremonial labels or key words, never body copy.
- Pure black `#000000` is reserved for media mattes or technical fallback; environmental black should retain calibrated depth.
- Pure white is reserved for tiny specular peaks, never large text or surfaces.
- Color meaning always has shape, label, icon, or narration reinforcement.

---

## 7. Iconography rules

Icons communicate function, source, status, or direction. They are not decorative symbols.

### 7.1 Form

- Geometric, restrained, and engineered with softened optical corrections.
- Default stroke family: 1.5–2px at a 24px reference size; scale optically, not mechanically.
- Consistent cap, join, corner radius, optical weight, and bounding box within each set.
- Prefer simple line or line-plus-contained-fill forms.
- Use filled icons only for selected/verified/critical states.
- Align to the interface grid; never stretch or distort.

### 7.2 Color and material

- Functional icons default to warm ivory or restrained graphite.
- Green indicates active knowledge, verified source, or guidance.
- Gold indicates leadership, standard, or ceremonial significance—not generic selection.
- Cinematic 3D icon objects are permitted only when they communicate a system concept and use approved materials.

### 7.3 Prohibited iconography

- Generic pills, bottles, medical crosses, hearts, molecule wallpaper, chat bubbles for Onyx, robot heads, brains, magic wands, sparks, rockets, trophies, shields without a governance meaning, and gaming badges.
- Mixed icon libraries with inconsistent weight.
- Emoji, novelty glyphs, thin decorative sci-fi symbols, or icons used as visual filler.
- Icon-only controls without accessible names or established understanding.

### 7.4 Onyx symbol rule

Onyx is an intelligence presence, not a chatbot mascot. Represent him through governed illumination, source-linked motion, a restrained intelligence mark if one is formally approved, and the environment's response. Do not invent a robot avatar or conversational bubble identity.

---

## 8. Texture philosophy

Texture exists to make light and material believable at the viewing distance where it can be perceived.

### Approved texture classes

- Fine directional machining on titanium and brass.
- Minute controlled micro-scratches on hero metal, visible only in close light.
- Low-contrast carbon weave at macro distance.
- Subtle honed mineral variation in dark stone.
- Extremely fine ceramic tooth.
- Clean optical glass with restrained edge variation.
- Optional fine cinematic grain applied at final composition level, not baked into every asset.

### Rules

- Texture scale must be physically plausible and consistent across objects.
- Seams, repetition, and obvious tiling are prohibited.
- Texture contrast should disappear before it becomes a pattern.
- Compression must not turn texture into crawling noise.
- Do not use texture to hide low-quality geometry, compositing, or lighting.
- Logos remain clean; do not distress, emboss, scratch, or texture the protected source artwork.
- Film grain, if used, is subtle, stable enough to avoid compression shimmer, and disabled in Essential tier.

### Prohibited textures

Grunge, fingerprints, dirt, heavy scratches, rust, distressed brass, marble veins, hex-grid wallpaper, random noise overlays, circuit-board patterns, fake lens dirt, and visible stock texture repetition.

---

## 9. Environmental animation rules

The environment must show life from the opening beat, but movement remains authored, hierarchical, and deterministic.

### 9.1 Approved motion systems

- Camera-linked foreground and background parallax.
- Slow structural alignment or separation.
- Partial ring rotation resolving into a lock.
- Recessed intelligence-green flow from a clear origin to destination.
- One-time gold or ivory material sweep.
- Localized fog development inside a beam.
- Seeded particles moving only within motivated light.
- Shadow and reflection travel tied to an implied moving source.
- Controlled internal illumination or long-decay pulse.
- Glass occlusion, focus development, and architecture-to-interface transformation.

### 9.2 Motion hierarchy

1. Camera or focal subject defines the beat.
2. Light reveals or responds.
3. Architecture supports the change.
4. Atmosphere confirms depth.
5. Particles and microdetail are optional finish.

No beat should run all five at equal intensity.

### 9.3 Timing and physics

- Heavy architecture: slow onset, substantial inertia, firm resolution.
- Precision mechanisms: concise travel, clean deceleration, exact lock.
- Light/information: faster than structure, directional, and purposeful.
- Atmosphere: low-frequency and nearly imperceptible until lit.
- Hero pulse: restrained amplitude and long decay; never a rhythmic nightclub loop.
- No independent animation may advance narrative state.
- All relevant state derives from canonical presentation time or a seeded deterministic input.
- Pause, seek, backward seek, replay, reduced motion, and hidden-tab recovery must reconstruct correctly.

### 9.4 Continuous-world rule

At least one carrier—architecture, camera direction, light, material, energy path, reflection, or sound—must bridge adjacent shots. Routine fade-to-blank resets are prohibited.

### 9.5 Reduced-motion rule

Replace travel and depth-heavy movement with stable composition, shorter dissolves, controlled light-state changes, and clear cuts. Preserve hierarchy, meaning, logo integrity, timing, and atmosphere. Reduced motion is an authored version, not a disabled version.

---

## 10. Logo asset integration

The protected source assets are:

- `gac-logo.png` — Gent Ascend Collective.
- `tas-hq-logo.png` — TAS HQ.

Use the best available source resolution. Do not redraw, trace, stretch, squash, recolor indiscriminately, crop destructively, sharpen aggressively, or apply permanent texture.

### Required integration

- Place each logo in a named hero-stage composition.
- Preserve exact aspect ratio and clear space.
- Use confident programmatic scale per viewport.
- Create dimensionality with environment, shadow, reflection, ring architecture, depth separation, or a light pass around the protected artwork.
- Keep the logo alive through restrained light, camera, environmental response, or slow surrounding structure.
- Center the logo in ceremonial hero moments when centered authority is intentional.
- Exit through camera travel, occlusion, transformation, or light loss—not merely opacity.

### Prohibited integration

- A PNG floating alone on a flat green gradient.
- Continuous spinning, rapid pulse, elastic scaling, nightclub bloom, particle explosion, fake 3D coin rotation, or alteration of core artwork.
- Copy that competes with the logo during its identification beat.

---

## 11. Responsive production rules

Mobile, tablet/older laptop, desktop, and executive display use the same canonical story and time but separately directed framing.

### 11.1 Mobile portrait

- Prefer a centered or upper-center hero logo with commanding scale.
- Use vertical frames, apertures, and depth rather than wide lateral architecture.
- Reduce foreground obstruction and large parallax amplitude.
- Limit visible supporting object families to the minimum needed.
- Protect captions, controls, sensor cutouts, and safe-area insets.
- Use narrower light beams and simplified reflections to preserve clarity.
- Replace fine textures that cannot survive pixel density or compression.

### 11.2 Tablet and older laptop

- Treat as a primary production target, not a fallback.
- Use bounded 2.5D depth, restrained atmosphere, and optimized hero layers.
- Preserve the hero/copy relationship at common laptop heights.
- Avoid huge offscreen textures and effects dependent on wide negative space.

### 11.3 Desktop and executive display

- Use wider architectural scale, stronger but controlled parallax, and deliberate negative space.
- Increase detail only where it remains visible at actual viewing distance.
- Keep essential subjects inside presentation-safe bounds; do not exile copy to screen edges.
- Validate on ordinary contrast and brightness settings, not only a calibrated monitor.

### 11.4 Responsive invariants

Every profile preserves narrative order, canonical timing, protected marks, approved materials/colors, focal hierarchy, captions, and controls. Viewports may change crop, focal bias, object count, texture resolution, atmosphere density, camera path amplitude, and quality tier—not meaning.

---

## 12. Quality tiers

Quality selection occurs before expensive asset creation/rendering where possible. Higher tiers add finish, never required meaning.

### 12.1 Essential

**Target:** Low-power devices, constrained browsers, reduced effects, and reliable fallback.

Includes:

- Premium art-directed still or minimally animated architecture.
- Primary subject, protected logo, typography, captions, and functional interfaces.
- One dominant light state with small authored changes.
- Simple masks, opacity, and bounded transforms.
- Static or very limited atmosphere.

Excludes:

- Decorative particles, expensive backdrop blur, real-time volumetrics, multiple live reflections, high-resolution noise, and persistent WebGL.

Essential must look intentional and complete, not empty.

### 12.2 Enhanced

**Target:** Default for Neil's older Mac, capable phones, tablets, and typical laptops.

Includes:

- Layered DOM/SVG/CSS or optimized media-based architecture.
- Bounded parallax and camera-like motion.
- Moving key/rim accents and one restrained atmospheric layer.
- Optimized logo light/specular treatment.
- Limited seeded particles only in hero moments.
- Selective blur and compositing within budgets.

Enhanced is the production baseline.

### 12.3 Cinematic

**Target:** Capable desktop and executive presentation hardware.

Includes:

- Fuller foreground depth and atmosphere.
- Higher-resolution pre-rendered hero media or selective WebGL.
- Improved material response, reflection, shadow, volumetric suggestion, depth of field, and motion finish.
- Restrained final grain/bloom where justified.

Cinematic may not change timing, copy, layout meaning, or director behavior.

### 12.4 Tier fallback contract

- Failed capability detection falls back silently to the next stable tier.
- Poster frames exist for complex hero media.
- Loss of WebGL, audio, or decorative assets never exposes a blank frame.
- Tier changes happen at safe boundaries, not visibly mid-shot unless recovering from failure.
- Every scene declares which assets exist at each tier.

---

## 13. Performance budgets

Neil's older Mac is a primary development and review constraint. The solution is selective complexity, optimized media, and active-shot rendering—not reduced creative ambition.

Budgets are guardrails. If a scene exceeds one, it must document the measured reason, visual benefit, fallback, and approval.

### 13.1 Runtime targets

| Measure | Essential | Enhanced | Cinematic |
|---|---:|---:|---:|
| Active frame target | stable 30 fps | stable 30 fps, pursue 45–60 | stable 60 fps where supported |
| Main-thread long tasks during playback | none over 100ms | fewer than 1 per 10s over 50ms | fewer than 1 per 10s over 50ms |
| Simultaneous WebGL canvases | 0 | 0–1 selective | 1 |
| Active atmospheric layers | 0–1 | 1 | 1–2 |
| Active particle count | 0 | normally ≤150 | normally ≤500 |
| Device pixel ratio cap | 1.0–1.25 | 1.25–1.5 | 1.5–2.0 |

Particle counts are implementation-dependent; visual density and measured cost take precedence. Never use particles for essential meaning.

### 13.2 Asset budgets

- Critical opening download target: **≤4 MB compressed** excluding optional audio; hard review threshold **6 MB**.
- Initial usable threshold must not wait for later acts.
- A single raster texture should normally remain **≤2048 px on its longest side** in Enhanced; use 4096 only for justified Cinematic hero assets.
- Use modern compressed formats where visual quality permits; provide stable fallbacks where required.
- A single cinematic video hero should normally remain **≤12 MB** and load progressively or near its act, not at initial threshold.
- Avoid more than one simultaneous decoded hero video on Neil's Mac.
- Audio is segmented by act/chapter and preloaded just in time; do not decode the entire film unnecessarily.
- Fonts are subset, limited in family/weight count, and preloaded only when critical.

### 13.3 Rendering and lifecycle rules

- Render the active shot and only the overlap required for transition.
- Dispose or suspend inactive canvas, video, observer, and animation work.
- Pause decorative work when presentation is paused or the tab is hidden.
- Avoid forced synchronous layout during active playback.
- Animate compositor-friendly properties where possible.
- Bound blur radius, shadow spread, and translucent stacking.
- Never stack multiple full-screen backdrop filters.
- Seed procedural effects; avoid uncontrolled random regeneration.
- Pre-render hero complexity when real-time rendering is less reliable or more expensive.

### 13.4 Required measurements

For every act, record:

- cold-load bytes and time;
- time to first intentional frame;
- playback frame stability on Neil's Mac;
- largest media/texture assets;
- memory behavior across complete play and replay;
- active layers and canvas/video count;
- pause/hidden-tab CPU behavior;
- Essential fallback behavior;
- exact-seek and backward-seek correctness.

Technical validation does not replace Neil's visual inspection.

---

## 14. Asset format and preparation rules

### Raster

- Preserve protected PNG logos unless an explicitly approved source replacement exists.
- Use AVIF/WebP for photographic or rendered layers when quality and browser support permit.
- Export at actual viewport needs with responsive variants; do not ship enormous source renders to every device.
- Premultiplied edges, alpha halos, banding, and compression noise are rejection defects.

### Vector

- Use SVG for authored geometric decoration, paths, masks, and interface iconography.
- Keep semantic text as text when practical.
- Remove editor metadata and hidden geometry.
- Do not convert or trace protected brand marks without approval.

### Video

- Use optimized MP4/WebM variants as appropriate, with poster frames and graceful still fallback.
- Avoid baked-in copy or captions unless the asset is purely decorative and localized text is not required.
- Loop only ambient layers with invisible seams; narrative hero video is director-controlled.
- Video time must follow the Presentation Director and recover correctly after pause/seek.

### 3D/WebGL

- Use only when it materially improves a signature moment.
- Prefer compressed geometry and textures, baked lighting where appropriate, and shared materials.
- Avoid high-poly assets invisible at display distance.
- Provide an Enhanced media/CSS fallback and Essential still fallback.

### Audio-related visual assets

Waveforms, meters, and equalizers are not default representations of Onyx. Visual response to voice should occur through light, architecture, and governed system activity.

---

## 15. Asset naming, organization, and metadata

Future implementation should organize reusable assets by function, not by a single scene's temporary name.

Recommended conceptual families:

```text
assets/
  brand/
  materials/
  environment/
    frames/
    structures/
    rings/
    glass/
    paths/
    atmosphere/
    nodes/
  lighting/
  icons/
  textures/
  media/
    posters/
    video/
  audio/
```

Each production asset should document:

- stable asset ID and human name;
- family and variant;
- source/creator and license;
- approved material/color tokens;
- semantic or decorative role;
- dimensions, duration, codec, and file size where applicable;
- alpha/color-space expectations;
- quality-tier availability;
- viewport variants;
- reduced-motion behavior;
- fallback/poster asset;
- scenes using it;
- last validation date.

Do not duplicate files to customize minor color or timing differences when tokens, parameters, masks, or controlled variants can preserve one source.

---

## 16. Asset reuse and extension rules

### Reuse hierarchy

Before creating an asset, future work must ask in order:

1. Can an approved existing asset be reused unchanged?
2. Can an approved family produce a documented parameter variant?
3. Can two approved assets be composed without violating hierarchy or performance?
4. Is a new family truly required by narrative meaning?

### Parameterized reuse

Approved variable properties may include scale, crop, depth, orientation, material variant, light intensity, reveal mask, quality tier, and viewport composition. Protected brand artwork and semantic meaning are not variable.

### New-asset gate

A proposed new asset family must state:

- the narrative need existing families cannot satisfy;
- its material and lighting behavior;
- color-token roles;
- motion and deterministic-state contract;
- Essential/Enhanced/Cinematic variants;
- mobile and reduced-motion treatment;
- measured or estimated performance cost;
- reuse potential in at least one additional scene, or a justified hero-only exception;
- license and source status.

### Versioning

- Preserve stable IDs for compatible refinements.
- Create a new variant or version when silhouette, semantic meaning, timing contract, or fallback changes materially.
- Do not silently replace a shared asset in a way that alters approved scenes.
- Audit all consumers before changing a reusable asset.

### Duplication prohibitions

- No near-identical gold materials with arbitrary hex values.
- No scene-specific copies of the same ring, fog, frame, or icon without a documented difference.
- No new visual language introduced to make one scene “more futuristic.”
- No effect package or stock asset added before proving it fits this Bible.

---

## 17. Permanently prohibited asset patterns

- Flat green or black gradients presented as completed environments.
- Static logos floating above copy.
- Muddy yellow-brown “gold.”
- Generic blue HUDs, neon cyberpunk, gaming interfaces, and spaceship dashboards.
- Pharmacy clichés: pill bottles, capsules, crosses, molecule wallpaper, stock clinicians, or shelves as identity.
- Glassmorphism everywhere.
- Random grids, hexagons, circuit patterns, particles, lens flares, and bloom.
- Full-screen fog or color wash.
- Chrome, mirror, plastic, marble, or carbon-fiber excess.
- Decorative machinery with no narrative or structural role.
- Particle explosions, logo disintegration, constant ring spinning, or energy with no source/destination.
- Mixed icon styles, robot/brain/chatbot Onyx imagery, and generic AI sparkle symbols.
- Unlicensed textures, fonts, stock renders, music, or visual assets.
- Meaning-critical visuals available only in the highest quality tier.
- Assets that cannot pause, seek, replay, or fall back reliably.

---

## 18. Scene asset specification contract

Before a future scene is implemented, its production specification must name:

- scene and shot IDs with canonical time ranges;
- focal subject and narrative meaning;
- hero, structural, and accent materials;
- key, rim, architectural, intelligence, significance, and human lights used;
- foreground, midground, background, and atmosphere object families;
- approved color tokens and their semantic roles;
- icon family and state rules, if any;
- texture visibility and viewing distance;
- environmental-life system;
- incoming and outgoing continuity carriers;
- Essential, Enhanced, and Cinematic assets;
- mobile, tablet, desktop, and executive-display composition changes;
- reduced-motion and audio-off behavior;
- decode/render/preload plan;
- fallback/poster state;
- deterministic pause/seek/replay behavior;
- expected performance budget and validation method.

If these choices are not defined, the scene is not production-ready.

---

## 19. Validation checklists

### 19.1 Asset intake checklist

- [ ] The asset has a clear narrative or functional role.
- [ ] It belongs to an approved family or passes the new-asset gate.
- [ ] Source, creator, and license are documented.
- [ ] Protected logos remain unmodified.
- [ ] Material and color tokens are named explicitly.
- [ ] Reflection and lighting behavior are defined.
- [ ] Texture scale is physically plausible and does not tile visibly.
- [ ] Motion is deterministic and Presentation Director-compatible.
- [ ] Mobile, reduced-motion, and quality-tier variants exist.
- [ ] A graceful fallback/poster exists where needed.
- [ ] File dimensions, format, compression, and size fit the budget.
- [ ] Accessibility role is documented as semantic or decorative.
- [ ] Reuse does not silently alter an existing approved scene.

### 19.2 Material validation checklist

- [ ] The shot uses a clear hero, structural, and optional accent material hierarchy.
- [ ] Metal reads through directional reflection and edge light, not flat fill.
- [ ] Gold reads as champagne metal, never mustard, orange, or brown-yellow.
- [ ] Glass has a functional reason and preserves readability.
- [ ] Carbon fiber, brass, texture, and imperfections remain restrained.
- [ ] Surfaces have believable scale and consistent texture density.
- [ ] The scene does not display every approved material at once.
- [ ] Essential tier retains a premium material impression without expensive effects.

### 19.3 Lighting validation checklist

- [ ] One dominant key direction is clear.
- [ ] The focal subject has the strongest resolved contrast.
- [ ] Dark zones preserve structure and readable silhouettes.
- [ ] Green represents knowledge/guidance rather than filling the room.
- [ ] Gold light marks a truly significant beat.
- [ ] Every reflection corresponds to an implied source.
- [ ] Volumetric light is localized and does not resemble a stage show.
- [ ] Interface and caption readability survive all moving-light states.
- [ ] Bloom is localized and restrained.
- [ ] Lighting changes reveal, prioritize, transition, or respond to Onyx.

### 19.4 Environment validation checklist

- [ ] The shot exists inside the persistent TAS HQ world, not on a flat background.
- [ ] Foreground, midground, and background establish believable depth or a purposeful alternative.
- [ ] Object families are approved and limited by a clear hierarchy.
- [ ] At least one subtle environmental-life system develops during holds.
- [ ] Movement has a source, destination, cause, and resolution.
- [ ] No object is present only to look “futuristic.”
- [ ] Adjacent shots share a continuity carrier.
- [ ] Pharmacy, gaming, cyberpunk, and generic AI clichés are absent.
- [ ] The composition does not default mechanically to centered-everything or lower-left copy.
- [ ] The logo, when present, is a commanding integrated artifact.

### 19.5 Color, icon, and texture checklist

- [ ] Every color uses a named token and approved semantic role.
- [ ] Primary copy is warm ivory unless a documented exception applies.
- [ ] Color is not the only state indicator.
- [ ] Actual moving-background contrast passes accessibility requirements.
- [ ] Icons share one coherent geometry and optical weight.
- [ ] Onyx is not represented as a robot, chatbot bubble, or generic AI symbol.
- [ ] Texture is visible only where it improves material credibility.
- [ ] No grunge, tiling, crawling noise, or compression shimmer appears.

### 19.6 Responsive and performance checklist

- [ ] Mobile portrait has an independently directed composition.
- [ ] Tablet/older laptop is treated as a primary target.
- [ ] Desktop/display uses additional scale without moving essential content out of safe bounds.
- [ ] Essential, Enhanced, and Cinematic preserve story and hierarchy.
- [ ] The active scene stays within documented layer, media, and rendering budgets.
- [ ] Critical opening payload meets its target or has an approved exception.
- [ ] Only active shots and required transition overlap render.
- [ ] Hidden and paused states stop decorative work.
- [ ] Cold load, play, pause, seek, backward seek, replay, and interruption are verified.
- [ ] Neil's older Mac can review Enhanced tier reliably.
- [ ] Technical checks do not claim or replace Neil's visual approval.

### 19.7 Final scene approval checklist

- [ ] The scene passes the applicable Cinematic Direction Bible checklists.
- [ ] It passes every relevant checklist in this document.
- [ ] No prohibited pattern appears.
- [ ] All assets are approved, licensed, named, and reusable.
- [ ] Material, lighting, and environmental hierarchy are obvious in the first beat.
- [ ] The scene remains alive without distracting from narration or copy.
- [ ] The result feels premium at Essential tier and gains finish—not meaning—at higher tiers.
- [ ] Deviations are documented and explicitly approved.
- [ ] Neil has been given the completed phase for visual inspection.

---

## 20. Required instruction for future build-sequence documents

Every future build-sequence document must begin with an instruction substantially equivalent to:

> Read `docs/CINEMATIC_DIRECTION_BIBLE.md` and `docs/PRODUCTION_ASSET_BIBLE.md` completely before acting. Treat them as permanent, coequal creative references unless Neil explicitly overrides a named rule. The Cinematic Direction Bible governs story, direction, composition, motion, and experience; the Production Asset Bible governs materials, lighting, environmental objects, color, iconography, texture, quality, performance, and reuse. Preserve the deterministic Presentation Director and established architecture. Existing assets or visuals are not approved merely because they already exist.

Each build sequence must also:

1. Cite the relevant sections of both Bibles in its acceptance criteria.
2. Declare the approved asset families and tokens it will reuse.
3. Complete the scene asset specification contract before implementation.
4. Include Essential, Enhanced, Cinematic, mobile, desktop, reduced-motion, audio-off, and older-Mac behavior from the beginning.
5. Validate performance without lowering the creative standard or claiming technical tests equal visual approval.
6. Add no new material, light, object, color, icon, texture, or effect family without passing the new-asset gate.
7. Report every intentional deviation and obtain Neil's explicit approval when required.

---

## 21. Final production standard

The TAS HQ world succeeds when it feels constructed rather than decorated: obsidian depth, machined structure, champagne-metal significance, apothecary-green intelligence, warm-ivory clarity, controlled glass, credible light, and purposeful atmospheric life.

No future scene should need to invent what “premium,” “advanced,” or “futuristic” means. Those qualities now have an approved physical vocabulary, semantic palette, motion logic, responsive contract, performance budget, and validation gate.

The standard is not more assets or more effects.

The standard is **the right asset, physically believable, narratively necessary, consistently reused, and beautifully directed**.

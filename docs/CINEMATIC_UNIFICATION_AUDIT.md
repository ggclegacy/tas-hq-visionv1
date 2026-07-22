# Cinematic Unification Audit

Baseline verified from source: Prologue `0–54s`, Act I `54–136s`, Act II `136–226s`; total 226 seconds. Baseline checks pass with 60 tests. JS is 228.76 kB / 71.27 kB gzip; CSS is 13.22 kB / 4.07 kB gzip. Both protected 2000×2000 RGBA PNG root/public pairs match their recorded SHA-256 hashes.

The prior 23-shot timing uses long, often equalized 8–12 second holds. Copy masking was coupled to whole-shot progress, so phrases could take most of a shot to settle. Scene transitions were local fades/cuts without adjacent-shot overlap state. Logo rendering was one image layer with a static transform. Production colors mixed muted mustard values and dark green fields. The stage and Director separation remain correct and are preserved.

Migration: keep all shot IDs/copy/order, retime Prologue to 40s, Act I to 62s, Act II to 68s; add validated 500–1600ms overlaps, continuity carriers, sub-900ms full-legibility points, emblem variants, preload hints, semantic luxury tokens, and a debug overlap readout. DOM/CSS is retained: WebGL would not materially improve the specific Scene 1 need enough to justify bundle, cleanup, and older-Mac cost.

Browser screenshot automation remains unavailable. Component/resolver checks, source audits, production build, and HTTP smoke provide engineering evidence.

import type {
  PresentationManifest,
  TimeRange,
  ValidationIssue,
  ValidationResult,
} from "./types";

const supportedCueTypes = new Set([
  "visual",
  "media",
  "caption",
  "camera",
  "interface",
]);

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

function isTimeRange(value: unknown): value is TimeRange {
  return (
    isRecord(value) &&
    typeof value.startMs === "number" &&
    typeof value.endMs === "number"
  );
}

export function validateManifest(input: unknown): ValidationResult {
  const issues: ValidationIssue[] = [];
  const issue = (path: string, code: string, message: string) => {
    issues.push({ path, code, message });
  };

  if (!isRecord(input)) {
    return {
      ok: false,
      issues: [
        {
          path: "$",
          code: "invalid_manifest",
          message: "Manifest must be an object.",
        },
      ],
    };
  }

  const { metadata, assets, narrationTracks, captionTracks, acts } = input;
  if (!isRecord(metadata) || typeof metadata.durationMs !== "number") {
    issue(
      "metadata",
      "invalid_metadata",
      "metadata.durationMs must be a number.",
    );
  }
  if (!Array.isArray(assets))
    issue("assets", "invalid_collection", "assets must be an array.");
  if (!Array.isArray(narrationTracks))
    issue(
      "narrationTracks",
      "invalid_collection",
      "narrationTracks must be an array.",
    );
  if (!Array.isArray(captionTracks))
    issue(
      "captionTracks",
      "invalid_collection",
      "captionTracks must be an array.",
    );
  if (!Array.isArray(acts))
    issue("acts", "invalid_collection", "acts must be an array.");

  if (issues.length > 0) return { ok: false, issues };

  const manifest = input as unknown as PresentationManifest;
  const ids = new Map<string, string>();
  const assetIds = new Set(manifest.assets.map((asset) => asset.id));
  const narrationIds = new Set(
    manifest.narrationTracks.map((track) => track.id),
  );
  const captionIds = new Set(manifest.captionTracks.map((track) => track.id));

  const registerId = (id: string, path: string) => {
    const previousPath = ids.get(id);
    if (previousPath) {
      issue(path, "duplicate_id", `ID "${id}" duplicates ${previousPath}.`);
    } else {
      ids.set(id, path);
    }
  };

  const validateRange = (range: unknown, path: string, parent?: TimeRange) => {
    if (!isTimeRange(range)) {
      issue(path, "invalid_range", "startMs and endMs must be numbers.");
      return;
    }
    if (range.startMs < 0 || range.endMs <= range.startMs) {
      issue(
        path,
        "invalid_range",
        `Range ${range.startMs}–${range.endMs} must be non-negative with endMs after startMs.`,
      );
    }
    if (
      parent &&
      (range.startMs < parent.startMs || range.endMs > parent.endMs)
    ) {
      issue(
        path,
        "range_outside_parent",
        "Timed item must remain within its parent range.",
      );
    }
  };

  const validateNoOverlap = (ranges: readonly TimeRange[], path: string) => {
    const sorted = [...ranges].sort((a, b) => a.startMs - b.startMs);
    for (let index = 1; index < sorted.length; index += 1) {
      const previous = sorted[index - 1];
      const current = sorted[index];
      if (previous && current && current.startMs < previous.endMs) {
        issue(
          path,
          "overlapping_ranges",
          `Range beginning at ${current.startMs} overlaps a prior range.`,
        );
      }
    }
  };

  manifest.assets.forEach((asset, index) =>
    registerId(asset.id, `assets[${index}]`),
  );
  manifest.narrationTracks.forEach((track, index) => {
    const path = `narrationTracks[${index}]`;
    registerId(track.id, path);
    validateRange(track, path);
    if (!assetIds.has(track.assetId))
      issue(
        `${path}.assetId`,
        "missing_reference",
        `Asset "${track.assetId}" does not exist.`,
      );
  });
  manifest.captionTracks.forEach((track, trackIndex) => {
    const path = `captionTracks[${trackIndex}]`;
    registerId(track.id, path);
    track.cues.forEach((cue, cueIndex) => {
      registerId(cue.id, `${path}.cues[${cueIndex}]`);
      validateRange(cue, `${path}.cues[${cueIndex}]`);
    });
    validateNoOverlap(track.cues, `${path}.cues`);
  });

  validateNoOverlap(manifest.acts, "acts");
  manifest.acts.forEach((act, actIndex) => {
    const actPath = `acts[${actIndex}]`;
    registerId(act.id, actPath);
    validateRange(act, actPath, {
      startMs: 0,
      endMs: manifest.metadata.durationMs,
    });
    validateNoOverlap(act.chapters, `${actPath}.chapters`);
    act.chapters.forEach((chapter, chapterIndex) => {
      const chapterPath = `${actPath}.chapters[${chapterIndex}]`;
      registerId(chapter.id, chapterPath);
      validateRange(chapter, chapterPath, act);
      validateNoOverlap(chapter.scenes, `${chapterPath}.scenes`);
      const sceneDuration = chapter.scenes.reduce(
        (total, scene) => total + (scene.endMs - scene.startMs),
        0,
      );
      if (sceneDuration !== chapter.endMs - chapter.startMs) {
        issue(
          chapterPath,
          "chapter_duration_mismatch",
          `Scene durations total ${sceneDuration}ms but chapter duration is ${chapter.endMs - chapter.startMs}ms.`,
        );
      }

      chapter.scenes.forEach((scene, sceneIndex) => {
        const scenePath = `${chapterPath}.scenes[${sceneIndex}]`;
        registerId(scene.id, scenePath);
        validateRange(scene, scenePath, chapter);

        scene.narrationTrackIds.forEach((id, index) => {
          if (!narrationIds.has(id))
            issue(
              `${scenePath}.narrationTrackIds[${index}]`,
              "missing_reference",
              `Narration track "${id}" does not exist.`,
            );
        });
        scene.captionTrackIds.forEach((id, index) => {
          if (!captionIds.has(id))
            issue(
              `${scenePath}.captionTrackIds[${index}]`,
              "missing_reference",
              `Caption track "${id}" does not exist.`,
            );
        });

        const cameraIds = new Set(
          scene.cameraInstructions.map((item) => item.id),
        );
        const choreographyIds = new Set(
          scene.interfaceChoreography.map((item) => item.id),
        );
        scene.cameraInstructions.forEach((item, index) => {
          registerId(item.id, `${scenePath}.cameraInstructions[${index}]`);
          validateRange(
            item,
            `${scenePath}.cameraInstructions[${index}]`,
            scene,
          );
          if (item.kind !== "hold" && !item.reducedMotion)
            issue(
              `${scenePath}.cameraInstructions[${index}].reducedMotion`,
              "missing_reduced_motion",
              `Camera instruction "${item.id}" requires a reduced-motion alternative.`,
            );
        });
        scene.ambientAudio.forEach((item, index) => {
          registerId(item.id, `${scenePath}.ambientAudio[${index}]`);
          validateRange(item, `${scenePath}.ambientAudio[${index}]`, scene);
          if (!assetIds.has(item.assetId))
            issue(
              `${scenePath}.ambientAudio[${index}].assetId`,
              "missing_reference",
              `Asset "${item.assetId}" does not exist.`,
            );
        });
        scene.interfaceChoreography.forEach((item, index) => {
          registerId(item.id, `${scenePath}.interfaceChoreography[${index}]`);
          validateRange(
            item,
            `${scenePath}.interfaceChoreography[${index}]`,
            scene,
          );
          if (!item.reducedMotion)
            issue(
              `${scenePath}.interfaceChoreography[${index}].reducedMotion`,
              "missing_reduced_motion",
              `Interface choreography "${item.id}" requires a reduced-motion alternative.`,
            );
        });

        scene.cues.forEach((cue, cueIndex) => {
          const cuePath = `${scenePath}.cues[${cueIndex}]`;
          registerId(cue.id, cuePath);
          validateRange(cue, cuePath, scene);
          const cueRecord = cue as unknown as Record<string, unknown>;
          if (cueRecord.requiresMotion === true && !cue.reducedMotion)
            issue(
              `${cuePath}.reducedMotion`,
              "missing_reduced_motion",
              `Motion cue "${cue.id}" requires a reduced-motion alternative.`,
            );
          if (
            typeof cueRecord.type !== "string" ||
            !supportedCueTypes.has(cueRecord.type)
          ) {
            issue(
              cuePath,
              "unsupported_cue_type",
              `Cue type "${String(cueRecord.type)}" is unsupported.`,
            );
            return;
          }
          if (cue.type === "media" && !assetIds.has(cue.assetId))
            issue(
              `${cuePath}.assetId`,
              "missing_reference",
              `Asset "${cue.assetId}" does not exist.`,
            );
          if (cue.type === "caption" && !captionIds.has(cue.captionTrackId))
            issue(
              `${cuePath}.captionTrackId`,
              "missing_reference",
              `Caption track "${cue.captionTrackId}" does not exist.`,
            );
          if (cue.type === "camera" && !cameraIds.has(cue.cameraInstructionId))
            issue(
              `${cuePath}.cameraInstructionId`,
              "missing_reference",
              `Camera instruction "${cue.cameraInstructionId}" does not exist in this scene.`,
            );
          if (
            cue.type === "interface" &&
            !choreographyIds.has(cue.choreographyId)
          )
            issue(
              `${cuePath}.choreographyId`,
              "missing_reference",
              `Interface choreography "${cue.choreographyId}" does not exist in this scene.`,
            );
        });
        for (const cueType of supportedCueTypes) {
          validateNoOverlap(
            scene.cues.filter((cue) => cue.type === cueType),
            `${scenePath}.cues[type=${cueType}]`,
          );
        }

        for (const [name, transition] of [
          ["enterTransition", scene.enterTransition],
          ["exitTransition", scene.exitTransition],
        ] as const) {
          if (transition.durationMs < 0)
            issue(
              `${scenePath}.${name}`,
              "invalid_duration",
              "Transition duration cannot be negative.",
            );
          if (transition.durationMs > 0 && !transition.reducedMotion)
            issue(
              `${scenePath}.${name}.reducedMotion`,
              "missing_reduced_motion",
              "Timed transition requires a reduced-motion alternative.",
            );
        }
      });
    });
  });

  return issues.length === 0 ? { ok: true, manifest } : { ok: false, issues };
}

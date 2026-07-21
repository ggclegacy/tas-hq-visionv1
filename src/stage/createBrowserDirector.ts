import type { MediaAdapter } from "../director";
import { PresentationDirector } from "../director";
import { foundationManifest, validateManifest } from "../presentation";

const silentMediaAdapter: MediaAdapter = {
  prepare: () => undefined,
  play: () => undefined,
  pause: () => undefined,
  seek: () => undefined,
  stop: () => undefined,
  cleanup: () => undefined,
};

export function createBrowserDirector(): PresentationDirector {
  const validation = validateManifest(foundationManifest);
  if (!validation.ok) {
    throw new Error(
      `Foundation manifest is invalid: ${validation.issues.map((issue) => `${issue.path}: ${issue.message}`).join("; ")}`,
    );
  }

  const director = new PresentationDirector(validation.manifest, {
    clock: { now: () => performance.now() },
    media: silentMediaAdapter,
  });
  director.prepare();
  return director;
}

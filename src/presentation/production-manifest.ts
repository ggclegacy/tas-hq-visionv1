import {
  actOneDefinition,
  actOneShots,
  ACT_ONE_END_MS,
} from "./act-one-manifest";
import { prologueManifest } from "./prologue-manifest";
import type { PresentationManifest } from "./types";

export const PRODUCTION_DURATION_MS = ACT_ONE_END_MS;

export const productionManifest: PresentationManifest = {
  ...prologueManifest,
  metadata: {
    ...prologueManifest.metadata,
    id: "tas-hq-executive-vision",
    title: "TAS HQ Executive Vision Experience",
    version: "5.0.0",
    durationMs: PRODUCTION_DURATION_MS,
  },
  acts: [prologueManifest.acts[0]!, actOneDefinition],
  shots: [...(prologueManifest.shots ?? []), ...actOneShots],
};

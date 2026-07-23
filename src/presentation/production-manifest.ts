import { actOneDefinition, actOneShots } from "./act-one-manifest";
import { prologueManifest } from "./prologue-manifest";
import {
  actTwoDefinition,
  actTwoShots,
  ACT_TWO_END_MS,
} from "./act-two-manifest";
import type { PresentationManifest } from "./types";

export const PRODUCTION_DURATION_MS = ACT_TWO_END_MS;

export const productionManifest: PresentationManifest = {
  ...prologueManifest,
  metadata: {
    ...prologueManifest.metadata,
    id: "tas-hq-executive-vision",
    title: "TAS HQ Executive Vision Experience",
    version: "8.0.0",
    durationMs: PRODUCTION_DURATION_MS,
  },
  acts: [prologueManifest.acts[0]!, actOneDefinition, actTwoDefinition],
  shots: [...(prologueManifest.shots ?? []), ...actOneShots, ...actTwoShots],
};

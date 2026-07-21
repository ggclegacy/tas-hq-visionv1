export interface ImageAsset {
  readonly id: "gac-logo" | "tas-hq-logo";
  readonly src: string;
  readonly source: string;
  readonly format: "image/png";
  readonly width: 2000;
  readonly height: 2000;
  readonly intendedUse: string;
  readonly accessibility: {
    readonly treatment: "decorative" | "meaningful";
    readonly alt: string;
  };
}

export const imageAssets = {
  gacLogo: {
    id: "gac-logo",
    src: "/assets/gac-logo.png",
    source: "/gac-logo.png",
    format: "image/png",
    width: 2000,
    height: 2000,
    intendedUse: "Presenting-credit sequence only.",
    accessibility: { treatment: "meaningful", alt: "GAC" },
  },
  tasHqLogo: {
    id: "tas-hq-logo",
    src: "/assets/tas-hq-logo.png",
    source: "/tas-hq-logo.png",
    format: "image/png",
    width: 2000,
    height: 2000,
    intendedUse: "Emblem formation, system reveal, and closing return only.",
    accessibility: { treatment: "meaningful", alt: "TAS HQ" },
  },
} as const satisfies Record<string, ImageAsset>;

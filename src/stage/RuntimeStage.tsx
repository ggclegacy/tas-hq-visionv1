import {
  type CSSProperties,
  useEffect,
  useMemo,
  useState,
  useSyncExternalStore,
} from "react";

import type { PresentationDirector } from "../director";
import { imageAssets } from "../media";
import {
  productionManifest,
  resolvePresentationFrame,
  type QualityTier,
  type ShotLayerDefinition,
  type ViewportClass,
} from "../presentation";

interface RuntimeStageProps {
  readonly director: PresentationDirector;
  readonly debug?: boolean;
}

function useMediaQuery(query: string): boolean {
  const [matches, setMatches] = useState(
    () => window.matchMedia?.(query).matches ?? false,
  );
  useEffect(() => {
    const media = window.matchMedia?.(query);
    if (!media) return;
    const update = () => setMatches(media.matches);
    media.addEventListener?.("change", update);
    return () => media.removeEventListener?.("change", update);
  }, [query]);
  return matches;
}

function useViewportClass(): ViewportClass {
  const mobile = useMediaQuery("(max-width: 39.99rem)");
  const tablet = useMediaQuery("(min-width: 40rem) and (max-width: 74.99rem)");
  return mobile ? "mobile" : tablet ? "tablet" : "desktop";
}

export function RuntimeStage({ director, debug = false }: RuntimeStageProps) {
  const snapshot = useSyncExternalStore(
    director.subscribe,
    director.getSnapshot,
    director.getSnapshot,
  );
  const systemReducedMotion = useMediaQuery("(prefers-reduced-motion: reduce)");
  const detectedViewport = useViewportClass();
  const [captionsEnabled, setCaptionsEnabled] = useState(false);
  const [quality, setQuality] = useState<QualityTier>("enhanced");
  const [debugViewport, setDebugViewport] = useState<ViewportClass | null>(
    null,
  );
  const [debugReduced, setDebugReduced] = useState(false);
  const [fullscreenMessage, setFullscreenMessage] = useState("");
  const viewport = debugViewport ?? detectedViewport;
  const reducedMotion = systemReducedMotion || debugReduced;
  const frame = useMemo(
    () =>
      resolvePresentationFrame(productionManifest, snapshot, {
        quality,
        reducedMotion,
        captionsEnabled,
        viewport,
      }),
    [captionsEnabled, quality, reducedMotion, snapshot, viewport],
  );

  useEffect(() => {
    if (snapshot.state !== "playing") return;
    let request = 0;
    const update = () => {
      if (director.getSnapshot().state !== "playing") return;
      try {
        director.tick();
        request = requestAnimationFrame(update);
      } catch (error) {
        director.fail(error);
      }
    };
    request = requestAnimationFrame(update);
    return () => cancelAnimationFrame(request);
  }, [director, snapshot.state]);

  useEffect(() => {
    const onVisibility = () => {
      if (
        document.visibilityState === "hidden" &&
        director.getSnapshot().state === "playing"
      )
        director.handleVisibilityInterruption();
    };
    document.addEventListener("visibilitychange", onVisibility);
    return () => document.removeEventListener("visibilitychange", onVisibility);
  }, [director]);

  useEffect(() => {
    for (const asset of [imageAssets.gacLogo, imageAssets.tasHqLogo]) {
      const image = new Image(asset.width, asset.height);
      image.decoding = "async";
      image.src = asset.src;
      void image.decode?.().catch(() => undefined);
    }
  }, []);

  async function begin() {
    setFullscreenMessage("");
    try {
      if (document.documentElement.requestFullscreen)
        await document.documentElement.requestFullscreen();
    } catch {
      setFullscreenMessage(
        "Fullscreen was unavailable. Presentation continues normally.",
      );
    }
    director.begin();
  }

  if (snapshot.state === "ready") {
    return (
      <main className="cinema-launch" aria-labelledby="launch-title">
        <div className="cinema-launch__vault" aria-hidden="true">
          <i />
          <i />
          <i />
        </div>
        <section className="cinema-launch__content">
          <span className="cinema-launch__rule" aria-hidden="true" />
          <p className="cinema-eyebrow">
            A Gent Ascend Collective Vision Experience
          </p>
          <img
            src={imageAssets.tasHqLogo.src}
            width={imageAssets.tasHqLogo.width}
            height={imageAssets.tasHqLogo.height}
            alt={imageAssets.tasHqLogo.accessibility.alt}
          />
          <h1 id="launch-title">TAS HQ</h1>
          <button
            className="cinema-primary-action"
            type="button"
            onClick={() => void begin()}
          >
            Begin the Presentation
          </button>
          <p className="cinema-launch__note">3 minutes · Sound optional</p>
          {fullscreenMessage && <p role="status">{fullscreenMessage}</p>}
        </section>
        {debug && (
          <ShotHarness
            {...{
              director,
              snapshot,
              quality,
              setQuality,
              debugViewport,
              setDebugViewport,
              debugReduced,
              setDebugReduced,
              frame,
            }}
          />
        )}
      </main>
    );
  }

  const shot = frame.shot;
  const camera = shot?.camera;
  const profile = shot?.shot.viewports[viewport];
  const entranceDuration = shot
    ? shot.shot.entranceEndMs - shot.shot.startMs
    : 1;
  const entranceProgress = shot
    ? Math.min(1, shot.localTimeMs / Math.max(1, entranceDuration))
    : 1;
  const style = {
    "--camera-x": `${camera?.driftX ?? 0}vw`,
    "--camera-y": `${camera?.driftY ?? 0}vh`,
    "--camera-scale": camera?.scale ?? 1,
    "--focal-x": `${camera?.focalX ?? 50}%`,
    "--focal-y": `${camera?.focalY ?? 50}%`,
    "--light-intensity": shot?.lighting.intensity ?? 0,
    "--light-warmth": shot?.lighting.warmth ?? 0,
    "--atmosphere": shot?.lighting.atmosphere ?? 0,
    "--shot-progress": shot?.progress ?? 0,
    "--entrance-progress": entranceProgress,
    "--transition-progress": shot?.transition.progress ?? 0,
    "--overlap-progress": shot?.overlap?.progress ?? 0,
    "--text-width": `${profile?.textWidth ?? 48}%`,
    "--safe-inset": `${profile?.safeInset ?? 4}vw`,
  } as CSSProperties;

  return (
    <main
      className={`cinema-stage quality--${quality} viewport--${viewport} shot--${shot?.shot.id ?? "empty"} phase--${shot?.phase ?? "hold"} transition--${shot?.transition.kind ?? "cut"}`}
      style={style}
      aria-label="TAS HQ Executive Vision Experience"
      data-shot-id={shot?.shot.id}
    >
      <div className="cinema-stage__aperture" aria-hidden="true" />
      <div
        className="cinema-camera"
        style={{
          transformOrigin: `${camera?.focalX ?? 50}% ${camera?.focalY ?? 50}%`,
        }}
      >
        {(
          [
            "environment",
            "architecture",
            "atmosphere",
            "subject",
            "typography",
            "foreground",
          ] as const
        ).map((plane) => (
          <div
            className={`cinema-plane cinema-plane--${plane}`}
            key={plane}
            aria-hidden={
              [
                "environment",
                "architecture",
                "atmosphere",
                "foreground",
              ].includes(plane)
                ? true
                : undefined
            }
          >
            {shot?.layers
              .filter((layer) => layer.plane === plane)
              .map((layer) => (
                <CinematicLayer
                  key={layer.id}
                  layer={layer}
                  shotId={shot.shot.id}
                />
              ))}
          </div>
        ))}
      </div>
      {frame.caption && (
        <div className="cinema-caption" aria-live="off">
          {frame.caption.text}
        </div>
      )}
      <ExecutiveControls
        snapshot={snapshot}
        director={director}
        captionsEnabled={captionsEnabled}
        setCaptionsEnabled={setCaptionsEnabled}
      />
      {snapshot.state === "interrupted" && (
        <div className="cinema-notice" role="status">
          Playback paused while the presentation was out of view.
        </div>
      )}
      {snapshot.state === "error" && (
        <div className="cinema-notice" role="alert">
          {snapshot.error ?? "The presentation paused safely."}
          <button type="button" onClick={() => director.recover()}>
            Recover
          </button>
        </div>
      )}
      {debug && (
        <ShotHarness
          {...{
            director,
            snapshot,
            quality,
            setQuality,
            debugViewport,
            setDebugViewport,
            debugReduced,
            setDebugReduced,
            frame,
          }}
        />
      )}
    </main>
  );
}

function CinematicLayer({
  layer,
  shotId,
}: {
  readonly layer: ShotLayerDefinition;
  readonly shotId: string;
}) {
  if (layer.kind === "field")
    return <div className="cinema-field" data-layer={layer.id} />;
  if (layer.kind === "architecture")
    return (
      <div className="cinema-architecture" data-layer={layer.id}>
        <i />
        <i />
        <i />
        <i />
      </div>
    );
  if (layer.kind === "light")
    return <div className="cinema-light" data-layer={layer.id} />;
  if (layer.kind === "occlusion")
    return <div className="cinema-occlusion" data-layer={layer.id} />;
  if (layer.kind === "image" && layer.assetId) {
    const asset =
      layer.assetId === "gac-logo"
        ? imageAssets.gacLogo
        : imageAssets.tasHqLogo;
    return (
      <div
        className="cinema-subject"
        data-layer={layer.id}
        data-asset-id={layer.assetId}
      >
        <b aria-hidden="true" />
        <span aria-hidden="true" />
        <img
          src={asset.src}
          width={asset.width}
          height={asset.height}
          alt={layer.meaning ?? asset.accessibility.alt}
          onError={(event) => {
            event.currentTarget.parentElement?.classList.add(
              "cinema-subject--fallback",
            );
          }}
        />
      </div>
    );
  }
  if (layer.kind === "copy") {
    return (
      <div className="cinema-copy" data-layer={layer.id}>
        {layer.content?.map((line, index) =>
          index === layer.content!.length - 1 ? (
            <h1 key={line} id={`${shotId}-title`}>
              {line}
            </h1>
          ) : (
            <p key={line}>{line}</p>
          ),
        )}
      </div>
    );
  }
  return null;
}

function ExecutiveControls({
  snapshot,
  director,
  captionsEnabled,
  setCaptionsEnabled,
}: {
  readonly snapshot: ReturnType<PresentationDirector["getSnapshot"]>;
  readonly director: PresentationDirector;
  readonly captionsEnabled: boolean;
  readonly setCaptionsEnabled: (value: boolean) => void;
}) {
  return (
    <div className="cinema-controls" aria-label="Presentation controls">
      {snapshot.state === "playing" && (
        <button
          type="button"
          onClick={() => director.pause()}
          aria-label="Pause presentation"
        >
          Ⅱ
        </button>
      )}
      {snapshot.state === "paused" && (
        <button
          type="button"
          onClick={() => director.resume()}
          aria-label="Resume presentation"
        >
          ▶
        </button>
      )}
      {snapshot.state === "interrupted" && (
        <button
          type="button"
          onClick={() => director.recover()}
          aria-label="Recover presentation"
        >
          Resume
        </button>
      )}
      <button
        type="button"
        onClick={() => setCaptionsEnabled(!captionsEnabled)}
        aria-pressed={captionsEnabled}
      >
        Captions {captionsEnabled ? "on" : "off"}
      </button>
      <span
        className="cinema-controls__audio"
        aria-label="Audio unavailable; silent presentation mode"
      >
        Silent mode
      </span>
      {snapshot.state === "completed" && (
        <button type="button" onClick={() => director.restart()}>
          Replay Experience
        </button>
      )}
      {document.fullscreenElement && (
        <button type="button" onClick={() => void document.exitFullscreen?.()}>
          Exit fullscreen
        </button>
      )}
    </div>
  );
}

function ShotHarness({
  director,
  snapshot,
  quality,
  setQuality,
  debugViewport,
  setDebugViewport,
  debugReduced,
  setDebugReduced,
  frame,
}: {
  readonly director: PresentationDirector;
  readonly snapshot: ReturnType<PresentationDirector["getSnapshot"]>;
  readonly quality: QualityTier;
  readonly setQuality: (quality: QualityTier) => void;
  readonly debugViewport: ViewportClass | null;
  readonly setDebugViewport: (viewport: ViewportClass | null) => void;
  readonly debugReduced: boolean;
  readonly setDebugReduced: (reduced: boolean) => void;
  readonly frame: ReturnType<typeof resolvePresentationFrame>;
}) {
  return (
    <fieldset className="shot-harness">
      <legend>Shot inspector</legend>
      <label>
        Quality{" "}
        <select
          value={quality}
          onChange={(event) =>
            setQuality(event.currentTarget.value as QualityTier)
          }
        >
          <option value="essential">Essential</option>
          <option value="enhanced">Enhanced</option>
          <option value="cinematic">Cinematic</option>
        </select>
      </label>
      <label>
        Viewport{" "}
        <select
          value={debugViewport ?? "auto"}
          onChange={(event) =>
            setDebugViewport(
              event.currentTarget.value === "auto"
                ? null
                : (event.currentTarget.value as ViewportClass),
            )
          }
        >
          <option value="auto">Auto</option>
          <option value="mobile">Mobile</option>
          <option value="tablet">Tablet</option>
          <option value="desktop">Desktop</option>
        </select>
      </label>
      <label>
        <input
          type="checkbox"
          checked={debugReduced}
          onChange={(event) => setDebugReduced(event.currentTarget.checked)}
        />{" "}
        Reduced motion
      </label>
      <label>
        Seek{" "}
        <input
          aria-label="Seek"
          type="range"
          min="0"
          max={snapshot.durationMs}
          step="100"
          value={snapshot.timeMs}
          onChange={(event) => director.seek(Number(event.currentTarget.value))}
        />
      </label>
      <button
        type="button"
        onClick={() => director.skipChapter()}
        disabled={snapshot.state === "completed"}
      >
        Skip chapter
      </button>
      <output>
        {(snapshot.timeMs / 1000).toFixed(1)}s ·{" "}
        {frame.shot?.shot.id ?? "launch"} ·{" "}
        {frame.shot?.phase ?? snapshot.state}
        <br />
        camera{" "}
        {frame.shot
          ? `${frame.shot.camera.scale.toFixed(3)} / ${frame.shot.camera.focalX.toFixed(1)},${frame.shot.camera.focalY.toFixed(1)}`
          : "—"}
        <br />
        layers {frame.shot?.layers.map((layer) => layer.id).join(", ") ?? "—"}
        <br />
        overlap{" "}
        {frame.shot?.overlap
          ? `${frame.shot.overlap.nextShotId} / ${frame.shot.overlap.carrier}`
          : "—"}
      </output>
    </fieldset>
  );
}

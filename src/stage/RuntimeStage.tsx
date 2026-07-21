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
} from "../presentation";

interface RuntimeStageProps {
  readonly director: PresentationDirector;
  readonly debug?: boolean;
}

function useReducedMotion(): boolean {
  const [reduced, setReduced] = useState(
    () =>
      window.matchMedia?.("(prefers-reduced-motion: reduce)").matches ?? false,
  );
  useEffect(() => {
    const query = window.matchMedia?.("(prefers-reduced-motion: reduce)");
    if (!query) return;
    const update = () => setReduced(query.matches);
    query.addEventListener?.("change", update);
    return () => query.removeEventListener?.("change", update);
  }, []);
  return reduced;
}

export function RuntimeStage({ director, debug = false }: RuntimeStageProps) {
  const snapshot = useSyncExternalStore(
    director.subscribe,
    director.getSnapshot,
    director.getSnapshot,
  );
  const reducedMotion = useReducedMotion();
  const [captionsEnabled, setCaptionsEnabled] = useState(false);
  const [quality, setQuality] = useState<QualityTier>("cinematic");
  const [fullscreenMessage, setFullscreenMessage] = useState("");
  const frame = useMemo(
    () =>
      resolvePresentationFrame(productionManifest, snapshot, {
        quality,
        reducedMotion,
        captionsEnabled,
      }),
    [captionsEnabled, quality, reducedMotion, snapshot],
  );

  useEffect(() => {
    if (snapshot.state !== "playing") return;
    let frameRequest = 0;
    const update = () => {
      if (director.getSnapshot().state !== "playing") return;
      try {
        director.tick();
        frameRequest = requestAnimationFrame(update);
      } catch (error) {
        director.fail(error);
      }
    };
    frameRequest = requestAnimationFrame(update);
    return () => cancelAnimationFrame(frameRequest);
  }, [director, snapshot.state]);

  useEffect(() => {
    const handleVisibility = () => {
      if (
        document.visibilityState === "hidden" &&
        director.getSnapshot().state === "playing"
      )
        director.handleVisibilityInterruption();
    };
    document.addEventListener("visibilitychange", handleVisibility);
    return () =>
      document.removeEventListener("visibilitychange", handleVisibility);
  }, [director]);

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
      <main className="prologue-launch" aria-labelledby="launch-title">
        <div className="prologue-launch__aura" aria-hidden="true" />
        <section className="prologue-launch__content">
          <img
            className="prologue-launch__mark"
            src={imageAssets.tasHqLogo.src}
            width={imageAssets.tasHqLogo.width}
            height={imageAssets.tasHqLogo.height}
            alt={imageAssets.tasHqLogo.accessibility.alt}
          />
          <p className="prologue-kicker">An Executive Vision Experience</p>
          <h1 id="launch-title">TAS HQ</h1>
          <button
            className="prologue-primary-action"
            type="button"
            onClick={() => void begin()}
          >
            Begin the Presentation
          </button>
          <p className="prologue-launch__note">54 seconds · Sound optional</p>
          {fullscreenMessage && <p role="status">{fullscreenMessage}</p>}
        </section>
        {debug && (
          <DebugControls
            director={director}
            snapshot={snapshot}
            quality={quality}
            setQuality={setQuality}
          />
        )}
      </main>
    );
  }

  const transitionOpacity = frame.transition?.progress ?? 1;
  const style = {
    "--scene-progress": frame.sceneProgress,
    "--transition-opacity": transitionOpacity,
  } as CSSProperties;

  return (
    <main
      className={`prologue-stage prologue-stage--${frame.scene?.kind ?? "empty"} quality--${quality}`}
      style={style}
      aria-label="TAS HQ Prologue"
    >
      <div className="prologue-stage__architecture" aria-hidden="true">
        <span />
        <span />
        <span />
      </div>
      <SceneComposition
        sceneId={frame.scene?.id ?? ""}
        content={frame.scene?.content ?? []}
        reducedMotion={reducedMotion}
      />

      {frame.caption && (
        <div className="prologue-caption" aria-live="off">
          {frame.caption.text}
        </div>
      )}

      <div className="prologue-controls" aria-label="Presentation controls">
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
          onClick={() => setCaptionsEnabled((value) => !value)}
          aria-pressed={captionsEnabled}
        >
          Captions {captionsEnabled ? "on" : "off"}
        </button>
        <span
          className="prologue-controls__audio"
          aria-label="Audio unavailable; silent presentation mode"
        >
          Silent mode
        </span>
        {snapshot.state === "completed" && (
          <button type="button" onClick={() => director.restart()}>
            Replay Prologue
          </button>
        )}
        {document.fullscreenElement && (
          <button
            type="button"
            onClick={() => void document.exitFullscreen?.()}
          >
            Exit fullscreen
          </button>
        )}
      </div>

      {snapshot.state === "interrupted" && (
        <div className="prologue-notice" role="status">
          Playback paused while the presentation was out of view.
        </div>
      )}
      {snapshot.state === "error" && (
        <div className="prologue-notice" role="alert">
          {snapshot.error ?? "The presentation paused safely."}
          <button type="button" onClick={() => director.recover()}>
            Recover
          </button>
        </div>
      )}
      {debug && (
        <DebugControls
          director={director}
          snapshot={snapshot}
          quality={quality}
          setQuality={setQuality}
        />
      )}
    </main>
  );
}

function SceneComposition({
  sceneId,
  content,
  reducedMotion,
}: {
  readonly sceneId: string;
  readonly content: readonly string[];
  readonly reducedMotion: boolean;
}) {
  if (sceneId === "opening-stillness")
    return <div className="prologue-stillness" aria-hidden="true" />;
  const isGac = sceneId === "gac-presenting-credit";
  const isTas = sceneId === "tas-hq-reveal" || sceneId === "act-one-handoff";
  return (
    <section
      className="prologue-scene"
      aria-labelledby={`${sceneId}-title`}
      data-reduced-motion={reducedMotion || undefined}
    >
      {isGac && (
        <img
          className="prologue-logo prologue-logo--gac"
          src={imageAssets.gacLogo.src}
          width={imageAssets.gacLogo.width}
          height={imageAssets.gacLogo.height}
          alt={imageAssets.gacLogo.accessibility.alt}
        />
      )}
      {isTas && (
        <img
          className="prologue-logo prologue-logo--tas"
          src={imageAssets.tasHqLogo.src}
          width={imageAssets.tasHqLogo.width}
          height={imageAssets.tasHqLogo.height}
          alt={imageAssets.tasHqLogo.accessibility.alt}
        />
      )}
      <div className="prologue-copy">
        {content.map((line, index) => {
          const Heading = index === content.length - 1 ? "h1" : "p";
          return (
            <Heading
              id={index === content.length - 1 ? `${sceneId}-title` : undefined}
              className={`prologue-copy__line prologue-copy__line--${index + 1}`}
              key={line}
            >
              {line}
            </Heading>
          );
        })}
      </div>
    </section>
  );
}

function DebugControls({
  director,
  snapshot,
  quality,
  setQuality,
}: {
  readonly director: PresentationDirector;
  readonly snapshot: ReturnType<PresentationDirector["getSnapshot"]>;
  readonly quality: QualityTier;
  readonly setQuality: (quality: QualityTier) => void;
}) {
  const canSeek = snapshot.state !== "idle";
  return (
    <fieldset className="prologue-debug">
      <legend>Development controls</legend>
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
        Seek{" "}
        <input
          aria-label="Seek"
          type="range"
          min="0"
          max={snapshot.durationMs}
          step="100"
          value={snapshot.timeMs}
          disabled={!canSeek}
          onChange={(event) => director.seek(Number(event.currentTarget.value))}
        />
      </label>
      <output>
        {(snapshot.timeMs / 1000).toFixed(1)}s · {snapshot.state}
      </output>
    </fieldset>
  );
}

import { useEffect, useSyncExternalStore } from "react";

import type { PresentationDirector } from "../director";

interface RuntimeStageProps {
  readonly director: PresentationDirector;
}

function formatTime(timeMs: number): string {
  return `${(timeMs / 1_000).toFixed(3)}s`;
}

export function RuntimeStage({ director }: RuntimeStageProps) {
  const snapshot = useSyncExternalStore(
    director.subscribe,
    director.getSnapshot,
    director.getSnapshot,
  );

  useEffect(() => {
    if (snapshot.state !== "playing") return;
    let frame = 0;
    const update = () => {
      if (director.getSnapshot().state !== "playing") return;
      try {
        director.tick();
        frame = requestAnimationFrame(update);
      } catch (error) {
        director.fail(error);
      }
    };
    frame = requestAnimationFrame(update);
    return () => cancelAnimationFrame(frame);
  }, [director, snapshot.state]);

  useEffect(() => {
    const handleVisibility = () => {
      if (
        document.visibilityState === "hidden" &&
        director.getSnapshot().state === "playing"
      ) {
        director.handleVisibilityInterruption();
      }
    };
    document.addEventListener("visibilitychange", handleVisibility);
    return () =>
      document.removeEventListener("visibilitychange", handleVisibility);
  }, [director]);

  const isReady = snapshot.state === "ready";
  const isPlaying = snapshot.state === "playing";
  const isPaused = snapshot.state === "paused";
  const canSeek = [
    "ready",
    "playing",
    "paused",
    "interrupted",
    "completed",
  ].includes(snapshot.state);
  const canSkip = ["ready", "playing", "paused", "interrupted"].includes(
    snapshot.state,
  );
  const canRestart = snapshot.state !== "idle";

  return (
    <main className="stage runtime-stage" aria-labelledby="stage-title">
      <section className="runtime-stage__frame">
        <p className="runtime-stage__eyebrow">
          Temporary director integration stage
        </p>
        <h1 id="stage-title">Foundation runtime</h1>
        <dl className="runtime-readout" aria-live="polite">
          <div>
            <dt>State</dt>
            <dd>{snapshot.state}</dd>
          </div>
          <div>
            <dt>Scene</dt>
            <dd>{snapshot.currentSceneId ?? "None"}</dd>
          </div>
          <div>
            <dt>Time</dt>
            <dd>
              {formatTime(snapshot.timeMs)} / {formatTime(snapshot.durationMs)}
            </dd>
          </div>
        </dl>
        <progress value={snapshot.timeMs} max={snapshot.durationMs}>
          {Math.round(snapshot.progress * 100)}%
        </progress>

        {snapshot.state === "interrupted" && (
          <div className="runtime-notice" role="status">
            Playback paused because this document became hidden.
          </div>
        )}
        {snapshot.state === "error" && (
          <div className="runtime-notice" role="alert">
            {snapshot.error ?? "The Director entered a safe error state."}
          </div>
        )}

        <fieldset className="developer-controls">
          <legend>Developer controls</legend>
          <div className="developer-controls__buttons">
            <button
              type="button"
              onClick={() => director.begin()}
              disabled={!isReady}
            >
              Begin
            </button>
            <button
              type="button"
              onClick={() => director.pause()}
              disabled={!isPlaying}
            >
              Pause
            </button>
            <button
              type="button"
              onClick={() => director.resume()}
              disabled={!isPaused}
            >
              Resume
            </button>
            <button
              type="button"
              onClick={() => director.skipChapter()}
              disabled={!canSkip}
            >
              Skip chapter
            </button>
            <button
              type="button"
              onClick={() => director.restart()}
              disabled={!canRestart}
            >
              Restart
            </button>
            {(snapshot.state === "interrupted" ||
              snapshot.state === "error") && (
              <button type="button" onClick={() => director.recover()}>
                Recover
              </button>
            )}
          </div>
          <label htmlFor="director-seek">Seek</label>
          <input
            id="director-seek"
            type="range"
            min="0"
            max={snapshot.durationMs}
            step="100"
            value={snapshot.timeMs}
            disabled={!canSeek}
            onChange={(event) =>
              director.seek(Number(event.currentTarget.value))
            }
          />
        </fieldset>
      </section>
    </main>
  );
}

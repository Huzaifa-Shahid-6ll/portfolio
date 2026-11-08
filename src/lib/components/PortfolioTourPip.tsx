import { RuntimeLoader, useRive } from "@rive-app/react-canvas";
import canvasWasm from "@rive-app/canvas/rive.wasm?url";
import fallbackWasm from "@rive-app/canvas/rive_fallback.wasm?url";
import { useEffect, useRef, useState, type ReactNode } from "react";

RuntimeLoader.setWasmUrl(canvasWasm);
RuntimeLoader.setWasmFallbackUrl(fallbackWasm);

export default function PortfolioTourPip({
  pose,
  portrait,
}: {
  pose: number;
  portrait: ReactNode;
}) {
  const [failed, setFailed] = useState(false);
  const lastPose = useRef<number | null>(null);
  const { rive, RiveComponent } = useRive({
    src: "/images/pip/pip-guide.riv",
    artboard: "Pip",
    stateMachine: "Pip Guide",
    autoBind: true,
    autoplay: true,
    shouldDisableRiveListeners: true,
    onLoadError: () => setFailed(true),
  });

  const poseProperty = rive?.viewModelInstance?.number("pose");

  useEffect(() => {
    if (!poseProperty || lastPose.current === pose) return;
    // The entry cue lets Rive finish the greeting before it points to Orbit.
    poseProperty.value = lastPose.current === null && pose === 2 ? 6 : pose;
    lastPose.current = pose;
  }, [poseProperty, pose]);

  useEffect(() => {
    if (!rive) return;
    const update = () => {
      if (document.hidden) rive.pause();
      else rive.play();
    };
    update();
    document.addEventListener("visibilitychange", update);
    return () => document.removeEventListener("visibilitychange", update);
  }, [rive]);

  return (
    <>
      {!failed && (
        <div
          className="portfolio-tour-canvas"
          style={{ visibility: poseProperty ? undefined : "hidden" }}
        >
          <RiveComponent tabIndex={-1} />
        </div>
      )}
      {(failed || !poseProperty) && portrait}
    </>
  );
}

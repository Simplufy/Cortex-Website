import { Play } from "lucide-react";
import { useEffect, useRef, useState } from "react";

function PlayPulse() {
  return (
    <span className="pointer-events-none relative z-10 grid size-24 place-items-center sm:size-28">
      <span className="play-btn-ring absolute size-[3.75rem] rounded-full sm:size-[4.5rem]" />
      <span className="relative grid size-[3.75rem] place-items-center rounded-full bg-gold text-bg shadow-[0_10px_28px_rgb(0_0_0/0.55)] ring-1 ring-white/20 sm:size-[4.5rem]">
        <Play className="ml-[3px] size-6 fill-current sm:size-7" strokeWidth={0} aria-hidden />
      </span>
    </span>
  );
}

export function VslPlayer({
  src,
  poster,
  cover,
  designed: _designed,
  label = "Watch the briefing",
}: {
  src: string;
  poster: string;
  cover?: string;
  designed?: boolean;
  label?: string;
}) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);
  const [started, setStarted] = useState(false);
  const [progress, setProgress] = useState(0);

  const toggle = () => {
    const v = videoRef.current;
    if (!v) return;
    if (v.paused) {
      v.muted = false;
      const play = v.play();
      if (play && typeof play.then === "function") {
        void play.catch(() => {
          setPlaying(false);
          setStarted(false);
        });
      }
    } else {
      v.pause();
    }
  };

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;

    const onPlay = () => {
      setPlaying(true);
      setStarted(true);
    };
    const onPause = () => setPlaying(false);
    const onEnded = () => {
      setPlaying(false);
      setStarted(false);
      setProgress(0);
      v.currentTime = 0;
    };
    const onError = () => {
      setPlaying(false);
      setStarted(false);
    };

    v.addEventListener("play", onPlay);
    v.addEventListener("pause", onPause);
    v.addEventListener("ended", onEnded);
    v.addEventListener("error", onError);
    return () => {
      v.removeEventListener("play", onPlay);
      v.removeEventListener("pause", onPause);
      v.removeEventListener("ended", onEnded);
      v.removeEventListener("error", onError);
    };
  }, []);

  useEffect(() => {
    const v = videoRef.current;
    if (!v || !playing) return;
    let id = 0;
    const tick = () => {
      if (v.duration) setProgress(v.currentTime / v.duration);
      id = requestAnimationFrame(tick);
    };
    id = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(id);
  }, [playing]);

  return (
    <div className="relative w-full overflow-hidden rounded-xl sm:rounded-2xl">
      <div className="relative aspect-video bg-bg">
        <video
          ref={videoRef}
          className="vsl-video absolute inset-0 h-full w-full bg-bg object-cover"
          poster={poster}
          src={src}
          playsInline
          preload="metadata"
          disablePictureInPicture
          controlsList="nodownload nofullscreen noremoteplayback"
        />
        {!started && (
          <button
            type="button"
            onClick={toggle}
            className="absolute inset-0 z-10 flex items-center justify-center focus-visible:ring-2 focus-visible:ring-gold/60"
            aria-label={label}
          >
            {cover ? (
              <img src={cover} alt="" className="absolute inset-0 h-full w-full object-cover" />
            ) : (
              <span className="absolute inset-0 bg-bg/25" />
            )}
            <PlayPulse />
          </button>
        )}
        {started && (
          <button
            type="button"
            onClick={toggle}
            className="absolute inset-0 z-10 flex items-center justify-center focus-visible:ring-2 focus-visible:ring-gold/60"
            aria-label={playing ? "Pause video" : "Play video"}
          >
            {!playing && <PlayPulse />}
          </button>
        )}
        {started && (
          <div
            className="pointer-events-none absolute inset-x-0 bottom-0 z-20 h-1 bg-gold/20"
            role="progressbar"
            aria-label="Video progress"
            aria-valuemin={0}
            aria-valuemax={100}
            aria-valuenow={Math.round(progress * 100)}
          >
            <div
              className="h-full bg-gold shadow-[0_0_12px_rgb(var(--gold-rgb)/0.95)]"
              style={{ width: `${Math.min(100, Math.max(0, progress * 100))}%` }}
            />
          </div>
        )}
      </div>
    </div>
  );
}

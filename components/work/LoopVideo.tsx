"use client";

import Image from "next/image";
import { useEffect, useRef, useState, type ReactNode } from "react";

type LoopVideoProps = {
  src: string;
  poster: string;
  /** Legibility overlays layered above the video, below page content. */
  children?: ReactNode;
};

type NetworkInformation = { saveData?: boolean };

/**
 * Decorative, muted background loop. The poster is always rendered underneath,
 * so the layer still works if autoplay is blocked. Users who prefer reduced
 * motion or reduced data get the still poster unless they press play.
 */
export default function LoopVideo({ src, poster, children }: LoopVideoProps) {
  const ref = useRef<HTMLVideoElement>(null);
  const [enabled, setEnabled] = useState(false);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    const reduceData =
      window.matchMedia("(prefers-reduced-data: reduce)").matches ||
      Boolean(
        (navigator as Navigator & { connection?: NetworkInformation })
          .connection?.saveData,
      );
    if (!reduceMotion && !reduceData) setEnabled(true);
  }, []);

  useEffect(() => {
    const video = ref.current;
    if (!enabled || !video) return;
    video.muted = true;
    video
      .play()
      .then(() => setPlaying(true))
      .catch(() => setPlaying(false));
  }, [enabled]);

  const toggle = () => {
    const video = ref.current;
    if (!enabled) {
      setEnabled(true);
      return;
    }
    if (!video) return;
    if (video.paused) {
      video
        .play()
        .then(() => setPlaying(true))
        .catch(() => setPlaying(false));
    } else {
      video.pause();
      setPlaying(false);
    }
  };

  return (
    <>
      <div style={{ position: "absolute", inset: 0 }}>
        <Image
          src={poster}
          alt=""
          fill
          priority
          unoptimized
          sizes="100vw"
          style={{ objectFit: "cover" }}
        />
        <video
          ref={ref}
          muted
          loop
          playsInline
          preload="none"
          poster={poster}
          src={enabled ? src : undefined}
          aria-hidden="true"
          tabIndex={-1}
          onPause={() => setPlaying(false)}
          onPlay={() => setPlaying(true)}
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            opacity: playing ? 1 : 0,
            transition: "opacity .6s ease",
          }}
        />
        {children}
      </div>
      <button
        type="button"
        className="video-toggle"
        onClick={toggle}
        aria-label={
          playing ? "Pause background video" : "Play background video"
        }
        style={{
          position: "absolute",
          right: "clamp(18px,4vw,46px)",
          top: "clamp(88px,12vh,116px)",
          zIndex: 3,
        }}
      >
        <span aria-hidden="true">{playing ? "❚❚" : "▶"}</span>
        {playing ? "Pause" : "Play"}
      </button>
    </>
  );
}

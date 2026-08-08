"use client";

import { useEffect, useRef, useState } from "react";

export default function AboutRain() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [muted, setMuted] = useState(true);

  useEffect(() => {
    const audio = audioRef.current;

    if (!audio) return;

    audio.volume = 0.35;

    return () => {
      audio.pause();
    };
  }, []);

  const toggleRainSound = () => {
    const audio = audioRef.current;

    if (!audio) return;

    if (muted) {
      audio.muted = false;
      audio.play().catch(() => {});
      setMuted(false);
    } else {
      audio.muted = true;
      setMuted(true);
    }
  };

  return (
    <>
      <div className="about-rain-background">
        <video
          className="about-rain-video"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="/videos/about-rain.mp4" type="video/mp4" />
        </video>

        <div className="about-rain-vignette" />
      </div>

      <audio
        ref={audioRef}
        src="/audio/rain.mp3"
        loop
        preload="auto"
        muted
      />

      <button
        className="rain-sound-button"
        onClick={toggleRainSound}
        aria-label={
          muted
            ? "Enable rain sound"
            : "Mute rain sound"
        }
      >
        {muted ? "🔇" : "🔊"}
      </button>
    </>
  );
}
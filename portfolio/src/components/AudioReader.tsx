"use client";

import { useState, useRef, useEffect } from "react";
import { Play, Pause, X } from "lucide-react";

export default function AudioReader() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [audioLevels, setAudioLevels] = useState<number[]>(Array(24).fill(0));
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [showWaveform, setShowWaveform] = useState(false);
  const [isClient, setIsClient] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const generateAudioLevels = () => {
    if (!isClient) return;

    const newLevels = Array(24)
      .fill(0)
      .map(() => Math.random() * 28 + 8);
    setAudioLevels(newLevels);
  };

  const playAudio = () => {
    if (!audioRef.current) return;

    audioRef.current
      .play()
      .then(() => {
        setIsPlaying(true);
      })
      .catch((error) => {
        console.error("Audio playback failed:", error);
        setIsPlaying(false);
      });
  };

  // Update time and duration from actual audio
  useEffect(() => {
    if (!audioRef.current) return;

    const audio = audioRef.current;

    const updateTime = () => {
      setCurrentTime(audio.currentTime);
      setDuration(audio.duration || 0);
    };

    const handleLoadedMetadata = () => {
      setDuration(audio.duration || 0);
    };

    const handleEnded = () => {
      setIsPlaying(false);
      setCurrentTime(0);
    };

    audio.addEventListener("timeupdate", updateTime);
    audio.addEventListener("loadedmetadata", handleLoadedMetadata);
    audio.addEventListener("ended", handleEnded);

    return () => {
      audio.removeEventListener("timeupdate", updateTime);
      audio.removeEventListener("loadedmetadata", handleLoadedMetadata);
      audio.removeEventListener("ended", handleEnded);
    };
  }, []);

  const generateWaveform = () => {
    if (!isClient) return []; // Return empty array during SSR

    const bars = [];
    const progressRatio = duration > 0 ? currentTime / duration : 0;

    for (let i = 0; i < 24; i++) {
      const height = audioLevels[i] || 12;
      const isActive = i < progressRatio * 24;

      bars.push(
        <div
          key={i}
          className={`w-1 rounded-full transition-all duration-300 ease-out ${
            isActive ? "bg-white shadow-sm" : "bg-white/20 hover:bg-white/30"
          }`}
          style={{
            height: `${height}px`,
            transform: isPlaying && isActive ? "scaleY(1.1)" : "scaleY(1)",
          }}
        />,
      );
    }
    return bars;
  };

  const handlePlayToggle = () => {
    if (!showWaveform) {
      setShowWaveform(true);
      generateAudioLevels();
      playAudio();
      return;
    }

    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      playAudio();
    }
  };

  const handleClose = () => {
    if (audioRef.current) {
      audioRef.current.pause();
    }
    setIsPlaying(false);
    setShowWaveform(false);
    setCurrentTime(0);
    setDuration(0);
  };

  return (
    <div className="flex items-center gap-3">
      {/* Play/Pause/Close Button */}
      <div className="relative group">
        <button
          onClick={!showWaveform || !isPlaying ? handlePlayToggle : handleClose}
          className="flex items-center justify-center w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/10 transition-all duration-300 hover:scale-105"
        >
          {!showWaveform ? (
            <Play className="w-4 h-4 text-white/80 ml-0.5" />
          ) : isPlaying ? (
            <Pause className="w-3.5 h-3.5 text-white/80" />
          ) : (
            <Play className="w-4 h-4 text-white/80 ml-0.5" />
          )}
        </button>

        {/* Close button when playing */}
        {showWaveform && isPlaying && (
          <button
            onClick={handleClose}
            className="absolute -top-1 -right-1 flex items-center justify-center w-5 h-5 rounded-full bg-white/90 hover:bg-white text-gray-600 hover:text-gray-800 transition-all duration-200 opacity-0 group-hover:opacity-100"
          >
            <X className="w-3 h-3" />
          </button>
        )}
      </div>

      {/* Waveform */}
      {showWaveform && (
        <div className="flex items-center gap-0.5">{generateWaveform()}</div>
      )}

      {/* Time display */}
      {showWaveform && (
        <div className="text-xs text-white/60 font-mono min-w-[3rem]">
          {Math.floor(currentTime / 60)}:
          {Math.floor(currentTime % 60)
            .toString()
            .padStart(2, "0")}
        </div>
      )}

      <audio
        ref={audioRef}
        src="/api/audio/presentation"
        preload="metadata"
        style={{ display: "none" }}
      />
    </div>
  );
}

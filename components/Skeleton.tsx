"use client"

import { useRef, useEffect } from "react";

interface SProps {
  vSrc: string; // video src
  playBackSpeed?: number; // video 재생 속도
  styles?: string; // 크기 조절 (각각 다름)
}

export default function Skeleton({ vSrc, playBackSpeed = 1, styles }: SProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = playBackSpeed;
    }
  }, [playBackSpeed]);

  return (
    <video
      ref={videoRef}
      src={`/skeleton${vSrc}`}
      className={styles}
      loop
      muted
      playsInline
      autoPlay
    />
  );
}

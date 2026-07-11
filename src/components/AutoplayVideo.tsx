"use client";

import { useEffect, useRef } from "react";

export default function AutoplayVideo({
  className,
  style,
}: {
  className?: string;
  style?: React.CSSProperties;
}) {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const v = ref.current;
    if (!v) return;
    const nudge = () => {
      v.muted = true;
      if (v.paused) v.play().catch(() => {});
    };
    nudge();
    const timer = window.setInterval(nudge, 1500);
    return () => window.clearInterval(timer);
  }, []);

  return (
    <video
      ref={ref}
      autoPlay
      muted
      loop
      playsInline
      className={className}
      style={style}
    >
      <source src="/assets/galaxy.mp4" type="video/mp4" />
    </video>
  );
}

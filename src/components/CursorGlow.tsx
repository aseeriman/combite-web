"use client";

import { useEffect, useRef } from "react";

export default function CursorGlow() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const reduce =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;

    const el = ref.current;
    if (!el) return;

    const onMove = (e: MouseEvent) => {
      el.style.left = e.clientX + "px";
      el.style.top = e.clientY + "px";
      el.style.opacity = "1";
    };
    const onLeave = () => {
      el.style.opacity = "0";
    };
    window.addEventListener("mousemove", onMove, { passive: true });
    document.addEventListener("mouseleave", onLeave);
    return () => {
      window.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  return (
    <div
      ref={ref}
      className="pointer-events-none fixed top-0 left-0 z-[95] h-[460px] w-[460px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-0 transition-opacity duration-[.35s] ease-out"
      style={{
        background:
          "radial-gradient(circle, rgba(77,208,248,0.16) 0%, rgba(1,96,231,0.08) 35%, transparent 70%)",
        mixBlendMode: "screen",
      }}
    />
  );
}

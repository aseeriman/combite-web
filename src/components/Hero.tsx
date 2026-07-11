"use client";

import { useEffect, useRef } from "react";

const CHIPS = [
  "Candidate Follow-Up",
  "ATS & CRM Workflows",
  "Interview Scheduling",
  "Pipeline Visibility",
];

export default function Hero() {
  const heroRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const boomRaf = useRef<number | null>(null);

  useEffect(() => {
    const hero = heroRef.current;
    const canvas = canvasRef.current;
    if (!hero || !canvas) return;

    const reduce = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    // Autoplay safety net: some browsers block/pause autoplay until nudged.
    const nudge = () => {
      hero.muted = true;
      if (hero.paused) hero.play().catch(() => {});
    };
    nudge();
    const nudgeTimer = window.setInterval(nudge, 1500);

    if (reduce) {
      return () => window.clearInterval(nudgeTimer);
    }

    // Decode the clip into an array of bitmaps ONCE, off a hidden video, so we
    // can render forward AND backward at full framerate with zero seeking jank.
    const cap = document.createElement("video");
    cap.muted = true;
    cap.playsInline = true;
    cap.preload = "auto";
    cap.src = "/assets/galaxy.mp4";

    const N = 120; // frames captured across the clip
    const RW = 854;
    const RH = 480; // downscaled capture resolution (keeps memory sane)
    const frames: ImageBitmap[] = [];
    let i = 0;
    let cancelled = false;

    const startBoomerang = () => {
      if (cancelled || !frames.length) return;
      canvas.width = RW;
      canvas.height = RH;
      const ctx = canvas.getContext("2d");
      if (!ctx) return;
      const total = frames.length;
      const fps = 24;
      const period = (total - 1) * 2; // forward + back
      const t0 = performance.now();
      canvas.style.opacity = "0.95";
      window.setTimeout(() => {
        try {
          hero.pause();
        } catch {}
      }, 550);
      const loop = (now: number) => {
        const framePos = ((now - t0) / 1000) * fps;
        let pos = framePos % period;
        if (pos < 0) pos += period;
        const idx = pos <= total - 1 ? Math.round(pos) : Math.round(period - pos);
        const bmp = frames[Math.max(0, Math.min(total - 1, idx))];
        if (bmp) ctx.drawImage(bmp, 0, 0, RW, RH);
        boomRaf.current = requestAnimationFrame(loop);
      };
      boomRaf.current = requestAnimationFrame(loop);
    };

    const seekTo = (dur: number) => {
      cap.currentTime = Math.min(dur - 0.03, (i / (N - 1)) * dur);
    };

    const onSeeked = async () => {
      try {
        const bmp = await createImageBitmap(cap, {
          resizeWidth: RW,
          resizeHeight: RH,
          resizeQuality: "medium",
        });
        frames.push(bmp);
      } catch {}
      i++;
      if (cancelled) return;
      if (i < N) seekTo(cap.duration || 5);
      else startBoomerang();
    };

    const start = () => {
      cap.addEventListener("seeked", onSeeked);
      seekTo(cap.duration || 5);
    };

    if (cap.readyState >= 1) start();
    else cap.addEventListener("loadedmetadata", start, { once: true });

    return () => {
      cancelled = true;
      window.clearInterval(nudgeTimer);
      if (boomRaf.current) cancelAnimationFrame(boomRaf.current);
      cap.removeEventListener("seeked", onSeeked);
    };
  }, []);

  return (
    <section
      id="top"
      className="relative flex min-h-screen items-center justify-center overflow-hidden px-5 pt-[120px] pb-20 text-center"
    >
      <video
        ref={heroRef}
        autoPlay
        muted
        loop
        playsInline
        poster="/assets/moon.png"
        className="absolute inset-0 h-full w-full object-cover opacity-95"
      >
        <source src="/assets/galaxy.mp4" type="video/mp4" />
      </video>
      <canvas
        ref={canvasRef}
        className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-0 transition-opacity duration-500 ease-out"
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 90% 80% at 50% 42%, transparent 0%, transparent 55%, rgba(2,3,5,0.22) 100%)",
        }}
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(2,3,5,0.4) 0%, transparent 16%, transparent 78%, #050817 100%)",
        }}
      />

      <div className="relative z-[3] flex max-w-[940px] flex-col items-center">
        <div
          className="mb-[30px] inline-flex items-center gap-2 rounded-[24px] border border-[rgba(77,208,248,0.35)] px-4 py-2 text-xs font-semibold tracking-[2.5px] text-[rgba(246,247,251,0.95)] backdrop-blur-sm"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-cyan" />
          AI AUTOMATION FOR RECRUITMENT AGENCIES
        </div>
        <h1
          className="mb-7 font-display text-[clamp(40px,7vw,80px)] leading-[1.02] tracking-[-2px] text-ink"
          style={{ textShadow: "0 2px 40px rgba(0,0,0,0.65)" }}
        >
          Stop losing placements
          <br />
          to <span className="text-cyan">broken workflows.</span>
        </h1>
        <p
          className="mb-[38px] max-w-[640px] text-[clamp(16px,1.5vw,19px)] leading-[1.62] text-[rgba(246,247,251,0.95)]"
          style={{ textShadow: "0 1px 20px rgba(0,0,0,0.7)" }}
        >
          Combite designs and builds AI-assisted workflows inside your ATS,
          CRM, inbox, and calendar — reducing repetitive follow-up,
          scheduling, data entry, and reporting so recruiters can spend more
          time with candidates and clients.
        </p>
        <div className="mb-11 flex flex-wrap justify-center gap-[14px]">
          <a
            href="#book"
            className="primary-btn flex items-center gap-[9px] rounded-[9px] bg-cyan px-[26px] py-4 text-[15px] font-bold text-space"
          >
            Book a Recruitment Workflow Call{" "}
            <span className="btn-arrow">→</span>
          </a>
          <a
            href="#os"
            className="ghost-btn flex items-center gap-[9px] rounded-[9px] border border-white/28 bg-white/4 px-[26px] py-4 text-[15px] font-semibold text-ink backdrop-blur-sm"
          >
            See How It Works
          </a>
        </div>
        <div className="flex flex-wrap justify-center gap-3">
          {CHIPS.map((chip) => (
            <div
              key={chip}
              className="flex items-center gap-[7px] rounded-[24px] border border-white/10 bg-white/5 px-4 py-[9px] text-[13px] font-semibold text-[rgba(246,247,251,0.95)] backdrop-blur-sm"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-cyan" />
              {chip}
            </div>
          ))}
        </div>
      </div>
      <div className="absolute bottom-[26px] left-1/2 z-[3] flex -translate-x-1/2 flex-col items-center gap-2 text-[11px] tracking-[2px] text-[rgba(246,247,251,0.7)]">
        SCROLL
        <div
          className="h-[34px] w-px"
          style={{ background: "linear-gradient(#4DD0F8, transparent)" }}
        />
      </div>
    </section>
  );
}

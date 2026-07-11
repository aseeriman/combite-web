"use client";

import { useEffect, useState } from "react";

const LINKS = [
  { href: "#solutions", label: "Solutions" },
  { href: "#blueprint", label: "Blueprint" },
  { href: "#integrations", label: "Integrations" },
  { href: "#work", label: "Selected Work" },
  { href: "#about", label: "About" },
  { href: "#faq", label: "Insights" },
];

const SECTION_IDS = LINKS.map((l) => l.href.slice(1));

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState<string | null>(null);

  useEffect(() => {
    let raf: number | null = null;
    const onScroll = () => {
      if (raf) return;
      raf = requestAnimationFrame(() => {
        raf = null;
        setScrolled(window.scrollY > 40);
        const mid = window.innerHeight * 0.35;
        let current: string | null = null;
        for (const id of SECTION_IDS) {
          const sec = document.getElementById(id);
          if (!sec) continue;
          const r = sec.getBoundingClientRect();
          if (r.top <= mid && r.bottom > mid) {
            current = id;
            break;
          }
        }
        setActive(current);
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-[100] flex items-center justify-between border-b border-white/8 px-5 py-[18px] backdrop-blur-md transition-[background,backdrop-filter] duration-300 sm:px-[clamp(20px,5vw,60px)]"
      style={{
        background: scrolled ? "rgba(2,3,5,0.85)" : "transparent",
        backdropFilter: scrolled ? "blur(14px)" : "blur(6px)",
      }}
    >
      <a href="#top" className="flex items-center gap-[11px]">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/assets/logo-white.png"
          alt="Combite"
          className="block h-[30px] w-auto"
        />
      </a>
      <div className="flex items-center gap-[clamp(16px,2vw,30px)] text-[14.5px] font-medium">
        {LINKS.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className={`nav-link text-[rgba(246,247,251,0.95)] ${
              active === link.href.slice(1) ? "active" : ""
            }`}
          >
            {link.label}
          </a>
        ))}
      </div>
      <a
        href="#book"
        className="nav-cta whitespace-nowrap rounded-[9px] bg-ink px-5 py-[11px] text-sm font-bold text-space"
      >
        Book a Workflow Call
      </a>
    </nav>
  );
}

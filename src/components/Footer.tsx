const COLUMNS = [
  {
    heading: "SOLUTIONS",
    links: [
      { label: "Candidate Follow-Up", href: "#solutions" },
      { label: "Screening & Scheduling", href: "#solutions" },
      { label: "ATS & CRM Automation", href: "#solutions" },
      { label: "Reporting & Visibility", href: "#solutions" },
    ],
  },
  {
    heading: "COMPANY",
    links: [
      { label: "About", href: "#about" },
      { label: "Selected Work", href: "#work" },
      { label: "Insights", href: "#faq" },
      { label: "Contact", href: "#book" },
    ],
  },
  {
    heading: "START",
    links: [
      { label: "Recruiting Operations Blueprint", href: "#blueprint" },
      { label: "Book a Workflow Call", href: "#book" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="relative bg-space">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/assets/moon.png"
        alt="Lunar surface"
        className="block h-auto min-h-[440px] w-full object-cover opacity-80"
        style={{ objectPosition: "center 40%" }}
      />
      <div
        className="absolute z-[1] inset-0"
        style={{
          background:
            "linear-gradient(180deg, #020305 0%, rgba(2,3,5,0.55) 12%, rgba(2,3,5,0.12) 34%, transparent 62%)",
          left: "12px",
          top: "97px",
        }}
      />
      <div className="absolute top-0 right-0 left-0 z-[3] pt-14">
        <div className="mx-auto grid max-w-[1280px] grid-cols-1 gap-10 px-5 pb-10 sm:grid-cols-2 sm:px-[clamp(20px,5vw,60px)] xl:grid-cols-4">
          <div className="max-w-[340px] sm:col-span-2 xl:col-span-4">
            <div className="mb-[18px] flex items-center gap-[11px]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/assets/logo-white.png"
                alt="Combite"
                className="block h-[30px] w-auto"
              />
            </div>
            <p className="mb-5 text-[14.5px] leading-[1.6] text-[rgba(246,247,251,0.78)]">
              AI-assisted recruitment operations systems that reduce manual
              work and improve workflow consistency.
            </p>
            <div className="flex gap-3">
              <a
                href="#book"
                className="flex h-[38px] w-[38px] items-center justify-center rounded-[9px] border border-white/10 bg-white/5 text-[13px] font-semibold text-ink"
              >
                in
              </a>
              <a
                href="#book"
                className="flex h-[38px] w-[38px] items-center justify-center rounded-[9px] border border-white/10 bg-white/5 text-ink"
              >
                ◎
              </a>
            </div>
          </div>
          {COLUMNS.map((col) => (
            <div key={col.heading}>
              <div className="mb-[18px] text-xs font-bold tracking-[1.5px] text-[rgba(246,247,251,0.7)]">
                {col.heading}
              </div>
              <div className="flex flex-col gap-[11px] text-[14.5px]">
                {col.links.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    className="text-[rgba(246,247,251,0.92)]"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="mx-auto flex max-w-[1280px] flex-wrap items-center justify-between gap-[14px] border-t border-white/15 px-5 py-[22px] sm:px-[clamp(20px,5vw,60px)]">
          <div
            className="text-[13px] text-[rgba(246,247,251,0.92)]"
            style={{ textShadow: "0 1px 10px rgba(0,0,0,0.7)" }}
          >
            © 2026 Combite. All rights reserved.
          </div>
          <div className="flex gap-[22px] text-[13px]">
            <a
              href="#"
              className="text-[rgba(246,247,251,0.8)]"
              style={{ textShadow: "0 1px 10px rgba(0,0,0,0.7)" }}
            >
              Privacy
            </a>
            <a
              href="#"
              className="text-[rgba(246,247,251,0.8)]"
              style={{ textShadow: "0 1px 10px rgba(0,0,0,0.7)" }}
            >
              Terms
            </a>
            <a
              href="#"
              className="text-[rgba(246,247,251,0.8)]"
              style={{ textShadow: "0 1px 10px rgba(0,0,0,0.7)" }}
            >
              Cookie preferences
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

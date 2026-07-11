const PRINCIPLES = [
  {
    title: "Existing systems remain the source of truth",
    body: "Workflows are designed around the systems and permissions your team already uses.",
  },
  {
    title: "Human judgment remains in control",
    body: "AI may support review, prioritization, and administrative processing, but important recruitment decisions remain with your team.",
  },
  {
    title: "Access is scoped carefully",
    body: "Integrations should use appropriate authentication, permissions, and approved access.",
  },
  {
    title: "Systems are documented",
    body: "Each completed engagement includes agreed documentation and handover material.",
  },
  {
    title: "Workflows are tested before launch",
    body: "Approved workflows are validated before they become part of daily operations.",
  },
];

export default function ControlByDesign() {
  return (
    <section
      id="about"
      className="bg-space px-5 py-[clamp(70px,10vh,120px)] sm:px-[clamp(20px,5vw,60px)]"
    >
      <div className="mx-auto max-w-[1280px]">
        <div className="mb-12 max-w-[760px]">
          <div className="mb-[18px] text-[13px] font-bold tracking-[3px] text-cyan">
            CONTROL BY DESIGN
          </div>
          <h2 className="font-display text-[clamp(30px,4.5vw,48px)] leading-[1.06] tracking-[-1.2px]">
            Automation should improve operations — not remove accountability.
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-[18px] sm:grid-cols-2 xl:grid-cols-3">
          {PRINCIPLES.map((p) => (
            <div
              key={p.title}
              className="rounded-[14px] border border-white/9 bg-white/2 p-7"
            >
              <h3 className="mb-[10px] text-[16.5px] font-bold text-cyan">
                {p.title}
              </h3>
              <p className="text-[14.5px] leading-[1.6] text-[rgba(246,247,251,0.9)]">
                {p.body}
              </p>
            </div>
          ))}
          <div
            className="flex flex-col justify-center rounded-[14px] border border-[rgba(77,208,248,0.25)] p-7"
            style={{
              background:
                "linear-gradient(160deg, rgba(1,96,231,0.12), rgba(77,208,248,0.04))",
            }}
          >
            <p className="font-display text-lg leading-[1.3] tracking-[-0.3px]">
              It is not always a people problem. It is often a systems
              problem.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

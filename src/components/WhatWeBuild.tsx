const CARDS = [
  {
    title: "Candidate Follow-Up & Reactivation",
    body: "Build structured engagement workflows that help recruiters reconnect with relevant candidates, maintain momentum, and route responses to the right person.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#4DD0F8" strokeWidth="1.6">
        <path d="M4 12a8 8 0 108-8" />
        <path d="M4 4v5h5" />
        <circle cx="12" cy="12" r="2.5" />
      </svg>
    ),
  },
  {
    title: "AI-Assisted Screening & Scheduling",
    body: "Support profile review, candidate summaries, availability collection, interview coordination, and internal routing while keeping professional judgment in human hands.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#4DD0F8" strokeWidth="1.6">
        <path d="M9 11l3 3L22 4" />
        <path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11" />
      </svg>
    ),
  },
  {
    title: "ATS & CRM Workflow Automation",
    body: "Keep activities, records, stages, tasks, and internal handoffs more consistent across the recruitment process.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#4DD0F8" strokeWidth="1.6">
        <ellipse cx="12" cy="5" rx="8" ry="3" />
        <path d="M4 5v6c0 1.7 3.6 3 8 3s8-1.3 8-3V5" />
        <path d="M4 11v6c0 1.7 3.6 3 8 3s8-1.3 8-3v-6" />
      </svg>
    ),
  },
  {
    title: "Pipeline Reporting & Operations Visibility",
    body: "Give leadership a clearer view of workflow activity, response patterns, bottlenecks, and recruitment operations.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#4DD0F8" strokeWidth="1.6">
        <path d="M3 3v18h18" />
        <path d="M7 14l4-4 3 3 5-6" />
      </svg>
    ),
  },
];

export default function WhatWeBuild() {
  return (
    <section
      id="solutions"
      className="border-t border-white/5 bg-space px-5 py-[clamp(70px,10vh,120px)] sm:px-[clamp(20px,5vw,60px)]"
    >
      <div className="mx-auto max-w-[1280px]">
        <div className="mb-[52px] max-w-[720px]">
          <div className="mb-[18px] text-[13px] font-bold tracking-[3px] text-cyan">
            WHAT WE BUILD
          </div>
          <h2 className="mb-5 font-display text-[clamp(30px,4.5vw,50px)] leading-[1.06] tracking-[-1.2px]">
            Custom recruitment workflows — not another platform.
          </h2>
          <p className="text-[clamp(16px,1.3vw,18px)] leading-[1.62] text-[rgba(246,247,251,0.92)]">
            Combite improves and connects the systems your team already
            uses. Each solution is designed around your workflow, technology
            stack, operational priorities, and human decision points.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {CARDS.map((card) => (
            <div
              key={card.title}
              className="card-lift rounded-2xl border border-white/9 p-8"
              style={{
                background:
                  "linear-gradient(160deg, rgba(1,96,231,0.06), rgba(255,255,255,0.02))",
              }}
            >
              <div className="mb-[22px] flex h-11 w-11 items-center justify-center rounded-[11px] border border-[rgba(77,208,248,0.3)] bg-[rgba(77,208,248,0.12)]">
                {card.icon}
              </div>
              <h3 className="mb-3 text-[19px] font-bold tracking-[-0.3px]">
                {card.title}
              </h3>
              <p className="text-[15px] leading-[1.6] text-[rgba(246,247,251,0.9)]">
                {card.body}
              </p>
            </div>
          ))}
        </div>
        <div className="mt-9">
          <a
            href="#solutions"
            className="primary-btn inline-flex items-center gap-[9px] text-[15px] font-semibold text-cyan"
          >
            Explore Solutions <span className="btn-arrow">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}

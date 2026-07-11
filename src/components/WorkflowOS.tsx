"use client";

import { useState } from "react";

const STAGES = [
  {
    tag: "01 · CANDIDATE FOLLOW-UP",
    headline: "Good candidates should not disappear between touchpoints.",
    body: "Manual reminders and inconsistent follow-up allow relevant candidates to go cold before the next conversation happens.",
    outcome: "→ Build consistent engagement without removing recruiter judgment.",
    label: "Candidate Follow-Up",
  },
  {
    tag: "02 · SCREENING & SCHEDULING",
    headline: "Recruiter time disappears into coordination.",
    body: "Repetitive qualification, availability checks, and interview scheduling reduce the time available for candidate and client relationships.",
    outcome: "→ Reduce administrative back-and-forth while keeping people in control.",
    label: "Screening & Scheduling",
  },
  {
    tag: "03 · ATS & CRM WORKFLOWS",
    headline: "Your systems should stay accurate without constant manual updates.",
    body: "Calls, replies, stage changes, and internal handoffs are often recorded inconsistently — or not recorded at all.",
    outcome: "→ Keep recruitment data cleaner and workflows easier to manage.",
    label: "ATS & CRM Workflows",
  },
  {
    tag: "04 · PIPELINE VISIBILITY",
    headline: "Leaders should not wait for a spreadsheet to understand operations.",
    body: "Fragmented reporting makes bottlenecks difficult to identify and operational performance difficult to improve.",
    outcome: "→ Create clearer visibility across recruitment activity and workflow health.",
    label: "Pipeline Visibility",
  },
];

const NODE_POSITION: Record<number, { pos: string; base: string }> = {
  0: { pos: "top-[-8px] left-1/2", base: "translateX(-50%)" },
  1: { pos: "top-1/2 right-[-8px]", base: "translateY(-50%)" },
  2: { pos: "bottom-[-8px] left-1/2", base: "translateX(-50%)" },
  3: { pos: "top-1/2 left-[-8px]", base: "translateY(-50%)" },
};

export default function WorkflowOS() {
  const [active, setActive] = useState<number | null>(null);

  return (
    <section
      id="os"
      className="relative bg-space-deep px-5 py-[clamp(70px,10vh,120px)] sm:px-[clamp(20px,5vw,60px)]"
    >
      <div className="mx-auto w-full max-w-[1280px]">
        <div className="mb-12 text-center">
          <div className="mb-4 text-[13px] font-bold tracking-[3px] text-cyan">
            WHERE OPPORTUNITIES FALL THROUGH
          </div>
          <h2 className="mx-auto mb-[18px] max-w-[820px] font-display text-[clamp(28px,4vw,46px)] leading-[1.08] tracking-[-1px]">
            Recruitment does not break in one big moment.
            <br />
            <span className="text-[rgba(246,247,251,0.75)]">
              It breaks in the handoffs.
            </span>
          </h2>
          <p className="mx-auto max-w-[640px] text-[clamp(15px,1.3vw,18px)] leading-[1.6] text-[rgba(246,247,251,0.9)]">
            When candidate follow-up, interview coordination, CRM updates,
            and reporting depend on memory and manual work, opportunities
            quietly fall through the gaps.
          </p>
          <p className="mt-[14px] text-[13px] font-semibold tracking-[0.5px] text-[rgba(77,208,248,0.75)]">
            Hover a node to light up its workflow →
          </p>
        </div>

        <div className="grid grid-cols-1 items-center gap-[clamp(30px,5vw,70px)] lg:grid-cols-2">
          {/* text stages */}
          <div className="flex flex-col gap-[14px]">
            {STAGES.map((stage, i) => (
              <div
                key={stage.tag}
                onMouseEnter={() => setActive(i)}
                onMouseLeave={() => setActive(null)}
                className="border-l-2 border-[rgba(77,208,248,0.5)] px-5 py-4"
              >
                <div className="mb-2 flex items-center gap-[10px]">
                  <span className="text-xs font-bold tracking-[1.5px] text-cyan">
                    {stage.tag}
                  </span>
                </div>
                <h3 className="mb-2 text-xl font-bold tracking-[-0.3px]">
                  {stage.headline}
                </h3>
                <p className="mb-2 text-[15px] leading-[1.6] text-[rgba(246,247,251,0.9)]">
                  {stage.body}
                </p>
                <p className="text-sm font-semibold text-cyan">
                  {stage.outcome}
                </p>
              </div>
            ))}
          </div>

          {/* orbital visual */}
          <div className="flex min-h-[420px] items-center justify-center">
            <div className="relative aspect-square w-[min(440px,80vw)]">
              <div
                className="absolute inset-0 rounded-full border border-[rgba(77,208,248,0.14)]"
                style={{ animation: "spin 70s linear infinite" }}
              />
              <div
                className="absolute inset-[14%] rounded-full border border-dashed border-[rgba(77,208,248,0.1)]"
                style={{ animation: "spin 90s linear infinite reverse" }}
              />
              {/* core */}
              <div
                className="absolute top-1/2 left-1/2 flex h-[120px] w-[120px] -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-full border border-[rgba(77,208,248,0.4)] text-center"
                style={{
                  background:
                    "radial-gradient(circle at 40% 35%, #0e2a5a, #050817 72%)",
                  animation: "pulseGlow 5s ease-in-out infinite",
                }}
              >
                <span className="text-[9.5px] tracking-[1.5px] text-[rgba(246,247,251,0.75)]">
                  {active === null ? "SYSTEM CORE" : "ACTIVE WORKFLOW"}
                </span>
                <span className="max-w-[96px] text-[13px] leading-[1.2] font-bold text-cyan">
                  {active === null ? "Recruitment OS" : STAGES[active].label}
                </span>
              </div>
              {/* nodes */}
              {STAGES.map((stage, i) => {
                const { pos, base } = NODE_POSITION[i];
                const on = active === i;
                return (
                  <div
                    key={stage.tag}
                    onMouseEnter={() => setActive(i)}
                    onMouseLeave={() => setActive(null)}
                    className={`node-btn absolute ${pos} flex h-14 w-14 items-center justify-center rounded-full border`}
                    style={{
                      transform: `${base} scale(${on ? 1.18 : 1})`,
                      background: on
                        ? "radial-gradient(circle at 40% 35%, #4DD0F8, #0160E7 70%)"
                        : "rgba(255,255,255,0.06)",
                      borderColor: on ? "#4DD0F8" : "rgba(255,255,255,0.15)",
                      boxShadow: on ? "0 0 48px rgba(1,96,231,0.85)" : "none",
                    }}
                  >
                    <span
                      className="text-[11px] font-extrabold"
                      style={{ color: on ? "#020305" : "#F6F7FB" }}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

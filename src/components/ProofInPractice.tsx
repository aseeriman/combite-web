const ASSETS = [
  {
    caption: "[ database reactivation demo ]",
    tag: "CONCEPT DEMONSTRATION",
    tagStyle: {
      background: "rgba(77,208,248,0.15)",
      border: "1px solid rgba(77,208,248,0.4)",
      color: "#4DD0F8",
    },
    title: "Candidate Database Reactivation",
    body: "See how candidate records can be segmented, prioritized, routed into structured re-engagement workflows, and returned to recruiters when human attention is required.",
    cta: "Watch the Workflow Demo",
  },
  {
    caption: "[ ats / crm workflow ]",
    tag: "ANONYMIZED PROJECT",
    tagStyle: {
      background: "rgba(255,255,255,0.08)",
      border: "1px solid rgba(255,255,255,0.2)",
      color: "rgba(246,247,251,0.8)",
    },
    title: "ATS & CRM Workflow Example",
    body: "See how activities, follow-ups, stage updates, and internal notifications can move through a connected workflow.",
    cta: "Explore the System",
  },
  {
    caption: "[ operations dashboard ]",
    tag: "INTERNAL SYSTEM",
    tagStyle: {
      background: "rgba(1,96,231,0.2)",
      border: "1px solid rgba(1,96,231,0.5)",
      color: "#7fb4ff",
    },
    title: "Recruitment Operations Dashboard",
    body: "See how operational activity and workflow bottlenecks can be made easier to understand.",
    cta: "View the Dashboard",
  },
];

export default function ProofInPractice() {
  return (
    <section
      id="work"
      className="border-t border-white/5 bg-space-deep px-5 py-[clamp(70px,10vh,120px)] sm:px-[clamp(20px,5vw,60px)]"
    >
      <div className="mx-auto max-w-[1280px]">
        <div className="mb-12 max-w-[720px]">
          <div className="mb-[18px] text-[13px] font-bold tracking-[3px] text-cyan">
            PROOF IN PRACTICE
          </div>
          <h2 className="font-display text-[clamp(30px,4.5vw,48px)] leading-[1.06] tracking-[-1.2px]">
            See how recruitment workflows can operate with less manual
            friction.
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3">
          {ASSETS.map((asset) => (
            <div
              key={asset.title}
              className="card-lift overflow-hidden rounded-2xl border border-white/9 bg-white/2"
            >
              <div
                className="relative flex h-[180px] items-center justify-center border-b border-white/6"
                style={{
                  background:
                    "repeating-linear-gradient(45deg, #0a1428, #0a1428 12px, #0c1930 12px, #0c1930 24px)",
                }}
              >
                <span className="font-mono text-xs tracking-[1px] text-[rgba(77,208,248,0.7)]">
                  {asset.caption}
                </span>
                <div
                  className="absolute top-3 left-3 rounded-[5px] px-[9px] py-1 text-[10.5px] font-bold tracking-[1px]"
                  style={asset.tagStyle}
                >
                  {asset.tag}
                </div>
              </div>
              <div className="p-[26px]">
                <h3 className="mb-[10px] text-lg font-bold">{asset.title}</h3>
                <p className="mb-4 text-[14.5px] leading-[1.58] text-[rgba(246,247,251,0.9)]">
                  {asset.body}
                </p>
                <a
                  href="#book"
                  className="primary-btn inline-flex items-center gap-2 text-sm font-semibold text-cyan"
                >
                  {asset.cta} <span className="btn-arrow">→</span>
                </a>
              </div>
            </div>
          ))}
        </div>
        <p className="mt-6 text-[13px] text-[rgba(246,247,251,0.7)]">
          Every asset is labelled honestly — client project, anonymized
          project, internal system, or concept demonstration. We never imply
          a demo is a client project.
        </p>
      </div>
    </section>
  );
}

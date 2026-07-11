const DELIVERABLES = [
  "Workflow and bottleneck map",
  "Technology-stack review",
  "Prioritized automation opportunities",
  "Recommended system architecture",
  "Operational impact estimate",
  "Implementation roadmap",
  "Fixed-scope build proposal",
];

export default function Blueprint() {
  return (
    <section
      id="blueprint"
      className="relative px-5 py-[clamp(70px,10vh,120px)] sm:px-[clamp(20px,5vw,60px)]"
      style={{
        background: "linear-gradient(180deg, #020305, #061024 50%, #020305)",
      }}
    >
      <div className="mx-auto grid max-w-[1280px] grid-cols-1 items-center gap-[clamp(36px,5vw,64px)] lg:grid-cols-2">
        <div>
          <div className="mb-[18px] text-[13px] font-bold tracking-[3px] text-cyan">
            START WITH CLARITY
          </div>
          <h2 className="mb-[22px] font-display text-[clamp(30px,4.5vw,48px)] leading-[1.06] tracking-[-1.2px]">
            Know what to automate before committing to a build.
          </h2>
          <p className="mb-[30px] text-[clamp(16px,1.3vw,18px)] leading-[1.62] text-[rgba(246,247,251,0.92)]">
            The Recruiting Operations Blueprint is a focused, paid engagement
            that maps your current workflows, identifies high-value
            automation opportunities, defines the recommended system, and
            provides a clear implementation roadmap.
          </p>
          <a
            href="#book"
            className="primary-btn mb-5 inline-flex items-center gap-[9px] rounded-[9px] bg-cyan px-6 py-[15px] text-[15px] font-bold text-space"
          >
            Explore the Blueprint <span className="btn-arrow">→</span>
          </a>
          <div className="text-[13.5px] text-[rgba(246,247,251,0.75)]">
            Paid engagement &nbsp;•&nbsp; Clear deliverables &nbsp;•&nbsp; No
            obligation to proceed
          </div>
        </div>
        <div className="rounded-[18px] border border-[rgba(77,208,248,0.18)] bg-white/3 p-[clamp(26px,3vw,38px)]">
          <div className="mb-5 text-xs font-bold tracking-[2px] text-[rgba(246,247,251,0.75)]">
            WHAT YOU RECEIVE
          </div>
          <div className="flex flex-col gap-[2px]">
            {DELIVERABLES.map((item, i) => (
              <div
                key={item}
                className={`flex items-center gap-[14px] py-[13px] ${
                  i !== DELIVERABLES.length - 1
                    ? "border-b border-white/6"
                    : ""
                }`}
              >
                <span className="text-cyan">◈</span>
                <span className="text-[15.5px]">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

const FAQS = [
  {
    q: "Will Combite replace our ATS or CRM?",
    a: "Usually, no. Combite is designed to improve and connect the systems your team already uses. Replacement would only be considered where there is a clear operational reason.",
  },
  {
    q: "Can you work with our current technology stack?",
    a: "We review your systems during the fit and Blueprint stages. Feasibility depends on available APIs, permissions, current configuration, and the workflow being designed.",
  },
  {
    q: "Does AI make hiring decisions automatically?",
    a: "Combite focuses on AI-assisted workflows. Human judgment remains essential for candidate evaluation, selection, and decisions with professional or ethical consequences.",
  },
  {
    q: "What does the Recruiting Operations Blueprint include?",
    a: "It includes workflow analysis, bottleneck mapping, automation opportunities, recommended architecture, implementation priorities, and a fixed-scope build recommendation.",
  },
  {
    q: "How long does implementation take?",
    a: "Timelines depend on scope, systems, integrations, data quality, testing requirements, and stakeholder availability. A clear timeline is defined before implementation begins.",
  },
  {
    q: "Who owns the completed workflows?",
    a: "Ownership, documentation, access, licensing, third-party services, and support terms are defined clearly in the project agreement.",
  },
  {
    q: "Can we start with one workflow?",
    a: "Yes. A focused workflow can be a sensible starting point when it has a clear business case and can be implemented safely.",
  },
  {
    q: "Do you provide support after launch?",
    a: "Ongoing monitoring, support, and optimization may be included as an optional engagement depending on the system.",
  },
];

export default function FAQ() {
  return (
    <section
      id="faq"
      className="border-t border-white/5 bg-space-deep px-5 py-[clamp(70px,10vh,120px)] sm:px-[clamp(20px,5vw,60px)]"
    >
      <div className="mx-auto max-w-[880px]">
        <div className="mb-11">
          <div className="mb-[18px] text-[13px] font-bold tracking-[3px] text-cyan">
            FREQUENTLY ASKED
          </div>
          <h2 className="font-display text-[clamp(30px,4.5vw,46px)] leading-[1.06] tracking-[-1.2px]">
            Questions recruitment leaders ask us.
          </h2>
        </div>
        <div className="flex flex-col gap-[10px]">
          {FAQS.map((item) => (
            <details
              key={item.q}
              className="rounded-xl border border-white/9 bg-white/2 px-[22px] py-1"
            >
              <summary className="flex items-center justify-between gap-4 py-[18px] text-[16.5px] font-semibold">
                {item.q}
                <span className="faq-plus flex-shrink-0 text-[22px] text-cyan transition-transform duration-[.25s] ease-out">
                  +
                </span>
              </summary>
              <p className="pb-5 text-[15px] leading-[1.62] text-[rgba(246,247,251,0.9)]">
                {item.a}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

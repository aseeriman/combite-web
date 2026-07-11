const CATEGORIES = [
  {
    label: "ATS & CRM",
    items: ["Bullhorn", "HubSpot", "Recruiterflow", "Vincere", "Loxo", "JobAdder"],
  },
  {
    label: "SCHEDULING",
    items: ["Calendly", "Microsoft 365", "Google Calendar"],
  },
  {
    label: "COMMUNICATION",
    items: ["Outlook", "Gmail", "Slack", "Microsoft Teams"],
  },
  {
    label: "DATA & OPERATIONS",
    items: ["Airtable", "Google Sheets", "Custom systems"],
  },
];

export default function Integrations() {
  return (
    <section
      id="integrations"
      className="border-t border-white/5 bg-space-deep px-5 py-[clamp(70px,10vh,120px)] sm:px-[clamp(20px,5vw,60px)]"
    >
      <div className="mx-auto max-w-[1280px]">
        <div className="mb-12 max-w-[720px]">
          <div className="mb-[18px] text-[13px] font-bold tracking-[3px] text-cyan">
            BUILT AROUND YOUR STACK
          </div>
          <h2 className="mb-5 font-display text-[clamp(30px,4.5vw,48px)] leading-[1.06] tracking-[-1.2px]">
            Improve the systems your team already trusts.
          </h2>
          <p className="text-[clamp(16px,1.3vw,18px)] leading-[1.62] text-[rgba(246,247,251,0.92)]">
            Combite does not force your agency into another platform. We
            design around your ATS, CRM, calendar, inbox, data, and internal
            processes.
          </p>
        </div>
        <div className="mb-7 grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {CATEGORIES.map((cat) => (
            <div
              key={cat.label}
              className="rounded-[14px] border border-white/9 bg-white/2 p-[26px]"
            >
              <div className="mb-4 text-xs font-bold tracking-[1.5px] text-cyan">
                {cat.label}
              </div>
              <div className="flex flex-wrap gap-2">
                {cat.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-lg border border-white/10 bg-white/5 px-[13px] py-[7px] text-[13.5px]"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="rounded-xl border border-[rgba(77,208,248,0.18)] bg-[rgba(1,96,231,0.06)] px-[22px] py-[18px] text-[13.5px] leading-[1.55] text-[rgba(246,247,251,0.9)]">
          Integration feasibility depends on available APIs, account
          permissions, existing configuration, and the approved project
          scope. We only display platforms we have confirmed we can support.
        </div>
      </div>
    </section>
  );
}

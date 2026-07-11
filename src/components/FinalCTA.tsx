import AutoplayVideo from "./AutoplayVideo";

export default function FinalCTA() {
  return (
    <section
      id="book"
      className="relative overflow-hidden px-5 py-[clamp(90px,14vh,150px)] text-center sm:px-[clamp(20px,5vw,60px)]"
    >
      <AutoplayVideo className="absolute inset-0 h-full w-full object-cover opacity-50" />
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 70% 70% at 50% 50%, rgba(2,3,5,0.4), rgba(2,3,5,0.92))",
        }}
      />
      <div className="relative z-[3] mx-auto flex max-w-[760px] flex-col items-center">
        <h2 className="mb-6 font-display text-[clamp(30px,5vw,54px)] leading-[1.05] tracking-[-1.5px]">
          See where your recruitment workflow is losing time and momentum.
        </h2>
        <p className="mb-9 max-w-[600px] text-[clamp(16px,1.4vw,19px)] leading-[1.6] text-[rgba(246,247,251,0.92)]">
          Book a focused 30-minute conversation about your current systems,
          operational bottlenecks, and priorities. We&apos;ll determine
          whether a Recruiting Operations Blueprint is the right next step.
        </p>
        <a
          href="#book"
          className="primary-btn mb-5 inline-flex items-center gap-[9px] rounded-[9px] bg-cyan px-[30px] py-[17px] text-base font-bold text-space"
        >
          Book a Recruitment Workflow Call <span className="btn-arrow">→</span>
        </a>
        <div className="text-[13.5px] text-[rgba(246,247,251,0.78)]">
          No generic sales presentation. A focused conversation about your
          recruitment operations.
        </div>
      </div>
    </section>
  );
}

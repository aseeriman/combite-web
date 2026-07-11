const STEPS = [
  {
    n: "01",
    title: "Fit Call",
    body: "We learn how your agency currently operates, identify the highest-friction workflows, and determine whether Combite is the right fit.",
  },
  {
    n: "02",
    title: "Blueprint",
    body: "We map workflows, review systems, prioritize opportunities, and define the recommended architecture and implementation plan.",
  },
  {
    n: "03",
    title: "Build",
    body: "We design, integrate, test, document, and deploy the approved workflows inside your existing technology environment.",
  },
  {
    n: "04",
    title: "Optimize",
    body: "Where required, we monitor performance, improve workflows, and support additional automation as your operations evolve.",
  },
];

export default function Process() {
  return (
    <section className="bg-space px-5 py-[clamp(70px,10vh,120px)] sm:px-[clamp(20px,5vw,60px)]">
      <div className="mx-auto max-w-[1280px]">
        <div className="mb-[52px] max-w-[720px]">
          <div className="mb-[18px] text-[13px] font-bold tracking-[3px] text-cyan">
            HOW IT WORKS
          </div>
          <h2 className="font-display text-[clamp(30px,4.5vw,48px)] leading-[1.06] tracking-[-1.2px]">
            A clear path from operational problem to working system.
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {STEPS.map((step) => (
            <div
              key={step.n}
              className="card-lift rounded-2xl border border-white/9 bg-white/2 p-[30px]"
            >
              <div
                className="mb-4 font-display text-[38px]"
                style={{ color: "#4DD0F8D3" }}
              >
                {step.n}
              </div>
              <h3 className="mb-[10px] text-[19px] font-bold">{step.title}</h3>
              <p className="text-[14.5px] leading-[1.6] text-[rgba(246,247,251,0.9)]">
                {step.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

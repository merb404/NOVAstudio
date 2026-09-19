import { process } from "../../data/stats";
import SectionHeading from "../common/SectionHeading";
import Reveal from "../common/Reveal";

export default function ProcessSteps() {
  return (
    <section className="border-t border-line">
      <div className="mx-auto max-w-content px-6 py-20 sm:py-28">
        <SectionHeading
          kicker="How we work"
          title="Four stages, the same team throughout"
          description="No hand-off between a strategy team and a delivery team — the people who scope the project are the ones who build it."
        />

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {process.map((step, i) => (
            <Reveal key={step.step} delay={i * 0.08}>
              <div className="border-t border-line pt-5">
                <span className="font-display text-sm text-mist">{step.step}</span>
                <h3 className="mt-3 font-display text-xl text-ivory">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-mist">{step.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

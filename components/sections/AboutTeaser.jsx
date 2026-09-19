import { stats } from "../../data/stats";
import SectionHeading from "../common/SectionHeading";
import Reveal from "../common/Reveal";
import Button from "../common/Button";

export default function AboutTeaser() {
  return (
    <section className="border-y border-line bg-ink-soft">
      <div className="mx-auto max-w-content px-6 py-20 sm:py-28">
        <div className="grid gap-12 lg:grid-cols-[1fr_1fr]">
          <SectionHeading
            kicker="Why Nova"
            title="A studio built to stay small on purpose"
            description="We turn down work that would mean growing past the size where everyone still knows every project by heart. That constraint shapes how carefully we pick clients, and how closely we stay involved once a project starts."
          />
          <Reveal delay={0.1}>
            <div className="grid grid-cols-2 gap-6 sm:gap-8">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <p className="font-display text-3xl text-lime sm:text-4xl">
                    {stat.value}
                    <span className="text-xl sm:text-2xl">{stat.suffix}</span>
                  </p>
                  <p className="mt-2 text-sm text-mist">{stat.label}</p>
                </div>
              ))}
            </div>
            <div className="mt-8">
              <Button to="/about" variant="ghost">
                More about the studio
              </Button>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

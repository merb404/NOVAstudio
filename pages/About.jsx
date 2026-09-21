import { motion } from "framer-motion";
import { stats, values } from "../data/stats";
import SectionHeading from "../components/common/SectionHeading";
import Reveal from "../components/common/Reveal";
import CTASection from "../components/sections/CTASection";

export default function About() {
  return (
    <>
      <section className="mx-auto max-w-content px-6 pt-16 pb-20 sm:pt-20 sm:pb-24">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-sm text-mist"
        >
          About Nova
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.08 }}
          className="mt-5 max-w-2xl font-display text-4xl leading-tight text-ivory sm:text-5xl"
        >
          We started Nova because most studios grow past the size where the work stays good.
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.16 }}
          className="mt-6 max-w-2xl text-base leading-relaxed text-mist sm:text-lg"
        >
          Nova opened in 2019 as a two-person team taking on web design work
          for local businesses. Six years on, we're six people and a lot more
          selective about what we take on — but the studio is still small
          enough that everyone working on your project was in the room for
          the first conversation about it.
        </motion.p>
      </section>

      <section className="border-y border-line bg-ink-soft">
        <div className="mx-auto max-w-content px-6 py-16 sm:py-20">
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
            {stats.map((stat, i) => (
              <Reveal key={stat.label} delay={i * 0.08}>
                <p className="font-display text-3xl text-lime sm:text-4xl">
                  {stat.value}
                  <span className="text-xl sm:text-2xl">{stat.suffix}</span>
                </p>
                <p className="mt-2 text-sm text-mist">{stat.label}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-content px-6 py-20 sm:py-28">
        <SectionHeading
          kicker="How we think"
          title="A few things we hold onto on every project"
        />
        <div className="mt-12 grid gap-8 sm:grid-cols-3">
          {values.map((value, i) => (
            <Reveal key={value.title} delay={i * 0.1}>
              <div className="border-t border-line pt-5">
                <h3 className="font-display text-xl text-ivory">{value.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-mist">{value.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <CTASection />
    </>
  );
}

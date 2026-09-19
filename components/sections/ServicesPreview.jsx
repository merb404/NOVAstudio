import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { services } from "../../data/services";
import SectionHeading from "../common/SectionHeading";
import Icon from "../common/Icon";
import Reveal from "../common/Reveal";

export default function ServicesPreview() {
  return (
    <section className="mx-auto max-w-content px-6 py-20 sm:py-28">
      <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
        <SectionHeading
          kicker="What we do"
          title="Four disciplines, one small team"
          description="We keep the studio deliberately small so the same people who scope the work are the ones who design and build it."
        />
        <Reveal delay={0.1}>
          <Link to="/services" className="text-sm text-mist transition-colors hover:text-ivory">
            View all services →
          </Link>
        </Reveal>
      </div>

      <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {services.slice(0, 4).map((service, i) => (
          <Reveal key={service.slug} delay={i * 0.08}>
            <motion.div
              whileHover={{ y: -6 }}
              transition={{ type: "spring", stiffness: 300, damping: 22 }}
              className="h-full rounded-2xl border border-line p-6"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-ivory/5 text-lime">
                <Icon name={service.icon} />
              </div>
              <h3 className="mt-5 font-display text-xl text-ivory">{service.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-mist">{service.short}</p>
            </motion.div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

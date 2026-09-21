import { motion } from "framer-motion";
import { services } from "../data/services";
import Icon from "../components/common/Icon";
import Reveal from "../components/common/Reveal";
import CTASection from "../components/sections/CTASection";

export default function Services() {
  return (
    <>
      <section className="mx-auto max-w-content px-6 pt-16 pb-16 sm:pt-20 sm:pb-20">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-sm text-mist"
        >
          Services
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.08 }}
          className="mt-5 max-w-2xl font-display text-4xl leading-tight text-ivory sm:text-5xl"
        >
          Five disciplines that cover a product from first sketch to launch.
        </motion.h1>
      </section>

      <section className="mx-auto max-w-content divide-y divide-line border-t border-line px-6">
        {services.map((service, i) => (
          <Reveal key={service.slug} delay={i * 0.05}>
            <div className="grid gap-6 py-12 sm:grid-cols-[auto_1fr_1fr] sm:items-start sm:gap-10">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-ivory/5 text-lime">
                <Icon name={service.icon} size={24} />
              </div>
              <div>
                <h2 className="font-display text-2xl text-ivory">{service.title}</h2>
                <p className="mt-3 text-sm leading-relaxed text-mist sm:text-base">
                  {service.description}
                </p>
              </div>
              <div>
                <p className="text-sm text-mist">Typical deliverables</p>
                <ul className="mt-3 space-y-2">
                  {service.deliverables.map((item) => (
                    <li key={item} className="text-sm text-mist">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>
        ))}
      </section>

      <CTASection />
    </>
  );
}

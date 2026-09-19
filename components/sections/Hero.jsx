import { motion } from "framer-motion";
import Button from "../common/Button";
import OrbArt from "../common/OrbArt";

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

export default function Hero() {
  return (
    <section className="mx-auto max-w-content px-6 pt-16 pb-24 sm:pt-20 sm:pb-32">
      <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
        <motion.div variants={container} initial="hidden" animate="show">
          <motion.p variants={item} className="text-sm text-mist">
            Digital product &amp; creative studio
          </motion.p>
          <motion.h1
            variants={item}
            className="mt-5 font-display text-4xl leading-[1.1] text-ivory sm:text-5xl lg:text-6xl"
          >
            We design and build the products people actually keep using.
          </motion.h1>
          <motion.p variants={item} className="mt-6 max-w-lg text-base leading-relaxed text-mist sm:text-lg">
            Nova is a six-person studio working across product design, web
            development, and brand — for founders who need the first version
            to be good, not just shipped.
          </motion.p>
          <motion.div variants={item} className="mt-9 flex flex-wrap items-center gap-4">
            <Button to="/contact" variant="primary">
              Start a project
            </Button>
            <Button to="/projects" variant="ghost" showIcon={false}>
              View our work
            </Button>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="relative overflow-hidden rounded-2xl border border-line"
        >
          <OrbArt palette={["#CFFF5C", "#161B2C"]} className="h-64 w-full sm:h-80 lg:h-[420px]" />
          <div className="absolute bottom-5 left-5 right-5 rounded-xl border border-line bg-ink/70 px-4 py-3 backdrop-blur">
            <p className="font-display text-lg text-ivory">48 products shipped</p>
            <p className="text-xs text-mist">Since the studio opened in 2019</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

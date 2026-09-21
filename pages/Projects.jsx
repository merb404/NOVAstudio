import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { projects } from "../data/projects";
import OrbArt from "../components/common/OrbArt";
import Tag from "../components/common/Tag";
import Reveal from "../components/common/Reveal";
import CTASection from "../components/sections/CTASection";

export default function Projects() {
  const categories = useMemo(() => {
    const set = new Set(projects.map((p) => p.category.split(" · ")[0]));
    return ["All", ...Array.from(set)];
  }, []);
  const [active, setActive] = useState("All");

  const filtered =
    active === "All" ? projects : projects.filter((p) => p.category.startsWith(active));

  return (
    <>
      <section className="mx-auto max-w-content px-6 pt-16 pb-10 sm:pt-20">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-sm text-mist"
        >
          Our work
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.08 }}
          className="mt-5 max-w-2xl font-display text-4xl leading-tight text-ivory sm:text-5xl"
        >
          A selection of recent product, brand, and web projects.
        </motion.h1>

        <div className="mt-8 flex flex-wrap gap-2" role="tablist" aria-label="Filter projects by category">
          {categories.map((cat) => (
            <button
              key={cat}
              role="tab"
              aria-selected={active === cat}
              onClick={() => setActive(cat)}
              className={`rounded-full border px-4 py-2 text-sm transition-colors duration-200 ${
                active === cat
                  ? "border-lime bg-lime text-ink"
                  : "border-line text-mist hover:text-ivory"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-content px-6 py-12 sm:py-16">
        <div className="grid gap-6 sm:grid-cols-2">
          {filtered.map((project, i) => (
            <Reveal key={project.slug} delay={i * 0.06}>
              <Link to={`/projects/${project.slug}`} className="group block">
                <motion.div
                  whileHover={{ y: -6 }}
                  transition={{ type: "spring", stiffness: 300, damping: 22 }}
                  className="overflow-hidden rounded-2xl border border-line"
                >
                  <div className="overflow-hidden">
                    <motion.div whileHover={{ scale: 1.04 }} transition={{ duration: 0.5 }}>
                      <OrbArt palette={project.palette} className="h-52 w-full" />
                    </motion.div>
                  </div>
                  <div className="p-6">
                    <Tag>{project.category}</Tag>
                    <h3 className="mt-4 font-display text-2xl text-ivory">{project.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-mist">{project.summary}</p>
                    <span className="mt-4 inline-block text-sm text-lime opacity-0 transition-opacity duration-200 group-hover:opacity-100">
                      View case study →
                    </span>
                  </div>
                </motion.div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      <CTASection />
    </>
  );
}

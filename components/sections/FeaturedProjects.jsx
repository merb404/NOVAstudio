import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { projects } from "../../data/projects";
import SectionHeading from "../common/SectionHeading";
import OrbArt from "../common/OrbArt";
import Reveal from "../common/Reveal";
import Tag from "../common/Tag";

export default function FeaturedProjects() {
  return (
    <section className="mx-auto max-w-content px-6 py-20 sm:py-28">
      <SectionHeading
        kicker="Selected work"
        title="A few projects we're proud of"
        description="Four recent engagements across product design, development, and brand."
      />

      <div className="mt-12 grid gap-6 sm:grid-cols-2">
        {projects.map((project, i) => (
          <Reveal key={project.slug} delay={i * 0.08}>
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
  );
}

import { Link, Navigate, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { projects } from "../data/projects";
import OrbArt from "../components/common/OrbArt";
import Tag from "../components/common/Tag";
import Reveal from "../components/common/Reveal";
import Button from "../components/common/Button";
import CTASection from "../components/sections/CTASection";

export default function ProjectDetail() {
  const { slug } = useParams();
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return <Navigate to="/projects" replace />;
  }

  const related = projects.filter((p) => p.slug !== slug).slice(0, 2);

  return (
    <>
      <section className="mx-auto max-w-content px-6 pt-16 pb-10 sm:pt-20">
        <Link to="/projects" className="text-sm text-mist transition-colors hover:text-ivory">
          ← All work
        </Link>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mt-6"
        >
          <Tag>{project.category}</Tag>
          <h1 className="mt-5 font-display text-4xl leading-tight text-ivory sm:text-5xl">
            {project.title}
          </h1>
          <p className="mt-4 max-w-xl text-mist">{project.summary}</p>
          <p className="mt-2 text-sm text-mist">{project.year}</p>
        </motion.div>
      </section>

      <Reveal>
        <section className="mx-auto max-w-content px-6">
          <OrbArt palette={project.palette} className="h-64 w-full rounded-2xl border border-line sm:h-96" />
        </section>
      </Reveal>

      <section className="mx-auto max-w-content px-6 py-16 sm:py-20">
        <div className="grid gap-12 lg:grid-cols-[2fr_1fr]">
          <div className="space-y-10">
            <Reveal>
              <div>
                <h2 className="font-display text-2xl text-ivory">Overview</h2>
                <p className="mt-3 leading-relaxed text-mist">{project.overview}</p>
              </div>
            </Reveal>
            <Reveal delay={0.05}>
              <div>
                <h2 className="font-display text-2xl text-ivory">The challenge</h2>
                <p className="mt-3 leading-relaxed text-mist">{project.challenge}</p>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <div>
                <h2 className="font-display text-2xl text-ivory">The solution</h2>
                <p className="mt-3 leading-relaxed text-mist">{project.solution}</p>
              </div>
            </Reveal>
          </div>

          <div className="space-y-10">
            <Reveal delay={0.05}>
              <div>
                <h3 className="text-sm text-ivory">Tools used</h3>
                <div className="mt-3 flex flex-wrap gap-2">
                  {project.tools.map((tool) => (
                    <Tag key={tool}>{tool}</Tag>
                  ))}
                </div>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <div>
                <h3 className="text-sm text-ivory">Results</h3>
                <ul className="mt-3 space-y-3">
                  {project.results.map((result) => (
                    <li key={result} className="flex gap-2 text-sm text-mist">
                      <CheckCircle2 size={18} className="mt-0.5 shrink-0 text-lime" aria-hidden="true" />
                      <span>{result}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="border-t border-line">
        <div className="mx-auto max-w-content px-6 py-16 sm:py-20">
          <h2 className="font-display text-2xl text-ivory">Related work</h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            {related.map((p, i) => (
              <Reveal key={p.slug} delay={i * 0.08}>
                <Link to={`/projects/${p.slug}`} className="group block">
                  <motion.div
                    whileHover={{ y: -6 }}
                    transition={{ type: "spring", stiffness: 300, damping: 22 }}
                    className="overflow-hidden rounded-2xl border border-line"
                  >
                    <OrbArt palette={p.palette} className="h-40 w-full" />
                    <div className="p-5">
                      <Tag>{p.category}</Tag>
                      <h3 className="mt-3 font-display text-xl text-ivory">{p.title}</h3>
                    </div>
                  </motion.div>
                </Link>
              </Reveal>
            ))}
          </div>
          <div className="mt-10">
            <Button to="/contact" variant="primary">
              Start a project like this
            </Button>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}

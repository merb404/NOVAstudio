import Reveal from "../common/Reveal";
import Button from "../common/Button";

export default function CTASection() {
  return (
    <section className="mx-auto max-w-content px-6 py-20 sm:py-28">
      <Reveal>
        <div className="rounded-3xl border border-line bg-ink-soft px-8 py-16 text-center sm:px-16">
          <h2 className="mx-auto max-w-xl font-display text-3xl leading-tight text-ivory sm:text-4xl">
            Have a project in mind? Let's talk about what it needs.
          </h2>
          <p className="mx-auto mt-4 max-w-md text-mist">
            Tell us where things stand and we'll reply within two working days
            with next steps, not a sales call.
          </p>
          <div className="mt-8 flex justify-center">
            <Button to="/contact" variant="primary">
              Get in touch
            </Button>
          </div>
        </div>
      </Reveal>
    </section>
  );
}

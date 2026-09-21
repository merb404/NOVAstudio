import { useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle2, Mail, MapPin, Phone } from "lucide-react";
import Button from "../components/common/Button";
import Reveal from "../components/common/Reveal";

const initialState = { name: "", email: "", subject: "", message: "" };

function validate(values) {
  const errors = {};
  if (!values.name.trim()) errors.name = "Enter your name.";
  if (!values.email.trim()) {
    errors.email = "Enter your email.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
    errors.email = "Enter a valid email address.";
  }
  if (!values.subject.trim()) errors.subject = "Let us know what this is about.";
  if (!values.message.trim()) {
    errors.message = "Add a short message.";
  } else if (values.message.trim().length < 20) {
    errors.message = "Add a little more detail (20 characters minimum).";
  }
  return errors;
}

const fieldBase =
  "w-full rounded-lg border bg-transparent px-4 py-3 text-sm text-ivory placeholder:text-mist/60 transition-colors duration-200";

export default function Contact() {
  const [values, setValues] = useState(initialState);
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues((v) => ({ ...v, [name]: value }));
  };

  const handleBlur = (e) => {
    const { name } = e.target;
    setTouched((t) => ({ ...t, [name]: true }));
    setErrors(validate({ ...values }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const nextErrors = validate(values);
    setErrors(nextErrors);
    setTouched({ name: true, email: true, subject: true, message: true });
    if (Object.keys(nextErrors).length === 0) {
      setSubmitted(true);
    }
  };

  const fieldState = (name) => {
    if (!touched[name]) return "border-line";
    return errors[name] ? "border-coral" : "border-lime";
  };

  if (submitted) {
    return (
      <section className="mx-auto flex max-w-content flex-col items-center px-6 py-32 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4 }}
        >
          <CheckCircle2 size={48} className="mx-auto text-lime" aria-hidden="true" />
          <h1 className="mt-6 font-display text-3xl text-ivory sm:text-4xl">Message sent</h1>
          <p className="mt-3 max-w-sm text-mist">
            Thanks for reaching out — this is a front-end demo, so nothing was
            emailed, but in production you'd hear back from us within two
            working days.
          </p>
          <div className="mt-8">
            <Button
              onClick={() => {
                setValues(initialState);
                setTouched({});
                setErrors({});
                setSubmitted(false);
              }}
              variant="ghost"
              showIcon={false}
            >
              Send another message
            </Button>
          </div>
        </motion.div>
      </section>
    );
  }

  return (
    <>
      <section className="mx-auto max-w-content px-6 pt-16 pb-16 sm:pt-20">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-sm text-mist"
        >
          Contact
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.08 }}
          className="mt-5 max-w-2xl font-display text-4xl leading-tight text-ivory sm:text-5xl"
        >
          Tell us about the project you're planning.
        </motion.h1>
      </section>

      <section className="mx-auto max-w-content px-6 pb-24">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr]">
          <Reveal>
            <form noValidate onSubmit={handleSubmit} className="space-y-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className="mb-2 block text-sm text-ivory">
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    value={values.name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    aria-invalid={Boolean(errors.name && touched.name)}
                    aria-describedby="name-error"
                    placeholder="Jordan Blake"
                    className={`${fieldBase} ${fieldState("name")}`}
                  />
                  {touched.name && errors.name && (
                    <p id="name-error" className="mt-1.5 text-xs text-coral">
                      {errors.name}
                    </p>
                  )}
                </div>
                <div>
                  <label htmlFor="email" className="mb-2 block text-sm text-ivory">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    aria-invalid={Boolean(errors.email && touched.email)}
                    aria-describedby="email-error"
                    placeholder="jordan@company.com"
                    className={`${fieldBase} ${fieldState("email")}`}
                  />
                  {touched.email && errors.email && (
                    <p id="email-error" className="mt-1.5 text-xs text-coral">
                      {errors.email}
                    </p>
                  )}
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="mb-2 block text-sm text-ivory">
                  Subject
                </label>
                <input
                  id="subject"
                  name="subject"
                  type="text"
                  value={values.subject}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  aria-invalid={Boolean(errors.subject && touched.subject)}
                  aria-describedby="subject-error"
                  placeholder="New product website"
                  className={`${fieldBase} ${fieldState("subject")}`}
                />
                {touched.subject && errors.subject && (
                  <p id="subject-error" className="mt-1.5 text-xs text-coral">
                    {errors.subject}
                  </p>
                )}
              </div>

              <div>
                <label htmlFor="message" className="mb-2 block text-sm text-ivory">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={values.message}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  aria-invalid={Boolean(errors.message && touched.message)}
                  aria-describedby="message-error"
                  placeholder="A little about the project, timeline, and budget."
                  className={`${fieldBase} ${fieldState("message")} resize-none`}
                />
                {touched.message && errors.message && (
                  <p id="message-error" className="mt-1.5 text-xs text-coral">
                    {errors.message}
                  </p>
                )}
              </div>

              <Button type="submit" variant="primary">
                Send message
              </Button>
            </form>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="space-y-8 border-t border-line pt-8 lg:border-l lg:border-t-0 lg:pl-10 lg:pt-0">
              <div className="flex gap-3">
                <Mail size={20} className="mt-0.5 text-lime" aria-hidden="true" />
                <div>
                  <p className="text-sm text-ivory">Email</p>
                  <p className="mt-1 text-sm text-mist">hello@novastudio.co</p>
                </div>
              </div>
              <div className="flex gap-3">
                <Phone size={20} className="mt-0.5 text-lime" aria-hidden="true" />
                <div>
                  <p className="text-sm text-ivory">Phone</p>
                  <p className="mt-1 text-sm text-mist">+1 (415) 555-0148</p>
                </div>
              </div>
              <div className="flex gap-3">
                <MapPin size={20} className="mt-0.5 text-lime" aria-hidden="true" />
                <div>
                  <p className="text-sm text-ivory">Studio</p>
                  <p className="mt-1 text-sm text-mist">Portland, Oregon — by appointment</p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}

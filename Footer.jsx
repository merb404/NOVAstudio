import { Link } from "react-router-dom";
import { navLinks } from "../../data/nav";

const socials = [
  { label: "Instagram", href: "https://instagram.com" },
  { label: "LinkedIn", href: "https://linkedin.com" },
  { label: "Dribbble", href: "https://dribbble.com" },
];

export default function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto max-w-content px-6 py-16">
        <div className="grid gap-12 md:grid-cols-[2fr_1fr_1fr]">
          <div>
            <span className="font-display text-2xl text-ivory">Nova</span>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-mist">
              A small digital product and creative studio, designing and
              building considered websites, apps, and brand systems.
            </p>
          </div>

          <div>
            <h3 className="text-sm text-ivory">Site</h3>
            <ul className="mt-4 space-y-3">
              {navLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-sm text-mist transition-colors hover:text-ivory"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm text-ivory">Connect</h3>
            <ul className="mt-4 space-y-3">
              <li className="text-sm text-mist">hello@novastudio.co</li>
              <li className="text-sm text-mist">+1 (415) 555-0148</li>
              {socials.map((s) => (
                <li key={s.label}>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noreferrer"
                    className="text-sm text-mist transition-colors hover:text-ivory"
                  >
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-3 border-t border-line pt-6 text-xs text-mist sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Nova Studio. All rights reserved.</p>
          <p>Designed and built as a front-end internship submission.</p>
        </div>
      </div>
    </footer>
  );
}

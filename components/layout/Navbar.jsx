import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { navLinks } from "../../data/nav";
import Button from "../common/Button";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll while the mobile menu is open.
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const linkClass = ({ isActive }) =>
    `relative py-1 text-sm transition-colors duration-200 ${
      isActive ? "text-ivory" : "text-mist hover:text-ivory"
    }`;

  return (
    <header
      className={`sticky top-0 z-50 transition-colors duration-300 ${
        scrolled ? "bg-ink/90 backdrop-blur border-b border-line" : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-content items-center justify-between px-6 py-5">
        <NavLink to="/" className="flex items-center gap-2" onClick={() => setOpen(false)}>
          <span className="font-display text-xl tracking-tight text-ivory">Nova</span>
        </NavLink>

        <ul className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <li key={link.path}>
              <NavLink to={link.path} end={link.path === "/"} className={linkClass}>
                {({ isActive }) => (
                  <span className="relative">
                    {link.label}
                    {isActive && (
                      <motion.span
                        layoutId="nav-underline"
                        className="absolute -bottom-1.5 left-0 h-[2px] w-full bg-lime"
                        transition={{ type: "spring", stiffness: 500, damping: 35 }}
                      />
                    )}
                  </span>
                )}
              </NavLink>
            </li>
          ))}
        </ul>

        <div className="hidden md:block">
          <Button to="/contact" variant="primary">
            Start a project
          </Button>
        </div>

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="text-ivory md:hidden"
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden border-t border-line bg-ink md:hidden"
          >
            <ul className="flex flex-col gap-1 px-6 py-6">
              {navLinks.map((link, i) => (
                <motion.li
                  key={link.path}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 * i, duration: 0.3 }}
                >
                  <NavLink
                    to={link.path}
                    end={link.path === "/"}
                    onClick={() => setOpen(false)}
                    className={({ isActive }) =>
                      `block py-3 text-lg font-display ${
                        isActive ? "text-lime" : "text-ivory"
                      }`
                    }
                  >
                    {link.label}
                  </NavLink>
                </motion.li>
              ))}
              <li className="pt-4">
                <Button to="/contact" onClick={() => setOpen(false)} variant="primary">
                  Start a project
                </Button>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

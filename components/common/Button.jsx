import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

/**
 * Shared button/link with consistent hover + tap motion states.
 * variant: "primary" | "ghost"
 */
export default function Button({
  to,
  href,
  onClick,
  type = "button",
  variant = "primary",
  showIcon = true,
  children,
  className = "",
}) {
  const base =
    "inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium transition-colors duration-200";
  const styles =
    variant === "primary"
      ? "bg-lime text-ink hover:bg-ivory"
      : "border border-line text-ivory hover:border-ivory";

  const content = (
    <motion.span
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.96 }}
      transition={{ type: "spring", stiffness: 400, damping: 20 }}
      className={`${base} ${styles} ${className}`}
    >
      {children}
      {showIcon && <ArrowUpRight size={16} aria-hidden="true" />}
    </motion.span>
  );

  if (to) {
    return (
      <Link to={to} className="inline-block">
        {content}
      </Link>
    );
  }
  if (href) {
    return (
      <a href={href} className="inline-block" target="_blank" rel="noreferrer">
        {content}
      </a>
    );
  }
  return (
    <button type={type} onClick={onClick} className="inline-block">
      {content}
    </button>
  );
}

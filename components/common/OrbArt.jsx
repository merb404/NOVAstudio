import { motion } from "framer-motion";

/**
 * Abstract generative artwork used in place of stock photography —
 * keeps the project fully self-contained while giving each project
 * card a distinct identity via its palette.
 */
export default function OrbArt({ palette = ["#CFFF5C", "#0F1320"], className = "" }) {
  const [accent, base] = palette;
  return (
    <svg
      viewBox="0 0 400 300"
      className={className}
      preserveAspectRatio="xMidYMid slice"
      role="img"
      aria-label="Abstract artwork"
    >
      <rect width="400" height="300" fill={base} />
      <motion.circle
        cx="120"
        cy="150"
        r="90"
        fill={accent}
        opacity="0.9"
        initial={{ scale: 0.85 }}
        whileHover={{ scale: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      />
      <circle cx="280" cy="90" r="40" fill={base} stroke={accent} strokeWidth="1.5" opacity="0.6" />
      <line x1="0" y1="230" x2="400" y2="230" stroke={accent} strokeOpacity="0.25" strokeWidth="1" />
      <line x1="0" y1="230" x2="400" y2="90" stroke={accent} strokeOpacity="0.15" strokeWidth="1" />
    </svg>
  );
}

import * as Icons from "lucide-react";

/**
 * Resolves a Lucide icon by its string name (as stored in data files),
 * so service/data objects can stay plain data instead of importing components.
 */
export default function Icon({ name, size = 22, className = "" }) {
  const Cmp = Icons[name] || Icons.Circle;
  return <Cmp size={size} className={className} aria-hidden="true" />;
}

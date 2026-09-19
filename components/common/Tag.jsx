export default function Tag({ children, className = "" }) {
  return (
    <span
      className={`inline-block rounded-full border border-line px-3 py-1 text-xs text-mist ${className}`}
    >
      {children}
    </span>
  );
}

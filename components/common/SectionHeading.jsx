import Reveal from "./Reveal";

export default function SectionHeading({ kicker, title, description, align = "left" }) {
  const alignment = align === "center" ? "text-center mx-auto" : "text-left";
  return (
    <Reveal className={`max-w-2xl ${alignment}`}>
      {kicker && (
        <p className="text-sm text-mist mb-3">{kicker}</p>
      )}
      <h2 className="font-display text-3xl sm:text-4xl leading-tight text-ivory">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-mist leading-relaxed">{description}</p>
      )}
    </Reveal>
  );
}

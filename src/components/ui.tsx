import { motion, useReducedMotion } from "framer-motion";
import type { CSSProperties, ReactNode } from "react";

/* ────────────────────────────────────────────────────────────────
   MONOGRAM — drawn as real vector paths.
   A double-hairline foil ring with mirrored laurel sprigs and a
   DN ligature cut for foil-stamping. Reads at 16px and works in a
   single colour via `mono`.
   ──────────────────────────────────────────────────────────────── */
export function Monogram({
  className = "",
  gradientId = "mg-foil",
  mono = false,
  title = "DJ Nitish Events monogram",
}: {
  className?: string;
  gradientId?: string;
  mono?: boolean;
  title?: string;
}) {
  const paint = mono ? "currentColor" : `url(#${gradientId})`;

  return (
    <svg
      viewBox="0 0 200 200"
      className={className}
      role="img"
      aria-label={title}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id={gradientId} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#8C6A2E" />
          <stop offset="26%" stopColor="#C6A15B" />
          <stop offset="46%" stopColor="#F2E0B8" />
          <stop offset="66%" stopColor="#C6A15B" />
          <stop offset="100%" stopColor="#8C6A2E" />
        </linearGradient>

        {/* laurel leaf */}
        <path
          id={`${gradientId}-leaf`}
          d="M0 0 C3.2 -5.2 9.4 -7.6 13.6 -5.4 C10.2 -0.2 4.2 2.8 0 0 Z"
          fill={paint}
        />

        {/* one laurel sprig: curved stem + five leaves */}
        <g id={`${gradientId}-sprig`}>
          <path d="M30 54 C19 71 17.5 129 30 146" stroke={paint} strokeWidth="1.4" strokeLinecap="round" />
          <use href={`#${gradientId}-leaf`} transform="translate(29 62) rotate(-26)" />
          <use href={`#${gradientId}-leaf`} transform="translate(23 80) rotate(-8)" />
          <use href={`#${gradientId}-leaf`} transform="translate(20 100) rotate(2)" />
          <use href={`#${gradientId}-leaf`} transform="translate(21 120) rotate(14)" />
          <use href={`#${gradientId}-leaf`} transform="translate(27 138) rotate(30)" />
        </g>
      </defs>

      {/* double hairline ring */}
      <circle cx="100" cy="100" r="95" stroke={paint} strokeWidth="1.6" />
      <circle cx="100" cy="100" r="88" stroke={paint} strokeWidth="0.7" opacity="0.75" />

      {/* laurel, mirrored across the vertical axis */}
      <use href={`#${gradientId}-sprig`} />
      <use href={`#${gradientId}-sprig`} transform="translate(200 0) scale(-1 1)" />

      {/* foil diamonds at the compass points */}
      <path d="M100 8 L104.6 15.5 L100 23 L95.4 15.5 Z" fill={paint} />
      <path d="M100 177 L104.6 184.5 L100 192 L95.4 184.5 Z" fill={paint} />

      {/* DN ligature */}
      <g stroke={paint} strokeWidth="5.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M59 68 L59 132" />
        <path d="M59 68 L78 68 C97 68 106 81 106 100 C106 119 97 132 78 132 L59 132" />
        <path d="M112 132 L112 68 L145 132 L145 68" />
      </g>
    </svg>
  );
}

/* ── Scroll reveal: foil catching the light, then settling ───────── */
export function Reveal({
  children,
  delay = 0,
  y = 26,
  className = "",
  style,
}: {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
  style?: CSSProperties;
}) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className={className}
      style={style}
      initial={reduce ? undefined : { opacity: 0, y }}
      whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.95, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
}

/* ── A hairline that draws itself left to right ─────────────────── */
export function DrawRule({
  className = "",
  tone = "gold",
}: {
  className?: string;
  tone?: "gold" | "light" | "ink";
}) {
  const reduce = useReducedMotion();
  const bg =
    tone === "gold"
      ? "bg-gradient-to-r from-[#8C6A2E] via-[#C6A15B] to-[#C6A15B]/0"
      : tone === "light"
        ? "bg-gradient-to-r from-[#E3C88F] via-[#C6A15B] to-[#C6A15B]/0"
        : "bg-gradient-to-r from-[#12100E] via-[#4A4238] to-[#4A4238]/0";
  return (
    <motion.div
      className={`h-px w-full origin-left ${bg} ${className}`}
      initial={reduce ? undefined : { scaleX: 0 }}
      whileInView={reduce ? undefined : { scaleX: 1 }}
      viewport={{ once: true, amount: 0.6 }}
      transition={{ duration: 1.15, ease: [0.16, 1, 0.3, 1] }}
    />
  );
}

/* ── Letterpress section label: rule + index + tracked small caps ── */
export function Label({
  index,
  children,
  tone = "gold",
  className = "",
}: {
  index?: string;
  children: ReactNode;
  tone?: "gold" | "light";
  className?: string;
}) {
  const isLight = tone === "light";
  return (
    <div className={`flex items-center gap-4 ${className}`}>
      {index ? (
        <span className={`num text-[0.66rem] font-medium ${isLight ? "text-[#E3C88F]" : "text-[#8C6A2E]"}`}>
          {index}
        </span>
      ) : null}
      <span className="h-px w-10 bg-[#C6A15B]" />
      <span className={`label ${isLight ? "text-[#E3C88F]" : "text-[#8C6A2E]"}`}>{children}</span>
    </div>
  );
}

/* ── Photographic plate (a tipped-in print) ───────────────────────
   `fill` absolutely positions the plate inside a `relative` parent,
   so it never collides with the default `relative` positioning.      */
export function Plate({
  src,
  alt,
  className = "",
  position = "center",
  scrim,
  children,
  border = true,
  fill = false,
}: {
  src: string;
  alt: string;
  className?: string;
  position?: string;
  scrim?: string;
  children?: ReactNode;
  border?: boolean;
  fill?: boolean;
}) {
  return (
    <figure
      className={`${fill ? "absolute inset-0" : "relative"} overflow-hidden bg-[#0E1B2E] ${
        border ? "ring-1 ring-[#C6A15B]/35" : ""
      } ${className}`}
    >
      <img
        src={src}
        alt={alt}
        loading="lazy"
        className="h-full w-full object-cover"
        style={{ objectPosition: position }}
      />
      {scrim ? <div className={`absolute inset-0 ${scrim}`} aria-hidden="true" /> : null}
      {children}
    </figure>
  );
}

/* ── Small gold caption tab used on gallery plates ──────────────── */
export function CaptionTab({ children }: { children: ReactNode }) {
  return (
    <figcaption className="absolute bottom-0 left-0 z-10 flex items-center gap-2.5 bg-[#F7F2E9]/95 px-3.5 py-2">
      <span className="h-px w-4 bg-[#C6A15B]" />
      <span className="label-sm text-[#4A4238]">{children}</span>
    </figcaption>
  );
}

/* ── Icon set (drawn, not emoji) ────────────────────────────────── */
export function Icon({
  name,
  className = "h-4 w-4",
}: {
  name: "phone" | "whatsapp" | "mail" | "social" | "arrow" | "pin";
  className?: string;
}) {
  const common = {
    className,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.4,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true,
  };
  switch (name) {
    case "phone":
      return (
        <svg {...common}>
          <path d="M6.6 3.5h3l1.2 4-2 1.4a12.5 12.5 0 0 0 6.3 6.3l1.4-2 4 1.2v3a2 2 0 0 1-2.2 2A17.6 17.6 0 0 1 4.6 5.7a2 2 0 0 1 2-2.2Z" />
        </svg>
      );
    case "whatsapp":
      return (
        <svg {...common}>
          <path d="M3.6 20.4 5 16.6A8.4 8.4 0 1 1 8 19.3l-4.4 1.1Z" />
          <path d="M9 8.4c.3-.6.6-.6.9-.6h.7c.2 0 .5 0 .7.6l.8 1.9c.1.3 0 .5-.1.7l-.5.6c-.2.2-.2.4-.1.6a7 7 0 0 0 3.2 2.8c.3.1.5.1.7-.1l.6-.7c.2-.2.4-.2.6-.1l1.8.9c.3.1.4.3.4.5a2 2 0 0 1-1.4 1.7c-.6.2-1.6.2-3.4-.6a11 11 0 0 1-5-5c-.7-1.5-.8-2.6-.5-3.3Z" />
        </svg>
      );
    case "mail":
      return (
        <svg {...common}>
          <rect x="2.8" y="5.2" width="18.4" height="13.6" rx="1.2" />
          <path d="M3.4 6.4 12 12.6l8.6-6.2" />
        </svg>
      );
    case "social":
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="8.6" />
          <circle cx="12" cy="12" r="3.6" />
          <circle cx="17.2" cy="6.8" r="1" fill="currentColor" stroke="none" />
        </svg>
      );
    case "pin":
      return (
        <svg {...common}>
          <path d="M12 21s6.6-6.1 6.6-11a6.6 6.6 0 1 0-13.2 0C5.4 14.9 12 21 12 21Z" />
          <circle cx="12" cy="10" r="2.4" />
        </svg>
      );
    case "arrow":
    default:
      return (
        <svg {...common}>
          <path d="M4 12h15.5" />
          <path d="M13.6 6.2 19.8 12l-6.2 5.8" />
        </svg>
      );
  }
}

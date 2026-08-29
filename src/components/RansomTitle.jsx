import { motion } from "framer-motion";

export const LETTERS = [
  { c:"L", font:"'Alfa Slab One', serif", bg:"var(--marker)",     fg:"var(--ink)",  rot:-5 },
  { c:"O", font:"Bungee, sans-serif",     bg:"var(--tape-pink)",  fg:"var(--ink)",  rot: 3 },
  { c:"N", font:"Archivo, sans-serif",    bg:"var(--tape-blue)",  fg:"var(--ink)",  rot:-2, w:900 },
  { c:"D", font:"'Alfa Slab One', serif", bg:"var(--accent)",     fg:"var(--page)", rot: 4 },
  { c:"O", font:"Bungee, sans-serif",     bg:"var(--marker)",     fg:"var(--ink)",  rot:-3 },
  { c:"N", font:"Archivo, sans-serif",    bg:"var(--tape-pink)",  fg:"var(--ink)",  rot: 2, w:900 },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.3, delayChildren: 0.12 } },
};

const letter = {
  hidden: { opacity: 0, y: -46, rotate: -25, scale: 0.82 },
  show: (rot) => ({
    opacity: 1, y: 0, rotate: rot, scale: 1,
    transition: { type: "spring", stiffness: 250, damping: 15 },
  }),
};

export default function RansomTitle({ size = "var(--t-cover)", animate = true, onDone }) {
  return (
    <motion.span
      className="ransom" aria-label="London" role="img"
      variants={container}
      initial={animate ? "hidden" : false}
      animate="show"
      style={{ fontSize: size }}
    >
      {LETTERS.map((l, i) => (
        <motion.span
          key={i} 
          custom={l.rot} 
          variants={letter}
          onAnimationComplete={i === LETTERS.length - 1 ? onDone : undefined} 
          aria-hidden="true"
          style={{ fontFamily: l.font, fontWeight: l.w, background: l.bg, color: l.fg }}
        >{l.c}</motion.span>
      ))}
    </motion.span>
  );
}
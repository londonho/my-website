import { motion } from "framer-motion";

export const LETTERS = [
  { c:"L", cls:"isometric",  rot:-5 },
  { c:"O", cls:"blank",  rot: 10 },
  { c:"N", cls:"gingham",  rot:-2 },
  { c:"D", cls:"block", rot: 4 },
  { c:"O", cls:"stripe",  rot:-3 },
  { c:"N", cls:"dots",  rot: 2 },
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
          className={l.cls}
        >
          <span className="glyph">{l.c}</span>
        </motion.span>
      ))}
    </motion.span>
  );
}
import { useState, useRef } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import RansomTitle from "./RansomTitle";

const cover = {
    away: {rotateY: -85, opacity: 0},
    closed: {rotateY: 0, opacity: 1, transition: { duration: 0.6, ease: [0.65, 0.05, 0.36, 1] } },

  }

export default function Intro({ onOpen, targetRef, returning = false }) {
  const reduce = useReducedMotion();
  const [ready, setReady] = useState(reduce);

  const titleRef = useRef(null);
  const [flight, setFlight] = useState(null);

  const launch = () => {
    if (flight) return;
    const from = titleRef.current?.getBoundingClientRect();
    const to = targetRef?.current?.getBoundingClientRect();
    if (!from || !to || !to.width || reduce) { onOpen(); return; }
    setFlight({
      x: to.left - from.left,
      y: to.top - from.top,
      scale: to.width / from.width,
    });
  };

  return (
    <motion.div
      className="intro"
      variants={cover}
      initial={returning ? "away" : false}
      animate="closed"
    >
      <motion.div
        className="intro-veil"
        animate={{ opacity: flight ? 0 : 1 }}
        transition={{ duration: 0.45 }}
        onClick={ready && !flight ? launch : undefined}
        style={{ cursor: ready ? "pointer" : "default" }}
      >
        <AnimatePresence>
            {ready && !flight && (
                <motion.button
                  key="open"
                  className="intro-open"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.45, ease: "easeOut"}}
                  onClick={(e) => { e.stopPropagation(); launch(); }}
                  
                >
                    open the notebook
                </motion.button>
            )}
        </AnimatePresence>
    </motion.div>
    <motion.div
      ref={titleRef}
      className="intro-title"
      style={{ transformOrigin: "top left" }}
      animate={flight ? { x: flight.x, y: flight.y, scale: flight.scale } : {}}
      transition={{ duration: 0.8, ease: [0.65, 0.05, 0.36, 1] }}
      onAnimationComplete={() => { if (flight) onOpen(); }}
    >
      <RansomTitle animate={!reduce} onDone={() => setReady(true)} />
    </motion.div>
  </motion.div>
  );
}
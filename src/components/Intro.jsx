import { useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import RansomTitle from "./RansomTitle";

export default function Intro({ onOpen }) {
  const reduce = useReducedMotion();
  const [ready, setReady] = useState(reduce);

  return (
    <motion.div
      className="intro"
      exit={{ opacity: 0, scale: 1.06, transition: { duration: 0.5, ease: "easeIn" } }}
      onClick={ready ? onOpen : undefined}
      style={{ cursor: ready ? "pointer" : "default" }}
    >
        <RansomTitle animate={!reduce} onDone={() => setReady(true)} />
        <AnimatePresence>
            {ready && (
                <motion.button
                key="open"
                className="intro-open"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, ease: "easeOut"}}
                onClick={onOpen}
                >
                    open the notebook
                </motion.button>
            )}
        </AnimatePresence>
    </motion.div>
  );
}
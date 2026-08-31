import { useRef, useEffect } from "react";
import { Routes, Route, useLocation, NavLink, useNavigate } from "react-router-dom";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import About from "../pages/About"
import Work from "../pages/Work";
import Contact from "../pages/Contact";
import { useNarrow } from "../lib/useNarrow";
import { useFitScale } from "../lib/useFitScale"; 
import RansomTitle from "../components/RansomTitle";

const ORDER = ["/", "/work", "/contact"];

const EASE = [0.65, 0.05, 0.36, 1];

const spread = {
  enter: (dir) => ({
    rotateY: dir > 0 ? 88 : -88,
    opacity: 0,
    transformOrigin: dir > 0 ? "left center" : "right center",
  }),
  center: {
    rotateY: 0, opacity: 1,
    transition: { duration: 0.62, ease: EASE },
  },
  exit: (dir) => ({
    rotateY: dir > 0 ? -88: 88,
    opacity: 0,
    transformOrigin: dir > 0 ? "left center" : "right center",
    transition: { duration: 0.42, ease: EASE },
  }),
};

const slide = {
  enter: (d) => ({ x: d > 0 ? 40 : -40, opacity: 0 }),
  center: { x: 0, opacity: 1, transition: { duration: .3, ease: EASE } },
  exit: (d) => ({ x: d > 0 ? -40 : 40, opacity: 0, transition: { duration: .22 } }),
};

const PEEK = { "/": "var(--tape-pink)", "/work": "var(--marker)", "/contact": "var(--tape-blue)" };

export default function Notebook({ onClose, logoRef, logoHidden }) {
  const location = useLocation();
  const navigate = useNavigate();
  const reduce = useReducedMotion();
  const narrow = useNarrow();
  const fit = useFitScale();
  const variants = reduce ? undefined : (narrow ? slide : spread)
  const index = Math.max(0, ORDER.indexOf(location.pathname));
  const next = ORDER[(index + 1) % ORDER.length];
  const prev = useRef(index);
  const dir = index >= prev.current ? 1 : -1;
  
  useEffect(() => { prev.current = index; }, [index])
  return (
    <div className="notebook" style={{ zoom: fit }}>
      <header className="notebook-bar">
        <button
          className="logo-close"
          data-hidden={logoHidden}
          onClick={onClose}
          aria-label="Close the notebook and return to the cover"
        >
          <span className="logo-mark" ref={logoRef}>
            <RansomTitle size="1.5rem" animate={false} />
          </span>
        </button>
        <nav className="tabs">
        <NavLink to="/">About</NavLink>
        <NavLink to="/work">Work</NavLink>
        <NavLink to="/contact">Contact</NavLink>
        </nav>
      </header>
      <div className="stage">
        <AnimatePresence mode="wait" custom={dir} initial={false}>
          <motion.main
            key={location.pathname}
            className="spread page"
            custom={dir}
            variants={variants}
            initial="enter" animate="center" exit="exit"
          >
            <Routes location={location}>
              <Route path="/" element={<About />} />
              <Route path="/work" element={<Work />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
            <button
              className="peel"
              style={{ "--peek": PEEK[next] ?? "var(--accent)" }}
              onClick={() => navigate(next)}
              aria-label="Turn to the next page"
            />
          </motion.main>
        </AnimatePresence>
      </div>
    </div>
  );
}
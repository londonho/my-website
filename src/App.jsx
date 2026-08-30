import { useNavigate } from "react-router-dom";
import { useState, useCallback, useRef } from "react";
import { AnimatePresence } from "framer-motion";
import Intro from "./components/Intro";
import Notebook from "./layout/Notebook";

const seen = () => {
  try { return sessionStorage.getItem("coverOpened") === "1"; }
  catch { return false; }
};

export default function App() {
  const [showCover, setShowCover] = useState(() => {
    const h = window.location.hash;
    if (h && h !== "#/" && h !== "#") return false;
    return !seen();
  });

  const [returning, setReturning] = useState(false);
  const navigate = useNavigate();

  const open = useCallback(() => {
    try { sessionStorage.setItem("coverOpened", "1"); } catch {}
    setShowCover(false);
  }, []);

  const close = useCallback(() => {
    try { sessionStorage.removeItem("coverOpened"); } catch {}
    navigate("/");
    setReturning(true);
    setShowCover(true);
  }, [navigate])

  const logoRef = useRef(null);

  return (
    <>
      <div className="cover-stage">
        <AnimatePresence>{showCover && <Intro key="intro" onOpen={open} returning={returning} targetRef={logoRef} />}</AnimatePresence>
      </div>
      <div inert={showCover || undefined}>
        <Notebook onClose={close} logoRef={logoRef} logoHidden={showCover} />
      </div>
    </>
  );
}


import { useState, useCallback } from "react";
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

  const open = useCallback(() => {
    try { sessionStorage.setItem("coverOpened", "1"); } catch {}
    setShowCover(false);
  }, []);

  return (
    <>
      <AnimatePresence>{showCover && <Intro key="intro" onOpen={open} />}</AnimatePresence>
      <Notebook />
    </>
  );
}


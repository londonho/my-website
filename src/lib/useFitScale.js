import { useEffect, useState } from "react";


export function useFitScale(designWidth = 1050) {
  const [scale, setScale] = useState(1);
  useEffect(() => {
    const fit = () => setScale(Math.min(1, window.innerWidth / designWidth));
    fit();
    window.addEventListener("resize", fit);
    return () => window.removeEventListener("resize", fit);
  }, [designWidth]);
  return scale;
}
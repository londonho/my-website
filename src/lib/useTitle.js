import { useEffect } from "react";

export function useTitle(t) {
  useEffect(() => { document.title = t; }, [t]);
}
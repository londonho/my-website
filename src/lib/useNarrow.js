import { useEffect, useState } from "react";

export function useNarrow(query = "(max-width: 720px)") {
    const [narrow, setNarrow] = useState(() => window.matchMedia(query).matches);
    useEffect(() => {
        const mq = window.matchMedia(query);
        const on = (e) => setNarrow(e.matches);
        mq.addEventListener("change", on);
        return () => mq.removeEventListener("change", on);
    }, [query]);
    return narrow;
}
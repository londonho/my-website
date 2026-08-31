import { asset } from "../lib/asset"

export const projects = [
    {
        slug: "riff",
        title: "Riff",
        blurb: "A Beli-style app for ranking songs against each other instead of rating them 1-5.",
        stack: ["React Native", "JavaScript", "Node"],
        cover: asset("photos/rifftemp.png"),
        links: { repo: "https://github.com/londonho/riff", live: null },
        tilt: "var(--tilt-a)",
    },
    {
        slug: "market-alerts",
        title: "Market Alerts",
        blurb: "Real-time price alerting over WebSockets, backed by Postgres and Redis. ",
        stack: ["Python", "FastAPI", "PostgreSQL", "Redis"],
        cover: asset("photos/markettemp.png"),
        links: { repo: "https://github.com/...", live: null },
        tilt: "var(--tilt-b)",
    },
];
import { motion, useReducedMotion } from "framer-motion";
import Tape from "../components/Tape";
import { projects } from "../data/projects";
import { experience } from "../data/experience";
import { useTitle } from "../lib/useTitle";
import Sticker from "../components/Sticker";
import { asset } from "../lib/asset";

export default function Work() {
    useTitle("Work")
    const reduce = useReducedMotion();
    return (
        <>
        <section className="experience">
            <h2 className="section-label">experience</h2>
            {experience.map((job) => (
                <article key={job.role} className="job" style={{ "--tilt": "var(--tilt-c)" }}>
                    <Tape color="blue" rotate={-3} style={{ top:-12, left: 32 }} />
                    <h3>{job.role}</h3>
                    <p className="job-meta">{job.org}, {job.team}, {job.dates}</p>
                    <ul className="job-points">
                        {job.points.map((pt) => <li key={pt}>{pt}</li>)}
                    </ul>
                    <ul className="stack">{job.tags.map((t) => <li key={t}>{t}</li>)}</ul>
                </article>
            ))}
            <Sticker src={asset("stickers/miffy.png")} size={300} rotate={10} top={210} right={5} />
        </section>
        <section>
            <h2 className="section-label">projects</h2>
            <div className="project-grid">
            {projects.map((p, i) => (
                <motion.div
                    key={p.slug}
                    initial={reduce ? false : { opacity: 0, y: 18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: .45, ease: "easeOut", delay: i * 0.08 }}
                >
                    <article className="project" style={{ "--tilt": p.tilt }}>
                        <Tape color="pink" rotate={-4} style={{ top:-12, left:"38%" }} />
                        <img src={p.cover} alt={`${p.title} screenshot`} loading="lazy" />
                        <h2>{p.title}</h2>
                        <p>{p.blurb}</p>
                        <ul className="stack">{p.stack.map(s => <li key={s}>{s}</li>)}</ul>
                        <a href={p.links.repo} target="_blank">Source</a>
                    </article>
                </motion.div>
                ))}
            </div>
        </section>
        </>
    );
}
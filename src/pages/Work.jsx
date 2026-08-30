import Tape from "../components/Tape";
import { projects } from "../data/projects";
import { experience } from "../data/experience";
import { useTitle } from "../lib/useTitle";

export default function Work() {
    useTitle("Work")
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
        </section>
        <section>
            <h2 className="section-label">projects</h2>
            <div className="project-grid">
            {projects.map((p) => (
                <article key={p.slug} className="project" style={{ "--tilt": p.tilt }}>
                    <Tape color="pink" rotate={-4} style={{ top:-12, left:"38%" }} />
                    <img src={p.cover} alt={`${p.title} screenshot`} loading="lazy" />
                    <h2>{p.title}</h2>
                    <p>{p.blurb}</p>
                    <ul className="stack">{p.stack.map(s => <li key={s}>{s}</li>)}</ul>
                    <a href={p.links.repo} target="_blank">Source</a>
                </article>
                ))}
            </div>
        </section>
        </>
    );
}
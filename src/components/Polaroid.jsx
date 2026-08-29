import Tape from "./tape";

export default function Polaroid({ src, alt, caption, tilt = "var(--tilt-a)" }) {
    return (
        <figure className="polaroid" style={{ transform: 'rotate(${tilt})' }}>
            <Tape color="blue" rotate={-6} style={{ top: -12, left: 24 }} />
            <img src={src} alt={alt} loading="lazy" />
            <figcaption>{caption}</figcaption>
        </figure>
    );
}
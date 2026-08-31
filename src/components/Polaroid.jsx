import Tape from "./Tape";

export default function Polaroid({
    src, 
    alt, 
    caption, 
    tilt = "var(--tilt-a)", 
    focus = "50% 50%",
    ratio = "4/5",
    tape = "blue",
    tapeRotate = -6,
    tapePos = { top: -12, left: 24 },
    children,
    }) {
    return (
        <figure className="polaroid" style={{ "--tilt": tilt, "--ratio": ratio }}>
            <Tape color={tape} rotate={tapeRotate} style={tapePos} />
            <img src={src} alt={alt} loading="lazy" style={{ objectPosition: focus }} />
            <figcaption>{caption}</figcaption>
            {children}
        </figure>
    );
}
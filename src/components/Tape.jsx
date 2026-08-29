export default function Tape({ color = "pink", rotate = -2, style }) {
    const palette = { pink: "var(--tape-pink)", blue: "var(--tape-blue)", green: "var(--accent-pale)" };
    return (
        <span
        aria-hidden="true"
        className="tape"
        style={{ background: palette[color], transform: 'rotate(${rotate}deg)', ...style }}
        />
    );
}
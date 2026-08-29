export default function Sticker({ src, alt = "", top, left, right, size = 80, rotate = 0 }) {
  return (
    <img
      src={src} alt={alt} aria-hidden={alt === "" || undefined}
      className="sticker" loading="lazy"
      style={{ top, left, right, width: size, transform: `rotate(${rotate}deg)` }}
    />
  );
}
export default function StickyNote({ title, items, color = "var(--marker)", tilt = "var(--tilt-c)" }) {
  return (
    <div className="sticky" style={{ background: color, transform: `rotate(${tilt})` }}>
      <h3>{title}</h3>
      <ul>{items.map((t) => <li key={t}>{t}</li>)}</ul>
    </div>
  );
}
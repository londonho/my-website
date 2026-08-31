export default function StickyNote({ 
  title, 
  items = [], 
  color = "var(--marker)", 
  tilt = "var(--tilt-c)",
  dx = "0px",
  dy = "0px",
  layer = 1 ,
  children,
}) {
  return (
    <div className="sticky-lift" style={{ "--tilt": tilt, "--dx": dx, "--dy":dy, "--layer": layer }}>
      <div className="sticky" style={{ background: color }}>
        <h3>{title}</h3>
        <ul>{items.map((t) => <li key={t}>{t}</li>)}</ul>
      </div>
      {children}
    </div>
  );
}
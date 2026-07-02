export default function BadgeList({ items }: { items: string[] }) {
  return (
    <div className="badge-grid">
      {items.map((item) => (
        <span className="badge" key={item}>{item}</span>
      ))}
    </div>
  );
}
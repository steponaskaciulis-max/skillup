export default function Tile({ title, description, onClick }) {
  return (
    <div className="tile-card" onClick={onClick}>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

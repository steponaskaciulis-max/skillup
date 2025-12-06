// SkillUp/components/Tile.js
import React from "react";

export default function Tile({ title, description, onClick }) {
  return (
    <div className="tile-card" onClick={onClick}>
      <h3>{title}</h3>
      {description && <p>{description}</p>}
    </div>
  );
}

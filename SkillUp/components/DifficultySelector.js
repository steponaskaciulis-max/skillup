// SkillUp/components/DifficultySelector.js
import React from "react";

// Use labels that line up with your PracticePage diffMap
const DIFFICULTIES = ["Beginner", "Intermediate", "Advanced", "Mixed"];

export default function DifficultySelector({ selectedDifficulty, onChange }) {
  const current = selectedDifficulty || "Mixed";

  const containerStyle = {
    display: "flex",
    flexDirection: "column",
    gap: "0.5rem",
    marginBottom: "1.5rem",
  };

  const headerStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  };

  const labelStyle = {
    fontSize: "0.75rem",
    letterSpacing: "0.12em",
    textTransform: "uppercase",
    fontWeight: 600,
    color: "#9ca3af",
  };

  const chipStyle = {
    fontSize: "0.75rem",
    padding: "0.25rem 0.7rem",
    borderRadius: "999px",
    border: "1px solid rgba(148,163,184,0.5)",
    background: "#020617",
    color: "#e5e7eb",
  };

  const rowStyle = {
    display: "flex",
    gap: "0.5rem",
    padding: "0.35rem",
    borderRadius: "999px",
    background: "#020617",
    border: "1px solid rgba(148,163,184,0.35)",
  };

  const pillBase = {
    flex: 1,
    border: "none",
    outline: "none",
    cursor: "pointer",
    borderRadius: "999px",
    padding: "0.55rem 0.75rem",
    background: "transparent",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    transition: "background 0.18s ease-out, box-shadow 0.18s ease-out, transform 0.12s ease-out",
  };

  const labelPillBase = {
    fontSize: "0.8rem",
    fontWeight: 500,
    letterSpacing: "0.08em",
    textTransform: "uppercase",
    color: "#9ca3af",
  };

  return (
    <div className="difficulty-selector" style={containerStyle}>
      <div className="difficulty-header" style={headerStyle}>
        <span className="label" style={labelStyle}>
          Difficulty
        </span>
        <span className="chip" style={chipStyle}>
          {current}
        </span>
      </div>

      <div className="pill-row" style={rowStyle}>
        {DIFFICULTIES.map((difficulty) => {
          const isActive = difficulty === current;

          const pillStyle = {
            ...pillBase,
            background: isActive ? "#1d4ed8" : "transparent",
            boxShadow: isActive
              ? "0 10px 24px rgba(37,99,235,0.45)"
              : "0 0 0 rgba(0,0,0,0)",
            transform: isActive ? "translateY(-1px)" : "none",
          };

          const pillLabelStyle = {
            ...labelPillBase,
            color: isActive ? "#f9fafb" : "#9ca3af",
          };

          return (
            <button
              key={difficulty}
              type="button"
              className={`pill ${isActive ? "active" : ""}`}
              style={pillStyle}
              onClick={() => onChange && onChange(difficulty)}
              aria-pressed={isActive}
            >
              <span className="pill-label" style={pillLabelStyle}>
                {difficulty}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}

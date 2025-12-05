// SkillUp/components/DifficultySelector.js
import React from "react";

const DIFFICULTIES = ["Easy", "Medium", "Hard"];

const DifficultySelector = ({ selectedDifficulty, onChange }) => {
  const current = selectedDifficulty || "Medium";

  return (
    <div className="difficulty-selector">
      <div className="difficulty-header">
        <span className="label">Difficulty</span>
        <span className="chip">{current}</span>
      </div>

      <div className="pill-row">
        {DIFFICULTIES.map((difficulty) => {
          const isActive = difficulty === current;

          return (
            <button
              key={difficulty}
              type="button"
              className={`pill ${isActive ? "active" : ""}`}
              onClick={() => onChange(difficulty)}
              aria-pressed={isActive}
            >
              <span className="pill-label">{difficulty}</span>
            </button>
          );
        })}
      </div>

      <style jsx>{`
        .difficulty-selector {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
          margin-bottom: 1.5rem;
        }

        .difficulty-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .label {
          font-size: 0.75rem;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          font-weight: 600;
          color: #9ca3af;
        }

        .chip {
          font-size: 0.75rem;
          padding: 0.

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
          padding: 0.25rem 0.7rem;
          border-radius: 999px;
          border: 1px solid rgba(148, 163, 184, 0.5);
          background: radial-gradient(circle at 0% 0%, #111827, #020617);
          color: #e5e7eb;
        }

        .pill-row {
          display: flex;
          gap: 0.5rem;
          padding: 0.35rem;
          border-radius: 999px;
          background: rgba(15, 23, 42, 0.6);
          border: 1px solid rgba(148, 163, 184, 0.35);
          backdrop-filter: blur(6px);
        }

        .pill {
          flex: 1;
          border: none;
          outline: none;
          cursor: pointer;
          border-radius: 999px;
          padding: 0.55rem 0.75rem;
          background: transparent;
          display: flex;
          align-items: center;
          justify-content: center;
          transition:
            background 0.18s ease-out,
            box-shadow 0.18s ease-out,
            transform 0.12s ease-out;
        }

        .pill-label {
          font-size: 0.8rem;
          font-weight: 500;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: #9ca3af;
        }

        .pill:hover {
          transform: translateY(-1px);
          box-shadow: 0 8px 20px rgba(15, 23, 42, 0.4);
        }

        .pill.active {
          background: radial-gradient(circle at 0% 0%, #1d4ed8, #020617);
          box-shadow: 0 10px 24px rgba(37, 99, 235, 0.45);
        }

        .pill.active .pill-label {
          color: #f9fafb;
        }

        @media (max-width: 640px) {
          .pill-label {
            font-size: 0.75rem;
          }
        }
      `}</style>
    </div>
  );
};

export default DifficultySelector;

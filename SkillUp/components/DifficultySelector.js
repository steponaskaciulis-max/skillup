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
              <span className="pill-glow" />
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
          font-size: 0.85rem;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          font-weight: 600;
          color: #a3a3a3;
        }

        .chip {
          font-size: 0.75rem;
          padding: 0.15rem 0.6rem;
          border-radius: 999px;
          border: 1px solid rgba(148, 163, 184, 0.5);
          background: radial-gradient(circle at 0% 0%, #1f2937, #020617);
          color: #e5e7eb;
        }

        .pill-row {
          display: flex;
          gap: 0.5rem;
          padding: 0.3rem;
          border-radius: 999px;
          background: radial-gradient(circle at 0% 0%, #020617, #020617);
          border: 1px solid rgba(148, 163, 184, 0.35);
        }

        .pill {
          position: relative;
          flex: 1;
          border: none;
          outline: none;
          cursor: pointer;
          border-radius: 999px;
          padding: 0.45rem 0.75rem;
          background: transparent;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          transition:
            transform 0.15s ease-out,
            box-shadow 0.15s ease-out;
        }

        .pill:hover {
          transform: translateY(-1px);
          box-shadow: 0 6px 16px rgba(15, 23, 42, 0.4);
        }

        .pill-glow {
          position: absolute;
          inset: 0;
          opacity: 0;
          background: radial-gradient(
            circle at 50% -10%,

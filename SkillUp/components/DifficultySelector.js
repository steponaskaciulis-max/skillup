// SkillUp/components/DifficultySelector.js
import React from 'react';

const DifficultySelector = ({ selectedDifficulty, onChange }) => {
  const difficulties = ['Easy', 'Medium', 'Hard'];

  return (
    <div className="difficulty-selector">
      <label htmlFor="difficulty">Difficulty:</label>
      <select
        id="difficulty"
        value={selectedDifficulty}
        onChange={(e) => onChange(e.target.value)}
      >
        {difficulties.map((difficulty) => (
          <option key={difficulty} value={difficulty}>
            {difficulty}
          </option>
        ))}
      </select>

      <style jsx>{`
        .difficulty-selector {
          margin-bottom: 1rem;
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        label {
          font-weight: 500;
        }

        select {
          padding: 0.25rem 0.5rem;
          border-radius: 4px;
          border: 1px solid #ccc;
        }
      `}</style>
    </div>
  );
};

export default DifficultySelector;

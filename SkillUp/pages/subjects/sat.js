// SkillUp/pages/subjects/sat.js
import { useState } from "react";
import Tile from "../../components/Tile";
import DifficultySelector from "../../components/DifficultySelector";

const SAT_SECTIONS = [
  {
    id: "sat-math-easy",
    title: "SAT Math – Easy",
    description: "Warm-up questions on algebra and arithmetic.",
    difficulty: "Easy",
  },
  {
    id: "sat-math-medium",
    title: "SAT Math – Medium",
    description: "Word problems, functions, and multi-step questions.",
    difficulty: "Medium",
  },
  {
    id: "sat-math-hard",
    title: "SAT Math – Hard",
    description: "Tricky multi-step questions and dense word problems.",
    difficulty: "Hard",
  },
];

export default function SATPage() {
  const [selectedDifficulty, setSelectedDifficulty] = useState("Medium");

  const visibleSections = SAT_SECTIONS.filter(
    (section) => section.difficulty === selectedDifficulty
  );

  return (
    <main className="page">
      <h1 className="title">SAT Practice</h1>
      <p className="subtitle">
        Tune the difficulty and drill SAT-style questions.
      </p>

      <DifficultySelector
        selectedDifficulty={selectedDifficulty}
        onChange={setSelectedDifficulty}
      />

      <div className="grid">
        {visibleSections.map((section) => (
          <Tile
            key={section.id}
            title={section.title}
            description={section.description}
          />
        ))}
        {visibleSections.length === 0 && (
          <p className="empty-state">
            No sections for this difficulty yet. Try another level.
          </p>
        )}
      </div>

      <style jsx>{`
        .page {
          max-width: 960px;
          margin: 0 auto;
          padding: 2rem 1.5rem 3rem;
        }

        .title {
          font-size: 2rem;
          font-weight: 700;
          margin-bottom: 0.25rem;
        }

        .subtitle {
          color: #6b7280;
          margin-bottom: 1.5rem;
        }

        .grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
          gap: 1rem;
        }

        .empty-state {
          color: #9ca3af;
          font-size: 0.9rem;
        }

        @media (max-width: 640px) {
          .page {
            padding: 1.5rem 1rem 2.5rem;
          }

          .title {
            font-size: 1.6rem;
          }
        }
      `}</style>
    </main>
  );
}

// SkillUp/pages/subjects/highschool.js
import { useState } from "react";
import Tile from "../../components/Tile";
import DifficultySelector from "../../components/DifficultySelector";

const TOPICS = [
  {
    id: "algebra-basics",
    title: "Algebra Basics",
    description: "Variables, linear equations, and inequalities.",
    difficulty: "Easy",
  },
  {
    id: "geometry-essentials",
    title: "Geometry Essentials",
    description: "Angles, triangles, circles, and area problems.",
    difficulty: "Easy",
  },
  {
    id: "precalculus",
    title: "Precalculus",
    description: "Functions, exponentials, and trigonometry for higher math.",
    difficulty: "Medium",
  },
  {
    id: "ap-prep",
    title: "AP Prep",
    description: "Challenging practice sets to prep for AP-level courses.",
    difficulty: "Hard",
  },
];

export default function HighSchoolPage() {
  const [selectedDifficulty, setSelectedDifficulty] = useState("Medium");

  const filteredTopics = TOPICS.filter(
    (topic) => topic.difficulty === selectedDifficulty
  );

  return (
    <main className="page">
      <h1 className="title">High School</h1>
      <p className="subtitle">
        Choose your difficulty and explore focused practice topics.
      </p>

      <DifficultySelector
        selectedDifficulty={selectedDifficulty}
        onChange={setSelectedDifficulty}
      />

      <div className="grid">
        {filteredTopics.map((topic) => (
          <Tile
            key={topic.id}
            title={topic.title}
            description={topic.description}
            // href or onClick if your Tile supports it
          />
        ))}
        {filteredTopics.length === 0 && (
          <p className="empty-state">
            No topics for this difficulty yet. Try another level.
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

        ))}
      </div>
    </div>
  );
}

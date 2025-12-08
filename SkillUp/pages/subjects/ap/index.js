// SkillUp/pages/subjects/ap/index.js
import { useState } from "react";
import Tile from "../../../components/Tile";
import DifficultySelector from "../../../components/DifficultySelector";
import apCourses from "../../../data/apCourses";

export default function APSubjectsPage() {
  const [selectedDifficulty, setSelectedDifficulty] = useState("Medium");

  const topics = apCourses
    .filter((course) =>
      course.difficulty ? course.difficulty === selectedDifficulty : true
    )
    .map((course) => ({
      id: course.id,
      title: course.title,
      description: course.description,
      href: `/subjects/ap/${course.id}`,
    }));

  return (
    <main className="page">
      <h1 className="title">AP Courses</h1>
      <p className="subtitle">
        Select an AP subject and difficulty to begin practice.
      </p>

      <DifficultySelector
        selectedDifficulty={selectedDifficulty}
        onChange={setSelectedDifficulty}
      />

      <div className="grid">
        {topics.map((topic) => (
          <Tile
            key={topic.id}
            title={topic.title}
            description={topic.description}
            href={topic.href}
          />
        ))}

        {topics.length === 0 && (
          <p className="empty">No AP courses for this difficulty yet.</p>
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

        .empty {
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

import Tile from "../../components/Tile";
import { DifficultySelector } from "../../components/DifficultySelector";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

export default function SATPage() {
  const router = useRouter();
  const [difficulty, setDifficulty] = useState("Mixed");

  // All SAT topics
  const topics = [
    { title: "Algebra", description: "Equations, expressions, and manipulation." },
    { title: "Functions", description: "Graphs, transformations, relationships." },
    { title: "Geometry", description: "Shapes, angles, proofs, and theorems." },
    { title: "Statistics", description: "Data interpretation, charts, probability." },
    { title: "Word Problems", description: "Real-world quantitative reasoning." },
    { title: "Reading – Main Idea", description: "Identify central claims." },
    { title: "Reading – Inference", description: "Logical deductions from text." },
    { title: "Reading – Evidence", description: "Selecting supporting lines." },
    { title: "Writing – Punctuation", description: "Comma rules, sentence clarity." },
    { title: "Writing – Transitions", description: "Logical flow between ideas." },
    { title: "Writing – Concision", description: "Eliminating redundancy." },
  ];

  // 🔥 When clicking a tile, go to practice mode with topic+difficulty
  const startPractice = (topicName) => {
    router.push({
      pathname: "/practice",
      query: { topic: topicName, difficulty },
    });
  };

  return (
    <div className="container">
      <nav className="breadcrumb">
        <Link href="/">Home</Link> &gt;{" "}
        <Link href="/subjects">Subjects</Link> &gt; SAT
      </nav>

      <div className="page-header">
        <h1>SAT Preparation</h1>
        <p>
          Choose a topic and difficulty to start focused SAT practice. The engine
          will adapt to your level while you answer questions.
        </p>
      </div>

      <h2>Difficulty</h2>
      <DifficultySelector value={difficulty} onChange={setDifficulty} />

      <h2>Topics</h2>
      <p style={{ fontSize: "0.9rem", color: "var(--muted)" }}>
        Select a topic to begin practice.
      </p>

      <div className="tile-grid">
        {topics.map((t) => (
          <Tile
            key={t.title}
            title={t.title}
            description={t.description}
            onClick={() => startPractice(t.title)}
          />
        ))}
      </div>
    </div>
  );
}

      </div>
    </div>
  );
}

import Tile from "../../components/Tile";
import { DifficultySelector } from "../../components/DifficultySelector";
import { useState } from "react";
import Link from "next/link";

export default function SATPage() {
  const [difficulty, setDifficulty] = useState("Mixed");

  const topics = [
    { title: "Algebra", description: "Equations, expressions, and manipulation." },
    { title: "Functions", description: "Graphs, transformations, and relationships." },
    { title: "Geometry", description: "Shapes, angles, and theorems." },
    { title: "Statistics", description: "Data interpretation and probability." },
    { title: "Word Problems", description: "Real-world math applications." },
    { title: "Reading: Main Idea", description: "Understanding central claims." },
    { title: "Reading: Inference", description: "Reading between the lines." },
    { title: "Reading: Evidence", description: "Choosing textual support." },
    { title: "Writing: Punctuation", description: "Comma rules and clarity." },
    { title: "Writing: Transitions", description: "Logic and flow improvement." },
    { title: "Writing: Concision", description: "Say the same with fewer words." }
  ];

  return (
    <div className="container">
      <nav className="breadcrumb">
        <Link href="/">Home</Link> &gt; <Link href="/subjects">Subjects</Link> &gt; SAT
      </nav>

      <div className="page-header">
        <h1>SAT Preparation</h1>
        <p>
          Choose a topic and difficulty to focus your SAT practice. The engine will
          adapt to your performance as you answer questions.
        </p>
      </div>

      <h2>Difficulty</h2>
      <DifficultySelector value={difficulty} onChange={setDifficulty} />

      <h2>Topics</h2>
      <p style={{ fontSize: "0.9rem", color: "var(--muted)" }}>
        Select a topic tile to start a focused practice session (logic coming next).
      </p>
      <div className="tile-grid">
        {topics.map((t) => (
          <Tile
            key={t.title}
            title={t.title}
            description={t.description}
            onClick={() => {
              // Later this will hook into the PracticeEngine with topic + difficulty.
              alert(`In a full version this would start a ${difficulty} ${t.title} session.`);
            }}
          />
        ))}
      </div>
    </div>
  );
}

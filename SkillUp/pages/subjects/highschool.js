import Tile from "../../components/Tile";
import DifficultySelector from "../../components/DifficultySelector";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

export default function HighSchoolPage() {
  const router = useRouter();
  const [difficulty, setDifficulty] = useState("Mixed");

  const topics = [
    { title: "Algebra II", description: "Equations, functions, and polynomials." },
    { title: "Geometry", description: "Shapes, angles, theorems, and proofs." },
    { title: "Pre-Calculus", description: "Trigonometry, sequences, and limits." },
    { title: "Biology", description: "Cell structure, genetics, evolution." },
    { title: "Chemistry", description: "Matter, reactions, and stoichiometry." },
    { title: "Physics", description: "Mechanics, waves, and electricity." },
    { title: "English", description: "Literature analysis and writing skills." },
    { title: "History", description: "Key events and historical thinking." },
    { title: "Economics", description: "Micro, macro, and financial literacy." },
  ];

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
        <Link href="/subjects">Subjects</Link> &gt; High School
      </nav>

      <div className="page-header">
        <h1>High School Subjects</h1>
        <p>Select a subject and difficulty to begin practicing. The engine will adapt to your performance.</p>
      </div>

      <h2>Difficulty</h2>
      <DifficultySelector value={difficulty} onChange={setDifficulty} />

      <h2>Subjects</h2>
      <p style={{ fontSize: "0.9rem", color: "var(--muted)" }}>
        Click a subject tile to start targeted practice.
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

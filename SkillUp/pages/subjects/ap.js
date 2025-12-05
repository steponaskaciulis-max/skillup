import Tile from "../../components/Tile";
import { DifficultySelector } from "../../components/DifficultySelector";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import apCourses from "../../data/apCourses";

export default function APPage() {
  const router = useRouter();
  const [difficulty, setDifficulty] = useState("Mixed");

  const topics = apCourses.map(course => ({
    title: course.title,
    description: course.description,
  }));

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
        <Link href="/subjects">Subjects</Link> &gt; AP
      </nav>

      <div className="page-header">
        <h1>AP Courses</h1>
        <p>Select an AP subject and difficulty to begin practice.</p>
      </div>

      <h2>Difficulty</h2>
      <DifficultySelector value={difficulty} onChange={setDifficulty} />

      <h2>Subjects</h2>
      <p style={{ fontSize: "0.9rem", color: "var(--muted)" }}>
        Choose an AP subject to start practice.
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

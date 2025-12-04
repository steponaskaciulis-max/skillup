import { useRouter } from "next/router";
import { useMemo, useState } from "react";
import { satQuestions } from "../data/satQuestions";

export default function PracticePage() {
  const router = useRouter();
  const { topic, difficulty } = router.query;

  const [index, setIndex] = useState(0);
  const [selected, setSelected] = useState(null);
  const [showExplanation, setShowExplanation] = useState(false);

  const diffMap = {
    Beginner: [1, 2],
    Intermediate: [2, 3],
    Advanced: [3, 4, 5],
    Mixed: [1, 2, 3, 4, 5],
  };

  const filteredQuestions = useMemo(() => {
    const diffKey = typeof difficulty === "string" ? difficulty : "Mixed";
    const allowed = diffMap[diffKey] || diffMap.Mixed;

    let qs = satQuestions.filter((q) => allowed.includes(q.difficulty));

    if (typeof topic === "string" && topic.length > 0) {
      qs = qs.filter((q) => q.topic === topic);
    }

    return qs;
  }, [topic, difficulty]);

  const current = filteredQuestions[index] || null;

  if (!topic) {
    return (
      <div>
        <div className="page-header">
          <h1>Practice</h1>
          <p>
            Start from the SAT page to pick a topic and difficulty first.
          </p>
        </div>
        <div className="simple-card">
          <p>
            Go to{" "}
            <a href="/subjects/sat" className="btn secondary">
              SAT Topics
            </a>{" "}
            and choose a tile. You&apos;ll be redirected here with a focused
            question set.
          </p>
        </div>
      </div>
    );
  }

  if (!current) {
    return (
      <div>
        <div className="page-header">
          <h1>Practice</h1>
          <p>No questions found for this combination yet.</p>
        </div>
        <div className="simple-card">
          <p>
            Topic: <strong>{topic}</strong> <br />
            Difficulty: <strong>{difficulty || "Mixed"}</strong>
          </p>
          <p>
            Try choosing a different topic or difficulty level on the{" "}
            <a href="/subjects/sat">SAT page</a>.
          </p>
        </div>
      </div>
    );
  }

  function handleChoice(choice) {
    if (showExplanation) return;
    setSelected(choice);
  }

  function handleCheck() {
    if (!selected) return;
    setShowExplanation(true);
  }

  function handleNext() {
    setSelected(null);
    setShowExplanation(false);
    setIndex((prev) =>
      prev + 1 < filteredQuestions.length ? prev + 1 : 0
    );
  }

  const isCorrect = selected === current.answer;

  return (
    <div>
      <div className="page-header">
        <h1>Practice</h1>
        <p>
          Topic: <strong>{topic}</strong> · Difficulty:{" "}
          <strong>{difficulty || "Mixed"}</strong> · Question{" "}
          {index + 1} of {filteredQuestions.length}
        </p>
      </div>

      <div className="simple-card">
        <p style={{ fontSize: "0.95rem", marginBottom: "0.7rem" }}>
          {current.section} &gt; {current.topic}
        </p>
        <p style={{ whiteSpace: "pre-line" }}>{current.question}</p>

        <div style={{ marginTop: "1rem", display: "grid", gap: "0.5rem" }}>
          {current.choices.map((c) => (
            <button
              key={c}
              type="button"
              onClick={() => handleChoice(c)}
              style={{
                textAlign: "left",
                padding: "0.6rem 0.8rem",
                borderRadius: "10px",
                border:
                  selected === c
                    ? "1px solid var(--accent)"
                    : "1px solid rgba(148, 163, 184, 0.4)",
                background:
                  selected === c ? "var(--accent-soft)" : "rgba(15,23,42,0.7)",
                color: "inherit",
                cursor: "pointer",
              }}
            >
              {c}
            </button>
          ))}
        </div>

        <div style={{ marginTop: "1rem", display: "flex", gap: "0.75rem" }}>
          <button
            type="button"
            className="btn primary"
            onClick={handleCheck}
            disabled={!selected || showExplanation}
          >
            Check answer
          </button>
          {showExplanation && (
            <button
              type="button"
              className="btn secondary"
              onClick={handleNext}
            >
              Next question
            </button>
          )}
        </div>

        {showExplanation && (
          <div
            style={{
              marginTop: "1rem",
              padding: "0.8rem 0.9rem",
              borderRadius: "10px",
              background: "rgba(15,23,42,0.9)",
              border: "1px solid rgba(148,163,184,0.5)",
              fontSize: "0.9rem",
            }}
          >
            <p>
              Your answer:{" "}
              <strong>
                {selected} {isCorrect ? "✓" : "✗"}
              </strong>
            </p>
            <p>
              Correct answer: <strong>{current.answer}</strong>
            </p>
            <p style={{ marginTop: "0.4rem" }}>{current.explanation}</p>
          </div>
        )}
      </div>
    </div>
  );
}

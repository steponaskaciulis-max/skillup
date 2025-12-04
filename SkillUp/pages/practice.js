import { useRouter } from "next/router";
import { useMemo, useState, useEffect } from "react";
import { satQuestions } from "../data/satQuestions";

export default function PracticePage() {
  const router = useRouter();
  const { topic, difficulty } = router.query;

  const [index, setIndex] = useState(0);
  const [selected, setSelected] = useState(null);
  const [showExplanation, setShowExplanation] = useState(false);

  // simple session stats
  const [total, setTotal] = useState(0);
  const [correct, setCorrect] = useState(0);
  const [streak, setStreak] = useState(0);
  const [xp, setXp] = useState(0);

  // map difficulty labels to allowed numeric difficulties
  const diffMap = {
    Beginner: [1, 2],
    Intermediate: [2, 3],
    Advanced: [3, 4, 5],
    Mixed: [1, 2, 3, 4, 5],
  };

  // recalc questions when query changes
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

  // reset session when topic/difficulty changes
  useEffect(() => {
    setIndex(0);
    setSelected(null);
    setShowExplanation(false);
    setTotal(0);
    setCorrect(0);
    setStreak(0);
    setXp(0);
  }, [topic, difficulty]);

  // ------------------ edge cases ------------------

  // if user came here directly, tell them to go via SAT page
  if (!topic) {
    return (
      <div>
        <div className="page-header">
          <h1>Practice</h1>
          <p>Start from the SAT page to pick a topic and difficulty.</p>
        </div>
        <div className="simple-card">
          <p>
            Go to{" "}
            <a href="/subjects/sat" className="btn secondary">
              SAT Topics
            </a>{" "}
            and pick a tile. You&apos;ll be redirected here with a focused
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
          <p>No questions found for this topic/difficulty yet.</p>
        </div>
        <div className="simple-card">
          <p>
            Topic: <strong>{topic}</strong> <br />
            Difficulty: <strong>{difficulty || "Mixed"}</strong>
          </p>
          <p>
            Try a different topic or difficulty on the{" "}
            <a href="/subjects/sat">SAT page</a>.
          </p>
        </div>
      </div>
    );
  }

  // ------------------ handlers ------------------

  function handleChoice(choice) {
    if (showExplanation) return;
    setSelected(choice);
  }

  function handleCheck() {
    if (!selected || showExplanation) return;

    const isCorrect = selected === current.answer;

    setShowExplanation(true);
    setTotal((t) => t + 1);

    if (isCorrect) {
      setCorrect((c) => c + 1);
      setStreak((s) => s + 1);
      // XP: base 10 + difficulty bonus + streak bonus
      setXp((prev) => prev + 10 + current.difficulty * 2 + streak * 2);
    } else {
      setStreak(0);
    }
  }

  function handleNext() {
    setSelected(null);
    setShowExplanation(false);
    setIndex((prev) =>
      prev + 1 < filteredQuestions.length ? prev + 1 : 0
    );
  }

  const isCorrect = selected === current.answer;
  const accuracy = total > 0 ? Math.round((correct / total) * 100) : 0;

  // ------------------ UI ------------------

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

      {/* session stats bar */}
      <div
        className="simple-card"
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "1rem",
          justifyContent: "space-between",
          marginBottom: "1.4rem",
        }}
      >
        <div>
          <div style={{ fontSize: "0.8rem", color: "var(--muted)" }}>
            Accuracy
          </div>
          <div style={{ fontWeight: 600 }}>{accuracy}%</div>
        </div>
        <div>
          <div style={{ fontSize: "0.8rem", color: "var(--muted)" }}>
            Correct
          </div>
          <div style={{ fontWeight: 600 }}>
            {correct}/{total || "–"}
          </div>
        </div>
        <div>
          <div style={{ fontSize: "0.8rem", color: "var(--muted)" }}>
            Streak
          </div>
          <div style={{ fontWeight: 600 }}>{streak}</div>
        </div>
        <div>
          <div style={{ fontSize: "0.8rem", color: "var(--muted)" }}>
            XP this session
          </div>
          <div style={{ fontWeight: 600 }}>{xp}</div>
        </div>
      </div>

      {/* question card */}
      <div className="simple-card">
        <p style={{ fontSize: "0.95rem", marginBottom: "0.7rem" }}>
          {current.section} &gt; {current.topic} · Difficulty{" "}
          {current.difficulty}
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

// SkillUp/pages/subjects/sat.js

import { useState, useEffect } from 'react';
import DifficultySelector from '../../components/DifficultySelector';
import satQuestions from '../../data/satQuestions';

const mapDifficulty = (difficulty, questionDifficulty) => {
  if (difficulty === 'mixed') return true;
  if (difficulty === 'easy') return questionDifficulty <= 2;
  if (difficulty === 'medium') return questionDifficulty === 3 || questionDifficulty === 4;
  if (difficulty === 'hard') return questionDifficulty >= 4;
  return true;
};

const difficultyLabel = (d) => {
  if (d <= 1) return 'Very Easy';
  if (d === 2) return 'Easy';
  if (d === 3) return 'Medium';
  if (d === 4) return 'Hard';
  return 'Very Hard';
};

const SATPracticePage = () => {
  const [difficulty, setDifficulty] = useState('mixed');
  const [sectionFilter, setSectionFilter] = useState('All');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedChoice, setSelectedChoice] = useState(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [isCorrect, setIsCorrect] = useState(null);

  const filteredQuestions = satQuestions.filter((q) => {
    const sectionMatch = sectionFilter === 'All' || q.section === sectionFilter;
    const difficultyMatch = mapDifficulty(difficulty, q.difficulty);
    return sectionMatch && difficultyMatch;
  });

  // Reset to first question whenever filters change
  useEffect(() => {
    setCurrentIndex(0);
    setSelectedChoice(null);
    setIsAnswered(false);
    setIsCorrect(null);
  }, [difficulty, sectionFilter]);

  const hasQuestions = filteredQuestions.length > 0;
  const currentQuestion = hasQuestions ? filteredQuestions[currentIndex] : null;

  const handleChoiceClick = (choice) => {
    if (!currentQuestion || isAnswered) return;

    setSelectedChoice(choice);
    setIsAnswered(true);
    setIsCorrect(choice === currentQuestion.answer);
  };

  const handleNextQuestion = () => {
    if (!hasQuestions) return;

    const nextIndex =
      currentIndex + 1 < filteredQuestions.length ? currentIndex + 1 : 0;

    setCurrentIndex(nextIndex);
    setSelectedChoice(null);
    setIsAnswered(false);
    setIsCorrect(null);
  };

  const handleRestart = () => {
    setCurrentIndex(0);
    setSelectedChoice(null);
    setIsAnswered(false);
    setIsCorrect(null);
  };

  const renderQuestionText = (text) => {
    const lines = text.split('\n');
    return lines.map((line, idx) => (
      <p
        key={idx}
        style={{ marginBottom: idx === lines.length - 1 ? 0 : '0.35rem' }}
      >
        {line}
      </p>
    ));
  };

  return (
    <div className="container mx-auto py-8">
      <header className="page-header">
        <h1>SAT Practice Questions</h1>
        <p>
          Work through SAT-style Math, Reading, and Writing questions. Choose a
          difficulty and section, answer each question, then reveal explanations.
        </p>
      </header>

      <section className="simple-card">
        <h2 style={{ fontSize: '1rem', marginBottom: '0.25rem' }}>How this works</h2>
        <ul
          style={{
            fontSize: '0.9rem',
            color: 'var(--muted)',
            paddingLeft: '1.1rem',
            marginTop: '0.35rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '0.2rem',
          }}
        >
          <li>Pick a difficulty and section (Math, Reading, Writing, or All).</li>
          <li>Answer a question, then see if you’re correct and read the explanation.</li>
          <li>Move on to the next question with the same filters.</li>
        </ul>
      </section>

      {/* Filters */}
      <section className="card" style={{ marginBottom: '1.75rem' }}>
        <div className="difficulty-selector">
          <div className="difficulty-header">
            <span className="label">Difficulty</span>
            <span className="chip">
              {difficulty === 'mixed'
                ? 'Mixed'
                : difficulty.charAt(0).toUpperCase() + difficulty.slice(1)}
            </span>
          </div>
          <DifficultySelector
            selected={difficulty}
            setSelected={setDifficulty}
          />
        </div>

        <div>
          <div
            style={{
              fontSize: '0.75rem',
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              fontWeight: 600,
              color: 'var(--muted)',
              marginBottom: '0.4rem',
            }}
          >
            Section
          </div>
          <div className="pill-row">
            {['All', 'Math', 'Reading', 'Writing'].map((section) => (
              <button
                key={section}
                type="button"
                className={`pill${
                  sectionFilter === section ? ' active' : ''
                }`}
                onClick={() => setSectionFilter(section)}
              >
                <span className="pill-label">{section}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Question Area */}
      {!hasQuestions ? (
        <section className="card">
          <h3>No questions found</h3>
          <p>
            Try switching to a different difficulty or section — there might not be
            any questions yet for this combination.
          </p>
        </section>
      ) : (
        <section className="card">
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              gap: '0.75rem',
              alignItems: 'baseline',
            }}
          >
            <div>
              <div
                style={{
                  fontSize: '0.75rem',
                  textTransform: 'uppercase',
                  letterSpacing: '0.16em',
                  color: 'var(--muted)',
                  marginBottom: '0.25rem',
                }}
              >
                {currentQuestion.section} · {currentQuestion.topic}
              </div>
              <h2
                style={{
                  fontSize: '1.1rem',
                  marginBottom: '0.4rem',
                }}
              >
                Question {currentIndex + 1} of {filteredQuestions.length}
              </h2>
            </div>
            <div
              style={{
                fontSize: '0.78rem',
                padding: '0.25rem 0.7rem',
                borderRadius: '999px',
                border: '1px solid var(--border)',
                background: 'rgba(15, 23, 42, 0.9)',
                color: 'var(--muted)',
                whiteSpace: 'nowrap',
              }}
            >
              Difficulty: {difficultyLabel(currentQuestion.difficulty)}
            </div>
          </div>

          <div
            style={{
              marginTop: '0.75rem',
              marginBottom: '0.95rem',
              fontSize: '0.95rem',
            }}
          >
            {renderQuestionText(currentQuestion.question)}
          </div>

          <div
            style={{
              display: 'grid',
              gap: '0.5rem',
              marginBottom: '0.9rem',
            }}
          >
            {currentQuestion.choices.map((choice) => {
              const isCorrectChoice = isAnswered && choice === currentQuestion.answer;
              const isSelectedWrong =
                isAnswered &&
                choice === selectedChoice &&
                choice !== currentQuestion.answer;

              const btnStyle = {};
              if (isCorrectChoice) {
                btnStyle.border = '1px solid #22c55e';
                btnStyle.background = 'rgba(34, 197, 94, 0.08)';
              } else if (isSelectedWrong) {
                btnStyle.opacity = 0.7;
              }

              return (
                <button
                  key={choice}
                  type="button"
                  className="btn secondary"
                  style={{
                    justifyContent: 'flex-start',
                    textAlign: 'left',
                    width: '100%',
                    ...btnStyle,
                  }}
                  onClick={() => handleChoiceClick(choice)}
                >
                  <span>{choice}</span>
                </button>
              );
            })}
          </div>

          {/* Feedback */}
          {isAnswered && (
            <div
              style={{
                borderRadius: '10px',
                padding: '0.75rem 0.9rem',
                background: isCorrect
                  ? 'rgba(34, 197, 94, 0.12)'
                  : 'rgba(239, 68, 68, 0.12)',
                border: `1px solid ${
                  isCorrect ? 'rgba(34, 197, 94, 0.5)' : 'rgba(239, 68, 68, 0.5)'
                }`,
                marginBottom: '0.9rem',
                fontSize: '0.9rem',
              }}
            >
              <strong style={{ display: 'block', marginBottom: '0.25rem' }}>
                {isCorrect ? 'Nice work! 🎉' : 'Not quite.'}
              </strong>
              <div>
                Correct answer:{' '}
                <span style={{ fontWeight: 600 }}>{currentQuestion.answer}</span>
              </div>
              <div style={{ marginTop: '0.35rem', color: 'var(--muted)' }}>
                {currentQuestion.explanation}
              </div>
            </div>
          )}

          {/* Controls */}
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              gap: '0.75rem',
              marginTop: '0.25rem',
            }}
          >
            <button
              type="button"
              className="btn secondary"
              onClick={handleRestart}
            >
              Restart set
            </button>
            <button
              type="button"
              className="btn primary"
              onClick={handleNextQuestion}
              disabled={!isAnswered}
              style={
                !isAnswered
                  ? { opacity: 0.6, cursor: 'not-allowed' }
                  : undefined
              }
            >
              Next question
            </button>
          </div>
        </section>
      )}
    </div>
  );
};

export default SATPracticePage;

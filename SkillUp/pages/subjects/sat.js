// SkillUp/pages/subjects/sat.js

import { useState, useEffect } from 'react';
import DifficultySelector from '../../components/DifficultySelector';
import satQuestions from '../../data/satQuestions';

// Difficulty logic
const mapDifficulty = (difficulty, qDiff) => {
  if (difficulty === 'mixed') return true;
  if (difficulty === 'easy') return qDiff <= 2;
  if (difficulty === 'medium') return qDiff === 3 || qDiff === 4;
  if (difficulty === 'hard') return qDiff >= 4;
  return true;
};

const difficultyLabel = (d) => {
  if (d <= 1) return 'Very Easy';
  if (d === 2) return 'Easy';
  if (d === 3) return 'Medium';
  if (d === 4) return 'Hard';
  return 'Very Hard';
};

// Topic tiles
const TOPICS = [
  'All',
  'Algebra',
  'Geometry',
  'Functions',
  'Word Problems',
  'Statistics',
  'Probability',
  'Reading',
  'Grammar',
  'Writing Rules',
];

const SATPracticePage = () => {
  const [difficulty, setDifficulty] = useState('mixed');
  const [topicFilter, setTopicFilter] = useState('All');
  const [currentIndex, setCurrentIndex] = useState(0);

  const [selectedChoice, setSelectedChoice] = useState(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [isCorrect, setIsCorrect] = useState(null);

  // Filter questions
  const filteredQuestions = satQuestions.filter((q) => {
    const topicMatch = topicFilter === 'All' || q.topic === topicFilter || q.section === topicFilter;
    const difficultyMatch = mapDifficulty(difficulty, q.difficulty);
    return topicMatch && difficultyMatch;
  });

  const hasQuestions = filteredQuestions.length > 0;
  const currentQuestion = hasQuestions ? filteredQuestions[currentIndex] : null;

  // Reset on filter change
  useEffect(() => {
    setCurrentIndex(0);
    setSelectedChoice(null);
    setIsAnswered(false);
    setIsCorrect(null);
  }, [difficulty, topicFilter]);

  const handleChoiceClick = (choice) => {
    if (!currentQuestion || isAnswered) return;

    setSelectedChoice(choice);
    setIsAnswered(true);
    setIsCorrect(choice === currentQuestion.answer);
  };

  const handleNextQuestion = () => {
    if (!hasQuestions) return;
    const nextIndex = currentIndex + 1 < filteredQuestions.length ? currentIndex + 1 : 0;

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

  const renderQuestionText = (text) =>
    text.split('\n').map((line, i) => (
      <p key={i} style={{ marginBottom: '0.35rem' }}>
        {line}
      </p>
    ));

  return (
    <div className="container mx-auto py-8">
      {/* Header */}
      <header className="page-header">
        <h1>SAT Practice Questions</h1>
        <p>
          Work through Math, Reading, and Writing SAT questions. Choose a difficulty and topic
          to customize your practice.
        </p>
      </header>

      {/* How it works */}
      <section className="simple-card">
        <h2 style={{ fontSize: '1rem', marginBottom: '0.25rem' }}>How It Works</h2>
        <ul
          style={{
            fontSize: '0.9rem',
            color: 'var(--muted)',
            paddingLeft: '1.1rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '0.2rem',
          }}
        >
          <li>Select a difficulty and topic.</li>
          <li>Answer each question and review explanations.</li>
          <li>Move through automatically filtered questions.</li>
        </ul>
      </section>

      {/* Filters */}
      <section className="card" style={{ marginBottom: '1.75rem' }}>
        {/* Difficulty */}
        <div className="difficulty-selector">
          <div className="difficulty-header">
            <span className="label">Difficulty</span>
            <span className="chip">
              {difficulty === 'mixed' ? 'Mixed' : difficulty.charAt(0).toUpperCase() + difficulty.slice(1)}
            </span>
          </div>
          <DifficultySelector selected={difficulty} setSelected={setDifficulty} />
        </div>

        {/* Topics */}
        <div className="home-section" style={{ marginTop: '1rem' }}>
          <div className="home-section-header">
            <h2 style={{ fontSize: '1.05rem' }}>Topics</h2>
            <p style={{ color: 'var(--muted)', fontSize: '0.85rem' }}>Choose a SAT topic to practice.</p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {TOPICS.map((t) => (
              <div
                key={t}
                className="tile"
                onClick={() => setTopicFilter(t)}
                style={{
                  cursor: 'pointer',
                  border: topicFilter === t ? '1px solid var(--accent)' : '',
                }}
              >
                <h3>{t}</h3>
                <p style={{ color: 'var(--muted)' }}>Practice {t} questions</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Question Viewer */}
      {!hasQuestions ? (
        <section className="card">
          <h3>No questions available</h3>
          <p>Try selecting another difficulty or topic.</p>
        </section>
      ) : (
        <section className="card">
          {/* Info */}
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <div>
              <div
                style={{
                  fontSize: '0.75rem',
                  textTransform: 'uppercase',
                  letterSpacing: '0.16em',
                  color: 'var(--muted)',
                }}
              >
                {currentQuestion.section} · {currentQuestion.topic}
              </div>
              <h2 style={{ fontSize: '1.1rem', marginTop: '0.25rem' }}>
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
              }}
            >
              Difficulty: {difficultyLabel(currentQuestion.difficulty)}
            </div>
          </div>

          {/* Question */}
          <div style={{ marginTop: '0.9rem', marginBottom: '1rem', fontSize: '0.95rem' }}>
            {renderQuestionText(currentQuestion.question)}
          </div>

          {/* Choices */}
          <div style={{ display: 'grid', gap: '0.5rem', marginBottom: '1rem' }}>
            {currentQuestion.choices.map((choice) => {
              const isCorrectChoice = isAnswered && choice === currentQuestion.answer;
              const isWrongSelected =
                isAnswered && choice === selectedChoice && choice !== currentQuestion.answer;

              const btnStyle = {};
              if (isCorrectChoice) {
                btnStyle.border = '1px solid #22c55e';
                btnStyle.background = 'rgba(34, 197, 94, 0.1)';
              } else if (isWrongSelected) {
                btnStyle.opacity = 0.7;
              }

              return (
                <button
                  key={choice}
                  type="button"
                  className="btn secondary"
                  style={{ textAlign: 'left', width: '100%', ...btnStyle }}
                  onClick={() => handleChoiceClick(choice)}
                >
                  {choice}
                </button>
              );
            })}
          </div>

          {/* Explanation */}
          {isAnswered && (
            <div
              style={{
                borderRadius: '10px',
                padding: '0.75rem',
                background: isCorrect ? 'rgba(34, 197, 94, 0.12)' : 'rgba(239, 68, 68, 0.12)',
                border: `1px solid ${
                  isCorrect ? 'rgba(34, 197, 94, 0.5)' : 'rgba(239, 68, 68, 0.5)'
                }`,
                marginBottom: '1rem',
              }}
            >
              <strong>{isCorrect ? 'Correct! 🎉' : 'Incorrect.'}</strong>
              <p style={{ marginTop: '0.3rem', color: 'var(--muted)' }}>
                {currentQuestion.explanation}
              </p>
            </div>
          )}

          {/* Controls */}
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <button className="btn secondary" onClick={handleRestart}>
              Restart
            </button>

            <button
              className="btn primary"
              disabled={!isAnswered}
              onClick={handleNextQuestion}
              style={!isAnswered ? { opacity: 0.6, cursor: 'not-allowed' } : {}}
            >
              Next
            </button>
          </div>
        </section>
      )}
    </div>
  );
};

export default SATPracticePage;

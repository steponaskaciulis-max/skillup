export function DifficultySelector({ value, onChange }) {
  const options = ["Beginner", "Intermediate", "Advanced", "Mixed"];

  return (
    <div className="difficulty-selector">
      {options.map((opt) => (
        <button
          key={opt}
          className={value === opt ? "diff-btn active" : "diff-btn"}
          onClick={() => onChange(opt)}
          type="button"
        >
          {opt}
        </button>
      ))}
    </div>
  );
}

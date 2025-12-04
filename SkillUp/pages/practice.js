export default function PracticePage() {
  return (
    <div>
      <div className="page-header">
        <h1>Practice</h1>
        <p>
          Interactive, IXL-style practice is being wired to SAT topics, AP subjects,
          and high school classes.
        </p>
      </div>

      <div className="simple-card">
        <p>
          For now, start from{" "}
          <a href="/subjects/sat" className="btn secondary">
            the SAT page
          </a>{" "}
          and choose a topic + difficulty. The full adaptive engine will plug in
          here with live question sets.
        </p>
      </div>
    </div>
  );
}

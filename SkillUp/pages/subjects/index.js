// SkillUp/pages/subjects/index.js

export default function Subjects() {
  return (
    <div>
      <div className="page-header">
        <h1>Subjects</h1>
        <p>Browse SkillUp focus areas and jump into practice or review.</p>
      </div>

      <div className="grid">
        <div className="card">
          <h3>SAT</h3>
          <p>Math, Reading, and Writing cheat sheets and practice.</p>
          <a href="/subjects/sat" className="btn secondary">
            Go to SAT
          </a>
        </div>

        <div className="card">
          <h3>AP Courses</h3>
          <p>AP-level content coming online step-by-step.</p>
        </div>

        <div className="card">
          <h3>High School (10–12)</h3>
          <p>
            Core subject support: math, science, English, and social sciences.
          </p>
        </div>
      </div>
    </div>
  );
}

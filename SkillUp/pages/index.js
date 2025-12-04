export default function Home() {
  return (
    <div className="home">
      <header className="hero">
        <h1>SkillUp</h1>
        <p className="hero-subtitle">
          Academic improvement for AP, SAT, and high school students (10th–12th grade).
        </p>
        <p className="hero-price">
          Membership: <strong>$20</strong> / month
        </p>
        <div className="hero-buttons">
          <a href="/subjects/sat" className="btn primary">Start SAT Prep</a>
          <a href="/practice" className="btn secondary">Try Practice Mode</a>
        </div>
      </header>

      <main className="sections">
        <section>
          <h2>Who SkillUp Is For</h2>
          <p>
            SkillUp is built for motivated 10th–12th grade students preparing for the SAT, AP exams,
            and core high school classes. Everything is organized by topic and difficulty for efficient study.
          </p>
        </section>

        <section>
          <h2>What You Get</h2>
          <ul>
            <li>📚 Detailed cheat sheets for SAT, AP, and high school subjects.</li>
            <li>🧠 Smart practice that adapts to your level (IXL-style).</li>
            <li>💬 A members-only forum for asking questions and sharing tips.</li>
            <li>🎯 Clear progress tracking with XP and streaks.</li>
          </ul>
        </section>

        <section>
          <h2>Subjects Covered</h2>
          <div className="grid">
            <div className="card">
              <h3>SAT</h3>
              <p>Math, Reading, and Writing with realistic questions and full explanations.</p>
            </div>
            <div className="card">
              <h3>AP Courses</h3>
              <p>AP Calc, AP Chem, AP Bio, APUSH, AP Lang, AP Lit, and more coming soon.</p>
            </div>
            <div className="card">
              <h3>High School (10–12)</h3>
              <p>Algebra II, Geometry, Pre-Calc, Biology, Chemistry, Physics, English, History.</p>
            </div>
          </div>
        </section>

        <section>
          <h2>Community & Contact</h2>
          <p>
            A forum space will let members discuss problems, share resources, and support each other.
          </p>
          <p>
            Contact the team (you 😉):{" "}
            <a href="mailto:steponas.kaciulis@gmail.com">steponas.kaciulis@gmail.com</a>
          </p>
          <p>
            TikTok page: <em>coming soon</em>.
          </p>
        </section>
      </main>
    </div>
  );
}

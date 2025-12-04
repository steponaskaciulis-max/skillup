export default function Home() {
  return (
    <div className="home">
      <header className="hero">
        <h1>SkillUp</h1>
        <p className="hero-subtitle">
          Academic improvement for AP, SAT, and high school students in grades
          10–12.
        </p>
        <p className="hero-price">
          Membership: <strong>$20</strong> / month
        </p>
        <div className="hero-buttons">
          <a href="/subjects/sat" className="btn primary">
            Start SAT Prep
          </a>
          <a href="/practice" className="btn secondary">
            Try Practice Mode
          </a>
        </div>
      </header>

      <main className="sections">
        <section>
          <h2>Who is SkillUp for?</h2>
          <p>
            SkillUp is built for motivated students preparing for the SAT, AP
            exams, and high school classes. Everything is organized by topic and
            difficulty so you don&apos;t waste time figuring out what to study.
          </p>
        </section>

        <section>
          <h2>What you get</h2>
          <ul>
            <li>📚 Detailed cheat sheets across SAT, AP, and HS subjects.</li>
            <li>🧠 Smart practice that adapts to your level.</li>
            <li>💬 A members-only forum for questions and discussion.</li>
            <li>🎯 XP, streaks, and visible progress tracking.</li>
          </ul>
        </section>

        <section>
          <h2>Subjects covered</h2>
          <div className="grid">
            <div className="card">
              <h3>SAT</h3>
              <p>
                Math, Reading, and Writing with realistic questions and full
                explanations.
              </p>
            </div>
            <div className="card">
              <h3>AP Courses</h3>
              <p>
                AP Calc, AP Chem, AP Bio, APUSH, AP Lang, AP Lit, and more
                (rolling expansion).
              </p>
            </div>
            <div className="card">
              <h3>High School (10–12)</h3>
              <p>
                Algebra II, Geometry, Pre-Calc, Biology, Chemistry, Physics,
                English, and History.
              </p>
            </div>
          </div>
        </section>

        <section>
          <h2>Contact & community</h2>
          <p>
            A dedicated forum will let members discuss problems, share study
            tips, and stay accountable.
          </p>
          <p>
            Contact the team (you):{" "}
            <a href="mailto:steponas.kaciulis@gmail.com">
              steponas.kaciulis@gmail.com
            </a>
          </p>
          <p>
            TikTok page: <em>coming soon</em>.
          </p>
        </section>
      </main>
    </div>
  );
}

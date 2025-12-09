// SkillUp/pages/index.js
import Link from "next/link";

export default function HomePage() {
  return (
    <div>
      {/* HERO */}
      <section className="home-hero">
        <div className="home-hero-text">
          <span className="home-badge">SAT • AP • High School</span>
          <h1>
            Get unstuck fast.
            <span className="home-hero-highlight"> SkillUp</span> your score.
          </h1>
          <p>
            Bite-sized explanations, cheat sheets, and practice questions for
            students who don’t have time to dig through 40-minute YouTube videos.
          </p>

          <div className="home-hero-actions">
            <Link href="/practice" className="btn primary">
              Start practice
            </Link>
            <Link href="/subjects" className="btn secondary">
              Browse subjects
            </Link>
          </div>

          <ul className="home-hero-bullets">
            <li>✅ SAT Math, Reading, and Writing</li>
            <li>✅ AP courses coming online step-by-step</li>
            <li>✅ Designed for 10–12th grade students</li>
          </ul>
        </div>

        <div className="home-hero-panel">
          <div className="home-stat-card">
            <p className="label">Practice mode</p>
            <p className="value">Mixed difficulty</p>
            <p className="hint">Smart rotation of algebra, functions, and word problems.</p>
          </div>
          <div className="home-stat-row">
            <div className="home-mini-card">
              <p className="label">Question types</p>
              <p className="value">Math • Reading • Writing</p>
            </div>
            <div className="home-mini-card">
              <p className="label">Session length</p>
              <p className="value">10–15 mins</p>
            </div>
          </div>
        </div>
      </section>

      {/* SUBJECTS PREVIEW */}
      <section className="home-section">
        <div className="home-section-header">
          <h2>What can I practice?</h2>
          <p>
            Jump into targeted sets or mix topics to simulate real test sections.
          </p>
        </div>

        <div className="grid">
          <div className="card">
            <h3>SAT</h3>
            <p>
              Math, Reading, and Writing practice with quick explanations so you
              actually understand your mistakes.
            </p>
            <Link href="/subjects/sat" className="btn secondary">
              Go to SAT
            </Link>
          </div>

          <div className="card">
            <h3>AP Courses</h3>
            <p>
              AP-level content rolling out course by course. Start with core problem
              types and build up to full practice sets.
            </p>
            <Link href="/subjects/ap" className="btn secondary">
              Browse AP
            </Link>
          </div>

          <div className="card">
            <h3>High School (10–12)</h3>
            <p>
              Core subject support in math, science, English, and social sciences —
              tuned to what actually shows up on tests.
            </p>
            <Link href="/subjects/highschool" className="btn secondary">
              Explore high school
            </Link>
          </div>
        </div>
      </section>

      {/* CTA STRIP */}
      <section className="home-strip">
        <p>
          Want a breakdown of your own school’s tests or assignments?
          <span> Reach out and we’ll build around it.</span>
        </p>
        <Link href="/contact" className="btn primary">
          Contact
        </Link>
      </section>
    </div>
  );
}

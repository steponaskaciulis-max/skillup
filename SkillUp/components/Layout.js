export default function Layout({ children }) {
  return (
    <div className="app-root">
      <header className="site-header">
        <div className="header-inner">
          <div className="brand">
            <span className="brand-mark">SkillUp</span>
            <span className="brand-tagline">
              AP, SAT &amp; High School Mastery
            </span>
          </div>
          <nav className="main-nav">
            <a href="/">Home</a>
            <a href="/subjects">Subjects</a>
            <a href="/practice">Practice</a>
            <a href="/forum">Forum</a>
            <a href="/contact">Contact</a>
          </nav>
        </div>
      </header>

      <main className="main-content">{children}</main>

      <footer className="site-footer">
        <p>© {new Date().getFullYear()} SkillUp. All rights reserved.</p>
        <p className="footer-meta">
          TikTok: <span>coming soon</span> · Membership:{" "}
          <strong>$20/month</strong>
        </p>
      </footer>
    </div>
  );
}

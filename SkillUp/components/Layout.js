// SkillUp/components/Layout.js

import Link from "next/link";

export default function Layout({ children }) {
  return (
    <div className="layout">
      <nav className="navbar">
        <div className="nav-inner">
          <Link href="/" className="nav-logo">SkillUp</Link>

          <div className="nav-links">
            <Link href="/subjects" className="nav-link">Subjects</Link>
            <Link href="/practice" className="nav-link">Practice</Link>
            <Link href="/forum" className="nav-link">Forum</Link>
            <Link href="/contact" className="nav-link">Contact</Link>
          </div>
        </div>
      </nav>

      <main className="main-container">{children}</main>

      <footer className="footer">
        <p>© {new Date().getFullYear()} SkillUp — Study Smarter.</p>
      </footer>
    </div>
  );
}

// SkillUp/components/Layout.js
import Link from "next/link";

export default function Layout({ children }) {
  return (
    <div className="site-shell">
      <header className="site-header">
        <div className="site-header-inner">
          <Link href="/" className="brand">
            <img 
  src="/logo.png" 
  alt="Logo" 
  className="brand-logo"
/>

            <span className="brand-text">SkillUp</span>
          </Link>

          <nav className="nav-links">
            <Link href="/subjects" className="nav-link">
              Subjects
            </Link>
            <Link href="/practice" className="nav-link">
              Practice
            </Link>
            <Link href="/forum" className="nav-link">
              Forum
            </Link>
            <Link href="/contact" className="nav-link nav-cta">
              Contact
            </Link>
          </nav>
        </div>
      </header>

      <main className="site-main">{children}</main>

      <footer className="site-footer">
        <p>© {new Date().getFullYear()} SkillUp · SAT & AP prep</p>
      </footer>
    </div>
  );
}

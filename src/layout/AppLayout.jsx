import { Link, Outlet } from "react-router-dom";
import { useState } from "react";

export default function AppLayout() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="app-layout">
      {/* Navigation */}
      <nav className="app-nav">
        <div className="nav-left">
          <Link to="/" className="logo-text">
            PulseVote
          </Link>
        </div>
        <div className={`nav-right ${menuOpen ? "open" : ""}`}>
          <Link to="/dashboard">Dashboard</Link>
          <Link to="/polls">Polls</Link>
          <Link to="/profile">Profile</Link>
          <Link to="/login">Logout</Link>
        </div>
        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
          ☰
        </button>
      </nav>

      {/* Main content */}
      <main className="app-main">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="app-footer">
        <p>© 2025 PulseVote • Every vote counts • Safety first</p>
      </footer>
    </div>
  );
}

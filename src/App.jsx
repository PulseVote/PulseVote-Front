import { Link, Outlet } from "react-router-dom";
import "./App.css";

export default function App() {
  return (
    <>
      <main>
        {/* Hero Section */}
        <div className="landing-card">
          <h1>PulseVote</h1>
          <p>
            At PulseVote, we put <strong>safety first</strong>. Every account,
            poll, and vote is secured so you can participate confidently. <br />
            Remember: <strong>every vote counts</strong>.
          </p>

          <div className="landing-actions">
            <Link to="/login">
              <button>Login</button>
            </Link>
            <Link to="/register">
              <button>Create Account</button>
            </Link>
          </div>
        </div>

        {/* Features Section */}
        <section className="features-section">
          <h2>Features</h2>
          <div className="features-grid">
            <div className="feature-card">
              <h3>Join Organizations</h3>
              <p>
                Connect with your teams and communities easily. Every
                organization you join helps your voice be heard.
              </p>
            </div>
            <div className="feature-card">
              <h3>Create Polls</h3>
              <p>
                Create polls quickly for your organization and collect votes
                securely. Your polls, your rules.
              </p>
            </div>
            <div className="feature-card">
              <h3>Vote Confidently</h3>
              <p>
                Cast your vote safely, knowing it counts. Every vote matters and
                is recorded with privacy in mind.
              </p>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="landing-footer">
          <p>
            &copy; {new Date().getFullYear()} PulseVote. All rights reserved.
          </p>
        </footer>
      </main>
      
    </>
  );
}

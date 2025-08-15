import { Link } from "react-router-dom";

export default function Dashboard() {
  const organizations = []; // This will be dynamic later

  return (
    <div className="dashboard-container">
      {/* Left column - organizations card */}
      <div className="org-card">
        <h2>Your Organizations</h2>

        <div className="org-list">
          {organizations.length > 0 ? (
            <ul>
              {organizations.map((org) => (
                <li key={org.id}>
                  <Link to={`/org/${org.id}`}>{org.name}</Link>
                </li>
              ))}
            </ul>
          ) : (
            <p className="empty-message">
              You are not part of any organizations yet.
            </p>
          )}
        </div>

        <div className="org-actions">
          <button>Join Org</button>
          <button>Create Org</button>
        </div>
      </div>

      {/* Right column - main dashboard content */}
      <div className="dashboard-main">
        <p>Main dashboard content goes here...</p>
      </div>
    </div>
  );
}

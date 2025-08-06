import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import { Link } from "react-router";
import viteLogo from "/vite.svg";
import "./App.css";

import { Outlet } from "react-router-dom";
import TextInput from "./components/Input";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>

      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <h2>Welcome to PulseVote</h2>
     <Link to="/login">Login again</Link>
      </div>
    </>
  );
}

export default App;

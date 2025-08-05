import { useState, useEffect } from "react";
import { fetchTest } from "../api/TestApi.js";

export default function DisplayTestData() {
  const [serverMessage, setMessage] = useState("Loading...");
  useEffect(() => {
    fetchTest().then((res) => {
      setMessage(res);
    });
  });
  return (
    <div>
      <h2>The server says</h2>
      <p>{serverMessage}</p>
    </div>
  );
}

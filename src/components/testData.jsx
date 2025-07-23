import { useState, useEffect } from "react";
import { fetchTest } from "../api/testApi.js";
export default function DisplayTestData() {
  const [serverMessage, setMessage] = useState("Loading...");
  useEffect(() => {
    fetchTest().then((res) => {
      setMessage(res);
    });
  }, []);
  return (
    <div>
      <h2>{serverMessage}</h2>
    </div>
  );
}

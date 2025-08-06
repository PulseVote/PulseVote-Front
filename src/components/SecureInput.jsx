import { useState } from "react";
export function SecureInput() {
  const [password, setPassword] = useState("");
  return (
    <>
      <form>
        <input
          type="password"
          value={password}
          onChange={(updated) => setName(updated.target.value)}
        />
      </form>
    </>
  );
}

import { useState } from "react";

export default function TextInput() {
  const [name, setName] = useState("Enter in your name");
  return (
    <>
      <form>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </form>
    </>
  );
}

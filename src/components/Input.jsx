import { useState } from "react";

export default function TextInput(placeholder) {
  const [name, setName] = useState("");
  return (
    <>
      <form>
        <input
          type="text"
          value={name}
          placeholder={placeholder}
          onChange={(e) => setName(e.target.value)}
        />
      </form>
    </>
  );
}

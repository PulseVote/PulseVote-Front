import { useState } from "react";

export default function TextInput({ placeHolder, input, setInput }) {
  return (
    // we pass the managed state from parent page, we then just work with that state and update the input based on user input
    <>
      <input
        type="text"
        value={input}
        placeholder={placeholder}
        onChange={(event) => setInput(event.target.value)}
      />
    </>
  );
}

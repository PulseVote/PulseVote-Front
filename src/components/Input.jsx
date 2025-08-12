import { useState } from "react";

export default function TextInput({
  placeHolder,
  input,
  setInput,
  errorMessage,
}) {
  return (
    // we pass the managed state from parent page, we then just work with that state and update the input based on user input
    <>
      <input
        type="text"
        value={input}
        placeholder={placeHolder}
        onChange={(event) => setInput(event.target.value)}
      />
      <label>{errorMessage} </label>
    </>
  );
}

import { useState } from "react";
export function SecureInput({ placeHolder, input, setInput }) {
  return (
    <>
      <input
        type="password"
        value={input}
        placeholder={placeHolder}
        onChange={(event) => setInput(event.target.value)}
      />
    </>
  );
}

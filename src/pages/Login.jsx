import { useState } from "react";
import TextInput from "../components/Input";
import { Link } from "react-router-dom";
export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const onLogin = async () => {
    // this will be used to call the logiin func
  };
  return (
    <>
      <header>
        <h1>Login Page</h1>
      </header>
      <main>
        <form action="" className="">
          <TextInput
            id="email"
            placeHolder={"Email"}
            input={email}
            setInput={setEmail}
            errorMessage={emailError}
          />
          <TextInput
            id="password"
            placeHolder={"Password"}
            input={password}
            setInput={setPassword}
            errorMessage={passwordError}
          />
          <button type="submit" onClick={onLogin}>
            Sign in
          </button>
        </form>
        <div className="account-setup">
          <Link to="/register">Sign up</Link>
        </div>
      </main>

      <footer>
        <p> follow us</p>
      </footer>
    </>
  );
}

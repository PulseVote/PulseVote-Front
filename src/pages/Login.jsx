import { useState } from "react";
import TextInput from "../components/Input";
import { Link, NavLink } from "react-router-dom";
import { isValidEmail, isValidPassword } from "../validation/regex";
import { login } from "../api/auth";
export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [successfulLogin, setSuccessfulLogin] = useState(false);
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const [errorMessage, setErrorMessage] = useState("");
  const ResetState = () => {
    setEmailError("");
    setPasswordError("");
    setErrorMessage("");
  };
  const onLogin = async () => {
    setLoading((prevstate) => !prevstate);
    ResetState();
    if (!email || !password) {
      return setErrorMessage("You have set in empty data");
    }
    const validEmail = isValidEmail({ email });
    const validPassword = isValidPassword({ password });
    if (!validEmail) {
      // this this will be integrated with email confirmation
      return setEmailError("This is not a valid email address");
    }
    if (!validPassword) {
      return setPasswordError(
        "Must be atleast 4 Characters long containing 1 uppercase"
      );
    }
    try {
      const { message, success } = login({ email, password });
      if (!success) {
        return setErrorMessage(message);
      }
      setSuccessfulLogin(true);
      setLoading((prevstate) => !prevstate);
    } catch (error) {
      return setErrorMessage(error);
    }
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

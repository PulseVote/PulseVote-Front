import { useState } from "react";
import TextInput from "../components/Input";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../api/auth";
import { isValidEmail, isValidPassword } from "../validation/regex";
import { SecureInput } from "../components/SecureInput";
import { useEffect } from "react";
export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [success, setSuccess] = useState(false);
  const ResetState = () => {
    setEmailError("");
    setPasswordError("");
    setErrorMessage("");
  };
  const ValidateInput = () => {
    if (!email || !password) setErrorMessage("You have set in empty data");

    if (!isValidEmail(email)) setEmailError("Invalid email format");
    if (!isValidPassword(password))
      setPasswordError(
        "Must be atleast 8 characters long, 1 uppercase, 1 alphanumeric"
      );
  };
  const onLogin = async () => {
    setLoading(true);
    ResetState();
    ValidateInput();
    try {
      const { message, success } = await login({ email, password });
      if (!success) {
        setErrorMessage(message);
      } else {
        console.log("navigate to home");
        setSuccess(true);
      }
    } catch (error) {
      console.log(error);
      setErrorMessage("Something went wrong when trying to log you in");
    } finally {
      setLoading(false);
    }
  };
  // display a nice message for them in some modal, possibly look at creating a auth listener
  // create a dashboard screen
  useEffect(() => {
    if (success) navigate("/");
  }, [success, navigate]);
  return (
    <>
      <header>
        <h1>Login Page</h1>
      </header>
      <main>
        <form action="" className="">
          <p>{errorMessage}</p>
          <TextInput
            id="email"
            placeHolder={"Email"}
            input={email}
            setInput={setEmail}
            errorMessage={emailError}
          />
          <SecureInput
            id="password"
            placeHolder={"Password"}
            input={password}
            setInput={setPassword}
            errorMessage={passwordError}
          />
          <button type="button" onClick={onLogin}>
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

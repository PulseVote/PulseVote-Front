import { useState } from "react";
import { Link } from "react-router-dom";
import { register } from "../api/auth.js";
import TextInput from "../components/Input.jsx";
import { SecureInput } from "../components/SecureInput.jsx";
import {
  isValidEmail,
  isValidPassword,
  isValidUsername,
} from "../validation/regex.js";

export default function Register() {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [usernameError, setUsernameError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [isLoading, setLoading] = useState(false);
  const ResetState = () => {
    setEmailError("");
    setUsernameError("");
    setPasswordError("");
    setConfirmPasswordError("");
    setErrorMessage("");
  };
  const ValidateInput = () => {
    if (!username || !password || !confirmPassword || !email)
      setErrorMessage("There is some missing data in the fields!");

    if (isValidUsername(username))
      setUsernameError("Atleast 4 characters long, and an uppercase letter");

    if (!isValidEmail(email)) setEmailError("Invalid email format");
    if (!isValidPassword(password))
      setPasswordError(
        "Must be atleast 8 characters long, 1 uppercase, 1 alphanumeric"
      );
    if (password !== confirmPassword)
      setConfirmPasswordError("Passwords do not match");
  };
  const onRegister = async (e) => {
    ResetState();
    setLoading(true);
    ValidateInput();
    try {
      const message = await register({ email, password, username });
      // now we navigate
    } catch (err) {
      console.log(err);
      return setErrorMessage("There was an error trying to register " + err);
    } finally {
      setLoading(false);
    }
  };
  return (
    <>
      <header>
        <h1>Register Page</h1>
      </header>
      <main>
        <form action="">
          <label>{errorMessage}</label>
          <TextInput
            placeHolder={"Email"}
            input={email}
            setInput={setEmail}
            errorMessage={emailError}
          />
          <TextInput
            placeHolder={"Username"}
            input={username}
            setInput={setUsername}
            errorMessage={usernameError}
          />
          <SecureInput
            placeHolder={"Password"}
            input={password}
            setInput={setPassword}
            errorMessage={passwordError}
          />
          <SecureInput
            placeHolder={"Confirm password"}
            input={confirmPassword}
            setInput={setConfirmPassword}
            errorMessage={confirmPasswordError}
          />
          <button onClick={onRegister()} type="button">
            Register
          </button>
        </form>
      </main>

      <div className="account-setup">
        <Link to="/login">Sign in </Link>
      </div>
      <footer>
        <p> follow us</p>
      </footer>
    </>
  );
}

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
  const onRegister = async (e) => {
    // validate the email and password with regex,
    // make sure we return a error on the screen.
    // if successful register, navigate to login.
    // throw valid errors on the screen for user to see
    setEmailError("");
    setUsernameError("");
    setPasswordError("");
    setConfirmPasswordError("");
    setErrorMessage("");
    setLoading(true);
    const validEmail = isValidEmail({ email });
    const validUsername = isValidUsername({ username });
    const validPassword = isValidPassword({ password });
    if (!username || !password || !confirmPassword || !email) {
      return setErrorMessage("There is some missing data in the fields!");
    }

    if (!validUsername) {
      setUsernameError("Atleast 4 characters long, and an uppercase letter");
    }
    if (!validEmail) {
      setEmailError("The email is invalid");
    }
    if (!validPassword) {
      return setPasswordError(
        "Atleast 8 characters long, 1 special character, and an uppercase letter"
      );
    }
    if (password !== confirmPassword) {
      return setConfirmPasswordError("Passwords do not match");
    }
    try {
      const message = await register({ email, password, username });
      // now we navigate
    } catch (err) {
      console.log(err);
      return setErrorMessage("There was an error trying to register " + err);
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
          <button
            onClick={() =>
              onRegister({
                username,
                password,
                email,
                confirmPassword,
              })
            }
            type="button"
          >
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

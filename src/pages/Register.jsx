import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { register } from "../api/auth.js";
import TextInput from "../components/Input.jsx";
import { SecureInput } from "../components/SecureInput.jsx";
import {
  isValidEmail,
  isValidPassword,
  isValidUsername,
} from "../validation/regex.js";

export default function Register() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [emailError, setEmailError] = useState("");
  const [usernameError, setUsernameError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);

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

    if (!isValidUsername(username))
      setUsernameError("At least 4 characters long, and one uppercase letter");

    if (!isValidEmail(email)) setEmailError("Invalid email format");

    if (!isValidPassword(password))
      setPasswordError(
        "Must be at least 8 characters long, 1 uppercase, 1 alphanumeric"
      );

    if (password !== confirmPassword)
      setConfirmPasswordError("Passwords do not match");
  };

  const onRegister = async () => {
    ResetState();
    setLoading(true);
    ValidateInput();
    try {
      const { message, success } = await register({
        email,
        password,
        username,
      });

      if (!success) {
        setErrorMessage(message);
      } else {
        navigate("/login");
      }
    } catch (err) {
      console.log(err);
      setErrorMessage("There was an error trying to register: " + err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="login-page">
      <div className="login-card">
        <h1>Create your PulseVote account</h1>
        {errorMessage && <p className="error-message">{errorMessage}</p>}

        <TextInput
          placeHolder="Email"
          input={email}
          setInput={setEmail}
          errorMessage={emailError}
        />
        <TextInput
          placeHolder="Username"
          input={username}
          setInput={setUsername}
          errorMessage={usernameError}
        />
        <SecureInput
          placeHolder="Password"
          input={password}
          setInput={setPassword}
          errorMessage={passwordError}
        />
        <SecureInput
          placeHolder="Confirm password"
          input={confirmPassword}
          setInput={setConfirmPassword}
          errorMessage={confirmPasswordError}
        />

        <button type="button" onClick={onRegister} disabled={loading}>
          {loading ? "Registering..." : "Register"}
        </button>

        <div className="account-setup">
          <span>Already have an account?</span> <Link to="/login">Sign in</Link>
        </div>
      </div>
    </main>
  );
}

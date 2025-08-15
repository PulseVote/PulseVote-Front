import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import TextInput from "../components/Input";
import { SecureInput } from "../components/SecureInput";
import { login } from "../api/auth";
import { isValidEmail, isValidPassword } from "../validation/regex";

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
        "Must be at least 8 characters long, 1 uppercase, 1 alphanumeric"
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
        setSuccess(true);
      }
    } catch (error) {
      console.log(error);
      setErrorMessage("Something went wrong when trying to log you in");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (success) navigate("/dashboard");
  }, [success, navigate]);

  return (
    <main className="login-page">
      <div className="login-card">
        <h1>Sign in to PulseVote</h1>
        {errorMessage && <p className="error-message">{errorMessage}</p>}

        <TextInput
          id="email"
          placeHolder="Email"
          input={email}
          setInput={setEmail}
          errorMessage={emailError}
        />
        <SecureInput
          id="password"
          placeHolder="Password"
          input={password}
          setInput={setPassword}
          errorMessage={passwordError}
        />

        <button type="button" onClick={onLogin} disabled={loading}>
          {loading ? "Signing in..." : "Sign in"}
        </button>

        <div className="account-setup">
          <span>Don't have an account?</span> <Link to="/register">Sign up</Link>
        </div>
      </div>
    </main>
  );
}

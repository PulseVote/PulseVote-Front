import { useState } from "react";
import { Link } from "react-router-dom";
import { register } from "../api/auth.js";
import TextInput from "../components/Input.jsx";
import { SecureInput } from "../components/SecureInput.jsx";
const onRegister = ({ username, password, email, confirmPassword }) => {
  // validate the email and password with regex,
  // make sure we return a error on the screen.
  // if successful register, navigate to login.
  // throw valid errors on the screen for user to see
  if (!username || !email || !password || !confirmPassword) {
    console.log("some data is missing");
  }
  if (password !== confirmPassword) {
    console.log("passwords dont match");
  }
  try {
    const response = register({ email, password, username });
  } catch (err) {
    console.log(err);
  }
};
export default function Register() {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  return (
    <>
      <>
        <header>
          <h1>Register Page</h1>
        </header>
        <main>
          <form action="">
            <TextInput
              placeHolder={"Email"}
              input={email}
              setInput={setEmail}
            />
            <TextInput
              placeHolder={"Username"}
              input={username}
              setInput={setUsername}
            />
            <SecureInput
              placeHolder={"Password"}
              input={password}
              setInput={setPassword}
            />
            <SecureInput
              placeHolder={"Confirm password"}
              input={confirmPassword}
              setInput={setConfirmPassword}
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
    </>
  );
}

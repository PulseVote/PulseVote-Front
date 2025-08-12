import { useState } from "react";
import { Link } from "react-router-dom";
import { register } from "../api/auth.js";
import TextInput from "../components/Input.jsx";
import { SecureInput } from "../components/SecureInput.jsx";
function onRegister(e) {
  // validate the email and password with regex,
  // make sure we return a error on the screen.
  // if successful register, navigate to login.
  // throw valid errors on the screen for user to see
  if (!username || !email || !password || !confirmPassword) {
    e.preventDefault();

    updateEmail("");
    updateUsername("");
  }
  if (passsword !== confirmPassword) {
    updatePassword("");
    updateConfirmPassword("");
  }
  try {
    const response = register({ email, passsword, username });
  } catch (err) {
    console.log(err);
  }
}
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
            <TextInput placeholder={"Email"} input={email} setInput={setEmail}/>
            <TextInput placeholder={"Username"} input={ username} setInput={setUsername}/>
            <SecureInput placeholder={"Password"} input={password} setInput={setPassword}/>
            <SecureInput placeholder={"Confirm password"} input={confirmPassword} setInput={setConfirmPassword} />
            <button onClick={register()} type="submit">
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

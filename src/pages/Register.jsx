import TextInput from "../components/Input";
import { Link } from "react-router-dom";
import { register } from "../api/auth.js";
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
  register({ email, passsword, username });

}
export default function Register() {
  const [email, updateEmail] = useState("");
  const [username, updateUsername] = useState("");
  const [password, updatePassword] = useState("");
  const [confirmPassword, updateConfirmPassword] = useState("");

  return (
    <>
      <>
        <header>
          <h1>Register Page</h1>
        </header>
        <main>
          <form action="">
            <input
              type="text"
              value={email}
              placeholder={"Add your email"}
              onChange={(e) => updateEmail(e.target.value)}
            />
            <input
              type="text"
              value={username}
              placeholder={"Username"}
              onChange={(e) => updateUsername(e.target.value)}
            />
            <input
              type="password"
              value={password}
              onChange={(e) => updatePassword(e.target.value)}
            />
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => updateConfirmPassword(e.target.value)}
            />
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

import TextInput from "../components/Input";
import { Link } from "react-router-dom";
export default function Register() {
  return (
    <>
      <>
        <header>
          <h3>Register Page</h3>
        </header>
        <main>
          <form action="">
            <TextInput id="username" />
            <TextInput id="email" />
            <TextInput id="password" />
            <TextInput id="confirm-password" />
            <button type="submit"></button>
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

import TextInput from "../components/Input";
import { Link } from "react-router-dom";
export default function Login() {
  return (
    <>
      <header>
        <h1>Login Page</h1>
      </header>
      <main>
        <form action="" className="">
          <TextInput id="email" />
          <TextInput id="password" />
          <button type="submit"></button>
        </form>
      </main>

      <div className="account-setup">
        <Link to="/register">Sign up</Link>
      </div>
      <footer>
        <p> follow us</p>
      </footer>
    </>
  );
}

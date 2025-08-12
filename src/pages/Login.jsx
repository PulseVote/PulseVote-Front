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
          <TextInput id="email" placeholder={"Email"} />
          <TextInput id="password" placeholder={"Password"} />
          <button type="submit" onClick={()=>{}}>Sign in</button> 
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

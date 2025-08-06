import { NavLink } from "react-router-dom";

export function MyAppNav() {
  return (
    <nav>
      <NavLink to="/" end>
        Home
      </NavLink>
      <NavLink to="/login" end>
        Trending Concerts
      </NavLink>
      <NavLink to="/register">All Concerts</NavLink>
      <NavLink to="/account">Account</NavLink>
    </nav>
  );
}

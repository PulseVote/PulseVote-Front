import { Outlet } from "react-router-dom";
import Register from "../pages/Register";
import Login from "../pages/Login";

export default function AuthLayout() {
  return (
    <>
      <Outlet />
    </>
  );
}

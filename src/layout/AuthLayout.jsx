import { Outlet } from "react-router-dom";
import Register from "../pages/Register";
import Login from "../pages/Login";
import PageHeading from "../components/PageHeading";

export default function AuthLayout() {
  return (
    <>
      <Form class="auth-card">
        <div className="top">
          <PageHeading>Some heading</PageHeading>
        </div>
      </Form>
      <Outlet />
    </>
  );
}

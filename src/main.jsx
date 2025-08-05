import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./index.css";
import App from "./App.jsx";
import ReactDOM from "react-dom/client";
import AuthLayout from "./layout/AuthLayout.jsx";
import Register from "./pages/Register.jsx";
import Login from "./pages/Login.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    Component: App, // i will add an about page soon
    children: [
      {
        path: "auth",
        Component: AuthLayout,
        children: [
          {
            path: "register",
            Component: Register,
          },
          {
            path: "login",
            Component: Login,
          },
        ],
      },
    ],
  },
]);
const root = document.getElementById("root");
ReactDOM.createRoot(root).render(<RouterProvider router={router} />);

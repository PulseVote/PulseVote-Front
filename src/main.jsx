import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./index.css";
import App from "./App.jsx";
import ReactDOM from "react-dom/client";

import Register from "./pages/Register.jsx";
import Login from "./pages/Login.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import AppLayout from "./layout/AppLayout.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    Component: AppLayout, // <-- root layout
    children: [
      { index: true, Component: App }, // default page
      { path: "dashboard", Component: Dashboard },
     // { path: "polls", Component: Polls },
      //{ path: "profile", Component: Profile },
    ],
  },
  { path: "/login", Component: Login },
  { path: "/register", Component: Register },
]);
const root = document.getElementById("root");
ReactDOM.createRoot(root).render(<RouterProvider router={router} />);

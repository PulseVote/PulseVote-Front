import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter, Routes } from "react-router";
import ReactDom from "react-dom/client";
const root = document.getElementById("root");
ReactDom.createRoot(root).render(
  <BrowserRouter>
    <Routes>
      <Route index path="/" element={<App />} />
    </Routes>
  </BrowserRouter>
);

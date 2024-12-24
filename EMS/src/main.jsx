import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

import { BrowserRouter } from "react-router";
import MyContext from "../contex/Myconext.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <MyContext>
      <StrictMode>
        <App />
      </StrictMode>
    </MyContext>
  </BrowserRouter>
);

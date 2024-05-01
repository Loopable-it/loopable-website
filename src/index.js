import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "./i18n";
import fontAwesomeSetup from "./modules/fontAwesomeSetup";

const root = ReactDOM.createRoot(document.getElementById("root"));
fontAwesomeSetup();
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();

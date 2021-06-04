import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { ToggleProvider } from "./contexts/toggleContext";
import "./index.css";
import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <ToggleProvider>
        <App />
      </ToggleProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);

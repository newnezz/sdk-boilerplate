import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";

// components
import { App } from "@components/App";

// context
import { GlobalProvider } from "./context";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <GlobalProvider>
    <Router>
      <App />
    </Router>
  </GlobalProvider>,
);

import React from "react";
import ReactDOM from "react-dom/client";

import App from "./app/App";
import "./app/scss/style.scss";
import ThemeProvider from "./app/providers/ThemeProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
);

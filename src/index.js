import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "./style.scss";

const root = ReactDOM.createRoot(document.getElementById("root"));

const themes = {
  dark: "dark",
  light: "",
};

function Button() {
  const [theme, setTheme] = useState(themes.dark);

  function onUpdateTheme() {
    if (theme === themes.dark) setTheme(themes.light);
    if (theme === themes.light) setTheme(themes.dark);
  }

  return (
    <input
      type="button"
      value="Theme"
      className={`button ${theme}`}
      onClick={onUpdateTheme}
    />
  );
}

root.render(<Button />);

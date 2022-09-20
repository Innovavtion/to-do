import React from "react";
import ReactDOM from "react-dom/client";
import "./style.scss";

const root = ReactDOM.createRoot(document.getElementById("root"));

function Button() {
  return <button className="color_button">Button</button>;
}

root.render(<Button />);

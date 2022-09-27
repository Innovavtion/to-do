import React from "react";

function FunctionalPanel({ children, className }) {
  return <div className={`functions-panel ${className}`}>{children}</div>;
}

export default FunctionalPanel;

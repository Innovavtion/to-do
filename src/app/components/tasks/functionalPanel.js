import React from "react";

function functionalPanel({ children, className }) {
  return <div className={`functions-panel ${className}`}>{children}</div>;
}

export default functionalPanel;

import React from "react";

import Icons from "../icons/index";

function Setting({ value, onChange }) {
  return (
    <div className="setting">
      <Icons name="setting" size="40" />
      <input
        type="checkbox"
        className="toggle-button"
        onClick={onChange}
        checked={value}
      />
    </div>
  );
}

export default Setting;

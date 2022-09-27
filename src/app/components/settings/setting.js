import React from "react";

import Icons from "../icons/index";

function Setting() {
  return (
    <div className="setting">
      <Icons name="setting" size="40" />
      <input type="checkbox" className="toggle-button" />
    </div>
  );
}

export default Setting;
